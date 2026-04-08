import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Willowdale Toronto | BuzzSkito',
  description:
    'Professional mosquito control spray for Willowdale (North York) homes. Don River headwaters and ravine corridors drive seasonal mosquito activity. 30-day protection. Call (289) 216-5030.',
  canonical: '/willowdale-mosquito-control',
})

const NEIGHBOURHOOD = 'Willowdale'
const CITY = 'Toronto'
const SLUG = '/willowdale-mosquito-control'

const FAQS = [
  {
    question: 'Why does Willowdale have a mosquito problem?',
    answer: "Willowdale sits in the upper Don River watershed. The Don River and its tributaries run through the neighbourhood's ravines, providing the moving water, streamside vegetation, and seasonal wet pockets that mosquitoes require to breed. Beyond the ravines, Willowdale's mature residential tree canopy — oak, maple, and elm trees on many streets — provides dense daytime resting habitat for mosquitoes that breed in the valley below.",
  },
  {
    question: 'Which Willowdale areas have the highest mosquito activity?',
    answer: "Properties backing onto any Don River tributary ravine experience the most consistent pressure. East Willowdale and Newtonbrook East streets adjacent to the ravine trail system see elevated activity from May through August. Properties near Shepherd's Bush or any naturalized green space in the neighbourhood also report higher-than-average mosquito counts. West Willowdale's proximity to Mel Lastman Square and Empress Walk areas is lower-risk, though still affected by broader Don River dispersal.",
  },
  {
    question: 'When is mosquito season in Willowdale?',
    answer: "Willowdale's mosquito season runs from late April through September, with peak activity from late May through July. The Don River ravines provide sheltered microclimates that can extend emergence earlier in warm springs and sustain activity later into the fall.",
  },
  {
    question: 'How many treatments does a Willowdale home need per season?',
    answer: "Ravine-adjacent Willowdale properties typically benefit from 4–5 treatments from May through September. Properties in West Willowdale with no direct ravine exposure may be well-protected with 3–4 treatments. Call (289) 216-5030 for a free assessment at your specific address.",
  },
  {
    question: 'Does BuzzSkito serve all of Willowdale?',
    answer: "Yes. We serve all Willowdale communities — East Willowdale, West Willowdale, Newtonbrook East, and Newtonbrook West — as well as all surrounding North York neighbourhoods. Call (289) 216-5030 to confirm service availability and get a free quote.",
  },
]

export default function WillowdaleMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Toronto', url: '/toronto-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/willowdale-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/toronto-mosquito-control" className="hover:text-white">Toronto</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, Toronto</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Willowdale's Don River ravine corridors and mature residential canopy create consistent seasonal mosquito pressure. BuzzSkito provides effective barrier spray so Willowdale families can enjoy their outdoor spaces all summer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Mosquito Pressure in Willowdale</h2>
          <p>Willowdale occupies a key section of the upper Don River watershed in North York. The Don River and its tributaries create a network of ravine corridors through and around the neighbourhood — providing the flowing water, adjacent wet vegetation, and sheltered microclimates that sustain mosquito populations throughout the season. Willowdale's residential streets, with their dense tree canopy of mature oaks and maples, extend the available daytime resting habitat for mosquitoes dispersing from these ravine breeding zones.</p>
          <p>BuzzSkito's barrier spray treats all resting surfaces on your Willowdale property — shrubs, garden borders, fence lines, and accessible undercanopy — creating a protective treated zone that eliminates arriving mosquitoes and provides up to 30 days of residual protection per visit.</p>

          <h2>Part of Our Toronto Mosquito Control Network</h2>
          <p>We serve all of Willowdale and the surrounding North York area. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control</Link> page for city-wide coverage, or our <Link href="/york-mills-mosquito-control" className="text-brand-700 hover:underline">York Mills</Link> page for adjacent neighbourhood coverage.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {NEIGHBOURHOOD}</h2>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Willowdale properties from Don River mosquitoes. No contracts." />
    </>
  )
}
