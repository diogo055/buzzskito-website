// Independent check: does every internal href in the changed files resolve to a
// real route or a redirect? The workflow auditors claimed yes; this verifies it
// without trusting them.
//
// A link is OK if EITHER app/<path>/page.tsx exists, OR next.config.mjs has a
// redirect whose source matches it (a 301 is a valid destination, though a link
// pointing at one is a chain worth knowing about).
//
//   node verify-internal-links.mjs

import { readFileSync, existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import { execFileSync } from 'child_process'

const REPO = 'C:/Users/buzzs/buzzskito-website'

// Files changed in this working tree.
const changed = execFileSync('git', ['status', '--porcelain'], { cwd: REPO, encoding: 'utf-8' })
  .split('\n').map((l) => l.slice(3).trim()).filter((f) => /\.tsx$/.test(f))

// Redirect sources, so we can distinguish "404" from "chains through a 301".
const cfg = readFileSync(join(REPO, 'next.config.mjs'), 'utf-8')
const redirects = new Map()
for (const m of cfg.matchAll(/\{\s*source:\s*'([^']+)'\s*,\s*destination:\s*'([^']+)'/g)) redirects.set(m[1], m[2])

// Every real route in app/ (a directory containing page.tsx).
const routes = new Set()
;(function walk(dir, prefix = '') {
  for (const e of readdirSync(dir)) {
    if (e.startsWith('_') || e === 'api') continue
    const full = join(dir, e)
    if (!statSync(full).isDirectory()) continue
    const p = `${prefix}/${e}`
    if (existsSync(join(full, 'page.tsx'))) routes.add(p)
    walk(full, p)
  }
})(join(REPO, 'app'))
routes.add('/')

const HREF = /(?:href|action)=["'](\/[^"'#?]*)["'#?]/g
const bad = [], chains = []
let total = 0

for (const f of changed) {
  const full = join(REPO, f)
  if (!existsSync(full)) continue
  const src = readFileSync(full, 'utf-8')
  const seen = new Set()
  for (const m of src.matchAll(HREF)) {
    const href = m[1].replace(/\/$/, '') || '/'
    if (seen.has(href)) continue
    seen.add(href)
    total++
    if (routes.has(href)) continue
    if (redirects.has(href)) { chains.push({ f, href, to: redirects.get(href) }); continue }
    bad.push({ f, href })
  }
}

console.log('='.repeat(90))
console.log(`INTERNAL LINK CHECK — ${changed.length} changed .tsx files, ${total} distinct internal hrefs`)
console.log('='.repeat(90))

console.log(`\nBROKEN (no route, no redirect): ${bad.length}`)
for (const b of bad) console.log(`  404  ${b.href.padEnd(52)} in ${b.f.replace('app/', '')}`)

console.log(`\nPOINTING AT A REDIRECT (works, but is a chain): ${chains.length}`)
for (const c of chains) console.log(`  301  ${c.href.padEnd(46)} -> ${c.to.padEnd(34)} in ${c.f.replace('app/', '')}`)

console.log(`\n${bad.length === 0 ? 'PASS — no broken internal links.' : 'FAIL — fix the 404s above.'}`)
process.exit(bad.length ? 1 : 0)
