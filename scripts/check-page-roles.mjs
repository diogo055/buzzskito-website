// Build check for the split between SERVICE pages and TRAFFIC pages (owner, Oct 14, 2026).
// Reads the built site in .next/server/app and lib/page-roles.json.
//
// What must stay true:
//   1. Traffic pages (lib/page-roles.ts: articles, guides, hubs, tools and the national data
//      pages, minus the lead posts and the Ontario "local info" pages) carry no quote prompt:
//      no phone Call / Text / Get price bar, no mid-article quote box, no quote button or
//      full-width quote section, no "handle it for you" box. A plain text link inside the
//      article's own writing is allowed and only counted.
//   2. Service pages keep the phone bar (the other gate lists in components/LeadBarGate.tsx are
//      all content pages, so every remaining service page must show it).
//   3. lib/page-roles.json's lead posts are exactly the posts scripts/article-cta-scope.mjs
//      keeps on the service side, so the two can never drift apart.
//   node scripts/check-page-roles.mjs [--report]
import { readFileSync, readdirSync, statSync, existsSync, writeFileSync } from 'fs'
import { join } from 'path'
import { keepsQuoteCta } from './article-cta-scope.mjs'

const ROOT = process.cwd()
const APP = join(ROOT, '.next', 'server', 'app')
if (!existsSync(APP)) { console.error('✗ check:page-roles: no build output under .next. Run the build first.'); process.exit(1) }

const roles = JSON.parse(readFileSync(join(ROOT, 'lib', 'page-roles.json'), 'utf8'))
const LEAD_POSTS = new Set(roles.leadPosts), LOCAL_INFO = new Set(roles.localInfo), NATIONAL = new Set(roles.nationalDataPages)
const SECTIONS = ['/blog', '/learn', '/pest-product-guides', '/tools']
// the same rule as lib/page-roles.ts
const isTraffic = (p) => !LEAD_POSTS.has(p) && !LOCAL_INFO.has(p) && (NATIONAL.has(p) || SECTIONS.some((s) => p === s || p.startsWith(s + '/')))
const quoted = (file) => new Set([...readFileSync(join(ROOT, 'lib', file), 'utf8').matchAll(/['"](\/[a-z0-9/-]+)['"]/g)].map((m) => m[1]))
const OTHER_GATES = ['adjacent-pest-routes.ts', 'us-guide-routes.ts', 'keep-reading-bar-routes.ts', 'tool-routes.ts'].map(quoted)
const SYSTEM = new Set(['/privacy-policy', '/terms', '/_not-found', '/404', '/500'])

const pages = []
const walk = (dir, rel) => { for (const n of readdirSync(dir)) { const f = join(dir, n); if (statSync(f).isDirectory()) walk(f, `${rel}${n}/`); else if (n.endsWith('.html')) pages.push({ path: '/' + `${rel}${n}`.replace(/\.html$/, '').replace(/(^|\/)index$/, '').replace(/\/$/, ''), file: f }) } }
walk(APP, '')

const problems = []
const seen = { traffic: 0, service: 0, textLinks: 0, pagesWithTextLinks: 0 }
const BUTTON = /class="[^"]*(btn|rounded-full|rounded-xl|bg-amber|bg-gradient|inline-flex|inline-block)[^"]*"/
for (const { path, file } of pages) {
  if (path.startsWith('/_') || SYSTEM.has(path)) continue
  const html = readFileSync(file, 'utf8')
  const body = html.slice(html.indexOf('<body'))
  const main = body.slice(Math.max(0, body.indexOf('<main')), body.indexOf('</main>') > 0 ? body.indexOf('</main>') : body.length)
  const hasBar = /<div[^>]*\bdata-lead-bar\b/.test(body)
  if (isTraffic(path)) {
    seen.traffic++
    const found = []
    if (hasBar) found.push('phone quote bar')
    if (/<aside[^>]*aria-label="Professional[^"]*"/.test(main)) found.push('mid-article quote box')
    if (/data-lead-location="(cta_section|blog_post_cta)"/.test(main)) found.push('full-width quote section')
    // any boxed aside that asks for a quote or a call (the hubs' old "handle it for you" box was one)
    for (const a of main.match(/<aside\b[\s\S]*?<\/aside>/g) || []) if (/href="\/free-yard-assessment"|href="tel:/.test(a)) found.push('quote box')
    let links = 0
    for (const m of main.matchAll(/<a\b[^>]*href="\/free-yard-assessment"[^>]*>/g)) {
      if (BUTTON.test(m[0])) found.push('quote button')
      else links++
    }
    // the one quiet line at the end of mosquito and tick articles is part of "Keep reading"
    const quiet = (main.match(/Local\?\s*(<!-- -->\s*)?<a[^>]*href="\/free-yard-assessment"/g) || []).length
    links -= quiet
    if (links > 0) { seen.textLinks += links; seen.pagesWithTextLinks++ }
    if (found.length) problems.push(`${path}: traffic page shows ${[...new Set(found)].join(', ')}`)
  } else {
    seen.service++
    const exempt = OTHER_GATES.some((s) => s.has(path))
    if (!hasBar && !exempt) problems.push(`${path}: service page is missing the phone Call / Text / Get price bar`)
  }
}

// lead posts must match the rule that keeps their quote CTA
const articlePaths = pages.map((p) => p.path).filter((p) => /^\/(blog|learn)\/[^/]+$/.test(p))
for (const p of articlePaths) {
  const keeps = Boolean(keepsQuoteCta(p))
  if (keeps !== LEAD_POSTS.has(p)) problems.push(`${p}: lib/page-roles.json says ${LEAD_POSTS.has(p) ? '' : 'not '}a lead post, scripts/article-cta-scope.mjs says ${keeps ? '' : 'not '}one`)
}

console.log(`check:page-roles: ${seen.traffic} traffic pages, ${seen.service} service pages | traffic pages with a plain text link to the quote form inside their own writing: ${seen.pagesWithTextLinks} (${seen.textLinks} links, allowed)`)
if (process.argv.includes('--report')) writeFileSync(join(ROOT, 'reports', 'page_roles.json'), JSON.stringify(pages.map((p) => ({ path: p.path, traffic: isTraffic(p.path) })), null, 1))
if (problems.length) {
  console.error(`✗ check:page-roles FAILED: ${problems.length} problem(s)`)
  for (const p of problems.slice(0, 40)) console.error('   - ' + p)
  process.exit(1)
}
console.log('✓ traffic pages carry no quote prompt; service pages keep the phone bar; the lead-post list matches the rule')
