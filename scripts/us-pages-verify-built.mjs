// Post-build verification for the Oct 2026 North American guides. Run after `next build`.
//
//   node scripts/us-pages-verify-built.mjs [<dir of pre-change built HTML for edited pages>]
//
// Checks, in the HTML that will actually be served:
//   NEW PAGES      exist; one <title> of 60 characters or fewer; correct canonical; FAQPage and
//                  BreadcrumbList structured data (HowTo where planned); no Amazon or retailer
//                  link; hreflang on the regional pairs; at least one inbound link from another
//                  page and at least 3 from other new pages
//   SITEMAP        lists every new URL with the publish date, hubs before guides
//   EDITED PAGES   (when a "before" directory is given) title, canonical, H1 and structured
//                  data types unchanged, word count not lower, and the set of Amazon links
//                  byte-identical
import { readFileSync, readdirSync, existsSync, statSync } from 'fs'
import { join, relative, sep } from 'path'

const ROOT = process.cwd()
const OUT = join(ROOT, '.next', 'server', 'app')
const plan = JSON.parse(readFileSync(join(ROOT, 'data', 'us-pages', 'plan.json'), 'utf8'))
const beforeDir = process.argv[2]
const SITE = 'https://buzzskito.ca'
const problems = [], notes = []
const bad = (m) => problems.push(m)

const htmlOf = (route) => { const f = join(OUT, `${route === '/' ? 'index' : route.slice(1)}.html`); return existsSync(f) ? readFileSync(f, 'utf8') : null }
const text = (html) => html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ')
const wc = (html) => (text(html).match(/[A-Za-z][A-Za-z'’-]{2,}/g) || []).length
const title = (html) => { const m = html.match(/<title>([^<]*)<\/title>/g) || []; return { n: m.length, t: m[0] ? m[0].replace(/<\/?title>/g, '').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"') : '' } }
const canonical = (html) => (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1] || ''
const h1 = (html) => ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '').replace(/<[^>]+>/g, '').trim()
const ldTypes = (html) => { const out = []; for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { const j = JSON.parse(m[1]); for (const o of Array.isArray(j) ? j : [j]) out.push([].concat(o['@type'] || []).join('+')) } catch { out.push('UNPARSEABLE') } } return out.sort() }
const hrefs = (html) => Array.from(html.matchAll(/<a\b[^>]*\bhref="([^"#?]+)[^"]*"/g)).map((m) => m[1])
// anchors only: the layout carries a sitewide <link rel="preconnect" href="https://www.amazon.ca">, which is not a link
const amazon = (html) => Array.from(html.matchAll(/<a\b[^>]*\bhref="(https?:\/\/(?:www\.)?(?:amazon\.|amzn\.)[^"]+)"/g)).map((m) => m[1].replace(/&amp;/g, '&')).sort()

// ── all built pages and who links to whom ───────────────────────────────────────
const built = {}
const walk = (dir) => { for (const n of readdirSync(dir)) { const f = join(dir, n); if (statSync(f).isDirectory()) walk(f); else if (n.endsWith('.html')) { const rel = relative(OUT, f).split(sep).join('/').replace(/\.html$/, ''); built[rel === 'index' ? '/' : `/${rel}`] = f } } }
if (!existsSync(OUT)) { console.error('no build output; run the build first'); process.exit(1) }
walk(OUT)
const newPaths = plan.pages.map((p) => p.path)
const extra = ['/pest-product-guides/ant-control', '/pest-product-guides/cockroach-control']
const isNew = new Set(newPaths)
const inAny = Object.fromEntries([...newPaths, ...extra].map((p) => [p, 0])), inNew = Object.fromEntries(newPaths.map((p) => [p, 0]))
for (const [route, file] of Object.entries(built)) {
  const html = readFileSync(file, 'utf8')
  // only links in the page body count: header and footer navigation are on every page
  const main = html.replace(/<header[\s\S]*?<\/header>/g, '').replace(/<footer[\s\S]*?<\/footer>/g, '')
  for (const h of new Set(hrefs(main))) { if (h in inAny && h !== route) { inAny[h]++; if (isNew.has(route) && h in inNew) inNew[h]++ } }
}

// ── new pages ───────────────────────────────────────────────────────────────────
const pairs = Array.from(readFileSync(join(ROOT, 'lib', 'guides.ts'), 'utf8').matchAll(/\{ us: '([^']+)', ca: '([^']+)' \}/g)).map((m) => ({ us: m[1], ca: m[2] }))
let ok = 0
for (const p of plan.pages) {
  const html = htmlOf(p.path)
  if (!html) { bad(`${p.path}: not built`); continue }
  const before = problems.length
  const t = title(html)
  if (t.n !== 1) bad(`${p.path}: ${t.n} <title> tags`)
  if (t.t.length > 60) bad(`${p.path}: title is ${t.t.length} characters ("${t.t}")`)
  if (!/ \| BuzzSkito$/.test(t.t)) bad(`${p.path}: title does not end with the brand ("${t.t}")`)
  if (canonical(html) !== SITE + p.path) bad(`${p.path}: canonical is "${canonical(html)}"`)
  if (/name="robots" content="[^"]*noindex/.test(html)) bad(`${p.path}: noindex`)
  const types = ldTypes(html)
  for (const need of ['FAQPage', 'BreadcrumbList', 'BlogPosting']) if (!types.includes(need)) bad(`${p.path}: missing ${need} structured data`)
  if (types.includes('UNPARSEABLE')) bad(`${p.path}: a structured data block does not parse`)
  if (p.flags.includes('howto') && !types.includes('HowTo')) bad(`${p.path}: planned as a how-to but has no HowTo structured data`)
  if (amazon(html).length || /<a\b[^>]*\bhref="https?:\/\/[^"]*(walmart\.|homedepot\.|lowes\.|chewy\.|ebay\.|target\.com)/.test(html)) bad(`${p.path}: contains a retailer link`)
  if (!h1(html)) bad(`${p.path}: no H1`)
  const w = wc(html)
  if (w < p.minWords) bad(`${p.path}: only ${w} words rendered (needs ${p.minWords})`)
  if (!/class="[^"]*max-w-3xl mx-auto prose-brand/.test(html)) bad(`${p.path}: the article container Mediavine targets is missing`)
  if (inAny[p.path] < 1) bad(`${p.path}: no other page links to it`)
  if (inNew[p.path] < 3) bad(`${p.path}: only ${inNew[p.path]} inbound links from other new pages (needs 3)`)
  const pair = pairs.find((x) => x.us === p.path)
  if (pair && !(html.includes(`hrefLang="en-CA"`) || html.includes(`hreflang="en-CA"`))) bad(`${p.path}: has a Canadian edition but no hreflang`)
  if (problems.length === before) ok++
}
for (const e of extra) { const html = htmlOf(e); if (!html) bad(`${e}: not built`); else if (inAny[e] < 1) bad(`${e}: no page links to it`) }
for (const pair of pairs) { const html = htmlOf(pair.ca); if (html && !(html.includes(`hrefLang="en-US"`) || html.includes(`hreflang="en-US"`))) bad(`${pair.ca}: Canadian edition has no hreflang pointing at the US edition`) }

// ── sitemap ─────────────────────────────────────────────────────────────────────
const smFile = [join(OUT, 'sitemap.xml.body'), join(OUT, 'sitemap.xml')].find(existsSync)
if (!smFile) bad('sitemap.xml not found in the build output')
else {
  const sm = readFileSync(smFile, 'utf8')
  const locs = Array.from(sm.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*(?:<lastmod>([^<]+)<\/lastmod>)?/g)).map((m) => ({ loc: m[1], lastmod: m[2] || '' }))
  const idx = Object.fromEntries(locs.map((l, i) => [l.loc, i]))
  for (const p of [...newPaths, ...extra]) {
    const l = locs.find((x) => x.loc === SITE + p)
    if (!l) bad(`sitemap: missing ${p}`)
    else if (!l.lastmod.startsWith('2026-10-0')) bad(`sitemap: ${p} has lastmod ${l.lastmod}`)
  }
  const firstSpoke = Math.min(...plan.pages.filter((p) => p.kind === 'spoke').map((p) => idx[SITE + p.path] ?? Infinity))
  for (const p of plan.pages.filter((x) => x.kind === 'pillar')) if ((idx[SITE + p.path] ?? Infinity) > firstSpoke) bad(`sitemap: hub ${p.path} is listed after its guides`)
  notes.push(`sitemap: ${locs.length} URLs`)
}

// ── edited existing pages: nothing lost ─────────────────────────────────────────
let edited = 0
if (beforeDir && existsSync(beforeDir)) {
  for (const f of readdirSync(beforeDir).filter((x) => x.endsWith('.html'))) {
    const route = f === 'index.html' ? '/' : `/${f.replace(/\.html$/, '').replace(/__/g, '/')}`
    const a = readFileSync(join(beforeDir, f), 'utf8'), b = htmlOf(route)
    if (!b) { bad(`${route}: was built before, missing now`); continue }
    edited++
    if (canonical(a) !== canonical(b)) bad(`${route}: canonical changed`)
    if (title(a).t !== title(b).t) notes.push(`${route}: title changed "${title(a).t}" -> "${title(b).t}"`)
    if (h1(a) !== h1(b)) bad(`${route}: H1 changed`)
    const ta = ldTypes(a), tb = ldTypes(b)
    for (const t of new Set(ta)) if (!tb.includes(t)) bad(`${route}: lost ${t} structured data`)
    if (wc(b) < wc(a) * 0.98) bad(`${route}: word count fell ${wc(a)} -> ${wc(b)}`)
    const za = amazon(a), zb = amazon(b)
    if (za.join('\n') !== zb.join('\n')) bad(`${route}: Amazon links changed (${za.length} before, ${zb.length} after)`)
    if (/noindex/.test(b) && !/noindex/.test(a)) bad(`${route}: noindex introduced`)
    const la = new Set(hrefs(a).filter((h) => h.startsWith('/'))), lb = new Set(hrefs(b).filter((h) => h.startsWith('/')))
    const lost = [...la].filter((h) => !lb.has(h))
    if (lost.length) bad(`${route}: lost internal links: ${lost.slice(0, 5).join(', ')}${lost.length > 5 ? ' …' : ''}`)
  }
}

console.log(`new pages: ${ok}/${plan.pages.length} pass every check | edited existing pages compared: ${edited} | ${notes.join(' | ')}`)
const lo = Object.entries(inNew).sort((a, b) => a[1] - b[1]).slice(0, 5).map(([p, n]) => `${p} ${n}`)
console.log(`fewest inbound links from new pages: ${lo.join(', ')}`)
for (const n of notes.filter((x) => x.includes('title changed'))) console.log(`  note  ${n}`)
if (problems.length) { console.log(`✗ ${problems.length} problem(s)`); for (const p of problems.slice(0, 400)) console.log(`   - ${p}`); if (problems.length > 400) console.log(`   … and ${problems.length - 400} more`); process.exit(1) }
console.log('✓ built output verified')
