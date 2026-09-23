// Phase 5B — apply reports/title_rewrites.csv to page sources.
//
// Matches on the STRING (title_before / description_before), never on a line number,
// because other passes shift lines. For each page:
//   - the title string must occur exactly once on a metadata line (title: / META_TITLE / SEO_TITLE)
//   - the description string likewise (description: / META_DESCRIPTION / SEO_DESCRIPTION)
//   - H1 constants (TITLE = ...) are deliberately NOT touched — meta only
// Any row that cannot be matched unambiguously is reported and left alone.
//
//   node scripts/apply-title-rewrites.mjs [--dry] [--skip-title slug,slug] [--only slug,slug]
import { readFileSync, writeFileSync, existsSync } from 'fs'

const args = process.argv.slice(2)
const dry = args.includes('--dry')
const opt = k => { const i = args.indexOf(k); return i >= 0 && args[i + 1] ? args[i + 1].split(',').map(s => s.trim()).filter(Boolean) : [] }
const skipTitle = new Set(opt('--skip-title')), only = new Set(opt('--only'))

// minimal RFC-4180 parser (quoted fields with commas and "" escapes)
function parseCsv(text) {
  const rows = [], row = [], re = /("([^"]|"")*"|[^,\r\n]*)(,|\r?\n|$)/g
  let m, cur = []
  while ((m = re.exec(text)) && m[0] !== '') {
    let v = m[1]; if (v.startsWith('"')) v = v.slice(1, -1).replace(/""/g, '"')
    cur.push(v)
    if (m[3] !== ',') { rows.push(cur); cur = [] }
  }
  const h = rows[0]; return rows.slice(1).filter(r => r.length === h.length).map(r => Object.fromEntries(h.map((k, i) => [k, r[i]])))
}
const csv = readFileSync('reports/title_rewrites.csv', 'utf8').replace(/^\uFEFF/, '')
const rows = parseCsv(csv)

const META_T = /\btitle\s*:|META_TITLE\s*=|SEO_TITLE\s*=/, META_D = /\bdescription\s*:|META_DESCRIPTION\s*=|SEO_DESCRIPTION\s*=/

function swap(src, before, after, ctx, what) {
  if (!before || !after || before === after) return { src, note: `${what}: unchanged` }
  const lines = src.split('\n')
  const hits = lines.map((l, i) => l.includes(before) ? i : -1).filter(i => i >= 0)
  const meta = hits.filter(i => ctx.test(lines[i]))
  const pick = meta.length === 1 ? meta[0] : (hits.length === 1 ? hits[0] : -1)
  if (pick < 0) return { src, note: `${what}: ${hits.length ? 'AMBIGUOUS (' + hits.length + ' hits, ' + meta.length + ' on meta lines)' : 'NOT FOUND'}`, fail: true }
  lines[pick] = lines[pick].replace(before, after)
  return { src: lines.join('\n'), note: `${what}: line ${pick + 1}` }
}

let applied = 0, failed = 0
for (const r of rows) {
  const slug = r.page_path.replace(/^\/blog\//, '')
  if (only.size && !only.has(slug)) continue
  const file = `app/blog/${slug}/page.tsx`
  if (!existsSync(file)) { console.log(`✗ ${slug}: file missing`); failed++; continue }
  let src = readFileSync(file, 'utf8'), notes = []
  if (skipTitle.has(slug)) notes.push('title: SKIPPED by flag')
  else { const t = swap(src, r.title_before, r.title_after, META_T, 'title'); src = t.src; notes.push(t.note); if (t.fail) failed++ }
  const d = swap(src, r.description_before, r.description_after, META_D, 'description'); src = d.src; notes.push(d.note); if (d.fail) failed++
  const changed = src !== readFileSync(file, 'utf8')
  if (changed && !dry) writeFileSync(file, src)
  if (changed) applied++
  console.log(`${changed ? (dry ? '~' : '✓') : '·'} ${slug.padEnd(42)} ${notes.join(' | ')}`)
}
console.log(`\n${dry ? 'would change' : 'changed'} ${applied} file(s), ${failed} unmatched field(s)`)
process.exit(failed ? 1 : 0)
