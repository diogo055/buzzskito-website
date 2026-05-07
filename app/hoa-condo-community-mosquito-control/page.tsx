import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

const SLUG = '/hoa-condo-community-mosquito-control'

const FAQS = [
  {
    question: 'How does HOA or condo community mosquito control work?',
    answer: "Community mosquito control treats common areas — courtyards, walkways, pool surrounds, picnic and BBQ zones, playgrounds, perimeter landscaping, retention ponds, and entry features — under a single contract with the condo board or property management company. Pricing is typically structured per unit count or per treated acre. Treatments are scheduled to align with community events, scheduled maintenance windows, and resident usage patterns. The condo board receives a single invoice and a written treatment record after every visit, which is essential for board governance and resident communications.",
  },
  {
    question: 'How much does mosquito control cost for a condo community or townhouse complex?',
    answer: "Community contracts in the GTA typically range from $5,000-$50,000 per season depending on common area size and treatment frequency. A 50-unit townhouse complex with a pool, courtyard, and surrounding common landscape might run $8,000-$15,000 for a full 5-treatment season. A 200-unit condo complex with extensive common amenity areas (multi-pool, garden zones, walking paths, retention ponds) might run $25,000-$60,000 for the same coverage. We provide a free site assessment and written quote — pricing reflects the actual treated common area, not square footage of buildings.",
  },
  {
    question: 'Do residents need to be notified before mosquito treatment?',
    answer: "Yes — and BuzzSkito handles this for you. We provide your board or property manager with a printable resident notice template (English and French) at least 48 hours before scheduled treatment. The notice covers: treatment date and time window, products applied with Health Canada PCP numbers, drying time and re-entry guidance, and our contact line for any resident questions. We also provide signage to post at common area entrances on treatment day. This protects the board from liability and addresses the most common resident concerns proactively.",
  },
  {
    question: 'Are HOA mosquito treatments safe for residents with children, dogs, allergies, or chemical sensitivities?',
    answer: "Yes. We use Health Canada-approved water-based barrier formulas registered specifically for residential and multi-residential use. The product dries in approximately 30 minutes after which common areas are fully safe for residents, children, dogs, and people with chemical sensitivities. Our Pesticides Act-licensed technicians follow documented buffer zones around playgrounds, vegetable garden plots (where present), pet relief areas, and any resident-flagged sensitivity zones. For residents with documented chemical sensitivities, we coordinate with property management to provide advance individual notification and treatment-day timing.",
  },
  {
    question: 'How does the condo board structure a mosquito control contract?',
    answer: 'BuzzSkito offers three contract structures for HOA and condo communities: (1) Per-treatment contracts — pay-as-you-go with no annual commitment. Best for smaller communities testing the service. (2) Seasonal contracts — fixed price for 5 treatments May-September, single annual invoice or quarterly billing. Most popular structure. (3) Multi-year contracts (2-3 year terms) — locked-in pricing, priority scheduling, and dedicated technician assignment. Best value for established communities with predictable annual budgets. All contracts include the BuzzSkito Bite-Free Guarantee and written treatment records.',
  },
  {
    question: 'Can BuzzSkito treat retention ponds and stormwater management features?',
    answer: 'Yes. Retention ponds and stormwater management features are major mosquito breeding sources for many GTA condo communities. We treat these features with Health Canada-approved BTI (Bacillus thuringiensis israelensis) larvicide — the same biological larvicide used in municipal mosquito programs over drinking water reservoirs. BTI is lethal to mosquito larvae but safe for fish, frogs, ducks, and other pond ecology. Combined with barrier spray to surrounding vegetation, this approach addresses both larval breeding and adult resting habitat in retention pond areas.',
  },
  {
    question: 'How do you coordinate treatments around community events, weddings, and amenity bookings?',
    answer: 'For communities with active event calendars (weddings in courtyards, summer concerts, community BBQs, pool parties), we coordinate scheduling directly with the property manager or amenity coordinator. Pre-event treatments are typically completed 24-48 hours before scheduled events to ensure zero residual product on amenity surfaces while providing maximum mosquito reduction during the event. We accommodate emergency pre-event scheduling for confirmed contract clients.',
  },
  {
    question: 'Do you treat ticks in addition to mosquitoes for community properties?',
    answer: 'Yes. Tick treatment is increasingly important for GTA condo communities, especially those bordering ravines, conservation lands, or natural corridors. Communities in north Mississauga (Credit River corridor), Markham (Rouge Park boundary), Caledon, Halton Hills, and lakefront communities should strongly consider combined mosquito + tick programs. We bundle tick protection with mosquito service at a reduced rate compared to separate contracts. See our <a href="/tick-control" class="underline">tick control service</a> for details.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'HOA & Condo Community Mosquito Control GTA · Property Management Contracts',
  description: "Specialized mosquito and tick barrier spray for HOA, condo, and townhouse communities across the GTA. Single-invoice contracts, board-friendly resident communications, retention pond BTI treatment. Health Canada-approved. 137 five-star reviews.",
  canonical: SLUG,
})

export default function HOACondoMosquitoControlPage() {
  const lbSchema = localBusinessSchema({ description: 'Mosquito and tick barrier spray for HOA, condo, and townhouse community common areas across the Greater Toronto Area. Board-managed contracts, written treatment records, resident notification support.' })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'HOA & Condo Community Mosquito Control', description: 'Multi-unit residential mosquito and tick barrier spray for condo, HOA, and townhouse communities across the GTA.', slug: SLUG })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Commercial', url: '/commercial-mosquito-control' }, { name: 'HOA & Condo Communities', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/commercial-mosquito-control" className="hover:text-white">Commercial</Link><span>/</span>
            <span className="text-white">HOA &amp; Condo Communities</span>
          </nav>
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">For Property Managers &amp; Condo Boards · GTA-Wide · Single Invoice Contracts</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            HOA &amp; Condo Community Mosquito Control<br/>
            <span className="text-amber-400">GTA · 137 Five-Star Reviews</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-3xl mb-8 leading-relaxed">
            Common-area mosquito and tick barrier spray for condo, HOA, and townhouse communities across the GTA. Board-friendly single-invoice contracts, written treatment records, resident notification support, and retention pond BTI larvicide. Designed for property managers and condo board governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Request Community Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Single-Invoice Board Contracts</span>
          <span>✓ Resident Notification Templates</span>
          <span>✓ Retention Pond BTI Treatment</span>
          <span>✓ Pesticides Act Licensed Techs</span>
          <span>✓ 5-Star Rated · 137 Reviews</span>
        </div>
      </section>

      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-3">How does HOA or condo community mosquito control differ from residential service?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Community mosquito control treats common areas (courtyards, pools, playgrounds, walking paths, retention ponds) under a single contract with the condo board or property management company.</strong> Unlike residential service, community contracts include resident notification support (printable English/French notices, advance signage), board governance documentation (written treatment records suitable for board meetings and resident communications), retention pond BTI larvicide treatment, and coordinated scheduling around community events. Pricing typically runs $5,000-$50,000 per season for 50-200 unit communities. BuzzSkito handles all resident-facing communications for the board, allowing property managers and board members to focus on governance rather than pest control logistics.
          </p>
        </div>
      </section>

      {/* WHY THIS MATTERS FOR BOARDS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">Why condo boards need professional mosquito control</h2>
          <p className="text-base text-gray-700 mb-8">Mosquito and tick complaints have become one of the top three resident issues during summer months for GTA condo and townhouse communities. Three drivers are pushing this trend:</p>

          <div className="space-y-4 mb-10">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">1. Common-area amenity expectations</h3>
              <p className="text-sm text-gray-700">Communities increasingly market courtyards, pool decks, BBQ zones, walking paths, and rooftop terraces as core amenities. Residents expect these spaces to be usable — and a mosquito-overrun courtyard isn&rsquo;t. Untreated common areas drive resident complaints, board email volume, and amenity satisfaction surveys downward.</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">2. Retention ponds &amp; stormwater management</h3>
              <p className="text-sm text-gray-700">Most GTA condo and townhouse communities built since 2010 are required to include stormwater management features (retention ponds, bioswales, infiltration galleries). These engineered features are necessary for development approval but they create predictable mosquito breeding habitat — particularly during the May-July nymph emergence window.</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">3. Tick expansion into the GTA</h3>
              <p className="text-sm text-gray-700">Public Health Ontario&rsquo;s 2025 surveillance data confirmed Lyme-positive blacklegged tick populations in every Ontario PHU since 2022. Communities backing onto ravines, conservation lands, or any naturalized green corridor face genuine tick exposure for residents and pets. This was not a meaningful concern for GTA condo boards 5 years ago. It is now.</p>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">What we treat for community properties</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { t: 'Common courtyards', d: 'Vegetation perimeters, hedge interiors, and seating area surrounds' },
              { t: 'Pool &amp; amenity decks', d: 'Surrounding landscape, pergolas, gazebos, pool house exteriors' },
              { t: 'Walking paths &amp; trails', d: 'Trail-edge vegetation, bridge crossings, ravine-adjacent sections' },
              { t: 'Playgrounds', d: 'Perimeter buffer (not direct equipment surfaces), surrounding shade trees' },
              { t: 'BBQ &amp; picnic areas', d: 'Communal seating zones, surrounding shrubs, pergola structures' },
              { t: 'Building entryways', d: 'Lobby exterior surrounds, foyer landscape, entry-tree canopy' },
              { t: 'Retention ponds', d: 'BTI larvicide for water surface, barrier spray for surrounding vegetation' },
              { t: 'Townhouse common landscape', d: 'Mews-style central greenspace, between-unit garden beds, fence-line plantings' },
            ].map((i) => (
              <div key={i.t} className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="font-bold text-brand-900 text-sm" dangerouslySetInnerHTML={{ __html: '✓ ' + i.t }} />
                <p className="text-xs text-gray-600 mt-1">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRACT STRUCTURES */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">Contract structures for condo boards</h2>
          <p className="text-base text-gray-700 mb-8">Three options, designed around how condo boards actually budget and approve service contracts:</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-6">
              <p className="text-xs font-extrabold text-gray-500 uppercase">Option 1</p>
              <h3 className="text-xl font-extrabold text-brand-900 mt-1 mb-3">Per-Treatment</h3>
              <p className="text-sm text-gray-700 mb-4">Pay-as-you-go. No annual commitment. Best for smaller communities (under 50 units) testing the service before annual contracting.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Single visit invoice</li>
                <li>✓ No multi-treatment commitment</li>
                <li>✓ Bite-Free Guarantee on each visit</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-amber-400 bg-amber-50/40 p-6 relative">
              <span className="absolute top-3 right-3 text-[9px] bg-amber-500 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Most Popular</span>
              <p className="text-xs font-extrabold text-amber-700 uppercase">Option 2</p>
              <h3 className="text-xl font-extrabold text-brand-900 mt-1 mb-3">Seasonal Contract</h3>
              <p className="text-sm text-gray-700 mb-4">5 treatments May-September. Single annual invoice or quarterly billing. Most boards approve this structure. Best value for the standard community.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Predictable annual budget</li>
                <li>✓ Quarterly invoicing available</li>
                <li>✓ Locked-in pricing for the season</li>
                <li>✓ Priority scheduling</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-brand-300 bg-brand-50/30 p-6">
              <p className="text-xs font-extrabold text-brand-700 uppercase">Option 3</p>
              <h3 className="text-xl font-extrabold text-brand-900 mt-1 mb-3">Multi-Year Contract</h3>
              <p className="text-sm text-gray-700 mb-4">2-3 year terms with locked pricing. Best value for established communities with predictable budgets. Includes dedicated technician assignment.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Multi-year price lock</li>
                <li>✓ Dedicated technician</li>
                <li>✓ Highest priority scheduling</li>
                <li>✓ Proactive seasonal planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK WITH BOARDS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">How we work with condo boards and property managers</h2>
          <p className="text-base text-gray-700 mb-6">We&rsquo;ve designed our community service to fit how condo governance actually works. Six things we handle for the board:</p>
          <div className="space-y-3">
            {[
              { t: 'Single point of contact', d: 'One BuzzSkito account manager handles your community across all visits, all season. No re-explaining property layout to a different tech each visit.' },
              { t: 'Resident notification templates', d: 'Printable English/French resident notices sent to property management 48+ hours before each treatment. Property management distributes per board protocols.' },
              { t: 'Treatment-day signage', d: 'We provide and post signage at common area entrances on treatment day, satisfying Pesticides Act notification requirements.' },
              { t: 'Written treatment records', d: 'After every visit: date/time, technician name and licence, products applied with PCP numbers, treated zones, and any property observations. Suitable for board meeting records and resident communications.' },
              { t: 'Direct resident question handling', d: 'Residents with questions about treatment can call our office directly — they don&rsquo;t need to go through the property manager. We document all resident interactions and report back to the board.' },
              { t: 'Annual board reporting', d: 'At season end: written summary report covering all visits, observed pressure trends, recommended adjustments for next season, and any infrastructure recommendations (e.g., retention pond drainage, vegetation management).' },
            ].map((i) => (
              <div key={i.t} className="rounded-xl border border-gray-200 bg-gray-50 p-4 flex gap-3">
                <span className="shrink-0 text-amber-600 text-xl">✓</span>
                <div>
                  <h3 className="font-extrabold text-brand-900">{i.t}</h3>
                  <p className="text-sm text-gray-700">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer px-5 py-4 font-bold text-brand-900 list-none flex justify-between items-start gap-3">
                  <span>{question}</span>
                  <span className="text-brand-700 group-open:rotate-180 transition shrink-0">▾</span>
                </summary>
                <p className="px-5 pb-5 text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }} />
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Request a community quote" subtext="Free site walk-through · Written quote within 48 hours · Board-ready proposal" />
    </>
  )
}
