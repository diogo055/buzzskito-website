// Removes the hand-written mid-article quote box from article pages:
//
//   <aside aria-label="Professional mosquito control" ...>  heading, pitch, quote button, phone  </aside>
//
//   node scripts/remove-mid-article-ctas.mjs <slug> [<slug> ...]     only these /blog posts
//   node scripts/remove-mid-article-ctas.mjs --all                   every article that has one
//   add --dry to report without writing
//
// Owner's decision (Oct 2026): done on the ten highest-traffic posts first. The other articles
// still carry the box; run --all to remove it there too. Local posts whose reader is in the
// service area (scripts/article-cta-scope.mjs) are never touched.
//
// It removes whole <aside aria-label="Professional ..."> blocks and nothing else, then re-checks
// each file: the block must contain a quote link or phone link and no affiliate element, every
// affiliate line in the file must be byte-identical afterwards, and the file must still parse.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'
import { createRequire } from 'module'
import { keepsQuoteCta } from './article-cta-scope.mjs'

const require = createRequire(import.meta.url)
const ts = require('typescript')
const ROOT = process.cwd()
const args = process.argv.slice(2)
const DRY = args.includes('--dry')
const ALL = args.includes('--all')
const slugs = args.filter((a) => !a.startsWith('--'))
if (!ALL && !slugs.length) { console.log('usage: node scripts/remove-mid-article-ctas.mjs <slug> [...] | --all  [--dry]'); process.exit(1) }

const AFF = /<(BuyLink|AwardRow|AwardCard|TopPick|StickyBuyBar|AmazonLink|RelatedProducts)[\s/>]|asin=|search=|amazon\./
const OPEN = /^([ \t]*)<aside aria-label="Professional [^"]*"/
const QUOTE = /href="\/(free-yard-assessment|mosquito-control|tick-control)"|href="tel:|phoneHref/

const targets = []
if (ALL) {
  for (const section of ['blog', 'learn']) for (const d of readdirSync(join(ROOT, 'app', section), { withFileTypes: true })) if (d.isDirectory()) targets.push(`/${section}/${d.name}`)
} else for (const s of slugs) targets.push(s.startsWith('/') ? s : `/blog/${s}`)

const done = [], problems = []
let kept = 0
for (const path of targets) {
  const file = join(ROOT, 'app', ...path.split('/').filter(Boolean), 'page.tsx')
  if (!existsSync(file)) { if (!ALL) problems.push(`${path}: no such page`); continue }
  if (keepsQuoteCta(path)) { kept++; continue }
  const before = readFileSync(file, 'utf8')
  const eol = before.includes('\r\n') ? '\r\n' : '\n'
  const lines = before.split(/\r?\n/)
  const out = []
  const removed = []
  const issues = []
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(OPEN)
    if (!m) { out.push(lines[i]); continue }
    // the block ends at the first </aside> with the same indentation
    let end = -1
    for (let j = i; j < lines.length; j++) if (lines[j] === `${m[1]}</aside>`) { end = j; break }
    if (end < 0) { issues.push(`line ${i + 1}: no matching </aside>`); out.push(lines[i]); continue }
    const block = lines.slice(i, end + 1)
    const text = block.join('\n')
    if (AFF.test(text)) { issues.push(`line ${i + 1}: the box holds an affiliate element, left alone`); out.push(...block); i = end; continue }
    if (!QUOTE.test(text)) { issues.push(`line ${i + 1}: the box has no quote or phone link, left alone`); out.push(...block); i = end; continue }
    // a comment line written for the box goes with it
    if (out.length && /^\s*\{\/\*.*(lead CTA|Service arm|service CTA).*\*\/\}\s*$/i.test(out[out.length - 1])) removed.push(out.pop())
    removed.push(...block)
    i = end
    // keep a single blank line where the box was
    if (out.length && out[out.length - 1].trim() === '' && lines[i + 1] !== undefined && lines[i + 1].trim() === '') i++
  }
  if (!removed.length && !issues.length) continue
  const after = out.join(eol)
  const affB = lines.filter((l) => AFF.test(l)), affA = out.filter((l) => AFF.test(l))
  if (affB.length !== affA.length || affB.some((l, k) => l !== affA[k])) issues.push('an affiliate line changed')
  const t = ts.transpileModule(after, { compilerOptions: { jsx: ts.JsxEmit.Preserve, target: ts.ScriptTarget.ES2020 }, reportDiagnostics: true, fileName: 'page.tsx' })
  if ((t.diagnostics || []).length) issues.push(`does not parse: ${ts.flattenDiagnosticMessageText(t.diagnostics[0].messageText, ' ')}`)
  if (issues.length) { problems.push(`${path}: ${issues.join('; ')}`); continue }
  if (!DRY) writeFileSync(file, after)
  const links = [...removed.join('\n').matchAll(/href="([^"]+)"/g)].map((x) => x[1])
  done.push({ path, boxes: removed.filter((l) => OPEN.test(l)).length, linesRemoved: removed.length, linksRemoved: links, stillLinksTo: ['/mosquito-control', '/tick-control', '/free-yard-assessment'].filter((h) => after.includes(`href="${h}"`)) })
}

console.log(`${DRY ? 'would remove' : 'removed'} the mid-article quote box on ${done.length} page(s)${kept ? ` | ${kept} local post(s) left alone` : ''}`)
for (const d of done.slice(0, ALL ? 12 : 99)) console.log(`   ${d.path}: ${d.boxes} box(es), ${d.linesRemoved} lines | links removed: ${d.linksRemoved.join(' ')} | page still links to: ${d.stillLinksTo.join(' ') || '(none of the service pages)'}`)
if (problems.length) { console.log(`✗ ${problems.length} page(s) with a problem:`); for (const p of problems.slice(0, 30)) console.log(`   - ${p}`) }
process.exit(problems.length ? 1 : 0)
