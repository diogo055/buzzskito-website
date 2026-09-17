import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, PRICING, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control FAQ',
  description:
    'Answers to the most common questions about BuzzSkito\'s mosquito and tick control services in Mississauga, Toronto, Brampton, Oakville, Burlington & Hamilton.',
  canonical: '/frequently-asked-question',
})

const ALL_FAQS = [
  // Answers follow the pesticide advertising rules (Health Canada DIR2016-01): label-conditioned, no blanket
  // safety or efficacy numbers, and guarantee wording taken from PROMISES / BUSINESS.guarantee.
  { question: 'How is mosquito control applied?', answer: 'Our mosquito and tick barrier control service is applied using a high-precision backpack sprayer targeting areas where pests live, rest, and hide — including shrubs, trees, under decks, and the underside of leaves. Mosquitoes and ticks that land on or crawl across treated surfaces contact the product. Rain and new plant growth wear the residue down over time, which is why season plans re-treat on a schedule.' },
  { question: 'Is the mosquito and tick solution safe for children and pets?', answer: `Treatments are applied by a licensed operator (${PROMISES.licence}), following the product label directions. Keep children and pets inside during the treatment, and keep everyone off treated areas until the spray has dried, as the label directs. If you want to read the label yourself, ask us for the product name and its PCP registration number before you book.` },
  { question: 'How long does the treatment last?', answer: `It depends on rain, heat and plant growth, so we don't promise a fixed number of days. Season plans (May–September) re-treat on a schedule instead: Basic is 5 sprays, monthly ($${PRICING.basicSeason}); Standard is 10 sprays, every 2 weeks ($${PRICING.standardSeason}, most popular); Exclusive is 20+ sprays, weekly ($2,049). Tick plans are 5 sprays per season. Prices are plus HST.` },
  { question: 'What happens if it rains after the treatment?', answer: PROMISES.rainBack },
  { question: 'Do I need to be home during the treatment?', answer: `No. You don't need to be home for service as long as our technicians have access to your outdoor areas. ${PROMISES.visitWindow} After the visit you get a follow-up email with the full treatment log.` },
  { question: 'How will I know you came to the property?', answer: 'Our technicians place a small 8-inch lawn sign confirming treatment completion and send a follow-up email with detailed notes on what was treated and any observations.' },
  { question: 'Is the service effective if my neighbour doesn\'t get it too?', answer: 'Yes, it still makes a difference. The barrier spray treats the resting areas on your own property: shrubs, hedges, under decks and shaded plantings. Mosquitoes can still fly in from neighbouring yards, parks and ravines, so properties next to water or woods often choose a more frequent schedule. Removing standing water on your own lot helps too.' },
  { question: 'Does BuzzSkito guarantee results?', answer: `No mosquito or tick control service can promise to remove every pest, and we won't pretend otherwise. Here is exactly what we guarantee. ${PROMISES.rainBack} And on Standard and Exclusive season plans, the Bite-Free Guarantee: if mosquitoes come back between scheduled treatments, we re-treat at no charge.` },
  { question: 'How do I get rid of mosquitoes in my backyard?', answer: 'A practical approach combines professional barrier spray with simple prevention measures: remove standing water, trim overgrown vegetation, and maintain a regular treatment schedule. BuzzSkito\'s season plans put that treatment schedule on the calendar from May through September.' },
  { question: 'Can you spray for ticks in my yard?', answer: 'Yes. We specialize in tick control for yard services. Blacklegged ticks can carry the bacteria that cause Lyme disease, so many homeowners near wooded areas, ravines, or dense vegetation in the GTA choose to treat the tick habitat in their yard. Tick plans are 5 sprays per season. Keep checking for ticks after time outdoors, as public health agencies advise.' },
  { question: 'What\'s the difference between mosquito control and mosquito repellent?', answer: 'Mosquito repellents work on your body and need reapplying, following their label. Professional mosquito control treats the yard itself: the vegetation and resting spots where mosquitoes spend the day. A repellent protects the person wearing it; a yard treatment targets the mosquitoes around your home, so many families use both.' },
  { question: 'How often should I get my yard sprayed for mosquitoes?', answer: 'It depends on how much mosquito pressure your yard gets. Our season plans run May through September: Basic is 5 sprays, monthly; Standard is 10 sprays, every 2 weeks (our most popular); Exclusive is 20+ sprays, weekly, for yards next to water, ravines or dense woods.' },
  { question: 'How do I stop mosquitoes from coming back?', answer: 'The best way to keep mosquito numbers down is a combination of professional barrier spray on a regular schedule plus elimination of standing water sources (birdbaths, gutters, tarps, plant saucers) that mosquitoes breed in.' },
  { question: 'What areas does BuzzSkito serve?', answer: 'BuzzSkito offers mosquito and tick control services in Toronto, Mississauga, Brampton, Oakville, Burlington, Hamilton, and surrounding GTA communities. Call us at (289) 216-5030 to confirm availability at your address.' },
  { question: 'What is the lifespan of a mosquito?', answer: 'The average mosquito lifespan is between two weeks and two months, depending on species and environmental conditions. Female mosquitoes live longer than males and are responsible for biting.' },
  { question: 'Does mosquito control work in all weather?', answer: `We do not treat in heavy rain or high wind, as this affects application accuracy and product labels restrict it. We'll reschedule at no cost if weather prevents service. ${PROMISES.rainBack}` },
  { question: 'What tick species are common in Ontario?', answer: 'The most common tick species in Ontario are the blacklegged tick (deer tick, Ixodes scapularis) — which is the primary carrier of Lyme disease — and the American dog tick. Both are active across the GTA from spring through fall.' },
]

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(ALL_FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'FAQ', url: '/frequently-asked-question' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/frequently-asked-question')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-brand-100 max-w-2xl">
            Everything you need to know about BuzzSkito's mosquito and tick control services. Can't find your answer?{' '}
            <a href={`mailto:${BUSINESS.email}`} className="underline text-white">Email us</a> or call{' '}
            <a href={BUSINESS.phoneHref} className="font-bold underline">{BUSINESS.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {ALL_FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-brand-500 group-open:rotate-180 transition-transform ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 bg-brand-50 rounded-2xl p-6 border border-brand-100 text-center">
            <h2 className="font-extrabold text-brand-900 text-lg mb-2">Still have questions?</h2>
            <p className="text-gray-600 text-sm mb-4">Contact our team. {PROMISES.response}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={BUSINESS.phoneHref} className="inline-block bg-brand-700 hover:bg-brand-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">{BUSINESS.phone}</a>
              <a href={`mailto:${BUSINESS.email}`} className="inline-block border border-brand-300 text-brand-700 hover:bg-brand-50 font-bold px-6 py-3 rounded-full text-sm transition-colors">{BUSINESS.email}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto text-sm text-gray-500 text-center">
          <p>
            Explore our services: <Link href="/mosquito-control" className="text-brand-700 underline">Mosquito Control</Link> ·{' '}
            <Link href="/tick-control" className="text-brand-700 underline">Tick Control</Link> ·{' '}
            <Link href="/service-areas" className="text-brand-700 underline">Service Areas</Link> ·{' '}
            <Link href="/blog" className="text-brand-700 underline">Guides & Blog</Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
