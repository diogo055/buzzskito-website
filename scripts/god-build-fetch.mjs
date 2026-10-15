// Downloads the public data the scheduled state and province pages are built from, into
// data/god-build/raw/ (git-ignored), and records each file in data/god-build/sources.json
// (address, size, SHA-256, date, terms). Re-run each spring when CDC posts a new year, and
// each September for CDC's final West Nile counts; then rebuild the packets.
//
//   node scripts/god-build-fetch.mjs            fetch what is missing
//   node scripts/god-build-fetch.mjs --refresh  fetch everything again
//
// cdc.gov refuses some browser-like User-Agents; plain Node fetch is accepted.
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { createHash } from 'crypto'

const ROOT = process.cwd()
const RAW = join(ROOT, 'data', 'god-build', 'raw')
const LEDGER = join(ROOT, 'data', 'god-build', 'sources.json')
const REFRESH = process.argv.includes('--refresh')
const CDC = 'https://www.cdc.gov'
const VIZ = 'https://www.cdc.gov/wcms/vizdata/live/ncezid_dvbd'
const CDC_TERMS = 'CDC web content, mostly public domain; credit CDC, no endorsement implied, do not change the substance (cdc.gov/other/agencymaterials.html)'

// [file name in raw/, url, publisher, what it is, terms]
const FILES = [
  ['lyme-cases-by-state.csv', `${CDC}/lyme/media/files/2025/02/2023_CaseIncid-Lyme-Disease-Cases-by-State-or-Locality.csv`, 'CDC', 'Lyme disease cases by state, 2008-2023 (confirmed + probable)', CDC_TERMS],
  ['lyme-rates-by-state.csv', `${CDC}/lyme/media/files/2025/02/2023_CaseIncid-Lyme-Disease-Rates-by-State-or-Locality.csv`, 'CDC', 'Lyme disease incidence per 100,000 by state, 2010-2023', CDC_TERMS],
  ['lyme-cases-by-county.csv', `${CDC}/lyme/media/files/2025/02/LD_Case_Counts_by_County_2023_updated.csv`, 'CDC', 'Lyme disease cases by county of residence, 2001-2023', CDC_TERMS],
  ['tickborne-by-county-2019-2022.xlsx', `${CDC}/ticks/media/files/2024/05/AllTBD2022_Public.xlsx`, 'CDC', 'Seven tickborne diseases by county of residence, 2019-2022 summed', CDC_TERMS],
  ['anaplasmosis-incidence-by-state-2023.xlsx', `${CDC}/anaplasmosis/media/files/2025/06/Annual-incidence-per-million-population-of-reported-anaplasmosis-geography-US-2023.xlsx`, 'CDC', 'Anaplasmosis incidence per million by state, 2023', CDC_TERMS],
  ['ehrlichiosis-incidence-by-state-2023.xlsx', `${CDC}/ehrlichiosis/media/files/2025/06/Annual-incidence-per-million-reported-E.-chaffeensis-ehrlichiosis-geography-US-2023.xlsx`, 'CDC', 'E. chaffeensis ehrlichiosis incidence per million by state, 2023', CDC_TERMS],
  ['sfr-incidence-by-state-2023.xlsx', `${CDC}/rocky-mountain-spotted-fever/media/files/2025/06/Annual-incidence-of-reported-spotted-fever-rickettsiosis-geography-United-States-2023.xlsx`, 'CDC', 'Spotted fever rickettsiosis incidence per million by state, 2023', CDC_TERMS],
  ['tularemia-by-state-2023.csv', `${CDC}/tularemia/media/files/2025/03/Tularemia-cases-by-state_2023.csv`, 'CDC', 'Tularemia cases by state, 2023', CDC_TERMS],
  ['ticks-ixodes-by-county.xlsx', `${CDC}/ticks/media/files/2026/04/Public_Use_Ixodes_County_Table_2026_03252026.xlsx`, 'CDC (ArboNET Tick Module)', 'Blacklegged and western blacklegged tick status by county, through Dec 2025', 'CDC data use agreement sheet inside the workbook: read before publishing derived tables'],
  ['ticks-ixodes-pathogens-by-county.xlsx', `${CDC}/ticks/media/files/2026/04/Public_Use_Ixodes_Pathogens_County_Table_2026_04292026.xlsx`, 'CDC (ArboNET Tick Module)', 'Pathogens found in host-seeking Ixodes ticks by county, through Dec 2025', 'CDC data use agreement sheet inside the workbook: read before publishing derived tables'],
  ['ticks-american-dog-by-county.xlsx', `${CDC}/ticks/media/files/2026/07/DVA-Surv-Map-Data-2025_Final.xlsx`, 'CDC', 'American dog tick status by county, through 2025', 'check the workbook for a data use sheet'],
  ['ticks-lone-star-by-county.xlsx', `${CDC}/ticks/media/files/2026/05/2025-lone-star-tick-surveillance-map-data.xlsx`, 'CDC', 'Lone star tick status by county, through 2025', 'check the workbook for a data use sheet'],
  ['wnv-by-state.csv', `${VIZ}/WNV/wnv_hum_historic%20-%20Historic%20Sta.csv`, 'CDC (ArboNET)', 'West Nile virus human disease by state and year, 1999-2025', CDC_TERMS],
  ['eee-by-state.csv', `${VIZ}/EEE/eee_hum_historic%20-%20Historic%20Sta.csv`, 'CDC (ArboNET)', 'Eastern equine encephalitis by state and year, 2003-2025', CDC_TERMS],
  ['lac-by-state.csv', `${VIZ}/LAC/lac_hum_historic%20-%20Historic%20Sta.csv`, 'CDC (ArboNET)', 'La Crosse encephalitis by state and year, 2003-2025', CDC_TERMS],
  ['sle-by-state.csv', `${VIZ}/SLE/sle_hum_historic%20-%20Historic%20Sta.csv`, 'CDC (ArboNET)', 'St. Louis encephalitis by state and year, 2003-2025', CDC_TERMS],
  ['jcv-by-state.csv', `${VIZ}/JCV/jcv_hum_historic%20-%20Historic%20Sta.csv`, 'CDC (ArboNET)', 'Jamestown Canyon virus by state and year, 2011-2025', CDC_TERMS],
  ['pow-by-state.csv', `${VIZ}/POW/pow_hum_historic%20-%20Historic%20Sta.csv`, 'CDC (ArboNET)', 'Powassan virus by state and year, 2004-2025', CDC_TERMS],
  ['wnv-by-county-yearly.csv', `${VIZ}/WNV/wnv_hist_hum_nonhum_yearly.csv`, 'CDC (ArboNET)', 'West Nile virus human and non-human activity by county and year', CDC_TERMS],
  ['population-by-state-2025.csv', 'https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/state/totals/NST-EST2025-ALLDATA.csv', 'US Census Bureau', 'State population estimates, Vintage 2025', 'US federal work'],
  ['population-by-county-2025.csv', 'https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/counties/totals/co-est2025-alldata.csv', 'US Census Bureau', 'County population estimates, July 1 2020-2025 (Vintage 2025)', 'US federal work'],
  ['ne_50m_admin_1.geojson', 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_1_states_provinces.geojson', 'Natural Earth', 'Admin-1 states and provinces, 1:50m (for the Canada map, scripts/build-geo-canada.mjs)', 'Public domain'],
  ['aedes-aegypti-by-county.csv', 'https://journals.plos.org/ploscompbiol/article/file?type=supplementary&id=10.1371/journal.pcbi.1007369.s006', 'Monaghan et al. 2019, PLOS Computational Biology', 'Aedes aegypti county records (to about 2016) and model', 'CC0'],
  ['aedes-albopictus-by-county.csv', 'https://journals.plos.org/ploscompbiol/article/file?type=supplementary&id=10.1371/journal.pcbi.1007369.s007', 'Monaghan et al. 2019, PLOS Computational Biology', 'Aedes albopictus county records (to about 2016) and model', 'CC0'],
]
// NOAA Climate at a Glance, statewide monthly mean temperature (public domain). NCEI state codes.
const NCEI = { AL: 1, AZ: 2, AR: 3, CA: 4, CO: 5, CT: 6, DE: 7, FL: 8, GA: 9, ID: 10, IL: 11, IN: 12, IA: 13, KS: 14, KY: 15, LA: 16, ME: 17, MD: 18, MA: 19, MI: 20, MN: 21, MS: 22, MO: 23, MT: 24, NE: 25, NV: 26, NH: 27, NJ: 28, NM: 29, NY: 30, NC: 31, ND: 32, OH: 33, OK: 34, OR: 35, PA: 36, RI: 37, SC: 38, SD: 39, TN: 40, TX: 41, UT: 42, VT: 43, VA: 44, WA: 45, WV: 46, WI: 47, WY: 48, AK: 50, HI: 51 }
for (const [st, code] of Object.entries(NCEI)) FILES.push([`noaa-tavg-${st}.csv`, `https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/time-series/${code}/tavg/1/0/1895-2026/data.csv`, 'NOAA NCEI Climate at a Glance', `Statewide monthly mean temperature, ${st}`, 'Public domain (NCEI open data policy)'])

mkdirSync(RAW, { recursive: true })
const ledger = existsSync(LEDGER) ? JSON.parse(readFileSync(LEDGER, 'utf8')) : { _readme: '', files: [] }
ledger._readme = 'Every public data file the scheduled pages are built from: where it came from, when, its size and SHA-256, and its terms. Written by scripts/god-build-fetch.mjs; the files themselves are in data/god-build/raw/ (not committed).'
const byFile = Object.fromEntries(ledger.files.map((f) => [f.file, f]))
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
let got = 0, skipped = 0, failed = 0
for (const [file, url, publisher, what, terms] of FILES) {
  const dest = join(RAW, file)
  if (!REFRESH && existsSync(dest) && byFile[file]) { skipped++; continue }
  try {
    const res = await fetch(url, { redirect: 'follow' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    if (buf.length < 50) throw new Error(`only ${buf.length} bytes`)
    writeFileSync(dest, buf)
    byFile[file] = { file, url, publisher, what, terms, bytes: buf.length, sha256: createHash('sha256').update(buf).digest('hex'), downloadedOn: new Date().toISOString().slice(0, 10) }
    got++
    console.log(`ok   ${file} (${(buf.length / 1024).toFixed(0)} KB)`)
  } catch (e) {
    failed++
    console.log(`FAIL ${file}: ${e.message} (${url})`)
  }
  await sleep(400)
}
ledger.files = Object.values(byFile).sort((a, b) => a.file.localeCompare(b.file))
writeFileSync(LEDGER, JSON.stringify(ledger, null, 1) + '\n')
console.log(`downloaded ${got}, already had ${skipped}, failed ${failed}; ledger: data/god-build/sources.json`)
