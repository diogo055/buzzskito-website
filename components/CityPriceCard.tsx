import { BUSINESS, PROMISES } from '@/lib/constants'
import QuoteLink from '@/components/QuoteLink'

/**
 * A compact "Get your {City} price" card placed inside long city pages, so a reader is never more than about
 * six phone screens from a way to ask for a quote. (The audit found about 14 screens with no quote button on
 * the Toronto tick page.) Additive: no heading element, so the page outline is unchanged.
 */
export default function CityPriceCard({
  city,
  service = 'mosquito',
  location = 'price_card',
}: {
  city: string
  service?: 'mosquito' | 'tick'
  location?: string
}) {
  return (
    <aside className="my-8 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-5 not-prose" aria-label={`Get your ${city} price`}>
      <p className="text-lg font-extrabold text-brand-900">Get your {city} price</p>
      <p className="mt-1 text-sm text-gray-700">{PROMISES.response} {PROMISES.rainBackShort}.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <QuoteLink service={service} location={location} className="btn-primary press-scale">
          Get my price
        </QuoteLink>
        <a
          href={BUSINESS.smsHref}
          data-lead-location={location}
          className="btn-ghost press-scale border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white"
        >
          Text us
        </a>
        <a
          href={BUSINESS.phoneHref}
          data-lead-location={location}
          className="inline-flex items-center px-2 py-3 font-bold text-brand-800 underline underline-offset-4"
          aria-label={`Call BuzzSkito at ${BUSINESS.phone}`}
        >
          {BUSINESS.phone}
        </a>
      </div>
    </aside>
  )
}
