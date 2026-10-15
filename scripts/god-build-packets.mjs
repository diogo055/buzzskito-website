// Builds the data packets the scheduled state pages are written from, out of the files
// scripts/god-build-fetch.mjs downloaded (data/god-build/raw/). One JSON per state and series:
//   data/god-build/packets/ticks-us/<ST>.json, data/god-build/packets/mosquitoes-us/<ST>.json
//   and a national summary for each hub: .../ticks-us/US.json, .../mosquitoes-us/US.json
// Writers use only these numbers (each with its source and "data through" date), so figures
// are computed once, the same way, instead of being retyped from web pages.
//
//   node scripts/god-build-packets.mjs
//
// The CDC tick tables (ArboNET Tick Module) come with a data-use agreement: the raw tables are
// not passed on (they stay in raw/, which is not committed); derived publications are allowed
// with a reference to the ArboNET Tick Module and a copy to ticksurveillance@cdc.gov. The
// packets keep per-county status only to draw each state's own map.
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { readXlsx } from './xlsx-read.mjs'

const ROOT = process.cwd()
const RAW = join(ROOT, 'data', 'god-build', 'raw')
const OUT = join(ROOT, 'data', 'god-build', 'packets')
const { states } = JSON.parse(readFileSync(join(ROOT, 'data', 'god-build', 'states.json'), 'utf8'))
const ledger = Object.fromEntries(JSON.parse(readFileSync(join(ROOT, 'data', 'god-build', 'sources.json'), 'utf8')).files.map((f) => [f.file, f]))
const byName = Object.fromEntries(states.map((s) => [s.name.toLowerCase(), s]))
const byFips = Object.fromEntries(states.map((s) => [s.fips, s]))

// ── CSV ────────────────────────────────────────────────────────────────────────
function csv(file, enc = 'utf8') {
  const text = readFileSync(join(RAW, file), enc).replace(/^﻿/, '')
  const rows = []
  let row = [], cell = '', q = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (q) { if (ch === '"') { if (text[i + 1] === '"') { cell += '"'; i++ } else q = false } else cell += ch; continue }
    if (ch === '"') q = true
    else if (ch === ',') { row.push(cell); cell = '' }
    else if (ch === '\n') { row.push(cell.replace(/\r$/, '')); rows.push(row); row = []; cell = '' }
    else cell += ch
  }
  if (cell || row.length) { row.push(cell); rows.push(row) }
  return rows.filter((r) => r.some((c) => c !== ''))
}
const num = (s) => { const n = Number(String(s ?? '').replace(/,/g, '').trim()); return Number.isFinite(n) ? n : null }
const cleanName = (s) => String(s).replace(/[^A-Za-z .]/g, '').trim().toLowerCase()
const pad = (n, w) => String(n).padStart(w, '0')
const src = (file) => ({ publisher: ledger[file].publisher, title: ledger[file].what, url: ledger[file].url, downloadedOn: ledger[file].downloadedOn })

// ── Lyme ───────────────────────────────────────────────────────────────────────
const lymeState = {}
{
  const rows = csv('lyme-cases-by-state.csv', 'latin1')
  const years = rows[0].slice(1).map(Number)
  for (const r of rows.slice(1)) {
    const s = byName[cleanName(r[0])]
    if (!s) continue
    lymeState[s.code] = { highIncidence: /[^A-Za-z .]/.test(r[0].trim()), byYear: Object.fromEntries(years.map((y, i) => [y, num(r[i + 1])])) }
  }
  for (const r of csv('lyme-rates-by-state.csv').slice(1)) {
    const s = byName[cleanName(r[0])]
    if (!s || !lymeState[s.code]) continue
    ;(lymeState[s.code].ratePer100k ||= {})[r[1]] = num(r[2])
  }
}
const lymeCounty = {}
{
  const rows = csv('lyme-cases-by-county.csv', 'latin1')
  const h = rows[0].map((x) => x.toLowerCase())
  const yc = h.map((x, i) => [x.match(/^cases(\d{4})$/)?.[1], i]).filter(([y]) => y)
  for (const r of rows.slice(1)) {
    const fips = pad(r[h.indexOf('stcode')], 2) + pad(r[h.indexOf('ctycode')], 3)
    const s = byFips[fips.slice(0, 2)]
    if (!s) continue
    ;(lymeCounty[s.code] ||= []).push({ fips, name: r[h.indexOf('ctyname')], status: r[h.indexOf('ststatus')], byYear: Object.fromEntries(yc.map(([y, i]) => [y, num(r[i]) ?? 0])) })
  }
}

// ── CDC tick tables (ArboNET Tick Module, through Dec 31, 2025) ─────────────────
function statusTable(file, sheetPrefix, cols) {
  const sheets = readXlsx(join(RAW, file))
  const name = Object.keys(sheets).find((n) => n.startsWith(sheetPrefix))
  const rows = sheets[name]
  const hi = rows.findIndex((r) => /^FIPS/i.test(r[0]))
  const head = rows[hi]
  const out = {}
  for (const r of rows.slice(hi + 1)) {
    const fips = pad(r[0], 5), st = r[1]
    if (!byFips[fips.slice(0, 2)]) continue
    for (const [key, match] of Object.entries(cols)) {
      const ci = head.findIndex((x) => match.test(x))
      if (ci < 0) throw new Error(`${file}: no column for ${key}`)
      ;((out[st] ||= {})[key] ||= {})[fips] = r[ci]
    }
  }
  return { out, head }
}
const ixodes = statusTable('ticks-ixodes-by-county.xlsx', 'Ixodes records', { scapularis: /^Ixodes_scapularis_County_Status$/i, pacificus: /^Ixodes_pacificus_county_status$/i }).out
const PATHOGENS = {
  'Borrelia burgdorferi (Lyme disease)': /^Borrelia_burgdorferi.*_County_Status$/i,
  'Borrelia mayonii (Lyme disease)': /^Borrelia_mayonii_County_Status$/i,
  'Borrelia miyamotoi (hard tick relapsing fever)': /^Borrelia_miyamotoi_County_Status$/i,
  'Anaplasma phagocytophilum, human-active variant (anaplasmosis)': /^Anaplasma_phagocytophilum.*_County_Status$/i,
  'Ehrlichia muris eauclairensis (ehrlichiosis)': /^Ehrlichia_muris.*_County_Status$/i,
  'Babesia microti (babesiosis)': /^Babesia_microti_County_Status$/i,
  'Powassan virus': /^Powassan.*_County_Status$/i,
}
const pathogens = statusTable('ticks-ixodes-pathogens-by-county.xlsx', 'Ixodes Pathogens', PATHOGENS).out
const loneStar = statusTable('ticks-lone-star-by-county.xlsx', 'A. americanum', { status: /County Status of A\. americanum/i }).out
const dogTick = statusTable('ticks-american-dog-by-county.xlsx', 'D. variabilis', { status: /County Status of D\. variabilis/i }).out
const tally = (map) => { const t = { Established: 0, Reported: 0, 'No records': 0 }; for (const v of Object.values(map || {})) { const k = /^estab/i.test(v) ? 'Established' : /^report/i.test(v) ? 'Reported' : 'No records'; t[k]++ } return t }
const statusKey = (v) => (/^estab/i.test(v) ? 'established' : /^report/i.test(v) ? 'reported' : null)

// ── other tickborne diseases ───────────────────────────────────────────────────
const tbdCounty = {}
{
  const rows = readXlsx(join(RAW, 'tickborne-by-county-2019-2022.xlsx'))['sheet 1']
  const head = rows[0]
  for (const r of rows.slice(1)) {
    const s = byName[cleanName(r[0])]
    if (!s) continue
    const rec = { county: r[1], fips: pad(r[2], 5) }
    head.slice(3).forEach((h, i) => { rec[h] = num(r[i + 3]) ?? 0 })
    ;(tbdCounty[s.code] ||= []).push(rec)
  }
}
const incidence = (file) => {
  const rows = readXlsx(join(RAW, file)).Export
  const out = {}
  for (const r of rows.slice(1)) { const s = byName[cleanName(r[2])]; if (s) out[s.code] = num(r[3]) }
  return out
}
const anaplasmosis = incidence('anaplasmosis-incidence-by-state-2023.xlsx')
const ehrlichiosis = incidence('ehrlichiosis-incidence-by-state-2023.xlsx')
const sfr = incidence('sfr-incidence-by-state-2023.xlsx')
const tularemia = Object.fromEntries(csv('tularemia-by-state-2023.csv').slice(1).map((r) => [byName[cleanName(r[0])]?.code, num(r[1])]).filter(([k]) => k))

// ── ArboNET (human disease by state and year) ──────────────────────────────────
function arbo(file) {
  const out = {}
  for (const r of csv(file).slice(1)) {
    const [type, year, st, cases] = r
    if (!/^\d{4}$/.test(year)) continue
    const k = /neuro/i.test(type) ? 'neuroinvasive' : 'all'
    ;(((out[st] ||= {})[k]) ||= {})[year] = num(cases)
  }
  return out
}
const ARBO = { 'West Nile virus': arbo('wnv-by-state.csv'), 'Eastern equine encephalitis': arbo('eee-by-state.csv'), 'La Crosse encephalitis': arbo('lac-by-state.csv'), 'St. Louis encephalitis': arbo('sle-by-state.csv'), 'Jamestown Canyon virus': arbo('jcv-by-state.csv'), 'Powassan virus': arbo('pow-by-state.csv') }
const ARBO_FIRST = { 'West Nile virus': 1999, 'Eastern equine encephalitis': 2003, 'La Crosse encephalitis': 2003, 'St. Louis encephalitis': 2003, 'Jamestown Canyon virus': 2011, 'Powassan virus': 2004 }
const series = (m, from, to = 2025) => Object.fromEntries(Array.from({ length: to - from + 1 }, (_, i) => [from + i, m?.[from + i] ?? 0]))
const wnvCounty = {}
for (const r of csv('wnv-by-county-yearly.csv').slice(1)) {
  const [year, fips, activity, human, neuro] = r
  const s = byFips[pad(fips, 5).slice(0, 2)]
  if (!s) continue
  ;(wnvCounty[s.code] ||= []).push({ year: Number(year), fips: pad(fips, 5), activity, human: num(human) ?? 0, neuro: num(neuro) ?? 0 })
}

// ── Aedes aegypti / albopictus county records (Monaghan et al. 2019, CC0) ──────
function aedes(file) {
  const out = {}
  for (const r of csv(file).slice(1)) {
    const fips = pad(r[0], 5), s = byFips[fips.slice(0, 2)]
    if (!s) continue
    if (r[4] === '1' || r[5] === '1') (out[s.code] ||= []).push({ fips, name: r[1].split(' : ').pop() })
  }
  return out
}
const aegypti = aedes('aedes-aegypti-by-county.csv'), albopictus = aedes('aedes-albopictus-by-county.csv')

// ── population and climate ─────────────────────────────────────────────────────
const pop = {}
{ const rows = csv('population-by-state-2025.csv'); const h = rows[0]; for (const r of rows.slice(1)) { const s = byFips[pad(r[h.indexOf('STATE')], 2)]; if (s && r[h.indexOf('SUMLEV')] === '040') pop[s.code] = num(r[h.indexOf('POPESTIMATE2025')]) } }
function normals(code) {
  const rows = readFileSync(join(RAW, `noaa-tavg-${code}.csv`), 'utf8').split(/\r?\n/).filter((l) => /^\d{6},/.test(l))
  const by = Array.from({ length: 12 }, () => [])
  for (const l of rows) { const [d, v] = l.split(','); const y = +d.slice(0, 4), m = +d.slice(4, 6); if (y >= 1991 && y <= 2020 && Number.isFinite(+v)) by[m - 1].push(+v) }
  const firstYear = +rows[0].slice(0, 4)
  return { period: firstYear > 1991 ? `${firstYear}-2020` : '1991-2020', monthlyMeanF: by.map((a) => (a.length ? Math.round((a.reduce((s, x) => s + x, 0) / a.length) * 10) / 10 : null)) }
}

// ── write ──────────────────────────────────────────────────────────────────────
mkdirSync(join(OUT, 'ticks-us'), { recursive: true })
mkdirSync(join(OUT, 'mosquitoes-us'), { recursive: true })
const TICK_NOTE = 'CDC ArboNET Tick Module, county status through Dec 31, 2025. Established = six or more ticks of one life stage, or more than one life stage, collected in a county within 12 months; Reported = fewer than six of one life stage; "No records" does not mean absent. Status is cumulative; reporting effort varies by county and state. Reference the ArboNET Tick Module wherever these data are used.'
const LYME_NOTE = 'Confirmed and probable cases, by county or state of residence (not necessarily where the bite happened). A revised case definition took effect in 2022: high-incidence states count laboratory evidence alone, so 2022-2023 are not directly comparable with earlier years. 2019-2020 reporting was affected by COVID-19.'
const nat = { ticks: [], mosquitoes: [] }
for (const s of states) {
  const L = lymeState[s.code] || { byYear: {} }
  const base = [2017, 2018, 2019].map((y) => L.byYear[y]).filter((x) => x != null)
  const counties = (lymeCounty[s.code] || []).filter((c) => !(s.code === 'CT' && +c.fips.slice(2) >= 100))
  const top2023 = counties.filter((c) => c.byYear['2023'] > 0).sort((a, b) => b.byYear['2023'] - a.byYear['2023']).slice(0, 10).map((c) => ({ county: c.name, fips: c.fips, cases2023: c.byYear['2023'] }))
  const ix = ixodes[s.code] || {}
  const pth = pathogens[s.code] || {}
  const tbd = tbdCounty[s.code] || []
  const tbdTotals = {}
  for (const c of tbd) for (const [k, v] of Object.entries(c)) if (typeof v === 'number') tbdTotals[k] = (tbdTotals[k] || 0) + v
  const climate = normals(s.code)
  const ticks = {
    state: s.code, name: s.name, fips: s.fips, population2025: pop[s.code] ?? null,
    lyme: {
      highIncidenceState: L.highIncidence ?? null, casesByYear: L.byYear, ratePer100kByYear: L.ratePer100k || {},
      latestYear: 2023, latest: L.byYear[2023] ?? null, average2017to2019: base.length ? Math.round(base.reduce((a, b) => a + b, 0) / base.length) : null,
      countiesWithCases2023: counties.filter((c) => c.byYear['2023'] > 0).length, countyCount: counties.length, topCounties2023: top2023, note: LYME_NOTE,
      countyCases2023: Object.fromEntries(counties.map((c) => [c.fips, c.byYear['2023']])),
    },
    blackleggedTick: { counts: tally(ix.scapularis), county: Object.fromEntries(Object.entries(ix.scapularis || {}).map(([f, v]) => [f, statusKey(v)]).filter(([, v]) => v)), note: TICK_NOTE },
    westernBlackleggedTick: { counts: tally(ix.pacificus), county: Object.fromEntries(Object.entries(ix.pacificus || {}).map(([f, v]) => [f, statusKey(v)]).filter(([, v]) => v)) },
    loneStarTick: { counts: tally(loneStar[s.code]?.status), county: Object.fromEntries(Object.entries(loneStar[s.code]?.status || {}).map(([f, v]) => [f, statusKey(v)]).filter(([, v]) => v)) },
    americanDogTick: { counts: tally(dogTick[s.code]?.status), county: Object.fromEntries(Object.entries(dogTick[s.code]?.status || {}).map(([f, v]) => [f, statusKey(v)]).filter(([, v]) => v)) },
    pathogensInTicks: Object.fromEntries(Object.keys(PATHOGENS).map((k) => { const m = pth[k] || {}; const present = Object.entries(m).filter(([, v]) => /^present/i.test(v)).map(([f]) => f); return [k, { countiesPresent: present.length, counties: present }] })),
    otherDiseases: {
      countyTotals2019to2022: tbdTotals, note2019to2022: 'Cases summed over 2019-2022, by county of residence (CDC). Lyme here is the 2019-2022 sum.',
      anaplasmosisPerMillion2023: anaplasmosis[s.code] ?? null, ehrlichiosisChaffeensisPerMillion2023: ehrlichiosis[s.code] ?? null, spottedFeverRickettsiosisPerMillion2023: sfr[s.code] ?? null,
      noteIncidence: 'Annual incidence per million population, 2023 (CDC); -1 means not notifiable in that state.',
      tularemiaCases2023: tularemia[s.code] ?? null,
      powassanCasesByYear: series(ARBO['Powassan virus'][s.code]?.all, 2004),
    },
    climate, climateNote: 'NOAA NCEI Climate at a Glance, statewide monthly mean temperature in degrees Fahrenheit, averaged over 1991-2020 (state averages hide big regional differences).',
    sources: ['lyme-cases-by-state.csv', 'lyme-rates-by-state.csv', 'lyme-cases-by-county.csv', 'ticks-ixodes-by-county.xlsx', 'ticks-ixodes-pathogens-by-county.xlsx', 'ticks-lone-star-by-county.xlsx', 'ticks-american-dog-by-county.xlsx', 'tickborne-by-county-2019-2022.xlsx', 'anaplasmosis-incidence-by-state-2023.xlsx', 'ehrlichiosis-incidence-by-state-2023.xlsx', 'sfr-incidence-by-state-2023.xlsx', 'tularemia-by-state-2023.csv', 'pow-by-state.csv', `noaa-tavg-${s.code}.csv`, 'population-by-state-2025.csv'].map(src),
  }
  // The repository is public. CDC's tick tables may not be passed on as data, so the per-county
  // tick and pathogen statuses go to a git-ignored file for the writer (who may publish this
  // state's own map with the ArboNET reference); the committed packet keeps the counts only.
  const PRIVATE = join(RAW, 'derived', 'ticks-county')
  mkdirSync(PRIVATE, { recursive: true })
  const priv = { note: 'From CDC ArboNET Tick Module tables (data-use agreement): for this state\'s own published map only; never commit or redistribute.', blacklegged: ticks.blackleggedTick.county, westernBlacklegged: ticks.westernBlackleggedTick.county, loneStar: ticks.loneStarTick.county, americanDog: ticks.americanDogTick.county, pathogens: Object.fromEntries(Object.entries(ticks.pathogensInTicks).map(([k, v]) => [k, v.counties])) }
  writeFileSync(join(PRIVATE, `${s.code}.json`), JSON.stringify(priv) + '\n')
  for (const k of ['blackleggedTick', 'westernBlackleggedTick', 'loneStarTick', 'americanDogTick']) { delete ticks[k].county; ticks[k].countyDetail = `data/god-build/raw/derived/ticks-county/${s.code}.json (not committed)` }
  for (const v of Object.values(ticks.pathogensInTicks)) delete v.counties
  writeFileSync(join(OUT, 'ticks-us', `${s.code}.json`), JSON.stringify(ticks, null, 1) + '\n')
  nat.ticks.push({ state: s.code, name: s.name, lyme2023: ticks.lyme.latest, ratePer100k2023: ticks.lyme.ratePer100kByYear['2023'] ?? null, blackleggedEstablished: ticks.blackleggedTick.counts.Established, loneStarEstablished: ticks.loneStarTick.counts.Established, counties: Object.keys(ix.scapularis || {}).length })

  const wc = wnvCounty[s.code] || []
  const cum = {}
  for (const r of wc) cum[r.fips] = (cum[r.fips] || 0) + r.human
  const lastYear = wc.length ? Math.max(...wc.map((r) => r.year)) : null
  const mosq = {
    state: s.code, name: s.name, fips: s.fips, population2025: pop[s.code] ?? null,
    climate, climateNote: ticks.climateNote,
    monthsAtOrAbove50F: climate.monthlyMeanF.map((t, i) => (t != null && t >= 50 ? i + 1 : null)).filter(Boolean),
    mosquitoBorneDisease: Object.fromEntries(Object.entries(ARBO).map(([k, m]) => [k, { casesByYear: series(m[s.code]?.all, ARBO_FIRST[k]), neuroinvasiveByYear: series(m[s.code]?.neuroinvasive, ARBO_FIRST[k]) }])),
    arboNote: 'CDC ArboNET, human disease cases by state of residence; 1999-2025 for West Nile (2025 final as of Sep 2026). Non-neuroinvasive cases are under-reported. Years with no reported cases are 0.',
    westNileCounties: { cumulativeHumanCasesByCounty: cum, latestYearWithActivity: lastYear, countiesWithActivityLatestYear: wc.filter((r) => r.year === lastYear).map((r) => ({ fips: r.fips, activity: r.activity, human: r.human })) },
    aedesAegypti: { countiesWithRecords: (aegypti[s.code] || []).length, counties: aegypti[s.code] || [] },
    aedesAlbopictus: { countiesWithRecords: (albopictus[s.code] || []).length, counties: albopictus[s.code] || [] },
    aedesNote: 'County records of Aedes aegypti and Aedes albopictus compiled to about 2016 (Monaghan et al. 2019, PLOS Computational Biology, CC0; from the county records CDC published with Hahn et al.). A county with no record may still have the mosquito.',
    sources: ['wnv-by-state.csv', 'eee-by-state.csv', 'lac-by-state.csv', 'sle-by-state.csv', 'jcv-by-state.csv', 'pow-by-state.csv', 'wnv-by-county-yearly.csv', 'aedes-aegypti-by-county.csv', 'aedes-albopictus-by-county.csv', `noaa-tavg-${s.code}.csv`, 'population-by-state-2025.csv'].map(src),
  }
  writeFileSync(join(OUT, 'mosquitoes-us', `${s.code}.json`), JSON.stringify(mosq, null, 1) + '\n')
  const w = mosq.mosquitoBorneDisease['West Nile virus']
  nat.mosquitoes.push({ state: s.code, name: s.name, wnv2025: w.casesByYear[2025], wnv2024: w.casesByYear[2024], wnvCumulative: Object.values(w.casesByYear).reduce((a, b) => a + b, 0), aegyptiCounties: mosq.aedesAegypti.countiesWithRecords, albopictusCounties: mosq.aedesAlbopictus.countiesWithRecords, monthsAtOrAbove50F: mosq.monthsAtOrAbove50F.length })
}
writeFileSync(join(OUT, 'ticks-us', 'US.json'), JSON.stringify({ note: `${TICK_NOTE} ${LYME_NOTE}`, states: nat.ticks }, null, 1) + '\n')
writeFileSync(join(OUT, 'mosquitoes-us', 'US.json'), JSON.stringify({ note: 'CDC ArboNET West Nile virus human cases by state; Aedes county records to about 2016; NOAA 1991-2020 statewide normals.', states: nat.mosquitoes }, null, 1) + '\n')

// sanity: the existing Michigan page's figures must reproduce
const mi = JSON.parse(readFileSync(join(OUT, 'ticks-us', 'MI.json'), 'utf8'))
console.log(`MI check: blacklegged ${JSON.stringify(mi.blackleggedTick.counts)} (page says 56/14/13); Lyme 2022 ${mi.lyme.casesByYear[2022]} (page: 557); 2017-19 avg ${mi.lyme.average2017to2019} (page: 322); Kalamazoo 2023 ${mi.lyme.topCounties2023[0]?.county} ${mi.lyme.topCounties2023[0]?.cases2023} (page: 187)`)
const pa = JSON.parse(readFileSync(join(OUT, 'ticks-us', 'PA.json'), 'utf8'))
console.log(`PA: Lyme 2023 ${pa.lyme.latest}, rate ${pa.lyme.ratePer100kByYear['2023']}, blacklegged ${JSON.stringify(pa.blackleggedTick.counts)}, lone star ${JSON.stringify(pa.loneStarTick.counts)}, B. burgdorferi counties ${pa.pathogensInTicks['Borrelia burgdorferi (Lyme disease)'].countiesPresent}, climate ${pa.climate.monthlyMeanF.join(' ')}`)
const tx = JSON.parse(readFileSync(join(OUT, 'mosquitoes-us', 'TX.json'), 'utf8'))
console.log(`TX: WNV 2024 ${tx.mosquitoBorneDisease['West Nile virus'].casesByYear[2024]}, 2025 ${tx.mosquitoBorneDisease['West Nile virus'].casesByYear[2025]}, aegypti counties ${tx.aedesAegypti.countiesWithRecords}, albopictus ${tx.aedesAlbopictus.countiesWithRecords}, months >=50F ${tx.monthsAtOrAbove50F.join(',')}`)
console.log(`states with Lyme data: ${Object.keys(lymeState).length}; ixodes states: ${Object.keys(ixodes).length}; wnv states: ${Object.keys(ARBO['West Nile virus']).length}`)
