/**
 * Affiliate disclosure — legally required near the top of any page that carries
 * affiliate links (Canada: Competition Act deceptive-marketing provisions;
 * US, 24% of our traffic: FTC 16 CFR Part 255 "clear and conspicuous").
 * Place it ABOVE the first affiliate link, not buried in the footer.
 */
export default function AffiliateDisclosure() {
  return (
    <p className="not-prose text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 my-4 leading-relaxed">
      <strong className="text-gray-600">Disclosure:</strong> BuzzSkito may earn a small
      commission from qualifying purchases made through links on this page, at no extra
      cost to you. We only point to products we would genuinely use or recommend — the
      commission never changes our verdict.
    </p>
  )
}
