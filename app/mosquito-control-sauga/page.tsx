import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Mississauga | BuzzSkito – Free Quotes',
  description:
    'Professional mosquito control spray in Mississauga. Serving Port Credit, Meadowvale, Streetsville, Erin Mills, Clarkson & all Mississauga neighbourhoods. Call (289) 216-5030.',
  canonical: '/mosquito-control-sauga',
})

const CITY = 'Mississauga'
const NEIGHBOURHOODS = ['Port Credit','Meadowvale','Streetsville','Malton','Lorne Park','Cooksville','Lakeview','Erin Mills','Clarkson','Churchill Meadows','Mineola','Applewood']
const FAQS = [
  { question: 'Is mosquito control safe near Mississauga\'s waterways?', answer: 'Yes. Our Health Canada–approved, water-based formula is safe for use near Credit River, Lake Ontario shorelines, and Rattray Marsh Conservation Area. Once dried (30 minutes), the product does not harm waterways, fish, or pollinators when applied per label instructions.' },
  { question: 'When does mosquito season start in Mississauga?', answer: 'Mosquito activity in Mississauga typically begins in late April and peaks from May through July. Neighbourhoods near the Credit River, Lake Ontario, and Rattray Marsh tend to experience higher activity earlier in the season.' },
  { question: 'How many treatments do Mississauga homeowners need?', answer: 'We recommend 5 seasonal treatments from May through September, spaced approximately 28 days apart, for continuous protection throughout Mississauga\'s peak mosquito season.' },
]

export default function MossaugaMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: '/mosquito-control-sauga', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: `${CITY}`, url: '/mosquito-control-sauga' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Professional barrier spray for Mississauga homes. From Port Credit's waterfront to Meadowvale's conservation area — we protect every neighbourhood from mosquitoes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Control Matters in Mississauga</h2>
          <p>Mississauga's natural landscape — the Credit River corridor, Lake Ontario shoreline, Rattray Marsh Conservation Area, and countless neighbourhood ponds — creates ideal conditions for mosquito breeding throughout the season. Neighbourhoods like Port Credit, Clarkson, and Lorne Park, which back onto water features, typically experience the earliest and most intense mosquito pressure each year.</p>
          <p>Professional barrier spray is the most effective tool for Mississauga homeowners to reclaim their backyards. BuzzSkito applies a residual mosquito treatment to all vegetation, shrubs, and leaf surfaces on your property, eliminating mosquitoes on contact and keeping new ones away for up to 30 days.</p>

          <h2>Mississauga Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Mississauga communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our Mississauga Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Property assessment</strong> — We identify breeding areas and high-risk zones specific to your Mississauga property.</li>
            <li><strong>Barrier application</strong> — Full treatment of vegetation, shrubs, garden borders, and fence lines.</li>
            <li><strong>Standing water guidance</strong> — We'll identify any standing water issues contributing to mosquito pressure on your property.</li>
            <li><strong>30-day protection</strong> — Residual formula keeps working between visits.</li>
          </ul>

          <h2>Also Providing Tick Control in Mississauga</h2>
          <p>Did you know Mississauga's ravines, conservation areas, and wooded lots also harbour blacklegged ticks? Ask about our <Link href="/mississauga-tick-spray" className="text-brand-700 hover:underline">Mississauga tick control service</Link> — many homeowners bundle both treatments for complete yard protection.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0,2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {CITY}</h2>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Mississauga property from mosquitoes this season. No contracts." />
    </>
  )
}
