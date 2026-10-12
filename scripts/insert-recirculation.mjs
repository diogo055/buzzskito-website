// Places the two in-content recirculation units in hand-written article pages.
//
//   node scripts/insert-recirculation.mjs          apply (safe to re-run: it converges on the same result)
//   node scripts/insert-recirculation.mjs --dry    report only
//
//   <NextUp path="..." />         one large "Next" headline, early in the article
//   <RelatedLinks path="..." />   two or three text links, mid-article
//
// Owner's rules (Oct 2026):
//   - articles exist to keep readers on the site, so the next article is offered early
//   - NEVER above the first Amazon button, and never inside a run of buy buttons: the purchase
//     path is untouched and the unit catches readers who did not buy
//   - no Amazon link is added, moved or removed by this script
//
// SCOPE: article pages under app/blog and app/learn that already end with <ReadNext/>. That
// leaves out the local posts that keep a quote CTA (scripts/article-cta-scope.mjs), service and
// city pages, index pages, and the guides rendered by components/GuidePage.tsx (that template
// places the units itself).
//
// HOW A SPOT IS CHOSEN. Only plain <h2>…</h2> lines in the article body are used as section
// boundaries (a styled <h2 className=…> belongs to a designed box, not to the running text).
// End-matter headings (FAQ, Related, Sources, Bottom line …) are never used.
//   Next, early spot   When the page's first Amazon button is above the article body (or the page
//                      has none) and the first section holds no buy button, the unit goes inside
//                      that first section, after its third block, between two paragraphs.
//   Next, otherwise    In front of the first body <h2> that is not the article's first <h2> and is
//                      below the first Amazon button, i.e. after the section holding that button.
//   Related            In front of the <h2> about 60% of the way through, at least two sections
//                      after Next.
// NEVER in front of the second or later heading of a numbered run ("Step 2", "3. Weevils",
// "Layer 2"): a boxed "Next" headline between two steps reads as the end of the instructions.
// NEVER in front of the "Top pick" / "Best overall" heading on a product page.
// The Related line is never put in the article's last section, where it would sit on top of the
// page's own end matter. A unit that cannot go where the rule points moves to the next allowed
// heading. A page without a suitable spot is left alone and listed; so is a page switched off in
// data/recirculation-overrides.json.
//
// RE-RUNS. The script first removes any units it placed before, then places them again, so a
// change to the rules or to a page's headings moves the units instead of duplicating them.
//
// SELF-CHECK per file before writing: apart from the unit lines and their imports the file is
// byte-identical to the file without units, every Amazon-bearing line is identical and in the
// same order, the Next unit sits below the first Amazon button, and the file still parses.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'
import { createRequire } from 'module'
import { keepsQuoteCta } from './article-cta-scope.mjs'

const require = createRequire(import.meta.url)
const ts = require('typescript')
const ROOT = process.cwd()
const DRY = process.argv.includes('--dry')

// an in-content buy element (the fixed bottom buy bar is not "in" the content)
const BUY = /<(BuyLink|AwardRow|AwardCard|TopPick|AmazonLink|RelatedProducts)[\s/>]/
// any line that carries affiliate markup at all, for the byte-identical check
const AFF = /<(BuyLink|AwardRow|AwardCard|TopPick|AmazonLink|RelatedProducts|StickyBuyBar)[\s/>]|asin=|search=|amazon\.|tag=/
const H2 = /^<h2(?:\s+id="[^"]*")?>([^{}]+)<\/h2>$/
const END_MATTER = /frequently asked|\bfaqs?\b|related|sources|references|further reading|keep reading|read next|bottom line|verdict|conclusion|summary|final thoughts|takeaway|about the author|methodology|how we (rank|chose|picked|research)|glossary|disclosure/i
// heading number N of a numbered run, or 0: "Step 2: …", "3. Weevils", "#2 — …", "Layer 2 …"
const NUMBERED = /^(?:(?:step|layer|tell|tip|sign|stage|phase|rule|mistake|reason|myth|method|way|option|purchase|pick|part|lesson|day|week)\s*#?\s*(\d+)\b|#?(\d+)\s*[.):—–-]\s)/i
const TOP_PICK = /\b(top pick|best overall|our pick|our top|the winner|editor.?s (pick|choice))\b|#1\b/i
const UNIT_LINE = /^\s*<(NextUp|RelatedLinks) path="[^"]*" \/>\s*$/
const UNIT_IMPORT = /^import (NextUp|RelatedLinks) from '@\/components\/(NextUp|RelatedLinks)'\s*$/
const ONE_LINE_P = /^<p(\s[^>]*)?>.*<\/p>$/
const plain = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\{[^}]*\}/g, ' ').replace(/\s+/g, ' ').trim()

const picks = JSON.parse(readFileSync(join(ROOT, 'lib', 'recirculation.json'), 'utf8')).pages
const report = { early: [], sectionBreak: [], skipped: [], problems: [], unchanged: 0, written: 0 }

/** Inside the section (h0, h1): the line to insert in front of, after three blocks, between two paragraphs. -1 if none. */
function earlySpot(lines, h0, h1) {
  const indent = lines[h0].slice(0, lines[h0].length - lines[h0].trimStart().length)
  const starts = []
  for (let i = h0 + 1; i < h1; i++) {
    const l = lines[i]
    if (!l.trim()) continue
    if (l.slice(0, l.length - l.trimStart().length) !== indent) continue
    const t = l.trim()
    if ((t.startsWith('<') && !t.startsWith('</')) || t.startsWith('{')) starts.push(i)
  }
  let words = 0
  for (let k = 0; k < starts.length; k++) {
    if (k >= 3 && words >= 90) {
      const prev = lines[starts[k - 1]].trim(), next = lines[starts[k]].trim()
      // the block before must be a complete one-line paragraph that does not lead into something
      const prevIsWhole = ONE_LINE_P.test(prev) && lines.slice(starts[k - 1] + 1, starts[k]).every((x) => !x.trim()) && !/[:,;]\s*$/.test(plain(prev))
      if (prevIsWhole && /^<p[\s>]/.test(next)) return starts[k]
    }
    words += plain(lines.slice(starts[k], k + 1 < starts.length ? starts[k + 1] : h1).join(' ')).split(' ').filter(Boolean).length
  }
  return -1
}

for (const section of ['blog', 'learn']) {
  for (const d of readdirSync(join(ROOT, 'app', section), { withFileTypes: true })) {
    if (!d.isDirectory()) continue
    const file = join(ROOT, 'app', section, d.name, 'page.tsx')
    if (!existsSync(file)) continue
    const path = `/${section}/${d.name}`
    const current = readFileSync(file, 'utf8')
    if (keepsQuoteCta(path) || current.includes('@/components/GuidePage') || !current.includes('<ReadNext')) continue
    const eol = current.includes('\r\n') ? '\r\n' : '\n'
    // the page as it is without any unit this script placed earlier
    const lines = current.split(eol).filter((l) => !UNIT_LINE.test(l) && !UNIT_IMPORT.test(l))
    const bare = lines.join(eol)
    if (!picks[path] || !picks[path].next) { report.skipped.push(`${path}: ${picks[path] && picks[path].off ? 'switched off in data/recirculation-overrides.json' : 'no pick in lib/recirculation.json'}`); if (bare !== current && !DRY) writeFileSync(file, bare); continue }

    const heads = []
    const headText = {}
    lines.forEach((l, i) => { const m = l.trim().match(H2); if (m && !END_MATTER.test(m[1].replace(/&[a-z#0-9]+;/gi, ' '))) { heads.push(i); headText[i] = m[1].replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim() } })
    const numberOf = (i) => { const m = (headText[i] || '').match(NUMBERED); return m ? Number(m[1] || m[2]) : 0 }
    // a unit may go in front of this heading: it does not continue a numbered run and is not the top pick
    const allowed = (ord) => numberOf(heads[ord]) < 2 && !TOP_PICK.test(headText[heads[ord]] || '')
    const firstBuy = lines.findIndex((l) => BUY.test(l))
    // the section break below the first buy button (never in front of the article's first heading)
    const nextOrd = heads.findIndex((i, ord) => ord >= 1 && i > firstBuy && allowed(ord))
    // the early spot: only when no buy button is at or below the start of the body's first section
    let nextAt = -1, how = 'sectionBreak', anchorOrd = nextOrd
    if (heads.length >= 2 && firstBuy < heads[0] && !numberOf(heads[0]) && numberOf(heads[1]) < 2 && !lines.slice(heads[0], heads[1]).some((l) => BUY.test(l))) {
      const spot = earlySpot(lines, heads[0], heads[1])
      if (spot > 0) { nextAt = spot; how = 'early'; anchorOrd = 0 }
    }
    if (nextAt < 0) {
      if (nextOrd < 0) {
        report.skipped.push(`${path}: no section break below the first ${firstBuy >= 0 ? 'Amazon button' : 'section'} (${heads.length} plain headings)`)
        if (bare !== current && !DRY) writeFileSync(file, bare)
        continue
      }
      nextAt = heads[nextOrd]
    }
    // Related: about 60% through, at least two sections after Next
    const relMin = anchorOrd + (how === 'early' ? 3 : 2), relMax = heads.length - 2 // never the last section
    const relWant = Math.max(relMin, Math.round((heads.length - 1) * 0.6))
    let relOrd = -1
    for (let o = relWant; o <= relMax && relOrd < 0; o++) if (allowed(o)) relOrd = o
    for (let o = relWant - 1; o >= relMin && relOrd < 0; o--) if (o <= relMax && allowed(o)) relOrd = o
    const hasRelated = relOrd >= 0 && (picks[path].related || []).length >= 2
    const out = [...lines]
    const indentOf = (i) => lines[i].slice(0, lines[i].length - lines[i].trimStart().length)
    const added = []
    if (hasRelated) { const l = `${indentOf(heads[relOrd])}<RelatedLinks path="${path}" />`; out.splice(heads[relOrd], 0, l); added.push(l) }
    { const l = `${indentOf(nextAt)}<NextUp path="${path}" />`; out.splice(nextAt, 0, l); added.push(l) }
    let lastImport = -1
    for (let i = 0; i < out.length; i++) { if (/^import\s/.test(out[i])) lastImport = i; else if (lastImport >= 0 && out[i].trim() && !/^\s*(\/\/|\*|\/\*)/.test(out[i]) && !/^\s*['"}]|from\s+['"]/.test(out[i])) break }
    const imports = ["import NextUp from '@/components/NextUp'", ...(hasRelated ? ["import RelatedLinks from '@/components/RelatedLinks'"] : [])]
    out.splice(lastImport + 1, 0, ...imports)
    added.push(...imports)
    const after = out.join(eol)

    // ── verify before writing ────────────────────────────────────────────────────
    const issues = []
    const rest = [...out]
    for (const a of added) { const k = rest.indexOf(a); if (k < 0) issues.push('an added line went missing'); else rest.splice(k, 1) }
    if (rest.join('\n') !== lines.join('\n')) issues.push('something other than unit lines changed')
    const affB = lines.filter((l) => AFF.test(l)), affA = out.filter((l) => AFF.test(l))
    if (affB.length !== affA.length || affB.some((l, i) => l !== affA[i])) issues.push('an Amazon-bearing line changed')
    const nextLine = out.findIndex((l) => l.includes('<NextUp '))
    const firstBuyAfter = out.findIndex((l) => BUY.test(l))
    if (firstBuyAfter >= 0 && nextLine < firstBuyAfter) issues.push('the Next unit would sit above the first Amazon button')
    if ((after.match(/<NextUp\b/g) || []).length !== 1 || (after.match(/<RelatedLinks\b/g) || []).length > 1) issues.push('wrong number of units')
    const t = ts.transpileModule(after, { compilerOptions: { jsx: ts.JsxEmit.Preserve, target: ts.ScriptTarget.ES2020 }, reportDiagnostics: true, fileName: 'page.tsx' })
    if ((t.diagnostics || []).length) issues.push(`does not parse: ${ts.flattenDiagnosticMessageText(t.diagnostics[0].messageText, ' ')}`)
    if (issues.length) { report.problems.push(`${path}: ${issues.join('; ')}`); continue }

    if (after === current) report.unchanged++
    else { report.written++; if (!DRY) writeFileSync(file, after) }
    report[how].push({ path, headings: heads.length, related: hasRelated, buyAbove: firstBuy >= 0 })
  }
}

const done = report.early.length + report.sectionBreak.length
const withRelated = [...report.early, ...report.sectionBreak].filter((p) => p.related).length
console.log(`${DRY ? 'would place' : 'placed'} units on ${done} article pages (${withRelated} also have the Related line) | left alone: ${report.skipped.length} | problems: ${report.problems.length} | files ${DRY ? 'that would change' : 'changed'} this run: ${report.written}`)
console.log(`  Next inside the first section, after its third block: ${report.early.length} pages`)
console.log(`  Next at the section break below the first Amazon button: ${report.sectionBreak.length} pages`)
for (const s of report.skipped.slice(0, 12)) console.log(`  left alone: ${s}`)
if (report.skipped.length > 12) console.log(`  ... and ${report.skipped.length - 12} more`)
for (const p of report.problems.slice(0, 20)) console.log(`  ✗ ${p}`)
if (!DRY) writeFileSync(join(ROOT, 'reports', 'recirculation_placement.json'), JSON.stringify(report, null, 1))
process.exit(report.problems.length ? 1 : 0)
