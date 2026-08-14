import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Brampton Tick Control 2026 · From $99 · 150+ Five-Star Reviews',
  description:
    'Brampton tick spray · 150+ five-star reviews. 5 sprays per season, 30-day protection. Castlemore, Heart Lake, Mount Pleasant, Bramalea. (289) 216-5030.',
  canonical: '/brampton-tick-spray',
})

const CITY = 'Brampton'
const SLUG = '/brampton-tick-spray'
const NEIGHBOURHOODS = ["Mount Pleasant","Gore Meadows","Castlemore","Springdale","Bramalea","Creditview","Fletcher's Meadow","Heart Lake","Sandringham","Credit Valley"]

const FAQS = [
  {
    question: 'How much does tick spray cost in Brampton?',
    answer: 'Tick spray in Brampton starts from $99 per application. Properties near Heart Lake Conservation Area, Humber River tributaries, or any wooded ravine are best covered by the full seasonal program — five treatments spaced roughly monthly from May through September, because each application holds up to 30 days of residual and monthly spacing is what removes the gap. The season program is $597 standalone, or $497 when added to a mosquito plan. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Are ticks a real problem in Brampton?',
    answer: "Yes. Brampton's ravines, creeks, and conservation lands are confirmed blacklegged tick habitat. Heart Lake Conservation Area, the Etobicoke Creek valley, and the Humber River tributaries running through Castlemore and Credit Valley support established tick populations. Properties adjacent to these natural corridors — particularly those with wooded edges or backing onto green space — face meaningful annual tick exposure risk.",
  },
  {
    question: 'Which Brampton neighbourhoods have the highest tick risk?',
    answer: "Heart Lake and Castlemore face the highest exposure due to proximity to Heart Lake Conservation Area. Credit Valley and Springdale properties that back onto Etobicoke Creek also have elevated risk. Gore Meadows and northern Brampton properties near Humber River tributaries should prioritize annual tick treatment.",
  },
  {
    question: 'When should Brampton homeowners schedule tick treatment?',
    answer: "Start in May and keep treating roughly monthly through September — five treatments across the season. The May, June, and July applications cover peak blacklegged nymph activity; nymphs drive most Lyme transmission because they're poppy-seed sized and easily missed during tick checks. The August and September applications cover adults, which re-emerge and stay active through the autumn. Monthly spacing matters because each application leaves up to 30 days of residual, so a spring-and-fall pair would leave a multi-month hole straight through peak nymph season — precisely the wrong time to be uncovered. Deer, mice, and birds moving off Heart Lake Conservation Area and the ravine corridors keep reintroducing ticks, so the barrier has to be renewed rather than applied once or twice.",
  },
  {
    question: 'How does BuzzSkito treat for ticks in Brampton?',
    answer: "We apply a residual barrier spray to the specific micro-habitats where ticks concentrate on your property: the 1–3 metre transition zone between your lawn and any natural vegetation, garden bed edges, leaf litter areas, woodpiles, fence lines, and under decks. Ticks are not randomly distributed — they aggregate in these specific zones, so targeted treatment is far more effective than broadcast spraying.",
  },
  {
    question: 'Is tick spray safe for my kids and pets in Brampton?',
    answer: "Yes. Our Health Canada–approved formula is safe for children and pets once dry, which takes approximately 30 minutes after application. We recommend keeping people and pets off treated areas for that initial drying period. After that, your family can use the yard as normal with full protection active.",
  },
  {
    question: 'Does BuzzSkito also provide mosquito control in Brampton?',
    answer: "Yes. Brampton's stormwater ponds, Etobicoke Creek, and numerous green spaces also create significant mosquito pressure each season. Many Brampton homeowners bundle both mosquito and tick treatments for complete yard protection. See our Brampton mosquito control service for details.",
  },
  {
    question: 'What is Lyme disease and how real is the risk in Brampton?',
    answer: "Lyme disease is a bacterial infection transmitted by blacklegged tick bites. Ontario has seen steadily increasing case numbers each year as tick populations expand. Heart Lake Conservation Area and the Humber River corridor in Brampton are both documented tick surveillance areas. Early Lyme symptoms include a bulls-eye rash, fever, fatigue, and joint pain — but up to 30% of cases present without the classic rash, making prevention the safest approach.",
  },
]

export default function BramptonTickSprayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario.`, slug: SLUG, city: CITY, price: null })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick', city: 'Brampton' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/brampton-tick-spray', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tick Control', href: '/tick-control' }, { label: CITY }]}
        title={<>Brampton Tick Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>Brampton's ravines, conservation areas, and greenbelt corridors harbour blacklegged ticks. Protect your family from Lyme disease with BuzzSkito's professional 30-day tick barrier spray.</>}
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
      <QuickAnswer question="What is the best tick control company in Brampton?">
        <p>
          <strong>BuzzSkito provides specialist tick barrier spray across all Brampton neighbourhoods — Mount Pleasant, Gore Meadows, Castlemore, Springdale, Bramalea, Creditview, Fletcher&apos;s Meadow, Heart Lake, Snelgrove, Sandalwood, Bram West.</strong> Treatments use Health Canada-approved formulations applied to the specific 1–3 metre zones where blacklegged ticks concentrate — lawn-to-woods transitions, leaf litter, garden bed edges, and fence-line vegetation. Single treatments start at <strong>$99</strong>; tick add-on bundled with mosquito plan from $497. With <strong>150+ five-star Google reviews</strong>, no contracts, a 30-minute re-entry window, and the <strong>BuzzSkito Bite-Free Guarantee</strong>, Brampton families get reliable Lyme disease prevention for ravine, conservation-area, and wooded-edge properties. Call (289) 216-5030.
        </p>
      </QuickAnswer>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Brampton Tick Control Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service area', "All Brampton neighbourhoods (Mount Pleasant, Gore Meadows, Castlemore, Springdale, Bramalea, Creditview, Fletcher's Meadow, Heart Lake, Snelgrove, Sandalwood, Bram West)"],
                  ['Specialization', 'Blacklegged tick (Ixodes scapularis) and American dog tick barrier spray'],
                  ['Pricing', 'From $99 per treatment · seasonal tick program $597 standalone or tick add-on bundle available on quote'],
                  ['Treatment season', 'May through September, roughly monthly (peak: late April–June nymph activity, then again Sep–Oct adult activity)'],
                  ['Protection per visit', 'Up to 30 days residual on tick habitat zones'],
                  ['Re-entry time', '30 minutes after spray dries (kid and pet safe)'],
                  ['Recommended schedule', '5 treatments per season for ravine- or conservation-area-adjacent properties'],
                  ['Highest tick zones', 'Heart Lake Conservation Area · Etobicoke Creek · Professor’s Lake · ravine corridors'],
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
              { step: '1', title: 'Property Tick Assessment', desc: 'We identify tick habitat zones on your Brampton property — lawn-to-woods transition areas, leaf litter, woodpiles, garden bed edges, and fence lines where ticks concentrate.' },
              { step: '2', title: 'Targeted Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to the specific 1-3 metre zones where ticks live — not broadcast spraying, but precision treatment where it matters.' },
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
          <h2>Tick Risk in Brampton</h2>
          <p>Brampton's rapid residential expansion has pushed subdivisions right up against conservation lands, ravines, and creek corridors — all of which are prime blacklegged tick habitat. <strong>Heart Lake Conservation Area</strong> is the most significant tick-risk site in the city, with documented surveillance populations and deer movement patterns that distribute ticks throughout adjacent neighbourhoods. The <strong>Etobicoke Creek valley</strong> and Humber River tributaries running through Castlemore, Credit Valley, and northern Brampton create additional corridors where tick exposure is consistently elevated.</p>
          <p>The key risk period in Brampton is May through July for tick nymphs (the most dangerous stage — tiny, hard to see, and responsible for the majority of Lyme disease transmissions) and October through November for adult ticks. A professionally treated yard dramatically reduces the chance of a tick reaching your family.</p>

          <h2>High-Risk Brampton Areas</h2>
          <ul>
            <li><strong>Heart Lake area</strong> — directly adjacent to Heart Lake Conservation Area; highest confirmed risk zone in Brampton</li>
            <li><strong>Castlemore / Countryside Drive corridor</strong> — near Humber River tributaries and undeveloped greenbelt</li>
            <li><strong>Credit Valley</strong> — backs onto Etobicoke Creek system with consistent deer movement</li>
            <li><strong>Springdale</strong> — open space corridors and conservation areas along northern Brampton</li>
            <li><strong>Gore Meadows / Claireville</strong> — Claireville Conservation Area borders generate real tick exposure</li>
          </ul>

          <h2>Brampton Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>Types of Ticks Found in Brampton</h2>
          <p>Two tick species are commonly encountered in Brampton backyards:</p>
          <ul>
            <li><strong>Blacklegged tick (deer tick)</strong> — The primary vector for Lyme disease in Ontario. Adults are reddish-brown with black legs, approximately 3mm (unfed). Nymphs are poppy-seed-sized and responsible for most Lyme disease transmissions because they&apos;re nearly invisible during tick checks. Found along Heart Lake Conservation Area, Etobicoke Creek, and Humber River corridors.</li>
            <li><strong>American dog tick</strong> — Larger and more commonly noticed, but does not carry Lyme disease. Brown with white markings. Found in similar habitats. While not a Lyme vector, dog ticks can transmit Rocky Mountain spotted fever in rare cases.</li>
          </ul>

          <h2>Tick Control Treatment Schedule for Brampton</h2>
          <p>The seasonal program is five treatments, spaced roughly monthly from May through September. Each application leaves up to 30 days of residual, so monthly spacing is what removes the gap between visits.</p>
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
                  { t: 'Treatment 1', timing: 'May', target: 'First nymphs of the season — the most dangerous life stage (poppy-seed sized, easily missed during tick checks)' },
                  { t: 'Treatment 2', timing: 'June', target: 'Peak nymph activity; renews the barrier as the May residual runs out' },
                  { t: 'Treatment 3', timing: 'July', target: 'Late nymph season, plus ticks reintroduced by deer and mice moving off Heart Lake Conservation Area and the ravine corridors' },
                  { t: 'Treatment 4', timing: 'August', target: 'Adult ticks becoming active again as nymph numbers fall away' },
                  { t: 'Treatment 5', timing: 'September', target: 'Adults heading into autumn — they stay active into November in mild years' },
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

          <h2>Tick Spray Pricing in Brampton</h2>
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
                  { type: 'Standard lot (under 6,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Brampton detached or semi' },
                  { type: 'Mid-size lot (6,000–10,000 sq ft)', price: 'Custom quote', coverage: 'Conservation-adjacent, Castlemore properties' },
                  { type: 'Large / rural property (10,000+ sq ft)', price: 'Custom quote', coverage: 'Acreage, greenbelt-adjacent, Countryside Drive area' },
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
          <p>No contracts and no cancellation fees. Call <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a> for a free quote.</p>

          <h2>Professional Tick Spray vs. DIY in Brampton</h2>
          <ul>
            <li><strong>Store-bought tick repellents protect people, not yards.</strong> DEET and permethrin sprays applied to clothing protect the wearer during a walk. Professional yard spray creates a treated perimeter that kills ticks before they reach your family.</li>
            <li><strong>Tick tubes target mice, not the yard.</strong> Permethrin-treated cotton tubes work on the rodent pathway. They&apos;re useful as a supplement but don&apos;t address ticks already on your property or arriving via deer movement.</li>
            <li><strong>Precision matters more than product.</strong> Ticks live in specific micro-habitats — the lawn-to-woods transition zone, leaf litter, garden bed edges. Professional treatment targets these zones directly. Consumer foggers miss them entirely.</li>
            <li><strong>Brampton&apos;s tick sources are beyond your property.</strong> Heart Lake Conservation Area and Etobicoke Creek will produce ticks regardless of what you do on your lot. A treated barrier on your property is the only reliable residential defence.</li>
          </ul>

          <h2>What to Expect on Tick Treatment Day</h2>
          <ol>
            <li><strong>SMS notification before arrival</strong> — you don&apos;t need to be home.</li>
            <li><strong>Property tick assessment</strong> — your technician identifies transition zones, leaf litter areas, and high-risk perimeters.</li>
            <li><strong>Targeted barrier application</strong> — precision spray to tick habitat zones: lawn edges, garden borders, fence lines, woodpiles, under decks. 20–30 minutes for a typical lot.</li>
            <li><strong>30-minute dry time</strong> — then fully safe for kids and pets.</li>
            <li><strong>Email confirmation</strong> — treatment log with areas treated and next visit date.</li>
          </ol>

          <h2>Also Providing Mosquito Control in Brampton</h2>
          <p>Bundle tick and mosquito control for complete yard protection. See our <Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline">Brampton mosquito control service</Link>.</p>


          <h2>Compare Brampton Pest Control Options</h2>
          <p>Brampton has confirmed blacklegged tick exposure — see our specialist pest control guide: <Link href="/pest-control-brampton" className="text-brand-700 hover:underline font-semibold">Pest Control in Brampton</Link> for why a mosquito and tick specialist delivers better Lyme disease prevention than a general pest company. See our full mosquito programme for the same property: <Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline font-semibold">Mosquito Control in Brampton</Link>.</p>
          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/tick-season-ontario-when-are-ticks-active" className="text-brand-700 hover:underline">When Are Ticks Active in Ontario?</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
            <li><Link href="/blog/tick-bite-symptoms-what-to-do-ontario" className="text-brand-700 hover:underline">Tick Bite Symptoms &amp; What to Do in Ontario</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Customer Reviews</p>
          <h2 className="h2-display text-brand-950 mb-2 text-center">What Brampton Homeowners Say About Our Tick Control</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'James K.', location: 'Heart Lake', text: 'We had a tick problem near our garden border. BuzzSkito came out quickly, treated the whole yard, and gave us a detailed service log. Great experience and the kids can play outside again.' },
              { author: 'Raj P.', location: 'Castlemore', text: 'Our property backs onto conservation land and we found ticks on our dog twice last spring. After BuzzSkito treated the perimeter the problem stopped completely. Signed up for both treatments.' },
              { author: 'Michelle T.', location: 'Credit Valley', text: 'The technician explained exactly where ticks live on our property and why the garden edges and fence line were the priority zones. Very knowledgeable and the treatment worked immediately.' },
              { author: 'Kevin M.', location: 'Gore Meadows', text: 'Living near Claireville Conservation Area means ticks are a real concern. BuzzSkito is the first service that actually gave us peace of mind. Professional, on time, great communication.' },
            ].map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Brampton</span></p>
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

      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protect your Brampton family from Lyme disease this season. No contracts." variant="dark" />
    </>
  )
}
