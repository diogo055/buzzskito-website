import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Caledon | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Caledon. Oak Ridges Moraine and Forks of the Credit are among Ontario\'s highest tick activity zones. Serving Bolton, Caledon East, Palgrave, Alton & all Caledon. Call (289) 216-5030.',
  canonical: '/caledon-tick-spray',
})

const CITY = 'Caledon'
const NEIGHBOURHOODS = ['Bolton','Caledon East','Caledon Village','Palgrave','Inglewood','Alton','Cheltenham','Belfountain']
const FAQS = [
  {
    question: 'How much does tick spray cost in Caledon?',
    answer: 'Tick spray in Caledon starts from $99 per application. A 2-treatment seasonal program (spring + fall) starts from $179. Given Caledon\'s high tick activity near Forks of the Credit Provincial Park, the Bruce Trail, and the Niagara Escarpment, most properties benefit from both spring and fall treatments. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Why does Caledon have some of the highest tick activity in the GTA?',
    answer: 'Caledon sits at the intersection of two major natural systems: the Oak Ridges Moraine and the Credit River watershed, with the Humber River headwaters also running through the township. These aren\'t isolated pockets — they are large, continuous forested and agricultural edge habitats that support very high deer populations. More deer means more tick hosts, which means more ticks. Peel Region Public Health issues annual tick advisories specifically calling out Caledon as a high-risk area.',
  },
  {
    question: 'Do I need tick spray even on a rural Caledon property with few neighbours?',
    answer: 'Rural properties are actually at higher risk, not lower. Agricultural field edges, woodlot margins, creek corridors, and fence rows are exactly where blacklegged ticks concentrate. Deer cross rural Caledon properties daily. If you have a lawn that meets any naturalized area — a woodlot, a meadow, a stream bank — tick spray for that transition zone is essential to reduce your family\'s exposure.',
  },
  {
    question: 'Is Forks of the Credit Provincial Park near my Caledon property a tick risk?',
    answer: 'Yes. Forks of the Credit Provincial Park is documented tick habitat — any property within several kilometres of the park, particularly those with deer-accessible yard space, faces annual tick pressure. The Caledon Trailway also passes through tick-active areas. BuzzSkito recommends properties near the park and trailway schedule a spring treatment in late May and a follow-up in August.',
  },
]

export default function CaledonTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/caledon-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/caledon-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/caledon-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Caledon sits at the heart of the Oak Ridges Moraine and has among the highest confirmed blacklegged tick activity rates in the GTA. Peel Region Public Health issues tick advisories for Caledon annually. BuzzSkito protects your property from Lyme disease.
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
            <p className="text-gray-600 text-sm mt-0.5">Single treatment from <strong className="text-amber-700">$99</strong> · 2-treatment seasonal program from <strong className="text-amber-700">$179</strong> · No contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Tick Spray Is Crucial in Caledon</h2>
          <p>Caledon has a tick problem that most GTA communities don't: it sits directly on the Oak Ridges Moraine, one of Ontario's premier blacklegged tick habitats, while simultaneously hosting the Humber River headwaters and the upper Credit River watershed. This combination of moraine topography, mixed forest, agricultural edges, and high deer density creates conditions where blacklegged tick activity is not just present — it is among the highest recorded anywhere in the GTA region. Peel Region Public Health issues dedicated tick advisories for Caledon every single year.</p>
          <p>Forks of the Credit Provincial Park, the Caledon Trailway, and the Humber River headwaters corridors all run through or adjacent to rural and village properties throughout the township. Unlike more urbanized areas where tick habitat is confined to ravines, in Caledon the entire landscape can be tick habitat. Field edges, woodlot borders, and creek banks that run alongside residential properties in Bolton, Palgrave, and Caledon East are all active tick zones from April through November.</p>

          <h2>Tick Hotspots in Caledon</h2>
          <ul>
            <li>Forks of the Credit Provincial Park and surrounding rural edges</li>
            <li>Oak Ridges Moraine forested corridors throughout the township</li>
            <li>Humber River headwaters and tributary banks</li>
            <li>Caledon Trailway wooded sections</li>
            <li>Agricultural field edges and woodlot margins throughout Bolton, Palgrave, and Inglewood</li>
          </ul>

          <h2>Caledon Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Caledon Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in Caledon</h2>
          <p>Many Caledon homeowners combine tick and mosquito control in the same visit. See our <Link href="/caledon-mosquito-control" className="text-brand-700 hover:underline">Caledon mosquito control service</Link>.</p>

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
