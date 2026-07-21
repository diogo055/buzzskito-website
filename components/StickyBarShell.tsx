'use client'

import { useEffect, useState } from 'react'

/**
 * CLIENT shell that only toggles visibility on scroll. It contains NO Amazon-URL
 * logic whatsoever — the link inside `children` is built server-side by
 * <AmazonLink> and passed down already-rendered, so the crawler sees the exact
 * same href everyone else does. This preserves the "AmazonLink is the only thing
 * that emits an Amazon href, server-side only" invariant that guards against the
 * geo-swap pattern that caused the prior ban.
 *
 * Mobile only (lg:hidden). Appears after the reader scrolls past the hero and
 * hides again near the page bottom so it never covers the closing CTA.
 */
export default function StickyBarShell({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const nearBottom = window.innerHeight + y >= document.body.offsetHeight - 260
      setShow(y > 520 && !nearBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    // Phones (<sm) also show the site-wide "Call Now / Free Quote" lead bar (84px,
    // z-50) pinned to bottom-0 — so sit 92px above it there and drop to bottom-0
    // from sm up, where that lead bar is hidden. Never cover the lead CTA.
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-[92px] sm:bottom-0 z-40 lg:hidden transition-transform duration-300 motion-reduce:transition-none ${
        show ? 'translate-y-0' : 'pointer-events-none translate-y-[200%]'
      }`}
    >
      {children}
    </div>
  )
}
