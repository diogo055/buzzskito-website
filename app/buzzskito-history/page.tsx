import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, localBusinessSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Our Story | GTA Mosquito & Tick Control',
  description:
    'Learn about BuzzSkito — professional mosquito & tick control for the GTA. Health Canada-approved treatments from $99.',
  canonical: '/buzzskito-history',
})

const FAQS = [
  {
    question: 'What is BuzzSkito?',
    answer: 'BuzzSkito is a professional mosquito and tick control company serving residential homeowners across the Greater Toronto Area and surrounding Southern Ontario cities. We specialize exclusively in barrier spray treatments using Health Canada–approved formulas that eliminate mosquitoes and ticks from residential properties for up to 30 days per visit. We serve 19 cities including Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, and more.',
  },
  {
    question: 'Where is BuzzSkito based?',
    answer: 'BuzzSkito is based in Mississauga, Ontario. We serve approximately a 50 km radius covering the entire Greater Toronto Area — from Burlington and Hamilton in the west, to Markham and Pickering in the east, to Caledon and King City in the north.',
  },
  {
    question: 'Is BuzzSkito licensed and insured?',
    answer: 'Yes. BuzzSkito technicians are licensed under Ontario\'s Pesticides Act and carry full commercial liability insurance. All products we use are registered with Health Canada under the Pest Control Products Act — we provide registration numbers on request. Every treatment is documented with a written service log delivered to the homeowner after each visit.',
  },
  {
    question: 'How many reviews does BuzzSkito have?',
    answer: 'BuzzSkito has 129 five-star Google reviews from GTA homeowners across Mississauga, Toronto, Brampton, Oakville, Burlington, Vaughan, and other service areas. Reviews are publicly visible on our Google Business Profile.',
  },
  {
    question: 'What makes BuzzSkito different from other mosquito spray companies?',
    answer: 'Three things set BuzzSkito apart: (1) We specialize exclusively in mosquito and tick control — not general pest control — which means deeper expertise in these specific treatments. (2) We offer a free re-spray guarantee: if mosquitoes return within the protection window, we come back at no cost. (3) We have a rain-back guarantee: if significant rain falls within one hour of your treatment, we return and re-treat for free. We also send SMS alerts before and after every visit with a complete service log.',
  },
  {
    question: 'Does BuzzSkito offer mosquito and tick control together?',
    answer: 'Yes. BuzzSkito provides both mosquito and tick control, and many homeowners bundle both services in a single visit. The same barrier spray that eliminates mosquitoes also kills ticks at all life stages. For GTA properties — especially those near ravines, conservation areas, or the Oak Ridges Moraine — combining both services provides complete yard protection from May through September.',
  },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About BuzzSkito', url: '/buzzskito-history' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/buzzskito-history')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">About BuzzSkito</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">About BuzzSkito</h1>
          <p className="text-xl text-brand-100 max-w-2xl">GTA's specialized mosquito and tick control company. Health Canada–approved treatments, 129 five-star reviews, no contracts.</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14 prose-brand">

        <h2>Who We Are</h2>
        <p>
          BuzzSkito is a Mississauga-based mosquito and tick control company serving residential homeowners across the Greater Toronto Area. We specialize exclusively in barrier spray treatments — professional-grade, Health Canada–approved formulas applied to your property's vegetation, shrubs, and lawn edges to eliminate mosquitoes and ticks for up to 30 days per treatment.
        </p>
        <p>
          We serve 19 cities across Southern Ontario: Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill.
        </p>

        <h2>What We Do</h2>
        <p>
          Every BuzzSkito treatment follows the same proven process: our licensed technicians apply a fine residual mist to all vegetation on your property — the underside of shrubs, hedges, fence lines, ornamental plantings, and ground-level foliage up to 10 feet high. This is where mosquitoes and ticks rest during the day. The product kills them on contact and continues working for up to 30 days after application.
        </p>
        <p>
          Our two core services:
        </p>
        <ul>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline"><strong>Mosquito control</strong></Link> — 5-treatment seasonal program from May through September, or single-visit treatments. Up to 30 days of protection per visit.</li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline"><strong>Tick control</strong></Link> — 2–3 strategic treatments targeting peak nymph and adult tick activity windows. Kills blacklegged ticks at all life stages including nymphs.</li>
        </ul>
        <p>Most customers bundle both services — one visit, complete yard protection.</p>

        <h2>Our Credentials and Standards</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {[
            { icon: '🏅', title: 'Health Canada–Approved Products', desc: 'All formulas registered under the Pest Control Products Act. Registration numbers available on request.' },
            { icon: '📋', title: 'Ontario Licensed Technicians', desc: 'All technicians licensed under Ontario\'s Pesticides Act. Fully insured with commercial liability coverage.' },
            { icon: '📝', title: 'Written Service Documentation', desc: 'Every visit documented with a written service log delivered by SMS after each treatment.' },
            { icon: '🔄', title: 'Free Re-Spray Guarantee', desc: 'Mosquitoes or ticks return within the protection window? We come back and re-treat at no cost.' },
            { icon: '🌧️', title: 'BuzzSkito Bite-Free Guarantee', desc: 'If pests return inside the protection window — or rain disrupts the cure — we re-treat at no charge. Period.' },
            { icon: '⭐', title: '129 Five-Star Google Reviews', desc: 'Publicly verified reviews from GTA homeowners across our service area.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100 flex gap-4">
              <span className="text-2xl shrink-0" aria-hidden="true">{icon}</span>
              <div>
                <div className="font-bold text-brand-900 mb-1">{title}</div>
                <div className="text-gray-600 text-sm">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2>Why Specialize in Mosquito and Tick Control?</h2>
        <p>
          Most pest control companies treat dozens of different pest types — ants, rodents, wasps, bedbugs, and more. BuzzSkito does one thing: mosquito and tick barrier spray. That focus means our technicians know the exact micro-habitats where mosquitoes breed and rest in each GTA city, the specific tick risk zones around the Oak Ridges Moraine and urban ravine system, and the precise application techniques that maximize residual protection on residential properties. Specialization produces better results.
        </p>
        <p>
          Mosquitoes in the GTA carry West Nile Virus, monitored annually by Toronto Public Health and Peel Region Health. Blacklegged ticks — established in the GTA's ravines and conservation areas — carry Lyme disease, a reportable illness in Ontario with increasing confirmed case counts each year. Protecting families from these health risks is the foundation of everything we do.
        </p>

        <h2>Contact BuzzSkito</h2>
        <p>
          <strong>Phone:</strong> <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a><br />
          <strong>Email:</strong> <a href={`mailto:${BUSINESS.email}`} className="text-brand-700 hover:underline">{BUSINESS.email}</a><br />
          <strong>Hours:</strong> Monday–Friday 8am–6pm · Saturday 9am–4pm<br />
          <strong>Service area:</strong> Greater Toronto Area — 19 cities across Southern Ontario
        </p>

      </article>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions About BuzzSkito</h2>
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

      <CTASection heading="Ready to Work with BuzzSkito?" subtext="Free quote. No contracts. Serving 19 GTA cities from Mississauga to Hamilton." />
    </>
  )
}
