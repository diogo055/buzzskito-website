import Image, { getImageProps } from 'next/image'
import Link from 'next/link'
import { BUSINESS, PROMISES } from '@/lib/constants'
import QuoteLink from '@/components/QuoteLink'
import HeroVideo from '@/components/HeroVideo'
import { HERO_VIDEO, type HeroClip } from '@/lib/hero-video'

/**
 * CityHero — the photographic hero for city / service / neighbourhood pages.
 *
 * A ~56vh version of the approved homepage PhotoHero: real BuzzSkito job
 * photo full-bleed, the same #0B1628 left scrim, breadcrumb, H1 (rendered
 * server-side — pass the EXACT existing H1 text; this component is a visual
 * upgrade only, never a copy change), one amber CTA + Call and Text buttons,
 * and the five-star trust row. One component upgrades 150+ landing pages
 * from a flat navy gradient to the homepage's cinematic language.
 *
 * `service` preselects Mosquito or Tick on the quote form (tick pages pass
 * service="tick"). Taps are counted by LeadClickTracker via data-lead-location.
 *
 * Images: /spray-backyard.webp (default), /spray-front.webp, /hero/crew-play-set.jpg (real crew footage
 * frame, Nov 13, 2026; it replaced /spray-pool.webp, which showed misting beside flowers by a pool).
 * `imagePosition` keeps the subject in view where a phone crops the photo (e.g. "object-[64%_50%]").
 *
 * `heroVideo` (built Nov 13, 2026, OFF): when a page passes a clip AND HERO_VIDEO.city is true, the hero
 * shows that clip's art-directed stills and plays the clip over them after load (components/HeroVideo.tsx,
 * photo first, same rules as the homepage). Owner's plan: city pages stay off until the May-June 2027 check.
 */
export default function CityHero({
  breadcrumbs,
  title,
  titleAccent,
  subtitle,
  image = '/spray-backyard.webp',
  imageAlt = 'BuzzSkito technician applying mosquito barrier spray to a GTA backyard',
  imagePosition = 'object-center',
  heroVideo,
  service = 'mosquito',
  children,
}: {
  breadcrumbs?: { label: string; href?: string }[]
  title: React.ReactNode
  titleAccent?: React.ReactNode
  subtitle?: React.ReactNode
  image?: string
  imageAlt?: string
  imagePosition?: string
  heroVideo?: HeroClip
  service?: 'mosquito' | 'tick'
  children?: React.ReactNode
}) {
  let video: null | {
    clip: HeroClip
    desktopSet: string | undefined
    phoneSet: string | undefined
    imgStyle: React.CSSProperties | undefined
    img: Omit<ReturnType<typeof getImageProps>['props'], 'srcSet' | 'style'>
  } = null
  if (heroVideo && HERO_VIDEO.city) {
    const common = { alt: heroVideo.alt, sizes: '100vw', priority: true, quality: 70 }
    const {
      props: { srcSet: desktopSet },
    } = getImageProps({ ...common, src: heroVideo.stillLandscape.src, width: heroVideo.stillLandscape.width, height: heroVideo.stillLandscape.height })
    const {
      props: { srcSet: phoneSet, style: imgStyle, ...img },
    } = getImageProps({ ...common, src: heroVideo.stillPortrait.src, width: heroVideo.stillPortrait.width, height: heroVideo.stillPortrait.height })
    video = { clip: heroVideo, desktopSet, phoneSet, imgStyle, img }
  }

  return (
    <section className="relative isolate w-full overflow-hidden bg-ink-950 min-h-[56vh] flex items-center py-16 sm:py-20">
      {/* Full-bleed photo (the LCP element); with a hero video switched on, the clip's own stills + the clip */}
      <div className="absolute inset-0 -z-10" data-hero-box="">
        {video ? (
          <>
            <picture>
              <source media="(min-width: 768px)" srcSet={video.desktopSet} sizes="100vw" />
              {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
              <img
                {...video.img}
                srcSet={video.phoneSet}
                style={{ ...video.imgStyle, position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                className="object-cover object-center"
                data-hero-still=""
              />
            </picture>
            <HeroVideo clip={video.clip} controlSlotId="city-hero-video-control" />
          </>
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            priority
            className={`object-cover ${imagePosition}`}
          />
        )}
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

          {/* Phones: full-width primary, then Call + Text as a compact two-up row, so the three
              actions stay easy to tap without pushing the trust row below the first screen.
              sm and up: all three inline at full size. */}
          <div data-lead-location="hero" className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <QuoteLink service={service} location="hero" className="btn-primary press-scale w-full sm:w-auto">
              Get my price
            </QuoteLink>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="btn-ghost press-scale min-h-[48px] border-white/80 px-3 py-2.5 text-base text-white hover:bg-white hover:text-brand-900 sm:px-8 sm:py-4 sm:text-lg"
                aria-label={`Call BuzzSkito at ${BUSINESS.phone}`}
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {/* The full number doesn't fit a half-width phone button; "Call" there, the number from sm up */}
                <span className="sm:hidden">Call</span>
                <span className="hidden sm:inline">{BUSINESS.phone}</span>
              </a>
              <a
                href={BUSINESS.smsHref}
                className="btn-ghost press-scale min-h-[48px] border-white/80 px-3 py-2.5 text-base text-white hover:bg-white hover:text-brand-900 sm:px-8 sm:py-4 sm:text-lg"
                aria-label={`Text BuzzSkito at ${BUSINESS.phone}`}
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Text us
              </a>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-white/85 sm:mt-7">
            <span className="inline-flex items-center gap-2">
              <span className="text-amber-400" aria-hidden="true">★★★★★</span>
              <span className="font-medium">150+ five-star reviews</span>
            </span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
              <span aria-hidden="true">✓</span> {PROMISES.rainBackShort}
            </span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span className="font-semibold text-white">From $99</span>
          </div>

          {children}
        </div>
      </div>
      {video && <div id="city-hero-video-control" className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6" />}
    </section>
  )
}
