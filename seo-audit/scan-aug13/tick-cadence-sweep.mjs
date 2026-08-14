// Exhaustive sweep for tick-treatment cadence claims.
//
// My first pass used a narrow phrase list and missed 7 files — a workflow auditor
// caught them. The misses phrased it as "both spring and fall applications" and
// "two-treatment program", neither of which contains "two treatments per season".
// This version casts a much wider net and reports EVERYTHING for human reading
// rather than trying to auto-classify, because the cost of a miss is a live page
// misrepresenting the product.
//
//   node tick-cadence-sweep.mjs

import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Any phrasing that could encode a treatment count or a two-visit schedule.
const PATTERNS = [
  /\btwo[- ](treatment|spray|application|visit)/i,
  /\b2[- ](treatment|spray|application|visit)/i,
  /\b(two|2)\s+(professional\s+)?(tick\s+)?(treatments|sprays|applications|visits)\b/i,
  /\btwice\s+(per|a|each)\s+(season|year)/i,
  /\bboth\s+spring\s+and\s+(fall|autumn|late[- ]summer)/i,
  /\bspring\s+and\s+fall\s+(treatment|spray|application|visit)/i,
  /\b(a\s+)?couple\s+of\s+(treatment|spray|application|visit)/i,
  /\bsecond\s+(and\s+final\s+)?(treatment|application)\b/i,
  /\bbi[- ]?annual/i,
  /\btwo\s+peak\s+windows?\b/i,
  /\bwhy\s+two\b/i,
  /\btwo[- ]visit\b/i,
]

// Known-good uses that are NOT about tick treatment cadence.
const BENIGN = [
  /gutter|eavestrough|downspout/i,       // "clean gutters twice per season" — correct
  /\bboth\s+mosquito\s+and\s+tick\b/i,   // two SERVICES, not two visits
  /found\s+(two|2)\s+ticks?\b/i,         // customer anecdotes
  /\btwo\s+(of|habitats|communities|conservation)/i,
]

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    if (['node_modules', '.next', '.claude', '.git'].includes(e)) continue
    const f = join(dir, e).replace(/\\/g, '/')
    if (statSync(f).isDirectory()) walk(f, out)
    else if (/\.tsx?$/.test(e)) out.push(f)
  }
  return out
}

const hits = []
for (const f of [...walk('app'), ...walk('lib'), ...walk('components')]) {
  const lines = readFileSync(f, 'utf-8').split('\n')
  lines.forEach((line, i) => {
    const p = PATTERNS.find((re) => re.test(line))
    if (!p) return
    if (BENIGN.some((re) => re.test(line))) return
    // Only care where the file or line concerns ticks.
    const tickFile = /tick/i.test(f)
    const tickLine = /tick|lyme|blacklegged|nymph/i.test(line)
    if (!tickFile && !tickLine) return
    const m = line.match(p)
    const at = line.indexOf(m[0])
    hits.push({ f: f.replace('app/', ''), n: i + 1, phrase: m[0],
      ctx: line.trim().slice(Math.max(0, at - 130), at + 160).replace(/\s+/g, ' ') })
  })
}

const byFile = new Map()
for (const h of hits) { if (!byFile.has(h.f)) byFile.set(h.f, []); byFile.get(h.f).push(h) }

console.log('='.repeat(96))
console.log(`TICK CADENCE SWEEP — ${hits.length} candidate passages in ${byFile.size} files`)
console.log('='.repeat(96))
for (const [f, rows] of [...byFile].sort()) {
  console.log(`\n${f}   (${rows.length})`)
  for (const r of rows) console.log(`   :${String(r.n).padEnd(4)} [${r.phrase}]  ...${r.ctx}...`)
}
console.log(`\n\n${byFile.size} files need review.`)
