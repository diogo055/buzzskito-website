/**
 * Levanta partner links, keyed by ASIN.
 *
 * WHY THIS FILE EXISTS SEPARATELY FROM lib/amazon.ts
 * Levanta is a brand-direct affiliate network paid through Amazon Attribution.
 * Brands set their own rates, typically 3-5x Amazon's native rate — the reference
 * case is the Flowtron bug zapper at $259.99 x 15% = $39.00 per conversion,
 * against the ~$2.21 this site currently averages per order.
 *
 * THE RULE THAT MAKES THIS A SWAP AND NOT AN ADDITION:
 * You cannot stack a Levanta commission with the Amazon Associates native
 * commission on the same sale. It is one or the other, per ASIN. So when an ASIN
 * appears here, amazonUrl() emits the Levanta URL and DROPS the Associates tag
 * entirely. Emitting both would not pay twice; it would just be ambiguous.
 *
 * THE TRADEOFF, so nobody swaps blindly:
 * Associates pays on EVERYTHING the customer buys within 24 hours. Levanta pays
 * only on the linked product, but with a 14-day attribution window. On a page
 * where readers fill a basket, Associates at ~5% can beat Levanta at 12%. Compute
 * the ratio of total ordered revenue to linked-product revenue per page from the
 * Associates report before swapping. On HIGH-TICKET items this mostly disappears —
 * $39 on one conversion beats any plausible cart bonus on a $46 basket.
 *
 * HOW TO ADD ONE (the owner generates these; see data/levanta-application-queue.md):
 *   1. Get the brand partnership approved in Levanta (per brand, not per account).
 *   2. Paste the Amazon product URL into Levanta QuickLinks -> generate link.
 *   3. Add a row below: ASIN -> the generated URL.
 *   4. Log the swap in data/pending-levanta-swap.csv and re-run the build.
 * No page edits are needed — the link layer resolves it everywhere that ASIN is used.
 */

/** Hosts a Levanta link is allowed to point at. Anything else is rejected at build. */
export const LEVANTA_HOSTS = ['levanta.io', 'app.levanta.io', 'www.amazon.com', 'www.amazon.ca']

export type LevantaLink = {
  /** The full URL Levanta generated. */
  url: string
  /** Brand name, for reporting. */
  brand: string
  /** Commission rate as a percentage, for the revenue-per-order model. */
  ratePct: number
  /** Approximate list price, for the same. Never rendered to a page. */
  approxPrice: number
  /** Which marketplaces the product is actually stocked in. */
  markets: Array<'us' | 'ca'>
  /** Date the link was added, for the quarterly re-verification sweep. */
  added: string
}

/**
 * ASIN -> Levanta link. EMPTY UNTIL THE OWNER'S ACCOUNT AND BRAND PARTNERSHIPS
 * ARE APPROVED. An empty map means every link keeps its Associates tag, which is
 * exactly the correct behaviour — nothing waits on this file.
 */
export const LEVANTA_LINKS: Record<string, LevantaLink> = {
  // Example of the shape, deliberately commented out so it cannot ship by accident:
  //
  // B01F1TGEOK: {
  //   url: 'https://levanta.io/...',
  //   brand: 'Flowtron',
  //   ratePct: 15,
  //   approxPrice: 259.99,
  //   markets: ['us', 'ca'],
  //   added: '2026-09-__',
  // },
}

/** Returns the Levanta link for an ASIN, or null. Validates the host — a link on an
 *  unexpected host is treated as absent rather than emitted, so a paste error
 *  degrades to the Associates link instead of shipping a broken URL. */
export function levantaFor(asin?: string): LevantaLink | null {
  if (!asin) return null
  const hit = LEVANTA_LINKS[asin]
  if (!hit) return null
  try {
    const host = new URL(hit.url).hostname.replace(/^www\./, '')
    const ok = LEVANTA_HOSTS.some((h) => host === h.replace(/^www\./, ''))
    return ok ? hit : null
  } catch {
    return null
  }
}

/** True when any Levanta link is configured — used by reporting, not by rendering. */
export const LEVANTA_ACTIVE = Object.keys(LEVANTA_LINKS).length > 0
