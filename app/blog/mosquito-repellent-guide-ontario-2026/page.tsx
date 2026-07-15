import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'

const SLUG = 'mosquito-repellent-guide-ontario-2026'
const DATE = '2026-04-26'
const TITLE = 'Mosquito Repellent Guide — Ontario 2026 (What Actually Works)'

const FAQS = [
  {
    question: 'What is the most effective mosquito repellent in 2026?',
    answer: 'For personal skin protection, DEET (20–30%) and picaridin (20%) remain the gold standard, providing 6–10 hours of effective coverage. Oil of Lemon Eucalyptus (OLE / PMD) is the most effective natural option with 4–6 hour duration. For yard-wide protection, professional barrier spray applied to vegetation is dramatically more effective than personal repellents because it controls the population in your space rather than just on your skin.',
  },
  {
    question: 'Is DEET safe?',
    answer: 'Yes. DEET has been used for over 60 years and is the most extensively studied insect repellent. Health Canada approves DEET for use on adults and children 6 months and older, with concentration limits by age (10% max for children 6 months–12 years, up to 30% for adults). Despite long-standing internet myths, peer-reviewed research consistently shows DEET is safe when used as directed.',
  },
  {
    question: 'Picaridin vs DEET — which is better?',
    answer: 'Picaridin offers similar duration to DEET (6–10 hours at 20% concentration) without DEET\'s plastic/fabric-melting side effects. It\'s odourless and non-greasy. Many people prefer picaridin for everyday use; DEET still wins in extreme conditions (tropical jungles, dense bug pressure) at 30%+ concentration. For Ontario backyard use, 20% picaridin is excellent.',
  },
  {
    question: 'What about ultrasonic mosquito repellent devices?',
    answer: 'Multiple peer-reviewed studies have shown ultrasonic mosquito repellent devices have no measurable effect. The frequencies they produce do not deter mosquitoes. Save your money — these are marketing, not science.',
  },
  {
    question: 'Do mosquito-repellent bracelets work?',
    answer: 'No. Mosquito-repellent bracelets protect a few centimetres of skin around the wrist. Mosquitoes will simply bite your ankles, neck, or anywhere else exposed. Studies show they fail in real-world conditions despite marketing claims.',
  },
  {
    question: 'What\'s the cheapest effective mosquito repellent?',
    answer: 'For personal use, generic 20% picaridin or 20–30% DEET in spray form is around $8–$15 for a 200ml bottle that lasts a season. For yard-level control, BTI Mosquito Dunks ($15 for a season supply) treat standing water at the source. For full yard protection without personal repellent, professional barrier spray costs $99 per visit and controls the population for up to 30 days.',
  },
  {
    question: 'Are there mosquito repellents safe for babies?',
    answer: 'Health Canada does not recommend any chemical insect repellent for babies under 6 months. For infants, use physical barriers: mosquito netting over strollers, long sleeves and pants, and avoid peak biting hours (dawn and dusk). For children 6 months to 2 years, only one application per day of 10% DEET or equivalent is permitted. Older children can use higher concentrations more frequently.',
  },
  {
    question: 'When should I use repellent vs barrier spray?',
    answer: 'Personal repellent is for active outdoor activities (hiking, camping, evening walks). Barrier spray is for your home yard where you want continuous protection without re-applying repellent every time you step outside. The two strategies are complementary — most Ontario homeowners use barrier spray for their yard and personal repellent for off-property activities.',
  },
  {
    question: 'What is the best mosquito repellent in Canada?',
    answer: 'For skin, 20% picaridin (Natrapel, Sawyer) is the best all-round mosquito repellent for most Canadians — 6–10 hours of protection, odourless, and it will not damage plastics or fabrics. For the heaviest bug pressure such as cottage country or canoe trips, 25–30% DEET (OFF Deep Woods) edges it out. And for a hands-off backyard, a Thermacell device or a professional barrier spray beats anything you put on your skin.',
  },
  {
    question: 'What is the best mosquito repellent device?',
    answer: 'The Thermacell patio repeller is the best mosquito repellent device for real-world use. It warms a repellent mat to create roughly a 20-foot (6 m) zone of protection around a still patio or campsite, with no spray on your skin and no smoke. Skip ultrasonic plug-ins and repellent bracelets — peer-reviewed studies show they have no measurable effect. For whole-yard, multi-week control, a professional barrier spray outperforms any device.',
  },
  {
    question: 'Do mosquito foggers work?',
    answer: 'Yard foggers (Cutter, Black Flag) do knock down adult mosquitoes for a few hours, which makes them handy right before a party or barbecue. But the effect wears off the same evening once fresh mosquitoes drift in from neighbouring yards, and repeated fogging can harm pollinators. For lasting control, a professional barrier spray applied to resting vegetation lasts 21–30 days per treatment.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Best Mosquito Repellent 2026 — Canada Buyer’s Guide',
  description: 'Ranked 2026 guide to the best mosquito repellents & devices in Canada — Thermacell, DEET, picaridin. What actually works, what’s a scam.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function MosquitoRepellentGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 guide to mosquito repellents for Ontario homeowners.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Repellent Guide', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Repellent Guide</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">An evidence-based 2026 buyer&rsquo;s guide. What actually repels mosquitoes, what&rsquo;s marketing, and which option fits your specific situation.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">The repellents that actually pass the research test in Ontario — picaridin or DEET on skin, Thermacell for a still patio:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="natrapel picaridin insect repellent">Picaridin repellent on Amazon.ca →</BuyLink>
            <BuyLink search="thermacell patio shield mosquito repeller">Thermacell patio repeller →</BuyLink>
          </div>
          <p className="lead text-xl text-gray-700 leading-relaxed mb-6">There are dozens of mosquito repellents on shelves at Canadian Tire, Home Depot, and Shoppers Drug Mart. Most don&rsquo;t work as advertised. Here&rsquo;s what the peer-reviewed research and Health Canada approvals tell us about the <strong>best mosquito repellent</strong> — and the best mosquito repellent device — for Canada in 2026.</p>

          <div className="not-prose my-8 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-3">Answer first — our top picks for 2026</p>
            <ul className="space-y-2 text-gray-800 text-base leading-relaxed">
              <li><strong>Best overall repellent:</strong> 20% picaridin (Natrapel / Sawyer) — 6–10 hours, odourless, and it won&rsquo;t melt plastics or fabrics.</li>
              <li><strong>Best for heavy bug pressure:</strong> 25–30% DEET (OFF Deep Woods) — the pick for cottage docks and dense bush.</li>
              <li><strong>Best mosquito repellent device:</strong> the Thermacell patio repeller — a ~20&nbsp;ft (6&nbsp;m) protection zone with no spray on your skin. Considering the rechargeable flagship instead? Read our <Link href="/blog/thermacell-e90-canada-review" className="text-brand-700 underline">Thermacell E90 review</Link>.</li>
              <li><strong>Best for a whole yard:</strong> a <Link href="/mosquito-control" className="text-brand-700 underline">professional barrier spray</Link> — it removes the mosquitoes instead of just covering you.</li>
            </ul>
          </div>

          <h2 id="best-repellents">Best Mosquito Repellents in Canada (2026)</h2>
          <p>Ranked by how well they hold up in real-world use and peer-reviewed testing. Every one below is protection you wear or place — for hands-off, whole-yard control skip to the strategy section. And if you only care about devices — Thermacell, traps, zappers — we&rsquo;ve ranked those head-to-head in our <Link href="/blog/best-mosquito-repellent-device-canada">best mosquito repellent device guide</Link>.</p>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 text-gray-900">
                  <th className="py-3 pr-4 font-bold whitespace-nowrap">Repellent</th>
                  <th className="py-3 pr-4 font-bold whitespace-nowrap">Type</th>
                  <th className="py-3 pr-4 font-bold">Best for</th>
                  <th className="py-3 font-bold whitespace-nowrap">Where to buy</th>
                </tr>
              </thead>
              <tbody className="align-top text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-gray-900">Natrapel / Sawyer Picaridin (20%)</td>
                  <td className="py-3 pr-4">Skin spray</td>
                  <td className="py-3 pr-4"><strong>Best overall</strong> — odourless everyday backyard &amp; travel pick, 6–10 hrs.</td>
                  <td className="py-3"><BuyLink search="natrapel picaridin insect repellent">Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-gray-900">OFF Deep Woods (25–30% DEET)</td>
                  <td className="py-3 pr-4">Skin spray</td>
                  <td className="py-3 pr-4"><strong>Best for heavy bug pressure</strong> — cottage docks, canoe trips, dense bush.</td>
                  <td className="py-3"><BuyLink search="off deep woods insect repellent">Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-gray-900">Thermacell Patio Shield</td>
                  <td className="py-3 pr-4">Area device</td>
                  <td className="py-3 pr-4"><strong>Best device</strong> — a ~20&nbsp;ft scent-free zone for still patios &amp; campsites, no skin spray.</td>
                  <td className="py-3"><BuyLink search="thermacell patio shield mosquito repeller">Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-gray-900">Oil of Lemon Eucalyptus (Repel, 30%)</td>
                  <td className="py-3 pr-4">Natural skin spray</td>
                  <td className="py-3 pr-4"><strong>Best DEET-free pick</strong> — plant-derived PMD with real evidence, 4–6 hrs.</td>
                  <td className="py-3"><BuyLink search="repel lemon eucalyptus insect repellent">Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-gray-900">Backyard fogger (Cutter / Black Flag)</td>
                  <td className="py-3 pr-4">Yard fogger</td>
                  <td className="py-3 pr-4"><strong>Best one-off knockdown</strong> — clears a yard for hours before a party, not weeks.</td>
                  <td className="py-3"><BuyLink search="cutter backyard mosquito fogger">Check price →</BuyLink></td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-gray-900">Repellent bracelet / wristband</td>
                  <td className="py-3 pr-4">Wearable</td>
                  <td className="py-3 pr-4"><strong>Skip it</strong> — protects only a few cm around your wrist; you&rsquo;ll still get bitten on the ankles and neck.</td>
                  <td className="py-3"><BuyLink search="mosquito repellent bracelet">Check price →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Notice the pattern: every pick above protects <em>you</em>, not your yard. To stop reaching for repellent at home, pair any of them with a <Link href="/mosquito-control">professional yard barrier spray</Link> — and if ticks are a concern, our <Link href="/tick-control">tick control program</Link> treats the same visit.</p>

          <h2>The Tier System — Ranked by Evidence</h2>

          <h3>🟢 Tier 1: Gold Standard (Health Canada-approved, peer-reviewed)</h3>
          <ul>
            <li><strong>DEET (20–30%)</strong> — 6–10 hours of protection. The most-studied repellent in history. Brands: Off Deep Woods, Watkins.</li>
            <li><strong>Picaridin (20%)</strong> — 6–10 hours, no plastic/fabric damage, odourless. Brands: Sawyer, Natrapel.</li>
            <li><strong>IR3535 (15–20%)</strong> — 4–8 hours. Less common in Canadian retail but evidence-backed.</li>
          </ul>

          <h3>🟡 Tier 2: Effective natural options</h3>
          <ul>
            <li><strong>Oil of Lemon Eucalyptus (OLE / PMD, 30%)</strong> — 4–6 hours. The only natural option with DEET-comparable evidence. Brands: Off Botanicals, Repel Lemon Eucalyptus.</li>
            <li><strong>2-Undecanone (BioUD)</strong> — Comparable to OLE, less common in Canadian retail.</li>
          </ul>

          <h3>🟠 Tier 3: Real but short-duration</h3>
          <ul>
            <li><strong>Citronella oil sprays</strong> — 30–60 minutes.</li>
            <li><strong>Soybean oil products</strong> (Bite Blocker) — ~1.5 hours.</li>
            <li><strong>Geraniol</strong> — 1–2 hours.</li>
          </ul>

          <h3>🔴 Tier 4: Marketing more than mosquitoes (avoid)</h3>
          <ul>
            <li><strong>Ultrasonic devices</strong> — Studies confirm: zero effect.</li>
            <li><strong>Bracelets and wristbands</strong> — Protects only the wrist.</li>
            <li><strong>Generic essential oil blends</strong> — 15–60 minutes weak repellency.</li>
            <li><strong>Bug zappers</strong> — Kill mostly beneficial insects, not biting mosquitoes. (CO2 traps are the one trap category with real evidence behind it — see our <Link href="/blog/mosquito-magnet-canada">Mosquito Magnet review</Link>.)</li>
            <li><strong>Mosquito-repelling plant beds</strong> — Tiny effect; oils only release when leaves are crushed.</li>
          </ul>

          <h2>What to Buy for What Situation</h2>
          <ul>
            <li><strong>Backyard BBQ (2–3 hours):</strong> 20% picaridin spray.</li>
            <li><strong>Long hike or camping:</strong> 30% DEET or 20% picaridin.</li>
            <li><strong>Kids 2–12 years:</strong> 10% DEET or 20% picaridin (one application per day max for under 2).</li>
            <li><strong>Babies under 6 months:</strong> No chemical repellent. Use mosquito netting + long sleeves.</li>
            <li><strong>Pregnant women:</strong> Picaridin or DEET both Health Canada-approved during pregnancy.</li>
            <li><strong>Pets in yard:</strong> Don&rsquo;t apply human repellents to pets. Use vet-prescribed flea/tick preventatives + professional yard barrier spray.</li>
          </ul>

          <h2>The Strategy Most Ontario Homeowners Miss</h2>
          <p>Personal repellent is for outdoor activities <em>away</em> from your property. For your own backyard, a much better strategy is <strong>professional barrier spray</strong> — applied to vegetation perimeters and shrub interiors where mosquitoes rest. This controls the population in your yard for 21–30 days at a time, so you don&rsquo;t need to apply repellent every time you step outside.</p>
          <p>Most homeowners think the choice is between DIY repellent or nothing. The third option — and usually the best one — is professional yard treatment so personal repellent becomes unnecessary at home.</p>

          <h2>Cost Comparison (per Ontario season)</h2>
          <ul>
            <li><strong>DIY personal repellent only:</strong> $30–$60/season for sprays + reapplications</li>
            <li><strong>BTI Mosquito Dunks (water source treatment):</strong> $15/season</li>
            <li><strong>BuzzSkito Basic seasonal (5 sprays):</strong> $549</li>
            <li><strong>BuzzSkito Standard seasonal (10 sprays):</strong> $994</li>
          </ul>
          <p>For most Ontario yards, the Standard plan delivers a continuously bug-free yard from May through September. The cost works out to ~$100/month for full-yard control — comparable to monthly grocery spend on patio dinners that are now actually enjoyable.</p>

          <h2>What to Skip</h2>
          <ul>
            <li>Ultrasonic plug-ins or yard devices (zero evidence)</li>
            <li>Mosquito-repelling bracelets/wristbands</li>
            <li>Citronella tiki torches (1-metre downwind effect only)</li>
            <li>Bug zappers (kill the wrong insects)</li>
            <li>&ldquo;DIY essential oil&rdquo; sprays from Pinterest (most don&rsquo;t work)</li>
          </ul>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — Honest Guide</Link></li>
            <li><Link href="/blog/mosquito-repellent-plants-ontario">10 Mosquito-Repelling Plants for Ontario</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
            <li><Link href="/blog/best-mosquito-repellent-device-canada">Best Mosquito Repellent Devices in Canada — Ranked</Link></li>
            <li><Link href="/blog/thermacell-e90-canada-review">Thermacell E90 Review — Canada</Link></li>
            <li><Link href="/blog/mosquito-magnet-canada">Mosquito Magnet Review — Is It Worth It in Canada?</Link></li>
            <li><Link href="/mosquito-control">Professional Yard Barrier Spray</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Skip Personal Repellent in Your Own Yard" subtext="Professional barrier spray controls the population, not just what's on your skin. From $99." variant="dark" />
    </>
  )
}
