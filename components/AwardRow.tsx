import type { ReactNode } from 'react'
import AwardCard, { type Award } from '@/components/AwardCard'
import { AMAZON_ENABLED, AMAZON_DISCLOSURE } from '@/lib/amazon'

/**
 * The multi-winner award cluster — replaces the single "Our Top Pick" with 3–6
 * intent-differentiated winners so every buyer segment finds a match (the core
 * multi-intent conversion lift). Follows the cards with an optional
 * "Which one should you buy?" decision router that also doubles as an
 * answer-first capsule for AI overviews.
 *
 * All content is our own editorial taxonomy — fully compliant. CTAs fail-closed
 * through <BuyLink>.
 */
export default function AwardRow({
  heading = 'Our Picks',
  awards,
  whichToBuy,
}: {
  heading?: string
  awards: Award[]
  whichToBuy?: ReactNode
}) {
  if (awards.length === 0) return null
  return (
    <section aria-label={heading} className="not-prose my-8">
      {heading && (
        <h2 className="mb-2 text-2xl font-extrabold text-brand-900">{heading}</h2>
      )}
      {AMAZON_ENABLED && (
        <p className="mb-4 text-[11px] leading-snug text-gray-500">{AMAZON_DISCLOSURE} Prices are shown on Amazon.ca, at no extra cost to you.</p>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((a) => (
          <AwardCard key={a.badge + a.name} {...a} />
        ))}
      </div>
      {whichToBuy && (
        <div className="mt-5 rounded-xl border border-brand-100 bg-brand-50 p-5">
          <p className="mb-1.5 text-sm font-extrabold uppercase tracking-wide text-brand-700">
            Which one should you buy?
          </p>
          <div className="text-[15px] leading-relaxed text-gray-700 [&_a]:font-semibold [&_a]:text-brand-700 [&_a:hover]:underline">
            {whichToBuy}
          </div>
        </div>
      )}
    </section>
  )
}
