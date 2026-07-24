import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS, SERVICE_SEASON } from '@/lib/constants'
import GoogleReviews from '@/components/GoogleReviews'
import Reveal from '@/components/Reveal'

interface CTASectionProps {
  heading?: string
  subtext?: string
  variant?: 'green' | 'dark' | 'light'
}

/**
 * The conversion closer. 'green' and 'dark' variants render a cinematic
 * photographic finale that bookends the hero — the same graded backyard
 * photograph, navy grade scrim, amber floor glow and grain, so the last
 * impression matches the first. 'light' stays a lit paper band.
 *
 * The photo is lazy-loaded (far below the fold on every page) inside a
 * fixed-height section — zero LCP/CLS impact. Copy cascades in via Reveal.
 */
export default function CTASection({
  heading = 'Protect Your Family This Season',
  subtext = 'Get a free, no-obligation quote for mosquito and tick control at your property.',
  variant = 'green',
}: CTASectionProps) {
  const photographic = variant !== 'light'

  if (!photographic) {
    return (
      <section className="paper-band section-major px-4" aria-label="Call to action">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-extrabold tracking-[-0.035em] leading-[1.02] text-[clamp(2.25rem,1.6rem+3vw,3.5rem)] text-brand-900 mb-5 [text-wrap:balance]">{heading}</h2>
          <p className="text-lg sm:text-xl text-brand-700 mb-6 max-w-xl mx-auto leading-relaxed">{subtext}</p>
          <div className="flex justify-center mb-7">
            <GoogleReviews light />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-yard-assessment" className="btn-primary btn-attn press-scale">
              Get a Free Quote
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="press-scale btn-ghost border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white"
              aria-label={`Call BuzzSkito at ${BUSINESS.phone}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              {BUSINESS.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-brand-700 opacity-75">
            ✓ No contracts &nbsp;·&nbsp; ✓ Free re-spray guarantee &nbsp;·&nbsp; ✓ {SERVICE_SEASON}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative isolate overflow-hidden section-major px-4 text-white" style={{ backgroundColor: '#060a14' }} aria-label="Call to action">
      {/* Photographic finale layers — same world as the hero */}
      <div className="cta-zoom absolute inset-0 -z-10" aria-hidden="true">
        <Image src="/spray-pool.webp" alt="" fill sizes="100vw" quality={60} className="object-cover" />
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(180deg, rgba(11,22,40,0.93) 0%, rgba(11,22,40,0.82) 45%, rgba(11,22,40,0.92) 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(75% 90% at 50% 112%, rgba(245,158,11,0.26), transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="grain -z-10" aria-hidden="true" />
      {/* Feather the photo into the page canvas above — no hard seam */}
      <div className="absolute inset-x-0 top-0 h-44 -z-10 bg-gradient-to-b from-[#060a14] to-transparent" aria-hidden="true" />

      {/* The barrier, completed — the page's motif resolves as a closed
          perimeter around the final promise */}
      <div className="ring-breathe mx-auto max-w-4xl rounded-[2rem] border border-amber-400/45 px-5 py-12 text-center sm:px-12 [box-shadow:0_0_50px_-18px_rgba(251,191,36,0.35),inset_0_0_40px_-30px_rgba(251,191,36,0.25)]">
        <Reveal>
          <h2 className="font-display font-extrabold tracking-[-0.035em] leading-[1.02] text-[clamp(2.75rem,2rem+3.8vw,4.5rem)] text-white mb-5 [text-wrap:balance]">{heading}</h2>
        </Reveal>
        <Reveal className="rd-1">
          <p className="text-lg sm:text-xl text-brand-100 mb-6 max-w-xl mx-auto leading-relaxed">{subtext}</p>
        </Reveal>
        <Reveal className="rd-2 flex justify-center mb-7">
          <GoogleReviews />
        </Reveal>
        <Reveal className="rd-3">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-yard-assessment" className="btn-primary btn-attn press-scale">
              Get a Free Quote
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="press-scale glass-chip inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-brand-900"
              aria-label={`Call BuzzSkito at ${BUSINESS.phone}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              {BUSINESS.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-brand-100 opacity-75">
            ✓ No contracts &nbsp;·&nbsp; ✓ Free re-spray guarantee &nbsp;·&nbsp; ✓ {SERVICE_SEASON}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
