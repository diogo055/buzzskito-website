import { readFileSync } from 'fs'
const d = JSON.parse(readFileSync('gsc_full_scan.json','utf-8'))
const p = (u) => u.replace(/^https?:\/\/buzzskito\.ca/,'') || '/'
const cur = d.pages, prev = new Map(d.pages_prev.map(r=>[p(r.page),r]))

// Measured EPC by cluster (Amazon.ca tracking-ID report, 30d to 2026-08-24)
const EPC = { dehumidifier:0.772, bedbug:0.501, wildlife:0.465, steamer:0.460,
              wasp:0.212, mosquito:0.270, roach:0.174, rodent:0.122, general:0.205 }
const cluster = (s) => {
  if (/dehumidifier|vapour-barrier|sump-pump|damp|humidity/.test(s)) return 'dehumidifier'
  if (/steam|dupray|upholstery/.test(s)) return 'steamer'
  if (/bed-bug|bedbug/.test(s)) return 'bedbug'
  if (/raccoon|squirrel|deer|skunk|wildlife|groundhog|chipmunk|opossum|coyote|rabbit/.test(s)) return 'wildlife'
  if (/wasp|hornet|yellow.?jacket/.test(s)) return 'wasp'
  if (/roach|cockroach|advion/.test(s)) return 'roach'
  if (/rat|mice|mouse|rodent|vole/.test(s)) return 'rodent'
  if (/mosquito|tick|midge|no-see-um|black-fl|gnat|repellent|deet|picaridin|thermacell/.test(s)) return 'mosquito'
  return 'general'
}
const isAffil = (s) => s.startsWith('/blog/')

console.log('='.repeat(92))
console.log('WHERE THE +2,593 CLICKS CAME FROM — and what they are worth')
console.log('='.repeat(92))
const agg = {}
for (const r of cur) {
  const path = p(r.page); if (!isAffil(path)) continue
  const c = cluster(path)
  agg[c] ??= { clicks:0, was:0, impr:0, pages:0 }
  agg[c].clicks += r.clicks; agg[c].impr += r.impressions; agg[c].pages++
  agg[c].was += prev.get(path)?.clicks || 0
}
console.log('  cluster        pages   clicks was ->  now    delta    EPC     $/mo now   $ delta')
let tot=0, totWas=0
for (const [c,a] of Object.entries(agg).sort((x,y)=>(y[1].clicks*EPC[y[0]])-(x[1].clicks*EPC[x[0]]))) {
  const now = a.clicks*EPC[c], then = a.was*EPC[c]
  tot += now; totWas += then
  const sign = a.clicks>=a.was?'+':''
  console.log(`  ${c.padEnd(14)} ${String(a.pages).padStart(4)}  ${String(a.was).padStart(6)} -> ${String(a.clicks).padStart(5)}  ${(sign+(a.clicks-a.was)).padStart(7)}   $${EPC[c].toFixed(3)}  $${now.toFixed(0).padStart(7)}   ${(now-then>=0?'+':'')}$${(now-then).toFixed(0)}`)
}
console.log(`  ${'—'.repeat(88)}`)
console.log(`  ${'MODELLED'.padEnd(14)} ${' '.repeat(4)}  ${' '.repeat(6)}    ${' '.repeat(5)}  ${' '.repeat(7)}   ${' '.repeat(7)} $${tot.toFixed(0).padStart(7)}   ${(tot-totWas>=0?'+':'')}$${(tot-totWas).toFixed(0)}`)
console.log(`\n  Amazon actually paid $794.36 over Jul 1-Aug 30 (2 months) = ~$397/mo`)
console.log(`  Model says $${tot.toFixed(0)}/mo. The model runs hot — treat deltas as direction, not dollars.`)

// SEASONAL vs EVERGREEN — this is the real story for September
console.log('\n' + '='.repeat(92))
console.log('THE SEPTEMBER CLIFF — how much of the click base dies with mosquito season')
console.log('='.repeat(92))
let seas=0, ever=0, seasE=0, everE=0
for (const r of cur) {
  const path=p(r.page); if(!isAffil(path)) continue
  const c=cluster(path)
  if (c==='mosquito') { seas+=r.clicks; seasE+=r.clicks*EPC[c] }
  else { ever+=r.clicks; everE+=r.clicks*EPC[c] }
}
console.log(`  mosquito/tick (dies Oct-Apr) : ${String(seas).padStart(5)} clicks  ~$${seasE.toFixed(0)} modelled`)
console.log(`  everything else (year-round) : ${String(ever).padStart(5)} clicks  ~$${everE.toFixed(0)} modelled`)
console.log(`  => ${(seas/(seas+ever)*100).toFixed(0)}% of affiliate clicks are seasonal.`)
console.log(`     One year ago that share was near 100%. The adjacent-pest build is what`)
console.log(`     keeps the lights on Oct-Apr.`)
