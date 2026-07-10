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
import { Icon, IconChip } from '@/components/Icon'
import { buildMetadata, localBusinessSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, CITIES, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'BuzzSkito · GTA Mosquito & Tick Specialist · From $99 · 150+ Five-Star',
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
      <PhotoHero />

      {/* ── Floating stat card — breaks the hero's bottom edge ───────────── */}
      <section aria-label="Trust statistics" className="relative z-10 px-4">
        <div className="max-w-5xl mx-auto -mt-16 sm:-mt-14 bg-white rounded-2xl shadow-2xl shadow-ink-950/20 ring-1 ring-gray-100 px-6 sm:px-8 py-7 grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:divide-x sm:divide-gray-100 text-center">
          <div>
            <div className="font-display text-4xl font-extrabold text-brand-950 tracking-tight"><StatCounter value={150} suffix="+" /></div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1.5">Five-Star Reviews</div>
          </div>
          <div>
            <div className="font-display text-4xl font-extrabold text-brand-950 tracking-tight"><StatCounter value={30} suffix="d" /></div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1.5">Protection per Visit</div>
          </div>
          <div>
            <div className="font-display text-4xl font-extrabold text-brand-950 tracking-tight"><StatCounter value={30} suffix=" min" /></div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1.5">Safe for Kids &amp; Pets</div>
          </div>
          <div>
            <div className="font-display text-4xl font-extrabold text-amber-600 tracking-tight">Bite-Free</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1.5">Guarantee</div>
          </div>
        </div>
      </section>

      {/* City ticker — decorative; cities are listed semantically in the
          Service Areas section below, so this strip is aria-hidden. */}
      <section className="relative bg-white overflow-hidden py-5 mt-8" aria-hidden="true">
        <div className="ticker-track text-gray-400 text-sm font-semibold tracking-wide">
          {[0, 1].map((dup) => (
            <span key={dup} className="flex shrink-0 items-center">
              {CITIES.map((city) => (
                <span key={`${dup}-${city.name}`} className="flex items-center">
                  <span className="px-5">{city.name}</span>
                  <span className="text-amber-400/80">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* QUICK ANSWER — for AI extraction + Google AI Overviews */}
      <QuickAnswer question="What is BuzzSkito?">
        <p>
          <strong>BuzzSkito is a Mississauga-based mosquito and tick control specialist serving 19 cities and 60+ neighbourhoods across the Greater Toronto Area.</strong> Single barrier spray treatments start at <strong>$99</strong>, with seasonal programs available on quote. Treatments use Health Canada-approved formulas, are safe for kids and pets in 30 minutes, and provide up to 30 days of residual protection per visit. With <strong>150+ five-star Google reviews</strong> (zero negative), no contracts, and the <strong>BuzzSkito Bite-Free Guarantee</strong> — free re-treatment if pests return inside the protection window — BuzzSkito serves Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Markham, Richmond Hill, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill. Call (289) 216-5030.
        </p>
      </QuickAnswer>

      {/* ── Services — photographic cards ─────────────────────────────────── */}
      <section aria-labelledby="services-heading" className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="kicker mb-3">Our Services</p>
            <h2 id="services-heading" className="h2-display text-brand-950 mb-3">
              Mosquito &amp; Tick Control Services
            </h2>
            <p className="text-gray-500">
              Professional barrier spray treatments for residential properties across the Greater Toronto Area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mosquito */}
            <Reveal as="article" className="group photo-zoom hover-lift rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/spray-backyard.webp"
                  alt="BuzzSkito technician applying mosquito barrier spray to backyard vegetation in the GTA"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden="true" />
                <h3 className="absolute bottom-4 left-6 font-display text-2xl font-extrabold tracking-tight text-white">Mosquito Control</h3>
              </div>
              <div className="p-7">
                <p className="text-gray-600 mb-5 leading-relaxed">
                  Barrier spray applied to vegetation, shrubs, and shaded areas. Kills mosquitoes on contact. Lasts <strong>up to 30 days</strong> per application. We recommend 5 treatments from May through September.
                </p>
                <ul className="space-y-2.5 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-2.5"><Icon name="zap" className="w-4 h-4 text-brand-600 shrink-0" /> Immediate kill-on-contact</li>
                  <li className="flex items-center gap-2.5"><Icon name="clock" className="w-4 h-4 text-brand-600 shrink-0" /> 30-day residual protection</li>
                  <li className="flex items-center gap-2.5"><Icon name="shield-check" className="w-4 h-4 text-brand-600 shrink-0" /> Health Canada–approved formula</li>
                  <li className="flex items-center gap-2.5"><Icon name="refresh" className="w-4 h-4 text-brand-600 shrink-0" /> Free re-spray if mosquitoes return</li>
                </ul>
                <Link href="/mosquito-control" className="press-scale arrow-nudge inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-600 text-white font-bold px-6 py-3 rounded-full transition-colors">
                  Learn About Mosquito Control
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </Reveal>

            {/* Tick */}
            <Reveal as="article" className="rd-2 group photo-zoom hover-lift rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/spray-front.webp"
                  alt="BuzzSkito technician treating lawn edges and garden borders for ticks at a GTA home"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden="true" />
                <h3 className="absolute bottom-4 left-6 font-display text-2xl font-extrabold tracking-tight text-white">Tick Control</h3>
              </div>
              <div className="p-7">
                <p className="text-gray-600 mb-5 leading-relaxed">
                  Targeted tick treatment for lawn edges, garden borders, wooded property lines, and shaded areas. Kills ticks at <strong>all life stages</strong>. Up to <strong>30 days protection</strong> per treatment.
                </p>
                <ul className="space-y-2.5 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-2.5"><Icon name="tick" className="w-4 h-4 text-amber-600 shrink-0" /> Kills nymphs, adults &amp; larvae</li>
                  <li className="flex items-center gap-2.5"><Icon name="clock" className="w-4 h-4 text-amber-600 shrink-0" /> Up to 30-day protection</li>
                  <li className="flex items-center gap-2.5"><Icon name="shield-check" className="w-4 h-4 text-amber-600 shrink-0" /> Lyme disease prevention</li>
                  <li className="flex items-center gap-2.5"><Icon name="refresh" className="w-4 h-4 text-amber-600 shrink-0" /> 5 seasonal treatments recommended</li>
                </ul>
                <Link href="/tick-control" className="press-scale arrow-nudge inline-flex items-center gap-2 bg-gradient-to-b from-amber-500 to-amber-600 text-white font-bold px-6 py-3 rounded-full shadow-md transition-transform hover:-translate-y-0.5">
                  Learn About Tick Control
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reviews — flagship proof, promoted right after services ───────── */}
      <ReviewQuotes />

      {/* ── How it works ────────────────────────────────────────────────── */}
      <section aria-labelledby="how-it-works" className="ink-band py-16 sm:py-20 px-4 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="kicker-light mb-3">How It Works</p>
            <h2 id="how-it-works" className="h2-display text-white">
              How BuzzSkito Works
            </h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                n: '1', title: 'Book a Free Quote', icon: 'message',
                desc: 'Call (289) 216-5030 or fill out our online form. We\'ll provide a no-obligation quote for your property size and treatment needs.',
              },
              {
                n: '2', title: 'We Spray Your Yard', icon: 'spray',
                desc: 'A licensed technician applies a thorough barrier spray to your lawn, shrubs, garden edges, and tree lines. You\'ll receive an SMS alert before we arrive.',
              },
              {
                n: '3', title: 'Enjoy the Outdoors', icon: 'shield-check',
                desc: 'You\'re back outside in 30 minutes. Protection lasts up to 30 days per treatment for both mosquitoes and ticks. We send a full service log after every visit.',
              },
            ].map(({ n, title, icon, desc }, i) => (
              <Reveal as="li" key={n} className={`rd-${i + 1} text-center flex flex-col items-center`}>
                <div className="relative mb-6" aria-hidden="true">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-amber-400">
                    <Icon name={icon} className="w-8 h-8" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-extrabold text-white">{n}</span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight mb-3">{title}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Owner-operated — Meet Alex (E-E-A-T no franchise can copy) ───── */}
      <section aria-labelledby="meet-team" className="py-16 sm:py-20 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-white max-w-sm">
                <Image
                  src="/team.webp"
                  alt="The BuzzSkito licensed mosquito and tick control team serving Mississauga and the GTA"
                  width={600}
                  height={400}
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink-950 text-white text-xs font-bold px-4 py-2 shadow-lg">
                Our licensed GTA team
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="kicker mb-3">Owner-Operated · Not a Franchise</p>
            <h2 id="meet-team" className="h2-display text-brand-950 mb-5">
              A local GTA team,<br className="hidden sm:block" /> not a national call centre
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              BuzzSkito is a Mississauga-based, owner-operated company — not a national franchise. The same small, licensed local team handles your quote, your treatments, and your questions all season long. No 1-800 queue, no rotating subcontractors — just people who get to know your yard.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Licensed by the Ontario Ministry of the Environment (Pesticide Operator Licence #{BUSINESS.licenseNumber}), using only Health Canada–approved formulas — and every treatment backed by the Bite-Free Guarantee.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={BUSINESS.phoneHref} className="btn-primary-sm press-scale">
                <Icon name="phone" className="w-4 h-4" />
                Call us: {BUSINESS.phone}
              </a>
              <Link href="/buzzskito-history" className="arrow-nudge inline-flex items-center gap-2 text-brand-700 font-bold hover:text-brand-900 text-sm">
                Read the BuzzSkito story
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why BuzzSkito ───────────────────────────────────────────────── */}
      <section aria-labelledby="why-us" className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="kicker mb-3">Why BuzzSkito</p>
            <h2 id="why-us" className="h2-display text-brand-950 mb-3">
              Why GTA Homeowners Choose BuzzSkito
            </h2>
            <p className="text-gray-500 text-sm">
              A team of licensed professionals dedicated to protecting your family all season long.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/spray-pool.webp"
                  alt="BuzzSkito technician applying mosquito and tick treatment around a backyard pool in the GTA"
                  width={600}
                  height={400}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">On-site in a GTA backyard — every corner treated</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'award',       tone: 'brand', title: 'Health Canada Approved',      desc: 'Our water-based mosquito and tick formulas are fully approved for residential use in Ontario.' },
                { icon: 'refresh',     tone: 'amber', title: '100% Satisfaction Guarantee', desc: 'If pests return within the protection window, we re-treat your yard at no additional cost.' },
                { icon: 'message',     tone: 'brand', title: 'SMS Before & After Service',  desc: 'We text before we arrive and confirm treatment completion with a full service log.' },
                { icon: 'file-check',  tone: 'amber', title: 'No Contracts, Ever',          desc: 'Book individual treatments or a full-season package. Cancel anytime, no penalties.' },
                { icon: 'cloud-rain',  tone: 'brand', title: 'Rain-Resistant Formula',      desc: 'Treatment bonds to surfaces as it dries. Rain within 1 hour? We\'ll reapply free.' },
                { icon: 'gift',        tone: 'amber', title: 'Referral Rewards',            desc: 'Refer a friend and you both receive 20% off your first season package.' },
              ].map(({ icon, tone, title, desc }, i) => (
                <Reveal key={title} className={`rd-${(i % 3) + 1} bg-white rounded-2xl p-5 shadow-sm border border-gray-200`}>
                  <IconChip name={icon} tone={tone as 'brand' | 'amber'} className="mb-3" />
                  <h3 className="font-bold text-brand-900 mb-1 text-sm">{title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service areas — 6 featured cards + chip cloud ─────────────────── */}
      <section aria-labelledby="service-areas" className="py-16 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="kicker mb-3">Service Areas</p>
            <h2 id="service-areas" className="h2-display text-brand-950 mb-3">
              GTA Service Areas
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Serving residential homeowners across the Greater Toronto Area.{' '}
              <Link href="/service-areas" className="text-brand-700 underline hover:text-brand-500">View all service areas →</Link>
            </p>
          </div>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {featuredCities.map((city) => (
                <div key={city.name} className="hover-lift bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="map-pin" className="w-4 h-4 text-amber-500 shrink-0" />
                    <h3 className="font-display font-extrabold text-brand-950 text-lg tracking-tight">{city.name}</h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{city.mosquitoBlurb}</p>
                  <div className="flex gap-3">
                    <Link
                      href={city.mosquitoSlug}
                      className="press-scale text-xs font-bold bg-brand-700 text-white px-3 py-1.5 rounded-full hover:bg-brand-600 transition-colors"
                    >
                      Mosquito Control
                    </Link>
                    <Link
                      href={city.tickSlug}
                      className="press-scale text-xs font-bold bg-gradient-to-b from-amber-500 to-amber-600 text-white px-3 py-1.5 rounded-full transition-transform hover:-translate-y-0.5"
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
                  className="press-scale inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:border-brand-400 hover:text-brand-600 transition-colors shadow-sm"
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
      <section aria-labelledby="faq-heading" className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="kicker mb-3">Questions &amp; Answers</p>
            <h2 id="faq-heading" className="h2-display text-brand-950">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-center text-gray-500 mb-8 text-sm">
            More questions? See our{' '}
            <Link href="/frequently-asked-question" className="text-brand-700 underline hover:text-brand-500">
              full FAQ page
            </Link>
            {' '}or call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a>.
          </p>
          <div className="space-y-4">
            {HOME_FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ────────────────────────────────────────────────── */}
      <section aria-labelledby="blog-preview" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="kicker mb-3">Expert Guides</p>
            <h2 id="blog-preview" className="h2-display text-brand-950 mb-3">
              Mosquito &amp; Tick Control Guides
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Expert advice for Ontario homeowners on protecting their families from mosquitoes and ticks.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <BlogCard {...MOSQUITO_BLOGS.pillar} category="mosquito" isPillar />
            <BlogCard {...TICK_BLOGS.pillar} category="tick" isPillar />
          </div>
          <div className="text-center">
            <Link href="/blog" className="press-scale inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-600 text-white font-bold px-6 py-3 rounded-full transition-colors">
              View All Articles
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bite-Free Guarantee seal band ─────────────────────────────────── */}
      <section aria-labelledby="guarantee-heading" className="ink-band py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          {/* Rosette seal */}
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-amber-400/70 bg-amber-400/10 shadow-[0_0_40px_rgba(251,191,36,0.25)]" aria-hidden="true">
            <Icon name="shield-check" className="h-11 w-11 text-amber-400" strokeWidth={1.5} />
          </div>
          <p className="kicker-light mb-3">The BuzzSkito Bite-Free Guarantee</p>
          <h2 id="guarantee-heading" className="h2-display text-white mb-4">
            If they come back, so do we — free
          </h2>
          <p className="text-brand-300 leading-relaxed max-w-xl mx-auto mb-8">
            Pests return inside your 30-day protection window? We re-treat your yard at no cost. No forms, no arguing, no fine print.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['No contracts', 'Free re-spray guarantee', 'Rain guarantee (1 hr)'].map((chip) => (
              <span key={chip} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
                <Icon name="check" className="w-4 h-4 text-emerald-400" />
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
