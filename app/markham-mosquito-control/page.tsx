import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Markham Mosquito Control 2026 · From $99 · 150+ Five-Star Reviews',
  description:
    'Markham mosquito barrier spray from $99. Health Canada-approved, no contracts, Bite-Free Guarantee, plus how to compare Markham providers. (289) 216-5030.',
  canonical: '/markham-mosquito-control',
})

const CITY = 'Markham'
const SLUG = '/markham-mosquito-control'
const TICK_SLUG = '/markham-tick-spray'
const NEIGHBOURHOODS: { name: string; href?: string }[] = [
  { name: 'Unionville' },
  { name: 'Cornell' },
  { name: 'Milliken Mills' },
  { name: 'Berczy Village' },
  { name: 'Wismer' },
  { name: 'Angus Glen' },
  { name: 'Cathedraltown' },
  { name: 'Thornhill', href: '/thornhill-mosquito-control' },
]
const FAQS = [
  {
    question: 'How much does mosquito control cost in Markham?',
    answer: 'BuzzSkito mosquito control in Markham starts from $99 per application. Properties near Rouge National Urban Park, Swan Lake, or any ravine corridor typically benefit most from the full seasonal package for continuous protection. No contracts. Call (289) 216-5030 for a free Markham quote.',
  },
  {
    question: 'Who is the best mosquito control company in Markham?',
    answer: 'Markham homeowners are usually choosing between a mosquito and tick specialist and a general pest or lawn-care company. BuzzSkito treats mosquitoes and ticks only, starts at $99 for a single treatment, holds 150+ five-star Google reviews (5.0 average, zero negatives), and backs every visit with the Bite-Free Guarantee — free re-treatment if pests return inside the protection window. Mosquito Man is a franchise pest-control operation covering many pest types, and LawnSavers sells mosquito service alongside its lawn-care programs. If you want specialist depth and no contract, call (289) 216-5030.',
  },
  {
    question: 'Do I have to sign a contract for mosquito control in Markham?',
    answer: 'No. BuzzSkito works on a no-contract basis in Markham — book a single treatment from $99, judge the result, and decide from there. Seasonal plans are available if you want continuous coverage ($549 for 5 monthly treatments, $994 for 10 bi-weekly, $2,049 for weekly service May through September), but there are no cancellation fees and no automatic renewal. Before booking with any Markham provider, confirm the contract terms in writing — seasonal agreements often auto-renew.',
  },
  {
    question: 'Why do Unionville backyards have such a bad mosquito problem?',
    answer: "Unionville's Toogood Pond and the creek system flowing through the heritage village core create a natural mosquito nursery that is active from May through August. The mature tree canopy along Main Street Unionville and the adjacent park system retains moisture and provides ideal resting habitat for adult mosquitoes throughout the day. Homes backing onto the pond or within a few blocks of the creek typically benefit most from early-season barrier spray.",
  },
  {
    question: 'Does the Rouge National Urban Park affect mosquito pressure in Markham?',
    answer: "Significantly. Cornell and Cathedraltown are the Markham neighbourhoods closest to the Rouge National Urban Park boundary, and both experience elevated mosquito pressure due to their proximity to the Rouge River system and its associated wetlands. Milner Creek, which runs through central Markham, also contributes to breeding habitat for properties in Berczy Village and Wismer. Professional barrier spray on your property creates a treated buffer between these natural areas and your yard.",
  },
  {
    question: 'Is Swan Lake in Markham Village a source of mosquitoes?',
    answer: "Swan Lake and the Don River headwater tributaries running through Markham Village and Old Markham are active mosquito breeding sources through the early and mid season. The shallow margins of Swan Lake in particular warm quickly in spring, producing an early surge of adult mosquitoes before many homeowners have scheduled their first treatment. We recommend Markham Village homeowners book their first visit in early May.",
  },
  {
    question: 'Can I bundle tick control with mosquito spray in Markham?',
    answer: 'Yes, and it is the usual choice for homes near the Rouge National Urban Park or any forest edge in Cornell and Cathedraltown, where blacklegged (Lyme-carrying) ticks are established. Tick control runs five treatments across the May to September season: $597 on its own, or $497 when added to any mosquito plan, a $100 saving over booking it separately. See our Markham tick spray page for the full treatment schedule.',
  },
]

export default function MarkhamMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Markham' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/markham-mosquito-control', '2026-07-01')) }} />

      {/* Hero */}
      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: CITY },
        ]}
        title={<>{CITY} Mosquito Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>From Toogood Pond in Unionville to the Rouge River boundary in Cornell — BuzzSkito delivers professional mosquito barrier spray to every Markham neighbourhood.</>}
        image="/spray-backyard.webp"
      />

      
      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Bite-Free Guarantee</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
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
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Our Process</p>
          <h2 className="h2-display text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
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
          <h2>Why Mosquito Pressure Is High in Markham</h2>
          <p>Markham&apos;s geography makes it one of the GTA&apos;s most active mosquito municipalities. The city straddles the Rouge River system — one of Canada&apos;s largest urban river ecosystems — with wetland pockets and forested floodplain running from Cathedraltown in the north down through Cornell to the Rouge National Urban Park boundary. Milner Creek bisects central Markham, winding through Berczy Village and Wismer communities where maturing subdivision landscaping traps moisture along fence lines and garden borders.</p>
          <p>In historic Markham Village, the Don River headwater tributaries and Swan Lake sustain mosquito populations from early May, while Toogood Pond in Unionville draws mosquitoes into the creek valley park system throughout the peak season. For Markham homeowners, the combination of a broad river system, multiple pond features, and a dense mature tree canopy creates conditions that reward early, consistent barrier spray treatment.</p>

          <h2>Markham Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Markham communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map(({ name, href }) => href ? (
              <Link key={name} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{name}</Link>
            ) : (
              <span key={name} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{name}</span>
            ))}
          </div>

          <h2>Our Markham Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Yard assessment</strong> — We identify creek proximity, tree canopy, standing water, and conditions specific to your Markham lot.</li>
            <li><strong>Vegetation barrier spray</strong> — Full treatment of shrubs, hedges, fence lines, ornamental grasses, and tree understorey.</li>
            <li><strong>28-day residual protection</strong> — Health Canada–approved formula continues working between visits; safe for kids and pets after a 30-minute dry time.</li>
            <li><strong>Seasonal program</strong> — Five applications May through September, timed to match Markham&apos;s Rouge River and creek-driven emergence patterns.</li>
          </ul>

          <h2>Also Providing Tick Control in Markham</h2>
          <p>Markham&apos;s proximity to the Rouge National Urban Park and extensive forest edges along the Rouge River corridor create significant blacklegged tick exposure for homeowners in Cornell and Cathedraltown. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Markham tick spray service</Link> — combining both treatments gives your property complete year-round protection.</p>


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

          <h2>How to Choose a Mosquito Control Company in Markham</h2>
          <p>Plenty of companies will spray a Markham backyard. These are the checks that separate a professional barrier treatment from a quick pass with a fogger — use them on us as readily as on anyone else.</p>
          <ol>
            <li><strong>Health Canada–approved product, applied under licence.</strong> Ontario requires a licensed pesticide applicator for any commercial application. Ask which product is going on your yard and who is holding the wand.</li>
            <li><strong>A re-spray guarantee in writing.</strong> If rain arrives within an hour of application, the product has not cured. A reputable company re-treats at no charge — ours is the Bite-Free Guarantee.</li>
            <li><strong>Pricing published before the sales call.</strong> You should be able to see a starting price without booking an in-home estimate first. Ours starts at $99 per treatment on a standard lot.</li>
            <li><strong>Reviews from Markham customers, not brand-wide totals.</strong> A franchise can carry a large national review count and still be new on your street. Filter for your own city before you judge.</li>
            <li><strong>Local knowledge of where the water is.</strong> Ask where the pressure on your street actually comes from. In Markham the honest answers are the Rouge River system, Milner Creek, Swan Lake, and Toogood Pond — a technician who cannot name the nearest one is guessing.</li>
            <li><strong>Cost per visit, not just the season total.</strong> A seasonal package only looks cheap until you divide by the number of visits. Confirm how many treatments are included and how far apart they fall.</li>
          </ol>

          <h2>Compare Markham Pest Control Options</h2>
          <p>Looking at all your Markham pest control options? See our specialist guide: <Link href="/pest-control-markham" className="text-brand-700 hover:underline font-semibold">Pest Control in Markham</Link> — explains why a mosquito and tick specialist beats a generalist for the two pests that actually drive Markham backyard misery. Or compare top providers head-to-head: <Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline font-semibold">Best Mosquito Control Companies in the GTA</Link>.</p>
          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Reviews</p>
          <h2 className="h2-display text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Katharine M.', text: 'Fantastic experience with the mosquito control last summer! We\u2019re re-signing for this season once again \u2014 we can finally enjoy our yard again in Mississauga.' },
              { author: 'Anthony', text: 'Highly recommend this company for mosquito control. I got my house in Milton serviced recently and loved the end result!' },
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
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 150+ reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Markham property from mosquitoes this season. No contracts." />
    </>
  )
}
