import { amazon, AFFILIATE_ENABLED } from '@/lib/affiliate'

/**
 * Affiliate buy-button. Renders a styled outbound link that is ALWAYS
 * rel="sponsored nofollow noopener" (required by both Amazon's operating
 * agreement and Google's affiliate-link policy — protects rankings and
 * AI-citation eligibility). Works whether or not a tag is configured: with a
 * tag it monetizes, without one it is just a helpful retailer link.
 *
 *   <BuyLink search="summit mosquito dunks">Check price on Amazon →</BuyLink>
 *   <BuyLink asin="B000BQXH2S">See it on Amazon.ca →</BuyLink>
 *
 * Use inside article prose. Keep the label honest ("check price", not "buy now").
 */
export default function BuyLink({
  asin,
  search,
  children,
  className = '',
}: {
  asin?: string
  search?: string
  children: React.ReactNode
  className?: string
}) {
  const href = amazon({ asin, search })
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      data-affiliate={AFFILIATE_ENABLED ? 'amazon-ca' : 'unmonetized'}
      className={`not-prose inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-amber-500 to-amber-600 px-4 py-2 text-sm font-bold text-white no-underline shadow-sm transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  )
}
