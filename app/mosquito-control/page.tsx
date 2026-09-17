import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogCard from '@/components/BlogCard'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, CITIES, MOSQUITO_BLOGS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control GTA · From $99 · 150+ Reviews',
  description:
    'GTA mosquito control · 150+ five-star reviews. Licensed barrier spray from $99, no contracts, rain-back guarantee. 19+ cities served. (289) 216-5030.',
  canonical: '/mosquito-control',
})

const FAQS = [
  { question: 'How does professional mosquito barrier spray work?', answer: 'BuzzSkito applies a fine residual mist to shrubs, vegetation, and the underside of leaves where mosquitoes rest during the day. The product is applied according to its label directions and dries onto those surfaces as a residual barrier, and scheduled repeat visits keep that barrier in place through the season.' },
  { question: 'How many mosquito treatments do I need per season?', answer: 'We recommend at least 5 treatments through the season — typically May, June, July, August, and September (the Basic plan, $549). Most GTA homes choose the Standard plan, 10 sprays every 2 weeks for $994, for steadier coverage through peak mosquito activity. Prices are for a standard lot under 10,000 sq ft, plus HST.' },
  { question: 'What precautions apply for children and pets after a mosquito treatment?', answer: 'Our licensed technicians apply water-based barrier products according to their label directions. Keep children and pets off treated areas until the spray has dried, as the product label directs.' },
  { question: 'What is the best time of year to start mosquito control in Ontario?', answer: 'Start in early May, as mosquito populations begin building once temperatures consistently exceed 10°C. Starting early puts the barrier in place before peak season in June and July.' },
  { question: 'Do you service my city?', answer: 'BuzzSkito serves 19 cities across the GTA including Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill. See our full service areas page for details.' },
  { question: 'Is there mosquito control near me?', answer: 'If you live anywhere in the Greater Toronto Area, yes — BuzzSkito is a locally owned Mississauga-based mosquito and tick control specialist covering 19 GTA cities and 30+ neighbourhoods. Searching "mosquito control near me" almost certainly puts you inside our service zone, so you get a nearby licensed technician (Ontario licence L-240-2436835197) rather than a national call centre, backed by 150+ five-star reviews and zero negative reviews.' },
  { question: 'How fast can you come out to spray?', answer: 'Most requests get a price the same day and most new bookings are treated within 24 to 48 hours, and during peak season (June and July) we can often fit same-week appointments. Because we are based locally in Mississauga and run a GTA-wide route, there is no long wait for a technician to travel out — call (289) 216-5030 or request a free quote and we will confirm the soonest available visit window for your area.' },
]

export default function MosquitoControlPage() {
  const primaryCities = CITIES.slice(0, 6)
  const extendedCities = CITIES.slice(6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Mosquito Control', description: 'Professional mosquito barrier spray service for residential lawns and properties across the Greater Toronto Area.', slug: '/mosquito-control' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mosquito-control', '2026-07-01')) }} />

      {/* Hero */}
      <CityHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Mosquito Control' }]}
        title={<>Professional Mosquito Control</>}
        titleAccent={<>for GTA Homes</>}
        subtitle={<>Licensed Ontario pesticide operator serving 19 cities across the Greater Toronto Area. Barrier spray treatments applied according to label directions.</>}
        image="/spray-backyard.webp"
      >
        <p className="mt-5 text-brand-300 text-sm">
          Also offering <Link href="/tick-control" className="text-brand-400 underline hover:text-white">tick control</Link> — bundle both services in one visit.
        </p>
      </CityHero>

      {/* QUICK ANSWER — AI Overview & ChatGPT bait */}
      <QuickAnswer question="What is the best mosquito control for GTA homes in 2026?">
        <p>
          <strong>For residential GTA properties, BuzzSkito recommends professional barrier spray from a licensed Ontario operator, applied according to label directions.</strong> BuzzSkito applies a residual barrier to vegetation, shrubs, fence lines, and shaded resting zones — the specific micro-habitats where mosquitoes rest during the day. Recommended schedule for GTA homes: <strong>10 bi-weekly treatments from May through September ($994 for the Standard plan)</strong>, or single treatments from $99 on a standard lot. Rain within 1 hour of a treatment is re-treated free on every plan, and Standard &amp; Exclusive plans carry the Bite-Free Guarantee. BuzzSkito serves 19 GTA cities with 150+ five-star Google reviews.
        </p>
      </QuickAnswer>

      <TypicalPrices service="mosquito" city="GTA" />

      {/* KEY FACTS — extractable for AI */}
      <section className="py-10 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Key Facts at a Glance</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service', 'Mosquito barrier spray (residential & commercial)'],
                  ['Coverage area', '19 GTA cities + 30+ neighbourhoods'],
                  ['Single treatment price', 'From $99 (standard lot under 10,000 sq ft, plus HST)'],
                  ['Standard season', '$994 · 10 sprays bi-weekly · May–Sep'],
                  ['Sprays per season', '5, 10 or 20+ (tick: 5)'],
                  ['Re-entry', 'Stay off treated areas until the spray has dried, as the label directs'],
                  ['Application', PROMISES.labelLine],
                  ['Licence', PROMISES.licence],
                  ['Tick add-on', '$497 bundled (saves $100 vs $597 standalone)'],
                  ['Guarantee', 'Rain-back on every plan; Bite-Free on Standard & Exclusive'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MOSQUITO CONTROL NEAR ME — local intent capture */}
      <section aria-labelledby="near-me" className="py-14 px-4 bg-brand-50 border-b border-brand-100">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Near You</p>
          <h2 id="near-me" className="h2-display text-brand-900 mb-4 text-center">Looking for Mosquito Control Near You?</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            BuzzSkito is a locally owned Mississauga-based mosquito &amp; tick control specialist serving 19 cities across the Greater Toronto Area. If you searched &ldquo;mosquito control near me,&rdquo; you&rsquo;re almost certainly inside our service zone &mdash; and you&rsquo;ll get a nearby licensed technician rather than a national call centre.
          </p>

          {/* Proof · pricing · speed */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-5 border border-brand-200 text-center">
              <div className="text-brand-700 font-extrabold text-lg mb-1">150+ five-star reviews</div>
              <p className="text-gray-600 text-sm">5.0&#9733; average with zero negative reviews across the GTA.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-brand-200 text-center">
              <div className="text-brand-700 font-extrabold text-lg mb-1">From $99 per treatment</div>
              <p className="text-gray-600 text-sm">Standard season $994 for 10 sprays (most popular). Prices +HST, scaling with lot size.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-brand-200 text-center">
              <div className="text-brand-700 font-extrabold text-lg mb-1">Booked in 24&ndash;48 hrs</div>
              <p className="text-gray-600 text-sm">Often same-week in peak season. {PROMISES.response} {PROMISES.rainBackShort}.</p>
            </div>
          </div>

          {/* All 19 cities — "serving [city] near you" framing */}
          <h3 className="text-lg font-bold text-brand-900 mb-4 text-center">Serving mosquito control near you across the GTA</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {CITIES.map((city) => (
              <Link
                key={city.name}
                href={city.mosquitoSlug}
                className="block bg-white border border-brand-200 rounded-lg px-4 py-3 text-sm font-medium text-brand-800 hover:bg-brand-700 hover:text-white hover:border-brand-700 transition-colors"
              >
                Serving {city.name} near you &rarr;
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/free-yard-assessment" className="btn-primary press-scale">
              Get a Free Local Quote
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Not sure of the price? See the full <Link href="/mosquito-control-cost" className="text-brand-700 underline">2026 pricing guide</Link>, browse every area on our <Link href="/service-areas" className="text-brand-700 underline">service areas page</Link>, or call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a>.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section aria-labelledby="whats-included" className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Our Service</p>
          <h2 id="whats-included" className="h2-display text-brand-900 mb-4 text-center">What's Included in Every Mosquito Treatment</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">Each BuzzSkito mosquito control service follows the same careful process on every visit.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Targeted Barrier Application', desc: 'We spray all vegetation, shrubs, hedges, and the underside of leaves up to 10 feet high — wherever mosquitoes rest during the day.' },
              { icon: '⚡', title: 'Contact Action Where Mosquitoes Rest', desc: 'The product goes on the shaded leaf undersides and shrub interiors where adult mosquitoes rest during the day.' },
              { icon: '🛡️', title: 'Residual Barrier', desc: 'The product dries onto treated surfaces as a residual barrier, and scheduled repeat visits keep it in place through the season.' },
              { icon: '💧', title: 'Rain-Back Guarantee', desc: PROMISES.rainBack },
              { icon: '📋', title: 'Label-Directed Application', desc: 'Products applied according to label directions by a licensed technician. Keep kids and pets off treated areas until the spray has dried.' },
              { icon: '🔁', title: 'Bite-Free Guarantee (Standard & Exclusive)', desc: BUSINESS.guarantee.description },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="GTA" service="mosquito" location="price_card_mid" />
      </div>

      {/* Seasonal plan */}
      <section aria-labelledby="seasonal-plan" className="py-14 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Seasonal Plan</p>
          <h2 id="seasonal-plan" className="h2-display text-brand-900 mb-4 text-center">Recommended Seasonal Mosquito Schedule</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Five treatments from May through September, one a month, is our Basic plan ($549). Most GTA homes choose Standard: 10 sprays every 2 weeks ($994).</p>
          <div className="grid grid-cols-5 gap-2 sm:gap-4">
            {['May','June','July','August','September'].map((month, i) => (
              <div key={month} className="bg-white rounded-xl p-4 text-center shadow-sm border border-brand-200">
                <div className="text-brand-700 font-extrabold text-xs uppercase tracking-wide mb-1">Treatment {i + 1}</div>
                <div className="text-brand-900 font-bold text-sm sm:text-base">{month}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary city links */}
      <section aria-labelledby="primary-cities" className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Service Areas</p>
          <h2 id="primary-cities" className="h2-display text-brand-900 mb-4 text-center">Mosquito Control by City</h2>
          <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">Select your city for local mosquito control information, neighbourhood coverage, and service details.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {primaryCities.map((city) => (
              <Link
                key={city.name}
                href={city.mosquitoSlug}
                className="block bg-brand-50 border border-brand-200 rounded-xl p-5 hover:bg-brand-700 hover:text-white hover:border-brand-700 transition-all group"
              >
                <h3 className="font-extrabold text-brand-900 group-hover:text-white mb-1">{city.name}</h3>
                <p className="text-xs text-gray-500 group-hover:text-brand-200 line-clamp-2">{city.mosquitoBlurb}</p>
                <div className="text-brand-600 group-hover:text-brand-300 text-xs font-semibold mt-2">View service →</div>
              </Link>
            ))}
          </div>
          {/* Extended cities */}
          <h3 className="text-lg font-bold text-brand-900 mb-3">Also serving across the GTA:</h3>
          <div className="flex flex-wrap gap-2">
            {extendedCities.map((city) => (
              <Link
                key={city.name}
                href={city.mosquitoSlug}
                className="text-sm bg-brand-50 border border-brand-200 text-brand-700 hover:bg-brand-700 hover:text-white px-4 py-2 rounded-full transition-colors font-medium"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            See all 19 cities on our <Link href="/service-areas" className="text-brand-700 underline">full service areas page</Link>, view the <Link href="/mosquito-control-ontario" className="text-brand-700 underline">Ontario coverage overview</Link>, or see our <Link href="/mosquito-control-cost" className="text-brand-700 underline">2026 mosquito control pricing guide</Link>.
          </p>
        </div>
      </section>

      {/* Blog links */}
      <section aria-labelledby="related-guides" className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 id="related-guides" className="text-2xl font-extrabold text-brand-900 mb-3">Mosquito Control Guides</h2>
          <p className="text-gray-500 mb-8 text-sm">Start with our comprehensive pillar guide, then explore specific topics below.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <BlogCard {...MOSQUITO_BLOGS.pillar} category="mosquito" isPillar />
            {MOSQUITO_BLOGS.supporting.map((post) => (
              <BlogCard key={post.slug} {...post} category="mosquito" />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <CityPriceCard city="GTA" service="mosquito" />
      </div>

      {/* FAQ */}
      <section aria-labelledby="faq" className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="kicker mb-3 text-center">Questions &amp; Answers</p>
          <h2 id="faq" className="h2-display text-brand-900 text-center mb-8">Mosquito Control FAQ</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            More questions? See our <Link href="/frequently-asked-question" className="text-brand-700 underline">full FAQ</Link>, the <Link href="/mosquito-spray-safety" className="text-brand-700 underline">spray safety guide</Link>, or call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a>.
          </p>
        </div>
      </section>

      <CTASection heading="Ready to Take Back Your Yard?" subtext="Get a free, no-obligation mosquito control quote for your GTA property." />
    </>
  )
}
