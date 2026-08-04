'use client'

// "Past Project Map" — social proof section. Every pin is a property we have
// actually treated this season.
//
// PERFORMANCE: the homepage carries only 6 runtime dependencies and its Core Web
// Vitals matter more than any other page on the site, so the Leaflet canvas is
// NOT loaded up front. It is dynamically imported with ssr:false AND held back
// until the section scrolls near the viewport, so the map costs nothing to
// anyone who never reaches it. Until then a lightweight placeholder holds the
// exact same height — no layout shift.
//
// PRIVACY: pins are pre-displaced 150-450m in lib/project-map-pins.ts and zoom
// is locked in ProjectMapCanvas. Nothing here can resolve a real address.

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { PROJECT_PIN_CITIES } from '@/lib/project-map-pins'

const ProjectMapCanvas = dynamic(() => import('./ProjectMapCanvas'), {
  ssr: false,
  loading: () => <MapSkeleton />,
})

function MapSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0a1424]">
      <p className="text-sm font-medium text-[#8fa0bd]">Loading treatment map…</p>
    </div>
  )
}

const LEGEND = [
  { color: '#f59e0b', label: 'Mosquito' },
  { color: '#e11d48', label: 'Tick' },
  { color: '#059669', label: 'Mosquito + tick' },
  { color: '#64748b', label: 'Previous seasons' },
]

export default function ProjectMap() {
  const [visible, setVisible] = useState(false)
  const section = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = section.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '300px' }, // start loading just before it scrolls into view
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="project-map" ref={section} className="section-major scroll-mt-24 px-4">
      <div className="mx-auto max-w-6xl">
        <p className="kicker-light mb-3 text-center">Real yards. Real treatments. Across the GTA.</p>
        <h2 className="h2-display text-center text-white">Where We&rsquo;ve Been Spraying</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-[#8fa0bd]">
          Every pin is a property we&rsquo;ve treated &mdash; across{' '}
          <strong className="text-white">{PROJECT_PIN_CITIES.length} cities and towns</strong> in the Greater Toronto
          Area and beyond.
        </p>

        <div className="relative mt-8 overflow-hidden rounded-2xl ring-1 ring-white/15">
          <div className="h-[380px] w-full sm:h-[520px]">
            {visible ? <ProjectMapCanvas /> : <MapSkeleton />}
          </div>

          {/* Privacy notice — sits above the canvas, never blocks dragging. */}
          <div className="pointer-events-none absolute left-3 top-3 z-[500] max-w-[min(92%,26rem)] rounded-lg bg-white/95 px-3 py-2 shadow-md ring-1 ring-black/5">
            <p className="text-[11px] leading-snug text-gray-700">
              <span className="font-bold text-brand-900">All real treatments.</span> Pin locations are deliberately
              approximate and zoom is disabled, to protect our customers&rsquo; privacy.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {LEGEND.map((l) => (
            <span key={l.label} className="flex items-center gap-1.5 text-xs font-medium text-[#c3cde2]">
              <span
                className="h-3 w-3 rounded-full border-2 border-white/80 shadow"
                style={{ background: l.color }}
              />
              {l.label}
            </span>
          ))}
          <span className="text-xs text-[#6b7d99]">Drag to move the map</span>
        </div>
      </div>
    </section>
  )
}
