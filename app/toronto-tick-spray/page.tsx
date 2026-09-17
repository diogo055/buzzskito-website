import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Toronto Tick Control 2026 · From $99 · Licensed Operator',
  description:
    'Toronto tick spray · 150+ five-star reviews. Targets blacklegged ticks in ravine yards — High Park, Don Valley, Rosedale. Rain-back guarantee. (289) 216-5030.',
  canonical: '/toronto-tick-spray',
})

const CITY = 'Toronto'
const SLUG = '/toronto-tick-spray'
const NEIGHBOURHOODS = ['High Park','East York','Don Mills','The Beaches','Scarborough','North York','Etobicoke','Leslieville','Rosedale','Forest Hill','Leaside','Willowdale','Lawrence Park']

// Neighbourhoods with their own tick page link to it, so this city page passes visitors and authority down.
const NEIGHBOURHOOD_LINKS: Record<string, string> = {
  'North York': '/north-york-tick-spray',
  Etobicoke: '/etobicoke-tick-spray',
  Scarborough: '/scarborough-tick-spray',
}

const FAQS = [
  {
    question: 'How much does tick spray cost in Toronto?',
    answer: 'Tick spray in Toronto starts from $99 per application. A full season is $597 standalone — five treatments spread across May through September — or $497 when added to any BuzzSkito mosquito plan, a $100 saving. Properties near the Don Valley, Humber River, or High Park benefit most from the full five-visit season, because ravine wildlife keeps carrying ticks back onto the property all summer. No contracts. Call (289) 216-5030 for a free Toronto tick spray quote.',
  },
  {
    question: 'Are there really ticks in Toronto?',
    answer: "Yes. Blacklegged ticks are established in Toronto's ravine system, High Park, and many other green spaces. Toronto Public Health conducts annual tick surveillance and has confirmed positive blacklegged tick populations in High Park, the Don Valley, Humber Valley, and Scarborough's Highland Creek and Rouge River areas. Lyme disease is a reportable illness in Ontario and confirmed Toronto cases have increased each year.",
  },
  {
    question: 'Which Toronto neighbourhoods have the highest tick risk?',
    answer: "Properties adjacent to Toronto's ravine system carry the highest tick exposure risk. This includes areas near the Don Valley (Leaside, East York, Don Mills), Humber Valley (Etobicoke, Islington), High Park (Roncesvalles, Parkdale), Highland Creek and Scarborough Bluffs (Cliffside, Guildwood), and any neighbourhood backing onto wooded or naturalized green space. Even a thin strip of ravine vegetation between a backyard fence and a trail can host tick populations.",
  },
  {
    question: 'What tick species are found in Toronto?',
    answer: "The blacklegged tick (Ixodes scapularis) is the species of primary concern in Toronto — it's the only species that transmits Lyme disease, and it's the species Toronto Public Health monitors. American dog ticks are also present in Toronto's parks and green spaces but rarely transmit Lyme disease to humans.",
  },
  {
    question: 'When is tick season in Toronto?',
    answer: "Blacklegged tick nymphs — the life stage responsible for most Lyme disease transmissions in Ontario — are most active from May through July. Adult ticks are active from October through November and again in early spring (March–April) when temperatures rise above 4°C. Nymphs are the most dangerous stage because they're tiny (poppy-seed sized) and often go undetected during tick checks. Our seasonal program treats monthly from May through September, so the peak nymph window is covered from start to finish rather than sampled once.",
  },
  {
    question: 'How many tick treatments does my Toronto property need?',
    answer: "Five treatments per season — roughly one a month from May through September. The residual on treated vegetation wears down over a few weeks, so monthly visits keep the treated zones renewed instead of leaving a multi-month gap through peak nymph season in May–July. The later visits continue treatments into the adult tick surge, which runs through autumn and into November in mild years. Public Health Ontario notes nymphs are poppy-seed sized and easy to miss, so do a tick check after time outdoors. Repeat applications matter most in Don Valley, Humber Valley, and Scarborough ravine zones, where deer, mice, and birds continually reintroduce ticks from the adjacent woodland. A full season is $597 standalone, or $497 added to any mosquito plan, plus HST; single treatments start from $99 on a standard lot.",
  },
  {
    question: 'How is tick spray applied in Toronto near ravines and parks?',
    answer: "Our licensed technician applies the product according to its label directions, and only to your property's own vegetation — never to municipal parkland or ravine land. We follow the label's directions around water and maintain buffer zones around any sensitive natural areas at your property edge.",
  },
  {
    question: 'What precautions apply for children and pets during a tick treatment?',
    answer: "Keep children and pets indoors or away from the yard during application and until the spray has dried, as the product label directs. The product is applied to the vegetation, leaf litter and lawn edges where ticks rest, rather than broadcast across open lawn. We observe buffer zones around vegetable gardens and water features on every property we treat, and we can adjust application zones if you have specific concerns.",
  },
  {
    question: 'How is tick spray applied in a yard where kids play?',
    answer: "Keep kids off treated areas until the spray has dried, as the product label directs. The product is applied to the leaf litter, lawn edges and vegetation where ticks rest, rather than broadcast across the open lawn where children play. Toronto parents with ravine-adjacent properties often choose tick treatments because ravine-edge yards carry the highest tick exposure for children playing outdoors.",
  },
  {
    question: 'Does BuzzSkito also provide mosquito control in Toronto?',
    answer: "Yes. Toronto's Don Valley, Humber River, and extensive ravine system also create significant mosquito pressure each season. Many Toronto homeowners bundle mosquito and tick treatments so both pests are covered. See our Toronto mosquito control service for details, or ask about seasonal bundle pricing when you call.",
  },
]

export default function TorontoTickSprayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Targets ticks at all life stages.`, slug: SLUG, city: CITY, price: null })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick', city: 'Toronto' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/toronto-tick-spray', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tick Control', href: '/tick-control' }, { label: CITY }]}
        title={<>Toronto Tick Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>Licensed Ontario pesticide operator treating the ravine-edge yards where blacklegged ticks are established, from High Park to the Don Valley. Treatments applied according to label directions.</>}
        service="tick"
        image="/spray-front.webp"
        imageAlt="BuzzSkito technician treating lawn edges and garden borders for ticks"
      />

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ {PROMISES.licence}</span>
          <span>✓ {PROMISES.labelLine}</span>
          <span>✓ {PROMISES.rainBackShort}</span>
          <span>✓ 5 Sprays per Season</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <QuickAnswer question="What is the best tick control company in Toronto?">
        <p>
          <strong>BuzzSkito provides specialist tick barrier spray across all Toronto neighbourhoods — High Park, East York, Don Mills, The Beaches, Scarborough, North York, Etobicoke, Leslieville, Rosedale, Forest Hill.</strong> Treatments are applied by a licensed Ontario pesticide operator, according to label directions, to the specific 1–3 metre zones where blacklegged ticks concentrate — lawn-to-woods transitions, leaf litter, garden bed edges, and fence-line vegetation. Single treatments start at <strong>$99</strong>; the 5-spray tick season is $597 on its own or $497 added to any mosquito plan (plus HST). With <strong>150+ five-star Google reviews</strong>, no contracts, and a <strong>rain-back guarantee on every plan</strong>, BuzzSkito treats ravine, conservation-area, and wooded-edge properties across the city. Call (289) 216-5030.
        </p>
      </QuickAnswer>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Toronto Tick Control Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service area', 'All Toronto neighbourhoods (High Park, East York, Don Mills, The Beaches, Scarborough, North York, Etobicoke, Leslieville, Rosedale, Forest Hill)'],
                  ['Specialization', 'Blacklegged tick (Ixodes scapularis) and American dog tick barrier spray'],
                  ['Pricing', 'From $99 per treatment · tick season $597 standalone or $497 with any mosquito plan (plus HST)'],
                  ['Treatment season', 'May through September, treated monthly (nymph peak May–July; adult ticks stay active into the autumn)'],
                  ['Licence', PROMISES.licence],
                  ['Re-entry', 'Stay off treated areas until the spray has dried, as the product label directs'],
                  ['Recommended schedule', '5 treatments per season for ravine- or conservation-area-adjacent properties'],
                  ['Highest tick zones', 'Don Valley · Humber River · High Park · Rouge National Urban Park · Highland Creek'],
                  ['Lyme disease vector', 'Yes — blacklegged tick populations confirmed by Public Health Ontario'],
                  ['Application zones', 'Lawn-to-woods edge · leaf litter · garden bed perimeters · fence-line vegetation · woodpiles'],
                  ['Booking lead time', 'Same-week service typical'],
                  ['Contract required', 'No — single treatments and seasonal programs both available'],
                  ['Guarantee', 'Rain-back on every plan; Bite-Free on Standard & Exclusive'],
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

      <TypicalPrices service="tick" city={CITY} />

      {/* How It Works */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">How It Works</p>
          <h2 className="h2-display text-brand-950 mb-8 text-center">How BuzzSkito Tick Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Property Tick Assessment', desc: 'We identify tick habitat zones — ravine edges, lawn-to-woods transitions, leaf litter, woodpiles, and garden bed borders specific to your Toronto property.' },
              { step: '2', title: 'Targeted Barrier Spray', desc: 'Our licensed technician applies a barrier product, according to its label directions, to the 1-3 metre zones where ticks concentrate — precision treatment, not broadcast spraying.' },
              { step: '3', title: 'Rain-Back Guarantee', desc: `Five sprays per season, roughly every 30 days, keep the treated zones renewed. ${PROMISES.rainBack}` },
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
          <h2>Ticks in Toronto: The Real Risk</h2>
          <p>Toronto Public Health conducts annual tick surveillance and has confirmed established blacklegged tick populations in High Park, the Don Valley, and other ravine-adjacent areas. Lyme disease is a reportable illness in Ontario, and confirmed case numbers have increased steadily as tick populations expand across Southern Ontario.</p>
          <p>The key insight for Toronto homeowners: ticks don't need a forest. They're found at the edge of any lawn that backs onto naturalized green space — including the thin strip of vegetation between a backyard fence and a ravine trail. If your property has any wooded edge, ravine view, or backs onto a park, seasonal tick treatment is a reasonable precaution.</p>

          <h2>Toronto Tick Season: When Is the Risk Highest?</h2>
          <p>Ticks don't disappear in winter — they go dormant and become active again whenever temperatures rise above 4°C. In Toronto's climate, that means tick pressure runs from the first spring thaw right through to late autumn — here is how the risk shifts across the season:</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-800 text-white">
                  <th className="px-4 py-2 text-left">Period</th>
                  <th className="px-4 py-2 text-left">Life Stage</th>
                  <th className="px-4 py-2 text-left">Risk Level</th>
                  <th className="px-4 py-2 text-left">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { period: 'March–April', stage: 'Adult ticks', risk: 'Moderate', why: 'First active period after winter dormancy' },
                  { period: 'May–July', stage: 'Nymphs (peak season)', risk: 'Highest', why: 'Nymphs are poppy-seed sized — hard to see, most bites go undetected' },
                  { period: 'August–September', stage: 'Nymphs + new adults', risk: 'High', why: 'Second wave — adults emerging for fall activity' },
                  { period: 'October–November', stage: 'Adult ticks', risk: 'Moderate', why: 'Active until first hard frost; often overlooked' },
                ].map(({ period, stage, risk, why }) => (
                  <tr key={period} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-gray-800">{period}</td>
                    <td className="px-4 py-2 text-gray-700">{stage}</td>
                    <td className={`px-4 py-2 font-semibold ${risk === 'Highest' ? 'text-red-600' : risk === 'High' ? 'text-orange-600' : 'text-amber-600'}`}>{risk}</td>
                    <td className="px-4 py-2 text-gray-600">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The May–July nymph window is the most dangerous period for Lyme disease transmission in Ontario. Nymphs are the size of a poppy seed — often found and removed only after they've been attached long enough to transmit Lyme disease. A late May treatment gets ahead of this window, and the monthly visits that follow keep the treated zones renewed through June and July while nymph activity is at its height.</p>

          <h2>What Should Children and Pets Do During a Tick Treatment?</h2>
          <p>This is the most common question we get from Toronto parents, and the answer starts with one simple rule: keep children and pets off the treated area until the spray has dried, as the product label directs.</p>
          <p>The product we use is a synthetic pyrethroid — a class of insecticides modelled on natural compounds found in chrysanthemum flowers. Our licensed technician applies it according to its label directions, to vegetation (leaves, shrubs, fence lines, leaf litter) where ticks rest, rather than broadcasting it across open lawn where children and pets play.</p>
          <p>At BuzzSkito, we also observe buffer zones around vegetable gardens and avoid direct application to any water features, bird baths, or aquatic areas on your property. Our technician reviews these specifics before every treatment visit.</p>
          <p>For full details, see our <Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">guide to mosquito and tick spray safety for kids and pets</Link>.</p>

          <h2>Toronto Tick Treatment Schedule</h2>
          <p>Our seasonal tick program is five treatments — roughly one a month from May through September. The residual on treated vegetation wears down over a few weeks, so monthly visits keep the treated zones renewed during the months blacklegged ticks are active in Toronto:</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-800 text-white">
                  <th className="px-4 py-2 text-left">Treatment</th>
                  <th className="px-4 py-2 text-left">Timing</th>
                  <th className="px-4 py-2 text-left">Target</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: 'Treatment 1', timing: 'May', target: 'Nymph emergence — first visit ahead of the peak nymph months' },
                  { t: 'Treatment 2', timing: 'June', target: 'Nymph peak — poppy-seed sized, so most bites go undetected' },
                  { t: 'Treatment 3', timing: 'July', target: 'Late nymph activity, plus ticks carried back in from the Don and Humber ravines' },
                  { t: 'Treatment 4', timing: 'August', target: 'Barrier renewed as the first new adults begin emerging' },
                  { t: 'Treatment 5', timing: 'September', target: 'Adult tick activity heading into autumn — into November in mild years' },
                ].map(({ t, timing, target }) => (
                  <tr key={t} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-amber-700">{t}</td>
                    <td className="px-4 py-2 text-gray-800">{timing}</td>
                    <td className="px-4 py-2 text-gray-600">{target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The acaricide residual is temporary — deer, mice, and birds moving in from the ravines reintroduce ticks continuously, which is why the barrier has to be renewed rather than set once. The full five-visit season is $597 standalone, or $497 added to any BuzzSkito mosquito plan, plus HST. Many Toronto homeowners bundle tick and mosquito treatments — both can be done on the same visit, though ticks and mosquitoes are treated in different zones of the yard. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control service</Link> for bundle pricing details.</p>

          <h2>Where Tick Risk Is Highest in Toronto</h2>
          <ul>
            <li><strong>High Park and surroundings</strong> — Roncesvalles, Parkdale, Bloor West Village</li>
            <li><strong>Don Valley corridor</strong> — Leaside, East York, Don Mills, Thorncliffe Park</li>
            <li><strong>Humber Valley</strong> — Etobicoke, Islington, Old Mill area</li>
            <li><strong>Scarborough ravines</strong> — Highland Creek, Guildwood, Rouge River, Cliffside</li>
            <li><strong>Any property backing onto ravine or naturalized green space</strong></li>
          </ul>

          <h2>Toronto Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) =>
              NEIGHBOURHOOD_LINKS[n] ? (
                <Link key={n} href={NEIGHBOURHOOD_LINKS[n]} className="text-sm bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full hover:bg-amber-100 hover:underline underline-offset-2">{n}</Link>
              ) : (
                <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>
              )
            )}
          </div>

          <CityPriceCard city={CITY} service="tick" />

          <h2>Tick Spray Pricing in Toronto</h2>
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
                  { type: 'Standard lot (under 10,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Toronto semi, townhome, or detached' },
                  { type: 'Larger lot (10,000–100,000 sq ft)', price: 'Priced by lot size', coverage: 'Ravine-backing, Rosedale, Forest Hill' },
                  { type: 'Estate property', price: 'Custom quote', coverage: 'Bridle Path, Lawrence Park, Hoggs Hollow' },
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

          <h2>Professional Tick Spray vs. DIY in Toronto</h2>
          <ul>
            <li><strong>Store-bought repellents protect people, not yards.</strong> DEET applied to clothing protects during a walk. Professional yard spray treats the zones where ticks wait for a passing host.</li>
            <li><strong>Tick tubes target one pathway, not the whole problem.</strong> Permethrin-treated cotton tubes work via mice — useful as a supplement but don&apos;t address ticks already on your property or arriving via deer.</li>
            <li><strong>Precision targeting is what makes it work.</strong> Ticks live in specific micro-habitats — the lawn-to-ravine transition, leaf litter, garden edges. Professional treatment targets these zones. Consumer products miss them.</li>
            <li><strong>Toronto&apos;s ravine system is beyond your control.</strong> The Don Valley, Humber River, and Highland Creek will produce ticks every year. A treated barrier on your property is one layer of residential defence, alongside tick checks after time outdoors.</li>
          </ul>

          <h2>What to Expect on Tick Treatment Day</h2>
          <ol>
            <li><strong>Visit window</strong> — {PROMISES.visitWindow} You don&apos;t need to be home.</li>
            <li><strong>Property tick assessment</strong> — your technician identifies ravine edges, transition zones, and high-risk perimeters.</li>
            <li><strong>Targeted barrier application</strong> — precision spray to tick habitat: lawn-to-woods edges, garden borders, fence lines, woodpiles, under decks. 20–30 minutes.</li>
            <li><strong>Dry time</strong> — keep kids and pets off treated areas until the spray has dried, as the product label directs.</li>
            <li><strong>Email confirmation</strong> — treatment log with areas treated and next visit date.</li>
          </ol>

          <h2>Also Providing Mosquito Control in Toronto</h2>
          <p>Bundle tick and mosquito control so both pests are covered. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control service</Link>.</p>


          <h2>Compare Toronto Pest Control Options</h2>
          <p>Toronto has confirmed blacklegged tick exposure — see our specialist pest control guide: <Link href="/pest-control-toronto" className="text-brand-700 hover:underline font-semibold">Pest Control in Toronto</Link> for why a mosquito and tick specialist is a better fit for tick-prone ravine yards than a general pest company. See our full mosquito programme for the same property: <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline font-semibold">Mosquito Control in Toronto</Link>.</p>
          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease and Ticks in Ontario</Link></li>
            <li><Link href="/blog/tick-bite-symptoms-what-to-do-ontario" className="text-brand-700 hover:underline">Tick Bite Symptoms &amp; What to Do in Ontario</Link></li>
            <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">What Ticks Look Like in Ontario</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Customer Reviews</p>
          <h2 className="h2-display text-brand-950 mb-2 text-center">What Toronto Homeowners Say About Our Tick Control</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Linda C.', location: 'Rosedale', text: 'Our property backs onto the Don Valley ravine and we found ticks on our dog multiple times. After BuzzSkito treated the perimeter, problem solved. The technician was very knowledgeable about ravine-specific tick zones.' },
              { author: 'Chris W.', location: 'The Beaches', text: 'With young kids playing near the ravine behind our house, tick prevention is non-negotiable. BuzzSkito handles it professionally and the SMS alerts before and after service are a great touch.' },
              { author: 'Anthony', location: 'Milton', text: 'Highly recommend this company for mosquito control. I got my house in Milton serviced recently and loved the end result!' },
              { author: 'Katharine M.', location: 'Mississauga', text: 'Fantastic experience with the mosquito control last summer! We\u2019re re-signing for this season once again \u2014 we can finally enjoy our yard again in Mississauga.' },
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
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 150+ reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city={CITY} service="tick" location="price_card_faq" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Spray in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
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

      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Licensed tick spray for Toronto ravine-edge yards. No contracts." variant="dark" />
    </>
  )
}
