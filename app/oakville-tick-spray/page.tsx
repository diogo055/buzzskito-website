import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Control Service Oakville | From $99, No Contracts | BuzzSkito',
  description:
    'Professional tick spray in Oakville. Protect your yard near Bronte Creek & conservation areas. From $99. Call (289) 216-5030.',
  canonical: '/oakville-tick-spray',
})

const CITY = 'Oakville'
const SLUG = '/oakville-tick-spray'
const NEIGHBOURHOODS = ['Bronte','Glen Abbey','Joshua Creek','West Oak Trails','Clearview','Palermo','River Oaks','Kerr Village','Old Oakville','North Oakville']

const FAQS = [
  {
    question: 'How much does tick spray cost in Oakville?',
    answer: 'Tick spray in Oakville starts from $99 per application. Properties near Bronte Creek Provincial Park, the Sixteen Mile Creek, or any woodland edge benefit most from both spring and fall treatments. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Is Bronte Creek Provincial Park a tick risk for Oakville homeowners?',
    answer: "Yes. Bronte Creek Provincial Park is established blacklegged tick habitat and one of the most significant tick risk sites in Halton Region. The creek valley itself extends north through West Oak Trails and River Oaks, creating a tick dispersal corridor into residential properties. Homes adjacent to the park or creek system — particularly in Bronte, West Oak Trails, and River Oaks — have the highest exposure in Oakville.",
  },
  {
    question: 'What tick species are found in Oakville?',
    answer: "The blacklegged tick (deer tick, Ixodes scapularis) is the primary species of concern in Oakville and is the only species that transmits Lyme disease. American dog ticks are also present throughout the area but rarely transmit Lyme. Both species favour the humid, wooded environments common along Oakville's creeks and ravine systems.",
  },
  {
    question: 'Which Oakville neighbourhoods have the highest tick risk?',
    answer: "Bronte, West Oak Trails, and River Oaks face the highest risk due to direct adjacency to Bronte Creek Provincial Park. Glen Abbey properties backing onto the golf course ravines and 16 Mile Creek also have elevated tick exposure. North Oakville new-build developments near conservation corridors should treat as a precaution given proximity to Bronte Creek and Sixteen Mile Creek headwaters.",
  },
  {
    question: 'How many tick treatments does my Oakville property need per season?',
    answer: "We recommend two treatments per season: one in late May or early June targeting spring nymphs (peak risk, May–July), and one in August or September for adult tick emergence. Properties directly adjacent to Bronte Creek Provincial Park, wooded ravines, or properties with confirmed deer movement may benefit from a third visit. Each treatment provides up to 30 days of residual protection.",
  },
  {
    question: "Is tick spray safe near Oakville's creeks and wetlands?",
    answer: "Yes. Our Health Canada–approved, water-based formula is designed for residential use near water features. We do not apply product to water or shoreline areas directly. Once dry (approximately 30 minutes), the formula does not leach into waterways. We maintain safe buffer zones around any sensitive riparian areas on your property.",
  },
  {
    question: 'Does BuzzSkito offer mosquito control in Oakville as well?',
    answer: "Yes. Oakville's lakefront properties, Bronte Creek, 16 Mile Creek, and rain-garden landscaping create significant annual mosquito pressure. Many Oakville homeowners bundle mosquito and tick treatments for complete yard protection through the season. Ask about seasonal package pricing when you call.",
  },
  {
    question: 'What areas of my Oakville property should be treated for ticks?',
    answer: "Ticks concentrate at the transition zones on your property — the edge where maintained lawn meets any natural vegetation, garden beds, wooded areas, or fence lines. We also treat leaf litter accumulation areas, under decks, woodpile areas, and any ornamental beds with mulch. These specific zones account for the vast majority of tick exposure for Oakville homeowners.",
  },
]

export default function OakvilleTickSprayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray in ${CITY}, Ontario. Health Canada–approved. Up to 30-day protection.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/oakville-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Bronte Creek Provincial Park, Glen Abbey's wooded ravines, and Oakville's natural trail systems are prime blacklegged tick habitat. BuzzSkito provides professional tick spray to protect Oakville families from Lyme disease.
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
          <span>✓ Lyme Disease Prevention</span>
          <span>✓ 5-Star Rated · 126 Reviews</span>
        </div>
      </section>

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Tick Spray Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional tick spray from <strong className="text-amber-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Tick Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Property Tick Assessment', desc: 'We identify tick habitat zones on your Oakville property — lawn-to-woods transition areas near Bronte Creek, leaf litter, woodpiles, garden bed edges, and fence lines.' },
              { step: '2', title: 'Targeted Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to the specific 1-3 metre zones where ticks concentrate — precision treatment, not broadcast spraying.' },
              { step: '3', title: '30-Day Protection', desc: 'The residual formula kills ticks on contact and creates a protective barrier for up to 30 days. If ticks return within the window, we re-treat at no cost.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-brand-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Tick Risk in Oakville</h2>
          <p>Oakville's picturesque wooded landscape — Bronte Creek Provincial Park, the 16 Mile Creek corridor, and the many ravines woven through Glen Abbey, Joshua Creek, and West Oak Trails — creates significant blacklegged tick habitat. Halton Region Public Health conducts annual tick surveillance and has documented established blacklegged tick populations in Bronte Creek Provincial Park and adjacent areas. Oakville's proximity to the Niagara Escarpment means tick populations from the escarpment spread into adjacent residential neighbourhoods through deer movement along creek corridors.</p>
          <p>The critical point for Oakville homeowners: you don't need a forest to have ticks. A property backing onto any ravine, creek, or green space — even a thin strip — can have tick activity at its edges. A professional barrier treatment at your property's transition zones is the most effective prevention available.</p>

          <h2>High-Risk Zones by Oakville Neighbourhood</h2>
          <ul>
            <li><strong>Bronte</strong> — directly adjacent to Bronte Creek Provincial Park and Lake Ontario shoreline</li>
            <li><strong>West Oak Trails</strong> — borders Bronte Creek corridor; documented deer movement through the area</li>
            <li><strong>Glen Abbey</strong> — ravines and creek features through the golf course create tick habitat alongside residential lots</li>
            <li><strong>River Oaks</strong> — Bronte Creek runs through the neighbourhood, creating consistent exposure</li>
            <li><strong>North Oakville</strong> — newer developments near Sixteen Mile Creek headwaters and Bronte Creek conservation buffer</li>
          </ul>

          <h2>Oakville Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>Types of Ticks Found in Oakville</h2>
          <ul>
            <li><strong>Blacklegged tick (deer tick)</strong> — The Lyme disease vector. Adults are reddish-brown with black legs (~3mm unfed). Nymphs are poppy-seed-sized and responsible for most Lyme transmissions because they&apos;re nearly invisible. Established populations documented in Bronte Creek Provincial Park by Halton Region Public Health.</li>
            <li><strong>American dog tick</strong> — Larger, brown with white markings. Common but does not carry Lyme disease. Found in similar habitats along Oakville&apos;s creek corridors.</li>
          </ul>

          <h2>Tick Treatment Schedule for Oakville</h2>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="px-4 py-2 text-left">Treatment</th>
                  <th className="px-4 py-2 text-left">Timing</th>
                  <th className="px-4 py-2 text-left">Target</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: 'Spring treatment', timing: 'Late May / Early June', target: 'Target nymphs — peak Lyme disease transmission risk (tiny, hard to detect)' },
                  { t: 'Summer treatment (optional)', timing: 'Mid-July', target: 'Recommended for Bronte Creek, Glen Abbey ravine-adjacent properties' },
                  { t: 'Fall treatment', timing: 'Late August / September', target: 'Target adult ticks before fall activity surge' },
                ].map(({ t, timing, target }) => (
                  <tr key={t} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-gray-800">{t}</td>
                    <td className="px-4 py-2 text-amber-700 font-semibold">{timing}</td>
                    <td className="px-4 py-2 text-gray-600">{target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Tick Spray Pricing in Oakville</h2>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="px-4 py-2 text-left">Property Type</th>
                  <th className="px-4 py-2 text-left">Starting Price</th>
                  <th className="px-4 py-2 text-left">Typical Properties</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Standard lot (under 6,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Oakville semi or detached home' },
                  { type: 'Mid-size lot (6,000–10,000 sq ft)', price: 'Custom quote', coverage: 'Ravine-backing, Glen Abbey, West Oak Trails' },
                  { type: 'Large / estate property (10,000+ sq ft)', price: 'Custom quote', coverage: 'Old Oakville estates, Bronte creek-adjacent' },
                ].map(({ type, price, coverage }) => (
                  <tr key={type} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-semibold text-brand-800">{type}</td>
                    <td className="px-4 py-2 font-extrabold text-amber-700">{price}</td>
                    <td className="px-4 py-2 text-gray-600">{coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Professional Tick Spray vs. DIY in Oakville</h2>
          <ul>
            <li><strong>Store-bought repellents protect people, not yards.</strong> DEET sprays protect the wearer during a walk. Professional yard spray creates a treated perimeter that kills ticks before they reach your family.</li>
            <li><strong>Precision matters more than product.</strong> Ticks live in specific micro-habitats — the lawn-to-woods transition zone, leaf litter, garden bed edges. Professional treatment targets these zones directly.</li>
            <li><strong>Oakville&apos;s tick sources are beyond your property.</strong> Bronte Creek Provincial Park and the 16 Mile Creek corridor will produce ticks regardless. A treated barrier on your property is the only reliable residential defence.</li>
          </ul>

          <h2>What to Expect on Tick Treatment Day</h2>
          <ol>
            <li><strong>SMS notification before arrival</strong> — you don&apos;t need to be home.</li>
            <li><strong>Property tick assessment</strong> — your technician identifies transition zones, leaf litter areas, and high-risk perimeters specific to your Oakville property.</li>
            <li><strong>Targeted barrier application</strong> — precision spray to tick habitat zones: lawn edges, garden borders, fence lines, woodpiles, under decks. 20–30 minutes.</li>
            <li><strong>30-minute dry time</strong> — then fully safe for kids and pets.</li>
            <li><strong>Email confirmation</strong> — treatment log with areas treated and next visit date.</li>
          </ol>

          <h2>Also Providing Mosquito Control in Oakville</h2>
          <p>Bundle tick and mosquito protection for complete seasonal coverage. See our <Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">Oakville mosquito control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/best-tick-control-yard-treatment" className="text-brand-700 hover:underline">Best Tick Control for Your Yard</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
            <li><Link href="/blog/tick-bite-symptoms-what-to-do-ontario" className="text-brand-700 hover:underline">Tick Bite Symptoms &amp; What to Do in Ontario</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What Oakville Homeowners Say About Our Tick Control</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'James K.', location: 'Glen Abbey', text: 'We had a tick problem near our garden border in Oakville. BuzzSkito came out quickly, treated the whole yard, and gave us a detailed service log. Great experience and the kids can play outside again.' },
              { author: 'Mark S.', location: 'Bronte', text: 'Our property backs onto Bronte Creek and we found ticks on our dog twice. After BuzzSkito treated the perimeter the problem stopped completely. Peace of mind for the whole family.' },
              { author: 'Rachel D.', location: 'West Oak Trails', text: 'The technician knew exactly where to focus — the fence line backing onto the creek and our garden bed edges. Very knowledgeable about tick habitat and the treatment worked immediately.' },
              { author: 'David L.', location: 'North Oakville', text: 'With young kids and a yard near conservation land, tick prevention is non-negotiable for us. BuzzSkito handles it professionally and the communication is excellent.' },
            ].map(({ author, location, text }) => (
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

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Spray in {CITY}</h2>
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

      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protecting Oakville families from Lyme disease. No contracts." variant="dark" />
    </>
  )
}
