// Render the 971 invisible Q&A pairs that 107 pages already declare in FAQPage schema.
//
// WHY: Google's FAQPage structured-data guidelines require the Q&A content to be
// visible to users on the page. These 107 pages call faqSchema(FAQS) but never
// render FAQS, so they ship structured data with no on-page counterpart — a
// guideline violation and a manual-action risk on 459,484 impressions/28d.
//
// It is also 971 pairs of already-written, already-reviewed content that readers
// never see, on exactly the pages sitting at position 6-10 with weak CTR.
//
// SAFETY: purely additive (Prime Directive §4). Inserts the house-style block —
// copied verbatim from the 260 pages that already do this correctly — immediately
// before </article>, which is unique in all 107 files. No existing markup is
// modified, moved, or removed. Schema text and body text come from the SAME FAQS
// constant, so they cannot drift.
//
//   node data/render-invisible-faqs.mjs --dry     preview
//   node data/render-invisible-faqs.mjs           apply

import { readFileSync, writeFileSync } from 'fs'

const DRY = process.argv.includes('--dry')
const off = JSON.parse(readFileSync('data/invisible-faq-pages.json', 'utf-8')).pages

const block = (v, indent) => {
  const p = ' '.repeat(indent)
  return `${p}<h2>Frequently Asked Questions</h2>
${p}<div className="not-prose space-y-4">
${p}  {${v}.map(({ question, answer }) => (
${p}    <details key={question} className="group rounded-xl border border-navy-100 bg-white p-4">
${p}      <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
${p}        {question}
${p}        <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
${p}      </summary>
${p}      <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
${p}    </details>
${p}  ))}
${p}</div>
`
}

let done = 0, skipped = []
for (const o of off) {
  const fp = 'app' + o.page + '/page.tsx'
  const s = readFileSync(fp, 'utf-8')

  // Guard: never double-insert.
  if (new RegExp(`\\{\\s*${o.v}\\.map\\b`).test(s)) { skipped.push([o.page, 'already renders']); continue }
  // Guard: the anchor must be unique.
  const closes = (s.match(/<\/article>/g) || []).length
  if (closes !== 1) { skipped.push([o.page, `${closes} </article> tags`]); continue }
  // Guard: the FAQ constant must exist with the shape we render.
  if (!new RegExp(`const ${o.v}\\s*(:|=)`).test(s)) { skipped.push([o.page, `${o.v} not found`]); continue }
  if (!/question:/.test(s) || !/answer:/.test(s)) { skipped.push([o.page, 'no question/answer keys']); continue }

  const lines = s.split('\n')
  const ai = lines.findIndex(l => l.includes('</article>'))
  // Insert INSIDE the prose container: indent one level deeper than </article>,
  // matching the canonical pages (block sits at the same depth as the last <h2>).
  const artIndent = lines[ai].length - lines[ai].trimStart().length
  const indent = artIndent + 2

  // The line before </article> is the prose container's closing </div>; go above it.
  let insertAt = ai
  for (let i = ai - 1; i >= 0 && i > ai - 4; i--) {
    if (lines[i].trim() === '</div>') { insertAt = i; break }
  }

  lines.splice(insertAt, 0, block(o.v, indent))
  const out = lines.join('\n')

  if (DRY) {
    if (done < 2) {
      console.log(`\n--- ${o.page} (preview, ${o.pairs} pairs)`)
      console.log(out.split('\n').slice(insertAt - 3, insertAt + 16).join('\n'))
    }
  } else {
    writeFileSync(fp, out)
  }
  done++
}

console.log(`\n${DRY ? 'WOULD INSERT' : 'INSERTED'}: ${done} pages`)
console.log(`skipped: ${skipped.length}`)
for (const [p, why] of skipped) console.log(`  ${p} — ${why}`)
const pairs = off.slice(0, done).reduce((s, o) => s + o.pairs, 0)
console.log(`Q&A pairs made visible: ~${off.reduce((s, o) => s + o.pairs, 0)}`)
