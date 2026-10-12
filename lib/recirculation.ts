// Read side of the in-content recirculation picks. Server only: nothing here reaches the browser.
//
// The picks are made by scripts/backfill-recirculation.mjs (npm run recirculation:backfill) and
// stored in lib/recirculation.json; hand-set picks live in data/recirculation-overrides.json.
import picks from '@/lib/recirculation.json'
import index from '@/lib/article-index.json'

export type RecircArticle = { path: string; title: string; full?: string; hook: string; cluster: string; image: string | null }

const ARTICLES = index.articles as RecircArticle[]
const BY_PATH = new Map(ARTICLES.map((a) => [a.path, a]))
const PAGES = picks.pages as Record<string, { next: string | null; related: string[]; cards?: string[]; off?: boolean; bar?: boolean }>

/**
 * Master switch for OUR fixed "keep reading" bar (components/KeepReadingBar.tsx). Set it to false
 * if Mediavine's own Grow "What's Next" unit is turned on, so the two do not stack. The quote bar
 * stays hidden on articles either way (lib/keep-reading-bar-routes.ts).
 */
export const KEEP_READING_BAR_ENABLED = true

/** Does this page show the fixed "keep reading" bar? True for articles without the Amazon buy bar. */
export const hasKeepReadingBar = (path: string): boolean => PAGES[path]?.bar === true

/** The article offered as "Next" on this page, or null if the page has none (or the units are switched off). */
export function nextArticle(path: string): RecircArticle | null {
  const next = PAGES[path]?.next
  return (next && BY_PATH.get(next)) || null
}

/** The two or three articles offered as "Related" on this page. */
export function relatedArticles(path: string): RecircArticle[] {
  return (PAGES[path]?.related || []).map((p) => BY_PATH.get(p)).filter((a): a is RecircArticle => Boolean(a))
}

/** The three "Keep reading" cards stored for this page (empty if the page has none stored). */
export function storedCards(path: string): RecircArticle[] {
  return (PAGES[path]?.cards || []).map((p) => BY_PATH.get(p)).filter((a): a is RecircArticle => Boolean(a))
}

/** Every address this page already offers in its in-content units, so "Keep reading" can avoid repeating one. */
export function inContentPicks(path: string): Set<string> {
  const page = PAGES[path]
  return new Set([page?.next, ...(page?.related || [])].filter((p): p is string => Boolean(p)))
}

/** '/blog/no-see-um-bites' -> 'no-see-um-bites' (what the GA4 event reports as target_slug). */
export const slugOf = (path: string) => path.split('/').filter(Boolean).pop() || ''

/**
 * A title short enough to read as a link inside a sentence:
 * "Best Wasp Nest Spray Canada 2026 — PMRA-Legal Foams & Jets Compared" -> "Best Wasp Nest Spray Canada 2026".
 * Cuts at the first dash, pipe or colon, or after a question mark; drops a trailing bracket only
 * if what is left still says something; never cuts down to a stub.
 */
export function shortTitle(title: string): string {
  const lead = title.split(/\s[—–|]\s|:\s|(?<=\?)\s/)[0].trim()
  const noParen = lead.split(/\s\(/)[0].trim()
  const cut = noParen.length >= 18 ? noParen : lead
  return cut.length >= 10 ? cut : title
}

/** The whole title of an article (the index also keeps a clipped copy for the "Keep reading" cards). */
export const fullTitle = (a: RecircArticle) => a.full || a.title

/** The "Next" headline: the whole title when it fits in about three lines on a phone, otherwise its lead. */
export function headline(a: RecircArticle): string {
  const full = fullTitle(a)
  return full.length <= 80 ? full : shortTitle(full)
}
