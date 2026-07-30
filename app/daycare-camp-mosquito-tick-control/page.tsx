import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

const SLUG = '/daycare-camp-mosquito-tick-control'

const FAQS = [
  {
    question: 'Is mosquito and tick spray safe for daycares, summer camps, and schools?',
    answer: "Yes — when applied by a Pesticides Act-licensed technician using Health Canada-approved formulations, with appropriate scheduling and re-entry protocols. We use water-based barrier formulas registered specifically for residential and institutional outdoor use. After the spray dries (approximately 30 minutes), the treated area is fully safe for children — we recommend treating before opening hours or on weekends to ensure the drying window is complete before any child arrives. Our technicians follow documented buffer zones around playgrounds, vegetable garden plots, sandboxes, and water play features.",
  },
  {
    question: 'When should daycares schedule mosquito and tick treatment?',
    answer: 'The ideal scheduling for childcare facilities is early morning before opening hours (typically 5-7 AM, allowing the 30-minute drying window before children arrive at 7-8 AM) or weekends when the facility is closed. For overnight summer camps, treatments are scheduled when children are off-site (drop-off/pick-up days, scheduled trips, weekly transition periods). BuzzSkito coordinates scheduling directly with the facility administrator to minimize any operational disruption.',
  },
  {
    question: 'How do you handle parent communication for daycare mosquito treatments?',
    answer: 'We provide every daycare and camp client with a parent communication package including: (1) Pre-treatment notice template (English and French) explaining what is being applied, why, and when. (2) Health Canada PCP numbers and product safety data sheets for parents requesting them. (3) Re-entry timing and post-treatment safety guidance. (4) Our direct contact line for parents with specific concerns. Most facilities email this notice to parents 1-2 weeks before treatment season starts and post a treatment-day reminder.',
  },
  {
    question: 'Do you provide tick treatment for outdoor camp programs?',
    answer: 'Yes — and tick treatment is increasingly essential for camps. Public Health Ontario tick surveillance has confirmed established blacklegged tick populations in every Ontario PHU since 2022. Camps with outdoor programming (forest school, nature exploration, hiking trails, sports fields adjacent to natural areas) face genuine tick exposure risk for children. Our tick barrier treatment targets the specific micro-habitats where ticks concentrate (lawn-to-woods transitions, leaf litter, garden bed edges, fence lines around play areas) without affecting open play surfaces children actually use.',
  },
  {
    question: 'How much does mosquito and tick treatment cost for a daycare or summer camp?',
    answer: 'Daycare and camp pricing depends on facility size and treatment frequency. Typical ranges: a small daycare with under 5,000 sq ft of outdoor play area runs $99-$159 per treatment, $549 for the 5-treatment season. A larger childcare centre with playground, garden, and grass play areas (5,000-15,000 sq ft) typically runs $159-$249 per treatment, $799-$1,200 for the season. Summer camps with multiple programming areas, sports fields, and forest trail systems are quoted individually based on treated acreage. Combined mosquito + tick programs save versus separate contracts.',
  },
  {
    question: 'Are there specific Ontario regulations for pest control at licensed childcare facilities?',
    answer: "Yes. Licensed childcare facilities in Ontario operate under the Child Care and Early Years Act, which requires safe practices around pesticide application. Specifically: (1) Treatments must be performed by a licensed extermination technician (Class 6 or structural). (2) Re-entry intervals must be strictly observed before children access treated areas. (3) Records of applications must be maintained for ministry review. (4) Parents must be informed in advance per facility communication policies. BuzzSkito's standard daycare protocol meets and exceeds all these requirements, and we provide all documentation needed for regulatory compliance.",
  },
  {
    question: 'Can BuzzSkito treat sports fields, playgrounds, and outdoor classrooms at schools?',
    answer: "Yes. We work with private schools, alternative schools, and forest school programs across the GTA. School treatments are typically scheduled during weekends or PA days to ensure no student exposure during application or drying. We treat surrounding vegetation (perimeter trees, shrub borders, fence-line plantings, ravine-adjacent woodland edges) — not the play surfaces themselves. For schools with outdoor classrooms or forest school programming, tick treatment of forest-edge vegetation is highly recommended given Ontario's confirmed expanding blacklegged tick range.",
  },
  {
    question: 'Do you serve in-home daycares and home-based childcare providers?',
    answer: "Absolutely. Many GTA in-home daycares operate from suburban backyards that face the same mosquito and tick pressure as any residential property. Home-based daycare providers can use our standard residential service with the same parent-notification support, treatment scheduling around drop-off/pick-up windows, and treatment records suitable for any inquiries from parents or licensing visits. Standard residential pricing applies ($99 single visit, $549 season).",
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Daycare, Camp & School Mosquito + Tick Control GTA · Health Canada Approved',
  description: "Specialized mosquito and tick barrier spray for daycares, summer camps, schools, and childcare facilities across the GTA. Health Canada-approved, Pesticides Act licensed, parent-notification support, scheduled around children's hours. 150+ five-star reviews.",
  canonical: SLUG,
})

export default function DaycareCampMosquitoTickControlPage() {
  const lbSchema = localBusinessSchema({ description: 'Mosquito and tick barrier spray service for daycares, summer camps, schools, and childcare facilities across the Greater Toronto Area. Health Canada-approved formulas, parent communication support, scheduled around children\'s hours.' })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Daycare, Camp & School Mosquito and Tick Control', description: 'Childcare-facility mosquito and tick barrier spray service across the GTA.', slug: SLUG })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Commercial', url: '/commercial-mosquito-control' }, { name: 'Daycares, Camps & Schools', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG, '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Commercial', href: '/commercial-mosquito-control' },
          { label: 'Daycares, Camps & Schools' },
        ]}
        title={<>Daycare, Camp &amp; School Mosquito + Tick Control</>}
        titleAccent={<>150+ Five-Star Reviews · Health Canada Approved</>}
        subtitle={<>Specialized mosquito and tick barrier spray for licensed daycares, summer camps, private schools, and childcare facilities across the GTA. Treatments scheduled around children&rsquo;s hours, parent communication templates included, full regulatory compliance documentation provided.</>}
        image="/spray-backyard.webp"
      >
        <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mt-5">Childcare-Specific Protocols · Parent Communication Support · GTA-Wide</p>
      </CityHero>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Pesticides Act Licensed Techs</span>
          <span>✓ Pre-Opening Hours Scheduling</span>
          <span>✓ Parent Notification Templates</span>
          <span>✓ Lyme Disease Prevention</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      <QuickAnswer question="Is mosquito and tick spray safe for licensed daycares and summer camps?">
        <p>
          <strong>Yes — when applied by a Pesticides Act-licensed technician using Health Canada-approved formulas, treatments are completed before children arrive (typically pre-opening hours or weekends), and the 30-minute drying window is fully observed before any child accesses the treated area.</strong> Licensed Ontario childcare facilities operate under the Child Care and Early Years Act, which requires specific protocols for any pest management activity. BuzzSkito&rsquo;s standard daycare protocol meets and exceeds these requirements, and we provide written documentation of every treatment for facility records and ministry compliance. Our childcare clients across the GTA have completed five seasons of routine treatments without a single child safety incident.
        </p>
      </QuickAnswer>

      {/* WHY DAYCARES NEED THIS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">Why daycares and camps need professional mosquito and tick control</h2>
          <p className="text-base text-gray-700 mb-8">Three trends are driving every Ontario childcare operator to consider professional pest management for the first time:</p>

          <div className="space-y-4">
            <div className="rounded-xl bg-gray-50 border-l-4 border-emerald-500 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">📈 Tick expansion is now confirmed in every Ontario PHU</h3>
              <p className="text-sm text-gray-700">Public Health Ontario&rsquo;s blacklegged tick surveillance now records established or emerging risk areas across most of southern Ontario. For childcare facilities with outdoor play space backing onto ravines, conservation lands, or any naturalized green corridor, tick exposure for children is no longer hypothetical. Ontario reported 2,369 confirmed and probable Lyme disease cases in 2024 &mdash; up 27% over 2023, and the most of any province, per the <a href="https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html" target="_blank" rel="noopener" className="underline">Public Health Agency of Canada</a>. 2024 is the most recent year published.</p>
            </div>
            <div className="rounded-xl bg-gray-50 border-l-4 border-emerald-500 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">👨‍👩‍👧 Parents are increasingly asking about it</h3>
              <p className="text-sm text-gray-700">Tick prevention has become a routine question parents ask when comparing childcare options. Facilities with documented mosquito and tick management — and printable parent communication explaining the protocol — gain a meaningful enrolment advantage in the GTA market. Several BuzzSkito daycare clients report parents specifically choosing their facility over competitors because of demonstrated tick prevention practices.</p>
            </div>
            <div className="rounded-xl bg-gray-50 border-l-4 border-emerald-500 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">🌳 Forest school programming is mainstream</h3>
              <p className="text-sm text-gray-700">Ontario&rsquo;s growing forest school and nature-based programming models include extended outdoor time in naturalized environments. While educationally valuable, these programs increase student exposure to ticks, mosquitoes, and biting insects. Treating forest-edge vegetation along program areas is now considered baseline duty of care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE TREAT */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">What we treat at childcare facilities</h2>
          <p className="text-base text-gray-700 mb-6">Our application targets adult mosquito resting habitat and tick questing zones — not the play surfaces children directly use:</p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { t: '✓ Perimeter vegetation', d: 'Shrub borders, hedges, and tree lines surrounding play areas' },
              { t: '✓ Forest/woodland edges', d: 'Transition zones between maintained lawn and naturalized areas' },
              { t: '✓ Ravine boundaries', d: 'Fence-adjacent vegetation for facilities backing onto ravines' },
              { t: '✓ Garden bed margins', d: 'Around vegetable gardens (excluding plants), pollinator gardens with documented buffer' },
              { t: '✓ Storage shed surrounds', d: 'Behind sheds, woodpiles, and stored materials where ticks aggregate' },
              { t: '✓ Pool fence vegetation', d: 'For facilities with swimming pools, surrounding vegetation only' },
            ].map((i) => (
              <div key={i.t} className="rounded-xl bg-white border border-gray-200 p-4">
                <p className="font-bold text-brand-900 text-sm">{i.t}</p>
                <p className="text-xs text-gray-600 mt-1">{i.d}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-extrabold text-brand-900 mb-3 mt-8">What we don&rsquo;t treat (documented buffer zones)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { t: '✗ Sandboxes and sand play areas', d: 'Documented buffer maintained' },
              { t: '✗ Vegetable gardens (plants themselves)', d: 'Treated surrounding only, not edible foliage' },
              { t: '✗ Water play features', d: 'Splash pads, water tables — buffer maintained' },
              { t: '✗ Open lawn/play surfaces', d: 'No broadcast spray on open turf' },
              { t: '✗ Playground equipment', d: 'No direct application to climbing structures, slides, swings' },
              { t: '✗ Pollinator gardens (when designated)', d: 'Documented at site visit, buffer maintained' },
            ].map((i) => (
              <div key={i.t} className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                <p className="font-bold text-amber-900 text-sm">{i.t}</p>
                <p className="text-xs text-amber-800 mt-1">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOL */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">Our childcare protocol</h2>
          <p className="text-base text-gray-700 mb-6">Six steps for every facility, every visit:</p>
          <ol className="space-y-3">
            {[
              { n: 1, t: 'Site assessment & buffer zone documentation', d: 'Initial site walk identifies play areas, sandbox/water play features, vegetable gardens, pollinator zones, and any sensitivity considerations. All buffer zones documented in your treatment plan.' },
              { n: 2, t: 'Parent notification 1-2 weeks before season starts', d: 'We provide template (English and French) covering products applied, scheduling protocol, and parent contact line for questions.' },
              { n: 3, t: 'Pre-treatment notice 48 hours in advance', d: 'Reminder email/notice for parents and staff. Treatment-day signage posted at facility entrances.' },
              { n: 4, t: 'Treatment scheduled outside operating hours', d: 'Most childcare treatments scheduled 5-7 AM weekdays (before opening) or weekends. The 30-minute drying window completes before children arrive.' },
              { n: 5, t: 'Written treatment record provided', d: 'After every visit: date/time, technician licence number, products with PCP numbers, treated zones, weather conditions. Suitable for facility records and ministry compliance.' },
              { n: 6, t: 'Direct parent question handling', d: 'Parents with specific concerns can contact our office directly. We respond within 24 hours and document all interactions for the facility record.' },
            ].map((s) => (
              <li key={s.n} className="flex gap-4 bg-gray-50 rounded-xl border border-gray-200 p-4">
                <span className="shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center">{s.n}</span>
                <div>
                  <h3 className="font-extrabold text-brand-900">{s.t}</h3>
                  <p className="text-sm text-gray-700">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
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
                <p className="px-5 pb-5 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Get your childcare facility quote" subtext="Free site assessment · Parent communication templates included · Regulatory documentation provided" />
    </>
  )
}
