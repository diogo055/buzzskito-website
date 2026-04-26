import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Control Toronto · From $99 | Lyme Defence',
  description:
    'Toronto tick spray · 126 five-star reviews. Targets blacklegged ticks in ravine yards — High Park, Don Valley, Rosedale. Free re-spray. (289) 216-5030.',
  canonical: '/toronto-tick-spray',
})

const CITY = 'Toronto'
const SLUG = '/toronto-tick-spray'
const NEIGHBOURHOODS = ['High Park','East York','Don Mills','The Beaches','Scarborough','North York','Etobicoke','Leslieville','Rosedale','Forest Hill','Leaside','Willowdale','Lawrence Park']

const FAQS = [
  {
    question: 'How much does tick spray cost in Toronto?',
    answer: 'Tick spray in Toronto starts from $99 per application. Properties near the Don Valley, Humber River, or High Park typically benefit from both spring and fall applications. No contracts. Call (289) 216-5030 for a free Toronto tick spray quote.',
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
    answer: "Blacklegged tick nymphs — the life stage responsible for most Lyme disease transmissions in Ontario — are most active from May through July. Adult ticks are active from October through November and again in early spring (March–April) when temperatures rise above 4°C. Nymphs are the most dangerous stage because they're tiny (poppy-seed sized) and often go undetected during tick checks. A May or June treatment specifically targets this peak nymph window.",
  },
  {
    question: 'How many tick treatments does my Toronto property need?',
    answer: "Two treatments per season cover the full active window: one in late May or early June to target nymph peak activity, and one in August or September for adult tick emergence. Properties in Don Valley, Humber Valley, or Scarborough ravine zones with higher tick pressure may benefit from a third treatment. Each application provides up to 30 days of residual protection.",
  },
  {
    question: 'Is tick spray safe to use in Toronto near ravines and parks?',
    answer: "Yes. Our Health Canada–approved formula is designed for residential property use. We apply it to your property's vegetation — not to any municipal parkland or ravine. Once the product dries (approximately 30 minutes), it does not leach into nearby waterways or harm wildlife. We maintain buffer zones around any sensitive natural areas at your property edge.",
  },
  {
    question: 'Is tick spray safe for children and pets?',
    answer: "Yes. Our Health Canada–approved formula is safe for children and pets once dry — approximately 30 minutes after application. During application and while the product is wet, children and pets should stay indoors or away from the yard. Once dry, it does not rub off on skin or clothing and does not off-gas. We observe buffer zones around vegetable gardens and water features on every property we treat.",
  },
  {
    question: 'Is tick spray safe for a yard where kids play?',
    answer: "Absolutely. The 30-minute re-entry rule is the only restriction. After that, children can play on the grass, run through the yard, and use the outdoor space normally. The product remains on leaf surfaces and vegetation where ticks rest — not on grass blades at ground level where children play. Toronto parents with ravine-adjacent properties especially benefit from tick treatments, as ravine-edge yards carry the highest exposure risk for children playing outdoors.",
  },
  {
    question: 'Does BuzzSkito also provide mosquito control in Toronto?',
    answer: "Yes. Toronto's Don Valley, Humber River, and extensive ravine system also create significant mosquito pressure each season. Many Toronto homeowners bundle mosquito and tick treatments for complete yard protection. See our Toronto mosquito control service for details, or ask about seasonal bundle pricing when you call.",
  },
]

export default function TorontoTickSprayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick', city: 'Toronto' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/toronto-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Ticks in Toronto aren't just a nuisance — they're a real health risk. Blacklegged ticks carrying Lyme disease are established in Toronto's ravine system and parks. BuzzSkito provides effective professional tick spray for Toronto homeowners.
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
              { step: '1', title: 'Property Tick Assessment', desc: 'We identify tick habitat zones — ravine edges, lawn-to-woods transitions, leaf litter, woodpiles, and garden bed borders specific to your Toronto property.' },
              { step: '2', title: 'Targeted Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to the 1-3 metre zones where ticks concentrate — precision treatment, not broadcast spraying.' },
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
          <h2>Ticks in Toronto: The Real Risk</h2>
          <p>Toronto Public Health conducts annual tick surveillance and has confirmed established blacklegged tick populations in High Park, the Don Valley, and other ravine-adjacent areas. Lyme disease is a reportable illness in Ontario, and confirmed case numbers have increased steadily as tick populations expand across Southern Ontario.</p>
          <p>The key insight for Toronto homeowners: ticks don't need a forest. They're found at the edge of any lawn that backs onto naturalized green space — including the thin strip of vegetation between a backyard fence and a ravine trail. If your property has any wooded edge, ravine view, or backs onto a park, annual tick treatment is a reasonable precaution.</p>

          <h2>Toronto Tick Season: When Is the Risk Highest?</h2>
          <p>Ticks don't disappear in winter — they go dormant and become active again whenever temperatures rise above 4°C. In Toronto's climate, this creates two active windows you need to protect against:</p>
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
          <p>The May–July nymph window is the most dangerous period for Lyme disease transmission in Ontario. Nymphs are the size of a poppy seed — often found and removed only after they've been attached long enough to transmit Lyme disease. A late May treatment specifically targets this peak window before nymph activity reaches its height.</p>

          <h2>Is Tick Spray Safe for Children and Pets?</h2>
          <p>This is the most common question we get from Toronto parents — and the answer is yes, with one simple rule: stay off the treated area for 30 minutes while the product dries.</p>
          <p>The Health Canada–approved formula we use is a synthetic pyrethroid — a class of insecticides derived from the chrysanthemum plant. It's applied to vegetation (leaves, shrubs, fence lines) where ticks rest. Once dry, it does not rub off on skin or clothing and does not off-gas. Children playing on grass and pets running through the yard after the 30-minute drying period are not exposed to meaningful residue.</p>
          <p>At BuzzSkito, we also observe buffer zones around vegetable gardens and avoid direct application to any water features, bird baths, or aquatic areas on your property. Our technician reviews these specifics before every treatment visit.</p>
          <p>For full details, see our <Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">guide to mosquito and tick spray safety for kids and pets</Link>.</p>

          <h2>Toronto Tick Treatment Schedule</h2>
          <p>Two targeted treatments cover the critical active windows for blacklegged ticks in Toronto:</p>
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
                  { t: 'Treatment 1', timing: 'Late May – early June', target: 'Nymph peak — highest Lyme risk window in Ontario' },
                  { t: 'Treatment 2', timing: 'August – early September', target: 'Adult tick emergence for fall active period' },
                  { t: 'Treatment 3 (optional)', timing: 'Mid-July', target: 'High-pressure properties: ravine edge, Don/Humber zone' },
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
          <p>Each treatment provides up to 30 days of residual protection. Many Toronto homeowners bundle tick and mosquito treatments — the same visit covers both, since ticks and mosquitoes rest on the same vegetation surfaces. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control service</Link> for bundle pricing details.</p>

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
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

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
                  { type: 'Standard lot (under 6,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Toronto semi, townhome, or detached' },
                  { type: 'Mid-size lot (6,000–10,000 sq ft)', price: 'Custom quote', coverage: 'Ravine-backing, Rosedale, Forest Hill' },
                  { type: 'Large / estate property (10,000+ sq ft)', price: 'Custom quote', coverage: 'Bridle Path, Lawrence Park, Hoggs Hollow' },
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
            <li><strong>Store-bought repellents protect people, not yards.</strong> DEET applied to clothing protects during a walk. Professional yard spray creates a treated zone that kills ticks before they reach your family or pets.</li>
            <li><strong>Tick tubes target one pathway, not the whole problem.</strong> Permethrin-treated cotton tubes work via mice — useful as a supplement but don&apos;t address ticks already on your property or arriving via deer.</li>
            <li><strong>Precision targeting is what makes it work.</strong> Ticks live in specific micro-habitats — the lawn-to-ravine transition, leaf litter, garden edges. Professional treatment targets these zones. Consumer products miss them.</li>
            <li><strong>Toronto&apos;s ravine system is beyond your control.</strong> The Don Valley, Humber River, and Highland Creek will produce ticks every year. A treated barrier on your property is the only reliable residential defence.</li>
          </ul>

          <h2>What to Expect on Tick Treatment Day</h2>
          <ol>
            <li><strong>SMS notification before arrival</strong> — you don&apos;t need to be home.</li>
            <li><strong>Property tick assessment</strong> — your technician identifies ravine edges, transition zones, and high-risk perimeters.</li>
            <li><strong>Targeted barrier application</strong> — precision spray to tick habitat: lawn-to-woods edges, garden borders, fence lines, woodpiles, under decks. 20–30 minutes.</li>
            <li><strong>30-minute dry time</strong> — then fully safe for kids and pets.</li>
            <li><strong>Email confirmation</strong> — treatment log with areas treated and next visit date.</li>
          </ol>

          <h2>Also Providing Mosquito Control in Toronto</h2>
          <p>Bundle tick and mosquito control for complete yard protection. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
            <li><Link href="/blog/tick-bite-symptoms-what-to-do-ontario" className="text-brand-700 hover:underline">Tick Bite Symptoms &amp; What to Do in Ontario</Link></li>
            <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">What Ticks Look Like in Ontario</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What Toronto Homeowners Say About Our Tick Control</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Linda C.', location: 'Rosedale', text: 'Our property backs onto the Don Valley ravine and we found ticks on our dog multiple times. After BuzzSkito treated the perimeter, problem solved. The technician was very knowledgeable about ravine-specific tick zones.' },
              { author: 'Chris W.', location: 'The Beaches', text: 'With young kids playing near the ravine behind our house, tick prevention is non-negotiable. BuzzSkito handles it professionally and the SMS alerts before and after service are a great touch.' },
              { author: 'Mike T.', location: 'Etobicoke', text: 'Living near the Humber Valley means ticks are part of the landscape. BuzzSkito treated our fence line and garden edges — exactly where ticks were coming from. No more finding them on our clothes after gardening.' },
              { author: 'Sarah M.', location: 'Leaside', text: 'We bundle mosquito and tick treatments and the convenience is fantastic. One visit covers both. The technician explained exactly why the lawn edge and leaf litter areas are where ticks actually live.' },
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

      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protect your family from Lyme disease in Toronto. No contracts." variant="dark" />
    </>
  )
}
