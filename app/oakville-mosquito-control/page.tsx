import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Oakville | BuzzSkito – Free Quotes',
  description:
    'Professional mosquito control spray in Oakville. Serving Glen Abbey, Joshua Creek, Bronte, West Oak Trails & all Oakville neighbourhoods. Up to 30-day protection. Call (289) 216-5030.',
  canonical: '/oakville-mosquito-control',
})

const CITY = 'Oakville'
const NEIGHBOURHOODS = ['Bronte','Glen Abbey','Joshua Creek','West Oak Trails','Clearview','Palermo','River Oaks','Kerr Village','Uptown Core','Old Oakville']
const FAQS = [
  { question: 'Is mosquito control effective near Oakville\'s lakefront and Bronte Creek?', answer: 'Yes. While we cannot treat the creek or lake itself, barrier spray applied to your property\'s vegetation creates an effective buffer against mosquitoes breeding in these water features. Properties near Bronte Creek and the Lake Ontario shoreline benefit most from early-season and regular treatments.' },
  { question: 'What Oakville neighbourhoods does BuzzSkito serve?', answer: 'We serve all Oakville communities including Glen Abbey, Joshua Creek, West Oak Trails, Bronte, River Oaks, Clearview, Palermo, Kerr Village, and more. Call (289) 216-5030 to confirm availability at your address.' },
]

export default function OakvilleMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: '/oakville-mosquito-control', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: '/oakville-mosquito-control' }])) }} />
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
            Oakville's lakefront properties, Bronte Creek, and rain-garden landscaping create significant mosquito pressure. BuzzSkito provides professional barrier spray so Oakville families can enjoy their backyards all season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Mosquito Control for Oakville Homes</h2>
          <p>Oakville is one of the GTA's most desirable communities — but its picturesque setting along Lake Ontario and Bronte Creek creates persistent mosquito challenges. Glen Abbey's golf course ponds, Joshua Creek's ravine system, and the Bronte Creek Provincial Park corridor all generate significant mosquito breeding activity that spills into adjacent residential neighbourhoods each season.</p>
          <p>BuzzSkito provides barrier spray treatments optimized for Oakville properties, targeting the vegetation and landscape features that mosquitoes use as daytime resting sites. Our treatments are specifically effective on the mature, dense landscaping typical of established Oakville neighbourhoods.</p>

          <h2>Oakville Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Also Providing Tick Control in Oakville</h2>
          <p>Bronte Creek and Oakville's forested ravines are significant tick habitat. See our <Link href="/oakville-tick-spray-1" className="text-brand-700 hover:underline">Oakville tick control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – {CITY} Mosquito Control</h2>
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
      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Oakville property from mosquitoes this season." />
    </>
  )
}
