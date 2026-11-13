'use client'

import { useEffect, useRef } from 'react'

/**
 * Animated count-up stat. Renders the FINAL value server-side (SEO-safe,
 * crawlers always see "150+"), then counts 0 → value when scrolled into
 * view. Skips the animation entirely under prefers-reduced-motion.
 *
 * Nov 13, 2026: the count writes straight into the number's text node instead of setting React state on
 * every frame (about 70 re-renders per counter, while the homepage was still loading). The owner saw the
 * first homepage scroll lag on his iPhone. The numbers shown are exactly the same.
 *
 * value:  numeric target (150)
 * suffix: rendered after the number ("+", " Days", " Min")
 */
export default function StatCounter({
  value,
  suffix = '',
  className = '',
  durationMs = 1200,
}: {
  value: number
  suffix?: string
  className?: string
  durationMs?: number
}) {
  const numRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = numRef.current
    if (!el) return
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return // keep final value, no animation
    }

    let raf = 0
    let last = -1
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs)
          // ease-out cubic
          const eased = 1 - Math.pow(1 - t, 3)
          const n = Math.round(eased * value)
          if (n !== last) {
            last = n
            el.textContent = String(n)
          }
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        el.textContent = '0'
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      el.textContent = String(value)
    }
  }, [value, durationMs])

  return (
    <span className={className}>
      <span ref={numRef}>{value}</span>
      {suffix}
    </span>
  )
}
