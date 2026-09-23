// Phase 7 — the repeatable monthly loop.
//
// What it does, every month, in one command:
//   1. reads the newest Amazon tracking-ID CSV you dropped into data/amazon/
//   2. recomputes earnings-per-click per tag from it ("Other" = tick, verified)
//   3. re-inventories every Amazon link (scripts/amazon-inventory.mjs)
//   4. joins to the latest 90-day GSC pull (data/gsc/gsc90.json)
//   5. writes reports/monthly_review_<YYYY-MM>.md with:
//        - EPC by tag, month over month
//        - the next 10 pages to FIX (real traffic, weak/late CTA, highest recoverable $)
//        - the next 10 pages to WRITE (from reports/new_pages_plan.csv reserve rows)
//        - the 10 pages that LOST the most clicks since last month
//
// Run monthly:
//   1. Amazon Associates → Reports → Tracking ID → last 30 days → download CSV → save as
//      data/amazon/tracking-id-YYYY-MM-DD.csv   (any name; newest file by mtime is used)
//   2. python scripts/pull-gsc-90d.py            (needs C:\Users\buzzs\Documents\mcp-gsc\token.json)
//   3. node scripts/monthly_review.mjs
//
import { readFileSync, readdirSync, writeFileSync, existsSync, statSync } from 'fs'
import { join } from 'path'
import { execSync } from 'child_process'

const ROOT = process.cwd()
const die = m => { console.error(m); process.exit(1) }

// ---- 1. newest Amazon tracking-ID CSV ----
const amzDir = join(ROOT, 'data/amazon')
const csvs = existsSync(amzDir) ? readdirSync(amzDir).filter(f => f.toLowerCase().endsWith('.csv')).map(f => ({ f, t: statSync(join(amzDir, f)).mtimeMs })).sort((a, b) => b.t - a.t) : []
if (!csvs.length) die('No CSV in data/amazon/. Download the Tracking ID report from Amazon Associates and drop it there.')
const amzFile = join(amzDir, csvs[0].f)
const amz = readFileSync(amzFile, 'utf8').replace(/^\uFEFF/, '').trim().split(/\r?\n/)
const hdr = amz[0].split(',').map(s => s.trim())
const iTag = hdr.findIndex(h => /tracking id/i.test(h)), iClk = hdr.findIndex(h => /^clicks$/i.test(h)), iEarn = hdr.findIndex(h => /total earnings/i.test(h))
if (iTag < 0 || iClk < 0 || iEarn < 0) die(`Unexpected columns in ${csvs[0].f}: ${hdr.join(' | ')}`)
const tagRows = amz.slice(1).map(l => l.split(',')).map(c => ({ tag: c[iTag].trim(), clicks: +c[iClk] || 0, earn: parseFloat(c[iEarn]) || 0 }))
const totalClicks = tagRows.reduce((a, r) => a + r.clicks, 0), totalEarn = tagRows.reduce((a, r) => a + r.earn, 0)

// EPC per cluster. Amazon folds tick/ant/fogger/airpurifier into "Other"; tick is ~85% of that
// traffic on this site, so "Other" is read as tick and the three small ones inherit its rate.
const EPC = {}
for (const r of tagRows) {
  const m = r.tag.match(/^buzzskito-([a-z]+)-20$/)
  if (m) EPC[m[1]] = r.clicks ? r.earn / r.clicks : 0
}
const other = tagRows.find(r => /^other$/i.test(r.tag))
if (other) { const e = other.clicks ? other.earn / other.clicks : 0; for (const t of ['tick', 'ant', 'fogger', 'airpurifier']) if (EPC[t] === undefined) EPC[t] = e }
const epcOf = t => EPC[t] ?? (totalClicks ? totalEarn / totalClicks : 0.18)

// ---- 2. fresh inventory ----
execSync('node scripts/amazon-inventory.mjs', { cwd: ROOT, stdio: 'inherit' })
const stats = JSON.parse(readFileSync(join(ROOT, 'reports/page_link_stats.json'), 'utf8'))

// ---- 3. GSC ----
const gscPath = join(ROOT, 'data/gsc/gsc90.json')
if (!existsSync(gscPath)) die('data/gsc/gsc90.json missing — run: python scripts/pull-gsc-90d.py')
const gsc = JSON.parse(readFileSync(gscPath, 'utf8'))
const slug = u => u.replace(/^https?:\/\/[^/]+/, '').replace(/\/$/, '') || '/'
const clicks = Object.fromEntries(gsc.pages.map(p => [slug(p.page), p]))
const CA = gsc.ca_share ?? 0.7, CLICKOUT = totalClicks && gsc.total_clicks ? totalClicks / (gsc.total_clicks / 3) : 0.27

// ---- 4. economics ----
const rows = stats.map(s => {
  const g = clicks[s.page_path] || { clicks: 0, impressions: 0, position: 0 }
  const ca = g.clicks * CA, epc = epcOf(s.topic)
  const est = ca / 3 * CLICKOUT * epc
  const late = s.first_link_words !== null && s.first_link_words > 600
  const weak = s.links === 0 ? 'no links' : late ? `first link @ word ${s.first_link_words}` : s.links <= 2 ? `only ${s.links} link(s)` : ''
  const factor = s.links === 0 ? 1 : late ? 0.7 : s.links <= 2 ? 0.4 : 0
  return { ...s, clicks90: g.clicks, imp90: g.impressions, pos: g.position, epc, est, weak, recoverable: est * factor }
})

// previous month's snapshot for deltas
const prevFiles = existsSync(join(ROOT, 'reports')) ? readdirSync(join(ROOT, 'reports')).filter(f => /^monthly_review_\d{4}-\d{2}\.json$/.test(f)).sort() : []
const prev = prevFiles.length ? JSON.parse(readFileSync(join(ROOT, 'reports', prevFiles[prevFiles.length - 1]), 'utf8')) : null

const stamp = new Date().toISOString().slice(0, 7)
const fix = [...rows].filter(r => r.weak && r.clicks90 >= 15).sort((a, b) => b.recoverable - a.recoverable).slice(0, 10)
let write = []
const planPath = join(ROOT, 'reports/new_pages_plan.csv')
if (existsSync(planPath)) {
  const lines = readFileSync(planPath, 'utf8').split(/\r?\n/).filter(Boolean)
  const h = lines[0].split(',')
  const iQ = h.indexOf('target_query'), iS = h.indexOf('suggested_slug'), iP = h.indexOf('priority_score'), iI = h.indexOf('gsc_impressions_90d')
  const existing = new Set(stats.map(s => s.page_path))
  write = lines.slice(1).map(l => l.split(',')).map(c => ({ q: c[iQ], slug: c[iS], pri: +c[iP] || 0, imp: c[iI] }))
    .filter(r => r.slug && !existing.has('/blog/' + r.slug.replace(/^\/?blog\//, ''))).sort((a, b) => b.pri - a.pri).slice(0, 10)
}
const lost = prev ? rows.map(r => ({ p: r.page_path, d: r.clicks90 - (prev.pages[r.page_path] || 0) })).filter(x => x.d < 0).sort((a, b) => a.d - b.d).slice(0, 10) : []

const f = n => '$' + n.toFixed(2)
const tagTable = tagRows.filter(r => r.clicks).sort((a, b) => (b.earn / b.clicks) - (a.earn / a.clicks)).map(r => {
  const p = prev?.epc?.[r.tag]; const e = r.clicks ? r.earn / r.clicks : 0
  return `| ${r.tag} | ${r.clicks} | ${f(r.earn)} | ${f(e)} | ${p !== undefined ? (e - p >= 0 ? '+' : '') + f(e - p) : '—'} |`
}).join('\n')

const md = `# Monthly affiliate review — ${stamp}

Amazon report: \`${csvs[0].f}\` — **${totalClicks.toLocaleString()} clicks, ${f(totalEarn)}, ${f(totalClicks ? totalEarn / totalClicks : 0)}/click**
GSC: ${gsc.window?.join(' → ')} — ${gsc.total_clicks?.toLocaleString()} clicks, Canada ${(CA * 100).toFixed(1)}% · implied click-out ${(CLICKOUT * 100).toFixed(0)}%

## Earnings per click by tag
| tag | clicks | earnings | EPC | Δ vs last month |
|---|---|---|---|---|
${tagTable}
${other ? `\n"Other" (${other.clicks} clicks, ${f(other.earn)}) is read as **tick** — Amazon does not itemise tick/ant/fogger/airpurifier.` : ''}

## Next 10 pages to FIX (real traffic, weak or late CTA)
| # | page | topic | 90d clicks | why weak | recoverable $/mo |
|---|---|---|---|---|---|
${fix.map((r, i) => `| ${i + 1} | ${r.page_path} | ${r.topic} | ${r.clicks90} | ${r.weak} | ${f(r.recoverable)} |`).join('\n')}

## Next 10 pages to WRITE
${write.length ? '| # | target query | slug | GSC imp/90d | priority |\n|---|---|---|---|---|\n' + write.map((r, i) => `| ${i + 1} | ${r.q} | ${r.slug} | ${r.imp} | ${r.pri.toFixed(1)} |`).join('\n') : '(no reports/new_pages_plan.csv, or every planned slug already exists)'}

## Biggest click losses since last review
${lost.length ? lost.map(x => `- ${x.p}: ${x.d}`).join('\n') : '(first run — no previous snapshot)'}

## Reminders
- Tick is the best cluster on the site. Never retag it. Fix tick pages before anything else at equal traffic.
- 48 slugs are frozen until 2026-10-15 (data/exp-slug-test.json).
- A new page earns a median $0.16/mo here; only write into demand GSC already shows.
`
writeFileSync(join(ROOT, `reports/monthly_review_${stamp}.md`), md)
writeFileSync(join(ROOT, `reports/monthly_review_${stamp}.json`), JSON.stringify({ stamp, epc: Object.fromEntries(tagRows.map(r => [r.tag, r.clicks ? r.earn / r.clicks : 0])), pages: Object.fromEntries(rows.map(r => [r.page_path, r.clicks90])) }))
console.log(`\nwrote reports/monthly_review_${stamp}.md — ${fix.length} to fix, ${write.length} to write`)
