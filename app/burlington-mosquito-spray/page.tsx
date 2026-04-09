import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Spray Burlington | BuzzSkito – Free Quotes',
  description:
    'Professional mosquito spray and control in Burlington. Serving Alton Village, Millcroft, The Orchard, Roseland, Shoreacres, Aldershot & all Burlington neighbourhoods. Call (289) 216-5030.',
  canonical: '/burlington-mosquito-spray',
})

const CITY = 'Burlington'
const SLUG = '/burlington-mosquito-spray'
const NEIGHBOURHOODS = ['Alton Village','Millcroft','The Orchard','Roseland','Downtown Burlington','Shoreacres','Headon Forest','North Burlington','Palmer','Tyandaga','Brant Hills','Elizabeth Gardens','Aldershot','Mountainside']

const FAQS = [
  {
    question: 'How much does mosquito control cost in Burlington?',
    answer: 'BuzzSkito mosquito control in Burlington starts from $99 per application. Waterfront neighbourhoods and properties near Bronte Creek typically benefit most from the full seasonal package for continuous protection. No contracts. Call (289) 216-5030 for a free Burlington quote.',
  },
  {
    question: 'Why are mosquitoes so bad in Burlington?',
    answer: "Burlington's geography creates mosquito pressure from multiple directions. Burlington Bay and the Lake Ontario shoreline generate waterfront mosquito activity that affects lakeshore and Aldershot properties. Bronte Creek runs north-south through the city's west end, creating a continuous breeding and dispersal corridor through West Oak Trails, Bronte, and River Oaks. The Royal Botanical Gardens — 1,100+ hectares of naturalized land on Burlington's northwest border — sustains large mosquito populations that disperse into adjacent North Burlington and Waterdown neighbourhoods. Newer developments in Alton Village and The Orchard contain stormwater ponds that become active breeding sites each season.",
  },
  {
    question: "Does Burlington's waterfront increase mosquito activity?",
    answer: "Yes. Burlington Bay and the Lake Ontario shoreline provide breeding grounds through shoreline vegetation, and properties near Spencer Smith Park, LaSalle Park, and Aldershot lakeshore are particularly affected. The high humidity along the waterfront also extends evening mosquito activity later into the night compared to inland properties.",
  },
  {
    question: 'Which Burlington neighbourhoods have the most mosquito activity?',
    answer: "Properties near Bronte Creek face the highest consistent pressure — particularly Bronte, West Oak Trails, and River Oaks. Shoreacres and Roseland lakeshore properties experience activity from the waterfront and mature tree canopy. Alton Village and Millcroft homeowners encounter pond-driven pressure from stormwater infrastructure in their developments. North Burlington properties near the Royal Botanical Gardens boundary have elevated mosquito activity from the naturalized RBG lands.",
  },
  {
    question: 'How many treatments does a Burlington home need per season?',
    answer: "We typically recommend 4 treatments from May through September, spaced 21–28 days apart. Properties adjacent to Bronte Creek, Burlington Bay, or the RBG boundary may benefit from 5 treatments given the sustained pressure from these natural features. Our technician will assess your property and recommend accordingly.",
  },
  {
    question: "Is BuzzSkito's mosquito spray safe for Burlington's older mature-tree neighbourhoods?",
    answer: "Yes. Our water-based, Health Canada–approved formula is safe for application around mature trees, established gardens, and native plant landscaping. The product targets resting surfaces — leaf undersides and shrub foliage — not tree trunks or bare soil. After 30 minutes of drying time, the treated area is safe for children, pets, and pollinators.",
  },
  {
    question: 'Does BuzzSkito serve all Burlington neighbourhoods?',
    answer: "Yes. We serve all Burlington communities including Alton Village, Millcroft, The Orchard, Roseland, Shoreacres, Headon Forest, North Burlington, Palmer, Tyandaga, Brant Hills, Aldershot, and Downtown Burlington. Call (289) 216-5030 to confirm availability at your address.",
  },
  {
    question: 'Does BuzzSkito also provide tick control in Burlington?',
    answer: "Yes. Burlington's wooded greenbelt corridors, Bronte Creek Provincial Park, and Royal Botanical Gardens are significant blacklegged tick habitat. Many Burlington homeowners bundle mosquito and tick treatments for complete yard protection. See our Burlington tick control service or ask about bundle pricing when you call.",
  },
]

export default function BurlingtonMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Spray ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/burlington-mosquito-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Spray in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Burlington's waterfront, Bronte Creek, and greenbelt corridors create active mosquito conditions all summer. Take back your backyard with BuzzSkito's professional barrier spray — Health Canada–approved, 30-day protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Rain-Back Guarantee</span>
          <span>✓ 5-Star Rated · 126 Reviews</span>
        </div>
      </section>

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Mosquito Control Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional mosquito control from <strong className="text-brand-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Take Back Your Burlington Backyard</h2>
          <p>Burlington's combination of waterfront access, mature tree canopy in established neighbourhoods like Roseland and Shoreacres, and newer developments with stormwater ponds creates one of the GTA's more complex mosquito environments. <strong>Bronte Creek Provincial Park</strong> borders Burlington's west end and generates significant natural mosquito pressure that disperses into Bronte, West Oak Trails, and River Oaks. <strong>Burlington Bay</strong> and the Lake Ontario waterfront create early-season pressure along the lakeshore. The <strong>Royal Botanical Gardens</strong> — 1,100+ hectares of naturalized land on Burlington's northwest boundary — sustains active mosquito populations that affect North Burlington and Waterdown neighbourhoods throughout the season.</p>
          <p>BuzzSkito treats Burlington properties of all sizes — from compact Alton Village townhomes to larger estate lots in Shoreacres and Roseland. Our no-contract approach means you can book individual treatments or a full season program based on your property's needs and exposure level.</p>

          <h2>Mosquito Pressure Zones by Burlington Neighbourhood</h2>
          <h3>Bronte, West Oak Trails &amp; River Oaks</h3>
          <p>These west Burlington neighbourhoods face the highest mosquito activity due to proximity to Bronte Creek Provincial Park and the Bronte Creek valley. Properties within 500 metres of the creek experience consistent season-long pressure.</p>

          <h3>Roseland, Shoreacres &amp; Lakeshore</h3>
          <p>Mature lakeshore neighbourhoods benefit from lake breezes but the dense tree canopy, established gardens, and proximity to Burlington Bay create significant daytime resting habitat. Evening mosquito activity is elevated near the waterfront throughout the season.</p>

          <h3>Alton Village, Millcroft &amp; The Orchard</h3>
          <p>North Burlington's newer developments contain stormwater management ponds that become active mosquito breeding sites from May through September. First-season homeowners in these areas frequently report unexpected mosquito pressure from these engineered water features.</p>

          <h3>North Burlington &amp; Waterdown (RBG border)</h3>
          <p>Properties adjacent to or within 600 metres of Royal Botanical Gardens lands experience elevated mosquito pressure from the naturalized wetlands and mature vegetation within the RBG boundaries.</p>

          <h2>Burlington Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>Also Providing Tick Control in Burlington</h2>
          <p>Burlington's wooded greenbelt corridors and Escarpment trails are significant tick habitat. See our <Link href="/burlington-tick-spray" className="text-brand-700 hover:underline">Burlington tick control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control: What Actually Works</Link></li>
            <li><Link href="/blog/mosquito-tick-control-hamilton-burlington" className="text-brand-700 hover:underline">Hamilton &amp; Burlington Mosquito &amp; Tick Control Guide</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – {CITY} Mosquito Spray</h2>
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

      <CTASection heading={`Get a Free Mosquito Spray Quote in ${CITY}`} subtext="No contracts. Guaranteed results. Book your Burlington treatment today." />
    </>
  )
}
