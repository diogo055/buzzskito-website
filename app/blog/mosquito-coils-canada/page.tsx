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

const SLUG = 'mosquito-coils-canada'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Mosquito Coils Canada 2026 — Do They Work & Are They Safe?'
const META_TITLE = 'Mosquito Coils Canada 2026: Do They Work & Are They Safe?'

const FAQS = [
  {
    question: 'Do mosquito coils actually work?',
    answer: 'Yes, within limits. A burning mosquito coil smoulders slowly and releases a thin plume of insecticidal smoke (usually allethrin or metofluthrin, both pyrethroids) or citronella vapour. Anything sitting inside that plume — typically a 1–2 metre personal zone, downwind of the coil — gets meaningful protection: mosquitoes are repelled and small numbers are knocked down. The catch is that a coil protects the smoke zone, not your whole yard, and a breeze that blows the smoke away from you erases the effect. For a still evening on a small patio, dock, or campsite they genuinely help; for whole-yard, hands-off protection they are not the right tool.',
  },
  {
    question: 'Can you burn mosquito coils indoors?',
    answer: 'No — never burn mosquito coils indoors, in a tent, in a garage, or in any enclosed space. Coils work by combustion, and that smoke carries fine particulate matter (PM2.5) plus combustion byproducts such as formaldehyde and other carbonyls. Peer-reviewed indoor-air research has found that burning a single coil in a closed room can release particulate matter at levels comparable to burning dozens of cigarettes. Outdoors in open air those emissions disperse quickly and the exposure is far lower. Rule of thumb: coils are an outdoor-only product. Use them on an open patio, deck, dock, or campsite, position yourself upwind, and keep them away from where children sleep or anyone with asthma sits.',
  },
  {
    question: 'What is the active ingredient in mosquito coils?',
    answer: 'Most insecticidal coils sold in Canada use a pyrethroid — commonly d-allethrin (in PIC coils) or metofluthrin (in some OFF! coils). Pyrethroids are synthetic versions of pyrethrin, the compound found in chrysanthemum flowers, and they act as spatial repellents and knock-down agents in the vapour phase. Citronella coils use citronella oil (a plant essential oil) instead of a pyrethroid — they smell stronger and are marketed as more natural, but they are generally milder and shorter-range. Allethrin coils are registered pest-control products with Health Canada\'s PMRA; always read and follow the label.',
  },
  {
    question: 'How long does one mosquito coil last?',
    answer: 'A standard spiral coil burns for roughly 5–8 hours from the outer edge inward, so one coil comfortably covers an evening outdoors. Burn time depends on the coil\'s thickness and on wind — a breezy night burns them faster. Most packs contain 8–12 coils plus a small metal stand, and at $6–$14 per pack that works out to well under a dollar per evening. Snap a coil in half if you only need a couple of hours; each half still burns fine on the stand.',
  },
  {
    question: 'What are the best mosquito coils to buy in Canada?',
    answer: 'The three you will actually find on Canadian shelves are PIC Mosquito Repellent Coils (d-allethrin, the best value and widely stocked), OFF! Mosquito Coils (a trusted brand name, often metofluthrin), and citronella coils such as Coghlan\'s (a Canadian camping brand) for people who prefer a plant-based option. All are sold at Canadian Tire, Home Depot Canada, Walmart, and most camping stores, typically $6–$14 a pack. Insecticidal (allethrin/metofluthrin) coils outperform citronella coils on effectiveness; citronella coils win on scent and the "natural" label. Buy whichever matches your priority — just burn them outdoors only.',
  },
  {
    question: 'Are citronella coils better than regular mosquito coils?',
    answer: 'Not for effectiveness. Citronella coils release citronella essential-oil vapour, which is a genuine but weak and short-lived mosquito repellent — the protective zone is smaller and fades faster than an allethrin or metofluthrin coil. Where citronella coils win is perception: many people prefer the smell and the plant-based label, and they are a reasonable choice on a small, sheltered patio. If your goal is the most bites prevented per coil, the pyrethroid coils (PIC, OFF!) do more. If you dislike the harsher smell of insecticidal smoke and accept weaker protection, citronella coils are fine.',
  },
  {
    question: 'Do mosquito coils repel ticks, and how do they compare to a Thermacell?',
    answer: 'Mosquito coils do nothing for ticks — ticks live in leaf litter and long grass and are not affected by airborne smoke, so coils give a false sense of security in tick habitat. Against mosquitoes, a Thermacell does essentially the same job as a coil (a small personal repellent zone using a heated pyrethroid mat) but without open flame, smoke, or combustion byproducts, which makes it the better choice for most patios. Coils still beat a Thermacell in two cases: when you have no batteries or butane and want the cheapest possible option, and for camping where a $7 pack of coils is dead simple. For whole-yard mosquito and tick coverage, neither a coil nor a Thermacell substitutes for a professional barrier spray.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'How mosquito coils work, why you must never burn them indoors, the best PIC, OFF! and citronella coils in Canada, and where to buy them. Honest 2026 guide.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('mosquito-coils-canada')

export default function MosquitoCoilsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 guide to mosquito coils in Canada — how they work, the indoor-safety warning, best brands, and where to buy.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Coils Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Coils Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">How mosquito coils actually work, the one safety rule that really matters (never burn them indoors), the best coils sold in Canada, and how they stack up for GTA patios, docks, and camping.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="PIC Mosquito Repellent Coils" search="pic mosquito coils" label="Best value coil" />

      <section className="bg-white px-4 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Yes &mdash; mosquito coils work outdoors in a small personal zone, but they are not safe to burn indoors. A smouldering coil repels and knocks down mosquitoes within roughly 1&ndash;2 metres downwind, so on a still patio, dock, or campsite they genuinely cut bites; for whole-yard, no-smoke protection a <Link href="/mosquito-control" className="text-emerald-700 underline">barrier spray</Link> or a <Link href="/blog/thermacell-canada-where-to-buy" className="text-emerald-700 underline">Thermacell</Link> beats a coil.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>A mosquito coil protects only a 1&ndash;2 metre personal zone downwind, not a whole yard.</li>
              <li>One coil burns for about 5&ndash;8 hours and costs under $1 per evening (packs run $6&ndash;$14).</li>
              <li>Never burn a coil indoors: a single coil in a closed room can emit fine-particulate smoke comparable to dozens of cigarettes.</li>
              <li>Most insecticidal coils use the pyrethroids d-allethrin or metofluthrin; citronella coils are milder and shorter-range.</li>
              <li>Coils do nothing against ticks, which live in grass and leaf litter and ignore airborne smoke.</li>
              <li>Allethrin coils are registered pest-control products with Health Canada&rsquo;s PMRA.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best Mosquito Coils in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'PIC Mosquito Repellent Coils (d-allethrin)',
                why: 'The best-value pyrethroid coil and the one you will actually find on Canadian shelves. Strong spatial repellency per coil, widely stocked, and budget-friendly.',
                search: 'pic mosquito coils',
                score: 8.4,
                featured: true,
                pros: ['Best bites-prevented per coil', 'Budget-friendly', 'Widely stocked in Canada'],
                cons: ['Insecticidal smoke smell', 'Outdoor-only, downwind zone only'],
              },
              {
                badge: 'Trusted Brand',
                name: 'OFF! Mosquito Coils (metofluthrin)',
                why: 'A familiar name using a metofluthrin pyrethroid. Comparable protection to PIC with the reassurance of a mainstream brand, at a mid-price point.',
                search: 'off mosquito coils',
                score: 8.1,
                pros: ['Recognizable, trusted brand', 'Effective pyrethroid vapour', 'Easy to find seasonally'],
                cons: ['Pricier than PIC', 'Same smoke caveat'],
              },
              {
                badge: 'Best Natural Pick',
                name: 'Coghlan’s Citronella Coils',
                why: 'A Canadian camping-brand citronella coil for people who prefer a plant-based option and a milder scent. Great around the campsite when you accept weaker range.',
                search: 'coghlan\'s citronella mosquito coils',
                score: 7.2,
                pros: ['Plant-based citronella', 'Milder scent', 'Camping-friendly'],
                cons: ['Weaker, shorter-range than pyrethroids', 'Fades faster in wind'],
              },
              {
                badge: 'Best Budget',
                name: 'Generic Citronella Coils',
                why: 'The cheapest way to get a citronella smoke bubble on a small, sheltered patio. Fine for a one-off still evening when you just want something inexpensive on hand.',
                search: 'citronella mosquito coils',
                score: 6.9,
                pros: ['Cheapest option', 'Fine on a sheltered patio', 'No power or batteries'],
                cons: ['Weakest protection', 'Variable quality'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Want the most bites prevented per coil?</strong> The <em>Best Overall</em> PIC pyrethroid coil wins. <strong>Prefer a familiar brand?</strong> The <em>Trusted Brand</em> OFF! coil is the pick. <strong>Want a plant-based scent for camping?</strong> Reach for the <em>Best Natural</em> Coghlan&rsquo;s citronella. But every coil only defends a chair-sized smoke zone outdoors &mdash; for hands-off, whole-yard coverage that also handles ticks, nothing beats <Link href="/mosquito-control">professional barrier spray</Link>.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Mosquito Coils: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Coils are cheap and everywhere in season. Canadian Tire, Home Depot, and Walmart carry PIC and OFF! insecticidal coils plus citronella coils; camping stores stock Coghlan&rsquo;s. Amazon.ca is the place for bulk multipacks.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">Insecticidal (PIC / OFF!)</th>
                  <th className="px-4 py-3 text-left">Citronella coils</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Canadian Tire',       ins: '$7 – $14',  cit: '$6 – $11', note: 'Reliable seasonal stock' },
                  { name: 'Home Depot Canada',   ins: '$6 – $13',  cit: '$6 – $12', note: 'Garden centre + online' },
                  { name: 'Walmart Canada',      ins: '$5 – $12',  cit: '$5 – $10', note: 'Cheapest single packs' },
                  { name: 'Cabela\'s / Bass Pro', ins: '$8 – $14',  cit: '$7 – $12', note: 'Camping · Coghlan\'s brand' },
                  { name: 'Dollarama',           ins: '$2 – $4',   cit: '$2 – $4',  note: 'Small packs, variable quality' },
                ].map(({ name, ins, cit, note }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{ins}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{cit}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices accurate as of July 2026. Packs typically hold 8–12 coils plus a metal stand — under $1 per evening. Citronella coils are milder and shorter-range than allethrin/metofluthrin coils.
          </p>
          <div className="mt-5 rounded-xl bg-rose-50 border-l-4 border-rose-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-rose-900">⚠️ Never burn a mosquito coil indoors, in a tent, or in a garage.</strong> The smoke carries fine particulate matter and combustion byproducts — indoor-air studies put a single coil in a closed room in the range of dozens of cigarettes. Outdoors in open air the exposure drops sharply. Coils are an <strong>outdoor-only</strong> product. For hands-off, whole-yard protection, <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> covers the entire property with no smoke to sit in.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Coil Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Mechanism', 'Smoulders slowly → releases insecticidal (or citronella) smoke plume'],
                  ['Active ingredient', 'd-allethrin or metofluthrin (pyrethroids) · or citronella oil'],
                  ['Protection zone', '~1–2 m personal zone, downwind only'],
                  ['Burn time', '5–8 hours per coil'],
                  ['Cost per evening', 'Under $1 (packs $6–$14)'],
                  ['Indoor use', 'NEVER — outdoor open-air only'],
                  ['Wind sensitivity', 'High — a breeze blows the smoke away and kills the effect'],
                  ['Tick effectiveness', 'None — ticks don\'t respond to airborne smoke'],
                  ['Health Canada status', 'Allethrin coils = registered PMRA pest-control product'],
                  ['Best application', 'Camping, docks, small still patios, one-off evenings'],
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
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian prices on the coils people actually buy — PIC, OFF!, and citronella:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="pic mosquito coils">Check PIC coil price on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="off mosquito coils">OFF! Mosquito Coils →</BuyLink>
          </div>

          <h2 id="best-coils">Best Mosquito Coils in Canada Compared</h2>
          <p>There are really only three coil families worth knowing in Canada: the pyrethroid workhorses (PIC and OFF!), and citronella coils for people who want a plant-based option. Here is how they compare, with a live Amazon.ca price check on each:</p>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Coil</th>
                  <th className="px-4 py-3 text-left">Active ingredient</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Approx. price (CA)</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">PIC Mosquito Coils</td>
                  <td className="px-4 py-3 text-gray-700">d-allethrin</td>
                  <td className="px-4 py-3 text-gray-700">Best value · widely stocked</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$6 – $12 / pack</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="pic mosquito coils" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">OFF! Mosquito Coils</td>
                  <td className="px-4 py-3 text-gray-700">Metofluthrin / allethrin</td>
                  <td className="px-4 py-3 text-gray-700">Trusted brand name</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$8 – $14 / pack</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off mosquito coils">Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Coghlan&rsquo;s Citronella Coils</td>
                  <td className="px-4 py-3 text-gray-700">Citronella oil</td>
                  <td className="px-4 py-3 text-gray-700">Camping · plant-based scent</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$6 – $10 / pack</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="coghlan's citronella mosquito coils">Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Generic Citronella Coils</td>
                  <td className="px-4 py-3 text-gray-700">Citronella oil</td>
                  <td className="px-4 py-3 text-gray-700">Budget · sheltered patios</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$5 – $9 / pack</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="citronella mosquito coils">Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="not-prose text-sm text-gray-600 mb-6">Rule of thumb: if you want the most bites prevented per coil, buy a <strong>pyrethroid</strong> coil (PIC or OFF!). If you dislike the harsher insecticidal smoke and accept weaker, shorter-range protection, a <strong>citronella</strong> coil is fine on a small, sheltered patio. <BuyLink tag={AMZ_TAG} search="pic mosquito coils">Check PIC coil price →</BuyLink></p>

          <h2>How Mosquito Coils Actually Work</h2>
          <p>A mosquito coil is a tightly wound spiral of a combustible paste — typically sawdust or dried plant material — blended with an active ingredient. You light the outer tip, blow out the flame, and it smoulders slowly inward like an incense stick, burning for five to eight hours. As it burns, it heats and vaporizes the active ingredient, carrying it into the air on a thin ribbon of smoke.</p>
          <p>In most insecticidal coils sold in Canada that active ingredient is a <strong>pyrethroid</strong> — usually d-allethrin (the classic PIC coil) or metofluthrin (used in some OFF! coils). Pyrethroids are synthetic cousins of pyrethrin, the natural insecticide in chrysanthemum flowers. In the vapour phase they act as a <em>spatial repellent</em>: mosquitoes flying into the treated air are irritated and driven off, and a smaller number are knocked down outright. Citronella coils swap the pyrethroid for citronella essential oil, which masks the human scent cues mosquitoes home in on — a real but weaker and shorter-range effect.</p>
          <p><strong>The key limitation is the smoke plume.</strong> A coil only protects the air the smoke is actually drifting through — roughly a one-to-two-metre bubble downwind of the coil. Sit in the plume on a still night and you will notice fewer bites; step out of it, or let a breeze carry the smoke sideways, and the protection largely vanishes. Coils defend a chair, not a yard.</p>
          <p>Citronella tiki torches sit in the same short-range family and land below a coil rather than above it: the plume is thinner, and the flame usually stands at the edge of the patio instead of beside your chair. If you were weighing a set of torches against a pack of coils, our look at <Link href="/blog/do-tiki-torches-repel-mosquitoes">whether tiki torches repel mosquitoes</Link> sets out what to expect from each.</p>

          <div className="not-prose my-6 rounded-xl bg-rose-50 border-l-4 border-rose-500 p-5">
            <p className="text-sm font-extrabold text-rose-900 mb-1">The one safety rule that really matters: outdoors only.</p>
            <p className="text-sm text-gray-800 leading-relaxed">Because coils work by burning, they release fine particulate matter (PM2.5) and combustion byproducts like formaldehyde along with the active ingredient. Peer-reviewed indoor-air studies have measured a single coil burned in a closed room emitting particulate matter comparable to burning dozens of cigarettes. That does <em>not</em> mean coils are useless — it means they belong in <strong>open air</strong>, where the emissions disperse quickly and exposure drops dramatically. Never burn a coil indoors, inside a tent, in a screened gazebo with the flaps down, or in a garage. Set it upwind, keep it away from where kids sleep or anyone with asthma sits, and put it out fully before you go inside.</p>
          </div>

          <h2>Outdoor &amp; Camping Use — Where Coils Shine</h2>
          <p>Coils earn their keep precisely because they are cheap, flameless once lit, and need no power. That makes them a natural fit for a handful of situations where a plug-in trap or a battery device is overkill or impractical:</p>
          <ul>
            <li><strong>Camping and backcountry</strong> — a $7 pack of coils and a lighter weigh nothing and need no batteries or butane; stake one upwind of the picnic table.</li>
            <li><strong>Docks and cottage decks</strong> — a still evening by the water is the ideal coil environment, with an open sky to carry the smoke away.</li>
            <li><strong>Small, sheltered patios</strong> — where you sit in one spot for the evening and the coil plume can settle around your chairs.</li>
            <li><strong>One-off evenings</strong> — a single barbecue or fire-pit night where a seasonal plan makes no sense.</li>
            <li><strong>Around a fixed work area</strong> — gardening in one bed at dusk, painting a fence, or grilling.</li>
          </ul>
          <p>Position matters more than most people think. Put the coil <em>upwind</em> of where you are sitting so the smoke drifts across you, use two coils spaced a metre or two apart to bracket a group, and always seat it on the metal stand it ships with — never directly on a wooden deck, dry grass, or anything flammable.</p>

          <h2>When a Mosquito Coil Is the Wrong Tool</h2>
          <ul>
            <li><strong>Whole-yard protection</strong> — a coil defends a chair-sized zone, not a property. For that you need <Link href="/mosquito-control">barrier spray</Link>.</li>
            <li><strong>Windy or breezy nights</strong> — the smoke blows away and takes the protection with it.</li>
            <li><strong>Anywhere indoors, or in a tent</strong> — non-negotiable; the smoke exposure is too high in enclosed air.</li>
            <li><strong>Tick control</strong> — ticks live in grass and leaf litter and ignore airborne smoke entirely.</li>
            <li><strong>Kids&rsquo; play areas and anyone with asthma</strong> — even outdoors, keep coil smoke away from sensitive lungs.</li>
            <li><strong>All-evening moving-around use</strong> — you have to stay in the plume, which a coil can&rsquo;t follow you around.</li>
          </ul>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Or skip the smoke entirely</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray protects your whole yard from $99 — no smoke to sit in, no chair-sized bubble, and it handles ticks too. Backed by 150+ five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Mosquito Coils vs Other Personal &amp; Yard Solutions</h2>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Solution</th><th className="px-3 py-2 text-left">Cost</th><th className="px-3 py-2 text-left">Coverage</th><th className="px-3 py-2 text-left">Tick coverage</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Mosquito coil</strong></td><td className="px-3 py-2">Under $1/evening</td><td className="px-3 py-2">1–2 m plume (outdoor only)</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link></td><td className="px-3 py-2">$80–$150 first year</td><td className="px-3 py-2">4.5 m zone · no smoke</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/natural-mosquito-repellent-ontario">Citronella / natural repellents</Link></td><td className="px-3 py-2">$5–$20</td><td className="px-3 py-2">On-skin or small zone</td><td className="px-3 py-2">Limited</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">$549–$994/season</td><td className="px-3 py-2">Whole yard · 21–30 days</td><td className="px-3 py-2">Yes — full coverage</td></tr>
            </tbody>
          </table>

          <h2>The Honest Verdict for GTA Buyers</h2>
          <p>Mosquito coils are a legitimately useful little tool for the right job: a cheap, no-power way to buy yourself a smoke-bubble of relief on a still evening at the campsite, on the dock, or on a small patio. Keep a pack in the shed. Just respect the two rules that make them work safely — <strong>outdoors only</strong>, and <strong>sit in the plume, upwind of the coil</strong>. If you want more than a chair-sized zone, a <Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link> does the same personal-zone job without the smoke, and for actual mosquito-and-tick coverage of your whole property, nothing a coil can do replaces a <Link href="/mosquito-control">professional barrier spray</Link>. For a full rundown of what works on GTA lawns, see our <Link href="/blog/mosquito-repellent-guide-ontario-2026">Ontario mosquito repellent guide</Link>.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Mosquito Repellent Guide for Ontario (2026)</Link></li>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellents for Ontario Yards</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Trade the Smoke Bubble for a Whole-Yard Shield" subtext="Get a free quote for licensed barrier spray. From $99. Same-day yard protection. 30-day residual. Ticks included." variant="dark" />
    </>
  )
}
