import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Woodbridge | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Woodbridge. Boyd Conservation Area and Humber River valley are established blacklegged tick habitat. Serving Islington Woods, Pine Valley, Sonoma Heights & all Woodbridge. Call (289) 216-5030.',
  canonical: '/woodbridge-tick-spray',
})

const CITY = 'Woodbridge'
const NEIGHBOURHOODS = ['Islington Woods','Weston Downs','Pine Valley','Sonoma Heights','Vellore Village','East Woodbridge']
const FAQS = [
  {
    question: 'Which Woodbridge areas have the highest tick risk?',
    answer: 'Properties in Islington Woods and Pine Valley that back onto Boyd Conservation Area or the Humber River valley have the highest tick exposure risk in Woodbridge. York Region confirms tick presence throughout the Boyd-Humber corridor annually. East Woodbridge and Weston Downs also face risk from Humber valley wildlife corridors that carry ticks beyond the immediate conservation area boundaries.',
  },
  {
    question: 'Is Boyd Conservation Area a confirmed tick habitat?',
    answer: 'Yes. Boyd Conservation Area is well-documented blacklegged tick habitat, and it sits directly within Woodbridge\'s residential boundaries. Properties that have rear yards adjacent to Boyd\'s forested edges, meadow margins, or the Humber River banks face direct annual tick exposure. York Region Public Health\'s tick monitoring program covers this area.',
  },
  {
    question: 'Can ticks from Boyd Conservation Area reach properties that don\'t directly back onto it?',
    answer: 'Yes. Deer regularly leave Boyd Conservation Area and move through residential Woodbridge streets and yards, dropping ticks as they travel. A property several streets away from the conservation area boundary can still have ticks introduced by deer, raccoons, or foxes moving through the neighbourhood. Professional barrier spray creates a protective zone around your property that kills ticks before they can reach your family.',
  },
]

export default function WoodbridgeTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/woodbridge-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/woodbridge-tick-spray' }])) }} />
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
            Boyd Conservation Area and the Humber River valley running through Woodbridge are established blacklegged tick habitat. Properties in Islington Woods and Pine Valley face the highest annual tick exposure. BuzzSkito provides professional protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Tick Spray Is Crucial in Woodbridge</h2>
          <p>Woodbridge has a unique tick challenge: Boyd Conservation Area sits embedded within the community, not on its fringes. This means large areas of established residential Woodbridge are directly adjacent to confirmed blacklegged tick habitat. York Region Public Health confirms tick presence throughout the Boyd Conservation Area and Humber River valley corridor every season, and properties that back onto either of these natural areas face the most direct annual exposure.</p>
          <p>The Humber River valley is a continuous wildlife corridor that carries ticks from rural areas north of Vaughan all the way through Woodbridge and into Etobicoke. Islington Woods and Pine Valley neighbourhoods have mature forest canopy and natural lot edges that provide ideal tick habitat right in the backyard. Weston Downs and Sonoma Heights also see wildlife movement from the Humber valley. Professional barrier spray applied to your property's lawn edges, garden borders, and naturalized zones is the most effective way to interrupt tick exposure before it reaches your family.</p>

          <h2>Tick Hotspots in Woodbridge</h2>
          <ul>
            <li>Boyd Conservation Area — confirmed blacklegged tick habitat directly within Woodbridge</li>
            <li>Humber River valley corridor through Islington Woods and Weston Downs</li>
            <li>Pine Valley forested lot edges and ravine margins</li>
            <li>East Woodbridge Humber valley tributary areas</li>
            <li>Sonoma Heights naturalized green space edges</li>
          </ul>

          <h2>Woodbridge Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Woodbridge Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 90 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in Woodbridge</h2>
          <p>Many Woodbridge homeowners combine tick and mosquito control in the same visit. See our <Link href="/woodbridge-mosquito-control" className="text-brand-700 hover:underline">Woodbridge mosquito control service</Link>.</p>

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
