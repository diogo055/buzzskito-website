// What are the 40 new pages actually worth?
//
// Built from measured inputs only, with every assumption named. The honest
// answer depends far more on the assumptions than on the arithmetic, so they
// are stated rather than buried.
//
//   node forecast-40.mjs

import { readFileSync, readdirSync, existsSync } from 'fs'
import { execSync } from 'child_process'

// ── MEASURED (Amazon.ca tracking-ID report, 30d to 2026-08-22) ─────────────
const EPC = { dehumidifier: 0.772, bedbug: 0.501, wildlife: 0.465, steamer: 0.460,
              mosquito: 0.270, general: 0.205, rodent: 0.122 }

// Clicks per page achieved by EXISTING mature pages in each cluster (GSC 28d).
const MATURE_CPP = { dehumidifier: 15.0, wildlife: 14.8, steamer: 11.0,
                     bedbug: 7.6, mosquito: 21.6, general: 12.0, rodent: 4.6 }

// ── ASSUMPTIONS — these drive the answer, so argue with these, not the maths ──
//
// A1. NEW PAGES UNDER-PERFORM MATURE ONES IN THE SAME CLUSTER.
//     The existing pages took the best queries first; page 4 in a cluster
//     targets thinner demand than page 1 did. Also, from this site's own last
//     wave: 6 pages held 43% of new-page clicks and 48% earned under 3 clicks.
//     Discount to 55% of the cluster's mature clicks-per-page.
const NEW_PAGE_DISCOUNT = 0.55
//
// A2. RANKING RAMP. Nothing earns much in month 1. Share of mature traffic by
//     month after publication, for a DR 2.2 site with fast indexation.
const RAMP = [0.05, 0.15, 0.35, 0.55, 0.75, 0.90, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
//
// A3. SEASONALITY. Winter-peaked pages are published in August — their demand
//     arrives as they mature, which is lucky rather than clever. Spring-peaked
//     ones (gazebos, traps) sit near-dormant until March.
const SEASON_INDEX = { // month offset from Sep 2026 -> multiplier
  'winter-peak':  [0.6, 1.0, 1.3, 1.4, 1.4, 1.2, 0.9, 0.7, 0.6, 0.5, 0.5, 0.55],
  'autumn-peak':  [1.3, 1.4, 1.2, 0.8, 0.6, 0.6, 0.8, 1.0, 0.9, 0.7, 0.6, 0.9],
  'year-round':   [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
  'spring-peak':  [0.5, 0.4, 0.3, 0.3, 0.4, 0.8, 1.4, 1.7, 1.6, 1.3, 1.0, 0.7],
  'summer-peak':  [0.7, 0.4, 0.3, 0.3, 0.3, 0.5, 1.0, 1.5, 1.8, 1.7, 1.3, 0.9],
}

// ── The 40 pages, classified by slug ──────────────────────────────────────
const changed = execSync('git show --stat --name-only HEAD', { encoding: 'utf-8' })
  .split('\n').filter((l) => /^app\/blog\/.+\/page\.tsx$/.test(l.trim()))
  .map((l) => l.trim().replace('app/blog/', '').replace('/page.tsx', ''))
const slugs = [...new Set(changed)]

const classify = (s) => {
  if (/dehumidifier|vapour-barrier|sump-pump|damp/.test(s)) return ['dehumidifier', /sump/.test(s) ? 'winter-peak' : 'winter-peak']
  if (/steam|dupray|upholstery/.test(s)) return ['steamer', 'year-round']
  if (/bed-bug|bedbug/.test(s)) return ['bedbug', 'year-round']
  if (/raccoon|squirrel|deer|skunk|wildlife|compost|mouse-proof|garage-door/.test(s)) return ['wildlife', 'autumn-peak']
  if (/gazebo|porch|pergola|screen/.test(s)) return ['mosquito', 'spring-peak']
  if (/biogents|trap-running|outdoor-fan|fire-pit|pond|rain-barrel|gutter|standing-water|green-pool/.test(s)) return ['mosquito', 'summer-peak']
  if (/patio-heater|fire-table|leaf-blower|brush-cutter/.test(s)) return ['general', 'autumn-peak']
  return ['general', 'year-round']
}

const pages = slugs.map((s) => { const [c, season] = classify(s); return { s, c, season } })

const byCluster = {}
for (const p of pages) byCluster[p.c] = (byCluster[p.c] || 0) + 1

console.log('='.repeat(84))
console.log(`THE 40 PAGES — ${pages.length} classified`)
console.log('='.repeat(84))
for (const [c, n] of Object.entries(byCluster).sort((a, b) => b[1] - a[1]))
  console.log(`  ${c.padEnd(14)} ${String(n).padStart(2)} pages   EPC $${EPC[c].toFixed(3)}   mature ${MATURE_CPP[c]} clicks/page`)

// ── Month-by-month ────────────────────────────────────────────────────────
const MONTHS = ['Sep 26','Oct','Nov','Dec','Jan 27','Feb','Mar','Apr','May','Jun','Jul','Aug 27']
console.log('\n' + '='.repeat(84))
console.log('MONTH BY MONTH — expected incremental affiliate earnings')
console.log('='.repeat(84))
console.log('  month     clicks    earnings    note')
let yearTotal = 0
const monthly = []
for (let m = 0; m < 12; m++) {
  let clicks = 0, earn = 0
  for (const p of pages) {
    const base = MATURE_CPP[p.c] * NEW_PAGE_DISCOUNT
    const c = base * RAMP[m] * SEASON_INDEX[p.season][m]
    clicks += c
    earn += c * EPC[p.c]
  }
  monthly.push({ clicks, earn })
  yearTotal += earn
  const note = m === 0 ? 'just published' : m === 5 ? 'most pages mature' : m === 4 ? 'winter cluster peaks' : ''
  console.log(`  ${MONTHS[m].padEnd(9)} ${clicks.toFixed(0).padStart(6)}   $${earn.toFixed(0).padStart(7)}    ${note}`)
}
console.log(`\n  YEAR ONE TOTAL:  $${yearTotal.toFixed(0)}`)
const mature = monthly.slice(6).reduce((s, r) => s + r.earn, 0) / 6
console.log(`  Run-rate once mature (avg of months 7-12): $${mature.toFixed(0)}/month = $${(mature * 12).toFixed(0)}/yr`)

// ── Sensitivity — the assumptions ARE the forecast ─────────────────────────
console.log('\n' + '='.repeat(84))
console.log('SENSITIVITY — what if the assumptions are wrong?')
console.log('='.repeat(84))
const run = (disc, epcMult) => {
  let t = 0
  for (let m = 0; m < 12; m++)
    for (const p of pages)
      t += MATURE_CPP[p.c] * disc * RAMP[m] * SEASON_INDEX[p.season][m] * EPC[p.c] * epcMult
  return t
}
console.log('  scenario                                        year 1     mature/mo')
const scen = [
  ['PESSIMISTIC  new pages hit 30% of mature, EPC -25%', 0.30, 0.75],
  ['BASE         55% of mature, measured EPC', 0.55, 1.0],
  ['OPTIMISTIC   80% of mature, EPC +15% (bigger baskets)', 0.80, 1.15],
]
for (const [label, d, e] of scen) {
  const y = run(d, e)
  console.log(`  ${label.padEnd(48)} $${y.toFixed(0).padStart(6)}     $${(y / 12 * 1.35).toFixed(0).padStart(5)}`)
}

console.log('\n' + '='.repeat(84))
console.log('CONTEXT')
console.log('='.repeat(84))
console.log('  Current affiliate run-rate (measured, 30d to Aug 22): $649/month')
console.log(`  These 40 pages at maturity:                           $${mature.toFixed(0)}/month`)
console.log(`  That is a ${((mature / 649) * 100).toFixed(0)}% lift on the affiliate line.`)
console.log('\n  THE BIG CAVEAT: this is an AVERAGE across 40 pages. The real distribution')
console.log('  is a lottery — on this site\'s last wave, 6 pages took 43% of the clicks')
console.log('  and 48% earned under 3 clicks. Expect 5-8 of these 40 to carry it, and')
console.log('  roughly half to earn almost nothing. Which half is not knowable now.')
