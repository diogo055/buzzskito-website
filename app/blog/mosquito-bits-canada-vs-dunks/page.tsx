import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AmazonLink from '@/components/AmazonLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'mosquito-bits-canada-vs-dunks'
const DATE = '2026-05-01'
const UPDATED = '2026-07-12'
const TITLE = 'Mosquito Bits vs Dunks (Canada 2026): Kills Larvae Faster'
const META_TITLE = 'Mosquito Bits Canada 2026: vs Dunks + Prices'

const FAQS = [
  {
    question: 'What are mosquito bits?',
    answer: 'Mosquito Bits are small corn-cob granules coated with BTI (Bacillus thuringiensis subspecies israelensis) — the same naturally-occurring bacterial larvicide found in mosquito dunks, but in a fast-release format. Sprinkle the bits onto standing water and BTI is released into the water within minutes, killing mosquito larvae within 24 hours. Each 8-oz container of Summit Mosquito Bits treats 500–1000 sq ft of water surface area. Bits are sold in Canada at Canadian Tire, Home Depot, Rona, and most garden centres for $15–$25 per 8-oz container.',
  },
  {
    question: 'Where to buy mosquito bits in Canada?',
    answer: 'Mosquito Bits are widely available across Canadian retailers: Canadian Tire, Home Depot Canada, Rona, Lowe\'s Canada, garden centres, and Amazon.ca. The brand Canadian stores commonly carry is Summit Chemical (orange and green container — same brand as the dunks). A typical 8-oz container runs $15–$25. The 30-oz value pack at Costco runs $35–$55 and treats 4–8 times the area, making it the better deal for properties with multiple rain barrels or standing water sources.',
  },
  {
    question: 'Mosquito Bits vs Mosquito Dunks — which should I use?',
    answer: 'Same active ingredient (BTI), different release speed. Use DUNKS for long-term water sources (rain barrels, ornamental ponds, decorative water features) — they slow-release for 30 days. Use BITS for fast emergency knockdown or for water sources you don\'t want to look at a tablet floating in (small bird baths, kiddie pools, neglected pet bowls, drainage trays). Many homeowners use both: dunks dropped in the rain barrel for set-and-forget, bits sprinkled when you find larvae somewhere unexpected. Bits release their BTI within about 30 minutes while dunks release theirs slowly; on Summit\'s labelling, bits give 7–14 days of control versus about 30 days for a dunk.',
  },
  {
    question: 'How much do mosquito bits cost in Canada?',
    answer: 'In Canada (May 2026 pricing): Canadian Tire and Home Depot Canada list 8-oz Summit Mosquito Bits at $14.99–$19.99. Rona is typically $15.49–$21.49. The 30-oz value container is $34.99–$54.99 — three times the size for roughly twice the price, making it 33% cheaper per ounce. Garden centres often have the same 8-oz pack for $15–$22.',
  },
  {
    question: 'Are mosquito bits safe for pets, kids, fish, and pollinators?',
    answer: 'Yes — Mosquito Bits are extremely safe. The active ingredient (BTI) is a naturally-occurring soil bacterium that specifically targets mosquito and black fly larvae. It does not affect humans, dogs, cats, fish, frogs, dragonflies, beneficial insects, pollinators, or birds. Health Canada approves BTI for use in drinking water reservoirs in some provinces. Your dog can technically eat the bits without harm (it might cause mild digestive upset like any unfamiliar food, but no toxicity). Always store the container away from kids — not because of toxicity, but because the corn-cob looks like cereal and you don\'t want kids snacking on it.',
  },
  {
    question: 'How fast do mosquito bits work?',
    answer: 'Mosquito Bits are the fast-release BTI format: the corn-cob granules absorb water and start releasing BTI within about 30 minutes. Larvae have to eat the BTI for it to work, so the kill is not instant — Summit rates full larvae kill in treated water within 24 hours on the product label. Dunks carry the same BTI in a slow-release tablet, labelled for roughly 30 days of coverage versus 7–14 days for Bits.',
  },
  {
    question: 'Can I use mosquito bits in my rain barrel?',
    answer: 'You can, but mosquito DUNKS are better for rain barrels because they last 30 days vs bits lasting 7–14 days. A single dunk in a 50-gallon rain barrel handles the entire month. With bits, you\'d need to re-apply every 1–2 weeks. Save bits for situations where you discover larvae unexpectedly — a forgotten plant saucer, the gutter that\'s clogged, a neglected pet water bowl — places where you want immediate larvae knockdown without committing to a 30-day floating tablet.',
  },
  {
    question: 'Do mosquito bits work in a swimming pool?',
    answer: 'Only in a NEGLECTED pool with standing rainwater (no chlorine). Bits and dunks are not designed for active chlorinated swimming pools — the chlorine kills mosquito larvae anyway, and pool filtration removes the BTI-coated corn-cob granules. If your pool has been sitting unused with rainwater for weeks, sprinkle bits across the surface to prevent it from becoming a mosquito breeding factory until you can drain or refill it.',
  },
  {
    question: 'How long do mosquito bits last in storage?',
    answer: 'Sealed Mosquito Bits last 2–3 years in a cool, dry storage location. Once opened, they last 1 full year if kept dry and sealed (re-seal the container after each use). Moisture activates the BTI prematurely, so don\'t leave the container open in a humid garden shed all summer. Buying the smaller 8-oz container if you only have one rain barrel makes sense; the larger 30-oz container is for properties with multiple water sources or for splitting with a neighbour.',
  },
  {
    question: 'Where can I buy BTI for mosquitoes near me in Canada?',
    answer: 'You can buy BTI for mosquitoes — sold as Mosquito Bits (granules) and Mosquito Dunks (tablets) — at Canadian Tire, Home Depot, Rona, Lowe\'s, independent garden centres, and Amazon.ca. Both products use the same BTI bacterium; Bits act within about 30 minutes while Dunks slow-release for roughly 30 days. To find local stock fast, search \'Mosquito Bits\' or \'Mosquito Dunks\' on a retailer\'s website and check availability by postal code. Buy in April–May before peak-season shelves thin out.',
  },
  {
    question: 'What is BTI (Bacillus thuringiensis israelensis)?',
    answer: 'BTI (Bacillus thuringiensis israelensis) is a naturally occurring soil bacterium used as a biological larvicide. When mosquito or black fly larvae eat it, its proteins destroy their gut and kill them within about 24 hours, while leaving everything else unharmed. According to Health Canada and public-health agencies, BTI is highly specific to these larvae and poses no risk to humans, pets, fish, frogs, bees, or birds — some provinces even approve it for treating drinking-water reservoirs. It is the active ingredient in both Mosquito Bits and Dunks.',
  },
  {
    question: 'Are mosquito dunks the same as mosquito bits?',
    answer: 'Mosquito Dunks and Mosquito Bits contain the same active ingredient — BTI — but come in different formats. Dunks are slow-release donut tablets that protect standing water for about 30 days, ideal for rain barrels and ponds. Bits are corn-cob granules that release BTI within about 30 minutes for fast knockdown but last only 7–14 days, ideal for bird baths, plant saucers, and unexpected larvae. They kill the same larvae; you choose based on how fast and how long you need coverage.',
  },
  {
    question: 'Why do people think mosquito bits are banned in Canada?',
    answer: 'Mosquito Bits are not banned in Canada — the confusion usually comes from periodic retail shortages and from specific brands or package sizes not always being stocked in Canadian stores. BTI products are approved by Health Canada\'s Pest Management Regulatory Agency for residential use, and both Bits and Dunks are legally sold at Canadian Tire, Home Depot, Rona, and Amazon.ca. If a particular listing is unavailable, it is a supply or import issue, not a legal ban.',
  },
  {
    question: 'Can I put mosquito bits directly in soil?',
    answer: 'Yes. Fungus gnat larvae are a labelled target pest for Mosquito Bits, and there are two accepted ways to reach them. You can sprinkle the dry granules across the soil surface and water them in, which is simple but gives an uncontrolled dose and can grow surface mould in a pot that stays wet. Or you can use the soil drench on Summit\u2019s label \u2014 mix 4 tablespoons of Bits per 1 gallon of water, let it steep 30 minutes, skim off the floating granules (or steep them inside a nylon stocking), then water your plants with the treated water so the soil surface is wetted. Repeat weekly for three weeks either way, because BTI kills larvae but not eggs or flying adults, so you have to cover the full life cycle.',
  },
  {
    question: 'Do mosquito bits work for fungus gnats?',
    answer: 'Yes \u2014 fungus gnat larvae (usually Bradysia species) are listed on the Mosquito Bits label alongside mosquito and black fly larvae, and the same BTI bacterium that kills a mosquito wriggler kills a gnat larva in potting mix. It works on larvae in the soil only. The adult gnats you see flying are unaffected and need sticky traps, and the underlying cause is almost always soil kept wet for too long. Bits are a better choice than Dunks for houseplants because they release BTI in about 30 minutes, while a dunk is built to dissolve slowly over roughly 30 days and needs about 24 hours of steeping to make a weaker, less predictable drench.',
  },
  {
    question: 'Are mosquito bits legal in Canada?',
    answer: 'Yes. BTI larvicides are registered for sale in Canada and are stocked at Canadian Tire, Home Depot, Rona, and Home Hardware. Every pesticide sold in Canada is registered by Health Canada\u2019s Pest Management Regulatory Agency (PMRA) and carries a PCP registration number on the label. The confusion comes from the PMRA\u2019s Bti fact sheet, which states that nearly all Bti products used against mosquito and black fly larvae are classified as Restricted because they must be applied only to the water where the larvae exist, and that commercial class products may be used only in private ponds and farm dugouts with no outflow past the property line. Those classes govern the large-volume products licensed applicators use on open water, not the small consumer packs sold for containerized water around a home. Note that the PMRA fact sheet is marked ARCHIVED (last updated 4 May 2017); to verify any specific product, look up the PCP number printed on the package in the PMRA Pesticide Label Search database. A US EPA registration number on an imported bag is not a Canadian registration.',
  },
  {
    question: 'How much mosquito bits do I use per square foot?',
    answer: 'Summit\u2019s registered label (US EPA Reg. No. 6218-86) gives the rates: 1 teaspoon per 25 sq ft of water surface, or 1 tablespoon per 75 sq ft, for small containerized water like a bird bath, bucket, or plant saucer. For larger areas, use 4 oz per 1,000 sq ft in relatively clean water, and 8 oz per 1,000 sq ft where the water is deep, polluted, heavy with organic matter, or holding large late-stage larvae \u2014 decaying leaf litter binds up BTI, so a stagnant ditch needs roughly double the dose of a clean rain barrel. Re-apply every 7 to 14 days while larvae keep appearing. The granules are 2.86% Bacillus thuringiensis subspecies israelensis (strain SUM-6218) and 97.14% inert corn-cob carrier, and the label states a potency of 200 Aedes aegypti Units per mg. Summit adds on that same label that the percent active ingredient does not indicate product performance and that potency measurements are not federally standardized, so treat neither number as a strength rating you can compare across brands.',
  },
  {
    question: 'Does Home Depot carry mosquito bits?',
    answer: 'Yes \u2014 Home Depot Canada stocks Summit Mosquito Bits and Mosquito Dunks in-store and on homedepot.ca, usually in the lawn and garden or pest control aisle, with same-day pickup at most GTA locations. One search trap worth knowing: the Home Depot listing that ranks highest on Google.ca for "mosquito bits" is often the US homedepot.com product page, which shows US sizes, US pricing, and US stock that will not match your local store. Search homedepot.ca directly and check availability by postal code rather than clicking through from a general Google result. Canadian Tire, Rona, Lowe\u2019s Canada, Home Hardware, and independent garden centres carry the same Summit products.',
  },
  {
    question: 'Do mosquito bits kill black flies?',
    answer: 'Black fly larvae are a labelled target pest for BTI, and BTI is the standard tool used against them. But the practical answer for a homeowner is usually no, because black flies do not breed in standing water \u2014 they breed in flowing water, in the riffles and runs of moving streams and rivers. Sprinkling Bits in your yard treats containerized standing water and will not touch a black fly population coming off a nearby creek. Treating a flowing watercourse is exactly the restricted-class aquatic use the PMRA reserves for licensed applicators and municipal programs, and it is not a do-it-yourself job. In cottage country and Northern Ontario, black fly control is generally run at the municipal or regional level.',
  },
  {
    question: 'What is the mosquito bucket of doom, and do you use Bits or Dunks in it?',
    answer: 'The bucket of doom is a DIY attract-and-kill trap that spread widely in 2026. You fill a five-gallon bucket with water, add grass clippings, straw, or leaves, and let it sit until it goes foul. Female mosquitoes prefer that organic stink to clean water, so they lay their eggs there instead of elsewhere in your yard, and BTI added to the bucket kills every larva that hatches. CBC News reported that mosquito dunks were selling out across Canada as bug season and the bucket of doom trend collided, with a Home Hardware manager on Bank Street in Ottawa saying his store and the company warehouse were both out by mid-June. Either product works. Bits suit the job slightly better because bucket water is deliberately deep and organic \u2014 the condition Summit\u2019s label flags for the higher 8 oz per 1,000 sq ft rate \u2014 and Bits are easy to top up on the 7 to 14 day schedule. A dunk needs less attention but is harder to dose upward. The one rule: an untreated bucket of doom is simply a very effective mosquito nursery, so it has to be re-dosed all season.',
  },
  {
    question: 'Are Doktor Doom 90-day briquettes the same as mosquito dunks?',
    answer: 'No \u2014 and the difference is worth understanding, because they sit on the same Canadian Tire shelf. Doktor Doom 90-Day Larva Killer briquettes are made by a Canadian company and are not BTI at all. The active ingredient is novaluron, an insect growth regulator that stops larvae from moulting successfully rather than destroying their gut the way BTI does. One briquette treats standing water up to 200 litres and is rated for 90 days, versus roughly 30 days for a BTI dunk. The trade-off is speed and mode of action: BTI kills feeding larvae within about 24 hours, while an insect growth regulator works as larvae try to develop, so it prevents adults from emerging rather than clearing visible wrigglers quickly. For a rain barrel you check rarely, the longer interval is genuinely convenient; for water where you just found larvae and want them gone, BTI Bits act faster.',
  },
  {
    question: 'Where can I buy mosquito bits in Calgary or Edmonton?',
    answer: 'Summit Mosquito Bits and Dunks are distributed nationally, so the same Canadian Tire, Home Depot, Rona, Lowe\u2019s, and Home Hardware chains stock them in Alberta as in Ontario, along with independent garden centres and Amazon.ca. Prairie buyers should shop earlier than Ontario buyers: the Alberta mosquito season is driven by snowmelt and summer rainfall pooling in low ground, so demand spikes fast after a wet stretch and BTI is one of the first seasonal lines to clear the shelves \u2014 the 2026 national dunk shortage hit well before peak season. Buying the 30 oz bag rather than the 8 oz is the usual hedge. Note that BuzzSkito is a GTA-only service company; we do not offer treatments in Alberta, and this is product availability information only.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Same BTI, different speed: Bits work in 30 minutes and last 7–14 days, Dunks last 30. Canada: $14.97–$21.49 per 8 oz at Canadian Tire, Home Depot, Rona.',
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
          <p className="text-xl text-brand-100 max-w-3xl">Pricing across Canadian retailers, BTI granules vs dunks tablets, and which one belongs in your rain barrel.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Bits (BTI granules)" search="summit mosquito bits" label="Fastest larvae kill" />

      {/* QUICK ANSWER — first content element */}
      <section className="bg-white px-4 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For fast larvae knockdown, <AmazonLink search="summit mosquito bits" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Mosquito Bits</AmazonLink> are the best pick &mdash; they release BTI within about 30 minutes and clear treated water within 24 hours &mdash; while Mosquito Dunks slow-release the same BTI for a full 30 days. Most GTA homeowners keep both.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Mosquito Bits start releasing BTI within about 30 minutes and reach full larvae kill within 24 hours.</li>
              <li>Mosquito Dunks slow-release BTI for roughly 30 days; Bits last about 7 to 14 days per application.</li>
              <li>An 8-oz container of Bits treats 500&ndash;1,000 sq ft of water surface and costs about $15&ndash;$22 in Canada.</li>
              <li>Both use BTI (Bacillus thuringiensis israelensis) and are Health Canada-approved &mdash; safe for humans, pets, fish, frogs, and pollinators.</li>
              <li>Bits and Dunks are stocked at Canadian Tire, Home Depot, Rona, Lowe&rsquo;s, and Amazon.ca.</li>
              <li>BTI only treats the water you apply it to; adult mosquitoes flying in still need a barrier spray.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
            <div className="mt-4">
              <BuyLink search="summit mosquito bits" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE TO BUY */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Mosquito Bits: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Summit Chemical Mosquito Bits (orange and green container) is the version you will usually find on Canadian shelves. Pricing varies by retailer and time of year — buy in spring before peak-season markup.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">8 oz container</th>
                  <th className="px-4 py-3 text-left">30 oz value pack</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Canadian Tire',     small: '$14.99 – $19.99', large: '$34.99 – $44.99', avail: 'In-store + online · most consistent stock' },
                  { name: 'Home Depot Canada', small: '$14.97 – $18.97', large: '$36.97 – $46.97', avail: 'In-store + same-day pickup' },
                  { name: 'Rona',              small: '$15.49 – $21.49', large: '$38.99 – $48.49', avail: 'In-store + online' },
                  { name: 'Lowe\'s Canada',    small: '$14.99 – $19.99', large: '$36.99 – $46.99', avail: 'In-store + online' },
                  { name: 'Garden centres',    small: '$15 – $22',        large: '$38 – $52',       avail: 'Independent stocks vary' },
                ].map(({ name, small, large, avail }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{small}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{large}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{avail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <BuyLink tag={AMZ_TAG} search="summit mosquito bits">Check Mosquito Bits price on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Compare with Mosquito Dunks →</BuyLink>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices accurate as of May 2026. The 30-oz value pack is roughly 33% cheaper per ounce — buy it if you have multiple rain barrels, a pond, or want to share with a neighbour. Stock up in April–May before peak-season demand.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Bits kill larvae in your treated water — not the adult mosquitoes flying onto your property.</strong> For complete yard protection in the GTA, combine bits/dunks (your standing water) with professional barrier spray on vegetation. Bits cost $15/season per water source. Barrier spray covers the whole yard for 21–30 days.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
              <Link href="/free-yard-assessment" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-6 py-3 rounded-full text-sm shadow-lg transition-colors whitespace-nowrap">
                Get a free yard quote →
              </Link>
              <span className="text-xs text-amber-800">Tired of DIY? We&rsquo;ll handle the whole yard. From $99 · 150+ five-star reviews · GTA only.</span>
            </div>
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
                name: 'Summit Mosquito Bits — 30 oz Value Pack',
                why: 'Three times the size of the 8-oz container for roughly twice the price — about 33% cheaper per ounce. The right buy for properties with multiple rain barrels, a pond, or a neighbour to split with.',
                search: 'summit mosquito bits',
                score: 8.5,
                pros: ['Roughly 33% cheaper per ounce than the 8 oz', 'Treats 4–8x the area of the small container', 'Sealed bits keep 2–3 years in dry storage'],
                cons: ['Overkill for a single rain barrel — the 8 oz covers a typical yard', 'Once opened, use within a year and keep it dry'],
              },
              {
                badge: 'Best Overall — Fastest Kill',
                name: 'Summit Mosquito Bits (8 oz)',
                why: 'The fastest larvae kill you can buy — starts releasing BTI within 30 minutes and clears treated water within 24 hours. One container treats 500–1,000 sq ft of water surface.',
                search: 'summit mosquito bits',
                score: 8.7,
                featured: true,
                pros: ['Releases BTI within about 30 minutes', 'Full larvae kill within 24 hours', 'Safe for pets, fish, and pollinators'],
                cons: ['Lasts 7–14 days — rain-barrel owners are better served by a Dunk', 'Only treats the water you apply it to'],
              },
              {
                badge: 'Best for Rain Barrels & Ponds',
                name: 'Summit Mosquito Dunks (6-pack)',
                why: 'The same BTI in a slow-release tablet: one dunk per 50-gallon rain barrel covers about 30 days, so a 6-pack handles the whole May–September season. Fish-safe in ornamental ponds.',
                search: 'summit mosquito dunks',
                score: 8.6,
                pros: ['~30 days of coverage per dunk — set and forget', 'One 6-pack covers a rain barrel all season', 'Safe for goldfish, koi, and water plants'],
                cons: ['Slow release — larvae found today call for Bits instead', 'The floating tablet is visible in small bird baths'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Found wrigglers right now?</strong> The <em>Best Overall</em> 8-oz Bits clear treated water within 24 hours &mdash; keep a container in the shed for every surprise find. <strong>Rain barrel or pond you check monthly?</strong> Drop in a <em>Dunk</em> &mdash; one tablet lasts about 30 days versus 7&ndash;14 for Bits. <strong>Several barrels, a pond, or a neighbour to split with?</strong> The 30-oz <em>Best Value</em> pack runs about 33% cheaper per ounce. Whichever you pick, BTI only handles larvae in the water you treat &mdash; the adults flying in are the job of a <Link href="/mosquito-control">whole-yard barrier spray</Link>.
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
                  ['Coverage per dose', '500–1000 sq ft (8 oz)', '100 sq ft per dunk'],
                  ['Typical Canada price', '$15–$22 (8 oz)', '$14–$20 (6-pack)'],
                  ['Application method', 'Sprinkle / spread', 'Drop in water'],
                  ['Storage life sealed', '2–3 years', '3+ years'],
                  ['Safe for fish/pets', 'Yes — completely', 'Yes — completely'],
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
            <BuyLink tag={AMZ_TAG} search="summit mosquito bits" className="!px-3 !py-1.5 !text-xs">Check Bits price</BuyLink>
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks" className="!px-3 !py-1.5 !text-xs">Check Dunks price</BuyLink>
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Leaning toward the tablet? We keep a separate <Link href="/blog/mosquito-dunks-canada-guide" className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-2">Mosquito Dunks Canada guide</Link> for the dunk-specific ground this comparison does not cover &mdash; how to break a tablet down for a bird bath, what happens to a dunk that dries out between rains, and Canadian pricing by pack size.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <h2>How Mosquito Bits Work</h2>
          <p>Mosquito Bits are corn-cob granules coated with BTI (<em>Bacillus thuringiensis</em> subspecies <em>israelensis</em>) — a soil bacterium discovered in 1976 that specifically targets the digestive systems of mosquito and black fly larvae. The corn-cob granules float briefly when sprinkled onto water, then sink as they absorb moisture. As the bits dissolve, they release BTI proteins into the water column where larvae filter-feed. Not sure the wrigglers you found are mosquito larvae? Our <Link href="/blog/mosquito-larvae-identification">mosquito larvae identification guide</Link> shows exactly what to look for before you treat.</p>
          <p>BTI is one of the most species-specific insecticides ever developed. It only affects mosquito larvae, black fly larvae, and a few related midge species. Humans, pets, fish, frogs, dragonflies, water beetles, beneficial insects, pollinators, and birds are completely unaffected. Health Canada has approved BTI for residential use, and some provinces approve it for drinking water reservoirs. The timings quoted throughout this guide — full larvae kill within 24 hours, 7&ndash;14 days of control from Bits, about 30 days from a Dunk — are Summit&rsquo;s own product-label figures, not our field measurements.</p>

          <h2>How Much to Actually Use: The Label Rates</h2>
          <p>The number on the front of the bag is a coverage area, not a dose, which is why most people badly over-apply. Summit&rsquo;s registered label (US EPA Reg. No. 6218-86) gives the real rates, and they are small:</p>
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
          <p>A large share of Canadians searching for Mosquito Bits are not treating a rain barrel at all &mdash; they are trying to kill fungus gnats in houseplant soil. That use is legitimate and it is on the label: fungus gnat larvae, usually <em>Bradysia</em> species, are a labelled target pest alongside mosquito and black fly larvae, and the same BTI that kills a mosquito wriggler kills a gnat larva in potting mix.</p>
          <p>Summit&rsquo;s label gives a soil-drench method, known informally as &ldquo;gnat tea&rdquo;:</p>
          <ol>
            <li>Mix <strong>4 tablespoons of Bits per 1 gallon of water</strong> (roughly 60 mL per 4 L).</li>
            <li>Let it steep <strong>30 minutes</strong>, then skim off the floating granules &mdash; or steep the bits inside a nylon stocking so there is nothing to skim afterwards.</li>
            <li>Stir, then water your plants with the treated water, wetting the <strong>soil surface</strong> where the larvae actually live.</li>
            <li><strong>Repeat weekly for three weeks.</strong> This is the step people skip and the one that decides the outcome: the drench kills larvae but not eggs and not flying adults, so three weekly rounds are what carry you through the full life cycle.</li>
          </ol>
          <p>You can also just sprinkle the dry granules over the soil surface and water them in. It works, and it is easier, but the dose is uncontrolled and wet corn-cob can grow surface mould in a pot that never dries. The drench is the cleaner method indoors; dry sprinkling is fine for outdoor containers.</p>
          <p><strong>Indoors, Bits beat Dunks clearly.</strong> A dunk is engineered to dissolve slowly across about 30 days, so steeping one for a gnat drench takes roughly 24 hours and still gives you a weaker, less predictable brew &mdash; and a quarter-tablet sitting in a plant pot looks exactly as odd as it sounds. Bits release their BTI in about half an hour, which is the whole reason the houseplant world standardised on them.</p>
          <p>BTI is only the larval half of a gnat problem, though. The adults you see flying need sticky traps, and the reason larvae are there at all is soil that stays wet too long &mdash; our <Link href="/blog/how-to-get-rid-of-fungus-gnats-houseplants">fungus gnat guide for houseplants</Link> covers the watering fix and the trap-plus-drench combination that ends an infestation instead of just suppressing it each week.</p>

          <h2>When to Use Bits Instead of Dunks</h2>
          <ul>
            <li><strong>You found larvae unexpectedly</strong> — wriggling in a saucer, an old bucket, a clogged gutter — sprinkle bits for 30-minute knockdown</li>
            <li><strong>Small water sources</strong> — bird baths, kiddie pools, plant saucers — where a floating dunk tablet would be visually awkward</li>
            <li><strong>Pet water bowls left outside</strong> — sprinkle a tiny pinch (BTI is safe; the bits are essentially corn-cob anyway)</li>
            <li><strong>Drainage trays under outdoor planters</strong></li>
            <li><strong>Tarp-covered boats</strong> with rainwater pooled on top</li>
            <li><strong>Septic tank ventilation pipes</strong> that can hold water</li>
            <li><strong>Storm drain catch basins</strong> on your property</li>
          </ul>

          <h2>When Dunks Are Better</h2>
          <ul>
            <li><strong>Rain barrels</strong> — drop one dunk per 50 gallons, replace monthly</li>
            <li><strong>Decorative ponds with fish</strong> — slow-release lasts the season, fish unaffected</li>
            <li><strong>Neglected swimming pools</strong> with accumulated rainwater</li>
            <li><strong>Drainage ditches</strong> that hold water for weeks</li>
            <li><strong>Tree holes and stump cavities</strong></li>
            <li><strong>Any standing water you can&rsquo;t check on weekly</strong></li>
          </ul>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Or let us handle it</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray covers your whole yard from $99 — backed by 150+ five-star reviews and serving 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>The Smart Approach: Use Both</h2>
          <p>Most Canadian homeowners with mosquito issues end up using BOTH. The dunk goes in the rain barrel for set-and-forget protection — drop it in May, forget about it until June. The bits container sits in the garden shed for emergency use whenever you discover larvae somewhere unexpected.</p>
          <p>For a typical GTA backyard with one rain barrel and a few potential standing-water spots, your annual BTI budget is roughly $30: one 6-pack of dunks ($15) covers the rain barrel for the full May–September season, and one 8-oz container of bits ($15–$22) handles every other standing-water situation that comes up. That $30 is the cheapest half of the job; for the other half, <Link href="/mosquito-control-cost">what professional mosquito control costs</Link> starts at $99 for a single treatment and scales with lot size. On a typical suburban lot — the kind a <Link href="/markham-mosquito-control">Markham mosquito control</Link> quote covers — the BTI still earns its $30, it just cannot reach the adults.</p>

          <h2>Bits + Barrier Spray: The Complete Mosquito Strategy</h2>
          <p>BTI bits and dunks solve the LARVAL side of mosquito control — but they only work on water you actually treat. Adult mosquitoes flying in from neighbours&rsquo; yards, ravines, and creeks are unaffected. On the deep, tree-lined lots north of the city this is most of the problem — a sprinkle of bits in the plant saucers does nothing about what is already flying, which is the gap <Link href="/vaughan-mosquito-control">mosquito control in Vaughan</Link> is built to close. For complete protection in your GTA backyard:</p>
          <ol>
            <li><strong>BTI bits/dunks</strong> in any standing water on your property ($30/season)</li>
            <li><strong>Habitat modification</strong> — drain anything you can drain, mow short, clear leaf litter</li>
            <li><strong>Professional barrier spray</strong> — <Link href="/mosquito-control">BuzzSkito&rsquo;s seasonal program</Link> targets adult mosquitoes flying onto your property, with Health Canada-approved residual formula that lasts 21–30 days per treatment</li>
          </ol>
          <p>One note on the standing-water audit in step two, because it usually stops at the back door: the sump pit, the floor drain whose trap has dried out, and the laundry tub with a weeping trap are standing water too. They matter less for mosquitoes than a rain barrel does, and they matter a great deal for the damp-basement insects that share the same water &mdash; which is why our <Link href="/blog/best-silverfish-traps">silverfish trap buying guide</Link> and <Link href="/blog/best-centipede-killer-canada">centipede product guide</Link> both start with the humidity rather than with a spray. Lidding the pit and pouring water down seldom-used drains takes ten minutes and closes several problems at once.</p>
          <p>That three-part stack covers mosquitoes, but BTI is only one product on a much longer Canadian shelf — our <Link href="/pest-product-guides">pest product guides</Link> group everything we have researched, from larvicides and traps through to repellents, by pest and by category.</p>
          <p>One device deliberately left off the stack: the UV bug trap. It is the first thing most homeowners buy and the layer that does the least — independent trap research puts mosquitoes under 5% of what a UV-plus-fan trap catches. If you are weighing one against a season of BTI, we break down <Link href="/blog/dynatrap-canada-review">whether DynaTraps actually work on mosquitoes</Link>, model by model.</p>

          <h2>Are Mosquito Bits Legal in Canada? What the PMRA Actually Says</h2>
          <p>Yes &mdash; BTI larvicides are registered for sale in Canada and sit on the shelf at Canadian Tire, Home Depot, Rona and Home Hardware. The question keeps resurfacing because the regulatory picture has two layers, and searchers keep landing on the wrong one.</p>
          <p>Health Canada&rsquo;s <strong>Pest Management Regulatory Agency (PMRA)</strong> registers every pesticide sold in Canada, and each registered product carries a PCP (Pest Control Products Act) number on its label. In its Bti fact sheet, the PMRA states that it has classified nearly all Bti products used against mosquito and black fly larvae as <strong>Restricted</strong>, on the grounds that they must be applied only to the water where the larvae exist; it adds that <strong>commercial class</strong> Bti products may be used against black fly and mosquito larvae only in private ponds and farm dugouts where there is no outflow past the property line. Those classes govern the large-volume products a municipality or licensed applicator uses on open water &mdash; not the small consumer packs sold for containerized water around a house, which is why you can buy Bits and Dunks without a licence and why nothing here is banned.</p>
          <p>Two caveats worth stating plainly. That PMRA fact sheet is marked ARCHIVED, last updated 4 May 2017, so treat it as background rather than the current rulebook. And the authoritative check for any specific product is the live <strong>PMRA Pesticide Label Search</strong> database: take the PCP number printed on the package in your hand and look it up. A US EPA registration number on an imported bag is not a Canadian registration &mdash; that distinction is the actual substance behind most &ldquo;is this legal here&rdquo; confusion.</p>
          <p>On safety, the same PMRA fact sheet is worth quoting precisely, because it is routinely paraphrased too loosely in both directions. The PMRA states that no product containing Bti may be applied to <em>treated, finished drinking water</em> for human consumption. Separately, it states that the agency has no human health and safety concerns about the application of registered Bt products to bodies of water that will be used for human consumption. In plain terms: BTI is not something you add to a municipal system or a kitchen tap, and it is not regarded as a health hazard where it is applied to raw water bodies under its registered uses.</p>

          <h2>The &ldquo;Bucket of Doom&rdquo; and the 2026 Canadian Dunk Shortage</h2>
          <p>If you went looking for dunks in June 2026 and found empty pegs, you were not imagining it. CBC News reported that mosquito dunks were selling out as bug season collided with the &ldquo;bucket of doom&rdquo; trend; a manager at a Home Hardware on Bank Street in Ottawa told CBC that his store was sold out by mid-June and so was the company&rsquo;s warehouse. Cottage Life covered the same DIY trend through the summer. That shortage, not any regulatory action, is the origin of most of the &ldquo;you can&rsquo;t get these in Canada&rdquo; chatter.</p>
          <p>The technique is simple, and it is the one situation where the Bits-versus-Dunks question genuinely changes shape. Fill a five-gallon bucket with water, add a handful of grass clippings, straw or leaves, and let it sit until it goes properly foul. Female mosquitoes strongly prefer that organic stink to clean water, so the bucket becomes the most attractive place in your yard to lay eggs. Add BTI, and every egg laid there dies as a larva. It is an attract-and-kill trap built out of the mosquito&rsquo;s own preferences rather than against them.</p>
          <p>For this specific job the label points toward Bits. Bucket water is deliberately deep, dark and loaded with organic matter, which is precisely the condition Summit flags as needing the higher 8 oz per 1,000 sq ft rate, and Bits let you top the dose back up on the 7&ndash;14 day schedule as the brew degrades. A dunk works too and demands less attention; it is simply harder to dose upward in dirty water. Whichever you choose, the bucket has to be re-dosed all season &mdash; an untreated bucket of doom is just an unusually effective mosquito nursery, and that is the failure mode to take seriously before building one.</p>
          <p>The counter-argument deserves airing, because it surfaces every time the trend does. Aquatic and wildlife-pond hobbyists point out that BTI is not perfectly selective even within its own corner of the insect world: it also affects some non-target chironomid midges, the harmless lake flies whose larvae feed dragonfly nymphs, fish and birds. That is a fair point, and it is consistent with what BTI is &mdash; a larvicide for mosquitoes, black flies and a few closely related midges, not for insects generally. It does not weaken the evidence that BTI is safe for people, pets, fish, amphibians and pollinators. What it does mean is that an established wildlife pond running as a real ecosystem is a poor candidate for routine BTI, while a rain barrel, a bird bath, a tarp puddle or a purpose-built bucket support no midge food web worth protecting and cost you nothing ecologically. Treat the containers; leave a healthy pond alone unless it is genuinely producing mosquitoes. Where a pond is the problem, <Link href="/blog/pond-aerator-mosquito-larvae-canada">moving the water with an aerator</Link> stops egg-laying without adding anything to it at all, since mosquitoes will not lay on a disturbed surface.</p>

          <h2>Other BTI Formats Sold in Canada &mdash; and One Canadian Product That Is Not BTI</h2>
          <p>Bits and Dunks are the two consumer formats, but BTI is sold in several others, and knowing the names saves you searching for the wrong thing:</p>
          <ul>
            <li><strong>Granular BTI</strong> (for example AquaBac 200G) &mdash; corn-grit granules for broadcasting over larger or vegetated water. Generally sold into the commercial and municipal channel rather than retail.</li>
            <li><strong>Liquid BTI concentrate</strong> (the VectoBac-type products) &mdash; measured and diluted for spray application over large sites. Again a commercial-channel product, and one of the aquatic uses covered by the PMRA&rsquo;s restricted classification above.</li>
            <li><strong>Gnatrol</strong> &mdash; a BTI formulation made specifically for fungus gnat larvae in greenhouse and nursery growing media. It is the professional counterpart to steeping Bits for a gnat drench, and it is bought through horticultural suppliers rather than hardware stores.</li>
            <li><strong>BTI briquets</strong> (Bactimos and similar) &mdash; the slow-release tablet format under other brand names, essentially the same idea as a Dunk.</li>
          </ul>
          <p>The important shelf competitor in Canada is not BTI at all. <strong>Doktor Doom 90-Day Larva Killer briquettes</strong> are made by a Canadian company and stocked at Canadian Tire right beside the Summit products, and their active ingredient is <strong>novaluron</strong>, an insect growth regulator. Novaluron does not destroy the larval gut the way BTI does; it stops larvae from moulting successfully, so they never emerge as adults. One briquette treats standing water up to <strong>200 litres</strong> and is rated for <strong>90 days</strong>, against roughly 30 days for a BTI dunk.</p>
          <p>The trade-off is real in both directions. If you want a rain barrel handled with one decision in May, a 90-day novaluron briquette is a genuinely longer interval than any BTI product offers. If you have just lifted a lid and found the water squirming, BTI is the faster answer &mdash; it kills feeding larvae within about 24 hours, whereas a growth regulator has to wait for those larvae to attempt their next moult. The two are not interchangeable, and a page that only ever mentions BTI is leaving out the product most likely to be sitting next to it on a Canadian shelf.</p>

          <h2>Black Flies: Why Bits Work on the Label but Not in Your Yard</h2>
          <p>Black fly larvae are a labelled target for BTI, and BTI genuinely is the standard tool used against them across Canada. For a homeowner, though, the honest answer is usually that Bits will not solve a black fly problem, and the reason inverts everything else on this page.</p>
          <p>Black flies do not breed in standing water. They breed in <em>flowing</em> water &mdash; in the riffles and runs of streams and rivers, where larvae anchor themselves to rocks and vegetation and filter the current. That is why cottage country, Northern Ontario and much of Quebec have a black fly season that has nothing to do with how tidy anyone&rsquo;s yard is. Sprinkling Bits into your containerized standing water treats mosquitoes and will not touch a black fly population coming off a creek two properties over.</p>
          <p>Treating a flowing watercourse is exactly the restricted-class aquatic use the PMRA reserves for licensed applicators, and it is not a DIY project &mdash; dosing moving water requires calculating flow rate, and a consumer pack has no rate table for it. Where black flies are managed in Canada, it is generally through a municipal or regional program that treats watercourses on a schedule. For a property owner, the realistic tools are timing (black fly activity peaks in late spring and collapses in summer heat), physical barriers, and repellents rather than larviciding.</p>

          <h2>Finding Bits on a Canadian Shelf: Names, Sizes and Search Traps</h2>
          <p>The product to look for is <strong>Summit Chemical Mosquito Bits</strong> in the orange and green bag, sold in an 8 oz size and a 30 oz size (the 30 oz bag carries Summit&rsquo;s model number 117-6). The matching tablets are <strong>Summit Mosquito Dunks</strong>, most commonly a 6-pack card. In-store they are almost never with the aerosol insecticides &mdash; look in lawn and garden, or in the seasonal pest aisle that appears in spring and disappears in September, which is a large part of why the product seems to vanish from stores in the autumn.</p>
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

      <CTASection heading="BTI Handles Larvae · Barrier Spray Handles the Rest" subtext="Get a free quote for whole-yard barrier spray. From $99. Health Canada approved. 30-day residual." variant="dark" />
    </>
  )
}
