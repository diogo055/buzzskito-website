'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Inertial smooth scrolling (Lenis). Drives NATIVE scroll position on rAF —
 * not a transform wrapper — so position:sticky, IntersectionObserver, CSS
 * scroll-driven animations, anchors, keyboard and screen readers all keep
 * working, and every scroll-driven animation inherits the lerp for free.
 *
 * - Wheel only: touch stays fully native (mobile inertia is already right).
 * - Skipped entirely under prefers-reduced-motion.
 * - 5.4 kB gzip, zero dependencies. Renders nothing.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
      autoRaf: true,
    })
    return () => lenis.destroy()
  }, [])

  return null
}
