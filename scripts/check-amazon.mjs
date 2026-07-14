// ─────────────────────────────────────────────────────────────────────────────
// Amazon compliance build guard. Scans the BUILT OUTPUT (what Amazon crawls),
// not the source. A non-compliant Amazon link can never reach production.
//
//   PUBLIC_AMAZON_TAG unset  -> ANY Amazon URL in the output = FAIL (must be zero)
//   PUBLIC_AMAZON_TAG set    -> any Amazon URL lacking tag=<TAG> = FAIL
//                               any hotlinked Amazon asset       = FAIL (always)
//
// Scope = crawler-visible surfaces only: rendered *.html, *.rsc payloads, and
// client JS/JSON under .next/static. Server-only function bundles
// (.next/server/**/*.js) are never served to a browser and contain the
// amazonUrl() source, so scanning them would false-positive.
// ─────────────────────────────────────────────────────────────────────────────

import { readdirSync, readFileSync } from 'fs'
import { join, extname, sep } from 'path'

// The guard runs as a standalone node process (npm run check:amazon), which does
// NOT get Next.js's automatic .env.production loading. Mirror it so the guard's
// view of the tag matches what `next build` baked into the output. A real env var
// (e.g. a Vercel dashboard setting) always wins.
if (!process.env.PUBLIC_AMAZON_TAG && !process.env.NEXT_PUBLIC_AMAZON_TAG) {
  try {
    for (const line of readFileSync('.env.production', 'utf8').split('\n')) {
      const m = line.match(/^\s*PUBLIC_AMAZON_TAG\s*=\s*(.*?)\s*$/)
      if (m) process.env.PUBLIC_AMAZON_TAG = m[1].replace(/^["']|["']$/g, '').trim()
    }
  } catch {}
}

const TAG = process.env.PUBLIC_AMAZON_TAG ?? process.env.NEXT_PUBLIC_AMAZON_TAG ?? ''
const ROOT = '.next'
const URL_RE = /https?:\/\/[^\s"'<>\\)]*(amazon\.(?:ca|com)|amzn\.to|media-amazon|amazon-adsystem)[^\s"'<>\\)]*/gi
const ASSET_RE = /media-amazon|amazon-adsystem/i

function collect(dir, out = []) {
  let entries
  try { entries = readdirSync(dir, { withFileTypes: true }) } catch { return out }
  for (const e of entries) {
    const p = join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'cache') continue
      collect(p, out)
      continue
    }
    const ext = extname(e.name)
    const inStatic = p.includes(`${ROOT}${sep}static`)
    if (ext === '.html' || ext === '.rsc') out.push(p)
    else if (inStatic && (ext === '.js' || ext === '.json')) out.push(p)
  }
  return out
}

const files = collect(ROOT)
if (files.length === 0) {
  console.error('✗ check:amazon: no build output found under .next — run the build first.')
  process.exit(1)
}

const violations = []
for (const f of files) {
  // Next.js RSC/flight payloads encode "&" as "&" (and "/" as "\/").
  // Normalize so a tagged URL like ...?k=x&tag=ID reads as ...?k=x&tag=ID
  // and the tag is not truncated at the backslash.
  const lines = readFileSync(f, 'utf8').replace(/\\u0026/gi, '&').replace(/\\\//g, '/').split('\n')
  lines.forEach((line, i) => {
    const matches = line.match(URL_RE)
    if (!matches) return
    for (const m of matches) {
      if (ASSET_RE.test(m)) violations.push([f, i + 1, m, 'hotlinked Amazon asset — never allowed'])
      else if (!TAG) violations.push([f, i + 1, m, 'Amazon URL present but PUBLIC_AMAZON_TAG is unset (output must be zero)'])
      else if (!m.includes(`tag=${TAG}`)) violations.push([f, i + 1, m, `Amazon URL missing tag=${TAG}`])
    }
  })
}

if (violations.length) {
  console.error(`\n✗ check:amazon FAILED — ${violations.length} violation(s):\n`)
  for (const [f, ln, url, why] of violations.slice(0, 60)) {
    console.error(`  ${f}:${ln}\n    ${url}\n    → ${why}\n`)
  }
  if (violations.length > 60) console.error(`  … and ${violations.length - 60} more`)
  process.exit(1)
}

console.log(
  `✓ check:amazon passed — scanned ${files.length} crawler-visible files. ` +
  (TAG ? `Every Amazon URL carries tag=${TAG}.` : `Zero Amazon URLs in output (no tag configured — fail-closed).`)
)
