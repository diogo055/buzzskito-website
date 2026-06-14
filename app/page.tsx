import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import ReviewQuotes from '@/components/ReviewQuotes'
import BlogCard from '@/components/BlogCard'
import Reveal from '@/components/Reveal'
import StatCounter from '@/components/StatCounter'
import PhotoHero from '@/components/PhotoHero'
import { buildMetadata, localBusinessSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, CITIES, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'BuzzSkito · GTA Mosquito & Tick Specialist · From $99 · 150+ Five-Star',
  description:
    "GTA mosquito + tick specialist with a perfect 5.0★ rating (150+ reviews, zero negative). From $99/treatment, no contracts, Bite-Free Guarantee. Same-week service across Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton + 13 more cities. Call (289) 216-5030.",
  canonical: '/',
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

export default function HomePage() {
  return (
    <>
      {/* Schemas — organizationSchema + websiteSchema are emitted globally in layout.tsx.
          aggregateRating is intentionally only emitted here (homepage) and on /reviews
          to prevent Google's review-snippet parser from reporting "multiple aggregate ratings". */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ includeAggregateRating: true })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HOME_FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/')) }} />

      {/* ── Cinematic photographic hero ─────────────────────────────────────
          Full-bleed real backyard photo (PhotoHero.tsx). The <h1>, CTA, and
          trust line render server-side — that frame is the LCP and the full
          pitch. SEO content below is untouched. */}
      <PhotoHero />

      {/* City ticker — decorative; cities are listed semantically in the
          Service Areas section below, so this strip is aria-hidden. */}
      <section className="relative bg-brand-950 border-y border-white/10 overflow-hidden py-3" aria-hidden="true">
        <div className="ticker-track text-brand-200 text-sm font-semibold tracking-wide">
          {[0, 1].map((dup) => (
            <span key={dup} className="flex shrink-0 items-center">
              {CITIES.map((city) => (
                <span key={`${dup}-${city.name}`} className="flex items-center">
                  <span className="px-5">{city.name}</span>
                  <span className="text-amber-400/70">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ── Trust bar ───────────────────────────────────────────────────── */}
      <section aria-label="Trust statistics" className="bg-brand-800 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <Reveal>
            <div className="text-3xl font-extrabold text-brand-300"><StatCounter value={150} suffix="+" /></div>
            <div className="text-xs text-brand-400 mt-1 font-medium">Five-Star Reviews</div>
          </Reveal>
          <Reveal className="rd-1">
            <div className="text-3xl font-extrabold text-brand-300"><StatCounter value={30} suffix=" Days" /></div>
            <div className="text-xs text-brand-400 mt-1 font-medium">Protection per Visit</div>
          </Reveal>
          <Reveal className="rd-2">
            <div className="text-3xl font-extrabold text-brand-300"><StatCounter value={30} suffix=" Min" /></div>
            <div className="text-xs text-brand-400 mt-1 font-medium">Safe for Kids &amp; Pets</div>
          </Reveal>
          <Reveal className="rd-3">
            <div className="text-3xl font-extrabold text-brand-300">Bite-Free</div>
            <div className="text-xs text-brand-400 mt-1 font-medium">Guarantee</div>
          </Reveal>
        </div>
      </section>

      {/* QUICK ANSWER — for AI extraction + Google AI Overviews */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">What is BuzzSkito?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>BuzzSkito is a Mississauga-based mosquito and tick control specialist serving 19 cities and 60+ neighbourhoods across the Greater Toronto Area.</strong> Single barrier spray treatments start at <strong>$99</strong>, with seasonal programs available on quote. Treatments use Health Canada-approved formulas, are safe for kids and pets in 30 minutes, and provide up to 30 days of residual protection per visit. With <strong>150+ five-star Google reviews</strong> (zero negative), no contracts, and the <strong>BuzzSkito Bite-Free Guarantee</strong> — free re-treatment if pests return inside the protection window — BuzzSkito serves Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Markham, Richmond Hill, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill. Call (289) 216-5030.
          </p>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────── */}
      <section aria-labelledby="services-heading" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-900 text-center mb-3">
            Mosquito &amp; Tick Control Services
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Professional barrier spray treatments for residential properties across the Greater Toronto Area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mosquito */}
            <Reveal as="article" className="hover-lift bg-brand-50 rounded-3xl p-8 border border-brand-100">
              <div className="text-5xl mb-4" aria-hidden="true">🦟</div>
              <h3 className="text-2xl font-extrabold text-brand-900 mb-3">Mosquito Control</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Barrier spray applied to vegetation, shrubs, and shaded areas. Kills mosquitoes on contact. Lasts <strong>up to 30 days</strong> per application. We recommend 5 treatments from May through September.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center gap-2"><span className="text-brand-600 font-bold">✓</span> Immediate kill-on-contact</li>
                <li className="flex items-center gap-2"><span className="text-brand-600 font-bold">✓</span> 30-day residual protection</li>
                <li className="flex items-center gap-2"><span className="text-brand-600 font-bold">✓</span> Health Canada–approved formula</li>
                <li className="flex items-center gap-2"><span className="text-brand-600 font-bold">✓</span> Free re-spray if mosquitoes return</li>
              </ul>
              <Link href="/mosquito-control" className="press-scale inline-block bg-brand-700 hover:bg-brand-600 text-white font-bold px-6 py-3 rounded-full transition-colors">
                Learn About Mosquito Control
              </Link>
            </Reveal>

            {/* Tick */}
            <Reveal as="article" className="rd-2 hover-lift bg-amber-50 rounded-3xl p-8 border border-amber-100">
              <div className="text-5xl mb-4" aria-hidden="true">🕷️</div>
              <h3 className="text-2xl font-extrabold text-brand-900 mb-3">Tick Control</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Targeted tick treatment for lawn edges, garden borders, wooded property lines, and shaded areas. Kills ticks at <strong>all life stages</strong>. Up to <strong>30 days protection</strong> per treatment.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center gap-2"><span className="text-amber-600 font-bold">✓</span> Kills nymphs, adults &amp; larvae</li>
                <li className="flex items-center gap-2"><span className="text-amber-600 font-bold">✓</span> Up to 30-day protection</li>
                <li className="flex items-center gap-2"><span className="text-amber-600 font-bold">✓</span> Lyme disease prevention</li>
                <li className="flex items-center gap-2"><span className="text-amber-600 font-bold">✓</span> 5 seasonal treatments recommended</li>
              </ul>
              <Link href="/tick-control" className="press-scale inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-full transition-colors">
                Learn About Tick Control
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────────────── */}
      <section aria-labelledby="how-it-works" className="py-16 px-4 bg-brand-950 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 id="how-it-works" className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
            How BuzzSkito Works
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                n: '1', title: 'Book a Free Quote',
                desc: 'Call (289) 216-5030 or fill out our online form. We\'ll provide a no-obligation quote for your property size and treatment needs.',
              },
              {
                n: '2', title: 'We Spray Your Yard',
                desc: 'A licensed technician applies a thorough barrier spray to your lawn, shrubs, garden edges, and tree lines. You\'ll receive an SMS alert before we arrive.',
              },
              {
                n: '3', title: 'Enjoy the Outdoors',
                desc: 'You\'re back outside in 30 minutes. Protection lasts up to 30 days per treatment for both mosquitoes and ticks. We send a full service log after every visit.',
              },
            ].map(({ n, title, desc }, i) => (
              <Reveal as="li" key={n} className={`rd-${i + 1} text-center flex flex-col items-center`}>
                <div className="w-16 h-16 rounded-full bg-brand-700 ring-4 ring-brand-700/30 flex items-center justify-center text-3xl font-extrabold text-white mb-5 shadow-lg" aria-hidden="true">
                  {n}
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Service areas ───────────────────────────────────────────────── */}
      <section aria-labelledby="service-areas" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 id="service-areas" className="text-3xl sm:text-4xl font-extrabold text-brand-900 text-center mb-3">
            GTA Service Areas
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            Serving residential homeowners across the Greater Toronto Area.{' '}
            <Link href="/service-areas" className="text-brand-700 underline hover:text-brand-500">View all service areas →</Link>
          </p>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CITIES.map((city) => (
                <div key={city.name} className="hover-lift bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <h3 className="font-extrabold text-brand-900 text-lg mb-1">{city.name}</h3>
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
                      className="press-scale text-xs font-bold bg-amber-600 text-white px-3 py-1.5 rounded-full hover:bg-amber-500 transition-colors"
                    >
                      Tick Control
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why BuzzSkito ───────────────────────────────────────────────── */}
      <section aria-labelledby="why-us" className="py-16 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <h2 id="why-us" className="text-3xl sm:text-4xl font-extrabold text-brand-900 text-center mb-4">
            Why GTA Homeowners Choose BuzzSkito
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-sm">
            A team of licensed professionals dedicated to protecting your family all season long.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/team.webp"
                  alt="BuzzSkito mosquito and tick control team servicing GTA backyards in Mississauga, Toronto, Brampton, Oakville and Vaughan"
                  width={600}
                  height={400}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">Our licensed GTA team, ready for the 2026 season</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🏅', title: 'Health Canada Approved',      desc: 'Our water-based mosquito and tick formulas are fully approved for residential use in Ontario.' },
                { icon: '🔄', title: '100% Satisfaction Guarantee', desc: 'If pests return within the protection window, we re-treat your yard at no additional cost.' },
                { icon: '📱', title: 'SMS Before & After Service',   desc: 'We text before we arrive and confirm treatment completion with a full service log.' },
                { icon: '📝', title: 'No Contracts, Ever',           desc: 'Book individual treatments or a full-season package. Cancel anytime, no penalties.' },
                { icon: '🌧️', title: 'Rain-Resistant Formula',       desc: 'Treatment bonds to surfaces as it dries. Rain within 1 hour? We\'ll reapply free.' },
                { icon: '🎁', title: 'Referral Rewards',             desc: 'Refer a friend and you both receive 20% off your first season package.' },
              ].map(({ icon, title, desc }, i) => (
                <Reveal key={title} className={`rd-${(i % 3) + 1} hover-lift bg-white rounded-2xl p-5 shadow-sm border border-brand-100`}>
                  <div className="text-2xl mb-2" aria-hidden="true">{icon}</div>
                  <h3 className="font-bold text-brand-900 mb-1 text-sm">{title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-extrabold text-brand-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">
            More questions? See our{' '}
            <Link href="/frequently-asked-question" className="text-brand-700 underline hover:text-brand-500">
              full FAQ page
            </Link>
            {' '}or call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a>.
          </p>
          <div className="space-y-4">
            {HOME_FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
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
          <h2 id="blog-preview" className="text-3xl font-extrabold text-brand-900 text-center mb-3">
            Mosquito &amp; Tick Control Guides
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto text-sm">
            Expert advice for Ontario homeowners on protecting their families from mosquitoes and ticks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <BlogCard {...MOSQUITO_BLOGS.pillar} category="mosquito" isPillar />
            <BlogCard {...TICK_BLOGS.pillar} category="tick" isPillar />
          </div>
          <div className="text-center">
            <Link href="/blog" className="inline-block bg-brand-700 hover:bg-brand-600 text-white font-bold px-6 py-3 rounded-full transition-colors">
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────────── */}
      <ReviewQuotes />

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
