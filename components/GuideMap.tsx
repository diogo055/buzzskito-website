import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import type { ReactNode } from 'react'
import type { GuideBlock } from '@/lib/guides'
import { US_GUIDE_BUILT, US_GUIDE_PLANNED } from '@/lib/us-guide-built'

type MapBlock = Extract<GuideBlock, { type: 'map' }>
interface Geo { viewBox: string; features: { id: string; name: string; d: string }[] }

/**
 * A map for the guides (block type "map"): the US by state (scope "us") or one state by
 * county (scope = the state's two-letter code). Shapes come from data/geo/<scope>.json, made
 * by scripts/build-geo.mjs from Census boundary data; they are drawn into the page as plain
 * SVG at build time, so the map costs no JavaScript.
 *
 * Categories are shaded on one blue ramp, darkest first (they are ordered: "established" is
 * darker than "reported"). Places without a value stay light gray. Every place and its
 * category is also listed in the "Show the list" table, so nothing depends on colour alone.
 */
const RAMP = ['#1e3a8a', '#2563eb', '#93c5fd', '#dbeafe']
const EMPTY = '#f3f4f6'

const geoCache = new Map<string, Geo | null>()
function loadGeo(scope: string): Geo | null {
  if (!geoCache.has(scope)) {
    const file = join(process.cwd(), 'data', 'geo', `${scope.toLowerCase()}.json`)
    geoCache.set(scope, existsSync(file) ? (JSON.parse(readFileSync(file, 'utf8')) as Geo) : null)
  }
  return geoCache.get(scope) ?? null
}

/** A link inside the map only when its page is live (a planned page that is not out yet stays plain). */
const live = (href: string) => !(US_GUIDE_PLANNED.has(href) && !US_GUIDE_BUILT.has(href))

export default function GuideMap({ map, caption, source }: { map: MapBlock; caption?: ReactNode; source: ReactNode }) {
  const geo = loadGeo(map.scope)
  if (!geo) return null // scripts/validate-guide.mjs fails the build before this can happen
  const color = Object.fromEntries(map.categories.map((c, i) => [c.key, RAMP[Math.min(i, RAMP.length - 1)]]))
  const label = Object.fromEntries(map.categories.map((c) => [c.key, c.label]))
  const id = `map-${map.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60)}`
  const byCat = map.categories.map((c) => ({ ...c, places: geo.features.filter((f) => map.values[f.id] === c.key) }))
  const none = geo.features.filter((f) => !map.values[f.id])

  return (
    <figure className="not-prose my-8" aria-labelledby={`${id}-title`}>
      <p id={`${id}-title`} className="text-base font-bold leading-snug text-brand-900">{map.title}</p>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-700">
        {map.categories.map((c) => (
          <li key={c.key} className="flex items-center gap-1.5">
            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-sm border border-gray-300" style={{ backgroundColor: color[c.key] }} />
            {c.label}
          </li>
        ))}
        {none.length > 0 && (
          <li className="flex items-center gap-1.5">
            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-sm border border-gray-300" style={{ backgroundColor: EMPTY }} />
            No record
          </li>
        )}
      </ul>
      <svg viewBox={geo.viewBox} className="mt-3 h-auto w-full" role="img" aria-label={`${map.title}. The same information is listed under "Show the list".`}>
        {geo.features.map((f) => {
          const cat = map.values[f.id]
          const shape = (
            <path d={f.d} fill={cat ? color[cat] : EMPTY} stroke="#ffffff" strokeWidth={1} vectorEffect="non-scaling-stroke" strokeLinejoin="round">
              <title>{`${f.name}: ${cat ? label[cat] : 'no record'}`}</title>
            </path>
          )
          const href = map.links?.[f.id]
          return href && live(href) ? <a key={f.id} href={href}>{shape}</a> : <g key={f.id}>{shape}</g>
        })}
      </svg>
      <details className="mt-3 text-sm">
        <summary className="cursor-pointer font-semibold text-brand-700">Show the list</summary>
        <div className="mt-2 space-y-2 text-gray-700">
          {byCat.filter((c) => c.places.length).map((c) => (
            <p key={c.key}>
              <strong className="text-brand-900">{c.label} ({c.places.length}):</strong>{' '}
              {c.places.map((f, i) => {
                const href = map.links?.[f.id]
                return (
                  <span key={f.id}>
                    {i > 0 ? ', ' : ''}
                    {href && live(href) ? <a href={href} className="text-brand-700 underline">{f.name}</a> : f.name}
                  </span>
                )
              })}
            </p>
          ))}
          {none.length > 0 && <p><strong className="text-brand-900">No record ({none.length}):</strong> {none.map((f) => f.name).join(', ')}</p>}
        </div>
      </details>
      <figcaption className="mt-2 text-xs leading-relaxed text-gray-500">
        {caption}
        {caption ? ' ' : ''}Source: {source}
      </figcaption>
    </figure>
  )
}
