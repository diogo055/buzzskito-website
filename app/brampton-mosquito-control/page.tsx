import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Brampton | From $99',
  description:
    "Mosquito control spray in Brampton. Serving Castlemore, Heart Lake, Springdale & all neighbourhoods. Call (289) 216-5030.",
  canonical: '/brampton-mosquito-control',
})

const CITY = 'Brampton'
const SLUG = '/brampton-mosquito-control'
const NEIGHBOURHOODS: { name: string; href?: string }[] = [
  { name: 'Mount Pleasant', href: '/mount-pleasant-mosquito-control' },
  { name: 'Gore Meadows' },
  { name: 'Castlemore', href: '/castlemore-mosquito-control' },
  { name: 'Springdale', href: '/springdale-mosquito-control' },
  { name: 'Bramalea', href: '/bramalea-mosquito-control' },
  { name: 'Creditview' },
  { name: "Fletcher's Meadow", href: '/fletcher-meadows-mosquito-control' },
  { name: 'Heart Lake', href: '/heart-lake-mosquito-control' },
  { name: 'Sandringham' },
  { name: 'Credit Valley' },
  { name: 'Vales of Castlemore' },
  { name: 'Bram West', href: '/bram-west-mosquito-control' },
  { name: 'Sandalwood', href: '/sandalwood-mosquito-control' },
  { name: 'Snelgrove', href: '/snelgrove-mosquito-control' },
]

const FAQS = [
  {
    question: 'How much does mosquito control cost in Brampton?',
    answer: 'BuzzSkito mosquito treatments in Brampton start from $99 per application for a standard residential lot. No contracts. Properties near stormwater ponds, Heart Lake Conservation Area, or Etobicoke Creek typically benefit most from the complete seasonal package. Call (289) 216-5030 for a free, no-obligation quote.',
  },
  {
    question: 'Why does Brampton have so many mosquitoes?',
    answer: "Brampton's rapid residential development has created abundant mosquito breeding habitat. Stormwater management ponds are built into virtually every new development and serve as ideal breeding sites — shallow, still water with minimal predator populations. The Etobicoke Creek corridor, Heart Lake Conservation Area, and Humber River tributaries in northern Brampton add significant natural mosquito pressure on top of the stormwater pond baseline.",
  },
  {
    question: 'Which Brampton neighbourhoods have the worst mosquito problems?',
    answer: "Properties near stormwater ponds in Mount Pleasant, Springdale, and Vales of Castlemore consistently have high mosquito activity due to the density of retention ponds in these developments. Gore Meadows and Heart Lake neighbourhoods face both pond pressure and natural creek corridor exposure from Etobicoke Creek and Heart Lake Conservation Area. Credit Valley properties near the Etobicoke Creek also experience elevated season-long pressure.",
  },
  {
    question: 'When does mosquito season start in Brampton?',
    answer: "Mosquito activity in Brampton typically begins in late April when temperatures consistently exceed 10°C. Stormwater ponds that retain standing water over winter can produce early-season mosquitoes in April — sometimes before seasonal norms. Peak activity runs May through July, with stormwater ponds sustaining a secondary surge in August following summer rain events. The season typically ends by late September.",
  },
  {
    question: 'How many mosquito treatments does my Brampton home need?',
    answer: "We recommend 4–5 treatments from May through September, spaced 21–28 days apart, for continuous protection. Properties with stormwater pond views or backing onto Etobicoke Creek, Heart Lake Conservation Area, or any ravine benefit most from the full 5-treatment program. Our technicians will assess your specific exposure and recommend the right schedule for your property.",
  },
  {
    question: "Is BuzzSkito's mosquito spray safe for Brampton families with kids and pets?",
    answer: "Yes. Our Health Canada–approved, water-based formula is safe for children and pets once dry — approximately 30 minutes after application. We recommend keeping people and pets off treated surfaces during that drying window. After that, your yard is fully safe with the mosquito barrier protection active. Our formula does not harm beneficial insects when applied according to label directions.",
  },
  {
    question: 'How quickly can BuzzSkito service my Brampton property?',
    answer: "We typically schedule Brampton service visits within the same week during the active season. Call (289) 216-5030 to confirm current availability at your specific Brampton address. Early-season bookings (April–May) are subject to higher demand, so booking ahead is recommended.",
  },
  {
    question: 'What is barrier spray and how does it work in Brampton?',
    answer: "Barrier spray is a residual insecticide applied to all vegetation on your property — shrubs, garden beds, the underside of leaves, fence lines, deck undersides, and shaded areas where mosquitoes rest during the heat of the day. The formula kills mosquitoes on contact and creates a residual deterrent that prevents new mosquitoes from settling on treated vegetation for up to 30 days. It's the most effective yard-level tool available for Brampton homeowners dealing with pond-driven mosquito pressure.",
  },
  {
    question: 'Does BuzzSkito also provide tick control in Brampton?',
    answer: "Yes. Brampton's ravines, Heart Lake Conservation Area, and Humber River tributaries also harbour blacklegged ticks. Many Brampton homeowners bundle mosquito and tick treatments for complete yard protection throughout the season. Ask about seasonal bundle pricing when you call.",
  },
]

export default function BramptonMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Brampton' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/brampton-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Brampton's stormwater ponds and rapid new development fuel heavy mosquito activity each season. BuzzSkito provides professional barrier spray for Brampton homeowners — fast, effective, and guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Rain-Back Guarantee</span>
          <span>✓ 5-Star Rated · 126 Reviews</span>
        </div>
      </section>

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Mosquito Control Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional mosquito control service from <strong className="text-brand-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/free-yard-assessment" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your Brampton property — identifying stormwater pond proximity, creek exposure, and mosquito pressure zones specific to your neighbourhood.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to all vegetation, shrub interiors, leaf undersides, fence lines, and property perimeters using a precision backpack sprayer.' },
              { step: '3', title: '30-Day Protection Guarantee', desc: 'The barrier kills mosquitoes on contact and repels new ones for up to 30 days. If pests return within the protection window, we re-treat at no cost.' },
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
          <h2>Mosquito Pressure in Brampton</h2>
          <p>Brampton is one of Canada's fastest-growing cities, and that growth has created a mosquito problem that gets worse with each new development phase. Every subdivision built in Brampton includes stormwater management ponds engineered to capture runoff — but these ponds are perfect mosquito breeding habitat: shallow, still, warm in summer, and largely unshaded in newer areas. Neighbourhoods like <strong>Mount Pleasant, Springdale, Vales of Castlemore, and Credit Valley</strong> have dozens of these ponds within walking distance of residential streets.</p>
          <p>Natural water features compound the stormwater issue. The <strong>Etobicoke Creek corridor</strong> runs north-south through central Brampton, and <strong>Heart Lake Conservation Area</strong> in the city's northwest creates a significant natural mosquito source for adjacent neighbourhoods. <strong>Humber River tributaries</strong> in northern Brampton (Castlemore, Countryside Drive area) add further pressure for properties near undeveloped greenbelt.</p>

          <h2>Mosquito Pressure Zones by Brampton Neighbourhood</h2>
          <h3>Mount Pleasant, Vales of Castlemore, Springdale</h3>
          <p>Northern Brampton's newest developments sit adjacent to the highest concentration of stormwater management ponds in the city. Many properties in these areas have direct pond views — and those ponds sustain mosquito activity from early May through September without natural predator populations to control them.</p>

          <h3>Heart Lake and Gore Meadows</h3>
          <p>Heart Lake Conservation Area borders these north-west Brampton neighbourhoods and generates substantial natural mosquito populations each season. The combination of conservation area exposure and nearby stormwater ponds gives Heart Lake and Gore Meadows some of the city's most persistent mosquito pressure.</p>

          <h3>Creditview, Credit Valley, Bramalea</h3>
          <p>These neighbourhoods along the Etobicoke Creek corridor experience elevated mosquito activity from the creek's floodplain and seasonal side channels. Summer rain events regularly re-activate breeding in low-lying areas adjacent to the creek system.</p>

          <h2>Brampton Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map(({ name, href }) => href ? (
              <Link key={name} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{name}</Link>
            ) : (
              <span key={name} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{name}</span>
            ))}
          </div>

          <h2>Recommended Mosquito Treatment Schedule for Brampton</h2>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Treatment</th>
                  <th className="px-4 py-2 text-left">Timing</th>
                  <th className="px-4 py-2 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: 'Treatment 1', timing: 'Early May', purpose: 'Establish barrier before stormwater ponds activate' },
                  { t: 'Treatment 2', timing: 'Early June', purpose: 'Maintain coverage through peak ramp-up' },
                  { t: 'Treatment 3', timing: 'Early July', purpose: 'Peak mosquito season — highest activity window' },
                  { t: 'Treatment 4', timing: 'Early August', purpose: 'Post-rain surge from stormwater and creek features' },
                  { t: 'Treatment 5', timing: 'Early September', purpose: 'Late-season close-out for extended coverage' },
                ].map(({ t, timing, purpose }) => (
                  <tr key={t} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-gray-800">{t}</td>
                    <td className="px-4 py-2 text-brand-700 font-semibold">{timing}</td>
                    <td className="px-4 py-2 text-gray-600">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Mosquito Control Pricing in Brampton</h2>
          <p>BuzzSkito mosquito treatments in Brampton start from $99 per visit — no contracts, no pressure to commit to a full season.</p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Property Type</th>
                  <th className="px-4 py-2 text-left">Starting Price</th>
                  <th className="px-4 py-2 text-left">Typical Properties</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Standard residential lot (under 6,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Brampton detached or semi-detached home' },
                  { type: 'Mid-size lot (6,000–10,000 sq ft)', price: 'Custom quote', coverage: 'Larger detached, pond-backing, Castlemore properties' },
                  { type: 'Large / estate property (10,000+ sq ft)', price: 'Custom quote', coverage: 'Vales of Castlemore, rural properties, large corner lots' },
                ].map(({ type, price, coverage }) => (
                  <tr key={type} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-semibold text-brand-800">{type}</td>
                    <td className="px-4 py-2 font-extrabold text-brand-700">{price}</td>
                    <td className="px-4 py-2 text-gray-600">{coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>No contracts and no cancellation fees. Call <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a> for a free quote. See our <Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">2026 mosquito control pricing guide</Link> for a full Ontario breakdown.</p>

          <h2>Professional Mosquito Control vs. DIY in Brampton</h2>
          <p>Hardware stores sell foggers, citronella candles, and consumer sprays. Here&apos;s why they fall short for Brampton&apos;s specific mosquito problem:</p>
          <ul>
            <li><strong>Consumer foggers provide hours of relief, not 30 days.</strong> Professional residual barrier spray bonds to leaf surfaces and keeps working for weeks.</li>
            <li><strong>Application technique matters more than product.</strong> Mosquitoes rest on leaf undersides, in shaded shrub interiors, and under deck joists — surfaces consumer foggers miss entirely.</li>
            <li><strong>Brampton&apos;s mosquito sources are beyond your control.</strong> Stormwater management ponds, Heart Lake Conservation Area, and Etobicoke Creek will produce mosquitoes every season regardless of what you do on your lot. Professional barrier spray stops them from settling on your property.</li>
            <li><strong>Larvicide tablets don&apos;t address stormwater ponds.</strong> You can&apos;t legally treat municipal stormwater ponds. The only effective residential strategy is creating a treated barrier on your own property.</li>
          </ul>

          <h2>Choosing the Right Mosquito Control Service in Brampton</h2>
          <ul>
            <li><strong>Health Canada–registered products.</strong> Any product applied must be registered under the Pest Control Products Act. BuzzSkito uses only registered, water-based formulas.</li>
            <li><strong>Licensed applicators.</strong> Ontario requires a Pesticide Applicator&apos;s Licence for all commercial applications.</li>
            <li><strong>Rain-back guarantee.</strong> Reputable companies re-treat if rain falls within the cure window. Standard at BuzzSkito.</li>
            <li><strong>No long-term contracts.</strong> Book a single treatment and evaluate results before committing.</li>
            <li><strong>Local Brampton knowledge.</strong> Companies that understand stormwater pond dynamics and Etobicoke Creek exposure treat more effectively.</li>
            <li><strong>Transparent pricing.</strong> BuzzSkito publishes pricing and quotes over the phone — no mandatory &quot;assessment visit&quot; required first.</li>
          </ul>

          <h2>What to Expect on Your BuzzSkito Treatment Day</h2>
          <ol>
            <li><strong>SMS notification before arrival</strong> — You&apos;ll receive a text when your technician is on the way. You don&apos;t need to be home.</li>
            <li><strong>Property walkthrough</strong> — On the first visit, your technician assesses pond proximity, vegetation density, and property-specific risk factors.</li>
            <li><strong>Full barrier application</strong> — Systematic treatment of all vegetation: shrubs, garden beds, leaf undersides, fence lines, deck undersides, woodpiles. A typical Brampton lot takes 25–40 minutes.</li>
            <li><strong>Lawn sign placement</strong> — Confirms the treatment date and product used.</li>
            <li><strong>30-minute dry time</strong> — Keep children and pets off treated surfaces while the product cures.</li>
            <li><strong>Follow-up email confirmation</strong> — Treatment log with areas treated, product applied, and your next visit date.</li>
          </ol>

          <h2>Also Providing Tick Control in Brampton</h2>
          <p>Brampton's ravines and wooded corridors are also prime tick habitat. Ask about our <Link href="/brampton-tick-spray" className="text-brand-700 hover:underline">Brampton tick control service</Link> — bundle both for complete seasonal protection.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What Brampton Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Priya R.', location: 'Castlemore', text: 'Called on a Tuesday, they were at my Brampton home by Thursday. The technician explained exactly what product they were using and why it\'s safe for our dog. Couldn\'t be happier with the results.' },
              { author: 'Raj P.', location: 'Springdale', text: 'Our house backs onto a stormwater pond and mosquitoes were unbearable. After the first BuzzSkito treatment the change was dramatic. We signed up for the full season and haven\'t looked back.' },
              { author: 'Kevin M.', location: 'Heart Lake', text: 'Living near Heart Lake Conservation Area means mosquitoes every year. BuzzSkito is the first thing that actually worked. Professional, on time, and the SMS alerts are a nice touch.' },
              { author: 'Tina S.', location: 'Credit Valley', text: 'Tried citronella candles and store sprays for years. One BuzzSkito treatment did more than everything else combined. Our kids can actually play in the backyard now.' },
            ].map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Brampton</span></p>
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
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-gray-500">
            Comparing options? See our honest <Link href="/best-mosquito-control-companies-brampton" className="text-brand-700 underline hover:text-brand-500">2026 Brampton mosquito control comparison</Link> — pricing, reviews, contracts side by side.
          </p>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Brampton property from mosquitoes this season. No contracts." />
    </>
  )
}
