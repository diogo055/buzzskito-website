import { readFileSync, existsSync } from 'fs'
const d = JSON.parse(readFileSync('gsc_full_scan.json','utf-8'))
const p = (u) => u.replace('https://buzzskito.ca','').replace('http://buzzskito.ca','[http]') || '/'
const cur = d.pages.filter(r=>r.page.includes('buzzskito.ca'))
const prev = new Map(d.pages_prev.map(r=>[p(r.page),r]))
const sum=(a,k)=>a.reduce((s,r)=>s+r[k],0)
const pct=(a,b)=>b?((a/b)*100).toFixed(2)+'%':'—'

console.log('='.repeat(84))
console.log(`MONTH OVER MONTH — ${d.current_window.start} to ${d.current_window.end}`)
console.log('='.repeat(84))
const TI=sum(cur,'impressions'), TC=sum(cur,'clicks')
const PI=sum(d.pages_prev,'impressions'), PC=sum(d.pages_prev,'clicks')
console.log(`  impressions  ${PI.toLocaleString().padStart(9)} -> ${TI.toLocaleString().padStart(9)}  +${((TI/PI-1)*100).toFixed(0)}%`)
console.log(`  clicks       ${PC.toLocaleString().padStart(9)} -> ${TC.toLocaleString().padStart(9)}  +${((TC/PC-1)*100).toFixed(0)}%`)
console.log(`  CTR          ${pct(PC,PI).padStart(9)} -> ${pct(TC,TI).padStart(9)}`)

// The 40 pages shipped Aug 22
const NEW = readFileSync('../../lib/constants.ts','utf-8')
const wave = [...NEW.matchAll(/slug:\s*"([^"]+)"/g)].map(m=>m[1])
const shipped = new Set()
const block = NEW.split('NEW_BLOGS_HIGH_BASKET_AUG22')[1] || ''
for (const m of block.matchAll(/slug:\s*"([^"]+)"/g)) shipped.add(m[1])
// plus wave-1 named arrays
for (const name of ['NEW_BLOGS_DEHUMIDIFIER_PRO','NEW_BLOGS_DEHUMIDIFIER_SPACES','NEW_BLOGS_AUTUMN_EXCLUSION','NEW_BLOGS_STEAMER_HOME','NEW_BLOGS_STEAMER_LANDLORD','NEW_BLOGS_BEDBUG_HIGH_TICKET','NEW_BLOGS_WINTER_EARNERS','NEW_BLOGS_44','NEW_BLOGS_47','NEW_BLOGS_49']) {
  const b = NEW.split('export const '+name)[1]?.split('export const')[0] || ''
  for (const m of b.matchAll(/slug:\s*"([^"]+)"/g)) shipped.add(m[1])
}
const newPages = cur.filter(r=>shipped.has(p(r.page).replace('/blog/','')))
console.log('\n' + '='.repeat(84))
console.log(`THE AUG 22 WAVE — ${shipped.size} slugs registered, ${newPages.length} now have GSC data`)
console.log('='.repeat(84))
console.log(`  impressions ${sum(newPages,'impressions').toLocaleString()} · clicks ${sum(newPages,'clicks')} · CTR ${pct(sum(newPages,'clicks'),sum(newPages,'impressions'))}`)
console.log('\n  top performers so far:')
for (const r of [...newPages].sort((a,b)=>b.clicks-a.clicks).slice(0,12))
  console.log(`    ${String(r.impressions).padStart(6)} impr ${String(r.clicks).padStart(4)} clk  pos ${String(r.position).padStart(6)}  ${p(r.page)}`)
const zero = newPages.filter(r=>r.clicks===0).length
console.log(`\n  ${zero} of ${newPages.length} have zero clicks yet (normal at 9 days old)`)

console.log('\n' + '='.repeat(84))
console.log('BIGGEST CLICK GAINS SITEWIDE')
console.log('='.repeat(84))
const moved = cur.map(r=>{const q=prev.get(p(r.page)); return {...r, path:p(r.page), was:q?q.clicks:0, isNew:!q}})
  .sort((a,b)=>(b.clicks-b.was)-(a.clicks-a.was))
for (const r of moved.slice(0,14))
  console.log(`  ${String(r.was).padStart(5)} -> ${String(r.clicks).padStart(5)}  (+${String(r.clicks-r.was).padStart(4)}) ${r.isNew?'NEW ':'    '} ${r.path}`)
console.log('\n  LOSSES')
for (const r of moved.slice(-6).reverse())
  console.log(`  ${String(r.was).padStart(5)} -> ${String(r.clicks).padStart(5)}  (${String(r.clicks-r.was).padStart(5)})      ${r.path}`)
