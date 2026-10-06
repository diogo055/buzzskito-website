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
 */
export function MediavinePageSettings() {
  const pathname = usePathname()
  if (isAdPath(pathname)) return null
  return <div id="mediavine-settings" data-blocklist-all="1" hidden />
}

/**
 * Keeps the site's own fixed bars clear of whatever Mediavine pins to the bottom
 * of the screen (its sticky "adhesion" ad and, where enabled, a floating video).
 *
 * Mediavine's rule: nothing of ours may cover its ad, and our bars may not sit
 * under it or be raised in front of it. So the phone Call / Text / Get price bar
 * and the Amazon buy bar move UP by exactly the height Mediavine is using. This
 * measures that height and publishes it as the CSS variable --mv-fixed on <body>;
 * the rules that use it are at the end of app/globals.css.
 *
 * Everything pinned lives in one container Mediavine appends to <body>
 * (#fixed_container_bottom). We re-measure when Mediavine toggles its body classes
 * (adhesion, mediavine-video__has-sticky), when it announces a new ad height
 * (adhesionHeightChanged) and when any pinned unit resizes. If a future version of
 * its script renames those, globals.css still applies a fixed fallback height
 * from the body classes alone.
 */
export function MediavineStickyClearance() {
  const pathname = usePathname()
  const active = isAdPath(pathname)

  useEffect(() => {
    if (!active) return
    const body = document.body
    // observe() on an element that is already observed restarts its observation and fires
    // again, so each pinned unit is registered exactly once.
    const watched = new WeakSet<Element>()

    const measure = () => {
      const pinned = document.getElementById('fixed_container_bottom')
      let top = window.innerHeight
      if (pinned) {
        for (const unit of Array.from(pinned.children)) {
          if (!watched.has(unit)) {
            watched.add(unit)
            sizes.observe(unit)
          }
          const box = unit.getBoundingClientRect()
          if (box.width > 0 && box.height > 0) top = Math.min(top, box.top)
        }
      }
      const taken = Math.round(window.innerHeight - top)
      if (taken > 0) body.style.setProperty('--mv-fixed', `${taken}px`)
      else body.style.removeProperty('--mv-fixed') // back to the CSS fallback, or to nothing
    }

    const sizes = new ResizeObserver(measure)
    const classes = new MutationObserver(measure)
    classes.observe(body, { attributes: true, attributeFilter: ['class'] })
    window.addEventListener('adhesionHeightChanged', measure)
    measure()

    return () => {
      sizes.disconnect()
      classes.disconnect()
      window.removeEventListener('adhesionHeightChanged', measure)
      body.style.removeProperty('--mv-fixed')
    }
  }, [active])

  return null
}
