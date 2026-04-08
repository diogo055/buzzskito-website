import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Brampton | BuzzSkito – Free Quotes',
  description:
    "Professional mosquito control spray in Brampton. Serving Mount Pleasant, Castlemore, Heart Lake, Springdale, Fletcher's Meadow & all Brampton neighbourhoods. Call (289) 216-5030.",
  canonical: '/brampton-mosquito-control',
})

const CITY = 'Brampton'
const SLUG = '/brampton-mosquito-control'
const NEIGHBOURHOODS = ["Mount Pleasant","Gore Meadows","Castlemore","Springdale","Bramalea","Creditview","Fletcher's Meadow","Heart Lake","Sandringham","Credit Valley","Vales of Castlemore"]

const FAQS = [
  {
    question: 'Why does Brampton have so many mosquitoes?',
    answer: "Brampton's rapid residential development has created abundant mosquito breeding habitat. Stormwater management ponds are built into virtually every new development and serve as ideal breeding sites — shallow, still water with minimal predator populations. The Etobicoke Creek corridor, Heart Lake Conservation Area, and Humber River tributaries in northern Brampton add significant natural mosquito pressure on top of the stormwater pond baseline.",
  },
  {
    question: 'Which Brampton neighbourhoods have the worst mosquito problems?',
    answer: "Properties near stormwater ponds in Mount Pleasant, Springdale, and Vales of Castlemore consistently have high mosquito activity due to the density of retention ponds in these developments. Gore Meadows and Heart Lake neighbourhoods face both pond pressure and natural creek corridor exposure from Etobicoke Creek and Heart Lake Conservation Area. Credit Valley properties near the Etobicoke Creek also experience elevated season-long pressure.",
  },
  {
    question: 'When does mosquito season start in Brampton?',
    answer: "Mosquito activity in Brampton typically begins in late April when temperatures consistently exceed 10°C. Stormwater ponds that retain standing water over winter can produce early-season mosquitoes in April — sometimes before seasonal norms. Peak activity runs May through July, with stormwater ponds sustaining a secondary surge in August following summer rain events. The season typically ends by late September.",
  },
  {
    question: 'How many mosquito treatments does my Brampton home need?',
    answer: "We recommend 4–5 treatments from May through September, spaced 21–28 days apart, for continuous protection. Properties with stormwater pond views or backing onto Etobicoke Creek, Heart Lake Conservation Area, or any ravine benefit most from the full 5-treatment program. Our technicians will assess your specific exposure and recommend the right schedule for your property.",
  },
  {
    question: "Is BuzzSkito's mosquito spray safe for Brampton families with kids and pets?",
    answer: "Yes. Our Health Canada–approved, water-based formula is safe for children and pets once dry — approximately 30 minutes after application. We recommend keeping people and pets off treated surfaces during that drying window. After that, your yard is fully safe with the mosquito barrier protection active. Our formula does not harm beneficial insects when applied according to label directions.",
  },
  {
    question: 'How quickly can BuzzSkito service my Brampton property?',
    answer: "We typically schedule Brampton service visits within the same week during the active season. Call (289) 216-5030 to confirm current availability at your specific Brampton address. Early-season bookings (April–May) are subject to higher demand, so booking ahead is recommended.",
  },
  {
    question: 'What is barrier spray and how does it work in Brampton?',
    answer: "Barrier spray is a residual insecticide applied to all vegetation on your property — shrubs, garden beds, the underside of leaves, fence lines, deck undersides, and shaded areas where mosquitoes rest during the heat of the day. The formula kills mosquitoes on contact and creates a residual deterrent that prevents new mosquitoes from settling on treated vegetation for up to 30 days. It's the most effective yard-level tool available for Brampton homeowners dealing with pond-driven mosquito pressure.",
  },
  {
    question: 'Does BuzzSkito also provide tick control in Brampton?',
    answer: "Yes. Brampton's ravines, Heart Lake Conservation Area, and Humber River tributaries also harbour blacklegged ticks. Many Brampton homeowners bundle mosquito and tick treatments for complete yard protection throughout the season. Ask about seasonal bundle pricing when you call.",
  },
]

export default function BramptonMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/brampton-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Brampton's stormwater ponds and rapid new development fuel heavy mosquito activity each season. BuzzSkito provides professional barrier spray for Brampton homeowners — fast, effective, and guaranteed.
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
          <h2>Mosquito Pressure in Brampton</h2>
          <p>Brampton is one of Canada's fastest-growing cities, and that growth has created a mosquito problem that gets worse with each new development phase. Every subdivision built in Brampton includes stormwater management ponds engineered to capture runoff — but these ponds are perfect mosquito breeding habitat: shallow, still, warm in summer, and largely unshaded in newer areas. Neighbourhoods like <strong>Mount Pleasant, Springdale, Vales of Castlemore, and Credit Valley</strong> have dozens of these ponds within walking distance of residential streets.</p>
          <p>Natural water features compound the stormwater issue. The <strong>Etobicoke Creek corridor</strong> runs north-south through central Brampton, and <strong>Heart Lake Conservation Area</strong> in the city's northwest creates a significant natural mosquito source for adjacent neighbourhoods. <strong>Humber River tributaries</strong> in northern Brampton (Castlemore, Countryside Drive area) add further pressure for properties near undeveloped greenbelt.</p>

          <h2>Mosquito Pressure Zones by Brampton Neighbourhood</h2>
          <h3>Mount Pleasant, Vales of Castlemore, Springdale</h3>
          <p>Northern Brampton's newest developments sit adjacent to the highest concentration of stormwater management ponds in the city. Many properties in these areas have direct pond views — and those ponds sustain mosquito activity from early May through September without natural predator populations to control them.</p>

          <h3>Heart Lake and Gore Meadows</h3>
          <p>Heart Lake Conservation Area borders these north-west Brampton neighbourhoods and generates substantial natural mosquito populations each season. The combination of conservation area exposure and nearby stormwater ponds gives Heart Lake and Gore Meadows some of the city's most persistent mosquito pressure.</p>

          <h3>Creditview, Credit Valley, Bramalea</h3>
          <p>These neighbourhoods along the Etobicoke Creek corridor experience elevated mosquito activity from the creek's floodplain and seasonal side channels. Summer rain events regularly re-activate breeding in low-lying areas adjacent to the creek system.</p>

          <h2>Brampton Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>Recommended Mosquito Treatment Schedule for Brampton</h2>
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
                  { t: 'Treatment 1', timing: 'Early May', purpose: 'Establish barrier before stormwater ponds activate' },
                  { t: 'Treatment 2', timing: 'Early June', purpose: 'Maintain coverage through peak ramp-up' },
                  { t: 'Treatment 3', timing: 'Early July', purpose: 'Peak mosquito season — highest activity window' },
                  { t: 'Treatment 4', timing: 'Early August', purpose: 'Post-rain surge from stormwater and creek features' },
                  { t: 'Treatment 5', timing: 'Early September', purpose: 'Late-season close-out for extended coverage' },
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

          <h2>Also Providing Tick Control in Brampton</h2>
          <p>Brampton's ravines and wooded corridors are also prime tick habitat. Ask about our <Link href="/brampton-tick-spray" className="text-brand-700 hover:underline">Brampton tick control service</Link> — bundle both for complete seasonal protection.</p>

          <h2>Related Guides</h2>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Brampton property from mosquitoes this season. No contracts." />
    </>
  )
}
