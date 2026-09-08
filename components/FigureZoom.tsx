'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * The image half of <Figure>, with tap-to-zoom.
 *
 * WHY THIS EXISTS
 * The diagrams are authored on a 720px canvas and Figure renders them at 100vw on mobile.
 * On a 380px phone that is about 53% scale, so an 11px label lands near 6px and the spec
 * lines and footnotes are genuinely unreadable — measured, not assumed, during the Sep 2026
 * image audit. Redesigning thirteen dense diagrams for a phone was the alternative; letting
 * the reader open one at its native size is far cheaper and loses nothing.
 *
 * The overlay renders the asset at its natural width inside a scrollable box, so on a phone
 * the diagram is back at 1:1 and every label is at the size it was drawn. It is a plain <img>
 * rather than next/image on purpose: inside a pan-and-scroll container we want the intrinsic
 * pixel size, not a responsive one.
 *
 * Kept as the only client component in this path so <Figure> stays a server component and
 * keeps emitting ImageObject schema — that schema is why the figures exist at all.
 */

export default function FigureZoom({
  src, alt, width, height, priority = false,
}: {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
}) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    // Stop the article scrolling underneath the overlay.
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, close])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open larger view: ${alt}`}
        className="group relative block w-full cursor-zoom-in appearance-none border-0 bg-transparent p-0"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          sizes="(max-width: 768px) 100vw, 720px"
          className="w-full h-auto"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-brand-950/80 px-3 py-1 text-[11px] font-bold text-white shadow-sm transition group-hover:bg-brand-950 sm:opacity-0 sm:group-hover:opacity-100"
        >
          Tap to enlarge
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex flex-col bg-brand-950/95 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <p className="text-xs text-brand-200">Pinch or scroll to move around</p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close larger view"
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/20"
            >
              Close &times;
            </button>
          </div>

          <div className="flex-1 overflow-auto overscroll-contain p-3" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="mx-auto block h-auto max-w-none rounded-lg bg-white"
              style={{ width: `${width}px` }}
            />
          </div>
        </div>
      )}
    </>
  )
}
