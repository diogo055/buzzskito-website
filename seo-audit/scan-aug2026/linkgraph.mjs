// Build the site's internal link graph and join it to GSC performance.
//
// The mosquito-device cluster fix worked because two high-earning pages had
// almost no inbound internal links and every anchor used a modified phrasing.
// That is a PATTERN, not a one-off. This finds every other instance of it, plus
// the related structural problems, across all 500 routes.
//
//   node linkgraph.mjs

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { dirname, resolve, join } from 'path'
import { fileURLToPath } from 'url'

const DIR = dirname(fileURLToPath(import.meta.url))
const REPO = resolve(DIR, '..', '..')
const APP = join(REPO, 'app')

// ── 1. walk every route ────────────────────────────────────────────────────
function routes(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) routes(p, acc)
    else if (e === 'page.tsx') acc.push(p)
  }
  return acc
}
const files = routes(APP)
const slugOf = (f) => {
  const rel = f.slice(APP.length).replace(/\\/g, '/').replace(/\/page\.tsx$/, '')
  return rel === '' ? '/' : rel
}

// ── 2. extract outbound internal links + anchors ───────────────────────────
//
// An earlier version of this used one combined regex that required the anchor
// text and its closing tag within 120 chars of the href. It matched only ~12% of
// links (832 sitewide against a true 6,912) and reported the site's best pages as
// orphans. Two separate passes now: hrefs are counted exhaustively, anchors are a
// best-effort extra. NEVER let anchor extraction gate whether a link is counted.
const HREF_RE = /href=(?:["'](\/[^"'#?]*)["']|\{`(\/[^`#?]*)`\}|\{["'](\/[^"'#?]*)["']\})/g
const ANCHOR_RE = /href=["'](\/[^"'#?]*)["'][^>]*>([^<]{2,90})</g

const graph = new Map()   // slug -> { out:Set, anchors:[{to,text}], words, file }

for (const f of files) {
  const src = readFileSync(f, 'utf-8')
  const from = slugOf(f)
  const out = new Set(), anchors = []

  let m
  while ((m = HREF_RE.exec(src))) {
    const raw = m[1] || m[2] || m[3]
    if (!raw) continue
    const to = raw.replace(/\/$/, '') || '/'
    if (to === from) continue
    out.add(to)
  }
  while ((m = ANCHOR_RE.exec(src))) {
    const to = m[1].replace(/\/$/, '') || '/'
    const text = m[2].replace(/\{[^}]*\}/g, '').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim()
    if (to !== from && text.length > 2) anchors.push({ to, text: text.slice(0, 70) })
  }
  graph.set(from, { out, anchors, words: (src.match(/[A-Za-z]{3,}/g) || []).length, file: f.slice(REPO.length + 1) })
}

// Sanity gate: if the parsed total is wildly below a raw href count, the regex is
// broken again and every downstream conclusion is garbage. Fail loudly.
const parsedTotal = [...graph.values()].reduce((s, d) => s + d.out.size, 0)
const rawTotal = files.reduce((s, f) => s + (readFileSync(f, 'utf-8').match(/href="\//g) || []).length, 0)
if (parsedTotal < rawTotal * 0.5) {
  console.error(`PARSER BROKEN: parsed ${parsedTotal} unique links vs ${rawTotal} raw href occurrences. Aborting.`)
  process.exit(1)
}
console.log(`parser check: ${parsedTotal} unique internal links parsed, ${rawTotal} raw href="/ occurrences (dupes expected)\n`)

// ── 3. invert to inbound ───────────────────────────────────────────────────
const inbound = new Map()
for (const [from, d] of graph) {
  for (const to of d.out) {
    if (!inbound.has(to)) inbound.set(to, new Set())
    inbound.get(to).add(from)
  }
}
const anchorsTo = new Map()
for (const [, d] of graph) {
  for (const a of d.anchors) {
    if (!anchorsTo.has(a.to)) anchorsTo.set(a.to, [])
    anchorsTo.get(a.to).push(a.text)
  }
}

// ── 4. join GSC ────────────────────────────────────────────────────────────
const gsc = JSON.parse(readFileSync(resolve(DIR, 'gsc_full_scan.json'), 'utf-8'))
const perf = new Map()
for (const r of gsc.pages) {
  if (!r.page.startsWith('https://buzzskito.ca')) continue
  const s = r.page.replace('https://buzzskito.ca', '').replace(/\/$/, '') || '/'
  perf.set(s, r)
}

const rows = [...graph.keys()].map((s) => {
  const p = perf.get(s)
  return {
    slug: s,
    clicks: p?.clicks ?? 0,
    impressions: p?.impressions ?? 0,
    ctr: p ? +(p.ctr * 100).toFixed(2) : 0,
    position: p?.position ?? null,
    inbound: inbound.get(s)?.size ?? 0,
    outbound: graph.get(s).out.size,
    words: graph.get(s).words,
  }
})

const out = {}

// ── A. LINK-STARVED EARNERS — the pattern that just worked ────────────────
out.starved_earners = rows
  .filter((r) => r.impressions >= 800 && r.inbound <= 4)
  .sort((a, b) => b.impressions - a.impressions)
  .slice(0, 60)

// ── B. ORPHANS — nothing points at them ───────────────────────────────────
out.orphans = rows.filter((r) => r.inbound === 0).sort((a, b) => b.impressions - a.impressions)

// ── C. EQUITY SINKS — pages that earn nothing and link nowhere useful ─────
out.equity_sinks = rows
  .filter((r) => r.clicks <= 1 && r.impressions >= 200 && r.outbound <= 6)
  .sort((a, b) => b.impressions - a.impressions).slice(0, 60)

// ── D. CANNIBALISATION — 2+ of our pages ranking for the same query ───────
const byQuery = new Map()
for (const r of gsc.query_page) {
  if (r.impressions < 60) continue
  if (!byQuery.has(r.query)) byQuery.set(r.query, [])
  byQuery.get(r.query).push(r)
}
out.cannibalisation = [...byQuery.entries()]
  .filter(([, v]) => v.length > 1)
  .map(([q, v]) => ({
    query: q,
    totalImpr: v.reduce((s, r) => s + r.impressions, 0),
    totalClicks: v.reduce((s, r) => s + r.clicks, 0),
    pages: v.sort((a, b) => a.position - b.position).map((r) => ({
      page: r.page.replace('https://buzzskito.ca', ''),
      pos: r.position, impr: r.impressions, clicks: r.clicks,
    })),
  }))
  .sort((a, b) => b.totalImpr - a.totalImpr).slice(0, 50)

// ── E. HEAD-TERM GAP — we rank far better for a modified variant ──────────
// e.g. ranks 5.4 for "mosquito fogger canada" but 9.5 for "mosquito fogger"
const qmap = new Map(gsc.queries.map((r) => [r.query, r]))
const headGaps = []
for (const [q, r] of qmap) {
  if (r.impressions < 150) continue
  for (const suffix of [' canada', ' ontario', ' review', ' reviews', ' near me', ' toronto']) {
    const mod = qmap.get(q + suffix)
    if (mod && mod.position + 2.5 < r.position) {
      headGaps.push({
        head: q, headPos: r.position, headImpr: r.impressions, headClicks: r.clicks,
        modified: q + suffix, modPos: mod.position, modImpr: mod.impressions,
        gap: +(r.position - mod.position).toFixed(2),
      })
    }
  }
}
out.head_term_gaps = headGaps.sort((a, b) => b.headImpr - a.headImpr).slice(0, 50)

// ── F. TOP EARNERS and their link support, for context ────────────────────
out.top_earners = rows.sort((a, b) => b.clicks - a.clicks).slice(0, 40)
  .map((r) => ({ ...r, anchors: [...new Set(anchorsTo.get(r.slug) || [])].slice(0, 6) }))

// ── G. TOTALS ─────────────────────────────────────────────────────────────
out.totals = {
  routes: rows.length,
  withImpressions: rows.filter((r) => r.impressions > 0).length,
  orphans: out.orphans.length,
  starvedEarners: out.starved_earners.length,
  medianInbound: rows.map((r) => r.inbound).sort((a, b) => a - b)[Math.floor(rows.length / 2)],
  totalInternalLinks: [...graph.values()].reduce((s, d) => s + d.out.size, 0),
  cannibalisedQueries: out.cannibalisation.length,
  headTermGaps: out.head_term_gaps.length,
}

for (const [k, v] of Object.entries(out)) writeFileSync(resolve(DIR, `link_${k}.json`), JSON.stringify(v, null, 1))
console.log(JSON.stringify(out.totals, null, 1))
console.log('\nTOP LINK-STARVED EARNERS (high impressions, <=4 inbound links)')
for (const r of out.starved_earners.slice(0, 22))
  console.log(`  ${String(r.impressions).padStart(6)} impr ${String(r.clicks).padStart(4)} clk  in:${String(r.inbound).padStart(2)}  pos ${String(r.position ?? '-').padStart(5)}  ${r.slug}`)
console.log('\nWORST CANNIBALISATION')
for (const c of out.cannibalisation.slice(0, 10))
  console.log(`  ${String(c.totalImpr).padStart(5)} impr ${String(c.totalClicks).padStart(3)} clk  "${c.query}"  <- ${c.pages.length} pages: ${c.pages.map((p) => p.page.split('/').pop() + '@' + p.pos).join(', ').slice(0, 96)}`)
console.log('\nHEAD-TERM GAPS (we rank better for the modified query)')
for (const g of out.head_term_gaps.slice(0, 12))
  console.log(`  "${g.head}" pos ${g.headPos} (${g.headImpr} impr) vs "${g.modified}" pos ${g.modPos}  gap ${g.gap}`)
