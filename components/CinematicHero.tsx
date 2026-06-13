'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { BUSINESS } from '@/lib/constants'

/**
 * Cinematic scroll-story hero.
 *
 * A position:sticky pinned stage (native pin — no scroll-hijack, iOS momentum
 * preserved, zero CLS). One passive rAF scroll handler writes five 0..1 custom
 * properties to the stage; every layer derives transform/opacity from them in
 * CSS (see globals.css "CINEMATIC HERO"). Compositor-only props — no layout
 * thrash beyond a single getBoundingClientRect per frame.
 *
 * The <h1>, CTA, and trust line render server-side and are fully visible at
 * progress 0 with no scroll required — that first frame is the LCP and the
 * complete pitch. The barrier story (beats 2-5) is progressive enhancement.
 *
 * prefers-reduced-motion → a fixed, calm "resolved" composition, no driver.
 */
export default function CinematicHero() {
  const trackRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    const stage = stageRef.current
    if (!track || !stage) return

    const set = (k: string, v: number) => stage.style.setProperty(k, v.toFixed(3))

    // Reduced motion: paint one tasteful static frame and stop.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      set('--hp', 0.12); set('--enter', 1); set('--barrier', 0.6)
      set('--repel', 0.5); set('--resolve', 0.25)
      return
    }

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))
    // triangle: 0 at a, 1 at peak p, 0 at b
    const tri = (x: number, a: number, p: number, b: number) =>
      x <= a || x >= b ? 0 : x < p ? (x - a) / (p - a) : 1 - (x - p) / (b - p)

    let raf = 0
    const update = () => {
      raf = 0
      const rect = track.getBoundingClientRect()
      const total = Math.max(1, track.offsetHeight - window.innerHeight)
      const hp = clamp(-rect.top / total, 0, 1)
      set('--hp', hp)
      set('--enter', clamp(hp / 0.28, 0, 1))
      set('--barrier', tri(hp, 0.32, 0.56, 0.84))
      set('--repel', clamp((hp - 0.5) / 0.34, 0, 1))
      set('--resolve', clamp((hp - 0.78) / 0.22, 0, 1))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // Mosquito particles — positioned, fade/shove handled in CSS via --repel.
  const mosquitoes = [
    { top: '34%', left: '20%' }, { top: '52%', left: '14%' },
    { top: '46%', left: '28%' }, { top: '63%', left: '22%' },
    { top: '40%', left: '34%' },
  ]

  return (
    <section ref={trackRef} className="cine-track" aria-label="Mosquito and tick control, guaranteed for the GTA">
      <div ref={stageRef} className="cine-stage">

        {/* Aurora sky */}
        <div className="cine-layer cine-sky" aria-hidden="true" />
        <div className="cine-layer" aria-hidden="true">
          <div className="cine-orb" style={{ width: 320, height: 320, right: -60, top: -70, background: 'rgba(37,99,180,0.5)' }} />
          <div className="cine-orb" style={{ width: 220, height: 220, left: -50, bottom: -60, background: 'rgba(245,158,11,0.26)' }} />
        </div>

        {/* Real backyard photo (LCP image) — dimmed, parallax */}
        <div className="cine-layer cine-yard" aria-hidden="true">
          <Image
            src="/spray-backyard.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="cine-layer cine-yard-tint" aria-hidden="true" />

        {/* Barrier dome (beat 3) */}
        <div className="cine-layer cine-barrier" aria-hidden="true">
          <svg viewBox="0 0 600 600" fill="none">
            <ellipse className="ring" cx="300" cy="320" rx="250" ry="250" strokeWidth="2" opacity="0.85" />
            <ellipse className="glow" cx="300" cy="320" rx="250" ry="250" strokeWidth="6" opacity="0.25" />
            <ellipse className="ring" cx="300" cy="320" rx="200" ry="205" strokeWidth="1.5" opacity="0.5" />
            <ellipse className="ring" cx="300" cy="320" rx="150" ry="158" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>

        {/* Mosquitoes */}
        <div className="cine-layer cine-mosq-wrap" aria-hidden="true">
          {mosquitoes.map((m, i) => (
            <span key={i} className="cine-mosq" style={{ top: m.top, left: m.left }}>
              <i className="l" /><i className="r" /><b />
            </span>
          ))}
        </div>

        {/* Cut-out technician — parallax-enters from right */}
        <div className="cine-layer cine-tech" aria-hidden="true">
          <Image
            src="/technician-walk.png"
            alt=""
            width={184}
            height={228}
            sizes="(max-width: 640px) 64vw, 40vw"
          />
        </div>

        {/* Copy — always visible (LCP text + the pitch) */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="cine-copy max-w-xl">
            <p className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-amber-300 font-bold text-xs uppercase tracking-widest mb-5">
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400 pulse-dot" aria-hidden="true" />
              Same-week openings across the GTA
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
              Mosquito &amp; Tick Control<br />
              <span className="text-amber-400">Guaranteed for the GTA</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-100 mb-7 max-w-xl leading-relaxed">
              Watch the barrier go down. Professional spray for residential lawns — Health Canada&ndash;approved, safe for kids &amp; pets in 30 minutes, up to 30-day protection per visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/free-yard-assessment"
                className="btn-sheen press-scale inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="press-scale inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors"
                aria-label={`Call BuzzSkito: ${BUSINESS.phone}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {BUSINESS.phone}
              </a>
            </div>
            <p className="text-sm text-brand-200 flex flex-wrap gap-x-4 gap-y-1 items-center">
              <span className="cine-resolve inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 rounded-full px-3 py-1 font-bold">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                Bite-Free Guarantee
              </span>
              <span>★★★★★ 150+ reviews</span>
              <span>From $99</span>
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="cine-cue absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-brand-300 text-[10.5px] uppercase tracking-[0.18em]" aria-hidden="true">
          <span>scroll — the barrier forms</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>
    </section>
  )
}
