import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'How Mosquito & Tick Control Works',
  description:
    'How BuzzSkito\'s mosquito and tick barrier spray works — product, application, what to expect, how long protection lasts. Licensed Ontario operator.',
  canonical: '/how-it-works',
})

const FAQS = [
  {
    question: 'How does barrier spray actually kill mosquitoes?',
    answer: "Our barrier spray contains a residual active ingredient (pyrethrin-based) that dries onto leaf surfaces and shrub foliage. It is designed to act on mosquitoes that land on treated vegetation to rest, which they do throughout the day. How long a treatment keeps working depends on weather and the mosquito pressure around your yard, so treatments repeat on a set schedule through the season. Products are applied according to label directions by an Ontario-licensed pesticide operator.",
  },
  {
    question: 'Why do you spray vegetation instead of the mosquitoes directly?',
    answer: "Mosquitoes spend the vast majority of their time resting on vegetation — leaf undersides, shrub foliage, fence lines — rather than flying. They only fly actively during the dawn and dusk feeding windows. Spraying resting surfaces targets them where they spend most of their time and leaves a residual on those surfaces between scheduled visits. Spraying the air would only affect mosquitoes actively flying at that moment and would leave nothing on the surfaces where they rest.",
  },
  {
    question: 'What does BuzzSkito actually spray, and how is it applied?',
    answer: "We use a water-based formula in the pyrethrin/permethrin family, applied according to label directions by an Ontario-licensed pesticide operator (Licence L-240-2436835197). The label sets the rate, where the product may go and when people can return. Keep children and pets off treated areas until the spray has dried, as the product label directs. We do not apply directly to water features, open blooms, vegetable gardens, or bare soil.",
  },
  {
    question: 'Do I need to be home during the treatment?',
    answer: "No. You don't need to be home as long as our technicians have unobstructed access to your outdoor areas. We'll send an SMS notification before arriving, and a follow-up email with the complete treatment log — what was treated, any observations, and when your next visit is due. We place a small lawn sign at the front confirming treatment completion.",
  },
  {
    question: 'What happens if it rains right after treatment?',
    answer: "If it rains within 1 hour of your treatment, we come back and re-treat your property free. This rain-back guarantee comes with every plan.",
  },
  {
    question: 'How long does protection last?',
    answer: "We don't promise a fixed number of days: how long a treatment keeps working depends on weather, rain and the mosquito pressure around your yard. That is why season plans repeat on a set schedule from May through September: Basic is 5 sprays, monthly ($549); Standard is 10 sprays, every 2 weeks ($994, our most popular); and Exclusive is 20+ sprays, weekly ($2,049), all plus HST. Tick control is 5 sprays per season. Rain within 1 hour of your treatment? We come back and re-treat free, on every plan.",
  },
  {
    question: 'Does it work for ticks too?',
    answer: "Yes. Tick treatment uses barrier spray too, but it goes to different places: the low vegetation, ground cover, shrub borders, and shaded areas at the base of trees and fence lines where ticks congregate. It can be done on the same visit as your mosquito treatment. Tick control is 5 sprays per season: $597 on its own, or $497 added to any mosquito plan. Many GTA homeowners near ravines and green corridors choose the combined mosquito and tick program.",
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'How It Works', url: '/how-it-works' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/how-it-works', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'How It Works' },
        ]}
        title={<>How BuzzSkito's Mosquito &amp; Tick Control Works</>}
        subtitle={<>Professional barrier spray explained — what we apply, where we apply it, how long it lasts, and what to expect before and after your treatment.</>}
        image="/spray-backyard.webp"
      />

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ {PROMISES.licence}</span>
          <span>✓ {PROMISES.labelLine}</span>
          <span>✓ {PROMISES.rainBackShort}</span>
          <span>✓ {PROMISES.biteFreeScope}</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      <TypicalPrices service="mosquito" />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-extrabold text-brand-900 mb-8">The Treatment Process: Step by Step</h2>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white font-extrabold flex items-center justify-center text-lg">1</div>
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-2">You Book a Free Quote</h3>
                <p className="text-gray-600">Call <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a> or submit a request online. We confirm your address, property size, and any specific concerns (ravine exposure, water features, tick habitat). No home visit required to get started.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white font-extrabold flex items-center justify-center text-lg">2</div>
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-2">We Schedule Your First Treatment</h3>
                <p className="text-gray-600">We schedule your treatment and send an SMS notification before the technician arrives. You do not need to be home. Our technicians work autonomously and have everything they need to treat your property without any input from you on the day of service.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white font-extrabold flex items-center justify-center text-lg">3</div>
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-2">Your Property Is Treated</h3>
                <p className="text-gray-600">Our technician applies a fine residual mist to all vegetation on your property — shrubs, garden borders, fence lines, the underside of tree canopy where accessible, and any areas of dense ground cover. We target the surfaces mosquitoes and ticks use as resting habitat, not open lawn or bare soil. Treatment typically takes 20–40 minutes depending on property size.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white font-extrabold flex items-center justify-center text-lg">4</div>
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-2">Let the Spray Dry</h3>
                <p className="text-gray-600">Keep children and pets off treated vegetation until the spray has dried, as the product label directs. The product is odourless once dry and invisible on treated surfaces.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white font-extrabold flex items-center justify-center text-lg">5</div>
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-2">Repeat Visits Through the Season</h3>
                <p className="text-gray-600">The residual formula stays on treated leaf surfaces between visits, and visits repeat on your plan&apos;s schedule: monthly (Basic, 5 sprays), every 2 weeks (Standard, 10 sprays) or weekly (Exclusive, 20+ sprays). {PROMISES.rainBack} {PROMISES.biteFreeScope}.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white font-extrabold flex items-center justify-center text-lg">6</div>
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-2">Treatment Log + Lawn Sign</h3>
                <p className="text-gray-600">After each visit, we place a small lawn sign at the front of your property confirming treatment. You receive a follow-up email with your complete treatment log: surfaces treated, technician observations, and when your next visit is due.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-brand-50 rounded-2xl p-6 border border-brand-100">
            <h2 className="text-2xl font-extrabold text-brand-900 mb-4">What We Treat — and What We Don't</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-brand-800 mb-3 text-green-700">We treat:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Shrubs and garden borders</li>
                  <li>✓ Fence lines and hedges</li>
                  <li>✓ Leaf undersides and lower tree canopy</li>
                  <li>✓ Dense ground cover and ornamental grasses</li>
                  <li>✓ Under decks and in shaded areas</li>
                  <li>✓ Ravine-facing perimeter vegetation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-3">We do not treat:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✗ Open water (ponds, pools, water features)</li>
                  <li>✗ Open blooms or flowering plants</li>
                  <li>✗ Vegetable or herb gardens</li>
                  <li>✗ Bare soil or open lawn</li>
                  <li>✗ Tree trunks or bark</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="GTA" service="mosquito" location="price_card_faq" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Common Questions About How It Works</h2>
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

      <CTASection heading="Ready to Protect Your Yard?" subtext="Professional mosquito and tick barrier spray — applied according to label directions by a licensed Ontario operator. No contracts." />
    </>
  )
}
