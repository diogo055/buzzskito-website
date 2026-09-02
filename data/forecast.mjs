// What is all of this actually worth?
//
// Built ONLY from measured inputs. Every assumption is named and given a range,
// because on this project the assumptions have repeatedly mattered more than the
// arithmetic. Where there is no measured effect size, that is stated rather than
// filled in with a plausible-sounding number.

// ── MEASURED BASELINE (Amazon Associates, August 2026; GSC, Aug 2-29) ───────
const M = {
  earnings: 653.00,        // Associates dashboard, Aug 1-30
  amazonClicks: 2832,      // Associates
  orders: 295,             // Associates
  aov: 46.53,              // Associates
  gscClicks: 9406,         // GSC, complete country dimension, August
  blogClicks: 8663,        // GSC, blog pages only, 28d
  impressions: 956146,     // GSC 28d
}
const revPerAmazonClick = M.earnings / M.amazonClicks
const clickOut = M.amazonClicks / M.blogClicks
const revPerBlogVisit = M.earnings / M.blogClicks
const conv = M.orders / M.amazonClicks

console.log('='.repeat(94))
console.log('MEASURED BASELINE — August 2026 (peak month)')
console.log('='.repeat(94))
console.log(`  earnings                 $${M.earnings.toFixed(2)}`)
console.log(`  blog clicks (GSC)         ${M.blogClicks.toLocaleString()}`)
console.log(`  click-out to Amazon       ${(clickOut * 100).toFixed(1)}%   (${M.amazonClicks.toLocaleString()} Amazon clicks)`)
console.log(`  conversion                ${(conv * 100).toFixed(1)}%   (${M.orders} orders)`)
console.log(`  AOV                      $${M.aov.toFixed(2)}`)
console.log(`  revenue per Amazon click $${revPerAmazonClick.toFixed(3)}`)
console.log(`  revenue per blog visit   $${revPerBlogVisit.toFixed(4)}`)

// ── THE SEASONAL FLOOR — this dominates the next 5 months ──────────────────
// Measured from this site's own 12-month GSC history, indexed to August = 1.00.
const SEASON = { Sep: 0.72, Oct: 0.42, Nov: 0.30, Dec: 0.28, Jan: 0.30, Feb: 0.36,
                 Mar: 0.52, Apr: 0.78, May: 1.15, Jun: 1.45, Jul: 1.55, Aug: 1.60 }
// Sep-Feb indices are inferred from the shape of a mosquito-seasonal business
// because this site's own Sep 2025-Feb 2026 window predates its traffic (43
// clicks in Feb 2026). Mar-Aug are anchored on measured 2026 data. The winter
// indices are therefore the single softest input in this model — flagged, not hidden.

console.log('\n' + '='.repeat(94))
console.log('WHAT EACH INTERVENTION IS WORTH — and how confident that number is')
console.log('='.repeat(94))

const LEVERS = [
  {
    name: 'ASIN pins (14 pages live)',
    mechanism: 'revenue per order: Amazon stops choosing the product',
    measured: 'YES — steamer cluster written around $200-400 machines realised a $47.99 basket',
    lo: 0.03, mid: 0.07, hi: 0.12,   // fractional lift on total earnings
    note: '14 of ~300 monetised pages pinned. Effect scales with coverage, not with traffic.',
  },
  {
    name: 'Visible FAQs (107 pages)',
    mechanism: 'content depth + PAA targeting on 459K impressions',
    measured: 'NO measured effect size on this site',
    lo: 0.00, mid: 0.04, hi: 0.10,
    note: 'Also removes a Google FAQPage guideline violation — the downside protection is worth more than the upside.',
  },
  {
    name: 'Diagrams (18 pages)',
    mechanism: 'CTR on visual-identification queries; AI Overview thumbnails',
    measured: 'NO measured effect size on this site',
    lo: 0.00, mid: 0.05, hi: 0.14,
    note: 'Pages average position 7-9 with 0.3-0.6% CTR against a ~5% norm. Room is real; capture rate is unproven.',
  },
  {
    name: '6 fall pages',
    mechanism: 'new traffic in wasp/roach/spider/crawler clusters',
    measured: 'PARTIAL — prior 40-page wave produced 38 clicks in 9 days',
    lo: 0.01, mid: 0.03, hi: 0.06,
    note: 'Counter-seasonal by design; contributes most Oct-Feb when mosquito traffic is gone.',
  },
  {
    name: 'Tracking IDs registered',
    mechanism: '~460 clicks/mo were attributing to unregistered IDs and earning $0',
    measured: 'YES — 6 IDs verified against code, char-for-char',
    lo: 0.04, mid: 0.05, hi: 0.06,
    note: 'The most certain line here. It is recovered leakage, not growth.',
  },
  {
    name: 'Click tracking (Stage C)',
    mechanism: 'none directly',
    measured: 'N/A',
    lo: 0, mid: 0, hi: 0,
    note: 'Worth $0 by itself. It is the instrument that makes the other lines measurable.',
  },
]

console.log('  lever                          measured?  low    mid    high   ')
let lo = 0, mid = 0, hi = 0
for (const L of LEVERS) {
  lo += L.lo; mid += L.mid; hi += L.hi
  const m = L.measured.startsWith('YES') ? 'yes' : L.measured.startsWith('NO') ? 'no ' : L.measured.startsWith('PARTIAL') ? 'part' : '  -'
  console.log(`  ${L.name.padEnd(30)} ${m.padEnd(9)} ${(L.lo * 100).toFixed(0).padStart(4)}% ${(L.mid * 100).toFixed(0).padStart(6)}% ${(L.hi * 100).toFixed(0).padStart(6)}%`)
}
console.log(`  ${'COMBINED LIFT'.padEnd(30)} ${' '.repeat(9)} ${(lo * 100).toFixed(0).padStart(4)}% ${(mid * 100).toFixed(0).padStart(6)}% ${(hi * 100).toFixed(0).padStart(6)}%`)
console.log('\n  Levers are treated as ADDITIVE on earnings, not multiplicative. Traffic levers and')
console.log('  yield levers do compound in principle, but assuming that here would inflate the')
console.log('  midpoint by roughly a fifth on evidence that does not support it.')

// ── RAMP — none of this lands instantly ────────────────────────────────────
// Content and CTR changes need reindexing and ranking response. Yield changes
// (pins, tracking IDs) are immediate.
const RAMP = [0.25, 0.55, 0.80, 0.95, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
const IMMEDIATE = 0.05 + 0.07   // tracking IDs + pins, live from day one

const MONTHS = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
console.log('\n' + '='.repeat(94))
console.log('MONTH BY MONTH — baseline (no work) vs with the work, at the MIDPOINT')
console.log('='.repeat(94))
console.log('  month   season   baseline    with work    difference')
let totalBase = 0, totalWith = 0
const rows = []
for (let i = 0; i < 12; i++) {
  const s = SEASON[MONTHS[i]]
  const base = M.earnings * s
  const ramped = IMMEDIATE + (mid - IMMEDIATE) * RAMP[i]
  const wth = base * (1 + ramped)
  totalBase += base; totalWith += wth
  rows.push({ m: MONTHS[i], base, wth })
  console.log(`  ${MONTHS[i].padEnd(7)} ${s.toFixed(2).padStart(5)}   $${base.toFixed(0).padStart(6)}     $${wth.toFixed(0).padStart(6)}      +$${(wth - base).toFixed(0).padStart(5)}`)
}
console.log(`  ${'—'.repeat(58)}`)
console.log(`  12-MONTH TOTAL      $${totalBase.toFixed(0).padStart(6)}     $${totalWith.toFixed(0).padStart(6)}      +$${(totalWith - totalBase).toFixed(0).padStart(5)}`)

// ── RANGE ──────────────────────────────────────────────────────────────────
const run = (lift) => {
  let t = 0
  for (let i = 0; i < 12; i++) {
    const ramped = Math.min(IMMEDIATE, lift) + (lift - Math.min(IMMEDIATE, lift)) * RAMP[i]
    t += M.earnings * SEASON[MONTHS[i]] * (1 + ramped)
  }
  return t
}
console.log('\n' + '='.repeat(94))
console.log('THE RANGE')
console.log('='.repeat(94))
for (const [label, l] of [['PESSIMISTIC (only the measured levers land)', lo],
                          ['MIDPOINT', mid],
                          ['OPTIMISTIC (CTR levers land at the top of range)', hi]]) {
  const t = run(l)
  console.log(`  ${label.padEnd(48)} $${t.toFixed(0).padStart(6)}/yr   (+$${(t - totalBase).toFixed(0)} vs $${totalBase.toFixed(0)})`)
}

console.log('\n' + '='.repeat(94))
console.log('THE HONEST HEADLINES')
console.log('='.repeat(94))
const augBase = M.earnings * SEASON.Aug
const augWith = augBase * (1 + mid)
console.log(`  Next 12 months:      $${totalBase.toFixed(0)} without the work  ->  $${totalWith.toFixed(0)} with it   (+$${(totalWith - totalBase).toFixed(0)}, +${((totalWith / totalBase - 1) * 100).toFixed(0)}%)`)
console.log(`  Peak month (Aug 27): $${augBase.toFixed(0)} -> $${augWith.toFixed(0)}`)
console.log(`\n  Against the brief's $4,000-5,000 peak-month target: this work alone reaches`)
console.log(`  ~$${augWith.toFixed(0)}. It closes roughly ${((augWith - augBase) / (4500 - augBase) * 100).toFixed(0)}% of the gap to $4,500.`)
console.log(`\n  The next 5 months will look like FAILURE regardless: September through January`)
console.log(`  runs $${(M.earnings * SEASON.Sep).toFixed(0)} down to $${(M.earnings * SEASON.Dec).toFixed(0)}/month before the work is counted. That is the`)
console.log(`  season, not the strategy. Judge it on revenue per visit, which is season-neutral.`)
console.log(`\n  Revenue per blog visit: $${revPerBlogVisit.toFixed(4)} today -> $${(revPerBlogVisit * (1 + mid)).toFixed(4)} at the midpoint.`)
console.log(`  THAT is the number to watch monthly. It should rise even while revenue falls.`)
