// Writes lib/page-images.json: for every page, the site images it shows, so that
// app/image-sitemap.xml/route.ts can list them for Google Images (owner, Oct 24, 2026: image
// search and Google Lens are a growing traffic source). Runs at the start of `npm run build`.
//
// Sources, the same ones the pages render from:
//   - guides (content/guides/*.json): `figure` blocks, the photos on look-alike (`confused`)
//     cards, and the hero infographic in lib/us-guide-heroes.json
//   - hand-written pages (app/**/page.tsx): <Photo id="..."> and shareImage('...') resolved
//     through the photo ledger (data/god-build/photos.json), plus literal image paths under
//     /guides/, /diagrams/, /images/ and /infographics/
// The route keeps only pages the main sitemap lists, so a redirected or noindex page never
// gets an image entry.
import { readFileSync, readdirSync, writeFileSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const ROOT = join(import.meta.dirname, '..')
const ledger = JSON.parse(readFileSync(join(ROOT, 'data', 'god-build', 'photos.json'), 'utf8')).photos
const byId = new Map(ledger.map((p) => [p.file.replace('/guides/photos/', '').replace(/\.webp$/, ''), p.file]))
const heroes = JSON.parse(readFileSync(join(ROOT, 'lib', 'us-guide-heroes.json'), 'utf8'))
const out = {}
const add = (path, src) => {
  if (!src || !src.startsWith('/')) return
  ;(out[path] ??= new Set()).add(src)
}

// 1. guides
for (const f of readdirSync(join(ROOT, 'content', 'guides')).filter((n) => n.endsWith('.json'))) {
  const g = JSON.parse(readFileSync(join(ROOT, 'content', 'guides', f), 'utf8'))
  const path = `/${g.section || (g.kind === 'pillar' ? 'learn' : 'blog')}/${g.slug}`
  if (heroes[path]) add(path, heroes[path].src)
  for (const b of g.body || []) {
    if (b.type === 'figure') add(path, b.src)
    if (b.type === 'confused') for (const c of b.items || b.cards || []) if (c.photo && byId.has(c.photo)) add(path, byId.get(c.photo))
  }
}

// 2. hand-written pages
const walk = (dir) => readdirSync(dir).flatMap((n) => {
  const p = join(dir, n)
  return statSync(p).isDirectory() ? walk(p) : n === 'page.tsx' ? [p] : []
})
const LITERAL = /["'](\/(?:guides|diagrams|images|infographics)\/[A-Za-z0-9_./-]+\.(?:webp|png|jpe?g|svg))["']/g
const PHOTO = /<Photo\s+id="([a-z0-9-]+)"/g
const SHARE = /shareImage\('([a-z0-9-]+)'\)/g
for (const file of walk(join(ROOT, 'app'))) {
  const rel = relative(join(ROOT, 'app'), file).split(sep).slice(0, -1)
  if (rel.some((s) => s.startsWith('[') || s.startsWith('(') || s.startsWith('_') || s === 'api')) continue
  const path = '/' + rel.join('/')
  const src = readFileSync(file, 'utf8')
  for (const m of src.matchAll(LITERAL)) add(path === '/' ? '/' : path, m[1])
  for (const re of [PHOTO, SHARE]) for (const m of src.matchAll(re)) if (byId.has(m[1])) add(path, byId.get(m[1]))
}

const sorted = Object.fromEntries(Object.keys(out).sort().map((k) => [k, [...out[k]].sort()]))
writeFileSync(join(ROOT, 'lib', 'page-images.json'), JSON.stringify(sorted, null, 1) + '\n')
const n = Object.values(sorted).reduce((a, v) => a + v.length, 0)
console.log(`image index: ${n} images on ${Object.keys(sorted).length} pages -> lib/page-images.json`)
