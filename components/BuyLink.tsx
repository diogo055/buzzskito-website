import AmazonLink from '@/components/AmazonLink'
import { AMAZON_ENABLED } from '@/lib/amazon'

/**
 * Amber "check price" affiliate button. Thin wrapper over <AmazonLink> — the
 * fail-closed link layer. SERVER component (no client-side rewriting).
 *
 * FAIL-CLOSED: when no tag is configured, the button renders nothing at all, so
 * a disabled affiliate CTA never shows as a dead button and no Amazon URL is
 * emitted. When a tag is set, it renders a compliant rel="sponsored nofollow"
 * link. Existing pages keep using <BuyLink search="…"> unchanged.
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
  if (!AMAZON_ENABLED) return null
  return (
    <AmazonLink
      asin={asin}
      search={search}
      className={`not-prose inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-amber-500 to-amber-600 px-4 py-2 text-sm font-bold text-white no-underline shadow-sm transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </AmazonLink>
  )
}
