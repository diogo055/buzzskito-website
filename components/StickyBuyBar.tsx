import BuyLink from '@/components/BuyLink'
import { AMAZON_ENABLED } from '@/lib/amazon'
import StickyBarShell from '@/components/StickyBarShell'

/**
 * Persistent mobile buy-bar — the single biggest mobile-conversion lever.
 * SERVER component, fail-closed: renders nothing when no tag is configured, so it
 * can never emit an orphan CTA. The href is built by <BuyLink>/<AmazonLink>
 * server-side; the client <StickyBarShell> only toggles visibility on scroll.
 *
 * COMPLIANCE: text-only label, NO price, rel="sponsored nofollow" (inherited from
 * AmazonLink). Never populate with a live Amazon price.
 */
export default function StickyBuyBar({
  name,
  search,
  asin,
  label = 'Top pick',
  cta = 'Check price on Amazon.ca',
}: {
  name: string
  search?: string
  asin?: string
  label?: string
  cta?: string
}) {
  if (!AMAZON_ENABLED) return null
  return (
    <StickyBarShell>
      <div className="mx-2 mb-2 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/95 px-3 py-2.5 shadow-2xl backdrop-blur">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-extrabold uppercase tracking-wide text-amber-700 leading-none">{label}</p>
          <p className="mt-0.5 truncate text-sm font-bold text-brand-900 leading-tight">{name}</p>
        </div>
        <BuyLink search={search} asin={asin} className="shrink-0 !px-5 !py-2.5">
          {cta} →
        </BuyLink>
      </div>
    </StickyBarShell>
  )
}
