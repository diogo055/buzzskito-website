// Semrush says Authority Score 21. Ahrefs says DR 2.2. Which is right?
//
// Neither, in the sense that matters. AS and DR are different vendors' models on
// different link indexes and different scales — Semrush's AS folds ORGANIC
// TRAFFIC into the score, Ahrefs' DR is purely link-graph. Note the two vendors
// cannot even agree on the input: Semrush finds 44 referring domains / 77
// backlinks, Ahrefs finds 160 / 188. A higher score on fewer links is a scale
// difference, not more authority.
//
// Google uses neither. So the only question worth asking is behavioural: CAN
// this site rank for terms that require authority? That is testable here.
//
//   node authority-test.mjs

import { readFileSync } from 'fs'
const d = JSON.parse(readFileSync('gsc_full_scan.json', 'utf-8'))

const cur = new Map(d.queries.map((r) => [r.query, r]))
const prev = new Map(d.queries_prev.map((r) => [r.query, r]))

// Queries present in both windows with enough volume to be stable.
const both = []
for (const [q, c] of cur) {
  const p = prev.get(q)
  if (!p || c.impressions < 30 || p.impressions < 30) continue
  both.push({ q, now: c.position, was: p.position, delta: +(p.position - c.position).toFixed(2), impr: c.impressions, clicks: c.clicks })
}

const med = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)] }

// Authority gates COMPETITIVE COMMERCIAL terms. Relevance alone wins long-tail.
// If authority genuinely rose, the gain should concentrate on the hard terms.
const COMMERCIAL = /\b(best|top|buy|price|cost|cheap|company|companies|service|near me|hire|professional|vs)\b/i
const head = (q) => q.split(/\s+/).length <= 3

const bucket = (name, rows) => {
  if (rows.length < 5) return console.log(`  ${name.padEnd(32)} n=${rows.length} — too few to judge`)
  const up = rows.filter((r) => r.delta > 0.5).length
  console.log(`  ${name.padEnd(32)} n=${String(rows.length).padStart(4)}   median ${(med(rows.map((r) => r.delta)) > 0 ? '+' : '')}${med(rows.map((r) => r.delta))}   improved ${(up / rows.length * 100).toFixed(0)}%`)
}

console.log('='.repeat(80))
console.log(`DOES THIS SITE RANK LIKE ONE WITH AUTHORITY?  ${both.length} queries in both windows`)
console.log('='.repeat(80))
console.log('  If authority rose, the HARD buckets should gain most. That is the test.\n')
bucket('commercial + head (hardest)', both.filter((r) => COMMERCIAL.test(r.q) && head(r.q)))
bucket('commercial, longer', both.filter((r) => COMMERCIAL.test(r.q) && !head(r.q)))
bucket('informational head', both.filter((r) => !COMMERCIAL.test(r.q) && head(r.q)))
bucket('informational long-tail (easiest)', both.filter((r) => !COMMERCIAL.test(r.q) && !head(r.q)))

// How deep can it actually get on commercial terms?
console.log('\n' + '='.repeat(80))
console.log('CEILING CHECK — best positions achieved, by query type')
console.log('='.repeat(80))
for (const [name, filt] of [
  ['commercial + head', (r) => COMMERCIAL.test(r.query) && r.query.split(/\s+/).length <= 3],
  ['informational long-tail', (r) => !COMMERCIAL.test(r.query) && r.query.split(/\s+/).length > 3],
]) {
  const rows = d.queries.filter((r) => r.impressions >= 50 && filt(r))
  const top3 = rows.filter((r) => r.position <= 3).length
  const top10 = rows.filter((r) => r.position <= 10).length
  console.log(`  ${name.padEnd(26)} ${String(rows.length).padStart(5)} queries · top-3 ${String(top3).padStart(4)} (${(top3/rows.length*100).toFixed(1)}%) · top-10 ${String(top10).padStart(4)} (${(top10/rows.length*100).toFixed(1)}%)`)
}

console.log('\nHARD COMMERCIAL TERMS — where do we actually sit?')
const hard = d.queries.filter((r) => COMMERCIAL.test(r.query) && r.query.split(/\s+/).length <= 3 && r.impressions >= 100)
  .sort((a, b) => b.impressions - a.impressions).slice(0, 14)
for (const r of hard) {
  const p = prev.get(r.query)
  console.log(`  ${String(r.impressions).padStart(5)} impr · ${String(r.clicks).padStart(3)} clk · pos ${String(r.position).padStart(6)}${p ? `  (was ${p.position})` : '  (new)'}   ${r.query}`)
}
