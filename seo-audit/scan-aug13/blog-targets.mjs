// Which blog posts should link to city pages, and which need CTR work?
//
// Step 2 (internal links): a link only passes useful signal if the source page is
// topically adjacent. A post about GTA/Ontario mosquito conditions linking to
// /toronto-mosquito-control is relevant; a post about bed bugs is not. Select on
// evidence — does the post already rank for Ontario/GTA-flavoured queries?
//
// Step 4 (CTR): rank by MISSING CLICKS, biggest first.
//
//   node blog-targets.mjs

import { readFileSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const DIR = dirname(fileURLToPath(import.meta.url))
const d = JSON.parse(readFileSync(resolve(DIR, 'gsc_full_scan.json'), 'utf-8'))
const p = (u) => u.replace('https://buzzskito.ca', '') || '/'

// queries each page ranks for
const byPage = new Map()
for (const r of d.query_page) {
  const path = p(r.page)
  if (!byPage.has(path)) byPage.set(path, [])
  byPage.get(path).push(r)
}

const GEO = /\b(ontario|toronto|gta|mississauga|brampton|oakville|burlington|hamilton|vaughan|markham|scarborough|etobicoke|north york|richmond hill|milton|caledon|halton|peel|durham|york region|canada|canadian)\b/i

const pages = d.pages
  .filter((r) => r.page.startsWith('https://buzzskito.ca'))
  .map((r) => ({ ...r, path: p(r.page) }))
  .filter((r) => r.path.startsWith('/blog/') || (!r.path.includes('mosquito-control') && !r.path.includes('tick-spray') && r.path !== '/'))

// ── step 2: GTA-relevant, high-traffic posts worth wiring to city pages ────
const geoRelevant = pages
  .map((r) => {
    const qs = byPage.get(r.path) || []
    const geoQ = qs.filter((q) => GEO.test(q.query))
    const geoImpr = geoQ.reduce((s, q) => s + q.impressions, 0)
    return { ...r, geoQueries: geoQ.length, geoImpr, topGeo: geoQ.sort((a, b) => b.impressions - a.impressions).slice(0, 3).map((q) => q.query) }
  })
  .filter((r) => r.geoImpr >= 150 && r.impressions >= 1000)
  .sort((a, b) => b.geoImpr - a.geoImpr)

console.log('='.repeat(100))
console.log('STEP 2 — blog posts that already rank for GEO queries (link these to city pages)')
console.log('='.repeat(100))
console.log('   impr    geo-impr  geoQ   page')
for (const r of geoRelevant.slice(0, 30)) {
  console.log(`  ${String(r.impressions).padStart(6)} ${String(r.geoImpr).padStart(9)} ${String(r.geoQueries).padStart(5)}   ${r.path}`)
  console.log(`         └─ ${r.topGeo.join(' · ')}`)
}

// ── step 4: CTR gap, biggest missing clicks ───────────────────────────────
const EXPECTED = (x) =>
  x <= 1.5 ? 0.26 : x <= 2.5 ? 0.145 : x <= 3.5 ? 0.10 : x <= 4.5 ? 0.073 :
  x <= 5.5 ? 0.055 : x <= 6.5 ? 0.042 : x <= 7.5 ? 0.033 : x <= 8.5 ? 0.027 :
  x <= 9.5 ? 0.023 : x <= 10.5 ? 0.020 : x <= 15 ? 0.013 : x <= 20 ? 0.008 : 0.003

const ctr = pages
  .filter((r) => r.impressions >= 5000 && r.position <= 11)
  .map((r) => ({ ...r, missing: Math.round(r.impressions * EXPECTED(r.position)) - r.clicks }))
  .filter((r) => r.missing > 150)
  .sort((a, b) => b.missing - a.missing)

console.log('\n' + '='.repeat(100))
console.log('STEP 4 — biggest CTR gaps (meta description + rich-result schema; NO title changes)')
console.log('='.repeat(100))
console.log('   impr    clk    CTR      pos   missing   page')
for (const r of ctr.slice(0, 24)) {
  const top = (byPage.get(r.path) || []).sort((a, b) => b.impressions - a.impressions)[0]
  console.log(`  ${String(r.impressions).padStart(6)} ${String(r.clicks).padStart(5)} ${((r.clicks / r.impressions) * 100).toFixed(2).padStart(6)}% ${String(r.position).padStart(6)} ${String(r.missing).padStart(8)}   ${r.path}`)
  if (top) console.log(`         └─ top query: "${top.query}" (${top.impressions} impr, pos ${top.position})`)
}
console.log(`\n  ${ctr.length} pages, ${ctr.reduce((s, r) => s + r.missing, 0).toLocaleString()} missing clicks/mo total`)

writeFileSync(resolve(DIR, 'blog-targets.json'), JSON.stringify({
  geoLinkTargets: geoRelevant.slice(0, 24).map((r) => ({ path: r.path, impressions: r.impressions, geoImpr: r.geoImpr, topGeo: r.topGeo })),
  ctrTargets: ctr.slice(0, 24).map((r) => {
    const top = (byPage.get(r.path) || []).sort((a, b) => b.impressions - a.impressions).slice(0, 5)
    return { path: r.path, impressions: r.impressions, clicks: r.clicks, position: r.position, missing: r.missing,
      topQueries: top.map((q) => ({ q: q.query, impr: q.impressions, pos: q.position })) }
  }),
}, null, 2))
console.log('\nwrote blog-targets.json')
