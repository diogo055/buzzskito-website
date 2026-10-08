// Builds the working plan for the Oct 2026 North American guides from data/us-pages/plan.src.json.
//
//   node scripts/us-pages-plan.mjs
//
// Writes, under data/us-pages/:
//   plan.json            one entry per new page, with its required links worked out
//   routes.json          every address a guide is allowed to link to (existing pages + new ones)
//   context-<cluster>.md what a writer needs to know about one cluster
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const DIR = join(ROOT, 'data', 'us-pages')
const src = JSON.parse(readFileSync(join(DIR, 'plan.src.json'), 'utf8'))
const kw = JSON.parse(readFileSync(join(DIR, 'keywords.json'), 'utf8'))
const inv = JSON.parse(readFileSync(join(DIR, 'existing-inventory.json'), 'utf8'))
const byRank = Object.fromEntries(kw.map((k) => [Number(k.rank), k]))
const DATE = '2026-10-07'

const PILLAR = {
  'bed-bugs': '/learn/bed-bugs', ants: '/learn/ants', mice: '/learn/mice', cockroaches: '/learn/cockroaches',
  mosquitoes: '/blog/ultimate-backyard-mosquito-control-guide', ticks: '/blog/ultimate-tick-control-guide-ontario',
}
const CATEGORY = {
  mice: '/pest-product-guides/rodent-control', ants: '/pest-product-guides/ant-control', cockroaches: '/pest-product-guides/cockroach-control',
  'bed-bugs': '/pest-product-guides/bed-bug-control', ticks: '/pest-product-guides/tick-gear', mosquitoes: '/pest-product-guides/mosquito-gear',
  'pest-control': '/pest-product-guides',
}
const CATEGORY_ALWAYS = new Set(['how-to-get-rid-of-mosquitoes', 'how-to-keep-mosquitoes-away'])

// ── every address that exists today ─────────────────────────────────────────────
const existing = new Set()
const walk = (dir, route) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (!statSync(full).isDirectory()) continue
    if (name.startsWith('[') || name.startsWith('_') || name === 'api' || name.startsWith('(')) continue
    const r = `${route}/${name}`
    if (existsSync(join(full, 'page.tsx'))) existing.add(r)
    walk(full, r)
  }
}
existing.add('/')
walk(join(ROOT, 'app'), '')

const path = (p) => (p.kind === 'pillar' ? `/learn/${p.slug}` : `/blog/${p.slug}`)
const clusters = [...new Set(src.spokes.map((s) => s.cluster))]
const pages = []

for (const p of src.pillars) {
  const spokes = src.spokes.filter((s) => s.cluster === p.cluster)
  pages.push({
    slug: p.slug, kind: 'pillar', cluster: p.cluster, path: `/learn/${p.slug}`,
    keyword: p.ranks.length ? byRank[p.ranks[0]].keyword : p.cluster.replace('-', ' '),
    alsoTargets: p.ranks.slice(1).map((r) => byRank[r].keyword), ranks: p.ranks,
    type: 'pillar', flags: ['pesticide', 'health'], minWords: 3000, datePublished: DATE,
    projClicks: p.ranks.reduce((n, r) => n + Number(byRank[r].proj_clicks_mo), 0),
    h1Hint: p.h1Hint, scope: p.scope,
    required: {
      spokes: spokes.map((s) => `/blog/${s.slug}`),
      clusterExisting: src.existingClusterPages[p.cluster] || [],
      pillarRing: [...src.pillars.filter((o) => o.slug !== p.slug).map((o) => `/learn/${o.slug}`), PILLAR.mosquitoes, PILLAR.ticks],
      category: CATEGORY[p.cluster],
    },
  })
}

for (const c of clusters) {
  const list = src.spokes.filter((s) => s.cluster === c)
  list.forEach((s, i) => {
    const n = list.length
    const ring = n <= 5
      ? list.filter((o) => o !== s).map((o) => `/blog/${o.slug}`)
      : [list[(i + 1) % n], list[(i + 2) % n], list[(i - 1 + n) % n]].map((o) => `/blog/${o.slug}`)
    const primary = byRank[s.ranks[0]]
    pages.push({
      slug: s.slug, kind: 'spoke', cluster: c, path: `/blog/${s.slug}`,
      keyword: primary.keyword, alsoTargets: s.ranks.slice(1).map((r) => byRank[r].keyword), ranks: s.ranks,
      type: s.type === 'c' ? 'commercial' : 'informational', flags: s.flags, minWords: s.type === 'c' ? 2000 : 1500, datePublished: DATE,
      projClicks: s.ranks.reduce((sum, r) => sum + Number(byRank[r].proj_clicks_mo), 0),
      usVolume: s.ranks.reduce((sum, r) => sum + Number(byRank[r].us_volume), 0),
      scope: s.scope,
      required: {
        pillar: PILLAR[c] || null,
        ring,
        minSiblings: Math.min(4, n - 1),
        minExisting: 2,
        category: s.type === 'c' || CATEGORY_ALWAYS.has(s.slug) ? CATEGORY[c] : null,
      },
    })
  })
}

// planned addresses that do not exist yet but will by the time the site builds
const planned = new Set([...pages.map((p) => p.path), '/pest-product-guides/ant-control', '/pest-product-guides/cockroach-control'])
const clash = [...planned].filter((p) => existing.has(p))
if (clash.length) console.log('NOTE: already on disk (fine on a re-run):', clash.join(', '))

writeFileSync(join(DIR, 'plan.json'), JSON.stringify({ generated: DATE, pages, merged: src.merged, broaden: src.broaden, existingClusterPages: src.existingClusterPages }, null, 1))
writeFileSync(join(DIR, 'routes.json'), JSON.stringify({ existing: [...existing].filter((r) => !planned.has(r)).sort(), planned: [...planned].sort() }, null, 0))

// ── per-cluster context for writers ─────────────────────────────────────────────
const RE = {
  'bed-bugs': /bed-bug|punaises|encasement|steamer|zappbug|packtite|thermalstrike|cimexa|crossfire|flea-bites/,
  mice: /(^|-)(mice|mouse|rodent|rats?|vole)(-|$)|ultrasonic|goodnature|live-animal-trap/,
  ants: /(^|-)ants?(-|$)|termite|diatomaceous|carpenter-bee/,
  cockroaches: /roach|diatomaceous|silverfish|centipede|ortho-home-defense/,
  mosquitoes: /mosquito|deet|picaridin|bti|citronella|thermacell|bug-zapper|dynatrap|west-nile|permethrin|bug-spray|no-see-um|black-flies/,
  ticks: /tick|lyme|alpha-gal|permethrin|what-eats/,
  'pest-control': /pest-control|sprayer|fogger|diatomaceous|ultrasonic|natural|diy|grub|june-bug|ortho|wondercide|doktor-doom/,
}
const title = (i) => (i.h1 || i.metaTitle || '').replace(/\s+/g, ' ').trim()
for (const c of [...clusters]) {
  const mine = pages.filter((p) => p.cluster === c)
  const lines = []
  lines.push(`# Cluster: ${c}`, '')
  lines.push('## New pages in this cluster (link targets: use these exact addresses)', '')
  for (const p of mine) lines.push(`- \`${p.path}\` — **${p.keyword}**${p.alsoTargets.length ? ` (also: ${p.alsoTargets.join('; ')})` : ''}. ${p.scope}`, '')
  lines.push('## Pillars (hub pages)', '')
  for (const p of pages.filter((x) => x.kind === 'pillar')) lines.push(`- \`${p.path}\` — the complete ${p.cluster.replace('-', ' ')} reference`)
  lines.push('- `/blog/ultimate-backyard-mosquito-control-guide` — the mosquito pillar guide (existing)', '- `/blog/ultimate-tick-control-guide-ontario` — the tick pillar guide (existing)', '')
  lines.push('## New pages in OTHER clusters (cross-link only where it truly helps the reader)', '')
  for (const p of pages.filter((x) => x.cluster !== c && x.kind === 'spoke')) lines.push(`- \`${p.path}\` — ${p.keyword}`)
  lines.push('', '## Existing pages on the site you may link to (pick the real topical matches)', '')
  lines.push('Most of these were written for Canadian readers and name Canadian products. Link to them with a neutral, descriptive anchor about the topic, and prefer the ones that answer a general question.', '')
  const ex = inv.filter((i) => RE[c].test(i.slug) && !planned.has(i.path)).sort((a, b) => a.path.localeCompare(b.path))
  for (const i of ex) lines.push(`- \`${i.path}\` — ${title(i)}`)
  lines.push('', '## Product guide hubs', '', '- `/pest-product-guides` — index of all product guides', '- `/pest-product-guides/bed-bug-control`', '- `/pest-product-guides/rodent-control`', '- `/pest-product-guides/ant-control`', '- `/pest-product-guides/cockroach-control`', '- `/pest-product-guides/mosquito-gear`', '- `/pest-product-guides/tick-gear`', '')
  writeFileSync(join(DIR, `context-${c}.md`), lines.join('\n'))
}

console.log(`plan: ${pages.length} pages (${pages.filter((p) => p.kind === 'pillar').length} pillars, ${pages.filter((p) => p.kind === 'spoke').length} spokes)`)
for (const c of clusters) console.log(`  ${c.padEnd(13)} ${pages.filter((p) => p.cluster === c && p.kind === 'spoke').length} spokes`)
const covered = new Set([...pages.flatMap((p) => p.ranks), ...src.merged.map((m) => m.rank), ...src.broaden.map((b) => b.rank)])
const missing = kw.map((k) => Number(k.rank)).filter((r) => !covered.has(r))
const dup = [...pages.flatMap((p) => p.ranks), ...src.merged.map((m) => m.rank), ...src.broaden.map((b) => b.rank)].filter((r, i, a) => a.indexOf(r) !== i)
console.log(`keywords covered: ${covered.size}/100`, missing.length ? `MISSING ranks: ${missing.join(',')}` : '', dup.length ? `DUPLICATE ranks: ${dup.join(',')}` : '')
console.log(`routes: ${existing.size} existing, ${planned.size} planned`)
