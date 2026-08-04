'use client'

// The Leaflet canvas for the Past Project Map. MUST NOT be imported by a server
// component or during SSR — Leaflet touches window/document at import time and
// hard-crashes the render. ProjectMap.tsx pulls it in via next/dynamic with
// ssr:false. That is the only supported entry point.
//
// DELIBERATE LIMITS, all of them privacy decisions rather than styling ones:
//   · zoom is LOCKED. minZoom === maxZoom === the GTA fit. Scroll wheel, double
//     click, box zoom, touch pinch and the +/- control are all disabled, so no
//     viewer can ever resolve an individual property.
//   · dragging stays ON, so the map can be moved around as Alex asked.
//   · maxBounds pens the view to the GTA — you cannot drag off to another city
//     and lose the pins.
//   · the pins themselves are already displaced 150-450m by
//     scripts/build-project-map-pins.mjs in the hub repo. This component never
//     sees a true coordinate.
//
// Markers are L.divIcon rather than the default Leaflet pin: the default icon's
// PNG paths break under bundlers (the classic invisible-marker bug), and we want
// one colour per service anyway. divIcon markup is styled with INLINE styles —
// Leaflet injects it outside React so Tailwind's scanner never sees the classes.

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { PROJECT_PINS, type ProjectPin } from '@/lib/project-map-pins'

const SERVICE_COLOR: Record<ProjectPin['service'], string> = {
  mosquito: '#f59e0b', // amber — mosquito barrier spray
  tick: '#e11d48',     // rose — tick program
  both: '#059669',     // emerald — combined
  // Slate for previous seasons. The old system recorded the property but not
  // what was applied, so these deliberately claim no service type.
  past: '#64748b',
}
const SERVICE_LABEL: Record<ProjectPin['service'], string> = {
  mosquito: 'Mosquito barrier spray',
  tick: 'Tick control program',
  both: 'Mosquito + tick program',
  past: 'Treated in a previous season',
}

// Roughly the serviced footprint: Hamilton/Niagara escarpment up to Barrie-ish,
// Milton across to Oshawa. Padded so pins near the edge are not clipped.
const GTA_BOUNDS = L.latLngBounds(L.latLng(43.05, -80.35), L.latLng(44.45, -78.55))

export default function ProjectMapCanvas() {
  const holder = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!holder.current || mapRef.current) return

    const map = L.map(holder.current, {
      // Zoom is fully locked — see the note at the top of this file.
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      touchZoom: false,
      keyboard: false,
      dragging: true,
      maxBounds: GTA_BOUNDS,
      maxBoundsViscosity: 1,
      attributionControl: true,
    })
    mapRef.current = map

    map.fitBounds(GTA_BOUNDS, { padding: [12, 12] })
    // Pin the zoom range to whatever the fit produced, so it can never change.
    const z = map.getZoom()
    map.setMinZoom(z)
    map.setMaxZoom(z)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map)

    for (const p of PROJECT_PINS) {
      const color = SERVICE_COLOR[p.service]
      const icon = L.divIcon({
        className: '',
        html:
          `<span style="display:block;width:14px;height:14px;border-radius:9999px;` +
          `background:${color};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.45)"></span>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      })
      L.marker([p.lat, p.lng], { icon, keyboard: false })
        .addTo(map)
        // City + service only. Never a name, address or date.
        .bindPopup(
          `<strong>${p.city}</strong><br/><span style="color:#475569">${SERVICE_LABEL[p.service]}</span>` +
            `<br/><span style="color:#94a3b8;font-size:11px">Approximate location</span>`,
        )
    }

    // The section animates in, so the container can be sized 0 on first paint.
    const ro = new ResizeObserver(() => map.invalidateSize())
    ro.observe(holder.current)

    return () => {
      ro.disconnect()
      map.remove()
      mapRef.current = null
    }
  }, [])

  return <div ref={holder} className="h-full w-full" aria-label="Map of past BuzzSkito treatment locations across the GTA" />
}
