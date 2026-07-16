import Link from 'next/link'
import { BUSINESS, PRICING, SITE_URL } from '@/lib/constants'

/**
 * SeasonalOffer — a reusable seasonal-deal card + Offer JSON-LD.
 *
 * SERVER component (no client JS). Renders a visible "First Mosquito Treatment
 * from $99 / Tick Season from $497 bundled" offer card, and emits machine-
 * readable Offer structured data so Google, AI Overviews, and price-aware
 * answer engines can surface the season promotion.
 *
 * Prices are pulled from PRICING in lib/constants (single source of truth) —
 * this component NEVER hardcodes a price and NEVER changes a service price.
 *
 * Placement (opt-in per page — do NOT inject sitewide):
 *   • City mosquito pages   — e.g. app/mississauga-mosquito-control/page.tsx
 *   • /mosquito-control     — the mosquito service hub
 *   • /tick-control         — the tick service hub
 * Pass `url` = the page's own canonical path so the Offer.url points at the
 * page it renders on (defaults to the site root).
 *
 * Example:
 *   <SeasonalOffer url="/mississauga-mosquito-control" />
 */
export default function SeasonalOffer({
  url,
  validThrough = '2026-09-30',
  heading = "This Season's BuzzSkito Offers",
  className = 'my-12',
}: {
  /** Canonical path (e.g. '/mosquito-control') or absolute URL for Offer.url. */
  url?: string
  /** ISO date the season pricing is advertised through. */
  validThrough?: string
  /** Card heading — override per placement if useful. */
  heading?: string
  /** Wrapper spacing/util classes. */
  className?: string
}) {
  const offerUrl = url ? (url.startsWith('http') ? url : `${SITE_URL}${url}`) : SITE_URL

  const single = String(PRICING.singleTreatmentFrom)
  const tickBundle = String(PRICING.tickBundleFrom)

  const seller = {
    '@type': 'PestControlService',
    name: BUSINESS.legalName,
    url: SITE_URL,
    telephone: BUSINESS.phone,
  }

  // Emit each advertised deal as its own Offer node. priceValidUntil is the
  // Google-recognised property; validThrough is included per the offer-schema
  // spec so the promotion's end date is explicit in both vocabularies.
  const offers = [
    {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'First Mosquito Treatment',
      description:
        'One-time professional mosquito barrier spray for a standard residential lot (under 10,000 sq ft). Health Canada-approved, protects for up to 30 days.',
      price: single,
      priceCurrency: PRICING.currency,
      availability: 'https://schema.org/InStock',
      priceValidUntil: validThrough,
      validThrough,
      url: offerUrl,
      seller,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: single,
        priceCurrency: PRICING.currency,
        unitText: 'treatment',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Tick Season Protection (bundled)',
      description:
        'Full-season tick barrier spray (5 treatments) when added to any mosquito plan — save $100 versus the standalone tick season.',
      price: tickBundle,
      priceCurrency: PRICING.currency,
      availability: 'https://schema.org/InStock',
      priceValidUntil: validThrough,
      validThrough,
      url: offerUrl,
      seller,
    },
  ]

  const validLabel = new Date(`${validThrough}T00:00:00`).toLocaleDateString('en-CA', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <section className={className} aria-labelledby="seasonal-offer-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offers) }}
      />

      <div className="not-prose rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
          Limited season offer · through {validLabel}
        </p>
        <h2
          id="seasonal-offer-heading"
          className="mt-1 font-display text-2xl font-extrabold tracking-tight text-brand-900 sm:text-3xl"
        >
          {heading}
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-brand-100 bg-white p-5">
            <p className="text-sm font-semibold text-brand-700">First Mosquito Treatment</p>
            <p className="mt-1 text-3xl font-extrabold text-brand-900">
              from ${single}
              <span className="text-base font-semibold text-gray-500"> {PRICING.currency}</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              A one-time barrier spray for a standard lot — kills mosquitoes on contact and keeps
              your yard protected for up to 30 days.
            </p>
          </div>

          <div className="rounded-xl border border-brand-100 bg-white p-5">
            <p className="text-sm font-semibold text-brand-700">Tick Season — bundled</p>
            <p className="mt-1 text-3xl font-extrabold text-brand-900">
              from ${tickBundle}
              <span className="text-base font-semibold text-gray-500"> {PRICING.currency}</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Full-season tick protection (5 sprays) added to any mosquito plan — save $100 versus
              booking tick control on its own.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/free-yard-assessment" className="btn-primary press-scale">
            Get a Free Quote
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="btn-ghost press-scale"
            aria-label={`Call BuzzSkito at ${BUSINESS.phone}`}
          >
            Call {BUSINESS.phone}
          </a>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          Backed by the {BUSINESS.guarantee.short}. Prices scale by lot size — your final quote is
          confirmed before any work begins.
        </p>
      </div>
    </section>
  )
}
