import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Oakville | BuzzSkito – Free Quotes',
  description:
    'Professional mosquito control service in Oakville. Serving Glen Abbey, Bronte, Joshua Creek, West Oak Trails, Old Oakville & all Oakville neighbourhoods. Up to 30-day protection. Call (289) 216-5030.',
  canonical: '/oakville-mosquito-control',
})

const CITY = 'Oakville'
const SLUG = '/oakville-mosquito-control'
const NEIGHBOURHOODS = ['Bronte','Glen Abbey','Joshua Creek','West Oak Trails','Clearview','Palermo','River Oaks','Kerr Village','Old Oakville','Uptown Core','North Oakville','Iroquois Ridge']

const FAQS = [
  {
    question: 'How much does mosquito control cost in Oakville?',
    answer: 'BuzzSkito mosquito treatments in Oakville start from $99 per application. Properties near Bronte Creek, the Sixteen Mile Creek, or the Lake Ontario waterfront typically need the full seasonal program for continuous protection. No contracts. Call (289) 216-5030 for a free Oakville quote.',
  },
  {
    question: 'Why is mosquito pressure high in Oakville despite its upscale setting?',
    answer: "Oakville's beautifully landscaped setting is precisely what drives its mosquito challenge. Bronte Creek Provincial Park borders the west end of the city and generates significant natural mosquito populations that spill into adjacent residential areas. The 16 Mile Creek corridor runs through the heart of Oakville. Rain gardens, retention ponds, and mature ornamental landscaping — common in Oakville's established neighbourhoods — all provide daytime mosquito resting habitat. Even properties with no standing water on their lot can experience significant mosquito pressure from adjacent natural features.",
  },
  {
    question: 'Which Oakville neighbourhoods have the highest mosquito activity?',
    answer: "Bronte and West Oak Trails face the highest pressure due to direct adjacency to Bronte Creek Provincial Park and the Bronte Creek valley. Glen Abbey properties backing onto the golf course ravines and creek features also have significant activity. River Oaks, adjacent to Bronte Creek, faces consistent pressure. Old Oakville and lakeshore neighbourhoods experience mosquitoes from Lake Ontario's waterfront fringe and the mature tree canopy common to older streets.",
  },
  {
    question: 'How many mosquito treatments does an Oakville property need per season?',
    answer: "We typically recommend 4 treatments from May through September for Oakville properties, spaced 21–28 days apart. Properties directly adjacent to Bronte Creek, 16 Mile Creek, or any significant wooded ravine may benefit from 5 treatments given the sustained pressure from these natural features. Our technician will assess your specific property and recommend the right schedule based on your exposure.",
  },
  {
    question: "Is barrier spray safe near Oakville's creeks and Bronte Creek Provincial Park?",
    answer: "Yes. We apply the barrier treatment to your own property's vegetation — not to any parkland, creek, or conservation land. Our Health Canada–approved formula is designed for residential use adjacent to natural features. Once dry (approximately 30 minutes), the product does not leach into waterways. We maintain safe buffer zones around any riparian areas at your property line.",
  },
  {
    question: 'Does BuzzSkito serve all Oakville neighbourhoods?',
    answer: "Yes. We serve all Oakville communities including Glen Abbey, Joshua Creek, West Oak Trails, Bronte, River Oaks, Clearview, Palermo, Kerr Village, Old Oakville, Uptown Core, Iroquois Ridge, and North Oakville. Call (289) 216-5030 to confirm availability at your specific address and to schedule a free quote.",
  },
  {
    question: 'How does mosquito barrier spray actually work?',
    answer: "Our technicians use a backpack precision sprayer to apply a residual formula to all vegetation on your property — shrubs, garden beds, the underside of leaves, fence lines, deck undersides, and woodpile areas. These are the sites where adult mosquitoes rest during the heat of the day. The formula kills on contact and provides a residual repellent effect that prevents new mosquitoes from settling on treated vegetation for up to 30 days between visits.",
  },
  {
    question: 'What happens if it rains after my Oakville treatment?',
    answer: "Our formula bonds to leaf surfaces as it dries. If significant rainfall occurs within one hour of application — before the product has fully cured — we return and re-treat at no charge. This rain-back guarantee applies to all Oakville service visits.",
  },
  {
    question: 'Does BuzzSkito also provide tick control in Oakville?',
    answer: "Yes. Bronte Creek and Oakville's ravines are significant blacklegged tick habitat. Many Oakville homeowners bundle mosquito and tick treatments for complete yard protection. See our Oakville tick control service or ask about bundle pricing when you call.",
  },
]

export default function OakvilleMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/oakville-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Oakville's lakefront properties, Bronte Creek Provincial Park, and rain-garden landscaping create persistent mosquito pressure. BuzzSkito provides professional barrier spray so Oakville families can enjoy their backyards all season.
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
          <h2>Mosquito Control for Oakville Homes</h2>
          <p>Oakville is one of the GTA's most desirable communities — but its picturesque setting along Lake Ontario and Bronte Creek creates persistent mosquito challenges. <strong>Bronte Creek Provincial Park</strong> — 1,300+ hectares of naturalized land bordering Oakville's west end — generates significant mosquito populations each season that disperse into adjacent residential properties. The <strong>16 Mile Creek corridor</strong> runs through central Oakville from north to south, and the <strong>Bronte Creek</strong> system cuts through the west side, both sustaining breeding habitat throughout the season.</p>
          <p>Oakville's landscape character — mature tree canopy in older neighbourhoods, ornamental rain gardens, and the dense shrub borders common in established properties — provides abundant daytime resting habitat for adult mosquitoes that have bred in nearby water features. BuzzSkito's barrier spray is designed to address this resting habitat directly.</p>

          <h2>Mosquito Pressure Zones by Oakville Neighbourhood</h2>
          <h3>Bronte</h3>
          <p>Bronte faces the highest mosquito pressure in Oakville due to proximity to Bronte Creek Provincial Park and Bronte Harbour. Lake Ontario waterfront properties also experience mosquitoes from the shoreline vegetation fringe during peak season.</p>

          <h3>Glen Abbey</h3>
          <p>Glen Abbey's ravine system, creek features along the golf course, and the Sixteen Mile Creek corridor generate consistent mosquito activity. Properties backing onto any ravine or green space in Glen Abbey experience elevated pressure throughout May–August.</p>

          <h3>West Oak Trails and River Oaks</h3>
          <p>Both neighbourhoods are adjacent to Bronte Creek, which creates consistent breeding habitat and mosquito dispersal into residential lots along the creek corridor. Evening mosquito activity is noticeably higher within 2–3 blocks of the creek.</p>

          <h3>Old Oakville and Lakeshore</h3>
          <p>Older lakeshore neighbourhoods benefit from Lake Ontario breezes that reduce mosquito activity somewhat, but mature tree canopy and established ornamental plantings provide significant daytime resting habitat. Proximity to waterfront park features creates additional late-day pressure.</p>

          <h2>Oakville Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>Also Providing Tick Control in Oakville</h2>
          <p>Bronte Creek and Oakville's forested ravines are significant tick habitat. See our <Link href="/oakville-tick-spray" className="text-brand-700 hover:underline">Oakville tick control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Oakville property from mosquitoes this season. No contracts." />
    </>
  )
}
