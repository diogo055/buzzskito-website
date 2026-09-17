'use client'

import { useEffect } from 'react'
import { track } from '@/lib/track'

/**
 * Counts taps on Call, Text and quote links anywhere on the site, mounted once in the root layout. Your
 * business sells by phone, and until now call taps were invisible, so a city page that produced calls
 * looked like it produced nothing.
 *
 * Same event-delegation pattern as AffiliateClickTracker: it never reads personal data or rewrites a link.
 * It only reports which kind of link was tapped and where it sat, via the nearest data-lead-location.
 */
export default function LeadClickTracker() {
  useEffect(() => {
    const classify = (a: HTMLAnchorElement): 'click_to_call' | 'click_to_text' | 'quote_cta_click' | null => {
      const href = a.getAttribute('href') || ''
      if (href.startsWith('tel:')) return 'click_to_call'
      if (href.startsWith('sms:')) return 'click_to_text'
      try {
        if (new URL(a.href, window.location.origin).pathname === '/free-yard-assessment') return 'quote_cta_click'
      } catch {
        return null
      }
      return null
    }

    const report = (target: EventTarget | null) => {
      const a = (target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!a) return
      const event = classify(a)
      if (!event) return
      const where = (a.closest('[data-lead-location]') as HTMLElement | null)?.dataset.leadLocation || 'unknown'
      track(event, { link_location: where })
    }

    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 && e.button !== 1) return
      report(e.target)
    }
    // No keydown listener: pressing Enter on a focused link already fires a click, so a keydown
    // listener would count every keyboard activation twice.

    document.addEventListener('click', onClick, { capture: true })
    document.addEventListener('auxclick', onClick, { capture: true })
    return () => {
      document.removeEventListener('click', onClick, { capture: true })
      document.removeEventListener('auxclick', onClick, { capture: true })
    }
  }, [])

  return null
}
