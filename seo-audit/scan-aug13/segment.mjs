// Turn the 13MB GSC dump into small, exact, agent-readable slices.
//
// Everything numeric is computed HERE, deterministically, so the analysis agents
// never have to do arithmetic on a large blob (which is where fabricated numbers
// come from). Agents get judgment work; this file owns the maths.
//
//   node segment.mjs

import { readFileSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const DIR = dirname(fileURLToPath(import.meta.url))
const d = JSON.parse(readFileSync(resolve(DIR, 'gsc_full_scan.json'), 'utf-8'))

// Industry CTR-by-position curve. Deliberately CONSERVATIVE — a low bar means
// a flagged gap is a real gap, not curve-fitting optimism.
const EXPECTED = (p) =>
  p <= 1.5 ? 0.26 : p <= 2.5 ? 0.145 : p <= 3.5 ? 0.10 : p <= 4.5 ? 0.073 :
  p <= 5.5 ? 0.055 : p <= 6.5 ? 0.042 : p <= 7.5 ? 0.033 : p <= 8.5 ? 0.027 :
  p <= 9.5 ? 0.023 : p <= 10.5 ? 0.020 : p <= 15 ? 0.013 : p <= 20 ? 0.008 : 0.003

const lost = (r) => Math.max(0, r.impressions * (EXPECTED(r.position) - r.ctr))

// ── classifiers ────────────────────────────────────────────────────────────
const RETAILERS = /canadian tire|home depot|walmart|costco|rona|lowes|lowe's|amazon|princess auto|canadiantire|best buy|shoppers|no ?frills|loblaws/i
// Factual one-liners Google answers in place — the click never existed to win.
const ZERO_CLICK = /^(what|when|how|why|do|does|can|is|are|will|which)\b.*\b(look like|last|mean|work|active|long|often|many|much|temperature|time|size|big|small|dangerous|harmful|safe)\b/i

const CITIES = ['mississauga','toronto','brampton','oakville','burlington','hamilton','vaughan','richmond hill','markham','etobicoke','scarborough','north york','caledon','milton','georgetown','halton hills','king city','woodbridge','thornhill','ajax','pickering','whitby','oshawa','aurora','newmarket','stouffville','bolton','gta','ontario']
const SERVICE_INTENT = /\b(control|service|services|spray|spraying|exterminat|pest control|near me|company|companies|treatment|removal|cost|price|pricing|quote|hire|professional)\b/i
const isLocal = (q) => CITIES.some((c) => q.includes(c))
const isServiceIntent = (q) => SERVICE_INTENT.test(q)

function classify(r) {
  const q = r.query.toLowerCase()
  if (RETAILERS.test(q)) return 'RETAILER_DEAD'
  if (ZERO_CLICK.test(q)) return 'AIO_ZERO_CLICK'
  return 'FIXABLE'
}

const round = (o) => ({ ...o, ctr: +(o.ctr * 100).toFixed(2), lostClicks: Math.round(o.lostClicks ?? 0) })
const compact = (r) => ({
  q: r.query, page: r.page ? r.page.replace('https://buzzskito.ca', '') : undefined,
  clicks: r.clicks, impr: r.impressions, ctr: +(r.ctr * 100).toFixed(2), pos: r.position,
  lost: Math.round(lost(r)), type: classify(r),
})

const out = {}

// ── 1. CTR GAPS — where positions predict clicks we aren't getting ─────────
const gaps = d.query_page
  .filter((r) => r.impressions >= 150 && r.position <= 10.5)
  .map((r) => ({ ...r, _lost: lost(r) }))
  .filter((r) => r._lost >= 15)
  .sort((a, b) => b._lost - a._lost)
  .map(compact)

out.ctr_gaps_fixable = gaps.filter((g) => g.type === 'FIXABLE').slice(0, 120)
out.ctr_gaps_retailer_dead = gaps.filter((g) => g.type === 'RETAILER_DEAD').slice(0, 40)
out.ctr_gaps_aio_zero_click = gaps.filter((g) => g.type === 'AIO_ZERO_CLICK').slice(0, 60)

// ── 2. STRIKING DISTANCE — page 2/3 with real demand behind it ─────────────
out.striking_distance = d.query_page
  .filter((r) => r.position > 10.5 && r.position <= 25 && r.impressions >= 120)
  .sort((a, b) => b.impressions - a.impressions)
  .slice(0, 120).map(compact)

// ── 3. LOCAL / SERVICE SIDE — the spray business, Canada only ──────────────
const ca = d.queries_ca
out.local_queries = ca
  .filter((r) => isLocal(r.query.toLowerCase()) || isServiceIntent(r.query.toLowerCase()))
  .filter((r) => r.impressions >= 20)
  .sort((a, b) => b.impressions - a.impressions)
  .slice(0, 200).map(compact)

out.local_summary = (() => {
  const local = ca.filter((r) => isLocal(r.query.toLowerCase()))
  const svc = ca.filter((r) => isServiceIntent(r.query.toLowerCase()))
  const both = ca.filter((r) => isLocal(r.query.toLowerCase()) && isServiceIntent(r.query.toLowerCase()))
  const sum = (a, k) => a.reduce((s, r) => s + r[k], 0)
  return {
    canada_total: { queries: ca.length, clicks: sum(ca, 'clicks'), impressions: sum(ca, 'impressions') },
    city_named: { queries: local.length, clicks: sum(local, 'clicks'), impressions: sum(local, 'impressions') },
    service_intent: { queries: svc.length, clicks: sum(svc, 'clicks'), impressions: sum(svc, 'impressions') },
    city_AND_service: { queries: both.length, clicks: sum(both, 'clicks'), impressions: sum(both, 'impressions') },
    note: 'GSC anonymises low-volume queries, so query-level clicks are a ~38% sample of the true total. Use for RELATIVE comparison, never as an absolute.',
  }
})()

// ── 4. PAGE MOVEMENT — what Google promoted and demoted ────────────────────
const prev = new Map(d.pages_prev.map((r) => [r.page, r]))
out.page_movement = d.pages
  .filter((r) => r.impressions >= 400)
  .map((r) => {
    const p = prev.get(r.page)
    return {
      page: r.page.replace('https://buzzskito.ca', ''),
      clicks: r.clicks, prevClicks: p?.clicks ?? 0, delta: r.clicks - (p?.clicks ?? 0),
      impr: r.impressions, prevImpr: p?.impressions ?? 0,
      ctr: +(r.ctr * 100).toFixed(2), pos: r.position, prevPos: p?.position ?? null,
      lost: Math.round(lost(r)),
    }
  })
  .sort((a, b) => b.lost - a.lost)
out.page_movement_biggest_losers = [...out.page_movement].sort((a, b) => a.delta - b.delta).slice(0, 25)
out.page_movement_biggest_winners = [...out.page_movement].sort((a, b) => b.delta - a.delta).slice(0, 25)

// ── 5. DEAD WEIGHT — indexed, shown, never clicked ─────────────────────────
out.zero_click_pages = d.pages
  .filter((r) => r.clicks <= 2 && r.impressions >= 300)
  .sort((a, b) => b.impressions - a.impressions)
  .slice(0, 60)
  .map((r) => ({ page: r.page.replace('https://buzzskito.ca', ''), clicks: r.clicks, impr: r.impressions, ctr: +(r.ctr * 100).toFixed(2), pos: r.position }))

// ── 6. TOTALS ──────────────────────────────────────────────────────────────
const sum = (a, k) => a.reduce((s, r) => s + r[k], 0)
out.totals = {
  windows: { current: d.current_window, previous: d.previous_window },
  pages_current: { rows: d.pages.length, clicks: sum(d.pages, 'clicks'), impressions: sum(d.pages, 'impressions') },
  pages_previous: { rows: d.pages_prev.length, clicks: sum(d.pages_prev, 'clicks'), impressions: sum(d.pages_prev, 'impressions') },
  total_recoverable_clicks_fixable: Math.round(out.ctr_gaps_fixable.reduce((s, r) => s + r.lost, 0)),
  total_clicks_locked_in_retailer_dead: Math.round(out.ctr_gaps_retailer_dead.reduce((s, r) => s + r.lost, 0)),
  total_clicks_locked_in_aio: Math.round(out.ctr_gaps_aio_zero_click.reduce((s, r) => s + r.lost, 0)),
}

for (const [k, v] of Object.entries(out)) {
  writeFileSync(resolve(DIR, `seg_${k}.json`), JSON.stringify(v, null, 1))
}
console.log(JSON.stringify(out.totals, null, 1))
console.log('\nsegments written:')
for (const k of Object.keys(out)) {
  const n = Array.isArray(out[k]) ? `${out[k].length} rows` : 'summary'
  console.log(`  seg_${k}.json  ${n}`)
}
console.log('\nLOCAL SUMMARY:'); console.log(JSON.stringify(out.local_summary, null, 1))
