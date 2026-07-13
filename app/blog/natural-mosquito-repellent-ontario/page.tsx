import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'natural-mosquito-repellent-ontario'
const DATE = '2026-04-26'
const TITLE = 'Natural Mosquito Repellent — What Actually Works in Ontario (2026)'

const FAQS = [
  {
    question: 'What is the most effective natural mosquito repellent?',
    answer: 'Two natural ingredients have published, peer-reviewed efficacy data comparable to low-concentration DEET: oil of lemon eucalyptus (OLE, also marketed as PMD) and 2-undecanone (BioUD). Both are Health Canada approved and provide 4–6 hours of skin protection. Citronella, geraniol, and soybean oil products work but with shorter duration (1–2 hours). Most other "natural" sprays — peppermint, lavender, rosemary, neem — provide minimal real-world repellency despite marketing claims.',
  },
  {
    question: 'Do citronella candles actually work against mosquitoes?',
    answer: 'Citronella candles work modestly — and only directly downwind, within about 1 metre. They reduce mosquito landings by 30–50% in still-air conditions, but their effective range is too small to protect a typical Ontario backyard. Recent research published in the Journal of Insect Science found that even premium citronella candles barely outperformed plain unscented candles when tested in real-world outdoor conditions. They smell nice — but they\'re not a meaningful mosquito control strategy.',
  },
  {
    question: 'Do mosquito-repelling plants work?',
    answer: 'Plants like lavender, basil, citronella grass, and bee balm contain natural oils that mosquitoes mildly dislike — but the oils are released only when the leaves are crushed. A planted lavender bush gives off almost no detectable mosquito repellent. The plants themselves create only a tiny scent halo (less than half a metre). They work as a complement to a real strategy, not a substitute. See our full guide on mosquito-repelling plants in Ontario for which plants give the most return.',
  },
  {
    question: 'Are essential oil sprays a real mosquito repellent?',
    answer: 'Most homemade essential oil sprays — peppermint, lavender, eucalyptus, tea tree — provide 30–60 minutes of weak repellency at best. The exception is oil of lemon eucalyptus (OLE), which is a different chemical (PMD) extracted and refined from the eucalyptus citriodora plant. Pure OLE-based products like Off Botanicals or Repel Lemon Eucalyptus are evidence-backed and last 4–6 hours. Generic essential oil blends are not.',
  },
  {
    question: 'What\'s the best chemical-free way to control mosquitoes in my yard?',
    answer: 'A four-step approach: (1) Eliminate every source of standing water on your property — even bottle caps. (2) Treat catch-basins and rain barrels with Mosquito Dunks (BTI bacteria — kills larvae, completely safe for pets, kids, fish, and pollinators). (3) Plant cedar mulch around outdoor seating zones — cedar oil is a real, mild repellent. (4) Use a fan on patios — mosquitoes are weak fliers and won\'t cross even a moderate breeze.',
  },
  {
    question: 'Is BTI (Bacillus thuringiensis israelensis) safe?',
    answer: 'Yes. BTI is a naturally occurring soil bacterium that produces a toxin lethal to mosquito and black fly larvae but harmless to all other organisms — humans, pets, fish, frogs, birds, beneficial insects, and pollinators. It\'s sold as Mosquito Dunks (donut-shaped) or Bits (granular) at Canadian Tire, Home Depot, and most garden centres. Drop one dunk into any water that can\'t be drained — old tires, neglected birdbaths, ornamental ponds, rain barrels — and it kills larvae for 30 days. BTI is the gold-standard natural larviciding tool used by mosquito-control districts worldwide.',
  },
  {
    question: 'Does a fan actually keep mosquitoes away?',
    answer: 'Yes — surprisingly well. Mosquitoes are weak fliers. A pedestal fan on medium speed creates enough air movement to drop mosquito landing rates by 60–80% in the immediate area (3–5 metre radius). It also disperses your CO2 plume, the cue mosquitoes use to find you. A fan on the patio is the cheapest, most effective natural mosquito control trick most Ontario homeowners overlook.',
  },
  {
    question: 'When do natural repellents fail?',
    answer: 'Natural repellents fail in three scenarios: (1) High mosquito pressure — a yard near a ravine, creek, or wetland produces too many mosquitoes for individual repellents to handle. (2) Long durations outside — most natural repellents need re-application every 1–2 hours; a backyard barbecue exposes you to gaps. (3) Multiple species — some Ontario mosquitoes (Aedes vexans, Culex pipiens) are less affected by certain plant oils. For continuous outdoor enjoyment, professional barrier spray is more reliable than personal repellent — it controls the population in your yard, not just on your skin.',
  },
  {
    question: 'How do I make a homemade mosquito repellent that actually works?',
    answer: 'Mix a base of 2 tbsp witch hazel and 2 tbsp distilled water in a 4 oz glass spray bottle, add 1 tsp fractionated coconut or jojoba oil, then about 30 drops of essential oils — 12 lemon eucalyptus, 8 citronella, 6 lavender, 4 peppermint. Shake before every use and re-apply every 30–60 minutes. Be realistic: even the best DIY blend lasts under an hour and is far weaker than a refined oil-of-lemon-eucalyptus (OLE / PMD) product. Patch-test on your forearm first, and never use raw essential-oil sprays on infants under three or on broken skin.',
  },
  {
    question: 'Does neem oil repel mosquitoes?',
    answer: 'Neem oil has mild mosquito-repellent properties, but field trials are inconsistent — protection ranges from under an hour to about two hours depending on concentration and formulation, and neem can irritate sensitive skin. It is a reasonable pinch-hitter but not dependable for a full evening outdoors. For reliable plant-based protection, oil of lemon eucalyptus (OLE / PMD) is far stronger and is the only botanical active the CDC and Health Canada rate comparable to low-concentration DEET, giving about 95% protection for 4–6 hours.',
  },
  {
    question: 'Is picaridin a natural mosquito repellent?',
    answer: 'Picaridin is synthetic, but it is modelled on a compound found in black pepper plants and is the leading choice for people who want to avoid DEET. It is odourless, non-greasy, does not damage gear or plastics, and a 20% formula protects for 8–12 hours — far longer than any plant-based repellent. If your goal is "not DEET" rather than "strictly botanical," picaridin is the most reliable pick. See our picaridin vs DEET comparison for the full breakdown.',
  },
  {
    question: 'Is natural mosquito repellent safe for children and during pregnancy?',
    answer: 'Health Canada advises that oil of lemon eucalyptus (OLE / PMD) not be used on children under three, while picaridin and low-concentration DEET are considered safe from six months of age when used as directed. Loose essential-oil blends are not tested for these groups, so keep them off infants and broken skin. During pregnancy, registered picaridin and OLE products used as labelled are generally considered appropriate — but confirm with your own healthcare provider.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Natural Mosquito Repellent · What Works in Ontario',
  description: 'Honest guide to natural mosquito repellents for Ontario yards. Citronella, OLE, BTI, plants, fans — what works, what does not, with peer-reviewed data.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function NaturalMosquitoRepellentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Evidence-based guide to natural mosquito repellents for Ontario homeowners.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Natural Mosquito Repellent', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Natural Mosquito Repellent</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">An honest, research-backed guide for Ontario homeowners. What actually works, what is wishful thinking, and the cheap fan trick most people miss.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-6">If you&rsquo;re trying to avoid DEET, you&rsquo;re not alone. Most Ontario homeowners would prefer a natural option — but the marketing claims for &ldquo;natural mosquito repellent&rdquo; products often outpace the science. Here&rsquo;s what the peer-reviewed research actually says works in Ontario backyards in 2026.</p>

          <AffiliateDisclosure />

          <div className="not-prose my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-2">The short answer</p>
            <p className="text-gray-800 leading-relaxed">The most effective natural mosquito repellent is <strong>oil of lemon eucalyptus (OLE / PMD)</strong> — the only plant-derived ingredient Health Canada rates comparable to low-concentration DEET, giving 4–6 hours of protection. <Link href="/blog/picaridin-vs-deet-canada" className="text-emerald-800 underline underline-offset-2">Picaridin</Link>, modelled on a black-pepper compound, is the best-tolerated non-DEET option for all-day wear. Citronella, soybean oil and geraniol work but need re-applying every 1–2 hours. For a whole yard, pair BTI larvicide (Mosquito Dunks) with a patio fan. Homemade essential-oil sprays give 30–60 minutes at best.</p>
          </div>

          <h2>Best Natural Mosquito Repellents, Ranked</h2>
          <p className="text-sm text-gray-500 mb-3">Updated July 2026</p>
          <p>If you only remember one thing: not all &ldquo;natural&rdquo; repellents are equal. Ranked by published complete-protection time and real-world reliability, these are the best natural mosquito repellents for an Ontario yard:</p>
          <ol>
            <li><strong>Oil of lemon eucalyptus (OLE / PMD)</strong> — the single plant-derived active the <a href="https://www.cdc.gov/mosquitoes/" rel="noopener">U.S. CDC</a> and Health Canada rate on par with low-concentration DEET. About 95% protection for 4&ndash;6 hours. Refined from <em>Eucalyptus citriodora</em>; the active molecule is PMD.</li>
            <li><strong>Soybean oil</strong> (e.g. Bite Blocker) — the strongest everyday botanical after OLE, giving roughly 1.5 hours of solid protection with a mild scent.</li>
            <li><strong>Citronella oil</strong> — real but brief. Complete protection lasts only about 20&ndash;60 minutes, so plan on frequent re-application for anything longer than a short outing.</li>
            <li><strong>Neem oil</strong> — mild and inconsistent in field trials; a usable pinch-hitter, but not dependable for a full evening outside.</li>
          </ol>

          <h3>Natural Active Efficacy — % Protection &amp; Hours</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 text-left text-gray-900">
                  <th className="py-2 pr-4 font-bold">Natural active</th>
                  <th className="py-2 pr-4 font-bold">Source plant</th>
                  <th className="py-2 pr-4 font-bold">Protection vs. bites</th>
                  <th className="py-2 font-bold">Hours of protection</th>
                </tr>
              </thead>
              <tbody className="align-top text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold">Oil of lemon eucalyptus (OLE / PMD)</td>
                  <td className="py-3 pr-4"><em>Eucalyptus citriodora</em></td>
                  <td className="py-3 pr-4">~95% (DEET-comparable)</td>
                  <td className="py-3">4&ndash;6 hrs</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold">Soybean oil</td>
                  <td className="py-3 pr-4">Soybean</td>
                  <td className="py-3 pr-4">~90% initial</td>
                  <td className="py-3">~1.5 hrs</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold">Citronella oil</td>
                  <td className="py-3 pr-4">Citronella grass</td>
                  <td className="py-3 pr-4">~50%</td>
                  <td className="py-3">20&ndash;60 min</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Neem oil</td>
                  <td className="py-3 pr-4">Neem tree</td>
                  <td className="py-3 pr-4">Variable / low</td>
                  <td className="py-3">1&ndash;2 hrs (inconsistent)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">Figures reflect published complete-protection-time trials and vary by concentration and formulation. Only oil of lemon eucalyptus (PMD) is recommended by the <a href="https://www.cdc.gov/mosquitoes/" rel="noopener">CDC</a> and registered by the <a href="https://www.epa.gov/insect-repellents" rel="noopener">U.S. EPA</a> (and Health Canada) as comparable to low-concentration DEET; the others need far more frequent re-application. Sources: <a href="https://www.cdc.gov/mosquitoes/" rel="noopener">CDC &mdash; Mosquitoes</a>, <a href="https://www.epa.gov/insect-repellents" rel="noopener">U.S. EPA &mdash; Insect Repellents</a>.</p>

          <h2>The Tier System — What Actually Works</h2>

          <h3>🟢 Tier 1: Evidence-backed, comparable to low-concentration DEET</h3>
          <ul>
            <li><strong>Oil of Lemon Eucalyptus (OLE / PMD)</strong> — extracted from <em>Eucalyptus citriodora</em>. Health Canada approved. 4–6 hours of skin protection in published trials. Found in Off Botanicals, Repel Lemon Eucalyptus, Murphy&rsquo;s Naturals.</li>
            <li><strong>2-Undecanone (BioUD)</strong> — derived from wild tomato plants. Comparable to OLE. Less common in Canadian retail.</li>
          </ul>

          <h3>🟡 Tier 2: Real but short-duration repellents</h3>
          <ul>
            <li><strong>Citronella oil sprays</strong> — 30–60 minutes of skin protection. Re-applied frequently, decent for short outings.</li>
            <li><strong>Soybean oil products</strong> (e.g. Bite Blocker) — 1.5 hours protection. Mild scent.</li>
            <li><strong>Geraniol</strong> — used in some natural sprays. 1–2 hours.</li>
          </ul>

          <h3>🔴 Tier 3: Marketing more than mosquitoes</h3>
          <ul>
            <li><strong>Generic essential oil sprays</strong> (peppermint, lavender, tea tree blends) — 15–60 minutes of weak repellency.</li>
            <li><strong>Citronella candles</strong> — work only directly downwind within 1 metre.</li>
            <li><strong>Mosquito-repelling plant beds</strong> — minimal effect unless leaves are crushed.</li>
            <li><strong>Ultrasonic devices</strong> — multiple peer-reviewed studies show no effect.</li>
            <li><strong>Bug zappers</strong> — kill mostly beneficial insects, not biting mosquitoes.</li>
            <li><strong>Bracelets and wristbands</strong> — protect a few centimetres around the wrist, useless for full body.</li>
          </ul>

          <h2>Natural Repellents Compared — And Where to Buy</h2>
          <p>Every pick below is stocked in Canada and evidence-ranked above. Prices change constantly, so the buttons go straight to the live Amazon.ca listing (US visitors are auto-routed to Amazon.com). For the full rundown of every repellent type — including DEET and picaridin concentrations — see our <Link href="/blog/mosquito-repellent-guide-ontario-2026">2026 Ontario mosquito repellent guide</Link>.</p>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 text-left text-gray-900">
                  <th className="py-2 pr-4 font-bold">Product</th>
                  <th className="py-2 pr-4 font-bold">Active ingredient</th>
                  <th className="py-2 pr-4 font-bold">Protection</th>
                  <th className="py-2 font-bold">Where to buy</th>
                </tr>
              </thead>
              <tbody className="align-top text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold">Off! Botanicals</td>
                  <td className="py-3 pr-4">Lemon eucalyptus (OLE / PMD)</td>
                  <td className="py-3 pr-4">4–6 hrs</td>
                  <td className="py-3"><BuyLink search="off botanicals lemon eucalyptus">Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold">Picaridin spray</td>
                  <td className="py-3 pr-4">Picaridin 20% (DEET-free)</td>
                  <td className="py-3 pr-4">8–12 hrs</td>
                  <td className="py-3"><BuyLink search="picaridin insect repellent 20 percent">Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold">Watkins Original</td>
                  <td className="py-3 pr-4">Citronella + plant oils</td>
                  <td className="py-3 pr-4">2–3 hrs</td>
                  <td className="py-3"><BuyLink search="watkins mosquito insect repellent">Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Citronella spray</td>
                  <td className="py-3 pr-4">Citronella oil</td>
                  <td className="py-3 pr-4">30–60 min</td>
                  <td className="py-3"><BuyLink search="citronella insect repellent spray">Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">OLE / PMD and picaridin are the two picks with published, DEET-comparable efficacy. Citronella and Watkins-style blends smell great and are fine for short outings, but plan on re-applying often.</p>

          <h2>The Underrated Tool: Mosquito Dunks (BTI)</h2>
          <p>This is the most powerful natural mosquito control tool most Ontario homeowners overlook. <strong>Bacillus thuringiensis israelensis (BTI)</strong> is a soil bacterium that produces a toxin lethal to mosquito and black fly larvae — and harmless to everything else: humans, pets, fish, frogs, birds, pollinators, beneficial insects.</p>
          <p>BTI is sold as:</p>
          <ul>
            <li><strong>Mosquito Dunks</strong> — donut-shaped, drop one in any water that can&rsquo;t be drained. Each dunk lasts 30 days.</li>
            <li><strong>Mosquito Bits</strong> — granular, sprinkled in standing water. Faster knockdown.</li>
          </ul>
          <p>Available at Canadian Tire, Home Depot, garden centres. Use in: rain barrels, ornamental ponds, neglected birdbaths, drainage ditches, kiddie pools that can&rsquo;t be emptied, old tires holding water. <strong>One dunk in a rain barrel kills 100% of mosquito larvae for a month.</strong></p>

          <h2>The Underrated Trick: A Patio Fan</h2>
          <p>Mosquitoes are weak fliers. A standing fan on medium speed in your outdoor seating area drops mosquito landing rates by 60–80% in a 3–5 metre radius. It also disperses the CO<sub>2</sub> plume mosquitoes use to find you. Cost: $30. Effectiveness: comparable to applying repellent.</p>

          <h2>The Honest Truth About Plants</h2>
          <p>Lavender, basil, citronella grass, and bee balm contain real mosquito-repellent oils — but plants release these oils only when the leaves are crushed or brushed. A planted lavender bush at the corner of your patio is mostly decorative. To get the actual repellent benefit, you would need to physically crush leaves and rub them around — at which point a small bottle of OLE-based spray is more practical.</p>
          <p>For Ontario-hardy mosquito-repellent plants worth growing for their <em>combination</em> of mild repellency and aesthetic value, see our <Link href="/blog/mosquito-repellent-plants-ontario">Mosquito Repellent Plants Ontario guide</Link>.</p>

          <h2>DIY Essential-Oil Mosquito Repellent (Homemade Recipe)</h2>
          <p>A homemade spray will never match OLE or picaridin, but a well-balanced blend can buy you 30–60 minutes on a calm evening — enough for watering the garden or a short sit outside. Here&rsquo;s a recipe that maximises what essential oils can realistically do:</p>
          <ol>
            <li><strong>Base:</strong> 2 tbsp (30 ml) witch hazel + 2 tbsp (30 ml) distilled water in a 4 oz glass spray bottle.</li>
            <li><strong>Skin conditioner:</strong> 1 tsp fractionated coconut or jojoba oil — helps the blend cling instead of evaporating instantly.</li>
            <li><strong>Essential oils (about 30 drops total):</strong> 12 drops lemon eucalyptus, 8 drops citronella, 6 drops lavender, 4 drops peppermint.</li>
            <li><strong>Use:</strong> shake before every application and re-apply every 30–60 minutes.</li>
          </ol>
          <p><strong>Two honest caveats.</strong> First, the &ldquo;oil of lemon eucalyptus&rdquo; essential oil sold for DIY blends is <em>not</em> the same as the refined PMD in registered products like Off Botanicals — the raw oil is weaker and untested for safety, so don&rsquo;t treat your homemade spray as equivalent. Second, patch-test on your forearm first, and never use raw essential-oil sprays on infants under three or on broken skin. If you want dependable, all-day protection without DEET, a store-bought <Link href="/blog/picaridin-vs-deet-canada">picaridin</Link> product is the safer, longer-lasting choice.</p>

          <h2>The Strategy That Actually Works in Ontario</h2>
          <p>For a typical Ontario backyard, layer four natural strategies:</p>
          <ol>
            <li><strong>Eliminate every source of standing water</strong> on your property. Walk the yard weekly. Even a bottle cap of water can produce hundreds of mosquitoes.</li>
            <li><strong>Treat anything you can&rsquo;t drain with BTI dunks.</strong> Rain barrels, ornamental ponds, blocked drainage spots.</li>
            <li><strong>Run a fan</strong> on the patio when you&rsquo;re outside. Cheapest, most effective active deterrent.</li>
            <li><strong>Carry an OLE-based spray</strong> for personal use during long outings or peak dusk activity.</li>
          </ol>

          <h2>When Natural Isn&rsquo;t Enough</h2>
          <p>For most Ontario yards under low-to-moderate mosquito pressure, the strategy above works. But if your property backs onto a ravine, creek, river, conservation area, or stormwater pond, you&rsquo;re fighting an unwinnable battle with personal repellents alone. The mosquito source — adjacent natural habitat — is producing thousands of mosquitoes per night, and personal repellents only protect you when you remember to apply them.</p>
          <p>For high-pressure GTA yards, professional barrier spray is the most efficient option. <Link href="/mosquito-control">BuzzSkito uses Health Canada-approved formulas</Link> applied to vegetation perimeters and shrub interiors where mosquitoes rest — reducing yard mosquito populations by 90%+ for 21–30 days per treatment. <Link href="/mosquito-spray-safety">Safe for kids and pets</Link> 30 minutes after drying.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">2026 Ontario Mosquito Repellent Guide (Every Type Ranked)</Link></li>
            <li><Link href="/blog/picaridin-vs-deet-canada">Picaridin vs DEET in Canada — Which Should You Use?</Link></li>
            <li><Link href="/blog/mosquito-repellent-plants-ontario">10 Mosquito-Repellent Plants for Ontario</Link></li>
            <li><Link href="/blog/natural-eco-friendly-mosquito-control-ontario">Natural Eco-Friendly Mosquito Control</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Mosquito Control Service</Link></li>
            <li><Link href="/mosquito-spray-safety">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Want Your Yard Mosquito-Free Without Spraying Yourself?" subtext="Get a free quote for professional barrier spray. Health Canada-approved. Kids and pets safe after 30 min." variant="dark" />
    </>
  )
}
