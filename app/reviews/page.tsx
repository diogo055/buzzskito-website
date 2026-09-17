import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import QuickAnswer from '@/components/QuickAnswer'
import { buildMetadata, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'BuzzSkito Reviews · 150+ Five-Star Google Reviews · Mosquito & Tick Control GTA',
  description:
    'Read what 150+ GTA homeowners say about BuzzSkito mosquito and tick control. 5.0-star Google rating, zero negative reviews. Real customer feedback from Mississauga, Toronto, Oakville, Burlington, Brampton, Vaughan, and Hamilton.',
  canonical: '/reviews',
})

const FAQS = [
  {
    question: 'How many Google reviews does BuzzSkito have?',
    answer: 'BuzzSkito currently has 150+ Google reviews with a 5.0-star average rating and zero negative reviews. All reviews are publicly verified on Google. New reviews are added regularly throughout the May–September service season.',
  },
  {
    question: 'Are BuzzSkito reviews real?',
    answer: 'Yes — every review is a verified Google review left by a paying BuzzSkito customer. Google verifies that each review comes from a unique account; reviews on Google cannot be paid for or fabricated. You can read all 150+ reviews directly on our public Google Business Profile.',
  },
  {
    question: 'How does BuzzSkito have zero negative reviews?',
    answer: 'Three reasons: (1) clear guarantees — rain within 1 hour of a treatment gets a free re-treatment on every plan, and on Standard and Exclusive plans the Bite-Free Guarantee re-treats at no charge if mosquitoes come back between scheduled treatments — so a problem gets fixed rather than posted online; (2) we specialize only in mosquitoes and ticks, so we don\'t take on jobs outside our expertise; (3) Mississauga-based and owner-operated — Alex personally oversees every customer relationship and resolves any concern immediately, before it becomes a public review.',
  },
  {
    question: 'Where can I read all BuzzSkito reviews?',
    answer: 'All 150+ reviews are public on Google. Click "Leave a Google Review" in our footer or visit our Google Business Profile directly to read every review. We do not selectively display reviews on our website — Google publishes them all.',
  },
  {
    question: 'Does BuzzSkito ask customers to leave reviews?',
    answer: 'Yes — after every treatment, customers receive a follow-up email with a link to leave a Google review if they\'re happy with the service. We never offer incentives or compensation for reviews, which would violate Google\'s policies. We simply make it easy for satisfied customers to share their experience.',
  },
  {
    // Competitors are not named anywhere on the site (owner rule), including this FAQ and its FAQPage schema.
    question: 'How does BuzzSkito compare to other GTA mosquito control companies in reviews?',
    answer: 'BuzzSkito has 150+ Google reviews at 5.0 stars (zero negative). Larger franchise and lawn-care companies in the GTA often have more reviews in total, but those reviews are spread across many locations or across services other than mosquito and tick control, so the rating tells you less about the mosquito service itself. BuzzSkito\'s 5.0 rating comes from focusing only on mosquito and tick control. Our guide to the best mosquito control companies in the GTA covers what to compare before you book.',
  },
]

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ includeAggregateRating: true })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Reviews', url: '/reviews' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/reviews', '2026-07-01')) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Reviews</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            BuzzSkito Reviews<br/>
            <span className="text-amber-400">150+ Five-Star Google Reviews</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-3xl leading-relaxed mb-8">
            What GTA homeowners say about BuzzSkito mosquito and tick control. <strong className="text-amber-400">5.0-star average rating, zero negative reviews</strong> across all 19 cities we serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={BUSINESS.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">
              Read All 150+ Reviews on Google
            </a>
            <Link href="/free-yard-assessment" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <QuickAnswer question="What do BuzzSkito customers say?">
        <p>
          <strong>BuzzSkito has 150+ verified Google reviews with a 5.0-star average and zero negative reviews — one of the highest-rated mosquito and tick control specialists in the GTA.</strong> Customers consistently mention three things: (1) the treatment works for them — many say their yard felt usable again after the first visit; (2) responsive scheduling — same-week service across all 19 cities; (3) the guarantees — a free re-treatment if it rains within 1 hour of a visit (every plan), plus the Bite-Free Guarantee on Standard &amp; Exclusive plans. Reviews come from homeowners across Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, and surrounding GTA communities. Read every review publicly on Google.
        </p>
      </QuickAnswer>

      {/* RATING BAR */}
      <section className="py-10 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-extrabold text-brand-900">150+</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Verified Google Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-amber-500">5.0 ★</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-brand-900">0</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Negative Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-brand-900">19</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Cities Reviewed In</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CUSTOMERS SAY — themes */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">What BuzzSkito Customers Mention Most</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              // Site-authored summaries, not customer quotes. Reworded Sep 2026 to the pesticide advertising
              // rules (DIR2016-01): no "safe" or "Health Canada-approved", no timed re-entry claim, no
              // unscoped Bite-Free Guarantee, and no arrival-text promise.
              { theme: 'It actually works', desc: 'The most common review pattern: customers with mosquito-heavy yards say they could use their yard again after the first treatment. Ravine-adjacent properties (Rosedale, Forest Hill, Bronte, Tyandaga) see the most dramatic before-and-after difference.' },
              { theme: 'Responsive scheduling', desc: 'Same-week service is standard during peak season. Customers mention BuzzSkito scheduling treatments faster than competitors who require weeks of lead time.' },
              { theme: 'Communication is clear', desc: 'Visits are booked in a window, never an exact arrival time, and followed by a post-treatment confirmation email with a full service log. Customers consistently call out professionalism and clarity.' },
              { theme: 'Guarantees are honoured', desc: 'The few customers who needed a re-spray (typically after rain soon after a treatment) say BuzzSkito came back at no charge. Rain within 1 hour of a treatment gets a free re-treatment on every plan; the Bite-Free Guarantee applies on Standard & Exclusive plans.' },
              { theme: 'Owner-operated trust', desc: 'Multiple reviews mention speaking with Alex personally. The owner-operated model — versus a franchise — comes up often as a reason customers chose BuzzSkito.' },
            ].map(({ theme, desc }) => (
              <div key={theme} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <h3 className="font-extrabold text-brand-900 text-base mb-2">{theme}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            Before each visit we explain what to do: keep kids and pets inside during the treatment and stay off treated areas until the spray has dried, as the label directs. Ask the Ontario-licensed technician for the product name and PCP registration number.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions About BuzzSkito Reviews</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CITY-SPECIFIC LINKS */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2">BuzzSkito Reviews by City</h2>
          <p className="text-gray-600 mb-6">Read what homeowners say about BuzzSkito in your specific GTA city — all city pages include verified customer feedback.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Mississauga', href: '/mississauga-mosquito-control' },
              { city: 'Toronto', href: '/toronto-mosquito-control' },
              { city: 'Brampton', href: '/brampton-mosquito-control' },
              { city: 'Oakville', href: '/oakville-mosquito-control' },
              { city: 'Burlington', href: '/burlington-mosquito-spray' },
              { city: 'Hamilton', href: '/hamilton-mosquito-control' },
              { city: 'Vaughan', href: '/vaughan-mosquito-control' },
              { city: 'Markham', href: '/markham-mosquito-control' },
              { city: 'Richmond Hill', href: '/richmond-hill-mosquito-control' },
              { city: 'Etobicoke', href: '/etobicoke-mosquito-control' },
              { city: 'Scarborough', href: '/scarborough-mosquito-control' },
              { city: 'North York', href: '/north-york-mosquito-control' },
              { city: 'Caledon', href: '/caledon-mosquito-control' },
              { city: 'Milton', href: '/milton-mosquito-control' },
              { city: 'Georgetown', href: '/georgetown-mosquito-control' },
              { city: 'Halton Hills', href: '/halton-hills-mosquito-control' },
              { city: 'King City', href: '/king-city-mosquito-control' },
              { city: 'Woodbridge', href: '/woodbridge-mosquito-control' },
              { city: 'Thornhill', href: '/thornhill-mosquito-control' },
            ].map(({ city, href }) => (
              <Link key={city} href={href} className="bg-brand-50 hover:bg-brand-100 border border-brand-100 rounded-lg px-4 py-2.5 text-sm text-brand-800 font-medium transition-colors">
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Become Our Next Five-Star Review" subtext="Get a free quote and see why 150+ GTA homeowners gave BuzzSkito perfect five stars." />
    </>
  )
}
