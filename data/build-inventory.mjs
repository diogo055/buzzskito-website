// Stage A tasks 3, 5(base), 7, 8, 11, 12 — built from the corrected pulls.
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs'
const rd = f => JSON.parse(readFileSync(f, 'utf-8'))
const strip = u => u.replace(/^https?:\/\/buzzskito\.ca/,'').replace(/\/$/,'') || '/'

const scan = rd('seo-audit/scan-aug31/gsc_full_scan.json')          // 28d pages+queries (complete, no country)
const q84 = { all: rd('data/gsc/q84_all.json'), usa: rd('data/gsc/q84_usa.json'), can: rd('data/gsc/q84_can.json') }
const qp84 = { usa: rd('data/gsc/qp84_usa.json'), can: rd('data/gsc/qp84_can.json') }
const monthly = rd('data/gsc/monthly_pages_all.json')
const affil = rd('data/affiliate-links.json')

// ── page-level metadata from repo ──────────────────────────────────────────
const constants = readFileSync('lib/constants.ts', 'utf-8')
const regMeta = new Map()
for (const m of constants.matchAll(/\{\s*slug:\s*"([^"]+)",\s*title:\s*"((?:[^"\\]|\\.)*)",\s*excerpt:\s*"(?:[^"\\]|\\.)*",\s*date:\s*"([^"]+)",\s*category:\s*"(\w+)"/g))
  regMeta.set(m[1], { title: m[2].replace(/\\u2014/g,'—').replace(/\\"/g,'"'), date: m[3], category: m[4] })

const vertical = (s) => {
  if (/dehumidifier|vapour-barrier|sump-pump|damp|humidity|air-purifier|hepa/.test(s)) return 'home-air-water'
  if (/steam|dupray|upholstery/.test(s)) return 'steamer'
  if (/bed-bug|bedbug/.test(s)) return 'bedbug'
  if (/raccoon|squirrel|deer(?!-fl)|skunk|wildlife|groundhog|chipmunk|opossum|coyote|rabbit|attic|chimney/.test(s)) return 'wildlife'
  if (/wasp|hornet|yellow-?jacket/.test(s)) return 'wasp'
  if (/roach|cockroach|advion/.test(s)) return 'roach'
  if (/\brat|mice|mouse|rodent|vole/.test(s)) return 'rodent'
  if (/ant[s-]|carpenter-ant|flea|spider|silverfish|centipede|earwig|boxelder|stink|cluster-fl|fruit-fl|drain-fl|house-fl|gnat|moth/.test(s)) return 'crawlers-flies'
  if (/tick|lyme/.test(s)) return 'tick'
  if (/mosquito|repellent|deet|picaridin|thermacell|bite|larvae|bug-zapper|no-see-um|midge|black-fl|deer-fl|horse-fl|chigger|screen|gazebo|pergola|patio|fire-pit|fogger|dunks|bits|bti/.test(s)) return 'mosquito'
  return 'general'
}
const pageType = (s) => {
  if (/^best-|-review|vs-|-vs-|comparison/.test(s)) return /vs/.test(s) ? 'comparison' : 'product-review'
  if (/what-does|look-like|identification|-id-|stains|droppings|poop|bites?$|bites?-/.test(s)) return 'identification'
  return 'informational'
}
const market = (s) => /canada|ontario|toronto|gta|canadian|-ttc/.test(s) ? 'CA' : 'both'

// GSC joins
const p28 = new Map(scan.pages.map(r => [strip(r.page), r]))
const linkCount = {}
for (const l of affil.links) linkCount[l.page] = (linkCount[l.page]||0)+1
// per-page best query (from qp84 merged) + per-page market ratio
const bestQ = new Map(), usClk = new Map(), caClk = new Map()
for (const [tag, ds] of [['usa', qp84.usa], ['can', qp84.can]])
  for (const r of ds.rows) {
    const p = strip(r.p)
    const m = tag === 'usa' ? usClk : caClk
    m.set(p, (m.get(p)||0) + r.clicks)
    const cur = bestQ.get(p)
    if (!cur || r.clicks > cur.clicks) bestQ.set(p, { q: r.q, clicks: r.clicks, pos: r.pos })
  }

const inventory = []
for (const dir of readdirSync('app/blog', {withFileTypes:true})) {
  if (!dir.isDirectory()) continue
  const slug = dir.name, fp = `app/blog/${slug}/page.tsx`
  if (!existsSync(fp)) continue
  const src = readFileSync(fp, 'utf-8')
  const route = `/blog/${slug}`
  const g = p28.get(route)
  const us = usClk.get(route)||0, ca = caClk.get(route)||0
  const prose = src.replace(/<[^>]+>/g,' ').replace(/\{[^}]*\}/g,' ').split(/\s+/).filter(w=>/^[A-Za-z][A-Za-z'-]+$/.test(w)).length
  inventory.push({
    url: route, title: regMeta.get(slug)?.title || null, vertical: vertical(slug), pageType: pageType(slug),
    targetMarket: market(slug), category: regMeta.get(slug)?.category || null,
    publishDate: regMeta.get(slug)?.date || null,
    approxWords: prose, images: (src.match(/<Image\b/g)||[]).length,
    clicks28d: g?.clicks||0, impressions28d: g?.impressions||0, position28d: g?.position||null,
    usShareEst: (us+ca) ? +(us/(us+ca)).toFixed(3) : null,
    bestQuery: bestQ.get(route)?.q || null, bestQueryPos: bestQ.get(route)?.pos || null,
    affiliateLinks: linkCount[route]||0,
  })
}
// service/city pages (non-blog)
for (const r of scan.pages) {
  const p = strip(r.page)
  if (p.startsWith('/blog/') || p === '/' || p.startsWith('[http')) continue
  inventory.push({ url: p, title: null, vertical: 'service/other', pageType: 'service',
    targetMarket: 'CA', clicks28d: r.clicks, impressions28d: r.impressions, position28d: r.position,
    affiliateLinks: linkCount[p]||0 })
}
inventory.sort((a,b)=>b.clicks28d-a.clicks28d)
writeFileSync('data/content-inventory.json', JSON.stringify({ generated:'2026-09-01',
  caveats:['usShareEst from pruned qp84 country-filtered data (ratio only)','approxWords is source-derived estimate'],
  pages: inventory }, null, 1))
console.log(`inventory: ${inventory.length} pages (${inventory.filter(p=>p.url.startsWith('/blog/')).length} blog)`)

// ── striking-distance base (task 5) ────────────────────────────────────────
const usQ = new Map(q84.usa.rows.map(r=>[r.q, r])), caQ = new Map(q84.can.rows.map(r=>[r.q, r]))
const sd = []
for (const r of q84.all.rows) {
  if (r.pos < 4 || r.pos > 20 || r.impr < 60) continue
  const u = usQ.get(r.q), c = caQ.get(r.q)
  const mkt = u && (!c || u.impr > c.impr) ? 'US' : 'CA'
  const mr = mkt==='US' ? u : c
  sd.push({ query: r.q, market: mkt, pos: mr ? mr.pos : r.pos, clicks84d: r.clicks, impr84d: r.impr })
}
sd.sort((a,b)=>b.impr84d-a.impr84d)
writeFileSync('data/gsc/striking-distance-base.json', JSON.stringify(sd))
console.log(`striking-distance base: ${sd.length} queries pos 4-20 (US: ${sd.filter(x=>x.market==='US').length}, CA: ${sd.filter(x=>x.market==='CA').length})`)

// ── cannibalization (task 8) ───────────────────────────────────────────────
const byQ = {}
for (const ds of [qp84.usa, qp84.can])
  for (const r of ds.rows) {
    byQ[r.q] = byQ[r.q] || {}
    byQ[r.q][strip(r.p)] = (byQ[r.q][strip(r.p)]||0) + r.impr
  }
const cann = Object.entries(byQ)
  .map(([q, pages]) => ({ q, pages: Object.entries(pages).filter(([,i])=>i>=30).sort((a,b)=>b[1]-a[1]) }))
  .filter(x => x.pages.length >= 2)
  .sort((a,b)=>b.pages.reduce((s,[,i])=>s+i,0)-a.pages.reduce((s,[,i])=>s+i,0))
let md = '# Cannibalization — queries with 2+ pages earning impressions (84d, ≥30 impr each)\n\n'
md += 'Generated 2026-09-01. FLAG ONLY — no fixes without owner approval per brief task 8.\n'
md += 'Source: qp84 country-filtered pulls (pruned; treat impressions as relative).\n\n'
for (const x of cann.slice(0, 40)) {
  md += '## "' + x.q + '"\n'
  for (const [p, i] of x.pages) md += '- ' + p + ' — ' + i + ' impr\n'
  md += '\n'
}
md += '\nTotal flagged: ' + cann.length + ' queries.\n'
writeFileSync('data/cannibalization.md', md)
console.log(`cannibalization: ${cann.length} queries flagged`)

// ── decay (task 11) ────────────────────────────────────────────────────────
const mm = Object.fromEntries(monthly.map(b=>[b.month, new Map(b.rows.map(r=>[strip(r.p), r]))]))
const rows = []
for (const pg of inventory.filter(p=>p.url.startsWith('/blog/'))) {
  const feb = mm['2026-02'] ? mm['2026-02'].get(pg.url) : null
  const aug = mm['2026-08'] ? mm['2026-08'].get(pg.url) : null
  if (!feb || feb.clicks < 20) continue
  if (aug && aug.clicks >= feb.clicks * 0.7) continue
  if (pg.vertical === 'mosquito' || pg.vertical === 'tick') continue
  rows.push({ url: pg.url, feb: feb.clicks, aug: aug ? aug.clicks : 0 })
}
writeFileSync('data/content-decay.csv', 'page,clicks_feb2026,clicks_aug2026\n' + rows.map(r=>`${r.url},${r.feb},${r.aug}`).join('\n'))
console.log(`decay: ${rows.length} pages (site is young — Feb baseline tiny; expect few)`)

// ── traffic geography (task 12, report-only) ───────────────────────────────
const svc = inventory.filter(p=>p.pageType==='service')
const svcClicks = svc.reduce((s,p)=>s+p.clicks28d,0)
const blogClicks = inventory.filter(p=>p.url.startsWith('/blog/')).reduce((s,p)=>s+p.clicks28d,0)
writeFileSync('data/traffic-geography.md', `# Traffic geography (report-only — build nothing off this)

Generated 2026-09-01 from complete GSC pulls.

## Market split (complete country-dimension data, Aug 2026)
- Canada: 6,263 clicks (66.6%) · US: 1,431 (15.2%) · rest: 1,712 (18.2%)
- US share trend: May 3.5% -> Jun 5.7% -> Jul 11.1% -> Aug 15.2% — growing fast off the identification pages.
- CONTRADICTS the brief's "33% US" (Ahrefs estimate). GSC is truth per section 11.

## Service vs content (28d)
- Service/city/other pages: ${svcClicks.toLocaleString()} clicks across ${svc.length} pages
- Blog/content pages: ${blogClicks.toLocaleString()} clicks
- GSC has no city dimension, so in-service-area vs out-of-area cannot be measured from search data alone; the CA + service-page split above is the closest proxy. GA4 city data would be needed for a true measure.
`)
console.log(`traffic-geo: service ${svcClicks} vs blog ${blogClicks} clicks`)
