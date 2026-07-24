import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import ReviewQuotes from '@/components/ReviewQuotes'
import BlogCard from '@/components/BlogCard'
import Reveal from '@/components/Reveal'
import StatCounter from '@/components/StatCounter'
import PhotoHero from '@/components/PhotoHero'
import QuickAnswer from '@/components/QuickAnswer'
import HowItWorksStory from '@/components/HowItWorksStory'
import ServicesStory from '@/components/ServicesStory'
import DuskScene from '@/components/DuskScene'
import { Icon, IconChip } from '@/components/Icon'
import { buildMetadata, localBusinessSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, CITIES, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control in Mississauga & the GTA | From $99 | BuzzSkito',
  description:
    "GTA mosquito + tick specialist with a perfect 5.0★ rating (150+ reviews, zero negative). From $99/treatment, no contracts, Bite-Free Guarantee. Same-week service across Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton + 13 more cities. Call (289) 216-5030.",
  canonical: '/',
  modifiedTime: '2026-07-01',
})

const HOME_FAQS = [
  {
    question: 'How does mosquito barrier spray work?',
    answer: 'BuzzSkito applies a professional-grade residual insecticide to vegetation, shrubs, and under-leaf surfaces where mosquitoes rest. The formula kills mosquitoes on contact and remains active for up to 30 days, continuously protecting your yard.',
  },
  {
    question: 'Is the spray safe for children and pets?',
    answer: 'Yes. Once the spray dries — typically within 30 minutes of application — your yard is completely safe for children, pets, and plants. We use Health Canada–approved, water-based formulations.',
  },
  {
    question: 'How long does a mosquito treatment last?',
    answer: 'Each mosquito barrier treatment lasts up to 30 days. Tick treatments provide up to 30 days of protection. We recommend 5 seasonal mosquito treatments (May–September) and 5 tick treatments for complete season-long coverage.',
  },
  {
    question: 'What if it rains after the treatment?',
    answer: 'Our products bond to surfaces as they dry, creating rain-resistant protection. If it rains within one hour of treatment, we\'ll reapply at no extra cost.',
  },
  {
    question: 'Do you need to be home during the service?',
    answer: 'No. As long as our technician has access to your outdoor areas, we can complete the treatment without you home. We send an SMS alert before arrival and a confirmation email after service with a full treatment log.',
  },
  {
    question: 'What areas does BuzzSkito serve?',
    answer: 'BuzzSkito serves Mississauga, Toronto, Brampton, Oakville, Burlington, and Hamilton, plus surrounding GTA communities. Call (289) 216-5030 to confirm service availability at your address.',
  },
]

// Featured cities get full cards; the rest render as a compact chip cloud —
// cuts the 19-card wall to a third of its height without dropping a link.
const FEATURED_CITY_NAMES = ['Mississauga', 'Toronto', 'Brampton', 'Oakville', 'Vaughan', 'Burlington']

export default function HomePage() {
  const featuredCities = CITIES.filter((c) => FEATURED_CITY_NAMES.includes(c.name))
  const otherCities = CITIES.filter((c) => !FEATURED_CITY_NAMES.includes(c.name))

  return (
    <>
      {/* Schemas — organizationSchema + websiteSchema + personSchema are emitted
          globally in layout.tsx. aggregateRating is intentionally only emitted
          here (homepage) and on /reviews to prevent Google's review-snippet
          parser from reporting "multiple aggregate ratings". */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ includeAggregateRating: true })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HOME_FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/', '2026-07-01')) }} />

      {/* ── Cinematic photographic hero ─────────────────────────────────────
          Full-bleed real backyard photo (PhotoHero.tsx). The <h1>, CTA, and
          trust line render server-side — that frame is the LCP and the full
          pitch. SEO content below is untouched. */}
      <div className="relative isolate bg-[#01030a]">
        <DuskScene />
      <PhotoHero />

      {/* ── Floating stat card — breaks the hero's bottom edge ───────────── */}
      <section aria-label="Trust statistics" className="relative z-10 px-4">
        <Reveal className="reveal-far max-w-5xl mx-auto -mt-16 sm:-mt-14 rounded-2xl border border-white/10 bg-[#0a1322]/85 backdrop-blur-md [box-shadow:inset_0_1px_0_rgba(255,255,255,0.07)] px-6 sm:px-8 py-7 grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:divide-x sm:divide-white/10 text-center">
          <Reveal className="rd-1">
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight"><StatCounter value={150} suffix="+" /></div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8fa0bd] mt-1.5">Five-Star Reviews</div>
          </Reveal>
          <Reveal className="rd-2">
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight"><StatCounter value={30} suffix="d" /></div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8fa0bd] mt-1.5">Protection per Visit</div>
          </Reveal>
          <Reveal className="rd-3">
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight"><StatCounter value={30} suffix=" min" /></div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8fa0bd] mt-1.5">Safe for Kids &amp; Pets</div>
          </Reveal>
          <Reveal className="rd-4">
            <div className="accent-serif font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Bite-Free
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8fa0bd] mt-1.5">Guarantee</div>
          </Reveal>
        </Reveal>
      </section>

      {/* Brand marquee — oversized outlined editorial band. Decorative and
          aria-hidden; every claim in it appears semantically elsewhere on
          the page (reviews, guarantee, service areas). */}
      <section className="relative overflow-hidden pt-10 sm:pt-14 pb-0 edge-fade-x" aria-hidden="true">
        <div className="ticker-track items-baseline whitespace-nowrap font-display font-extrabold uppercase leading-none tracking-tight text-[clamp(3rem,7vw,5.5rem)]" style={{ animationDuration: '80s' }}>
          {[0, 1].map((dup) => (
            <span key={dup} className="flex shrink-0 items-baseline">
              {[
                'Bite-Free Summer',
                '150+ Five-Star Reviews',
                'No Contracts',
                '19 GTA Cities',
                'Same-Week Service',
              ].map((phrase) => (
                <span key={`${dup}-${phrase}`} className="flex items-baseline">
                  <span className="outline-text-light px-8">{phrase}</span>
                  <span className="text-white/15 text-[0.5em]" aria-hidden="true">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* QUICK ANSWER — for AI extraction + Google AI Overviews */}
      <QuickAnswer dark question="What is BuzzSkito?">
        <p>
          <strong>BuzzSkito is a Mississauga-based mosquito and tick control specialist serving 19 cities and 60+ neighbourhoods across the Greater Toronto Area.</strong> Single barrier spray treatments start at <strong>$99</strong>, with seasonal programs available on quote. Treatments use Health Canada-approved formulas, are safe for kids and pets in 30 minutes, and provide up to 30 days of residual protection per visit. With <strong>150+ five-star Google reviews</strong> (zero negative), no contracts, and the <strong>BuzzSkito Bite-Free Guarantee</strong> — free re-treatment if pests return inside the protection window — BuzzSkito serves Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Markham, Richmond Hill, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill. Call (289) 216-5030.
        </p>
      </QuickAnswer>

      {/* ── Services — sticky photo story (mirror of How It Works) ──────── */}
      <ServicesStory />

      {/* ── Reviews — flagship proof, promoted right after services ───────── */}
      <ReviewQuotes />

      {/* ── How it works — sticky scroll story (desktop) / photo steps (mobile) ── */}
      <HowItWorksStory />

      {/* ── Owner-operated — Meet Alex (E-E-A-T no franchise can copy) ───── */}
      <section aria-labelledby="meet-team" className="section-major px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/15 max-w-sm">
                <Image
                  src="/team.webp"
                  alt="The BuzzSkito licensed mosquito and tick control team serving Mississauga and the GTA"
                  width={600}
                  height={400}
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="sd-parallax w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full glass-chip text-white text-xs font-bold px-4 py-2">
                Our licensed GTA team
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 relative">
            <p className="kicker-light mb-3">Owner-Operated · Not a Franchise</p>
            <h2 id="meet-team" className="h2-display text-white mb-5">
              A local GTA team,<br className="hidden sm:block" /> <span className="accent-serif text-amber-400">not</span> a national call centre
            </h2>
            <p className="text-[#aab6cf] leading-relaxed mb-4">
              BuzzSkito is a Mississauga-based, owner-operated company — not a national franchise. The same small, licensed local team handles your quote, your treatments, and your questions all season long. No 1-800 queue, no rotating subcontractors — just people who get to know your yard.
            </p>
            <p className="text-[#aab6cf] leading-relaxed mb-6">
              Licensed by the Ontario Ministry of the Environment (Pesticide Operator Licence #{BUSINESS.licenseNumber}), using only Health Canada–approved formulas — and every treatment backed by the Bite-Free Guarantee.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={BUSINESS.phoneHref} className="btn-primary-sm press-scale">
                <Icon name="phone" className="w-4 h-4" />
                Call us: {BUSINESS.phone}
              </a>
              <Link href="/buzzskito-history" className="arrow-nudge inline-flex items-center gap-2 text-white/80 font-bold hover:text-white text-sm">
                Read the BuzzSkito story
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why BuzzSkito ───────────────────────────────────────────────── */}
      <section aria-labelledby="why-us" className="section-major px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scrub-h relative max-w-2xl mb-10">
            <p className="kicker-light mb-3">Why BuzzSkito</p>
            <h2 id="why-us" className="h2-display text-white mb-3">
              Why GTA Homeowners Choose BuzzSkito
            </h2>
            <p className="text-[#8fa0bd] text-sm">
              A team of licensed professionals dedicated to protecting your family all season long.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/15">
                <Image
                  src="/van-peony-spray.webp"
                  alt="BuzzSkito technician misting peony beds and foundation plantings at a GTA front entrance, branded BuzzSkito service van parked in the driveway"
                  width={600}
                  height={450}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="sd-parallax w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs text-[#7688a8] text-center mt-2">Our own van, our own licensed crew — on-site across the GTA</p>
            </div>
            {/* Bento: one dominant guarantee cell + two supporting row shapes —
                same copy, art-directed hierarchy instead of six equal cells. */}
            <div className="bento-deck lg:col-span-3 grid grid-cols-1 sm:grid-cols-6 gap-4">
              <Reveal className="rd-1 surface-2 sm:col-span-6 rounded-2xl p-6 sm:p-8 sm:flex sm:items-start sm:gap-5" >
                <IconChip name="refresh" tone="ink" className="mb-3 sm:mb-0 shrink-0" />
                <div>
                  <h3 className="font-display font-extrabold tracking-tight text-white mb-1.5 text-xl">100% Satisfaction Guarantee</h3>
                  <p className="text-[#aab6cf] text-sm leading-relaxed max-w-xl">If pests return within the protection window, we re-treat your yard at no additional cost.</p>
                </div>
              </Reveal>
              {[
                { icon: 'award',      tone: 'brand', title: 'Health Canada Approved',     desc: 'Our water-based mosquito and tick formulas are fully approved for residential use in Ontario.', span: 'sm:col-span-2' },
                { icon: 'message',    tone: 'brand', title: 'SMS Before & After Service', desc: 'We text before we arrive and confirm treatment completion with a full service log.', span: 'sm:col-span-2' },
                { icon: 'file-check', tone: 'amber', title: 'No Contracts, Ever',         desc: 'Book individual treatments or a full-season package. Cancel anytime, no penalties.', span: 'sm:col-span-2' },
                { icon: 'cloud-rain', tone: 'brand', title: 'Rain-Resistant Formula',     desc: 'Treatment bonds to surfaces as it dries. Rain within 1 hour? We\'ll reapply free.', span: 'sm:col-span-3' },
                { icon: 'gift',       tone: 'amber', title: 'Referral Rewards',           desc: 'Refer a friend and you both receive 20% off your first season package.', span: 'sm:col-span-3' },
              ].map(({ icon, tone, title, desc, span }, i) => (
                <Reveal key={title} className={`rd-${(i % 3) + 1} ${span} surface-1 rounded-2xl p-5`}>
                  <IconChip name={icon} tone="ink" className="mb-3" />
                  <h3 className="font-bold text-white mb-1 text-sm">{title}</h3>
                  <p className="text-[#aab6cf] text-xs leading-relaxed">{desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service areas — 6 featured cards + chip cloud ─────────────────── */}
      <section aria-labelledby="service-areas" className="cv-auto section-major px-4">
        <div className="max-w-7xl mx-auto">
          <div className="scrub-h relative mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker-light mb-3">Service Areas</p>
              <h2 id="service-areas" className="h2-display text-white mb-3">
                GTA Service Areas
              </h2>
              <p className="text-[#8fa0bd] max-w-xl">
                Serving residential homeowners across the Greater Toronto Area.
              </p>
            </div>
            <Link href="/service-areas" className="arrow-nudge inline-flex shrink-0 items-center gap-2 self-start font-bold text-white/80 hover:text-white sm:self-end">
              View all service areas
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {featuredCities.map((city) => (
                <div key={city.name} className="hover-lift surface-1 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="map-pin" className="w-4 h-4 text-amber-500 shrink-0" />
                    <h3 className="font-display font-extrabold text-white text-lg tracking-tight">{city.name}</h3>
                  </div>
                  <p className="text-[#8fa0bd] text-sm mb-4 leading-relaxed">{city.mosquitoBlurb}</p>
                  <div className="flex gap-3">
                    <Link
                      href={city.mosquitoSlug}
                      className="press-scale text-xs font-bold rounded-full border border-white/25 text-white px-3 py-1.5 transition-colors hover:bg-white hover:text-brand-900"
                    >
                      Mosquito Control
                    </Link>
                    <Link
                      href={city.tickSlug}
                      className="press-scale text-xs font-bold rounded-full border border-white/25 text-white px-3 py-1.5 transition-colors hover:bg-white hover:text-brand-900"
                    >
                      Tick Control
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* Chip cloud — every other city keeps its links, a third the height */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {otherCities.map((city) => (
                <Link
                  key={city.name}
                  href={city.mosquitoSlug}
                  className="press-scale inline-flex items-center gap-1.5 rounded-full surface-1 px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
                >
                  <Icon name="map-pin" className="w-3.5 h-3.5 text-amber-500" />
                  {city.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="cv-auto section-major px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28 relative">
            <p className="kicker-light mb-3">Questions &amp; Answers</p>
            <h2 id="faq-heading" className="h2-display text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-[#8fa0bd] mt-4 text-sm leading-relaxed">
              More questions? See our{' '}
              <Link href="/frequently-asked-question" className="text-amber-400/90 underline hover:text-amber-300">
                full FAQ page
              </Link>
              {' '}or call <a href={BUSINESS.phoneHref} className="text-amber-400/90 underline">{BUSINESS.phone}</a>.
            </p>
          </div>
          <div className="space-y-4">
            {HOME_FAQS.map(({ question, answer }) => (
              <details key={question} className="faq-d surface-1 rounded-xl group">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-white list-none flex justify-between items-center rounded-xl hover:bg-white/5 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-amber-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-[#aab6cf] text-sm leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ────────────────────────────────────────────────── */}
      <section aria-labelledby="blog-preview" className="cv-auto section-major px-4">
        <div className="max-w-7xl mx-auto">
          <div className="scrub-h mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker-light mb-3">Expert Guides</p>
              <h2 id="blog-preview" className="h2-display text-white mb-3">
                Mosquito &amp; Tick Control Guides
              </h2>
              <p className="text-[#8fa0bd] max-w-xl text-sm">
                Expert advice for Ontario homeowners on protecting their families from mosquitoes and ticks.
              </p>
            </div>
            <Link href="/blog" className="press-scale btn-ghost-light hidden shrink-0 self-end sm:inline-flex">
              View All Articles
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <BlogCard {...MOSQUITO_BLOGS.pillar} category="mosquito" isPillar dark />
            <BlogCard {...TICK_BLOGS.pillar} category="tick" isPillar dark />
          </div>
          <div className="text-center sm:hidden">
            <Link href="/blog" className="press-scale btn-ghost-light">
              View All Articles
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bite-Free Guarantee seal band ─────────────────────────────────── */}
      <section aria-labelledby="guarantee-heading" className="section-major relative px-4 text-white">
        <Reveal className="max-w-3xl mx-auto text-center">
          {/* Rosette seal — quiet, lifted */}
          <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full surface-2" aria-hidden="true">
            <Icon name="shield-check" className="h-11 w-11 text-white/90" strokeWidth={1.5} />
          </div>
          <p className="kicker-light mb-3">The BuzzSkito Bite-Free Guarantee</p>
          <h2 id="guarantee-heading" className="h2-display text-white mb-4">
            If they come back, <span className="accent-serif text-amber-400">so do we</span> — free
          </h2>
          <p className="text-brand-300 leading-relaxed max-w-xl mx-auto mb-8">
            Pests return inside your 30-day protection window? We re-treat your yard at no cost. No forms, no arguing, no fine print.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['No contracts', 'Free re-spray guarantee', 'Rain guarantee (1 hr)'].map((chip) => (
              <span key={chip} className="chip-rise inline-flex items-center gap-2 rounded-full surface-1 px-4 py-2 text-sm font-semibold text-white">
                <Icon name="check" className="w-4 h-4 text-emerald-400" />
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <CTASection />
      </div>
    </>
  )
}
