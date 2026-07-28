import BuyLink from '@/components/BuyLink'
import AmazonLink from '@/components/AmazonLink'
import EditorialScore from '@/components/EditorialScore'
import ProsCons from '@/components/ProsCons'
import { AMAZON_ENABLED, AMAZON_DISCLOSURE } from '@/lib/amazon'

/**
 * "Our Top Pick" verdict box — the highest-converting affiliate pattern:
 * a single unambiguous recommendation near the top of a product page.
 * SERVER component, fail-closed: renders nothing when no tag is configured
 * (same contract as BuyLink), so it can never emit an orphan CTA.
 *
 * Optional `score` shows our OWN editorial rating (never an Amazon rating), and
 * optional `pros`/`cons` add a scannable trust block.
 */
export default function TopPick({
  label = 'Our Top Pick',
  name,
  blurb,
  search,
  asin,
  cta = 'Check price on Amazon.ca',
  score,
  pros,
  cons,
  tag,
}: {
  label?: string
  name: string
  blurb: string
  search?: string
  asin?: string
  cta?: string
  score?: number
  pros?: string[]
  cons?: string[]
  /** Optional per-cluster tracking ID (lib/amazon-clusters.ts). */
  tag?: string
}) {
  if (!AMAZON_ENABLED) return null
  return (
    <div className="not-prose my-8 rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm">
      <p className="mb-3 text-[11px] leading-snug text-amber-900/60">{AMAZON_DISCLOSURE} Price shown on Amazon.ca, at no extra cost to you.</p>
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">🏆 {label}</p>
        {typeof score === 'number' && <EditorialScore score={score} />}
      </div>
      {/* Name is a link as well as the button below — readers reach for the
          product name first. AmazonLink fails closed to a <span>. */}
      <p className="mb-1 text-lg font-extrabold text-brand-900">
        <AmazonLink
          search={search}
          asin={asin}
          tag={tag}
          className="text-brand-900 no-underline transition-colors hover:text-amber-700 hover:underline"
        >
          {name}
        </AmazonLink>
      </p>
      <p className="mb-4 text-sm leading-relaxed text-gray-700">{blurb}</p>
      <ProsCons pros={pros ?? []} cons={cons ?? []} />
      <BuyLink search={search} asin={asin} tag={tag}>{cta}</BuyLink>
    </div>
  )
}
