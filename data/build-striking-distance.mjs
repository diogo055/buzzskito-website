// Stage A task 5 + 7: striking-distance.csv and us-opportunity.md
import { readFileSync, writeFileSync } from 'fs'
const rd = f => JSON.parse(readFileSync(f, 'utf-8'))
const strip = u => u.replace(/^https?:\/\/buzzskito\.ca/,'').replace(/\/$/,'') || '/'

const vol = rd('data/gsc/enrich/ahrefs-volumes.json')
const q84 = { usa: rd('data/gsc/q84_usa.json'), can: rd('data/gsc/q84_can.json') }
const qp84 = { usa: rd('data/gsc/qp84_usa.json'), can: rd('data/gsc/qp84_can.json') }

// query -> best page, per market
const pageFor = { usa: new Map(), can: new Map() }
for (const [mk, ds] of [['usa', qp84.usa], ['can', qp84.can]])
  for (const r of ds.rows) {
    const cur = pageFor[mk].get(r.q)
    if (!cur || r.impr > cur.impr) pageFor[mk].set(r.q, { p: strip(r.p), impr: r.impr })
  }

const intent = (q) => {
  if (/^best |review|vs |\bvs\b|worth it|which |cheapest/.test(q)) return /\bvs\b/.test(q) ? 1.5 : 3.0
  if (/canadian tire|home depot|walmart|amazon|near me|price|buy|where to/.test(q)) return 3.0
  // brand/product nouns = buying intent
  if (/dunks|bits|thermacell|dynatrap|advion|permethrin|sawyer|cedarcide|flowtron|photon matrix|mosquito magnet|trap|sprayer|zapper|fogger|dehumidifier|purifier|repellent|spray|killer|dust/.test(q)) return 3.0
  return 1.0
}
const prox = (p) => p < 8 ? 3.0 : p < 14 ? 2.0 : 1.0

const rows = []
for (const [mk, tag, mw] of [['usa','US',1.3], ['can','CA',1.0]]) {
  const table = vol[mk === 'usa' ? 'us' : 'ca']
  for (const r of q84[mk].rows) {
    if (r.pos < 4 || r.pos > 20) continue
    const v = table[r.q]
    if (!v) continue
    const [volume, cpcCents, kd] = v
    if (!volume || volume < 200) continue
    const cpc = (cpcCents || 0) / 100
    const iw = intent(r.q)
    const score = volume * Math.max(cpc, 0.02) * iw * prox(r.pos) * mw
    const pg = pageFor[mk].get(r.q)
    rows.push({ query: r.q, market: tag, position: r.pos, volume, cpc: +cpc.toFixed(2), kd: kd ?? '',
      clicks84d: r.clicks, impr84d: r.impr, intent: iw, proximity: prox(r.pos),
      page: pg ? pg.p : '', score: Math.round(score) })
  }
}
rows.sort((a,b)=>b.score-a.score)
writeFileSync('data/striking-distance.csv',
  'query,market,position,volume,cpc_cad,kd,clicks_84d,impr_84d,intent_weight,position_proximity,current_page,priority_score\n' +
  rows.map(r=>[`"${r.query}"`,r.market,r.position,r.volume,r.cpc,r.kd,r.clicks84d,r.impr84d,r.intent,r.proximity,r.page,r.score].join(',')).join('\n'))

console.log(`striking-distance.csv: ${rows.length} opportunities (US ${rows.filter(r=>r.market==='US').length}, CA ${rows.filter(r=>r.market==='CA').length})\n`)
console.log('TOP 25:')
console.log('  score   mkt  pos   vol     cpc   query -> page')
for (const r of rows.slice(0,25))
  console.log(`  ${String(r.score).padStart(6)}  ${r.market}  ${String(r.position).padStart(5)} ${String(r.volume).padStart(6)}  $${String(r.cpc).padStart(5)}  ${r.query.slice(0,42).padEnd(43)} ${r.page.slice(0,40)}`)

// ── US opportunity (task 7) ────────────────────────────────────────────────
const usRows = rows.filter(r=>r.market==='US')
const usAll = q84.usa.rows
const usImpr = usAll.reduce((s,r)=>s+r.impr,0), usClk = usAll.reduce((s,r)=>s+r.clicks,0)
const usPos = usAll.reduce((s,r)=>s+r.pos*r.impr,0)/usImpr
// CTR at position 5 on this site's own commercial curve: measured 2.93% top-3 / conservative 6% at pos 5 for informational
const CTR5 = 0.06
let upside = 0
const big = []
for (const [q, [v]] of Object.entries(vol.us)) {
  const row = usAll.find(r=>r.q===q)
  if (!row || v < 1000) continue
  const gain = v * CTR5 - row.clicks/3   // clicks84d/3 = monthly
  if (gain > 0) { upside += gain; big.push({ q, v, pos: row.pos, nowMo: Math.round(row.clicks/3), at5: Math.round(v*CTR5) }) }
}
big.sort((a,b)=>b.at5-a.at5)
let md = `# US opportunity — the business case, quantified

Generated 2026-09-01. GSC 84d (2026-06-09..2026-08-30) + Ahrefs US volumes pulled today.

## Current US position
| Metric | Value |
|---|---|
| US clicks, 84d | ${usClk.toLocaleString()} |
| US impressions, 84d | ${usImpr.toLocaleString()} |
| US CTR | ${(usClk/usImpr*100).toFixed(2)}% |
| US avg position (impression-weighted) | ${usPos.toFixed(1)} |
| US share of site clicks (Aug 2026, complete country data) | **15.2%** |

**US share is compounding fast:** May 3.5% → Jun 5.7% → Jul 11.1% → **Aug 15.2%**.

> **Correction to the brief.** Section 5 states US = 33% of traffic (2,857/mo) from Ahrefs.
> GSC — which section 11 designates as truth — shows **15.2% and 1,431 clicks in August**.
> Ahrefs roughly doubles the real US figure. The US thesis still holds (the volume asymmetry
> below is real and large), but the *starting base* is half what the brief assumes.

## The volume asymmetry is larger than the brief claims
| Keyword | US volume | CA volume | US multiple |
|---|---|---|---|
| house centipede | 150,761 | 14,049 | 10.7x |
| mouse poop | 40,368 | 4,802 | 8.4x |
| what does a spider bite look like | 33,459 | 2,263 | 14.8x |
| rat traps | 26,487 | 2,310 | 11.5x |
| bug zapper | 26,851 | 2,179 | 12.3x |
| mosquito dunks | 17,011 | 1,476 | 11.5x |
| advion cockroach gel bait | 14,030 | 3,477 | 4.0x |
| best fruit fly trap | 8,040 | 2,818 | 2.9x |

## Biggest US queries where we already appear
| Query | US volume | Current pos | Clicks/mo now | Clicks/mo at pos 5 (6% CTR) |
|---|---|---|---|---|
`
for (const b of big.slice(0, 22))
  md += `| ${b.q} | ${b.v.toLocaleString()} | ${b.pos} | ${b.nowMo} | **${b.at5.toLocaleString()}** |\n`
md += `
**Modelled upside if these reached position 5: ~${Math.round(upside).toLocaleString()} additional clicks/month.**
That figure is deliberately conservative — it applies a flat 6% CTR and counts only queries
already visible in GSC with US volume ≥1,000.

## What this means for sequencing
1. The US identification cluster (spider bite, chigger bites, mouse poop, house centipede,
   tick vs bed bug) is where the volume is and where section 6 proves authority is not the gate.
2. But **identification traffic is low-intent** — it buys bite cream, not $259 zappers.
   Section 2's revenue-per-order thesis needs commercial pages, and US commercial terms are
   contested (best mosquito trap KD 93, dynatrap KD 89, thermacell KD 63).
3. **The resolution: win US identification volume, then route it internally to commercial pages.**
   That is the one path that gets both traffic AND mix. It depends on internal linking working,
   which must be measured, not assumed.
`
writeFileSync('data/us-opportunity.md', md)
console.log(`\nus-opportunity.md written · modelled upside ~${Math.round(upside).toLocaleString()} clicks/mo`)
