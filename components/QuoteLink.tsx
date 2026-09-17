'use client'

import Link from 'next/link'

/**
 * A link to the quote form that remembers which service the visitor was reading about, so the form opens
 * with Mosquito or Tick already chosen. It uses sessionStorage rather than a ?service= URL parameter so the
 * quote page never gains duplicate crawlable URLs. Clicks are counted by LeadClickTracker through the
 * data-lead-location attribute; this component adds no tracking of its own.
 */
export default function QuoteLink({
  service,
  location,
  className,
  children,
}: {
  service?: 'mosquito' | 'tick' | 'both'
  location: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link
      href="/free-yard-assessment"
      className={className}
      data-lead-location={location}
      onClick={() => {
        try {
          if (service) sessionStorage.setItem('bz_service', service)
        } catch {
          // storage blocked (private mode): the form simply opens without a preselection
        }
      }}
    >
      {children}
    </Link>
  )
}
