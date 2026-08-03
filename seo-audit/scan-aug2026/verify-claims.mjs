// Independently check the load-bearing claims from the agent report against the
// raw GSC dump. I have been given confident agent claims this session that turned
// out to be wrong, so nothing reaches Alex unverified.
import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const DIR = dirname(fileURLToPath(import.meta.url))
const d = JSON.parse(readFileSync(resolve(DIR, 'gsc_full_scan.json'), 'utf-8'))
const sum = (a, k) => a.reduce((s, r) => s + r[k], 0)
const pct = (a, b) => `${((a / b) * 100).toFixed(1)}%`

console.log('='.repeat(78))
console.log('CLAIM 1: Canada is only ~30% of clicks')
console.log('='.repeat(78))
const allClicks = sum(d.pages, 'clicks'), caClicks = sum(d.pages_ca, 'clicks')
const allImpr = sum(d.pages, 'impressions'), caImpr = sum(d.pages_ca, 'impressions')
console.log(`  all countries : ${allClicks} clicks / ${allImpr} impressions`)
console.log(`  canada only   : ${caClicks} clicks / ${caImpr} impressions`)
console.log(`  canada share  : ${pct(caClicks, allClicks)} of clicks, ${pct(caImpr, allImpr)} of impressions`)
console.log(`  VERDICT: ${Math.abs(caClicks / allClicks - 0.30) < 0.04 ? 'CONFIRMED' : 'DIFFERENT FROM CLAIM'}`)

console.log('\n' + '='.repeat(78))
console.log('CLAIM 2: local service pages rank on page 1 yet earn ~zero clicks')
console.log('='.repeat(78))
const CITIES = ['mississauga','toronto','brampton','oakville','burlington','hamilton','vaughan','richmond hill','markham','etobicoke','scarborough','north york','caledon','milton','georgetown','halton hills','king city','woodbridge','thornhill','bolton']
const SVC = /\b(control|service|services|spray|spraying|exterminat|pest control|near me|company|treatment|cost|quote)\b/i
const cityService = d.queries_ca.filter((r) => {
  const q = r.query.toLowerCase()
  return CITIES.some((c) => q.includes(c)) && SVC.test(q)
})
const buckets = [['1.0-3.5', 1, 3.5], ['3.5-5.5', 3.5, 5.5], ['5.5-10.5', 5.5, 10.5], ['10.5+', 10.5, 999]]
for (const [label, lo, hi] of buckets) {
  const b = cityService.filter((r) => r.position >= lo && r.position < hi)
  if (!b.length) continue
  console.log(`  pos ${label.padEnd(9)} ${String(b.length).padStart(4)} queries  ${String(sum(b,'impressions')).padStart(6)} impr  ${String(sum(b,'clicks')).padStart(4)} clicks  CTR ${pct(sum(b,'clicks'), sum(b,'impressions'))}`)
}
console.log(`  TOTAL city+service: ${cityService.length} queries, ${sum(cityService,'impressions')} impr, ${sum(cityService,'clicks')} clicks`)

console.log('\n  Named examples the report cited:')
for (const needle of ['milton mosquito control', 'mosquito control vaughan', 'mosquito control toronto', 'mosquito control mississauga', 'mosquito control brampton']) {
  const hit = d.queries_ca.find((r) => r.query.toLowerCase() === needle)
  console.log(hit
    ? `    "${needle}" -> pos ${hit.position}, ${hit.impressions} impr, ${hit.clicks} clicks`
    : `    "${needle}" -> not in Canadian query data`)
}

console.log('\n' + '='.repeat(78))
console.log('CLAIM 3: the http:// URL carries pure local-service demand')
console.log('='.repeat(78))
const httpRows = d.query_page.filter((r) => r.page.startsWith('http://'))
const httpsRoot = d.query_page.filter((r) => r.page === 'https://buzzskito.ca/')
console.log(`  http:// pages : ${httpRows.length} query rows, ${sum(httpRows,'impressions')} impr, ${sum(httpRows,'clicks')} clicks`)
console.log(`  https:// root : ${httpsRoot.length} query rows, ${sum(httpsRoot,'impressions')} impr, ${sum(httpsRoot,'clicks')} clicks`)
const httpLocal = httpRows.filter((r) => { const q = r.query.toLowerCase(); return CITIES.some((c) => q.includes(c)) || SVC.test(q) })
console.log(`  of the http:// rows, local/service: ${httpLocal.length} of ${httpRows.length} (${pct(httpLocal.length, httpRows.length)})`)
console.log('  top http:// queries by impressions:')
for (const r of [...httpRows].sort((a, b) => b.impressions - a.impressions).slice(0, 12)) {
  console.log(`    ${String(r.impressions).padStart(4)} impr  ${String(r.clicks).padStart(3)} clk  pos ${String(r.position).padStart(5)}  ${r.query}`)
}

console.log('\n' + '='.repeat(78))
console.log('CLAIM 4: top affiliate pages are mostly non-Canadian')
console.log('='.repeat(78))
const caPage = new Map(d.pages_ca.map((r) => [r.page, r]))
console.log('  page                                          all-CA  clicks  CA%')
for (const r of [...d.pages].sort((a, b) => b.clicks - a.clicks).slice(0, 12)) {
  const ca = caPage.get(r.page)
  const slug = r.page.replace('https://buzzskito.ca', '').slice(0, 44)
  console.log(`  ${slug.padEnd(46)}${String(r.clicks).padStart(5)}  ${String(ca?.clicks ?? 0).padStart(6)}  ${pct(ca?.clicks ?? 0, r.clicks).padStart(6)}`)
}
