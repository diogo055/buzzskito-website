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
  block = false,
  tag,
}: {
  asin?: string
  search?: string
  children: React.ReactNode
  className?: string
  /** Full-width, ≥44px tap-target button — for comparison-table rows and cards on mobile. */
  block?: boolean
  /** Optional per-cluster tracking ID (lib/amazon-clusters.ts). */
  tag?: string
}) {
  if (!AMAZON_ENABLED) return null
  const base = block
    ? 'not-prose flex w-full min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-gradient-to-b from-amber-500 to-amber-600 px-5 py-3 text-sm font-bold text-white no-underline shadow-sm transition-transform hover:-translate-y-0.5'
    : 'not-prose inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-gradient-to-b from-amber-500 to-amber-600 px-4 py-2 text-sm font-bold text-white no-underline shadow-sm transition-transform hover:-translate-y-0.5'
  return (
    <AmazonLink asin={asin} search={search} tag={tag} className={`${base} ${className}`}>
      {children}
    </AmazonLink>
  )
}
