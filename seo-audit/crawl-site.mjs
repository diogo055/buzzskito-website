// Crawl the locally-served production build and verify every sitemap URL.
// Produces seo-audit/crawl-results.json with per-page facts + a findings summary.
//
// Usage:  node seo-audit/crawl-site.mjs [baseUrl]
//   Default baseUrl: http://localhost:3000
//   Expects `npx next start` already running against the production build.

import { writeFileSync } from 'fs'

const BASE = process.argv[2] || 'http://localhost:3000'
const PROD = 'https://buzzskito.ca'

// ── helpers ────────────────────────────────────────────────────────────────
function extract(re, html, group = 1) {
  const m = html.match(re)
  return m ? m[group].trim() : null
}
function extractAll(re, html, group = 1) {
  const out = []
  let m
  while ((m = re.exec(html)) !== null) out.push(m[group])
  return out
}
function decodeEntities(s) {
  if (!s) return s
  return s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&middot;/g, '·')
    .replace(/&nbsp;/g, ' ')
}

// ── load sitemap ───────────────────────────────────────────────────────────
const smRes = await fetch(`${BASE}/sitemap.xml`)
if (!smRes.ok) {
  console.error(`sitemap.xml fetch failed: ${smRes.status}. Is 'next start' running?`)
  process.exit(1)
}
const smXml = await smRes.text()
const smUrls = extractAll(/<loc>([^<]+)<\/loc>/g, smXml)
  .map(u => u.replace(PROD, ''))
  .map(u => u === '' ? '/' : u)
console.log(`Sitemap URLs: ${smUrls.length}`)

// ── crawl every page ───────────────────────────────────────────────────────
const results = []
const linkGraph = {}   // path -> Set of internal hrefs found on it

let done = 0
for (const path of smUrls) {
  const url = `${BASE}${path}`
  const page = { path, status: 0 }
  try {
    const res = await fetch(url, { redirect: 'manual' })
    page.status = res.status
    if (res.status >= 300 && res.status < 400) {
      page.redirectTo = res.headers.get('location')
    } else if (res.status === 200) {
      const html = await res.text()
      page.title = decodeEntities(extract(/<title>([^<]*)<\/title>/, html))
      page.metaDescription = decodeEntities(extract(/<meta name="description" content="([^"]*)"/, html))
      page.canonical = extract(/<link rel="canonical" href="([^"]*)"/, html)
      // H1s
      const h1s = extractAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g, html)
        .map(h => decodeEntities(h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()))
      page.h1Count = h1s.length
      page.h1 = h1s[0] || null
      // robots
      page.metaRobots = extract(/<meta name="robots" content="([^"]*)"/, html)
      // JSON-LD blocks
      const ldBlocks = extractAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, html)
      page.schemaTypes = []
      page.schemaErrors = []
      for (const block of ldBlocks) {
        try {
          const parsed = JSON.parse(block)
          const t = parsed['@type']
          page.schemaTypes.push(Array.isArray(t) ? t.join('+') : t)
        } catch (e) {
          page.schemaErrors.push(e.message.slice(0, 120))
        }
      }
      // word count of visible-ish text (strip tags/scripts/styles)
      const text = html
        .replace(/<script[\s\S]*?<\/script>/g, ' ')
        .replace(/<style[\s\S]*?<\/style>/g, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
      page.wordCount = text.split(' ').filter(Boolean).length
      // internal links
      const hrefs = extractAll(/href="(\/[^"#?]*)"/g, html)
        .filter(h => !h.startsWith('/_next') && !h.startsWith('/api'))
      linkGraph[path] = [...new Set(hrefs)]
      page.internalLinksOut = linkGraph[path].length
      // image alt audit
      const imgs = extractAll(/<img([^>]*)>/g, html)
      page.imgCount = imgs.length
      page.imgsMissingAlt = imgs.filter(attrs => !/alt="[^"]+"/.test(attrs)).length
    }
  } catch (e) {
    page.error = e.message
  }
  results.push(page)
  done++
  if (done % 50 === 0) console.log(`  crawled ${done}/${smUrls.length}`)
}

// ── orphan detection (within sitemap set) ──────────────────────────────────
const inboundCount = {}
for (const p of smUrls) inboundCount[p] = 0
for (const [from, hrefs] of Object.entries(linkGraph)) {
  for (const h of hrefs) {
    const norm = h === '' ? '/' : h.replace(/\/$/, '') || '/'
    if (norm !== from && inboundCount[norm] !== undefined) inboundCount[norm]++
  }
}
const orphans = smUrls.filter(p => p !== '/' && inboundCount[p] === 0)

// ── findings summary ───────────────────────────────────────────────────────
const findings = {
  crawled: results.length,
  non200: results.filter(r => r.status !== 200).map(r => ({ path: r.path, status: r.status, redirectTo: r.redirectTo })),
  missingTitle: results.filter(r => r.status === 200 && !r.title).map(r => r.path),
  missingDescription: results.filter(r => r.status === 200 && !r.metaDescription).map(r => r.path),
  missingCanonical: results.filter(r => r.status === 200 && !r.canonical).map(r => r.path),
  badCanonical: results.filter(r => r.status === 200 && r.canonical && r.canonical !== `${PROD}${r.path === '/' ? '' : r.path}` && r.canonical !== `${PROD}${r.path}`).map(r => ({ path: r.path, canonical: r.canonical })),
  noH1: results.filter(r => r.status === 200 && r.h1Count === 0).map(r => r.path),
  multiH1: results.filter(r => r.status === 200 && r.h1Count > 1).map(r => ({ path: r.path, count: r.h1Count })),
  schemaParseErrors: results.filter(r => r.schemaErrors?.length).map(r => ({ path: r.path, errors: r.schemaErrors })),
  noindexed: results.filter(r => r.status === 200 && r.metaRobots?.includes('noindex')).map(r => r.path),
  thin: results.filter(r => r.status === 200 && r.wordCount < 450).map(r => ({ path: r.path, words: r.wordCount })).sort((a, b) => a.words - b.words),
  imgsMissingAlt: results.filter(r => r.imgsMissingAlt > 0).map(r => ({ path: r.path, missing: r.imgsMissingAlt, total: r.imgCount })),
  orphans,
  dupTitles: {},
}
// duplicate titles
const titleMap = {}
for (const r of results) {
  if (r.status !== 200 || !r.title) continue
  titleMap[r.title] = titleMap[r.title] || []
  titleMap[r.title].push(r.path)
}
for (const [t, paths] of Object.entries(titleMap)) {
  if (paths.length > 1) findings.dupTitles[t] = paths
}

writeFileSync('seo-audit/crawl-results.json', JSON.stringify({ findings, pages: results }, null, 2))

console.log('\n══ FINDINGS SUMMARY ══')
console.log(`Crawled: ${findings.crawled}`)
console.log(`Non-200: ${findings.non200.length}`)
console.log(`Missing title: ${findings.missingTitle.length}`)
console.log(`Missing description: ${findings.missingDescription.length}`)
console.log(`Missing canonical: ${findings.missingCanonical.length}`)
console.log(`Wrong canonical: ${findings.badCanonical.length}`)
console.log(`No H1: ${findings.noH1.length}`)
console.log(`Multiple H1: ${findings.multiH1.length}`)
console.log(`Schema parse errors: ${findings.schemaParseErrors.length}`)
console.log(`Unexpected noindex: ${findings.noindexed.length}`)
console.log(`Thin (<450 words): ${findings.thin.length}`)
console.log(`Pages w/ missing img alt: ${findings.imgsMissingAlt.length}`)
console.log(`Orphans (0 inbound internal links): ${findings.orphans.length}`)
console.log(`Duplicate titles: ${Object.keys(findings.dupTitles).length}`)
console.log('\nDetails → seo-audit/crawl-results.json')
