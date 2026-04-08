import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'How Mosquito & Tick Control Works | BuzzSkito',
  description:
    'See exactly how BuzzSkito\'s mosquito and tick barrier spray works — the product, application process, what to expect, and how long protection lasts. Health Canada–approved formula.',
  canonical: '/how-it-works',
})

const FAQS = [
  {
    question: 'How does barrier spray actually kill mosquitoes?',
    answer: "Our barrier spray contains a residual active ingredient (pyrethrin-based, Health Canada–approved) that adheres to leaf surfaces and shrub foliage. When a mosquito lands on treated vegetation to rest — which they do throughout the day — contact with the treated surface eliminates them. The formula remains active on surfaces for up to 30 days after a single application, continuously protecting your property throughout that window.",
  },
  {
    question: 'Why do you spray vegetation instead of the mosquitoes directly?',
    answer: "Mosquitoes spend the vast majority of their time resting on vegetation — leaf undersides, shrub foliage, fence lines — rather than flying. They only fly actively during the dawn and dusk feeding windows. Spraying resting surfaces targets them where they spend most of their time and delivers residual protection that keeps working for weeks. Spraying the air would only affect mosquitoes actively flying at that moment and would provide no lasting protection.",
  },
  {
    question: 'What does BuzzSkito actually spray, and is it safe?',
    answer: "We use a water-based, Health Canada–approved formula in the pyrethrin/permethrin family — the same class of chemistry used in head lice shampoos, pet flea treatments, and most professional pest control products. The product is applied at low concentrations targeted at insect biology. Once dried (approximately 30 minutes after application), the treated area is safe for children, pets, pollinators, and all other wildlife. We do not apply directly to water features, open blooms, vegetable gardens, or bare soil.",
  },
  {
    question: 'Do I need to be home during the treatment?',
    answer: "No. You don't need to be home as long as our technicians have unobstructed access to your outdoor areas. We'll send an SMS notification before arriving, and a follow-up email with the complete treatment log — what was treated, any observations, and your protection window end date. We place a small lawn sign at the front confirming treatment completion.",
  },
  {
    question: 'What happens if it rains right after treatment?',
    answer: "Our formula bonds to leaf surfaces as it dries. If significant rain falls within one hour of application — before the product has fully cured — we return and re-treat your property at no charge. This rain-back guarantee applies to every service visit.",
  },
  {
    question: 'How long does protection last?',
    answer: "Each treatment provides up to 30 days of residual protection on treated surfaces. For continuous season-long coverage, we recommend treatments every 21–28 days. Our standard seasonal program runs from May through September — 5 treatments covering the full active mosquito and tick season in Ontario.",
  },
  {
    question: 'Does it work for ticks too?',
    answer: "Yes. The same barrier spray application that controls mosquitoes also provides effective tick control. We apply to the low vegetation, ground cover, shrub borders, and shaded areas at the base of trees and fence lines where ticks congregate. One treatment addresses both pests. Many GTA homeowners near ravines and green corridors choose our combined mosquito and tick program for complete yard protection.",
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'How It Works', url: '/how-it-works' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/how-it-works')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">How It Works</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">How BuzzSkito's Mosquito &amp; Tick Control Works</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Professional barrier spray explained — what we apply, where we apply it, how long it lasts, and what to expect before and after your treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Rain-Back Guarantee</span>
          <span>✓ No Home Visit Required</span>
        </div>
      </section>

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
                <h3 className="text-xl font-bold text-brand-900 mb-2">30-Minute Dry Time</h3>
                <p className="text-gray-600">Keep children and pets off treated vegetation for 30 minutes while the product dries. Once dry, treated areas are fully safe. The product is odourless once dry and invisible on treated surfaces.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white font-extrabold flex items-center justify-center text-lg">5</div>
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-2">Up to 30 Days of Protection</h3>
                <p className="text-gray-600">The residual formula remains active on treated surfaces for up to 30 days. Mosquitoes and ticks that land on treated vegetation are eliminated on contact throughout this window. We recommend reapplication every 21–28 days for continuous seasonal protection.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white font-extrabold flex items-center justify-center text-lg">6</div>
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-2">Treatment Log + Lawn Sign</h3>
                <p className="text-gray-600">After each visit, we place a small lawn sign at the front of your property confirming treatment. You receive a follow-up email with your complete treatment log: surfaces treated, technician observations, and your protection window end date.</p>
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

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Common Questions About How It Works</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
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

      <CTASection heading="Ready to Protect Your Yard?" subtext="Professional mosquito and tick barrier spray — Health Canada approved, safe for kids and pets. No contracts." />
    </>
  )
}
