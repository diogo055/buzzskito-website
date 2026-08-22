/**
 * Build guard: every app/blog/<slug>/page.tsx MUST be registered in lib/constants.ts
 * and reachable from BOTH app/sitemap.ts and app/blog/page.tsx.
 *
 * WHY THIS EXISTS
 * On 28 Jul 2026 an audit found 30 bed-bug pages that Google had NEVER crawled.
 * Root cause was not thin internal linking — those pages were simply absent from
 * lib/constants.ts. Both the sitemap and the /blog index build their URL lists from
 * the NEW_BLOGS_* arrays, so an unregistered page is in ZERO sitemaps and on no
 * index page. It is invisible, silently, with no error anywhere.
 *
 * The same miss had already happened on at least three separate content waves, each
 * requiring a manual rescue. This turns a silent omission into a failed build.
 *
 * It also catches the second half of that bug: an array can exist in constants.ts and
 * be imported by app/blog/page.tsx while being forgotten in app/sitemap.ts. That is
 * exactly what happened to NEW_BLOGS_29 — on the blog index, missing from the sitemap.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const BLOG_DIR = join(ROOT, 'app', 'blog')
const CONSTANTS = join(ROOT, 'lib', 'constants.ts')
const SITEMAP = join(ROOT, 'app', 'sitemap.ts')
const BLOG_INDEX = join(ROOT, 'app', 'blog', 'page.tsx')

const constantsSrc = readFileSync(CONSTANTS, 'utf-8')
const sitemapSrc = readFileSync(SITEMAP, 'utf-8')
const indexSrc = readFileSync(BLOG_INDEX, 'utf-8')

// ── 1. every blog slug on disk must appear as a slug: entry in constants ──────
const slugs = readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(BLOG_DIR, d.name, 'page.tsx')))
  .map((d) => d.name)

const registered = new Set(
  [...constantsSrc.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
)
// extraBlogSlugs in sitemap.ts is a legitimate second registration path
const extraSlugs = new Set(
  [...sitemapSrc.matchAll(/^\s*['"]([a-z0-9-]+)['"],\s*$/gm)].map((m) => m[1])
)

const unregistered = slugs.filter((s) => !registered.has(s) && !extraSlugs.has(s))

// ── 2. every NEW_BLOGS_* array must be consumed by BOTH sitemap and blog index ─
// An array may legitimately be absent from sitemap.ts if every one of its slugs is
// listed in that file's extraBlogSlugs (a second, equally valid registration path —
// NEW_BLOGS_29 is deliberately handled that way). Only flag an array when it is
// absent AND at least one of its slugs is reachable by neither route.
//
// The name pattern accepts ANY NEW_BLOGS_* suffix, not just digits. Parallel build
// waves each tried to claim the next free number and collided on NEW_BLOGS_39, so
// arrays are now named descriptively (NEW_BLOGS_DEHUMIDIFIER_PRO, …). A digits-only
// pattern silently skipped every one of those, meaning the arrays most likely to be
// mis-registered — the ones written concurrently — were the ones going unchecked.
const arrayBlocks = [...constantsSrc.matchAll(/export const (NEW_BLOGS(?:_[A-Z0-9_]+)?)\s*=([\s\S]*?)\n\]/g)]
const arrays = arrayBlocks.map((m) => m[1])
const slugsInArray = Object.fromEntries(
  arrayBlocks.map((m) => [m[1], [...m[2].matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((x) => x[1])])
)

const missingFromSitemap = arrays.filter((a) => {
  if (new RegExp(`\\b${a}\\b`).test(sitemapSrc)) return false
  const uncovered = (slugsInArray[a] || []).filter((s) => !extraSlugs.has(s))
  return uncovered.length > 0
})
const missingFromIndex = arrays.filter((a) => !new RegExp(`\\b${a}\\b`).test(indexSrc))

let failed = false

if (unregistered.length) {
  failed = true
  console.error(`\n✗ ${unregistered.length} blog page(s) exist on disk but are NOT registered in lib/constants.ts.`)
  console.error('  They will be in NO sitemap and on NO index page — Google will never find them.')
  for (const s of unregistered) console.error(`    app/blog/${s}/page.tsx`)
}

if (missingFromSitemap.length) {
  failed = true
  console.error(`\n✗ ${missingFromSitemap.length} array(s) in constants.ts are NOT imported by app/sitemap.ts:`)
  for (const a of missingFromSitemap) console.error(`    ${a}`)
  console.error('  Posts in these arrays are missing from the XML sitemap.')
}

if (missingFromIndex.length) {
  failed = true
  console.error(`\n✗ ${missingFromIndex.length} array(s) in constants.ts are NOT rendered by app/blog/page.tsx:`)
  for (const a of missingFromIndex) console.error(`    ${a}`)
}

if (failed) {
  console.error('\n  Fix: add the missing slugs to a NEW_BLOGS_* array in lib/constants.ts, and make sure')
  console.error('  that array is imported and spread in BOTH app/sitemap.ts and app/blog/page.tsx.\n')
  process.exit(1)
}

console.log(
  `✓ check:registered passed — ${slugs.length} blog pages, all registered; ` +
    `${arrays.length} NEW_BLOGS arrays, all reachable from sitemap and blog index.`
)
