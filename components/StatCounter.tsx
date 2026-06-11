'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Animated count-up stat. Renders the FINAL value server-side (SEO-safe,
 * crawlers always see "150+"), then counts 0 → value when scrolled into
 * view. Skips the animation entirely under prefers-reduced-motion.
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
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value) // SSR renders final value

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return // keep final value, no animation
    }

    let raf = 0
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs)
          // ease-out cubic
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(Math.round(eased * value))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        setDisplay(0)
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, durationMs])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
