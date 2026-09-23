// Phase 0 — inventory every Amazon link on every in-scope page.
// Reads SOURCE (not the build) so it can report component and position.
// Tag resolution replicates tagForSlug() from lib/amazon-clusters.ts exactly.
import { readFileSync, readdirSync, existsSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const SCOPES = ['app/blog', 'app/pest-product-guides', 'app/learn']
const DEFAULT_TAG = 'buzzskito200b-20'
const KNOWN = new Set(['roach', 'ant', 'dehumidifier', 'mosquito', 'flies', 'wildlife', 'bedbug', 'sprayer', 'rodent',
  'wasp', 'steamer', 'general', 'tick', 'fogger', 'airpurifier'].map(t => `buzzskito-${t}-20`).concat([DEFAULT_TAG]))

// --- exact copy of the rule table from lib/amazon-clusters.ts (order matters) ---
const RULES = [
  [/bed-?bug|punaise|packtite|zappbug|thermalstrike|thermal-strike|sleep-tight|encasement|cimexa|ecoraider/, 'bedbug'],
  [/\btick|lyme|blacklegged/, 'tick'],
  [/mosquito|dynatrap|mosquito-magnet|west-nile|thermacell|permethrin|picaridin|\bdeet\b|insect-repellent|bug-repellent|citronella|screen-door/, 'mosquito'],
  [/raccoon|deer(?!-fl)|electric-fence|fence-charger|fence-for|repeller|yard-enforcer|havahart|zareba|nuisance-wildlife|spray-away|live-animal-trap|live-trap|motion-activated-sprinkler/, 'wildlife'],
  [/mouse|mice|\brat\b|rat-|rats\b|rodent|attic|\brv\b|rv-|vole|chipmunk|\bmole|squirrel|gopher|exclusion|goodnature|\ba24\b|rat-zapper/, 'rodent'],
  [/horse-?fly|\bflies\b|fly-trap|fly-light|fly-killer|drain-fly|fungus-gnat|\bgnat|\bh-trap|faicuk|fly-sconce/, 'flies'],
  [/wasp|hornet|\bbee\b|bee-suit|yellow-?jacket|nest/, 'wasp'],
  [/carpenter-ant|\bants?\b|ant-control|ant-kit/, 'ant'],
  [/roach|cockroach/, 'roach'],
  [/dehumidifier/, 'dehumidifier'],
  [/air-purifier|hepa-vacuum|dust-mite-vacuum|wildfire-smoke/, 'airpurifier'],
  [/steam|steamer|dupray|vapamore|mcculloch/, 'steamer'],
  [/fogger|thermal-fog|\bulv\b|cold-fog/, 'fogger'],
  [/sprayer|spreader|backpack|chapin|field-king|pump-pressure|atv-sprayer|misting|broadcast|tow-behind|edgeguard/, 'sprayer'],
]
const clusterFor = slug => (RULES.find(([re]) => re.test(slug)) || [null, 'general'])[1]

const ELEMENTS = ['BuyLink', 'AwardRow', 'AwardCard', 'TopPick', 'StickyBuyBar', 'AmazonLink']
const elemRe = new RegExp(`<(${ELEMENTS.join('|')})\\b([^>]*?)(?:/>|>([\\s\\S]*?)</\\1>)`, 'g')
const attr = (s, n) => { const m = s.match(new RegExp(`\\b${n}=(?:"([^"]*)"|'([^']*)'|\\{([^}]*)\\})`)); return m ? (m[1] ?? m[2] ?? m[3] ?? '') : '' }
const prose = src => src.replace(/^import[^\n]*\n/gm, '').replace(/<script[\s\S]*?<\/script>/g, '').replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
  .replace(/<[^>]+>/g, ' ').replace(/\{[^}]*\}/g, ' ').replace(/&[a-z]+;/g, ' ')

const rows = [], pageStats = []
for (const scope of SCOPES) {
  const dir = join(ROOT, scope)
  if (!existsSync(dir)) continue
  for (const d of readdirSync(dir)) {
    const f = join(dir, d, 'page.tsx')
    if (!existsSync(f)) continue
    const src = readFileSync(f, 'utf8')
    const path = `/${scope.replace('app/', '')}/${d}`
    // page default tag: tagForSlug('<literal>') or fallback to directory slug
    const tf = src.match(/tagForSlug\(\s*['"`]([^'"`]+)['"`]\s*\)/)
    const slugForTag = tf ? tf[1] : d
    const topic = clusterFor(slugForTag)
    const pageTag = src.includes('tagForSlug(') ? `buzzskito-${topic}-20` : DEFAULT_TAG
    const usesTagForSlug = !!tf
    const hasDisclosure = src.includes('<AffiliateDisclosure')
    const bodyWords = prose(src).split(/\s+/).filter(w => /[a-z]{2,}/i.test(w))
    const totalWords = bodyWords.length

    let idx = 0, firstAt = null, m
    elemRe.lastIndex = 0
    while ((m = elemRe.exec(src))) {
      idx++
      const [, comp, attrs, inner] = m
      const asin = attr(attrs, 'asin'), search = attr(attrs, 'search'), href = attr(attrs, 'href')
      const tagExpr = attr(attrs, 'tag')
      let tag = pageTag
      if (/CLUSTER_TAGS\.(\w+)/.test(tagExpr)) tag = `buzzskito-${tagExpr.match(/CLUSTER_TAGS\.(\w+)/)[1]}-20`
      else if (/^buzzskito/.test(tagExpr)) tag = tagExpr
      else if (!tagExpr) tag = DEFAULT_TAG
      const link_type = asin ? 'dp_asin' : search ? 'search' : (href ? 'other' : (comp === 'StickyBuyBar' ? 'search' : 'other'))
      const wordsBefore = prose(src.slice(0, m.index)).split(/\s+/).filter(w => /[a-z]{2,}/i.test(w)).length
      const pct = totalWords ? Math.round(wordsBefore / totalWords * 100) : 0
      if (firstAt === null && comp !== 'StickyBuyBar') firstAt = wordsBefore
      const anchor = (inner || attr(attrs, 'name') || attr(attrs, 'cta') || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 80)
      rows.push({ page_path: path, topic, tag, tag_known: KNOWN.has(tag), page_default_tag: pageTag, uses_tagForSlug: usesTagForSlug,
        link_type, asin, search_term: search, anchor_text: anchor, position_index: idx, words_before: wordsBefore, pct_through: pct,
        in_first_600_words: comp === 'StickyBuyBar' ? 'sticky' : (wordsBefore <= 600), component: comp })
    }
    const affCount = idx
    pageStats.push({ page_path: path, topic, page_default_tag: pageTag, links: affCount, first_link_words: firstAt, total_words: totalWords,
      has_disclosure: hasDisclosure, disclosure_missing_but_links: affCount > 0 && !hasDisclosure })
  }
}

mkdirSync(join(ROOT, 'reports'), { recursive: true })
const csvEsc = v => `"${String(v ?? '').replace(/"/g, '""')}"`
const cols = Object.keys(rows[0])
writeFileSync(join(ROOT, 'reports/amazon_links.csv'), [cols.join(','), ...rows.map(r => cols.map(c => csvEsc(r[c])).join(','))].join('\n'))
writeFileSync(join(ROOT, 'reports/page_link_stats.json'), JSON.stringify(pageStats, null, 1))

// ---- summary ----
const by = (arr, k) => arr.reduce((m, r) => (m[r[k]] = (m[r[k]] || 0) + 1, m), {})
const tagCounts = by(rows, 'tag'), typeCounts = by(rows, 'link_type'), compCounts = by(rows, 'component')
const unknownTag = rows.filter(r => !r.tag_known)
const defaultTag = rows.filter(r => r.tag === DEFAULT_TAG)
const zeroLink = pageStats.filter(p => p.links === 0)
const late = pageStats.filter(p => p.links > 0 && p.first_link_words !== null && p.first_link_words > 600)
const noDisc = pageStats.filter(p => p.disclosure_missing_but_links)
// tag/topic mismatch: element tag cluster != page topic (excluding explicit CLUSTER_TAGS overrides which are deliberate)
const mismatch = rows.filter(r => r.tag !== DEFAULT_TAG && r.tag !== `buzzskito-${r.topic}-20` && !/CLUSTER_TAGS/.test(r.tag))

const md = `# Phase 0 — Amazon link inventory

Generated ${new Date().toISOString().slice(0, 10)} from source of ${pageStats.length} in-scope pages.

## Totals
- Pages in scope: **${pageStats.length}** (blog ${pageStats.filter(p => p.page_path.startsWith('/blog/')).length}, product-guides ${pageStats.filter(p => p.page_path.startsWith('/pest-product-guides/')).length}, learn ${pageStats.filter(p => p.page_path.startsWith('/learn/')).length})
- Amazon elements: **${rows.length}** on ${pageStats.filter(p => p.links > 0).length} pages
- Pages with zero Amazon links: **${zeroLink.length}**

## By tag
| tag | elements |
|---|---|
${Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).map(([t, n]) => `| ${t} | ${n} |`).join('\n')}

## By link type
${Object.entries(typeCounts).map(([t, n]) => `- ${t}: ${n}`).join('\n')}

## By component
${Object.entries(compCounts).map(([t, n]) => `- ${t}: ${n}`).join('\n')}

## Links on the DEFAULT tag (${DEFAULT_TAG}) — ${defaultTag.length}
${defaultTag.length ? [...new Set(defaultTag.map(r => r.page_path))].map(p => `- ${p} (${defaultTag.filter(r => r.page_path === p).length})`).join('\n') : '(none — every element resolves to a cluster tag)'}

## Links on an UNKNOWN tag — ${unknownTag.length}
${unknownTag.length ? unknownTag.map(r => `- ${r.page_path}: ${r.tag}`).join('\n') : '(none)'}

> **Brief correction:** the brief's "$0.78/click untagged group" does not exist as untagged links. Amazon's "Other" row is the four tags it does not itemize — tick, ant, fogger, airpurifier — and tick is ~85% of it. Those links are correctly tagged and must not be changed.

## Pages with ZERO Amazon links — ${zeroLink.length}
${zeroLink.map(p => `- ${p.page_path}`).join('\n')}

## Pages whose FIRST Amazon link is after ~600 words — ${late.length}
${late.sort((a, b) => b.first_link_words - a.first_link_words).map(p => `- ${p.page_path} — first link at word ${p.first_link_words} of ${p.total_words} (${Math.round(p.first_link_words / p.total_words * 100)}%)`).join('\n')}

## Disclosure missing on a page WITH links — ${noDisc.length}
${noDisc.length ? noDisc.map(p => `- ${p.page_path}`).join('\n') : '(none — invariant holds)'}

## Tag / topic mismatches (element tag ≠ page topic, not an explicit override) — ${mismatch.length}
${mismatch.length ? mismatch.map(r => `- ${r.page_path}: topic ${r.topic}, element tag ${r.tag}`).join('\n') : '(none)'}
`
writeFileSync(join(ROOT, 'reports/phase0_summary.md'), md)
console.log(`pages ${pageStats.length} | elements ${rows.length} | zero-link ${zeroLink.length} | late-first-link ${late.length} | default-tag ${defaultTag.length} | unknown-tag ${unknownTag.length} | no-disclosure ${noDisc.length} | mismatch ${mismatch.length}`)
console.log('tags:', JSON.stringify(tagCounts))
