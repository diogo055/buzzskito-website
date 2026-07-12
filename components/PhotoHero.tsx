import Image from 'next/image';
import Link from 'next/link';

/**
 * Cinematic full-bleed photographic hero.
 *
 * A real BuzzSkito backyard photo runs edge-to-edge; a deep-navy left scrim
 * keeps the headline crisp while the landscaped scene stays visible. The <h1>,
 * CTAs and trust line render server-side (LCP + full pitch, no JS required).
 * Motion is compositor-only (transform/opacity) and fully gated behind
 * prefers-reduced-motion — slow Ken Burns zoom on the photo, a single amber
 * "barrier" arc that draws in once, a pulsing status dot, and a copy fade-up.
 */
export default function PhotoHero() {
  return (
    <section className="hpa-root relative isolate w-full overflow-hidden bg-brand-950 min-h-[88vh] flex items-center">
      {/* Full-bleed photo */}
      <div className="hpa-photo absolute inset-0 -z-10">
        <Image
          src="/spray-pool.jpg"
          alt="BuzzSkito technician applying mosquito barrier spray in a landscaped backyard with a pool"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Left-dark gradient scrim for text legibility */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(11,22,40,0.94) 0%, rgba(11,22,40,0.88) 28%, rgba(11,22,40,0.58) 48%, rgba(11,22,40,0.14) 64%, rgba(11,22,40,0) 80%)',
        }}
        aria-hidden="true"
      />

      {/* Soft bottom vignette for depth */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(23,37,84,0) 0%, rgba(23,37,84,0.5) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Glowing amber barrier-arc, lower portion */}
      <svg
        className="hpa-arc-svg pointer-events-none absolute inset-x-0 bottom-[8%] -z-10 h-40 w-full overflow-visible"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="hpa-arc"
          d="M 40 175 C 320 30, 880 30, 1160 175"
          stroke="#fbbf24"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.65))' }}
        />
      </svg>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="hpa-fade max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2.5">
            <span className="hpa-dot relative flex h-2.5 w-2.5">
              <span className="hpa-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Same-Week Openings Across the GTA
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Mosquito &amp; Tick Control
            <br />
            <span className="text-amber-400">in Mississauga &amp; the GTA</span>
          </h1>

          {/* Subhead */}
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/90">
            Professional mosquito &amp; tick control for Mississauga &amp; GTA backyards — Health Canada–approved
            barrier spray, safe for kids &amp; pets in 30 minutes, with up to 30-day protection per visit.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/free-yard-assessment"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 text-lg font-extrabold text-white shadow-lg shadow-amber-900/30 transition-colors hover:bg-amber-400"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+12892165030"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-lg font-extrabold text-white transition-colors hover:bg-white hover:text-brand-900"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (289) 216-5030
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-white/85">
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
        </div>
      </div>

      {/* Scoped motion — compositor-only, reduced-motion safe */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hpa-photo { transform: scale(1); will-change: transform; }
            .hpa-arc {
              stroke-dasharray: 1600;
              stroke-dashoffset: 0;
              opacity: 1;
            }
            @media (prefers-reduced-motion: no-preference) {
              .hpa-photo {
                animation: hpa-kenburns 22s ease-in-out infinite alternate;
              }
              .hpa-arc {
                stroke-dashoffset: 1600;
                opacity: 0;
                animation:
                  hpa-draw 2.5s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards,
                  hpa-glow 4s ease-in-out 3s infinite;
              }
              .hpa-ping {
                animation: hpa-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
              }
              .hpa-fade {
                opacity: 0;
                transform: translateY(14px);
                animation: hpa-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards;
              }
            }
            @keyframes hpa-kenburns {
              from { transform: scale(1.08); }
              to   { transform: scale(1); }
            }
            @keyframes hpa-draw {
              from { stroke-dashoffset: 1600; opacity: 0; }
              60%  { opacity: 1; }
              to   { stroke-dashoffset: 0; opacity: 1; }
            }
            @keyframes hpa-glow {
              0%, 100% { opacity: 0.7; }
              50%      { opacity: 1; }
            }
            @keyframes hpa-ping {
              75%, 100% { transform: scale(2); opacity: 0; }
            }
            @keyframes hpa-rise {
              to { opacity: 1; transform: translateY(0); }
            }
          `,
        }}
      />
    </section>
  );
}
