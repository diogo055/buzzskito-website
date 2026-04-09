import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Scarborough | From $99, No Contracts | BuzzSkito',
  description:
    'Professional tick spray in Scarborough. Rouge National Urban Park and Highland Creek valley are among the GTA\'s highest-risk tick areas. Serving Guildwood, West Hill, Rouge & all Scarborough. Call (289) 216-5030.',
  canonical: '/scarborough-tick-spray',
})

const CITY = 'Scarborough'
const NEIGHBOURHOODS = ['Guildwood','West Hill','Highland Creek','Rouge','Malvern','Agincourt','Birchcliffe','Cliffside','Woburn','Morningside']
const FAQS = [
  {
    question: 'How much does tick spray cost in Scarborough?',
    answer: 'Tick spray in Scarborough starts from $99 per application. Properties near Rouge National Urban Park, Highland Creek valley, or any wooded ravine benefit most from both spring and fall treatments. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Is Rouge National Urban Park really a high-risk tick area?',
    answer: 'Yes — it is one of the highest-risk areas in the entire GTA. Rouge National Urban Park is a federally protected national park with thousands of hectares of forest, meadow, wetland, and river valley habitat. Toronto Public Health conducts annual tick surveillance in Rouge and consistently confirms high blacklegged tick populations, particularly in the forest and meadow transition zones that border residential Scarborough neighbourhoods.',
  },
  {
    question: 'Which Scarborough neighbourhoods are most at risk for ticks?',
    answer: 'Rouge and West Hill neighbourhoods that directly border Rouge National Urban Park have the highest tick exposure. Highland Creek, Morningside, and Guildwood properties adjacent to Highland Creek valley and Morningside Park are also high-risk. Toronto Public Health monitors Scarborough\'s ravine and park system annually — this is an area where professional tick control is strongly recommended.',
  },
  {
    question: 'How quickly do ticks spread from the park to my backyard?',
    answer: 'Very quickly. Wildlife — particularly deer and small mammals — move freely between Rouge National Urban Park and residential Scarborough on a daily basis, carrying ticks with them. Ticks drop off hosts as they travel and can establish in any yard with suitable leaf litter, garden borders, or low vegetation. Properties within several blocks of the park boundary should treat proactively each season.',
  },
]

export default function ScarboroughTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/scarborough-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/scarborough-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/scarborough-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Scarborough borders Rouge National Urban Park — one of the GTA's highest-risk tick areas. Highland Creek valley and Morningside Park also harbour documented blacklegged tick populations. BuzzSkito protects your family from Lyme disease.
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
            <p className="text-gray-600 text-sm mt-0.5">Professional tick spray from <strong className="text-amber-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Tick Spray Is Crucial in Scarborough</h2>
          <p>Scarborough is home to the largest federally protected natural area within a Canadian city — Rouge National Urban Park. This isn't a small conservation reserve. It's a national park with extensive forest, meadow, and wetland ecosystems that support well-established blacklegged tick populations. Toronto Public Health monitors tick activity in Rouge annually and has documented consistent, high tick presence in the forest-meadow edge zones that border Scarborough's residential areas in Rouge, West Hill, and Highland Creek.</p>
          <p>Highland Creek valley runs through the heart of Scarborough from Markham all the way to Lake Ontario, creating a long continuous tick corridor through Morningside, West Hill, and Highland Creek neighbourhoods. Morningside Park's naturalized sections have also had documented tick activity. Any Scarborough property within a few hundred metres of these systems — not just the immediate ravine edge — faces real seasonal exposure risk from ticks.</p>

          <h2>Tick Hotspots in Scarborough</h2>
          <ul>
            <li>Rouge National Urban Park — federally protected, highest-risk tick area in the GTA</li>
            <li>Highland Creek valley corridor from Morningside to the waterfront</li>
            <li>Morningside Park naturalized sections</li>
            <li>Rouge River valley wooded edges (Rouge neighbourhood)</li>
            <li>West Hill forested lot edges adjacent to the park and creek</li>
          </ul>

          <h2>Scarborough Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Scarborough Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in Scarborough</h2>
          <p>Many Scarborough homeowners combine tick and mosquito control in the same visit. See our <Link href="/scarborough-mosquito-control" className="text-brand-700 hover:underline">Scarborough mosquito control service</Link>.</p>

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
