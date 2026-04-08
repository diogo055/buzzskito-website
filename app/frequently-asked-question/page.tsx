import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control FAQ | BuzzSkito',
  description:
    'Answers to the most common questions about BuzzSkito\'s mosquito and tick control services in Mississauga, Toronto, Brampton, Oakville, Burlington & Hamilton.',
  canonical: '/frequently-asked-question',
})

const ALL_FAQS = [
  { question: 'How is mosquito control applied?', answer: 'Our mosquito and tick barrier control service is applied using a high-precision backpack sprayer targeting areas where pests live, rest, and hide — including shrubs, trees, under decks, and the underside of leaves. Treatment immediately reduces mosquito and tick activity on contact and repels new pests from entering your yard for weeks.' },
  { question: 'Is the mosquito and tick solution safe for children and pets?', answer: 'Absolutely. Our treatments are designed to be safe when used as directed. Once the formula fully dries — typically within 30 minutes — people and pets may return outdoors safely. We use Health Canada–approved, water-based formulas.' },
  { question: 'How long does the treatment last?', answer: 'Mosquito treatments provide up to 30 days of protection per application. Tick treatments last up to 30 days. For continuous mosquito coverage, we recommend reapplication every 21–28 days throughout the season.' },
  { question: 'What happens if it rains after the treatment?', answer: 'Our products are formulated to bond to surfaces as they dry, creating rain-resistant protection. If it rains within one hour of application, we will reapply the treatment at no additional cost.' },
  { question: 'Do I need to be home during the treatment?', answer: 'No. You don\'t need to be home for service as long as our technicians have access to your outdoor areas. We\'ll send an SMS before arriving and a follow-up email with the full treatment log.' },
  { question: 'How will I know you came to the property?', answer: 'Our technicians place a small 8-inch lawn sign confirming treatment completion and send a follow-up email with detailed notes on what was treated, any observations, and the expected protection window.' },
  { question: 'Is the service effective if my neighbour doesn\'t get it too?', answer: 'Yes. Our mosquito and tick control service is highly effective even if your neighbors don\'t use it. The barrier spray protects your property perimeter and eliminates pests within your yard.' },
  { question: 'Does BuzzSkito guarantee results?', answer: 'Yes. While no mosquito or tick control service can promise 100% elimination of all pests, we guarantee your satisfaction. If you\'re not satisfied within the protection window, we\'ll retreat your yard at no extra cost.' },
  { question: 'How do I get rid of mosquitoes in my backyard?', answer: 'The most effective approach combines professional barrier spray with simple prevention measures: remove standing water, trim overgrown vegetation, and maintain a regular treatment schedule. BuzzSkito\'s seasonal programs keep mosquitoes controlled all summer.' },
  { question: 'Can you spray for ticks in my yard?', answer: 'Yes. We specialize in tick control for yard services. Ticks carry Lyme disease, making professional treatment essential for properties near wooded areas, ravines, or dense vegetation in the GTA.' },
  { question: 'What\'s the difference between mosquito control and mosquito repellent?', answer: 'Mosquito repellents work briefly on your body and require frequent reapplication. Professional mosquito control outdoors provides long-term protection by eliminating mosquitoes at the source — the vegetation and resting spots throughout your yard.' },
  { question: 'How often should I get my yard sprayed for mosquitoes?', answer: 'For continuous protection, we recommend mosquito treatments every 21–28 days. A full seasonal program of 5 treatments from May through September provides the best results.' },
  { question: 'How do I stop mosquitoes from coming back?', answer: 'The most effective way to keep mosquitoes away is a combination of professional barrier spray on a regular schedule plus elimination of standing water sources (birdbaths, gutters, tarps, plant saucers) that mosquitoes breed in.' },
  { question: 'What areas does BuzzSkito serve?', answer: 'BuzzSkito offers mosquito and tick control services in Toronto, Mississauga, Brampton, Oakville, Burlington, Hamilton, and surrounding GTA communities. Call us at (289) 216-5030 to confirm availability at your address.' },
  { question: 'What is the lifespan of a mosquito?', answer: 'The average mosquito lifespan is between two weeks and two months, depending on species and environmental conditions. Female mosquitoes live longer than males and are responsible for biting.' },
  { question: 'Does mosquito control work in all weather?', answer: 'Our mosquito control treatments are weather-resistant within 30 minutes of application. We do not treat in heavy rain or high wind, as this affects application accuracy. We\'ll reschedule at no cost if weather prevents service.' },
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
            <p className="text-gray-600 text-sm mb-4">Contact our team and we'll get back to you quickly.</p>
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
