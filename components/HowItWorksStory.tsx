import Image from 'next/image'
import { Icon } from '@/components/Icon'
import StoryHydrator from '@/components/StoryHydrator'

/**
 * Sticky scroll-story version of "How BuzzSkito Works" (desktop lg+):
 * the photo panel pins while the three steps scroll past; each step
 * crossfades the panel to its matching real photo (opacity-only).
 * On mobile every step carries its own inline photo — no sticky tricks,
 * no hidden content.
 *
 * SEO/perf contract:
 * - H2 + all step copy render server-side, identical wording to the old
 *   3-column layout (protected content — do not reword).
 * - Crossfade is driven by StoryHydrator (IntersectionObserver → a single
 *   data-active attribute); painting is pure CSS opacity.
 * - No JS → data-active stays "1", first photo shows, all steps readable.
 * - Panel photos are below the fold: default lazy loading, fixed aspect
 *   containers → zero CLS.
 */

const STEPS = [
  {
    n: '1',
    title: 'Book a Free Quote',
    icon: 'message',
    desc: 'Call (289) 216-5030 or fill out our online form. We\'ll provide a no-obligation quote for your property size and treatment needs.',
    img: '/van-frontyard-spray.webp',
    alt: 'Branded BuzzSkito service van parked in a GTA driveway while a technician prepares equipment',
  },
  {
    n: '2',
    title: 'We Spray Your Yard',
    icon: 'spray',
    desc: 'A licensed technician applies a thorough barrier spray to your lawn, shrubs, garden edges, and tree lines. You\'ll receive an SMS alert before we arrive.',
    img: '/spray-backyard.webp',
    alt: 'BuzzSkito technician applying mosquito barrier spray to backyard vegetation',
  },
  {
    n: '3',
    title: 'Enjoy the Outdoors',
    icon: 'shield-check',
    desc: 'You\'re back outside in 30 minutes. Protection lasts up to 30 days per treatment for both mosquitoes and ticks. We send a full service log after every visit.',
    img: '/spray-pool.webp',
    alt: 'Protected landscaped GTA backyard with a pool, ready to enjoy after treatment',
  },
] as const

export default function HowItWorksStory() {
  return (
    <section aria-labelledby="how-it-works" className="section-major px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="scrub-h relative mb-12 lg:mb-16">
          <span className="ghost-num ghost-num-light" aria-hidden="true">02</span>
          <p className="kicker-light mb-3">How It Works</p>
          <h2 id="how-it-works" className="h2-display text-white">
            How BuzzSkito <span className="accent-serif text-amber-400">Works</span>
          </h2>
        </div>

        <div className="story-root grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14" data-active="1">
          {/* Steps column — vertical timeline line threads the chips so the
              scroll room between steps reads intentional, not empty */}
          <ol className="relative space-y-10 lg:space-y-0">
            <span className="absolute left-7 top-10 bottom-10 hidden w-px bg-white/10 lg:block" aria-hidden="true" />
            <span className="story-fill absolute left-7 top-10 hidden w-px bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)] lg:block" aria-hidden="true" />
            {STEPS.map(({ n, title, icon, desc, img, alt }) => (
              <li
                key={n}
                data-step={n}
                className="story-step lg:flex lg:min-h-[42vh] lg:flex-col lg:justify-center"
              >
                <div className="flex items-start gap-5">
                  <div className="story-chip relative z-10 shrink-0" aria-hidden="true">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 text-amber-400 transition-all duration-500">
                      <Icon name={icon} className="h-7 w-7" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-extrabold text-white">{n}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight mb-2">{title}</h3>
                    <p className="text-brand-300 text-sm leading-relaxed max-w-md">{desc}</p>
                  </div>
                </div>
                {/* Inline photo — mobile/tablet only */}
                <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-white/10 lg:hidden">
                  <div className="relative aspect-[16/9]">
                    <Image src={img} alt={alt} fill sizes="(max-width: 1024px) 100vw, 0px" className="sd-parallax object-cover" />
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Sticky crossfade panel — desktop only */}
          <div className="hidden lg:block" aria-hidden="true">
            <div className="sticky top-[max(6rem,calc(50vh-14.5rem))]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-black/40">
                {STEPS.map(({ n, img }) => (
                  <div key={n} className={`story-img story-img-${n} absolute inset-0`}>
                    <Image src={img} alt="" fill sizes="(min-width: 1024px) 45vw, 0px" className="object-cover" />
                  </div>
                ))}
                {/* grade + grain to match the hero's photographic treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
                <div className="grain" />
                {/* step readout */}
                <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
                  {STEPS.map(({ n }) => (
                    <span key={n} className={`story-dot story-dot-${n} h-1.5 rounded-full bg-white/40 transition-all duration-500`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StoryHydrator />

      {/* Crossfade painting — opacity only, reduced-motion collapses to cuts */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .story-img {
              opacity: 0;
              transform: scale(1.07);
              transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                          transform 1.3s cubic-bezier(0.22, 1, 0.36, 1);
            }
            .story-root[data-active="1"] .story-img-1,
            .story-root[data-active="2"] .story-img-2,
            .story-root[data-active="3"] .story-img-3 { opacity: 1; transform: scale(1); }
            @media (prefers-reduced-motion: no-preference) {
              .story-root[data-active="1"] .story-img-1 img,
              .story-root[data-active="2"] .story-img-2 img,
              .story-root[data-active="3"] .story-img-3 img {
                animation: story-kb 16s ease-in-out infinite alternate;
              }
              @keyframes story-kb {
                from { transform: scale(1); }
                to   { transform: scale(1.07); }
              }
            }
            /* Desktop: non-active steps recede so the live one carries focus */
            @media (min-width: 1024px) {
              .story-step { transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1); }
              .story-root[data-active="1"] .story-step:not([data-step="1"]),
              .story-root[data-active="2"] .story-step:not([data-step="2"]),
              .story-root[data-active="3"] .story-step:not([data-step="3"]) { opacity: 0.45; }
            }
            .story-fill { height: 12%; transition: height 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
            .story-root[data-active="2"] .story-fill { height: 52%; }
            .story-root[data-active="3"] .story-fill { height: 92%; }
            .story-dot { width: 14px; }
            .story-root[data-active="1"] .story-dot-1,
            .story-root[data-active="2"] .story-dot-2,
            .story-root[data-active="3"] .story-dot-3 { width: 30px; background: #fbbf24; }
            .story-root[data-active="1"] [data-step="1"] .story-chip > div,
            .story-root[data-active="2"] [data-step="2"] .story-chip > div,
            .story-root[data-active="3"] [data-step="3"] .story-chip > div {
              background: rgba(251, 191, 36, 0.16);
              box-shadow: 0 0 0 1px rgba(251, 191, 36, 0.45), 0 0 28px rgba(251, 191, 36, 0.18);
            }
            @media (prefers-reduced-motion: reduce) {
              .story-img, .story-dot { transition: none; }
            }
          `,
        }}
      />
    </section>
  )
}
