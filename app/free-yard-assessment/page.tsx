import type { Metadata } from 'next'
import { buildMetadata, breadcrumbSchema, speakableSchema, faqSchema } from '@/lib/seo'
import { PRICING, PROMISES } from '@/lib/constants'
import YardAssessment from '@/components/YardAssessment'
import ReviewQuotes from '@/components/ReviewQuotes'

export const metadata: Metadata = buildMetadata({
  title: 'Get a Free Quote — BuzzSkito Mosquito & Tick Control GTA',
  // Was "...we measure via satellite and reply within 24 hours": a reply-time promise we can't hold on a
  // bad week, and an unconfirmed method claim. Smallest rewrite that keeps the rest of the snippet.
  description:
    'Free custom quote for mosquito and tick control. Serving Mississauga, Toronto, and the GTA. Pricing depends on lot size, and most requests get a price the same day.',
  canonical: '/free-yard-assessment',
})

const money = (n: number) => `$${n.toLocaleString('en-CA')}`

// Objection FAQ. The visible <details> list and the FAQPage JSON-LD are built from this one array, so they
// can't drift. Every price comes from PRICING and every promise from PROMISES.
const FAQS = [
  {
    question: 'How much does it cost?',
    answer: `A single treatment starts at ${money(PRICING.singleTreatmentFrom)} for a standard lot under ${PRICING.standardLotSqFt.toLocaleString('en-CA')} sq ft. Season plans (May to September) are ${money(PRICING.basicSeason)} for Basic (5 sprays, monthly), ${money(PRICING.standardSeason)} for Standard (10 sprays, every 2 weeks, our most popular) and ${money(PRICING.exclusiveSeason)} for Exclusive (20+ sprays, weekly). Tick control is ${money(PRICING.tickStandaloneFrom)} on its own, or ${money(PRICING.tickBundleFrom)} added to any mosquito plan, with 5 sprays per season. Prices are plus HST. Bigger lots are priced to the yard, and your quote shows the exact price before you pay.`,
  },
  {
    question: 'What if it rains?',
    answer: PROMISES.rainBack,
  },
  {
    question: 'How many sprays do I get?',
    answer: 'It depends on the plan. A single treatment is one spray. Basic is 5 sprays (monthly), Standard is 10 (every 2 weeks) and Exclusive is 20 or more (weekly), all running May to September. Tick control is 5 sprays per season.',
  },
  {
    question: 'When can we use the yard again?',
    answer: `Stay off the treated areas until the spray has dried, as the product label directs. ${PROMISES.labelLine}.`,
  },
  {
    question: 'When will I hear back?',
    answer: `${PROMISES.response} Alex or the BuzzSkito team texts your price if you leave a mobile number, and your written quote and secure pay link come by email.`,
  },
  {
    question: 'When will you come?',
    answer: `${PROMISES.visitWindow} Once you pick a plan and pay by secure link, we book your visit window.`,
  },
]

export default function FreeYardAssessmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Get a Free Quote', url: '/free-yard-assessment' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/free-yard-assessment')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      {/* H1 + proof line + form (first screen on a phone), then typical prices */}
      <YardAssessment />

      {/* Trust block + one real job photo (not stock) */}
      <section className="py-10 px-4 bg-gray-50" aria-labelledby="quote-trust-heading">
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 id="quote-trust-heading" className="text-2xl font-extrabold text-brand-900 mb-4">
              Licensed, owner-operated, Mississauga-based
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[PROMISES.licence, PROMISES.labelLine, PROMISES.rainBack, PROMISES.biteFreeScope].map((line) => (
                <li key={line} className="flex gap-2.5">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-600">150+ five-star Google reviews (5.0) · Serving 19 GTA cities</p>
          </div>
          <figure>
            <img
              src="/spray-front.webp"
              alt="BuzzSkito technician with a backpack sprayer treating a front garden bed"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl border border-gray-200"
            />
            <figcaption className="mt-2 text-xs text-gray-500">On the job: treating the garden beds along the front of a home.</figcaption>
          </figure>
        </div>
      </section>

      {/* Three real Google reviews, reused as published */}
      <div className="ink-band">
        <ReviewQuotes heading="What customers say about BuzzSkito" />
      </div>

      {/* Objection FAQ — plain <details>, so every answer is in the HTML without JavaScript */}
      <section className="py-10 px-4 bg-white" aria-labelledby="quote-faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="quote-faq-heading" className="text-2xl font-extrabold text-brand-900 mb-4">Before you ask for a price</h2>
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="group px-4 py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 font-bold text-brand-900 [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="text-2xl leading-none text-brand-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-2 pb-1 text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#qf-yard_assessment-form" data-lead-location="quote_page_faq" className="btn-primary press-scale">
              Get my price
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
