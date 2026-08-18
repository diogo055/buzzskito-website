// What kind of page actually earns a click in August 2026?
//
// Impressions +120% month over month while CTR fell 1.43% -> 0.95%. That is the
// signature of ranking for more, broader, lower-intent queries — the kind an AI
// Overview answers in the SERP. So the question is not "how do we get more
// impressions" (that is solved) but "which content types still convert an
// impression into a click, and which are just inflating the denominator".
//
//   node pattern.mjs

import { readFileSync } from 'fs'

const d = JSON.parse(readFileSync('gsc_full_scan.json', 'utf-8'))
const p = (u) => u.replace('https://buzzskito.ca', '').replace('http://buzzskito.ca', '[http]') || '/'
const cur = d.pages.filter((r) => r.page.includes('buzzskito.ca'))
const prev = new Map(d.pages_prev.map((r) => [p(r.page), r]))

const sum = (a, k) => a.reduce((s, r) => s + r[k], 0)
const pct = (a, b) => b ? ((a / b) * 100).toFixed(2) + '%' : '—'

const TOT_I = sum(cur, 'impressions'), TOT_C = sum(cur, 'clicks')
const PI = sum(d.pages_prev, 'impressions'), PC = sum(d.pages_prev, 'clicks')

console.log('='.repeat(88))
console.log('MONTH OVER MONTH')
console.log('='.repeat(88))
console.log(`  impressions  ${PI.toLocaleString().padStart(9)} -> ${TOT_I.toLocaleString().padStart(9)}   ${((TOT_I/PI-1)*100).toFixed(0)}%`)
console.log(`  clicks       ${PC.toLocaleString().padStart(9)} -> ${TOT_C.toLocaleString().padStart(9)}   ${((TOT_C/PC-1)*100).toFixed(0)}%`)
console.log(`  CTR          ${pct(PC,PI).padStart(9)} -> ${pct(TOT_C,TOT_I).padStart(9)}`)

// ── classify by what the page IS ──────────────────────────────────────────
const CITIES = 'toronto|mississauga|brampton|oakville|burlington|hamilton|vaughan|richmond-hill|markham|etobicoke|scarborough|north-york|caledon|milton|georgetown|halton-hills|king-city|woodbridge|thornhill|kleinburg|ancaster|dundas|waterdown|stoney-creek|ajax|pickering|york-region|gta'
const type = (path) => {
  if (/-mosquito-control$|-tick-spray$|-mosquito-spray$|^\/$|^\/mosquito-control|^\/tick-control|^\/best-mosquito-control|^\/pest-control-/.test(path)) return 'local service page'
  if (new RegExp(`(${CITIES})`, 'i').test(path) && /20\d\d|hot-spot|season|tracker|statistics|cases|pressure/.test(path)) return 'LOCAL + dated'
  if (new RegExp(`(${CITIES})`, 'i').test(path)) return 'local content'
  if (/^\/blog\/(best-|.*-review|.*-vs-)/.test(path)) return 'product review / best-X'
  if (/tracker|statistics|-20\d\d|calculator|map|report/.test(path)) return 'data / dated asset'
  return 'generic informational'
}

const groups = {}
for (const r of cur) {
  const t = type(p(r.page))
  ;(groups[t] = groups[t] || []).push(r)
}

console.log('\n' + '='.repeat(88))
console.log('CTR BY CONTENT TYPE — this is the whole story')
console.log('='.repeat(88))
console.log('  type                       pages   impressions    clicks     CTR     clicks/page')
const rows = Object.entries(groups).sort((a, b) => sum(b[1],'clicks')/sum(b[1],'impressions') - sum(a[1],'clicks')/sum(a[1],'impressions'))
for (const [t, a] of rows) {
  const i = sum(a, 'impressions'), c = sum(a, 'clicks')
  console.log(`  ${t.padEnd(26)} ${String(a.length).padStart(4)}  ${String(i).padStart(11)}  ${String(c).padStart(8)}  ${pct(c,i).padStart(7)}   ${(c/a.length).toFixed(1).padStart(6)}`)
}

// ── the impression sinks: big traffic, no clicks ──────────────────────────
console.log('\n' + '='.repeat(88))
console.log('IMPRESSION SINKS — ranking well, nobody clicks (AI Overview food)')
console.log('='.repeat(88))
const sinks = cur.filter((r) => r.impressions >= 6000 && r.position <= 10 && (r.clicks / r.impressions) < 0.006)
  .sort((a, b) => b.impressions - a.impressions)
console.log('    impr   clk    CTR    pos   page')
for (const r of sinks) console.log(`  ${String(r.impressions).padStart(6)} ${String(r.clicks).padStart(5)} ${pct(r.clicks,r.impressions).padStart(6)} ${String(r.position).padStart(6)}   ${p(r.page)}`)
console.log(`\n  ${sinks.length} pages · ${sum(sinks,'impressions').toLocaleString()} impressions (${pct(sum(sinks,'impressions'),TOT_I)} of site) · only ${sum(sinks,'clicks')} clicks`)

// ── the converters: what a good page looks like here ──────────────────────
console.log('\n' + '='.repeat(88))
console.log('CONVERTERS — 3%+ CTR. What do these have in common?')
console.log('='.repeat(88))
const good = cur.filter((r) => r.impressions >= 150 && (r.clicks / r.impressions) >= 0.03)
  .sort((a, b) => (b.clicks/b.impressions) - (a.clicks/a.impressions))
console.log('    impr   clk    CTR    pos   page')
for (const r of good.slice(0, 22)) console.log(`  ${String(r.impressions).padStart(6)} ${String(r.clicks).padStart(5)} ${pct(r.clicks,r.impressions).padStart(6)} ${String(r.position).padStart(6)}   ${p(r.page)}`)

// ── biggest movers ────────────────────────────────────────────────────────
console.log('\n' + '='.repeat(88))
console.log('BIGGEST CLICK GAINS vs previous 28 days')
console.log('='.repeat(88))
const moved = cur.map((r) => { const q = prev.get(p(r.page)); return { ...r, path: p(r.page), was: q ? q.clicks : 0, newPage: !q } })
  .sort((a, b) => (b.clicks - b.was) - (a.clicks - a.was))
for (const r of moved.slice(0, 12))
  console.log(`  ${String(r.was).padStart(5)} -> ${String(r.clicks).padStart(5)}  (+${String(r.clicks-r.was).padStart(4)})  ${r.newPage?'NEW ':'    '} ${r.path}`)
console.log('\nBIGGEST LOSSES')
for (const r of moved.slice(-6).reverse())
  console.log(`  ${String(r.was).padStart(5)} -> ${String(r.clicks).padStart(5)}  (${String(r.clicks-r.was).padStart(5)})   ${r.path}`)
