import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Oakville | $99 | BuzzSkito',
  description:
    'Mosquito control in Oakville. Barrier spray from $99. Serving Glen Abbey, Bronte, Old Oakville & all areas. Call (289) 216-5030.',
  canonical: '/oakville-mosquito-control',
})

const CITY = 'Oakville'
const SLUG = '/oakville-mosquito-control'
const NEIGHBOURHOODS: { name: string; href?: string; postalCodes?: string }[] = [
  { name: 'Bronte', href: '/bronte-mosquito-control', postalCodes: 'L6L, L6Y' },
  { name: 'Glen Abbey', href: '/glen-abbey-mosquito-control', postalCodes: 'L6M' },
  { name: 'Joshua Creek', postalCodes: 'L6H' },
  { name: 'West Oak Trails', href: '/west-oak-trails-mosquito-control', postalCodes: 'L6M' },
  { name: 'Clearview', postalCodes: 'L6J' },
  { name: 'Palermo', postalCodes: 'L6H' },
  { name: 'River Oaks', postalCodes: 'L6H, L6L' },
  { name: 'Kerr Village', postalCodes: 'L6K' },
  { name: 'Old Oakville', href: '/old-oakville-mosquito-control', postalCodes: 'L6J, L6K' },
  { name: 'Uptown Core', postalCodes: 'L6H, L6J' },
  { name: 'North Oakville', href: '/north-oakville-mosquito-control', postalCodes: 'L6H' },
  { name: 'Iroquois Ridge', postalCodes: 'L6H, L6M' },
  { name: 'Eastlake', postalCodes: 'L6J, L6K' },
  { name: 'College Park', postalCodes: 'L6H' },
  { name: 'Falgarwood', postalCodes: 'L6H' },
  { name: 'Wedgewood Creek', postalCodes: 'L6L' },
  { name: 'West Shore', postalCodes: 'L6K' },
  { name: 'Lakeshore Woods', postalCodes: 'L6K' },
]

const TESTIMONIALS = [
  { author: 'James K.', location: 'Glen Abbey', rating: 5, text: 'We had a tick problem near our garden border in Oakville. BuzzSkito came out quickly, treated the whole yard, and gave us a detailed service log. Great experience and the kids can play outside again.' },
  { author: 'Mark S.', location: 'Bronte', rating: 5, text: 'Our property backs onto Bronte Creek and mosquitoes were unbearable every summer. After BuzzSkito\'s first treatment, the difference was immediate. We\'ve been using them all season — highly recommend.' },
  { author: 'Rachel D.', location: 'West Oak Trails', rating: 5, text: 'Professional, on time, and the results speak for themselves. Our backyard went from unusable in the evenings to completely enjoyable. The SMS alerts before and after service are a nice touch.' },
  { author: 'David L.', location: 'Old Oakville', rating: 5, text: 'Tried citronella candles and store-bought sprays for years — complete waste of money. One BuzzSkito treatment did more than three summers of DIY attempts. Wish we\'d called sooner.' },
]

const FAQS = [
  {
    question: 'How much does mosquito control cost in Oakville?',
    answer: 'BuzzSkito mosquito treatments in Oakville start from $99 per application. Properties near Bronte Creek, the Sixteen Mile Creek, or the Lake Ontario waterfront typically need the full seasonal program for continuous protection. No contracts — book a single treatment or the full season. Call (289) 216-5030 for a free Oakville quote.',
  },
  {
    question: 'Why is mosquito pressure high in Oakville despite its upscale setting?',
    answer: "Oakville's beautifully landscaped setting is precisely what drives its mosquito challenge. Bronte Creek Provincial Park borders the west end of the city and generates significant natural mosquito populations that spill into adjacent residential areas. The 16 Mile Creek corridor runs through the heart of Oakville. Rain gardens, retention ponds, and mature ornamental landscaping — common in Oakville's established neighbourhoods — all provide daytime mosquito resting habitat. Even properties with no standing water on their lot can experience significant mosquito pressure from adjacent natural features.",
  },
  {
    question: 'Which Oakville neighbourhoods have the highest mosquito activity?',
    answer: "Bronte and West Oak Trails face the highest pressure due to direct adjacency to Bronte Creek Provincial Park and the Bronte Creek valley. Glen Abbey properties backing onto the golf course ravines and creek features also have significant activity. River Oaks, adjacent to Bronte Creek, faces consistent pressure. Old Oakville and lakeshore neighbourhoods experience mosquitoes from Lake Ontario's waterfront fringe and the mature tree canopy common to older streets.",
  },
  {
    question: 'How many mosquito treatments does an Oakville property need per season?',
    answer: "We typically recommend 4–5 treatments from May through September for Oakville properties, spaced 21–28 days apart. Properties directly adjacent to Bronte Creek, 16 Mile Creek, or any significant wooded ravine may benefit from 5 treatments given the sustained pressure from these natural features. Our technician will assess your specific property and recommend the right schedule based on your exposure.",
  },
  {
    question: "Is barrier spray safe near Oakville's creeks and Bronte Creek Provincial Park?",
    answer: "Yes. We apply the barrier treatment to your own property's vegetation — not to any parkland, creek, or conservation land. Our Health Canada–approved formula is designed for residential use adjacent to natural features. Once dry (approximately 30 minutes), the product does not leach into waterways. We maintain safe buffer zones around any riparian areas at your property line.",
  },
  {
    question: 'Does BuzzSkito serve all Oakville neighbourhoods?',
    answer: "Yes. We serve all Oakville communities including Glen Abbey, Joshua Creek, West Oak Trails, Bronte, River Oaks, Clearview, Palermo, Kerr Village, Old Oakville, Uptown Core, Iroquois Ridge, North Oakville, Eastlake, College Park, Falgarwood, Wedgewood Creek, West Shore, and Lakeshore Woods. Call (289) 216-5030 to schedule a free quote.",
  },
  {
    question: 'How does mosquito barrier spray actually work?',
    answer: "Our technicians use a backpack precision sprayer to apply a residual formula to all vegetation on your property — shrubs, garden beds, the underside of leaves, fence lines, deck undersides, and woodpile areas. These are the sites where adult mosquitoes rest during the heat of the day. The formula kills on contact and provides a residual repellent effect that prevents new mosquitoes from settling on treated vegetation for up to 30 days between visits.",
  },
  {
    question: 'What happens if it rains after my Oakville treatment?',
    answer: "Our formula bonds to leaf surfaces as it dries. If significant rainfall occurs within one hour of application — before the product has fully cured — we return and re-treat at no charge. This rain-back guarantee applies to all Oakville service visits.",
  },
  {
    question: 'Does BuzzSkito also provide tick control in Oakville?',
    answer: "Yes. Bronte Creek and Oakville's ravines are significant blacklegged tick habitat. Many Oakville homeowners bundle mosquito and tick treatments for complete yard protection. See our Oakville tick control service or ask about bundle pricing when you call.",
  },
  {
    question: 'Do I need to be home during the mosquito treatment?',
    answer: "No. As long as our technicians have access to your outdoor areas, you don't need to be home. We send an SMS notification before arriving and a follow-up email with the full treatment log, areas treated, product applied, and your next scheduled visit date.",
  },
  {
    question: 'When does mosquito season start in Oakville?',
    answer: "Mosquito activity in Oakville typically begins in late April when daytime temperatures consistently exceed 10°C. Bronte and Old Oakville — both near water — tend to experience earlier activity than inland neighbourhoods like North Oakville or Iroquois Ridge. Peak pressure runs late May through July. September usually marks the end of significant mosquito activity, though warm falls can extend the season.",
  },
]

export default function OakvilleMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Oakville' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/oakville-mosquito-control')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Oakville&apos;s lakefront properties, Bronte Creek Provincial Park, and rain-garden landscaping create persistent mosquito pressure. BuzzSkito provides professional barrier spray so Oakville families can enjoy their backyards all season — from $99/treatment, no contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
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

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Mosquito Control Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional mosquito control service from <strong className="text-brand-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your Oakville property — identifying water features, dense vegetation, and mosquito pressure zones specific to your neighbourhood.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to all vegetation, shrub interiors, leaf undersides, fence lines, and resting areas using a precision backpack sprayer.' },
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

      {/* Main content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in Oakville</h2>
          <p>Oakville is one of the GTA&apos;s most desirable communities — but its picturesque setting along Lake Ontario and Bronte Creek creates persistent mosquito challenges that most homeowners underestimate. <strong>Bronte Creek Provincial Park</strong> — 1,300+ hectares of naturalized land bordering Oakville&apos;s west end — generates significant mosquito populations each season that disperse into adjacent residential properties. The <strong>16 Mile Creek corridor</strong> runs through central Oakville from north to south, and the <strong>Bronte Creek</strong> system cuts through the west side, both sustaining breeding habitat throughout the season.</p>
          <p>Oakville&apos;s landscape character — mature tree canopy in older neighbourhoods, ornamental rain gardens, and the dense shrub borders common in established properties — provides abundant daytime resting habitat for adult mosquitoes that have bred in nearby water features. Even properties with no standing water on their lot can experience significant mosquito pressure from adjacent natural features. This is why professional barrier spray — which targets the resting habitat directly — is the most effective approach for Oakville homes.</p>

          <h2>Mosquito Pressure Zones by Oakville Neighbourhood</h2>

          <h3>Bronte (L6L, L6Y)</h3>
          <p>Bronte faces the highest mosquito pressure in Oakville due to direct adjacency to <strong>Bronte Creek Provincial Park</strong> and Bronte Harbour. The park&apos;s 1,300+ hectares of wetland, forested ravines, and slow-moving creek sections produce enormous mosquito populations from May through September. Lake Ontario waterfront properties also experience mosquitoes from the shoreline vegetation fringe during peak season. Properties on Bronte Road, Sovereign Street, and Rebecca Street are among the most affected.</p>

          <h3>Glen Abbey (L6M)</h3>
          <p>Glen Abbey&apos;s ravine system, creek features along the Glen Abbey Golf Course, and the <strong>Sixteen Mile Creek corridor</strong> generate consistent mosquito activity. Properties backing onto any ravine or green space in Glen Abbey experience elevated pressure throughout May–August. The golf course&apos;s water features — while maintained — still provide breeding habitat during wet periods. Streets near Morrison Road and Upper Middle Road West are particularly affected.</p>

          <h3>West Oak Trails &amp; River Oaks (L6M, L6H, L6L)</h3>
          <p>Both neighbourhoods are adjacent to Bronte Creek, which creates consistent breeding habitat and mosquito dispersal into residential lots along the creek corridor. Evening mosquito activity is noticeably higher within 2–3 blocks of the creek. West Oak Trails&apos; newer construction includes stormwater management ponds that add additional breeding sites. River Oaks, sitting between Bronte Creek and the Fourteen Mile Creek tributary, faces pressure from two directions.</p>

          <h3>Old Oakville &amp; Lakeshore (L6J, L6K)</h3>
          <p>Older lakeshore neighbourhoods benefit from Lake Ontario breezes that reduce mosquito activity somewhat, but the mature tree canopy and established ornamental plantings common in Old Oakville provide significant daytime resting habitat. Proximity to waterfront park features — including Lakeside Park and Tannery Park — creates additional late-day pressure. The deep, shaded lots characteristic of Old Oakville streets like Reynolds Street, Allan Street, and Dunn Street are prime mosquito resting environments.</p>

          <h3>North Oakville &amp; Iroquois Ridge (L6H)</h3>
          <p>North Oakville&apos;s rapid residential growth has introduced dozens of new stormwater management ponds — many with shallow, vegetated edges that serve as productive mosquito breeding sites from May through September. Iroquois Ridge properties adjacent to the Iroquois Shoreline Woods and the 16 Mile Creek headwater trails face pressure from both engineered and natural water sources. These neighbourhoods often experience the most consistent mosquito pressure throughout the full season due to the combination of new-construction water features and natural creek systems.</p>

          {/* Treatment Process */}
          <h2>Our Oakville Mosquito Treatment Process</h2>
          <ol>
            <li><strong>Property assessment</strong> — We identify breeding areas, water features, and high-risk vegetation zones specific to your Oakville property and neighbourhood. Bronte properties require different attention than North Oakville or Old Oakville lots.</li>
            <li><strong>Barrier spray application</strong> — Full treatment of all vegetation, shrubs, garden borders, fence lines, deck undersides, and woodpile areas using a backpack precision sprayer. We target the undersides of leaves and shaded shrub interiors where adult mosquitoes actually rest — surfaces that consumer foggers miss entirely.</li>
            <li><strong>Standing water guidance</strong> — We identify any standing water sources on your property contributing to mosquito breeding and advise on elimination or treatment. Common Oakville culprits include ornamental rain gardens, bird baths, clogged eavestroughs, and low-lying garden areas.</li>
            <li><strong>30-day protection window</strong> — Our residual formula keeps working between visits. We schedule re-application every 21–28 days for continuous season-long coverage.</li>
          </ol>

          {/* Seasonal Schedule Table */}
          <h2>Seasonal Mosquito Treatment Schedule for Oakville</h2>
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
                  { t: 'Treatment 1', timing: 'Early May', purpose: 'Establish barrier before Bronte Creek / 16 Mile Creek activity peaks' },
                  { t: 'Treatment 2', timing: 'Early June', purpose: 'Maintain coverage as lakefront and creek populations surge' },
                  { t: 'Treatment 3', timing: 'Early July', purpose: 'Peak mosquito season — highest activity across all Oakville zones' },
                  { t: 'Treatment 4', timing: 'Early August', purpose: 'Late-summer surge from Bronte Provincial Park and stormwater ponds' },
                  { t: 'Treatment 5 (optional)', timing: 'Early September', purpose: 'Season close-out — recommended for creek-adjacent properties' },
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

          {/* Pricing Section */}
          <h2>Mosquito Control Pricing in Oakville</h2>
          <p>Transparent pricing is something many Oakville pest control companies avoid. We don&apos;t. BuzzSkito mosquito treatments start from $99 per visit — no contracts, no pressure to commit to a full season upfront.</p>
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
                  { type: 'Standard residential lot (under 6,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Oakville semi or detached home' },
                  { type: 'Mid-size lot (6,000–10,000 sq ft)', price: 'Custom quote', coverage: 'Larger detached, ravine-backing properties, Glen Abbey' },
                  { type: 'Large / estate property (10,000+ sq ft)', price: 'Custom quote', coverage: 'Old Oakville estates, Lakeshore Road properties' },
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
          <p>There are no contracts and no cancellation fees. Call <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a> or use our <Link href="/contact" className="text-brand-700 hover:underline">contact form</Link> for a free quote specific to your address. See our <Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">2026 mosquito control pricing guide</Link> for a full Ontario breakdown.</p>

          {/* DIY vs Professional */}
          <h2>Professional Mosquito Control vs. DIY in Oakville</h2>
          <p>Home improvement stores sell mosquito foggers, citronella torches, and consumer-grade sprays. Here&apos;s why they don&apos;t work as well as professional barrier spray — and why Oakville&apos;s specific geography makes professional treatment especially important:</p>
          <ul>
            <li><strong>Consumer foggers provide hours of relief, not 30 days of protection.</strong> Professional residual barrier spray bonds to leaf surfaces and keeps working between visits. A $15 citronella candle and a professional barrier treatment are not comparable products.</li>
            <li><strong>Application technique matters more than product.</strong> Mosquitoes rest on the undersides of leaves, in shaded shrub interiors, and under deck joists. Proper barrier spray requires a backpack precision sprayer and systematic technique to reach those surfaces. Most consumer foggers apply product to open air, missing the actual resting sites.</li>
            <li><strong>Oakville&apos;s mosquito sources are beyond your control.</strong> Bronte Creek Provincial Park, the 16 Mile Creek corridor, and Lake Ontario&apos;s waterfront will produce mosquitoes every season regardless of what you do on your property. The only effective strategy is creating a treated barrier that stops them from settling on your property after dispersing from those sources.</li>
            <li><strong>Larvicide tablets don&apos;t address your primary exposure.</strong> You can treat every standing water source on your lot and still have a serious mosquito problem because the dominant pressure in Oakville comes from off-property natural features. Professional barrier spray directly addresses the adult mosquitoes that arrive from those sources.</li>
          </ul>

          {/* How to Choose */}
          <h2>Choosing the Right Mosquito Control Service in Oakville</h2>
          <p>Several pest control companies now serve Oakville, and not all are equal. Here&apos;s what to look for when evaluating your options:</p>
          <ul>
            <li><strong>Health Canada–registered products.</strong> Any product applied to your yard must be registered under the Pest Control Products Act. Ask for the product registration number. BuzzSkito uses only registered, water-based formulas.</li>
            <li><strong>Licensed applicators.</strong> Ontario requires a Pesticide Applicator&apos;s Licence for all commercial applications. Ask to see credentials.</li>
            <li><strong>Rain-back guarantee.</strong> Any reputable company should offer to re-treat if significant rain falls within the cure window. This is standard at BuzzSkito.</li>
            <li><strong>No long-term contracts.</strong> Legitimate service companies let you book a single treatment and evaluate results before committing to a season. Be cautious of companies requiring 12-month contracts for seasonal outdoor service.</li>
            <li><strong>Local Oakville knowledge.</strong> Companies that understand the Bronte Creek corridor, 16 Mile Creek, and Oakville&apos;s specific neighbourhood geography will treat your property more effectively than generic operators using standard templates.</li>
            <li><strong>Transparent pricing.</strong> A company that won&apos;t quote prices on their website or over the phone until after a &quot;free assessment&quot; visit is using the visit as a sales tool. BuzzSkito publishes pricing and quotes over the phone.</li>
          </ul>

          {/* What to Expect */}
          <h2>What to Expect on Your BuzzSkito Treatment Day</h2>
          <ol>
            <li><strong>SMS notification before arrival</strong> — You&apos;ll receive a text when your technician is on the way. You do not need to be home.</li>
            <li><strong>Property walkthrough</strong> — On the first visit, your technician does a perimeter assessment to note water features, dense vegetation, and any Oakville-specific risk factors before treatment begins.</li>
            <li><strong>Full barrier application</strong> — Systematic treatment of all vegetation: shrubs, garden beds, leaf undersides, fence lines, deck undersides, woodpiles. Treatment of a typical Oakville residential lot takes 25–40 minutes.</li>
            <li><strong>Lawn sign placement</strong> — A small sign is placed confirming the treatment date and product used.</li>
            <li><strong>30-minute dry time</strong> — Keep children and pets off treated surfaces while the product cures. After 30 minutes, your yard is fully safe and the barrier is active.</li>
            <li><strong>Follow-up email confirmation</strong> — You&apos;ll receive a treatment log with areas treated, product applied, and your next scheduled visit date within 2 hours of the treatment.</li>
          </ol>

          {/* Neighbourhoods */}
          <h2>Oakville Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map(({ name, href, postalCodes }) => href ? (
              <Link key={name} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{name}{postalCodes && ` (${postalCodes})`}</Link>
            ) : (
              <span key={name} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{name}{postalCodes && ` (${postalCodes})`}</span>
            ))}
          </div>

          {/* Tick Control */}
          <h2>Also Providing Tick Control in Oakville</h2>
          <p>Bronte Creek and Oakville&apos;s forested ravines are significant blacklegged tick habitat documented by Halton Region Public Health. If your property backs onto any ravine, conservation area, or wooded edge, tick control is an important complement to mosquito spray. See our <Link href="/oakville-tick-spray" className="text-brand-700 hover:underline">Oakville tick control service</Link> — many homeowners bundle both services for complete seasonal yard protection.</p>

          {/* Related Guides */}
          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
            <li><Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">How Much Does Mosquito Control Cost in Ontario? (2026 Guide)</Link></li>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What Oakville Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Oakville</span></p>
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
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Oakville property from mosquitoes this season. No contracts. 100% satisfaction guaranteed." />
    </>
  )
}
