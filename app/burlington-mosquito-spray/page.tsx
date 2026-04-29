import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Burlington Mosquito Control 2026 · From $99 · 129 Five-Star Reviews',
  description:
    'Professional mosquito spray in Burlington. Serving Alton Village, Roseland, Aldershot & all areas. From $99. Call (289) 216-5030.',
  canonical: '/burlington-mosquito-spray',
})

const CITY = 'Burlington'
const SLUG = '/burlington-mosquito-spray'
const NEIGHBOURHOODS: { name: string; href?: string }[] = [
  { name: 'Alton Village', href: '/alton-village-mosquito-control' },
  { name: 'Millcroft' },
  { name: 'The Orchard', href: '/orchard-mosquito-control' },
  { name: 'Roseland', href: '/roseland-mosquito-control' },
  { name: 'Downtown Burlington' },
  { name: 'Shoreacres' },
  { name: 'Headon Forest' },
  { name: 'North Burlington' },
  { name: 'Palmer', href: '/palmer-mosquito-control' },
  { name: 'Tyandaga' },
  { name: 'Brant Hills' },
  { name: 'Elizabeth Gardens' },
  { name: 'Aldershot', href: '/aldershot-mosquito-control' },
  { name: 'Mountainside' },
]

const FAQS = [
  {
    question: 'How much does mosquito control cost in Burlington?',
    answer: 'BuzzSkito mosquito control in Burlington starts from $99 per application. Waterfront neighbourhoods and properties near Bronte Creek typically benefit most from the full seasonal package for continuous protection. No contracts. Call (289) 216-5030 for a free Burlington quote.',
  },
  {
    question: 'Why are mosquitoes so bad in Burlington?',
    answer: "Burlington's geography creates mosquito pressure from multiple directions. Burlington Bay and the Lake Ontario shoreline generate waterfront mosquito activity that affects lakeshore and Aldershot properties. Bronte Creek runs north-south through the city's west end, creating a continuous breeding and dispersal corridor through West Oak Trails, Bronte, and River Oaks. The Royal Botanical Gardens — 1,100+ hectares of naturalized land on Burlington's northwest border — sustains large mosquito populations that disperse into adjacent North Burlington and Waterdown neighbourhoods. Newer developments in Alton Village and The Orchard contain stormwater ponds that become active breeding sites each season.",
  },
  {
    question: "Does Burlington's waterfront increase mosquito activity?",
    answer: "Yes. Burlington Bay and the Lake Ontario shoreline provide breeding grounds through shoreline vegetation, and properties near Spencer Smith Park, LaSalle Park, and Aldershot lakeshore are particularly affected. The high humidity along the waterfront also extends evening mosquito activity later into the night compared to inland properties.",
  },
  {
    question: 'Which Burlington neighbourhoods have the most mosquito activity?',
    answer: "Properties near Bronte Creek face the highest consistent pressure — particularly Bronte, West Oak Trails, and River Oaks. Shoreacres and Roseland lakeshore properties experience activity from the waterfront and mature tree canopy. Alton Village and Millcroft homeowners encounter pond-driven pressure from stormwater infrastructure in their developments. North Burlington properties near the Royal Botanical Gardens boundary have elevated mosquito activity from the naturalized RBG lands.",
  },
  {
    question: 'How many treatments does a Burlington home need per season?',
    answer: "We typically recommend 4 treatments from May through September, spaced 21–28 days apart. Properties adjacent to Bronte Creek, Burlington Bay, or the RBG boundary may benefit from 5 treatments given the sustained pressure from these natural features. Our technician will assess your property and recommend accordingly.",
  },
  {
    question: "Is BuzzSkito's mosquito spray safe for Burlington's older mature-tree neighbourhoods?",
    answer: "Yes. Our water-based, Health Canada–approved formula is safe for application around mature trees, established gardens, and native plant landscaping. The product targets resting surfaces — leaf undersides and shrub foliage — not tree trunks or bare soil. After 30 minutes of drying time, the treated area is safe for children, pets, and pollinators.",
  },
  {
    question: 'Does BuzzSkito serve all Burlington neighbourhoods?',
    answer: "Yes. We serve all Burlington communities including Alton Village, Millcroft, The Orchard, Roseland, Shoreacres, Headon Forest, North Burlington, Palmer, Tyandaga, Brant Hills, Aldershot, and Downtown Burlington. Call (289) 216-5030 to confirm availability at your address.",
  },
  {
    question: 'Does BuzzSkito also provide tick control in Burlington?',
    answer: "Yes. Burlington's wooded greenbelt corridors, Bronte Creek Provincial Park, and Royal Botanical Gardens are significant blacklegged tick habitat. Many Burlington homeowners bundle mosquito and tick treatments for complete yard protection. See our Burlington tick control service or ask about bundle pricing when you call.",
  },
]

export default function BurlingtonMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Spray ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Burlington' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/burlington-mosquito-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Burlington Mosquito Control<br/>
            <span className="text-amber-400">From $99 · 129 Five-Star Reviews</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Burlington&apos;s specialist barrier spray for waterfront, Bronte Creek, Tyandaga, and Aldershot properties. Health Canada-approved, safe for kids and pets in 30 minutes, backed by the <strong className="text-amber-400">BuzzSkito Bite-Free Guarantee</strong>.
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
          <span>✓ Bite-Free Guarantee</span>
          <span>✓ 5-Star Rated · 129 Reviews</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">What is the best mosquito control company in Burlington?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>BuzzSkito provides specialist mosquito barrier spray across all Burlington neighbourhoods — Alton Village, Millcroft, The Orchard, Roseland, Downtown Burlington, Shoreacres, Headon Forest, North Burlington, Palmer, Tyandaga, and Aldershot.</strong> Treatments use Health Canada-approved formulations applied to vegetation and shrub interiors where mosquitoes rest. Single treatments start at <strong>$99</strong>, with seasonal programs from $549. With <strong>129 five-star Google reviews</strong>, no contracts, a 30-minute re-entry window, and the <strong>BuzzSkito Bite-Free Guarantee</strong>, Burlington homeowners get reliable barrier spray for waterfront and creek-adjacent properties. Call (289) 216-5030.
          </p>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Burlington Mosquito Control Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service area', 'All Burlington neighbourhoods (Alton Village, Millcroft, The Orchard, Roseland, Downtown Burlington, Shoreacres, Headon Forest, North Burlington, Palmer, Tyandaga, Aldershot)'],
                  ['Specialization', 'Mosquito barrier spray for residential properties'],
                  ['Pricing', 'From $99 per treatment · seasonal programs $549–$2,049'],
                  ['Treatment season', 'May through September (peak: late May–July)'],
                  ['Protection per visit', 'Up to 30 days residual'],
                  ['Re-entry time', '30 minutes after spray dries (kid and pet safe)'],
                  ['Recommended schedule', '4–5 treatments per season for waterfront and creek-adjacent properties'],
                  ['Highest pressure zones', 'Lake Ontario shoreline · Bronte Creek · Tyandaga ravines · Niagara Escarpment edge'],
                  ['Booking lead time', 'Same-week service typical'],
                  ['Contract required', 'No — single treatments and seasonal programs both available'],
                  ['Guarantee', 'BuzzSkito Bite-Free Guarantee (free re-treatment in protection window)'],
                  ['Google reviews', '129 reviews · 5.0 average · 0 negative'],
                  ['Phone', BUSINESS.phone],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2.5 font-semibold text-brand-900 bg-gray-50 w-1/3">{k}</td>
                    <td className="px-4 py-2.5 text-gray-800">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your Burlington property — identifying waterfront exposure, creek proximity, and mosquito pressure zones specific to your neighbourhood.' },
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
          <h2>Take Back Your Burlington Backyard</h2>
          <p>Burlington's combination of waterfront access, mature tree canopy in established neighbourhoods like Roseland and Shoreacres, and newer developments with stormwater ponds creates one of the GTA's more complex mosquito environments. <strong>Bronte Creek Provincial Park</strong> borders Burlington's west end and generates significant natural mosquito pressure that disperses into Bronte, West Oak Trails, and River Oaks. <strong>Burlington Bay</strong> and the Lake Ontario waterfront create early-season pressure along the lakeshore. The <strong>Royal Botanical Gardens</strong> — 1,100+ hectares of naturalized land on Burlington's northwest boundary — sustains active mosquito populations that affect North Burlington and Waterdown neighbourhoods throughout the season.</p>
          <p>BuzzSkito treats Burlington properties of all sizes — from compact Alton Village townhomes to larger estate lots in Shoreacres and Roseland. Our no-contract approach means you can book individual treatments or a full season program based on your property's needs and exposure level.</p>

          <h2>Mosquito Pressure Zones by Burlington Neighbourhood</h2>
          <h3>Bronte, West Oak Trails &amp; River Oaks</h3>
          <p>These west Burlington neighbourhoods face the highest mosquito activity due to proximity to Bronte Creek Provincial Park and the Bronte Creek valley. Properties within 500 metres of the creek experience consistent season-long pressure.</p>

          <h3>Roseland, Shoreacres &amp; Lakeshore</h3>
          <p>Mature lakeshore neighbourhoods benefit from lake breezes but the dense tree canopy, established gardens, and proximity to Burlington Bay create significant daytime resting habitat. Evening mosquito activity is elevated near the waterfront throughout the season.</p>

          <h3>Alton Village, Millcroft &amp; The Orchard</h3>
          <p>North Burlington's newer developments contain stormwater management ponds that become active mosquito breeding sites from May through September. First-season homeowners in these areas frequently report unexpected mosquito pressure from these engineered water features.</p>

          <h3>North Burlington &amp; Waterdown (RBG border)</h3>
          <p>Properties adjacent to or within 600 metres of Royal Botanical Gardens lands experience elevated mosquito pressure from the naturalized wetlands and mature vegetation within the RBG boundaries.</p>

          <h2>Burlington Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map(({ name, href }) => href ? (
              <Link key={name} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{name}</Link>
            ) : (
              <span key={name} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{name}</span>
            ))}
          </div>

          <h2>Mosquito Control Pricing in Burlington</h2>
          <p>BuzzSkito treatments start from $99 per visit — no contracts, no pressure to commit to a full season.</p>
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
                  { type: 'Standard lot (under 6,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Burlington townhome or detached' },
                  { type: 'Mid-size lot (6,000–10,000 sq ft)', price: 'Custom quote', coverage: 'Larger detached, Roseland, Shoreacres' },
                  { type: 'Large / estate property (10,000+ sq ft)', price: 'Custom quote', coverage: 'Lakeshore estates, large waterfront lots' },
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
          <p>See our <Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">2026 pricing guide</Link> for a full Ontario breakdown. Call <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a> for a free quote.</p>

          <h2>Professional Mosquito Control vs. DIY in Burlington</h2>
          <ul>
            <li><strong>Consumer foggers provide hours of relief, not 30 days.</strong> Professional barrier spray bonds to leaf surfaces and keeps working for weeks.</li>
            <li><strong>Mosquitoes rest where foggers can&apos;t reach.</strong> Leaf undersides, shaded shrub interiors, and under deck joists — precision backpack sprayers target these surfaces directly.</li>
            <li><strong>Burlington&apos;s mosquito sources are beyond your control.</strong> Bronte Creek, Burlington Bay, and the Royal Botanical Gardens will produce mosquitoes every season. Barrier spray stops them from settling on your property.</li>
            <li><strong>Larvicide tablets don&apos;t solve it.</strong> You can treat your own standing water and still have severe mosquitoes from off-property sources.</li>
          </ul>

          <h2>What to Expect on Treatment Day</h2>
          <ol>
            <li><strong>SMS notification before arrival</strong> — you don&apos;t need to be home.</li>
            <li><strong>Property walkthrough</strong> — assess waterfront exposure, vegetation density, and risk factors.</li>
            <li><strong>Full barrier application</strong> — all vegetation, fence lines, deck undersides, woodpiles. 25–40 minutes.</li>
            <li><strong>Lawn sign placement</strong> — confirms treatment date and product.</li>
            <li><strong>30-minute dry time</strong> — then fully safe for kids and pets.</li>
            <li><strong>Email confirmation</strong> — treatment log with next visit date.</li>
          </ol>

          <h2>Also Providing Tick Control in Burlington</h2>
          <p>Burlington's wooded greenbelt corridors and Escarpment trails are significant tick habitat. See our <Link href="/burlington-tick-spray" className="text-brand-700 hover:underline">Burlington tick control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control: What Actually Works</Link></li>
            <li><Link href="/blog/mosquito-tick-control-hamilton-burlington" className="text-brand-700 hover:underline">Hamilton &amp; Burlington Mosquito &amp; Tick Control Guide</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What Burlington Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 129 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Mike T.', location: 'Alton Village', text: 'Second year using BuzzSkito for the season package. Consistent, reliable, and actually works. Our backyard in Burlington used to be unbearable by July — now we\'re out there every evening.' },
              { author: 'Sandra H.', location: 'Roseland', text: 'Our mature garden near the lake was a mosquito magnet. BuzzSkito treated it carefully around all our plants and the results were immediate. Very professional team.' },
              { author: 'Greg W.', location: 'Aldershot', text: 'Living near the waterfront means mosquitoes every summer. We tried everything before calling BuzzSkito. One treatment made more difference than years of citronella candles.' },
              { author: 'Lisa M.', location: 'Millcroft', text: 'The stormwater pond behind our house made our backyard unusable. BuzzSkito changed that completely. Great communication, professional service, and our yard is finally enjoyable.' },
            ].map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Burlington</span></p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 129 reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – {CITY} Mosquito Spray</h2>
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

      <CTASection heading={`Get a Free Mosquito Spray Quote in ${CITY}`} subtext="No contracts. Guaranteed results. Book your Burlington treatment today." />
    </>
  )
}
