import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Ticks in Mississauga? Tick Spray From $99 · 150+ 5★',
  description:
    'Blacklegged ticks are established across Mississauga — Lorne Park, Port Credit, Erin Mills. Tick spray from $99, free inspection. Call (289) 216-5030.',
  canonical: '/mississauga-tick-spray',
})

const CITY = 'Mississauga'
const NEIGHBOURHOODS = ['Port Credit','Meadowvale','Streetsville','Malton','Lorne Park','Cooksville','Lakeview','Erin Mills','Clarkson','Churchill Meadows','Mineola','Applewood']
const FAQS = [
  { question: 'How much does tick spray cost in Mississauga?', answer: 'Tick spray in Mississauga starts from $99 per application. A full season is $597 standalone — five treatments across May through September — or $497 when added to any BuzzSkito mosquito plan, a $100 saving. Properties near the Credit River valley, Rattray Marsh, or Erindale Park benefit most from the full five-visit season, because wildlife moving between the conservation lands and your yard keeps reintroducing ticks all summer. No contracts. Call (289) 216-5030 for a free Mississauga tick spray quote.' },
  { question: 'Where are ticks most common in Mississauga?', answer: 'Ticks are concentrated in Mississauga\'s wooded and transitional areas: the Credit River valley and trail system, Rattray Marsh Conservation Area, Erindale Park, Meadowvale Conservation Area, and the forested edges of many neighbourhoods. Properties backing onto these areas have the highest tick exposure risk.' },
  { question: 'How often does Mississauga need tick treatment?', answer: 'BuzzSkito recommends five treatments per season — roughly one a month from May through September. Each treatment provides up to 30 days of protection, so monthly visits keep the barrier continuous rather than leaving a multi-month gap through peak nymph season in May–July, when the poppy-seed-sized nymphs responsible for most Lyme disease transmission are active. The later visits carry protection into the adult tick surge that runs through autumn, into November in mild years. Because deer, mice, and birds keep bringing ticks in from the Credit River corridor and nearby conservation lands, repeated applications are what hold the barrier — a one-off visit cannot.' },
  { question: 'Do ticks really carry Lyme disease in Mississauga?', answer: 'Yes. The blacklegged tick (Ixodes scapularis), which transmits Lyme disease, is established in Mississauga\'s Conservation Areas. Ontario public health data shows increasing Lyme disease cases in the GTA. Professional tick control significantly reduces your risk of exposure.' },
  { question: 'What tick species are found in Mississauga?', answer: 'The blacklegged tick (deer tick) is the primary concern — it transmits Lyme disease and is established along the Credit River corridor and Rattray Marsh. American dog ticks are also common but rarely carry Lyme disease. Blacklegged tick nymphs are poppy-seed-sized and responsible for most Lyme transmissions because they\'re nearly invisible during tick checks.' },
  { question: 'Is tick spray safe for my family and pets?', answer: 'Yes. Our Health Canada-approved formula is safe for children and pets once dry — approximately 30 minutes after application. We apply to vegetation where ticks rest, not to grass or play areas. After the 30-minute drying window, your yard is fully safe with tick protection active.' },
  { question: 'How does professional tick spray work?', answer: 'We apply a residual barrier to the specific micro-habitats where ticks concentrate: the 1-3 metre transition zone between lawn and natural vegetation, garden bed edges, leaf litter, woodpiles, fence lines, and under decks. The formula kills ticks on contact and provides up to 30 days of residual protection.' },
  { question: 'Does BuzzSkito also do mosquito control in Mississauga?', answer: 'Yes. Most Mississauga homeowners bundle tick and mosquito control in the same visit — the same vegetation surfaces that harbour ticks also provide resting habitat for mosquitoes. See our Mississauga mosquito control service for bundle pricing.' },
  { question: 'How much is a full-season tick program in Mississauga?', answer: 'A standalone seasonal tick program is $597 for 5 sprays across the May–September season (plus HST). If you already have a BuzzSkito mosquito plan, add full-season tick protection for just $497 — a $100 saving. Single treatments start from $99. Pricing scales with lot size for properties from 10,000 to 100,000 sq ft. No contracts, and every visit is backed by our Bite-Free Guarantee.' },
  { question: 'Which Mississauga neighbourhoods have the highest tick risk?', answer: 'The highest blacklegged tick exposure in Mississauga is along the Credit River corridor and conservation lands: Lorne Park and Port Credit (near the river mouth and Rattray Marsh), Streetsville and Erin Mills (Credit River valley and Culham Trail), Meadowvale (Meadowvale Conservation Area and Aquitaine Lake), and Churchill Meadows (Greenbelt and hydro-corridor edges). Any property backing onto ravine, trail, or wooded green space carries elevated risk regardless of neighbourhood.' },
]

export default function MississaugaTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/mississauga-tick-spray', city: CITY, price: null })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/mississauga-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick', city: 'Mississauga' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mississauga-tick-spray', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tick Control', href: '/tick-control' }, { label: CITY }]}
        title={<>Mississauga Tick Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>Mississauga's conservation areas, Credit River trails, and Rattray Marsh are established blacklegged tick habitats. BuzzSkito provides professional tick spray to protect your family from Lyme disease.</>}
        image="/spray-front.webp"
        imageAlt="BuzzSkito technician treating lawn edges and garden borders for ticks"
      />

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Lyme Disease Prevention</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <QuickAnswer question="What is the best tick control company in Mississauga?">
        <p>
          <strong>BuzzSkito provides specialist tick barrier spray across all Mississauga neighbourhoods — Port Credit, Meadowvale, Streetsville, Erin Mills, Lorne Park, Clarkson, Cooksville, Lakeview, Churchill Meadows, Mineola, Applewood, Credit Valley.</strong> Treatments use Health Canada-approved formulations applied to the specific 1–3 metre zones where blacklegged ticks concentrate — lawn-to-woods transitions, leaf litter, garden bed edges, and fence-line vegetation. Single treatments start at <strong>$99</strong>; tick add-on bundled with mosquito plan from $497. With <strong>150+ five-star Google reviews</strong>, no contracts, a 30-minute re-entry window, and the <strong>BuzzSkito Bite-Free Guarantee</strong>, Mississauga families get reliable Lyme disease prevention for ravine, conservation-area, and wooded-edge properties. Call (289) 216-5030.
        </p>
      </QuickAnswer>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mississauga Tick Control Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service area', 'All Mississauga neighbourhoods (Port Credit, Meadowvale, Streetsville, Erin Mills, Lorne Park, Clarkson, Cooksville, Lakeview, Churchill Meadows, Mineola, Applewood, Credit Valley)'],
                  ['Specialization', 'Blacklegged tick (Ixodes scapularis) and American dog tick barrier spray'],
                  ['Pricing', 'From $99 per treatment · seasonal tick program $597 standalone or tick add-on bundle available on quote'],
                  ['Treatment season', 'May through September, treated monthly (nymph peak May–July; adult ticks stay active into the autumn)'],
                  ['Protection per visit', 'Up to 30 days residual on tick habitat zones'],
                  ['Re-entry time', '30 minutes after spray dries (kid and pet safe)'],
                  ['Recommended schedule', '5 treatments per season for ravine- or conservation-area-adjacent properties'],
                  ['Highest tick zones', 'Rattray Marsh · Credit River valley · Erindale Park · Meadowvale Conservation Area'],
                  ['Lyme disease vector', 'Yes — blacklegged tick populations confirmed by Public Health Ontario'],
                  ['Application zones', 'Lawn-to-woods edge · leaf litter · garden bed perimeters · fence-line vegetation · woodpiles'],
                  ['Booking lead time', 'Same-week service typical'],
                  ['Contract required', 'No — single treatments and seasonal programs both available'],
                  ['Guarantee', 'BuzzSkito Bite-Free Guarantee (free re-treatment in protection window)'],
                  ['Google reviews', '150+ reviews · 5.0 average · 0 negative'],
                  ['Phone', '(289) 216-5030'],
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
            <p className="font-extrabold text-brand-900 text-base">Tick Spray Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional tick spray service from <strong className="text-amber-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/free-yard-assessment" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">How It Works</p>
          <h2 className="h2-display text-brand-950 mb-8 text-center">How BuzzSkito Tick Control Works</h2>
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

          <h2>Tick Risk by Mississauga Neighbourhood</h2>
          <p>Tick pressure across Mississauga tracks the Credit River corridor and the city&rsquo;s conservation lands. Homes backing onto ravine, trail, or wooded green space carry the highest blacklegged tick exposure. Here&rsquo;s how the risk breaks down neighbourhood by neighbourhood:</p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="px-4 py-2 text-left">Neighbourhood</th>
                  <th className="px-4 py-2 text-left">Tick Risk</th>
                  <th className="px-4 py-2 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { area: 'Lorne Park', risk: 'High', why: 'Mature-treed lots near Rattray Marsh and the Credit River mouth — classic blacklegged tick habitat.' },
                  { area: 'Port Credit', risk: 'High', why: 'River-mouth greenspace, waterfront trail edges, and shaded gardens hold ticks along property lines.' },
                  { area: 'Streetsville', risk: 'High', why: 'Credit River valley and Culham Trail run straight through the village; backyards meet the woods.' },
                  { area: 'Erin Mills', risk: 'Moderate–High', why: 'Sawmill Valley and Credit River tributary trails feed ticks into adjacent subdivisions.' },
                  { area: 'Meadowvale', risk: 'Moderate–High', why: 'Meadowvale Conservation Area and Aquitaine Lake create wooded transition zones on nearby lots.' },
                  { area: 'Churchill Meadows', risk: 'Moderate', why: 'Greenbelt, hydro-corridor, and newer wooded buffers put ravine-adjacent homes at risk.' },
                ].map(({ area, risk, why }) => (
                  <tr key={area} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-semibold text-brand-800">{area}</td>
                    <td className="px-4 py-2 font-extrabold text-amber-700">{risk}</td>
                    <td className="px-4 py-2 text-gray-600">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Not sure how your street compares? Our <Link href="/blog/tick-hot-spots-mississauga-2026" className="text-brand-700 hover:underline font-semibold">Mississauga tick hot spots 2026 guide</Link> maps the city&rsquo;s highest-exposure pockets in detail.</p>

          <h2>Seasonal Tick Program Pricing in Mississauga</h2>
          <p>Beyond single visits (from <strong>$99</strong>), most ravine- and conservation-adjacent Mississauga homes choose a full-season tick program for start-to-finish Lyme disease prevention:</p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="px-4 py-2 text-left">Program</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">What&rsquo;s Included</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { plan: 'Tick season — standalone', cost: '$597 / season + HST', detail: '5 sprays across May–September, timed to nymph and adult activity.' },
                  { plan: 'Tick season — bundled', cost: '$497 / season + HST', detail: 'Same 5 sprays added to any BuzzSkito mosquito plan — save $100.' },
                  { plan: 'Single treatment', cost: 'From $99 + HST', detail: 'One-time barrier spray; great before a party or after finding a tick.' },
                ].map(({ plan, cost, detail }) => (
                  <tr key={plan} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-semibold text-brand-800">{plan}</td>
                    <td className="px-4 py-2 font-extrabold text-amber-700">{cost}</td>
                    <td className="px-4 py-2 text-gray-600">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">Prices scale with lot size (10,000–100,000 sq ft). No contracts. Every visit is backed by the BuzzSkito Bite-Free Guarantee — if ticks return within the protection window, we re-treat free.</p>

          {/* Free inspection CTA */}
          <div className="not-prose my-8 rounded-2xl bg-brand-900 text-white p-6 sm:p-8 text-center">
            <h3 className="text-xl font-extrabold mb-2">Book a Free Mississauga Tick Inspection</h3>
            <p className="text-brand-100 text-sm mb-5 max-w-2xl mx-auto">A licensed BuzzSkito technician walks your yard, pinpoints the Credit River exposure and lawn-to-woods zones ticks hide in, and gives you a no-obligation quote. Backed by 150+ five-star reviews and zero negative reviews.</p>
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3 rounded-full text-sm transition-colors">Get My Free Inspection</Link>
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
          <p>The seasonal program is five treatments, roughly one a month from May through September. Each visit holds for up to 30 days, so the barrier never lapses across the months blacklegged ticks are active here:</p>
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
                  { t: 'Treatment 1', timing: 'May', target: 'Nymph emergence — get ahead of the peak Lyme risk window' },
                  { t: 'Treatment 2', timing: 'June', target: 'Nymph peak — tiny, hard to detect, responsible for most transmissions' },
                  { t: 'Treatment 3', timing: 'July', target: 'Late nymph activity, plus ticks carried in from the Credit River and Rattray Marsh' },
                  { t: 'Treatment 4', timing: 'August', target: 'Barrier renewed as the first new adults begin emerging' },
                  { t: 'Treatment 5', timing: 'September', target: 'Adult ticks ahead of the autumn surge — active into November in mild years' },
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


          <h2>Compare Mississauga Pest Control Options</h2>
          <p>Mississauga has confirmed blacklegged tick exposure — see our specialist pest control guide: <Link href="/pest-control-mississauga" className="text-brand-700 hover:underline font-semibold">Pest Control in Mississauga</Link> for why a mosquito and tick specialist delivers better Lyme disease prevention than a general pest company. See our full mosquito programme for the same property: <Link href="/mississauga-mosquito-control" className="text-brand-700 hover:underline font-semibold">Mosquito Control in Mississauga</Link>.</p>
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
          <p className="kicker mb-3 text-center">Customer Reviews</p>
          <h2 className="h2-display text-brand-950 mb-2 text-center">What Mississauga Homeowners Say About Our Tick Control</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Priya R.', location: 'Meadowvale', text: 'The technician explained exactly what product they were using and why it\'s safe for our dog. Treated the garden edges and fence line where ticks were coming from. Couldn\'t be happier with the results.' },
              { author: 'Amanda K.', location: 'Streetsville', text: 'We live near the Credit River and found a tick on our daughter after playing in the yard. Called BuzzSkito and they were out within days. No more ticks since the treatment.' },
              { author: 'Jason T.', location: 'Lorne Park', text: 'Our property backs onto wooded ravine and tick prevention is a must for us. BuzzSkito knows exactly where to treat and the results are consistent every season.' },
              { author: 'Katharine M.', location: 'Mississauga', text: 'Fantastic experience with the mosquito control last summer! We\u2019re re-signing for this season once again \u2014 we can finally enjoy our yard again in Mississauga.' },
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
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 150+ reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Spray in {CITY}</h2>
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
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protect your family from Lyme disease. No contracts, guaranteed results." variant="dark" />
    </>
  )
}
