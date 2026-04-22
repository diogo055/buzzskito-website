import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Mississauga | From $99',
  description:
    'Professional tick spray in Mississauga. Protect your yard near Credit River & Rattray Marsh. From $99. Call (289) 216-5030.',
  canonical: '/mississauga-tick-spray',
})

const CITY = 'Mississauga'
const NEIGHBOURHOODS = ['Port Credit','Meadowvale','Streetsville','Malton','Lorne Park','Cooksville','Lakeview','Erin Mills','Clarkson','Churchill Meadows','Mineola','Applewood']
const FAQS = [
  { question: 'How much does tick spray cost in Mississauga?', answer: 'Tick spray in Mississauga starts from $99 per application. Properties near the Credit River valley, Rattray Marsh, or Erindale Park benefit most from both spring and fall applications. No contracts. Call (289) 216-5030 for a free Mississauga tick spray quote.' },
  { question: 'Where are ticks most common in Mississauga?', answer: 'Ticks are concentrated in Mississauga\'s wooded and transitional areas: the Credit River valley and trail system, Rattray Marsh Conservation Area, Erindale Park, Meadowvale Conservation Area, and the forested edges of many neighbourhoods. Properties backing onto these areas have the highest tick exposure risk.' },
  { question: 'How often does Mississauga need tick treatment?', answer: 'BuzzSkito recommends two treatments per season: one in late May or June targeting spring nymphs (the most dangerous stage for Lyme disease transmission), and one in August or September targeting adult fall ticks. Our treatments provide up to 30 days of protection each.' },
  { question: 'Do ticks really carry Lyme disease in Mississauga?', answer: 'Yes. The blacklegged tick (Ixodes scapularis), which transmits Lyme disease, is established in Mississauga\'s Conservation Areas. Ontario public health data shows increasing Lyme disease cases in the GTA. Professional tick control significantly reduces your risk of exposure.' },
  { question: 'What tick species are found in Mississauga?', answer: 'The blacklegged tick (deer tick) is the primary concern — it transmits Lyme disease and is established along the Credit River corridor and Rattray Marsh. American dog ticks are also common but rarely carry Lyme disease. Blacklegged tick nymphs are poppy-seed-sized and responsible for most Lyme transmissions because they\'re nearly invisible during tick checks.' },
  { question: 'Is tick spray safe for my family and pets?', answer: 'Yes. Our Health Canada-approved formula is safe for children and pets once dry — approximately 30 minutes after application. We apply to vegetation where ticks rest, not to grass or play areas. After the 30-minute drying window, your yard is fully safe with tick protection active.' },
  { question: 'How does professional tick spray work?', answer: 'We apply a residual barrier to the specific micro-habitats where ticks concentrate: the 1-3 metre transition zone between lawn and natural vegetation, garden bed edges, leaf litter, woodpiles, fence lines, and under decks. The formula kills ticks on contact and provides up to 30 days of residual protection.' },
  { question: 'Does BuzzSkito also do mosquito control in Mississauga?', answer: 'Yes. Most Mississauga homeowners bundle tick and mosquito control in the same visit — the same vegetation surfaces that harbour ticks also provide resting habitat for mosquitoes. See our Mississauga mosquito control service for bundle pricing.' },
]

export default function MississaugaTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/mississauga-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/mississauga-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick', city: 'Mississauga' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mississauga-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Mississauga's conservation areas, Credit River trails, and Rattray Marsh are established blacklegged tick habitats. BuzzSkito provides professional tick spray to protect your family from Lyme disease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
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
            <p className="text-gray-600 text-sm mt-0.5">Professional tick spray service from <strong className="text-amber-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/free-yard-assessment" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Tick Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Property Tick Assessment', desc: 'We identify tick habitat zones — Credit River trail edges, lawn-to-woods transitions, leaf litter, garden bed borders, and fence lines on your Mississauga property.' },
              { step: '2', title: 'Targeted Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to the specific 1-3 metre zones where ticks concentrate — precision treatment, not broadcast spraying.' },
              { step: '3', title: '30-Day Protection', desc: 'The residual formula kills ticks on contact and creates a barrier for up to 30 days. If ticks return within the window, we re-treat at no cost.' },
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
          <h2>Why Tick Spray Is Crucial in Mississauga</h2>
          <p>Blacklegged ticks — the species that transmits Lyme disease — are well established in Mississauga's natural areas. The Credit River valley (from Streetsville through Port Credit), Rattray Marsh, Meadowvale Conservation Area, and Erindale Park are all confirmed tick habitat areas. Properties adjacent to these areas face meaningful annual tick exposure risk.</p>
          <p>Ticks don't fly or jump — they wait at the tips of grasses and shrubs at the edges of lawns and wooded areas, attaching to people and pets as they pass. This means the tick risk zone is usually your own backyard, not the forest. Professional barrier spray applied to your property's high-risk zones is the most effective way to reduce that risk.</p>

          <h2>Tick Hotspots in Mississauga</h2>
          <ul>
            <li>Credit River valley trail system (Streetsville to Port Credit)</li>
            <li>Rattray Marsh Conservation Area (Clarkson)</li>
            <li>Meadowvale Conservation Area and Aquitaine Lake (Meadowvale)</li>
            <li>Erindale Park (Mississauga Valleys)</li>
            <li>Properties backing onto Greenbelt corridors throughout the city</li>
          </ul>

          <h2>Mississauga Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Mississauga Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Tick Treatment Schedule for Mississauga</h2>
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
                  { t: 'Spring treatment', timing: 'Late May / Early June', target: 'Target nymphs — peak Lyme risk (tiny, hard to detect, most transmissions)' },
                  { t: 'Summer treatment (optional)', timing: 'Mid-July', target: 'Recommended for Credit River, Rattray Marsh-adjacent properties' },
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

          <h2>Tick Spray Pricing in Mississauga</h2>
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
                  { type: 'Standard lot (under 6,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Mississauga semi or detached home' },
                  { type: 'Mid-size lot (6,000–10,000 sq ft)', price: 'Custom quote', coverage: 'Credit River-adjacent, Lorne Park, Mineola' },
                  { type: 'Large / estate property (10,000+ sq ft)', price: 'Custom quote', coverage: 'Port Credit estates, Rattray Marsh area' },
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
          <p>No contracts. Call <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a> for a free quote.</p>

          <h2>Professional Tick Spray vs. DIY in Mississauga</h2>
          <ul>
            <li><strong>Store-bought repellents protect people, not yards.</strong> DEET sprays protect the wearer. Professional yard spray creates a treated zone that kills ticks before they reach your family.</li>
            <li><strong>Precision matters more than product.</strong> Ticks live in specific micro-habitats — lawn-to-woods transitions, leaf litter, garden edges. Professional treatment targets these zones directly.</li>
            <li><strong>Mississauga&apos;s tick sources are beyond your property.</strong> The Credit River, Rattray Marsh, and Erindale Park will produce ticks every year. A treated barrier on your property is the only reliable residential defence.</li>
          </ul>

          <h2>What to Expect on Tick Treatment Day</h2>
          <ol>
            <li><strong>SMS notification before arrival</strong> — you don&apos;t need to be home.</li>
            <li><strong>Property tick assessment</strong> — your technician identifies Credit River exposure, transition zones, and high-risk perimeters.</li>
            <li><strong>Targeted barrier application</strong> — precision spray to tick habitat zones: lawn edges, garden borders, fence lines, woodpiles, under decks. 20–30 minutes.</li>
            <li><strong>30-minute dry time</strong> — then fully safe for kids and pets.</li>
            <li><strong>Email confirmation</strong> — treatment log with areas treated and next visit date.</li>
          </ol>

          <h2>Also Providing Mosquito Control in Mississauga</h2>
          <p>Many Mississauga homeowners combine tick and mosquito control in the same visit. See our <Link href="/mississauga-mosquito-control" className="text-brand-700 hover:underline">Mississauga mosquito control service</Link>.</p>

          <h2>Related Tick Control Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            {TICK_BLOGS.supporting.slice(0,2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What Mississauga Homeowners Say About Our Tick Control</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Priya R.', location: 'Meadowvale', text: 'The technician explained exactly what product they were using and why it\'s safe for our dog. Treated the garden edges and fence line where ticks were coming from. Couldn\'t be happier with the results.' },
              { author: 'Amanda K.', location: 'Streetsville', text: 'We live near the Credit River and found a tick on our daughter after playing in the yard. Called BuzzSkito and they were out within days. No more ticks since the treatment.' },
              { author: 'Jason T.', location: 'Lorne Park', text: 'Our property backs onto wooded ravine and tick prevention is a must for us. BuzzSkito knows exactly where to treat and the results are consistent every season.' },
              { author: 'Sarah M.', location: 'Port Credit', text: 'We bundle mosquito and tick control and the convenience is great — one visit covers both. Professional service, excellent communication, and peace of mind for our family.' },
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

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Spray in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protect your family from Lyme disease. No contracts, guaranteed results." variant="dark" />
    </>
  )
}
