import { BUSINESS, PRICING, PROMISES } from '@/lib/constants'
import QuoteLink from '@/components/QuoteLink'

/**
 * Typical prices for a standard lot, shown as representative cases rather than a calculator. People leave
 * pages that hide prices, and when prices vary, a few typical scenarios (including by lot size) beat an
 * interactive calculator (NN/g, "Show prices for common scenarios"). Every number comes from PRICING, so a
 * price change is one edit. Additive block: it adds content and one h2 and removes nothing from a page.
 */
const money = (n: number) => `$${n.toLocaleString('en-CA')}`

type Row = { name: string; detail: string; price: string; tag?: string }

export default function TypicalPrices({
  service = 'mosquito',
  city,
  showQuoteButton = true,
}: {
  service?: 'mosquito' | 'tick'
  city?: string
  /** Set false on the quote page itself, where "Get my exact price" would link to the page you are on. */
  showQuoteButton?: boolean
}) {
  const mosquitoRows: Row[] = [
    { name: 'One treatment', detail: 'A single visit', price: `from ${money(PRICING.singleTreatmentFrom)}` },
    { name: 'Basic season', detail: '5 sprays, monthly, May–Sept', price: money(PRICING.basicSeason) },
    { name: 'Standard season', detail: '10 sprays, every 2 weeks', price: money(PRICING.standardSeason), tag: 'Most popular' },
    { name: 'Exclusive season', detail: '20+ sprays, weekly', price: money(PRICING.exclusiveSeason) },
  ]
  const tickRow: Row = {
    name: 'Tick control',
    detail: `5 sprays per season · ${money(PRICING.tickBundleFrom)} with any mosquito plan`,
    price: `${money(PRICING.tickStandaloneFrom)} on its own`,
  }
  const rows = service === 'tick' ? [tickRow, ...mosquitoRows] : [...mosquitoRows, tickRow]

  return (
    <section className="not-prose py-10 px-4 bg-white" aria-labelledby="typical-prices-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="typical-prices-heading" className="text-2xl font-extrabold text-brand-900 mb-1">
          {city ? `Typical ${city} prices` : 'Typical prices'}
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          For a standard lot under {PRICING.standardLotSqFt.toLocaleString('en-CA')} sq ft, plus HST. Bigger lot? Your quote shows the exact price before you pay.
        </p>
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 overflow-hidden">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between gap-4 px-4 py-3 bg-white">
              <div className="min-w-0">
                <p className="font-bold text-brand-900">
                  {r.name}
                  {r.tag && (
                    <span className="ml-2 align-middle rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800">{r.tag}</span>
                  )}
                </p>
                <p className="text-sm text-gray-600">{r.detail}</p>
              </div>
              <p className="shrink-0 text-right font-extrabold text-brand-900 tabular-nums">{r.price}</p>
            </div>
          ))}
        </div>
        <ul className="mt-4 space-y-1 text-sm text-gray-700">
          <li>✓ {PROMISES.rainBack}</li>
          <li>✓ {PROMISES.biteFreeScope}</li>
        </ul>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          {showQuoteButton && (
            <QuoteLink service={service} location="typical_prices" className="btn-primary press-scale justify-center">
              Get my exact price
            </QuoteLink>
          )}
          <a
            href={BUSINESS.smsHref}
            data-lead-location="typical_prices"
            className="btn-ghost press-scale justify-center border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white"
          >
            Text us
          </a>
        </div>
      </div>
    </section>
  )
}
