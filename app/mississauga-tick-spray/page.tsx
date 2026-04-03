import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Mississauga | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Mississauga. Kills ticks at all life stages. Serving Port Credit, Meadowvale, Clarkson, Erin Mills & all Mississauga neighbourhoods. Call (289) 216-5030.',
  canonical: '/mississauga-tick-spray',
})

const CITY = 'Mississauga'
const NEIGHBOURHOODS = ['Port Credit','Meadowvale','Streetsville','Malton','Lorne Park','Cooksville','Lakeview','Erin Mills','Clarkson','Churchill Meadows','Mineola','Applewood']
const FAQS = [
  { question: 'Where are ticks most common in Mississauga?', answer: 'Ticks are concentrated in Mississauga\'s wooded and transitional areas: the Credit River valley and trail system, Rattray Marsh Conservation Area, Erindale Park, Meadowvale Conservation Area, and the forested edges of many neighbourhoods. Properties backing onto these areas have the highest tick exposure risk.' },
  { question: 'How often does Mississauga need tick treatment?', answer: 'BuzzSkito recommends two treatments per season: one in late May or June targeting spring nymphs (the most dangerous stage for Lyme disease transmission), and one in August or September targeting adult fall ticks. Our treatments provide up to 30 days of protection each.' },
  { question: 'Do ticks really carry Lyme disease in Mississauga?', answer: 'Yes. The blacklegged tick (Ixodes scapularis), which transmits Lyme disease, is established in Mississauga\'s Conservation Areas. Ontario public health data shows increasing Lyme disease cases in the GTA. Professional tick control significantly reduces your risk of exposure.' },
]

export default function MississaugaTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/mississauga-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/mississauga-tick-spray' }])) }} />
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
            Mississauga's conservation areas, Credit River trails, and Rattray Marsh are established blacklegged tick habitats. BuzzSkito provides professional tick spray to protect your family from Lyme disease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Tick Spray Is Crucial in Mississauga</h2>
          <p>Blacklegged ticks — the species that transmits Lyme disease — are well established in Mississauga's natural areas. The Credit River valley (from Streetsville through Port Credit), Rattray Marsh, Meadowvale Conservation Area, and Erindale Park are all confirmed tick habitat areas. Properties adjacent to these areas face meaningful annual tick exposure risk.</p>
          <p>Ticks don't fly or jump — they wait at the tips of grasses and shrubs at the edges of lawns and wooded areas, attaching to people and pets as they pass. This means the tick risk zone is usually your own backyard, not the forest. Professional barrier spray applied to your property's high-risk zones is the most effective way to reduce that risk.</p>

          <h2>Tick Hotspots in Mississauga</h2>
          <ul>
            <li>Credit River valley trail system (Streetsville to Port Credit)</li>
            <li>Rattray Marsh Conservation Area (Clarkson)</li>
            <li>Meadowvale Conservation Area and Aquitaine Lake (Meadowvale)</li>
            <li>Erindale Park (Mississauga Valleys)</li>
            <li>Properties backing onto Greenbelt corridors throughout the city</li>
          </ul>

          <h2>Mississauga Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Mississauga Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in Mississauga</h2>
          <p>Many Mississauga homeowners combine tick and mosquito control in the same visit. See our <Link href="/mosquito-control-sauga" className="text-brand-700 hover:underline">Mississauga mosquito control service</Link>.</p>

          <h2>Related Tick Control Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            {TICK_BLOGS.supporting.slice(0,2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
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
