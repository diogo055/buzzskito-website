import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray North York | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in North York. Don Valley ravines — Serena Gundy Park, Sunnybrook, Wilket Creek — are confirmed blacklegged tick habitat. Serving Don Mills, Willowdale, Lawrence Park & all North York. Call (289) 216-5030.',
  canonical: '/north-york-tick-spray',
})

const CITY = 'North York'
const NEIGHBOURHOODS = ['Don Mills','Willowdale','Lawrence Park','York Mills','Bayview Village','Lansing','North York Centre','Parkwoods']
const FAQS = [
  {
    question: 'How much does tick spray cost in North York?',
    answer: 'Tick spray in North York starts from $99 per application. A 2-treatment seasonal program (spring + fall) starts from $179. Properties near the Don Valley, Serena Gundy Park, or Earl Bales Park benefit most from both spring and fall applications. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Which North York parks and ravines have confirmed tick populations?',
    answer: 'Toronto Public Health\'s tick surveillance program has documented blacklegged ticks throughout the Don Valley ravine system in North York. Serena Gundy Park, Sunnybrook Park, Wilket Creek Park, and Burke Brook ravine are all confirmed tick habitat areas. Homeowners in Don Mills, Lawrence Park, and York Mills who back onto these ravines face annual tick exposure from spring through late fall.',
  },
  {
    question: 'Can I get ticks in a North York neighbourhood that feels urban?',
    answer: 'Yes. The Don Valley ravine system cuts through what appears to be a dense urban environment, but it provides continuous wildlife corridors for deer and small mammals that carry ticks. Ticks are regularly found in ravine-adjacent backyards in Bayview Village, Lawrence Park, and York Mills — sometimes far from the visible ravine edge. Don\'t let the urban surroundings create a false sense of security.',
  },
  {
    question: 'Is BuzzSkito\'s tick spray safe for a North York property with pets and young children?',
    answer: 'Yes. BuzzSkito uses Health Canada–approved barrier spray formulas. After the spray dries — typically 30 minutes following application — your yard is completely safe for children and pets. We apply the formula to the high-risk zones like lawn edges, leaf litter, and garden borders rather than open play areas, further reducing any unnecessary exposure.',
  },
]

export default function NorthYorkTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/north-york-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/north-york-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/north-york-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            The Don Valley ravine system — including Serena Gundy Park, Sunnybrook Park, and Wilket Creek — provides extensive blacklegged tick habitat in the heart of Toronto. BuzzSkito protects North York properties from Lyme disease.
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
          <h2>Why Tick Spray Is Crucial in North York</h2>
          <p>North York is home to Toronto's most extensive ravine network. The Don Valley ravine system threads through Willowdale, Don Mills, Lawrence Park, and York Mills, connecting Serena Gundy Park, Sunnybrook Park, and Wilket Creek Park in a continuous green corridor. Toronto Public Health includes these ravines in its tick surveillance program, and blacklegged tick populations are well documented throughout. Homeowners whose properties back onto these ravines face real annual tick exposure — not a theoretical risk, but a documented one.</p>
          <p>The Don Valley ravines attract abundant wildlife that serve as tick hosts: white-tailed deer, raccoons, and red foxes are common, and each carries ticks that can drop off in ravine-adjacent backyards. Burke Brook ravine in Lawrence Park is particularly notable — it runs through one of Toronto's most sought-after residential neighbourhoods, and tick activity there is confirmed. Professional barrier spray applied in spring and again in late summer is the single most effective tool for protecting North York families from tick-borne Lyme disease.</p>

          <h2>Tick Hotspots in North York</h2>
          <ul>
            <li>Serena Gundy Park and Wilket Creek (Don Mills and Bayview Village)</li>
            <li>Sunnybrook Park ravine sections (York Mills and Lawrence Park)</li>
            <li>Burke Brook ravine corridor (Lawrence Park)</li>
            <li>Don Valley wooded lot edges throughout North York</li>
            <li>Parkwoods and Don Mills forested margins</li>
          </ul>

          <h2>North York Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our North York Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in North York</h2>
          <p>Many North York homeowners combine tick and mosquito control in the same visit. See our <Link href="/north-york-mosquito-control" className="text-brand-700 hover:underline">North York mosquito control service</Link>.</p>

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
