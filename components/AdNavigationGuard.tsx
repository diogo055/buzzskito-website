'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { hasAdScript } from '@/lib/ads'

/**
 * Keeps Mediavine's script inside the pages that are meant to carry it.
 *
 * WHY THIS EXISTS. This is a single-page app: next/link swaps the page without
 * loading a new document, and Mediavine's script has no off switch once it is
 * running. Left alone, a script that started on a blog post would still be alive,
 * with its sticky ad on screen, after a tap through to
 * /mississauga-mosquito-control. It also works the other way: when a client-side
 * navigation lands on a page that carries the script, React adds the script to the
 * current document and it starts running there (measured, not assumed). The only
 * clean boundary is a real page load.
 *
 * THE RULE. Any navigation that STARTS or ENDS on a page that carries the script
 * (every ad page, and the homepage) is a full document load. So the script only
 * ever runs in a document that was loaded as one of those pages, and that document
 * never turns into a different page. Navigation between other service pages is
 * untouched and stays instant. The pages involved are static HTML on the CDN, so
 * the full load is cheap, and each article gets a fresh, correctly counted
 * pageview, exactly as on an ordinary multi-page website.
 *
 * HOW. A capture-phase listener calls preventDefault(), which next/link honours
 * (it returns early on e.defaultPrevented), then navigates once the click has
 * finished dispatching, so every other click handler (LeadClickTracker,
 * QuoteLink's service memory) has already run. Modified clicks, new-tab links,
 * downloads, external links and same-page hash links are left alone.
 *
 * BACKSTOP. Anything that changes the route without a click (router.push, the
 * back button across a soft navigation) is caught by the pathname effect: if the
 * route changed and either end carries the script, reload. After the reload the
 * route no longer "changed", so this cannot loop.
 *
 * This never touches Mediavine's code: it does not stop, patch or call into their
 * script. It only decides how our own links navigate.
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
      if (!hasAdScript(window.location.pathname) && !hasAdScript(url.pathname)) return
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
    if (hasAdScript(from) || hasAdScript(pathname)) window.location.reload()
  }, [pathname])

  return null
}
