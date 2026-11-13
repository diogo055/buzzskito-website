import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogCard from '@/components/BlogCard'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import QuoteLink from '@/components/QuoteLink'
import CrewVideo from '@/components/CrewVideo'
import { CREW_CLIPS } from '@/lib/crew-videos'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, CITIES, MOSQUITO_BLOGS, PROMISES } from '@/lib/constants'

// REBUILD NOTE (Nov 8, 2026, owner's OK: "for mosquito control, yes, you can rebuild"): added how a visit works,
// treatment day, how long spraying lasts, kids/pets and the label, pro vs DIY, West Nile, three reviews and 8 FAQs.
// Every fact comes from an existing page: /how-it-works, /mosquito-spray-safety (label wording only: no "safe"
// claims, no minute counts), /mosquito-control-cost, the spray-duration, DIY-vs-pro and worth-the-cost posts,
// /west-nile-virus-ontario-tracker (figures with the sources it cites) and the city pages (reviews: exact words,
// name and place as shown there). Say "150+ five-star reviews", never "Google reviews" (139 are on Google).
// Durham Region is not served. Meta title unchanged: titles go through a separate test.
export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control GTA · From $99 · 150+ Reviews',
  description:
    'Licensed mosquito control & backyard spraying in 19 GTA cities. From $99, no contracts, rain-back guarantee. 150+ five-star reviews. (289) 216-5030.',
  canonical: '/mosquito-control',
})

const FAQS = [
  { question: 'How much does mosquito control cost?', answer: 'A single mosquito treatment starts from $99 for a standard lot under 10,000 sq ft. Season plans run May through September: Basic is $549 for 5 sprays (monthly), Standard is $994 for 10 sprays (every 2 weeks, our most popular plan) and Exclusive is $2,049 for 20+ sprays (weekly). Tick control is 5 sprays per season: $597 on its own, or $497 added to any mosquito plan (save $100). All prices are plus HST and scale with lot size on bigger properties, and your quote shows the exact price before you pay. There are no contracts and no cancellation fees.' },
  { question: 'How does professional mosquito barrier spray work?', answer: 'BuzzSkito applies a fine residual mist to shrubs, vegetation, and the underside of leaves where mosquitoes rest during the day. The product is applied according to its label directions and dries onto those surfaces as a residual barrier, and scheduled repeat visits keep that barrier in place through the season.' },
  { question: 'What do professionals use for mosquito control?', answer: `A residual barrier spray, aimed at the leaf undersides, dense shrubs and fence-line vegetation where adult mosquitoes rest during the day. A licensed operator can use commercial-class products and a backpack sprayer to reach those spots. BuzzSkito uses a water-based formula in the pyrethrin/permethrin family, applied by an Ontario-licensed pesticide operator (Licence L-240-2436835197) according to its label, which sets the rate, where the product may go and when people can return. Ask us for the exact product name and its PCP registration number before any treatment, and you can read the full label in Health Canada's Pesticide Label Search.` },
  { question: 'What is the most effective way to control mosquitoes?', answer: 'Combine steps instead of relying on one. Remove the standing water where mosquitoes breed, which is the step Ontario public health units advise homeowners to take. Treat the shaded vegetation where adult mosquitoes rest with a residual barrier spray, renewed on a schedule, because mosquitoes keep flying in from neighbouring yards, parks and ravines. Wear a personal repellent when you leave the treated yard. Citronella candles and store-bought foggers are useful supplements, not substitutes, and no method clears a yard completely.' },
  { question: 'How do I mosquito-proof my yard?', answer: 'No yard is fully mosquito-proof, because mosquitoes fly in from neighbouring yards, parks and ravines, but you can cut what your own lot offers them. Tip out anything holding water, and repeat after rain: plant saucers, buckets, toys, tarps and the tray under an air conditioner. Clear clogged gutters each spring and autumn. For water you keep on purpose, such as a rain barrel or an ornamental pond, use a BTI larvicide as its label directs: it goes into the water and acts on the larvae. Trim dense, overgrown shrub beds, so mosquitoes have less shade to rest in and a barrier spray can reach the leaf undersides. A barrier spray then deals with the adults that still arrive.' },
  { question: 'How many mosquito treatments do I need per season?', answer: 'We recommend at least 5 treatments through the season — typically May, June, July, August, and September (the Basic plan, $549). Most GTA homes choose the Standard plan, 10 sprays every 2 weeks for $994, for steadier coverage through peak mosquito activity. Prices are for a standard lot under 10,000 sq ft, plus HST.' },
  { question: 'How long does mosquito spray last?', answer: `It varies, so we don't promise a fixed number of days. Rain, heat, sun and new plant growth all wear the residue down, and the product label sets how often it can be re-applied. That is why season plans renew the barrier on a schedule from May through September: monthly on Basic (5 sprays, $549), every 2 weeks on Standard (10 sprays, $994, our most popular plan) and weekly on Exclusive (20+ sprays, $2,049), all plus HST. Yards near ravines, rivers or wetlands often choose Standard or Exclusive, because nearby breeding sites keep resupplying the yard.` },
  { question: 'Does rain wash mosquito spray off?', answer: `Heavy rain before the spray has dried can wash it off. We monitor the weather forecast and won't apply before heavy rain, and every plan includes the rain-back guarantee: if it rains within 1 hour of your treatment, we come back and re-treat free. After it has dried, rain, heat, sun and new plant growth wear the residue down gradually, which is why plans renew it on a schedule.` },
  { question: 'What precautions apply for children and pets after a mosquito treatment?', answer: 'Our licensed technicians apply water-based barrier products according to their label directions. Keep children and pets off treated areas until the spray has dried, as the product label directs.' },
  { question: 'Is mosquito spray safe for dogs?', answer: 'It comes down to the product label, and following it is the whole point of a licensed application. Keep dogs and cats inside during the treatment and off treated areas until the spray has dried, as the label directs. Some product labels carry specific directions or precautions for pets (cats in particular), so if your pet has health concerns, ask us for the product name and PCP number and check the label, or show it to your vet, before booking. We avoid spraying kennel runs, water bowls and pet feeding areas, and if your dog chews or grazes on plants, keep it away from the treated shrubs.' },
  { question: 'Is professional mosquito control worth it?', answer: 'It depends on how you use your yard. It makes the most sense for homes near water or ravines, families with young children, people who entertain outdoors, and anyone with a patio, pool or garden they want to use all summer. It may not be worth it for a small condo patio with no vegetation, a yard you rarely use during mosquito season, or a very small lot with little vegetation, because barrier spray works by treating the plants where mosquitoes rest. Not sure? Book a single treatment, from $99 on a standard lot with no contract, and decide after that.' },
  { question: 'What is the best time of year to start mosquito control in Ontario?', answer: 'Start in early May, as mosquito populations begin building once temperatures consistently exceed 10°C. Starting early puts the barrier in place before peak season in June and July.' },
  { question: 'Do you service my city?', answer: `BuzzSkito serves 19 cities across the GTA including Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill. East of Toronto, our service area ends at Scarborough: we don't serve Durham Region (Pickering, Ajax, Whitby). See our full service areas page for details.` },
  { question: 'Is there mosquito control near me?', answer: 'Yes, if you live in one of the 19 GTA cities we serve. BuzzSkito is a locally owned Mississauga-based mosquito and tick control specialist covering those 19 cities and 30+ neighbourhoods (Durham Region, including Pickering, Ajax and Whitby, is outside our area). Searching "mosquito control near me" from inside our service zone gets you a nearby licensed technician (Ontario licence L-240-2436835197) rather than a national call centre, backed by 150+ five-star reviews and zero negative reviews.' },
  { question: 'How fast can you come out to spray?', answer: 'Most requests get a price the same day and most new bookings are treated within 24 to 48 hours, and during peak season (June and July) we can often fit same-week appointments. Because we are based locally in Mississauga and run a GTA-wide route, there is no long wait for a technician to travel out — call (289) 216-5030 or request a free quote and we will confirm the soonest available visit window for your area.' },
]

// Exact words, name and place as shown on the city pages: Katharine M. (app/mississauga-mosquito-control),
// Linda C. (app/toronto-mosquito-control, Rosedale), Anthony (app/burlington-mosquito-spray, Milton).
const TESTIMONIALS = [
  { author: 'Katharine M.', place: 'Mississauga', text: 'Fantastic experience with the mosquito control last summer! We’re re-signing for this season once again! We can enjoy our yard again in Mississauga.' },
  { author: 'Maria G', place: 'Toronto', text: 'Best mosquito spray service in Toronto by FAR!!! Can’t wait to enjoy my yard again this year. If I knew about the mosquito service earlier I would have been able to enjoy so many more nights outside. Thank you BuzzSkito!!' },
  { author: 'Anthony', place: 'Milton', text: 'Highly recommend this company for mosquito control. I got my house in Milton serviced recently and loved the end result!' },
]

export default function MosquitoControlPage() {
  const primaryCities = CITIES.slice(0, 6)
  const extendedCities = CITIES.slice(6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Mosquito Control', description: 'Professional mosquito barrier spray service for residential lawns and properties across the Greater Toronto Area.', slug: '/mosquito-control' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mosquito-control', '2026-11-08')) }} />

      {/* Hero */}
      <CityHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Mosquito Control' }]}
        title={<>Mosquito Control &amp; Yard Spraying</>}
        titleAccent={<>for GTA Homes</>}
        subtitle={<>Backyard mosquito spraying by a licensed Ontario pesticide operator, serving 19 cities across the Greater Toronto Area. Barrier spray treatments applied according to label directions.</>}
        image="/spray-backyard.webp"
      >
        <p className="mt-5 text-brand-300 text-sm">
          Also offering <Link href="/tick-control" className="text-brand-400 underline hover:text-white">tick control</Link> — bundle both services in one visit.
        </p>
      </CityHero>

      {/* REAL JOB FOOTAGE (Nov 13, 2026). It replaced the quick-answer box at the top: the owner didn't want
          visitors greeted by "What is the best mosquito control company in ...?" and asked for one of the crew's clips
          instead. The clip waits for the page to finish loading (afterLoad). The quick answer moved down
          above the closing section, where Google's AI still reads it. */}
      <section className="pt-8 pb-4 px-4 bg-white" aria-label="Our crew at work">
        <div className="max-w-3xl mx-auto">
          <CrewVideo
            clip={CREW_CLIPS.underDeck}
            afterLoad
            sizes="(max-width: 768px) 100vw, 768px"
            className="rounded-2xl ring-1 ring-brand-200"
            caption="Filmed on one of our jobs: misting the shaded space under a deck, one of the places mosquitoes rest during the day."
          />
        </div>
      </section>

      <TypicalPrices service="mosquito" city="GTA" />

      {/* KEY FACTS — extractable for AI */}
      <section className="py-10 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Key Facts at a Glance</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service', 'Mosquito barrier spray (residential & commercial)'],
                  ['Coverage area', '19 GTA cities + 30+ neighbourhoods'],
                  ['Single treatment price', 'From $99 (standard lot under 10,000 sq ft, plus HST)'],
                  ['Standard season', '$994 · 10 sprays bi-weekly · May–Sep'],
                  ['Sprays per season', '5, 10 or 20+ (tick: 5)'],
                  ['Contracts', 'None: no contracts and no cancellation fees'],
                  ['Visits', `${PROMISES.visitWindow} You don't need to be home.`],
                  ['Re-entry', 'Stay off treated areas until the spray has dried, as the label directs'],
                  ['Application', PROMISES.labelLine],
                  ['Licence', PROMISES.licence],
                  ['Tick add-on', '$497 bundled (saves $100 vs $597 standalone)'],
                  ['Guarantee', 'Rain-back on every plan; Bite-Free on Standard & Exclusive'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MOSQUITO CONTROL NEAR ME — local intent capture */}
      <section aria-labelledby="near-me" className="py-14 px-4 bg-brand-50 border-b border-brand-100">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Near You</p>
          <h2 id="near-me" className="h2-display text-brand-900 mb-4 text-center">Looking for Mosquito Control Near You?</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            BuzzSkito is a locally owned Mississauga-based mosquito &amp; tick control specialist serving 19 cities across the Greater Toronto Area. If you searched &ldquo;mosquito control near me&rdquo; or &ldquo;mosquito spraying near me&rdquo; from one of the cities below, you&rsquo;re inside our service zone &mdash; and you&rsquo;ll get a nearby licensed technician rather than a national call centre.
          </p>

          {/* Proof · pricing · speed */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-5 border border-brand-200 text-center">
              <div className="text-brand-700 font-extrabold text-lg mb-1">150+ five-star reviews</div>
              <p className="text-gray-600 text-sm">5.0&#9733; average with zero negative reviews across the GTA.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-brand-200 text-center">
              <div className="text-brand-700 font-extrabold text-lg mb-1">From $99 per treatment</div>
              <p className="text-gray-600 text-sm">Standard season $994 for 10 sprays (most popular). Prices +HST, scaling with lot size.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-brand-200 text-center">
              <div className="text-brand-700 font-extrabold text-lg mb-1">Booked in 24&ndash;48 hrs</div>
              <p className="text-gray-600 text-sm">Often same-week in peak season. {PROMISES.response} {PROMISES.rainBackShort}.</p>
            </div>
          </div>

          {/* All 19 cities — "serving [city] near you" framing */}
          <h3 className="text-lg font-bold text-brand-900 mb-4 text-center">Serving mosquito control near you across the GTA</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {CITIES.map((city) => (
              <Link
                key={city.name}
                href={city.mosquitoSlug}
                className="block bg-white border border-brand-200 rounded-lg px-4 py-3 text-sm font-medium text-brand-800 hover:bg-brand-700 hover:text-white hover:border-brand-700 transition-colors"
              >
                Serving {city.name} near you &rarr;
              </Link>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            East of Toronto, our service area ends at Scarborough. We don&rsquo;t serve Durham Region (Pickering, Ajax, Whitby).
          </p>

          <div className="text-center mt-10">
            <Link href="/free-yard-assessment" className="btn-primary press-scale">
              Get a Free Local Quote
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Not sure of the price? See the full <Link href="/mosquito-control-cost" className="text-brand-700 underline">2026 pricing guide</Link>, browse every area on our <Link href="/service-areas" className="text-brand-700 underline">service areas page</Link>, or call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a>.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section aria-labelledby="whats-included" className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Our Service</p>
          <h2 id="whats-included" className="h2-display text-brand-900 mb-4 text-center">What&rsquo;s Included in Every Mosquito Spray Treatment</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">Each BuzzSkito mosquito control service follows the same careful process on every visit.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Targeted Barrier Application', desc: 'We spray all vegetation, shrubs, hedges, and the underside of leaves up to 10 feet high — wherever mosquitoes rest during the day.' },
              { icon: '⚡', title: 'Contact Action Where Mosquitoes Rest', desc: 'The product goes on the shaded leaf undersides and shrub interiors where adult mosquitoes rest during the day.' },
              { icon: '🛡️', title: 'Residual Barrier', desc: 'The product dries onto treated surfaces as a residual barrier, and scheduled repeat visits keep it in place through the season.' },
              { icon: '💧', title: 'Rain-Back Guarantee', desc: PROMISES.rainBack },
              { icon: '📋', title: 'Label-Directed Application', desc: 'Products applied according to label directions by a licensed technician. Keep kids and pets off treated areas until the spray has dried.' },
              { icon: '🔁', title: 'Bite-Free Guarantee (Standard & Exclusive)', desc: BUSINESS.guarantee.description },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — the visit step by step (from /how-it-works and /mosquito-control-cost) */}
      <section aria-labelledby="how-mosquito-control-works" className="py-14 px-4 bg-brand-50">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Step by Step</p>
          <h2 id="how-mosquito-control-works" className="h2-display text-brand-900 mb-4 text-center">How Our Mosquito Control Works</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Adult mosquitoes spend most of the day resting in shaded vegetation rather than flying, so that is where the spray goes: the leaves, shrubs and fence lines around your backyard, not the open lawn or the air. Here is a BuzzSkito visit from the first call to the last spray of the season.
          </p>
          <div className="max-w-3xl mx-auto mb-10">
            <CrewVideo
              clip={CREW_CLIPS.lawnEdge}
              className="rounded-2xl ring-1 ring-brand-200"
              caption="Filmed on one of our jobs: misting the shrub and grass border at the edge of a lawn, the kind of shaded planting adult mosquitoes rest in during the day."
            />
          </div>
          <ol data-lead-location="how_it_works" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Get your price', body: <>Call <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold underline">{BUSINESS.phone}</a>, text us, or request a quote online. We confirm your address, property size and anything specific, such as ravine exposure, water features or tick habitat. No home visit is needed to get started. {PROMISES.response}</> },
              { title: 'We book your visit window', body: <>{PROMISES.visitWindow} We send an SMS before the technician arrives. You don&rsquo;t need to be home, as long as the technician can reach your outdoor areas.</> },
              { title: 'Your yard is treated', body: <>The technician applies a fine residual mist with a backpack sprayer to the shrubs, garden borders, hedges, fence lines, leaf undersides and shaded areas where mosquitoes rest. On the first visit we also note any standing water and high-risk zones on the property.</> },
              { title: 'The spray dries', body: <>Keep children and pets off treated areas until the spray has dried, as the product label directs. Once dry, the product is odourless and invisible on treated surfaces.</> },
              { title: 'Lawn sign and treatment log', body: <>We leave a small lawn sign at the front confirming the treatment and email you a treatment log: the surfaces treated, the technician&rsquo;s observations and when your next visit is due.</> },
              { title: 'Repeat visits all season', body: <>The barrier is renewed on your plan&rsquo;s schedule: monthly on Basic (5 sprays), every 2 weeks on Standard (10 sprays) or weekly on Exclusive (20+ sprays). {PROMISES.rainBack} {PROMISES.biteFreeScope}.</> },
            ].map(({ title, body }, i) => (
              <li key={title} className="bg-white rounded-2xl p-5 border border-brand-200 flex gap-4">
                <div className="w-9 h-9 shrink-0 rounded-full bg-brand-700 text-white font-extrabold flex items-center justify-center" aria-hidden="true">{i + 1}</div>
                <div className="min-w-0">
                  <h3 className="font-bold text-brand-900 mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-brand-200">
              <h3 className="font-bold text-brand-900 mb-3">What we treat</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {['Shrubs and garden borders', 'Fence lines and hedges', 'Leaf undersides and lower tree canopy', 'Dense ground cover and ornamental grasses', 'Under decks and in shaded areas', 'Ravine-facing perimeter vegetation'].map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-brand-200">
              <h3 className="font-bold text-brand-900 mb-3">What we don&rsquo;t treat</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {['Open water (ponds, pools, water features)', 'Open blooms or flowering plants', 'Vegetable or herb gardens', 'Bare soil or open lawn', 'Tree trunks or bark'].map((item) => (
                  <li key={item}>✗ {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            More detail on every step: <Link href="/how-it-works" className="text-brand-700 underline">how a treatment works</Link>.
          </p>
        </div>
      </section>

      {/* TREATMENT DAY — before, during, after (from /mosquito-spray-safety, /how-it-works and the spray-duration post) */}
      <section aria-labelledby="treatment-day" className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Treatment Day</p>
          <h2 id="treatment-day" className="h2-display text-brand-900 mb-4 text-center">What to Expect on Treatment Day</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">You don&rsquo;t need to be home for a mosquito spraying visit. If you are, this is what happens before, during and after.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Before', text: 'Bring kids, pets and outdoor toys inside, close any windows facing the yard, and cover outdoor food areas like the grill. At booking, tell us about beehives, a pollinator garden, a vegetable garden or a pet with health concerns, so we can plan around them. Want to read the label first? Ask for the product name, its PCP number and the Safety Data Sheet.' },
              { label: 'During', text: 'Stay indoors while the technician applies the barrier spray, following the label directions, to vegetation perimeters, fence lines, dense shrubs and shaded resting areas. Open water, open blooms and vegetable gardens are left untreated.' },
              { label: 'After', text: 'Stay off treated areas until the spray has dried, as the product label directs. Drying time changes with heat, humidity and shade, so if leaves still look or feel wet, wait. You will find a lawn sign at the front and a treatment log in your email.' },
            ].map(({ label, text }) => (
              <div key={label} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4">
            <p className="text-sm text-gray-700"><strong className="text-brand-900">If it rains:</strong> we watch the forecast and won&rsquo;t spray before heavy rain. {PROMISES.rainBack}</p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="GTA" service="mosquito" location="price_card_mid" />
      </div>

      {/* Seasonal plan */}
      <section aria-labelledby="seasonal-plan" className="py-14 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Seasonal Plan</p>
          <h2 id="seasonal-plan" className="h2-display text-brand-900 mb-4 text-center">Recommended Seasonal Mosquito Schedule</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Five treatments from May through September, one a month, is our Basic plan ($549). Most GTA homes choose Standard: 10 sprays every 2 weeks ($994).</p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4">
            {['May','June','July','August','September'].map((month, i) => (
              <div key={month} className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm border border-brand-200 min-w-0">
                <div className="text-brand-700 font-extrabold text-xs uppercase tracking-wide mb-1">Treatment {i + 1}</div>
                <div className="text-brand-900 font-bold text-sm sm:text-base">{month}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW LONG IT LASTS (from the spray-duration post, /mosquito-spray-safety and /how-it-works) */}
      <section aria-labelledby="how-long-spraying-lasts" className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">How Long It Lasts</p>
          <h2 id="how-long-spraying-lasts" className="h2-display text-brand-900 mb-4 text-center">How Long Does Mosquito Spraying Last?</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            There is no fixed number of days, and we don&rsquo;t promise one. A barrier treatment leaves a residual on the leaves and shaded surfaces where mosquitoes rest, so mosquitoes landing there contact it. Rain, heat, sun and new plant growth wear that residue down, and the product label sets how often it can be re-applied. That is why every plan renews it on a schedule instead of spraying once: monthly on Basic, every 2 weeks on Standard, weekly on Exclusive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Rain before it dries', desc: `Heavy rain before the product has dried can wash it off. ${PROMISES.rainBackShort}.` },
              { title: 'Heat and full sun', desc: 'In full sun the residual may break down faster than in shade, which is why we cover the shaded areas thoroughly.' },
              { title: 'Dense shrubs and canopy', desc: 'Thick planting takes more product to cover, and heavily landscaped yards may need more frequent treatments.' },
              { title: 'Mosquitoes from next door', desc: 'Barrier spray treats your property, not the source. Mosquitoes from nearby ravines, parks and neighbouring yards keep arriving, so yards near water often choose Standard or Exclusive.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-2xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            How foggers, repellents and barrier spray compare: <Link href="/blog/how-long-does-mosquito-spray-last" className="text-brand-700 underline">how long does mosquito spray last?</Link>
          </p>
        </div>
      </section>

      {/* KIDS, PETS AND THE LABEL — wording as on /mosquito-spray-safety (no "safe" claims, no minute counts) */}
      <section aria-labelledby="kids-pets-label" className="py-14 px-4 bg-brand-50">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Kids, Pets &amp; the Label</p>
          <h2 id="kids-pets-label" className="h2-display text-brand-900 mb-4 text-center">Kids, Pets and the Product Label</h2>
          <p className="text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            It comes down to the product label, and following it is the whole point of a licensed application. BuzzSkito treatments are applied by an Ontario-licensed pesticide operator (Licence {BUSINESS.licenseNumber}) according to the label directions. Keep children and pets inside during the treatment, and keep them off treated areas until the spray has dried, as the label directs. The spray goes on shaded resting areas (leaf undersides, shrubs, hedges, fence lines), not the open lawn where kids play.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Stay off until dry', desc: `We don't quote a fixed number of minutes, because drying time changes with heat, humidity, shade and how dense the plants are. If leaves still look or feel wet, wait.` },
              { title: 'Dogs and cats', desc: 'Keep pets inside during the treatment and off treated areas until the spray has dried. Some labels carry specific precautions for pets, cats in particular, so if your pet has health concerns, check the label or show it to your vet before booking. We avoid spraying kennel runs, water bowls and pet feeding areas.' },
              { title: 'Open blooms avoided', desc: `We do not spray open flowers or beds in bloom, and we follow the label's pollinator directions. Keep hives? Tell us at booking so we can plan around them.` },
              { title: 'Vegetable-garden buffer', desc: 'We keep a buffer around vegetable gardens, fruit trees and edible plants on every treatment.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 border border-brand-200">
                <h3 className="font-bold text-brand-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-brand-900">Check the product yourself.</strong> Ask us for the product name and its PCP registration number before any treatment, then look it up in Health Canada&rsquo;s Pesticide Label Search to read the full label. We send the Safety Data Sheet on request, before booking. More in our <Link href="/mosquito-spray-safety" className="text-brand-700 underline">mosquito spray safety guide</Link>.
          </p>
        </div>
      </section>

      {/* PRO VS DIY (from the DIY-vs-professional, spray-duration and worth-the-cost posts) */}
      <section aria-labelledby="pro-vs-diy" className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Pro vs DIY</p>
          <h2 id="pro-vs-diy" className="h2-display text-brand-900 mb-4 text-center">Professional vs DIY Backyard Mosquito Control</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">We&rsquo;re a mosquito control company, so take our view with that in mind. Here is what each option actually covers.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Citronella candles and torches', desc: 'Work only close to the flame and stop when it goes out. Best on a patio table while you sit right beside it, not as a yard-wide solution.', ours: false },
              { title: 'DEET and other personal repellents', desc: 'Protect the person wearing them from bites, but do nothing to reduce the mosquitoes in your yard. Use them on trails, in parks and anywhere beyond the treated yard.', ours: false },
              { title: 'Store-bought foggers and yard sprays', desc: 'Short-term by design. A fogger kills the mosquitoes flying at that moment and leaves essentially no residual, and re-applying a yard spray at the interval on its label is left to you. Missed resting sites cut the effect.', ours: false },
              { title: 'Professional barrier spray', desc: `A licensed technician treats the shaded resting sites across the whole lot, including the spots homeowners usually miss, and the residual is renewed on your plan's schedule. ${PROMISES.rainBackShort}.`, ours: true },
            ].map(({ title, desc, ours }) => (
              <div key={title} className={`rounded-2xl p-5 border ${ours ? 'bg-brand-50 border-brand-700' : 'bg-white border-brand-200'}`}>
                <h3 className="font-bold text-brand-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            DIY tools are useful supplements, not substitutes. The free step that does the most work is emptying standing water, and it belongs alongside professional treatment, not instead of it. Nothing here clears a yard completely: mosquitoes keep dispersing in from surrounding properties, which is why treatment repeats through the season.
          </p>
          <p className="mt-4 text-center text-sm text-gray-500">
            Read the full comparison: <Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 underline">DIY vs professional mosquito control</Link>.
          </p>
        </div>
      </section>

      {/* REVIEWS — exact words from the city pages; no Review or AggregateRating markup */}
      <section aria-labelledby="reviews" className="py-14 px-4 bg-brand-50">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Reviews</p>
          <h2 id="reviews" className="h2-display text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map(({ author, place, text }) => (
              <figure key={author} className="bg-white rounded-2xl p-6 border border-brand-200">
                <div className="text-amber-400 mb-3" aria-hidden="true">★★★★★</div>
                <blockquote className="text-gray-700 text-sm italic leading-relaxed">&ldquo;{text}&rdquo;</blockquote>
                <figcaption className="mt-3 text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{place}</span></figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <QuoteLink service="mosquito" location="reviews" className="btn-primary press-scale">
              Get my price
            </QuoteLink>
            <Link href="/reviews" className="text-brand-700 font-semibold text-sm underline">Read more customer reviews</Link>
          </div>
        </div>
      </section>

      {/* Primary city links */}
      <section aria-labelledby="primary-cities" className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Service Areas</p>
          <h2 id="primary-cities" className="h2-display text-brand-900 mb-4 text-center">Mosquito Control by City</h2>
          <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">Select your city for local mosquito control information, neighbourhood coverage, and service details.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {primaryCities.map((city) => (
              <Link
                key={city.name}
                href={city.mosquitoSlug}
                className="block bg-brand-50 border border-brand-200 rounded-xl p-5 hover:bg-brand-700 hover:text-white hover:border-brand-700 transition-all group"
              >
                <h3 className="font-extrabold text-brand-900 group-hover:text-white mb-1">{city.name}</h3>
                <p className="text-xs text-gray-500 group-hover:text-brand-200 line-clamp-2">{city.mosquitoBlurb}</p>
                <div className="text-brand-600 group-hover:text-brand-300 text-xs font-semibold mt-2">View service →</div>
              </Link>
            ))}
          </div>
          {/* Extended cities */}
          <h3 className="text-lg font-bold text-brand-900 mb-3">Also serving across the GTA:</h3>
          <div className="flex flex-wrap gap-2">
            {extendedCities.map((city) => (
              <Link
                key={city.name}
                href={city.mosquitoSlug}
                className="text-sm bg-brand-50 border border-brand-200 text-brand-700 hover:bg-brand-700 hover:text-white px-4 py-2 rounded-full transition-colors font-medium"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            See all 19 cities on our <Link href="/service-areas" className="text-brand-700 underline">full service areas page</Link>, view the <Link href="/mosquito-control-ontario" className="text-brand-700 underline">Ontario coverage overview</Link>, or see our <Link href="/mosquito-control-cost" className="text-brand-700 underline">2026 mosquito control pricing guide</Link>.
          </p>
        </div>
      </section>

      {/* Who we serve — property types with their own service page */}
      <section aria-labelledby="who-we-serve" className="py-14 px-4 bg-brand-50">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3 text-center">Who We Serve</p>
          <h2 id="who-we-serve" className="h2-display text-brand-900 mb-4 text-center">Mosquito Control for Every Kind of Property</h2>
          <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">Most of our customers are homeowners, but some properties need their own plan. Each page below explains how we treat that kind of property.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/estate-property-mosquito-control', title: 'Estate & acreage properties', desc: '1-10 acre lots, with multi-zone application around ponds, treelines and outdoor living areas.' },
              { href: '/pool-backyard-mosquito-control', title: 'Pools & backyards', desc: 'Barrier spray around pool areas and entertaining spaces, kept off the pool water.' },
              { href: '/hoa-condo-community-mosquito-control', title: 'HOA & condo communities', desc: 'Common areas and retention ponds under one board contract, with resident notices.' },
              { href: '/property-manager-mosquito-tick-control', title: 'Property managers', desc: 'One point of contact and consolidated invoicing across a rental portfolio.' },
              { href: '/daycare-camp-mosquito-tick-control', title: 'Daycares, camps & schools', desc: 'Treatments scheduled outside operating hours, with parent notification templates.' },
              { href: '/golf-course-mosquito-control', title: 'Golf courses', desc: 'Tee boxes, cart paths and clubhouse surrounds, treated around tee times.' },
              { href: '/restaurant-patio-mosquito-control', title: 'Restaurant patios', desc: 'Patio-season treatment schedules, timed before your operating hours.' },
              { href: '/wedding-mosquito-control', title: 'Weddings & events', desc: 'A treatment timed ahead of a backyard wedding, garden party or outdoor event.' },
              { href: '/commercial-mosquito-control', title: 'Commercial properties', desc: 'Programs for businesses, event venues and managed properties across the GTA.' },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="block bg-white border border-brand-200 rounded-xl p-5 hover:border-brand-700 transition-colors"
              >
                <h3 className="font-extrabold text-brand-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WEST NILE — figures and sources as cited on /west-nile-virus-ontario-tracker */}
      <section aria-labelledby="west-nile" className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Public Health</p>
          <h2 id="west-nile" className="h2-display text-brand-900 mb-4 text-center">Mosquitoes and West Nile Virus in the GTA</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ontario recorded 81 confirmed human West Nile virus cases in 2024, the most of any province (Public Health Agency of Canada). In 2025, Toronto Public Health confirmed the city&rsquo;s first West Nile-positive mosquitoes on July 18, and Peel&rsquo;s first human case of the year was a Mississauga resident, confirmed September 9 (Peel Public Health). About 80% of infections cause no symptoms, but roughly 1 in 150 infected people develop severe neuroinvasive disease such as encephalitis or meningitis (U.S. CDC).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yard spraying works on the mosquitoes, not on the virus. Emptying standing water is the step Ontario public health units advise homeowners to take, and a barrier spray is aimed at the shaded vegetation where adult mosquitoes shelter by day. No yard treatment can promise to prevent West Nile virus infection, and neither step replaces repellent and covering up at dusk and dawn: it is mosquito control, not a medical treatment.
          </p>
          <p className="text-sm text-gray-500">
            Every figure, with its source, is on our <Link href="/west-nile-virus-ontario-tracker" className="text-brand-700 underline">West Nile virus Ontario tracker</Link>.
          </p>
        </div>
      </section>

      {/* Blog links */}
      <section aria-labelledby="related-guides" className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 id="related-guides" className="text-2xl font-extrabold text-brand-900 mb-3">Mosquito Control Guides</h2>
          <p className="text-gray-500 mb-8 text-sm">Start with our comprehensive pillar guide, then explore specific topics below.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <BlogCard {...MOSQUITO_BLOGS.pillar} category="mosquito" isPillar />
            {MOSQUITO_BLOGS.supporting.map((post) => (
              <BlogCard key={post.slug} {...post} category="mosquito" />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <CityPriceCard city="GTA" service="mosquito" />
      </div>

      {/* FAQ */}
      <section aria-labelledby="faq" className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="kicker mb-3 text-center">Questions &amp; Answers</p>
          <h2 id="faq" className="h2-display text-brand-900 text-center mb-8">Mosquito Control FAQ</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            More questions? See our <Link href="/frequently-asked-question" className="text-brand-700 underline">full FAQ</Link>, the <Link href="/mosquito-spray-safety" className="text-brand-700 underline">spray safety guide</Link>, or call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a>.
          </p>
          <p className="text-center mt-3 text-sm text-gray-500">
            New to barrier spray? See <Link href="/how-it-works" className="text-brand-700 underline">how a treatment works, step by step</Link>, look up a term in our <Link href="/mosquito-tick-control-glossary" className="text-brand-700 underline">mosquito and tick control glossary</Link>, or find out why mosquitoes pick some people over others with the free <Link href="/am-i-a-mosquito-magnet" className="text-brand-700 underline">mosquito magnet test</Link>.
          </p>
        </div>
      </section>

      {/* QUICK ANSWER (moved down from the top on Nov 13, 2026; kept for Google's AI answers) */}
      <QuickAnswer question="What is the best mosquito control for GTA homes?">
        <p>
          <strong>For residential GTA properties, BuzzSkito recommends professional barrier spray from a licensed Ontario operator, applied according to label directions.</strong> We apply a residual barrier to vegetation, shrubs, fence lines and the shaded spots where mosquitoes rest during the day, and because mosquitoes keep flying in from nearby yards, parks and ravines, we renew it on a schedule. Recommended schedule for GTA homes: <strong>10 treatments every 2 weeks from May through September ($994, the Standard plan)</strong>, or single treatments from $99 on a standard lot, plus HST. Rain within 1 hour of a treatment is re-treated free on every plan, and Standard &amp; Exclusive plans carry the Bite-Free Guarantee. BuzzSkito serves 19 GTA cities and has 150+ five-star reviews.
        </p>
      </QuickAnswer>

      <CTASection heading="Ready to Take Back Your Yard?" subtext="Get a free, no-obligation mosquito control quote for your GTA property." />
    </>
  )
}
