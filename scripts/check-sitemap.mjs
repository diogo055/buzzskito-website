// Build guard for the sitemap. Reads the BUILT site (.next/server/app), so run after `next build`.
//
//   node scripts/check-sitemap.mjs
//
// A sitemap only helps if every address in it is the page's one true address. This fails the
// build when:
//   1. a listed address has no built page, is marked noindex, or is redirected by next.config.mjs
//   2. a listed page's canonical or og:url names a DIFFERENT address
//      (the bug this was written for: two pages renamed in Sep 2026 kept pointing their canonical
//      at the old address, which redirected straight back to them, for five weeks)
//   3. a listed page's structured data gives a redirected address as the page's own address
//   4. the file has a duplicate, a non-https or non-apex address, a trailing slash or a query
//   5. a page that search engines can index is missing from the sitemap
//   6. a lastmod is missing or in the future
import { readFileSync, readdirSync, statSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const APP = join(ROOT, '.next', 'server', 'app')
const SITE = 'https://buzzskito.ca'
// REHEARSAL_DATE is set only by .github/workflows/release-rehearsal.yml: "now" is the end of that
// release day, so the pages released that day do not count as dated in the future.
const NOW = /^\d{4}-\d{2}-\d{2}$/.test(process.env.REHEARSAL_DATE || '') ? Date.parse(`${process.env.REHEARSAL_DATE}T23:59:59Z`) : Date.now()
const body = join(APP, 'sitemap.xml.body')
if (!existsSync(body)) { console.log('check:sitemap: no built sitemap found, run `next build` first'); process.exit(1) }

const xml = readFileSync(body, 'utf8')
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: (m[1].match(/<loc>([^<]*)<\/loc>/) || [])[1] || '',
  lastmod: (m[1].match(/<lastmod>([^<]*)<\/lastmod>/) || [])[1] || '',
}))

// addresses that next.config.mjs redirects away (exact sources only; pattern sources cannot be a page)
const cfg = readFileSync(join(ROOT, 'next.config.mjs'), 'utf8')
const redirected = new Set([...cfg.matchAll(/source:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]).filter((s) => !/[:*(]/.test(s)).map((s) => s.replace(/\/$/, '') || '/'))

const pathOf = (url) => { const p = url.replace(SITE, '').replace(/\/$/, ''); return p === '' ? '/' : p }
const fileOf = (path) => join(APP, path === '/' ? 'index.html' : `${path.slice(1)}.html`)
const tag = (html, re) => (html.match(re) || [])[1] || null
const problems = []
const seen = new Set()

for (const { loc, lastmod } of entries) {
  if (seen.has(loc)) problems.push(`${loc}: listed twice`)
  seen.add(loc)
  if (!(loc === SITE || loc.startsWith(`${SITE}/`))) { problems.push(`${loc}: not an https://buzzskito.ca address`); continue }
  if (/[?#]/.test(loc) || (loc.endsWith('/') && loc !== `${SITE}/`)) problems.push(`${loc}: has a query, a # or a trailing slash`)
  if (!lastmod || Number.isNaN(Date.parse(lastmod))) problems.push(`${loc}: no valid lastmod`)
  else if (Date.parse(lastmod) > NOW + 36e5 * 24) problems.push(`${loc}: lastmod ${lastmod} is in the future`)
  const path = pathOf(loc)
  if (redirected.has(path)) { problems.push(`${loc}: listed, but next.config.mjs redirects it`); continue }
  const file = fileOf(path)
  if (!existsSync(file)) { problems.push(`${loc}: listed, but no page was built for it`); continue }
  const html = readFileSync(file, 'utf8')
  if (/noindex/i.test(tag(html, /<meta name="robots" content="([^"]*)"/) || '')) problems.push(`${loc}: listed, but the page is noindex`)
  const canonical = tag(html, /<link rel="canonical" href="([^"]*)"/)
  if (!canonical) problems.push(`${loc}: the page has no canonical`)
  else if (pathOf(canonical) !== path) problems.push(`${loc}: canonical points at ${canonical}`)
  const ogUrl = tag(html, /<meta property="og:url" content="([^"]*)"/)
  if (ogUrl && pathOf(ogUrl) !== path) problems.push(`${loc}: og:url is ${ogUrl}`)
  // structured data must not give a redirected address as this page's own address
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    let data
    try { data = JSON.parse(m[1]) } catch { continue }
    for (const node of Array.isArray(data) ? data : [data]) {
      if (!node || typeof node !== 'object') continue
      const own = [node.url, node['@id'], typeof node.mainEntityOfPage === 'string' ? node.mainEntityOfPage : node.mainEntityOfPage && node.mainEntityOfPage['@id']]
      for (const u of own) if (typeof u === 'string' && u.startsWith(SITE) && redirected.has(pathOf(u.split('#')[0]))) problems.push(`${loc}: structured data (${node['@type']}) names ${u}, which redirects`)
    }
  }
}

// every indexable built page must be listed
const listed = new Set(entries.map((e) => pathOf(e.loc)))
let builtCount = 0
const walk = (dir, route) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) { walk(full, `${route}/${name}`); continue }
    if (!name.endsWith('.html')) continue
    const path = name === 'index.html' ? route || '/' : `${route}/${name.slice(0, -5)}`
    if (path.startsWith('/_') || path === '/404' || path === '/500') continue
    builtCount++
    if (listed.has(path) || redirected.has(path)) continue
    const html = readFileSync(full, 'utf8')
    if (/noindex/i.test(tag(html, /<meta name="robots" content="([^"]*)"/) || '')) continue
    const canonical = tag(html, /<link rel="canonical" href="([^"]*)"/)
    if (canonical && pathOf(canonical) !== path) continue
    problems.push(`${SITE}${path}: an indexable page that the sitemap leaves out`)
  }
}
walk(APP, '')

console.log(`check:sitemap: ${entries.length} addresses listed, ${builtCount} pages built, ${redirected.size} redirected addresses known`)
if (problems.length) {
  console.log(`✗ ${problems.length} problem(s):`)
  for (const p of problems.slice(0, 40)) console.log(`   - ${p}`)
  process.exit(1)
}
console.log('✓ every listed address is a built, indexable page that names itself as canonical, and no indexable page is missing')
