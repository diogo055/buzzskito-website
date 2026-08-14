// Not all clicks are worth the same. Where is the traffic, and what is a click
// from each segment actually worth?
//
// Affiliate is measured: 27.9% of site clicks go on to Amazon, EPC $0.2263.
// Local service is measured from the books: a season customer averages ~$800.
//
//   node value-per-click.mjs

import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const DIR = dirname(fileURLToPath(import.meta.url))
const d = JSON.parse(readFileSync(resolve(DIR, 'gsc_full_scan.json'), 'utf-8'))

const sum = (a, k) => a.reduce((s, r) => s + r[k], 0)
const pct = (a, b) => ((a / b) * 100).toFixed(2) + '%'
const path = (u) => u.replace('https://buzzskito.ca', '') || '/'

const pages = d.pages.filter((r) => r.page.startsWith('https://buzzskito.ca'))

// ── classify every page ────────────────────────────────────────────────────
// Local service = anything that can produce a booking. The routes are FLAT and
// city-suffixed, not nested: `oakville-mosquito-control`, `burlington-tick-spray`,
// `best-mosquito-control-companies-toronto`. A leading-anchor regex misses all
// of them, so match on the suffix shape instead.
const LOCAL_SUFFIX = /-(mosquito-control|tick-spray|mosquito-spray|tick-control|mosquito-tick-control)$/
const LOCAL_EXACT = new Set([
  '/', '/quote', '/contact', '/about', '/reviews', '/pricing', '/services',
  '/areas', '/book', '/mosquito-control', '/tick-control', '/mosquito-control-cost',
  '/commercial-mosquito-control', '/estate-property-mosquito-control',
  '/daycare-camp-mosquito-tick-control', '/buzzskito-history',
])
const LOCAL_PREFIX = /^\/(best-mosquito-control-companies|buzzskito-vs-|areas|quote|contact)/
const isLocal = (p) =>
  LOCAL_EXACT.has(p) || LOCAL_SUFFIX.test(p) || LOCAL_PREFIX.test(p)

const local = pages.filter((r) => isLocal(path(r.page)))
const content = pages.filter((r) => !isLocal(path(r.page)))

const TOT_I = sum(pages, 'impressions'), TOT_C = sum(pages, 'clicks')

console.log('='.repeat(80))
console.log('WHERE THE TRAFFIC ACTUALLY IS')
console.log('='.repeat(80))
const row = (n, a) => console.log(
  `  ${n.padEnd(26)} ${String(a.length).padStart(4)} pages  ${String(sum(a, 'impressions')).padStart(7)} impr (${pct(sum(a, 'impressions'), TOT_I).padStart(6)})  ${String(sum(a, 'clicks')).padStart(5)} clk (${pct(sum(a, 'clicks'), TOT_C).padStart(6)})  CTR ${pct(sum(a, 'clicks'), sum(a, 'impressions'))}`)
row('LOCAL SERVICE (bookable)', local)
row('CONTENT (affiliate only)', content)

// ── what a click is worth in each lane ─────────────────────────────────────
const AZ_CLICKTHROUGH = 0.279     // measured: 2,126 Amazon clicks / 7,617 site clicks
const AZ_EPC = 0.2263             // measured
const AFFILIATE_PER_CLICK = AZ_CLICKTHROUGH * AZ_EPC

// Local: conservative. Of visitors landing on a bookable page, what share
// becomes a paying customer? Use a deliberately pessimistic 0.5%.
const LEAD_RATE = 0.005
const SEASON_VALUE = 800

console.log('\n' + '='.repeat(80))
console.log('WHAT ONE CLICK IS WORTH')
console.log('='.repeat(80))
console.log(`  affiliate click   ${(AZ_CLICKTHROUGH * 100).toFixed(1)}% go to Amazon x $${AZ_EPC} EPC   = $${AFFILIATE_PER_CLICK.toFixed(4)}`)
console.log(`  local click       ${(LEAD_RATE * 100).toFixed(1)}% book x $${SEASON_VALUE} season       = $${(LEAD_RATE * SEASON_VALUE).toFixed(2)}`)
console.log(`\n  A local click is worth ${((LEAD_RATE * SEASON_VALUE) / AFFILIATE_PER_CLICK).toFixed(0)}x an affiliate click.`)

console.log('\n  CURRENT 28-DAY EARNINGS BY LANE')
const localRev = sum(local, 'clicks') * LEAD_RATE * SEASON_VALUE
const contentRev = sum(content, 'clicks') * AFFILIATE_PER_CLICK
console.log(`    local   ${String(sum(local, 'clicks')).padStart(5)} clicks -> $${Math.round(localRev).toLocaleString().padStart(6)}`)
console.log(`    content ${String(sum(content, 'clicks')).padStart(5)} clicks -> $${Math.round(contentRev).toLocaleString().padStart(6)}`)
console.log(`\n  ${pct(sum(content, 'clicks'), TOT_C)} of your clicks produce ${pct(contentRev, localRev + contentRev)} of the revenue.`)

// ── the 30,000-click question, split by mix ────────────────────────────────
console.log('\n' + '='.repeat(80))
console.log('30,000 CLICKS/MONTH — WHAT IT PAYS, DEPENDING ON THE MIX')
console.log('='.repeat(80))
console.log('  local share   local clicks   content clicks   affiliate $   local $     total')
for (const share of [0.08, 0.20, 0.35, 0.50]) {
  const lc = Math.round(30_000 * share), cc = 30_000 - lc
  const l = lc * LEAD_RATE * SEASON_VALUE, c = cc * AFFILIATE_PER_CLICK
  console.log(`  ${(share * 100).toFixed(0).padStart(9)}%   ${String(lc).padStart(12)}   ${String(cc).padStart(14)}   ${('$' + Math.round(c).toLocaleString()).padStart(11)}   ${('$' + Math.round(l).toLocaleString()).padStart(9)}   ${('$' + Math.round(l + c).toLocaleString()).padStart(8)}`)
}
console.log(`\n  Today's mix is ${pct(sum(local, 'clicks'), TOT_C)} local.`)

// ── the CTR gap, page by page, where it is worth most ──────────────────────
const EXPECTED = (p) =>
  p <= 1.5 ? 0.26 : p <= 2.5 ? 0.145 : p <= 3.5 ? 0.10 : p <= 4.5 ? 0.073 :
  p <= 5.5 ? 0.055 : p <= 6.5 ? 0.042 : p <= 7.5 ? 0.033 : p <= 8.5 ? 0.027 :
  p <= 9.5 ? 0.023 : p <= 10.5 ? 0.020 : p <= 15 ? 0.013 : p <= 20 ? 0.008 : 0.003

const gap = pages
  .filter((r) => r.impressions >= 500 && r.position <= 12)
  .map((r) => {
    const missing = Math.round(r.impressions * EXPECTED(r.position)) - r.clicks
    const perClick = isLocal(path(r.page)) ? LEAD_RATE * SEASON_VALUE : AFFILIATE_PER_CLICK
    return { ...r, missing, worth: missing * perClick, local: isLocal(path(r.page)) }
  })
  .filter((r) => r.missing > 0)
  .sort((a, b) => b.worth - a.worth)

console.log('\n' + '='.repeat(80))
console.log('THE CTR GAP RANKED BY DOLLARS, NOT CLICKS — top 25')
console.log('='.repeat(80))
console.log('   lane    impr   pos    CTR now  missing clk   $/mo   page')
for (const r of gap.slice(0, 25))
  console.log(`  ${(r.local ? 'LOCAL' : 'aff  ').padEnd(6)} ${String(r.impressions).padStart(6)} ${String(r.position).padStart(5)}  ${pct(r.clicks, r.impressions).padStart(7)}  ${String(r.missing).padStart(9)}   ${('$' + Math.round(r.worth)).padStart(6)}   ${path(r.page)}`)

const localGap = gap.filter((r) => r.local)
console.log(`\n  Total recoverable: ${gap.reduce((s, r) => s + r.missing, 0).toLocaleString()} clicks/mo worth $${Math.round(gap.reduce((s, r) => s + r.worth, 0)).toLocaleString()}/mo`)
console.log(`  Of which LOCAL:    ${localGap.reduce((s, r) => s + r.missing, 0).toLocaleString()} clicks/mo worth $${Math.round(localGap.reduce((s, r) => s + r.worth, 0)).toLocaleString()}/mo  (${localGap.length} pages)`)
