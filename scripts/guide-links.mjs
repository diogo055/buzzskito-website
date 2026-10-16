// What counts as a link from one guide to another (content/guides*/<slug>.json). Shared by
// scripts/validate-guide.mjs (its "inbound links from other new pages" rule) and
// scripts/release-scheduled.mjs (which holds back a page no guide links to yet), so the release
// job and the build's guide check always agree.

export const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g

// the visible text of one body block, where links may appear
export const blockTexts = (b) => {
  switch (b.type) {
    case 'h2': case 'h3': case 'p': return [b.text]
    case 'ul': case 'ol': return b.items || []
    case 'table': return [...(b.head || []), ...(b.rows || []).flat(), b.caption || '']
    case 'callout': return [b.title || '', b.text]
    case 'recipe': return [b.title, b.makes || '', ...(b.ingredients || []), ...(b.steps || []), b.works || '', b.limits || '', (b.safety && b.safety.pets) || '', (b.safety && b.safety.children) || '', b.source || '']
    case 'checklist': return [b.title || '', ...(b.items || [])]
    case 'card': return [b.title, b.intro || '', ...(b.items || []), b.note || '']
    case 'figure': return [b.caption || '']
    case 'chart': return [b.title || '', b.yLabel || '', b.caption || '', b.source || '']
    case 'map': return [b.title || '', b.caption || '', b.source || '', ...(b.categories || []).map((c) => c.label || '')]
    // the card names and tells are plain text; the cards' own links are counted by internalLinks
    case 'confused': return [b.title || '', ...(Array.isArray(b.items) ? b.items : []).flatMap((c) => [(c && c.name) || '', (c && c.note) || ''])]
    default: return []
  }
}

// the text of the box under the quick answer (rows, and the caption that names its sources)
export const factsTexts = (g) => (g.facts ? [...(Array.isArray(g.facts.rows) ? g.facts.rows.flat() : []), g.facts.caption || ''] : [])

// links that are not written in the text: links drawn into a map, and "confused" photo cards
export const blockHrefs = (b) => (b.type === 'map' ? Object.values(b.links || {}).map(String) : b.type === 'confused' && Array.isArray(b.items) ? b.items.filter((c) => c && typeof c.href === 'string').map((c) => c.href) : [])

// every internal page a guide links to (body, quick answer, facts box, links drawn into a map
// and "confused" photo cards), without #fragment or ?query, each once. FAQ answers carry no links.
export function internalLinks(g) {
  const texts = [...(g.body || []).flatMap(blockTexts), g.quickAnswer?.lead || '', ...(g.quickAnswer?.bullets || []), ...factsTexts(g)]
  const hrefs = []
  for (const t of texts) for (const m of String(t).matchAll(LINK)) if (m[2].startsWith('/')) hrefs.push(m[2])
  for (const b of g.body || []) hrefs.push(...blockHrefs(b))
  return [...new Set(hrefs.map((h) => h.replace(/[#?].*$/, '')))]
}

// how many links in from other guides a page needs before the build accepts it (a scheduled page
// needs one: its hub's, or any other guide's while its hub is deferred)
export const inboundNeeded = (planPage) => (planPage.batch === 'god' ? 1 : planPage.batch === 'visual' ? 2 : 3)
