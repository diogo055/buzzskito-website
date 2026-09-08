// Does the brief's Finding 1 survive a page-level control?
//
// Finding 1 says query TYPE drives CTR at fixed position, and that question-format queries are
// unrecoverable. The pooled comparison reproduces that. But "commercial" and "question" queries
// are not randomly distributed across pages — they cluster on different pages, and pages differ
// enormously in how well they convert. So the pooled gap could be a PAGE effect wearing a
// query-shape costume.
//
// The control: restrict to pages that carry BOTH query types, and compare within each page.
// If the gap survives, Finding 1 holds and Tier 4 is correctly parked. If it collapses, Tier 4
// may be holding recoverable impressions.
import fs from 'node:fs'

const TOOL = 'C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/tool-results/'
let t = fs.readFileSync(TOOL + 'mcp-gscServer-get_advanced_search_analytics-1788894476637.txt', 'utf8')
try { const j = JSON.parse(t); if (j && typeof j.result === 'string') t = j.result } catch {}

const BRANDS = /thermacell|dynatrap|advion|ortho|raid|wilson|doktor doom|summit|sawyer|natrapel|wondercide|victor|tomcat|terro|combat|zevo|katchy|flowtron|dupray|vapamore|zappbug|packtite|crossfire|cimexa|ecoraider|premo|harris|orbit|rescue|hot shot|spectracide|black flag/i
const COMMERCIAL = /\b(best|buy|price|prices|vs|review|reviews|where to|cheapest|deal)\b|canadian tire|home depot|amazon|walmart|costco|rona/i
const QUESTION = /^(how|what|why|when|where|do|does|can|are|is)\b/i
const type = (q) => (BRANDS.test(q) || COMMERCIAL.test(q)) ? 'commercial' : (QUESTION.test(q) ? 'question' : 'other')

const rows = []
for (const line of t.split('\n')) {
  const m = line.split('|').map(s => s.trim())
  if (m.length !== 6) continue
  const [page, query, clicks, impressions, , position] = m
  if (query === 'Query' || isNaN(+clicks)) continue
  rows.push({ page, query, c: +clicks, i: +impressions, pos: parseFloat(position), t: type(query) })
}

const agg = (rs) => { const i = rs.reduce((a, r) => a + r.i, 0), c = rs.reduce((a, r) => a + r.c, 0); return { i, c, ctr: i ? 100 * c / i : 0, n: rs.length } }
const show = (label, rs) => { const a = agg(rs); console.log('  ' + label.padEnd(14) + String(a.n).padStart(7) + ' pairs' + a.i.toLocaleString().padStart(12) + 'i' + String(a.c).padStart(7) + 'c' + a.ctr.toFixed(2).padStart(8) + '%') }

console.log(`Parsed ${rows.length.toLocaleString()} page+query pairs.\n`)

// ---------- 1. POOLED, in the brief's own position bands
console.log('1. POOLED — reproducing the brief\'s Finding 1 table')
for (const [lo, hi] of [[4, 7], [7, 10]]) {
  const band = rows.filter(r => r.pos >= lo && r.pos < hi)
  console.log(`\n  position ${lo}-${hi}`)
  for (const k of ['commercial', 'other', 'question']) show(k, band.filter(r => r.t === k))
}

// ---------- 2. WITHIN-PAGE control
console.log('\n\n2. WITHIN-PAGE CONTROL — only pages carrying BOTH types, compared inside each page')
const byPage = new Map()
for (const r of rows) { if (!byPage.has(r.page)) byPage.set(r.page, []); byPage.get(r.page).push(r) }

const MIN = 150 // impressions of each type on the page, so a page can actually be compared
const both = []
for (const [page, rs] of byPage) {
  const com = rs.filter(r => r.t === 'commercial'), qn = rs.filter(r => r.t === 'question')
  const ci = com.reduce((a, r) => a + r.i, 0), qi = qn.reduce((a, r) => a + r.i, 0)
  if (ci >= MIN && qi >= MIN) both.push({ page, com, qn, ci, qi })
}
console.log(`\n  ${both.length} pages carry at least ${MIN} impressions of BOTH commercial and question queries.`)
const allCom = both.flatMap(b => b.com), allQ = both.flatMap(b => b.qn)
console.log()
show('commercial', allCom)
show('question', allQ)
const pooledRatio = (agg(rows.filter(r => r.t === 'commercial')).ctr) / (agg(rows.filter(r => r.t === 'question')).ctr)
const withinRatio = agg(allCom).ctr / agg(allQ).ctr
console.log(`\n  pooled ratio  commercial/question: ${pooledRatio.toFixed(2)}x`)
console.log(`  within-page ratio                 : ${withinRatio.toFixed(2)}x`)

// how many pages does question actually WIN on?
let qWins = 0
for (const b of both) { if (agg(b.qn).ctr > agg(b.com).ctr) qWins++ }
console.log(`  pages where QUESTION queries out-click commercial ones: ${qWins} of ${both.length}`)

// ---------- 3. position-matched within-page
console.log('\n\n3. WITHIN-PAGE **AND** POSITION-MATCHED (both types in the same band, same page)')
for (const [lo, hi] of [[4, 7], [7, 10]]) {
  const c = [], q = []
  for (const b of both) {
    const cb = b.com.filter(r => r.pos >= lo && r.pos < hi), qb = b.qn.filter(r => r.pos >= lo && r.pos < hi)
    if (!cb.length || !qb.length) continue
    c.push(...cb); q.push(...qb)
  }
  console.log(`\n  position ${lo}-${hi}`)
  show('commercial', c); show('question', q)
  if (agg(q).ctr) console.log(`  ratio: ${(agg(c).ctr / agg(q).ctr).toFixed(2)}x`)
}
