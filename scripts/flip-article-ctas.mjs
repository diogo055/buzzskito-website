// Swaps the quote call-to-action on ARTICLE pages for the "Keep reading" block.
//
//   node scripts/flip-article-ctas.mjs            apply (safe to re-run: skips files already done)
//   node scripts/flip-article-ctas.mjs --dry      report only
//
// Owner's decision (Oct 2026): blog and Learning Centre readers are national and US, outside the
// service area, so a quote button there is a dead end and a related article is another page view.
//
// SCOPE: article pages under app/blog and app/learn that show display ads (lib/ad-routes.json).
// NOT touched: service and city pages, the quote flow, the local posts whose reader is in the
// service area (see scripts/article-cta-scope.mjs), index pages, and guide pages rendered by components/GuidePage.tsx (that
// template is changed once, in the component).
//
// What it does to each page:
//   - the closing <CTASection .../> becomes <ReadNext path="..." standalone />
//   - any other <CTASection/>, <BlogPostCTA/> and <InlineYardRiskCTA/> is removed
//   - a page that closed with <AdjacentPestCTA/> gets <ReadNext/> right after it
//   - a page with none of those gets <ReadNext/> before its closing fragment
// It never touches any other line. After editing it re-checks every file: the only lines
// allowed to disappear are those CTA elements and their now-unused imports, every affiliate
// element must be byte-identical and in the same order, and the file must still parse.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'
import { createRequire } from 'module'
import { keepsQuoteCta } from './article-cta-scope.mjs'

const require = createRequire(import.meta.url)
const ts = require('typescript')
const ROOT = process.cwd()
const DRY = process.argv.includes('--dry')

const CTA_NAMES = ['CTASection', 'BlogPostCTA', 'InlineYardRiskCTA']
const AFF = /<(BuyLink|AwardRow|AwardCard|TopPick|StickyBuyBar|AmazonLink|RelatedProducts)[\s/>]/
const elementRe = (name) => new RegExp(`^[ \\t]*<${name}\\b[^<]*?\\/>[ \\t]*\\r?\\n`, 'gm')

const report = { changed: [], skipped: [], problems: [] }
for (const section of ['blog', 'learn']) {
  for (const d of readdirSync(join(ROOT, 'app', section), { withFileTypes: true })) {
    if (!d.isDirectory()) continue
    const file = join(ROOT, 'app', section, d.name, 'page.tsx')
    if (!existsSync(file)) continue
    const path = `/${section}/${d.name}`
    const keeps = keepsQuoteCta(path)
    if (keeps) { report.skipped.push(`${path} (${keeps}: quote CTA stays)`); continue }
    const before = readFileSync(file, 'utf8')
    if (before.includes('@/components/GuidePage')) continue // template page: handled in the component
    if (before.includes('<ReadNext')) continue // already done
    const eol = before.includes('\r\n') ? '\r\n' : '\n'
    let s = before

    // every CTA element, in document order
    const found = []
    for (const name of CTA_NAMES) for (const m of s.matchAll(elementRe(name))) found.push({ name, index: m.index, text: m[0] })
    found.sort((a, b) => a.index - b.index)
    const lastCta = [...found].reverse().find((f) => f.name === 'CTASection')
    let placed = false
    // rebuild from the end so indexes stay valid
    for (const f of [...found].reverse()) {
      const indent = f.text.match(/^[ \t]*/)[0]
      const replacement = f === lastCta ? `${indent}<ReadNext path="${path}" standalone />${eol}` : ''
      if (f === lastCta) placed = true
      s = s.slice(0, f.index) + replacement + s.slice(f.index + f.text.length)
    }
    if (!placed) {
      const adj = [...s.matchAll(/^([ \t]*)<AdjacentPestCTA\b[^<]*?\/>[ \t]*\r?\n/gm)].pop()
      if (adj) {
        const at = adj.index + adj[0].length
        s = `${s.slice(0, at)}${adj[1]}<ReadNext path="${path}" />${eol}${s.slice(at)}`
        placed = true
      } else {
        const close = [...s.matchAll(/^([ \t]*)<\/>[ \t]*\r?\n/gm)].pop()
        if (close) { s = `${s.slice(0, close.index)}${close[1]}  <ReadNext path="${path}" standalone />${eol}${s.slice(close.index)}`; placed = true }
      }
    }
    if (!placed) { report.problems.push(`${path}: found nowhere to put the Keep reading block`); continue }

    // imports: add ReadNext, drop the ones nothing uses any more
    const lines = s.split(/\r?\n/)
    let lastImport = -1
    for (let i = 0; i < lines.length; i++) { if (/^import\s/.test(lines[i])) lastImport = i; else if (lastImport >= 0 && lines[i].trim() && !/^\s*(\/\/|\*|\/\*)/.test(lines[i]) && !/^\s*['"}]|from\s+['"]/.test(lines[i])) break }
    for (const name of CTA_NAMES) {
      const uses = lines.filter((l) => !/^import\s/.test(l) && new RegExp(`\\b${name}\\b`).test(l)).length
      if (!uses) { const i = lines.findIndex((l) => new RegExp(`^import ${name} from '@/components/${name}'`).test(l)); if (i >= 0) { lines.splice(i, 1); if (i <= lastImport) lastImport-- } }
    }
    lines.splice(lastImport + 1, 0, "import ReadNext from '@/components/ReadNext'")
    s = lines.join(eol)

    // ── verify this one file before writing it ──────────────────────────────────
    const bl = before.split(/\r?\n/), al = s.split(/\r?\n/)
    const affB = bl.filter((l) => AFF.test(l)), affA = al.filter((l) => AFF.test(l))
    const issues = []
    if (affB.length !== affA.length || affB.some((l, i) => l !== affA[i])) issues.push('an affiliate element changed')
    // every removed line must belong to a CTA element or be one of its imports
    const removedText = found.map((f) => f.text).join('')
    let j = 0
    for (const line of bl) {
      let k = j
      while (k < al.length && al[k] !== line) k++
      if (k === al.length) {
        const ok = removedText.includes(line) || CTA_NAMES.some((n) => new RegExp(`^import ${n} from`).test(line))
        if (!ok && line.trim() !== '') issues.push(`unexpected line removed: ${line.trim().slice(0, 90)}`)
      } else j = k + 1
    }
    if ((s.match(/<ReadNext\b/g) || []).length !== 1) issues.push('not exactly one Keep reading block')
    const out = ts.transpileModule(s, { compilerOptions: { jsx: ts.JsxEmit.Preserve, target: ts.ScriptTarget.ES2020 }, reportDiagnostics: true, fileName: 'page.tsx' })
    if ((out.diagnostics || []).length) issues.push(`does not parse: ${ts.flattenDiagnosticMessageText(out.diagnostics[0].messageText, ' ')}`)
    if (issues.length) { report.problems.push(`${path}: ${issues.join('; ')}`); continue }

    if (!DRY) writeFileSync(file, s)
    report.changed.push({ path, removed: found.map((f) => f.name) })
  }
}

const tally = {}
for (const c of report.changed) for (const n of c.removed) tally[n] = (tally[n] || 0) + 1
console.log(`${DRY ? 'would change' : 'changed'} ${report.changed.length} article pages | removed: ${Object.entries(tally).map(([k, v]) => `${k} ${v}`).join(', ') || 'nothing'} | left alone: ${report.skipped.length} local posts`)
if (report.problems.length) { console.log(`✗ ${report.problems.length} page(s) NOT changed:`); for (const p of report.problems.slice(0, 30)) console.log(`   - ${p}`) }
if (!DRY) writeFileSync(join(ROOT, 'reports', 'cta_flip_pages.json'), JSON.stringify(report, null, 1))
process.exit(report.problems.length ? 1 : 0)
