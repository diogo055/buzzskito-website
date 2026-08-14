// What does 1M impressions + 30,000 clicks/month actually require?
//
// Current 28 days: 767,271 impressions, 7,629 clicks = 0.99% CTR.
// The target implies 3.0% CTR. So this is NOT a traffic problem — impressions
// are already 77% of the way there and growing 146% month over month. The entire
// gap is CTR, and the honest question is how much of the impression base can
// convert AT ALL.
//
//   node path-to-30k.mjs

import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const DIR = dirname(fileURLToPath(import.meta.url))
const d = JSON.parse(readFileSync(resolve(DIR, 'gsc_full_scan.json'), 'utf-8'))

const sum = (a, k) => a.reduce((s, r) => s + r[k], 0)
const pct = (a, b) => ((a / b) * 100).toFixed(2) + '%'

const pages = d.pages.filter((r) => r.page.startsWith('https://buzzskito.ca'))
const TOT_I = sum(pages, 'impressions'), TOT_C = sum(pages, 'clicks')

console.log('='.repeat(78))
console.log(`WHERE YOU ARE — 28 days ${d.current_window.start} to ${d.current_window.end}`)
console.log('='.repeat(78))
console.log(`  impressions  ${TOT_I.toLocaleString()}`)
console.log(`  clicks       ${TOT_C.toLocaleString()}`)
console.log(`  CTR          ${pct(TOT_C, TOT_I)}`)
console.log(`\n  TARGET: 1,000,000 impressions + 30,000 clicks = 3.00% CTR`)
console.log(`  impressions gap: +${((1_000_000 / TOT_I - 1) * 100).toFixed(0)}%   clicks gap: ${(30_000 / TOT_C).toFixed(1)}x`)

// ── where do the impressions actually sit, by position? ────────────────────
console.log('\n' + '='.repeat(78))
console.log('IMPRESSIONS BY POSITION — and what each band could yield')
console.log('='.repeat(78))
// Conservative CTR-by-position curve (same one used in the earlier audits).
const EXPECTED = (p) =>
  p <= 1.5 ? 0.26 : p <= 2.5 ? 0.145 : p <= 3.5 ? 0.10 : p <= 4.5 ? 0.073 :
  p <= 5.5 ? 0.055 : p <= 6.5 ? 0.042 : p <= 7.5 ? 0.033 : p <= 8.5 ? 0.027 :
  p <= 9.5 ? 0.023 : p <= 10.5 ? 0.020 : p <= 15 ? 0.013 : p <= 20 ? 0.008 : 0.003

const BANDS = [['1-3', 0, 3.5], ['4-6', 3.5, 6.5], ['7-10', 6.5, 10.5], ['11-20', 10.5, 20.5], ['21+', 20.5, 999]]
console.log('  band     pages   impressions    clicks    CTR      if at expected CTR')
let potential = 0
for (const [label, lo, hi] of BANDS) {
  const b = pages.filter((r) => r.position > lo && r.position <= hi)
  if (!b.length) continue
  const i = sum(b, 'impressions'), c = sum(b, 'clicks')
  const couldBe = Math.round(b.reduce((s, r) => s + r.impressions * EXPECTED(r.position), 0))
  potential += couldBe
  console.log(`  ${label.padEnd(8)} ${String(b.length).padStart(4)}  ${String(i).padStart(11)}  ${String(c).padStart(8)}  ${pct(c, i).padStart(7)}   ${String(couldBe).padStart(6)} clicks`)
}
console.log(`\n  If EVERY page hit its position's expected CTR: ${potential.toLocaleString()} clicks`)
console.log(`  That is ${(potential / TOT_C).toFixed(1)}x today, at TODAY'S impression count.`)

// ── how much of the base is structurally unconvertible? ────────────────────
const RETAILER = /canadian tire|home depot|walmart|costco|rona|lowes|lowe's|amazon|princess auto|canadiantire|best buy/i
const ZERO_CLICK = /^(what|when|how|why|do|does|can|is|are|will|which)\b.*\b(look like|last|mean|work|active|long|often|many|much|temperature|time|size|big|small|dangerous|harmful|safe|itch)\b/i

const q = d.queries
const QI = sum(q, 'impressions')
const retail = q.filter((r) => RETAILER.test(r.query))
const zero = q.filter((r) => !RETAILER.test(r.query) && ZERO_CLICK.test(r.query))
const live = q.filter((r) => !RETAILER.test(r.query) && !ZERO_CLICK.test(r.query))

console.log('\n' + '='.repeat(78))
console.log('HOW MUCH OF THE IMPRESSION BASE CAN CONVERT AT ALL?')
console.log('  (query-dimension sample — GSC anonymises low-volume queries)')
console.log('='.repeat(78))
const show = (n, a) => console.log(`  ${n.padEnd(30)} ${String(sum(a, 'impressions')).padStart(8)} impr (${pct(sum(a, 'impressions'), QI).padStart(6)})  ${String(sum(a, 'clicks')).padStart(5)} clk  CTR ${pct(sum(a, 'clicks'), sum(a, 'impressions'))}`)
show('retailer-owned (dead)', retail)
show('AI-Overview answered', zero)
show('genuinely convertible', live)

console.log('\n' + '='.repeat(78))
console.log('THE HONEST MODEL')
console.log('='.repeat(78))
const deadShare = (sum(retail, 'impressions') + sum(zero, 'impressions')) / QI
console.log(`  ~${(deadShare * 100).toFixed(0)}% of impressions sit on queries that structurally cannot convert well.`)
console.log(`  Applying that to 1,000,000 impressions leaves ~${Math.round(1_000_000 * (1 - deadShare)).toLocaleString()} convertible.`)
for (const ctr of [0.03, 0.04, 0.05]) {
  console.log(`    at ${(ctr * 100).toFixed(0)}% CTR on the convertible slice: ${Math.round(1_000_000 * (1 - deadShare) * ctr).toLocaleString()} clicks/mo`)
}
console.log('\n  => 30,000 clicks needs EITHER ~5% CTR on the convertible slice at 1M impressions,')
console.log('     OR roughly 2-2.5M impressions at a realistic 3-4%.')

// ── affiliate translation ─────────────────────────────────────────────────
console.log('\n  AFFILIATE TRANSLATION (measured: ~28% of visits click through, EPC $0.2263)')
for (const clicks of [10_000, 20_000, 30_000]) {
  const azClicks = Math.round(clicks * 0.28)
  console.log(`    ${String(clicks).padStart(6)} clicks/mo -> ~${String(azClicks).padStart(5)} Amazon clicks -> ~$${Math.round(azClicks * 0.2263).toLocaleString()}/mo`)
}
