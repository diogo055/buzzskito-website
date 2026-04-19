import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Commercial Mosquito Control GTA | BuzzSkito',
  description:
    'Commercial mosquito control for GTA businesses. Professional barrier spray for restaurants, event venues & properties. Call (289) 216-5030.',
  canonical: '/commercial-mosquito-control',
})

const FAQS = [
  {
    question: 'What types of commercial properties does BuzzSkito treat?',
    answer: "We treat all outdoor commercial and institutional properties including restaurants and patios, event venues and wedding properties, golf courses and country clubs, resorts and recreational facilities, homeowner associations and managed communities, daycare and school outdoor spaces, summer camps, and multi-unit residential common areas. If you have outdoor space where people gather, we can protect it.",
  },
  {
    question: 'How does commercial mosquito treatment differ from residential?',
    answer: "Commercial properties typically have larger treatment areas, more complex vegetation, higher stakes for guest experience, and specific compliance requirements. BuzzSkito provides customized commercial programs with flexible scheduling (off-hours, early morning, or between events), volume-based pricing, treatment logs for compliance documentation, and the same Health Canada–approved formulas used in residential service.",
  },
  {
    question: "Is BuzzSkito's treatment safe for restaurant patios and food-service areas?",
    answer: "Yes, with important caveats. We treat all surrounding vegetation, shrubs, fence lines, and perimeter areas. We do not apply near open food, food preparation surfaces, or directly to dining furniture. We recommend scheduling treatment the evening before service or early morning before opening. After the 30-minute dry time, treated vegetation is safe for guests and staff.",
  },
  {
    question: 'Can BuzzSkito treat before a specific event?',
    answer: "Yes. We offer event-specific treatments for wedding venues, outdoor events, corporate gatherings, and similar occasions. We recommend treatment 24–48 hours before the event for optimal results. Rush scheduling is available; contact us at (289) 216-5030 to discuss your event timeline.",
  },
  {
    question: 'Do you offer seasonal commercial contracts?',
    answer: "Yes. We offer seasonal programs for commercial clients with guaranteed scheduling windows, priority service dates, volume pricing, and consolidated invoicing. Seasonal programs run May through September and can be customized for your property's specific use pattern and treatment frequency requirements.",
  },
  {
    question: 'What documentation does BuzzSkito provide for commercial accounts?',
    answer: "We provide detailed treatment logs after each service visit including date, technician, areas treated, product applied, application rate, and observed conditions. This documentation is suitable for health department records, insurance compliance, and internal facility management reporting.",
  },
]

export default function CommercialMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Commercial Mosquito Control', description: 'Professional mosquito and tick barrier spray for commercial properties, restaurants, event venues, golf courses, and managed communities across the GTA.', slug: '/commercial-mosquito-control' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Commercial', url: '/commercial-mosquito-control' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/commercial-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Commercial</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Commercial Mosquito &amp; Tick Control in the GTA</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Protect your guests, employees, and outdoor spaces from mosquitoes and ticks. BuzzSkito provides professional barrier spray for restaurants, event venues, golf courses, managed communities, and all commercial properties across the GTA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Commercial Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Flexible Scheduling (Off-Hours Available)</span>
          <span>✓ Treatment Logs for Compliance</span>
          <span>✓ Seasonal Programs Available</span>
          <span>✓ Event-Specific Treatments</span>
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
          <h2>Commercial Properties We Serve</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Restaurants & Patios', desc: 'Protect patio dining areas from mosquitoes. Treatments scheduled around service hours to minimize disruption.' },
              { title: 'Event Venues & Wedding Properties', desc: 'One-time or seasonal programs. Event-specific pre-treatment available 24–48 hours before your booking.' },
              { title: 'Golf Courses & Country Clubs', desc: 'Perimeter treatment, tee area, and clubhouse surrounds. Tick control for wooded borders and rough areas.' },
              { title: 'Managed Communities & HOAs', desc: 'Common area treatment for condo complexes, townhome communities, and HOA-managed properties.' },
              { title: 'Resorts & Recreational Facilities', desc: 'Comprehensive outdoor protection for resort properties, summer camps, and outdoor recreation facilities.' },
              { title: 'Schools & Daycare Facilities', desc: 'Protect outdoor play areas and school grounds. We work around school schedules and safety requirements.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>Why Commercial Mosquito Control Matters</h2>
          <p>Mosquito activity on your outdoor property affects guest experience, staff comfort, and revenue. A restaurant patio loses covers when mosquitoes are active. An event venue's reviews mention pest conditions. A golf course loses rounds when players are driven inside by biting insects. Professional barrier spray is one of the most cost-effective investments in outdoor guest experience for GTA businesses — one treatment creates up to 30 days of dramatically improved conditions.</p>

          <h2>Tick Control for Commercial Properties</h2>
          <p>Golf courses, camp properties, school grounds, and any commercial property adjacent to green corridors, ravines, or naturalized areas in the GTA should also consider tick control. Blacklegged ticks carrying Lyme disease are well-established in GTA green corridors. Liability and duty of care considerations make tick control increasingly relevant for commercial and institutional operators. BuzzSkito's combined mosquito and tick treatment addresses both with a single service visit.</p>

          <h2>What to Expect from a Commercial Program</h2>
          <ul>
            <li>Initial property walkthrough and treatment plan</li>
            <li>Customized scheduling around your operating hours and events</li>
            <li>Health Canada–approved, water-based formula — safe for use around guests and staff after 30-minute dry time</li>
            <li>Detailed treatment logs for compliance documentation</li>
            <li>Priority scheduling for existing commercial accounts</li>
            <li>Flexible season programs or on-demand individual treatments</li>
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
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Commercial Mosquito Control FAQ</h2>
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

      <CTASection heading="Get a Commercial Mosquito Control Quote" subtext="Serving restaurants, event venues, golf courses, and managed communities across the GTA. Call to discuss your property." />
    </>
  )
}
