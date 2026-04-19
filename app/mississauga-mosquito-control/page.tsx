import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Mississauga | $99 | BuzzSkito',
  description:
    'Mosquito control in Mississauga. Barrier spray from $99. Serving Port Credit, Meadowvale, Streetsville & all areas. Call (289) 216-5030.',
  canonical: '/mississauga-mosquito-control',
})

const CITY = 'Mississauga'
const SLUG = '/mississauga-mosquito-control'
const NEIGHBOURHOODS = [
  'Port Credit','Meadowvale','Streetsville','Malton','Lorne Park',
  'Cooksville','Lakeview','Erin Mills','Clarkson','Churchill Meadows',
  'Mineola','Applewood','Hurontario','City Centre','Lisgar',
]

const FAQS = [
  {
    question: 'How much does mosquito control cost in Mississauga?',
    answer: 'BuzzSkito mosquito barrier spray treatments start from $99 per application for a standard residential lot. Pricing depends on your property size and treatment frequency. Call (289) 216-5030 or use our contact form for a free, no-obligation quote specific to your Mississauga property. There are no contracts — you can book a single treatment or a full seasonal package.',
  },
  {
    question: 'Why is mosquito pressure so high in Mississauga?',
    answer: "Mississauga's geography creates multiple distinct mosquito pressure zones. The Credit River corridor runs the full length of the city, creating continuous breeding habitat from Streetsville to Port Credit. Rattray Marsh Conservation Area is one of the last remaining lakefront marshes in the western GTA and sustains large mosquito populations each season. Meadowvale Conservation Area, Erindale Park, and the city's many stormwater management ponds all add to the pressure. Neighbourhoods within 500–800 metres of these features consistently experience earlier and more intense mosquito activity.",
  },
  {
    question: 'When does mosquito season start in Mississauga?',
    answer: 'Mosquito activity in Mississauga typically begins in late April when daytime temperatures consistently exceed 10°C. Peak pressure runs from late May through July. Lakeview, Port Credit, and Clarkson — all adjacent to Lake Ontario and Credit River — tend to experience activity earlier than inland neighbourhoods. September usually marks the end of meaningful mosquito activity, though warm falls can extend the season.',
  },
  {
    question: 'How many mosquito treatments does a Mississauga home need per season?',
    answer: 'We recommend 4–5 treatments from May through September, spaced 21–28 days apart for continuous protection. Properties near the Credit River, Rattray Marsh, or any pond or ravine feature will typically benefit from the full 5-treatment program. Properties in drier, less-exposed areas may be well-protected with 4 visits. Our technicians assess your specific property and recommend a schedule based on your actual risk factors.',
  },
  {
    question: "Is BuzzSkito's mosquito spray safe near Mississauga's waterways and conservation areas?",
    answer: 'Yes. Our Health Canada–approved, water-based formula is specifically designed for residential use near water features. Once the product dries — typically within 30 minutes — it does not leach into waterways or harm fish, beneficial insects, or pollinators when applied according to label instructions. We do not apply product directly to water, and we maintain buffer zones around sensitive shoreline areas.',
  },
  {
    question: 'Which Mississauga neighbourhoods does BuzzSkito serve?',
    answer: "We serve all Mississauga communities including Port Credit, Meadowvale, Streetsville, Erin Mills, Clarkson, Churchill Meadows, Lorne Park, Mineola, Applewood, Cooksville, Malton, Hurontario, and beyond. If you're unsure whether your address is in our coverage zone, call (289) 216-5030 and we'll confirm immediately.",
  },
  {
    question: "How does BuzzSkito's barrier spray actually work?",
    answer: 'Our technicians use a high-precision backpack sprayer to apply a residual barrier treatment to all vegetation on your property — shrubs, garden beds, the underside of leaves, fence lines, deck undersides, and woodpile areas. These are the sites where adult mosquitoes rest during the heat of the day. The formula kills mosquitoes on contact and leaves a residual repellent that deters new mosquitoes from entering your yard for up to 30 days.',
  },
  {
    question: 'What happens if it rains after my Mississauga treatment?',
    answer: 'Our products are formulated to bond to leaf surfaces as they dry. If rainfall occurs within one hour of application — before the product has fully cured — we will return and re-treat your property at no additional cost. This guarantee applies to all Mississauga service visits.',
  },
  {
    question: 'Does BuzzSkito also provide tick control in Mississauga?',
    answer: "Yes. Mississauga's Credit River valley, Rattray Marsh, and Erindale Park are confirmed blacklegged tick habitat areas. Many Mississauga homeowners bundle mosquito and tick treatments for complete yard protection. Our tick spray targets the specific transition zones — lawn edges, leaf litter, garden beds — where ticks concentrate. Ask about our seasonal bundle pricing when you call.",
  },
  {
    question: 'Do I need to be home during the treatment?',
    answer: "No. As long as our technicians have access to your outdoor areas, you do not need to be home. We'll send an SMS notification before arriving and a follow-up confirmation email with the full treatment log, areas treated, and your next scheduled visit date. We also place a small lawn sign confirming the treatment was completed.",
  },
]

export default function MississaugaMosquitoControlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: `${CITY}`, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Mississauga' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mississauga-mosquito-control')) }} />

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
            From Port Credit's waterfront to Meadowvale's conservation areas — BuzzSkito protects every Mississauga neighbourhood with professional barrier spray. Health Canada–approved. 30-day protection. 100% satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">
              Get a Free Quote
            </Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">
              {BUSINESS.phone}
            </a>
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
          <Link href="/free-yard-assessment" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your Mississauga property — identifying Credit River exposure, stormwater ponds, and mosquito pressure zones specific to your neighbourhood.' },
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

      {/* Main content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">

          <h2>Why Mosquito Pressure Is High in Mississauga</h2>
          <p>Mississauga's natural landscape creates some of the GTA's most persistent mosquito conditions. The <strong>Credit River</strong> — running from Streetsville south through Erindale to Port Credit — forms a continuous mosquito breeding corridor that affects dozens of adjacent neighbourhoods throughout the season. <strong>Rattray Marsh Conservation Area</strong>, one of the last remaining Lake Ontario lakefront marshes in the western GTA, sustains major mosquito populations each year. <strong>Meadowvale Conservation Area</strong>, Erindale Park, and the city's extensive network of stormwater management ponds add further breeding pressure.</p>
          <p>Neighbourhoods closest to these water features — Port Credit, Clarkson, Lorne Park, Mineola, Erin Mills, and Meadowvale — tend to experience the earliest mosquito activity each spring and the most intense pressure through summer. Even newer developments further from natural water features are affected by the stormwater retention ponds that accompany all modern construction in Mississauga.</p>

          <h2>Mosquito Hotspots by Mississauga Neighbourhood</h2>
          <h3>Port Credit &amp; Lakeview</h3>
          <p>Lake Ontario's waterfront and the Credit River mouth create intense early-season mosquito pressure. Port Credit properties within three blocks of the lake or river — particularly those with mature tree canopy — experience the season's earliest activity, often beginning in late April.</p>

          <h3>Meadowvale &amp; Meadowvale Conservation Area</h3>
          <p>Meadowvale Conservation Area contains a series of ponds and wetlands that are among the most productive mosquito breeding sites in western Mississauga. Properties adjacent to or within 600 metres of the conservation area see elevated pressure throughout May–August.</p>

          <h3>Streetsville &amp; Credit River Valley</h3>
          <p>Streetsville sits directly on the Credit River and experiences consistent, season-long mosquito activity from the river's flood plain and adjacent wetland areas. The river valley trail system creates a pathway for mosquito dispersal into adjacent residential streets.</p>

          <h3>Erin Mills &amp; Churchill Meadows</h3>
          <p>Erin Mills and Churchill Meadows both contain multiple stormwater management ponds from 1990s–2000s construction. These engineered ponds — particularly those with shallow edges and minimal water movement — are productive mosquito breeding sites from May through September.</p>

          <h3>Clarkson &amp; Rattray Marsh</h3>
          <p>Clarkson properties near Rattray Marsh face the highest mosquito pressure in the city. The marsh's shallow water, dense cattails, and protected status (it cannot be treated by municipal larvicide programs) make it a reliable annual source of mosquitoes for adjacent streets.</p>

          <h2>Our Mississauga Mosquito Treatment Process</h2>
          <ol>
            <li><strong>Property assessment</strong> — We identify breeding areas, water features, and high-risk vegetation zones specific to your Mississauga lot.</li>
            <li><strong>Barrier spray application</strong> — Full treatment of all vegetation, shrubs, garden borders, fence lines, deck undersides, and woodpile areas using a backpack precision sprayer.</li>
            <li><strong>Standing water guidance</strong> — We identify any standing water sources on your property contributing to mosquito breeding and advise on elimination or treatment.</li>
            <li><strong>30-day protection window</strong> — Residual formula keeps working between visits, with re-application every 21–28 days for continuous season coverage.</li>
          </ol>

          <h2>Mississauga Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>Seasonal Mosquito Treatment Schedule for Mississauga</h2>
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
                  { t: 'Treatment 1', timing: 'Early May', purpose: 'Establish barrier before Credit River / pond activity peaks' },
                  { t: 'Treatment 2', timing: 'Early June', purpose: 'Maintain coverage into peak season' },
                  { t: 'Treatment 3', timing: 'Early July', purpose: 'Peak mosquito season — highest activity window' },
                  { t: 'Treatment 4', timing: 'Early August', purpose: 'Late-summer surge from Rattray Marsh / lakefront' },
                  { t: 'Treatment 5', timing: 'Early September', purpose: 'Season close-out for extended coverage' },
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

          <h2>Mosquito Control Pricing in Mississauga</h2>
          <p>Transparent pricing is something many Mississauga pest control companies avoid. We don't. BuzzSkito mosquito treatments start from $99 per visit — no contracts, no pressure to commit to a full season upfront.</p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Property Type</th>
                  <th className="px-4 py-2 text-left">Starting Price</th>
                  <th className="px-4 py-2 text-left">Coverage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Standard residential lot (under 6,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Mississauga semi-detached or detached home' },
                  { type: 'Mid-size lot (6,000–10,000 sq ft)', price: 'Custom quote', coverage: 'Larger detached, corner lots, ravine-backing properties' },
                  { type: 'Large / estate property (10,000+ sq ft)', price: 'Custom quote', coverage: 'Lorne Park, Mineola, Port Credit estate lots' },
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
          <p>There are no contracts and no cancellation fees. Call <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a> or use our <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">contact form</Link> for a free quote specific to your address. See our <Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">2026 mosquito control pricing guide</Link> for a full GTA breakdown.</p>

          <h2>Professional Mosquito Control vs. DIY in Mississauga</h2>
          <p>Home improvement stores sell mosquito foggers, citronella torches, and consumer-grade sprays. Here's why they don't work as well as professional barrier spray — and why Mississauga's specific geography matters:</p>
          <ul>
            <li><strong>Consumer foggers provide hours of relief, not 30 days of protection.</strong> Professional residual barrier spray bonds to leaf surfaces and keeps working between visits. A $15 citronella candle and a professional barrier treatment are not comparable products.</li>
            <li><strong>Application technique matters more than product.</strong> Mosquitoes rest on the undersides of leaves, in shaded shrub interiors, and under deck joists. Proper barrier spray requires a backpack precision sprayer and systematic technique to reach those surfaces. Most consumer foggers apply product to open air, missing the actual resting sites.</li>
            <li><strong>Mississauga's mosquito sources are beyond your control.</strong> The Credit River, Rattray Marsh, and Meadowvale Conservation Area will produce mosquitoes every season regardless of what you do on your property. The only effective strategy is creating a barrier that stops them from settling on your property after dispersing from those sources.</li>
            <li><strong>Larvicide tablets don't address your primary exposure.</strong> You can treat every standing water source on your lot and still have a serious mosquito problem because the dominant pressure comes from off-property sources. Professional barrier spray directly addresses the adult mosquitoes that arrive from those sources.</li>
          </ul>

          <h2>How to Choose a Mosquito Control Company in Mississauga</h2>
          <p>The GTA mosquito control market has grown substantially, and not all providers are equal. Here's what to look for when evaluating companies serving Mississauga:</p>
          <ul>
            <li><strong>Health Canada–registered products.</strong> Any product applied to your yard must be registered under the Pest Control Products Act. Ask for the product registration number if you have concerns. BuzzSkito uses only registered, water-based formulas.</li>
            <li><strong>Licensed applicators.</strong> Ontario requires a Pesticide Applicator's Licence (PPAL) for all commercial applications. Ask to see credentials.</li>
            <li><strong>Rain-back guarantee.</strong> Any reputable company should offer to re-treat if significant rain falls within the cure window. This is standard at BuzzSkito.</li>
            <li><strong>No pressure to commit to long-term contracts.</strong> Legitimate service companies let you book a single treatment and evaluate results before committing to a season. Be cautious of companies requiring 12-month contracts for seasonal outdoor service.</li>
            <li><strong>Local Mississauga knowledge.</strong> Companies that understand the Credit River corridor, Rattray Marsh, and Mississauga's specific neighbourhood geography will treat your property more effectively than generic operators using standard templates.</li>
            <li><strong>Transparent pricing.</strong> A company that won't quote prices on their website or over the phone until after a "free assessment" visit is using the visit as a sales tool, not a diagnostic one. BuzzSkito publishes pricing and quotes over the phone.</li>
          </ul>

          <h2>What to Expect on Your BuzzSkito Treatment Day</h2>
          <ol>
            <li><strong>SMS notification before arrival</strong> — You'll receive a text when your technician is on the way. You do not need to be home.</li>
            <li><strong>Property walkthrough</strong> — On the first visit, your technician does a quick perimeter assessment to note water features, dense vegetation, and any property-specific risk factors before treatment begins.</li>
            <li><strong>Full barrier application</strong> — Systematic treatment of all vegetation: shrubs, garden beds, leaf undersides, fence lines, deck undersides, woodpiles. Treatment of a typical Mississauga residential lot takes 25–40 minutes.</li>
            <li><strong>Lawn sign placement</strong> — A small sign is placed confirming the treatment date and product used.</li>
            <li><strong>30-minute dry time</strong> — Keep children and pets off treated surfaces while the product cures. After 30 minutes, your yard is fully safe and the barrier is active.</li>
            <li><strong>Follow-up email confirmation</strong> — You'll receive a treatment log with areas treated, product applied, and your next scheduled visit date within 2 hours of the treatment.</li>
          </ol>

          <h2>Also Providing Tick Control in Mississauga</h2>
          <p>Mississauga's Credit River valley, Rattray Marsh, and Erindale Park are confirmed blacklegged tick habitat areas documented by Peel Region Public Health. If your property backs onto any ravine, conservation area, or wooded edge, tick control is an important complement to mosquito spray. See our <Link href="/mississauga-tick-spray" className="text-brand-700 hover:underline">Mississauga tick control service</Link> — many homeowners bundle both for complete seasonal protection.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What Mississauga Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Sarah M.', location: 'Port Credit', text: 'BuzzSkito treated our backyard in Mississauga and we noticed a huge difference immediately. No mosquitoes at our outdoor birthday party! The technician was professional and on time. Highly recommend.' },
              { author: 'Priya R.', location: 'Meadowvale', text: 'Called on a Tuesday, they were at my home by Thursday. The technician explained exactly what product they were using and why it\'s safe for our dog. Couldn\'t be happier with the results.' },
              { author: 'Jason T.', location: 'Erin Mills', text: 'Our house backs onto a stormwater pond and mosquitoes were terrible every summer. After the first BuzzSkito treatment the difference was night and day. We signed up for the full season.' },
              { author: 'Amanda K.', location: 'Streetsville', text: 'We live near the Credit River and tried everything — citronella, zappers, store sprays. Nothing worked until BuzzSkito. Professional service, great communication, and our yard is actually usable now.' },
            ].map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Mississauga</span></p>
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

      <CTASection
        heading={`Get a Free Mosquito Control Quote in ${CITY}`}
        subtext="Protecting Mississauga families from mosquitoes since day one. No contracts. 100% satisfaction guaranteed."
      />
    </>
  )
}
