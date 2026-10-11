// Build guard for the Oct 2026 "Keep reading" change. Reads the BUILT pages in .next/server/app.
//
//   node scripts/check-article-ctas.mjs            fail the build on any problem
//   node scripts/check-article-ctas.mjs --report   also write reports/cta_flip_pages.json
//
// What must stay true:
//   1. Every article (a /blog/<slug> or /learn/<slug> page) ends with exactly one "Keep reading"
//      block holding three cards, and carries none of the quote call-to-action components.
//   2. The local posts whose reader is in the service area (scripts/article-cta-scope.mjs) are the
//      exception: they keep their quote CTA and have no "Keep reading" block.
//   3. No other page on the site (homepage, city, service, pricing, quote pages) ever shows the
//      "Keep reading" block. Those pages keep their quote CTAs.
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs'
import { join } from 'path'
import { keepsQuoteCta } from './article-cta-scope.mjs'

const ROOT = process.cwd()
const APP = join(ROOT, '.next', 'server', 'app')
if (!existsSync(APP)) { console.log('check:article-ctas: no build output found, run `next build` first'); process.exit(1) }

// markers that only the quote CTA components print
const QUOTE_MARKERS = [
  ['CTASection', 'data-lead-location="cta_section"'],
  ['BlogPostCTA', 'data-lead-location="blog_post_cta"'],
  ['InlineYardRiskCTA', 'Wondering how YOUR specific yard scores'],
]
const BLOCK = /<section[^>]*\bdata-read-next\b[\s\S]*?<\/section>/g

const pages = []
const walk = (dir, route) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) { walk(full, `${route}/${name}`); continue }
    if (name.endsWith('.html')) pages.push({ path: name === 'index.html' ? route || '/' : `${route}/${name.slice(0, -5)}`, file: full })
  }
}
walk(APP, '')

const isArticle = (p) => /^\/(blog|learn)\/[^/]+$/.test(p)
const problems = []
const out = { keepReading: [], keepsQuoteCta: [] }
let others = 0
for (const { path, file } of pages) {
  if (path.startsWith('/_') || path === '/404' || path === '/500') continue
  const html = readFileSync(file, 'utf8')
  const blocks = html.match(BLOCK) || []
  const quote = QUOTE_MARKERS.filter(([, m]) => html.includes(m)).map(([n]) => n)
  if (!isArticle(path)) {
    others++
    if (blocks.length) problems.push(`${path}: a non-article page shows the "Keep reading" block (service and index pages must keep their own CTAs)`)
    continue
  }
  const keeps = keepsQuoteCta(path)
  if (keeps) {
    if (blocks.length) problems.push(`${path}: a ${keeps} must keep its quote CTA, but it shows "Keep reading"`)
    out.keepsQuoteCta.push({ path, why: keeps })
    continue
  }
  if (blocks.length !== 1) { problems.push(`${path}: expected one "Keep reading" block, found ${blocks.length}`); continue }
  const cards = (blocks[0].match(/<li\b/g) || []).length
  if (cards !== 3) problems.push(`${path}: "Keep reading" shows ${cards} cards, expected 3`)
  const quoteLinks = (blocks[0].match(/href="\/free-yard-assessment"/g) || []).length
  if (quoteLinks !== 1) problems.push(`${path}: "Keep reading" should carry exactly one text link to the quote form, found ${quoteLinks}`)
  if (quote.length) problems.push(`${path}: still renders a quote CTA component (${quote.join(', ')})`)
  // the three cards must point at real, different articles and never at the page itself
  const hrefs = [...blocks[0].matchAll(/<a[^>]*href="(\/(?:blog|learn)\/[^"#?]+)"/g)].map((m) => m[1])
  if (new Set(hrefs).size !== 3 || hrefs.includes(path)) problems.push(`${path}: "Keep reading" cards are not three different other articles (${hrefs.join(', ')})`)
  out.keepReading.push({ path, cards: hrefs })
}

// every card must lead to a page that was built
const built = new Set(pages.map((p) => p.path))
for (const a of out.keepReading) for (const h of a.cards) if (!built.has(h)) problems.push(`${a.path}: "Keep reading" links to ${h}, which is not a built page`)

console.log(`check:article-ctas: ${out.keepReading.length} articles end with "Keep reading", ${out.keepsQuoteCta.length} local posts keep their quote CTA, ${others} other pages checked`)
if (process.argv.includes('--report')) {
  writeFileSync(join(ROOT, 'reports', 'cta_flip_pages.json'), JSON.stringify({ generated: 'from the built site', counts: { keepReading: out.keepReading.length, keepsQuoteCta: out.keepsQuoteCta.length }, keepsQuoteCta: out.keepsQuoteCta, keepReading: out.keepReading.map((a) => a.path) }, null, 1))
}
if (problems.length) {
  console.log(`✗ ${problems.length} problem(s):`)
  for (const p of problems.slice(0, 40)) console.log(`   - ${p}`)
  process.exit(1)
}
console.log('✓ article CTAs are as intended')
