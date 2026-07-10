'use client'

import { useEffect, useState } from 'react'
import { amazon, AFFILIATE_ENABLED, AMAZON_COM_TAG, US_TIMEZONES } from '@/lib/affiliate'

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
 * GEO-ROUTING: server-renders the Canadian link (correct for our majority
 * audience and for crawlers). After hydration, US visitors — detected by IANA
 * timezone — get the link rewritten to amazon.com with the US tag so their
 * purchases monetize in USD. Canadians report distinct zones and are never
 * misrouted; anyone unresolved keeps the .ca default. Initial client render
 * matches the server ('ca'), so there is no hydration mismatch.
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
  const [store, setStore] = useState<'ca' | 'com'>('ca')

  useEffect(() => {
    if (!AMAZON_COM_TAG) return
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
      if (US_TIMEZONES.has(tz)) setStore('com')
    } catch {
      /* Intl unavailable — keep the .ca default */
    }
  }, [])

  const href = amazon({ asin, search }, store)
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      data-affiliate={AFFILIATE_ENABLED ? `amazon-${store}` : 'unmonetized'}
      className={`not-prose inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-amber-500 to-amber-600 px-4 py-2 text-sm font-bold text-white no-underline shadow-sm transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  )
}
