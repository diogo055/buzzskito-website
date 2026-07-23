import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogPostCTA from '@/components/BlogPostCTA'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import InlineYardRiskCTA from '@/components/InlineYardRiskCTA'
import BuyLink from '@/components/BuyLink'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'mosquito-dunks-canada-guide'
const DATE = '2026-04-28'
const UPDATED = '2026-04-28'
const TITLE = 'Mosquito Dunks Canada 2026: Where to Buy + 3 Common Mistakes'

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
    answer: 'In Canada, expect to pay $12–$20 for a 6-pack of mosquito dunks at major retailers in 2026. Canadian Tire and Home Depot typically list 6-packs at $13.97–$15.99. Rona is usually $14.99–$16.49. A 20-pack runs $25–$35 — better value if you have multiple rain barrels or a pond. Prices increase 10–15% in peak season (June–August), so buying in April–May saves money. Each dunk treats 100 sq ft of water for ~30 days, so a 6-pack covers a typical Canadian backyard rain barrel for the entire May–September season.',
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
]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Dunks Canada: Price + Home Depot, Canadian Tire',
  description: 'Mosquito dunks prices compared: Canadian Tire, Home Depot & Rona. What a 6-pack costs in 2026 + how many dunks per rain barrel or pond.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('mosquito-dunks-canada-guide')

export default function MosquitoDunksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 guide to mosquito dunks in Canada.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Dunks Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

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

      <StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Dunks (6-pack)" search="summit mosquito dunks" label="Best for standing water" />

      <div className="max-w-4xl mx-auto px-4 -mt-6 sm:-mt-8 relative z-10">
        <BlogPostCTA />
      </div>

      {/* QUICK ANSWER — first content element */}
      <section className="bg-white px-4 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For long-term standing water like rain barrels and ponds, Mosquito Dunks are the best pick &mdash; each donut-shaped BTI tablet treats up to 100 sq ft of water for about 30 days and is safe for fish, pets, and pollinators. For fast knockdown of unexpected larvae, use quick-release Mosquito Bits instead.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>One mosquito dunk treats up to 100 sq ft of water surface and lasts about 30 days.</li>
              <li>Dunks contain only BTI (Bacillus thuringiensis israelensis); the Summit brand is Health Canada-registered under PCP #18158.</li>
              <li>BTI kills mosquito and black fly larvae within 24&ndash;48 hours and is safe for humans, pets, fish, frogs, and pollinators.</li>
              <li>A 6-pack costs about $10&ndash;$20 in Canada (Canadian Tire, Home Depot, Rona, Lowe&rsquo;s, Amazon.ca).</li>
              <li>Use one dunk per 50 gallons in a rain barrel and replace it monthly from May through September.</li>
              <li>Dunks only kill larvae in treated water; adult mosquitoes flying in need a barrier spray.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
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
          <AffiliateDisclosure />
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
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
              <strong className="text-amber-900">⚠️ Important — dunks only solve half the problem.</strong> They kill mosquito <em>larvae</em> in the water you treat. Adult mosquitoes flying in from your neighbours&rsquo; yards, ravines, and creeks are unaffected. To actually enjoy your yard bite-free, combine dunks (your standing water) with <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> on vegetation. Dunks: $15/season. Barrier spray: from $99/treatment.
            </p>
          </div>
        </div>
      </section>

      {/* TOP PICK */}
      <section className="bg-white px-4 pt-6">
        <div className="max-w-4xl mx-auto">
          <TopPick tag={AMZ_TAG}
            name="Summit Mosquito Dunks (6-pack)"
            blurb="One dunk treats up to 100 sq ft of standing water for ~30 days — a single 6-pack covers a typical rain barrel for the entire May–September season, and it's completely safe for fish, pets, and pollinators."
            search="summit mosquito dunks"
            score={8.8}
            pros={['Kills larvae for ~30 days per dunk', 'BTI is safe for fish, pets, and pollinators', 'Budget-friendly and widely stocked in Canada']}
            cons={['Only treats water you can reach', 'Does nothing to adult mosquitoes flying in']}
          />
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Dunks Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
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

          <h2>The Bigger Mosquito Strategy</h2>
          <p>Mosquito dunks solve only HALF of the mosquito problem — they kill larvae in the water you treat. They don&rsquo;t affect adult mosquitoes flying in from your neighbour&rsquo;s yard, the ravine behind your house, or the creek down the street.</p>
          <p>For complete mosquito control in your GTA yard, combine three strategies:</p>
          <ol>
            <li><strong>BTI dunks/bits</strong> in any standing water on your property ($15/season — covers larvae from your own water)</li>
            <li><strong>Habitat modification</strong> — drain anything you can, mow grass short, clear leaf litter</li>
            <li><strong>Professional barrier spray</strong> — <Link href="/mosquito-control">BuzzSkito&rsquo;s seasonal program</Link> targets the adult mosquitoes flying onto your property from off-property sources, with a residual barrier that keeps them out for 21–30 days at a time</li>
          </ol>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — What Actually Works</Link></li>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Mosquito Repellent Complete Guide 2026</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Mosquito Dunks Take Care of Larvae · Barrier Spray Takes Care of the Rest" subtext="Get a free quote for professional yard barrier spray. From $99. Health Canada approved." variant="dark" />
    </>
  )
}
