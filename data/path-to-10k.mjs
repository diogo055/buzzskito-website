// Can this reach $10,000/month? Worked backwards from the measured funnel.

const M = { earnings: 653, blogClicks: 8663, amazonClicks: 2832, orders: 295 }
const clickOut = M.amazonClicks / M.blogClicks   // .327
const conv     = M.orders / M.amazonClicks       // .104
const rpo      = M.earnings / M.orders           // 2.21

const need = (visits, co, cv, r) => visits * co * cv * r
const visitsFor = (target, co, cv, r) => target / (co * cv * r)

console.log('='.repeat(96))
console.log('WHAT $10,000/MONTH REQUIRES — solved for traffic at each basket mix')
console.log('='.repeat(96))
console.log('  revenue/order   implied mix                       conversion   VISITS NEEDED / month')
const mixes = [
  [2.21,  'today: all low-ticket ($46 baskets)',       0.104],
  [3.20,  'all ~300 pages ASIN-pinned, still low-tkt', 0.100],
  [6.00,  '30% of clicks on high-ticket',              0.075],
  [8.50,  '50% high-ticket (the brief target)',        0.065],
  [12.00, '70% high-ticket',                           0.055],
  [18.00, 'near-pure high-ticket, Levanta rates',      0.045],
]
for (const [r, label, cv] of mixes) {
  const v = visitsFor(10000, 0.35, cv, r)
  const mult = v / M.blogClicks
  console.log(`  $${r.toFixed(2).padStart(6)}       ${label.padEnd(36)} ${(cv*100).toFixed(1).padStart(5)}%   ${Math.round(v).toLocaleString().padStart(8)}  (${mult.toFixed(1)}x today)`)
}

console.log('\n' + '='.repeat(96))
console.log('IS THAT TRAFFIC THERE? — measured US volume on pages we already rank for')
console.log('='.repeat(96))
// From data/us-targets.json: 20 pages, 259,748 combined US monthly volume.
const US_VOL = 259748
const CTR = { 1: 0.28, 2: 0.16, 3: 0.11, 5: 0.06, 8: 0.032, 12: 0.021 }
console.log('  if our AVERAGE US position across those 20 pages became...')
for (const p of [12, 8, 5, 3, 2]) {
  const clicks = US_VOL * CTR[p]
  console.log(`    position ${String(p).padStart(2)}   ${Math.round(clicks).toLocaleString().padStart(7)} US clicks/mo   (site total would be ~${Math.round(clicks + M.blogClicks).toLocaleString()})`)
}
console.log('\n  Today those 20 pages average roughly position 11 and produce ~1,400 US clicks/month.')

console.log('\n' + '='.repeat(96))
console.log('THE TENSION NOBODY HAS NAMED YET')
console.log('='.repeat(96))
// Split the 20 US targets by commercial intent.
const IDENTIFICATION = [
  ['mouse poop', 40368], ['what does a spider bite look like', 33459],
  ['mosquito larvae', 19647], ['no see um bites', 19419], ['mosquito hawk', 16046],
  ['bed bug flea bites on humans', 10890], ['what do chigger bites look like', 9859],
  ['what blood type do mosquitoes like', 9202], ['tick vs bed bug', 5005],
  ['when are mosquitoes most active', 2996], ['what temperature do mosquitoes die', 2095],
]
const COMMERCIAL = [
  ['bug zapper', 26851], ['bed bug spray', 21837], ['mosquito dunks', 17011],
  ['best fruit fly trap', 8040], ['dynatrap', 5428], ['mosquito magnet', 3617],
  ['photon matrix', 2700], ['best rat trap', 2700], ['best wasp spray', 2578],
]
const idVol = IDENTIFICATION.reduce((s,[,v])=>s+v,0)
const coVol = COMMERCIAL.reduce((s,[,v])=>s+v,0)
console.log(`  IDENTIFICATION queries : ${idVol.toLocaleString().padStart(7)} monthly US searches  (${(idVol/(idVol+coVol)*100).toFixed(0)}% of our US opportunity)`)
console.log(`  COMMERCIAL queries     : ${coVol.toLocaleString().padStart(7)} monthly US searches  (${(coVol/(idVol+coVol)*100).toFixed(0)}%)`)
console.log()
console.log('  This is the crux. The US volume we can realistically WIN is identification')
console.log('  traffic — and an earlier SERP teardown proved it is winnable (a DR 7 pediatrics')
console.log('  clinic ranks #3 for the 33,459-volume spider bite query).')
console.log()
console.log('  But identification traffic buys BITE CREAM, not $259 zappers. It is exactly the')
console.log('  traffic that keeps revenue per order at $2.21.')
console.log()
console.log('  The US commercial queries that WOULD carry a high basket are the ones we cannot')
console.log('  win: "best mosquito trap" KD 93, "dynatrap" KD 89, "thermacell" KD 63, against')
console.log('  a site with DR ~2 and 84 confirmed PBN domains already in its disavow file.')

console.log('\n' + '='.repeat(96))
console.log('SO: CAN US EXPANSION ALONE REACH $10,000/MONTH?')
console.log('='.repeat(96))
// Best realistic US case: win identification at position 3, commercial stays put.
const idClicks = idVol * CTR[3]
const coClicks = coVol * CTR[8]
const usClicks = idClicks + coClicks
const totalVisits = usClicks + M.blogClicks * 1.2
// identification traffic converts at a LOWER basket than the site average
const blendedRpo = (idClicks * 1.60 + (coClicks + M.blogClicks * 1.2) * 3.20) / totalVisits
const rev = need(totalVisits, 0.33, 0.10, blendedRpo)
console.log(`  Optimistic US case: identification pages reach position 3, commercial stays ~8.`)
console.log(`    identification clicks : ${Math.round(idClicks).toLocaleString()}/mo`)
console.log(`    commercial clicks     : ${Math.round(coClicks).toLocaleString()}/mo`)
console.log(`    total site visits     : ${Math.round(totalVisits).toLocaleString()}/mo  (${(totalVisits/M.blogClicks).toFixed(1)}x today)`)
console.log(`    blended $/order       : $${blendedRpo.toFixed(2)}  (dragged DOWN by identification mix)`)
console.log(`    MONTHLY REVENUE       : $${Math.round(rev).toLocaleString()}`)
console.log()
console.log(`  => US expansion executed almost perfectly lands near $${(Math.round(rev/100)*100).toLocaleString()}/month, not $10,000.`)
console.log(`     And that assumes winning position 3 on queries like "mouse poop" (40,368) and`)
console.log(`     "what does a spider bite look like" (33,459) against Harvard Health and GoodRx.`)

console.log('\n' + '='.repeat(96))
console.log('WHAT WOULD ACTUALLY REACH $10,000')
console.log('='.repeat(96))
const paths = [
  ['US traffic alone (above)',                      Math.round(rev), 'no'],
  ['+ Levanta high-ticket on 40% of clicks',         Math.round(need(totalVisits, 0.34, 0.07, 7.00)), 'closer'],
  ['+ Levanta 50% AND commercial pages win US',      Math.round(need(totalVisits*1.35, 0.35, 0.065, 8.50)), 'still short'],
  ['+ a second traffic source (YouTube/email/social)', Math.round(need(totalVisits*1.9, 0.35, 0.065, 8.50)), 'reaches it'],
]
for (const [label, v, verdict] of paths)
  console.log(`  ${label.padEnd(48)} $${v.toLocaleString().padStart(6)}/mo   ${verdict}`)
console.log()
console.log('  $10,000/month is roughly 15x where the affiliate arm is today. It needs a')
console.log('  step-change in KIND, not just more of the same: high-ticket commissions AND')
console.log('  a traffic source that does not depend on out-ranking Harvard on a DR 2 domain.')
