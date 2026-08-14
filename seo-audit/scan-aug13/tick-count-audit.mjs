// CLAUDE.md rule #2: tick treatments are 5 sprays per season, never 2.
// A blog-lift agent reported finding "two treatments per season" across the site.
// Before changing anything, classify each hit — some sit in MOSQUITO context,
// where a different cadence may be correct and a blind find/replace would
// introduce a new factual error.
//
//   node tick-count-audit.mjs

import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

const RE = /two treatments per season|2 treatments per season|two tick treatments|two applications per season|twice per season|two sprays per season/i

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    if (['node_modules', '.next', '.claude', '.git'].includes(e)) continue
    const f = join(dir, e).replace(/\\/g, '/')
    if (statSync(f).isDirectory()) walk(f, out)
    else if (/\.tsx$/.test(e)) out.push(f)
  }
  return out
}

let n = 0
const buckets = { TICK: [], MOSQ: [], BOTH: [] }

for (const f of walk('app')) {
  readFileSync(f, 'utf-8').split('\n').forEach((line, i) => {
    if (!RE.test(line)) return
    n++
    const c = line.trim()
    const tick = /tick/i.test(c)
    const mosq = /mosquito/i.test(c)
    const tag = tick && !mosq ? 'TICK' : mosq && !tick ? 'MOSQ' : 'BOTH'
    const m = c.match(RE)
    const at = c.indexOf(m[0])
    buckets[tag].push({
      loc: `${f.replace('app/', '')}:${i + 1}`,
      phrase: m[0],
      ctx: c.slice(Math.max(0, at - 150), at + 170).replace(/\s+/g, ' '),
    })
  })
}

for (const [tag, rows] of Object.entries(buckets)) {
  if (!rows.length) continue
  console.log('\n' + '='.repeat(96))
  console.log(`${tag} context — ${rows.length} occurrence(s)`)
  console.log('='.repeat(96))
  for (const r of rows) {
    console.log(`\n  ${r.loc}   [${r.phrase}]`)
    console.log(`     ...${r.ctx}...`)
  }
}
console.log(`\n\nTOTAL: ${n}  (TICK ${buckets.TICK.length} / MOSQ ${buckets.MOSQ.length} / BOTH ${buckets.BOTH.length})`)
console.log('\nOnly TICK and tick-referring BOTH lines are wrong. MOSQ lines describe a')
console.log('different service and must be read individually before any edit.')
