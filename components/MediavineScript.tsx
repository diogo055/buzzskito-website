'use client'

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
