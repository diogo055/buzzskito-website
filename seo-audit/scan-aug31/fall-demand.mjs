import { readFileSync } from 'fs'
const d = JSON.parse(readFileSync('gsc_full_scan.json','utf-8'))
const prevQ = new Map((d.queries_prev||[]).map(q=>[q.query,q]))
const hasPrev = prevQ.size > 0
console.log(`queries_prev available: ${hasPrev} (${prevQ.size} rows)\n`)

// Ontario autumn/winter pest demand — the things that peak Sep-Feb.
const FALL = {
  'cluster flies / overwintering': /cluster fl|attic fl|overwinter|box elder|stink ?bug|lady ?bug|asian beetle|ladybird/i,
  'mice indoors (Oct-Dec peak)':   /\bmice\b|\bmouse\b|rodent|rat in|rats in|mouse trap|mice trap|rat trap|mouse poison/i,
  'spiders (Sep-Oct peak)':        /spider|cobweb|web in/i,
  'bed bugs (year-round)':         /bed ?bug/i,
  'roaches (year-round indoor)':   /roach|cockroach/i,
  'damp / mould / humidity':       /dehumidifi|humidity|damp|mould|mold|condensation|musty/i,
  'firewood / winter pests':       /firewood|carpenter ant|termite|powderpost/i,
  'wildlife in attic (fall)':      /attic|squirrel|raccoon|chimney|soffit|roof vent/i,
  'fruit flies / drain flies':     /fruit ?fl|drain ?fl|gnat|fungus gnat/i,
  'silverfish / centipede':        /silverfish|centipede|earwig|millipede/i,
}
console.log('='.repeat(96))
console.log('AUTUMN/WINTER DEMAND — what we already see impressions for, and how well we hold it')
console.log('='.repeat(96))
console.log('  segment                          queries   impressions  clicks    CTR    avg pos   top-8 share')
const out=[]
for (const [name, re] of Object.entries(FALL)) {
  const qs = d.queries.filter(q=>re.test(q.query))
  if (!qs.length) continue
  const impr=qs.reduce((s,q)=>s+q.impressions,0), clk=qs.reduce((s,q)=>s+q.clicks,0)
  const pos = qs.reduce((s,q)=>s+q.position*q.impressions,0)/impr
  const t8 = qs.filter(q=>q.position<=8).reduce((s,q)=>s+q.impressions,0)/impr*100
  out.push({name, n:qs.length, impr, clk, pos, t8})
}
for (const r of out.sort((a,b)=>b.impr-a.impr))
  console.log(`  ${r.name.padEnd(32)} ${String(r.n).padStart(6)}   ${r.impr.toLocaleString().padStart(9)}  ${String(r.clk).padStart(6)}  ${(r.clk/r.impr*100).toFixed(2)}%  ${r.pos.toFixed(1).padStart(7)}   ${r.t8.toFixed(0).padStart(6)}%`)

// The specific near-miss queries in FALL segments: position 6-15, real volume, no page owning them
console.log('\n' + '='.repeat(96))
console.log('FALL NEAR-MISSES — position 6-20, 100+ impressions, under 1% CTR')
console.log('  (demand arriving Sep-Dec that we are already visible for but losing)')
console.log('='.repeat(96))
const fallRe = new RegExp(Object.values(FALL).map(r=>r.source).join('|'),'i')
const near = d.queries.filter(q=>fallRe.test(q.query) && q.position>=6 && q.position<=20
  && q.impressions>=100 && (q.clicks/q.impressions)<0.01)
  .sort((a,b)=>b.impressions-a.impressions)
console.log(`  ${near.length} queries · ${near.reduce((s,q)=>s+q.impressions,0).toLocaleString()} impressions · only ${near.reduce((s,q)=>s+q.clicks,0)} clicks\n`)
for (const q of near.slice(0,30))
  console.log(`    ${String(q.impressions).padStart(6)} impr ${String(q.clicks).padStart(3)} clk  pos ${q.position.toFixed(1).padStart(5)}  ${q.query}`)
