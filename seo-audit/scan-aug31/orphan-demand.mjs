import { readFileSync, readdirSync, existsSync } from 'fs'
const d = JSON.parse(readFileSync('gsc_full_scan.json','utf-8'))
const slugs = readdirSync('../../app/blog', {withFileTypes:true}).filter(e=>e.isDirectory()).map(e=>e.name)
const slugWords = slugs.map(s=>({s, w:new Set(s.split('-').filter(x=>x.length>2))}))

// A query is "orphaned" when we already earn real impressions for it but no page
// is actually built around it — Google is ranking a tangential page instead.
// Those are the cheapest wins available: the demand and the topical trust exist,
// only the dedicated page is missing.
const norm = q => q.toLowerCase().replace(/[^a-z0-9 ]/g,'').split(/\s+/).filter(w=>w.length>2
  && !['the','and','for','you','are','how','what','does','can','with','best','your','from','get','rid','near','vs'].includes(w))

const hasPage = (q) => {
  const w = norm(q); if (!w.length) return true
  for (const {w:sw} of slugWords) {
    const hit = w.filter(x=>sw.has(x) || [...sw].some(s=>s.startsWith(x)||x.startsWith(s))).length
    if (hit >= Math.max(2, Math.ceil(w.length*0.75))) return true
  }
  return false
}
const SEASONAL_OUT = /mosquito|tick(?!s? vs)|repellent|thermacell|black.?fl|no.?see.?um|midge|deer.?fl|horse.?fl|photon|laser/i

const cands = d.queries
  .filter(q=>q.impressions>=180 && q.position>=4 && q.position<=18)
  .filter(q=>(q.clicks/q.impressions)<0.035)
  .filter(q=>!SEASONAL_OUT.test(q.query))
  .filter(q=>!hasPage(q.query))
  .sort((a,b)=>b.impressions-a.impressions)

console.log('='.repeat(96))
console.log('ORPHANED DEMAND — real impressions, decent position, NO dedicated page')
console.log('  These are queries Google already wants us for. Building the page is the')
console.log('  highest-confidence ranking move available: demand + trust exist already.')
console.log('='.repeat(96))
console.log(`  ${cands.length} queries · ${cands.reduce((s,q)=>s+q.impressions,0).toLocaleString()} impressions · ${cands.reduce((s,q)=>s+q.clicks,0)} clicks (${(cands.reduce((s,q)=>s+q.clicks,0)/cands.reduce((s,q)=>s+q.impressions,0)*100).toFixed(2)}% CTR)\n`)

// group into topics
const TOPIC = [
  ['mouse / rat droppings ID', /mouse poop|mouse dropping|rat poop|rat dropping|rodent dropping|mice poop/i, 'rodent', 0.122],
  ['rat & mouse traps',        /rat trap|mouse trap|mice trap|snap trap|electric.*trap/i, 'rodent', 0.122],
  ['fruit fly traps',          /fruit ?fly|drain ?fly/i, 'crawlers', 0.20],
  ['spider bites & ID',        /spider/i, 'crawlers', 0.20],
  ['bed bug identification',   /bed ?bug|baby bed/i, 'bedbug', 0.501],
  ['silverfish / centipede / earwig', /silverfish|centipede|earwig|millipede/i, 'crawlers', 0.20],
  ['cockroach products',       /roach/i, 'roach', 0.174],
  ['dehumidifiers & damp',     /dehumidifi|humidity|damp|mould|mold|condensation/i, 'dehumidifier', 0.772],
  ['wasp (next August)',       /wasp|hornet|yellow.?jacket/i, 'wasp', 0.212],
  ['wildlife / attic',         /raccoon|squirrel|attic|chimney|skunk|groundhog/i, 'wildlife', 0.465],
  ['ants',                     /\bants?\b|carpenter ant/i, 'crawlers', 0.20],
  ['fleas',                    /flea/i, 'crawlers', 0.20],
]
const used = new Set()
const groups = []
for (const [name, re, cluster, epc] of TOPIC) {
  const g = cands.filter(q=>!used.has(q.query) && re.test(q.query))
  g.forEach(q=>used.add(q.query))
  if (g.length) groups.push({name, g, cluster, epc})
}
const other = cands.filter(q=>!used.has(q.query))

console.log('  topic                             queries  impressions  clicks   avg pos   EPC     est $/mo if top-3')
for (const {name,g,epc} of groups.sort((a,b)=>b.g.reduce((s,q)=>s+q.impressions,0)-a.g.reduce((s,q)=>s+q.impressions,0))) {
  const i=g.reduce((s,q)=>s+q.impressions,0), c=g.reduce((s,q)=>s+q.clicks,0)
  const pos=g.reduce((s,q)=>s+q.position*q.impressions,0)/i
  // top-3 on commercial queries measured at 2.93% site-wide; use 8% for these
  // (they are short commercial terms, and our own best ones hit 10-21%)
  const projClicks = i*0.08, projEarn = projClicks*0.22*epc
  console.log(`  ${name.padEnd(33)} ${String(g.length).padStart(6)}  ${i.toLocaleString().padStart(10)}  ${String(c).padStart(6)}   ${pos.toFixed(1).padStart(6)}   $${epc.toFixed(3)}   $${projEarn.toFixed(0).padStart(5)}`)
}
console.log(`  ${'(uncategorised)'.padEnd(33)} ${String(other.length).padStart(6)}  ${other.reduce((s,q)=>s+q.impressions,0).toLocaleString().padStart(10)}`)

console.log('\n' + '='.repeat(96))
console.log('THE BUILD LIST — top orphaned queries by impressions')
console.log('='.repeat(96))
for (const {name,g} of groups) {
  const top = g.sort((a,b)=>b.impressions-a.impressions).slice(0,4)
  console.log(`\n  ${name}`)
  for (const q of top)
    console.log(`    ${String(q.impressions).padStart(6)} impr ${String(q.clicks).padStart(3)} clk  pos ${q.position.toFixed(1).padStart(5)}  ${q.query}`)
}
console.log('\n  uncategorised, top 12:')
for (const q of other.slice(0,12))
  console.log(`    ${String(q.impressions).padStart(6)} impr ${String(q.clicks).padStart(3)} clk  pos ${q.position.toFixed(1).padStart(5)}  ${q.query}`)
