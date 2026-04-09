import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Etobicoke | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Etobicoke. Humber River valley, Centennial Park forest, and Mimico Creek valley are confirmed tick habitat. Serving Mimico, Humber Valley, Kingsway & all Etobicoke. Call (289) 216-5030.',
  canonical: '/etobicoke-tick-spray',
})

const CITY = 'Etobicoke'
const NEIGHBOURHOODS = ['Mimico','Long Branch','New Toronto','The Kingsway','Humber Valley','Richview','Rexdale','Islington Village','Alderwood']
const FAQS = [
  {
    question: 'How much does tick spray cost in Etobicoke?',
    answer: 'Tick spray in Etobicoke starts from $99 per application. Properties near the Humber River valley, Etobicoke Creek, or Centennial Park benefit most from both spring and fall applications. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Where are ticks most active in Etobicoke?',
    answer: 'The Humber River valley corridor through Etobicoke is the primary blacklegged tick habitat. Properties in Humber Valley and The Kingsway that back onto the ravine are at highest risk. Centennial Park\'s forested sections, the Mimico Creek valley, and the James Gardens ravine are additional areas flagged in Toronto Public Health\'s western Toronto tick monitoring program.',
  },
  {
    question: 'Does Toronto Public Health monitor for ticks in Etobicoke?',
    answer: 'Yes. Toronto Public Health includes the Humber River valley and several western Etobicoke ravines in its annual tick surveillance and dragging program. Their data confirms established blacklegged tick populations in these areas. They recommend tick checks after any time spent in or near Etobicoke\'s green corridors, and professional yard treatment for adjacent properties.',
  },
  {
    question: 'My Etobicoke yard doesn\'t back onto the ravine — do I still need tick spray?',
    answer: 'Ticks don\'t stay in the ravine. Deer, foxes, raccoons, and other wildlife carry ticks throughout Etobicoke neighbourhoods, dropping them in residential yards well beyond the ravine edge. If you live within a few blocks of the Humber River, Mimico Creek, or any wooded park in Etobicoke, professional tick spray is a worthwhile investment for your family\'s protection.',
  },
]

export default function EtobicokeTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/etobicoke-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/etobicoke-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/etobicoke-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            The Humber River valley through Etobicoke is confirmed blacklegged tick habitat. BuzzSkito provides professional tick spray to protect your family from Lyme disease along Toronto's western ravine corridors.
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
          <h2>Why Tick Spray Is Crucial in Etobicoke</h2>
          <p>Etobicoke's ravine and river valley network isn't just scenic — it's a confirmed blacklegged tick corridor that runs from Vaughan's Humber River headwaters straight through residential Toronto. Toronto Public Health includes the western ravines, including the Humber River valley and Mimico Creek valley, in its formal tick monitoring zones. Centennial Park's mature forest sections and the James Gardens ravine have both been identified as active tick habitat in recent years.</p>
          <p>Many Etobicoke homeowners are surprised to learn that their manicured lawns can have ticks — but the risk zone isn't just the ravine edge. Ticks are transported by deer, rabbits, and squirrels throughout the neighbourhood well beyond the visible ravine boundary. The lawn's edge where grass meets garden beds, leaf litter, or shrub borders is exactly where blacklegged ticks quest for hosts. Professional barrier spray applied to these transition zones provides the most effective protection for your family and pets.</p>

          <h2>Tick Hotspots in Etobicoke</h2>
          <ul>
            <li>Humber River valley trail corridor (Humber Valley and Kingsway area)</li>
            <li>Centennial Park forested sections (Rexdale area)</li>
            <li>Mimico Creek valley green corridor</li>
            <li>James Gardens ravine (Islington Village)</li>
            <li>Etobicoke Creek valley and adjacent residential lot edges</li>
          </ul>

          <h2>Etobicoke Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Etobicoke Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in Etobicoke</h2>
          <p>Many Etobicoke homeowners combine tick and mosquito control in the same visit. See our <Link href="/etobicoke-mosquito-control" className="text-brand-700 hover:underline">Etobicoke mosquito control service</Link>.</p>

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
