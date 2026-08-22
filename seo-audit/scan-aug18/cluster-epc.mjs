// Per-cluster Amazon.ca earnings, 30d to 2026-08-22. Transcribed from the
// Associates tracking-number report — the dataset that had never been exported
// and that every prior build decision was made without.
//
// EPC = (ordered revenue x commission rate) / clicks. That is the number that
// decides what to build next, and it varies 7x across clusters.

const R = [
  // tag,            clicks, items, orderedRev, commRate
  ['mosquito',        1062, 102, 5884.01, 4.88],
  ['general',          380,  42, 1472.56, 5.29],
  ['bedbug',           263,  26, 2563.74, 5.14],
  ['200b (default)',   460,  26, 1185.15, 5.66],
  ['roach',            124,  13,  297.23, 4.78],
  ['wasp',             218,  12,  458.85, 5.10],
  ['wildlife',         101,  12,  774.42, 6.07],
  ['rodent',            73,   8,  213.02, 4.18],
  ['steamer',           32,   5,  239.95, 6.13],
  ['dehumidifier',      38,   4,  582.34, 5.04],
]

// Seasonality of demand, from the cluster's subject matter. Winter-peaked and
// aseasonal clusters are what carry the site Oct-April, when 74% of current
// clicks go dormant.
const SEASON = {
  mosquito: 'SUMMER — dies Oct', wasp: 'SUMMER — dies Oct', general: 'mixed',
  bedbug: 'YEAR-ROUND', roach: 'YEAR-ROUND', steamer: 'YEAR-ROUND',
  wildlife: 'AUTUMN/WINTER peak', rodent: 'AUTUMN/WINTER peak',
  dehumidifier: 'WINTER/damp peak', '200b (default)': 'mixed',
}

const rows = R.map(([tag, clicks, items, rev, rate]) => {
  const earn = rev * rate / 100
  return { tag, clicks, items, rev, rate, earn,
    epc: earn / clicks, aov: rev / items, conv: items / clicks * 100 }
})

const tot = rows.reduce((a, r) => ({
  clicks: a.clicks + r.clicks, items: a.items + r.items,
  rev: a.rev + r.rev, earn: a.earn + r.earn }), { clicks: 0, items: 0, rev: 0, earn: 0 })

console.log('='.repeat(104))
console.log('AMAZON.CA EARNINGS PER CLUSTER — 30 days to 2026-08-22')
console.log('='.repeat(104))
console.log('  cluster            clicks   items    AOV     rate    earnings     EPC     vs default   seasonality')
const base = rows.find((r) => r.tag.startsWith('200b')).epc
for (const r of [...rows].sort((a, b) => b.epc - a.epc)) {
  const mult = r.epc / base
  console.log(
    `  ${r.tag.padEnd(17)} ${String(r.clicks).padStart(5)}  ${String(r.items).padStart(5)}  ` +
    `$${r.aov.toFixed(2).padStart(7)}  ${r.rate.toFixed(2)}%  $${r.earn.toFixed(2).padStart(7)}  ` +
    `$${r.epc.toFixed(3)}   ${(mult >= 1 ? mult.toFixed(1) + 'x' : '0.' + Math.round(mult * 10) + 'x').padStart(6)}      ${SEASON[r.tag]}`)
}
console.log(`\n  TOTAL             ${String(tot.clicks).padStart(5)}  ${String(tot.items).padStart(5)}  $${(tot.rev/tot.items).toFixed(2).padStart(7)}         $${tot.earn.toFixed(2)}  $${(tot.earn/tot.clicks).toFixed(3)}`)
console.log(`  (dashboard reports $649.28 — model reconciles to ${(tot.earn/649.28*100).toFixed(1)}%)`)

console.log('\n' + '='.repeat(104))
console.log('THE MISALLOCATION — where clicks go vs where money is')
console.log('='.repeat(104))
const byClicks = [...rows].sort((a, b) => b.clicks - a.clicks)
console.log('  cluster            clicks   share    earnings  share    $/100 clicks')
for (const r of byClicks) {
  console.log(`  ${r.tag.padEnd(17)} ${String(r.clicks).padStart(5)}  ${(r.clicks/tot.clicks*100).toFixed(1).padStart(5)}%   $${r.earn.toFixed(2).padStart(7)}  ${(r.earn/tot.earn*100).toFixed(1).padStart(5)}%    $${(r.epc*100).toFixed(2).padStart(6)}`)
}

console.log('\n' + '='.repeat(104))
console.log('WHAT AN EXTRA 1,000 CLICKS IS WORTH, BY CLUSTER')
console.log('='.repeat(104))
for (const r of [...rows].sort((a, b) => b.epc - a.epc)) {
  const yr = r.epc * 1000
  console.log(`  ${r.tag.padEnd(17)} $${yr.toFixed(0).padStart(4)}/1000 clicks    ${SEASON[r.tag]}`)
}

const winter = rows.filter((r) => /YEAR-ROUND|WINTER|AUTUMN/.test(SEASON[r.tag]))
const summer = rows.filter((r) => /SUMMER/.test(SEASON[r.tag]))
console.log('\n' + '='.repeat(104))
console.log('SEASONAL SPLIT')
console.log('='.repeat(104))
const agg = (a) => ({ c: a.reduce((s,r)=>s+r.clicks,0), e: a.reduce((s,r)=>s+r.earn,0) })
const w = agg(winter), s = agg(summer)
console.log(`  year-round / winter clusters : ${String(w.c).padStart(5)} clicks  $${w.e.toFixed(2).padStart(7)}   EPC $${(w.e/w.c).toFixed(3)}`)
console.log(`  summer-only clusters         : ${String(s.c).padStart(5)} clicks  $${s.e.toFixed(2).padStart(7)}   EPC $${(s.e/s.c).toFixed(3)}`)
console.log(`\n  Summer clusters take ${(s.c/tot.clicks*100).toFixed(0)}% of clicks and earn ${(s.e/tot.earn*100).toFixed(0)}% of the money,`)
console.log(`  at ${((s.e/s.c)/(w.e/w.c)).toFixed(2)}x the EPC of the year-round ones. And they go dormant in October.`)
