'use client'

// "As Seen In" press-mention bar — appears site-wide above the page content
// on sales pages (homepage, city pages, service pages, quote page). Hidden on
// blog routes since the editorial flow doesn't need a sticky trust banner.
//
// Three placements landed the week of 2026-05-17 — Toronto Star, CityNews
// Toronto, TorontoToday.ca — all DR 80+ news sites covering the early-season
// mosquito/tick surge. This banner cashes in on that momentum by surfacing
// the citations on every conversion page.

import { Fragment } from 'react'
import { usePathname } from 'next/navigation'

const PRESS_MENTIONS = [
  {
    name: 'TORONTO STAR',
    url: 'https://www.thestar.com/news/gta/ticks-are-surging-in-ontario-this-year-and-toronto-is-a-hot-spot-heres-how-to-protect-yourself/article_b004ab3c-2987-4c64-852b-26d1f4978a14.html',
    // Serif treatment evokes the Star's masthead.
    className: 'font-serif tracking-tight',
  },
  {
    name: 'CITYNEWS',
    url: 'https://toronto.citynews.ca/2026/05/17/experts-warning-of-a-bad-mosquito-season-ahead/',
    // Heavy weight evokes the CityNews on-air wordmark.
    className: 'font-black tracking-wide',
  },
  {
    name: 'TORONTO TODAY',
    url: 'https://www.torontotoday.ca/local/environment-climate/more-ticks-mosquitoes-toronto-this-summer-12249274',
    className: 'font-bold tracking-wide',
  },
]

export default function PressMentionBanner() {
  const pathname = usePathname()
  // Skip on blog routes — keeps article reading flow clean.
  if (pathname?.startsWith('/blog')) return null

  return (
    <aside
      aria-label="Press mentions"
      className="bg-gradient-to-r from-amber-50 via-white to-amber-50 border-b border-amber-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-5 text-center">
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-700 inline-flex items-center gap-1.5">
            <span aria-hidden="true">★</span> As Featured In
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-1 text-[11px] sm:text-sm">
            {PRESS_MENTIONS.map((p, i) => (
              <Fragment key={p.name}>
                {i > 0 && (
                  <span className="text-amber-300 hidden sm:inline" aria-hidden="true">|</span>
                )}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${p.className} text-brand-950 hover:text-amber-700 transition-colors`}
                  title={`Read the ${p.name.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())} article featuring BuzzSkito`}
                >
                  {p.name}
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
