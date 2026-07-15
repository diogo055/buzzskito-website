import BuyLink from '@/components/BuyLink'
import { AMAZON_ENABLED } from '@/lib/amazon'

/**
 * "Our Top Pick" verdict box — the highest-converting affiliate pattern:
 * a single unambiguous recommendation near the top of a product page.
 * SERVER component, fail-closed: renders nothing when no tag is configured
 * (same contract as BuyLink), so it can never emit an orphan CTA.
 */
export default function TopPick({
  label = 'Our Top Pick',
  name,
  blurb,
  search,
  cta = 'Check price on Amazon.ca',
}: {
  label?: string
  name: string
  blurb: string
  search: string
  cta?: string
}) {
  if (!AMAZON_ENABLED) return null
  return (
    <div className="not-prose my-8 rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm">
      <p className="mb-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-700">🏆 {label}</p>
      <p className="mb-1 text-lg font-extrabold text-brand-900">{name}</p>
      <p className="mb-4 text-sm leading-relaxed text-gray-700">{blurb}</p>
      <BuyLink search={search}>{cta}</BuyLink>
    </div>
  )
}
