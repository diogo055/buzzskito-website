// Writes the schedule for the "god build" (data/god-build/plan.src.json) from:
//   data/god-build/states.json        the 50 states, their neighbors and the release order
//   data/god-build/extra-pages.json   pages outside the state series (optional)
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

const { states, tickRank, mosquitoRank } = JSON.parse(readFileSync(join(DIR, 'states.json'), 'utf8'))
const byCode = Object.fromEntries(states.map((s) => [s.code, s]))
const slugName = (s) => s.name.toLowerCase().replace(/ /g, '-')

// pages that already exist and belong to a series (not rewritten by this build)
const EXISTING = { 'ticks:MI': '/blog/ticks-in-michigan', 'mosquitoes:AK': '/blog/alaska-mosquitoes' }

const SERIES = {
  ticks: {
    hub: { slug: 'ticks-by-state', name: 'Ticks by State' },
    path: (s) => EXISTING[`ticks:${s.code}`] || `/blog/ticks-in-${slugName(s)}`,
    rank: tickRank,
    page: (s) => ({
      keyword: `ticks in ${s.name.toLowerCase()}`,
      alsoTargets: [`types of ticks in ${s.name.toLowerCase()}`, `tick season ${s.name.toLowerCase()}`, `lyme disease ${s.name.toLowerCase()}`],
      h1Hint: `Ticks in ${s.name}: Species, Where They Are, Disease Data and Tick Season`,
      flags: ['health', 'id'],
      scope: `Which ticks live in ${s.name} and which bite people most; where blacklegged (and other) ticks are established, county by county, from CDC's tick surveillance tables; ${s.name}'s reported Lyme disease and other tick-borne disease cases by year and county (with the residence-versus-exposure and 2022 case-definition caveats); when tick season runs in ${s.name}, by month and species; what the state offers (tick identification, testing, reporting Asian longhorned ticks); prevention and what to do after a bite. Built from the state's data packet (dataPacket) plus the state health department and land-grant extension pages.`,
    }),
  },
  mosquitoes: {
    hub: { slug: 'mosquitoes-by-state', name: 'Mosquitoes by State' },
    path: (s) => EXISTING[`mosquitoes:${s.code}`] || `/blog/mosquitoes-in-${slugName(s)}`,
    rank: mosquitoRank,
    page: (s) => ({
      keyword: `mosquitoes in ${s.name.toLowerCase()}`,
      alsoTargets: [`mosquito season ${s.name.toLowerCase()}`, `when is mosquito season in ${s.name.toLowerCase()}`, `west nile virus ${s.name.toLowerCase()}`],
      h1Hint: `Mosquitoes in ${s.name}: Season by Region, Species and West Nile Data`,
      flags: ['health', 'id'],
      scope: `When mosquito season starts, peaks and ends in ${s.name}, region by region, from NOAA temperature normals and state or county vector-control sources; which mosquito species live in ${s.name} (including Aedes aegypti and Aedes albopictus where CDC records them) and when each bites; ${s.name}'s West Nile and other mosquito-borne disease cases by year; local mosquito control programs and how residents report problems; how to cut mosquitoes around a home. Built from the state's data packet (dataPacket) plus the state health department and land-grant extension pages.`,
    }),
  },
}

const pages = []
for (const [cluster, se] of Object.entries(SERIES)) {
  const all = states.map((s) => se.path(s))
  pages.push({
    slug: se.hub.slug, section: 'learn', role: 'hub', cluster, series: se.hub.slug,
    keyword: `${cluster} by state`, alsoTargets: cluster === 'ticks' ? ['tick map by state', 'lyme disease by state', 'where do ticks live in the us'] : ['mosquito season by state', 'states with the most mosquitoes', 'west nile virus by state'],
    h1Hint: cluster === 'ticks' ? 'Ticks by State: Which Ticks Live Where, and Lyme Disease Across the US' : 'Mosquitoes by State: Season, Species and West Nile Virus Across the US',
    flags: ['health'], minWords: 1500, minExisting: 3,
    parent: { href: '/learn', name: 'Learning Centre' },
    mustLink: [], neighbors: [], minNeighbors: 0, seriesAll: all,
    scope: `The national overview and index for the ${cluster} state series: a US map shaded from CDC data that links every state's page, the national picture (species ranges, disease cases by state and year), how to read the data, and a list of all 50 state pages.`,
    dataPacket: `data/god-build/packets/${cluster}/US.json`,
  })
  for (const code of se.rank) {
    const s = byCode[code]
    if (EXISTING[`${cluster}:${code}`]) continue
    const path = se.path(s)
    pages.push({
      slug: path.split('/').pop(), section: 'blog', role: 'page', cluster, series: se.hub.slug, state: code,
      ...se.page(s), minWords: 1800, minExisting: 2,
      parent: { href: `/learn/${se.hub.slug}`, name: se.hub.name },
      mustLink: [`/learn/${se.hub.slug}`],
      neighbors: s.neighbors.map((n) => se.path(byCode[n])), minNeighbors: 2,
      dataPacket: `data/god-build/packets/${cluster}/${code}.json`,
    })
  }
}

// pages outside the state series (upgrades of existing pages are not here: they are edits)
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
  _readme: 'GENERATED by scripts/god-build-plan.mjs from data/god-build/states.json and extra-pages.json. Edit those, not this. Each page goes live on its releaseOn date (scripts/release-scheduled.mjs).',
  start: START, perWeek: PER_WEEK, pages,
}, null, 1) + '\n')
console.log(`${pages.length} pages scheduled:`)
for (const [d, n] of Object.entries(weeks).sort()) console.log(`  ${d}  ${n}`)
