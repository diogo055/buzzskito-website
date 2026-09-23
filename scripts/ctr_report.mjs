// Phase 3 — the metric we optimise from now on:
//     Amazon click-through per page = affiliate_click users on the page ÷ GSC clicks to the page
//
// Inputs
//   1. GSC page clicks: run  python <scratch>/pull_gsc90.py  (or any file with {pages:[{page,clicks}]})
//   2. GA4 affiliate clicks: export the saved Free-form exploration in GA4
//      (Rows = "Page path and screen class", Values = Active users + Event count,
//       Filter = Event name exactly matches affiliate_click, Show rows = 250)
//      as CSV to data/ga4/affiliate_clicks.csv. Columns: page path, active users, event count.
//   GA4 sees roughly 1 in 4.6 of the clicks Amazon reports (ad blockers / consent). The ratio is
//   therefore an UNDER-count in absolute terms; use it to compare pages, never to forecast dollars.
//
// Usage:  node scripts/ctr_report.mjs <gsc.json> [data/ga4/affiliate_clicks.csv]
import { readFileSync, existsSync, writeFileSync } from 'fs'

const gscPath = process.argv[2]
const gaPath = process.argv[3] || 'data/ga4/affiliate_clicks.csv'
if (!gscPath || !existsSync(gscPath)) { console.error('usage: node scripts/ctr_report.mjs <gsc.json> [ga4.csv]'); process.exit(1) }
if (!existsSync(gaPath)) { console.error(`GA4 export not found at ${gaPath} — export the affiliate_click exploration first (see header).`); process.exit(1) }

const gsc = JSON.parse(readFileSync(gscPath, 'utf8'))
const slug = u => u.replace(/^https?:\/\/[^/]+/, '').replace(/\/$/, '') || '/'
const clicks = Object.fromEntries(gsc.pages.map(p => [slug(p.page), p.clicks]))
const days = gsc.window ? (new Date(gsc.window[1]) - new Date(gsc.window[0])) / 864e5 + 1 : 28

// tolerant CSV: find the columns by header text
const lines = readFileSync(gaPath, 'utf8').split(/\r?\n/).filter(l => l.trim() && !l.startsWith('#'))
const hdr = lines[0].toLowerCase().split(',')
const ci = (re) => hdr.findIndex(h => re.test(h))
const iPath = ci(/page/), iUsers = ci(/active users|users/), iEv = ci(/event count|events/)
const ga = {}
for (const l of lines.slice(1)) {
  const c = l.split(',')
  const p = (c[iPath] || '').trim().replace(/^"|"$/g, '')
  if (!p.startsWith('/')) continue
  ga[p] = { users: +(c[iUsers] || 0), events: +(c[iEv] || 0) }
}

const rows = Object.keys(clicks).filter(p => p.startsWith('/blog/') || p.startsWith('/pest-product-guides/') || p.startsWith('/learn/'))
  .map(p => ({ page: p, gsc: clicks[p], aff_users: ga[p]?.users || 0, aff_events: ga[p]?.events || 0 }))
  .filter(r => r.gsc >= 10)
  .map(r => ({ ...r, ctr: r.gsc ? r.aff_users / r.gsc : 0 }))
  .sort((a, b) => b.gsc - a.gsc)

const site = rows.reduce((a, r) => (a.g += r.gsc, a.u += r.aff_users, a), { g: 0, u: 0 })
console.log(`window ${days} days · ${rows.length} pages with 10+ GSC clicks · site CTR (GA4 basis) ${(site.u / site.g * 100).toFixed(2)}%  (≈ ${(site.u / site.g * 4.6 * 100).toFixed(0)}% on Amazon's basis)\n`)
console.log('GSC clicks  aff users   CTR     page')
for (const r of rows.slice(0, 40)) console.log(String(r.gsc).padStart(10) + String(r.aff_users).padStart(11) + (r.ctr * 100).toFixed(1).padStart(7) + '%   ' + r.page)
const zero = rows.filter(r => r.aff_users === 0)
console.log(`\n${zero.length} pages with 10+ clicks and ZERO affiliate clicks:`)
zero.slice(0, 30).forEach(r => console.log('   ' + String(r.gsc).padStart(5) + '  ' + r.page))

const out = 'reports/ctr_report.csv'
writeFileSync(out, 'page,gsc_clicks,affiliate_users,affiliate_events,ctr\n' + rows.map(r => `${r.page},${r.gsc},${r.aff_users},${r.aff_events},${r.ctr.toFixed(4)}`).join('\n'))
console.log(`\nwrote ${out}`)
