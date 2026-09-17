import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { IconChip } from '@/components/Icon'
import { buildMetadata, breadcrumbSchema, localBusinessSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Our Story | GTA Mosquito & Tick Control',
  description:
    'Learn about BuzzSkito — professional mosquito & tick control for the GTA. Licensed Ontario operator, treatments from $99.',
  canonical: '/buzzskito-history',
})

const FAQS = [
  {
    question: 'What is BuzzSkito?',
    answer: 'BuzzSkito is a professional mosquito and tick control company serving residential homeowners across the Greater Toronto Area and surrounding Southern Ontario cities. We specialize exclusively in mosquito and tick barrier spray treatments for residential properties, applied according to product label directions by an Ontario-licensed pesticide operator (Licence L-240-2436835197). We serve 19 cities including Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, and more.',
  },
  {
    question: 'Where is BuzzSkito based?',
    answer: 'BuzzSkito is based in Mississauga, Ontario. We serve approximately a 50 km radius covering the entire Greater Toronto Area — from Burlington and Hamilton in the west, to Markham and Pickering in the east, to Caledon and King City in the north.',
  },
  {
    question: 'Is BuzzSkito licensed and insured?',
    answer: 'Yes. BuzzSkito holds Ontario Pesticide Operator Licence L-240-2436835197, our technicians are licensed under Ontario\'s Pesticides Act, and we carry full commercial liability insurance. Products are applied according to their label directions, and we will tell you which product (and its PCP number) is used on your property. Every treatment is documented with a written service log delivered to the homeowner after each visit.',
  },
  {
    question: 'How many reviews does BuzzSkito have?',
    answer: 'BuzzSkito has 150+ five-star Google reviews from GTA homeowners across Mississauga, Toronto, Brampton, Oakville, Burlington, Vaughan, and other service areas. Reviews are publicly visible on our Google Business Profile.',
  },
  {
    question: 'What makes BuzzSkito different from other mosquito spray companies?',
    answer: 'Three things set BuzzSkito apart: (1) We specialize exclusively in mosquito and tick control — not general pest control — which means deeper expertise in these specific treatments. (2) We have a rain-back guarantee on every plan: if rain falls within 1 hour of your treatment, we come back and re-treat free. (3) Standard and Exclusive season plans also carry the Bite-Free Guarantee: if mosquitoes come back between scheduled treatments, we re-treat at no charge. Every visit is documented with a written service log.',
  },
  {
    question: 'Does BuzzSkito offer mosquito and tick control together?',
    answer: 'Yes. BuzzSkito provides both mosquito and tick control, and many homeowners bundle both services in a single visit. Tick treatment uses barrier spray applied to different zones: lawn edges, leaf litter, and fence lines where ticks wait. For GTA properties — especially those near ravines, conservation areas, or the Oak Ridges Moraine — combining both services covers both pests from May through September.',
  },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About BuzzSkito', url: '/buzzskito-history' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/buzzskito-history', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About BuzzSkito' },
        ]}
        title={<>About BuzzSkito</>}
        subtitle={<>GTA's specialized mosquito and tick control company. Licensed Ontario pesticide operator, treatments applied according to label directions, 150+ five-star reviews, no contracts.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      <article className="max-w-4xl mx-auto px-4 py-14 prose-brand">

        <h2>Who We Are</h2>
        <p>
          BuzzSkito is a Mississauga-based mosquito and tick control company serving residential homeowners across the Greater Toronto Area. We specialize exclusively in barrier spray treatments — professional-grade products applied according to label directions to your property's vegetation, shrubs, and lawn edges, where mosquitoes and ticks rest and wait.
        </p>
        <p>
          We serve 19 cities across Southern Ontario: Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill.
        </p>

        <h2>What We Do</h2>
        <p>
          Every BuzzSkito treatment follows the same proven process: our licensed technicians apply a fine residual mist to all vegetation on your property — the underside of shrubs, hedges, fence lines, ornamental plantings, and ground-level foliage up to 10 feet high. This is where mosquitoes and ticks rest during the day. Products are applied according to their label directions, and treatments are repeated on a schedule through the season.
        </p>
        <p>
          Our two core services:
        </p>
        <ul>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline"><strong>Mosquito control</strong></Link> — season plans of 5, 10 or 20+ sprays from May through September (from $549), or single-visit treatments from $99 on a standard lot.</li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline"><strong>Tick control</strong></Link> — 5 sprays per season, timed for peak nymph and adult tick activity ($597 on its own, $497 with any mosquito plan).</li>
        </ul>
        <p>Most customers bundle both services, so one visit covers both pests.</p>

        <h2>Our Credentials and Standards</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {[
            { icon: 'award', title: 'Label-Directed Application', desc: `${PROMISES.labelLine}. We will tell you which product is used on your property.` },
            { icon: 'shield-check', title: 'Ontario Licensed Technicians', desc: `${PROMISES.licence}. All technicians licensed under Ontario's Pesticides Act. Fully insured with commercial liability coverage.` },
            { icon: 'file-check', title: 'Written Service Documentation', desc: 'Every visit documented with a written service log delivered by SMS after each treatment.' },
            { icon: 'refresh', title: 'Bite-Free Guarantee (Standard & Exclusive)', desc: BUSINESS.guarantee.description },
            { icon: 'cloud-rain', title: 'Rain-Back Guarantee', desc: PROMISES.rainBack },
            { icon: 'star', title: '150+ Five-Star Google Reviews', desc: 'Publicly verified reviews from GTA homeowners across our service area.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100 flex gap-4">
              <IconChip name={icon} tone="brand" />
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
          Mosquitoes in the GTA carry West Nile Virus, monitored annually by Toronto Public Health and Peel Region Health. Blacklegged ticks — established in the GTA's ravines and conservation areas — carry Lyme disease, a reportable illness in Ontario with increasing confirmed case counts each year. Those public-health facts are why we focus on the places these insects rest and wait around your home, and apply every product according to its label.
        </p>

        <h2>Contact BuzzSkito</h2>
        <p>
          <strong>Phone:</strong> <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a><br />
          <strong>Email:</strong> <a href={`mailto:${BUSINESS.email}`} className="text-brand-700 hover:underline">{BUSINESS.email}</a><br />
          <strong>Hours:</strong> Monday–Friday 8am–6pm · Saturday 9am–4pm<br />
          <strong>Service area:</strong> Greater Toronto Area — 19 cities across Southern Ontario
        </p>

      </article>

      <TypicalPrices service="mosquito" city="GTA" />

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="GTA" service="mosquito" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions About BuzzSkito</h2>
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

      <CTASection heading="Ready to Work with BuzzSkito?" subtext="Free quote. No contracts. Serving 19 GTA cities from Mississauga to Hamilton." />
    </>
  )
}
