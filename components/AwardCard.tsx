import BuyLink from '@/components/BuyLink'
import AmazonLink from '@/components/AmazonLink'
import EditorialScore from '@/components/EditorialScore'
import ProsCons from '@/components/ProsCons'

export type Award = {
  /** Editorial award label — our own taxonomy, e.g. "Best Overall", "Best for Ticks". Never an Amazon "Best Seller"/"Amazon's Choice" claim. */
  badge: string
  name: string
  why: string
  search?: string
  asin?: string
  /** Our own editorial score out of 10 (optional). Never an Amazon rating. */
  score?: number
  pros?: string[]
  cons?: string[]
  cta?: string
  /** Highlights the overall winner card. */
  featured?: boolean
}

/**
 * A single "Best for X" award card in the multi-winner row. The editorial content
 * (badge, name, why, score, pros/cons) always renders; only the CTA fail-closes
 * via <BuyLink>, so there is never an orphan Amazon button. Award labels are our
 * own editorial taxonomy — compliant, no Amazon marks/prices/ratings involved.
 */
export default function AwardCard({
  badge,
  name,
  why,
  search,
  asin,
  score,
  pros,
  cons,
  cta,
  featured = false,
  tag,
  fr = false,
}: Award & { tag?: string; fr?: boolean }) {
  const ctaLabel = cta ?? (fr ? 'Voir le prix sur Amazon.ca' : 'Check price on Amazon.ca')
  return (
    <div
      className={`not-prose flex h-full flex-col rounded-2xl border bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5 ${
        featured ? 'border-amber-400 ring-1 ring-amber-200' : 'border-gray-200'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className={`text-[11px] font-extrabold uppercase tracking-wider ${
            featured ? 'text-amber-700' : 'text-brand-600'
          }`}
        >
          {featured ? '🏆 ' : ''}
          {badge}
        </span>
        {typeof score === 'number' && <EditorialScore score={score} />}
      </div>
      {/* The product NAME is a link, not just the button below. Microsoft Clarity
          showed ~8.7% dead clicks sitewide — nearly as many sessions as clicked
          through to Amazon — and this card animates on hover (see the wrapper's
          hover:-translate-y-0.5), which tells a reader the card is clickable while
          only the footer button actually was. AmazonLink fails closed to a <span>,
          so the name always renders even with no tag configured. */}
      <p className="mt-2 text-lg font-extrabold leading-tight text-brand-900">
        <AmazonLink
          search={search}
          asin={asin}
          tag={tag}
          component="AwardCard"
          label={badge}
          className="text-brand-900 no-underline transition-colors hover:text-amber-700 hover:underline"
        >
          {name}
        </AmazonLink>
      </p>
      <p className="mt-1 text-sm leading-relaxed text-gray-600">{why}</p>
      <ProsCons pros={pros ?? []} cons={cons ?? []} fr={fr} />
      <div className="mt-auto pt-4">
        <BuyLink search={search} asin={asin} tag={tag} block>
          {ctaLabel} →
        </BuyLink>
      </div>
    </div>
  )
}
