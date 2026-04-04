import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Toronto | BuzzSkito – Free Quotes',
  description:
    'Professional mosquito control spray in Toronto. Serving High Park, Rosedale, Forest Hill, Etobicoke, North York, Scarborough, The Beaches & all Toronto neighbourhoods. Call (289) 216-5030.',
  canonical: '/toronto-mosquito-control',
})

const CITY = 'Toronto'
const SLUG = '/toronto-mosquito-control'
const NEIGHBOURHOODS = ['High Park','East York','Don Mills','The Beaches','Scarborough','North York','Etobicoke','Leslieville','Rosedale','Forest Hill','Leaside','Willowdale','Lawrence Park','York Mills']

const FAQS = [
  {
    question: 'Why does Toronto have such a bad mosquito problem?',
    answer: "Toronto's extensive ravine system — the largest urban ravine network in North America — creates exceptional mosquito breeding conditions across the city. The Don River Valley, Humber River, and Highland Creek corridors provide the standing water, dense vegetation, and humidity that mosquitoes need to thrive. Neighbourhoods backing onto ravines experience the most intense pressure, but mosquitoes travel up to 3 km from breeding sites — which means most Toronto properties have some level of exposure.",
  },
  {
    question: 'Which Toronto neighbourhoods have the worst mosquito problems?',
    answer: "Ravine-adjacent neighbourhoods consistently have the highest mosquito activity: Rosedale and Forest Hill (Don Valley ravines), Leaside and East York (Don Valley, Taylor Creek), Don Mills (Don Valley and Flemingdon Park area), The Beaches (Eastern Ravine, Ashbridge's Bay), Etobicoke and Humber Valley (Humber River), High Park area (Humber River, Grenadier Pond). Willowdale and North York properties near the Don River headwaters also experience consistent pressure.",
  },
  {
    question: "Does barrier spray work against mosquitoes coming from Toronto's ravines?",
    answer: "Yes, though it works by creating a barrier on your property rather than eliminating the source in the ravine. Our treatment targets the vegetation on your lot — especially the perimeter and any shrubs adjacent to the ravine edge — where mosquitoes that fly in from the ravine will rest before moving further into your yard. This breaks the cycle between the ravine source and your outdoor living areas.",
  },
  {
    question: 'How many treatments does my Toronto property need per season?',
    answer: "For ravine-adjacent Toronto properties, we recommend 4–5 treatments from May through September, spaced 21–28 days apart. Properties in less-exposed parts of the city may be well-protected with 3–4 visits. Our technician assesses your specific situation — ravine proximity, landscaping density, and any on-property water features — to recommend the right schedule.",
  },
  {
    question: "Is mosquito spray safe near Toronto's urban gardens and pollinators?",
    answer: "Yes. Our Health Canada–approved formula is applied to resting surfaces — the undersides of leaves and shrubs where mosquitoes rest — rather than directly to flowers or open areas. Once dried (approximately 30 minutes), it does not harm pollinators foraging on treated vegetation. We avoid direct application to open blooms and can discuss any specific garden concerns before treatment.",
  },
  {
    question: 'Do you serve all Toronto neighbourhoods?',
    answer: "Yes. We serve all Toronto neighbourhoods including High Park, Etobicoke, North York, Scarborough, East York, The Beaches, Rosedale, Forest Hill, Leaside, Don Mills, Willowdale, Lawrence Park, and more. Call (289) 216-5030 to confirm service at your specific address.",
  },
  {
    question: 'What happens if it rains right after my Toronto treatment?',
    answer: "Our formula bonds to leaf surfaces as it dries. If significant rain falls within one hour of application — before the product has fully cured — we return and re-treat your property at no charge. This rain-back guarantee applies to all Toronto service visits.",
  },
  {
    question: 'Does BuzzSkito also do tick control in Toronto?',
    answer: "Yes. Toronto's ravine system harbours blacklegged ticks — Toronto Public Health has confirmed established tick populations in High Park, the Don Valley, and other green corridors. Many Toronto homeowners bundle mosquito and tick treatments for complete yard protection. See our Toronto tick control service for details.",
  },
]

export default function TorontoMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
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
            Toronto's ravines and green corridors make it one of the GTA's highest-risk cities for mosquitoes. BuzzSkito provides effective barrier spray for Toronto homeowners — safe, lasting protection for your yard all season.
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

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Toronto Has a Serious Mosquito Problem</h2>
          <p>Toronto's ravine system — the largest urban ravine network in North America — creates exceptional mosquito breeding conditions across the entire city. The <strong>Don River Valley</strong>, <strong>Humber River</strong>, and <strong>Highland Creek</strong> corridors provide the standing water, dense vegetation, and humidity that mosquitoes need throughout the season. Mosquitoes travel up to 3 km from breeding sites, meaning even Toronto properties well away from ravines experience dispersal pressure from the network.</p>
          <p>Beyond ravines, Toronto-specific factors compound the problem: mature tree canopy providing dense daytime resting habitat, irregular terrain creating standing water pockets after rain, urban heat island effects extending the active season, and the sheer density of vegetation in established neighbourhoods like Rosedale, Forest Hill, and Leaside.</p>

          <h2>Mosquito Pressure Zones by Toronto Neighbourhood</h2>
          <h3>Rosedale, Forest Hill &amp; Lawrence Park</h3>
          <p>Some of Toronto's most prestigious addresses are also its most mosquito-affected — because ravine adjacency drives both real estate value and mosquito activity. The Don Valley ravines bordering Rosedale and Forest Hill sustain intense mosquito populations from May through August.</p>

          <h3>Leaside &amp; East York</h3>
          <p>Taylor Creek Park and the Don Valley system create significant pressure for Leaside and East York properties, particularly those backing onto any ravine trail or parkland edge.</p>

          <h3>The Beaches &amp; Eastern Toronto</h3>
          <p>Eastern Ravine, Ashbridge's Bay, and the Lake Ontario shoreline create mosquito pressure from multiple directions for Beaches properties. The high-humidity microclimate near the lake extends evening activity into late season.</p>

          <h3>Etobicoke &amp; Humber Valley</h3>
          <p>The Humber River creates a continuous mosquito corridor from Bolton to the lake. Etobicoke and Islington properties near Humber Valley Park, Centennial Park, and the Humber floodplain experience consistent season-long pressure.</p>

          <h3>North York, Willowdale &amp; Don Mills</h3>
          <p>Don Valley ravines, Serena Gundy Park, and the many smaller ravines running through North York create active mosquito habitat from May through September for properties in this area.</p>

          <h2>Toronto Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>What's Included in Our Toronto Mosquito Treatment</h2>
          <ul>
            <li>Complete barrier spray of all vegetation and shrubs up to 10 feet high</li>
            <li>Targeted treatment of ravine-adjacent property edges and fence lines</li>
            <li>Up to 30 days of residual protection per visit</li>
            <li>Health Canada–approved formula — safe for kids and pets after 30 min</li>
            <li>Free reapplication if mosquitoes return within the protection window</li>
          </ul>

          <h2>Also Providing Tick Control in Toronto</h2>
          <p>Toronto's ravine system also harbours blacklegged ticks, which carry Lyme disease. Ask about our <Link href="/toronto-tick-spray" className="text-brand-700 hover:underline">Toronto tick control service</Link>.</p>

          <h2>Related Mosquito Control Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Toronto home from mosquitoes this season. No contracts." />
    </>
  )
}
