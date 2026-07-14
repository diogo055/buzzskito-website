import { AMAZON_ENABLED, AMAZON_DISCLOSURE } from '@/lib/amazon'

/**
 * Amazon-mandated affiliate disclosure. Rendered in plain server HTML (reviewers
 * read the static source), above the first Amazon link on the page.
 *
 * FAIL-CLOSED: renders only when AMAZON_ENABLED, so it appears exactly when the
 * links do — no orphan disclosure when links are off, and it uses Amazon's
 * required wording verbatim.
 */
export default function AffiliateDisclosure() {
  if (!AMAZON_ENABLED) return null
  return (
    <p className="not-prose text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 my-4 leading-relaxed">
      <strong className="text-gray-600">{AMAZON_DISCLOSURE}</strong> BuzzSkito only
      points to products we would genuinely use or recommend, at no extra cost to you.
    </p>
  )
}
