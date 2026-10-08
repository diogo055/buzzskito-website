// Pairs each Canadian guide with its new US edition (see REGIONAL_PAIRS in lib/guides.ts).
// On the Canadian page it (1) wraps the metadata so the page declares both editions with
// hreflang, and (2) adds one visible line under the byline pointing US readers at the US
// edition. Nothing else on the page is touched. Safe to re-run.
//
//   node scripts/us-pages-regional.mjs
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const guides = readFileSync(join(process.cwd(), 'lib', 'guides.ts'), 'utf8')
const pairs = Array.from(guides.matchAll(/\{ us: '([^']+)', ca: '([^']+)' \}/g)).map((m) => ({ us: m[1], ca: m[2] }))
if (!pairs.length) { console.error('no REGIONAL_PAIRS found in lib/guides.ts'); process.exit(1) }

const OPEN = 'export const metadata: Metadata = buildMetadata({'
const OPEN_NEW = 'export const metadata: Metadata = withRegionalAlternates(buildMetadata({'
const IMPORT = "import { withRegionalAlternates } from '@/lib/guides'"

for (const { us, ca } of pairs) {
  const file = join(process.cwd(), 'app', ca.slice(1), 'page.tsx')
  const raw = readFileSync(file, 'utf8')
  const eol = raw.includes('\r\n') ? '\r\n' : '\n'
  const lines = raw.split(/\r?\n/)
  const done = []

  if (!lines.includes(IMPORT)) {
    const at = lines.findIndex((l) => l.includes("from '@/lib/seo'"))
    if (at < 0) { console.log(`✗ ${ca}: no lib/seo import line found; skipped`); continue }
    lines.splice(at + 1, 0, IMPORT)
    done.push('import')
  }
  const open = lines.indexOf(OPEN)
  if (open >= 0) {
    const close = lines.findIndex((l, i) => i > open && l === '})')
    if (close < 0) { console.log(`✗ ${ca}: metadata block has no closing line; skipped`); continue }
    lines[open] = OPEN_NEW
    lines[close] = `}), '${ca}')`
    done.push('hreflang')
  } else if (!lines.includes(OPEN_NEW)) { console.log(`✗ ${ca}: metadata export not in the expected form; skipped`); continue }

  const note = `{/* Regional edition link (Oct 2026): this page is the Canadian edition; see REGIONAL_PAIRS in lib/guides.ts */}`
  if (!raw.includes('See the US edition')) {
    const by = lines.findIndex((l) => l.includes('<AuthorByline'))
    const hasLink = lines.some((l) => /^import Link from 'next\/link'/.test(l))
    const AFF = /<(BuyLink|AwardRow|AwardCard|TopPick|StickyBuyBar|AmazonLink)[ \n>/]/
    const firstAff = lines.findIndex((l) => AFF.test(`${l}\n`))
    // Never push a page's FIRST product link down: add the visible line only where the first
    // affiliate element already sits above the byline (or the page has none).
    if (by >= 0 && hasLink && (firstAff < 0 || firstAff < by)) {
      const pad = lines[by].match(/^\s*/)[0]
      lines.splice(by + 1, 0,
        `${pad}${note}`,
        `${pad}<p className="not-prose mb-6 rounded-lg border border-navy-100 bg-brand-50 px-4 py-2.5 text-sm text-gray-700">Reading from the United States? Product rules and what is sold there differ. <Link href="${us}" className="font-semibold text-brand-700 underline">See the US edition</Link>.</p>`)
      done.push('visible link')
    }
  }
  writeFileSync(file, lines.join(eol))
  console.log(`✓ ${ca} <-> ${us}: ${done.length ? done.join(', ') : 'already paired'}`)
}
