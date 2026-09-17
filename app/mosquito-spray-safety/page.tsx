import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, PRICING, PROMISES } from '@/lib/constants'

// This page answers "is it safe?". Pesticide advertising rules (Health Canada DIR2016-01) bar blanket
// safety claims, "Health Canada approved/registered" as a selling point, and minute-count re-entry
// promises, so every answer here is label-conditioned: licensed application, follow the label, stay off
// until dry, and how a homeowner can check the product (name + PCP number) for themselves.
export const metadata: Metadata = buildMetadata({
  title: 'Is Mosquito Spray Safe for Kids & Pets?',
  description:
    'Plain answers for GTA parents and pet owners: how barrier spray is applied, staying off until it dries, and how to check the product label and PCP number.',
  canonical: '/mosquito-spray-safety',
})

const FAQS = [
  {
    question: 'Is professional mosquito spray safe for kids and pets?',
    answer: `It comes down to the product label, and following it is the whole point of a licensed application. BuzzSkito treatments are applied by an Ontario-licensed pesticide operator (Licence ${BUSINESS.licenseNumber}) according to the label directions. Keep children and pets inside during the treatment, and keep them off treated areas until the spray has dried, as the label directs. The spray goes on shaded resting areas (leaf undersides, shrubs, hedges, fence lines), not the open lawn where kids play. If you want to check for yourself, ask us for the product name and its PCP registration number and read the label before you book.`,
  },
  {
    question: 'How long do we have to stay off the lawn after mosquito spray?',
    answer: 'Until the spray has dried, as the product label directs. We do not quote a fixed number of minutes, because drying time changes with heat, humidity, shade and how dense the plants are: a cool, humid or shaded yard takes longer. If leaves still look or feel wet, wait. If you are home, our technician can show you which areas were treated before they leave.',
  },
  {
    question: 'Is professional mosquito spray safe for dogs and cats?',
    answer: 'Keep dogs and cats inside during the treatment and off treated areas until the spray has dried, as the label directs. Some product labels carry specific directions or precautions for pets (cats in particular), so if you have a pet with health concerns, ask us for the product name and PCP number and check the label, or show it to your vet, before booking. We avoid spraying kennel runs, water bowls, and pet feeding areas.',
  },
  {
    question: 'Is outdoor tick spray safe for kids to play on the lawn after it dries?',
    answer: 'The same label rules apply as for mosquito treatments: keep kids inside during the treatment and off treated areas until the spray has dried. Tick treatments target the places ticks wait for a host, such as leaf litter, tall grass along lawn edges, wood lines, stone walls and ground cover, rather than the open grass where children usually play.',
  },
  {
    question: 'How long does mosquito spray last?',
    answer: `It varies, so we do not promise a fixed number of days. Rain, heat, sun and new plant growth all wear the residue down, and the label sets how often a product can be re-applied. That is why season plans run on a schedule from May through September: Basic is 5 sprays, monthly ($${PRICING.basicSeason}); Standard is 10 sprays, every 2 weeks ($${PRICING.standardSeason}, our most popular plan); Exclusive is 20+ sprays, weekly ($2,049). Prices are plus HST.`,
  },
  {
    question: 'How long does tick spray last?',
    answer: `Like mosquito treatments, it depends on weather and plant growth, so tick plans also run on a schedule: 5 sprays per season, roughly monthly from May through September ($${PRICING.tickStandaloneFrom} on its own, or $${PRICING.tickBundleFrom} added to any mosquito plan, plus HST). A season-long schedule matters because ticks are active at different life stages through the year: blacklegged tick nymphs mostly in late spring and summer, adults mostly in spring and fall.`,
  },
  {
    question: 'Does the spray harm bees or pollinators?',
    answer: 'Insecticides used for mosquito and tick control can be toxic to bees, which is why product labels restrict spraying plants in bloom. BuzzSkito follows those label directions: we do not spray open blooms, flower beds in active flower, or vegetable gardens. The product is applied to leaf undersides, fence lines, and shaded perimeters where mosquitoes rest, not to the flowers bees forage on. If you keep hives or have a pollinator garden, tell us at booking so we can plan around it.',
  },
  {
    question: 'What active ingredients are in BuzzSkito mosquito and tick spray?',
    answer: 'Ask us and we will tell you the exact product name and its PCP registration number before any treatment. Every pest control product sold in Canada carries a Pest Control Products (PCP) Act registration number on its label, and you can look that number up in Health Canada\'s Pesticide Label Search to read the full label, including the active ingredient, precautions and re-entry directions. We also send the Safety Data Sheet (SDS) on request.',
  },
  {
    question: 'Can I see the safety data sheet before booking?',
    answer: 'Absolutely. Ask for the product name, the PCP number and the Safety Data Sheet (SDS) before treatment. Just call (289) 216-5030 or email support@buzzskito.ca and we will send them directly. Reading the label before you book is a good habit with any pest control company.',
  },
  {
    question: 'What about my vegetable garden or fruit trees?',
    answer: 'We observe a buffer zone around vegetable gardens, fruit trees, and edible plants on every property. Our barrier spray targets the perimeter of your yard — not food-growing areas. If you have specific edible-garden concerns, mention them at booking and we will customize the spray pattern accordingly.',
  },
  {
    question: 'Is the spray harmful if pets accidentally walk through it during application?',
    answer: 'Contact with wet spray is exactly what the label directions are there to prevent, so pets and children should stay indoors during the treatment and off treated areas until the spray has dried. If a pet does get wet spray on its coat or paws, follow the first-aid directions on the product label and call your vet; we can give you the product name and PCP number right away. We schedule appointments around your pets and ask that you keep them inside until the treated areas are dry.',
  },
  {
    question: 'Are there alternatives if someone in my household has chemical sensitivities?',
    answer: 'Talk to us before booking. We can give you the exact product name and PCP number so your household, or your doctor, can review the label first. We can also discuss botanical treatments based on essential oils (such as cedarwood, garlic or lemongrass). Botanical products generally need re-applying more often than a conventional barrier spray. Discuss your specific needs at booking and we will recommend the right approach.',
  },
  {
    question: 'How does BuzzSkito spray differ from over-the-counter products?',
    answer: 'OTC consumer sprays from Home Depot or Canadian Tire are domestic-class products labelled for homeowner use, often in hose-end or ready-to-use formats that are hard to get onto mosquito resting sites: leaf undersides, dense shrubs, fence-line vegetation. A licensed operator can use commercial-class products and a backpack mister to reach those micro-habitats where mosquitoes and ticks rest, applying the product according to its label directions.',
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
            <strong className="text-white">The honest answer comes down to the product label.</strong> Every pest control product sold in Canada carries a label with directions for use, precautions and re-entry. BuzzSkito treatments are applied by an Ontario-licensed operator following those directions: kids and pets stay inside during the treatment, and everyone stays off treated areas until the spray has dried. Here is the plain-English guide for GTA families.
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
              { icon: '📋', title: 'Licensed, Label-Directed', desc: `Applied by an Ontario-licensed pesticide operator (Licence ${BUSINESS.licenseNumber}), following the product label directions.` },
              { icon: '⏱️', title: 'Stay Off Until Dry', desc: 'Keep kids and pets inside during the treatment, and off treated areas until the spray has dried, as the label directs.' },
              { icon: '🐝', title: 'Open Blooms Avoided', desc: 'We do not spray open flowers or beds in bloom, and we follow the label\'s pollinator directions.' },
              { icon: '🥬', title: 'Vegetable-Garden Buffer', desc: 'We keep a buffer around vegetable gardens, fruit trees and edible plants on every treatment.' },
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
              { time: 'During spray (15–20 min)', text: 'Our technician applies the barrier spray, following the label directions, to vegetation perimeters, fence lines, dense shrubs, and shaded resting zones. Stay indoors during this window.' },
              { time: 'Once it has dried', text: 'Keep kids and pets off treated areas until the spray has dried, as the product label directs. Drying time varies with heat, humidity and shade, so if leaves still look or feel wet, wait. Then re-open windows and resume outdoor activities.' },
              { time: 'Between visits', text: 'Barrier treatments target resting areas: the residue stays on the leaves and shaded surfaces where mosquitoes and ticks rest, so insects landing there contact it. How long it keeps working depends on the label, rain and plant growth, which is why season plans re-treat on a schedule (monthly, every 2 weeks, or weekly).' },
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

      {/* Check the product yourself — consumer information, not a badge */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-4 text-center">How to Check the Product Yourself</h2>
          <p className="text-gray-700 text-sm leading-relaxed text-center max-w-2xl mx-auto mb-8">
            You do not have to take any company&apos;s word for it, including ours. The label is the legal document that sets out how a product may be used.
          </p>
          <ol className="space-y-4">
            {[
              { step: '1', title: 'Ask for the product name and PCP number', text: 'Before any treatment, ask the company which product they will apply. Pest control products sold in Canada carry a PCP registration number on the label.' },
              { step: '2', title: 'Look up the label', text: 'Search that PCP number in Health Canada\'s Pesticide Label Search to read the full label: active ingredient, precautions, first aid, and re-entry directions.' },
              { step: '3', title: 'Ask for the Safety Data Sheet', text: 'The SDS covers handling and first-aid information. We send it on request, before booking.' },
              { step: '4', title: 'Check the applicator\'s licence', text: `Commercial pesticide application in Ontario requires a licence. Ours is ${PROMISES.licence}.` },
            ].map(({ step, title, text }) => (
              <li key={step} className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 flex gap-4">
                <div className="w-9 h-9 shrink-0 rounded-full bg-brand-900 text-white font-extrabold flex items-center justify-center" aria-hidden="true">{step}</div>
                <div>
                  <h3 className="font-bold text-brand-900 mb-1">{title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ol>
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
            Want the product name, PCP number or full Safety Data Sheet? Call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a> or email <a href="mailto:support@buzzskito.ca" className="text-brand-700 underline">support@buzzskito.ca</a> and we will send it before booking.
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
              <p className="text-gray-500 text-sm">Tick treatments and 5-spray season plans.</p>
            </Link>
            <Link href="/how-it-works" className="bg-white border border-brand-100 rounded-xl p-5 hover:border-brand-400 transition-colors">
              <h3 className="font-extrabold text-brand-900 mb-1">How It Works</h3>
              <p className="text-gray-500 text-sm">Step-by-step treatment process.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Questions About Your Yard?" subtext={`${PROMISES.response} Ask for the product name, PCP number and Safety Data Sheet with your quote.`} variant="dark" />
    </>
  )
}
