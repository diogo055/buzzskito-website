'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { CrewClip } from '@/lib/crew-videos'
import { autoplayOff, trackVideo } from '@/lib/video-track'
import { whenScrollIdle } from '@/lib/scroll-idle'

interface CrewVideoProps {
  clip: CrewClip
  /**
   * 'inline': a 16:9 clip in the page (real-job proof), with a pause button and a "Real job footage" chip.
   * 'background': fills its positioned parent behind other content. Decorative (aria-hidden).
   */
  mode?: 'inline' | 'background'
  /** next/image `sizes` for the still */
  sizes?: string
  quality?: number
  /** Paint the clip's own still. Set false when the parent already paints a still behind it. */
  poster?: boolean
  /** Pause / play button. Turn off only inside an aria-hidden duplicate (the story's desktop panel). */
  controls?: boolean
  /** Inline only: the small "Real job footage" chip */
  badge?: boolean
  /** Inline only: wraps the clip in a <figure> with this caption */
  caption?: ReactNode
  tone?: 'light' | 'dark'
  className?: string
  /**
   * For a clip in the first two phone screens: also wait for the page's load event (or 4 s) and an idle
   * moment before attaching the file, so it never downloads while the page itself is still loading.
   */
  afterLoad?: boolean
}

type VideoWithFrameCallback = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: () => void) => number
}

/**
 * Real crew footage that costs nothing until the reader scrolls to it. Not for the hero: the hero uses
 * HeroVideo, which waits for the page's load event instead of a scroll trigger.
 *
 * - Server HTML is the still (lazy next/image) and an empty <video preload="none">: no video bytes, no
 *   layout shift (fixed aspect box), nothing for the LCP.
 * - About one screen before the clip comes into view the <source>s attach; it plays muted, looped and
 *   inline while at least 20% of it is on screen, and pauses when it leaves.
 * - The fade starts on the first frame actually shown (requestVideoFrameCallback). The still is frame 0 of
 *   the same file (lib/crew-videos.ts), so the change is invisible.
 * - Reduced motion or Save-Data: no autoplay. A refused autoplay (iPhone Low Power Mode) keeps the still and
 *   is recorded, never retried. Inline clips then offer a play button; background clips stay a still.
 * - Auto-playing motion over 5 s needs a way to stop it (WCAG 2.2.2): a 44 px pause button.
 * - GA4: crew_video_played / _blocked / _skipped / _paused (lib/video-track.ts), once per clip per page view.
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
  afterLoad = false,
}: CrewVideoProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sent = useRef<Set<string>>(new Set())
  const [offReason, setOffReason] = useState<string | null>(null)
  const [near, setNear] = useState(false)
  const [inView, setInView] = useState(false)
  const [armed, setArmed] = useState(false)
  const [manual, setManual] = useState<'none' | 'play' | 'pause'>('none')
  const [playing, setPlaying] = useState(false)
  const [shown, setShown] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [pageReady, setPageReady] = useState(!afterLoad)

  const once = (event: Parameters<typeof trackVideo>[0], reason?: string) => {
    if (sent.current.has(event)) return
    sent.current.add(event)
    trackVideo(event, { clip: clip.id, reason })
  }

  useEffect(() => {
    setOffReason(autoplayOff())
  }, [])

  // afterLoad: the page's load event (or 4 s), then an idle moment
  useEffect(() => {
    if (!afterLoad) return
    let cancelled = false
    const timers: number[] = []
    const idle = () => {
      const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }
      if (typeof w.requestIdleCallback === 'function') w.requestIdleCallback(() => !cancelled && setPageReady(true), { timeout: 1500 })
      else timers.push(window.setTimeout(() => !cancelled && setPageReady(true), 1000))
    }
    if (document.readyState === 'complete') idle()
    else {
      window.addEventListener('load', idle, { once: true })
      timers.push(window.setTimeout(idle, 4000))
    }
    return () => {
      cancelled = true
      timers.forEach((t) => window.clearTimeout(t))
      window.removeEventListener('load', idle)
    }
  }, [afterLoad])
  const auto = offReason === null

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

  // A visitor who gets no autoplay is counted once, when the clip is actually in view.
  useEffect(() => {
    if (inView && offReason && offReason !== 'server' && manual === 'none') once('crew_video_skipped', offReason)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, offReason, manual])

  // Attach the file (and so start the decoder) only once the visitor's scroll has settled: a decoder
  // starting mid-fling is what makes a phone stutter. A tap on play attaches it at once.
  useEffect(() => {
    if (armed) return
    if (manual === 'play' && near) {
      setArmed(true)
      return
    }
    if (near && auto && pageReady) return whenScrollIdle(() => setArmed(true))
  }, [near, auto, manual, armed, pageReady])

  // The <source> children render only once armed, so the element has to re-read them.
  useEffect(() => {
    if (armed) videoRef.current?.load()
  }, [armed])

  useEffect(() => {
    const v = videoRef.current as VideoWithFrameCallback | null
    if (!v || !armed) return
    const shouldPlay = inView && (manual === 'play' || (manual === 'none' && auto && !blocked))
    if (shouldPlay) {
      v.muted = true
      v.defaultMuted = true
      if (typeof v.requestVideoFrameCallback === 'function') v.requestVideoFrameCallback(() => setShown(true))
      v.play().then(
        () => setBlocked(false),
        (err: unknown) => {
          if ((err as { name?: string })?.name === 'NotAllowedError') {
            setBlocked(true)
            once('crew_video_blocked', 'not_allowed')
          }
        }
      )
    } else if (!v.paused) {
      v.pause()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [armed, inView, manual, auto, blocked])

  const onPlaying = () => {
    setPlaying(true)
    const v = videoRef.current as VideoWithFrameCallback | null
    // No frame callback (old Safari / Firefox): fade shortly after playback starts
    if (v && typeof v.requestVideoFrameCallback !== 'function') window.setTimeout(() => setShown(true), 150)
    once('crew_video_played')
  }

  const toggle = () => {
    if (playing) {
      setManual('pause')
      videoRef.current?.pause()
      once('crew_video_paused')
    } else {
      setBlocked(false)
      setManual('play')
      // Call play() inside the tap itself when the file is already attached: iOS honours a user gesture
      // only within the event that carries it.
      const v = videoRef.current
      if (v && armed) {
        v.muted = true
        if (typeof (v as VideoWithFrameCallback).requestVideoFrameCallback === 'function') {
          ;(v as VideoWithFrameCallback).requestVideoFrameCallback!(() => setShown(true))
        }
        v.play().catch(() => {})
      }
    }
  }

  const background = mode === 'background'
  // Background clips never show a play button: a blocked or skipped clip simply stays a still.
  const showButton = controls && (background ? auto && armed && !blocked : true)
  const bigPlay = !background && (!auto || blocked) && !playing && manual !== 'pause'

  const button = showButton ? (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? (background ? 'Pause background video' : 'Pause video') : background ? 'Play background video' : 'Play video'}
      className={`${background ? 'absolute bottom-4 right-4 z-10' : 'absolute bottom-3 right-3 z-10'} flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white ring-1 ring-white/25 transition-colors hover:bg-black/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${bigPlay ? 'hidden' : ''}`}
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
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${shown ? 'opacity-100' : 'opacity-0'}`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden={background ? true : undefined}
        aria-label={background ? undefined : clip.label}
        tabIndex={-1}
        onPlaying={onPlaying}
        onPause={() => setPlaying(false)}
      >
        {armed && clip.srcSmall && <source src={clip.srcSmall} type="video/mp4" media="(max-width: 767px)" />}
        {armed && <source src={clip.src} type="video/mp4" />}
      </video>
      {!background && badge && (
        <span className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white ring-1 ring-white/20">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
          Real job footage
        </span>
      )}
      {bigPlay && (
        <button
          type="button"
          onClick={toggle}
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white ring-1 ring-white/30 transition-colors hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
