import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Toronto | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Toronto. Kills ticks at all life stages. Serving High Park, Rosedale, Forest Hill, Don Valley, Etobicoke & all Toronto neighbourhoods. Call (289) 216-5030.',
  canonical: '/toronto-tick-spray',
})

const CITY = 'Toronto'
const SLUG = '/toronto-tick-spray'
const NEIGHBOURHOODS = ['High Park','East York','Don Mills','The Beaches','Scarborough','North York','Etobicoke','Leslieville','Rosedale','Forest Hill','Leaside','Willowdale','Lawrence Park']

const FAQS = [
  {
    question: 'Are there really ticks in Toronto?',
    answer: "Yes. Blacklegged ticks are established in Toronto's ravine system, High Park, and many other green spaces. Toronto Public Health conducts annual tick surveillance and has confirmed positive blacklegged tick populations in High Park, the Don Valley, Humber Valley, and Scarborough's Highland Creek and Rouge River areas. Lyme disease is a reportable illness in Ontario and confirmed Toronto cases have increased each year.",
  },
  {
    question: 'Which Toronto neighbourhoods have the highest tick risk?',
    answer: "Properties adjacent to Toronto's ravine system carry the highest tick exposure risk. This includes areas near the Don Valley (Leaside, East York, Don Mills), Humber Valley (Etobicoke, Islington), High Park (Roncesvalles, Parkdale), Highland Creek and Scarborough Bluffs (Cliffside, Guildwood), and any neighbourhood backing onto wooded or naturalized green space. Even a thin strip of ravine vegetation between a backyard fence and a trail can host tick populations.",
  },
  {
    question: 'What tick species are found in Toronto?',
    answer: "The blacklegged tick (Ixodes scapularis) is the species of primary concern in Toronto — it's the only species that transmits Lyme disease, and it's the species Toronto Public Health monitors. American dog ticks are also present in Toronto's parks and green spaces but rarely transmit Lyme disease to humans.",
  },
  {
    question: 'When is tick season in Toronto?',
    answer: "Blacklegged tick nymphs — the life stage responsible for most Lyme disease transmissions in Ontario — are most active from May through July. Adult ticks are active from October through November and again in early spring (March–April) when temperatures rise above 4°C. Nymphs are the most dangerous stage because they're tiny (poppy-seed sized) and often go undetected during tick checks. A May or June treatment specifically targets this peak nymph window.",
  },
  {
    question: 'How many tick treatments does my Toronto property need?',
    answer: "Two treatments per season cover the full active window: one in late May or early June to target nymph peak activity, and one in August or September for adult tick emergence. Properties in Don Valley, Humber Valley, or Scarborough ravine zones with higher tick pressure may benefit from a third treatment. Each application provides up to 30 days of residual protection.",
  },
  {
    question: 'Is tick spray safe to use in Toronto near ravines and parks?',
    answer: "Yes. Our Health Canada–approved formula is designed for residential property use. We apply it to your property's vegetation — not to any municipal parkland or ravine. Once the product dries (approximately 30 minutes), it does not leach into nearby waterways or harm wildlife. We maintain buffer zones around any sensitive natural areas at your property edge.",
  },
  {
    question: 'Does BuzzSkito also provide mosquito control in Toronto?',
    answer: "Yes. Toronto's Don Valley, Humber River, and extensive ravine system also create significant mosquito pressure each season. Many Toronto homeowners bundle mosquito and tick treatments for complete yard protection. See our Toronto mosquito control service for details, or ask about seasonal bundle pricing when you call.",
  },
]

export default function TorontoTickSprayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Ticks in Toronto aren't just a nuisance — they're a real health risk. Blacklegged ticks carrying Lyme disease are established in Toronto's ravine system and parks. BuzzSkito provides effective professional tick spray for Toronto homeowners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Ticks in Toronto: The Real Risk</h2>
          <p>Toronto Public Health conducts annual tick surveillance and has confirmed established blacklegged tick populations in High Park, the Don Valley, and other ravine-adjacent areas. Lyme disease is a reportable illness in Ontario, and confirmed case numbers have increased steadily as tick populations expand across Southern Ontario.</p>
          <p>The key insight for Toronto homeowners: ticks don't need a forest. They're found at the edge of any lawn that backs onto naturalized green space — including the thin strip of vegetation between a backyard fence and a ravine trail. If your property has any wooded edge, ravine view, or backs onto a park, annual tick treatment is a reasonable precaution.</p>

          <h2>Where Tick Risk Is Highest in Toronto</h2>
          <ul>
            <li><strong>High Park and surroundings</strong> — Roncesvalles, Parkdale, Bloor West Village</li>
            <li><strong>Don Valley corridor</strong> — Leaside, East York, Don Mills, Thorncliffe Park</li>
            <li><strong>Humber Valley</strong> — Etobicoke, Islington, Old Mill area</li>
            <li><strong>Scarborough ravines</strong> — Highland Creek, Guildwood, Rouge River, Cliffside</li>
            <li><strong>Any property backing onto ravine or naturalized green space</strong></li>
          </ul>

          <h2>Toronto Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>Also Providing Mosquito Control in Toronto</h2>
          <p>Bundle tick and mosquito control for complete yard protection. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
            <li><Link href="/blog/tick-bite-symptoms-what-to-do-ontario" className="text-brand-700 hover:underline">Tick Bite Symptoms &amp; What to Do in Ontario</Link></li>
            <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">What Ticks Look Like in Ontario</Link></li>
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

      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protect your family from Lyme disease in Toronto. No contracts." variant="dark" />
    </>
  )
}
