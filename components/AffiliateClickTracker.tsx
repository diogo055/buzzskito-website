'use client'

import { useEffect } from 'react'

/**
 * Per-link affiliate click tracking, mounted ONCE in the root layout.
 *
 * WHY THIS SHAPE. Amazon attribution gives us 15 cluster tracking IDs across 358
 * pages, so until now "revenue per click" could not be measured per page — which
 * blocks every feedback loop that decides where effort goes next. This closes
 * that gap without touching how links are rendered.
 *
 * It uses EVENT DELEGATION on the document rather than making AmazonLink a client
 * component. That is deliberate and load-bearing: AmazonLink is a server component
 * specifically so the static HTML Amazon's crawler sees is exactly what ships, with
 * no client-side URL construction or rewriting. This listener never reads, writes
 * or rewrites an href — it only observes that a click happened and reports context
 * the server already put in data-* attributes.
 *
 * Captures left click, middle click and keyboard activation, because a meaningful
 * share of affiliate clicks are open-in-new-tab.
 */
export default function AffiliateClickTracker() {
  useEffect(() => {
    const isAmazon = (a: HTMLAnchorElement) => {
      try {
        return /(^|\.)amazon\./i.test(new URL(a.href).hostname)
      } catch {
        return false
      }
    }

    const report = (a: HTMLAnchorElement, how: string) => {
      const asin = a.dataset.affAsin || ''
      const params = {
        // What was clicked
        link_kind: asin ? 'asin' : 'search',
        product_asin: asin || undefined,
        search_term: a.dataset.affSearch || undefined,
        // Where it sat — this is what makes per-page revenue-per-click possible
        page_path: window.location.pathname,
        placement: a.dataset.affComponent || 'unknown',
        label: a.dataset.affLabel || undefined,
        cluster_tag: a.dataset.affTag || undefined,
        activation: how,
      }

      const w = window as unknown as { gtag?: (...args: unknown[]) => void }
      if (typeof w.gtag === 'function') {
        w.gtag('event', 'affiliate_click', params)
      }
    }

    const onClick = (e: MouseEvent) => {
      // 0 = left, 1 = middle. Ignore right-click (context menu, not a visit).
      if (e.button !== 0 && e.button !== 1) return
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!a || !isAmazon(a)) return
      report(a, e.button === 1 ? 'middle_click' : 'click')
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!a || !isAmazon(a)) return
      report(a, 'keyboard')
    }

    document.addEventListener('click', onClick, { capture: true })
    document.addEventListener('auxclick', onClick, { capture: true })
    document.addEventListener('keydown', onKey, { capture: true })
    return () => {
      document.removeEventListener('click', onClick, { capture: true })
      document.removeEventListener('auxclick', onClick, { capture: true })
      document.removeEventListener('keydown', onKey, { capture: true })
    }
  }, [])

  return null
}
