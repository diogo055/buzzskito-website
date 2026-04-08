import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Mississauga | BuzzSkito – Free Quotes',
  description:
    'Professional mosquito control spray in Mississauga. Serving Port Credit, Meadowvale, Streetsville, Erin Mills, Clarkson & all Mississauga neighbourhoods. Health Canada–approved. Call (289) 216-5030.',
  canonical: '/mississauga-mosquito-control',
})

const CITY = 'Mississauga'
const SLUG = '/mississauga-mosquito-control'
const NEIGHBOURHOODS = [
  'Port Credit','Meadowvale','Streetsville','Malton','Lorne Park',
  'Cooksville','Lakeview','Erin Mills','Clarkson','Churchill Meadows',
  'Mineola','Applewood','Hurontario','City Centre','Lisgar',
]

const FAQS = [
  {
    question: 'Why is mosquito pressure so high in Mississauga?',
    answer: "Mississauga's geography creates multiple distinct mosquito pressure zones. The Credit River corridor runs the full length of the city, creating continuous breeding habitat from Streetsville to Port Credit. Rattray Marsh Conservation Area is one of the last remaining lakefront marshes in the western GTA and sustains large mosquito populations each season. Meadowvale Conservation Area, Erindale Park, and the city's many stormwater management ponds all add to the pressure. Neighbourhoods within 500–800 metres of these features consistently experience earlier and more intense mosquito activity.",
  },
  {
    question: 'When does mosquito season start in Mississauga?',
    answer: 'Mosquito activity in Mississauga typically begins in late April when daytime temperatures consistently exceed 10°C. Peak pressure runs from late May through July. Lakeview, Port Credit, and Clarkson — all adjacent to Lake Ontario and Credit River — tend to experience activity earlier than inland neighbourhoods. September usually marks the end of meaningful mosquito activity, though warm falls can extend the season.',
  },
  {
    question: 'How many mosquito treatments does a Mississauga home need per season?',
    answer: 'We recommend 4–5 treatments from May through September, spaced 21–28 days apart for continuous protection. Properties near the Credit River, Rattray Marsh, or any pond or ravine feature will typically benefit from the full 5-treatment program. Properties in drier, less-exposed areas may be well-protected with 4 visits. Our technicians assess your specific property and recommend a schedule based on your actual risk factors.',
  },
  {
    question: "Is BuzzSkito's mosquito spray safe near Mississauga's waterways and conservation areas?",
    answer: 'Yes. Our Health Canada–approved, water-based formula is specifically designed for residential use near water features. Once the product dries — typically within 30 minutes — it does not leach into waterways or harm fish, beneficial insects, or pollinators when applied according to label instructions. We do not apply product directly to water, and we maintain buffer zones around sensitive shoreline areas.',
  },
  {
    question: 'Which Mississauga neighbourhoods does BuzzSkito serve?',
    answer: "We serve all Mississauga communities including Port Credit, Meadowvale, Streetsville, Erin Mills, Clarkson, Churchill Meadows, Lorne Park, Mineola, Applewood, Cooksville, Malton, Hurontario, and beyond. If you're unsure whether your address is in our coverage zone, call (289) 216-5030 and we'll confirm immediately.",
  },
  {
    question: "How does BuzzSkito's barrier spray actually work?",
    answer: 'Our technicians use a high-precision backpack sprayer to apply a residual barrier treatment to all vegetation on your property — shrubs, garden beds, the underside of leaves, fence lines, deck undersides, and woodpile areas. These are the sites where adult mosquitoes rest during the heat of the day. The formula kills mosquitoes on contact and leaves a residual repellent that deters new mosquitoes from entering your yard for up to 30 days.',
  },
  {
    question: 'What happens if it rains after my Mississauga treatment?',
    answer: 'Our products are formulated to bond to leaf surfaces as they dry. If rainfall occurs within one hour of application — before the product has fully cured — we will return and re-treat your property at no additional cost. This guarantee applies to all Mississauga service visits.',
  },
  {
    question: 'Does BuzzSkito also provide tick control in Mississauga?',
    answer: "Yes. Mississauga's Credit River valley, Rattray Marsh, and Erindale Park are confirmed blacklegged tick habitat areas. Many Mississauga homeowners bundle mosquito and tick treatments for complete yard protection. Our tick spray targets the specific transition zones — lawn edges, leaf litter, garden beds — where ticks concentrate. Ask about our seasonal bundle pricing when you call.",
  },
  {
    question: 'Do I need to be home during the treatment?',
    answer: "No. As long as our technicians have access to your outdoor areas, you do not need to be home. We'll send an SMS notification before arriving and a follow-up confirmation email with the full treatment log, areas treated, and your next scheduled visit date. We also place a small lawn sign confirming the treatment was completed.",
  },
]

export default function MississaugaMosquitoControlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: `${CITY}`, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mississauga-mosquito-control')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From Port Credit's waterfront to Meadowvale's conservation areas — BuzzSkito protects every Mississauga neighbourhood with professional barrier spray. Health Canada–approved. 30-day protection. 100% satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">
              Get a Free Quote
            </Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Rain-Back Guarantee</span>
          <span>✓ 5-Star Rated · 126 Reviews</span>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">

          <h2>Why Mosquito Pressure Is High in Mississauga</h2>
          <p>Mississauga's natural landscape creates some of the GTA's most persistent mosquito conditions. The <strong>Credit River</strong> — running from Streetsville south through Erindale to Port Credit — forms a continuous mosquito breeding corridor that affects dozens of adjacent neighbourhoods throughout the season. <strong>Rattray Marsh Conservation Area</strong>, one of the last remaining Lake Ontario lakefront marshes in the western GTA, sustains major mosquito populations each year. <strong>Meadowvale Conservation Area</strong>, Erindale Park, and the city's extensive network of stormwater management ponds add further breeding pressure.</p>
          <p>Neighbourhoods closest to these water features — Port Credit, Clarkson, Lorne Park, Mineola, Erin Mills, and Meadowvale — tend to experience the earliest mosquito activity each spring and the most intense pressure through summer. Even newer developments further from natural water features are affected by the stormwater retention ponds that accompany all modern construction in Mississauga.</p>

          <h2>Mosquito Hotspots by Mississauga Neighbourhood</h2>
          <h3>Port Credit &amp; Lakeview</h3>
          <p>Lake Ontario's waterfront and the Credit River mouth create intense early-season mosquito pressure. Port Credit properties within three blocks of the lake or river — particularly those with mature tree canopy — experience the season's earliest activity, often beginning in late April.</p>

          <h3>Meadowvale &amp; Meadowvale Conservation Area</h3>
          <p>Meadowvale Conservation Area contains a series of ponds and wetlands that are among the most productive mosquito breeding sites in western Mississauga. Properties adjacent to or within 600 metres of the conservation area see elevated pressure throughout May–August.</p>

          <h3>Streetsville &amp; Credit River Valley</h3>
          <p>Streetsville sits directly on the Credit River and experiences consistent, season-long mosquito activity from the river's flood plain and adjacent wetland areas. The river valley trail system creates a pathway for mosquito dispersal into adjacent residential streets.</p>

          <h3>Erin Mills &amp; Churchill Meadows</h3>
          <p>Erin Mills and Churchill Meadows both contain multiple stormwater management ponds from 1990s–2000s construction. These engineered ponds — particularly those with shallow edges and minimal water movement — are productive mosquito breeding sites from May through September.</p>

          <h3>Clarkson &amp; Rattray Marsh</h3>
          <p>Clarkson properties near Rattray Marsh face the highest mosquito pressure in the city. The marsh's shallow water, dense cattails, and protected status (it cannot be treated by municipal larvicide programs) make it a reliable annual source of mosquitoes for adjacent streets.</p>

          <h2>Our Mississauga Mosquito Treatment Process</h2>
          <ol>
            <li><strong>Property assessment</strong> — We identify breeding areas, water features, and high-risk vegetation zones specific to your Mississauga lot.</li>
            <li><strong>Barrier spray application</strong> — Full treatment of all vegetation, shrubs, garden borders, fence lines, deck undersides, and woodpile areas using a backpack precision sprayer.</li>
            <li><strong>Standing water guidance</strong> — We identify any standing water sources on your property contributing to mosquito breeding and advise on elimination or treatment.</li>
            <li><strong>30-day protection window</strong> — Residual formula keeps working between visits, with re-application every 21–28 days for continuous season coverage.</li>
          </ol>

          <h2>Mississauga Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>Seasonal Mosquito Treatment Schedule for Mississauga</h2>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Treatment</th>
                  <th className="px-4 py-2 text-left">Timing</th>
                  <th className="px-4 py-2 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: 'Treatment 1', timing: 'Early May', purpose: 'Establish barrier before Credit River / pond activity peaks' },
                  { t: 'Treatment 2', timing: 'Early June', purpose: 'Maintain coverage into peak season' },
                  { t: 'Treatment 3', timing: 'Early July', purpose: 'Peak mosquito season — highest activity window' },
                  { t: 'Treatment 4', timing: 'Early August', purpose: 'Late-summer surge from Rattray Marsh / lakefront' },
                  { t: 'Treatment 5', timing: 'Early September', purpose: 'Season close-out for extended coverage' },
                ].map(({ t, timing, purpose }) => (
                  <tr key={t} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-gray-800">{t}</td>
                    <td className="px-4 py-2 text-brand-700 font-semibold">{timing}</td>
                    <td className="px-4 py-2 text-gray-600">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Also Providing Tick Control in Mississauga</h2>
          <p>Mississauga's Credit River valley, Rattray Marsh, and Erindale Park are confirmed blacklegged tick habitat areas documented by Peel Region Public Health. If your property backs onto any ravine, conservation area, or wooded edge, tick control is an important complement to mosquito spray. See our <Link href="/mississauga-tick-spray" className="text-brand-700 hover:underline">Mississauga tick control service</Link> — many homeowners bundle both for complete seasonal protection.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
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

      <CTASection
        heading={`Get a Free Mosquito Control Quote in ${CITY}`}
        subtext="Protecting Mississauga families from mosquitoes since day one. No contracts. 100% satisfaction guaranteed."
      />
    </>
  )
}
