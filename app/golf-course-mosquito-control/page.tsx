import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Golf Course Mosquito Control Ontario',
  description:
    'Golf course mosquito & tick control in Ontario. Treat tee boxes, cart paths, clubhouse patios & perimeters. Commercial pricing. Call (289) 216-5030.',
  canonical: '/golf-course-mosquito-control',
})

const FAQS = [
  {
    question: 'How do you treat a golf course without disrupting play?',
    answer: 'We schedule treatments during off-hours — early morning before the first tee time or late evening after the last group finishes. Treatment of specific areas (tee boxes, clubhouse surrounds) can also be done in sections during low-traffic periods. The product dries in approximately 30 minutes, so treated areas are safe for play well before golfers arrive. We work with your pro shop or course superintendent to coordinate timing.',
  },
  {
    question: 'What areas of the golf course do you treat?',
    answer: 'We focus on high-traffic and high-pressure zones: tee boxes and surrounding vegetation, cart path edges, clubhouse patio and surrounding landscaping, practice facility perimeters, halfway house areas, and any vegetation adjacent to ponds or water features. We do not treat fairways or greens — mosquitoes and ticks rest in vegetation and shaded perimeter areas, not on maintained turf.',
  },
  {
    question: 'How much does golf course mosquito control cost?',
    answer: 'Golf course pricing is property-specific and depends on the total area being treated, number of zones, and treatment frequency. Commercial programs include volume-based pricing and seasonal scheduling. Call (289) 216-5030 for a free site assessment and custom quote for your course.',
  },
  {
    question: 'Is the treatment safe for the turf, water features, and wildlife?',
    answer: 'Yes. Our Health Canada-approved, water-based formula is applied exclusively to vegetation and structural surfaces — not to maintained turf, putting greens, or directly into water features. We observe mandatory buffer zones around any water body. The product targets mosquitoes and ticks specifically and has minimal impact on non-target species when applied according to label directions.',
  },
  {
    question: 'Do you offer tick control for golf courses as well?',
    answer: 'Yes. Tick control is especially important for golf courses with wooded borders, rough areas, naturalized zones, and properties near conservation lands or river corridors. Blacklegged ticks carrying Lyme disease are well-established in GTA green corridors. Our combined mosquito and tick treatment addresses both pests in a single service visit, reducing liability exposure for the course.',
  },
]

export default function GolfCourseMosquitoControlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Golf Course Mosquito & Tick Control', description: 'Professional mosquito and tick barrier spray for golf courses, country clubs, and recreational facilities across Ontario.', slug: '/golf-course-mosquito-control' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Commercial', url: '/commercial-mosquito-control' }, { name: 'Golf Course', url: '/golf-course-mosquito-control' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/golf-course-mosquito-control')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/commercial-mosquito-control" className="hover:text-white">Commercial</Link><span>/</span>
            <span className="text-white">Golf Course</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Golf Course Mosquito &amp; Tick Control in Ontario</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Protect your members, guests, and staff from mosquitoes and ticks. BuzzSkito treats tee boxes, cart paths, clubhouse patios, and course perimeters &mdash; scheduled around your tee times and play schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Course Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>&#10003; Health Canada&ndash;Approved Formula</span>
          <span>&#10003; Scheduled Around Tee Times</span>
          <span>&#10003; Mosquito + Tick Combined Treatment</span>
          <span>&#10003; Treatment Logs for Compliance</span>
          <span>&#10003; 5-Star Rated &middot; 129 Reviews</span>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How Golf Course Treatment Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Course Assessment', desc: 'We walk your property with your superintendent to identify high-pressure zones, water features, and priority treatment areas.' },
              { step: '2', title: 'Targeted Barrier Spray', desc: 'Our licensed technicians treat tee box vegetation, cart path borders, clubhouse surrounds, and perimeter areas during off-hours using Health Canada-approved formula.' },
              { step: '3', title: 'Seasonal Protection', desc: 'Regular treatments every 21-28 days maintain continuous protection from May through September. We coordinate every visit with your tee sheet.' },
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

      {/* Main content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Golf Courses Need Professional Mosquito Control</h2>
          <p>Golf courses are mosquito magnets. Irrigation ponds, water hazards, creek crossings, and low-lying areas create ideal breeding habitat. Dense vegetation along fairway borders and cart paths provides the shaded resting sites where mosquitoes spend 90% of their time. The result: golfers get bitten on tee boxes, along cart paths, and on the clubhouse patio &mdash; and that affects rounds played, member satisfaction, and event bookings.</p>
          <p>Professional barrier spray targets these resting sites directly, killing active mosquito populations and creating a residual barrier that repels new mosquitoes for up to 30 days per treatment. The same treatment also eliminates ticks in treated zones &mdash; increasingly important as blacklegged ticks carrying Lyme disease expand throughout Ontario&rsquo;s green corridors.</p>

          <h2>Areas We Treat on Golf Courses</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Tee Boxes & Surrounds', desc: 'Vegetation, shrubs, and tree canopy immediately surrounding each tee box where golfers stand and wait.' },
              { title: 'Cart Path Borders', desc: 'Dense vegetation and overhanging branches along cart paths where mosquitoes rest and ambush passing golfers.' },
              { title: 'Clubhouse Patio & Event Areas', desc: 'All landscaping, planters, and perimeter vegetation around dining patios, event tents, and gathering areas.' },
              { title: 'Practice Facility Perimeters', desc: 'Driving range borders, putting green surrounds, and short game area vegetation.' },
              { title: 'Water Feature Perimeters', desc: 'Vegetation surrounding irrigation ponds, decorative water features, and creek crossings — with mandatory buffer zones.' },
              { title: 'Halfway Houses & Rest Stops', desc: 'Vegetation and structure surrounds at on-course rest areas where golfers pause during the round.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>GTA Golf Courses Near Water Features</h2>
          <p>Golf courses in the GTA are frequently built near the natural features that produce the highest mosquito pressure:</p>
          <ul>
            <li><strong>Credit River corridor</strong> &mdash; courses in Mississauga, Brampton, and Caledon along the Credit Valley</li>
            <li><strong>Humber River valley</strong> &mdash; courses in Vaughan, Woodbridge, and northwest Toronto</li>
            <li><strong>Lake Ontario shoreline</strong> &mdash; courses in Oakville, Burlington, and south Mississauga near the lakeshore</li>
            <li><strong>Niagara Escarpment</strong> &mdash; courses in Milton, Halton Hills, and Hamilton near escarpment ravines</li>
            <li><strong>Oak Ridges Moraine</strong> &mdash; courses in King City, Richmond Hill, and Aurora near moraine headwaters</li>
          </ul>

          <h2>Tick Control for Golf Courses</h2>
          <p>Golf courses with wooded borders, naturalized rough areas, or properties adjacent to conservation lands face increasing tick risk. Blacklegged ticks are well-established along GTA river corridors and in York Region. Golfers walking through rough, searching for errant shots near tree lines, or using cart paths bordered by tall grass are exposed to tick habitat.</p>
          <p>BuzzSkito&rsquo;s combined mosquito and tick treatment addresses both pests in a single service visit. We treat the vegetation transition zones where ticks concentrate &mdash; the 1&ndash;3 metre border where maintained turf meets rough or wooded areas. This targeted approach provides effective tick control without treating the entire course acreage.</p>

          <h2>Scheduling Around Play</h2>
          <p>We understand that course access and timing are critical. BuzzSkito treatment for golf courses is scheduled exclusively during off-hours:</p>
          <ul>
            <li><strong>Early morning</strong> &mdash; before the first tee time, typically 5:30&ndash;7:00 AM</li>
            <li><strong>Late evening</strong> &mdash; after the last group finishes, typically after 7:00 PM</li>
            <li><strong>Shoulder season</strong> &mdash; spring and fall treatments can be scheduled during lower-traffic weekdays</li>
          </ul>
          <p>The product dries in approximately 30 minutes. There is no visible residue and no odour. Treated areas are safe for play immediately after the dry period.</p>

          <h2>Commercial Pricing for Golf Courses</h2>
          <p>Golf course treatment is priced based on the total area treated, number of zones, and treatment frequency. We offer:</p>
          <ul>
            <li><strong>Seasonal programs</strong> &mdash; 4&ndash;5 treatments from May through September with guaranteed scheduling windows</li>
            <li><strong>Event-specific treatments</strong> &mdash; one-time treatments before tournaments, member events, and corporate outings</li>
            <li><strong>Custom zone programs</strong> &mdash; treat priority areas only (clubhouse + tee boxes) rather than full course perimeter</li>
          </ul>
          <p>Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> for a free site assessment and custom quote. See our <Link href="/commercial-mosquito-control" className="text-brand-700 hover:underline">commercial mosquito control page</Link> for general commercial program details.</p>

          <h2>Related Services</h2>
          <ul>
            <li><Link href="/commercial-mosquito-control" className="text-brand-700 hover:underline">Commercial Mosquito Control</Link> &mdash; full commercial program overview</li>
            <li><Link href="/tick-control" className="text-brand-700 hover:underline">Tick Control</Link> &mdash; details on tick treatment for large properties</li>
            <li><Link href="/wedding-mosquito-control" className="text-brand-700 hover:underline">Event Mosquito Control</Link> &mdash; one-time treatments for tournaments and events</li>
            <li><Link href="/service-areas" className="text-brand-700 hover:underline">Service Areas</Link> &mdash; all 19+ GTA cities we serve</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 129 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Sarah M.', text: 'BuzzSkito treated our backyard and we noticed a huge difference immediately. No mosquitoes at our outdoor birthday party! The technician was professional and on time. Highly recommend.' },
              { author: 'Mike T.', text: 'Second year using BuzzSkito for the season package. Consistent, reliable, and actually works. Our backyard used to be unbearable by July \u2014 now we\u2019re out there every evening.' },
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
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 129 reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Golf Course Mosquito Control FAQ</h2>
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

      <CTASection heading="Get a Golf Course Treatment Quote" subtext="Protect your members and guests from mosquitoes and ticks. Free site assessment. Scheduled around your tee sheet." />
    </>
  )
}
