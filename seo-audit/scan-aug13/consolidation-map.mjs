// Which page wins each (city x service) intent, and what should redirect where?
//
// Three families cover the same intent for the same city:
//   /{city}-mosquito-control              86 routes (cities + neighbourhoods)
//   /best-mosquito-control-companies-{city}  13 routes
//   /pest-control-{city}                  20 routes
// Google is being offered all three and settling on none. Pick ONE per city on
// evidence: whichever already has the best position and the most impressions.
//
// A page is only retired if it is BOTH clearly beaten AND earns almost nothing.
// Anything with real clicks stays, regardless of what the family logic says.
//
//   node consolidation-map.mjs

import { readFileSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const DIR = dirname(fileURLToPath(import.meta.url))
const d = JSON.parse(readFileSync(resolve(DIR, 'gsc_full_scan.json'), 'utf-8'))
const p = (u) => u.replace('https://buzzskito.ca', '') || '/'

// GSC row per path (28d). Missing = never surfaced at all.
const stat = new Map()
for (const r of d.pages) if (r.page.startsWith('https://buzzskito.ca')) stat.set(p(r.page), r)
const get = (path) => stat.get(path) || { clicks: 0, impressions: 0, position: null, ctr: 0 }

// The 19 real service cities. Everything else ending -mosquito-control is a
// neighbourhood page, which is a legitimate child, not a duplicate.
const CITIES = [
  'mississauga', 'toronto', 'brampton', 'oakville', 'burlington', 'hamilton',
  'vaughan', 'richmond-hill', 'markham', 'etobicoke', 'scarborough', 'north-york',
  'caledon', 'milton', 'georgetown', 'halton-hills', 'king-city', 'woodbridge',
  'thornhill',
]

const fam = (city) => [
  { path: `/${city}-mosquito-control`,                     family: 'city-mosquito' },
  { path: `/best-mosquito-control-companies-${city}`,      family: 'best-companies' },
  { path: `/pest-control-${city}`,                         family: 'pest-control' },
]

console.log('='.repeat(96))
console.log('CITY-BY-CITY — who actually earns the intent')
console.log('='.repeat(96))
console.log('  city             family            impr   clk     pos   verdict')

const plan = []
let retire = 0, keep = 0

for (const city of CITIES) {
  const rows = fam(city).map((f) => ({ ...f, ...get(f.path) })).filter((r) => stat.has(r.path))
  if (rows.length < 2) {                       // nothing to consolidate
    for (const r of rows) keep++
    continue
  }
  // Winner: most impressions wins, but a page with clicks always beats one without.
  const scored = [...rows].sort((a, b) => (b.clicks - a.clicks) || (b.impressions - a.impressions))
  const winner = scored[0]

  console.log(`\n  ${city}`)
  for (const r of rows) {
    const isWin = r.path === winner.path
    // Protect anything earning real traffic even if it lost the family contest.
    const protectedRow = r.clicks >= 3 || r.impressions >= 400
    const verdict = isWin ? 'KEEP (canonical)' : protectedRow ? 'KEEP (earns)' : 'RETIRE -> ' + winner.path
    if (!isWin && !protectedRow) { retire++; plan.push({ from: r.path, to: winner.path, city, why: `${r.impressions} impr / ${r.clicks} clk, beaten by ${winner.path}` }) }
    else keep++
    console.log(`    ${r.family.padEnd(16)} ${String(r.impressions).padStart(6)} ${String(r.clicks).padStart(5)} ${String(r.position ?? '-').padStart(7)}   ${verdict}`)
  }
}

// ── the standalone service pages ───────────────────────────────────────────
console.log('\n' + '='.repeat(96))
console.log('STANDALONE SERVICE PAGES — duplicate intents')
console.log('='.repeat(96))
const STANDALONE = [
  '/mosquito-control', '/mosquito-control-near-me', '/mosquito-control-ontario',
  '/mosquito-control-cost', '/mosquito-control-pricing', '/mosquito-control-diy-vs-professional',
  '/tick-control', '/tick-control-near-me', '/tick-control-ontario',
  '/pest-control-gta', '/pest-control-cost-canada', '/best-mosquito-control-companies-gta',
]
console.log('  path                                      impr   clk     pos')
for (const s of STANDALONE) {
  const r = get(s)
  console.log(`  ${s.padEnd(40)} ${String(r.impressions).padStart(6)} ${String(r.clicks).padStart(5)} ${String(r.position ?? '-').padStart(7)}${stat.has(s) ? '' : '   (never surfaced)'}`)
}

console.log('\n' + '='.repeat(96))
console.log(`PLAN: retire ${retire} pages, keep ${keep}.`)
console.log('='.repeat(96))
for (const r of plan) console.log(`  301  ${r.from.padEnd(46)} -> ${r.to.padEnd(34)}  (${r.why})`)

writeFileSync(resolve(DIR, 'consolidation-plan.json'), JSON.stringify({ plan, generated_from: d.current_window }, null, 2))
console.log(`\nwrote consolidation-plan.json (${plan.length} redirects)`)
