import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, speakableSchema, itemListSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'

const HUBS = [
  {
    slug: 'mosquito-life-cycle',
    title: 'The Mosquito Life Cycle',
    blurb: 'Egg, larva, pupa, adult — the four stages every GTA mosquito passes through in just 8-14 days, and why the cycle is the key to control.',
  },
  {
    slug: 'tick-life-cycle',
    title: 'The Tick Life Cycle',
    blurb: 'The two-year journey of Ontario’s blacklegged (deer) tick, and why the poppy-seed-sized nymph is the stage that spreads most Lyme disease.',
  },
  {
    slug: 'ontario-mosquito-tick-diseases',
    title: 'Mosquito & Tick Diseases in Ontario',
    blurb: 'West Nile virus, Lyme disease, EEE, and anaplasmosis — what carries them, the symptoms to watch for, and how to lower your family’s risk.',
  },
  {
    slug: 'how-to-combat-mosquitoes',
    title: 'How to Combat Mosquitoes',
    blurb: 'A practical 10-step backyard plan — from eliminating standing water and larvicide to professional barrier spray and season-long maintenance.',
  },
  {
    slug: 'how-to-combat-ticks',
    title: 'How to Combat Ticks',
    blurb: 'Ten steps to keep blacklegged ticks and Lyme disease away from your family, from yard-edge barriers and repellent to safe tick removal.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Ontario Mosquito & Tick Learning Centre — BuzzSkito',
  description: 'Learn how mosquitoes and ticks live, the diseases they spread in Ontario, and exactly how to combat them. Plain-language guides for GTA homeowners from BuzzSkito Mosquito & Tick Control.',
  canonical: '/learn',
  type: 'website',
})

export default function LearnHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Learning Centre', url: '/learn' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/learn')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema({
        name: 'Ontario Mosquito & Tick Learning Centre',
        description: 'Educational guides on mosquito and tick biology, Ontario diseases, and how to combat both.',
        slug: '/learn',
        items: HUBS.map((h) => ({ name: h.title, url: `${SITE_URL}/learn/${h.slug}` })),
      })) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">Learning Centre</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">Ontario Mosquito &amp; Tick Learning Centre</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Everything a GTA homeowner needs to understand mosquitoes and ticks — how they live, the diseases they spread in Ontario, and exactly how to fight back. Written in plain language by the BuzzSkito team.</p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 border-l-4 border-l-amber-400 bg-white p-7 sm:p-8 shadow-sm">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-600">Start Here</p>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-brand-950 mb-3">What will you learn here?</h2>
          <p className="speakable text-base text-gray-800 leading-relaxed">
            <strong>The BuzzSkito Learning Centre explains mosquito and tick biology, the diseases they carry in Ontario, and step-by-step ways to combat them.</strong> Five plain-language guides cover the mosquito and tick life cycles, the four illnesses GTA families should know (West Nile virus, Lyme disease, EEE, and anaplasmosis), and detailed 10-step plans for controlling each pest in your own backyard.
          </p>
        </div>
      </section>

      <section className="pb-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid gap-5 sm:grid-cols-2">
          {HUBS.map((h) => (
            <Link
              key={h.slug}
              href={`/learn/${h.slug}`}
              className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-brand-300"
            >
              <h2 className="text-lg font-extrabold text-brand-900 mb-2 group-hover:text-brand-700 transition-colors">{h.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{h.blurb}</p>
              <span className="text-sm font-bold text-brand-700 group-hover:text-brand-600">Read the guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto rounded-2xl bg-brand-50 border border-brand-100 p-6 sm:p-7">
          <h2 className="text-lg font-extrabold text-brand-900 mb-2">Ready to put it into practice?</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">Reading is step one — a professional barrier spray does the heavy lifting. BuzzSkito treats mosquitoes and ticks across 19 GTA cities, backed by 150 five-star reviews.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/mosquito-control" className="btn-primary-sm">Mosquito Control</Link>
            <Link href="/tick-control" className="inline-flex items-center rounded-full border-2 border-brand-700 text-brand-700 font-bold px-4 py-2 text-sm hover:bg-brand-700 hover:text-white transition-colors">Tick Control</Link>
          </div>
        </div>
      </section>

      <CTASection heading="Learn It. Then Live Bite-Free." subtext="Get a free quote for licensed mosquito and tick barrier spray. From $99. Serving 19 GTA cities." variant="dark" />
    </>
  )
}
