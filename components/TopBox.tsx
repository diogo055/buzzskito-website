import BuyLink from '@/components/BuyLink'
import AmazonLink from '@/components/AmazonLink'
import { AMAZON_ENABLED, AMAZON_US_ENABLED, AMAZON_DISCLOSURE, type AmazonStore } from '@/lib/amazon'

/**
 * "Top box": the page's #1 pick near the very top of product and remedy pages, directly under
 * the opening section, so a phone reader meets it within the first screen or two (owner,
 * Oct 20, 2026). Why: data/amazon/reverse-engineering-2026-10-20.md found readers click near the
 * top (a link in the first 5% of a page gets about 25 clicks per 1,000 views, one past the 60%
 * mark about 3), while on the 40 busiest Amazon pages the first link sat about 3 phone screens
 * down.
 *
 * It repeats the page's StickyBuyBar exactly (same name, search term, ASIN, label and tag), so
 * it adds no new product or claim. The page's AffiliateDisclosure sits directly above it.
 * SERVER component, fail-closed like BuyLink. Analytics placement: "TopBox".
 *
 * `inline`: for pages whose disclosure sits inside the article column (no outer wrapper).
 * `disclosure`: for pages whose AffiliateDisclosure comes further down; the box then carries
 * Amazon's required sentence itself, so no Amazon link appears above a disclosure.
 * `store`: "com" on the US guides only (amazon.com, the US tag; components/GuidePage.tsx), with
 * its own pick from lib/amazon-us-picks.json. Every other page keeps the default amazon.ca.
 */
export default function TopBox({
  name,
  search,
  asin,
  label = 'Top pick',
  cta,
  tag,
  inline = false,
  disclosure = false,
  store,
  component = 'TopBox',
}: {
  name: string
  search?: string
  asin?: string
  label?: string
  cta?: string
  /** Optional per-cluster tracking ID (lib/amazon-clusters.ts). */
  tag?: string
  inline?: boolean
  disclosure?: boolean
  store?: AmazonStore
  /** Analytics placement label. */
  component?: string
}) {
  if (store === 'com' ? !AMAZON_US_ENABLED : !AMAZON_ENABLED) return null
  const buttonText = cta ?? (store === 'com' ? 'Check price on Amazon' : 'Check price on Amazon.ca')
  if (!asin && !(search ?? '').trim()) return null
  const box = (
    <div className="not-prose my-4 flex flex-col gap-3 rounded-2xl border-2 border-amber-400 bg-amber-50 px-4 py-3 shadow-sm sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        {disclosure && <p className="mb-2 text-[11px] leading-snug text-amber-900/60">{AMAZON_DISCLOSURE}</p>}
        <p className="text-[11px] font-extrabold uppercase leading-none tracking-wide text-amber-700">{store === 'com' ? label : `🏆 ${label}`}</p>
        <p className="mt-1 text-base font-extrabold leading-snug text-brand-900">
          <AmazonLink
            search={search}
            asin={asin}
            tag={tag}
            store={store}
            component={component}
            className="text-brand-900 no-underline transition-colors hover:text-amber-700 hover:underline"
          >
            {name}
          </AmazonLink>
        </p>
      </div>
      <BuyLink search={search} asin={asin} tag={tag} store={store} component={component} block className="sm:w-auto sm:shrink-0">
        {buttonText} →
      </BuyLink>
    </div>
  )
  if (inline) return box
  return (
    <div className="bg-white px-4">
      <div className="mx-auto max-w-4xl">{box}</div>
    </div>
  )
}
