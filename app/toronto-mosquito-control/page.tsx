import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Toronto | $99 | BuzzSkito',
  description:
    'Mosquito control in Toronto. Barrier spray from $99. Serving Rosedale, Forest Hill, The Beaches & all areas. Call (289) 216-5030.',
  canonical: '/toronto-mosquito-control',
})

const CITY = 'Toronto'
const SLUG = '/toronto-mosquito-control'
const NEIGHBOURHOODS: { name: string; href?: string }[] = [
  { name: 'High Park' },
  { name: 'East York', href: '/east-york-mosquito-control' },
  { name: 'Don Mills', href: '/don-mills-mosquito-control' },
  { name: 'The Beaches', href: '/the-beaches-mosquito-control' },
  { name: 'Scarborough' },
  { name: 'North York' },
  { name: 'Etobicoke' },
  { name: 'Leslieville' },
  { name: 'Rosedale', href: '/rosedale-mosquito-control' },
  { name: 'Forest Hill', href: '/forest-hill-mosquito-control' },
  { name: 'Leaside', href: '/leaside-mosquito-control' },
  { name: 'Willowdale', href: '/willowdale-mosquito-control' },
  { name: 'Lawrence Park' },
  { name: 'York Mills', href: '/york-mills-mosquito-control' },
]

const FAQS = [
  {
    question: 'Why does Toronto have such a bad mosquito problem?',
    answer: "Toronto's extensive ravine system — the largest urban ravine network in North America — creates exceptional mosquito breeding conditions across the city. The Don River Valley, Humber River, and Highland Creek corridors provide the standing water, dense vegetation, and humidity that mosquitoes need to thrive. Neighbourhoods backing onto ravines experience the most intense pressure, but mosquitoes travel up to 3 km from breeding sites — which means most Toronto properties have some level of exposure.",
  },
  {
    question: 'Which Toronto neighbourhoods have the worst mosquito problems?',
    answer: "Ravine-adjacent neighbourhoods consistently have the highest mosquito activity: Rosedale and Forest Hill (Don Valley ravines), Leaside and East York (Don Valley, Taylor Creek), Don Mills (Don Valley and Flemingdon Park area), The Beaches (Eastern Ravine, Ashbridge's Bay), Etobicoke and Humber Valley (Humber River), High Park area (Humber River, Grenadier Pond). Willowdale and North York properties near the Don River headwaters also experience consistent pressure.",
  },
  {
    question: "Does barrier spray work against mosquitoes coming from Toronto's ravines?",
    answer: "Yes, though it works by creating a barrier on your property rather than eliminating the source in the ravine. Our treatment targets the vegetation on your lot — especially the perimeter and any shrubs adjacent to the ravine edge — where mosquitoes that fly in from the ravine will rest before moving further into your yard. This breaks the cycle between the ravine source and your outdoor living areas.",
  },
  {
    question: 'How many treatments does my Toronto property need per season?',
    answer: "For ravine-adjacent Toronto properties, we recommend 4–5 treatments from May through September, spaced 21–28 days apart. Properties in less-exposed parts of the city may be well-protected with 3–4 visits. Our technician assesses your specific situation — ravine proximity, landscaping density, and any on-property water features — to recommend the right schedule.",
  },
  {
    question: "Is mosquito spray safe near Toronto's urban gardens and pollinators?",
    answer: "Yes. Our Health Canada–approved formula is applied to resting surfaces — the undersides of leaves and shrubs where mosquitoes rest — rather than directly to flowers or open areas. Once dried (approximately 30 minutes), it does not harm pollinators foraging on treated vegetation. We avoid direct application to open blooms and can discuss any specific garden concerns before treatment.",
  },
  {
    question: 'Do you serve all Toronto neighbourhoods?',
    answer: "Yes. We serve all Toronto neighbourhoods including High Park, Etobicoke, North York, Scarborough, East York, The Beaches, Rosedale, Forest Hill, Leaside, Don Mills, Willowdale, Lawrence Park, and more. Call (289) 216-5030 to confirm service at your specific address.",
  },
  {
    question: 'What happens if it rains right after my Toronto treatment?',
    answer: "Our formula bonds to leaf surfaces as it dries. If significant rain falls within one hour of application — before the product has fully cured — we return and re-treat your property at no charge. This rain-back guarantee applies to all Toronto service visits.",
  },
  {
    question: 'Does BuzzSkito also do tick control in Toronto?',
    answer: "Yes. Toronto's ravine system harbours blacklegged ticks — Toronto Public Health has confirmed established tick populations in High Park, the Don Valley, and other green corridors. Many Toronto homeowners bundle mosquito and tick treatments for complete yard protection. See our Toronto tick control service for details.",
  },
  {
    question: 'How much does mosquito control cost in Toronto?',
    answer: "BuzzSkito mosquito treatments in Toronto start from $99 per treatment. Pricing depends on your property size and the depth of coverage your lot requires. Ravine-adjacent properties may need more frequent or thorough application than sheltered urban lots. Call (289) 216-5030 for a free quote, or see our 2026 Ontario pricing guide for a full breakdown.",
  },
]

export default function TorontoMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Toronto's ravines and green corridors make it one of the GTA's highest-risk cities for mosquitoes. BuzzSkito provides effective barrier spray for Toronto homeowners — safe, lasting protection for your yard all season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
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
            <p className="text-gray-600 text-sm mt-0.5">Professional mosquito control from <strong className="text-brand-700">$99</strong> per treatment · No contracts</p>
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
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your Toronto property — identifying ravine exposure, water features, and mosquito pressure zones specific to your neighbourhood.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to all vegetation, shrub interiors, leaf undersides, fence lines, and ravine-edge perimeters using a precision backpack sprayer.' },
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
          <h2>Why Toronto Has a Serious Mosquito Problem</h2>
          <p>Toronto's ravine system — the largest urban ravine network in North America — creates exceptional mosquito breeding conditions across the entire city. The <strong>Don River Valley</strong>, <strong>Humber River</strong>, and <strong>Highland Creek</strong> corridors provide the standing water, dense vegetation, and humidity that mosquitoes need throughout the season. Mosquitoes travel up to 3 km from breeding sites, meaning even Toronto properties well away from ravines experience dispersal pressure from the network.</p>
          <p>Beyond ravines, Toronto-specific factors compound the problem: mature tree canopy providing dense daytime resting habitat, irregular terrain creating standing water pockets after rain, urban heat island effects extending the active season, and the sheer density of vegetation in established neighbourhoods like Rosedale, Forest Hill, and Leaside.</p>

          <h2>Mosquito Pressure Zones by Toronto Neighbourhood</h2>
          <h3>Rosedale, Forest Hill &amp; Lawrence Park</h3>
          <p>Some of Toronto's most prestigious addresses are also its most mosquito-affected — because ravine adjacency drives both real estate value and mosquito activity. The Don Valley ravines bordering Rosedale and Forest Hill sustain intense mosquito populations from May through August.</p>

          <h3>Leaside &amp; East York</h3>
          <p>Taylor Creek Park and the Don Valley system create significant pressure for Leaside and East York properties, particularly those backing onto any ravine trail or parkland edge.</p>

          <h3>The Beaches &amp; Eastern Toronto</h3>
          <p>Eastern Ravine, Ashbridge's Bay, and the Lake Ontario shoreline create mosquito pressure from multiple directions for Beaches properties. The high-humidity microclimate near the lake extends evening activity into late season.</p>

          <h3>Etobicoke &amp; Humber Valley</h3>
          <p>The Humber River creates a continuous mosquito corridor from Bolton to the lake. Etobicoke and Islington properties near Humber Valley Park, Centennial Park, and the Humber floodplain experience consistent season-long pressure.</p>

          <h3>North York, Willowdale &amp; Don Mills</h3>
          <p>Don Valley ravines, Serena Gundy Park, and the many smaller ravines running through North York create active mosquito habitat from May through September for properties in this area.</p>

          <h2>Toronto Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map(({ name, href }) => href ? (
              <Link key={name} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{name}</Link>
            ) : (
              <span key={name} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{name}</span>
            ))}
          </div>

          <h2>Toronto Mosquito Treatment Schedule</h2>
          <p>For Toronto properties — especially ravine-adjacent ones — a 5-treatment season from May through September provides continuous protection. Here's the schedule we recommend:</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Treatment</th>
                  <th className="px-4 py-2 text-left">Timing</th>
                  <th className="px-4 py-2 text-left">Focus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: 'Treatment 1', timing: 'Mid-May', focus: 'Season opener — establish barrier before ravine populations peak' },
                  { t: 'Treatment 2', timing: 'Early June', focus: 'Pre-June 24 weekend — peak outdoor use begins, tick nymph overlap' },
                  { t: 'Treatment 3', timing: 'Early July', focus: 'Peak season — highest ravine mosquito activity' },
                  { t: 'Treatment 4', timing: 'Early August', focus: 'Late summer pressure, particularly along Don/Humber corridors' },
                  { t: 'Treatment 5', timing: 'Early September', focus: 'Extended season — Toronto mosquitoes active well into fall' },
                ].map(({ t, timing, focus }) => (
                  <tr key={t} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-brand-700">{t}</td>
                    <td className="px-4 py-2 text-gray-800">{timing}</td>
                    <td className="px-4 py-2 text-gray-600">{focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Each treatment covers all vegetation on your property up to 10 feet high, with targeted coverage along ravine edges and fence lines. Protection lasts up to 30 days per visit. See our <Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">2026 mosquito control pricing guide</Link> for typical costs in the GTA.</p>

          <h2>What's Included in Our Toronto Mosquito Treatment</h2>
          <ul>
            <li>Complete barrier spray of all vegetation and shrubs up to 10 feet high</li>
            <li>Targeted treatment of ravine-adjacent property edges and fence lines</li>
            <li>Up to 30 days of residual protection per visit</li>
            <li>Health Canada–approved formula — safe for kids and pets after 30 min</li>
            <li>Free reapplication if mosquitoes return within the protection window</li>
          </ul>

          <h2>Mosquito Control Pricing in Toronto</h2>
          <p>BuzzSkito mosquito treatments in Toronto start from $99 per visit — no contracts, no pressure to commit to a full season.</p>
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
                  { type: 'Standard residential lot (under 6,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Toronto semi, townhome, or detached' },
                  { type: 'Mid-size lot (6,000–10,000 sq ft)', price: 'Custom quote', coverage: 'Larger detached, ravine-backing, Rosedale/Forest Hill' },
                  { type: 'Large / estate property (10,000+ sq ft)', price: 'Custom quote', coverage: 'Bridle Path, Lawrence Park, Hoggs Hollow' },
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
          <p>See our <Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">2026 mosquito control pricing guide</Link> for a full Ontario breakdown. Call <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a> for a free quote.</p>

          <h2>Professional Mosquito Control vs. DIY in Toronto</h2>
          <p>Hardware stores sell mosquito foggers, citronella candles, and consumer sprays. Here&apos;s why they fall short for Toronto properties:</p>
          <ul>
            <li><strong>Consumer foggers provide hours of relief, not 30 days.</strong> Professional barrier spray bonds to leaf surfaces and keeps working for weeks. A citronella candle and a barrier treatment are not comparable products.</li>
            <li><strong>Application technique matters more than product.</strong> Mosquitoes rest on leaf undersides, in shaded shrub interiors, and under deck joists. Backpack precision sprayers reach these surfaces — consumer foggers spray into open air, missing the actual resting sites.</li>
            <li><strong>Toronto&apos;s mosquito sources are beyond your control.</strong> The Don Valley, Humber River, and Highland Creek will produce mosquitoes every season regardless of what you do on your property. Professional barrier spray creates a treated zone that stops them from settling after dispersing from the ravines.</li>
            <li><strong>Larvicide tablets don&apos;t address the real problem.</strong> You can treat every puddle on your lot and still have severe mosquitoes because the dominant pressure comes from off-property ravine sources.</li>
          </ul>

          <h2>Choosing the Right Mosquito Control Service in Toronto</h2>
          <p>Several companies now offer mosquito control in Toronto. Here&apos;s what to evaluate:</p>
          <ul>
            <li><strong>Health Canada–registered products.</strong> Any product applied must be registered under the Pest Control Products Act. BuzzSkito uses only registered, water-based formulas.</li>
            <li><strong>Licensed applicators.</strong> Ontario requires a Pesticide Applicator&apos;s Licence for commercial applications.</li>
            <li><strong>Rain-back guarantee.</strong> Reputable companies re-treat if rain falls within the cure window. Standard at BuzzSkito.</li>
            <li><strong>No long-term contracts.</strong> Book a single treatment and evaluate results before committing to a season.</li>
            <li><strong>Local Toronto knowledge.</strong> Companies that understand ravine corridors and Toronto&apos;s specific geography treat more effectively than generic operators.</li>
            <li><strong>Transparent pricing.</strong> BuzzSkito publishes pricing and quotes over the phone — no mandatory &quot;assessment visit&quot; required first.</li>
          </ul>

          <h2>What to Expect on Your BuzzSkito Treatment Day</h2>
          <ol>
            <li><strong>SMS notification before arrival</strong> — You&apos;ll receive a text when your technician is on the way. You don&apos;t need to be home.</li>
            <li><strong>Property walkthrough</strong> — On the first visit, your technician assesses ravine exposure, vegetation density, and property-specific risk factors.</li>
            <li><strong>Full barrier application</strong> — Systematic treatment of all vegetation: shrubs, garden beds, leaf undersides, fence lines, deck undersides, woodpiles. A typical Toronto lot takes 25–40 minutes.</li>
            <li><strong>Lawn sign placement</strong> — Confirms the treatment date and product used.</li>
            <li><strong>30-minute dry time</strong> — Keep children and pets off treated surfaces while the product cures.</li>
            <li><strong>Follow-up email confirmation</strong> — Treatment log with areas treated, product applied, and your next visit date.</li>
          </ol>

          <h2>Also Providing Tick Control in Toronto</h2>
          <p>Toronto's ravine system also harbours blacklegged ticks, which carry Lyme disease. Ask about our <Link href="/toronto-tick-spray" className="text-brand-700 hover:underline">Toronto tick control service</Link>.</p>

          <h2>Related Mosquito Control Guides</h2>
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
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What Toronto Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Linda C.', location: 'Rosedale', text: 'Very impressed with the SMS alerts before and after service. Our Toronto property backs onto a ravine so mosquitoes are a real issue — after the first treatment the difference was night and day.' },
              { author: 'Sarah M.', location: 'Leaside', text: 'BuzzSkito treated our backyard and we noticed a huge difference immediately. No mosquitoes at our outdoor birthday party! The technician was professional and on time. Highly recommend.' },
              { author: 'Chris W.', location: 'The Beaches', text: 'Living near the lake means mosquitoes every summer. We tried everything — candles, zappers, sprays from the hardware store. One BuzzSkito treatment did more than all of them combined.' },
              { author: 'Mike T.', location: 'Etobicoke', text: 'Second year using BuzzSkito for the season package. Consistent, reliable, and actually works. Our backyard used to be unbearable by July — now we\'re out there every evening.' },
            ].map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Toronto</span></p>
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
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Toronto home from mosquitoes this season. No contracts." />
    </>
  )
}
