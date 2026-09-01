// Stage A task 9: /data/affiliate-links.json — every affiliate link on the site.
// Source of truth is the component usage in page source; clicks joined from the
// Aug 28d GSC page pull. Prices/commissions are NOT scraped (Associates 24h rule);
// the tag column identifies the commission cluster instead.
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs'

const gsc = JSON.parse(readFileSync('seo-audit/scan-aug31/gsc_full_scan.json','utf-8'))
const clicksByPath = new Map(gsc.pages.map(r=>[r.page.replace(/^https?:\/\/buzzskito\.ca/,'').replace(/\/$/,''), r.clicks]))

const ROOTS = ['app/blog', 'app/pest-product-guides']
const links = []
const compRe = /<(BuyLink|AmazonLink|AwardRow|StickyBuyBar|AwardCard)\b([^>]*?)(?:\/>|>([^<]{0,120}))/gs
const attr = (s, name) => (s.match(new RegExp(name + '=\{?["\']([^"\'}]+)["\']', ''))||[])[1] || null

for (const root of ROOTS) {
  for (const dir of readdirSync(root, {withFileTypes:true})) {
    if (!dir.isDirectory()) continue
    const fp = `${root}/${dir.name}/page.tsx`
    if (!existsSync(fp)) continue
    const src = readFileSync(fp, 'utf-8')
    const totalLines = src.split('\n').length
    const route = root === 'app/blog' ? `/blog/${dir.name}` : `/pest-product-guides/${dir.name}`
    let m
    compRe.lastIndex = 0
    while ((m = compRe.exec(src))) {
      const [ , comp, attrs, inner ] = m
      const line = src.slice(0, m.index).split('\n').length
      links.push({
        page: route,
        component: comp,
        search: attr(attrs, 'search'),
        asin: attr(attrs, 'asin'),
        name: attr(attrs, 'name') || (inner||'').trim().slice(0,80) || null,
        label: attr(attrs, 'label'),
        line, depthPct: Math.round(line/totalLines*100),
        pageClicks28d: clicksByPath.get(route) ?? 0,
      })
    }
  }
}
links.sort((a,b)=>b.pageClicks28d-a.pageClicks28d || a.page.localeCompare(b.page) || a.line-b.line)
writeFileSync('data/affiliate-links.json', JSON.stringify({
  generated: '2026-09-01',
  note: 'search= links let Amazon pick the product; asin= links are verified pins. Tag = tagForSlug(slug) at render time (15 cluster IDs). No prices stored (Associates 24h rule).',
  count: links.length, links }, null, 1))

const byComp = {}
for (const l of links) byComp[l.component] = (byComp[l.component]||0)+1
const pinned = links.filter(l=>l.asin).length
const pages = new Set(links.map(l=>l.page))
console.log(`links: ${links.length} across ${pages.size} pages`)
console.log('by component:', JSON.stringify(byComp))
console.log(`ASIN-pinned: ${pinned} · search-only: ${links.length-pinned}`)
const zeroLink = [...clicksByPath.entries()].filter(([p,c])=>p.startsWith('/blog/') && c>=50 && !pages.has(p))
console.log(`\npages with 50+ clicks/28d and ZERO affiliate components: ${zeroLink.length}`)
for (const [p,c] of zeroLink.sort((a,b)=>b[1]-a[1]).slice(0,15)) console.log(`  ${String(c).padStart(5)} clk  ${p}`)
