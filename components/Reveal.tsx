'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Scroll-reveal wrapper — adds `.in-view` when the element enters the
 * viewport, triggering the CSS transition defined in globals.css.
 *
 * SEO/perf contract:
 * - Children render server-side; full content is always in the HTML source.
 * - The initial-hidden state only exists under `html.anim` (set by an inline
 *   script in layout.tsx), so no-JS users and HTML-only crawlers see
 *   everything instantly.
 * - IntersectionObserver unobserves after first reveal — zero ongoing cost.
 * - Respects prefers-reduced-motion via the CSS media gate (this component
 *   adds a class; the CSS decides whether that means anything).
 */
export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'span'
}) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // If IO is unavailable (ancient browser), reveal immediately.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('in-view')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
