// Phase 1 — classify every page. Reads the full GSC exports (no sampling).
//
// Method note that matters: metrics come from the PAGE-dimension pull, which is complete.
// Intent comes from the PAGE+QUERY pull, which GSC prunes (measured at ~59% of clicks missing
// on one window). Using the pruned pull for CTR residuals would understate every row, so it is
// used only to read which queries a page ranks for, never to compute a rate.
import fs from 'node:fs'

const TOOL = 'C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/tool-results/'
const QFILE = TOOL + 'mcp-gscServer-get_advanced_search_analytics-1788894476637.txt'

function parsePipe(path, cols) {
  let t = fs.readFileSync(path, 'utf8')
  try { const j = JSON.parse(t); if (j && typeof j.result === 'string') t = j.result } catch {}
  const out = []
  for (const line of t.split('\n')) {
    const m = line.split('|').map(s => s.trim())
    if (m.length !== cols) continue
    if (isNaN(+m[cols - 4])) continue
    out.push(m)
  }
  return out
}

// --- queries: Page | Query | Clicks | Impressions | CTR | Position
const qrows = []
for (const m of parsePipe(QFILE, 6)) {
  const [page, query, clicks, impressions, , position] = m
  if (query === 'Query') continue
  qrows.push({ page, query, clicks: +clicks, impressions: +impressions, position: parseFloat(position) })
}

// --- pages: complete metrics
const pages = JSON.parse(fs.readFileSync('data/gsc180/pages.json', 'utf8'))

// The brief's own CTR-by-position benchmark
const BENCH = { 2: 5.69, 3: 5.40, 4: 5.30, 5: 2.74, 6: 2.08, 7: 1.45, 8: 1.09, 9: 0.83, 10: 0.35 }
const expectedCtr = (pos) => {
  const p = Math.round(pos)
  if (p <= 2) return BENCH[2]
  if (p >= 10) return BENCH[10]
  return BENCH[p]
}

const BRANDS = /thermacell|dynatrap|advion|ortho|raid|wilson|doktor doom|summit|sawyer|natrapel|wondercide|victor|tomcat|terro|combat|zevo|katchy|flowtron|dupray|vapamore|zappbug|packtite|crossfire|cimexa|ecoraider|premo|harris|orbit|rescue|hot shot|spectracide|black flag|bti|picaridin|deet|permethrin/i
const COMMERCIAL = /\b(best|buy|price|prices|vs|review|reviews|where to|cheapest|deal)\b|canadian tire|home depot|amazon|walmart|costco|rona/i
const QUESTION = /^(how|what|why|when|where|do|does|can|are|is)\b/i

// group queries by page
const byPage = new Map()
for (const r of qrows) {
  if (!byPage.has(r.page)) byPage.set(r.page, [])
  byPage.get(r.page).push(r)
}

const rows = []
for (const p of pages) {
  const qs = (byPage.get(p.page) || []).sort((a, b) => b.impressions - a.impressions)
  const top = qs.slice(0, 10)
  const topQuery = top[0]?.query || ''

  // brief's rule: commercial if top queries carry a brand or a commercial modifier
  const commercial = top.some(q => BRANDS.test(q.query) || COMMERCIAL.test(q.query))
  const intent = commercial ? 'commercial' : (QUESTION.test(topQuery) ? 'question' : 'other')

  const slug = p.page.replace(/^https?:\/\/buzzskito\.ca/, '')
  const file = slug.startsWith('/blog/') ? `app/blog/${slug.replace('/blog/', '').replace(/\/$/, '')}/page.tsx` : `app${slug === '/' ? '' : slug}/page.tsx`
  let hasAff = '', wc = ''
  if (fs.existsSync(file)) {
    const src = fs.readFileSync(file, 'utf8')
    hasAff = /BuyLink|AmazonLink|StickyBuyBar|AwardRow|AwardCard|TopPick/.test(src) ? 'yes' : 'no'
    wc = String(src.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(w => /[a-zA-Z]{3,}/.test(w)).length)
  } else {
    hasAff = 'PAGE-NOT-ON-DISK'
  }

  const actual = p.impressions ? (100 * p.clicks / p.impressions) : 0
  const exp = expectedCtr(p.position)
  const residual = actual - exp

  rows.push({
    url: slug,
    clicks: p.clicks,
    impressions: p.impressions,
    position: +p.position.toFixed(1),
    actual_ctr: +actual.toFixed(3),
    expected_ctr: exp,
    ctr_residual: +residual.toFixed(3),
    lost_clicks: Math.round((residual / 100) * p.impressions),
    intent,
    top_query: topQuery.replace(/,/g, ' '),
    queries_seen: qs.length,
    has_affiliate_link: hasAff,
    word_count: wc,
    benchmark_covers_position: p.position >= 1.5 && p.position <= 10.5 ? 'yes' : 'no',
  })
}

rows.sort((a, b) => a.lost_clicks - b.lost_clicks)
const head = Object.keys(rows[0])
fs.writeFileSync('docs/audit/page-classification.csv',
  head.join(',') + '\n' + rows.map(r => head.map(k => r[k]).join(',')).join('\n'))

// ---- summary
const by = (k) => { const g = {}; for (const r of rows) (g[r[k]] = g[r[k]] || []).push(r); return g }
const g = by('intent')
console.log(`Parsed ${qrows.length.toLocaleString()} page+query rows and ${pages.length} pages.`)
console.log(`Wrote docs/audit/page-classification.csv — ${rows.length} rows.\n`)
console.log('intent'.padEnd(12) + 'pages'.padStart(7) + 'impressions'.padStart(13) + 'clicks'.padStart(8) + 'CTR'.padStart(8) + 'avg residual'.padStart(14) + 'lost clicks'.padStart(13))
for (const [k, v] of Object.entries(g).sort((a, b) => b[1].length - a[1].length)) {
  const i = v.reduce((a, r) => a + r.impressions, 0), c = v.reduce((a, r) => a + r.clicks, 0)
  const lost = v.reduce((a, r) => a + r.lost_clicks, 0)
  const res = v.reduce((a, r) => a + r.ctr_residual * r.impressions, 0) / i
  console.log(k.padEnd(12) + String(v.length).padStart(7) + i.toLocaleString().padStart(13) + c.toLocaleString().padStart(8) +
    (100 * c / i).toFixed(2).padStart(7) + '%' + res.toFixed(2).padStart(13) + 'pp' + lost.toLocaleString().padStart(13))
}
const off = rows.filter(r => r.benchmark_covers_position === 'no')
console.log(`\n${off.length} pages rank outside the benchmark table's 2-10 range; their expected_ctr is clamped and should be read with care.`)
const missing = rows.filter(r => r.has_affiliate_link === 'PAGE-NOT-ON-DISK')
console.log(`${missing.length} URLs in GSC have no page on disk (old or renamed URLs still accruing impressions).`)
