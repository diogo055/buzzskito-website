import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Kleinburg | From $99 | BuzzSkito',
  description:
    'Mosquito control in Kleinburg, Vaughan. Professional barrier spray from $99. Health Canada-approved. Call (289) 216-5030.',
  canonical: '/kleinburg-mosquito-control',
})

const CITY = 'Kleinburg'
const SLUG = '/kleinburg-mosquito-control'
const NEIGHBOURHOODS = ['Kleinburg Village','Nashville Road corridor','Humber River estates','Conservation Drive area','Islington Avenue north']

const FAQS = [
  {
    question: 'Why is Kleinburg one of the GTA\'s highest-risk mosquito areas?',
    answer: "Kleinburg sits directly on the Humber River, surrounded by conservation land on multiple sides. The Humber River floodplain creates extensive seasonal standing water, and the dense deciduous forest cover along the river valley stays cool and moist throughout summer — ideal conditions for both mosquito breeding and adult resting habitat. Many Kleinburg properties back directly onto the conservation corridor, meaning there is no buffer between your yard and the primary mosquito source area. This makes professional barrier spray particularly important for Kleinburg homeowners.",
  },
  {
    question: 'Is Kleinburg also a high-risk area for ticks?',
    answer: "Yes. Kleinburg is considered one of York Region's highest-risk areas for blacklegged ticks (the species that transmits Lyme disease). The Humber River valley running through Kleinburg is confirmed blacklegged tick habitat, and the surrounding conservation lands support the deer populations that carry ticks from rural areas into residential properties. York Region Public Health monitors tick activity throughout the Kleinburg-Humber corridor. Many Kleinburg homeowners bundle our mosquito and tick control services in a single visit for complete yard protection.",
  },
  {
    question: 'Do rural Kleinburg properties with acreage need more treatments?',
    answer: "Larger rural properties in the Kleinburg area — especially those bordering the Humber River, adjacent fields, or conservation land edges — often benefit from six seasonal treatments rather than five, due to continuous pressure from adjacent natural areas. We assess each property individually. Call (289) 216-5030 to discuss a treatment plan for your specific Kleinburg acreage.",
  },
  {
    question: 'Does BuzzSkito serve the areas north of Kleinburg including Nobleton and Schomberg?',
    answer: 'Yes. We serve Kleinburg and surrounding York Region communities including Nobleton and Schomberg along the Oak Ridges Moraine, as well as King City and the rural King Township area. Call (289) 216-5030 to confirm service at your specific address.',
  },
]

export default function KleinburgMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential and rural properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Kleinburg' })) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Kleinburg&apos;s Humber River frontage and surrounding conservation land create some of the GTA&apos;s most intense mosquito and tick pressure. BuzzSkito delivers professional barrier spray to Kleinburg Village and all surrounding rural properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      
      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your property — identifying water features, dense vegetation, and mosquito pressure zones specific to your area.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to all vegetation, shrub interiors, leaf undersides, and fence lines using a precision backpack sprayer.' },
              { step: '3', title: '30-Day Protection Guarantee', desc: 'The barrier kills mosquitoes on contact and repels new ones for up to 30 days. If pests return within the window, we re-treat at no cost.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-brand-800 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-brand-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Kleinburg Has Extreme Mosquito Pressure</h2>
          <p>Kleinburg is one of the GTA&apos;s highest-risk locations for mosquitoes and ticks. The village is built directly on the Humber River, with the river&apos;s floodplain wrapping around the community on multiple sides. Unlike suburban GTA areas where conservation land is nearby but not immediately adjacent, Kleinburg properties are often separated from confirmed mosquito and tick habitat by no more than a property line or a fence.</p>
          <p>The Humber River through Kleinburg floods seasonally, creating standing water in the floodplain that persists for weeks after each rainfall — prime mosquito breeding habitat that generates adults continuously throughout the season. The mature deciduous forest canopy along the river valley stays cool and shaded all summer, giving adult mosquitoes the resting environment they need to survive between feeds. Properties along the Nashville Road corridor and Conservation Drive face the most direct annual exposure, but the Humber River&apos;s wildlife corridor means mosquitoes spread well into Kleinburg Village and all surrounding rural properties.</p>
          <p>For Kleinburg homeowners — whether you have a property in the village, a larger rural estate on the Humber, or an acreage along one of the conservation corridors — professional barrier spray is the most effective way to reclaim your outdoor space. BuzzSkito&apos;s Health Canada–approved formula targets every surface where mosquitoes rest on your property, providing up to 30 days of continuous protection after each treatment.</p>

          <h2>Areas We Serve in and Around Kleinburg</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>
          <p>We also serve the surrounding communities of Nobleton, Schomberg, King City, and Woodbridge. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline font-semibold">{BUSINESS.phone}</a> to confirm service at your specific address.</p>

          <h2>Mosquito Treatment Details for Kleinburg Properties</h2>
          <ul>
            <li><strong>Full-yard and perimeter spray</strong> — We treat all vegetation, shrubs, fence lines, garden beds, and natural lot edges where mosquitoes rest. For properties adjacent to the Humber River or conservation land, we pay particular attention to the property&apos;s natural edge where wildlife corridors meet your yard.</li>
            <li><strong>Up to 30-day protection</strong> — One treatment provides up to 30 days of continuous protection. For most Kleinburg properties, five treatments from May through September delivers season-long coverage.</li>
            <li><strong>Safe for children and pets</strong> — Health Canada–approved water-based formula. Kids and pets can return to treated areas 30 minutes after the spray dries.</li>
            <li><strong>Rain-resistance guarantee</strong> — If significant rain falls within one hour of your treatment, we return and re-treat at no charge.</li>
          </ul>

          <h2>Tick Control in Kleinburg</h2>
          <p>The Humber River valley through Kleinburg is confirmed blacklegged tick habitat, and the Oak Ridges Moraine — which runs north of the village — is one of Ontario&apos;s highest tick-risk environments. York Region Public Health monitors tick activity in this corridor annually. Most Kleinburg homeowners bundle mosquito and tick control in a single visit. See our <Link href="/vaughan-tick-spray" className="text-brand-700 hover:underline">York Region tick spray service</Link> for details.</p>

          <h2>Serving Vaughan and York Region</h2>
          <p>Kleinburg is part of the City of Vaughan. For mosquito control across greater Vaughan — including Woodbridge, Maple, Concord, and Thornhill — see our <Link href="/vaughan-mosquito-control" className="text-brand-700 hover:underline">Vaughan mosquito control service</Link>.</p>


          <h2>Pricing — Treatments from $99</h2>
          <p>BuzzSkito offers flexible pricing for every budget. No contracts, no cancellation fees.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Plan</th>
                  <th className="px-4 py-3 text-left">Price</th>
                  <th className="px-4 py-3 text-left">Treatments</th>
                  <th className="px-4 py-3 text-left">Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">Single Treatment</td><td className="px-4 py-3 font-extrabold text-brand-700">From $99</td><td className="px-4 py-3">1</td><td className="px-4 py-3">One-time</td></tr>
                <tr className="border-b border-gray-200 bg-gray-50"><td className="px-4 py-3 font-semibold">Basic Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$549</td><td className="px-4 py-3">5</td><td className="px-4 py-3">Monthly (May–Sep)</td></tr>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">Standard Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$994</td><td className="px-4 py-3">10</td><td className="px-4 py-3">Every 2 weeks</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-semibold">Exclusive Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$2,049</td><td className="px-4 py-3">20+</td><td className="px-4 py-3">Weekly</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose">Pricing is for standard residential lots up to 10,000 sq ft. Larger properties receive custom quotes. <Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">See full pricing details</Link> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a free quote</Link>.</p>

          <h2>Why Professional Treatment Outperforms DIY</h2>
          <p>Citronella candles, essential oil sprays, and consumer foggers provide temporary relief in a small radius — typically 30 minutes to 2 hours in the immediate area of use. Professional barrier spray treats every resting surface on your entire property, creating a residual barrier that kills mosquitoes on contact for up to 30 days. The difference is coverage and duration: DIY products address symptoms; barrier spray addresses the source of activity on your lot.</p>
          <p>For a detailed comparison, see our <Link href="/mosquito-control-diy-vs-professional" className="text-brand-700 hover:underline">DIY vs Professional Mosquito Control</Link> guide.</p>

          <h2>When to Start Treatment</h2>
          <p>In the GTA, mosquito season typically runs from late April through September. The best time to book your first treatment is early-to-mid May, before populations peak. Starting early establishes a protective barrier before breeding cycles accelerate in June and July. <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">Read our full seasonal timing guide</Link>.</p>


          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Sarah M.', text: 'BuzzSkito treated our backyard and we noticed a huge difference immediately. No mosquitoes at our outdoor birthday party! The technician was professional and on time. Highly recommend.' },
              { author: 'Mike T.', text: 'Second year using BuzzSkito for the season package. Consistent, reliable, and actually works. Our backyard used to be unbearable by July — now we\u2019re out there every evening.' },
            ].map(({ author, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 126 reviews on Google &rarr;</a>
          </div>
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
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Kleinburg property from mosquitoes and ticks this season. No contracts." />
    </>
  )
}
