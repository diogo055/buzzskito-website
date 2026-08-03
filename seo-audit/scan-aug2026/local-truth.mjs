// Corrected local/service analysis.
//
// The first pass used a country FILTER combined with a page dimension, which GSC
// silently under-reports (it returned 1,964 Canadian clicks against a true 5,086).
// Every conclusion built on it was wrong, including "Canada is only 30% of traffic".
// This uses the query x country DIMENSION instead, which reconciles exactly with
// the site total.
//
// Caveat that still applies: multi-dimension rows are anonymised harder, so absolute
// click counts here are a subset. RATIOS and POSITIONS are sound; totals are not.

import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const DIR = dirname(fileURLToPath(import.meta.url))
const { query_country } = JSON.parse(readFileSync(resolve(DIR, 'gsc_by_country.json'), 'utf-8'))
const ca = query_country.filter((r) => r.country === 'can')

const CITIES = ['mississauga','toronto','brampton','oakville','burlington','hamilton','vaughan','richmond hill','markham','etobicoke','scarborough','north york','caledon','milton','georgetown','halton hills','king city','woodbridge','thornhill','bolton','ajax','pickering','whitby','oshawa','aurora','newmarket','york region','gta']
const SVC = /\b(control|service|services|spray|spraying|exterminat|pest control|near me|company|companies|treatment|cost|price|quote)\b/i
const hasCity = (q) => CITIES.some((c) => q.includes(c))

const sum = (a, k) => a.reduce((s, r) => s + r[k], 0)
const pct = (a, b) => (b ? ((a / b) * 100).toFixed(2) : '0.00') + '%'

const cityService = ca.filter((r) => hasCity(r.query.toLowerCase()) && SVC.test(r.query.toLowerCase()))
const serviceOnly = ca.filter((r) => !hasCity(r.query.toLowerCase()) && SVC.test(r.query.toLowerCase()))

console.log('='.repeat(80))
console.log('CANADIAN SERVICE DEMAND — corrected (query x country dimension)')
console.log('='.repeat(80))
console.log(`  all Canadian queries      ${String(ca.length).padStart(6)} rows  ${String(sum(ca,'impressions')).padStart(7)} impr  ${String(sum(ca,'clicks')).padStart(5)} clicks  ${pct(sum(ca,'clicks'),sum(ca,'impressions'))}`)
console.log(`  city + service intent     ${String(cityService.length).padStart(6)} rows  ${String(sum(cityService,'impressions')).padStart(7)} impr  ${String(sum(cityService,'clicks')).padStart(5)} clicks  ${pct(sum(cityService,'clicks'),sum(cityService,'impressions'))}`)
console.log(`  service intent, no city   ${String(serviceOnly.length).padStart(6)} rows  ${String(sum(serviceOnly,'impressions')).padStart(7)} impr  ${String(sum(serviceOnly,'clicks')).padStart(5)} clicks  ${pct(sum(serviceOnly,'clicks'),sum(serviceOnly,'impressions'))}`)

console.log('\nCITY+SERVICE BY POSITION BAND — does ranking convert to clicks?')
for (const [lab, lo, hi] of [['1.0-3.5',1,3.5],['3.5-5.5',3.5,5.5],['5.5-10.5',5.5,10.5],['10.5-20',10.5,20],['20+',20,999]]) {
  const b = cityService.filter((r) => r.position >= lo && r.position < hi)
  if (!b.length) continue
  console.log(`  pos ${lab.padEnd(9)} ${String(b.length).padStart(4)} q  ${String(sum(b,'impressions')).padStart(6)} impr  ${String(sum(b,'clicks')).padStart(4)} clk  CTR ${pct(sum(b,'clicks'),sum(b,'impressions')).padStart(7)}`)
}

console.log('\nHEAD SERVICE TERMS — the ones that would actually sell a season plan')
const HEAD = ['mosquito control','tick control','mosquito spray','mosquito control near me','tick control near me','mosquito exterminator','pest control near me','mosquito control toronto','mosquito control mississauga','mosquito control vaughan','mosquito control brampton','mosquito control oakville','mosquito control burlington','tick control toronto','mosquito control cost','mosquito service','mosquito spraying service','yard mosquito spray']
for (const h of HEAD) {
  const hit = ca.filter((r) => r.query.toLowerCase() === h)
  if (!hit.length) { console.log(`  ${h.padEnd(34)} — no Canadian impressions`); continue }
  const r = hit[0]
  console.log(`  ${h.padEnd(34)} pos ${String(r.position).padStart(6)}  ${String(r.impressions).padStart(5)} impr  ${String(r.clicks).padStart(3)} clk  ${pct(r.clicks,r.impressions)}`)
}

console.log('\nBIGGEST CANADIAN SERVICE OPPORTUNITIES (impressions, ranked, zero-ish clicks)')
const opps = [...cityService, ...serviceOnly]
  .filter((r) => r.impressions >= 25)
  .sort((a, b) => b.impressions - a.impressions).slice(0, 30)
for (const r of opps) {
  console.log(`  ${String(r.impressions).padStart(5)} impr  ${String(r.clicks).padStart(3)} clk  pos ${String(r.position).padStart(6)}  ${r.query}`)
}
