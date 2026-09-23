// Phase 1 — page-level economics. Joins the Phase 0 inventory to 90-day GSC.
//   est_monthly_earnings = CA_clicks/3 × 0.27 × topic_EPC   (brief's formula)
// CA_clicks = page clicks × site Canada share (70.0%). Per-page country from GSC drops
// 62.6% of Canadian rows and is not used. topic_EPC is the brief's table with "Other"
// read as tick (verified: Amazon does not itemise tick/ant/fogger/airpurifier).
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const GSC = JSON.parse(readFileSync(process.argv[2], 'utf8'))
const stats = JSON.parse(readFileSync(join(ROOT, 'reports/page_link_stats.json'), 'utf8'))
const CA = GSC.ca_share, CLICKOUT = 0.27
// brief's EPC table ($/Amazon click); no-data topics get the brief's $0.19 default
const EPC = { tick: 0.78, wildlife: 0.54, bedbug: 0.19, roach: 0.15, general: 0.14, wasp: 0.11, mosquito: 0.08,
  rodent: 0.07, dehumidifier: 0, flies: 0, sprayer: 0, steamer: 0, ant: 0, fogger: 0.19, airpurifier: 0.19 }

const slug = u => u.replace(/^https?:\/\/[^/]+/, '').replace(/\/$/, '') || '/'
const byPath = Object.fromEntries(GSC.pages.map(p => [slug(p.page), p]))

const rows = stats.map(s => {
  const g = byPath[s.page_path] || { clicks: 0, impressions: 0, position: 0 }
  const caClicks = g.clicks * CA
  const epc = EPC[s.topic] ?? 0.19
  const est = caClicks / 3 * CLICKOUT * epc
  const late = s.first_link_words !== null && s.first_link_words > 600
  const weakCta = s.links === 0 ? 'no links' : late ? `first link at word ${s.first_link_words}` : s.links <= 2 ? `only ${s.links} link(s)` : ''
  // opportunity = what the page could earn if its CTA matched the site's healthy pages
  const oppFactor = s.links === 0 ? 1 : late ? 0.7 : s.links <= 2 ? 0.4 : 0
  return { page_path: s.page_path, topic: s.topic, tag: s.page_default_tag, clicks_90d: g.clicks, ca_clicks_90d: Math.round(caClicks),
    impressions_90d: g.impressions, position: +(g.position || 0).toFixed(1), links: s.links, first_link_words: s.first_link_words ?? '',
    total_words: s.total_words, topic_epc: epc, est_monthly_earnings: +est.toFixed(2), weak_cta: weakCta,
    opportunity_monthly: +(caClicks / 3 * CLICKOUT * epc * oppFactor).toFixed(2) }
}).sort((a, b) => b.est_monthly_earnings - a.est_monthly_earnings)

const cols = Object.keys(rows[0])
const esc = v => `"${String(v ?? '').replace(/"/g, '""')}"`
writeFileSync(join(ROOT, 'reports/page_economics.csv'), [cols.join(','), ...rows.map(r => cols.map(c => esc(r[c])).join(','))].join('\n'))

const total = rows.reduce((a, r) => a + r.est_monthly_earnings, 0)
const top50 = rows.slice(0, 50)
const opp = [...rows].filter(r => r.weak_cta).sort((a, b) => b.opportunity_monthly - a.opportunity_monthly).slice(0, 50)
const byTopic = {}
for (const r of rows) { const t = (byTopic[r.topic] ||= { pages: 0, clicks: 0, est: 0 }); t.pages++; t.clicks += r.clicks_90d; t.est += r.est_monthly_earnings }
const mismatch = rows.filter(r => r.tag !== `buzzskito-${r.topic}-20`)

const fmt = n => '$' + n.toFixed(2)
const md = `# Phase 1 — page economics

GSC window ${GSC.window[0]} → ${GSC.window[1]} · ${GSC.total_clicks.toLocaleString()} clicks · Canada share ${(CA * 100).toFixed(1)}% (country dimension) · click-out ${CLICKOUT} · EPC per the brief with "Other" = tick.

**Modelled monthly affiliate earnings across ${rows.length} in-scope pages: ${fmt(total)}.** (Actual last-month: ~$606. The model is for RANKING pages, not forecasting totals — it applies one click-out rate to every page, and real click-out ranges 0–30% by page.)

## By topic
| topic | pages | 90d clicks | modelled $/mo | EPC |
|---|---|---|---|---|
${Object.entries(byTopic).sort((a, b) => b[1].est - a[1].est).map(([t, v]) => `| ${t} | ${v.pages} | ${v.clicks.toLocaleString()} | ${fmt(v.est)} | $${EPC[t] ?? 0.19} |`).join('\n')}

## Top 50 earners (modelled)
| # | page | topic | 90d clicks | links | 1st link @ word | $/mo |
|---|---|---|---|---|---|---|
${top50.map((r, i) => `| ${i + 1} | ${r.page_path} | ${r.topic} | ${r.clicks_90d} | ${r.links} | ${r.first_link_words} | ${fmt(r.est_monthly_earnings)} |`).join('\n')}

## Top 50 OPPORTUNITY pages — real Canadian traffic, weak or late CTA
Sorted by modelled recoverable $/mo. "Weak" = no links, first link after 600 words, or ≤2 links.
| # | page | topic | 90d clicks | weak because | recoverable $/mo |
|---|---|---|---|---|---|
${opp.map((r, i) => `| ${i + 1} | ${r.page_path} | ${r.topic} | ${r.clicks_90d} | ${r.weak_cta} | ${fmt(r.opportunity_monthly)} |`).join('\n')}

**Recoverable across the 50: ${fmt(opp.reduce((a, r) => a + r.opportunity_monthly, 0))}/mo** if their click-out were brought to the site norm.

## Tag ≠ topic — ${mismatch.length}
${mismatch.length ? mismatch.map(r => `- ${r.page_path}: topic **${r.topic}** but page tag \`${r.tag}\``).join('\n') : '(none — every page bills to its own cluster)'}

## Caveats that matter
- Per-page Canadian share is unmeasurable in GSC; every page gets the site share. A US-heavy page (chigger-bites, no-see-um-bites, the Photon Matrix review) is overstated here.
- The dead-tag topics (dehumidifier, flies, sprayer, steamer, ant) are modelled at $0 per the brief. Aug 17–Sep 15 is their seasonal trough — rodent turns on in Oct–Nov — so do not read $0 as permanent.
- 15 pages are frozen by the slug experiment until 2026-10-15; the CSV does not flag them, Phase 4 must.
`
writeFileSync(join(ROOT, 'reports/phase1_summary.md'), md)
console.log(`pages ${rows.length} | modelled ${fmt(total)}/mo | top-50 opportunity recoverable ${fmt(opp.reduce((a, r) => a + r.opportunity_monthly, 0))}/mo | tag mismatches ${mismatch.length}`)
console.log('by topic $/mo:', Object.entries(byTopic).sort((a, b) => b[1].est - a[1].est).map(([t, v]) => `${t} ${fmt(v.est)}`).join(', '))
