import { readFileSync } from 'fs'
const d = JSON.parse(readFileSync('gsc_full_scan.json','utf-8'))
const p = (u) => u.replace(/^https?:\/\/buzzskito\.ca/,'') || '/'

console.log('='.repeat(94))
console.log('CLICKS PER PAGE BY CLUSTER — which clusters are starved of pages?')
console.log('='.repeat(94))
const cluster = (s) => {
  if (/dehumidifier|vapour-barrier|sump-pump|damp|humidity/.test(s)) return 'dehumidifier'
  if (/steam|dupray|upholstery/.test(s)) return 'steamer'
  if (/bed-bug|bedbug/.test(s)) return 'bedbug'
  if (/raccoon|squirrel|deer|skunk|groundhog|chipmunk|opossum|coyote|rabbit/.test(s)) return 'wildlife'
  if (/wasp|hornet|yellow.?jacket/.test(s)) return 'wasp'
  if (/roach|cockroach|advion/.test(s)) return 'roach'
  if (/rat|mice|mouse|rodent|vole/.test(s)) return 'rodent'
  if (/mosquito|tick|midge|no-see-um|black-fl|gnat|repellent|deet|picaridin|thermacell/.test(s)) return 'mosquito'
  if (/ant|flea|spider|silverfish|centipede|earwig|stink.?bug|cluster.?fly|fruit.?fl|house.?fl/.test(s)) return 'crawlers'
  return 'general'
}
const agg = {}
for (const r of d.pages) {
  const path = p(r.page); if (!path.startsWith('/blog/')) continue
  const c = cluster(path)
  agg[c] ??= { clicks:0, impr:0, pages:0, top:[] }
  agg[c].clicks+=r.clicks; agg[c].impr+=r.impressions; agg[c].pages++
  agg[c].top.push({path, clicks:r.clicks})
}
console.log('  cluster        pages  clicks  clicks/PAGE   impressions   CTR')
for (const [c,a] of Object.entries(agg).sort((x,y)=>(y[1].clicks/y[1].pages)-(x[1].clicks/x[1].pages)))
  console.log(`  ${c.padEnd(14)} ${String(a.pages).padStart(4)} ${String(a.clicks).padStart(7)}   ${(a.clicks/a.pages).toFixed(1).padStart(8)}    ${a.impr.toLocaleString().padStart(9)}  ${(a.clicks/a.impr*100).toFixed(2)}%`)

console.log('\n  THE WASP CLUSTER — all 5 pages:')
for (const t of agg.wasp.top.sort((a,b)=>b.clicks-a.clicks))
  console.log(`    ${String(t.clicks).padStart(5)} clicks  ${t.path}`)

// Query demand we are NOT capturing: wasp/hornet queries where we rank poorly
console.log('\n' + '='.repeat(94))
console.log('WASP/HORNET DEMAND WE RANK FOR BUT DO NOT OWN (position > 8)')
console.log('='.repeat(94))
const wq = d.queries.filter(q=>/wasp|hornet|yellow.?jacket/i.test(q.query))
const owned = wq.filter(q=>q.position<=8), missed = wq.filter(q=>q.position>8)
console.log(`  ${wq.length} wasp queries · ${owned.length} in top-8 (${owned.reduce((s,q)=>s+q.clicks,0)} clicks)`)
console.log(`  ${missed.length} ranked 8+ carrying ${missed.reduce((s,q)=>s+q.impressions,0).toLocaleString()} impressions and only ${missed.reduce((s,q)=>s+q.clicks,0)} clicks\n`)
console.log('  biggest unowned wasp queries:')
for (const q of missed.sort((a,b)=>b.impressions-a.impressions).slice(0,22))
  console.log(`    ${String(q.impressions).padStart(6)} impr  ${String(q.clicks).padStart(3)} clk  pos ${q.position.toFixed(1).padStart(5)}  ${q.query}`)
