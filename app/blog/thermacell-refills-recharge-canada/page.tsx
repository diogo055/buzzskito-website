import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'

const SLUG = 'thermacell-refills-recharge-canada'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Thermacell Refills & Recharge Canada — Costs, Models & Where to Buy'

const FAQS = [
  {
    question: 'Where can I buy Thermacell refills in Canada?',
    answer: 'Thermacell refills are stocked at Amazon.ca (widest selection, all refill types), Canadian Tire, Home Depot Canada, Walmart Canada, Cabela\'s Canada, Bass Pro Shops, and many garden centres from May through September. E-Series liquid cartridges (for the rechargeable E55 and E90), Original mat-and-fuel value packs (for the fuel-powered Patio Shield), and Liv refills (for the Liv smart system) are all easy to find online year-round, but big-box in-store stock is seasonal and thins out by August.',
  },
  {
    question: 'How much do Thermacell refills cost per hour in Canada?',
    answer: 'Roughly $0.35–$0.50 per hour of protection. In Canada (July 2026), an E-Series refill cartridge (40 hours) runs about $15–$20, an Original 60-hour value pack (15 mats + 5 fuel cartridges) about $25–$32, and a 120-hour mega refill about $40–$50. Buying multi-packs lowers the per-hour cost. For comparison, a single professional barrier spray treatment from $99 covers your whole yard for 21–30 days with no cartridges to swap.',
  },
  {
    question: 'Are Thermacell refills interchangeable between models?',
    answer: 'Not across families. Rechargeable models (E55, E90, and the newer rechargeable line) all use the same E-Series liquid cartridge and are interchangeable with each other. Fuel-powered models (Patio Shield MR300, MR450, Backpacker) use Original repellent mats plus a butane fuel cartridge — a completely different refill. The Liv smart system uses its own Liv refill. Always match the refill family to your device: an E-Series cartridge will not fit a Patio Shield, and Original mats will not fit an E55.',
  },
  {
    question: 'Do the rechargeable Thermacell models need butane?',
    answer: 'No. The rechargeable E55 and E90 heat the repellent with a built-in USB-rechargeable battery, so they need no butane fuel cartridge at all — just charge the unit and insert a liquid E-Series refill cartridge. Only the older fuel-powered models (Patio Shield, Backpacker) burn a small butane cartridge to generate heat. That butane comes bundled inside the Original refill packs, so you rarely buy it separately.',
  },
  {
    question: 'How do I recharge a Thermacell E55 or E90?',
    answer: 'Plug the unit into a USB power source (USB-C on current models). A full charge takes about 4–6 hours and gives roughly 5.5 hours of runtime on the E55 and about 9 hours on the E90 per charge. A status light shows charge level. You can also run the E55/E90 while plugged into a power bank for all-evening backyard use, which is handy for long gatherings.',
  },
  {
    question: 'How do I know when to replace a Thermacell refill cartridge?',
    answer: 'On rechargeable models, the cartridge has a fuel-gauge window — the blue liquid level drops as it is used, and when it reaches empty the cartridge is spent (about 40 hours). Pop the old cartridge out and click a fresh one in. On fuel-powered models, replace the repellent mat when it turns from blue to white (about 4 hours each) and swap the butane cartridge when the device will no longer light (about 12 hours per fuel cartridge).',
  },
  {
    question: 'What is the active ingredient in Thermacell refills?',
    answer: 'Thermacell rechargeable refills use metofluthrin, and the Original mat refills use allethrin (d-allethrin) — both are synthetic pyrethroid repellents registered for sale in Canada by Health Canada\'s Pest Management Regulatory Agency (PMRA). The device warms the refill to release a scentless vapour that creates a protection zone of roughly 20 feet (about 6 metres) around the unit. Always follow the label directions printed on the refill package.',
  },
  {
    question: 'Are Thermacell refills safe to use around kids and pets?',
    answer: 'Used as directed, yes — Thermacell repellents are registered by Health Canada\'s PMRA and are designed for outdoor use. The vapour repels mosquitoes rather than being sprayed on skin. Follow label directions: use outdoors in a well-ventilated area, keep the device out of reach of children, and do not use it in enclosed spaces. Because it creates a fixed zone, it protects a patio or campsite but does not move with you the way a topical repellent does.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Thermacell refills and recharge guide for Canada: where to buy E-Series cartridges, Original mats + butane, and Liv refills, cost per hour, refill compatibility by model (E55, E90, Patio Shield, Liv), and how to recharge and replace. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function ThermacellRefillsRechargeCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Canada guide to Thermacell refills, recharge, cost per hour, and model compatibility.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Thermacell Refills & Recharge Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Thermacell Refills &amp; Recharge Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Which refill fits your model, what it costs per hour, where to buy in Canada, and how to recharge and replace &mdash; for the E55, E90, Patio Shield, and Liv.</p>
        </div>
      </section>

      {/* Quick Answer — AI-extraction block */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Thermacell refills come in two families: liquid E-Series cartridges for the rechargeable E55 and E90, and mat-plus-butane packs for the fuel-powered Patio Shield. In Canada, buy them at Amazon.ca, Canadian Tire, and Home Depot for roughly $0.35&ndash;$0.50 per hour of protection &mdash; and match the refill family to your device before you check out.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>An E-Series liquid cartridge lasts about 40 hours and costs $15&ndash;$20.</li>
              <li>An Original 60-hour value pack (15 mats + 5 fuel) runs $25&ndash;$32; a 120-hour mega refill $40&ndash;$50.</li>
              <li>Rechargeable models need no butane &mdash; a full USB charge takes 4&ndash;6 hours.</li>
              <li>The E55 runs about 5.5 hours per charge; the E90 runs about 9 hours.</li>
              <li>Fuel-powered mats last about 4 hours each and a butane cartridge about 12 hours.</li>
              <li>One device covers only a ~20 ft zone; barrier spray covers the whole yard for 21&ndash;30 days from $99.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Where to buy + price table */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Refill Prices &amp; Cost per Hour · Canada · July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Thermacell Refill Types, Prices &amp; What Fits</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            The single most common Thermacell mistake is buying the wrong refill. Match the refill family to your device before you check out &mdash; an E-Series cartridge will not fit a Patio Shield, and Original mats will not fit an E55.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Refill type</th>
                  <th className="px-4 py-3 text-left">Fits</th>
                  <th className="px-4 py-3 text-left">Coverage</th>
                  <th className="px-4 py-3 text-left">Approx. CA price</th>
                  <th className="px-4 py-3 text-left">Cost/hr</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'E-Series cartridge', fits: 'E55, E90, rechargeable line', cover: '40 hrs', price: '$15 – $20', hr: '~$0.40' },
                  { type: 'Original value pack (15 mats + 5 fuel)', fits: 'Patio Shield, MR450, Backpacker', cover: '60 hrs', price: '$25 – $32', hr: '~$0.45' },
                  { type: 'Original mega refill (mats + fuel)', fits: 'All fuel-powered models', cover: '120 hrs', price: '$40 – $50', hr: '~$0.38' },
                  { type: 'Repellent mats only', fits: 'Fuel-powered (fuel already on hand)', cover: '~48 hrs', price: '$12 – $18', hr: '~$0.30' },
                  { type: 'Liv refill', fits: 'Liv smart repellent system', cover: '40 hrs', price: '$17 – $22', hr: '~$0.48' },
                ].map(({ type, fits, cover, price, hr }) => (
                  <tr key={type} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{type}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{fits}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{cover}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{price}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{hr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices are typical Canadian retail as of July 2026 and vary by retailer and pack size. Buying multi-packs lowers the per-hour cost.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">One device protects one ~20 ft zone.</strong> A Thermacell defends the patch of patio it sits on &mdash; it does not treat your lawn, your yard edges, or handle ticks. For whole-yard, weeks-long coverage, <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> treats every surface mosquitoes land on for 21&ndash;30 days per visit. Many GTA homeowners run both: barrier spray for the yard, a Thermacell on the table.
            </p>
          </div>
        </div>
      </section>

      {/* Compatibility table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Refill &amp; Recharge Compatibility by Model</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Model</th>
                  <th className="px-3 py-2 text-left">Power</th>
                  <th className="px-3 py-2 text-left">Refill</th>
                  <th className="px-3 py-2 text-left">Butane?</th>
                  <th className="px-3 py-2 text-left">Runtime</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rechargeable E55', 'USB battery', 'E-Series cartridge', 'No', '~5.5 hrs / charge'],
                  ['Rechargeable E90', 'USB battery', 'E-Series cartridge', 'No', '~9 hrs / charge'],
                  ['Patio Shield (MR300)', 'Butane fuel', 'Original mats + fuel', 'Yes (bundled)', '~12 hrs / fuel cartridge'],
                  ['Backpacker', 'Camp-stove canister', 'Original mats', 'Yes (separate)', 'Depends on canister'],
                  ['Liv smart system', 'Wired / hub', 'Liv refill', 'No', 'Runs on mains power'],
                ].map(([model, power, refill, butane, runtime]) => (
                  <tr key={model} className="border-t border-navy-50">
                    <td className="px-3 py-2 font-semibold text-brand-800">{model}</td>
                    <td className="px-3 py-2 text-gray-700">{power}</td>
                    <td className="px-3 py-2 text-gray-700">{refill}</td>
                    <td className="px-3 py-2 text-gray-700">{butane}</td>
                    <td className="px-3 py-2 text-gray-700">{runtime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Active ingredients (metofluthrin, allethrin) are registered for sale in Canada through <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" target="_blank" rel="noopener" className="underline hover:text-brand-700">Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA)</a>. Always follow the directions on the refill label.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian prices on the refill that fits your model:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="thermacell e-series refill">E-Series cartridge (E55/E90) →</BuyLink>
            <BuyLink search="thermacell original refill mats and fuel">Original mats + fuel →</BuyLink>
            <BuyLink search="thermacell refill 120 hour mega">120-hour mega refill →</BuyLink>
            <BuyLink search="thermacell liv refill">Liv refill →</BuyLink>
          </div>

          <h2>Which Thermacell Refill Do You Actually Need?</h2>
          <p>Thermacell splits cleanly into two systems, and the refill you buy depends entirely on which one you own. The <strong>rechargeable line</strong> &mdash; the E55 and E90 &mdash; uses a small liquid <strong>E-Series cartridge</strong> that clicks into the top of the unit. There is no fuel and nothing to burn; a USB-rechargeable battery gently warms the cartridge to release a scentless metofluthrin vapour. The older <strong>fuel-powered line</strong> &mdash; the Patio Shield and Backpacker &mdash; uses a flat repellent <strong>mat</strong> (allethrin) heated by a small <strong>butane cartridge</strong>. Refills for those come as combined packs of mats plus fuel.</p>
          <p>Get this right before you check out. The number-one Thermacell complaint online is someone buying an E-Series cartridge for a Patio Shield (or vice versa) and finding it does not fit. If you are still shopping for the device itself, our guide to the <Link href="/blog/best-mosquito-repellent-device-canada">best mosquito repellent device in Canada</Link> compares the rechargeable and fuel lines head to head.</p>

          <h2>What Thermacell Refills Cost per Hour in Canada</h2>
          <p>Across all the refill families, Thermacell lands at roughly <strong>$0.35&ndash;$0.50 per hour of protection</strong> in Canada. An E-Series cartridge (about 40 hours) typically runs $15&ndash;$20; an Original 60-hour value pack of 15 mats and 5 fuel cartridges is around $25&ndash;$32; and the 120-hour mega refill can drop the per-hour cost to about $0.38. If you already have fuel on hand, buying <strong>mats only</strong> is the cheapest way to keep a fuel-powered unit running.</p>
          <p>To put that in perspective: running a Thermacell for a couple of hours most evenings across a GTA summer works out to a modest but real ongoing cost, and it only protects the one small zone the device sits in. That is why many homeowners treat a Thermacell as a personal, portable layer on top of &mdash; not instead of &mdash; whole-yard control.</p>

          <h2>Where to Buy Thermacell Refills in Canada</h2>
          <p>Refills are widely stocked. <strong>Amazon.ca</strong> carries every refill type year-round with the fastest delivery and the clearest listings. <strong>Canadian Tire</strong>, <strong>Home Depot Canada</strong>, and <strong>Walmart Canada</strong> stock the common E-Series and Original packs in season, and outdoor specialists like <strong>Cabela&rsquo;s Canada</strong> and <strong>Bass Pro Shops</strong> carry the Backpacker mats. In-store stock is seasonal &mdash; shelves fill in May and thin out by August &mdash; so if you rely on your Thermacell all summer, it is worth ordering a multi-pack early. For a full retailer-by-retailer breakdown, see our <Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada &mdash; where to buy guide</Link>.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">A Thermacell covers the table. We cover the yard.</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray treats every surface mosquitoes (and ticks) land on across your whole property &mdash; from $99 per treatment, backed by 150+ five-star reviews across 19 GTA cities. Keep the Thermacell for the picnic table.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>How to Recharge an E55 or E90</h2>
          <p>The rechargeable models could not be simpler. Plug the unit into any USB power source (current models use USB-C). A full charge takes about <strong>4&ndash;6 hours</strong> and delivers roughly <strong>5.5 hours of runtime on the E55</strong> and about <strong>9 hours on the E90</strong> &mdash; our <Link href="/blog/thermacell-e90-canada-review">Thermacell E90 Canada review</Link> covers how that runtime holds up over a full GTA season. A small status light shows the charge level. For all-evening backyard use, you can leave the device connected to a portable power bank and run it while it charges &mdash; handy for long dinners and gatherings that outlast a single charge.</p>
          <p>Two habits keep a rechargeable Thermacell reliable: charge it the night before you need it (batteries self-discharge slowly in storage), and store it indoors over winter rather than in an unheated shed, since deep cold is hard on lithium batteries.</p>

          <h2>How to Replace a Refill Cartridge or Mat</h2>
          <p>On the <strong>rechargeable E55/E90</strong>, the cartridge has a fuel-gauge window: the blue liquid level visibly drops as it is used, and when it reaches the bottom the cartridge is spent (about 40 hours). Let the unit cool, pop the empty cartridge out of the top, and click a fresh one in &mdash; no tools, no mess.</p>
          <p>On <strong>fuel-powered models</strong>, there are two consumables. Replace the flat repellent <strong>mat</strong> when it fades from blue to white (about 4 hours of use each), and replace the <strong>butane fuel cartridge</strong> when the device will no longer light (about 12 hours per cartridge). Original refill packs bundle both so you always have matched supplies on hand.</p>

          <h2>Thermacell vs Whole-Yard Control</h2>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Approach</th><th className="px-3 py-2 text-left">Coverage</th><th className="px-3 py-2 text-left">Duration</th><th className="px-3 py-2 text-left">Ticks?</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Thermacell (device)</strong></td><td className="px-3 py-2">~20 ft zone around the unit</td><td className="px-3 py-2">While running (40 hrs/refill)</td><td className="px-3 py-2">No</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/best-mosquito-repellent-device-canada">Other repellent devices</Link></td><td className="px-3 py-2">Small personal zone</td><td className="px-3 py-2">While running</td><td className="px-3 py-2">No</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">Entire yard, surfaces &amp; edges</td><td className="px-3 py-2">21&ndash;30 days per treatment</td><td className="px-3 py-2">Yes &mdash; full coverage</td></tr>
            </tbody>
          </table>
          <p>Thermacell is a genuinely good product for what it does: create a mosquito-free bubble around a patio table, a campsite, or a deck chair, on demand, with no spraying on skin. What it cannot do is protect a whole yard, hold up in a breeze, or touch ticks. For that you need residual treatment on the vegetation itself. The smartest GTA setup is a Thermacell for point protection <em>plus</em> a seasonal <Link href="/mosquito-control">BuzzSkito barrier program</Link> ($549 Basic / $994 Standard for the season, or a single treatment from $99) so the yard around the Thermacell is working for you too.</p>

          <h2>Frequently Asked Questions</h2>
          {FAQS.map(({ question, answer }) => (
            <div key={question} className="mb-4">
              <h3 className="text-lg font-bold text-brand-900">{question}</h3>
              <p>{answer}</p>
            </div>
          ))}

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/blog/best-mosquito-repellent-device-canada">Best Mosquito Repellent Device in Canada</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Book a Free Yard Assessment</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Thermacell for the Table · Barrier Spray for the Yard" subtext="Get a free quote for licensed whole-yard mosquito & tick control. From $99. Same-day protection, 21–30 day residual." variant="dark" />
    </>
  )
}
