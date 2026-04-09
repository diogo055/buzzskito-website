import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Thornhill | From $99, No Contracts | BuzzSkito',
  description:
    'Professional tick spray in Thornhill. German Mills Creek and Pomona Mills Park ravines provide year-round blacklegged tick habitat. Serving Thornhill Village, Royal Orchard, Beverley Glen & all Thornhill. Call (289) 216-5030.',
  canonical: '/thornhill-tick-spray',
})

const CITY = 'Thornhill'
const NEIGHBOURHOODS = ['Thornhill Village','Royal Orchard','Pomona Mills','Aileen-Willowbrook','Beverley Glen','Westmount','Commerce Valley']
const FAQS = [
  {
    question: 'How much does tick spray cost in Thornhill?',
    answer: 'Tick spray in Thornhill starts from $99 per application. Properties near ravine corridors, conservation lands, or the Oak Ridges Moraine boundary benefit most from both spring and fall applications. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Which Thornhill neighbourhoods have the highest tick risk?',
    answer: 'Royal Orchard and Aileen-Willowbrook properties backing onto the Don River tributary ravines — including German Mills Creek — have meaningful annual tick exposure. Pomona Mills Park area backs onto naturalized ravine sections that are active tick habitat. Both the Vaughan and Markham portions of Thornhill fall within York Region\'s tick monitoring area, and both have documented tick activity in their ravine corridors.',
  },
  {
    question: 'Is Thornhill\'s tick risk on the Vaughan side, the Markham side, or both?',
    answer: 'Both. The ravine network in Thornhill doesn\'t respect municipal boundaries — German Mills Creek and its tributaries run through the Markham portion while other Don River tributary ravines affect the Vaughan portion. York Region Public Health\'s tick awareness advisories cover the entire Thornhill community regardless of which municipality a specific street falls in.',
  },
  {
    question: 'How do ticks get from Thornhill\'s ravines into backyards?',
    answer: 'Wildlife — particularly deer, foxes, and raccoons — move freely between ravines and residential yards throughout Thornhill. As these animals travel through neighbourhoods, they deposit ticks in lawns, garden beds, and along fence lines. The tick questing zone is usually the first few feet of the lawn edge where it meets garden beds, leaf litter, or any naturalized area — not deep in the ravine itself. This is exactly where BuzzSkito\'s barrier spray is targeted.',
  },
]

export default function ThornhillTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/thornhill-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/thornhill-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/thornhill-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Thornhill's Don River tributary ravines — including German Mills Creek and Pomona Mills Park — provide year-round blacklegged tick habitat. Both Vaughan and Markham portions of Thornhill are within York Region's tick monitoring area. BuzzSkito protects your family from Lyme disease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Tick Spray Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional tick spray from <strong className="text-amber-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Tick Spray Is Crucial in Thornhill</h2>
          <p>Thornhill straddles the municipal boundary between Vaughan and Markham, but its ravine network doesn't follow administrative lines. German Mills Creek and its tributary ravines run through the Markham side of Thornhill, creating a continuous forested corridor that is documented blacklegged tick habitat. Pomona Mills Park and the naturalized ravine sections adjacent to Royal Orchard and Aileen-Willowbrook represent the highest-risk areas on the Vaughan side. York Region Public Health's annual tick monitoring covers both portions of Thornhill.</p>
          <p>What makes Thornhill's tick risk particularly worth addressing is the proximity of affected ravines to densely developed residential streets. Homes in Royal Orchard and Aileen-Willowbrook with rear lots backing onto ravine sections face the most direct exposure. Ticks don't need a large forested area to establish — even a narrow ravine corridor or a naturalized buffer strip between properties is sufficient habitat for questing nymphs in May and June. Professional barrier spray applied to the critical yard-ravine interface is the most effective way to interrupt that exposure pathway.</p>

          <h2>Tick Hotspots in Thornhill</h2>
          <ul>
            <li>German Mills Creek ravine corridor (Markham portion of Thornhill)</li>
            <li>Pomona Mills Park naturalized sections and ravine edges</li>
            <li>Royal Orchard rear-lot ravine boundaries</li>
            <li>Aileen-Willowbrook Don River tributary wooded margins</li>
            <li>Commerce Valley naturalized green space and drainage corridor edges</li>
          </ul>

          <h2>Thornhill Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Thornhill Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in Thornhill</h2>
          <p>Many Thornhill homeowners combine tick and mosquito control in the same visit. See our <Link href="/thornhill-mosquito-control" className="text-brand-700 hover:underline">Thornhill mosquito control service</Link>.</p>

          <h2>Related Tick Control Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            {TICK_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Spray in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protect your family from Lyme disease. No contracts, guaranteed results." variant="dark" />
    </>
  )
}
