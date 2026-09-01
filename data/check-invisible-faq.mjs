// Independent verification: pages calling faqSchema(X) but never rendering X in JSX.
// Google's FAQPage guidelines require the Q&A content to be visible on the page.
// Accounts for the prop pattern (faqs={FAQS} -> GuideHub renders it).
import { readFileSync, readdirSync, existsSync, writeFileSync } from 'fs'

const roots = ['app/blog', 'app/learn', 'app/pest-product-guides']
const offenders = []
let emit = 0, render = 0

for (const root of roots) {
  if (!existsSync(root)) continue
  for (const d of readdirSync(root, { withFileTypes: true })) {
    if (!d.isDirectory()) continue
    const fp = `${root}/${d.name}/page.tsx`
    if (!existsSync(fp)) continue
    const s = readFileSync(fp, 'utf-8')
    const m = s.match(/faqSchema\(\s*([A-Za-z_$][\w$]*)\s*\)/)
    if (!m) continue
    emit++
    const v = m[1]
    const rendered =
      new RegExp(`\\{\\s*${v}\\.map\\b`).test(s) ||          // {FAQS.map(...)}
      new RegExp(`faqs=\\{${v}\\}`).test(s) ||               // faqs={FAQS} prop
      new RegExp(`${v}\\.map\\s*\\(`).test(s.split('return (')[1] || '') // FAQS.map( in JSX body
    if (rendered) render++
    else offenders.push({ page: `${root.replace('app', '')}/${d.name}`, v, pairs: (s.match(/question:/g) || []).length })
  }
}

console.log(`pages calling faqSchema: ${emit}`)
console.log(`rendering the FAQ visibly:  ${render}`)
console.log(`NOT rendering (offenders):  ${offenders.length}`)
console.log(`invisible Q&A pairs total:  ${offenders.reduce((s, o) => s + o.pairs, 0)}`)

const inv = JSON.parse(readFileSync('data/content-inventory.json', 'utf-8')).pages
const byUrl = new Map(inv.map(p => [p.url, p]))
const withT = offenders
  .map(o => {
    const p = byUrl.get(o.page)
    return { ...o, clicks: p ? p.clicks28d : 0, impr: p ? p.impressions28d : 0, vertical: p ? p.vertical : null }
  })
  .sort((a, b) => b.impr - a.impr)

console.log(`\ntotal impressions on offender pages: ${withT.reduce((s, o) => s + o.impr, 0).toLocaleString()}`)
console.log(`total clicks: ${withT.reduce((s, o) => s + o.clicks, 0).toLocaleString()}\n`)
console.log('top 20 by impressions:')
for (const o of withT.slice(0, 20))
  console.log(`  ${String(o.impr).padStart(7)} impr ${String(o.clicks).padStart(4)} clk  ${String(o.pairs).padStart(2)} Q&A  ${o.page}`)

writeFileSync('data/invisible-faq-pages.json', JSON.stringify({ generated: '2026-09-01', count: withT.length, pages: withT }, null, 1))
console.log('\n-> data/invisible-faq-pages.json')
