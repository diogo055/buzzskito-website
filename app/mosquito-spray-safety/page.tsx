import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Is Mosquito Spray Safe for Kids & Pets? · 30 Min',
  description:
    'Health Canada-approved mosquito and tick spray. Safe for kids, dogs, cats and pollinators 30 minutes after drying. Full safety facts and re-entry guide.',
  canonical: '/mosquito-spray-safety',
})

const FAQS = [
  {
    question: 'Is professional mosquito spray safe for kids and pets?',
    answer: 'Yes. BuzzSkito uses Health Canada–approved barrier spray. Once the product has dried (approximately 30 minutes after application), the treated yard is safe for children and pets to play on normally. The active ingredients bond to leaf surfaces — not lawn blades at ground level — and are not absorbed through skin or paws after drying.',
  },
  {
    question: 'How long do we have to stay off the lawn after mosquito spray?',
    answer: 'About 30 minutes — the time it takes for the spray to fully dry on vegetation. After 30 minutes, kids and pets can return to the yard normally. If conditions are humid or shaded, allow up to 60 minutes to be safe. Our technician will let you know exactly when re-entry is safe before they leave.',
  },
  {
    question: 'Is professional mosquito spray safe for dogs and cats?',
    answer: 'Yes — once dried. The 30-minute drying window is the critical safety period. After drying, the product remains bonded to vegetation where mosquitoes rest and is not transferred to pets walking on grass. We avoid spraying directly into kennel runs, water bowls, or any pet feeding areas.',
  },
  {
    question: 'Is outdoor tick spray safe for kids to play on the lawn after it dries?',
    answer: 'Yes. Tick spray uses the same Health Canada–approved formulation as mosquito barrier spray. Once dried (30 minutes), the lawn is safe for kids to play on. The product targets ticks resting on leaf litter and lawn edges — not the open grass where children play.',
  },
  {
    question: 'How long does mosquito spray last?',
    answer: 'A single BuzzSkito mosquito treatment provides 21–30 days of effective protection per application. For continuous coverage through the GTA mosquito season, we recommend our Standard plan: 10 bi-weekly sprays from May through September. The Basic plan offers 5 monthly sprays. Heavy-pressure properties opt for the Exclusive plan with weekly visits.',
  },
  {
    question: 'How long does tick spray last?',
    answer: 'Each tick treatment provides up to 30 days of protection. Our standalone tick plan includes 5 sprays per season — one approximately every 30 days from May through September. This continuous schedule ensures ticks emerging at different life stages (nymphs in spring, adults in late summer) are all controlled.',
  },
  {
    question: 'Does the spray harm bees or pollinators?',
    answer: 'No, when applied correctly. BuzzSkito does not spray open blooms, flower beds in active flower, or vegetable gardens. The product is applied to leaf undersides, fence lines, and shaded perimeters where mosquitoes rest — not to areas where bees forage. Once dried, the residue is not transferred to pollinators visiting nearby flowers.',
  },
  {
    question: 'What active ingredients are in BuzzSkito mosquito and tick spray?',
    answer: 'We use a Health Canada–registered pyrethrin-based formulation. Pyrethrins are derived from chrysanthemum flowers and are among the most widely studied insect-control compounds in residential pest management. Health Canada has approved them for residential lawn use. Full Safety Data Sheets (SDS) are available on request before any treatment.',
  },
  {
    question: 'Can I see the safety data sheet before booking?',
    answer: 'Absolutely. We provide the full Health Canada SDS to any homeowner who requests it before treatment. Just call (289) 216-5030 or email support@buzzskito.ca and we will send it directly. We believe transparent product information is part of professional service.',
  },
  {
    question: 'What about my vegetable garden or fruit trees?',
    answer: 'We observe a buffer zone around vegetable gardens, fruit trees, and edible plants on every property. Our barrier spray targets the perimeter of your yard — not food-growing areas. If you have specific edible-garden concerns, mention them at booking and we will customize the spray pattern accordingly.',
  },
  {
    question: 'Is the spray harmful if pets accidentally walk through it during application?',
    answer: 'During application — before the product has dried — pets and children should remain indoors. Direct contact with wet spray can cause mild skin irritation. After 30 minutes of drying, the product bonds to vegetation and is safe. We schedule appointments around your pets and ask that you keep them inside until we confirm the yard is dry.',
  },
  {
    question: 'Are there alternatives if someone in my household has chemical sensitivities?',
    answer: 'Yes. We offer botanical-only treatments using essential oils (cedarwood, garlic, lemongrass) for households with chemical sensitivities. These provide modest knock-down protection — typically 7–14 days per application versus 30 days for our standard formula. Discuss your specific needs at booking and we will recommend the right approach.',
  },
  {
    question: 'How does BuzzSkito spray differ from over-the-counter products?',
    answer: 'OTC consumer sprays from Home Depot or Canadian Tire use lower concentrations and lack the application equipment to reach mosquito resting sites — leaf undersides, dense shrubs, fence-line vegetation. Our backpack mister applies the Health Canada–registered formula to the precise micro-habitats where mosquitoes and ticks rest, achieving population-level reduction that store-bought sprays cannot match.',
  },
]

export default function MosquitoSafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Spray Safety', url: '/mosquito-spray-safety' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mosquito-spray-safety')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Mosquito &amp; Tick Spray Safety</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Is Mosquito &amp; Tick Spray Safe<br />
            <span className="text-emerald-300">for Kids and Pets?</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-3xl leading-relaxed mb-6">
            <strong className="text-white">Yes — once dried.</strong> BuzzSkito uses Health Canada–approved barrier spray. Re-entry is safe 30 minutes after application. Here is the full plain-English safety guide for GTA families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">
              Get a Free Quote
            </Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Quick safety summary */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-8 text-center">The 30-Second Safety Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '✅', title: 'Health Canada Approved', desc: 'Every product we use is registered with Health Canada for residential lawn use.' },
              { icon: '⏱️', title: '30-Minute Re-Entry', desc: 'Once dried (about 30 minutes), kids and pets can return to the yard.' },
              { icon: '🐝', title: 'Pollinator Safe', desc: 'We never spray open flowers. Bees foraging on dried residue are not harmed.' },
              { icon: '🥬', title: 'Vegetable-Garden Buffer', desc: 'We avoid edible plants entirely on every treatment. Safe for backyard gardens.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application timeline */}
      <section className="py-14 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-8 text-center">What to Expect Around Your Treatment</h2>
          <div className="space-y-4">
            {[
              { time: '15 minutes before', text: 'Bring kids, pets, and outdoor toys inside. Close any open windows facing the yard. Cover backyard food prep areas like outdoor grills.' },
              { time: 'During spray (15–20 min)', text: 'Our technician applies the Health Canada–approved barrier spray to vegetation perimeters, fence lines, dense shrubs, and shaded resting zones. Stay indoors during this window.' },
              { time: '30 minutes after', text: 'Product is fully dried and bonded to vegetation. Kids and pets can return to the yard normally. Re-open windows. Resume outdoor activities.' },
              { time: '30+ days protection', text: 'The barrier spray actively repels and kills mosquitoes and ticks landing on treated surfaces for up to 30 days per application.' },
            ].map(({ time, text }) => (
              <div key={time} className="bg-white rounded-xl p-5 border border-brand-100 flex flex-col sm:flex-row gap-4">
                <div className="sm:w-48 shrink-0">
                  <div className="bg-brand-900 text-white text-sm font-extrabold px-3 py-2 rounded-lg text-center">{time}</div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 text-center mb-8">Frequently Asked Safety Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-emerald-50 rounded-xl border border-emerald-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-emerald-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            Want the full Safety Data Sheet? Call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a> or email <a href="mailto:support@buzzskito.ca" className="text-brand-700 underline">support@buzzskito.ca</a> and we will send it before booking.
          </p>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Related Service Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/mosquito-control" className="bg-white border border-brand-100 rounded-xl p-5 hover:border-brand-400 transition-colors">
              <h3 className="font-extrabold text-brand-900 mb-1">Mosquito Control</h3>
              <p className="text-gray-500 text-sm">Service overview, plans, and pricing.</p>
            </Link>
            <Link href="/tick-control" className="bg-white border border-amber-200 rounded-xl p-5 hover:border-amber-500 transition-colors">
              <h3 className="font-extrabold text-brand-900 mb-1">Tick Control</h3>
              <p className="text-gray-500 text-sm">Lyme prevention and 5-spray season plans.</p>
            </Link>
            <Link href="/how-it-works" className="bg-white border border-brand-100 rounded-xl p-5 hover:border-brand-400 transition-colors">
              <h3 className="font-extrabold text-brand-900 mb-1">How It Works</h3>
              <p className="text-gray-500 text-sm">Step-by-step treatment process.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Ready for a Safe, Bug-Free Yard?" subtext="Get a free quote in under 60 seconds. We'll send the Health Canada SDS with your custom plan." variant="dark" />
    </>
  )
}
