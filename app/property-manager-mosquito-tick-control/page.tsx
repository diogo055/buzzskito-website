import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'

const SLUG = '/property-manager-mosquito-tick-control'

const FAQS = [
  {
    question: 'How does mosquito and tick control work for property management portfolios?',
    answer: 'BuzzSkito works directly with property management companies overseeing rental portfolios, multi-residential buildings, single-family rentals, and commercial properties. We structure portfolio contracts around your management workflow: single point of contact for all properties, consolidated invoicing (per-property or single PM-level invoice), online treatment scheduling and reporting, and tenant communication support handled by our office. Volume pricing applies — portfolio rates are typically 15-25% below standard residential pricing on a per-property basis.',
  },
  {
    question: 'What types of properties does BuzzSkito service for property managers?',
    answer: "We service every residential and commercial property type a GTA property manager typically oversees: single-family rental homes, semi-detached rentals, townhouse units (individually owned, individually rented), small multi-residential buildings (under 100 units), purpose-built rental towers (for common-area treatment), commercial properties with outdoor amenity space, mixed-use buildings, and short-term rental properties. For larger condo and HOA-style communities, see our dedicated <a href='/hoa-condo-community-mosquito-control' class='underline'>HOA & Condo Community service</a>.",
  },
  {
    question: 'How are portfolio contracts priced and invoiced?',
    answer: "Portfolio contracts use volume pricing — the more properties under management, the lower the per-property rate. Typical structure: 10-25 properties = 15% discount on standard residential rates, 25-50 properties = 20% discount, 50+ properties = 25% discount + dedicated technician assignment. Invoicing is fully flexible: per-property invoices (for portfolios where landlords pay individually), single PM-level invoice with property-level line items, monthly aggregated invoicing, or quarterly billing. We integrate with most property management software including Buildium, Yardi, AppFolio, and Rent Manager.",
  },
  {
    question: 'Can BuzzSkito coordinate directly with tenants for entry and access?',
    answer: 'Yes. For portfolio properties, we offer direct tenant coordination as a standard service: scheduled tenant notifications (48+ hours advance), entry coordination, post-treatment instructions left at the property, and any tenant questions handled by our office (not the property manager). The property manager receives a treatment summary after every visit but does not need to handle the day-to-day tenant communication. This significantly reduces PM time spent on pest management coordination.',
  },
  {
    question: 'What about tenant complaints and emergency mosquito or tick issues?',
    answer: "We treat tenant complaints as priority service items. For confirmed portfolio clients, tenant-reported pest issues are typically scheduled for inspection within 48 hours and treatment within 5-7 days. For acute issues (visible tick infestation, severe mosquito complaints), we offer same-day or next-day emergency service for portfolio clients. Emergency calls are billed at standard rates for portfolio contracts — no premium pricing for urgent service. The property manager receives a written response report after every tenant complaint, suitable for tenant correspondence and any liability documentation.",
  },
  {
    question: 'Do you provide treatment documentation suitable for landlord compliance and tenant disputes?',
    answer: "Yes. We maintain detailed records for every property visit: date and time, technician name and licence number, products applied with Health Canada PCP numbers and batch identifiers, treated zones with property notes, tenant interactions (if any), and any property-condition observations. These records are essential when tenants dispute pest issues, when landlords need evidence of due diligence, when LTB hearings involve pest concerns, or when insurance carriers request documentation. All records available through our property management portal.",
  },
  {
    question: 'How quickly can BuzzSkito onboard a new property management portfolio?',
    answer: 'New portfolio onboarding typically takes 7-14 days from initial contract execution. Onboarding steps: (1) Portfolio review and tenant database integration. (2) Property-by-property baseline assessment for properties over 5,000 sq ft (smaller properties use standard treatment plans). (3) Tenant communication template approval. (4) Software integration setup (if applicable). (5) First treatment scheduling. We can compress this timeline for urgent portfolio transitions — call (289) 216-5030 if you need to onboard before the May treatment window.',
  },
  {
    question: "What's the difference between this service and your HOA/Condo Community service?",
    answer: "Property management portfolios cover multiple distinct properties under shared management (e.g., a PM company managing 30 single-family rentals across the GTA). HOA/Condo Community service covers a single multi-unit residential complex with shared common areas under board governance (e.g., a 200-unit condo complex with shared courtyards, pool deck, and walking paths). Many property management companies need both: portfolio service for individual rentals and HOA/condo service for any multi-residential properties they manage. We can structure single contracts covering both services for hybrid portfolios.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Property Management Mosquito & Tick Control GTA · Portfolio Contracts',
  description: "Volume-priced mosquito and tick barrier spray for GTA property management portfolios. Single point of contact, consolidated invoicing, direct tenant coordination. Health Canada-approved, BuzzSkito Bite-Free Guarantee, 150+ five-star reviews.",
  canonical: SLUG,
})

export default function PropertyManagerMosquitoTickControlPage() {
  const lbSchema = localBusinessSchema({ description: 'Property management portfolio mosquito and tick barrier spray service across the Greater Toronto Area. Volume pricing, consolidated invoicing, direct tenant coordination.' })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Property Management Portfolio Mosquito & Tick Control', description: 'Volume-priced mosquito and tick treatment for property management portfolios across the GTA.', slug: SLUG })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Commercial', url: '/commercial-mosquito-control' }, { name: 'Property Management', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG, '2026-07-01')) }} />

      <CityHero
        image="/spray-backyard.webp"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Commercial', href: '/commercial-mosquito-control' },
          { label: 'Property Management' },
        ]}
        title={<>Property Management Mosquito + Tick Control</>}
        titleAccent={<>150+ Five-Star Reviews · Volume Portfolio Rates</>}
        subtitle={<>Volume-priced mosquito and tick barrier spray for GTA property management portfolios. Single point of contact, consolidated invoicing, direct tenant coordination, and integration with your PM software. Designed for the workflow of professional property managers.</>}
      >
        <p className="mt-6 text-xs font-extrabold text-amber-400 uppercase tracking-widest">For Property Management Companies · Portfolio Contracts · Volume Pricing · GTA-Wide</p>
      </CityHero>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ 15-25% Volume Discount</span>
          <span>✓ Consolidated Invoicing</span>
          <span>✓ Direct Tenant Coordination</span>
          <span>✓ Compliance Documentation</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      <QuickAnswer question="How does property management mosquito control differ from regular residential service?">
        <p>
          <strong>Property management contracts treat multiple distinct properties under a portfolio agreement with a single property management company.</strong> Volume pricing applies (15-25% below standard residential rates depending on portfolio size), invoicing is consolidated to your preferred structure (per-property, single PM-level, or aggregated), tenant coordination is handled by our office (not the PM), and we integrate with your existing PM software (Buildium, Yardi, AppFolio, Rent Manager). Documentation meets compliance and liability standards — every visit produces a written record suitable for tenant disputes, LTB hearings, insurance claims, and landlord due diligence. BuzzSkito&rsquo;s portfolio service is designed around how professional property managers actually operate.
        </p>
      </QuickAnswer>

      {/* WHY PMs NEED THIS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">Why property managers need a portfolio mosquito + tick contract</h2>
          <p className="text-base text-gray-700 mb-8">Tenant complaints about mosquitoes and ticks have become one of the top five seasonal pest issues across GTA rental portfolios. Three reasons:</p>

          <div className="space-y-4 mb-10">
            <div className="rounded-xl bg-gray-50 border-l-4 border-brand-700 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">📋 Documentation requirements have escalated</h3>
              <p className="text-sm text-gray-700">Tenant disputes increasingly cite pest issues. The Landlord and Tenant Board considers documented pest management as evidence of landlord due diligence. Property managers without scheduled professional pest treatment expose their landlord clients to abatement claims, repair-and-deduct disputes, and reputational risk. A portfolio contract with documented quarterly or seasonal treatments addresses this directly.</p>
            </div>
            <div className="rounded-xl bg-gray-50 border-l-4 border-brand-700 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">🏘️ Tenant retention requires amenity protection</h3>
              <p className="text-sm text-gray-700">Tenants expect functional outdoor space — backyards, balconies, patios, and amenity decks. Mosquito-overrun outdoor space drives tenant turnover and negative reviews on rental platforms. Properties with documented mosquito treatment retain tenants longer and command stronger renewal rates than untreated properties in the same market.</p>
            </div>
            <div className="rounded-xl bg-gray-50 border-l-4 border-brand-700 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">⚠️ Liability exposure from tick-borne illness</h3>
              <p className="text-sm text-gray-700">Public Health Ontario&rsquo;s 2025 surveillance data confirms blacklegged tick presence in every Ontario PHU. As Lyme disease cases rise (3,614 confirmed in 2025), tenants increasingly raise tick exposure as a habitability concern. Documented professional tick treatment is becoming baseline duty of care for landlords with properties backing onto ravines, conservation areas, or any naturalized green space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PRICING */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">Portfolio volume pricing</h2>
          <p className="text-base text-gray-700 mb-8">Discounts scale with portfolio size. All pricing is per-property — same as standard residential service, just at portfolio rates:</p>

          <div className="rounded-2xl border-2 border-gray-200 overflow-hidden bg-white mb-6">
            <table className="w-full text-sm">
              <thead className="bg-brand-900 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">Portfolio Size</th>
                  <th className="text-left px-4 py-3 font-bold">Discount</th>
                  <th className="text-left px-4 py-3 font-bold">Per-Property Single Visit</th>
                  <th className="text-left px-4 py-3 font-bold">Per-Property Season (5 visits)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-200"><td className="px-4 py-3 font-semibold">Standard residential</td><td className="px-4 py-3">—</td><td className="px-4 py-3">$99-$159</td><td className="px-4 py-3">$549</td></tr>
                <tr className="border-t border-gray-200 bg-amber-50/30"><td className="px-4 py-3 font-semibold">10-25 properties</td><td className="px-4 py-3 font-bold text-amber-700">15% off</td><td className="px-4 py-3">$84-$135</td><td className="px-4 py-3">$467</td></tr>
                <tr className="border-t border-gray-200 bg-amber-50/30"><td className="px-4 py-3 font-semibold">25-50 properties</td><td className="px-4 py-3 font-bold text-amber-700">20% off</td><td className="px-4 py-3">$79-$127</td><td className="px-4 py-3">$439</td></tr>
                <tr className="border-t border-gray-200 bg-amber-100/40"><td className="px-4 py-3 font-semibold">50+ properties</td><td className="px-4 py-3 font-bold text-amber-700">25% off + dedicated tech</td><td className="px-4 py-3">$74-$119</td><td className="px-4 py-3">$412</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 italic">Tick add-on is bundled at portfolio rates. Custom pricing for portfolios with mixed property types (rentals + commercial + multi-res). Mid-season portfolio additions priced at the prevailing portfolio rate.</p>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">How portfolio contracts work</h2>
          <p className="text-base text-gray-700 mb-6">Designed around how professional property managers actually operate:</p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { t: 'Single point of contact', d: 'One BuzzSkito account manager handles your portfolio across all properties, all season. No re-explaining to a different tech each visit.' },
              { t: 'Flexible invoicing', d: 'Per-property invoices, single PM-level invoice with line items, monthly aggregated, or quarterly. Match your existing landlord billing structure.' },
              { t: 'PM software integration', d: 'Buildium, Yardi, AppFolio, Rent Manager, and most major PM platforms supported. Treatment records sync to property files automatically.' },
              { t: 'Direct tenant coordination', d: 'Tenant notifications, entry scheduling, post-treatment instructions — all handled by our office. Property manager doesn&rsquo;t mediate.' },
              { t: 'Compliance documentation', d: 'Every treatment produces a written record suitable for LTB hearings, insurance claims, tenant disputes, and landlord due diligence.' },
              { t: 'Same-day emergency response', d: 'Tenant-reported acute issues (tick infestation, severe mosquito complaints) eligible for same-day or next-day service at portfolio rates.' },
            ].map((i) => (
              <div key={i.t} className="rounded-xl bg-gray-50 border border-gray-200 p-5">
                <h3 className="font-extrabold text-brand-900 mb-1">{i.t}</h3>
                <p className="text-sm text-gray-700">{i.d}</p>
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
              <details key={question} className="bg-white rounded-xl border border-gray-200 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-bold text-brand-900 list-none flex justify-between items-start gap-3 rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <span className="text-brand-700 group-open:rotate-180 transition shrink-0">▾</span>
                </summary>
                <p className="px-5 pb-5 text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }} />
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Request a portfolio quote" subtext="Volume pricing · Consolidated invoicing · Direct tenant coordination" />
    </>
  )
}
