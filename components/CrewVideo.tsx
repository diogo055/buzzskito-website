'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { CrewClip } from '@/lib/crew-videos'

interface CrewVideoProps {
  clip: CrewClip
  /**
   * 'inline': a 16:9 clip in the page (real-job proof), with a pause button and a "Real job footage" chip.
   * 'background': fills its positioned parent behind other content. Decorative (aria-hidden).
   */
  mode?: 'inline' | 'background'
  /** next/image `sizes` for the poster frame */
  sizes?: string
  quality?: number
  /** Paint the clip's own poster frame. Set false when the parent already paints a still behind it. */
  poster?: boolean
  /** Pause / play button. Turn off only inside an aria-hidden duplicate (the story's desktop panel). */
  controls?: boolean
  /** Inline only: the small "Real job footage" chip */
  badge?: boolean
  /** Inline only: wraps the clip in a <figure> with this caption */
  caption?: ReactNode
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * Real crew footage that costs nothing until the reader scrolls to it.
 *
 * - Server HTML is the poster frame (lazy next/image) and an empty <video preload="none">: no video
 *   bytes, no layout shift (fixed aspect box), nothing for the LCP.
 * - About one screen before the clip comes into view, the <source>s attach; it plays muted, looped
 *   and inline while at least 20% of it is on screen, and pauses when it leaves.
 * - Reduced motion or Save-Data: no autoplay. Inline clips show a play button instead; background
 *   clips stay a still.
 * - Auto-playing motion over 5 s needs a way to stop it (WCAG 2.2.2), hence the pause button.
 */
export default function CrewVideo({
  clip,
  mode = 'inline',
  sizes,
  quality = 60,
  poster = true,
  controls = true,
  badge = true,
  caption,
  tone = 'light',
  className = '',
}: CrewVideoProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [auto, setAuto] = useState(true)
  const [near, setNear] = useState(false)
  const [inView, setInView] = useState(false)
  const [armed, setArmed] = useState(false)
  const [manual, setManual] = useState<'none' | 'play' | 'pause'>('none')
  const [playing, setPlaying] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true
    if (reduce || saveData) setAuto(false)
  }, [])

  useEffect(() => {
    const el = boxRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const nearIo = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setNear(true)
          nearIo.disconnect()
        }
      },
      { rootMargin: '400px 0px' }
    )
    const viewIo = new IntersectionObserver(([entry]) => setInView(!!entry?.isIntersecting), { threshold: 0.2 })
    nearIo.observe(el)
    viewIo.observe(el)
    return () => {
      nearIo.disconnect()
      viewIo.disconnect()
    }
  }, [])

  useEffect(() => {
    if (near && (auto || manual === 'play')) setArmed(true)
  }, [near, auto, manual])

  // The <source> children render only once armed, so the element has to re-read them.
  useEffect(() => {
    if (armed) videoRef.current?.load()
  }, [armed])

  useEffect(() => {
    const v = videoRef.current
    if (!v || !armed) return
    const shouldPlay = inView && (manual === 'play' || (manual === 'none' && auto))
    if (shouldPlay) {
      v.muted = true
      v.play().catch(() => {})
    } else if (!v.paused) {
      v.pause()
    }
  }, [armed, inView, manual, auto])

  const toggle = () => {
    if (playing) {
      setManual('pause')
      videoRef.current?.pause()
    } else {
      setManual('play')
    }
  }

  const background = mode === 'background'
  const showButton = controls && (background ? auto && armed : true)
  const bigPlay = !background && !auto && !playing && manual !== 'pause'

  const button = showButton ? (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? 'Pause video' : 'Play video'}
      className={`${background ? 'absolute bottom-4 right-4 z-10' : 'absolute bottom-3 right-3 z-10'} flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white ring-1 ring-white/25 backdrop-blur-sm transition-colors hover:bg-black/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${bigPlay ? 'hidden' : ''}`}
    >
      {playing ? (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
      ) : (
        <svg className="h-4 w-4 translate-x-px" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" /></svg>
      )}
    </button>
  ) : null

  const media = (
    <div
      ref={boxRef}
      data-crew-video={clip.id}
      className={
        background
          ? `absolute inset-0 overflow-hidden ${className}`
          : `relative overflow-hidden ${tone === 'dark' ? 'bg-[#0b1628]' : 'bg-brand-100'} ${className}`
      }
      style={background ? undefined : { aspectRatio: `${clip.width} / ${clip.height}` }}
    >
      {poster && (
        <Image
          src={clip.poster}
          alt=""
          aria-hidden="true"
          fill
          sizes={sizes ?? (background ? '100vw' : '(max-width: 768px) 100vw, 720px')}
          quality={quality}
          className="object-cover"
        />
      )}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${shown ? 'opacity-100' : 'opacity-0'}`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden={background ? true : undefined}
        aria-label={background ? undefined : clip.label}
        onPlaying={() => {
          setShown(true)
          setPlaying(true)
        }}
        onPause={() => setPlaying(false)}
      >
        {armed && clip.srcSmall && <source src={clip.srcSmall} type="video/mp4" media="(max-width: 767px)" />}
        {armed && <source src={clip.src} type="video/mp4" />}
      </video>
      {!background && badge && (
        <span className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
          Real job footage
        </span>
      )}
      {bigPlay && (
        <button
          type="button"
          onClick={toggle}
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg className="h-7 w-7 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" /></svg>
        </button>
      )}
      {!background && button}
    </div>
  )

  if (background) {
    return (
      <>
        {media}
        {button}
      </>
    )
  }

  if (!caption) return media

  return (
    <figure className="not-prose">
      {media}
      <figcaption className={tone === 'dark' ? 'mt-2 text-center text-xs text-[#7688a8]' : 'mt-3 text-sm leading-relaxed text-gray-600'}>
        {caption}
      </figcaption>
    </figure>
  )
}
