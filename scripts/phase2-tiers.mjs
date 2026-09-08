// Phase 2 — assign fix tiers. Reads the Phase 1 classification, excludes protected pages,
// and excludes anything inside a live experiment from tiers that would change its title.
import fs from 'node:fs'
import { execSync } from 'node:child_process'

const csv = fs.readFileSync('docs/audit/page-classification.csv', 'utf8').trim().split('\n')
const head = csv[0].split(',')
const rows = csv.slice(1).map(l => {
  const c = l.split(','); const o = {}; head.forEach((k, i) => o[k] = c[i]); return o
}).map(r => ({
  ...r, clicks: +r.clicks, impressions: +r.impressions, position: +r.position,
  ctr_residual: +r.ctr_residual, lost_clicks: +r.lost_clicks, word_count: +r.word_count || 0,
}))

// --- protected pages (Phase 0)
const protectedMd = fs.readFileSync('docs/audit/protected-pages.md', 'utf8')
const PROTECTED = new Set([...protectedMd.matchAll(/^- `([^`]+)`$/mg)].map(m => m[1]))

// --- live experiments: never touch a title on these
const EXP = new Set()
const st = JSON.parse(fs.readFileSync('data/exp-slug-test.json', 'utf8'))
st.treatment.forEach(t => EXP.add('/blog/' + t.newSlug))
st.control.forEach(t => EXP.add('/blog/' + t.slug))
const tt = JSON.parse(fs.readFileSync('data/exp-title-test.json', 'utf8'));
(tt.pages || []).forEach(p => EXP.add('/blog/' + p.slug));
((tt.wave2 && tt.wave2.pages) || []).forEach(p => EXP.add('/blog/' + p.slug))
JSON.parse(fs.readFileSync('data/audit-upgrade-targets.json', 'utf8')).slice(0, 18).forEach(o => EXP.add('/blog/' + o.s))

const onDisk = (u) => r2f(u) && fs.existsSync(r2f(u))
function r2f(u) {
  if (!u || u.startsWith('http')) return null
  if (u.startsWith('/blog/')) return `app/blog/${u.slice(6).replace(/\/$/, '')}/page.tsx`
  return `app${u === '/' ? '' : u}/page.tsx`
}
const lastMod = (u) => {
  const f = r2f(u); if (!f || !fs.existsSync(f)) return ''
  try { return execSync(`git log -1 --format=%ad --date=short -- "${f}"`, { encoding: 'utf8' }).trim() } catch { return '' }
}

// www. duplicates are a separate finding, not a tier
const wwwDupes = rows.filter(r => /^https?:\/\/www\./.test(r.url))
const live = rows.filter(r => !/^https?:\/\/www\./.test(r.url))

const eligible = live.filter(r => !PROTECTED.has(r.url) && onDisk(r.url))
const notOnDisk = live.filter(r => !onDisk(r.url) && !PROTECTED.has(r.url))

const t1 = eligible.filter(r => r.intent === 'commercial' && r.ctr_residual < -0.5 && r.impressions > 3000)
const t1open = t1.filter(r => !EXP.has(r.url))
const t1held = t1.filter(r => EXP.has(r.url))
const t2 = eligible.filter(r => r.has_affiliate_link === 'yes' && r.clicks > 100)
const t3 = eligible.filter(r => r.clicks > 200)
const t4 = eligible.filter(r => r.intent === 'question' && r.ctr_residual < -0.5)
const t5 = eligible.filter(r => r.clicks === 0)

const sum = (a, k) => a.reduce((s, r) => s + r[k], 0)
const fmt = n => n.toLocaleString()

const L = []
L.push('# Fix tiers — Phase 2')
L.push('')
L.push('Built 2026-09-08 from `page-classification.csv` (180 days, 757 GSC URLs).')
L.push('')
L.push('**Exclusions applied before tiering:**')
L.push(`- ${PROTECTED.size} protected pages (Phase 0) — removed from every tier.`)
L.push(`- ${notOnDisk.length} GSC URLs with no page on disk (old or renamed) — cannot be edited, listed separately.`)
L.push(`- ${wwwDupes.length} \`www.\` duplicate URLs — a separate finding, see the bottom.`)
L.push(`- ${EXP.size} pages inside a live experiment — eligible for tiers, but **held out of Tier 1**, because changing a title there destroys a running measurement.`)
L.push('')
L.push('## Counts')
L.push('')
L.push('| Tier | What | Pages | Impressions | Clicks |')
L.push('|---|---|---|---|---|')
L.push(`| **1** | title/meta fix | **${t1open.length}** (+${t1held.length} held) | ${fmt(sum(t1open, 'impressions'))} | ${fmt(sum(t1open, 'clicks'))} |`)
L.push(`| **2** | reviews retrofit | **${t2.length}** | ${fmt(sum(t2, 'impressions'))} | ${fmt(sum(t2, 'clicks'))} |`)
L.push(`| **3** | internal link sources | **${t3.length}** | ${fmt(sum(t3, 'impressions'))} | ${fmt(sum(t3, 'clicks'))} |`)
L.push(`| **4** | AI Overview casualties | **${t4.length}** | ${fmt(sum(t4, 'impressions'))} | ${fmt(sum(t4, 'clicks'))} |`)
L.push(`| **5** | dead weight (0 clicks/180d) | **${t5.length}** | ${fmt(sum(t5, 'impressions'))} | 0 |`)
L.push('')

const tbl = (a, cols) => {
  const out = ['| ' + cols.join(' | ') + ' |', '|' + cols.map(() => '---').join('|') + '|']
  for (const r of a) out.push('| ' + cols.map(c => {
    if (c === 'URL') return '`' + r.url + '`'
    if (c === 'impr') return fmt(r.impressions)
    if (c === 'clicks') return fmt(r.clicks)
    if (c === 'pos') return r.position
    if (c === 'residual') return r.ctr_residual + 'pp'
    if (c === 'lost') return fmt(Math.abs(r.lost_clicks))
    if (c === 'words') return fmt(r.word_count)
    if (c === 'last modified') return lastMod(r.url)
    if (c === 'top query') return r.top_query
    return ''
  }).join(' | ') + ' |')
  return out
}

L.push('## Tier 1 — title/meta fix')
L.push('')
L.push('commercial intent, residual worse than −0.5pp, impressions over 3,000.')
L.push('')
L.push(...tbl(t1open.sort((a, b) => a.lost_clicks - b.lost_clicks), ['URL', 'impr', 'clicks', 'pos', 'residual', 'lost', 'top query']))
L.push('')
if (t1held.length) {
  L.push(`**Held out — ${t1held.length} pages that qualify but are inside a live experiment.** Their titles were`)
  L.push('rewritten within the last week and are being measured to 2026-10-15. Touching them now destroys')
  L.push('the comparison and the only site-specific evidence about whether title rewrites work here.')
  L.push('')
  L.push(...tbl(t1held.sort((a, b) => a.lost_clicks - b.lost_clicks), ['URL', 'impr', 'residual', 'lost']))
  L.push('')
}

L.push('## Tier 2 — reviews retrofit')
L.push('')
L.push('has an affiliate link and over 100 clicks in 180 days.')
L.push('')
L.push(...tbl(t2.sort((a, b) => b.clicks - a.clicks).slice(0, 40), ['URL', 'impr', 'clicks', 'pos', 'top query']))
if (t2.length > 40) L.push(`\n…and ${t2.length - 40} more in the CSV.`)
L.push('')

L.push('## Tier 3 — internal link sources')
L.push('')
L.push('over 200 clicks in 180 days — these are the pages with equity to route.')
L.push('')
L.push(...tbl(t3.sort((a, b) => b.clicks - a.clicks).slice(0, 30), ['URL', 'impr', 'clicks', 'pos']))
if (t3.length > 30) L.push(`\n…and ${t3.length - 30} more in the CSV.`)
L.push('')

L.push('## Tier 4 — AI Overview casualties')
L.push('')
L.push(`**${fmt(sum(t4, 'impressions'))} impressions and ${fmt(Math.abs(sum(t4, 'lost_clicks')))} clicks below benchmark are parked here.**`)
L.push('')
L.push('The brief says take no action. **I recommend changing that to "hold until 2026-10-15"** — see')
L.push('`finding1-control-test.md`. The premise for this tier did not survive a page-level control:')
L.push('within-page and position-matched at positions 4–7, question queries *out-click* commercial ones')
L.push('(3.51% vs 2.40%). Three of the largest pages here already have rewritten titles in a live')
L.push('experiment that reports 2026-10-15 and will answer this with real money.')
L.push('')
L.push(...tbl(t4.sort((a, b) => a.lost_clicks - b.lost_clicks), ['URL', 'impr', 'clicks', 'pos', 'residual', 'lost']))
L.push('')

L.push('## Tier 5 — dead weight')
L.push('')
L.push(`${t5.length} pages, ${fmt(sum(t5, 'impressions'))} impressions, **zero clicks in 180 days**.`)
L.push('')
L.push('Recommendations only. **Nothing here is executed** — and none of it can be until 2026-10-15,')
L.push('because redirecting or noindexing changes URLs while a randomized slug test is running.')
L.push('')
L.push(...tbl(t5.sort((a, b) => b.impressions - a.impressions).slice(0, 50), ['URL', 'impr', 'pos', 'words', 'last modified']))
if (t5.length > 50) L.push(`\n…and ${t5.length - 50} more in the CSV.`)
L.push('')

L.push('## Separate finding — `www.` duplicate URLs')
L.push('')
L.push(`GSC is reporting **${wwwDupes.length} URLs on \`www.buzzskito.ca\`** alongside their non-www twins —`)
L.push(`${fmt(sum(wwwDupes, 'impressions'))} impressions and ${fmt(sum(wwwDupes, 'clicks'))} clicks.`)
L.push('Several rank well (`/toronto-mosquito-control` at 1.5, `/oakville-tick-spray` at 1.0), so this is')
L.push('real indexed duplication splitting signal with the canonical host, not a reporting artifact.')
L.push('')
L.push('This is a **hosting/redirect** fix, not a content one, and it touches service pages — so it is')
L.push('flagged for Diogo rather than actioned. Worth checking whether the www host 301s to the apex.')
L.push('')
L.push(...tbl(wwwDupes.sort((a, b) => b.impressions - a.impressions).slice(0, 15), ['URL', 'impr', 'clicks', 'pos']))

fs.writeFileSync('docs/audit/fix-tiers.md', L.join('\n'))

console.log('TIER COUNTS')
console.log('  Tier 1 title/meta      ' + String(t1open.length).padStart(4) + '   (+' + t1held.length + ' held in experiments)')
console.log('  Tier 2 reviews         ' + String(t2.length).padStart(4))
console.log('  Tier 3 link sources    ' + String(t3.length).padStart(4))
console.log('  Tier 4 AIO casualties  ' + String(t4.length).padStart(4) + '   ' + fmt(sum(t4, 'impressions')) + ' impressions parked')
console.log('  Tier 5 dead weight     ' + String(t5.length).padStart(4) + '   ' + fmt(sum(t5, 'impressions')) + ' impressions, 0 clicks')
console.log()
console.log('  excluded: ' + PROTECTED.size + ' protected, ' + notOnDisk.length + ' not on disk, ' + wwwDupes.length + ' www duplicates')
console.log('  wrote docs/audit/fix-tiers.md')
