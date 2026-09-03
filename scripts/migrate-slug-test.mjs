// One-off migration for the geo-slug A/B test (data/exp-slug-test.json).
//
// Renames the 12 TREATMENT pages from `<topic>-canada` to `<topic>`, leaving the
// 12 CONTROL pages untouched. Titles, meta descriptions, H1s, page copy and every
// affiliate element are left exactly as they are — the slug is the ONLY variable.
//
// Run with --apply to write; without it, prints a dry-run plan.
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const APPLY = process.argv.includes('--apply')
const ROOT = process.cwd()
const plan = JSON.parse(fs.readFileSync('data/exp-slug-test.json', 'utf8'))
const T = plan.treatment

// Source trees whose internal links must follow the rename. data/ is deliberately
// EXCLUDED: those files are historical GSC records and analysis snapshots that
// legitimately refer to the old URLs.
const CODE_DIRS = ['app', 'lib', 'components']
const CODE_EXT = new Set(['.tsx', '.ts', '.mjs', '.js'])

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === '.next') continue
      walk(p, out)
    } else if (CODE_EXT.has(path.extname(e.name))) out.push(p)
  }
  return out
}

const files = CODE_DIRS.flatMap(d => (fs.existsSync(d) ? walk(d) : []))
console.log(`scanning ${files.length} source files\n`)

// Boundary-aware: only rewrite /blog/<slug> when followed by a real boundary,
// never mid-identifier. Guards against `best-mosquito-trap` clobbering
// `best-mosquito-trap-for-acreage-canada`.
const edits = new Map()
let linkCount = 0
for (const x of T) {
  const re = new RegExp(`/blog/${x.slug}(?=["'\`/?#\\s)\\]}<,])`, 'g')
  for (const f of files) {
    const src = fs.readFileSync(f, 'utf8')
    if (!re.test(src)) continue
    re.lastIndex = 0
    const next = src.replace(re, `/blog/${x.newSlug}`)
    const n = (src.match(re) || []).length
    re.lastIndex = 0
    linkCount += n
    edits.set(f, (edits.get(f) ?? src))
    edits.set(f, next === src ? edits.get(f) : next)
    if (next !== src) edits.set(f, next)
  }
}

// Recompute cleanly: apply every slug rewrite to each file in one pass.
edits.clear()
linkCount = 0
for (const f of files) {
  let src = fs.readFileSync(f, 'utf8')
  const orig = src
  for (const x of T) {
    const re = new RegExp(`/blog/${x.slug}(?=["'\`/?#\\s)\\]}<,])`, 'g')
    const hits = src.match(re)
    if (hits) { linkCount += hits.length; src = src.replace(re, `/blog/${x.newSlug}`) }
  }
  if (src !== orig) edits.set(f, src)
}

console.log(`internal links to rewrite: ${linkCount} across ${edits.size} files\n`)

// The SLUG constant inside each renamed page must follow too.
const slugConstEdits = []
for (const x of T) {
  const f = `app/blog/${x.slug}/page.tsx`
  const src = fs.readFileSync(f, 'utf8')
  const re = new RegExp(`^const SLUG = '${x.slug}'`, 'm')
  if (!re.test(src)) { console.error(`!! ${x.slug}: no matching \`const SLUG\` line — ABORT`); process.exit(1) }
  slugConstEdits.push([f, x, src.replace(re, `const SLUG = '${x.newSlug}'`)])
}
console.log(`SLUG constants to update: ${slugConstEdits.length}/${T.length}\n`)

for (const x of T) console.log(`  ${x.slug}  ->  ${x.newSlug}`)

if (!APPLY) { console.log('\nDRY RUN — pass --apply to write.'); process.exit(0) }

// 1. SLUG constant (write BEFORE the move, while the old path still exists)
for (const [f, x, next] of slugConstEdits) fs.writeFileSync(f, next)

// 2. internal links
for (const [f, next] of edits) fs.writeFileSync(f, next)

// 3. move the directories, preserving git history
for (const x of T) {
  execSync(`git mv "app/blog/${x.slug}" "app/blog/${x.newSlug}"`, { cwd: ROOT, stdio: 'inherit' })
}

// 4. 308 redirects so the old URLs keep their equity and nothing 404s
const cfgPath = 'next.config.mjs'
let cfg = fs.readFileSync(cfgPath, 'utf8')
const marker = '  async redirects() {'
const idx = cfg.indexOf(marker)
if (idx === -1) { console.error('!! could not find redirects() in next.config.mjs'); process.exit(1) }
const listStart = cfg.indexOf('[', idx)
const block = [
  '',
  '      // ── Geo-slug A/B test, 2026-09-03 (data/exp-slug-test.json) ─────────────',
  '      // Treatment arm: slug loses its `-canada` suffix, TITLE keeps the geo token.',
  '      // Revert these 12 entries and `git mv` back if the 6-week stop rule fires.',
  ...T.map(x => `      { source: '/blog/${x.slug}', destination: '/blog/${x.newSlug}', permanent: true },`),
].join('\n')
cfg = cfg.slice(0, listStart + 1) + block + cfg.slice(listStart + 1)
fs.writeFileSync(cfgPath, cfg)

console.log(`\napplied: ${T.length} renames, ${linkCount} internal links, ${T.length} redirects`)
