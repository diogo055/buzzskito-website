import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Milton | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Milton. Rattlesnake Point, Crawford Lake, Kelso Conservation Area, and Sixteen Mile Creek are well-documented blacklegged tick habitats. Serving all Milton neighbourhoods. Call (289) 216-5030.',
  canonical: '/milton-tick-spray',
})

const CITY = 'Milton'
const NEIGHBOURHOODS = ['Bronte Meadows','Clarke','Coates','Dempsey','Dorset Park','Ford','Harrison','Hawthorne Village','Scott','Timberlea']
const FAQS = [
  {
    question: 'How much does tick spray cost in Milton?',
    answer: 'Tick spray in Milton starts from $99 per application. Properties near Kelso Conservation Area, Rattlesnake Point, or Bronte Creek benefit most from both spring and fall applications. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Are the Niagara Escarpment parks near Milton real tick risks?',
    answer: 'Yes — Rattlesnake Point, Crawford Lake, and Mount Nemo are all well-documented blacklegged tick habitats confirmed by Halton Region Public Health. These parks feature the cool, moist, leafy forest floor conditions that blacklegged ticks require. The escarpment trail system connects these parks in a continuous corridor, creating tick habitat that extends toward residential Milton properties in neighbouring communities.',
  },
  {
    question: 'My Milton home is in a newer neighbourhood — do I still need tick spray?',
    answer: 'New build neighbourhoods in Milton were often built on land adjacent to natural features like Sixteen Mile Creek or conservation corridors. Even in newer developments, wildlife moves quickly into residential areas as green spaces mature. Kelso Conservation Area is within easy reach of several Milton neighbourhoods, and Sixteen Mile Creek valley provides a direct wildlife corridor. Tick spray is relevant for any Milton property near green space, whether the home is new or established.',
  },
  {
    question: 'When is tick season in Milton?',
    answer: 'Ticks in Milton are active from early April through November — they do not go dormant in mild fall and spring weather. The peak danger window for nymph ticks (the stage most responsible for Lyme disease transmission) is May through July. Adult ticks are most active in the fall. Halton Region Public Health recommends professional tick control as part of a comprehensive approach to protecting families near the Escarpment corridor.',
  },
]

export default function MiltonTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/milton-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/milton-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/milton-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Milton's Niagara Escarpment trail system — Rattlesnake Point, Crawford Lake, and Mount Nemo — is well-documented blacklegged tick habitat. Halton Region recommends tick prevention for adjacent properties. BuzzSkito provides professional protection.
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
          <h2>Why Tick Spray Is Crucial in Milton</h2>
          <p>Milton sits at the foot of the Niagara Escarpment, one of Ontario's most biodiverse UNESCO Biosphere Reserve landscapes — and one of its most documented blacklegged tick corridors. Rattlesnake Point Conservation Area, Crawford Lake Conservation Area, and Mount Nemo are all confirmed tick habitat. Halton Region Public Health recommends tick bite prevention for residents and visitors at all three sites. The forested escarpment face and its approach trails create a continuous zone of tick habitat that pushes toward Milton's residential communities.</p>
          <p>Sixteen Mile Creek valley cuts through Milton and provides a natural wildlife corridor that carries ticks from the escarpment toward neighbourhood edges. Kelso Conservation Area also hosts documented tick activity in its wooded and meadow sections. As Milton has grown rapidly, new subdivisions have been established adjacent to these natural corridors, placing thousands of families in close proximity to tick habitat without necessarily knowing it. Professional barrier spray applied seasonally is the most reliable way to protect your household.</p>

          <h2>Tick Hotspots in Milton</h2>
          <ul>
            <li>Rattlesnake Point Conservation Area — confirmed blacklegged tick habitat</li>
            <li>Crawford Lake Conservation Area forest edges</li>
            <li>Mount Nemo Conservation Area trail system</li>
            <li>Sixteen Mile Creek valley corridor through Milton</li>
            <li>Kelso Conservation Area wooded and meadow sections</li>
          </ul>

          <h2>Milton Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Milton Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in Milton</h2>
          <p>Many Milton homeowners combine tick and mosquito control in the same visit. See our <Link href="/milton-mosquito-control" className="text-brand-700 hover:underline">Milton mosquito control service</Link>.</p>

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
