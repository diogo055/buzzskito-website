// Fails the build when a photograph could ship without its licence record.
//
// Every photo lives in public/guides/photos/ and is recorded in data/god-build/photos.json
// (source page, licence, required credit, size; written by scripts/god-build-photos.mjs).
// Hand-written pages place one with <Photo id="..."> (components/Photo.tsx), guides with a
// `figure` block. This check fails when:
//   - a page uses a photo id, or a guide a photo file, that the ledger does not list
//   - a file sits in public/guides/photos with no ledger record, or a record has no file
//   - a record lacks a credit, a source page or a size, or carries a licence we do not use
//   - shareImage() names a photo that needs a visible credit (CC BY / CC BY-SA): share cards
//     and search thumbnails show no credit line
//   - a page points at /guides/photos/ directly instead of going through <Photo>
//
//   node scripts/check-photos.mjs
import { readFileSync, readdirSync, existsSync } from 'fs'
import { join, relative } from 'path'

const ROOT = process.cwd()
const ledger = JSON.parse(readFileSync(join(ROOT, 'data', 'god-build', 'photos.json'), 'utf8'))
const ALLOWED = new Set(['public-domain', 'CC0-1.0', 'CC-BY-2.0', 'CC-BY-2.5', 'CC-BY-3.0', 'CC-BY-4.0', 'CC-BY-SA-2.0', 'CC-BY-SA-2.5', 'CC-BY-SA-3.0', 'CC-BY-SA-4.0'])
const NO_CREDIT_NEEDED = new Set(['public-domain', 'CC0-1.0'])
const errors = []
const rel = (f) => relative(ROOT, f).replace(/\\/g, '/')

const byId = new Map()
for (const p of ledger.photos) {
  const m = /^\/guides\/photos\/([a-z0-9-]+)\.webp$/.exec(p.file || '')
  if (!m) { errors.push(`ledger: unexpected file path "${p.file}"`); continue }
  byId.set(m[1], p)
  if (!existsSync(join(ROOT, 'public', p.file))) errors.push(`ledger: ${p.file} is on record but the file is missing`)
  if (!ALLOWED.has(p.license)) errors.push(`ledger: ${p.file} has licence "${p.license}" (allowed: ${[...ALLOWED].join(', ')})`)
  if (!String(p.credit || '').trim()) errors.push(`ledger: ${p.file} has no credit`)
  if (!/^https:\/\//.test(p.sourceUrl || '')) errors.push(`ledger: ${p.file} has no source page`)
  if (!(p.width > 0 && p.height > 0)) errors.push(`ledger: ${p.file} has no pixel size`)
}
for (const f of readdirSync(join(ROOT, 'public', 'guides', 'photos'))) {
  if (!f.endsWith('.webp')) { errors.push(`public/guides/photos/${f}: only .webp files belong here`); continue }
  if (!byId.has(f.slice(0, -5))) errors.push(`public/guides/photos/${f} has no record in data/god-build/photos.json`)
}

function walk(dir, test, out = []) {
  if (!existsSync(dir)) return out
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) walk(p, test, out)
    else if (test(e.name)) out.push(p)
  }
  return out
}

let uses = 0, shares = 0
const pagesWithPhotos = new Set()
// pages only: components document <Photo> in comments but never place one
for (const f of walk(join(ROOT, 'app'), (n) => /\.tsx?$/.test(n))) {
  const src = readFileSync(f, 'utf8')
  const name = rel(f)
  for (const m of src.matchAll(/<Photo\b/g)) {
    const tag = src.slice(m.index, m.index + 400)
    const id = /\bid=(?:"([^"]+)"|\{\s*['"]([^'"]+)['"]\s*\})/.exec(tag)
    if (!id) { errors.push(`${name}: <Photo> without a literal id="..." (the check cannot verify it)`); continue }
    const key = id[1] || id[2]
    uses++
    pagesWithPhotos.add(name)
    if (!byId.has(key)) errors.push(`${name}: <Photo id="${key}"> is not in data/god-build/photos.json`)
  }
  for (const m of src.matchAll(/shareImage\(\s*['"]([^'"]+)['"]\s*\)/g)) {
    shares++
    const p = byId.get(m[1])
    if (!p) errors.push(`${name}: shareImage('${m[1]}') is not in data/god-build/photos.json`)
    else if (!NO_CREDIT_NEEDED.has(p.license)) errors.push(`${name}: shareImage('${m[1]}') is ${p.license}, which needs a visible credit; use a public-domain or CC0 photo`)
  }
  if (name.startsWith('app/') && /['"`]\/guides\/photos\//.test(src)) errors.push(`${name}: points at /guides/photos/ directly; use <Photo id="..."> so the credit is shown`)
}

let figures = 0
for (const f of [...walk(join(ROOT, 'content', 'guides'), (n) => n.endsWith('.json')), ...walk(join(ROOT, 'content', 'guides-scheduled'), (n) => n.endsWith('.json'))]) {
  for (const m of readFileSync(f, 'utf8').matchAll(/"(\/guides\/photos\/[^"]+)"/g)) {
    figures++
    if (!byId.has(m[1].slice('/guides/photos/'.length).replace(/\.webp$/, ''))) errors.push(`${rel(f)}: ${m[1]} is not in data/god-build/photos.json`)
  }
}

if (errors.length) {
  console.error(`check:photos FAILED (${errors.length}):\n  ` + errors.join('\n  '))
  process.exit(1)
}
console.log(`check:photos ok: ${byId.size} photos on record, ${uses} placed on ${pagesWithPhotos.size} hand-written page(s), ${shares} share image(s), ${figures} in guides.`)
