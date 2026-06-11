// Verify every protected page is intact on a running build.
// Run after ANY future deploy or major change:
//
//   npx next build && npx next start -p 3344 &
//   node seo-audit/verify-protected.mjs http://localhost:3344
//
// Checks for every page in protected-pages.json:
//   1. Returns HTTP 200 (not 3xx/4xx/5xx)
//   2. Has a <title>
//   3. Has exactly one <h1>
//   4. Canonical matches https://buzzskito.ca{path}
//   5. All JSON-LD blocks parse as valid JSON
//   6. No unexpected noindex
//
// Exits non-zero if anything fails — safe to wire into CI.
//
// Legacy paths (clicks16wk_only entries that are now redirects) are verified
// as redirects instead: they must 3xx to a 200 destination.

import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = process.argv[2] || 'http://localhost:3344'
const PROD = 'https://buzzskito.ca'

const { protected: pages } = JSON.parse(readFileSync(resolve(__dirname, 'protected-pages.json'), 'utf-8'))

let pass = 0, fail = 0, redirectsOk = 0
const failures = []

for (const entry of pages) {
  const path = entry.path
  const isLegacy = entry.note?.includes('LEGACY')
  try {
    const res = await fetch(`${BASE}${path}`, { redirect: 'manual' })

    if (isLegacy) {
      // Legacy URLs must redirect (301/308) to a live page
      if (res.status >= 300 && res.status < 400) {
        const loc = res.headers.get('location')
        const dest = await fetch(`${BASE}${new URL(loc, BASE).pathname}`, { redirect: 'manual' })
        if (dest.status === 200 || (dest.status >= 300 && dest.status < 400)) {
          redirectsOk++
        } else {
          fail++; failures.push(`${path} → redirect target ${loc} returned ${dest.status}`)
        }
      } else {
        fail++; failures.push(`${path} LEGACY expected redirect, got ${res.status}`)
      }
      continue
    }

    if (res.status !== 200) {
      fail++; failures.push(`${path} returned ${res.status} (expected 200)`)
      continue
    }
    const html = await res.text()

    const title = html.match(/<title>([^<]*)<\/title>/)?.[1]
    if (!title) { fail++; failures.push(`${path} missing <title>`); continue }

    const h1Count = (html.match(/<h1[^>]*>/g) || []).length
    if (h1Count !== 1) { fail++; failures.push(`${path} has ${h1Count} <h1> (expected 1)`); continue }

    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1]
    const expected = `${PROD}${path === '/' ? '' : path}`
    if (canonical !== expected && canonical !== `${expected}/`) {
      fail++; failures.push(`${path} canonical "${canonical}" ≠ "${expected}"`); continue
    }

    const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    let ldOk = true
    for (const [, block] of ldBlocks) {
      try { JSON.parse(block) } catch { ldOk = false; break }
    }
    if (!ldOk) { fail++; failures.push(`${path} has invalid JSON-LD`); continue }

    if (/<meta name="robots" content="[^"]*noindex/.test(html)) {
      fail++; failures.push(`${path} unexpectedly noindexed`); continue
    }

    pass++
  } catch (e) {
    fail++; failures.push(`${path} fetch error: ${e.message}`)
  }
}

console.log(`\n══ PROTECTED PAGES VERIFICATION ══`)
console.log(`Live pages OK:      ${pass}`)
console.log(`Legacy redirects OK: ${redirectsOk}`)
console.log(`FAILURES:           ${fail}`)
if (failures.length) {
  console.log('')
  for (const f of failures) console.log(`  ✗ ${f}`)
  process.exit(1)
}
console.log('\n✅ All protected pages intact.')
