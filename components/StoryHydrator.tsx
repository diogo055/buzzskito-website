'use client'

import { useEffect } from 'react'

/**
 * Drives every `.story-root` scroll story on the page (how-it-works,
 * services): one IntersectionObserver watches all [data-step] elements;
 * when a step crosses the viewport's middle band, its own container's
 * data-active flips. All painting is CSS. Renders nothing.
 */
export default function StoryHydrator() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const steps = document.querySelectorAll('.story-root [data-step]')
    if (!steps.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          const root = el.closest('.story-root')
          if (root && el.dataset.step) root.setAttribute('data-active', el.dataset.step)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    steps.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
