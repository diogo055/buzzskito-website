import { readFileSync } from 'fs'
const d = JSON.parse(readFileSync('gsc_full_scan.json','utf-8'))

console.log('='.repeat(88))
console.log('OUR ACTUAL CTR BY POSITION — is position 7 worth anything on this site?')
console.log('='.repeat(88))
const bands = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,12],[12,15],[15,20],[20,100]]
console.log('  position    queries   impressions    clicks     CTR    industry avg   ratio')
const IND = {'1-2':28.5,'2-3':15.7,'3-4':11.0,'4-5':8.0,'5-6':7.2,'6-7':5.1,'7-8':4.0,'8-9':3.2,'9-10':2.8,'10-12':2.1,'12-15':1.5,'15-20':1.0,'20-100':0.4}
for (const [lo,hi] of bands) {
  const qs = d.queries.filter(q=>q.position>=lo && q.position<hi)
  if (!qs.length) continue
  const impr=qs.reduce((s,q)=>s+q.impressions,0), clk=qs.reduce((s,q)=>s+q.clicks,0)
  const ctr = clk/impr*100, key=`${lo}-${hi}`, ind=IND[key]
  console.log(`  ${key.padEnd(10)} ${String(qs.length).padStart(7)}  ${impr.toLocaleString().padStart(11)}  ${String(clk).padStart(8)}  ${ctr.toFixed(2).padStart(6)}%  ${String(ind).padStart(11)}%   ${(ctr/ind).toFixed(2)}x`)
}

console.log('\n' + '='.repeat(88))
console.log('WHERE THE IMPRESSIONS ACTUALLY SIT')
console.log('='.repeat(88))
const T = d.queries.reduce((s,q)=>s+q.impressions,0)
for (const [label, f] of [['top 3', q=>q.position<3],['3-10', q=>q.position>=3&&q.position<10],
                          ['10-20', q=>q.position>=10&&q.position<20],['20+', q=>q.position>=20]]) {
  const qs=d.queries.filter(f), i=qs.reduce((s,q)=>s+q.impressions,0), c=qs.reduce((s,q)=>s+q.clicks,0)
  console.log(`  ${label.padEnd(7)} ${(i/T*100).toFixed(1).padStart(5)}% of impressions  ${String(c).padStart(5)} clicks  CTR ${(c/i*100).toFixed(2)}%`)
}

// Trend: what is RISING into fall
console.log('\n' + '='.repeat(88))
console.log('RISING QUERIES — biggest impression gains vs previous 28d (non-mosquito)')
console.log('='.repeat(88))
const prev = new Map(d.queries_prev.map(q=>[q.query,q]))
const risers = d.queries.map(q=>{
  const p = prev.get(q.query)
  return {...q, was: p?p.impressions:0, wasClk: p?p.clicks:0, delta: q.impressions-(p?p.impressions:0)}
}).filter(q=>!/mosquito|tick|repellent|thermacell|black.?fl|no.?see.?um|midge/i.test(q.query))
  .filter(q=>q.impressions>=150)
  .sort((a,b)=>b.delta-a.delta)
console.log('  impr was -> now    delta   clk   pos    query')
for (const q of risers.slice(0,28))
  console.log(`  ${String(q.was).padStart(6)} -> ${String(q.impressions).padStart(6)}  ${('+'+q.delta).padStart(7)}  ${String(q.clicks).padStart(4)}  ${q.position.toFixed(1).padStart(5)}  ${q.query}`)
