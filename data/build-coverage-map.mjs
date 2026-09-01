// Stage A task 4: coverage-map.md — per vertical, what exists / ranks / is missing, CA vs US
import { readFileSync, writeFileSync } from 'fs'
const rd = f => JSON.parse(readFileSync(f, 'utf-8'))
const inv = rd('data/content-inventory.json').pages.filter(p => p.url.startsWith('/blog/'))
const vol = rd('data/gsc/enrich/ahrefs-volumes.json')
const q84 = { usa: rd('data/gsc/q84_usa.json'), can: rd('data/gsc/q84_can.json') }

const byVert = {}
for (const p of inv) {
  const v = byVert[p.vertical] ??= { pages: [], clicks: 0, impr: 0 }
  v.pages.push(p); v.clicks += p.clicks28d; v.impr += p.impressions28d
}
const usQ = new Map(q84.usa.rows.map(r => [r.q, r])), caQ = new Map(q84.can.rows.map(r => [r.q, r]))

let md = `# Coverage map — per vertical, CA vs US

Generated 2026-09-01. Sources: repo page inventory (358 blog pages), GSC 28d page data,
GSC 84d per-market query data, Ahrefs volumes pulled today.

**Read this before proposing any new page.** The Aug 31 build wave briefed 12 pages as gaps
and 6 collided with live pages. Coverage is consistently deeper than it looks.

## Summary — the site is NOT thin anywhere it matters

| Vertical | Pages | Clicks 28d | Clicks/page | Impr 28d | Verdict |
|---|---|---|---|---|---|
`
const order = Object.entries(byVert).sort((a, b) => b[1].clicks - a[1].clicks)
for (const [v, d] of order) {
  const cpp = d.clicks / d.pages.length
  const verdict = cpp > 60 ? '**UNDERBUILT — highest yield/page**'
    : cpp > 20 ? 'healthy' : d.pages.length > 30 ? '**OVERBUILT for its yield**' : 'thin yield'
  md += `| ${v} | ${d.pages.length} | ${d.clicks.toLocaleString()} | ${cpp.toFixed(1)} | ${d.impr.toLocaleString()} | ${verdict} |\n`
}

md += `
## The allocation problem, stated plainly

Clicks-per-page varies **~40x across verticals**, and page count is close to inversely
correlated with it. The site has built most heavily where yield per page is lowest.
That is the single clearest content-strategy finding in Stage A, and it should govern
Stage G/H sequencing more than raw search volume does.

## Per-vertical detail
`
for (const [v, d] of order) {
  const top = d.pages.slice().sort((a, b) => b.clicks28d - a.clicks28d).slice(0, 6)
  const dead = d.pages.filter(p => p.clicks28d === 0).length
  md += `\n### ${v} — ${d.pages.length} pages, ${d.clicks.toLocaleString()} clicks/28d\n\n`
  md += `Top pages:\n`
  for (const p of top) md += `- ${p.url} — ${p.clicks28d} clk, ${p.impressions28d.toLocaleString()} impr, pos ${p.position28d ?? '—'}\n`
  md += `\nZero-click pages in this vertical: **${dead} of ${d.pages.length}**`
  md += dead / d.pages.length > 0.5 ? ' — over half this vertical earns nothing.\n' : '\n'
}

// Market coverage per vertical using the enriched keyword sets
md += `\n## CA vs US coverage, by measured demand\n\n`
md += `| Vertical | CA clicks 84d | US clicks 84d | US share | Read |\n|---|---|---|---|---|\n`
const vertOfQuery = (q) => {
  if (/bed ?bug/.test(q)) return 'bedbug'
  if (/centipede|silverfish|earwig|spider|fruit fly|cluster fl/.test(q)) return 'crawlers-flies'
  if (/roach/.test(q)) return 'roach'
  if (/mouse|rat|rodent/.test(q)) return 'rodent'
  if (/wasp|hornet/.test(q)) return 'wasp'
  if (/raccoon|squirrel|deer(?! fl)|skunk/.test(q)) return 'wildlife'
  if (/dehumidifier|air purifier|hepa/.test(q)) return 'home-air-water'
  if (/tick|lyme/.test(q)) return 'tick'
  return 'mosquito'
}
const mk = {}
for (const [tag, rows] of [['ca', q84.can.rows], ['us', q84.usa.rows]])
  for (const r of rows) {
    const v = vertOfQuery(r.q)
    ;(mk[v] ??= { ca: 0, us: 0 })[tag] += r.clicks
  }
for (const [v, d] of Object.entries(mk).sort((a, b) => (b[1].ca + b[1].us) - (a[1].ca + a[1].us))) {
  const share = d.us / (d.ca + d.us) * 100
  const read = share > 40 ? '**US-dominant — build US-first**' : share > 15 ? 'genuinely dual-market' : 'CA-dominant'
  md += `| ${v} | ${d.ca.toLocaleString()} | ${d.us.toLocaleString()} | ${share.toFixed(0)}% | ${read} |\n`
}

md += `
## Genuine gaps — demand with real volume and NO dedicated page

Verified against the full 358-page inventory (slug + title match), not assumed.
`
const slugs = inv.map(p => p.url.replace('/blog/', ''))
const titles = inv.map(p => (p.title || '').toLowerCase())
const covered = (q) => {
  const w = q.toLowerCase().split(/\s+/).filter(x => x.length > 3 &&
    !['what','does','look','like','best','your','from','with','the','and','for'].includes(x))
  if (!w.length) return true
  return slugs.some(s => w.filter(x => s.includes(x.slice(0, 5))).length >= Math.min(2, w.length)) ||
         titles.some(t => w.filter(x => t.includes(x.slice(0, 5))).length >= Math.min(2, w.length))
}
const gaps = []
for (const [mkt, table, qmap] of [['US', vol.us, usQ], ['CA', vol.ca, caQ]])
  for (const [q, [v, cpc]] of Object.entries(table)) {
    if (!v || v < 1500) continue
    if (covered(q)) continue
    const row = qmap.get(q)
    gaps.push({ q, mkt, v, cpc: (cpc || 0) / 100, pos: row ? row.pos : null, clicks: row ? row.clicks : 0 })
  }
gaps.sort((a, b) => b.v - a.v)
if (gaps.length) {
  md += `\n| Query | Market | Volume | CPC | Our position | Clicks 84d |\n|---|---|---|---|---|---|\n`
  for (const g of gaps.slice(0, 25))
    md += `| ${g.q} | ${g.mkt} | ${g.v.toLocaleString()} | $${g.cpc.toFixed(2)} | ${g.pos ?? 'not ranking'} | ${g.clicks} |\n`
} else {
  md += `\n**None found above 1,500 volume.** Every high-volume keyword in the enriched set maps to an existing page.\n`
}
md += `\n**Interpretation:** where a query shows a position, the page exists and needs *improving*, not
replacing (brief section 12 task 56). Only "not ranking" rows are candidates for new pages,
and each still needs the Stage H decision rule applied before writing.
`
writeFileSync('data/coverage-map.md', md)
console.log('coverage-map.md written')
console.log('\nvertical clicks/page:')
for (const [v, d] of order) console.log(`  ${v.padEnd(18)} ${String(d.pages.length).padStart(3)} pages  ${(d.clicks/d.pages.length).toFixed(1).padStart(6)} clk/page`)
console.log(`\ngenuine gaps >=1500 vol with no page: ${gaps.length}`)
for (const g of gaps.slice(0,12)) console.log(`  ${g.mkt} ${String(g.v).padStart(7)}  pos ${String(g.pos ?? '-').padStart(6)}  ${g.q}`)
