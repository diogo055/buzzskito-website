// Companion to scripts/us-pages-link-visual.mjs for the two hand-written (TSX) posts that should
// point at a visual guide. Each edit inserts ONE new <p> line in front of a named heading and
// changes nothing else; it is skipped until the target guide is written and fact-checked.
//
//   node scripts/us-pages-link-visual-tsx.mjs [--dry]
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'
import { createHash } from 'crypto'

const ROOT = process.cwd()
const DRY = process.argv.includes('--dry')
const CR = String.fromCharCode(13)
const LF = String.fromCharCode(10)
const sha = (text) => createHash('sha256').update(text.split(CR + LF).join(LF)).digest('hex')
const checked = (path) => {
  const id = path.split('/').pop()
  const g = join(ROOT, 'content', 'guides', `${id}.json`), l = join(ROOT, 'data', 'us-pages', 'checked', `${id}.json`)
  if (!existsSync(g) || !existsSync(l)) return false
  try { const r = JSON.parse(readFileSync(l, 'utf8')); return r.verdict !== 'needs-rewrite' && r.sha === sha(readFileSync(g, 'utf8')) } catch { return false }
}

const EDITS = [
  {
    file: 'app/blog/bugs-that-look-like-ticks/page.tsx',
    target: '/learn/tick-identification-chart',
    before: '<h2>How Big Is a Tick Compared to Each Look-Alike?</h2>',
    add: '<p>For the three common species on one page, the <Link href="/learn/tick-identification-chart" className="text-brand-700 underline">tick identification chart</Link> sets the deer tick, the dog tick and the lone star tick side by side, with a card you can print for tick checks.</p>',
  },
  {
    file: 'app/blog/how-to-get-rid-of-fungus-gnats-houseplants/page.tsx',
    target: '/learn/how-to-get-rid-of-fungus-gnats',
    before: '<h2>When Treatment Isn&rsquo;t Enough: The Repotting Trigger</h2>',
    add: '<p>For the same plan as a one-page routine, with a watering card you can print, see <Link href="/learn/how-to-get-rid-of-fungus-gnats" className="text-brand-700 underline">how to get rid of fungus gnats, step by step</Link>.</p>',
  },
]

const AFF = /<(BuyLink|AwardRow|AwardCard|TopPick|StickyBuyBar|AmazonLink|RelatedProducts)[\s/>]|asin=|search=|amazon\./
let added = 0, already = 0, waiting = 0
const problems = []
for (const e of EDITS) {
  if (!checked(e.target)) { waiting++; continue }
  const file = join(ROOT, e.file)
  const raw = readFileSync(file, 'utf8')
  if (raw.includes(e.add)) { already++; continue }
  const eol = raw.includes(CR + LF) ? CR + LF : LF
  const lines = raw.split(eol)
  const hits = lines.map((l, i) => (l.trim() === e.before ? i : -1)).filter((i) => i >= 0)
  if (hits.length !== 1) { problems.push(`${e.file}: heading found ${hits.length} times`); continue }
  let ins = hits[0]
  while (ins > 0 && lines[ins - 1].trim() === '') ins--
  const indent = lines[hits[0]].slice(0, lines[hits[0]].length - lines[hits[0]].trimStart().length)
  const next = [...lines]
  next.splice(ins, 0, indent + e.add)
  // proof: nothing removed, one line added, affiliate lines untouched
  const affB = lines.filter((l) => AFF.test(l)), affA = next.filter((l) => AFF.test(l))
  if (next.length !== lines.length + 1 || affB.join(LF) !== affA.join(LF)) { problems.push(`${e.file}: the edit is not a single added line`); continue }
  if (!DRY) writeFileSync(file, next.join(eol))
  added++
}
console.log(`${DRY ? 'would add' : 'added'} ${added} link line(s) | already there: ${already} | waiting for a target guide: ${waiting}`)
if (problems.length) { console.log(`✗ ${problems.length} problem(s):`); for (const p of problems) console.log(`   - ${p}`); process.exit(1) }
