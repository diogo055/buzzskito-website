// Assigns every article its in-content "Next" article and its three "Related" links.
//
//   npm run recirculation:backfill        fill in whatever is missing (safe to re-run any time)
//   node scripts/backfill-recirculation.mjs --check     fail if anything is missing or broken
//   node scripts/backfill-recirculation.mjs --rebuild   recompute every automatic pick from scratch
//
// Why (owner's decision, Oct 2026): articles exist to keep readers on the site. A reader who
// reaches the end sees "Keep reading" (components/ReadNext.tsx); most never get that far, so
// each article also offers one next article early on and three related links mid-way
// (components/NextUp.tsx, components/RelatedLinks.tsx).
//
// Where the picks live:
//   data/recirculation-overrides.json   picks set BY HAND. Never written by this script. They win.
//                                       "off": true switches the units off for a page.
//   lib/recirculation.json              every article's final picks. Generated. Read at build time.
//                                       It also holds each page's three "Keep reading" cards, so
//                                       those stay put too instead of reshuffling across a whole
//                                       topic cluster every time one article is added.
//
// "Only fills what is absent": a pick already in lib/recirculation.json is kept as long as it
// still makes sense (the target exists, is in the same topic cluster or its neighbour, and is
// not the other edition of the same article), so adding a new article does not reshuffle the
// links on every other page. Only missing picks are computed. --rebuild throws the automatic
// ones away first; do not use it casually, it changes links on most of the site at once.
//
// How an automatic pick is made (deterministic: same input, same output):
//   1. candidates are the other articles in the same topic cluster (lib/article-index.json);
//      a cluster too small borrows from its nearest relative
//   2. they are scored by how many distinctive words their title and address share with this
//      article (rare words count more than words the whole cluster uses). The topic decides;
//      only as a nudge, a candidate scores a little higher when it suits the same reader (a
//      shopping page for a shopping page, a North American guide for a North American guide)
//      and lower when it does not (a Canada-only page for a US guide, a guide without products
//      for a shopper, a post about one GTA town)
//   3. the three "Keep reading" cards the page shows are used only as a last resort (and if one
//      is picked anyway, components/ReadNext.tsx swaps that card for another)
//   4. the strongest matches across the whole site are assigned first; no article is offered as
//      "Next" by more than 3 pages or as "Related" by more than 6; a page is not sent straight
//      back to the page that sent the reader there; the two editions of one article (US and
//      Canadian) never recommend each other and are never both offered on one page
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'
import { keepsQuoteCta } from './article-cta-scope.mjs'

const ROOT = process.cwd()
const CHECK = process.argv.includes('--check')
const REBUILD = process.argv.includes('--rebuild')
const OUT = join(ROOT, 'lib', 'recirculation.json')
const OVERRIDES = join(ROOT, 'data', 'recirculation-overrides.json')
const NEXT_CAP = 3
const RELATED_CAP = 6
const RELATED_COUNT = 3

const index = JSON.parse(readFileSync(join(ROOT, 'lib', 'article-index.json'), 'utf8'))
const articles = [...index.articles].sort((a, b) => a.path.localeCompare(b.path))
const byPath = Object.fromEntries(articles.map((a) => [a.path, a]))
const overrides = existsSync(OVERRIDES) ? JSON.parse(readFileSync(OVERRIDES, 'utf8')).pages || {} : {}
const existing = !REBUILD && existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')).pages || {} : {}

// ── words that say nothing about the topic ──────────────────────────────────────
const STOP = new Set(('a an and are as at be best by can canada canadian do does for from get guide how in into is it its of on ontario or rid that the their them these they this to vs what when where which who why will with without you your 2024 2025 2026 2027 complete ultimate actually really work works review reviews compared comparison explained need know things top most more than about after before should use using not no yes one two three four five six seven eight nine ten every all any each look like looks tell here there').split(' '))
const IRREGULAR = { mice: 'mouse', lice: 'louse', feet: 'foot', teeth: 'tooth', geese: 'goose', larvae: 'larva', pupae: 'pupa' }
const stem = (w) => {
  if (IRREGULAR[w]) return IRREGULAR[w]
  if (w.length > 4 && w.endsWith('ies')) return `${w.slice(0, -3)}y` // flies -> fly
  if (w.length > 5 && /(oes|ches|shes|xes)$/.test(w)) return w.slice(0, -2) // mosquitoes, roaches, bushes, boxes
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1) // bites -> bite, ticks -> tick
  return w
}
const slugOf = (p) => p.split('/').pop()
const words = (a) => {
  const text = `${slugOf(a.path).replace(/-/g, ' ')} ${a.full || a.title}`.toLowerCase().normalize('NFKD').replace(/[^a-z0-9 ]+/g, ' ')
  return new Set(text.split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)).map(stem).filter((w) => !STOP.has(w)))
}
const W = Object.fromEntries(articles.map((a) => [a.path, words(a)]))
const df = {}
for (const a of articles) for (const w of W[a.path]) df[w] = (df[w] || 0) + 1
const weight = (w) => Math.log(articles.length / df[w]) + 0.05
const norm = Object.fromEntries(articles.map((a) => [a.path, Math.sqrt([...W[a.path]].reduce((s, w) => s + weight(w) ** 2, 0)) || 1]))
const similarity = (p, q) => { let dot = 0; for (const w of W[p]) if (W[q].has(w)) dot += weight(w) ** 2; return dot / (norm[p] * norm[q]) }

// ── what kind of page each article is, so a pick suits the reader who is on the page ──
// a North American guide (content/guides/*.json): written for US readers, no Amazon links
const guidePaths = new Set()
const GD = join(ROOT, 'content', 'guides')
if (existsSync(GD)) for (const f of readdirSync(GD).filter((x) => x.endsWith('.json'))) {
  try { const g = JSON.parse(readFileSync(join(GD, f), 'utf8')); guidePaths.add(`/${g.section || (g.kind === 'pillar' ? 'learn' : 'blog')}/${g.slug}`) } catch { /* a draft mid-write */ }
}
// Does the page carry the fixed Amazon buy bar at the bottom of the screen? Those pages never get
// the fixed "keep reading" bar (owner, Oct 2026: two stacked bars would be a mess); every other
// article with a "Next" pick does (`bar: true` in the output, and lib/keep-reading-bar-routes.ts).
const hasBuyBar = (p) => {
  const file = join(ROOT, 'app', ...p.split('/').filter(Boolean), 'page.tsx')
  return existsSync(file) && /<StickyBuyBar[\s/>]/.test(readFileSync(file, 'utf8'))
}
// a shopping page compares or reviews products; everything else explains something
// ("vs" is left out on purpose: "male-vs-female-mosquito" is an explainer, not a product comparison)
const shopping = (p) => /(^|-)(best|review|reviews|buy|kit|kits|cost|price|rental|deals?)(-|$)/.test(slugOf(p))
const canadaOnly = (p) => !guidePaths.has(p) && /(^|-)(canada|canadian|ontario|gta|toronto)(-|$)/.test(slugOf(p))
// the two editions of one article (US and Canadian) must never recommend each other
const twin = {}
const guidesTs = existsSync(join(ROOT, 'lib', 'guides.ts')) ? readFileSync(join(ROOT, 'lib', 'guides.ts'), 'utf8') : ''
for (const m of guidesTs.matchAll(/\{\s*us:\s*'([^']+)',\s*ca:\s*'([^']+)'\s*\}/g)) { twin[m[1]] = m[2]; twin[m[2]] = m[1] }
// The topic (shared distinctive words) decides. Fit only nudges: it scales a topical match up or
// down and adds a sliver so that, between two equally (un)related candidates, the better-suited wins.
const score = (p, q) => {
  let scale = 1, sliver = 0
  if (guidePaths.has(p) && guidePaths.has(q)) { scale += 0.3; sliver += 0.03 } // a US reader stays among pages written for US readers
  if (shopping(p) === shopping(q)) { scale += 0.15; sliver += 0.02 } // shoppers get products, readers get reading
  if (guidePaths.has(p) && canadaOnly(q)) { scale -= 0.35; sliver -= 0.03 } // a Canada-only page is a weak next step for a US reader
  if (!guidePaths.has(p) && shopping(p) && guidePaths.has(q)) { scale -= 0.3; sliver -= 0.03 } // a shopper gains nothing from a page with no products
  if (keepsQuoteCta(q)) { scale -= 0.3; sliver -= 0.03 } // a post about one GTA town is a weak next step for a national reader
  return similarity(p, q) * scale + sliver
}

// ── "Keep reading" cards: a fixed rotation through the cluster, keyed on the page's address ──
// (a guide with its own infographic goes first). The full order is returned so a card that
// cannot be used has a successor. components/ReadNext.tsx shows the three stored in the output.
const hash = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h }
const others = (cluster, path) => index.articles.filter((a) => a.cluster === cluster && a.path !== path)
function cardRotation(path) {
  const self = byPath[path]
  const cluster = self ? self.cluster : 'general'
  let pool = others(cluster, path)
  for (let c = cluster, hops = 0; pool.length < 7 && hops < 3; hops++) { c = index.fallback[c] || 'mosquitoes'; pool = [...pool, ...others(c, path).filter((a) => !pool.includes(a))] }
  const pinned = pool.filter((a) => a.image && /^\/guides\//.test(a.image)).slice(0, 1)
  const rest = pool.filter((a) => !pinned.includes(a))
  if (!rest.length) return pinned.map((a) => a.path)
  const start = hash(path) % rest.length
  const step = Math.max(1, Math.floor(rest.length / 3))
  const order = [...pinned]
  for (let i = 0; i < rest.length; i++) { const c = rest[(start + i * step) % rest.length]; if (!order.includes(c)) order.push(c) }
  for (let i = 0; i < rest.length; i++) { const c = rest[(start + i) % rest.length]; if (!order.includes(c)) order.push(c) }
  return order.map((a) => a.path)
}
// the cards a page shows today (stored ones if it has them), used so in-content picks avoid them
const keepReadingCards = (path) => { const e = (existing[path] || {}).cards; return Array.isArray(e) && e.length ? e : cardRotation(path).slice(0, 3) }

// ── which pages get the units: every article except the local posts that keep a quote CTA ──
const sources = articles.filter((a) => !keepsQuoteCta(a.path))
const isOff = (p) => overrides[p] && overrides[p].off === true
// same topic cluster; the neighbouring cluster counts only when the page's own cluster is too small to fill the slots
const near = (p, q) => byPath[q].cluster === byPath[p].cluster || (others(byPath[p].cluster, p).length < 8 && byPath[q].cluster === (index.fallback[byPath[p].cluster] || 'mosquitoes'))
// a hand-set pick only has to be a real article; an automatic one must also still make sense
const real = (from, to) => typeof to === 'string' && to !== from && Boolean(byPath[to]) && twin[from] !== to
const sound = (from, to) => real(from, to) && near(from, to)

const pages = {}
const nextCount = {}, relatedCount = {}
const bump = (map, key) => { map[key] = (map[key] || 0) + 1 }
const problems = []
// a page never offers both editions of one article, and never the article it was just told to stop offering
const clash = (page, c) => [page.next, ...page.related].some((t) => t && (t === c || twin[t] === c)) || page.avoid.has(c)

// pass 1: hand-set picks and still-sound existing picks keep their place
for (const a of sources) {
  const o = overrides[a.path] || {}, e = existing[a.path] || {}
  const page = { next: null, related: [], hand: {}, avoid: new Set() }
  pages[a.path] = page
  if (isOff(a.path)) continue
  if (o.next !== undefined) {
    if (real(a.path, o.next)) { page.next = o.next; page.hand.next = true; if (e.next && e.next !== o.next) page.avoid.add(e.next) }
    else problems.push(`${a.path}: hand-set next "${o.next}" is not an article`)
  } else if (sound(a.path, e.next)) page.next = e.next
  if (Array.isArray(o.related)) {
    for (const r of o.related) { if (real(a.path, r)) page.related.push(r); else problems.push(`${a.path}: hand-set related "${r}" is not an article`) }
    page.hand.related = true
  } else if (Array.isArray(e.related)) page.related = e.related.filter((r) => sound(a.path, r))
  page.related = [...new Set(page.related)].filter((r, i, all) => r !== page.next && twin[r] !== page.next && !all.slice(0, i).some((x) => twin[x] === r)).slice(0, RELATED_COUNT)
  if (page.next) bump(nextCount, page.next)
  for (const r of page.related) bump(relatedCount, r)
}

// pass 2: score every (page, candidate) pair once, strongest first
const pairs = []
for (const a of sources) {
  const page = pages[a.path]
  if (isOff(a.path) || (page.next && (page.related.length === RELATED_COUNT || page.hand.related))) continue
  const cards = new Set(keepReadingCards(a.path))
  const same = others(a.cluster, a.path)
  const borrowed = same.length < 8 ? others(index.fallback[a.cluster] || 'mosquitoes', a.path) : []
  for (const c of same) if (twin[a.path] !== c.path) pairs.push({ a: a.path, c: c.path, s: score(a.path, c.path) + 1 - (cards.has(c.path) ? 10 : 0) })
  for (const c of borrowed) if (twin[a.path] !== c.path) pairs.push({ a: a.path, c: c.path, s: score(a.path, c.path) - (cards.has(c.path) ? 10 : 0) })
}
pairs.sort((x, y) => y.s - x.s || x.a.localeCompare(y.a) || x.c.localeCompare(y.c))
const needsRelated = (page) => !page.hand.related && page.related.length < RELATED_COUNT
let filledNext = 0, filledRelated = 0
// "Next" first (the most valuable slot): within the cap and never straight back to the page that
// points here; then, for anyone still without one, with those two limits lifted
for (const strict of [true, false]) for (const { a, c } of pairs) {
  const page = pages[a]
  if (page.next || clash(page, c)) continue
  if (strict && ((nextCount[c] || 0) >= NEXT_CAP || (pages[c] && pages[c].next === a))) continue
  page.next = c; bump(nextCount, c); filledNext++
}
for (const strict of [true, false]) for (const { a, c } of pairs) {
  const page = pages[a]
  if (!needsRelated(page) || clash(page, c) || (strict && (relatedCount[c] || 0) >= RELATED_CAP)) continue
  page.related.push(c); bump(relatedCount, c); filledRelated++
}

// pass 3: the three "Keep reading" cards. A stored card stays as long as it still makes sense and
// is not something the page now offers in-content; gaps are filled from the rotation.
let filledCards = 0
const cardsFor = (path, page) => {
  const taken = new Set([page.next, ...page.related].filter(Boolean))
  const ok = (c, have) => sound(path, c) && !taken.has(c) && !taken.has(twin[c]) && !have.includes(c) && !have.includes(twin[c])
  const cards = []
  for (const c of ((existing[path] || {}).cards || [])) if (cards.length < 3 && ok(c, cards)) cards.push(c)
  for (const c of cardRotation(path)) { if (cards.length >= 3) break; if (ok(c, cards)) { cards.push(c); filledCards++ } }
  return cards
}

const out = { _readme: 'GENERATED by scripts/backfill-recirculation.mjs (npm run recirculation:backfill). Do not edit by hand: put hand-picked links in data/recirculation-overrides.json instead.', pages: {} }
let off = 0
for (const a of sources) {
  const page = pages[a.path]
  const cards = cardsFor(a.path, page)
  if (cards.length < 3) problems.push(`${a.path}: only ${cards.length} "Keep reading" card(s) found`)
  if (isOff(a.path)) { off++; out.pages[a.path] = { next: null, related: [], cards, off: true }; continue }
  if (!page.next) problems.push(`${a.path}: no "Next" article could be found`)
  if (!page.hand.related && page.related.length < RELATED_COUNT) problems.push(`${a.path}: only ${page.related.length} related link(s) found`)
  out.pages[a.path] = { next: page.next, related: page.related, cards, ...(page.next && !hasBuyBar(a.path) ? { bar: true } : {}) }
}
for (const p of Object.keys(overrides)) if (!sources.some((a) => a.path === p)) problems.push(`data/recirculation-overrides.json names ${p}, which is not an article that shows these units`)
const text = `${JSON.stringify(out, null, 1)}\n`
const current = existsSync(OUT) ? readFileSync(OUT, 'utf8').split('\r\n').join('\n') : ''
const spread = (map) => { const v = sources.map((a) => map[a.path] || 0); return `${Math.min(...v)} to ${Math.max(...v)}` }
const hand = Object.values(overrides).filter((o) => !o.off).length

// The pages that show the fixed "keep reading" bar, as a small list the browser-side gate can
// read (components/LeadBarGate.tsx hides the Call / Text / Get price bar on exactly these).
const BAR_ROUTES = join(ROOT, 'lib', 'keep-reading-bar-routes.ts')
const barPaths = sources.map((a) => a.path).filter((p) => out.pages[p] && out.pages[p].bar)
const barText = `// GENERATED by scripts/backfill-recirculation.mjs (npm run recirculation:backfill). Do not edit by hand.
//
// Article pages that show the fixed "keep reading" bar (components/KeepReadingBar.tsx) in place of
// the Call / Text / Get price bar: every article with a "Next" pick that does NOT carry the fixed
// Amazon buy bar. Service, city and quote pages and the local posts are never in this list.
export const KEEP_READING_BAR_ROUTES: ReadonlySet<string> = new Set([
${barPaths.map((p) => `  ${JSON.stringify(p)},`).join('\n')}
])
`
const barCurrent = existsSync(BAR_ROUTES) ? readFileSync(BAR_ROUTES, 'utf8').split('\r\n').join('\n') : ''

if (CHECK) {
  if (barText !== barCurrent) problems.push('lib/keep-reading-bar-routes.ts is out of date. Run: npm run recirculation:backfill')
  if (text !== current) problems.push('lib/recirculation.json is out of date. Run: npm run recirculation:backfill')
  console.log(`check:recirculation-data: ${sources.length - off} articles have picks | hand-set pages: ${hand} | switched off: ${off}`)
} else {
  writeFileSync(OUT, text)
  writeFileSync(BAR_ROUTES, barText)
  console.log(`  fixed "keep reading" bar on ${barPaths.length} articles (those without the Amazon buy bar)`)
  console.log(`recirculation: ${sources.length - off} articles | filled ${filledNext} "Next", ${filledRelated} "Related" and ${filledCards} "Keep reading" picks | hand-set pages: ${hand} | switched off: ${off}`)
  console.log(`  times each article is offered: as "Next" ${spread(nextCount)}, as "Related" ${spread(relatedCount)}`)
}
if (problems.length) { console.log(`✗ ${problems.length} problem(s):`); for (const p of problems.slice(0, 30)) console.log(`   - ${p}`); process.exit(1) }
