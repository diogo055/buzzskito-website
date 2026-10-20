// Puts the "top box" (components/TopBox.tsx) on hand-written product and remedy pages: the page's
// own StickyBuyBar pick, repeated in the page directly under its opening section so a phone reader
// meets it within the first screen or two (owner, Oct 20, 2026; evidence in
// data/amazon/reverse-engineering-2026-10-20.md).
//
//   node scripts/insert-top-box.mjs --list <file with one /blog/... path per line> [--dry-run]
//
// Rules (the affiliate integrity protocol: additive only, nothing existing is touched):
//   - the box copies the page's <StickyBuyBar> attributes verbatim (same product, search term,
//     ASIN, label and tag), so no new product, claim or tag is introduced;
//   - it goes directly after the top <AffiliateDisclosure /> (and after the StickyBuyBar when that
//     follows it) when that sits in the first 12% of the page's JSX; otherwise directly after the
//     hero section, carrying Amazon's disclosure sentence itself (`disclosure`), so no Amazon link
//     ever sits above a disclosure; anything else is reported for a manual decision, not guessed;
//   - pages that already show a pick box (TopPick, AwardRow, AwardCard, TopBox) above that point,
//     service-side posts (lib/page-roles.json leadPosts + localInfo) and the ad-free local posts
//     (lib/ad-routes.json adFree) are skipped;
//   - the only edits are one import line and one <TopBox ... /> line. Safe to re-run: a page that
//     already has a TopBox is left alone.
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const arg = (k) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null }
const DRY = process.argv.includes('--dry-run')
const listFile = arg('--list')
if (!listFile) { console.error('usage: node scripts/insert-top-box.mjs --list <paths.txt> [--dry-run]'); process.exit(1) }
const paths = readFileSync(listFile, 'utf8').split(/\r?\n/).map((s) => s.trim()).filter((s) => s.startsWith('/'))

const roles = JSON.parse(readFileSync(join(ROOT, 'lib', 'page-roles.json'), 'utf8'))
const ads = JSON.parse(readFileSync(join(ROOT, 'lib', 'ad-routes.json'), 'utf8'))
const SERVICE_SIDE = new Set([...roles.leadPosts, ...roles.localInfo, ...ads.adFree])
const PICK_BOX = /<(TopPick|AwardRow|AwardCard|TopBox)\b/

const done = [], skipped = []
for (const p of paths) {
  const file = join(ROOT, 'app', ...p.split('/').filter(Boolean), 'page.tsx')
  if (!existsSync(file)) { skipped.push(`${p}: no hand-written page.tsx`); continue }
  if (SERVICE_SIDE.has(p)) { skipped.push(`${p}: service-side post (quote prompts win)`); continue }
  const src = readFileSync(file, 'utf8')
  const eol = src.includes('\r\n') ? '\r\n' : '\n'
  if (src.includes('<TopBox')) { skipped.push(`${p}: already has a TopBox`); continue }

  const bar = src.match(/<StickyBuyBar\b([\s\S]*?)\/>/)
  if (!bar) { skipped.push(`${p}: no StickyBuyBar to copy`); continue }
  const attrs = bar[1].replace(/\s+/g, ' ').trim()

  const lines = src.split(/\r?\n/)
  const ret = lines.findIndex((l) => /^\s*return \(\s*$/.test(l))
  if (ret < 0) { skipped.push(`${p}: no "return (" line`); continue }
  const down = (i) => (i - ret) / (lines.length - ret)
  const d = lines.findIndex((l) => /^\s*<AffiliateDisclosure\s*\/>\s*$/.test(l))
  const imp = lines.findIndex((l) => /^import StickyBuyBar from '@\/components\/StickyBuyBar'/.test(l))
  if (imp < 0) { skipped.push(`${p}: no StickyBuyBar import line`); continue }

  if (d < 0 || down(d) > 0.12) {
    // The page's disclosure comes further down, so the box goes directly after the hero section
    // and carries Amazon's disclosure sentence itself.
    const h = lines.findIndex((l, i) => i > ret && /^ {6}<\/section>\s*$/.test(l))
    if (h < 0 || down(h) > 0.12) { skipped.push(`${p}: no hero section near the top (manual)`); continue }
    let n = h + 1
    while (n < lines.length && !lines[n].trim()) n++
    if (/-mt-/.test(lines[n] || '')) { skipped.push(`${p}: the block after the hero overlaps it (manual)`); continue }
    if (lines.slice(ret, h).some((l) => PICK_BOX.test(l))) { skipped.push(`${p}: a pick box already sits in the hero`); continue }
    lines.splice(h + 1, 0, '', `      <TopBox ${attrs} disclosure />`)
    lines.splice(imp + 1, 0, `import TopBox from '@/components/TopBox'`)
    if (!DRY) writeFileSync(file, lines.join(eol))
    done.push(`${p} (after the hero, own disclosure; page disclosure ${d < 0 ? 'none' : `${Math.round(down(d) * 100)}% down`})`)
    continue
  }
  if (lines.slice(ret, d).some((l) => PICK_BOX.test(l))) { skipped.push(`${p}: a pick box already sits above the disclosure`); continue }

  // standalone (between the hero and the first content section) or inside the article column
  let prev = d - 1
  while (prev > 0 && !lines[prev].trim()) prev--
  const standalone = /^\s*<\/section>\s*$/.test(lines[prev])
  // after the StickyBuyBar when it directly follows the disclosure (it may span several lines)
  let at = d + 1
  if (/^\s*<StickyBuyBar\b/.test(lines[at] || '')) { while (at < lines.length && !/\/>\s*$/.test(lines[at])) at++; at++ }
  // a pick box already right below (within the next few elements) makes a second one redundant
  const below = lines.slice(at, at + 40).filter((l) => l.trim()).slice(0, 8)
  if (below.some((l) => PICK_BOX.test(l))) { skipped.push(`${p}: a pick box already sits right below the disclosure`); continue }
  const indent = lines[d].match(/^\s*/)[0]
  lines.splice(at, 0, `${indent}<TopBox ${attrs}${standalone ? '' : ' inline'} />`)
  lines.splice(imp + 1, 0, `import TopBox from '@/components/TopBox'`)

  if (!DRY) writeFileSync(file, lines.join(eol))
  done.push(`${p}${standalone ? '' : ' (inline)'}`)
}
console.log(`${DRY ? '[dry run] would add' : 'added'} the top box on ${done.length} page(s); skipped ${skipped.length}`)
for (const s of done) console.log(`  + ${s}`)
for (const s of skipped) console.log(`  - ${s}`)
