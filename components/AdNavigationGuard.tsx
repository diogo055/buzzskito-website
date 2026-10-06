'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { isAdPath } from '@/lib/ads'

/**
 * Keeps display ads off service pages across client-side navigation.
 *
 * WHY THIS EXISTS. This is a single-page app: next/link swaps the page without
 * loading a new document. An ad script that started on a blog post would still be
 * running, with its sticky ad on screen, after a tap through to
 * /mississauga-mosquito-control. Once an ad script is running in the window it
 * cannot be reliably unloaded. The only clean boundary is a real page load.
 *
 * So: any internal link click that STARTS or ENDS on an ad page becomes a full
 * document navigation. Service-to-service navigation is untouched and stays
 * instant. Ad pages are static HTML on the CDN, so the full load is cheap, and it
 * gives every article a fresh, correctly counted pageview, exactly as on an
 * ordinary multi-page website.
 *
 * HOW. A capture-phase listener calls preventDefault(), which next/link honours
 * (it returns early on e.defaultPrevented), then navigates once the click has
 * finished dispatching, so every other click handler (LeadClickTracker,
 * QuoteLink's service memory) has already run. Modified clicks, new-tab links,
 * downloads, external links and same-page hash links are left alone.
 *
 * BACKSTOP. Anything that changes the route without a click (router.push, the
 * back button across a soft navigation) is caught by the pathname effect: if the
 * route changed and either end of the change is an ad page, reload. After the
 * reload the route no longer "changed", so this cannot loop.
 */
export default function AdNavigationGuard() {
  const pathname = usePathname()
  const previousPath = useRef(pathname)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!a || a.hasAttribute('download') || (a.target && a.target !== '_self')) return
      let url: URL
      try {
        url = new URL(a.href, window.location.href)
      } catch {
        return
      }
      if (url.origin !== window.location.origin) return
      if (url.pathname === window.location.pathname) return // same page: hash jump or no-op
      if (!isAdPath(window.location.pathname) && !isAdPath(url.pathname)) return
      e.preventDefault()
      window.setTimeout(() => window.location.assign(url.href), 0)
    }
    window.addEventListener('click', onClick, { capture: true })
    return () => window.removeEventListener('click', onClick, { capture: true })
  }, [])

  useEffect(() => {
    const from = previousPath.current
    previousPath.current = pathname
    if (pathname === from) return
    if (isAdPath(from) || isAdPath(pathname)) window.location.reload()
  }, [pathname])

  return null
}
