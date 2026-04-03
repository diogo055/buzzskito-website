import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray King City | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in King City. King Township sits on the Oak Ridges Moraine and reports some of the highest blacklegged tick activity in York Region. Serving King City, Nobleton, Schomberg & all King Township. Call (289) 216-5030.',
  canonical: '/king-city-tick-spray',
})

const CITY = 'King City'
const NEIGHBOURHOODS = ['King City village','Nobleton','Schomberg','King Township','Kettleby']
const FAQS = [
  {
    question: 'Why is King Township considered one of the highest-risk tick areas in York Region?',
    answer: 'King Township sits directly on the Oak Ridges Moraine, which is one of Ontario\'s most significant blacklegged tick habitats. Beyond the Moraine, the township has abundant rural land with agricultural-to-forest edge transitions, Humber River tributaries, and the Schomberg River area — all of which provide ideal tick habitat. The combination of large white-tailed deer populations and these varied natural habitats drives consistently high tick activity throughout King Township, which York Region Public Health regularly flags in its advisories.',
  },
  {
    question: 'I have a large property in King City — does that increase my tick risk?',
    answer: 'Yes. Larger rural and estate properties in King Township typically have more forest-lawn edge, more leaf litter accumulation, and more deer traffic than urban lots. The longer the boundary between your maintained lawn and natural areas, the more tick questing habitat you have. BuzzSkito tailors its barrier spray application specifically to these high-risk transition zones, which is exactly where ticks concentrate waiting for a host.',
  },
  {
    question: 'Are ticks active year-round in King City?',
    answer: 'Ticks are active in King City from early April through November or even into December during mild years. The nymph stage (May through July) is the most dangerous for Lyme disease transmission — nymphs are tiny and easy to miss. Adult ticks are active in spring and again in the fall. York Region Public Health advises residents across King Township to conduct regular tick checks from spring through late fall and to consider professional yard treatment.',
  },
]

export default function KingCityTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/king-city-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/king-city-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            King Township sits directly on the Oak Ridges Moraine and consistently reports some of the highest blacklegged tick activity in York Region. BuzzSkito provides professional tick spray to protect King City, Nobleton, and Schomberg properties from Lyme disease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Tick Spray Is Crucial in King City</h2>
          <p>King Township has a tick problem that is both larger in scale and more consistent than most GTA communities. The township sits squarely on the Oak Ridges Moraine, the same glacially formed ridge that drives high tick activity throughout York and Durham Regions. But King's situation is amplified by the nature of its landscape: vast agricultural properties with wooded margins, forest fragments, Humber River tributaries, and the Schomberg River corridor all create a patchwork of ideal blacklegged tick habitats across hundreds of square kilometres.</p>
          <p>York Region Public Health issues regular tick advisories for King Township and its communities — King City village, Nobleton, Schomberg, and Kettleby. The deer population across King is substantial, providing the primary adult tick host that spreads ticks across the landscape. Estate and rural properties with multiple forest edges, woodlots, or creek frontage can have very high tick pressure throughout the full questing season. Professional barrier spray applied to the lawn-forest interface is the most effective tool for reducing household exposure risk.</p>

          <h2>Tick Hotspots in King City</h2>
          <ul>
            <li>Oak Ridges Moraine forested corridors throughout King Township</li>
            <li>Humber River tributaries and riparian edges</li>
            <li>Schomberg River area wooded margins</li>
            <li>Agricultural woodlot edges throughout the township</li>
            <li>Rural estate property forest-lawn transition zones near Kettleby and Nobleton</li>
          </ul>

          <h2>King City Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our King City Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 90 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in King City</h2>
          <p>Many King City homeowners combine tick and mosquito control in the same visit. See our <Link href="/king-city-mosquito-control" className="text-brand-700 hover:underline">King City mosquito control service</Link>.</p>

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
