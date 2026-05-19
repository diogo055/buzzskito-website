import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

// Above-the-fold quote CTA designed to sit right after the blog post hero.
// Different from InlineYardRiskCTA (which routes to the risk score tool —
// soft conversion). This one is high-intent: blog readers who are already
// searching tick/mosquito problems get a direct path to a custom quote.
//
// Compact bar layout so it doesn't push article content too far down,
// but visually distinct enough to catch the eye on first scroll.
export default function BlogPostCTA() {
  return (
    <aside
      aria-label="Get a free quote"
      className="not-prose my-6 sm:my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-white to-amber-50 p-5 sm:p-6 shadow-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        {/* Left: Hook + trust */}
        <div className="flex-1 min-w-0">
          <p className="text-[11px] sm:text-xs font-extrabold text-amber-700 uppercase tracking-widest mb-1.5">
            ★ As Featured in Toronto Star · CityNews · TorontoToday
          </p>
          <h3 className="text-lg sm:text-xl font-extrabold text-brand-900 leading-tight mb-1.5">
            Want this problem solved at YOUR address?
          </h3>
          <p className="text-sm text-gray-700 leading-snug">
            Free custom quote in under 24 hours · No contracts · 150+ five-star reviews · Health Canada-approved
          </p>
        </div>

        {/* Right: CTAs stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row gap-2.5 sm:items-center shrink-0">
          <Link
            href="/free-yard-assessment"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-6 py-3 rounded-full text-sm sm:text-base shadow-lg transition-colors text-center"
          >
            Get My Free Quote →
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-800 text-white font-bold px-5 py-3 rounded-full text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </aside>
  )
}
