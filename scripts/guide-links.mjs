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
    default: return []
  }
}

// every internal page a guide links to (body, quick answer, facts box, and links drawn into a
// map), without #fragment or ?query, each once. FAQ answers carry no links.
export function internalLinks(g) {
  const texts = [...(g.body || []).flatMap(blockTexts), g.quickAnswer?.lead || '', ...(g.quickAnswer?.bullets || []), ...(g.facts ? g.facts.rows.flat() : [])]
  const hrefs = []
  for (const t of texts) for (const m of String(t).matchAll(LINK)) if (m[2].startsWith('/')) hrefs.push(m[2])
  for (const b of g.body || []) if (b.type === 'map') for (const h of Object.values(b.links || {})) hrefs.push(String(h))
  return [...new Set(hrefs.map((h) => h.replace(/[#?].*$/, '')))]
}

// how many links in from other guides a page needs before the build accepts it (a scheduled page
// needs one: its hub's, or any other guide's while its hub is deferred)
export const inboundNeeded = (planPage) => (planPage.batch === 'god' ? 1 : planPage.batch === 'visual' ? 2 : 3)
