// Build guard for the in-content recirculation units. Reads the BUILT pages in .next/server/app.
//
//   node scripts/check-recirculation.mjs            fail the build on any problem
//   node scripts/check-recirculation.mjs --report   also write reports/recirculation_pages.json
//
// What must stay true:
//   1. lib/recirculation.json is complete and current (every article has a "Next" pick and its
//      "Related" picks, all pointing at real articles).
//   2. An article shows at most one "Next" unit and one "Related" line. What each unit shows is
//      exactly what lib/recirculation.json says for THAT page, each link goes to a different,
//      built article that is not the page itself, and each link carries the data-recirc
//      attributes the GA4 click event is built from (location, kind and target).
//   3. A page never offers the same article twice across "Next", "Related" and "Keep reading".
//   4. The "Next" unit is never above the first Amazon button in the article (owner's rule:
//      the purchase path is not disturbed). The fixed bottom buy bar does not count.
//   5. Neither unit sits in front of the second or later heading of a numbered run
//      ("Step 3", "2. Weevils"): it would split the steps.
//   6. No page outside the articles (service, city, pricing, quote, index pages), no local
//      post that keeps its quote CTA and no page switched off in the overrides file ever
//      shows either unit.
//   7. At least 95% of articles carry "Next" and at least 85% carry "Related"; every
//      "Keep reading" card is tracked. Pages without "Next" are listed.
//   8. Fixed bars: the "keep reading" bar is on exactly the articles flagged for it (those
//      without the Amazon buy bar), links to the page's "Next" article and is tracked; no page
//      shows it together with the Amazon buy bar; and the Call / Text / Get price bar is on every
//      page except the three lists components/LeadBarGate.tsx knows, so it can never silently
//      disappear from a service, city, pricing or quote page or a local post.
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs'
import { join } from 'path'
import { execFileSync } from 'child_process'
import { keepsQuoteCta } from './article-cta-scope.mjs'

const ROOT = process.cwd()
const APP = join(ROOT, '.next', 'server', 'app')
if (!existsSync(APP)) { console.log('check:recirculation: no build output found, run `next build` first'); process.exit(1) }

const problems = []
try { execFileSync(process.execPath, [join(ROOT, 'scripts', 'backfill-recirculation.mjs'), '--check'], { stdio: 'pipe' }) }
catch (e) { problems.push(`lib/recirculation.json: ${String(e.stdout || e.message).trim().split('\n').slice(-3).join(' | ')}`) }
const picks = JSON.parse(readFileSync(join(ROOT, 'lib', 'recirculation.json'), 'utf8')).pages

const pages = []
const walk = (dir, route) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) { walk(full, `${route}/${name}`); continue }
    if (name.endsWith('.html')) pages.push({ path: name === 'index.html' ? route || '/' : `${route}/${name.slice(0, -5)}`, file: full })
  }
}
walk(APP, '')
const built = new Set(pages.map((p) => p.path))
const isArticle = (p) => /^\/(blog|learn)\/[^/]+$/.test(p)
const NUMBERED = /^(?:(?:step|layer|tell|tip|sign|stage|phase|rule|mistake|reason|myth|method|way|option|purchase|pick|part|lesson|day|week)\s*#?\s*(\d+)\b|#?(\d+)\s*[.):—–-]\s)/i
const unit = (html, kind) => [...html.matchAll(new RegExp(`<aside[^>]*data-recirc-unit="${kind}"[\\s\\S]*?</aside>`, 'g'))]
const attr = (tag, name) => (tag.match(new RegExp(`${name}="([^"]*)"`)) || [])[1]
const links = (block) => [...block.matchAll(/<a\b[^>]*>/g)].map((m) => ({ href: attr(m[0], 'href') || '', where: attr(m[0], 'data-recirc'), kind: attr(m[0], 'data-recirc-kind'), target: attr(m[0], 'data-recirc-target') }))
const textOf = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim()

// the three lists components/LeadBarGate.tsx hides the Call / Text / Get price bar on
const quoted = (file) => new Set([...readFileSync(join(ROOT, 'lib', file), 'utf8').matchAll(/['"](\/[a-z0-9/-]+)['"]/g)].map((m) => m[1]))
const adjacent = quoted('adjacent-pest-routes.ts')
const usAdjacent = quoted('us-guide-routes.ts')
const barRoutes = quoted('keep-reading-bar-routes.ts')
// our own bar can be switched off in lib/recirculation.ts (for example when Mediavine's Grow unit is on)
const BAR_ON = !/KEEP_READING_BAR_ENABLED\s*=\s*false/.test(readFileSync(join(ROOT, 'lib', 'recirculation.ts'), 'utf8'))
const seen = { pages: 0, bar: 0, lead: 0 }

const out = { next: [], related: 0, without: [], cardsTracked: 0, cards: 0 }
let articles = 0
for (const { path, file } of pages) {
  if (path.startsWith('/_') || path === '/404' || path === '/500') continue
  const html = readFileSync(file, 'utf8')
  const body = html.slice(Math.max(0, html.indexOf('<body')))
  const next = unit(body, 'next'), related = unit(body, 'related')
  const off = picks[path] && picks[path].off

  // ── the fixed bars at the bottom of the screen ─────────────────────────────────
  // (an element in the HTML, not the copy of its props that Next.js also embeds as data)
  const barAt = body.search(/<div[^>]*\bdata-keep-reading-bar\b/)
  const bars = (body.match(/<div[^>]*\bdata-keep-reading-bar\b/g) || []).length
  const hasLeadBar = /<div[^>]*\bdata-lead-bar\b/.test(body)
  const hasBuyBar = /<div[^>]*\bdata-sticky-buy-bar\b/.test(body)
  const wantsBar = BAR_ON && Boolean(picks[path] && picks[path].bar)
  seen.pages++
  if (wantsBar) {
    seen.bar++
    if (bars !== 1) problems.push(`${path}: should show the "keep reading" bar exactly once, found ${bars}`)
    if (hasBuyBar) problems.push(`${path}: shows the "keep reading" bar AND the Amazon buy bar (two stacked bars)`)
    if (bars === 1) {
      const l = links(body.slice(barAt, barAt + 2500))[0]
      if (!l || l.href !== picks[path].next) problems.push(`${path}: the "keep reading" bar does not link to this page's Next article`)
      else if (l.where !== 'sticky_bar' || l.kind !== 'bar' || l.target !== l.href.split('/').pop()) problems.push(`${path}: the "keep reading" bar link is missing its tracking attributes`)
    }
  } else if (bars) problems.push(`${path}: shows the "keep reading" bar, but must not (only articles without the Amazon buy bar do)`)
  // The Call / Text / Get price bar must be on every page EXCEPT the three lists the gate knows.
  // This is what keeps it on service, city, pricing and quote pages and on the local posts.
  const expectLead = !(adjacent.has(path) || usAdjacent.has(path) || barRoutes.has(path))
  if (hasLeadBar !== expectLead) problems.push(`${path}: the Call / Text / Get price bar is ${hasLeadBar ? 'shown' : 'missing'}, but it should be ${expectLead ? 'shown' : 'hidden'} here`)
  if (hasLeadBar) seen.lead++
  if (barRoutes.has(path) !== Boolean(picks[path] && picks[path].bar)) problems.push(`${path}: lib/keep-reading-bar-routes.ts and lib/recirculation.json disagree about the bar on this page`)

  if (!isArticle(path) || keepsQuoteCta(path) || off) {
    if (next.length || related.length) problems.push(`${path}: shows an in-content recirculation unit, but it must not (${off ? 'switched off in the overrides file' : 'not an article that should have one'})`)
    continue
  }
  articles++
  const want = picks[path] || { next: null, related: [] }
  if (next.length > 1) problems.push(`${path}: ${next.length} "Next" units`)
  if (related.length > 1) problems.push(`${path}: ${related.length} "Related" lines`)
  const shown = []
  for (const [kind, blocks] of [['next', next], ['related', related]]) for (const b of blocks) for (const l of links(b[0])) {
    shown.push(l.href)
    if (!isArticle(l.href) || !built.has(l.href)) problems.push(`${path}: the ${kind} unit links to ${l.href}, which is not a built article`)
    if (l.href === path) problems.push(`${path}: the ${kind} unit links to the page itself`)
    if (l.where !== 'in_content' || l.kind !== kind || l.target !== l.href.split('/').pop()) problems.push(`${path}: a ${kind} link is missing its tracking attributes (location, kind, target)`)
    if (kind === 'next' ? l.href !== want.next : !(want.related || []).includes(l.href)) problems.push(`${path}: the ${kind} unit shows ${l.href}, which is not this page's pick in lib/recirculation.json`)
  }
  if (next.length === 1 && links(next[0][0]).length !== 1) problems.push(`${path}: the "Next" unit must hold exactly one link`)
  if (related.length === 1 && links(related[0][0]).length < 2) problems.push(`${path}: the "Related" line holds fewer than two links`)
  // "Keep reading" cards: tracked, and never a repeat of an in-content pick
  const keep = (body.match(/<section[^>]*\bdata-read-next\b[\s\S]*?<\/section>/) || [''])[0]
  const cards = links(keep).filter((l) => isArticle(l.href))
  out.cards += cards.length
  for (const c of cards) {
    if (c.where === 'keep_reading' && c.kind === 'card' && c.target === c.href.split('/').pop()) out.cardsTracked++
    else problems.push(`${path}: a "Keep reading" card (${c.href}) is missing its tracking attributes`)
    shown.push(c.href)
  }
  if (Array.isArray(want.cards) && want.cards.length === 3 && cards.map((c) => c.href).join(' ') !== want.cards.join(' ')) problems.push(`${path}: the "Keep reading" cards are not the three stored for this page in lib/recirculation.json`)
  const twice = shown.filter((h, i) => shown.indexOf(h) !== i)
  if (twice.length) problems.push(`${path}: offers the same article more than once: ${[...new Set(twice)].join(' ')}`)
  // placement
  for (const [kind, blocks] of [['Next', next], ['Related', related]]) for (const b of blocks) {
    const after = body.slice(b.index + b[0].length, b.index + b[0].length + 600)
    const h = after.match(/^\s*(?:<!--[\s\S]*?-->\s*)*<h2[^>]*>([\s\S]*?)<\/h2>/)
    const m = h ? textOf(h[1]).match(NUMBERED) : null
    if (m && Number(m[1] || m[2]) >= 2) problems.push(`${path}: the ${kind} unit sits in front of "${textOf(h[1]).slice(0, 50)}", inside a numbered sequence`)
  }
  if (next.length) {
    const buy = [...body.matchAll(/<a\b[^>]*href="[^"]*amazon\.[^"]*"[^>]*>/g)].find((m) => !/data-aff-component="StickyBuyBar"/.test(m[0]))
    if (buy && next[0].index < buy.index) problems.push(`${path}: the "Next" unit is above the first Amazon button`)
    out.next.push(path)
  } else out.without.push(path)
  if (related.length) out.related++
}

const share = (n) => (articles ? n / articles : 0)
if (share(out.next.length) < 0.95) problems.push(`only ${out.next.length} of ${articles} articles carry the "Next" unit; run: node scripts/insert-recirculation.mjs`)
if (share(out.related) < 0.85) problems.push(`only ${out.related} of ${articles} articles carry the "Related" line; run: node scripts/insert-recirculation.mjs`)
console.log(`check:recirculation: ${articles} articles | "Next" on ${out.next.length} (${Math.round(share(out.next.length) * 100)}%) | "Related" on ${out.related} (${Math.round(share(out.related) * 100)}%) | "Keep reading" cards tracked: ${out.cardsTracked} of ${out.cards}`)
console.log(`  fixed bars: "keep reading" bar on ${seen.bar} articles${BAR_ON ? '' : ' (switched off in lib/recirculation.ts)'} | Call / Text / Get price bar on ${seen.lead} of ${seen.pages} pages`)
if (out.without.length) console.log(`  articles without the "Next" unit (${out.without.length}): ${out.without.slice(0, 12).join(' ')}${out.without.length > 12 ? ' …' : ''}`)
if (process.argv.includes('--report')) writeFileSync(join(ROOT, 'reports', 'recirculation_pages.json'), JSON.stringify({ generated: 'from the built site', articles, withNext: out.next.length, withRelated: out.related, withoutNext: out.without }, null, 1))
if (problems.length) {
  console.log(`✗ ${problems.length} problem(s):`)
  for (const p of problems.slice(0, 40)) console.log(`   - ${p}`)
  process.exit(1)
}
console.log('✓ in-content recirculation units are as intended')
