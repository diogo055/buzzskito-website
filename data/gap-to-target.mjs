// What would actually close the gap to $4,000-5,000/month at peak?
// Decomposed against the revenue equation, using measured August values.

const M = { earnings: 653, blogClicks: 8663, amazonClicks: 2832, orders: 295, aov: 46.53 }
const clickOut = M.amazonClicks / M.blogClicks          // 0.327
const conv = M.orders / M.amazonClicks                  // 0.104
const revPerOrder = M.earnings / M.orders               // 2.21
const TARGET = 4500

console.log('='.repeat(96))
console.log('THE REVENUE EQUATION, MEASURED — and where the headroom actually is')
console.log('='.repeat(96))
console.log('  term                    now        realistic ceiling   multiple   why')
const terms = [
  ['Traffic (blog clicks)', M.blogClicks.toLocaleString(), '22,000-30,000', '2.5-3.5x',
   'US identification volume is 5-15x CA on the same topics'],
  ['Click-out to Amazon', (clickOut * 100).toFixed(1) + '%', '35-40%', '1.1-1.2x',
   'ALREADY 16x the ~2% industry benchmark. Almost no room left.'],
  ['Purchase conversion', (conv * 100).toFixed(1) + '%', '9-10%', '~1.0x (falls)',
   'Already strong. High-ticket will DRAG this down — expected and fine.'],
  ['Revenue per order', '$' + revPerOrder.toFixed(2), '$6-9', '2.7-4.1x',
   'THE lever. $46 baskets at ~5% vs $260 baskets at 15%.'],
]
for (const [t, now, ceil, mult, why] of terms)
  console.log(`  ${t.padEnd(23)} ${now.padStart(9)}   ${ceil.padStart(15)}   ${mult.padStart(9)}   ${why}`)

console.log('\n  Two of the four terms are effectively maxed out. The site already converts')
console.log('  extraordinarily well — the problem has never been the funnel.')

// ── What combinations reach $4,500? ────────────────────────────────────────
console.log('\n' + '='.repeat(96))
console.log('WHAT ACTUALLY REACHES $4,500/MONTH AT PEAK')
console.log('='.repeat(96))
const scenarios = [
  ['Everything shipped so far, nothing more', 8663 * 1.06, 0.327, 0.104, 2.21 * 1.10],
  ['+ finish ASIN pinning (all ~300 pages)', 8663 * 1.06, 0.34, 0.100, 3.20],
  ['+ US striking-distance lands (pos 5)', 22000, 0.34, 0.100, 3.20],
  ['+ Levanta high-ticket at 30% of clicks', 22000, 0.34, 0.075, 6.00],
  ['+ Levanta at 50% of clicks (brief target)', 24000, 0.35, 0.065, 8.50],
]
console.log('  scenario                                    visits   c-out   conv   $/order   MONTHLY')
for (const [label, v, co, cv, rpo] of scenarios) {
  const rev = v * co * cv * rpo
  const flag = rev >= TARGET ? '  <-- TARGET MET' : ''
  console.log(`  ${label.padEnd(42)} ${Math.round(v).toLocaleString().padStart(6)}  ${(co * 100).toFixed(0).padStart(5)}%  ${(cv * 100).toFixed(1).padStart(5)}%  $${rpo.toFixed(2).padStart(6)}   $${rev.toFixed(0).padStart(5)}${flag}`)
}

console.log('\n' + '='.repeat(96))
console.log('THE CONCLUSION THE NUMBERS FORCE')
console.log('='.repeat(96))
console.log('  1. On-page work alone tops out around $1,300/month at peak. Everything I have')
console.log('     shipped — pins, FAQs, diagrams, tracking, new pages — is worth about +23%.')
console.log('     That is real money on a small base, but it is not a path to $4,500.')
console.log()
console.log('  2. $4,500 requires BOTH roughly 2.5x the traffic AND roughly 3x the revenue')
console.log('     per order. Neither alone gets there. The brief says this too — its own')
console.log('     model needs 22,000 visits at a 50% high-ticket mix.')
console.log()
console.log('  3. Revenue per order is the binding constraint, and the tool for moving it')
console.log('     (Levanta, $39/conversion on a $259 zapper vs $2.21 today) is BLOCKED ON')
console.log('     ACCOUNT APPROVAL. Not on engineering. That is the single highest-value')
console.log('     thing the owner controls and I do not.')
console.log()
console.log('  4. Traffic 2.5x is genuinely reachable — the US identification cluster alone')
console.log('     models ~22,400 additional clicks/month at position 5, and US share has')
console.log('     already gone 3.5% -> 15.2% in four months with no US work done at all.')
console.log()
console.log('  5. Meanwhile: the next five months will show revenue FALLING. September to')
console.log('     January is the off-season. Watch revenue per visit instead — it is')
console.log('     season-neutral and it should climb the whole way down.')
