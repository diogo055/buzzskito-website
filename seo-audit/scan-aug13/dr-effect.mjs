// Did the DR 0.5 -> 18 jump actually change what we rank for?
//
// DR is an Ahrefs metric. Google does not use it. Arguing about whether the
// number is "real" is unfalsifiable — but the CONSEQUENCE is measurable: if the
// site genuinely gained authority Google counts, positions should have improved
// broadly on queries that existed in both windows, and the improvement should be
// LARGER on competitive commercial terms than on easy long-tail ones (authority
// is what gates competitive terms; relevance already handles the tail).
//
// If positions are flat or the gain is uniform across difficulty, the DR move is
// an Ahrefs index artifact and the "we can target harder keywords now" strategy
// is not yet supported.
//
//   node dr-effect.mjs

import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const DIR = dirname(fileURLToPath(import.meta.url))
const d = JSON.parse(readFileSync(resolve(DIR, 'gsc_full_scan.json'), 'utf-8'))

const cur = new Map(d.queries.map((r) => [r.query, r]))
const prev = new Map(d.queries_prev.map((r) => [r.query, r]))

// Only queries present in BOTH windows with enough impressions to be stable.
const both = []
for (const [q, c] of cur) {
  const p = prev.get(q)
  if (!p) continue
  if (c.impressions < 30 || p.impressions < 30) continue
  both.push({ q, curPos: c.position, prevPos: p.position, delta: +(p.position - c.position).toFixed(2),
    curImpr: c.impressions, prevImpr: p.impressions, curClicks: c.clicks, prevClicks: p.clicks })
}

const med = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)] }
const sum = (a, k) => a.reduce((s, r) => s + r[k], 0)

console.log('='.repeat(78))
console.log(`POSITION MOVEMENT — ${both.length} queries present in both 28-day windows`)
console.log(`  previous: ${d.previous_window.start} to ${d.previous_window.end}`)
console.log(`  current:  ${d.current_window.start} to ${d.current_window.end}`)
console.log('='.repeat(78))

const improved = both.filter((r) => r.delta > 0.5)
const worse = both.filter((r) => r.delta < -0.5)
const flat = both.filter((r) => Math.abs(r.delta) <= 0.5)
console.log(`  improved  ${String(improved.length).padStart(4)}  (${(improved.length / both.length * 100).toFixed(0)}%)`)
console.log(`  flat      ${String(flat.length).padStart(4)}  (${(flat.length / both.length * 100).toFixed(0)}%)`)
console.log(`  worse     ${String(worse.length).padStart(4)}  (${(worse.length / both.length * 100).toFixed(0)}%)`)
console.log(`  median position change: ${med(both.map((r) => r.delta)) > 0 ? '+' : ''}${med(both.map((r) => r.delta))} (positive = moved up)`)

// ── the real test: does the gain concentrate on COMPETITIVE terms? ──────────
// Proxy for competitiveness: commercial intent + head-term shape. Authority
// gates these; long-tail informational is won on relevance alone.
const COMMERCIAL = /\b(best|top|buy|price|cost|cheap|review|vs|near me|installer|service|company|for sale)\b/i
const isHead = (q) => q.split(/\s+/).length <= 3

const bucket = (name, rows) => {
  if (!rows.length) return
  console.log(`  ${name.padEnd(34)} n=${String(rows.length).padStart(4)}  median ${(med(rows.map((r) => r.delta)) > 0 ? '+' : '')}${med(rows.map((r) => r.delta))}   improved ${(rows.filter((r) => r.delta > 0.5).length / rows.length * 100).toFixed(0)}%`)
}

console.log('\nWHERE DID THE GAIN LAND?')
bucket('commercial + head (hardest)', both.filter((r) => COMMERCIAL.test(r.q) && isHead(r.q)))
bucket('commercial, longer', both.filter((r) => COMMERCIAL.test(r.q) && !isHead(r.q)))
bucket('informational head', both.filter((r) => !COMMERCIAL.test(r.q) && isHead(r.q)))
bucket('informational long-tail', both.filter((r) => !COMMERCIAL.test(r.q) && !isHead(r.q)))

console.log('\nBIGGEST POSITION GAINS (impressions >= 100)')
for (const r of both.filter((x) => x.curImpr >= 100).sort((a, b) => b.delta - a.delta).slice(0, 18))
  console.log(`  ${String(r.prevPos).padStart(6)} -> ${String(r.curPos).padStart(6)}  (${r.delta > 0 ? '+' : ''}${String(r.delta).padStart(6)})  ${String(r.curImpr).padStart(5)} impr  ${r.curClicks} clk   ${r.q}`)

console.log('\nBIGGEST LOSSES (impressions >= 100)')
for (const r of both.filter((x) => x.curImpr >= 100).sort((a, b) => a.delta - b.delta).slice(0, 8))
  console.log(`  ${String(r.prevPos).padStart(6)} -> ${String(r.curPos).padStart(6)}  (${String(r.delta).padStart(6)})  ${String(r.curImpr).padStart(5)} impr   ${r.q}`)

// ── what is NEWLY winnable: page 2 with real volume ─────────────────────────
console.log('\n' + '='.repeat(78))
console.log('STRIKING DISTANCE — page 2/3 with volume, ranked by opportunity')
console.log('='.repeat(78))
const strike = d.queries
  .filter((r) => r.position > 10.5 && r.position <= 30 && r.impressions >= 200)
  .sort((a, b) => b.impressions - a.impressions).slice(0, 25)
for (const r of strike) {
  const p = prev.get(r.query)
  const mv = p ? ` (was ${p.position})` : ' (new)'
  console.log(`  ${String(r.impressions).padStart(6)} impr  ${String(r.clicks).padStart(3)} clk  pos ${String(r.position).padStart(6)}${mv.padEnd(14)} ${r.query}`)
}
