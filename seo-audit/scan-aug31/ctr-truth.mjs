import { readFileSync } from 'fs'
const d = JSON.parse(readFileSync('gsc_full_scan.json','utf-8'))

// HYPOTHESIS: the 1.62% CTR at position 1-2 is not a title problem. It is
// ultra-long-tail conversational queries (AI Overview / AI-mode fodder) where we
// are cited at #1 but Google answers inline. Test it by splitting position 1-3
// impressions into question-shaped long queries vs real short commercial ones.
const top = d.queries.filter(q=>q.position<3)
const isQuestion = q => /^(what|how|why|when|which|where|who|do |does |can |is |are |should |will )/i.test(q.query) || q.query.split(/\s+/).length>=7
const A = top.filter(isQuestion), B = top.filter(q=>!isQuestion(q))
const S = a => ({n:a.length, i:a.reduce((s,q)=>s+q.impressions,0), c:a.reduce((s,q)=>s+q.clicks,0)})
const sa=S(A), sb=S(B)
console.log('='.repeat(90))
console.log('IS THE POSITION 1-3 CTR COLLAPSE REAL? — splitting by query shape')
console.log('='.repeat(90))
console.log(`  question-shaped / 7+ words : ${String(sa.n).padStart(5)} queries  ${sa.i.toLocaleString().padStart(7)} impr  ${String(sa.c).padStart(4)} clicks  CTR ${(sa.c/sa.i*100).toFixed(2)}%`)
console.log(`  short commercial queries   : ${String(sb.n).padStart(5)} queries  ${sb.i.toLocaleString().padStart(7)} impr  ${String(sb.c).padStart(4)} clicks  CTR ${(sb.c/sb.i*100).toFixed(2)}%`)
console.log(`\n  avg impressions per query: question ${(sa.i/sa.n).toFixed(1)} · commercial ${(sb.i/sb.n).toFixed(1)}`)

console.log('\n  Top-3 queries with 200+ impressions and ZERO clicks:')
const zero = top.filter(q=>q.impressions>=150 && q.clicks===0).sort((a,b)=>b.impressions-a.impressions)
console.log(`  (${zero.length} of them, ${zero.reduce((s,q)=>s+q.impressions,0).toLocaleString()} impressions, 0 clicks)`)
for (const q of zero.slice(0,12)) console.log(`    ${String(q.impressions).padStart(5)} impr  pos ${q.position.toFixed(1)}  ${q.query.slice(0,84)}`)

console.log('\n  Top-3 SHORT commercial queries — the ones that should convert:')
for (const q of sb.n?B.filter(q=>q.impressions>=100).sort((a,b)=>b.impressions-a.impressions).slice(0,14):[])
  console.log(`    ${String(q.impressions).padStart(5)} impr ${String(q.clicks).padStart(4)} clk  CTR ${(q.clicks/q.impressions*100).toFixed(1).padStart(5)}%  pos ${q.position.toFixed(1)}  ${q.query}`)

// The photon matrix phenomenon — one page drove a third of all growth
console.log('\n' + '='.repeat(90))
console.log('THE PHOTON MATRIX PAGE — biggest single driver of the +40%')
console.log('='.repeat(90))
const pm = d.queries.filter(q=>/photon|laser mosquito|mosquito laser/i.test(q.query))
console.log(`  ${pm.length} queries · ${pm.reduce((s,q)=>s+q.impressions,0).toLocaleString()} impressions · ${pm.reduce((s,q)=>s+q.clicks,0)} clicks · CTR ${(pm.reduce((s,q)=>s+q.clicks,0)/pm.reduce((s,q)=>s+q.impressions,0)*100).toFixed(2)}%`)
for (const q of pm.sort((a,b)=>b.impressions-a.impressions).slice(0,10))
  console.log(`    ${String(q.impressions).padStart(6)} impr ${String(q.clicks).padStart(4)} clk  pos ${q.position.toFixed(1).padStart(5)}  ${q.query}`)
console.log('\n  That page tells readers the product does NOT work. It is now the #1 traffic')
console.log('  source on the site. What it links to is the single highest-leverage')
console.log('  monetisation decision available right now.')
