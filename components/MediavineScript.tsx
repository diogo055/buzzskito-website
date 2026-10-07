'use client'

import { useEffect } from 'react'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import { hasAdScript, isAdPath, MEDIAVINE_TAG_SRC } from '@/lib/ads'

/**
 * The Mediavine script wrapper, emitted into <head> only where lib/ads.ts allows
 * it: ad pages, and the homepage (where <MediavinePageSettings> switches every ad
 * off). usePathname resolves during prerendering, so on a city, service, pricing
 * or quote page the script is not in the HTML at all.
 *
 * The attributes are Mediavine's own (async, data-noptimize, data-cfasync); keep
 * them exactly as issued. The 404 page is skipped even under /blog: usePathname
 * reports the URL that was asked for, so the route segment is checked instead.
 */
export default function MediavineScript() {
  const pathname = usePathname()
  const segments = useSelectedLayoutSegments()
  if (segments.some((segment) => segment.includes('not-found'))) return null
  if (!hasAdScript(pathname)) return null
  return (
    <script
      type="text/javascript"
      async
      data-noptimize="1"
      data-cfasync="false"
      src={MEDIAVINE_TAG_SRC}
    />
  )
}

/**
 * Mediavine's own per-page setting, "no ads of any kind on this page", rendered on
 * every page that is not an ad page. Its script reads #mediavine-settings when it
 * starts and creates no ad slot at all when data-blocklist-all is "1".
 *
 * On the homepage this is what keeps ads off (the script is present there for
 * Mediavine's install check). On every other service page the script is not
 * loaded in the first place, so this is a second lock that costs 60 bytes.
 *
 * Two details that matter: the value must be the string "1" (Mediavine does not
 * accept "true" for "all"), and there must be NO data-expires-at attribute (the
 * snippet Mediavine's dashboard generates expires after 60 days by default).
 */
export function MediavinePageSettings() {
  const pathname = usePathname()
  if (isAdPath(pathname)) return null
  return <div id="mediavine-settings" data-blocklist-all="1" hidden />
}

/**
 * Safety net for the space our fixed bars keep clear of Mediavine's pinned units.
 *
 * The real work is CSS (end of app/globals.css): as soon as Mediavine creates its
 * sticky bottom ad slot, our bars step up above a band reserved for the tallest ad
 * that slot can show, and they stay there. They deliberately do NOT follow the ad's
 * height: that ad refreshes about every 30 seconds and can change size, and a
 * Call button that moves next to an ad is how accidental ad clicks happen.
 *
 * This component only ever RAISES the band, if a unit turns out taller than the
 * CSS reserved for it, and releases it when the unit is gone. It reads Mediavine's
 * elements; it never changes them.
 */
export function MediavineStickyClearance() {
  const pathname = usePathname()
  const active = isAdPath(pathname)

  useEffect(() => {
    if (!active) return
    const body = document.body
    // observe() on an element that is already observed restarts it and fires again,
    // so each unit is registered exactly once.
    const watched = new WeakSet<Element>()
    const reserved = (name: string) => parseFloat(getComputedStyle(body).getPropertyValue(name)) || 0

    const raise = (name: string, unit: HTMLElement | null, extra: number) => {
      if (!unit) {
        body.style.removeProperty(name) // unit gone: back to whatever the CSS says
        return
      }
      if (!watched.has(unit)) {
        watched.add(unit)
        sizes.observe(unit)
      }
      const height = Math.ceil(unit.getBoundingClientRect().height)
      if (height > 0 && height + extra > reserved(name)) body.style.setProperty(name, `${height + extra}px`)
    }

    const check = () => {
      raise('--mv-adh', document.querySelector<HTMLElement>('#fixed_container_bottom > .adhesion_wrapper'), 0)
      // the floating video sits 15px above the ad
      raise('--mv-vid', document.querySelector<HTMLElement>('#fixed_container_bottom > #universalPlayer_wrapper'), 15)
    }

    const sizes = new ResizeObserver(check)
    const classes = new MutationObserver(check)
    classes.observe(body, { attributes: true, attributeFilter: ['class'] })
    window.addEventListener('adhesionHeightChanged', check)
    check()

    return () => {
      sizes.disconnect()
      classes.disconnect()
      window.removeEventListener('adhesionHeightChanged', check)
      body.style.removeProperty('--mv-adh')
      body.style.removeProperty('--mv-vid')
    }
  }, [active])

  return null
}
