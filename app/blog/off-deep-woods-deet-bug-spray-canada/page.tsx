import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'off-deep-woods-deet-bug-spray-canada'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'OFF Deep Woods & DEET Bug Spray Canada 2026 — Which One to Buy'
const META_TITLE = 'OFF Deep Woods Canada 2026: Which DEET Bug Spray to Buy'

const FAQS = [
  {
    question: 'Which OFF Deep Woods should I buy in Canada?',
    answer: 'For most Canadian adults, OFF Deep Woods (about 25% DEET, roughly $9–$14 for a 100–170g aerosol) is the right pick — it lasts about 5–6 hours and handles cottage country, hiking, and heavy dusk mosquito pressure. Pick OFF Deep Woods Dry if you dislike the greasy feel (same 25% DEET, powder-dry finish). Step up to OFF Deep Woods Sportsmen (around 30% DEET, Health Canada\'s maximum for consumer products) only for the worst blackfly and mosquito conditions in the bush. For everyday backyard, errands, and lighter exposure, OFF FamilyCare (about 15% DEET) is plenty and costs less. Do not buy a higher percentage than you need — above 30% adds no extra protection in Canada.',
  },
  {
    question: 'What DEET percentage is in OFF Deep Woods vs OFF FamilyCare?',
    answer: 'In Canada, OFF Deep Woods and Deep Woods Dry contain about 25% DEET, and OFF Deep Woods Sportsmen contains about 30% DEET (the legal maximum Health Canada allows in consumer repellents). OFF FamilyCare products are lower — typically around 15% DEET — because they are aimed at everyday, lower-exposure use. US versions of OFF Deep Woods sometimes go higher (25% is common there too, and specialty Sportsmen formulas reach far higher), but any product sold legally in Canada is capped at 30% DEET. Concentration controls how LONG the repellent lasts, not how strong the barrier is at any given moment.',
  },
  {
    question: 'How long does OFF Deep Woods last?',
    answer: 'Roughly 5–6 hours for the 25% DEET Deep Woods formula, and up to about 8 hours for the 30% Sportsmen version. Duration scales with DEET concentration: about 10% DEET protects for roughly 2 hours, 15% for 3–4 hours, 25% for 5–6 hours, and 30% for 6–8 hours. Sweat, swimming, rain, and rubbing against clothing all shorten real-world protection, so reapply per the label if you are out longer or getting wet. Going above 30% does not extend protection meaningfully, which is why Health Canada caps consumer products there.',
  },
  {
    question: 'Is OFF Deep Woods safe for kids?',
    answer: 'OFF Deep Woods (25% DEET) is stronger than Health Canada recommends for young children. Health Canada guidance: do NOT use any DEET on infants under 6 months; for ages 6 months to 2 years use a maximum of 10% DEET no more than once per day; for ages 2–12 use a maximum of 10% DEET up to three times per day; only ages 12 and up should use adult-strength products up to 30%. For children, Health Canada actually prefers icaridin (picaridin) 20%, which is approved from 6 months of age. So for kids, reach for a 20% icaridin spray or a low-percentage DEET product rather than Deep Woods. See our picaridin vs DEET guide for the full breakdown.',
  },
  {
    question: 'Can I use OFF bug spray on my dog or cat?',
    answer: 'No. DEET is toxic to dogs and especially cats — do not apply OFF Deep Woods, OFF FamilyCare, or any DEET product to pets. Signs of DEET poisoning in animals include drooling, vomiting, tremors, and disorientation. Use only veterinarian-approved repellents and flea/tick preventives formulated for the specific animal. If you have applied DEET to your own skin, let it dry and avoid letting pets lick the treated area. For a pet-friendly whole-yard approach, a professional barrier treatment keeps mosquitoes and ticks off the property so you rely far less on personal spray around animals.',
  },
  {
    question: 'Where can I buy OFF Deep Woods in Canada?',
    answer: 'OFF is one of the most widely stocked repellent brands in Canada. You will find Deep Woods and FamilyCare at Canadian Tire, Home Depot Canada, Walmart Canada, Shoppers Drug Mart, most grocery chains, and Amazon.ca. Costco Canada carries seasonal multipacks (often the best per-can price when in stock, April–July). Prices in 2026 typically run about $9–$14 for a single Deep Woods aerosol and $7–$11 for FamilyCare, with Costco 2- and 3-packs landing around $20–$28. Stock is deepest May through July and thins out by late August, so buy early in the season.',
  },
  {
    question: 'OFF Deep Woods vs picaridin — which is better?',
    answer: 'Both work well; the trade-offs differ. DEET (OFF Deep Woods, 25%) is the most-studied repellent, extremely effective, but it can feel greasy, has a strong odour, and can damage plastics, synthetic fabrics, and gear finishes. Picaridin (icaridin, 20%) matches DEET for mosquito and tick protection at that concentration, is odourless, non-greasy, and safe on gear and plastics — and it is Health Canada\'s preferred choice for children from 6 months. If you want maximum bush-grade staying power and do not mind the feel, Deep Woods wins on duration. If you want an all-day, comfortable, gear-safe spray for the whole family, 20% icaridin is the better everyday pick. Our picaridin vs DEET guide compares them in depth.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'OFF Deep Woods vs FamilyCare, DEET %/duration explained, safe use for kids and pets, and where to buy in Canada. Which OFF bug spray to buy in 2026, honestly.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('off-deep-woods-deet-bug-spray-canada')

export default function OffDeepWoodsDeetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Honest 2026 Canadian buyer\'s guide to OFF Deep Woods and DEET bug spray — concentrations, duration, safe use, and where to buy.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'OFF Deep Woods & DEET Bug Spray Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">OFF Deep Woods &amp; DEET Bug Spray</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">DEET percentages and how long they last, OFF Deep Woods vs FamilyCare, safe use around kids and pets, and where to buy across Canadian retailers.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="OFF Deep Woods (25% DEET insect repellent)" search="off deep woods" label="Best DEET pick" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For most Canadian adults, buy OFF Deep Woods (about 25% DEET) — it lasts 5–6 hours, costs about $9–$14, and handles cottage country, hiking, and heavy dusk mosquito pressure. For kids under 12 or an all-day gear-safe option, use a 20% icaridin (picaridin) spray instead.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>OFF Deep Woods contains about 25% DEET and protects for roughly 5–6 hours.</li>
              <li>OFF Deep Woods Sportsmen is about 30% DEET — Health Canada&rsquo;s legal maximum — and lasts up to 8 hours.</li>
              <li>OFF FamilyCare (about 15% DEET) protects 3–4 hours and costs $7–$11 per can.</li>
              <li>Health Canada limits children aged 6 months to 12 years to a maximum of 10% DEET, and prefers 20% icaridin for kids.</li>
              <li>DEET is toxic to dogs and cats — never apply any OFF product to pets.</li>
              <li>A single Deep Woods aerosol runs $9–$14 in 2026; Costco Canada multipacks land around $20–$28.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best OFF & DEET Bug Sprays in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'OFF Deep Woods (≈25% DEET)',
                why: 'The do-almost-everything can: about 25% DEET protects for 5–6 hours and handles hiking, cottage country, and heavy dusk pressure. Mid-price and stocked everywhere.',
                search: 'off deep woods',
                score: 8.8,
                featured: true,
                pros: ['5–6 hours of protection', 'Handles heavy mosquito pressure', 'Widely stocked, mid-price'],
                cons: ['Greasy feel and strong odour', 'Can damage plastics and gear'],
              },
              {
                badge: 'Best for the Bush',
                name: 'OFF Deep Woods Sportsmen (≈30% DEET)',
                why: 'About 30% DEET — Health Canada’s legal maximum — for up to 8 hours in the worst blackfly and mosquito conditions. Overkill for a suburban patio.',
                search: 'off deep woods sportsmen',
                score: 8.3,
                pros: ['Longest DEET staying power', 'Built for backcountry conditions'],
                cons: ['Overkill for everyday use', 'Strongest odour and grease'],
              },
              {
                badge: 'Best Everyday',
                name: 'OFF FamilyCare (≈15% DEET)',
                why: 'Lower-concentration, budget-friendly everyday can for the back door — about 15% DEET covers 3–4 hours for quick backyard trips and errands.',
                search: 'off familycare insect repellent',
                score: 7.8,
                pros: ['Budget-friendly', 'Plenty for light exposure', 'Less odour than Deep Woods'],
                cons: ['Only 3–4 hours', 'Not enough for the bush'],
              },
              {
                badge: 'Best Alternative',
                name: 'Icaridin (Picaridin) 20% Spray',
                why: 'Matches DEET for mosquito and tick protection at 20%, but odourless, non-greasy, and gear-safe — and Health Canada’s preferred choice for children from 6 months.',
                search: 'icaridin insect repellent',
                score: 8.6,
                pros: ['Odourless and non-greasy', 'Gear- and plastic-safe', 'Preferred for kids 6 mo+'],
                cons: ['Slightly shorter longevity than 30% DEET'],
              },
            ]}
            whichToBuy={
              <>
                <strong>One can for almost everything?</strong> The <em>Best Overall</em> Deep Woods 25% covers hikes and the cottage. <strong>Brutal blackfly country?</strong> Step up to the <em>Best for the Bush</em> Sportsmen. <strong>Quick backyard trips?</strong> The <em>Best Everyday</em> FamilyCare is plenty, and for kids or an all-day gear-safe option, grab the <em>Best Alternative</em> icaridin. To keep your whole yard bite-free so you spray yourself far less, nothing beats <Link href="/mosquito-control">professional barrier spray</Link>.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">OFF Bug Spray: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            OFF is stocked almost everywhere in Canada. Costco usually wins on the per-can price with seasonal multipacks; Canadian Tire, Home Depot, Walmart, and Shoppers carry singles all season. Prices below are typical 2026 ranges.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">Deep Woods (25% DEET)</th>
                  <th className="px-4 py-3 text-left">FamilyCare (15% DEET)</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Costco Canada',       deep: '$20 – $28 (2–3 pk)', fam: 'Multipack only', note: 'Best per-can price when in stock' },
                  { name: 'Canadian Tire',       deep: '$10 – $14',          fam: '$8 – $11',        note: 'Reliable all-season stock' },
                  { name: 'Home Depot Canada',   deep: '$9 – $13',           fam: '$7 – $10',        note: 'Spring/summer stock' },
                  { name: 'Walmart Canada',      deep: '$9 – $13',           fam: '$7 – $10',        note: 'Usually cheapest single can' },
                  { name: 'Shoppers Drug Mart',  deep: '$11 – $15',          fam: '$8 – $12',        note: 'Convenient · PC Optimum points' },
                ].map(({ name, deep, fam, note }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{deep}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{fam}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices are typical 2026 ranges and vary by size (aerosol vs pump, 100g vs 170g) and promotions. Stock is deepest May–July and thins by late August — buy early in the season.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Bug spray protects your skin — not your yard.</strong> Even the best DEET wears off in hours and has to be reapplied. If mosquitoes and ticks own your property at dusk, a <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier treatment</Link> knocks the population down across the whole yard for 21–30 days, so you spray yourself far less. Many GTA homeowners use both: barrier spray at home, OFF Deep Woods for hikes and the cottage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">DEET Bug Spray Key Facts (Canada)</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What DEET does', 'Masks the CO₂, heat, and skin scent mosquitoes hunt by'],
                  ['Legal max in Canada', '30% DEET for consumer products (Health Canada)'],
                  ['OFF Deep Woods', '≈ 25% DEET · lasts 5–6 hours'],
                  ['OFF Deep Woods Sportsmen', '≈ 30% DEET · lasts up to 8 hours'],
                  ['OFF FamilyCare', '≈ 15% DEET · lasts 3–4 hours'],
                  ['Duration rule', 'Higher % = longer protection, NOT stronger'],
                  ['Kids under 6 months', 'No DEET at all (Health Canada)'],
                  ['Kids 6 mo – 12 yr', 'Max 10% DEET — or 20% icaridin (preferred)'],
                  ['Pets (dogs/cats)', 'DEET is toxic — never apply to animals'],
                  ['Works on ticks?', 'Yes — DEET repels ticks as well as mosquitoes'],
                  ['Gear warning', 'DEET can damage plastics, synthetics, and finishes'],
                  ['Best everyday alternative', '20% icaridin — odourless, gear-safe, all-day'],
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

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian prices on the OFF lineup and a gear-safe icaridin alternative:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="off deep woods">Check OFF Deep Woods price on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="off familycare insect repellent">OFF FamilyCare →</BuyLink>
          </div>

          <h2 id="deet-explainer">DEET Percentage &amp; Duration, Explained</h2>
          <p>The single most misunderstood thing about bug spray is what the DEET percentage actually controls. A higher percentage does <strong>not</strong> make the spray &ldquo;stronger&rdquo; or repel more mosquitoes at once — it makes protection last <em>longer</em> before you have to reapply. Here is the rough relationship most Health Canada and CDC references agree on:</p>
          <ul>
            <li><strong>~10% DEET</strong> — about 2 hours (short errands, a quick evening walk)</li>
            <li><strong>~15% DEET</strong> — about 3–4 hours (OFF FamilyCare · everyday backyard)</li>
            <li><strong>~25% DEET</strong> — about 5–6 hours (OFF Deep Woods · hiking, cottage, dusk)</li>
            <li><strong>~30% DEET</strong> — about 6–8 hours (Deep Woods Sportsmen · worst bush conditions)</li>
          </ul>
          <p>Notice the diminishing returns: going from 25% to 30% buys you a couple extra hours, but jumping past 30% adds almost nothing — which is exactly why <strong>Health Canada caps consumer repellents at 30% DEET</strong>. If you see a US product advertising 40%, 50%, or nearly 100% DEET, that is a longevity spec for extreme expeditions, not a &ldquo;better&rdquo; spray, and it is not sold at that strength in Canada. For a full-yard mosquito plan that reduces how often you reapply anything, see our <Link href="/blog/mosquito-repellent-guide-ontario-2026">Ontario mosquito repellent guide for 2026</Link>.</p>

          <h2 id="off-lineup">The OFF Lineup Compared — Which One to Buy</h2>
          <p>OFF sells several formulas that look similar on the shelf but are aimed at different jobs. Here is the practical breakdown for Canadian buyers, with a live Amazon.ca price check on each:</p>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">OFF product</th>
                  <th className="px-4 py-3 text-left">DEET</th>
                  <th className="px-4 py-3 text-left">Lasts</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Deep Woods</td>
                  <td className="px-4 py-3 font-mono text-gray-800">≈ 25%</td>
                  <td className="px-4 py-3 text-gray-700">5–6 hrs</td>
                  <td className="px-4 py-3 text-gray-700">Hiking, cottage, heavy dusk pressure</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off deep woods" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Deep Woods Dry</td>
                  <td className="px-4 py-3 font-mono text-gray-800">≈ 25%</td>
                  <td className="px-4 py-3 text-gray-700">5–6 hrs</td>
                  <td className="px-4 py-3 text-gray-700">Same power, powder-dry non-greasy feel</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off deep woods dry">Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Deep Woods Sportsmen</td>
                  <td className="px-4 py-3 font-mono text-gray-800">≈ 30%</td>
                  <td className="px-4 py-3 text-gray-700">up to 8 hrs</td>
                  <td className="px-4 py-3 text-gray-700">Backcountry, blackflies, worst conditions</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off deep woods sportsmen">Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">FamilyCare</td>
                  <td className="px-4 py-3 font-mono text-gray-800">≈ 15%</td>
                  <td className="px-4 py-3 text-gray-700">3–4 hrs</td>
                  <td className="px-4 py-3 text-gray-700">Everyday backyard, errands, lighter exposure</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off familycare insect repellent">Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">FamilyCare Smooth &amp; Dry</td>
                  <td className="px-4 py-3 font-mono text-gray-800">≈ 15%</td>
                  <td className="px-4 py-3 text-gray-700">3–4 hrs</td>
                  <td className="px-4 py-3 text-gray-700">Light everyday use · powder-dry finish</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off familycare smooth dry">Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="not-prose text-sm text-gray-600 mb-6">Rule of thumb: <strong>Deep Woods for the bush, FamilyCare for the backyard.</strong> Do not buy Sportsmen 30% for a suburban patio — you are paying for staying power you will not use, and DEET&rsquo;s downsides (odour, greasy feel, plastic damage) scale up with concentration.</p>

          <div className="not-prose my-6 rounded-xl bg-emerald-50 border-l-4 border-emerald-500 p-5">
            <p className="text-sm font-extrabold text-emerald-900 mb-1">The honest shortcut</p>
            <p className="text-sm text-gray-800 leading-relaxed">Most people only need <strong>two</strong> products: a can of OFF FamilyCare (15%) by the back door for quick trips, and a can of OFF Deep Woods (25%) in the hiking bag or cottage kit. That covers 95% of Canadian summer situations. Everything else on the shelf is a variation on those two.</p>
          </div>

          <h2 id="deet-vs-picaridin">OFF Deep Woods vs Picaridin &amp; Other Repellents</h2>
          <p>DEET is not the only option, and for a lot of Canadians it is no longer the best everyday one. Here is how OFF Deep Woods stacks up against the alternatives you will see on the same shelf:</p>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Repellent</th><th className="px-3 py-2 text-left">Active</th><th className="px-3 py-2 text-left">Feel / odour</th><th className="px-3 py-2 text-left">Best for</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>OFF Deep Woods</strong></td><td className="px-3 py-2">25% DEET</td><td className="px-3 py-2">Greasy, strong smell, harms plastics</td><td className="px-3 py-2">Max staying power in the bush</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/picaridin-vs-deet-canada">Icaridin (picaridin)</Link></td><td className="px-3 py-2">20% icaridin</td><td className="px-3 py-2">Odourless, non-greasy, gear-safe</td><td className="px-3 py-2">All-day everyday · kids 6 mo+</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Lemon eucalyptus (OLE)</td><td className="px-3 py-2">30% OLE</td><td className="px-3 py-2">Herbal scent, plant-based</td><td className="px-3 py-2">Shorter outings, plant-based preference</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">Yard treatment</td><td className="px-3 py-2">Nothing on your skin</td><td className="px-3 py-2">Whole-yard, 21–30 days, ticks too</td></tr>
            </tbody>
          </table>
          <p>The headline: at 20%, <strong>icaridin matches DEET for mosquito and tick protection</strong> without the grease, smell, or gear damage, and Health Canada prefers it for children. DEET still wins on raw longevity at 25–30%, which is why Deep Woods stays in the pack for serious backcountry days. If you are torn, our full <Link href="/blog/picaridin-vs-deet-canada">picaridin vs DEET comparison for Canada</Link> walks through every trade-off.</p>

          <h2 id="safe-use">Safe Use: Kids, Pets, and Your Gear</h2>
          <p>DEET is safe and effective when used as directed, but a few Canadian-specific rules matter:</p>
          <ul>
            <li><strong>Infants under 6 months:</strong> no DEET at all. Use physical barriers — mosquito netting over the stroller or carrier.</li>
            <li><strong>Children 6 months to 12 years:</strong> Health Canada limits DEET to a maximum of <strong>10%</strong>, and prefers <strong>20% icaridin</strong> (approved from 6 months). OFF Deep Woods at 25% is above the kids limit — do not use it on young children.</li>
            <li><strong>Applying to kids:</strong> spray it on your own hands first, then wipe it onto exposed skin. Keep it off hands (they end up in mouths and eyes) and off cuts.</li>
            <li><strong>Pets:</strong> DEET is <strong>toxic to dogs and cats.</strong> Never spray OFF on an animal, and let your own skin dry before petting. Use vet-approved products for pets.</li>
            <li><strong>Gear:</strong> DEET dissolves plastics, some synthetics, watch crystals, sunglasses, and fishing line — spray away from equipment and let it dry before handling gear. (This is a big reason icaridin fans switch.)</li>
            <li><strong>Face:</strong> never spray directly on the face — spray hands and wipe on, avoiding eyes and lips.</li>
            <li><strong>End of day:</strong> wash treated skin with soap and water once you are indoors for the night.</li>
          </ul>
          <p>None of those rules imply the chemistry itself is hazardous — the U.S. EPA classifies DEET as &ldquo;not classifiable as to human carcinogenicity,&rdquo; and Health Canada caps the concentration rather than banning the ingredient. If that is the part you came to check, <Link href="/blog/is-deet-safe">is DEET safe?</Link> walks through what each agency actually concluded.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Tired of spraying yourself every night?</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray treats your whole yard from $99, cutting mosquitoes and ticks for 21–30 days so you reach for the DEET far less — backed by 150+ five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2 id="verdict">The Bottom Line for Canadian Buyers</h2>
          <p>If you want one can that does almost everything, buy <strong>OFF Deep Woods (25% DEET)</strong> for hikes and the cottage, and keep a cheaper <strong>OFF FamilyCare (15%)</strong> by the door for quick backyard trips. Reserve Sportsmen 30% for genuinely brutal blackfly country. For kids under 12, an all-day gear-safe option, or anyone who hates the DEET feel, a <Link href="/blog/picaridin-vs-deet-canada">20% icaridin spray</Link> is the smarter modern pick. And remember what no personal spray can do: keep your <em>yard</em> bite-free. That is what a <Link href="/mosquito-control">professional barrier treatment</Link> is for — so the spray in your bag is for the trail, not your own patio.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/picaridin-vs-deet-canada">Picaridin vs DEET in Canada — Which Repellent Wins?</Link></li>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">The Ontario Mosquito Repellent Guide (2026)</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Get a Free Yard Assessment</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Spray Yourself for the Trail · Treat the Yard for Home" subtext="Get a free quote for licensed barrier spray. From $99. Kills mosquitoes and ticks. 21–30 day residual." variant="dark" />
    </>
  )
}
