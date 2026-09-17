'use client'

// The quote page's first screen: H1, one proof line, then the form, so that on a 375x812 phone the service
// choice and the address field are visible without scrolling. Earlier versions stacked a logo band, a
// trust strip and a pricing card above the form, which pushed the first field below the fold. Typical
// prices follow the form, and page.tsx adds the trust block, reviews and FAQ beneath.
//
// The form itself is the shared QuoteForm (also used on /contact). We kept the component name
// `YardAssessment` and the route `/free-yard-assessment` because 20+ pages link here.

import { useEffect, useState } from 'react'
import { PROMISES } from '@/lib/constants'
import QuoteForm, { readServicePreset } from './QuoteForm'
import TypicalPrices from './TypicalPrices'

export default function YardAssessment() {
  // Show tick prices first when the visitor arrived from a tick page. Server HTML renders the mosquito order.
  const [pricesFor, setPricesFor] = useState<'mosquito' | 'tick'>('mosquito')
  useEffect(() => {
    if (readServicePreset() === 'tick') setPricesFor('tick')
  }, [])

  return (
    <>
      <section className="bg-white px-4 pt-5 pb-8 sm:pt-10 sm:pb-12">
        <div className="max-w-xl mx-auto">
          <h1 className="text-center text-[1.75rem] leading-tight sm:text-4xl font-extrabold text-brand-900">Get Your Free Custom Quote</h1>
          <p className="mt-2 text-center text-sm font-semibold text-brand-800">
            <span className="text-amber-500">★ 5.0</span> · 150+ Google reviews · {PROMISES.rainBackShort}
          </p>
          <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <QuoteForm formName="yard_assessment" />
          </div>
        </div>
      </section>

      <TypicalPrices service={pricesFor} showQuoteButton={false} />
    </>
  )
}
