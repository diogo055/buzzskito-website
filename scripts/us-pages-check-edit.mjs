// Checks ONE edited existing page against its pre-edit snapshot. For agents (and people)
// making additive edits to pages that earn money.
//
//   node scripts/us-pages-check-edit.mjs <route> <snapshot-dir>
//   e.g. node scripts/us-pages-check-edit.mjs blog/how-to-get-rid-of-mice-canada /path/to/snap
//
// Passes only if:
//   - the file still parses as TSX
//   - no line of the original was deleted or changed (additive only)
//   - every affiliate element is byte-identical, in the same order, and nothing new was
//     inserted above the first one
//   - no new affiliate element, Amazon link or retailer link was added
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const ts = require('typescript')

const [route, snapDir] = process.argv.slice(2)
if (!route || !snapDir) { console.error('usage: node scripts/us-pages-check-edit.mjs <route> <snapshot-dir>'); process.exit(1) }
const target = join('app', route, 'page.tsx')
const snap = join(snapDir, `${route.replace(/\//g, '__')}.tsx`)
if (!existsSync(target)) { console.error(`missing ${target}`); process.exit(1) }
if (snapDir === '--new') {
  // a brand-new file: there is nothing to compare against, so only check that it parses
  // and carries no affiliate, retailer or price content
  const src = readFileSync(target, 'utf8')
  const res = ts.transpileModule(src, { compilerOptions: { jsx: ts.JsxEmit.Preserve, target: ts.ScriptTarget.ES2020 }, reportDiagnostics: true, fileName: 'page.tsx' })
  const errs = (res.diagnostics || []).map((d) => `SYNTAX line ${d.file && d.start != null ? d.file.getLineAndCharacterOfPosition(d.start).line + 1 : '?'}: ${ts.flattenDiagnosticMessageText(d.messageText, ' ')}`)
  if (/<(BuyLink|AwardRow|AwardCard|TopPick|StickyBuyBar|AmazonLink)\b|amazon\.|amzn\./i.test(src)) errs.push('a new hub page must not contain affiliate elements or Amazon links')
  if (/\$\d/.test(src)) errs.push('a new hub page must not contain dollar prices')
  console.log(`${errs.length ? '✗' : '✓'} ${route} (new file): ${src.split('\n').length} lines`)
  for (const e of errs) console.log(`   ERROR  ${e}`)
  process.exit(errs.length ? 1 : 0)
}
if (!existsSync(snap)) { console.error(`no snapshot at ${snap}`); process.exit(1) }

const norm = (s) => s.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
const before = norm(readFileSync(snap, 'utf8')).split('\n')
const afterSrc = norm(readFileSync(target, 'utf8'))
const after = afterSrc.split('\n')
const problems = []

// 1. parses
const out = ts.transpileModule(afterSrc, { compilerOptions: { jsx: ts.JsxEmit.Preserve, target: ts.ScriptTarget.ES2020 }, reportDiagnostics: true, fileName: 'page.tsx' })
for (const d of out.diagnostics || []) {
  const pos = d.file && d.start != null ? d.file.getLineAndCharacterOfPosition(d.start) : null
  problems.push(`SYNTAX line ${pos ? pos.line + 1 : '?'}: ${ts.flattenDiagnosticMessageText(d.messageText, ' ')}`)
}

// 2. additive only: every original line must still be present, in order
const missing = []
let j = 0
const mapIdx = []
for (const line of before) {
  let k = j
  while (k < after.length && after[k] !== line) k++
  if (k === after.length) { if (line.trim() !== '') missing.push(line) } else { mapIdx.push(k); j = k + 1 }
}
for (const l of missing.slice(0, 12)) problems.push(`CHANGED OR DELETED original line: ${l.trim().slice(0, 150)}`)
if (missing.length > 12) problems.push(`… and ${missing.length - 12} more changed or deleted lines`)

// 3. affiliate elements
const AFF = /<(BuyLink|AwardRow|AwardCard|TopPick|StickyBuyBar|AmazonLink|RelatedProducts)\b/
const affB = before.filter((l) => AFF.test(l)), affA = after.filter((l) => AFF.test(l))
if (affB.length !== affA.length) problems.push(`AFFILIATE element count changed: ${affB.length} before, ${affA.length} after. Do not add or remove affiliate elements.`)
else if (affB.some((l, i) => l !== affA[i])) problems.push('AFFILIATE element lines differ from the original. They must be byte-identical and in the same order.')
const firstB = before.findIndex((l) => AFF.test(l)), firstA = after.findIndex((l) => AFF.test(l))
if (firstB >= 0 && firstA > firstB) {
  // lines inserted above the first affiliate element push it down the page; only imports and data constants are allowed there
  const returnB = before.findIndex((l) => /^\s*return \(/.test(l)), returnA = after.findIndex((l) => /^\s*return \(/.test(l))
  const jsxShift = (firstA - returnA) - (firstB - returnB)
  if (jsxShift > 0) problems.push(`The first affiliate element moved ${jsxShift} lines further down the page. New content must go BELOW the first affiliate element.`)
}
const added = after.filter((l) => !before.includes(l))
const addedText = added.join('\n')
if (/amazon\.|amzn\.|tag=|asin=|search=\{|walmart\.|homedepot\.|lowes\.|chewy\.|ebay\./i.test(addedText)) problems.push('Added content contains a retailer or Amazon reference. US products may be named, never linked.')
if (/\$\d/.test(addedText) && !/cost|price/i.test(route)) problems.push('Added content contains a dollar price. Do not add product prices.')
if (/\b(we|our team|our technicians?)\s+(tested|test|tried|found|use|recommend)\b|\bin our experience\b/i.test(addedText)) problems.push('Added content makes a first-hand or testing claim. Report what sources say instead.')
if (/\b(100% (safe|effective)|completely safe|non-?toxic|chemical[- ]free|guaranteed to)\b/i.test(addedText)) problems.push('Added content makes an absolute safety or performance claim.')

const words = (s) => (s.replace(/<[^>]+>/g, ' ').replace(/\{[^}]*\}/g, ' ').match(/[A-Za-z][A-Za-z'’-]{2,}/g) || []).length
console.log(`${problems.length ? '✗' : '✓'} ${route}: +${after.length - before.length} lines, about +${words(added.join(' '))} words added, ${affA.length} affiliate elements`)
for (const p of problems) console.log(`   ERROR  ${p}`)
process.exit(problems.length ? 1 : 0)
