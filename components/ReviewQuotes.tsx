import { BUSINESS } from '@/lib/constants'
import Reveal from '@/components/Reveal'

// Real Google reviews (verbatim from the BuzzSkito GBP, lightly capitalized
// for display). Geo-specific (Mississauga, Milton) — strong local social proof
// at the conversion moment. Add to high-value commercial pages.
const REVIEWS = [
  {
    name: 'Katharine M.',
    city: 'Mississauga',
    text: 'Fantastic experience with the mosquito control last summer! We’re re-signing for this season once again — we can finally enjoy our yard again in Mississauga.',
  },
  {
    name: 'Anthony',
    city: 'Milton',
    text: 'Highly recommend this company for mosquito control. I got my house in Milton serviced recently and loved the end result!',
  },
  {
    name: 'Matt Santos',
    city: 'Mississauga',
    text: 'I got my house serviced last summer and I’d highly recommend this service to anyone in the Mississauga area. Great job!',
  },
]

/**
 * Flagship review section. The claim no GTA competitor can make — every
 * single review five stars, zero exceptions — gets a hero-scale numeral
 * and the Google lockup instead of three small cards in a quiet band.
 */
export default function ReviewQuotes({
  heading = 'What GTA homeowners are saying',
}: { heading?: string }) {
  return (
    <section className="section-major px-4" aria-label="Customer reviews">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">

          {/* Left — the 5.0 lockup */}
          <Reveal className="lg:col-span-2 text-center lg:text-left relative lg:sticky lg:top-32 lg:self-start">
            <p className="kicker-light mb-3">Google Reviews</p>
            <div className="flex items-end justify-center lg:justify-start gap-4">
              <span className="font-display font-extrabold leading-none text-[clamp(6.5rem,5rem+8vw,11rem)] tracking-[-0.05em]" style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 25%, #93b4f0 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>5.0</span>
              <div className="pb-2">
                <div className="text-amber-500 text-2xl leading-none" aria-label="Five out of five stars">★★★★★</div>
                <div className="mt-1.5 flex items-center gap-1.5 text-sm text-[#aab6cf] font-medium">
                  {/* Google G */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18A10.96 10.96 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  150+ verified reviews
                </div>
              </div>
            </div>
            <p className="mt-5 font-display text-2xl font-extrabold tracking-tight text-white leading-snug">
              Every single review: five stars.<br className="hidden sm:block" /> Zero exceptions.
            </p>
            <p className="mt-3 text-sm text-[#8fa0bd] leading-relaxed max-w-sm mx-auto lg:mx-0">
              Not averaged across a franchise. Not padded with lawn-care jobs. 150+ GTA homeowners, all mosquito &amp; tick work, all five stars.
            </p>
            <a
              href={BUSINESS.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-nudge mt-5 inline-flex items-center gap-2 text-white/80 font-bold hover:text-white text-sm"
            >
              Read all 150+ reviews on Google
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </Reveal>

          {/* Right — quote cards */}
          <div className="lg:col-span-3">
            <h2 className="sr-only">{heading}</h2>
            {/* Lead pull-quote — the strongest voice gets editorial scale */}
            <Reveal as="div" className="mb-7">
              <blockquote className="accent-serif border-l-2 border-white/25 pl-6 text-2xl lg:text-[1.75rem] leading-snug text-white/95">
                &ldquo;{REVIEWS[0].text}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3 pl-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white text-sm font-bold" aria-hidden="true">{REVIEWS[0].name.charAt(0)}</span>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">{REVIEWS[0].name}</p>
                  <p className="text-xs text-[#8fa0bd]">{REVIEWS[0].city}, ON &middot; <span className="text-amber-500">★★★★★</span></p>
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REVIEWS.slice(1).map((r, i) => (
                <Reveal key={r.name} className={`rd-${i + 1} hover-lift surface-1 rounded-2xl p-5 flex flex-col`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-amber-500 text-sm" aria-label="Five stars">★★★★★</div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/60">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18A10.96 10.96 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.84z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                      Verified
                    </span>
                  </div>
                  <p className="text-sm text-[#c3cde2] leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white text-sm font-bold" aria-hidden="true">
                      {r.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">{r.name}</p>
                      <p className="text-xs text-[#8fa0bd]">{r.city}, ON</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
