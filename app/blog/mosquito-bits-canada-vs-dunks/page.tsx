import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AmazonLink from '@/components/AmazonLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import QuickIdTable from '@/components/QuickIdTable'
import { tagForSlug } from '@/lib/amazon-clusters'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'

const SLUG = 'mosquito-bits-canada-vs-dunks'
const DATE = '2026-05-01'
// Oct 23, 2026: Health Canada's pesticide registry (searched through its API) lists no Mosquito Bits, so the answer-first hero, the
// where-to-buy copy, the legal section and 11 FAQ answers now say so; new table of the domestic larvicides the registry does list
// (Dunks 28888, AquaBac 200G 27374, My-Crobe 200G 34631, Doktor Doom 34197) quoting their Canadian labels; fungus gnat label caveat; 3 FAQs.
const UPDATED = '2026-10-23'
const TITLE = 'Mosquito Bits vs Dunks (Canada 2026): Kills Larvae Faster'
// TITLE NOTE (Oct 23, 2026): was 'Mosquito Bits Canada 2026: vs Dunks + Prices' (the page publishes no prices); top queries (Jul 23-Oct 20):
// mosquito bits 7,360 @ 6.1, mosquito bits canada 1,929 @ 3.1, mosquito bits banned in canada 115 @ 3.0 (413 clicks on 23,988 impressions).
// The registry has no Mosquito Bits, so the title answers that. Sibling /blog/mosquito-dunks-canada-guide keeps "mosquito dunks canada".
const META_TITLE = 'Mosquito Bits Canada: Not Registered + Legal BTI'

const FAQS = [
  {
    question: 'What are mosquito bits?',
    answer: 'Mosquito Bits are small corn-cob granules coated with BTI (Bacillus thuringiensis subspecies israelensis) — the same naturally-occurring bacterial larvicide found in mosquito dunks, but in a fast-release format. Sprinkle the bits onto standing water and BTI is released into the water within minutes, killing mosquito larvae within 24 hours. At Summit’s label rate of 4 oz per 1,000 sq ft in relatively clean water, an 8-oz container treats roughly 2,000 sq ft of water surface — about half that in deep or organic-heavy water, which calls for the higher 8 oz per 1,000 sq ft rate. Those figures come from Summit’s U.S. label: Health Canada’s pesticide registry lists no Mosquito Bits, so in Canada the registered BTI options for homeowners are Mosquito Dunks (Reg. No. 28888) and the AquaBac 200G and My-Crobe 200G granules (Reg. No. 27374 and 34631).',
  },
  {
    question: 'Where to buy mosquito bits in Canada?',
    answer: 'Summit Mosquito Bits are not legally for sale in Canada. Health Canada’s pesticide registry, searched on October 23, 2026, lists no product of that name, and the Pest Control Products Act says “No person shall manufacture, possess, handle, store, transport, import, distribute or use a pest control product that is not registered under this Act” (section 6(1), with narrow exceptions). What you can buy here is the same BTI as Mosquito Dunks (Reg. No. 28888), or a domestic-class BTI granule: AquaBac 200G (Reg. No. 27374) or My-Crobe 200G (Reg. No. 34631). Check the registration number on the package, and check stock by postal code, because BTI is a seasonal line that thins out from mid-June onward.',
  },
  {
    question: 'Mosquito Bits vs Mosquito Dunks — which should I use?',
    answer: 'Same active ingredient (BTI), different release speed, but in Canada only one of them is registered. Use DUNKS (Reg. No. 28888) for long-term water sources (rain barrels, ornamental ponds, decorative water features); the Canadian label says to reapply at 30-day intervals if larvae are detected. Bits have no Canadian registration, so where you would reach for Bits, use a registered BTI granule, AquaBac 200G (Reg. No. 27374) or My-Crobe 200G (Reg. No. 34631), whose labels say "Allow 24 hours for maximum effect on larvae"; a bird bath or outdoor pet dish needs fresh water twice a week (Health Canada), not a product. Bits release their BTI within about 30 minutes while dunks release theirs slowly; on Summit\'s U.S. labelling, bits give 7–14 days of control versus about 30 days for a dunk.',
  },
  {
    question: 'How much do mosquito bits cost in Canada?',
    answer: 'We do not publish a price, for two reasons. Larvicide pricing moves with the season and with shortages (the June 2026 national dunk shortage is the obvious example), so any precise figure written here goes stale fast and a stale price is worse than no price. And for a Canadian buyer there is no legitimate shelf price to quote: Health Canada’s pesticide registry lists no Mosquito Bits. For the same BTI, compare Mosquito Dunks (Reg. No. 28888) on unit price at homedepot.ca, canadiantire.ca, rona.ca or your local garden centre, or ask for the registered AquaBac 200G or My-Crobe 200G granules.',
  },
  {
    question: 'Are mosquito bits safe for pets, kids, fish, and pollinators?',
    answer: 'The honest answer is to follow the label rather than rely on a blanket promise. The active ingredient (BTI) is a naturally-occurring soil bacterium whose proteins act on the larvae of mosquitoes, black flies and a few related midges once the larvae eat it. On drinking water specifically, Health Canada’s PMRA states that no product containing Bti may be applied to treated, finished drinking water for human consumption — while separately stating it has no human health and safety concerns about applying registered Bt products to bodies of water that will be used for human consumption. In Canada, Bits have no registration, so use a registered BTI product, only on the water sites its label lists, and store the container out of reach of children and pets as you would any pesticide, especially granules, which can look a lot like cereal.',
  },
  {
    question: 'How fast do mosquito bits work?',
    answer: 'Mosquito Bits are the fast-release BTI format: the corn-cob granules absorb water and start releasing BTI within about 30 minutes. Larvae have to eat the BTI for it to work, so the kill is not instant — Summit rates full larvae kill in treated water within 24 hours on the product label. Dunks carry the same BTI in a slow-release tablet, labelled for roughly 30 days of coverage versus 7–14 days for Bits.',
  },
  {
    question: 'Can I use mosquito bits in my rain barrel?',
    answer: 'In the U.S. you can (Bits have no Canadian registration), but mosquito DUNKS are better for rain barrels because they last 30 days vs bits lasting 7–14 days. On the Canadian label, a quarter of a dunk treats a rain barrel (its 0.1 to 3.0 sq. metre row), reapplied at 30-day intervals if larvae are detected. With bits, you\'d need to re-apply every 1–2 weeks. In Canada, use the dunk: for larvae you discover unexpectedly, tip the water out if you can, or use a registered BTI granule (AquaBac 200G or My-Crobe 200G) where its label allows; the Canadian labels exclude water that drains off your property, such as rain gutters, and a pet bowl needs fresh water, not a larvicide.',
  },
  {
    question: 'Do mosquito bits work in a swimming pool?',
    answer: 'Only in a NEGLECTED pool with standing rainwater (no chlorine). Bits and dunks are not designed for active chlorinated swimming pools — the chlorine kills mosquito larvae anyway, and pool filtration removes the BTI-coated corn-cob granules. If your pool has been sitting unused with rainwater for weeks, drain or refill it; in Canada Bits are not registered, so any larvicide you add must be a registered product whose label covers that water (check the PCP number: some Canadian larvicide labels rule out pools).',
  },
  {
    question: 'How long do mosquito bits last in storage?',
    answer: 'Sealed Mosquito Bits last 2–3 years in a cool, dry storage location. Once opened, they last 1 full year if kept dry and sealed (re-seal the container after each use). Moisture activates the BTI prematurely, so don\'t leave the container open in a humid garden shed all summer. In Canada the size question does not arise, because Bits have no Canadian registration; the registered Mosquito Dunks label says to use them within one year from the date of manufacture.',
  },
  {
    question: 'Where can I buy BTI for mosquitoes near me in Canada?',
    answer: 'Look for the registration number rather than the brand. The domestic-class BTI products in Health Canada’s pesticide registry are Mosquito Dunks (Reg. No. 28888) and two granules, AquaBac 200G (Reg. No. 27374) and My-Crobe 200G (Reg. No. 34631); Mosquito Bits are not among them. To find local stock fast, search the product name on a retailer\'s own website and check availability by postal code, and buy in April–May before peak-season shelves thin out.',
  },
  {
    question: 'What is BTI (Bacillus thuringiensis israelensis)?',
    answer: 'BTI (Bacillus thuringiensis israelensis) is a naturally occurring soil bacterium used as a biological larvicide. When mosquito or black fly larvae eat it, its proteins destroy their gut and kill them within about 24 hours. BTI is highly specific: its proteins act on the larvae of mosquitoes, black flies and a few related midges. Note that Health Canada’s PMRA does not permit any Bti product to be applied to treated, finished drinking water for human consumption, even though it raises no health concern about Bt applied to raw water bodies later used for consumption. It is the active ingredient in both Mosquito Bits and Dunks.',
  },
  {
    question: 'Are mosquito dunks the same as mosquito bits?',
    answer: 'Mosquito Dunks and Mosquito Bits contain the same active ingredient — BTI — but come in different formats. Dunks are slow-release donut tablets that protect standing water for about 30 days, ideal for rain barrels and ponds. Bits are corn-cob granules that release BTI within about 30 minutes for fast knockdown but last only 7–14 days; they have no Canadian registration, so in Canada the granule options are AquaBac 200G and My-Crobe 200G. They kill the same larvae; you choose based on how fast and how long you need coverage.',
  },
  {
    question: 'Why do people think mosquito bits are banned in Canada?',
    answer: 'Because in practice they are not allowed here, though not through a ban on BTI. BTI is registered in Canada in products such as Mosquito Dunks (Reg. No. 28888), but every product needs its own registration, and Health Canada’s pesticide registry lists no Mosquito Bits. The Pest Control Products Act says “No person shall manufacture, possess, handle, store, transport, import, distribute or use a pest control product that is not registered under this Act”, and a U.S. EPA number on the bag is not a Canadian registration. The 2026 dunk shortage added to the confusion, but that was stock, not law.',
  },
  {
    question: 'Can I put mosquito bits directly in soil?',
    answer: 'On Summit’s U.S. label, yes; in Canada, no (see the end of this answer). Fungus gnat larvae are a labelled target pest for Mosquito Bits, and there are two accepted ways to reach them. You can sprinkle the dry granules across the soil surface and water them in, which is simple but gives an uncontrolled dose and can grow surface mould in a pot that stays wet. Or you can use the soil drench on Summit\u2019s label \u2014 mix 4 tablespoons of Bits per 1 gallon of water, let it steep 30 minutes, skim off the floating granules (or steep them inside a nylon stocking), then water your plants with the treated water so the soil surface is wetted. Repeat weekly for three weeks either way, because BTI kills larvae but not eggs or flying adults, so you have to cover the full life cycle. That method is from the U.S. label: in Canada, Mosquito Bits are not registered, and the Canadian Mosquito Dunks label (Reg. No. 28888) covers mosquito larvae in water only.',
  },
  {
    question: 'Do mosquito bits work for fungus gnats?',
    answer: 'On the U.S. label, yes \u2014 fungus gnat larvae (usually Bradysia species) are listed on the Mosquito Bits label alongside mosquito and black fly larvae, and the same BTI bacterium that kills a mosquito wriggler kills a gnat larva in potting mix. It works on larvae in the soil only. The adult gnats you see flying are unaffected and need sticky traps, and the underlying cause is almost always soil kept wet for too long. Under that U.S. label, Bits suit houseplants better than Dunks because they release BTI in about 30 minutes, while a dunk is built to dissolve slowly over roughly 30 days and needs about 24 hours of steeping to make a weaker, less predictable drench. In Canada, none of the registered BTI labels we checked (Dunks 28888, AquaBac 200G 27374, My-Crobe 200G 34631) lists fungus gnats, so the tools that need no pesticide label here are the watering fix and sticky traps.',
  },
  {
    question: 'Are mosquito bits legal in Canada?',
    answer: 'Not as Summit Mosquito Bits: Health Canada\u2019s pesticide registry, searched on October 23, 2026, lists no product of that name, and the bag carries U.S. EPA Reg. No. 6218-86, which is not a Canadian registration. BTI itself is legal here in registered products: Mosquito Dunks (Reg. No. 28888) and the AquaBac 200G and My-Crobe 200G granules (Reg. No. 27374 and 34631). Every pesticide legally sold in Canada must be registered under the Pest Control Products Act, which Health Canada\u2019s Pest Management Regulatory Agency (PMRA) administers, and carry a PCP registration number on the label. A second source of confusion is the PMRA\u2019s Bti fact sheet, which states that nearly all products containing Bti are Restricted class products used to control black fly and mosquito larvae in aquatic situations where the flow of water is not confined to a small area, and that commercial class Bti products may be used only in private ponds and farm dugouts where no outflow beyond the property limits exists. Those classes govern the large-volume products licensed applicators use on open and flowing water \u2014 not the small consumer packs sold for containerized water around a home, which is about as confined to a small area as water gets. Note that the PMRA fact sheet is marked ARCHIVED (last updated 4 May 2017); to verify any specific product, look up the PCP number printed on the package in the PMRA Pesticide Label Search database. A US EPA registration number on an imported bag is not a Canadian registration.',
  },
  {
    question: 'How much mosquito bits do I use per square foot?',
    answer: 'Summit\u2019s registered label (US EPA Reg. No. 6218-86) gives the rates: 1 teaspoon per 25 sq ft of water surface, or 1 tablespoon per 75 sq ft, for small containerized water like a bird bath, bucket, or plant saucer. For larger areas, use 4 oz per 1,000 sq ft in relatively clean water, and 8 oz per 1,000 sq ft where the water is deep, polluted, heavy with organic matter, or holding large late-stage larvae \u2014 decaying leaf litter binds up BTI, so a stagnant ditch needs roughly double the dose of a clean rain barrel. Re-apply every 7 to 14 days while larvae keep appearing. The granules are 2.86% Bacillus thuringiensis subspecies israelensis (strain SUM-6218) and 97.14% inert corn-cob carrier, and the label states a potency of 200 Aedes aegypti Units per mg. Summit adds on that same label that the percent active ingredient does not indicate product performance and that potency measurements are not federally standardized, so treat neither number as a strength rating you can compare across brands.',
  },
  {
    question: 'Does Home Depot carry mosquito bits?',
    answer: 'Not as a Canadian-registered product. Health Canada\u2019s pesticide registry lists no Mosquito Bits, so they are not a product a Canadian store may legally sell; the BTI that Home Depot Canada has listed is the registered tablet, Mosquito Dunks (Reg. No. 28888), usually in the lawn and garden or pest control aisle. One search trap worth knowing: the Home Depot listing that ranks highest on Google.ca for "mosquito bits" is often the US homedepot.com product page, which shows US sizes, US pricing, and US stock that will not match your local store. Search homedepot.ca directly and check availability by postal code rather than clicking through from a general Google result. At Canadian Tire, RONA (the banner that replaced Lowe\u2019s Canada in 2024), Home Hardware or a garden centre, the check is the same: a Canadian registration number on the package.',
  },
  {
    question: 'Do mosquito bits kill black flies?',
    answer: 'Black fly larvae are a labelled target pest for BTI, and BTI is the standard tool used against them. But the practical answer for a homeowner is usually no, because black flies do not breed in standing water \u2014 they breed in flowing water, in the riffles and runs of moving streams and rivers. Sprinkling Bits in your yard treats containerized standing water and will not touch a black fly population coming off a nearby creek. Treating a flowing watercourse is exactly the restricted-class aquatic use the PMRA reserves for licensed applicators and municipal programs, and it is not a do-it-yourself job. In cottage country and Northern Ontario, black fly control is generally run at the municipal or regional level.',
  },
  {
    question: 'What is the mosquito bucket of doom, and do you use Bits or Dunks in it?',
    answer: 'The bucket of doom is a DIY attract-and-kill trap that spread widely in 2026. You fill a five-gallon bucket with water, add grass clippings, straw, or leaves, and let it sit until it goes foul. Female mosquitoes prefer that organic stink to clean water, so they lay their eggs there instead of elsewhere in your yard, and BTI added to the bucket kills every larva that hatches. CBC News reported that mosquito dunks were selling out across Canada as bug season and the bucket of doom trend collided, with a Home Hardware manager on Bank Street in Ottawa saying his store and the company warehouse were both out by mid-June. In the U.S. either product is used, and Bits suit the job slightly better because bucket water is deliberately deep and organic \u2014 the condition Summit\u2019s U.S. label flags for the higher 8 oz per 1,000 sq ft rate. In Canada, Bits have no registration, so the BTI option is a registered product such as Mosquito Dunks (Reg. No. 28888), used only as its label directs. The one rule: an untreated bucket of doom is simply a very effective mosquito nursery, so it has to be re-dosed all season.',
  },
  {
    question: 'Are Doktor Doom 90-day briquettes the same as mosquito dunks?',
    answer: 'No \u2014 and the difference is worth understanding, because they often sit on the same seasonal shelf. Doktor Doom 90-Day Mosquito Larva Killer briquettes are made by a Canadian company and are not BTI at all. The active ingredient is novaluron, an insect growth regulator (Health Canada domestic class, PCP registration number 34197) that stops larvae from moulting successfully rather than destroying their gut the way BTI does. Its label calls for one briquet per 200 litres of water (two where organic matter is high, half a briquet for 100 litres) and rates it for up to 90 days, versus roughly 30 days for a BTI dunk. The trade-off is speed and mode of action: BTI kills feeding larvae within about 24 hours, while an insect growth regulator works as larvae try to develop, so it prevents adults from emerging rather than clearing visible wrigglers quickly. For a rain barrel you check rarely, the longer interval is genuinely convenient; for water where you just found larvae and want them gone, BTI acts faster.',
  },
  {
    question: 'Where can I buy mosquito bits in Calgary or Edmonton?',
    answer: 'The answer in Alberta is the same as in Ontario: Health Canada’s pesticide registry lists no Mosquito Bits, so no Calgary or Edmonton store may legally sell them. Look instead for Mosquito Dunks (Reg. No. 28888) or a domestic-class BTI granule, AquaBac 200G (Reg. No. 27374) or My-Crobe 200G (Reg. No. 34631). Prairie buyers should shop earlier than Ontario buyers: the Alberta mosquito season is driven by snowmelt and summer rainfall pooling in low ground, so demand spikes fast after a wet stretch and BTI is one of the first seasonal lines to clear the shelves \u2014 the 2026 national dunk shortage hit well before peak season. Buying a bigger box of dunks early is the usual hedge. Note that BuzzSkito is a GTA-only service company; we do not offer treatments in Alberta, and this is product availability information only.',
  },
  // Oct 23, 2026 additions. Sources: Health Canada pesticide registry and the Canadian labels for Reg. No. 28888, 27374, 34631 and
  // 34197 (read through the registry API); Health Canada, "Importing pesticides for personal use in Canada" (Sep 2025).
  {
    question: 'What BTI granules are registered in Canada?',
    answer: 'Two, as domestic-class products a homeowner may use: AquaBac 200G Biological Larvicide 10/14 (Reg. No. 27374) and My-Crobe 200G Biological Larvicide (10-14) (Reg. No. 34631), both from Clarke Mosquito Control Products, according to Health Canada’s pesticide registry on October 23, 2026. Their Canadian labels set the rate at 100 granules per square metre, about 1/10 teaspoon, doubled in murky water; say to “Allow 24 hours for maximum effect on larvae”; and allow a repeat at 7 to 10 day intervals if wrigglers are seen. Summit Mosquito Bits are not on the registry.',
  },
  {
    question: 'Can I order Summit Mosquito Bits online to Canada?',
    answer: 'Health Canada’s import guidance rules that out for an unregistered product: “Online purchases of unregistered pesticides and their shipment to Canada are not permitted under the exemption for pest control products imported for personal use.” It adds that the Canada Border Services Agency “will refuse entry of ineligible pesticides” and that Health Canada “may impose a monetary penalty on the person importing them.” Mosquito Bits carry a U.S. EPA registration (6218-86) and none in Canada. Mosquito Dunks (Reg. No. 28888) are the same BTI and are registered here.',
  },
  {
    question: 'Is novaluron better than BTI for mosquito larvae?',
    answer: 'They do different jobs. BTI, the active in Mosquito Dunks, kills larvae that feed on it; the Canadian Dunks label says “Allow a minimum of 48 hours for control” and to reapply at 30-day intervals if larvae are detected. Novaluron, in Doktor Doom 90 Day briquets (Reg. No. 34197), is an insect growth regulator that “affects developing immature stages of mosquitoes by disrupting the moulting process”, for up to 90 days, in sites holding 100 litres of water or more. Its label also warns: “This pesticide is toxic to aquatic invertebrates.” Use BTI for a quick result in small water and novaluron for a big barrel you rarely check.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Health Canada’s pesticide registry lists no Mosquito Bits. Registered here: Mosquito Dunks (28888) and AquaBac or My-Crobe BTI granules, with their label doses.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('mosquito-bits-canada-vs-dunks')

export default function MosquitoBitsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 guide to Mosquito Bits in Canada vs Mosquito Dunks.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Bits Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Bits Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Summit Mosquito Bits are not registered in Canada: Health Canada&rsquo;s pesticide registry lists no product of that name, and the bag carries only a U.S. EPA number. For a Canadian rain barrel or pond, the pick is Mosquito Dunks (Reg. No. 28888), the same BTI in a slow-release tablet.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Dunks (look for Reg. No. 28888)" search="summit mosquito dunks" label="In Canada: Dunks, not Bits" />
      <TopBox tag={AMZ_TAG} name="Summit Mosquito Dunks (look for Reg. No. 28888)" search="summit mosquito dunks" label="In Canada: Dunks, not Bits" />

      {/* QUICK ANSWER — first content element */}
      <section className="bg-white px-4 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For a Canadian rain barrel or pond, the pick is <AmazonLink search="summit mosquito dunks" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Mosquito Dunks</AmazonLink> (Reg. No. 28888), the same BTI as Mosquito Bits in a slow-release tablet: the Canadian label says to allow a minimum of 48 hours for control and to reapply at 30-day intervals if larvae are detected. Mosquito Bits act faster, but they have no Canadian registration.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Mosquito Bits start releasing BTI within about 30 minutes and reach full larvae kill within 24 hours.</li>
              <li>Mosquito Dunks slow-release BTI for roughly 30 days; Bits last about 7 to 14 days per application.</li>
              <li>At Summit&rsquo;s U.S. label rate, an 8-oz container of Bits treats about 2,000 sq ft of relatively clean water surface &mdash; roughly half that in deep or organic-heavy water.</li>
              <li>Both use BTI (Bacillus thuringiensis israelensis) &mdash; a bacterial larvicide that acts on mosquito and black fly larvae; follow the label. BTI larvicides are registered for sale in Canada; check the PCP number on the package in front of you to confirm the one you are buying is.</li>
              <li>In Canada only the Dunks are registered (Reg. No. 28888): Health Canada&rsquo;s pesticide registry lists no Mosquito Bits, and its import guidance says &ldquo;Online purchases of unregistered pesticides and their shipment to Canada are not permitted&rdquo; under the personal-use exemption. The registered BTI granules are AquaBac 200G (27374) and My-Crobe 200G (34631).</li>
              <li>BTI only treats the water you apply it to; adult mosquitoes flying in still need a barrier spray.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
            <div className="mt-4">
              <BuyLink search="summit mosquito dunks" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE TO BUY */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated October 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Mosquito Bits in Canada: What You Can Buy Instead</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Start with the registration number, not the shelf. Health Canada&rsquo;s pesticide registry, searched on October 23, 2026, has no product called Mosquito Bits, current or cancelled; Summit&rsquo;s orange-and-green bag carries U.S. EPA Reg. No. 6218-86, which is not a Canadian registration. The domestic-class BTI products the registry does list are Mosquito Dunks (Reg. No. 28888) and two granules, AquaBac 200G (27374) and My-Crobe 200G (34631). We do not publish a retailer price table, because larvicide pricing moves with the season and a stale number is worse than none &mdash; check the retailer directly and confirm the number on the package.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Where to look</th>
                  <th className="px-4 py-3 text-left">What to expect</th>
                  <th className="px-4 py-3 text-left">How to check stock</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Home Depot Canada', note: 'Has listed Mosquito Dunks (Reg. No. 28888) in pest & insect control; Summit Bits have no Canadian registration', how: 'Search homedepot.ca and set your store — not a Google result' },
                  { name: 'Home Hardware',     note: 'Lists Dunks; one Ottawa store and its warehouse were sold out by mid-June 2026 (CBC)', how: 'Call the branch — independent stores order separately' },
                  { name: 'Canadian Tire',     note: 'Seasonal lawn & garden aisle; also carries Doktor Doom briquettes', how: 'Check canadiantire.ca availability by postal code' },
                  { name: 'RONA',              note: 'The former Lowe’s Canada stores now trade under the RONA banner', how: 'Check rona.ca by store' },
                  { name: 'Garden centres',    note: 'Independent stocks vary; often have product when chains are out', how: 'Phone ahead in June and July' },
                ].map(({ name, note, how }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 text-gray-800">{note}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Mosquito Dunks on Amazon.ca (look for Reg. No. 28888) →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Compare with Mosquito Dunks →</BuyLink>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Availability is the thing to plan around, not price. BTI is a seasonal line: the full range is on shelves in April and May, and the 2026 national shortage showed how fast a warehouse can empty once peak season hits. If you have more than one water source, a bigger box of dunks is usually the better value per tablet — check the unit price on the shelf tag to confirm.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ BTI kills larvae in your treated water — not the adult mosquitoes flying onto your property.</strong> For yard-wide control in the GTA, combine registered BTI such as Mosquito Dunks (your standing water) with professional barrier spray on vegetation. Barrier spray treats the vegetation across the whole yard, renewed on a schedule.
            </p>
          </div>
        </div>
      </section>

      {/* AWARD ROW — multi-intent picks */}
      <section className="bg-white px-4 pt-6">
        <div className="max-w-4xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — BTI for Every Standing-Water Situation"
            awards={[
              {
                badge: 'Best Value for Multiple Sources',
                name: 'Summit Mosquito Dunks, broken into quarters',
                why: 'The value buy in Canada, where Mosquito Bits have no registration: the Canadian label for Mosquito Dunks (Reg. No. 28888) says they “can be used whole or in pieces” and puts 0.1 to 3.0 m² of water at a quarter dunk, so one 6-pack gives 24 quarter-dunk doses for the rain barrels, flower planters and tires you cannot empty weekly.',
                search: 'summit mosquito dunks',
                score: 8.5,
                pros: ['One 6-pack breaks into 24 quarter-dunk doses', 'The label says dunks “can be used whole or in pieces”', 'Reapply at 30-day intervals if larvae are detected'],
                cons: ['Not for water that flows off your property (ditches, drains, rain gutters)', 'Use within one year of the date of manufacture (Canadian label)'],
              },
              {
                badge: 'Best Overall in Canada',
                name: 'Summit Mosquito Dunks (Canadian Reg. No. 28888)',
                why: 'The same BTI as Mosquito Bits in a slow-release tablet, and the one with a Canadian registration: Reg. No. 28888, domestic class. The Canadian label: one dunk for up to 6 m² of water surface, “regardless of depth”, reapplied at 30-day intervals if larvae are detected.',
                search: 'summit mosquito dunks',
                score: 8.7,
                featured: true,
                pros: ['Canadian Reg. No. 28888; Mosquito Bits have none', 'Same BTI active ingredient as Mosquito Bits', 'Label sites include rain barrels and ornamental ponds you cannot empty weekly'],
                cons: ['Not a fast knockdown: allow a minimum of 48 hours for control (Canadian label)', 'Check that the listing shows Reg. No. 28888, not only a U.S. EPA number'],
              },
              {
                badge: 'Best for Rain Barrels & Ponds',
                name: 'Summit Mosquito Dunks (6-pack)',
                why: 'The same BTI in a slow-release tablet: one dunk per 50-gallon rain barrel covers about 30 days, so a 6-pack handles the whole May–September season. Ornamental ponds are a labelled use site.',
                search: 'summit mosquito dunks',
                score: 8.6,
                pros: ['~30 days of coverage per dunk — set and forget', 'One 6-pack covers a rain barrel all season', 'Koi ponds and water gardens are labelled use sites'],
                cons: ['Slow release: for larvae found today, tip the water out if you can (Bits have no Canadian registration)', 'The floating tablet is visible in small bird baths'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Found wrigglers right now?</strong> Tip the water out if you can; Mosquito Bits have no Canadian registration, so they are not the answer here. <strong>Rain barrel or pond you check monthly?</strong> The <em>Best Overall</em> pick is Mosquito Dunks (Reg. No. 28888), reapplied at 30-day intervals if larvae are detected, as the Canadian label says. <strong>Several barrels, planters or tires?</strong> The <em>Best Value</em> move is to break dunks into quarters: one 6-pack gives 24 doses. Whichever you pick, BTI only handles larvae in the water you treat &mdash; the adults flying in are the job of a <Link href="/mosquito-control">whole-yard barrier spray</Link>.
              </>
            }
          />
        </div>
      </section>

      {/* SIDE-BY-SIDE TABLE */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Bits vs Mosquito Dunks — Direct Comparison</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">Mosquito Bits</th>
                  <th className="px-4 py-3 text-left">Mosquito Dunks</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Active ingredient', 'BTI', 'BTI (same)'],
                  ['Format', 'Corn-cob granules', 'Donut-shaped tablet'],
                  ['Release speed', 'Fast — about 30 minutes', 'Slow, sustained release'],
                  ['Duration', '7–14 days per application', '~30 days per dunk'],
                  ['Best for', 'Quick knockdown, small water', 'Long-term water sources'],
                  ['Visibility in water', 'Disperses, less visible', 'Floating tablet visible'],
                  ['Coverage per dose', '~2,000 sq ft (8 oz, clean water, U.S. label)', '100 sq ft per dunk (U.S. label); up to 6 m² on the Canadian label'],
                  ['Canadian registration', 'None in Health Canada’s registry (U.S. EPA Reg. No. 6218-86)', 'Reg. No. 28888, domestic class'],
                  ['Application method', 'Sprinkle / spread', 'Drop in water'],
                  ['Storage life sealed', '2–3 years', 'Use within one year of the date of manufacture (Canadian label)'],
                  ['Acts on', 'Mosquito, black fly & some midge larvae', 'Mosquito, black fly & some midge larvae'],
                ].map(([k, bits, dunks]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/4">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{bits}</td>
                    <td className="px-4 py-2 text-gray-700">{dunks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks" className="!px-3 !py-1.5 !text-xs">Check Dunks (Reg. No. 28888)</BuyLink>
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks" className="!px-3 !py-1.5 !text-xs">Check Dunks price</BuyLink>
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Leaning toward the tablet? We keep a separate <Link href="/blog/mosquito-dunks-canada-guide" className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-2">Mosquito Dunks Canada guide</Link> for the dunk-specific ground this comparison does not cover &mdash; how to break a tablet down for a small container, what happens to a dunk that dries out between rains, and the Canadian label&rsquo;s dose for each size of water.
          </p>
        </div>
      </section>

      {/* REGISTERED IN CANADA (Oct 23, 2026). Every row but the last is the Health Canada pesticide registry entry and the
          Canadian label on file for that registration number, read through the registry API
          (pest-control.canada.ca/pesticide-registry-api) on Oct 23, 2026. Quoted label text is verbatim. The last row is
          Summit's U.S. specimen label (EPA Reg. No. 6218-86) plus Health Canada's personal-import factsheet (Sep 2025). */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <QuickIdTable
            title="Mosquito larvicides registered for Canadian homeowners (and where Bits stand)"
            head={['Product (Reg. No.)', 'What it is', 'Canadian label: dose and timing', 'Canadian label: limits']}
            rows={[
              ['Mosquito Dunks (28888)', 'BTI briquet, domestic class, Summit Chemical', '“Use one (1) Mosquito Dunk for up to 6 sq. metres water surface, regardless of depth”; ¼ dunk for “0.1 to 3.0 sq. metres”. “Allow a minimum of 48 hours for control”; reapply “at 30 day intervals if mosquito larvae are detected”', 'Water wholly on your property, or containers that “cannot be emptied, drained, flushed or changed at least weekly”. “DO NOT apply this product to any water that is designed to flow beyond your property limits”'],
              ['AquaBac 200G Biological Larvicide 10/14 (27374)', 'BTI granules, domestic class, Clarke', '“100 granules/ m2 (equivalent to 0.5 ml of product / m2 or 1/10 teaspoon/ m2)”; murky water, “double the dose”. “Allow 24 hours for maximum effect on larvae”; reapply “at 7 – 10 day intervals if wrigglers are detected”', 'Same site rules as Dunks. “Do not apply to treated, finished drinking water reservoirs, drinking receptacles and wading pools”'],
              ['My-Crobe 200G Biological Larvicide (10-14) (34631)', 'BTI granules, domestic class, Clarke', 'The same rate and timing as AquaBac 200G, on its own label', 'The same site rules as AquaBac 200G'],
              ['Doktor Doom 90 Day Mosquito Larva Killer (34197)', 'Novaluron briquet (an insect growth regulator), domestic class, Alberta registrant', 'One briquet per 200 litres, two if organic matter is high; “If the breeding site contains 100 litres of water, break the briquet in half.” Control “for up to 90 days”', '100 litres of water or more. “DO NOT apply to water bodies where swimming is possible, including swimming pools.” “This pesticide is toxic to aquatic invertebrates.”'],
              ['Summit Mosquito Bits (none in Canada)', 'BTI corn-cob granules; U.S. EPA Reg. No. 6218-86 only', 'Not registered, so there is no Canadian label. The U.S. label: 1 teaspoon per 25 sq ft, every 7 or 14 days', 'Health Canada: “Online purchases of unregistered pesticides and their shipment to Canada are not permitted” under the personal-use exemption'],
            ]}
            caption={<>Sources: Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">pesticide registry</a> and the Canadian labels on file for Reg. No. 28888 (label 2023-3665), 27374 and 34631 (labels dated 2026-01-08) and 34197 (2021-06-30), read October 23, 2026; Summit&rsquo;s U.S. specimen label for Mosquito Bits; Health Canada, <a href="https://www.canada.ca/content/dam/hc-sc/documents/services/publications/product-safety/importing-pesticides-personal-use/personal-import-en.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline"><em>Importing pesticides for personal use in Canada</em></a> (September 2025). Registrations change: check the number on the package in front of you.</>}
          />
          <h3 className="text-lg font-extrabold text-brand-900 mb-3">Which one for your situation</h3>
          <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed list-disc pl-5">
            <li><strong>A rain barrel:</strong> screen it first (Health Canada says to empty a barrel &ldquo;if the water is over a week old, unless it&rsquo;s protected with a fine screen&rdquo;), then use a quarter of a Mosquito Dunk; a barrel&rsquo;s water surface is far under the label&rsquo;s 3 sq. metre line.</li>
            <li><strong>A bird bath or an outdoor pet dish:</strong> no product. Health Canada&rsquo;s advice is &ldquo;replacing water in bird baths and outdoor pet dishes at least twice a week&rdquo;, and the larvicide labels are written for water that cannot be changed weekly.</li>
            <li><strong>An ornamental pond:</strong> Dunks by the label table (half a dunk for 3 to 6 sq. metres, one per 6 sq. metres above that), or AquaBac 200G or My-Crobe 200G granules at the label rate.</li>
            <li><strong>Wrigglers you found today:</strong> tip the water out if you can. If you cannot, the registered granules are the quickest of these labels (&ldquo;Allow 24 hours for maximum effect on larvae&rdquo;).</li>
            <li><strong>A large barrel or cistern you rarely check (100 litres or more):</strong> a Doktor Doom 90 Day briquet, at the label&rsquo;s one per 200 litres.</li>
            <li><strong>Fungus gnats in houseplants:</strong> none of these Canadian labels lists fungus gnats; see the caution in the fungus gnat section below.</li>
          </ul>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <h2>How Mosquito Bits Work</h2>
          <p>Mosquito Bits are corn-cob granules coated with BTI (<em>Bacillus thuringiensis</em> subspecies <em>israelensis</em>) — a soil bacterium discovered in 1976 that specifically targets the digestive systems of mosquito and black fly larvae. The corn-cob granules float briefly when sprinkled onto water, then sink as they absorb moisture. As the bits dissolve, they release BTI proteins into the water column where larvae filter-feed. Not sure the wrigglers you found are mosquito larvae? Our <Link href="/blog/mosquito-larvae-identification">mosquito larvae identification guide</Link> shows exactly what to look for before you treat.</p>
          <p>BTI is one of the most species-specific insecticides ever developed. It acts on mosquito larvae, black fly larvae, and a few related midge species, which have to eat it for it to work. BTI larvicides are registered for sale in Canada under the Pest Control Products Act. On drinking water its position is precise and worth stating exactly, because it is widely misreported in both directions: no product containing Bti may be applied to treated, finished drinking water for human consumption, but the PMRA has no human health and safety concerns about applying registered Bt products to bodies of water that will later be used for human consumption. The timings quoted throughout this guide — full larvae kill within 24 hours, 7&ndash;14 days of control from Bits, about 30 days from a Dunk — are Summit&rsquo;s own product-label figures, not our field measurements.</p>

          <NextUp path="/blog/mosquito-bits-canada-vs-dunks" />
          <h2>How Much to Actually Use: The Label Rates</h2>
          <p>The number on the front of the bag is a coverage area, not a dose, which is why most people badly over-apply. Summit&rsquo;s U.S. label (US EPA Reg. No. 6218-86) gives the real rates, and they are small. They are U.S. rates for a product with no Canadian registration; in Canada, use the doses on the registered labels in the table above:</p>
          <ul>
            <li><strong>1 teaspoon per 25 sq ft</strong> of water surface &mdash; the correct dose for a bird bath, a bucket, or a plant saucer</li>
            <li><strong>1 tablespoon per 75 sq ft</strong> &mdash; a small ornamental pool, or a wheelbarrow that filled up in the rain</li>
            <li><strong>4 oz per 1,000 sq ft</strong> in relatively clean water</li>
            <li><strong>8 oz per 1,000 sq ft</strong> where the water is deep, polluted, heavy with organic matter, or holding large late-stage larvae &mdash; decaying leaf litter binds up BTI, so a stagnant ditch needs roughly double the dose of a clean rain barrel</li>
            <li><strong>Re-apply every 7&ndash;14 days</strong> for as long as larvae keep appearing</li>
          </ul>
          <p>The granules themselves are 2.86% <em>Bacillus thuringiensis</em> subspecies <em>israelensis</em> (strain SUM-6218) and 97.14% inert corn-cob carrier, and Summit&rsquo;s label states a potency of 200 <em>Aedes aegypti</em> Units per mg, or 91 million such units per pound. Resist reading that as a strength score. The same label says plainly that the percent active ingredient does not indicate product performance and that potency measurements are not federally standardized &mdash; which is precisely why a bare &ldquo;contains BTI&rdquo; claim, and even the percentage beside it, tells you so little when comparing one brand against another.</p>
          <p>Two things the rates imply but never spell out. BTI has to be <em>eaten</em> to work, so it only reaches larvae that are actively filter-feeding &mdash; pupae have stopped eating and will still hatch, which is why a treated barrel can produce one last small batch of adults a day or two after you treat it. And BTI does not persist: it degrades in sunlight and settles out of the water column. The 7&ndash;14 day interval is a genuine re-treatment schedule, not a marketing figure, and it is the single most common reason people conclude the product &ldquo;stopped working.&rdquo;</p>

          <h2>Mosquito Bits for Fungus Gnats in Houseplants</h2>
          <p>A large share of Canadians searching for Mosquito Bits are not treating a rain barrel at all &mdash; they are trying to kill fungus gnats in houseplant soil. That use is on Summit&rsquo;s U.S. label: fungus gnat larvae, usually <em>Bradysia</em> species, are a labelled target pest alongside mosquito and black fly larvae, and the same BTI that kills a mosquito wriggler kills a gnat larva in potting mix.</p>
          <div className="not-prose my-4 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed"><strong className="text-amber-900">In Canada, read this first.</strong> Fungus gnats are on the U.S. label of a product with no Canadian registration. The Canadian BTI labels in the table above are written for mosquito larvae in water: Mosquito Dunks are &ldquo;for use only when mosquito larvae are present in&rdquo; standing or containerized water, and that label adds, &ldquo;It is an offence under the <em>Pest Control Products Act</em> to use this product in a way that is inconsistent with the directions on the label.&rdquo; In Canada, the part of the plan below that needs no pesticide label is the watering fix and the sticky cards.</p>
          </div>
          <p>Summit&rsquo;s label gives a soil-drench method, known informally as &ldquo;gnat tea&rdquo;:</p>
          <ol>
            <li>Mix <strong>4 tablespoons of Bits per 1 gallon of water</strong> (roughly 60 mL per 4 L).</li>
            <li>Let it steep <strong>30 minutes</strong>, then skim off the floating granules &mdash; or steep the bits inside a nylon stocking so there is nothing to skim afterwards.</li>
            <li>Stir, then water your plants with the treated water, wetting the <strong>soil surface</strong> where the larvae actually live.</li>
            <li><strong>Repeat weekly for three weeks.</strong> This is the step people skip and the one that decides the outcome: the drench kills larvae but not eggs and not flying adults, so three weekly rounds are what carry you through the full life cycle.</li>
          </ol>
          <p>You can also just sprinkle the dry granules over the soil surface and water them in. It works, and it is easier, but the dose is uncontrolled and wet corn-cob can grow surface mould in a pot that never dries. The drench is the cleaner method indoors; dry sprinkling is fine for outdoor containers.</p>
          <p><strong>Under the U.S. label, Bits beat Dunks indoors.</strong> A dunk is engineered to dissolve slowly across about 30 days, so steeping one for a gnat drench takes roughly 24 hours and still gives you a weaker, less predictable brew &mdash; and a quarter-tablet sitting in a plant pot looks exactly as odd as it sounds. Bits release their BTI in about half an hour, which is the whole reason the houseplant world standardised on them. In Canada, Bits have no registration and the Mosquito Dunks label covers mosquito larvae in water only (see the note above).</p>
          <p>BTI is only the larval half of a gnat problem, though. The adults you see flying need sticky traps, and the reason larvae are there at all is soil that stays wet too long &mdash; our <Link href="/blog/how-to-get-rid-of-fungus-gnats-houseplants">fungus gnat guide for houseplants</Link> covers the watering fix and the trap-plus-drench combination that ends an infestation instead of just suppressing it each week.</p>

          <p>Buy the traps at the same time as the Bits, because the drench on its own will never make a room feel gnat-free. Yellow sticky cards intercept the adults already flying, which is both the half of the problem you can see and the half still laying eggs back into the pot. They also tell you when you are finished: three weekly drenches plus a card that has stopped filling up is what the end of an infestation actually looks like. <BuyLink tag={AMZ_TAG} search="yellow sticky traps houseplants">Check yellow sticky traps on Amazon.ca &rarr;</BuyLink></p>

          <h2>When to Use Bits Instead of Dunks</h2>
          <p>In Canada, read &ldquo;Bits&rdquo; in this list as a registered BTI granule such as AquaBac 200G (Reg. No. 27374) or My-Crobe 200G (Reg. No. 34631), because Summit&rsquo;s Bits carry a U.S. registration and no Canadian one. Then skip the gutter, the kiddie pool and the catch basin, because the Canadian labels say &ldquo;DO NOT apply this product to any water that is designed to flow beyond your property limits (for example, ditches, drains, rain gutters or catch basin sumps that flow into weeping tile beds or municipal storm drain systems)&rdquo;, and the granule labels add &ldquo;Do not apply to treated, finished drinking water reservoirs, drinking receptacles and wading pools.&rdquo;</p>
          <ul>
            <li><strong>You found larvae unexpectedly</strong> — wriggling in a saucer or an old bucket — tip the water out if you can; if not, the registered granules&rsquo; labels say &ldquo;Allow 24 hours for maximum effect on larvae&rdquo;</li>
            <li><strong>Small water sources you cannot change weekly</strong>, such as plant saucers, where a floating dunk tablet would be visually awkward; a bird bath needs fresh water twice a week instead (Health Canada), and the granule labels rule out wading pools</li>
            <li><strong>Pet water bowls left outside</strong> — tip out and refill daily; only add a larvicide to animal water if the label on your package lists it</li>
            <li><strong>Drainage trays under outdoor planters</strong></li>
            <li><strong>Tarp-covered boats</strong> with rainwater pooled on top</li>
            <li><strong>Septic tank ventilation pipes</strong> that can hold water</li>
            <li><strong>Storm drain catch basins:</strong> not these; the Canadian labels exclude catch basin sumps that flow into weeping tile beds or municipal storm drain systems</li>
          </ul>

          <h2>When Dunks Are Better</h2>
          <p>On the Canadian Mosquito Dunks label (Reg. No. 28888) the dose goes by water surface, not gallons: a quarter dunk for &ldquo;0.1 to 3.0 sq. metres&rdquo;, which covers a rain barrel, and no ditch that drains off your property.</p>
          <ul>
            <li><strong>Rain barrels</strong> — drop one dunk per 50 gallons, replace monthly</li>
            <li><strong>Decorative ponds with fish</strong> — slow-release lasts the season, and fish are not a BTI target</li>
            <li><strong>Neglected swimming pools</strong> with accumulated rainwater</li>
            <li><strong>Drainage ditches</strong> that hold water for weeks</li>
            <li><strong>Tree holes and stump cavities</strong></li>
            <li><strong>Any standing water you can&rsquo;t check on weekly</strong></li>
          </ul>

          <h2>The Smart Approach: Use Both</h2>
          <p>Plenty of homeowners end up using both formats. The dunk goes in the rain barrel for set-and-forget protection — drop it in May, forget about it until June. The granules sit in the garden shed for emergency use whenever you discover larvae somewhere unexpected; in Canada that means a registered BTI granule such as AquaBac 200G or My-Crobe 200G, not Bits.</p>
          <p>For a typical GTA backyard with one rain barrel and a few potential standing-water spots, BTI is the cheap half of the job: one 6-pack of dunks covers the rain barrel for the full May–September season, and a container of registered BTI granules handles every other standing-water situation that comes up. For the other half, <Link href="/mosquito-control-cost">what professional mosquito control costs</Link> starts at $99 for a single treatment and scales with lot size. On a typical suburban lot — the kind a <Link href="/markham-mosquito-control">Markham mosquito control</Link> quote covers — the BTI still earns its keep, it just cannot reach the adults.</p>

          <h2>Bits + Barrier Spray: The Complete Mosquito Strategy</h2>
          <p>BTI bits and dunks solve the LARVAL side of mosquito control — but they only work on water you actually treat. Adult mosquitoes flying in from neighbours&rsquo; yards, ravines, and creeks are unaffected. On the deep, tree-lined lots north of the city this is most of the problem — a sprinkle of BTI granules in the plant saucers does nothing about what is already flying, which is the gap <Link href="/vaughan-mosquito-control">mosquito control in Vaughan</Link> is built to close. For a fuller plan in your GTA backyard:</p>
          <ol>
            <li><strong>Registered BTI</strong> (Mosquito Dunks, Reg. No. 28888, or a registered granule) in the standing water on your property that its label covers</li>
            <li><strong>Habitat modification</strong> — drain anything you can drain, mow short, clear leaf litter</li>
            <li><strong>Professional barrier spray</strong> — <Link href="/mosquito-control">BuzzSkito&rsquo;s seasonal program</Link> targets adult mosquitoes flying onto your property, with a registered residual formula applied according to label directions and renewed on a schedule</li>
          </ol>
          <p>One note on the standing-water audit in step two, because it usually stops at the back door: the sump pit, the floor drain whose trap has dried out, and the laundry tub with a weeping trap are standing water too. They matter less for mosquitoes than a rain barrel does, and they matter a great deal for the damp-basement insects that share the same water &mdash; which is why our <Link href="/blog/best-silverfish-traps">silverfish trap buying guide</Link> and <Link href="/blog/best-centipede-killer-canada">centipede product guide</Link> both start with the humidity rather than with a spray. Lidding the pit and pouring water down seldom-used drains takes ten minutes and closes several problems at once.</p>
          <p>That three-part stack covers mosquitoes, but BTI is only one product on a much longer Canadian shelf — our <Link href="/pest-product-guides">pest product guides</Link> group everything we have researched, from larvicides and traps through to repellents, by pest and by category.</p>
          <p>One device deliberately left off the stack: the UV bug trap. It is the first thing most homeowners buy and the layer that does the least — independent trap research puts mosquitoes under 5% of what a UV-plus-fan trap catches. If you are weighing one against a season of BTI, we break down <Link href="/blog/dynatrap-canada-review">whether DynaTraps actually work on mosquitoes</Link>, model by model.</p>

          <RelatedLinks path="/blog/mosquito-bits-canada-vs-dunks" />
          <h2>Are Mosquito Bits Legal in Canada? What the PMRA Actually Says</h2>
          <p><strong>Not as Mosquito Bits.</strong> BTI itself is legal here, in registered products such as Mosquito Dunks (Reg. No. 28888), but registration is product by product, and Health Canada&rsquo;s pesticide registry, searched on October 23, 2026, has no product named Mosquito Bits, current or cancelled. Summit&rsquo;s bag carries U.S. EPA Reg. No. 6218-86. The <em>Pest Control Products Act</em> is blunt about unregistered products: &ldquo;No person shall manufacture, possess, handle, store, transport, import, distribute or use a pest control product that is not registered under this Act&rdquo; (section 6(1), which lists narrow exceptions). The question keeps resurfacing because the regulatory picture has two layers, and searchers keep landing on the wrong one.</p>
          <p>Health Canada&rsquo;s <strong>Pest Management Regulatory Agency (PMRA)</strong> registers every pesticide sold in Canada, and each registered product carries a PCP (Pest Control Products Act) number on its label. In its Bti fact sheet, the PMRA states that nearly all products containing Bti are <strong>Restricted</strong> class products &ldquo;used to control black fly and mosquito larvae in aquatic situations where the flow of water is not confined to a small area,&rdquo; and adds that <strong>commercial class</strong> Bti products can only be used against black fly and mosquito larvae in private ponds and farm dugouts where no outflow beyond the property limits exists. Both of those classes describe the large-volume job a municipality or licensed applicator does on open water &mdash; a creek, a marsh, a farm dugout &mdash; rather than anything in a backyard.</p>
          <p>One honest caveat about that reasoning, because the same fact sheet says two different things. In a later section it gives a different ground for the same classification: that the PMRA has classified nearly all Bti products as Restricted &ldquo;since they must be applied only in the water where the larvae exist.&rdquo; That sentence would apply to a rain barrel as readily as to a creek, so the confined-water wording is not by itself a complete explanation, and we are not going to pretend it is. What actually decides the question is narrower and checkable: <strong>a pesticide&rsquo;s class is set by its own registration, product by product</strong>, and domestic-class products are the ones sold to consumers without a licence. That is why the number on your package, not the general wording of an archived fact sheet, is the thing to look up.</p>
          <p>Two caveats worth stating plainly. That PMRA fact sheet is marked ARCHIVED, last updated 4 May 2017, so treat it as background rather than the current rulebook. And the authoritative check for any specific product is the live <strong>PMRA Pesticide Label Search</strong> database: take the PCP number printed on the package in your hand and look it up. A US EPA registration number on an imported bag is not a Canadian registration &mdash; that distinction is the actual substance behind most &ldquo;is this legal here&rdquo; confusion.</p>
          <p>On safety, the same PMRA fact sheet is worth quoting precisely, because it is routinely paraphrased too loosely in both directions. The PMRA states that no product containing Bti may be applied to <em>treated, finished drinking water</em> for human consumption. Separately, it states that the agency has no human health and safety concerns about the application of registered Bt products to bodies of water that will be used for human consumption. In plain terms: BTI is not something you add to a municipal system or a kitchen tap, and it is not regarded as a health hazard where it is applied to raw water bodies under its registered uses.</p>

          <h2>The &ldquo;Bucket of Doom&rdquo; and the 2026 Canadian Dunk Shortage</h2>
          <p>If you went looking for dunks in June 2026 and found empty pegs, you were not imagining it. CBC News reported that mosquito dunks were selling out as bug season collided with the &ldquo;bucket of doom&rdquo; trend; a manager at a Home Hardware on Bank Street in Ottawa told CBC that his store was sold out by mid-June and so was the company&rsquo;s warehouse. Cottage Life covered the same DIY trend through the summer. That shortage, not any regulatory action, is the origin of most of the &ldquo;you can&rsquo;t get these in Canada&rdquo; chatter.</p>
          <p>The technique is simple, and it is the one situation where the Bits-versus-Dunks question genuinely changes shape. Fill a five-gallon bucket with water, add a handful of grass clippings, straw or leaves, and let it sit until it goes properly foul. Female mosquitoes strongly prefer that organic stink to clean water, so the bucket becomes the most attractive place in your yard to lay eggs. Add BTI, and every egg laid there dies as a larva. It is an attract-and-kill trap built out of the mosquito&rsquo;s own preferences rather than against them.</p>
          <p>Under Summit&rsquo;s U.S. label this job points toward Bits: bucket water is deliberately deep, dark and loaded with organic matter, which is precisely the condition Summit flags as needing the higher 8 oz per 1,000 sq ft rate, and Bits let you top the dose back up on the 7&ndash;14 day schedule as the brew degrades. In Canada, Bits have no registration, so the BTI option is a registered product such as Mosquito Dunks (Reg. No. 28888), used only as its label directs. Whichever you use, the bucket has to be re-dosed all season &mdash; an untreated bucket of doom is just an unusually effective mosquito nursery, and that is the failure mode to take seriously before building one.</p>
          <p>The counter-argument deserves airing, because it surfaces every time the trend does. Aquatic and wildlife-pond hobbyists point out that BTI is not perfectly selective even within its own corner of the insect world: it also affects some non-target chironomid midges, the harmless lake flies whose larvae feed dragonfly nymphs, fish and birds. That is a fair point, and it is consistent with what BTI is &mdash; a larvicide for mosquitoes, black flies and a few closely related midges, not for insects generally. It does not change the evidence that BTI acts on those larvae rather than on people, pets, fish, amphibians or pollinators. What it does mean is that an established wildlife pond running as a real ecosystem is a poor candidate for routine BTI, while a rain barrel, a bird bath, a tarp puddle or a purpose-built bucket support no midge food web worth protecting and cost you nothing ecologically. Treat the containers; leave a healthy pond alone unless it is genuinely producing mosquitoes. Where a pond is the problem, <Link href="/blog/pond-aerator-mosquito-larvae-canada">moving the water with an aerator</Link> stops egg-laying without adding anything to it at all, since mosquitoes will not lay on a disturbed surface.</p>

          <p>That aerator point is worth acting on if a pond is the water in question, because it is the one fix that needs nothing added to the pond at all. A female will not lay on a surface that is moving, so a small fountain pump or a solar aerator takes the pond out of the mosquito&rsquo;s list of options while leaving the midge and dragonfly food web exactly where it is. <BuyLink tag={AMZ_TAG} search="solar pond aerator pump">Check pond aerators and fountain pumps on Amazon.ca &rarr;</BuyLink></p>

          <h2>Other BTI Formats Sold in Canada &mdash; and One Canadian Product That Is Not BTI</h2>
          <p>Bits and Dunks are the two consumer formats, but BTI is sold in several others, and knowing the names saves you searching for the wrong thing:</p>
          <ul>
            <li><strong>Granular BTI</strong> (AquaBac 200G, My-Crobe 200G) &mdash; corn-grit granules for broadcasting over larger or vegetated water. Most of their registrations are restricted or commercial class, but each also has a domestic-class version a homeowner may use (Reg. No. 27374 and 34631; see the table above).</li>
            <li><strong>Liquid BTI concentrate</strong> (the VectoBac-type products) &mdash; measured and diluted for spray application over large sites. Again a commercial-channel product, and one of the aquatic uses covered by the PMRA&rsquo;s restricted classification above.</li>
            <li><strong>Gnatrol</strong> &mdash; a BTI formulation made specifically for fungus gnat larvae in greenhouse and nursery growing media. Its Canadian registration (Gnatrol DG Biological Larvicide, Reg. No. 27821) is listed as cancelled in Health Canada&rsquo;s registry.</li>
            <li><strong>BTI briquets</strong> (Summit B.T.I. Briquets, Reg. No. 28995) &mdash; the long-life tablet format, essentially the same idea as a Dunk, registered here as a restricted-class product; the older Bactimos products appear only as historical entries.</li>
          </ul>
          <p>The important shelf competitor in Canada is not BTI at all. <strong>Doktor Doom 90-Day Mosquito Larva Killer briquettes</strong> are made by a Canadian company and often sit on the same seasonal shelf as the Summit products, and their active ingredient is <strong>novaluron</strong>, an insect growth regulator. It is registered in Canada as a <em>domestic</em> class product under PCP registration number 34197 &mdash; a useful thing to see, because it is a concrete example of a Canadian-registered consumer larvicide you can look up yourself in the PMRA database. Novaluron does not destroy the larval gut the way BTI does; it stops larvae from moulting successfully, so they never emerge as adults. The label calls for one briquette per <strong>200 litres</strong> of water (two where organic matter is high, half a briquette for 100 litres) and rates it for up to <strong>90 days</strong>, against roughly 30 days for a BTI dunk. Two lines on that label matter for pond owners. One reads &ldquo;This pesticide is toxic to aquatic invertebrates.&rdquo; The other rules out &ldquo;permanent natural water bodies such as lakes, rivers, streams, creeks, dugouts or ponds&rdquo;; ornamental ponds holding 100 litres or more are on its list of sites.</p>
          <p>The trade-off is real in both directions. If you want a rain barrel handled with one decision in May, a 90-day novaluron briquette is a genuinely longer interval than any BTI product offers. If you have just lifted a lid and found the water squirming, BTI is the faster answer &mdash; it kills feeding larvae within about 24 hours, whereas a growth regulator has to wait for those larvae to attempt their next moult. The two are not interchangeable, and a page that only ever mentions BTI is leaving out the product most likely to be sitting next to it on a Canadian shelf.</p>

          <p>If a single decision in May is what appeals to you, that briquette is the one to line up against a card of dunks before you commit to a season of either &mdash; one drop-in versus a monthly reminder, with the faster knockdown of BTI kept in the shed for whatever you find in the meantime. <BuyLink tag={AMZ_TAG} search="mosquito larva killer briquettes">Check long-interval larvicide briquettes on Amazon.ca &rarr;</BuyLink></p>

          <h2>Black Flies: Why Bits Work on the Label but Not in Your Yard</h2>
          <p>Black fly larvae are a labelled target for BTI, and BTI genuinely is the standard tool used against them across Canada. For a homeowner, though, the honest answer is usually that Bits will not solve a black fly problem, and the reason inverts everything else on this page.</p>
          <p>Black flies do not breed in standing water. They breed in <em>flowing</em> water &mdash; in the riffles and runs of streams and rivers, where larvae anchor themselves to rocks and vegetation and filter the current. That is why cottage country, Northern Ontario and much of Quebec have a black fly season that has nothing to do with how tidy anyone&rsquo;s yard is. Sprinkling Bits into your containerized standing water treats mosquitoes and will not touch a black fly population coming off a creek two properties over.</p>
          <p>Treating a flowing watercourse is exactly the restricted-class aquatic use the PMRA reserves for licensed applicators, and it is not a DIY project &mdash; dosing moving water requires calculating flow rate, and a consumer pack has no rate table for it. Where black flies are managed in Canada, it is generally through a municipal or regional program that treats watercourses on a schedule. For a property owner, the realistic tools are timing (black fly activity peaks in late spring and collapses in summer heat), physical barriers, and repellents rather than larviciding.</p>

          <p>Of those three, the physical barrier is the one that holds up during an actual black fly peak, because black flies crawl rather than hover &mdash; into hair, behind ears, in under a collar or a cuff. A head net worn over a brimmed hat, with sleeves and trouser legs closed off, is the standard cottage-country answer, and unlike anything you apply it does not wear off through the evening. <BuyLink tag={AMZ_TAG} search="mosquito head net hat">Check head nets and bug jackets on Amazon.ca &rarr;</BuyLink></p>

          <h2>Finding BTI on a Canadian Shelf: Names, Numbers and Search Traps</h2>
          <p>The registered tablet to look for is <strong>Summit Mosquito Dunks</strong>, Reg. No. 28888 on the label, most commonly a 6-pack card. The registered granules are <strong>AquaBac 200G</strong> (Reg. No. 27374) and <strong>My-Crobe 200G</strong> (Reg. No. 34631); phone ahead for those. <strong>Summit Mosquito Bits</strong>, the orange and green bag in 8 oz and 30 oz sizes (the 30 oz bag is Summit&rsquo;s model number 117-6), carries a U.S. EPA number and no Canadian one. In-store, larvicides are almost never with the aerosol insecticides &mdash; look in lawn and garden, or in the seasonal pest aisle that appears in spring and disappears in September, which is a large part of why the product seems to vanish from stores in the autumn.</p>
          <p>One search trap is worth knowing because it costs people real time. On Google.ca, the Home Depot result that ranks highest for &ldquo;mosquito bits&rdquo; is frequently the US <em>homedepot.com</em> product page rather than the Canadian one. It shows US sizes, US pricing and US stock, none of which apply to a store you can drive to. The same happens with Amazon search pages that mix US and Canadian listings. Search <em>homedepot.ca</em> or <em>canadiantire.ca</em> directly and check availability by postal code rather than clicking a general Google result and assuming it reflects Canadian stock.</p>
          <p>Timing matters more than retailer choice. BTI is a seasonal line, the 2026 shortage showed how quickly a national warehouse can empty, and shelves thin out from mid-June onward. April and May are when the full range is present at every chain; by late July you take what is left. If your yard has more than one water source, the standing-water audit in our <Link href="/blog/rain-barrel-mosquito-proof-canada">rain barrel mosquito-proofing guide</Link> is worth doing before you buy, because it tells you whether you need one container or three.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada — Complete Guide</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — What Actually Works</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mosquitoes-in-yard-ontario">How to Get Rid of Mosquitoes in Your Yard (Ontario)</Link></li>
            <li><Link href="/blog/ultimate-backyard-mosquito-control-guide">The Ultimate Backyard Mosquito Control Guide</Link></li>
            <li><Link href="/blog/dynatrap-canada-review">Do DynaTraps Actually Work on Mosquitoes?</Link></li>
            <li><Link href="/blog/best-wasp-trap">Best Wasp Traps in Canada — Bag, Sticky &amp; Reusable Compared</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-fungus-gnats-houseplants">How to Get Rid of Fungus Gnats in Houseplants</Link></li>
            <li><Link href="/blog/rain-barrel-mosquito-proof-canada">How to Mosquito-Proof a Rain Barrel in Canada</Link></li>
            <li><Link href="/blog/pond-aerator-mosquito-larvae-canada">Pond Aerators vs Mosquito Larvae</Link></li>
            <li><Link href="/blog/mosquito-larvae-identification">Mosquito Larvae Identification &mdash; What Is Actually in Your Water</Link></li>
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

      <ReadNext path="/blog/mosquito-bits-canada-vs-dunks" standalone />
    </>
  )
}
