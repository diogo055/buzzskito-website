import { readFileSync, existsSync } from 'fs'
const d = JSON.parse(readFileSync('gsc_full_scan.json','utf-8'))
const p = u => u.replace(/^https?:\/\/buzzskito\.ca/,'')

// AOV is the axis with the most headroom. Where do we already have impressions
// on genuinely expensive product categories?
const HIGH_TICKET = [
  ['air purifier ($150-600)',  /air ?purifi|hepa|allergen filter/i],
  ['dehumidifier ($200-400)',  /dehumidifi/i],
  ['steamer ($150-500)',       /steamer|steam cleaner|dupray|mcculloch/i],
  ['mosquito trap ($100-400)', /dynatrap|mosquito magnet|biogents|mosquito trap|bug zapper/i],
  ['gazebo/screen ($200-900)', /gazebo|screen house|screen tent|pergola|mosquito net(ting)?/i],
  ['heater/fire ($150-800)',   /patio heater|fire pit|fire table/i],
  ['sump pump ($200-600)',     /sump pump/i],
  ['generator/blower ($150+)', /leaf blower|brush cutter|generator|pressure washer/i],
  ['sprayer ($80-400)',        /backpack sprayer|pump sprayer|fogger|cold fogger/i],
  ['bed bug heater ($200-800)',/bed bug heater|heat treatment|zappbug|thermal/i],
]
console.log('='.repeat(94))
console.log('HIGH-TICKET DEMAND WE ALREADY HAVE IMPRESSIONS FOR')
console.log('  AOV is $46.53. These categories carry 3-10x that basket.')
console.log('='.repeat(94))
console.log('  category                       queries  impressions  clicks    CTR   avg pos')
const rows=[]
for (const [name, re] of HIGH_TICKET) {
  const qs = d.queries.filter(q=>re.test(q.query))
  if (!qs.length) continue
  const i=qs.reduce((s,q)=>s+q.impressions,0), c=qs.reduce((s,q)=>s+q.clicks,0)
  const pos=qs.reduce((s,q)=>s+q.position*q.impressions,0)/i
  rows.push({name,n:qs.length,i,c,pos,qs})
}
for (const r of rows.sort((a,b)=>b.i-a.i))
  console.log(`  ${r.name.padEnd(30)} ${String(r.n).padStart(6)}  ${r.i.toLocaleString().padStart(10)}  ${String(r.c).padStart(6)}  ${(r.c/r.i*100).toFixed(2).padStart(5)}%  ${r.pos.toFixed(1).padStart(6)}`)
const TI=rows.reduce((s,r)=>s+r.i,0), TC=rows.reduce((s,r)=>s+r.c,0)
console.log(`  ${'TOTAL'.padEnd(30)} ${' '.repeat(6)}  ${TI.toLocaleString().padStart(10)}  ${String(TC).padStart(6)}  ${(TC/TI*100).toFixed(2).padStart(5)}%`)
console.log(`\n  ${(TI/d.queries.reduce((s,q)=>s+q.impressions,0)*100).toFixed(1)}% of all impressions are on high-ticket categories,`)
console.log(`  but they earn only ${(TC/d.queries.reduce((s,q)=>s+q.clicks,0)*100).toFixed(1)}% of clicks — CTR ${(TC/TI*100).toFixed(2)}% vs site ${(d.queries.reduce((s,q)=>s+q.clicks,0)/d.queries.reduce((s,q)=>s+q.impressions,0)*100).toFixed(2)}%.`)

console.log('\n' + '='.repeat(94))
console.log('THE AIR PURIFIER ANOMALY')
console.log('='.repeat(94))
for (const q of d.queries.filter(q=>/air ?purifi|hepa/i.test(q.query)).sort((a,b)=>b.impressions-a.impressions).slice(0,12))
  console.log(`  ${String(q.impressions).padStart(6)} impr ${String(q.clicks).padStart(3)} clk  pos ${q.position.toFixed(1).padStart(5)}  ${q.query}`)
console.log('\n  pages ranking for it:')
for (const r of d.pages.filter(r=>/air-purifi|allerg/i.test(p(r.page))))
  console.log(`    ${String(r.clicks).padStart(4)} clk ${String(r.impressions).padStart(7)} impr  pos ${r.position.toFixed(1)}  ${p(r.page)}`)
