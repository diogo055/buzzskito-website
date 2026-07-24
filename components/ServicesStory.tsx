import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/Icon'

/**
 * Services as a sticky scroll story — the mirror of HowItWorksStory. The
 * photo panel pins on the LEFT (composition variety) and crossfades between
 * the mosquito and tick treatment photos as each service scrolls past on
 * the right. The active photo carries a slow living Ken Burns.
 *
 * SEO contract: every heading, paragraph, bullet and link is verbatim from
 * the previous card layout — presentation only. Mobile: each service keeps
 * its own inline photo, stacked (no sticky physics).
 *
 * State is driven by the shared StoryHydrator (`.story-root`/[data-step]);
 * painting is CSS opacity/transform only.
 */

const SERVICES = [
  {
    n: '1',
    title: 'Mosquito Control',
    img: '/spray-backyard.webp',
    alt: 'BuzzSkito technician applying mosquito barrier spray to backyard vegetation in the GTA',
    href: '/mosquito-control',
    cta: 'Learn About Mosquito Control',
    desc: (
      <>
        Barrier spray applied to vegetation, shrubs, and shaded areas. Kills mosquitoes on contact. Lasts <strong>up to 30 days</strong> per application. We recommend 5 treatments from May through September.
      </>
    ),
    bullets: [
      { icon: 'zap', text: 'Immediate kill-on-contact' },
      { icon: 'clock', text: '30-day residual protection' },
      { icon: 'shield-check', text: 'Health Canada–approved formula' },
      { icon: 'refresh', text: 'Free re-spray if mosquitoes return' },
    ],
  },
  {
    n: '2',
    title: 'Tick Control',
    img: '/spray-front.webp',
    alt: 'BuzzSkito technician treating lawn edges and garden borders for ticks at a GTA home',
    href: '/tick-control',
    cta: 'Learn About Tick Control',
    desc: (
      <>
        Targeted tick treatment for lawn edges, garden borders, wooded property lines, and shaded areas. Kills ticks at <strong>all life stages</strong>. Up to <strong>30 days protection</strong> per treatment.
      </>
    ),
    bullets: [
      { icon: 'tick', text: 'Kills nymphs, adults & larvae' },
      { icon: 'clock', text: 'Up to 30-day protection' },
      { icon: 'shield-check', text: 'Lyme disease prevention' },
      { icon: 'refresh', text: '5 seasonal treatments recommended' },
    ],
  },
] as const

export default function ServicesStory() {
  return (
    <section aria-labelledby="services-heading" className="section-major !pt-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="scrub-h relative max-w-2xl mb-12 lg:mb-16">
          <span className="ghost-num ghost-num-light" aria-hidden="true">01</span>
          <p className="kicker-light mb-3">Our Services</p>
          <h2 id="services-heading" className="h2-display text-white mb-3">
            Mosquito &amp; Tick Control <span className="accent-serif text-amber-400">Services</span>
          </h2>
          <p className="text-[#8fa0bd]">
            Professional barrier spray treatments for residential properties across the Greater Toronto Area.
          </p>
        </div>

        <div className="story-root svc-root grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14" data-active="1">
          {/* Sticky crossfade panel — desktop, LEFT (mirror of how-it-works) */}
          <div className="hidden lg:block" aria-hidden="true">
            <div className="sticky top-[max(6rem,calc(50vh-14.5rem))]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10">
                {SERVICES.map(({ n, img }) => (
                  <div key={n} className={`svc-img svc-img-${n} absolute inset-0`}>
                    <Image src={img} alt="" fill sizes="(min-width: 1024px) 45vw, 0px" className="object-cover" />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />
                <div className="grain" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
                  {SERVICES.map(({ n }) => (
                    <span key={n} className={`svc-dot svc-dot-${n} h-1.5 rounded-full bg-white/40 transition-all duration-500`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services column */}
          <ol className="relative space-y-12 lg:space-y-0">
            <span className="absolute left-7 top-10 bottom-10 hidden w-px bg-white/10 lg:block" aria-hidden="true" />
            <span className="svc-fill absolute left-7 top-10 hidden w-px bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)] lg:block" aria-hidden="true" />
            {SERVICES.map(({ n, title, img, alt, href, cta, desc, bullets }) => (
              <li key={n} data-step={n} className="svc-step lg:flex lg:min-h-[62vh] lg:flex-col lg:justify-center">
                <div className="lg:pl-14 relative">
                  <span className="svc-chip absolute -left-0 top-0 hidden lg:flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 font-display text-lg font-extrabold text-white/80 transition-all duration-500" style={{ left: 0 }} aria-hidden="true">
                    0{n}
                  </span>
                  <h3 className="font-display text-3xl font-extrabold tracking-[-0.03em] text-white mb-3">{title}</h3>
                  <p className="text-[#aab6cf] mb-5 leading-relaxed max-w-lg">{desc}</p>
                  <ul className="space-y-2.5 text-sm text-[#c3cde2] mb-6">
                    {bullets.map(({ icon, text }) => (
                      <li key={text} className="flex items-center gap-2.5">
                        <Icon name={icon} className="w-4 h-4 text-amber-400/80 shrink-0" /> {text}
                      </li>
                    ))}
                  </ul>
                  <Link href={href} className="press-scale arrow-nudge btn-ghost-light">
                    {cta}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                  {/* Inline photo — mobile/tablet only */}
                  <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10 lg:hidden">
                    <div className="relative aspect-[16/10]">
                      <Image src={img} alt={alt} fill sizes="(max-width: 1024px) 100vw, 0px" className="sd-parallax object-cover" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Crossfade + living Ken Burns on the active frame */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .svc-img {
              opacity: 0;
              transform: scale(1.07);
              transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                          transform 1.3s cubic-bezier(0.22, 1, 0.36, 1);
            }
            .svc-root[data-active="1"] .svc-img-1,
            .svc-root[data-active="2"] .svc-img-2 { opacity: 1; transform: scale(1); }
            @media (prefers-reduced-motion: no-preference) {
              .svc-root[data-active="1"] .svc-img-1 img,
              .svc-root[data-active="2"] .svc-img-2 img {
                animation: svc-kb 16s ease-in-out infinite alternate;
              }
              @keyframes svc-kb {
                from { transform: scale(1); }
                to   { transform: scale(1.07); }
              }
            }
            .svc-dot { width: 14px; }
            .svc-root[data-active="1"] .svc-dot-1,
            .svc-root[data-active="2"] .svc-dot-2 { width: 30px; background: #fbbf24; }
            .svc-fill { height: 18%; transition: height 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
            .svc-root[data-active="2"] .svc-fill { height: 88%; }
            @media (min-width: 1024px) {
              .svc-step { transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1); }
              .svc-root[data-active="1"] .svc-step:not([data-step="1"]),
              .svc-root[data-active="2"] .svc-step:not([data-step="2"]) { opacity: 0.45; }
              .svc-root[data-active="1"] [data-step="1"] .svc-chip,
              .svc-root[data-active="2"] [data-step="2"] .svc-chip {
                background: rgba(251, 191, 36, 0.16);
                box-shadow: 0 0 0 1px rgba(251, 191, 36, 0.45), 0 0 28px rgba(251, 191, 36, 0.18);
                color: #fbbf24;
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .svc-img, .svc-dot, .svc-fill, .svc-step { transition: none; animation: none !important; }
            }
          `,
        }}
      />
    </section>
  )
}
