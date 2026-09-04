import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import InlineYardRiskCTA from '@/components/InlineYardRiskCTA'
import TopPick from '@/components/TopPick'
import FreshnessStamp from '@/components/FreshnessStamp'
import StickyBuyBar from '@/components/StickyBuyBar'
import AuthorByline from '@/components/AuthorByline'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'thermacell-canada-where-to-buy'
const DATE = '2026-05-01'
const UPDATED = '2026-09-04'
const TITLE = 'Thermacell Canada: Best Models, Prices & Where to Buy 2026'

const FAQS = [
  {
    question: 'How much does Thermacell cost in Canada?',
    answer: 'Broadly speaking, the fuel-powered Patio Shield / Fuel-ZoneGuard sits at the entry level, the rechargeable E-Series (E55, E90, EX90) sits well above it, and refills are the small recurring cost. Prices move between retailers and through the season, so check current pricing at the retailer rather than trusting any published figure. The premium Liv Smart Mosquito Repellent System is NOT sold in Canada — Thermacell states it is available in the United States only, and a search of Health Canada\'s Pesticide Product Information Database returns no registered Thermacell Liv product (23 Thermacell products are registered in Canada; none of them is Liv). Stock up on refills at the start of mosquito season (April–May) — supply runs low by July.',
  },
  {
    question: 'Where to buy Thermacell in Canada?',
    answer: 'Thermacell devices and refills are carried by Canadian Tire, Home Depot Canada, RONA (including the RONA+ stores that replaced the Lowe\'s banner in Canada in February 2024 — there is no longer a Lowe\'s Canada), Bass Pro Shops and Cabela\'s Canada, MEC (Mountain Equipment Company), Walmart Canada, Best Buy Canada, Amazon.ca, and independent outdoor retailers. We verified the E55 listed at Canadian Tire and MEC, the Patio Shield / Fuel-ZoneGuard at Home Depot Canada, Bass Pro Canada and MEC, the EX90 at MEC and thermacell.ca, and the E90 at Walmart Canada, Best Buy Canada and Amazon.ca. Which model any one store carries changes year to year, so check the retailer before driving out. The Liv smart system is not sold in Canada (Thermacell: United States only). Cabela\'s, Bass Pro and MEC lean toward the camping/portable models.',
  },
  {
    question: 'Do Thermacell repellers actually work?',
    answer: 'Yes — when used correctly. Thermacell devices warm a mat or cartridge holding a synthetic pyrethroid (a lab-made relative of pyrethrum, the natural insecticide in chrysanthemums) to release a vapour that repels mosquitoes. Health Canada registered the Canadian fuel-powered line in Registration Decision RD2019-03 with a claim of killing and repelling mosquitoes "in an area up to 4.5 metres from the device for up to 4 hours" — that 4.5 m figure is the regulator\'s number, not marketing. Published field trials of Thermacell-type emanators report protection in the 70–95% range in still air (for example, a field evaluation in Şanlıurfa, Turkey measured 90–97% bite reduction, and the IVCC 2020 expert review of spatial repellents puts allethrin and metofluthrin emanators above 70% protection across multiple studies). BuzzSkito does not test consumer products. Performance drops in moderate-to-strong wind, on large open lawns and near stagnant water. Best for sheltered patios, decks, and small gathering areas — not whole-yard protection.',
  },
  {
    question: 'Is Thermacell safe for kids, pets, and pollinators?',
    answer: 'Health Canada\'s PMRA has registered the pyrethroids Thermacell uses in Canada — 1R-trans prallethrin for the fuel-powered line (Registration Decision RD2019-03) and metofluthrin for the rechargeable E-Series (Evaluation Report ERC2015-01 and the related registration decision) — and concluded that, used as directed, they do not present an unacceptable risk to human health or the environment. That is not the same as "non-toxic": these are registered pesticides, Canadian labels carry a "Caution Poison" hazard statement, and Health Canada states plainly that metofluthrin "is highly toxic to aquatic invertebrates, fish, and bees." So do not run a Thermacell over a pond with fish, do not run it in the middle of the day when bees are foraging, keep it away from children and don\'t let anyone touch the heated mat, and follow the label. Cats are more sensitive to pyrethroids than dogs; keep the device out of their reach. If you are unsure, the label that came in the box is the legal instruction — follow it over any web page, including this one.',
  },
  {
    question: 'Thermacell vs DEET vs Picaridin — which is better?',
    answer: 'They serve different purposes. Thermacell creates a repellent zone around the device — Health Canada\'s RD2019-03 registers the Canadian fuel-powered line for up to 4.5 metres from the device — with nothing applied to your skin. DEET and icaridin (the Canadian name for picaridin) are applied to skin for personal protection during activity; Health Canada caps consumer DEET at 30% and registers icaridin up to 20%. Best combination for GTA outdoor activities: Thermacell on the patio while sitting still, plus DEET or icaridin on skin if you walk through dense vegetation. For ticks specifically, permethrin-treated clothing outperforms both — but in Canada that means FACTORY pre-treated garments, which the Public Health Agency of Canada says have been approved for people over the age of 16, including pregnant women. PHAC does advise against wearing treated clothing while nursing, because it puts infants in close contact with the product. Consumer permethrin liquids and sprays for treating your own clothing are NOT approved for use in Canada (Public Health Agency of Canada).',
  },
  {
    question: 'How long do Thermacell refills last?',
    answer: 'Thermacell mat refills last 4 hours each. The fuel cartridge (for fuel-powered models like Patio Shield) lasts 12 hours. Rechargeable models (E55, E90) hold a 5.5–9 hour charge per battery. A standard 3-pack of mat refills (12 hours total) is enough for one weekend of evening BBQs. Heavy summer users with frequent gatherings should buy the 36-hour 9-pack for cost efficiency.',
  },
  {
    question: 'Can I use Thermacell against blackflies in Ontario?',
    answer: 'Don\'t count on it. The Thermacell products registered in Canada carry a mosquito claim — Health Canada\'s RD2019-03 registers the fuel-powered line as an "area repellent device to kill and repel mosquitos," and blackflies are not on that registered claim. Users often report some incidental effect on blackflies, but it is not a claim the manufacturer makes on the Canadian label and it is weaker than the mosquito effect: blackflies are smaller and fly aggressively into the zone, particularly in cottage country (Muskoka, Algonquin, Haliburton). For blackflies in northern Ontario, a head net is the reliable answer during the May–June peak. In the GTA proper, blackflies are not typically a concern — only pockets along the Niagara Escarpment edge see meaningful populations.',
  },
  {
    question: 'Does Thermacell work for large yards or just patios?',
    answer: 'The 4.5-metre working distance Health Canada registered (RD2019-03) makes Thermacell ideal for patios, decks, and small gathering spaces but inadequate for an entire backyard (3,000–10,000 sq ft on a typical GTA lot). One device covers roughly 65 sq m (about 700 sq ft) at that distance in dead-calm air, so a whole yard would take somewhere between four and fifteen units running at once — and far more than that once wind is in play. For whole-yard protection, a professional barrier spray applied to vegetation surfaces gives 21–30 days of residual coverage across the treated area at a far lower cost per square foot. Most GTA homeowners use Thermacell for the immediate seating area combined with professional yard spray for area coverage.',
  },
  {
    question: 'Are Thermacell refills the same in Canada as the USA?',
    answer: 'Physically yes, chemically not always. The mats, cartridges and butane fuel cartridges use the same form factors on both sides of the border, so a device bought in the US will accept a refill bought in Canada. But the active ingredient can differ: Thermacell states its fuel-powered repellers use "d-allethrin or Prallethrin," and the Canadian fuel-powered line was registered by Health Canada under RD2019-03 with 1R-trans prallethrin, while the rechargeable E-Series uses metofluthrin. Buy the Canadian-labelled refill — it is the one registered for sale and use in Canada under the Pest Control Products Act, and it carries the PCP registration number and the Canadian directions you are legally meant to follow.',
  },
  {
    question: 'Should I get the Thermacell Liv smart system or a basic Patio Shield?',
    answer: 'In Canada that choice doesn\'t exist — Thermacell states the Liv Smart Mosquito Repellent System is sold in the United States only, and no Liv product appears among the 23 Thermacell products registered in Health Canada\'s Pesticide Product Information Database, so Canadian retailers don\'t stock it. For occasional weekend use on a patio, the basic Patio Shield / Fuel-ZoneGuard is the cheapest way in. For set-it-and-forget-it evenings without swapping fuel cartridges, the rechargeable E90 is the closest Canadian equivalent — about 9 hours per charge. For camping and travel, the rechargeable E55 hits the sweet spot.',
  },
  {
    question: 'What is the best Thermacell to buy in Canada in 2026?',
    answer: 'The best Thermacell for most GTA homeowners is the rechargeable E55 — Thermacell and Canadian Tire both describe it as a 20-foot (6 m) zone, it runs about 5.5 hours on a charge, and it skips the fuel cartridge of the older Patio Shield. If you want the longest runtime, the E90 roughly doubles the battery to ~9 hours — it is the premium pick available in Canada, since the Liv Smart System is sold in the US only. For the cheapest entry point, the Patio Shield / Fuel-ZoneGuard still works well for casual patio dinners. Availability varies by chain: we found the E55 listed at Canadian Tire and MEC, the Patio Shield at Home Depot Canada and Bass Pro Canada, and the E90 at Walmart Canada, Best Buy Canada and Amazon.ca. Check your retailer before you drive out.',
  },
  {
    question: 'Thermacell E55 vs E90 — what is the difference?',
    answer: 'The E55 and E90 are Thermacell\'s two flagship rechargeable repellers and both are described as a 20-foot (6 m) zone running on the same E-Series liquid cartridges. Those cartridges are metofluthrin, not the allethrin used in the older fuel-powered mats — Thermacell states "our rechargeable platform repellent cartridges use metofluthrin as the repellent active ingredient." Metofluthrin is registered for outdoor mosquito repellent use in Canada by Health Canada\'s PMRA. The difference between the two models is runtime and build: the E55 runs about 5.5 hours per charge; the E90 runs about 9 hours in a more rugged housing and sits higher in the range. Pick the E55 for weekend patios and camping; pick the E90 if you host long evenings and don\'t want to recharge mid-gathering.',
  },
  {
    question: 'Can you use Thermacell indoors?',
    answer: 'No. Thermacell states plainly that "Thermacell products are not intended for indoor use," and the products Health Canada registered here are registered as outdoor area repellents. The device relies on open-air pyrethroid vapour dispersing around you, and the fuel-burning models add a combustion hazard indoors. Use it on patios, decks, docks, campsites, and open-sided gazebos — not inside living rooms, bedrooms, tents, garages, or sealed sunrooms.',
  },
  {
    question: 'How much are Thermacell refills in Canada?',
    answer: 'Refills are the cheap part of owning a Thermacell, but the cost per hour differs sharply by family, and that — not the sticker — is what to compare. The fuel-powered line runs on 4-hour mats plus a 12-hour butane cartridge, so you are buying two consumables. The rechargeable E-Series runs on a single liquid cartridge rated at roughly 40 hours with no fuel at all, which is why it usually works out cheaper per evening despite the higher price on the device. Canadian Tire, Home Depot Canada, Costco and Amazon.ca all carry refills; buy in spring, because supply thins out during the June–July peak. Prices move week to week and by retailer, so check the current listing rather than any figure published on a blog.',
  },
]

export const metadata: Metadata = buildMetadata({
  // "thermacell canadian tire" (6.4K impr, pos 7.6) is retailer-owned intent —
  // canadiantire.ca wins that click and no description changes that. This one
  // serves the adjacent, winnable job: price-checking across retailers before
  // driving to a store. Leads with the three model prices, names the retailers
  // the page actually tabulates, and flags the Liv (US-only) gotcha.
  title: 'Thermacell Canada: E55 vs E90 vs Patio Shield',
  description: 'Thermacell Canada prices: Patio Shield $35-$50, E55 $70-$90, E90 $90-$120. Sold at Canadian Tire, Home Depot, Rona & MEC. Refills $15-$22. Liv is US-only.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('thermacell-canada-where-to-buy')

export default function ThermacellCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 guide to Thermacell mosquito repellers in Canada.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Thermacell Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Thermacell Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Which models Canada actually gets, how the pyrethroid vapour technology really repels mosquitoes, and where it falls short for GTA yards.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Thermacell E90 Rechargeable Mosquito Repeller" search="thermacell e90 rechargeable mosquito repeller" label="Top Canadian pick" />

      {/* ANSWER CAPSULE */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For most GTA backyards the rechargeable Thermacell E90 is the strongest model you can actually buy in Canada &mdash; Thermacell sells the Liv smart system in the United States only, and no Liv product is registered with Health Canada. Thermacell devices and refills are carried across Canadian Tire, Home Depot, Bass Pro/Cabela&rsquo;s, MEC, Walmart, Best Buy and Amazon.ca, though which model each chain stocks moves year to year. Buy refills in spring before June&ndash;July supply runs low.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Two different actives: the fuel-powered Patio Shield line uses allethrin or prallethrin; the rechargeable E55/E90/EX90 use metofluthrin.</li>
              <li>Health Canada (RD2019-03) registers the Canadian fuel-powered line to repel mosquitoes up to 4.5 metres from the device for up to 4 hours.</li>
              <li>Published field trials of these emanators report roughly 70&ndash;95% bite reduction in still air. BuzzSkito does not test consumer products.</li>
              <li>Effectiveness drops 50%+ in moderate wind, and the Canadian label carries a mosquito claim &mdash; not a blackfly one.</li>
              <li>Covering a 3,000&ndash;10,000 sq ft GTA yard would need roughly 4&ndash;15 units running at once.</li>
              <li>One professional barrier spray from $99 protects the whole yard for 21&ndash;30 days.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
          <TopPick tag={AMZ_TAG}
            label="Our Canadian Pick"
            name="Thermacell E90 Rechargeable"
            blurb="The top Thermacell you can actually buy in Canada — roughly 9 hours per charge, enough to outlast a full backyard evening without a mid-party recharge (the Liv smart system is US-only)."
            search="thermacell e90 rechargeable mosquito repeller"
            score={8.6}
            pros={['Longest runtime of the Canadian lineup (~9 hrs)', 'No fuel cartridge — rechargeable and hands-off', 'Rugged build for all-evening hosting']}
            cons={['Premium end of the Thermacell range', 'Only covers the seating zone, not the whole yard']}
          />
        </div>
      </section>

      {/* WHERE TO BUY */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy Thermacell in Canada</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Thermacell Canada: Which Chain Carries What</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Thermacell is widely carried across Canada, but the lineup is not identical at every chain and it shifts season to season — Thermacell renamed the families in 2026 (Patio Shield became <em>Fuel-ZoneGuard</em>, the E-Series became <em>E-ZoneGuard</em>), so you will see both sets of names on shelves. We deliberately do not publish a price table: retail pricing moves week to week and a stale table is worse than none. Check the retailer&rsquo;s own listing before you drive out. One caveat worth knowing: the premium <strong>Liv Smart System is not sold in Canada</strong> — Thermacell states it is available in the United States only, and a search of Health Canada&rsquo;s Pesticide Product Information Database returns 23 registered Thermacell products, none of which is Liv. That makes the rechargeable E90 the top model Canadians can actually buy.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">What we found listed</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Canadian Tire',      has: 'E55 (several colourways), rechargeable refills, older Radius/MR300 stock', best: 'Widest walk-in availability of the rechargeables' },
                  { name: 'Home Depot Canada',  has: 'Fuel-ZoneGuard / Patio Shield fuel-powered units and refills',            best: 'Entry-level fuel-powered patio units' },
                  { name: 'RONA / RONA+',       has: 'Seasonal Thermacell assortment',                                          best: 'Garden-centre pickup (the Lowe\'s Canada banner ended Feb 2024)' },
                  { name: 'Bass Pro / Cabela\'s Canada', has: 'Backpacker and Patio Shield portables',                         best: 'Camping, hunting, portable models' },
                  { name: 'MEC',                has: 'E55, EX90, Backpacker, Patio Shield, refills',                            best: 'Backcountry and rugged EX90' },
                  { name: 'Walmart · Best Buy · Amazon.ca', has: 'E90 rechargeable and E-Series refills',                       best: 'The E90 specifically' },
                ].map(({ name, has, best }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 text-gray-800">{has}</td>
                    <td className="px-4 py-3 text-gray-700">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Retailer assortments checked against each chain&rsquo;s own online listings; stock varies by store and by season, so treat this as a starting point rather than a guarantee. We do not publish retail prices here — they go stale faster than we can update them. The Liv Smart System does not appear because Thermacell sells it in the United States only and it is not among the Thermacell products registered with Health Canada.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Thermacell only protects a 4.5-metre zone around the device.</strong> That is Health Canada&rsquo;s own registered figure, from Registration Decision RD2019-03: an area repellent device to kill and repel mosquitoes &ldquo;in an area up to 4.5 metres from the device for up to 4 hours.&rdquo; For a full GTA backyard (3,000&ndash;10,000 sq ft) you&rsquo;d need roughly 4&ndash;15 units running constantly — which costs more than a single <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> treatment that protects your entire property for 21–30 days. Most homeowners use Thermacell on the deck and barrier spray for the yard.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Do Thermacell repellers actually work in Canadian backyards?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Yes — Thermacell works in still air. Health Canada registered the Canadian fuel-powered line (RD2019-03) to kill and repel mosquitoes up to 4.5 metres from the device for up to 4 hours, and published field trials of these heated-pyrethroid emanators report roughly 70–95% bite reduction in calm conditions.</strong> The vapour is allethrin or prallethrin in the fuel-powered models and metofluthrin in the rechargeable E-Series. Performance drops sharply in wind, on open lawns, or near stagnant water, and the Canadian registration covers mosquitoes — not blackflies. Best for patios, decks, and small gathering spots — NOT whole-yard protection. For a typical GTA 5,000 sq ft yard you&rsquo;d need something like seven units running simultaneously — which costs more than professional barrier spray that covers the entire yard for 21–30 days.
          </p>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Thermacell Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Active ingredient — fuel-powered', 'd-Allethrin or 1R-trans prallethrin (synthetic pyrethroids)'],
                  ['Active ingredient — rechargeable', 'Metofluthrin (E-Series liquid cartridges)'],
                  ['Registered working distance', 'Up to 4.5 m from the device (Health Canada RD2019-03)'],
                  ['Effective area', '~65 sq m (~700 sq ft) in dead-calm air'],
                  ['Mat refill duration', '4 hours each'],
                  ['Fuel cartridge duration', '12 hours (Patio Shield / Fuel-ZoneGuard)'],
                  ['Rechargeable battery', '5.5–9 hours (E55, E90, EX90)'],
                  ['Effectiveness', '~70–95% bite reduction in still air (published field trials)'],
                  ['Wind sensitivity', 'High — drops 50%+ in moderate wind'],
                  ['Registered pest claim', 'Mosquitoes (blackflies are not on the Canadian label)'],
                  ['Use site', 'Outdoors only — Thermacell: not intended for indoor use'],
                  ['Toxic to', 'Fish, aquatic invertebrates AND bees — Health Canada calls metofluthrin "highly toxic" to all three'],
                  ['Label hazard statement', '"Caution Poison" — keep away from children'],
                  ['Health Canada status', 'Registered under the Pest Control Products Act (23 Thermacell products; Liv is not one of them)'],
                  ['Best use case', 'Patios, decks, small gathering spaces'],
                  ['Not recommended for', 'Whole-yard protection, windy locations, indoor use'],
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
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian prices (Patio Shield, E55, E90) and refill packs:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="thermacell patio shield mosquito repeller">Check Thermacell price on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="thermacell refill">Refill packs →</BuyLink>
          </div>

          <h2>Best Thermacell Models in Canada (2026 Comparison)</h2>
          <p>Thermacell sells three main mosquito repellers in Canada: the entry-level <strong>Patio Shield</strong> (now also branded Fuel-ZoneGuard) and the two rechargeable flagships <strong>E55</strong> and <strong>E90</strong>, with the rugged <strong>EX90</strong> alongside them. The premium <strong>Liv Smart System</strong> you may see in US reviews is <strong>not sold in Canada</strong> — Thermacell states it is available in the United States only, and no Liv product appears among the 23 Thermacell products registered in Health Canada&rsquo;s Pesticide Product Information Database, so no Canadian retailer stocks it. The two families are also chemically different, which is worth knowing before you buy refills: the Patio Shield runs on Original mats using allethrin or prallethrin, while the E55 and E90 use E-Series liquid cartridges whose active ingredient is <strong>metofluthrin</strong> — Thermacell&rsquo;s own words are &ldquo;our rechargeable platform repellent cartridges use metofluthrin as the repellent active ingredient.&rdquo; Both actives are registered for outdoor mosquito use in Canada by Health Canada&rsquo;s PMRA. The practical differences are coverage, runtime, and how hands-off you want to be. Here is how each stacks up, with a live Amazon.ca price check per model.</p>
          <div className="not-prose my-5 overflow-x-auto rounded-xl border border-navy-100 shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-3 py-3 text-left">Model</th>
                  <th className="px-3 py-3 text-left">Active ingredient</th>
                  <th className="px-3 py-3 text-left">Coverage</th>
                  <th className="px-3 py-3 text-left">Runtime / power</th>
                  <th className="px-3 py-3 text-left">Best for</th>
                  <th className="px-3 py-3 text-left">Check price on Amazon.ca</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-3 py-3 font-bold text-brand-800">Patio Shield<br /><span className="text-xs font-normal text-gray-500">(Fuel-ZoneGuard)</span></td>
                  <td className="px-3 py-3 text-gray-700">Allethrin / prallethrin mat</td>
                  <td className="px-3 py-3 text-gray-700">Up to 4.5 m from device (Health Canada RD2019-03)</td>
                  <td className="px-3 py-3 text-gray-700">12-hr fuel cartridge</td>
                  <td className="px-3 py-3 text-gray-700">Cheapest pick · casual patio dinners</td>
                  <td className="px-3 py-3"><BuyLink tag={AMZ_TAG} search="thermacell patio shield" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-3 py-3 font-bold text-brand-800">E55 Rechargeable</td>
                  <td className="px-3 py-3 text-gray-700">Metofluthrin cartridge</td>
                  <td className="px-3 py-3 text-gray-700">20-ft (6 m) zone, per Thermacell &amp; Canadian Tire</td>
                  <td className="px-3 py-3 text-gray-700">~5.5 hr rechargeable</td>
                  <td className="px-3 py-3 text-gray-700">Best all-rounder · camping &amp; travel</td>
                  <td className="px-3 py-3"><BuyLink tag={AMZ_TAG} search="thermacell e55 rechargeable mosquito repeller" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-3 py-3 font-bold text-brand-800">E90 Rechargeable</td>
                  <td className="px-3 py-3 text-gray-700">Metofluthrin cartridge</td>
                  <td className="px-3 py-3 text-gray-700">20-ft (6 m) zone, per Thermacell</td>
                  <td className="px-3 py-3 text-gray-700">~9 hr rechargeable · rugged build</td>
                  <td className="px-3 py-3 text-gray-700">Longest runtime · all-evening hosting</td>
                  <td className="px-3 py-3"><BuyLink tag={AMZ_TAG} search="thermacell e90 rechargeable mosquito repeller" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-3 py-3 font-bold text-brand-800">Liv Smart System</td>
                  <td className="px-3 py-3 text-gray-700">US EPA-registered; no Canadian registration</td>
                  <td className="px-3 py-3 text-gray-700">Thermacell claims ~315 sq ft per repeller pod, multiple pods per system</td>
                  <td className="px-3 py-3 text-gray-700">Plug-in · app-scheduled smart pods</td>
                  <td className="px-3 py-3 text-gray-700"><strong>Not sold in Canada.</strong> Thermacell: United States only; no Liv product among the 23 Thermacell products registered with Health Canada</td>
                  <td className="px-3 py-3 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="not-prose text-sm text-gray-600 mb-6"><strong>Bottom line:</strong> the <strong>E55</strong> is the best Thermacell for most GTA backyards; step up to the <strong>E90</strong> for longer evenings — our <Link href="/blog/thermacell-e90-canada-review">Thermacell E90 Canada guide</Link> goes deeper on runtime and where it earns the upgrade. Skip searching for the Liv: it is not sold in Canada. Whichever you pick, it covers where you sit — not the whole yard. For full-property coverage, pair it with <Link href="/mosquito-control">professional barrier spray</Link>.</p>

          <h2>Thermacell Refills in Canada: What Fits What</h2>
          <p>Every Thermacell model runs on inexpensive refills, but they are not one family and they are not one chemical. The fuel-powered line uses mats — allethrin or prallethrin, with the Canadian units registered by Health Canada under RD2019-03 as 1R-trans prallethrin — plus a separate butane cartridge. The rechargeable E-Series uses a single liquid cartridge whose active is metofluthrin. The form factors match the US versions, so a pack bought at Canadian Tire will fit a device you brought back from the States; buy the Canadian-labelled refill, since that is the one registered for sale and use in Canada. Here is how the families compare:</p>
          <div className="not-prose my-5 overflow-x-auto rounded-xl border border-navy-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-3 py-3 text-left">Refill type</th>
                  <th className="px-3 py-3 text-left">Protection</th>
                  <th className="px-3 py-3 text-left">Active ingredient</th>
                  <th className="px-3 py-3 text-left">Fits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50"><td className="px-3 py-3 text-gray-700">Mat refill 3-pack</td><td className="px-3 py-3 text-gray-700">12 hours (4 hrs per mat)</td><td className="px-3 py-3 text-gray-700">Allethrin / 1R-trans prallethrin</td><td className="px-3 py-3 text-gray-700">Fuel-powered only</td></tr>
                <tr className="border-b border-navy-50"><td className="px-3 py-3 text-gray-700">12-hour fuel cartridge (Patio Shield)</td><td className="px-3 py-3 text-gray-700">12 hours</td><td className="px-3 py-3 text-gray-700">Butane — fuel, not repellent</td><td className="px-3 py-3 text-gray-700">Fuel-powered only</td></tr>
                <tr className="border-b border-navy-50"><td className="px-3 py-3 text-gray-700">36-hour mega value pack</td><td className="px-3 py-3 text-gray-700">36 hours</td><td className="px-3 py-3 text-gray-700">Allethrin / 1R-trans prallethrin</td><td className="px-3 py-3 text-gray-700">Fuel-powered only</td></tr>
                <tr><td className="px-3 py-3 text-gray-700">E-Series liquid cartridge (E55/E90/EX90)</td><td className="px-3 py-3 text-gray-700">~40 hours</td><td className="px-3 py-3 text-gray-700">Metofluthrin</td><td className="px-3 py-3 text-gray-700">Rechargeables only</td></tr>
              </tbody>
            </table>
          </div>
          <p className="not-prose mb-2 text-sm text-gray-600">Amazon.ca stocks bulk refill multi-packs — buy in spring before the June–July markup:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="thermacell mosquito repellent refill value pack">Check refill prices on Amazon.ca →</BuyLink>
          </div>
          <p>Getting the refill family right matters — E-Series cartridges will not fit a Patio Shield, and Original mats will not fit an E55 or E90. For a full breakdown of which refill fits which model, cost per hour, and how to recharge the batteries, see our <Link href="/blog/thermacell-refills-recharge-canada">Thermacell refills &amp; recharge Canada guide</Link>.</p>

          <h2>Which Thermacell Should Canadians Buy in 2026?</h2>
          <p>With the Liv off the table for Canadians, the real 2026 decision comes down to the three rechargeables: <strong>E55 vs E90 vs EX90</strong>. All three protect the same 20-foot zone, run on the same E-Series liquid cartridges, and need zero butane — the differences are battery, build, and who they suit.</p>
          <ul>
            <li><strong>E55 — the default pick.</strong> Lightest of the three, about 5.5 hours per charge. Ideal for patio dinners, weekend camping, and anyone buying their first Thermacell.</li>
            <li><strong>E90 — the long-evening pick.</strong> Roughly 9 hours per charge, so it comfortably outlasts a full backyard gathering without a mid-party recharge. Our <Link href="/blog/thermacell-e90-canada-review">Thermacell E90 Canada review</Link> covers real-world runtime and where it earns the upgrade over the E55.</li>
            <li><strong>EX90 — the rugged pick.</strong> Same 9-hour battery as the E90 in a tougher, water-resistant housing with a lanyard loop. Built for cottage docks, canoe trips, hunting, and anywhere a patio unit would get knocked around.</li>
          </ul>
          <p className="not-prose mb-6"><BuyLink tag={AMZ_TAG} search="thermacell ex90 rechargeable mosquito repeller">Check EX90 availability on Amazon.ca →</BuyLink></p>
          <p>Simple rule of thumb: E55 for the patio table, E90 for long hosting evenings, EX90 for the cottage and backcountry. Whichever you choose, stock up on E-Series cartridges in spring — our <Link href="/blog/thermacell-refills-recharge-canada">refills &amp; recharge guide</Link> shows the cheapest way to buy them in Canada.</p>

          <h2>How Thermacell Actually Works</h2>
          <p>Thermacell devices warm a small mat or liquid cartridge holding a synthetic pyrethroid — a lab-made relative of the natural insecticide found in chrysanthemum flowers. On the fuel-powered models a butane cartridge heats a mat of allethrin or prallethrin; on the rechargeable E-Series a battery warms a metofluthrin cartridge. Either way the heat releases a vapour into the air around the device, and mosquitoes flying through the cloud are repelled — and at higher concentrations killed, which is how Health Canada worded the registered claim in RD2019-03 (&ldquo;kill and repel mosquitos&rdquo;). The vapour is essentially undetectable to humans at normal concentrations, but it is still a registered pesticide: the Canadian label carries a &ldquo;Caution Poison&rdquo; hazard statement, and Health Canada notes metofluthrin is highly toxic to fish, aquatic invertebrates and bees.</p>
          <p>Two things matter for performance: <strong>still air and proximity</strong>. Health Canada registered the Canadian fuel-powered line for an area &ldquo;up to 4.5 metres from the device for up to 4 hours&rdquo; — that works out to roughly 65 sq m, about 700 sq ft, and only in dead-calm conditions. In a 10–15 km/h breeze, the vapour disperses faster than it can build up, dropping effectiveness by 50% or more.</p>

          <InlineYardRiskCTA variant="emerald" pretext="Free 60-second tool · 1-100 score by address" />

          <h2>When Thermacell Is the Right Tool</h2>
          <ul>
            <li><strong>Sheltered patios and decks</strong> — wind-protected by walls or fencing</li>
            <li><strong>Small backyard seating areas</strong> (under 200 sq ft)</li>
            <li><strong>Camping and tailgating</strong> — easy portability with rechargeable models</li>
            <li><strong>Outdoor dining tables</strong> — set one beside the table during dinner</li>
            <li><strong>Hot tub and pool deck areas</strong> — short-duration use</li>
            <li><strong>Cottage docks at sundown</strong> — works well in calm evenings</li>
          </ul>

          <h2>When Thermacell Falls Short</h2>
          <ul>
            <li><strong>Whole-yard protection</strong> — too small a coverage radius</li>
            <li><strong>Windy locations</strong> — Lake Ontario waterfront patios with consistent breezes, which is why lakefront lots on our <Link href="/oakville-mosquito-control">Oakville mosquito control</Link> and <Link href="/burlington-mosquito-spray">Burlington mosquito spray</Link> routes do better with a residual barrier treatment than with a vapour zone the wind carries away</li>
            <li><strong>Open lawns away from a single seating point</strong></li>
            <li><strong>Yards backing onto ravines or creeks</strong> — mosquito pressure overwhelms the small repellent zone, a recurring pattern on the ravine lots we treat with <Link href="/vaughan-mosquito-control">mosquito control in Vaughan</Link></li>
            <li><strong>Tick protection</strong> — a Thermacell repeller does nothing for ticks (they don&rsquo;t fly). Thermacell&rsquo;s separate Tick Control Tubes are a different product entirely, registered with Health Canada as PCP 33858</li>
            <li><strong>Daytime backyard use</strong> — pollinators are foraging; better to wait until evening</li>
          </ul>

          <h2>Thermacell vs Other Mosquito Solutions in Canada</h2>
          <table className="min-w-[560px] not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Solution</th><th className="px-3 py-2 text-left">Coverage</th><th className="px-3 py-2 text-left">Relative cost</th><th className="px-3 py-2 text-left">Best for</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Thermacell Patio Shield</strong></td><td className="px-3 py-2">Up to 4.5 m from the device (Health Canada RD2019-03)</td><td className="px-3 py-2">Low up-front, ongoing refills</td><td className="px-3 py-2">Patio dinners</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">DEET / icaridin spray</td><td className="px-3 py-2">Skin only</td><td className="px-3 py-2">Lowest</td><td className="px-3 py-2">Walking, hiking</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Citronella candles</td><td className="px-3 py-2">~1m</td><td className="px-3 py-2">Lowest</td><td className="px-3 py-2">Ambiance only — limited efficacy</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/mosquito-dunks-canada-guide">Mosquito dunks (BTI)</Link></td><td className="px-3 py-2">Standing water only</td><td className="px-3 py-2">Low per season</td><td className="px-3 py-2">Rain barrels, ponds</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">Entire property</td><td className="px-3 py-2">From $99 per treatment (BuzzSkito)</td><td className="px-3 py-2">Whole-yard, 21–30 days</td></tr>
            </tbody>
          </table>

          <h2>The Smart GTA Mosquito Strategy</h2>
          <p>The most effective mosquito control for GTA backyards stacks three layers:</p>
          <ol>
            <li><strong>Eliminate breeding sites</strong> — drain standing water, treat unavoidable sources with <Link href="/blog/mosquito-dunks-canada-guide">BTI dunks</Link></li>
            <li><strong>Whole-yard barrier spray</strong> — <Link href="/mosquito-control">BuzzSkito&rsquo;s seasonal program</Link> applies a Health Canada-registered product to vegetation under Ontario Pesticide Operator Licence L-240-2436835197, providing 21–30 days of residual coverage across your entire property</li>
            <li><strong>Personal protection at the seating point</strong> — Thermacell on the deck gives you a final repellent zone where you actually sit, plus DEET/Picaridin if you walk into the yard at dusk</li>
          </ol>
          <p>This stacked approach is what most experienced GTA outdoor entertainers run — Thermacell alone is rarely enough for a yard that backs onto ravines, water features, or conservation lands.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/thermacell-e90-canada-review">Thermacell E90 Canada Review — Runtime, Coverage &amp; Refills</Link></li>
            <li><Link href="/blog/thermacell-refills-recharge-canada">Thermacell Refills &amp; Recharge Canada — Costs + Compatibility</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada — Where to Buy + How They Work</Link></li>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Mosquito Repellent Guide — Ontario 2026</Link></li>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — What Actually Works</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="group rounded-xl border border-navy-100 bg-white p-4">
              <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
                {question}
                <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>

        </div>
      </article>

      <CTASection heading="Thermacell Covers the Patio · Barrier Spray Covers the Yard" subtext="Get a free quote for whole-yard barrier spray. From $99. Health Canada approved. 30-day residual." variant="dark" />
    </>
  )
}
