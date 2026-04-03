import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogCard from '@/components/BlogCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/seo'
import { BUSINESS, CITIES, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control GTA | Barrier Spray Services – BuzzSkito',
  description:
    'Professional mosquito barrier spray for lawns across the GTA. Mississauga, Toronto, Brampton, Oakville, Burlington, Vaughan, Richmond Hill, Markham & more. Up to 30-day protection. Free quotes.',
  canonical: '/mosquito-control',
})

const FAQS = [
  { question: 'How does professional mosquito barrier spray work?', answer: 'BuzzSkito applies a fine residual mist to shrubs, vegetation, and the underside of leaves where mosquitoes rest during the day. The formula kills mosquitoes on contact and remains active for up to 30 days, creating a continuous protective barrier around your property.' },
  { question: 'How many mosquito treatments do I need per season?', answer: 'We recommend 5 treatments throughout the season — typically May, June, July, August, and September — to maintain continuous 30-day protection during peak mosquito activity in the GTA.' },
  { question: 'Is the mosquito spray safe for children and pets?', answer: 'Yes. We use Health Canada–approved, water-based barrier spray formulas. Children and pets can safely return to treated areas 30 minutes after application, once the product has dried.' },
  { question: 'What is the best time of year to start mosquito control in Ontario?', answer: 'Start in early May, as mosquito populations begin building once temperatures consistently exceed 10°C. Early treatment prevents populations from establishing before peak season in June and July.' },
  { question: 'Do you service my city?', answer: 'BuzzSkito serves 19 cities across the GTA including Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill. See our full service areas page for details.' },
]

export default function MosquitoControlPage() {
  const primaryCities = CITIES.slice(0, 6)
  const extendedCities = CITIES.slice(6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Mosquito Control', description: 'Professional mosquito barrier spray service for residential lawns and properties across the Greater Toronto Area.', slug: '/mosquito-control' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Mosquito Control</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Professional Mosquito Control<br />
            <span className="text-brand-400">for GTA Homes</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-2xl leading-relaxed mb-8">
            Barrier spray treatments that eliminate mosquitoes in your yard and keep them away for up to 30 days. Serving 19 cities across the Greater Toronto Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">
              Get a Free Quote
            </Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">
              {BUSINESS.phone}
            </a>
          </div>
          <p className="mt-5 text-brand-300 text-sm">
            Also offering <Link href="/tick-control" className="text-brand-400 underline hover:text-white">tick control</Link> — bundle both services for complete yard protection.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section aria-labelledby="whats-included" className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 id="whats-included" className="text-3xl font-extrabold text-brand-900 mb-4 text-center">What's Included in Every Mosquito Treatment</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">Each BuzzSkito mosquito control service follows a proven process that delivers immediate results and lasting protection.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Targeted Barrier Application', desc: 'We spray all vegetation, shrubs, hedges, and the underside of leaves up to 10 feet high — wherever mosquitoes rest during the day.' },
              { icon: '⚡', title: 'Immediate Kill-on-Contact', desc: 'Adult mosquitoes and larvae in treated areas are eliminated on contact within minutes of application.' },
              { icon: '🛡️', title: 'Up to 30-Day Protection', desc: 'Residual formula continues working for up to 30 days, killing new mosquitoes that enter the treatment zone.' },
              { icon: '💧', title: 'Rain-Resistant Formula', desc: 'Bonds to surfaces as it dries. Rain within one hour? We reapply at no cost.' },
              { icon: '👶', title: 'Safe After 30 Minutes', desc: 'Health Canada–approved water-based formula. Kids and pets can return to the yard 30 minutes after application.' },
              { icon: '🔁', title: 'Free Re-Spray Guarantee', desc: 'Not satisfied? We come back and re-treat at no charge. We stand behind every application we make.' },
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

      {/* Seasonal plan */}
      <section aria-labelledby="seasonal-plan" className="py-14 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 id="seasonal-plan" className="text-3xl font-extrabold text-brand-900 mb-4 text-center">Recommended Seasonal Mosquito Schedule</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Five treatments from May through September keep your property mosquito-free all season with continuous 30-day coverage windows.</p>
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
          <h2 id="primary-cities" className="text-3xl font-extrabold text-brand-900 mb-4 text-center">Mosquito Control by City</h2>
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
            See all 19 cities on our <Link href="/service-areas" className="text-brand-700 underline">full service areas page</Link>.
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

      {/* FAQ */}
      <section aria-labelledby="faq" className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq" className="text-3xl font-extrabold text-brand-900 text-center mb-8">Mosquito Control FAQ</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            More questions? See our <Link href="/frequently-asked-question" className="text-brand-700 underline">full FAQ</Link> or call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a>.
          </p>
        </div>
      </section>

      <CTASection heading="Ready for a Mosquito-Free Yard?" subtext="Get a free, no-obligation mosquito control quote for your GTA property." />
    </>
  )
}
