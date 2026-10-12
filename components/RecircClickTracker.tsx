'use client'

import { useEffect } from 'react'

/**
 * Counts clicks on "keep the reader on the site" links, mounted once in the root layout.
 *
 * GA4 event: recirculation_click
 *   location     in_content | keep_reading | sticky_bar   (where the link sat)
 *   target_slug  the article the reader chose
 *   link_kind    next | related | card                    (which unit)
 *   page_path    the page they were on
 *
 * Same event-delegation pattern as AffiliateClickTracker and LeadClickTracker: the links stay
 * plain server-rendered HTML, and this only observes that one was clicked. It reads the
 * data-recirc attributes the server put there; no personal data, no link rewriting.
 * To see location and target_slug in GA4 reports, register them once as custom dimensions
 * (Admin > Custom definitions).
 */
export default function RecircClickTracker() {
  useEffect(() => {
    const report = (target: EventTarget | null) => {
      const a = (target as Element | null)?.closest?.('a[data-recirc]') as HTMLAnchorElement | null
      if (!a) return
      const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
      if (typeof w.gtag !== 'function') {
        // the same stub the GA snippet installs, so a click before gtag.js loads is not lost
        w.dataLayer = w.dataLayer || []
        w.gtag = function gtag() {
          // eslint-disable-next-line prefer-rest-params
          ;(w.dataLayer as unknown[]).push(arguments)
        }
      }
      w.gtag('event', 'recirculation_click', {
        location: (a.dataset.recirc || 'unknown').slice(0, 40),
        // the same value under the name the lead events already use, so one GA4 dimension covers both
        link_location: (a.dataset.recirc || 'unknown').slice(0, 40),
        target_slug: (a.dataset.recircTarget || '').slice(0, 100),
        link_kind: (a.dataset.recircKind || 'unknown').slice(0, 40),
        page_path: window.location.pathname,
        // these pages do a full page load on every click (AdNavigationGuard), so the hit must
        // survive the page going away
        transport_type: 'beacon',
      })
    }
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 && e.button !== 1) return
      report(e.target)
    }
    // No keydown listener: Enter on a focused link already fires a click.
    document.addEventListener('click', onClick, { capture: true })
    document.addEventListener('auxclick', onClick, { capture: true })
    return () => {
      document.removeEventListener('click', onClick, { capture: true })
      document.removeEventListener('auxclick', onClick, { capture: true })
    }
  }, [])

  return null
}
