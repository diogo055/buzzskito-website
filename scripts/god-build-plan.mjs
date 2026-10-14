// Writes the schedule for the "god build" (data/god-build/plan.src.json) from:
//   data/god-build/states.json        the 50 states, their neighbors and the release order
//   data/god-build/provinces.json     the 10 provinces (Canadian series, written for Canadians)
//   data/god-build/extra-pages.json   pages outside the series (optional)
// and the settings below (start date, pages per week). Then run scripts/us-pages-plan.mjs so
// the plan the validator and the register script read (data/us-pages/plan.json) includes them.
//
//   node scripts/god-build-plan.mjs [--start 2026-11-16] [--per-week 40]
//
// Pages already released keep their date: a page whose file is in content/guides/ is never
// moved, so re-running this after a release does not rewrite history.
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const DIR = join(ROOT, 'data', 'god-build')
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d }
const START = arg('--start', '2026-11-16') // a Monday
const PER_WEEK = Number(arg('--per-week', 40))

const US = JSON.parse(readFileSync(join(DIR, 'states.json'), 'utf8'))
const CA = JSON.parse(readFileSync(join(DIR, 'provinces.json'), 'utf8'))
const usByCode = Object.fromEntries(US.states.map((s) => [s.code, { ...s, slug: s.name.toLowerCase().replace(/ /g, '-') }]))
const caByCode = Object.fromEntries(CA.provinces.map((p) => [p.code, p]))
// pages that already exist and belong to a series (linked, not rewritten)
const EXISTING = { 'ticks:us:MI': '/blog/ticks-in-michigan', 'mosquitoes:us:AK': '/blog/alaska-mosquitoes', ...Object.fromEntries(Object.entries(CA.existing).map(([k, v]) => [k.replace(':', ':ca:'), v])) }

const lower = (s) => s.toLowerCase()
const TICK_SCOPE_US = (n) => `Which ticks live in ${n} and which bite people most; where blacklegged (and other) ticks are established, county by county, from CDC's tick surveillance tables; ${n}'s reported Lyme disease and other tick-borne disease cases by year and county (with the residence-versus-exposure and 2022 case-definition caveats); when tick season runs in ${n}, by month and species; what the state offers (tick identification, testing, reporting Asian longhorned ticks); prevention and what to do after a bite. Built from the state's data packet (dataPacket) plus the state health department and land-grant extension pages.`
const MOSQ_SCOPE_US = (n) => `When mosquito season starts, peaks and ends in ${n}, region by region, from NOAA temperature normals and state or county vector-control sources; which mosquito species live in ${n} (including Aedes aegypti and Aedes albopictus where CDC records them) and when each bites; ${n}'s West Nile and other mosquito-borne disease cases by year; local mosquito control programs and how residents report problems; how to cut mosquitoes around a home. Built from the state's data packet (dataPacket) plus the state health department and land-grant extension pages.`
const TICK_SCOPE_CA = (n) => `For Canadian readers: which ticks live in ${n} and which bite people most; where the province's own surveillance places blacklegged ticks and its published Lyme disease risk areas; ${n}'s reported Lyme disease cases by year (provincial and Public Health Agency of Canada figures, with their caveats); when ticks are active in ${n}, by month, in Celsius; how to get a tick identified (eTick or the provincial program) and whether ticks are tested; prevention and what to do after a bite. Built from the province's data packet (dataPacket) plus the provincial health ministry pages.`
const MOSQ_SCOPE_CA = (n) => `For Canadian readers: when mosquito season starts, peaks and ends in ${n}, region by region, from Environment and Climate Change Canada temperature normals and provincial or city mosquito programs; which mosquitoes live in ${n} and when they bite; West Nile virus in ${n} by year (provincial and Public Health Agency of Canada figures); city mosquito control and trap counts where they are published; how to cut mosquitoes around a home. Built from the province's data packet (dataPacket) plus the provincial health ministry pages.`

const SERIES = [
  { key: 'ticks:ca', cluster: 'ticks', country: 'ca', hub: { slug: 'ticks-by-province', name: 'Ticks by Province' }, regions: caByCode, rank: CA.tickRank, prefix: 'ticks-in-',
    hubPage: { keyword: 'ticks in canada by province', alsoTargets: ['lyme disease by province', 'tick map canada', 'where are ticks in canada'], h1Hint: 'Ticks by Province: Where Ticks and Lyme Disease Are in Canada', scope: 'The Canadian overview and index for the province series: a map of Canada shaded by reported Lyme disease, how each province tracks ticks, the national picture from the Public Health Agency of Canada, and a link to every province page (Ontario links to our existing Ontario pages).' },
    page: (r) => ({ keyword: `ticks in ${lower(r.name)}`, alsoTargets: [`tick season ${lower(r.name)}`, `lyme disease ${lower(r.name)}`, `are there ticks in ${lower(r.name)}`], h1Hint: `Ticks in ${r.name}: Species, Lyme Risk Areas and Tick Season`, scope: TICK_SCOPE_CA(r.name) }) },
  { key: 'ticks:us', cluster: 'ticks', country: 'us', hub: { slug: 'ticks-by-state', name: 'Ticks by State' }, regions: usByCode, rank: US.tickRank, prefix: 'ticks-in-',
    hubPage: { keyword: 'ticks by state', alsoTargets: ['tick map by state', 'lyme disease by state', 'where do ticks live in the us'], h1Hint: 'Ticks by State: Which Ticks Live Where, and Lyme Disease Across the US', scope: 'The national overview and index for the US state series: a US map shaded from CDC data that links every state page, the national picture (species ranges, disease cases by state and year), how to read the data, and a list of all 50 state pages.' },
    page: (r) => ({ keyword: `ticks in ${lower(r.name)}`, alsoTargets: [`types of ticks in ${lower(r.name)}`, `tick season ${lower(r.name)}`, `lyme disease ${lower(r.name)}`], h1Hint: `Ticks in ${r.name}: Species, Where They Are, Disease Data and Tick Season`, scope: TICK_SCOPE_US(r.name) }) },
  { key: 'mosquitoes:ca', cluster: 'mosquitoes', country: 'ca', hub: { slug: 'mosquitoes-by-province', name: 'Mosquitoes by Province' }, regions: caByCode, rank: CA.mosquitoRank, prefix: 'mosquitoes-in-',
    hubPage: { keyword: 'mosquitoes in canada by province', alsoTargets: ['mosquito season canada', 'west nile virus canada by province', 'worst mosquitoes in canada'], h1Hint: 'Mosquitoes by Province: Season, Species and West Nile Virus in Canada', scope: 'The Canadian overview and index for the mosquito province series: when the season runs across Canada, a map of West Nile virus by province, how cities count mosquitoes, and a link to every province page.' },
    page: (r) => ({ keyword: `mosquitoes in ${lower(r.name)}`, alsoTargets: [`mosquito season ${lower(r.name)}`, `when is mosquito season in ${lower(r.name)}`, `west nile virus ${lower(r.name)}`], h1Hint: `Mosquitoes in ${r.name}: Season, Species and West Nile Data`, scope: MOSQ_SCOPE_CA(r.name) }) },
  { key: 'mosquitoes:us', cluster: 'mosquitoes', country: 'us', hub: { slug: 'mosquitoes-by-state', name: 'Mosquitoes by State' }, regions: usByCode, rank: US.mosquitoRank, prefix: 'mosquitoes-in-',
    hubPage: { keyword: 'mosquitoes by state', alsoTargets: ['mosquito season by state', 'states with the most mosquitoes', 'west nile virus by state'], h1Hint: 'Mosquitoes by State: Season, Species and West Nile Virus Across the US', scope: 'The national overview and index for the US mosquito series: a US map shaded from CDC West Nile data that links every state page, when the season runs across the country, and a list of all 50 state pages.' },
    page: (r) => ({ keyword: `mosquitoes in ${lower(r.name)}`, alsoTargets: [`mosquito season ${lower(r.name)}`, `when is mosquito season in ${lower(r.name)}`, `west nile virus ${lower(r.name)}`], h1Hint: `Mosquitoes in ${r.name}: Season by Region, Species and West Nile Data`, scope: MOSQ_SCOPE_US(r.name) }) },
]

const pages = []
for (const se of SERIES) {
  const path = (r) => EXISTING[`${se.cluster}:${se.country}:${r.code}`] || `/blog/${se.prefix}${r.slug}`
  const all = Object.values(se.regions).map(path)
  const ca = se.country === 'ca'
  pages.push({
    slug: se.hub.slug, section: 'learn', role: 'hub', cluster: se.cluster, series: se.hub.slug, ...(ca && { audience: 'ca' }),
    ...se.hubPage, flags: ['health'], minWords: 1500, minExisting: 3,
    parent: { href: '/learn', name: 'Learning Centre' },
    mustLink: [], neighbors: [], minNeighbors: 0, seriesAll: all,
    dataPacket: `data/god-build/packets/${se.cluster}-${se.country}/${ca ? 'CA' : 'US'}.json`,
  })
  for (const code of se.rank) {
    const r = se.regions[code]
    if (EXISTING[`${se.cluster}:${se.country}:${code}`]) continue
    const p = path(r)
    pages.push({
      slug: p.split('/').pop(), section: 'blog', role: 'page', cluster: se.cluster, series: se.hub.slug, state: code, ...(ca && { audience: 'ca' }),
      ...se.page(r), flags: ['health', 'id'], minWords: 1800, minExisting: 2,
      parent: { href: `/learn/${se.hub.slug}`, name: se.hub.name },
      mustLink: [`/learn/${se.hub.slug}`],
      neighbors: r.neighbors.map((n) => path(se.regions[n])), minNeighbors: Math.min(2, r.neighbors.length),
      dataPacket: `data/god-build/packets/${se.cluster}-${se.country}/${code}.json`,
    })
  }
}

// pages outside the series (upgrades of existing pages are not here: they are edits)
const extraFile = join(DIR, 'extra-pages.json')
if (existsSync(extraFile)) for (const e of JSON.parse(readFileSync(extraFile, 'utf8')).pages) pages.push({ section: 'blog', role: 'page', minExisting: 2, mustLink: [], neighbors: [], minNeighbors: 0, ...e })

// dates: PER_WEEK pages every Monday from START, in the order above, unless a page has its own
// date or is already live (its date then stays what it was)
const prev = existsSync(join(DIR, 'plan.src.json')) ? Object.fromEntries(JSON.parse(readFileSync(join(DIR, 'plan.src.json'), 'utf8')).pages.map((p) => [p.slug, p.releaseOn])) : {}
const addDays = (iso, n) => new Date(Date.parse(`${iso}T00:00:00Z`) + n * 864e5).toISOString().slice(0, 10)
let slot = 0
for (const p of pages) {
  const live = existsSync(join(ROOT, 'content', 'guides', `${p.slug}.json`))
  if (live && prev[p.slug]) { p.releaseOn = prev[p.slug]; continue }
  if (p.releaseOn) continue
  p.releaseOn = addDays(START, 7 * Math.floor(slot / PER_WEEK))
  slot++
}

const weeks = {}
for (const p of pages) weeks[p.releaseOn] = (weeks[p.releaseOn] || 0) + 1
writeFileSync(join(DIR, 'plan.src.json'), JSON.stringify({
  _readme: 'GENERATED by scripts/god-build-plan.mjs from data/god-build/states.json, provinces.json and extra-pages.json. Edit those, not this. Each page goes live on its releaseOn date (scripts/release-scheduled.mjs).',
  start: START, perWeek: PER_WEEK, pages,
}, null, 1) + '\n')
console.log(`${pages.length} pages scheduled:`)
for (const [d, n] of Object.entries(weeks).sort()) console.log(`  ${d}  ${n}`)
