'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { HeroClip } from '@/lib/hero-video'
import { autoplayOff, trackVideo } from '@/lib/video-track'
import { whenScrollIdle } from '@/lib/scroll-idle'

type VideoWithFrameCallback = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: () => void) => number
}
type IdleWindow = Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }

const PAUSED_KEY = 'bzk-hero-video-paused'

/**
 * The hero background video island (Nov 13, 2026). Photo first: the server sends the hero photo (the LCP
 * element, rendered by the hero itself) and this empty, muted <video> with no src, no poster and no
 * autoplay (`npm run check:hero-video` fails the build otherwise). The clip is attached only when ALL of:
 *   1. the visitor allows motion and data (no Reduce Motion, no Save-Data) and did not pause it this visit,
 *   2. the hero is on screen,
 *   3. the hero photo has loaded and decoded,
 *   4. the page's load event has fired, or 4 s have passed since the photo decoded,
 *   5. the browser is idle (requestIdleCallback; 1 s timer on Safari, which lacks it).
 * It then fades in on its first frame shown (the photo IS that frame, so nothing jumps), pauses off screen
 * and in hidden tabs, and frees its decoder when the visitor leaves. A refused autoplay (iPhone Low Power
 * Mode) keeps the photo, is recorded and is never retried, and shows no play button.
 *
 * The pause button (WCAG 2.2.2) is rendered into `controlSlotId`, an element the hero places outside the
 * aria-hidden photo box, so it sits in the reading order and above the hero's overlays.
 * GA4: hero_video_played / _blocked / _skipped / _paused (lib/video-track.ts).
 */
export default function HeroVideo({ clip, controlSlotId }: { clip: HeroClip; controlSlotId?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sent = useRef<Set<string>>(new Set())
  const [skipped, setSkipped] = useState(false)
  const [inView, setInView] = useState(false)
  const [gateOpen, setGateOpen] = useState(false)
  const [armed, setArmed] = useState(false)
  const [shown, setShown] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const [slot, setSlot] = useState<HTMLElement | null>(null)

  const once = (event: Parameters<typeof trackVideo>[0], reason?: string) => {
    if (sent.current.has(event)) return
    sent.current.add(event)
    trackVideo(event, { clip: clip.id, reason })
  }

  // 1. Who gets motion at all
  useEffect(() => {
    let reason = autoplayOff()
    try {
      if (!reason && window.localStorage.getItem(PAUSED_KEY) === '1') reason = 'paused_earlier'
    } catch {
      /* storage blocked: treat as not paused */
    }
    if (reason) {
      setSkipped(true)
      once('hero_video_skipped', reason)
    }
    if (controlSlotId) setSlot(document.getElementById(controlSlotId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 2. On screen, and 6. hidden tabs
  useEffect(() => {
    const v = videoRef.current
    if (!v || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => setInView(!!e?.isIntersecting), { threshold: 0.1 })
    io.observe(v)
    const onVis = () => setTabHidden(document.visibilityState === 'hidden')
    document.addEventListener('visibilitychange', onVis)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  // 3-5. The start gate: photo decoded, then page loaded (or 4 s), then idle
  useEffect(() => {
    if (skipped) return
    const v = videoRef.current
    const still = v?.closest('[data-hero-box]')?.querySelector<HTMLImageElement>('img[data-hero-still]')
    let cancelled = false
    const timers: number[] = []
    const cancels: (() => void)[] = []
    const whenIdle = (cb: () => void) => {
      const w = window as IdleWindow
      if (typeof w.requestIdleCallback === 'function') w.requestIdleCallback(cb, { timeout: 1000 })
      else timers.push(window.setTimeout(cb, 1000))
    }
    const stillReady = new Promise<void>((resolve) => {
      if (!still) return resolve()
      const decoded = () => (typeof still.decode === 'function' ? still.decode().catch(() => undefined) : Promise.resolve()).then(() => resolve())
      if (still.complete && still.naturalWidth > 0) decoded()
      else {
        still.addEventListener('load', () => decoded(), { once: true })
        still.addEventListener('error', () => resolve(), { once: true })
      }
    })
    stillReady.then(() => {
      if (cancelled) return
      const loaded = new Promise<void>((resolve) => {
        if (document.readyState === 'complete') return resolve()
        window.addEventListener('load', () => resolve(), { once: true })
        timers.push(window.setTimeout(resolve, 4000))
      })
      loaded.then(() => {
        // ...and not while the visitor is mid-scroll (a decoder starting mid-fling stutters on phones)
        if (!cancelled) whenIdle(() => !cancelled && cancels.push(whenScrollIdle(() => !cancelled && setGateOpen(true))))
      })
    })
    return () => {
      cancelled = true
      timers.forEach((t) => window.clearTimeout(t))
      cancels.forEach((c) => c())
    }
  }, [skipped])

  // Attach the files once the gate is open and the hero is (or comes) on screen
  useEffect(() => {
    if (gateOpen && inView && !skipped && !armed) setArmed(true)
  }, [gateOpen, inView, skipped, armed])

  useEffect(() => {
    if (armed) videoRef.current?.load()
  }, [armed])

  // Play while on screen and visible, unless refused or paused by the visitor
  useEffect(() => {
    const v = videoRef.current as VideoWithFrameCallback | null
    if (!v || !armed) return
    if (inView && !tabHidden && !userPaused && !blocked) {
      v.muted = true
      v.defaultMuted = true
      if (!shown && typeof v.requestVideoFrameCallback === 'function') v.requestVideoFrameCallback(() => setShown(true))
      v.play().catch((err: unknown) => {
        if ((err as { name?: string })?.name === 'NotAllowedError') {
          setBlocked(true)
          once('hero_video_blocked', 'not_allowed')
        }
      })
    } else if (!v.paused) {
      v.pause()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [armed, inView, tabHidden, userPaused, blocked])

  // Free the decoder when the visitor leaves the page
  useEffect(() => {
    const v = videoRef.current
    return () => {
      if (!v) return
      v.pause()
      v.removeAttribute('src')
      v.querySelectorAll('source').forEach((s) => s.remove())
      try {
        v.load()
      } catch {
        /* ignore */
      }
    }
  }, [])

  const onPlaying = () => {
    setPlaying(true)
    const v = videoRef.current as VideoWithFrameCallback | null
    if (v && typeof v.requestVideoFrameCallback !== 'function') window.setTimeout(() => setShown(true), 150)
    once('hero_video_played')
  }

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      setUserPaused(true)
      v.pause()
      once('hero_video_paused')
      try {
        window.localStorage.setItem(PAUSED_KEY, '1')
      } catch {
        /* ignore */
      }
    } else {
      setUserPaused(false)
      try {
        window.localStorage.removeItem(PAUSED_KEY)
      } catch {
        /* ignore */
      }
      v.muted = true
      v.play().catch(() => {})
    }
  }

  // The button only exists once the clip has really started (or was paused by the visitor after starting)
  const showButton = armed && !blocked && (playing || userPaused)
  const button =
    showButton && slot
      ? createPortal(
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? 'Pause background video' : 'Play background video'}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white ring-1 ring-white/30 transition-colors hover:bg-black/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {playing ? (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
            ) : (
              <svg className="h-4 w-4 translate-x-px" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" /></svg>
            )}
          </button>,
          slot
        )
      : null

  return (
    <>
      <video
        ref={videoRef}
        data-hero-video={clip.id}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${shown ? 'opacity-100' : 'opacity-0'}`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={onPlaying}
        onPause={() => setPlaying(false)}
      >
        {armed && <source src={clip.portrait.src} type={clip.portrait.type} media="(max-width: 767px)" />}
        {armed && <source src={clip.landscape.src} type={clip.landscape.type} />}
      </video>
      {button}
    </>
  )
}
