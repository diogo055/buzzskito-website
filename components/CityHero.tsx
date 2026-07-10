import Image from 'next/image'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

/**
 * CityHero — the photographic hero for city / service / neighbourhood pages.
 *
 * A ~56vh version of the approved homepage PhotoHero: real BuzzSkito job
 * photo full-bleed, the same #0B1628 left scrim, breadcrumb, H1 (rendered
 * server-side — pass the EXACT existing H1 text; this component is a visual
 * upgrade only, never a copy change), one amber CTA + ghost phone button,
 * and the five-star trust row. One component upgrades 150+ landing pages
 * from a flat navy gradient to the homepage's cinematic language.
 *
 * Images: /spray-backyard.webp (default), /spray-front.webp, /spray-pool.webp.
 */
export default function CityHero({
  breadcrumbs,
  title,
  titleAccent,
  subtitle,
  image = '/spray-backyard.webp',
  imageAlt = 'BuzzSkito technician applying mosquito barrier spray to a GTA backyard',
  children,
}: {
  breadcrumbs?: { label: string; href?: string }[]
  title: React.ReactNode
  titleAccent?: React.ReactNode
  subtitle?: React.ReactNode
  image?: string
  imageAlt?: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-ink-950 min-h-[56vh] flex items-center py-16 sm:py-20">
      {/* Full-bleed photo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Left-dark scrim — same language as the homepage hero */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(11,22,40,0.95) 0%, rgba(11,22,40,0.90) 30%, rgba(11,22,40,0.62) 52%, rgba(11,22,40,0.24) 70%, rgba(11,22,40,0.08) 85%)',
        }}
        aria-hidden="true"
      />
      {/* Bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 -z-10"
        style={{ background: 'linear-gradient(180deg, rgba(11,22,40,0) 0%, rgba(11,22,40,0.55) 100%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="max-w-3xl">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="text-brand-300 text-sm mb-5 flex flex-wrap gap-1.5">
              {breadcrumbs.map((crumb, i) => (
                <span key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-white/30" aria-hidden="true">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] text-white">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-amber-400">{titleAccent}</span>
              </>
            )}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-white/90">{subtitle}</p>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/free-yard-assessment" className="btn-primary press-scale">
              Get a Free Quote
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="btn-ghost press-scale border-white/80 text-white hover:bg-white hover:text-brand-900"
              aria-label={`Call BuzzSkito at ${BUSINESS.phone}`}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {BUSINESS.phone}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-white/85">
            <span className="inline-flex items-center gap-2">
              <span className="text-amber-400" aria-hidden="true">★★★★★</span>
              <span className="font-medium">150+ five-star reviews</span>
            </span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
              <span aria-hidden="true">✓</span> Bite-Free Guarantee
            </span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span className="font-semibold text-white">From $99</span>
          </div>

          {children}
        </div>
      </div>
    </section>
  )
}
