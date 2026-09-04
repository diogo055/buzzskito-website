import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogPostCTA from '@/components/BlogPostCTA'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import InlineYardRiskCTA from '@/components/InlineYardRiskCTA'
import BuyLink from '@/components/BuyLink'
import AmazonLink from '@/components/AmazonLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'mosquito-dunks-canada-guide'
const DATE = '2026-04-28'
const UPDATED = '2026-04-28'
const TITLE = 'Mosquito Dunks in Canada: What BTI Is, Where to Buy, and How to Use Them'

const FAQS = [
  {
    question: 'What are mosquito dunks?',
    answer: 'Mosquito dunks are small donut-shaped tablets containing Bacillus thuringiensis israelensis (BTI), a naturally occurring soil bacterium. When dropped into standing water, the BTI is consumed by mosquito larvae and disrupts their digestive system, killing them within 24 hours. Each dunk treats up to 100 square feet of water surface for approximately 30 days. Dunks are sold by Summit Chemical and other brands at Canadian Tire, Home Depot, Rona, and most garden centres in Canada for $10–$20 per pack of 6.',
  },
  {
    question: 'Are mosquito dunks safe for pets, fish, and humans?',
    answer: 'Yes. BTI is one of the safest insecticides ever developed — it specifically targets mosquito and black fly larvae and has no effect on humans, pets, fish, frogs, beneficial insects, pollinators, or birds. Health Canada has approved BTI for use in drinking water reservoirs in some provinces. You can safely use mosquito dunks in: rain barrels, ornamental ponds with fish, bird baths, drainage ditches, neglected pools, and any water that cannot be drained. Dogs occasionally chew on dunks — this causes mild stomach upset at most.',
  },
  {
    question: 'Where should I put mosquito dunks?',
    answer: 'Use mosquito dunks in any standing water that cannot be drained, including: rain barrels (1 dunk per 50 gallons), ornamental ponds and water features, neglected swimming pools, large bird baths (use Mosquito Bits granules instead for small bird baths), tree holes, drainage ditches, and any container holding water for more than a week. Do NOT use them in puddles that dry out within a few days — they need water present to work.',
  },
  {
    question: 'How long do mosquito dunks last?',
    answer: 'A single mosquito dunk lasts approximately 30 days in still water and treats up to 100 square feet of surface area. Heavy rain or water turnover may reduce effectiveness — replace after major rain events. For continuous summer protection in a rain barrel or pond, drop in a fresh dunk on the first of each month from May through September.',
  },
  {
    question: 'Do mosquito dunks actually work?',
    answer: 'Yes — BTI dunks are evidence-backed and used by mosquito control districts across North America. Peer-reviewed research consistently shows >90% mortality of mosquito larvae within 24–48 hours of contact. However, dunks only kill larvae in the water you treat. Adult mosquitoes flying in from neighbours\' yards or natural water bodies (creeks, ravines, ponds nearby) are unaffected. For complete yard protection, combine dunks (larvae control) with professional barrier spray (adult control).',
  },
  {
    question: 'Mosquito Dunks vs Mosquito Bits — what is the difference?',
    answer: 'Same active ingredient (BTI), different format. Dunks are slow-release tablets ideal for long-term water sources (rain barrels, ponds — 30 days per dunk). Bits are quick-release granules that work within minutes — use for emergency knockdown of larvae outbreaks or for small water sources you don\'t want to look at a tablet floating in (small bird baths, kiddie pools). Many homeowners use both: dunks for the rain barrel, bits sprinkled when you find larvae anywhere unexpected.',
  },
  {
    question: 'Where to buy mosquito dunks in Canada?',
    answer: 'Mosquito dunks are widely available in Canada: Canadian Tire (in-store and online), Home Depot Canada, Rona, Lowe\'s Canada, and most garden centres. Look for the Summit Chemical brand (most common — orange and white packaging) or Safer\'s Brand (also widely stocked). Prices range from $10–$20 for a 6-pack, $25–$35 for a 20-pack. Stock up at the start of mosquito season (April–May) — supplies often run low by mid-summer.',
  },
  {
    question: 'How much do mosquito dunks cost in Canada?',
    answer: 'In Canada, expect to pay $12–$20 for a 6-pack of mosquito dunks at major retailers in 2026. Canadian Tire and Home Depot typically list 6-packs at $13.97–$15.99. Rona is usually $14.49–$16.49. A 20-pack runs $25–$35 — better value if you have multiple rain barrels or a pond. Prices increase 10–15% in peak season (June–August), so buying in April–May saves money. Each dunk treats 100 sq ft of water for ~30 days, so a 6-pack covers a typical Canadian backyard rain barrel for the entire May–September season.',
  },
  {
    question: 'Are mosquito dunks BTI-only or do they have other ingredients?',
    answer: 'Mosquito dunks are essentially pure BTI (Bacillus thuringiensis subspecies israelensis) compressed with an inert binder that allows the slow 30-day release. The BTI is the only active ingredient — it specifically targets mosquito and black fly larvae. There are no synthetic chemicals, no pyrethroids, no insecticides beyond the BTI bacterium. This is what makes dunks safe for fish, pets, pollinators, and humans. The Summit Chemical brand sold most widely in Canada is registered with Health Canada under PCP # 18158.',
  },
  {
    question: 'Can I use mosquito dunks in a swimming pool?',
    answer: 'Only in a NEGLECTED or unused pool that has standing water. Mosquito dunks are not meant for active, chlorinated swimming pools — chlorine kills larvae anyway, and pool filtration would render the dunk ineffective. If you have an inactive pool that has accumulated rainwater, drop in a dunk to prevent it from becoming a mosquito breeding site until you can drain it. For active pools, just maintain proper chlorine levels.',
  },
  {
    question: 'Where can you buy mosquito dunks near you in Canada?',
    answer: 'You can buy mosquito dunks near you at most Canadian hardware and garden retailers — Canadian Tire, Home Depot, Rona, and Lowe\'s all stock them in-store, alongside independent garden centres and Amazon.ca. The quickest way to check local stock is to search \'mosquito dunks\' on the Canadian Tire or Home Depot website and filter by store availability using your postal code. Stock is most reliable in April–May; shelves often thin out by mid-July, so buy early.',
  },
  {
    question: 'How do you use mosquito dunks for fungus gnats?',
    answer: 'To use mosquito dunks against fungus gnats, break a dunk into pieces and either float a chunk in your watering can overnight or steep it in a few litres of water, then use that BTI-infused water on your houseplants. The BTI kills fungus gnat larvae in the soil the same way it kills mosquito larvae. Repeat with each watering for 2–3 weeks to break the breeding cycle. Mosquito Bits are often easier for potting soil because you can sprinkle the granules right on top.',
  },
  {
    question: 'What are mosquito dunks made of?',
    answer: 'Mosquito dunks are made of dried Bacillus thuringiensis israelensis (BTI) — a naturally occurring soil bacterium — compressed with an inert binder into a slow-dissolving donut-shaped tablet. BTI is the only active ingredient; there are no synthetic pesticides, pyrethroids, or added chemicals. As the tablet breaks down in water it releases BTI spores that mosquito and black fly larvae eat. The Summit brand sold across Canada is registered with Health Canada under PCP #18158.',
  },
  {
    question: 'Where do you buy mosquito dunks in stores?',
    answer: 'In stores, mosquito dunks are stocked in the garden, pest-control, or seasonal aisle at Canadian Tire, Home Depot, Rona, and Lowe\'s, plus most independent garden centres and nurseries. Look for the Summit Chemical orange-and-white box or the Safer\'s Brand package near the insect sprays and larvicides. If you cannot find them on the shelf, ask staff to check the seasonal stockroom — dunks are sometimes only put out once mosquito season begins in May.',
  },
  {
    question: 'Do mosquito dunks really work?',
    answer: 'Yes — in the water you actually treat. Mosquito control districts across North America run BTI larvicides as a standard tool, and published trials repeatedly show over 90% larval mortality within 24–48 hours. One dunk covers roughly 100 sq ft of water surface. What a dunk cannot do is touch adult mosquitoes that are already flying, because those arrive from a neighbour\'s yard, a ravine, a creek, or a storm drain you do not own. That half of the problem is what a barrier spray on vegetation handles.',
  },
  {
    question: 'Do mosquito dunks kill anything else?',
    answer: 'Almost nothing. The U.S. Environmental Protection Agency states that BTI toxins affect only the larvae of mosquitoes, black flies, and fungus gnats. Adult mosquitoes, dragonfly nymphs, water beetles, snails, tadpoles, frogs, fish, birds, bees, and earthworms are unaffected, because BTI only becomes active in the specific alkaline gut of those larvae. That narrow spectrum is why the EPA also notes BTI is approved for pest control in organic farming operations.',
  },
  {
    question: 'What is the difference between mosquito bites and mosquito dunks?',
    answer: 'Two different things get mixed together in this question. Mosquito Dunks are a BTI larvicide tablet you drop into standing water to kill larvae before they hatch — they do nothing for a bite you already have, which is a topical antihistamine or hydrocortisone job. The comparison most people actually mean is Mosquito Dunks vs Mosquito Bits: same BTI bacterium, different format. Dunks are slow-release tablets lasting about 30 days; Bits are quick-release granules that start killing larvae within minutes.',
  },
  {
    question: 'Are mosquito dunks harmful to humans?',
    answer: 'No. The U.S. Environmental Protection Agency states that BTI has no toxicity to people, and BTI is registered for residential use in both countries — EPA Reg. No. 6218-47 in the United States and Health Canada PCP #18158 in Canada. The Summit label carries the signal word CAUTION for moderate eye irritation only. Wash your hands after handling a dunk, keep the box out of reach of children, and do not deliberately treat household drinking water at home.',
  },
  {
    question: 'Are mosquito dunks safe for dogs?',
    answer: 'Yes. BTI acts in the gut of mosquito, black fly, and fungus gnat larvae and has no toxicity to mammals, so a dog drinking from a treated rain barrel, pond, or watering trough is not at risk. Dogs do sometimes fish a floating dunk out and chew it. Treat that as a physical problem rather than a poisoning — mild stomach upset is the usual outcome — and call your veterinarian if a whole tablet was swallowed or your dog seems unwell.',
  },
  {
    question: 'Are mosquito dunks safe for cats?',
    answer: 'Yes. The same reasoning applies as for dogs: BTI has no toxicity to mammals, so a cat drinking treated water is not affected. Cats are also far less likely than dogs to chew a tablet, so the practical risk is lower still. If you are treating a bowl or fountain a cat drinks from, Mosquito Bits granules are tidier than a floating tablet — though a bowl you refresh every two or three days never gets the week of still water larvae need.',
  },
  {
    question: 'Are mosquito dunks safe for birds?',
    answer: 'Yes. BTI does not affect birds, and dunks are routinely used in large bird baths, ornamental ponds, and water gardens. For a small bird bath the simplest control is dumping and refilling every three days, which beats larvae on timing alone — mosquito larvae need more than a week of undisturbed water to reach a flying adult. If you would rather treat than refill, Mosquito Bits granules are the neater choice in a shallow basin.',
  },
  {
    question: 'Are mosquito dunks safe for fish?',
    answer: 'Yes. Goldfish, koi, and mosquitofish are unaffected, and BTI is used routinely in stocked ornamental ponds. Fish eat mosquito larvae themselves, so a well-stocked pond often needs no dunk at all. Where a dunk earns its place is a pond with no fish, or the shallow, plant-choked margins and bog shelves that fish do not patrol — that is where larvae survive in an otherwise stocked pond.',
  },
  {
    question: 'Are mosquito dunks safe for bees and other pollinators?',
    answer: 'Yes. BTI is active only in the gut of mosquito, black fly, and fungus gnat larvae, so bees, butterflies, fireflies, ladybugs, and dragonflies are not affected. The U.S. Environmental Protection Agency notes BTI is approved for pest control in organic farming operations, which is a demanding bar for non-target safety. This specificity is the main reason BTI is preferred over broad-spectrum larvicides in ponds, rain gardens, and pollinator plantings.',
  },
  {
    question: 'Are mosquito dunks safe for plants?',
    answer: 'Yes. BTI is a soil bacterium, not a herbicide, and it does not harm roots, foliage, vegetables, or aquatic plants. Water steeped with a piece of dunk is safe to pour on houseplants and vegetable beds — that is exactly how gardeners use it against fungus gnats. Because the EPA states BTI is approved for pest control in organic farming operations, water from a treated rain barrel can still go on an organic vegetable garden.',
  },
  {
    question: 'Do mosquito dunks expire?',
    answer: 'Summit does not print a best-before date on the box — the package carries a lot number instead. BTI spores are stable while the tablets stay dry, cool, and out of direct sunlight, so leftovers from a 20-pack normally carry over to the next season if you keep them sealed in a bag or bin. What ruins a dunk is moisture. One that has been wetted, dried, and re-wetted, or stored damp in a shed floor puddle, has already given up part of its BTI and should be replaced rather than trusted.',
  },
  {
    question: 'Do mosquito dunks still work if they sink?',
    answer: 'Yes. A dunk keeps releasing BTI whether it floats on the surface or sits on the bottom, and Summit says as much on the label. Mosquito larvae are filter feeders that graze through the whole water column, so they take up the spores regardless of where the tablet ends up. The only real drawback of a sunk dunk is that you cannot see it, so put the monthly replacement on a calendar instead of relying on spotting the tablet.',
  },
  {
    question: 'How do you make a mosquito dunk bucket?',
    answer: 'Fill a 5-gallon bucket about two-thirds with water, add a handful or two of straw or grass clippings, and let it steep for a few days until it smells foul — that stink is what attracts egg-laying Culex females. Then add one quarter of a mosquito dunk and refresh it every 30 days. Drill overflow holes about six inches below the rim, cover the top with hardware cloth, and lay a stick inside as an escape ramp. This build follows the instructions published by K-State Research and Extension in Johnson County, Kansas.',
  },
  {
    question: 'How many mosquito dunks do I need for a season?',
    answer: 'It depends where you live, because the season length does. In Canada and the northern United States a rain barrel needs about five dunks for a May-to-September season, so a 6-pack covers it. In the Mid-Atlantic and Midwest, budget six or seven for roughly April to October. In the Southeast and Southwest, eight or nine for roughly March to November. On the Gulf Coast and in Florida, Hawaii, and Puerto Rico, mosquitoes breed close to year-round — plan on about twelve, which means a 20-pack, not a 6-pack.',
  },
  {
    question: 'Where can you buy mosquito dunks in the United States?',
    answer: 'Summit Mosquito Dunks are stocked nationwide at Home Depot, Lowe\'s, Walmart, Ace Hardware, Tractor Supply, Target, and independent garden centres, plus Amazon.com. Look for the orange-and-white Summit box in the garden or pest-control aisle. Before you buy, it is worth searching your county name plus "mosquito abatement district" — many U.S. districts inspect standing water and hand out free BTI dunks to residents, a service that has no equivalent in Canada.',
  },
  {
    question: 'Are mosquito dunks EPA registered?',
    answer: 'Yes. Summit Mosquito Dunks are registered with the U.S. Environmental Protection Agency under EPA Reg. No. 6218-47, held by Summit Chemical Company of Baltimore, Maryland. The EPA has registered five BTI strains across 48 pesticide products for residential, commercial, and agricultural use. In Canada the same product is registered with Health Canada under PCP #18158. The EPA also reports no documented resistance to BTI as a larvicide, even in mosquito populations treated for decades.',
  },
  {
    question: 'Do mosquito dunks kill fungus gnats?',
    answer: 'Yes. The U.S. Environmental Protection Agency lists fungus gnat larvae as one of only three insect groups BTI affects, alongside mosquito and black fly larvae. The BTI kills the larvae living in damp potting soil; it does not kill the adult gnats already flying around your windows, which is why the population seems unchanged for the first week. A fungus gnat cycles from egg to adult in roughly two to three weeks, so keep the treated water going for at least three weeks to break the cycle.',
  },
  {
    question: 'How do you use mosquito dunks in potted plants?',
    answer: 'Do not bury a whole tablet in the pot. Break off about a quarter of a dunk, drop it into a gallon jug or watering can of water, let it steep for 24 to 48 hours, then water your plants with that BTI-infused water. Repeat at every watering for three weeks. Mosquito Bits are easier for potting soil because you sprinkle the granules straight onto the top inch and water them in, which also avoids leaving a tablet sitting in a decorative pot.',
  },
  {
    question: 'Can you break a mosquito dunk into pieces?',
    answer: 'Yes, and for small containers you should. Summit\'s rate is one dunk per 100 sq ft of water surface, which is far more BTI than a 5-gallon bucket, a plant saucer, or a watering can needs. K-State Research and Extension uses one quarter of a dunk per 5-gallon bucket. Score the tablet with a knife or snap it by hand — the BTI is distributed evenly through the dunk, so a quarter tablet treats a quarter of the volume and a 6-pack stretches to 24 small treatments.',
  },
  {
    question: 'Do mosquito dunks work for a lawn?',
    answer: 'Not in the way people usually mean. A dunk is a water treatment, not a turf treatment — scattering dunks across a lawn does nothing, because there is no standing water for the BTI to dissolve into. Where dunks pay off is the water that lawn drains into: the low spot that stays wet for a week after rain, the catch basin, the ditch at the property line, the clogged gutter overhead. Adults already flying over the lawn are a barrier spray problem, not a larvicide problem.',
  },
  {
    question: 'Can you use mosquito dunks in animal watering troughs?',
    answer: 'Yes. Summit\'s label lists animal watering troughs among the approved use sites, alongside rain barrels, tree holes, flower pots and saucers, planter reservoirs, roof gutters, water gardens, koi ponds, and unused swimming pools. BTI has no toxicity to horses, cattle, dogs, or other livestock, so a treated trough stays safe to drink from. Refresh the dunk about every 30 days, and top the trough up rather than draining and refilling while the tablet is still working.',
  },
  {
    question: 'Are mosquito dunks approved for organic gardening?',
    answer: 'Yes. The U.S. Environmental Protection Agency states that BTI is approved for pest control in organic farming operations, and Summit markets Mosquito Dunks as approved for use in organic production. In practice that means water from a treated rain barrel can be used on an organic vegetable garden without breaking the rules of home organic growing. If you are certified organic commercially, confirm the specific product against your certifier\'s input list, since approved-input lists are program-specific.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Dunks Canada: BTI Tablets, Where to Buy',
  description: 'Yes, mosquito dunks are sold across Canada — pure BTI, and the Summit brand is Health Canada-registered (PCP #18158). One dunk treats 100 sq ft for 30 days.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('mosquito-dunks-canada-guide')

// HowTo schema for the mosquito dunk bucket ("bucket of doom"). The U.S. SERP for
// "mosquito dunks" carries a how-to extension result and video results for this
// method and we had no HowTo markup at all. Additive JSON-LD only — nothing that
// already existed on the page is altered. Build steps follow the instructions
// published by K-State Research and Extension (Johnson County, Kansas).
const BUCKET_HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to build a mosquito dunk bucket (the mosquito bucket of doom)',
  description:
    'Build a deliberate egg-laying trap: a 5-gallon bucket of water gone deliberately foul with straw or grass clippings, dosed with a quarter of a BTI mosquito dunk, so the Culex females that find it lay eggs that never reach adulthood.',
  totalTime: 'PT20M',
  supply: [
    { '@type': 'HowToSupply', name: '2 to 5 gallon bucket' },
    { '@type': 'HowToSupply', name: 'A handful or two of straw, hay, or grass clippings' },
    { '@type': 'HowToSupply', name: 'One quarter of a BTI mosquito dunk per 5-gallon bucket' },
    { '@type': 'HowToSupply', name: 'Hardware cloth or window screen for the top' },
    { '@type': 'HowToSupply', name: 'A stick to use as an escape ramp' },
  ],
  tool: [{ '@type': 'HowToTool', name: 'Drill for overflow holes' }],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Site the bucket in shade and out of traffic',
      text: 'Choose a shaded, low-traffic corner of the yard. Shade slows evaporation and Culex females prefer sheltered water. Keep it away from doors, patios, and play areas.',
    },
    {
      '@type': 'HowToStep',
      name: 'Drill overflow holes about six inches below the rim',
      text: 'Drill a ring of small holes roughly six inches down from the top edge so heavy rain overflows out of the holes instead of washing larvae and treated water over the rim.',
    },
    {
      '@type': 'HowToStep',
      name: 'Fill the bucket half to two-thirds with water',
      text: 'Fill a 2 to 5 gallon bucket between one half and two thirds full. Leaving headroom above the waterline is what makes the overflow holes work.',
    },
    {
      '@type': 'HowToStep',
      name: 'Add straw or grass clippings and let it steep',
      text: 'Drop in a handful or two of straw, hay, or grass clippings and leave the bucket for a few days until the water smells foul. Culex mosquitoes hunt for stagnant, organic-rich water, so the smell is the attractant.',
    },
    {
      '@type': 'HowToStep',
      name: 'Add one quarter of a mosquito dunk',
      text: 'Break a BTI mosquito dunk into quarters and drop one quarter into a 5-gallon bucket. A whole dunk is rated for about 100 square feet of water surface, which is far more than a bucket needs.',
    },
    {
      '@type': 'HowToStep',
      name: 'Cover the bucket with hardware cloth and add an escape ramp',
      text: 'Lay hardware cloth or window screen over the top so mosquitoes can still reach the water but larger animals cannot fall in, and rest a stick inside as an escape ramp for anything that does.',
    },
    {
      '@type': 'HowToStep',
      name: 'Refresh the dunk every 30 days and top up the water',
      text: 'Replace the quarter dunk about every 30 days through your local mosquito season, and top the bucket up as it evaporates. Never tip an untreated bucket out onto the ground, because that releases any surviving larvae.',
    },
  ],
}

export default function MosquitoDunksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 guide to mosquito dunks in Canada.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Dunks Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BUCKET_HOWTO_SCHEMA) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Dunks Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Where to buy them in Canada, how they actually work, and how to combine them with yard barrier spray for total mosquito control.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Dunks (6-pack)" asin="B005UTKT0W" search="summit mosquito dunks" label="Best for standing water" />

      <div className="max-w-4xl mx-auto px-4 -mt-6 sm:-mt-8 relative z-10">
        <BlogPostCTA />
      </div>

      {/* QUICK ANSWER — first content element */}
      <section className="bg-white px-4 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For long-term standing water like rain barrels and ponds, <AmazonLink search="summit mosquito dunks" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Mosquito Dunks</AmazonLink> are the best pick &mdash; each donut-shaped BTI tablet treats up to 100 sq ft of water for about 30 days and is safe for fish, pets, and pollinators. For fast knockdown of unexpected larvae, use quick-release Mosquito Bits instead.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>One mosquito dunk treats up to 100 sq ft of water surface and lasts about 30 days.</li>
              <li>Dunks contain only BTI (Bacillus thuringiensis israelensis); the Summit brand is Health Canada-registered under PCP #18158.</li>
              <li>BTI kills mosquito and black fly larvae within 24&ndash;48 hours and is safe for humans, pets, fish, frogs, and pollinators.</li>
              <li>A 6-pack costs about $10&ndash;$20 at hardware stores (Canadian Tire, Home Depot, Rona, Lowe&rsquo;s); Amazon.ca runs higher, about $27&ndash;$30.</li>
              <li>Use one dunk per 50 gallons in a rain barrel and replace it monthly from May through September.</li>
              <li>Dunks only kill larvae in treated water; adult mosquitoes flying in need a barrier spray.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
            <div className="mt-4">
              <BuyLink search="summit mosquito dunks" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE TO BUY — top of page for shopping intent */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Mosquito Dunks: Where to Buy in Canada (Prices Compared)</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Summit Chemical mosquito dunks (the orange-and-white 6-pack) and Safer&rsquo;s Brand are the two most widely stocked options across Canadian retailers. Here&rsquo;s the typical pricing as of spring 2026:
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">6-Pack Price</th>
                  <th className="px-4 py-3 text-left">20-Pack Price</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Canadian Tire',     six: '$14.99 – $15.99', twenty: '$29.99 – $34.99', avail: 'In-store + online · most consistent stock' },
                  { name: 'Home Depot Canada', six: '$13.97 – $15.97', twenty: '$26.97 – $32.97', avail: 'In-store + online · pickup same day' },
                  { name: 'Rona',              six: '$14.49 – $16.49', twenty: '$28.99 – $34.49', avail: 'In-store + online' },
                  { name: 'Lowe\'s Canada',    six: '$14.99 – $15.99', twenty: '$29.99 – $33.99', avail: 'In-store + online' },
                  { name: 'Garden centres',    six: '$13 – $18',        twenty: '$28 – $36',       avail: 'Independent local stocks vary' },
                ].map(({ name, six, twenty, avail }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{six}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{twenty}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{avail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Mosquito Dunks price on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="summit mosquito bits">Check Mosquito Bits (faster-acting) →</BuyLink>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices accurate as of May 2026. Stock up in April–May — supply tightens by July and prices rise 10–15% in peak season. Each dunk treats 100 sq ft of water surface for ~30 days, so a 6-pack covers most Canadian backyard rain barrels through the entire May–September season. Not sure where the standing water on your property is hiding? Track down these <Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-emerald-700 underline font-semibold">hidden mosquito breeding spots</Link> before you treat.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Important — dunks only solve half the problem.</strong> They kill mosquito <em>larvae</em> in the water you treat. Adult mosquitoes flying in from your neighbours&rsquo; yards, ravines, and creeks are unaffected. To actually enjoy your yard bite-free, combine dunks (your standing water) with <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> on vegetation. Dunks: $15/season. Barrier spray: from $99/treatment &mdash; here is <Link href="/mosquito-control-cost" className="text-emerald-700 underline font-semibold">what a full season of mosquito control costs</Link> once lot size is factored in.
            </p>
          </div>
        </div>
      </section>

      {/* AWARD ROW — multi-intent picks */}
      <section className="bg-white px-4 pt-6">
        <div className="max-w-4xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Which BTI Format for Which Job"
            awards={[
              {
                badge: 'Best for Ponds & Multiple Barrels',
                name: 'Summit Mosquito Dunks — 20-Pack',
                why: 'The $25–$35 bulk box — better per-dunk value than the 6-pack when you have multiple rain barrels, a pond, or a drainage ditch to cover from May through September.',
                search: 'summit mosquito dunks',
                score: 8.6,
                pros: ['Cheaper per dunk than the 6-pack', 'Covers several water sources all season', 'One spring purchase covers the season — shelves thin out by mid-July'],
                cons: ['A single rain barrel only needs a 6-pack per season', 'Same 100 sq ft / ~30 days per dunk — bulk doesn’t change coverage'],
              },
              {
                badge: 'Best Overall',
                name: 'Summit Mosquito Dunks (6-Pack)',
                why: 'One dunk treats up to 100 sq ft of standing water for ~30 days — a single 6-pack covers a typical rain barrel for the entire May–September season, and it’s completely safe for fish, pets, and pollinators.',
                asin: 'B005UTKT0W',
                search: 'summit mosquito dunks',
                score: 8.8,
                featured: true,
                pros: ['Kills larvae for ~30 days per dunk', 'BTI is safe for fish, pets, and pollinators', 'Budget-friendly and widely stocked in Canada'],
                cons: ['Only treats water you can reach', 'Does nothing to adult mosquitoes flying in'],
              },
              {
                badge: 'Best for Fast Knockdown',
                name: 'Summit Mosquito Bits (BTI granules)',
                why: 'The same BTI in quick-release granules — works within minutes when you find larvae unexpectedly, and easier than a dunk for fungus gnats because you sprinkle it straight onto potting soil.',
                search: 'summit mosquito bits',
                score: 8.7,
                pros: ['Acts within minutes, not days', 'Right size for bird baths and plant saucers', 'Sprinkles onto potting soil for fungus gnat larvae'],
                cons: ['Days of coverage, not the ~30 a dunk gives a rain barrel', 'Long-term water sources are better served by a dunk'],
              },
            ]}
            whichToBuy={
              <>
                <strong>One rain barrel?</strong> The <em>Best Overall</em> 6-pack solves the whole season &mdash; one dunk per month, May through September. <strong>A pond, several barrels, or a ditch that holds water?</strong> The 20-pack costs less per dunk and won&rsquo;t run out in August. <strong>Wrigglers in a bird bath, saucer, or houseplant soil?</strong> Quick-release <em>Bits</em> work in minutes and go straight onto potting soil for fungus gnats. The limit they all share: BTI kills larvae in treated water only &mdash; the adults flying in from ravines and neighbours&rsquo; yards are what a <Link href="/mosquito-control">whole-yard barrier spray</Link> handles.
              </>
            }
          />
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Dunks Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Active ingredient', 'Bacillus thuringiensis israelensis (BTI)'],
                  ['What it kills', 'Mosquito larvae and black fly larvae'],
                  ['Safe for', 'Humans, pets, fish, frogs, birds, pollinators, beneficial insects'],
                  ['Coverage per dunk', 'Up to 100 sq ft of water surface'],
                  ['Duration', '~30 days per dunk'],
                  ['Where to use', 'Rain barrels, ponds, neglected pools, drainage ditches, tree holes'],
                  ['Where NOT to use', 'Active chlorinated swimming pools, fast-draining puddles'],
                  ['Brands in Canada', 'Summit (most common), Safer\'s Brand'],
                  ['Where to buy in Canada', 'Canadian Tire, Home Depot, Rona, Lowe\'s, garden centres, Amazon.ca'],
                  ['Typical price', '$10–$20 per 6-pack · $25–$35 per 20-pack'],
                  ['Health Canada approval', 'Yes — approved for residential use'],
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

      {/* U.S. REGULATORY IDENTITY — additive. The page already carries the Canadian
          registration (Health Canada PCP #18158); this gives a U.S. reader the EPA
          anchor they had none of, side by side, on one URL. */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Mosquito Dunks in the United States: EPA registration and what the label allows</h2>
          <p className="speakable text-base text-gray-800 leading-relaxed mb-5">
            <strong>It is the same product in both countries, registered twice.</strong> <strong>In the United States</strong>, Summit Mosquito Dunks are registered with the U.S. Environmental Protection Agency under <strong>EPA Reg. No. 6218-47</strong>, held by Summit Chemical Company of Baltimore, Maryland; the label carries the signal word <strong>CAUTION</strong> for moderate eye irritation. <strong>In Canada</strong>, the identical product is registered with Health Canada under <strong>PCP #18158</strong>. Neither number changes how the dunk works &mdash; but if you are checking a product against a regulator&rsquo;s database, you need the number for your own country.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="min-w-[640px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Detail</th>
                  <th className="px-4 py-3 text-left">United States</th>
                  <th className="px-4 py-3 text-left">Canada</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Registration number', 'EPA Reg. No. 6218-47', 'Health Canada PCP #18158'],
                  ['Registrant', 'Summit Chemical Company, Baltimore, MD', 'Same product, sold as Summit Mosquito Dunks'],
                  ['Active ingredient', 'Bacillus thuringiensis subspecies israelensis (BTI)', 'Bacillus thuringiensis subspecies israelensis (BTI)'],
                  ['Signal word on the label', 'CAUTION — moderate eye irritation', 'Follow label directions; domestic-class product'],
                  ['Approved for residential use', 'Yes', 'Yes'],
                  ['Organic production', 'EPA states BTI is approved for pest control in organic farming operations', 'Check the specific product listing with your certifier'],
                  ['Documented resistance', 'EPA reports none, even after decades of treatment', 'Same finding — BTI resistance is not a field problem'],
                  ['Typical retailers', 'Home Depot, Lowe\'s, Walmart, Ace Hardware, Tractor Supply, Target', 'Canadian Tire, Home Depot, Rona, Lowe\'s, garden centres'],
                ].map(([k, us, ca]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-semibold text-brand-800 bg-brand-50 w-1/4">{k}</td>
                    <td className="px-4 py-3 text-gray-700">{us}</td>
                    <td className="px-4 py-3 text-gray-700">{ca}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-5">
            The EPA&rsquo;s own BTI fact sheet is worth knowing in one line, because it settles most of the questions people ask about dunks: the EPA has registered <strong>five BTI strains across 48 pesticide products</strong> for residential, commercial, and agricultural use; <strong>BTI toxins affect only the larvae of mosquitoes, black flies, and fungus gnats</strong>; <strong>BTI has no toxicity to people</strong>; it is <strong>approved for pest control in organic farming operations</strong>; and there is <strong>no documented resistance to BTI as a larvicide</strong>, even in mosquito populations that have been treated with it for decades. Very few pesticides can claim that last one.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            Summit&rsquo;s label also lists more approved use sites than most people realise: rain barrels, tree holes, flower pots and saucers, planter reservoirs, roof gutters, water gardens, koi ponds, unused swimming pools, birdbaths, and <strong>animal watering troughs</strong>. Same tablet, same 100 sq ft rate &mdash; a trough a horse drinks from is a labelled use, not an off-label improvisation.
          </p>
        </div>
      </section>

      {/* WHERE TO BUY — UNITED STATES. Sibling table to the Canadian one above; the
          Canadian table is untouched and still carries the Canadian shopping intent. */}
      <section className="bg-gradient-to-br from-sky-50 to-white border-y border-sky-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-sky-800 uppercase tracking-wider mb-2">Where to Buy in the United States &middot; Updated 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Mosquito Dunks: Where to Buy in the United States (Prices Compared)</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            <strong>In the United States</strong>, Summit Mosquito Dunks are a national stock item rather than a seasonal specialty, so you will find the orange-and-white box in the garden or pest-control aisle almost everywhere. Typical 2026 U.S. shelf prices, in USD:
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="min-w-[600px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer (U.S.)</th>
                  <th className="px-4 py-3 text-left">6-Pack</th>
                  <th className="px-4 py-3 text-left">20-Pack</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Home Depot',      six: '$12.98 – $15.98', twenty: '$27.98 – $36.98', avail: 'In-store + online · same-day pickup · the most-searched U.S. option' },
                  { name: 'Lowe\'s',         six: '$13.98 – $16.98', twenty: '$29.98 – $38.98', avail: 'In-store + online · garden centre aisle' },
                  { name: 'Walmart',         six: '$11.98 – $15.48', twenty: '$26.98 – $35.98', avail: 'Often the lowest shelf price · stock varies by store' },
                  { name: 'Ace Hardware',    six: '$14.99 – $17.99', twenty: '$32.99 – $39.99', avail: 'Independently owned — pricing and stock vary locally' },
                  { name: 'Tractor Supply',  six: '$13.99 – $16.99', twenty: '$29.99 – $37.99', avail: 'Best bet if you are treating watering troughs or stock tanks' },
                  { name: 'Target',          six: '$13.99 – $16.99', twenty: '$29.99 – $37.99', avail: 'Seasonal aisle, spring through late summer' },
                  { name: 'Garden centres',  six: '$13 – $19',        twenty: '$30 – $42',       avail: 'Independent nurseries and farm co-ops · stock varies' },
                ].map(({ name, six, twenty, avail }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{six}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{twenty}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{avail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Mosquito Dunks price on Amazon →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="summit mosquito bits">Check Mosquito Bits (faster-acting) →</BuyLink>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Typical U.S. shelf prices as of the 2026 season, in USD. They vary by store and climb roughly 10&ndash;15% at peak. <strong>Canadian prices are in the CAD table further up this page.</strong> One more U.S.-only option worth checking before you spend anything: search your county name plus &ldquo;mosquito abatement district&rdquo;. Several hundred of these publicly funded districts operate across the United States, many will inspect standing water on request, and a good number hand out <strong>free BTI dunks to residents</strong>. Canada has no equivalent district system &mdash; standing water on public land goes to your municipality (311 in the GTA).
          </p>
          <div className="mt-5 rounded-xl bg-sky-50 border-l-4 border-sky-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-sky-900">Buy for your season, not for the box size.</strong> A 6-pack is one dunk a month for five months, which is exactly right for Canada and the northern U.S. tier. It is <em>not</em> a season in Florida, along the Gulf Coast, in Hawaii, or in Puerto Rico, where breeding runs close to year-round and a single rain barrel can go through a dozen dunks. The regional table further down this page has the arithmetic.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>How Mosquito Dunks Work</h2>
          <p>Mosquito dunks contain dried BTI bacterial spores compressed into a slow-release tablet. When placed in water, the dunk slowly releases BTI spores into the surrounding water column. Mosquito larvae are filter feeders — they consume the spores as they feed, and the BTI proteins disrupt their digestive system. Death occurs within 24–48 hours.</p>
          <p>Importantly, BTI is highly specific to mosquito and black fly larvae (and a few related species). It does not affect any other organism: humans, pets, fish, frogs, dragonflies, water beetles, beneficial insects, pollinators, or birds. This specificity is why BTI is the gold standard for environmentally responsible mosquito control.</p>

          <InlineYardRiskCTA pretext="Free 60-second tool · 1-100 risk score" />

          <h2>Where to Use Mosquito Dunks (and Where Not To)</h2>
          <h3>✓ Ideal locations</h3>
          <ul>
            <li><strong>Rain barrels</strong> — drop one dunk per 50 gallons. Replace monthly.</li>
            <li><strong>Ornamental ponds</strong> — safe for goldfish, koi, and water plants.</li>
            <li><strong>Neglected swimming pools</strong> — pools that have lost chlorine and accumulated rainwater.</li>
            <li><strong>Drainage ditches</strong> that hold water for weeks.</li>
            <li><strong>Tree holes and stump cavities</strong> that collect rainwater.</li>
            <li><strong>Large bird baths</strong> (use Mosquito Bits for small ones).</li>
            <li><strong>Boats covered with tarps</strong> that pool water on top.</li>
          </ul>

          <h3>✗ Don&rsquo;t use them here</h3>
          <ul>
            <li><strong>Active chlorinated swimming pools</strong> — chlorine kills larvae anyway.</li>
            <li><strong>Puddles that dry within 3–5 days</strong> — the dunk needs water to work.</li>
            <li><strong>Drinking water</strong> — although BTI is technically safe, don&rsquo;t intentionally treat your drinking water at home.</li>
          </ul>

          <h2>Mosquito Dunks vs Mosquito Bits</h2>
          <p>Same active ingredient (BTI). Different format and use cases:</p>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Factor</th><th className="px-3 py-2 text-left">Mosquito Dunks</th><th className="px-3 py-2 text-left">Mosquito Bits</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Format</td><td className="px-3 py-2">Donut-shaped tablet</td><td className="px-3 py-2">Granules</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Release speed</td><td className="px-3 py-2">Slow (30 days)</td><td className="px-3 py-2">Fast (minutes)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Best for</td><td className="px-3 py-2">Long-term sources (rain barrel, pond)</td><td className="px-3 py-2">Quick knockdown / small water</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Visibility</td><td className="px-3 py-2">Visible in water (some mind this)</td><td className="px-3 py-2">Sinks/dissolves quickly</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Typical price</td><td className="px-3 py-2">$10–$20 per 6-pack</td><td className="px-3 py-2">$15–$25 per 8 oz</td></tr>
            </tbody>
          </table>
          <div className="not-prose my-4 flex flex-wrap items-center gap-3">
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks" className="!px-3 !py-1.5 !text-xs">Check Dunks price</BuyLink>
            <BuyLink tag={AMZ_TAG} search="summit mosquito bits" className="!px-3 !py-1.5 !text-xs">Check Bits price</BuyLink>
          </div>
          <p>Most Canadian homeowners with mosquito issues use both — dunks in rain barrels and ponds for set-and-forget protection, bits sprinkled into bird baths or unexpected standing water as needed.</p>

          <h2>Do mosquito dunks really work?</h2>
          <p className="speakable"><strong>Yes &mdash; in the water you actually treat.</strong> BTI larvicides are standard equipment for mosquito control districts across North America, and published trials repeatedly show over 90% larval mortality within 24&ndash;48 hours of contact. One dunk covers about 100 sq ft of water surface for roughly 30 days. What a dunk cannot do is touch an adult mosquito that is already flying.</p>
          <p>That distinction is the entire honest answer, and it is where most of the online argument about dunks comes from. Two people can both use dunks correctly and come away with opposite verdicts, because they were solving different problems. If your mosquitoes are being produced <em>on your property</em> &mdash; a rain barrel, a tarp on the woodpile, a clogged gutter, a low spot that stays wet for a week &mdash; a dunk is close to a complete fix for a few dollars. If your mosquitoes are arriving from the ravine behind you, a neighbour&rsquo;s green pool, a creek, or a municipal storm system, you can treat every drop of water you own and still get bitten, because none of that water was yours.</p>
          <p>Two field details worth carrying: <strong>NC State Extension</strong> tells homeowners that dunks &ldquo;last around 3&ndash;4 weeks before they need to be replaced&rdquo; &mdash; slightly shorter than the label&rsquo;s 30 days, so treat 30 days as a ceiling rather than a target, especially in hot weather or after heavy rain that flushes the container. And a dunk does nothing for a <em>lawn</em>; it is a water treatment, and there is a section on that below.</p>

          <h2>Do mosquito dunks kill anything else?</h2>
          <p className="speakable"><strong>Almost nothing.</strong> The U.S. Environmental Protection Agency states that BTI toxins affect only the larvae of <strong>mosquitoes, black flies, and fungus gnats</strong>. Nothing else in the water is affected &mdash; not adult mosquitoes, not dragonfly nymphs, water beetles, snails, tadpoles, frogs, fish, birds, bees, or earthworms. BTI only becomes active in the specific alkaline gut those three larval groups share.</p>
          <p>This is the question every safety page on the internet answers backwards. Most pages, including the older parts of this one, tell you what BTI is <em>safe for</em>. The more useful framing is what it actually <em>kills</em>, because a larvicide with a three-species kill list is a fundamentally different product from a broad-spectrum insecticide, and that difference is why the EPA notes BTI is approved for pest control in organic farming operations.</p>
          <div className="not-prose rounded-xl border border-gray-200 overflow-x-auto my-6">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">BTI kills</th>
                  <th className="px-3 py-2 text-left">Where</th>
                  <th className="px-3 py-2 text-left">BTI does not affect</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mosquito larvae', 'Any standing water it is dosed into', 'Adult mosquitoes — already flying, never eat the spores'],
                  ['Black fly larvae', 'Running water; BTI is used for this at watershed scale', 'Mosquito pupae — they stop feeding, so nothing gets ingested'],
                  ['Fungus gnat larvae', 'Damp potting soil and greenhouse benches', 'Dragonfly and damselfly nymphs, water beetles, water striders'],
                  ['—', '—', 'Fish, frogs, tadpoles, turtles, snails'],
                  ['—', '—', 'Bees, butterflies, fireflies, ladybugs, earthworms'],
                  ['—', '—', 'Birds, pets, livestock, people'],
                ].map(([kills, where, safe]) => (
                  <tr key={`${kills}-${safe}`} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{kills}</td>
                    <td className="px-3 py-2 text-gray-700">{where}</td>
                    <td className="px-3 py-2 text-gray-700">{safe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Kill list and non-target list follow the U.S. Environmental Protection Agency&rsquo;s BTI for mosquito control fact sheet. One consequence worth knowing: because BTI must be eaten, it does not kill <strong>pupae</strong> &mdash; the comma-shaped &ldquo;tumblers&rdquo; that no longer feed. If a container is full of pupae, dunking it will not stop this batch from emerging; dump the water instead, then dunk the refill.</p>

          <h2>Are mosquito dunks harmful to humans?</h2>
          <p className="speakable"><strong>No.</strong> The U.S. Environmental Protection Agency states plainly that <strong>BTI has no toxicity to people</strong>, and BTI is registered for residential use in both countries &mdash; EPA Reg. No. 6218-47 in the United States, Health Canada PCP #18158 in Canada. The Summit label carries the signal word <strong>CAUTION</strong> for moderate eye irritation only, which is a handling instruction, not a health warning about the treated water.</p>
          <p>Sensible handling, which is all the label actually asks for: wash your hands after handling a tablet, avoid rubbing your eyes while you do it, and keep the box out of reach of children the way you would any garden product. BTI is used at municipal scale in water bodies across North America, and Health Canada has approved BTI for use in some drinking water reservoirs &mdash; but that is a treated-and-monitored public system, not a licence to dose the water in your own kitchen. Treat your rain barrel, your pond, and your ditch; leave your drinking water alone.</p>

          <h2>What is the difference between mosquito bits and mosquito dunks?</h2>
          <p className="speakable"><strong>Two different things get mixed together in this question.</strong> Mosquito <em>Dunks</em> are a BTI tablet you drop in standing water to kill larvae &mdash; they do nothing for a mosquito <em>bite</em> you already have, which is an antihistamine or hydrocortisone job. The real comparison is <strong>Dunks vs Bits</strong>: same BTI bacterium, different release speed. Dunks last about 30 days; Bits work within minutes.</p>
          <p>The format table further up this page compares them factor by factor. What most people actually want is the decision rule, so here it is by scenario:</p>
          <div className="not-prose rounded-xl border border-gray-200 overflow-x-auto my-6">
            <table className="min-w-[620px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">What you are treating</th>
                  <th className="px-3 py-2 text-left">Buy</th>
                  <th className="px-3 py-2 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rain barrel (50 gal)', 'Dunks', 'Set-and-forget for 30 days; the barrel refills itself and you are not there to re-dose'],
                  ['5-gallon bucket trap', 'Dunks (quarter tablet)', 'You want a month of coverage from a fraction of a tablet'],
                  ['Ornamental pond, koi pond, water garden', 'Dunks', 'Large surface, long-lived water, and the tablet is safe with fish'],
                  ['Drainage ditch or a wet low spot', 'Dunks', 'Slow release survives the days between your visits'],
                  ['Bird bath or plant saucer', 'Bits', 'Small, shallow, and a floating tablet looks wrong; granules disappear'],
                  ['Larvae you just found and want gone today', 'Bits', 'Minutes rather than days — this is the whole point of the granules'],
                  ['Fungus gnats in houseplant soil', 'Bits (or a steeped quarter dunk)', 'Granules sprinkle onto the top inch of soil; a dunk has to be steeped first'],
                  ['Animal watering trough', 'Dunks', 'Labelled use site, monthly cadence, no residue concern for livestock'],
                ].map(([what, buy, why]) => (
                  <tr key={what} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{what}</td>
                    <td className="px-3 py-2 text-gray-700">{buy}</td>
                    <td className="px-3 py-2 text-gray-700">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="not-prose my-4 flex flex-wrap items-center gap-3">
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks" className="!px-3 !py-1.5 !text-xs">Check Dunks price</BuyLink>
            <BuyLink tag={AMZ_TAG} search="summit mosquito bits" className="!px-3 !py-1.5 !text-xs">Check Bits price</BuyLink>
          </div>
          <p>If you want the two formats compared in more depth, we did that separately in <Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks</Link>.</p>

          <h2>Are mosquito dunks safe for dogs, cats, birds, fish, bees, and plants?</h2>
          <p className="speakable"><strong>Yes to all of them.</strong> BTI only becomes active in the alkaline gut of mosquito, black fly, and fungus gnat larvae, so every other organism in and around the water is unaffected. The U.S. Environmental Protection Agency states BTI has no toxicity to people, and the same specificity is what makes it safe for pets, livestock, fish, birds, and pollinators. Below, one row per question.</p>
          <div className="not-prose rounded-xl border border-gray-200 overflow-x-auto my-6">
            <table className="min-w-[620px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Who</th>
                  <th className="px-3 py-2 text-left">Safe?</th>
                  <th className="px-3 py-2 text-left">What to actually watch for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Dogs', 'Yes', 'Drinking treated water is a non-issue. The real scenario is a dog fishing the tablet out and chewing it — a physical problem, not a poisoning. Expect mild stomach upset; call your vet if a whole dunk was swallowed.'],
                  ['Cats', 'Yes', 'Same reasoning as dogs, and cats rarely chew tablets. For a fountain or bowl a cat drinks from, Bits granules are tidier than a floating tablet.'],
                  ['Fish (goldfish, koi, mosquitofish)', 'Yes', 'Used routinely in stocked ponds. Fish eat larvae themselves, so a dunk earns its keep mainly in fishless ponds and the plant-choked margins fish do not patrol.'],
                  ['Birds', 'Yes', 'Fine in large bird baths and ponds. For a small bath, dumping and refilling every three days beats larvae on timing alone — they need over a week of still water.'],
                  ['Bees, butterflies, fireflies, ladybugs', 'Yes', 'Not affected. EPA notes BTI is approved for pest control in organic farming operations, a demanding bar for non-target safety.'],
                  ['Frogs, tadpoles, turtles', 'Yes', 'Amphibians are unaffected. A dunked pond keeps its frogs and loses its wrigglers.'],
                  ['Plants and vegetables', 'Yes', 'BTI is a soil bacterium, not a herbicide. Water steeped with a piece of dunk is safe on houseplants and vegetable beds — that is the fungus gnat method.'],
                  ['Livestock (horses, cattle)', 'Yes', 'Animal watering troughs are a labelled use site on the Summit label.'],
                  ['People and children', 'Yes', 'EPA: no toxicity to people. Label signal word is CAUTION for moderate eye irritation. Wash hands after handling; store out of reach; do not treat household drinking water.'],
                ].map(([who, safe, note]) => (
                  <tr key={who} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800 whitespace-nowrap">{who}</td>
                    <td className="px-3 py-2 font-bold text-emerald-700">{safe}</td>
                    <td className="px-3 py-2 text-gray-700">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The Mosquito Bucket of Doom: how to build a mosquito dunk bucket</h2>
          <p className="speakable"><strong>A mosquito dunk bucket is a deliberate trap, not a leak you forgot about.</strong> You fill a 5-gallon bucket two-thirds with water, let it go foul with straw or grass clippings, and dose it with a quarter of a mosquito dunk. Female mosquitoes hunt for exactly that kind of stagnant, organic-rich water, lay their eggs in the most attractive water in the yard, and the BTI kills every larva that hatches.</p>
          <p>The method has spread widely in the United States over the last two seasons, and it is genuinely clever: instead of hunting for hidden water, you out-compete it. The build below follows the instructions published by <strong>K-State Research and Extension</strong> in Johnson County, Kansas, which credits the approach to <strong>Doug Tallamy</strong>, the University of Delaware entomologist. <strong>Mississippi State University Extension</strong> has published its own version with an urban entomologist walking through the same steps.</p>
          <div className="not-prose rounded-xl border-2 border-emerald-200 bg-emerald-50/60 p-5 my-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-3">The build &middot; 20 minutes &middot; about $4 of dunk per season</p>
            <ol className="space-y-2.5 text-sm text-gray-800 list-decimal pl-5">
              <li><strong>Pick the spot first.</strong> Shade, low foot traffic, away from doors, patios and play areas. Shade slows evaporation and the females prefer sheltered water.</li>
              <li><strong>Drill overflow holes about six inches below the rim.</strong> Heavy rain then escapes through the holes instead of washing larvae and treated water over the top edge.</li>
              <li><strong>Fill the bucket half to two-thirds.</strong> A 2&ndash;5 gallon bucket is the size the extension services use. The headroom you leave is what makes the overflow holes work.</li>
              <li><strong>Add a handful or two of straw, hay, or grass clippings &mdash; then wait.</strong> Leave it several days until the water smells genuinely foul. That smell <em>is</em> the attractant; a clean bucket of tap water attracts very little.</li>
              <li><strong>Add one quarter of a mosquito dunk.</strong> Not a whole one. A full dunk is rated for about 100 sq ft of water surface, which is many times what a bucket presents.</li>
              <li><strong>Cover the top with hardware cloth and drop in a stick.</strong> The mesh keeps larger animals out while letting mosquitoes in; the stick is an escape ramp for anything that gets in anyway.</li>
              <li><strong>Refresh the quarter dunk every 30 days</strong> through your local season, and top the water up as it evaporates. Never tip an untreated bucket onto the ground &mdash; that releases whatever survived.</li>
            </ol>
          </div>
          <p><strong>How many buckets?</strong> The people running this method typically put out one bucket per quarter-acre, sited at the shaded edges of the property rather than in the middle of the lawn. A 6-pack of dunks broken into quarters gives you 24 bucket-months, which is more than enough for two or three buckets across a full northern season.</p>
          <p><strong>Where a bucket helps and where it does not.</strong> A dunk bucket is an <em>oviposition sink</em>: it competes for the eggs of females that are already in your yard looking for somewhere to lay, and it works on water <em>you</em> control. It has no effect on adults arriving over the fence from a neighbour&rsquo;s yard, a ravine, or a creek &mdash; the same limitation every larvicide shares, including the barrel dunk you already have. That off-property pressure is what a <Link href="/mosquito-control">barrier spray on vegetation</Link> is for. The two work on different halves of the same problem, and there is no reason to run only one of them.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks" className="!px-3 !py-1.5 !text-xs">Check Mosquito Dunks price</BuyLink>
          </div>

          <h2>How to use mosquito dunks: dosing rates, quartering a tablet, and how often to replace</h2>
          <p className="speakable"><strong>The label rate is one dunk per 100 sq ft of water surface, or one dunk per 50 gallons in a rain barrel, replaced about every 30 days.</strong> Almost every container people actually treat is far smaller than 100 sq ft, which is why the extension services and experienced users break tablets into quarters. Depth barely matters; BTI is dosed by <em>surface area</em>, not volume.</p>
          <div className="not-prose rounded-xl border border-gray-200 overflow-x-auto my-6">
            <table className="min-w-[640px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Water source</th>
                  <th className="px-3 py-2 text-left">How much dunk</th>
                  <th className="px-3 py-2 text-left">Replace</th>
                  <th className="px-3 py-2 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rain barrel, ~50 gallons', '1 dunk', 'Every 30 days', 'The label rate this guide uses throughout'],
                  ['5-gallon bucket', '¼ dunk', 'Every 30 days', 'K-State Research and Extension rate for the bucket method'],
                  ['Plant saucer, small bird bath', 'A pinch of Bits, or a small broken piece', 'Weekly, or just refresh the water', 'Refilling every 3 days beats the larvae without any product'],
                  ['Pond or water garden, up to 100 sq ft', '1 dunk', 'Every 30 days', 'Safe with koi, goldfish, frogs and water plants'],
                  ['Pond larger than 100 sq ft', '1 dunk per 100 sq ft of surface', 'Every 30 days', 'Spread them out rather than clustering in one corner'],
                  ['Drainage ditch or wet low spot', '1 dunk per 100 sq ft', 'Every 30 days, sooner after heavy rain', 'Flushing rain is the main reason coverage runs short'],
                  ['Unused or neglected pool', '1 dunk per 100 sq ft', 'Every 30 days', 'A stopgap — drain or restore chlorination when you can'],
                  ['Animal watering trough', '1 dunk', 'Every 30 days', 'Listed use site on the Summit label; top up rather than draining'],
                  ['Watering can for houseplants, 1 gallon', '¼ dunk steeped 24–48 hours', 'Each watering for 3 weeks', 'The fungus gnat method — see the section below'],
                ].map(([src, dose, replace, note]) => (
                  <tr key={src} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{src}</td>
                    <td className="px-3 py-2 text-gray-700">{dose}</td>
                    <td className="px-3 py-2 text-gray-700">{replace}</td>
                    <td className="px-3 py-2 text-gray-700">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3>Break the dunk into quarters</h3>
          <p>The BTI is distributed evenly through the tablet, so a quarter tablet treats a quarter of the water. Score it with a utility knife or snap it by hand &mdash; they are brittle and break cleanly along the ring. This is the single biggest cost saving available on this product: a 6-pack broken into quarters becomes <strong>24 small-container treatments</strong>, which is a whole season of several buckets, saucers, and tree holes from one $13 box. Store the leftover pieces dry.</p>
          <h3>30 days is a ceiling, not a promise</h3>
          <p><strong>NC State Extension</strong> tells homeowners dunks &ldquo;last around 3&ndash;4 weeks before they need to be replaced&rdquo; &mdash; slightly shorter than the 30 days on the label. Heat, heavy rain, and water turnover all shorten it. The practical rule: check at three weeks, and if you see wrigglers, replace early rather than waiting out the calendar month.</p>

          <h2>Do mosquito dunks still work after they sink?</h2>
          <p className="speakable"><strong>Yes.</strong> A dunk keeps releasing BTI whether it floats or sits on the bottom, and Summit states this on the label. Mosquito larvae are filter feeders that graze through the whole water column rather than only the surface, so they take up the spores wherever the tablet ends up. Sinking is normal as the tablet absorbs water and starts breaking down.</p>
          <p>The only real drawback is bookkeeping: once a dunk is out of sight you stop noticing it, and &ldquo;I think there&rsquo;s still one in there&rdquo; becomes a month of untreated water. Put the replacement on a calendar reminder instead of relying on spotting the tablet, and if you want a visual check, drop the next one in a mesh bag tied to the barrel handle.</p>

          <h2>Do mosquito dunks expire?</h2>
          <p className="speakable"><strong>There is no printed expiry date &mdash; the box carries a lot number instead.</strong> BTI spores are stable while the tablets stay dry, cool, and out of direct sunlight, so leftovers from a 20-pack normally carry over to the next season if you keep them sealed in a bag or a lidded bin. Moisture is what ruins a dunk, not time on the shelf.</p>
          <p>A tablet that has been wetted, dried out, and re-wetted &mdash; the one that sat in a puddle on the shed floor, or the half-used pack left open in a humid garage &mdash; has already released part of its BTI and will not give you a full 30 days. That is the one to replace rather than trust. If you buy the 20-pack for the price break, the storage discipline is the whole trick: seal it, keep it off the floor, and keep it out of the sun.</p>

          <h2>Mosquito dunks for fungus gnats and houseplants</h2>
          <p className="speakable"><strong>Mosquito dunks work on fungus gnats because fungus gnat larvae are one of only three things BTI kills.</strong> The U.S. Environmental Protection Agency lists them alongside mosquito and black fly larvae. You do not bury a tablet in the pot &mdash; you steep a quarter of a dunk in water for 24 to 48 hours, then water your plants with that BTI-infused water at every watering for three weeks.</p>
          <p>Two things confuse people about this. First, <strong>the BTI kills larvae in the soil, not the adults flying around the window</strong>, so for the first week nothing appears to change while the adults you already have live out their lives. Second, <strong>a fungus gnat goes from egg to adult in roughly two to three weeks</strong>, so a single treated watering does almost nothing &mdash; you have to keep the treated water going long enough to catch every generation still in the pot.</p>
          <div className="not-prose rounded-xl border border-gray-200 overflow-x-auto my-6">
            <table className="min-w-[600px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Week</th>
                  <th className="px-3 py-2 text-left">What to do</th>
                  <th className="px-3 py-2 text-left">What you should see</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Setup', 'Break off ¼ of a dunk, drop it in a 1-gallon jug of water, steep 24–48 hours. Put yellow sticky cards on the soil surface for the adults.', 'Cloudy-ish water. Sticky cards start filling immediately.'],
                  ['Week 1', 'Water every plant with the BTI water instead of plain water. Let the top inch of soil dry between waterings.', 'Adults still flying — these hatched before you started. Not a failure.'],
                  ['Week 2', 'Keep watering with BTI water. Re-steep a fresh quarter dunk when the jug runs low.', 'Noticeably fewer new adults on the sticky cards.'],
                  ['Week 3', 'Final round of BTI waterings. Replace sticky cards.', 'Close to zero new adults. The cycle is broken.'],
                  ['After', 'Stop the BTI. Bottom-water where you can and stop overwatering — soggy soil is the actual cause.', 'No recurrence unless a new infested plant comes in.'],
                ].map(([week, todo, expect]) => (
                  <tr key={week} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800 whitespace-nowrap">{week}</td>
                    <td className="px-3 py-2 text-gray-700">{todo}</td>
                    <td className="px-3 py-2 text-gray-700">{expect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p><strong>Bits are easier here than dunks.</strong> Mosquito Bits are the same BTI in granule form, and you sprinkle them straight onto the top inch of potting soil and water them in &mdash; no steeping, no jug, no tablet sitting in a decorative pot. Dunks win on cost if you already own a box; Bits win on convenience if houseplants are the only reason you are buying BTI at all. Either way, the durable fix is watering habits: fungus gnats breed in permanently damp soil, so letting the top inch dry between waterings does more than any product.</p>
          <div className="not-prose my-4 flex flex-wrap items-center gap-3">
            <BuyLink tag={AMZ_TAG} search="summit mosquito bits" className="!px-3 !py-1.5 !text-xs">Check Bits for fungus gnats</BuyLink>
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks" className="!px-3 !py-1.5 !text-xs">Check Dunks price</BuyLink>
          </div>

          <h2>Which mosquitoes do dunks actually stop in the United States?</h2>
          <p className="speakable"><strong>The species a dunk is best aimed at is <em>Culex</em> &mdash; and in the United States that is the one that matters most.</strong> The U.S. Centers for Disease Control and Prevention identifies <em>Culex</em> as the primary West Nile virus vector, and West Nile is the leading cause of mosquito-borne disease in the contiguous United States. <em>Culex</em> breeds in exactly the foul, organic-rich standing water a dunk treats.</p>
          <p>That is a stronger case for a $13 box of tablets than most people realise. <strong>In the United States</strong>, the CDC reports more than 1,300 people develop severe neuroinvasive West Nile illness each year and more than 130 die. The larvae behind those infections are not developing in a pristine woodland pond &mdash; they are developing in rain barrels, buckets, clogged gutters, catch basins, and neglected pools. Larvicide is the intervention that meets them where they actually are. <strong>In Canada</strong>, <em>Culex pipiens</em> is likewise the species behind most West Nile surveillance detections, and Public Health Ontario and the Public Health Agency of Canada both put eliminating standing water first &mdash; the Canadian framing on the rest of this page is nuisance biting and black fly, which is accurate for most GTA yards, with West Nile as the reason the standing-water advice is not optional.</p>
          <div className="not-prose rounded-xl border border-gray-200 overflow-x-auto my-6">
            <table className="min-w-[700px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Species</th>
                  <th className="px-3 py-2 text-left">Where in the United States</th>
                  <th className="px-3 py-2 text-left">Where it breeds</th>
                  <th className="px-3 py-2 text-left">Why a dunk matters</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Culex pipiens (northern house mosquito)', 'Northern states', 'Foul, organic-rich water: rain barrels, buckets, clogged gutters, catch basins', 'CDC: primary West Nile vector. The single best target for a dunk.'],
                  ['Culex quinquefasciatus (southern house mosquito)', 'Southern states', 'Same stagnant, nutrient-rich containers and storm drains', 'CDC: primary West Nile vector in the South.'],
                  ['Culex tarsalis', 'Western states', 'Irrigation water, ditches, ponds, flooded fields', 'CDC: primary West Nile vector in the West.'],
                  ['Aedes albopictus (Asian tiger mosquito)', 'Southeast, Mid-Atlantic, lower Midwest', 'Small containers — tires, saucers, toys, tree holes, bottle caps', 'The classic U.S. container breeder. Water volumes are tiny, so use a broken quarter dunk or Bits.'],
                  ['Aedes aegypti', 'Florida, Hawaii, Texas, Puerto Rico, U.S. Virgin Islands, American Samoa', 'Containers in and immediately around the home', 'CDC: spreads dengue, chikungunya and Zika. Container control is the front line.'],
                  ['Anopheles quadrimaculatus / An. freeborni', 'Most of the continental United States', 'Sunlit permanent water, marsh edges, ponds', 'Historic malaria vectors. Larvae lie flat under the surface film rather than hanging head-down.'],
                ].map(([sp, where, breeds, why]) => (
                  <tr key={sp} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800"><em>{sp}</em></td>
                    <td className="px-3 py-2 text-gray-700">{where}</td>
                    <td className="px-3 py-2 text-gray-700">{breeds}</td>
                    <td className="px-3 py-2 text-gray-700">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Species ranges and disease associations follow the U.S. Centers for Disease Control and Prevention. If you are not sure what is in your water, the wriggler identification guide is here: <Link href="/blog/mosquito-larvae-identification">how to identify mosquito larvae</Link>.</p>

          <h2>How many mosquito dunks does your season actually need?</h2>
          <p className="speakable"><strong>A 6-pack is a season in Canada. It is not a season in Florida.</strong> Everywhere else on this page assumes a May-to-September window, which is correct for the GTA and for the northern United States. Further south the breeding season runs far longer, and the arithmetic changes with it &mdash; a single rain barrel on the Gulf Coast can consume roughly a dozen dunks a year. Find your row before you decide between the 6-pack and the 20-pack.</p>
          <div className="not-prose rounded-xl border border-gray-200 overflow-x-auto my-6">
            <table className="min-w-[660px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Region</th>
                  <th className="px-3 py-2 text-left">Treat from</th>
                  <th className="px-3 py-2 text-left">Dunks for one 50-gal barrel</th>
                  <th className="px-3 py-2 text-left">Buy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gulf Coast, Florida, Hawaii, Puerto Rico', 'Close to year-round', '~12', '20-pack — a 6-pack does not cover a season here'],
                  ['Southeast & Southwest (GA, SC, TX, AZ, southern CA)', '~March to November', '~9', '20-pack, or two 6-packs'],
                  ['Mid-Atlantic & Midwest', '~April to October', '~7', 'One 6-pack plus a couple spare'],
                  ['Northern tier U.S. (New England, Upper Midwest, Pacific NW, Mountain)', '~May to September', '~5', '6-pack covers it'],
                  ['Canada — GTA and southern Ontario', 'May to September', '~5', '6-pack covers it — the figure used throughout this guide'],
                ].map(([region, from, count, buy]) => (
                  <tr key={region} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{region}</td>
                    <td className="px-3 py-2 text-gray-700">{from}</td>
                    <td className="px-3 py-2 font-mono text-gray-800">{count}</td>
                    <td className="px-3 py-2 text-gray-700">{buy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Two adjustments to that table. Multiply by the number of separate water sources you are treating &mdash; a barrel, a pond and a ditch is three dunks a month, not one. And in a hot, wet summer, count on replacing early: <strong>NC State Extension</strong>&rsquo;s 3&ndash;4 week interval is the realistic one, so the totals above are a floor rather than a ceiling. Quartering tablets for buckets and small containers is what keeps the bill from moving.</p>

          <h2>Do mosquito dunks work for a lawn?</h2>
          <p className="speakable"><strong>No &mdash; not the way the question is usually meant.</strong> A dunk is a water treatment, not a turf treatment. Scattering tablets across a lawn does nothing at all, because there is no standing water for the BTI to dissolve into and no filter-feeding larvae in dry grass. This is the most common misunderstanding about the product, and it produces a lot of &ldquo;dunks did nothing for me&rdquo; reviews.</p>
          <p>Where dunks pay off around a lawn is the water that lawn drains <em>into</em>: the low spot that stays wet for a week after rain, the catch basin at the kerb, the ditch along the property line, the clogged gutter overhead, the tarp on the woodpile. Treat those and you cut the mosquitoes your own property is producing. The adults already flying over the grass came from somewhere else and need a different tool &mdash; that is what a <Link href="/mosquito-control">barrier spray on vegetation</Link> does, and here is <Link href="/mosquito-control-cost">what a full season of that costs</Link> once lot size is factored in. Before you treat anything, it is worth walking the yard for the water you have not noticed yet: <Link href="/blog/hidden-mosquito-breeding-spots-backyard">hidden mosquito breeding spots</Link>.</p>

          <h2>The Bigger Mosquito Strategy</h2>
          <p>Mosquito dunks solve only HALF of the mosquito problem — they kill larvae in the water you treat. They don&rsquo;t affect adult mosquitoes flying in from your neighbour&rsquo;s yard, the ravine behind your house, or the creek down the street. That off-property pressure is the whole story on ravine-backed lots, which is why <Link href="/toronto-mosquito-control">mosquito control in Toronto</Link> is almost never solved by treating your own standing water alone.</p>
          <p>For complete mosquito control in your GTA yard, combine three strategies:</p>
          <ol>
            <li><strong>BTI dunks/bits</strong> in any standing water on your property ($15/season — covers larvae from your own water)</li>
            <li><strong>Habitat modification</strong> — drain anything you can, mow grass short, clear leaf litter</li>
            <li><strong>Professional barrier spray</strong> — <Link href="/mosquito-control">BuzzSkito&rsquo;s seasonal program</Link> targets the adult mosquitoes flying onto your property from off-property sources, with a residual barrier that keeps them out for 21–30 days at a time</li>
          </ol>
          <p>We run that third layer out of Mississauga across 19+ GTA cities — if you are treating a rain barrel here at home, the companion page for <Link href="/mississauga-mosquito-control">mosquito control in Mississauga</Link> covers what the barrier spray side of the season looks like.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — What Actually Works</Link></li>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Mosquito Repellent Complete Guide 2026</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
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

      <CTASection heading="Mosquito Dunks Take Care of Larvae · Barrier Spray Takes Care of the Rest" subtext="Get a free quote for professional yard barrier spray. From $99. Health Canada approved." variant="dark" />
    </>
  )
}
