// ─────────────────────────────────────────────────────────────────────────────
// THE single module permitted to construct an Amazon URL. FAIL-CLOSED.
// ─────────────────────────────────────────────────────────────────────────────
// The tracking tag comes ONLY from an environment variable. If it is unset, this
// module is physically incapable of producing an Amazon URL — amazonUrl() returns
// null and every consumer renders plain text instead of a link. That is the whole
// point: with PUBLIC_AMAZON_TAG unset, the built HTML contains zero Amazon hrefs.
//
// To go live after Amazon issues a new tracking ID: set PUBLIC_AMAZON_TAG in
// Vercel (Production + Preview) and redeploy. No code change. Every link then
// carries that ID. There is no hardcoded tag and no client-side link rewriting.
//
// Read at build time by SERVER components (pages are statically generated), so the
// value bakes into the static HTML that Amazon crawls.
// ─────────────────────────────────────────────────────────────────────────────

const TAG =
  process.env.PUBLIC_AMAZON_TAG ??
  process.env.NEXT_PUBLIC_AMAZON_TAG ??
  ''

export const AMAZON_ENABLED = TAG.length > 0

/** Amazon-mandated disclosure sentence. Rendered only when AMAZON_ENABLED. */
export const AMAZON_DISCLOSURE = 'As an Amazon Associate, BuzzSkito earns from qualifying purchases.'

/**
 * Returns a compliant Amazon.ca Special Link, or null when no tag is configured.
 * Never emits an untagged or bare Amazon URL. Accepts an ASIN (product link) or a
 * search query — both carry the tracking tag.
 */
// Full RFC-3986 encoding — encodeURIComponent leaves !'()* unescaped, which can
// put a raw apostrophe (e.g. "Coghlan's") into the query string: a malformed URL.
const enc = (s: string) =>
  encodeURIComponent(s).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase())

export function amazonUrl(opts: { asin?: string; search?: string }): string | null {
  if (!AMAZON_ENABLED) return null // fail closed
  if (opts.asin) {
    return `https://www.amazon.ca/dp/${enc(opts.asin)}?tag=${TAG}&linkCode=ll1&language=en_CA`
  }
  return `https://www.amazon.ca/s?k=${enc(opts.search ?? '')}&tag=${TAG}&linkCode=ll2&language=en_CA`
}
