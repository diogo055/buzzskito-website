// Two questions: is the ASIN work worth its maintenance, and what is the
// realistic earnings difference from here?
//
// Data: Amazon.ca Associates tracking-ID report, 30d to 2026-08-24.
// This report carries a RETURNED REVENUE column the earlier one did not, which
// materially dents the high-basket thesis and has to be priced.

const R = [
  // tag,           itemsOrdered, convRate%, orderedRev, commRate%, shipped, shippedEarn, returnedRev
  ['mosquito',       117, 10.52, 6259.12, 4.89, 108, 284.33,  47.99],
  ['general',         46, 10.90, 1528.59, 5.32,  44,  80.56,  49.99],
  ['bedbug',          30, 10.00, 2775.55, 5.20,  29, 143.36, 296.20],
  ['200b (default)',  26,  5.65, 1185.15, 5.66,  26,  67.09, 201.30],
  ['wasp',            18,  7.38,  533.79, 5.27,  18,  28.12,   0.00],
  ['roach',           14, 10.37,  317.22, 4.93,  14,  15.64,   0.00],
  ['wildlife',        13, 12.62,  821.94, 5.89,  13,  48.41, 136.60],
  ['rodent',           9, 10.98,  241.01, 4.52,   8,   9.63,   0.00],
  ['steamer',          5, 15.63,  239.95, 6.13,   5,  14.70,   0.00],
  ['dehumidifier',     4,  9.52,  582.34, 5.04,   4,  29.35,   0.00],
]

const rows = R.map(([tag, items, conv, rev, rate, ship, earn, ret]) => {
  const clicks = items / (conv / 100)          // clicks are recoverable from items / conversion
  return { tag, items, conv, rev, rate, ship, earn, ret, clicks,
    aov: rev / items, epc: earn / clicks, retPct: ret / rev * 100 }
})

const T = rows.reduce((a, r) => ({ clicks: a.clicks + r.clicks, rev: a.rev + r.rev,
  earn: a.earn + r.earn, ret: a.ret + r.ret }), { clicks: 0, rev: 0, earn: 0, ret: 0 })

console.log('='.repeat(100))
console.log('30 DAYS TO 2026-08-24 — clicks derived from items / conversion rate')
console.log('='.repeat(100))
console.log('  cluster            clicks   AOV      rate   earnings    EPC     RETURNED  ret%')
for (const r of [...rows].sort((a, b) => b.epc - a.epc)) {
  console.log(`  ${r.tag.padEnd(17)} ${r.clicks.toFixed(0).padStart(5)}  $${r.aov.toFixed(2).padStart(7)}  ${r.rate.toFixed(2)}%  $${r.earn.toFixed(2).padStart(7)}  $${r.epc.toFixed(3)}  $${r.ret.toFixed(2).padStart(7)}  ${r.retPct.toFixed(1).padStart(5)}%`)
}
console.log(`\n  TOTAL              ${T.clicks.toFixed(0).padStart(5)}           ${' '.repeat(6)}  $${T.earn.toFixed(2)}  $${(T.earn/T.clicks).toFixed(3)}  $${T.ret.toFixed(2)}  ${(T.ret/T.rev*100).toFixed(1)}%`)
console.log(`  (dashboard: 3,102 clicks · $692.67 earnings — the gap is low-volume rows Amazon hides)`)

// ── THE RETURNS PROBLEM — new in this report, and it cuts against high-basket ──
console.log('\n' + '='.repeat(100))
console.log('RETURNS BY BASKET SIZE — does the high-ticket thesis survive this?')
console.log('='.repeat(100))
const withRet = rows.filter((r) => r.ret > 0).sort((a, b) => b.retPct - a.retPct)
console.log('  cluster            AOV      returned%   note')
for (const r of withRet)
  console.log(`  ${r.tag.padEnd(17)} $${r.aov.toFixed(2).padStart(7)}  ${r.retPct.toFixed(1).padStart(6)}%    ${r.aov > 80 ? 'HIGH basket' : r.aov > 45 ? 'mid' : 'low'}`)
const hi = rows.filter((r) => r.aov >= 80), lo = rows.filter((r) => r.aov < 45)
const agg = (a) => ({ rev: a.reduce((s,r)=>s+r.rev,0), ret: a.reduce((s,r)=>s+r.ret,0) })
const H = agg(hi), L = agg(lo)
console.log(`\n  baskets >= $80 : ${(H.ret/H.rev*100).toFixed(1)}% returned`)
console.log(`  baskets <  $45 : ${(L.ret/L.rev*100).toFixed(1)}% returned`)
console.log('  => Expensive things come back. Discount the high-basket upside accordingly.')

// ── THE ASIN QUESTION ─────────────────────────────────────────────────────
console.log('\n' + '='.repeat(100))
console.log('THE ASIN QUESTION — how much is actually at stake, and on how many pages?')
console.log('='.repeat(100))
// Measured haircut: intended basket (from the search strings in the page source)
// vs the basket Amazon actually delivered.
const HAIRCUT = [
  ['steamer',      '$200-400 intended', 47.99,  0.12, 0.25],
  ['dehumidifier', '$250-350 intended', 145.59, 0.45, 0.55],
]
for (const [c, intent, realized, lo2, hi2] of HAIRCUT)
  console.log(`  ${c.padEnd(14)} ${intent.padEnd(20)} realized $${realized}   = ${(lo2*100).toFixed(0)}-${(hi2*100).toFixed(0)}% of intent`)

console.log('\n  If a narrower link recovered HALF the gap on the four high-basket clusters:')
const targets = rows.filter((r) => ['bedbug','wildlife','steamer','dehumidifier'].includes(r.tag))
let uplift = 0
for (const r of targets) {
  const better = r.epc * 1.5        // conservative: +50% EPC from a correctly-steered basket
  const gain = (better - r.epc) * r.clicks
  uplift += gain
  console.log(`    ${r.tag.padEnd(14)} ${r.clicks.toFixed(0).padStart(4)} clicks · EPC $${r.epc.toFixed(3)} -> $${better.toFixed(3)}  = +$${gain.toFixed(0)}/mo`)
}
console.log(`    ${'TOTAL'.padEnd(14)} +$${uplift.toFixed(0)}/month on today's traffic`)
console.log(`\n  Those four clusters are only ${targets.reduce((s,r)=>s+r.clicks,0).toFixed(0)} of ${T.clicks.toFixed(0)} clicks (${(targets.reduce((s,r)=>s+r.clicks,0)/T.clicks*100).toFixed(0)}%).`)
console.log('  So the ASIN work touches a SMALL slice of pages — which is also the answer')
console.log('  to the maintenance question: you do not need to touch 353 pages.')

// ── WHERE IT ALL LANDS ────────────────────────────────────────────────────
console.log('\n' + '='.repeat(100))
console.log('THE HONEST FORECAST — 12 months out')
console.log('='.repeat(100))
const now = 692.67
const rowsOut = [
  ['Today (peak month)',                     now, ''],
  ['+ link steering on ~40 high-basket pages', 120, 'midpoint of $60-190, LOW-MED confidence'],
  ['+ the 40 pages shipped 22 Aug',           134, 'at maturity, ~6 months out'],
  ['+ wave 3 (40 more, staged)',              110, 'declining topic quality'],
  ['+ band/basket reweight, top 50 pages',    100, 'steer to 6% categories'],
]
let running = 0
for (const [label, v, note] of rowsOut) {
  running += (label.startsWith('Today') ? v : v)
  console.log(`  ${label.padEnd(42)} ${label.startsWith('Today') ? '' : '+'}$${v.toFixed(0).padStart(4)}   ${note}`)
}
console.log(`  ${'='.repeat(42)} ${'-'.repeat(6)}`)
console.log(`  ${'PEAK MONTH, 12 months out'.padEnd(42)}  $${running.toFixed(0)}`)
console.log(`  ${'less returns drag on the new high-basket mix'.padEnd(42)} -$${(running*0.06).toFixed(0)}`)
const peak = running * 0.94
console.log(`  ${'NET PEAK MONTH'.padEnd(42)}  $${peak.toFixed(0)}`)
console.log(`\n  Annualised at ~10 month-equivalents (55% of earnings are seasonal):`)
console.log(`    today:      $${(now*10).toFixed(0)}/yr`)
console.log(`    12mo out:   $${(peak*10).toFixed(0)}/yr`)
console.log(`    difference: +$${((peak-now)*10).toFixed(0)}/yr   (${((peak/now-1)*100).toFixed(0)}% lift)`)
console.log('\n  Downside if the link work does nothing and pages underperform: ~$950/mo peak, +37%.')
console.log('  Upside if link steering lands at the top of range: ~$1,250/mo peak, +80%.')
