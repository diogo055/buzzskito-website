import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Restaurant Patio Mosquito Control GTA | BuzzSkito',
  description:
    'Restaurant patio mosquito control for GTA businesses. Regular treatment schedules for patio season May-Sep. Health Canada-approved. Call (289) 216-5030.',
  canonical: '/restaurant-patio-mosquito-control',
})

const FAQS = [
  {
    question: 'Is BuzzSkito\'s treatment safe for restaurant patios where food is served?',
    answer: 'Yes, with standard precautions. We treat all surrounding vegetation, shrubs, fence lines, planters, and perimeter areas — not food preparation surfaces, open food, or dining furniture directly. We recommend scheduling treatment the evening before service or early morning before opening. After the 30-minute dry time, the treated vegetation is completely safe for guests and staff. The product is Health Canada-approved and water-based.',
  },
  {
    question: 'How often should a restaurant patio be treated for mosquitoes?',
    answer: 'For consistent protection throughout patio season (May through September), we recommend treatments every 21-28 days — typically 4-5 treatments per season. High-pressure patios near water features, ravines, or dense landscaping may benefit from the full 5-treatment program. We offer flexible scheduling around your operating hours so there is zero disruption to service.',
  },
  {
    question: 'Can you treat during off-hours so it doesn\'t affect our restaurant operations?',
    answer: 'Absolutely. Most restaurant clients schedule treatments for early morning (before 10 AM) or late evening (after closing). The product dries in approximately 30 minutes and has no lingering odour, so even a morning treatment is fully cured before lunch service. We work around your schedule completely.',
  },
  {
    question: 'What does restaurant patio mosquito control cost?',
    answer: 'Commercial patio treatment pricing depends on the size of the outdoor area, complexity of landscaping, and treatment frequency. Single treatments start from $99. Seasonal programs with regular scheduling offer volume-based pricing. Call (289) 216-5030 for a free, no-obligation quote specific to your patio and property.',
  },
  {
    question: 'Do you provide documentation for health department compliance?',
    answer: 'Yes. After every treatment visit we provide a detailed service log including date, time, technician name, areas treated, product applied (with registration number), application rate, and weather conditions. This documentation satisfies health department, insurance, and internal facility management requirements.',
  },
]

export default function RestaurantPatioMosquitoControlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Restaurant Patio Mosquito Control', description: 'Professional mosquito barrier spray for restaurant patios, bar terraces, and outdoor dining areas across the Greater Toronto Area.', slug: '/restaurant-patio-mosquito-control' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Commercial', url: '/commercial-mosquito-control' }, { name: 'Restaurant Patio', url: '/restaurant-patio-mosquito-control' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/restaurant-patio-mosquito-control')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/commercial-mosquito-control" className="hover:text-white">Commercial</Link><span>/</span>
            <span className="text-white">Restaurant Patio</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Restaurant Patio Mosquito Control in the GTA</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Keep your patio full and your guests comfortable all season. BuzzSkito provides regular mosquito barrier spray for restaurant patios across Mississauga, Toronto, Oakville, Burlington, and the GTA &mdash; scheduled around your operating hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Patio Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>&#10003; Health Canada&ndash;Approved Formula</span>
          <span>&#10003; Off-Hours Scheduling Available</span>
          <span>&#10003; Treatment Logs for Compliance</span>
          <span>&#10003; No Contracts Required</span>
          <span>&#10003; 5-Star Rated &middot; 126 Reviews</span>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How Restaurant Patio Treatment Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Patio Assessment', desc: 'We evaluate your outdoor dining area, surrounding vegetation, planters, and perimeter to create a tailored treatment plan.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to all vegetation, planters, fence lines, and perimeter areas during your preferred off-hours.' },
              { step: '3', title: '21-30 Day Protection', desc: 'The barrier kills mosquitoes on contact and repels new ones. We return on a regular schedule to maintain continuous protection throughout patio season.' },
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
          <h2>Mosquitoes Cost Restaurants Revenue</h2>
          <p>Every restaurant owner with a patio knows the pattern: a table of four sits down, mosquitoes appear within minutes, and the table asks to move inside &mdash; or doesn&rsquo;t come back. During peak patio season (June through August), mosquito activity directly reduces patio covers, shortens dining times, and generates negative reviews mentioning &ldquo;bugs.&rdquo;</p>
          <p>One professional barrier spray treatment creates up to 30 days of dramatically improved conditions across your entire outdoor dining area. For a restaurant running 50+ covers per night on the patio, the cost of treatment pays for itself with a single additional table that stays outside rather than moving in or leaving.</p>

          <h2>GTA Patios with the Highest Mosquito Pressure</h2>
          <p>Restaurant patios near these features experience the heaviest mosquito activity and benefit most from regular treatment:</p>
          <ul>
            <li><strong>Waterfront patios</strong> &mdash; Port Credit, Oakville harbour, Burlington lakefront, and Toronto waterfront restaurants near stagnant marina water</li>
            <li><strong>Ravine-adjacent patios</strong> &mdash; restaurants along the Don Valley, Humber corridor, and Credit River in Mississauga and Brampton</li>
            <li><strong>Patios with dense landscaping</strong> &mdash; hedge walls, ornamental grasses, and planter boxes create mosquito resting habitat right next to diners</li>
            <li><strong>Patios near stormwater ponds</strong> &mdash; common in newer commercial developments across Mississauga, Brampton, and Oakville</li>
          </ul>

          <h2>Regular Treatment Schedules for Patio Season</h2>
          <p>BuzzSkito offers seasonal commercial programs designed around your restaurant&rsquo;s operating schedule:</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Program</th>
                  <th className="px-4 py-3 text-left">Frequency</th>
                  <th className="px-4 py-3 text-left">Coverage</th>
                  <th className="px-4 py-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { program: '3-Treatment Program', freq: 'Every 28 days (Jun-Aug)', coverage: 'Core patio season', best: 'Lower-pressure locations away from water' },
                  { program: '4-Treatment Program', freq: 'Every 25 days (May-Sep)', coverage: 'Extended patio season', best: 'Most GTA restaurant patios' },
                  { program: '5-Treatment Program', freq: 'Every 21 days (May-Sep)', coverage: 'Full season, maximum protection', best: 'Waterfront and ravine-adjacent patios' },
                ].map(({ program, freq, coverage, best }) => (
                  <tr key={program} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-brand-800">{program}</td>
                    <td className="px-4 py-3 text-gray-600">{freq}</td>
                    <td className="px-4 py-3 text-gray-600">{coverage}</td>
                    <td className="px-4 py-3 text-gray-600">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What We Treat Around Your Patio</h2>
          <ul>
            <li><strong>Perimeter vegetation</strong> &mdash; all hedges, shrubs, ornamental grasses, and trees surrounding the patio</li>
            <li><strong>Planter boxes and containers</strong> &mdash; exterior surfaces of planters and the vegetation within them</li>
            <li><strong>Fence lines and privacy screens</strong> &mdash; lattice, wooden fences, and any vertical surfaces where mosquitoes rest</li>
            <li><strong>Undersides of overhangs</strong> &mdash; awning edges, pergola beams, and shade structure undersides</li>
            <li><strong>Adjacent property lines</strong> &mdash; vegetation bordering sidewalks, parking areas, and neighbouring properties (with permission)</li>
          </ul>
          <p>We do <strong>not</strong> spray dining furniture, food preparation areas, or open food. Treatment is applied exclusively to vegetation and structural perimeter areas.</p>

          <h2>Food Safety &amp; Compliance</h2>
          <p>BuzzSkito uses a Health Canada&ndash;registered, water-based formula. The active ingredient bonds to vegetation surfaces and is not airborne after application. Once dry (approximately 30 minutes), there is no transfer to clothing, skin, or food. We schedule treatments before your operating hours and provide full documentation for health department and insurance compliance.</p>

          <h2>Cities We Serve</h2>
          <p>BuzzSkito provides restaurant patio mosquito control across the GTA:</p>
          <div className="not-prose flex flex-wrap gap-2 my-4">
            {[
              { city: 'Mississauga', href: '/mississauga-mosquito-control' },
              { city: 'Toronto', href: '/toronto-mosquito-control' },
              { city: 'Oakville', href: '/oakville-mosquito-control' },
              { city: 'Burlington', href: '/burlington-mosquito-spray' },
              { city: 'Brampton', href: '/brampton-mosquito-control' },
              { city: 'Hamilton', href: '/hamilton-mosquito-control' },
              { city: 'Vaughan', href: '/vaughan-mosquito-control' },
              { city: 'Etobicoke', href: '/etobicoke-mosquito-control' },
            ].map(({ city, href }) => (
              <Link key={city} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{city}</Link>
            ))}
          </div>

          <h2>Related Services</h2>
          <ul>
            <li><Link href="/commercial-mosquito-control" className="text-brand-700 hover:underline">Commercial Mosquito Control</Link> &mdash; full commercial program details</li>
            <li><Link href="/wedding-mosquito-control" className="text-brand-700 hover:underline">Event Mosquito Control</Link> &mdash; one-time treatments for special events on your patio</li>
            <li><Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">Pricing</Link> &mdash; transparent 2026 pricing information</li>
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
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 126 reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Restaurant Patio Mosquito Control FAQ</h2>
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

      <CTASection heading="Get a Restaurant Patio Quote" subtext="Regular mosquito treatment scheduled around your operating hours. No contracts. Health Canada-approved." />
    </>
  )
}
