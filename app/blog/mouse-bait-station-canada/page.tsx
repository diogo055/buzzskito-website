import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'mouse-bait-station-canada'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'Mouse Bait Stations Canada 2026 — What\'s Actually Legal (PMRA Guide)'

const FAQS = [
  {
    question: 'Are mouse bait stations legal in Canada?',
    answer: 'Yes — but only a narrow category. Since Health Canada\'s rodenticide risk-mitigation measures took effect in January 2013, consumers can only buy domestic-class rodenticides that come pre-loaded inside tamper-resistant bait stations. The active ingredients allowed at the consumer level are first-generation anticoagulants (warfarin, chlorophacinone, diphacinone) and bromethalin. Second-generation anticoagulants like brodifacoum, bromadiolone, and difethialone are commercial-class only in Canada and cannot legally be sold to or used by homeowners. Always check the label for a PMRA registration number under the Pest Control Products Act — no number means the product is not legal to use in Canada.',
  },
  {
    question: 'What is the best mouse bait station available in Canada?',
    answer: 'The Tomcat Mouse Killer disposable bait station line is the practical answer for most Canadian homeowners. It is a PMRA-registered domestic-class product that uses 0.01% bromethalin sealed inside a child- and dog-resistant plastic station, and it is stocked on Amazon.ca and at Canadian hardware retailers. There is no meaningful competitive field here — the 2013 rules removed almost everything else from consumer shelves, so the real decision is not which station brand to buy, but whether a bait station or a trap is the right tool for your situation.',
  },
  {
    question: 'Why can\'t I buy second-generation rat and mouse poison in Canada?',
    answer: 'Health Canada removed second-generation anticoagulants (brodifacoum, bromadiolone, difethialone) from the consumer market in 2013 because of their outsized risk profile. A single feeding delivers a lethal dose, the compounds persist in the rodent\'s liver for weeks, and any owl, hawk, fox, cat, or dog that eats a poisoned mouse receives a concentrated secondary dose. These products remain available to licensed exterminators, who are trained in placement and carcass management, but they are not legal for homeowner purchase or use — even if a US website will ship them to you.',
  },
  {
    question: 'Is bromethalin safe around pets?',
    answer: 'No rodenticide is safe around pets — bromethalin included. Bromethalin is an acute neurotoxin, and unlike anticoagulant poisons it has no antidote: vitamin K therapy, which vets use for anticoagulant poisoning, does nothing for bromethalin. The tamper-resistant station keeps dogs and children from reaching the bait block, which is why Canadian law requires it, but a dog that chews through a station or eats a poisoned mouse still needs emergency veterinary care. If you have dogs or cats that hunt, snap traps or electronic traps inside protective enclosures are the lower-risk choice.',
  },
  {
    question: 'How many mice will one Tomcat disposable bait station kill?',
    answer: 'Tomcat\'s label rates one disposable bromethalin station at up to 12 mice per station, based on laboratory feeding data. In practice the number depends on infestation pressure and whether mice have competing food sources. A mouse that feeds on bromethalin bait typically stops feeding within hours and dies in roughly 24 to 48 hours. Because each station is sealed and disposable, you replace the whole unit once the bait is consumed rather than handling loose bait — which is exactly what the Canadian regulations intend.',
  },
  {
    question: 'Where should I place mouse bait stations?',
    answer: 'Directly against walls, in the runways mice already use. Mice are thigmotactic — they travel with their whiskers brushing a wall — and rarely range more than 3 to 9 metres from the nest. Place stations every 2 to 3 metres along walls where you see droppings, gnaw marks, or rub smudges: behind the stove, under the kitchen sink, along garage walls, beside the furnace, and in the corners of sheds. A station in the middle of an open floor catches almost nothing. Keep stations out of reach of children and pets even though they are tamper-resistant, and wear gloves when handling them so you don\'t transfer human scent.',
  },
  {
    question: 'Do mice die inside walls after eating bait — and will it smell?',
    answer: 'Sometimes, and yes. This is the honest downside of any poison: you don\'t choose where the mouse dies. Bromethalin causes lethargy before death, so poisoned mice often retreat to the nest — which may be inside a wall void, ceiling, or insulation. A dead mouse in a wall produces a distinct odour for one to three weeks depending on temperature and humidity. In finished living spaces this is a strong argument for traps, where you confirm and remove every kill. Bait stations make more sense in garages, sheds, crawl spaces, and seasonal properties where an unrecovered carcass is a tolerable trade-off.',
  },
  {
    question: 'Can I buy US mouse poison from Amazon.com and ship it to Canada?',
    answer: 'Legally, no. Importing or using a pest control product that is not registered under Canada\'s Pest Control Products Act is a violation, and that covers most US-market rodenticides: bulk bait pails like Tomcat Bait Chunx, second-generation blocks like Contrac and Final, multi-kilogram Just One Bite bars, and refillable stations sold with loose bait blocks. These are commercial-class or entirely unregistered in Canada. Beyond legality, they are the products most implicated in pet poisonings and raptor deaths. The bordered-crossing workaround is not a loophole — it is the exact risk profile the 2013 rules were written to eliminate.',
  },
  {
    question: 'Are bait stations better than mouse traps?',
    answer: 'For most Canadian homes, no — traps should be your first tool. Traps give you a confirmed, recoverable kill, involve zero poison, and cost nothing per additional use. Bait stations earn their place in specific situations: wall-void and inaccessible infestations where you can\'t set traps, detached garages and sheds you don\'t check daily, cottages and seasonal properties closed for months, and heavy infestations where you need continuous unattended control alongside trapping. Our best mouse trap guide covers the trap-first approach in detail.',
  },
  {
    question: 'How long does it take for a bait station to work?',
    answer: 'Expect first kills within 1 to 3 days and meaningful control in 1 to 3 weeks. Bromethalin acts faster than first-generation anticoagulants — a lethal feeding usually kills in 24 to 48 hours versus 5 to 7 days of repeat feeding for warfarin-type baits. But total timeline depends on population size, competing food, and whether you have sealed entry points. Bait alone never ends an infestation: if mice can still enter through gaps, new arrivals replace the ones you kill. Pair any bait program with exclusion — sealing gaps larger than 6 mm — or you are renting control, not buying it.',
  },
  {
    question: 'Do ultrasonic repellers work instead of bait stations?',
    answer: 'No. Ultrasonic plug-in devices have repeatedly failed controlled testing, and Health Canada does not evaluate them for efficacy because they contain no pesticide. Mice habituate to the sound within days, and independent studies show no lasting reduction in activity. Money spent on ultrasonic units is better spent on snap traps, a bromethalin station for the garage, and a tube of sealant for entry gaps. We break down the research in our ultrasonic pest repeller guide.',
  },
  {
    question: 'When should I call a professional instead of using bait stations?',
    answer: 'Call a licensed exterminator when you are catching or killing mice for more than three to four weeks without the activity declining, when you hear activity inside walls or ceilings you can\'t access, when you find evidence of rats rather than mice, or when a vulnerable household member makes any DIY poison use uncomfortable. Professionals can legally deploy commercial-class rodenticides with proper carcass management, and more importantly they do structural exclusion work that ends the problem permanently. Our pest control cost guide covers what Canadian rodent jobs typically run.',
  },
]

const META_TITLE = 'Mouse Bait Stations Canada 2026: PMRA Rules'

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Mouse bait stations in Canada: why only bromethalin disposable stations like Tomcat\'s are consumer-legal under PMRA rules, which US grey-market baits to avoid, station placement, and when traps beat bait. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('mouse-bait-station-canada')

export default function MouseBaitStationCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to consumer-legal mouse bait stations under PMRA rules — what you can buy, what you can\'t, and when traps are the better tool.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mouse Bait Stations Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mouse Bait Stations Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The consumer rodenticide rules that most US-written guides get wrong for Canada — what PMRA actually allows on store shelves, the one disposable station worth buying, and the honest case for using traps first.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Tomcat Mouse Killer disposable bait station (bromethalin)" search="tomcat mouse killer disposable bait station" label="PMRA-legal pick" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">In Canada, the only mouse bait stations consumers can legally buy are pre-loaded, tamper-resistant domestic-class stations — and the widely available pick is the Tomcat Mouse Killer disposable bromethalin station. Loose bait, bulk bait blocks, and every second-generation anticoagulant (brodifacoum, bromadiolone, difethialone) are commercial-class only and off-limits to homeowners. Even so, for homes with kids or pets we still recommend traps first and stations second.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Health Canada&rsquo;s rodenticide risk-mitigation rules took effect in January 2013, pulling second-generation anticoagulants from all consumer shelves in Canada.</li>
              <li>Consumer-legal actives are limited to first-generation anticoagulants (warfarin, chlorophacinone, diphacinone) and bromethalin, sold only inside tamper-resistant stations.</li>
              <li>Tomcat disposable stations use 0.01% bromethalin and are label-rated to kill up to 12 mice per station.</li>
              <li>Bromethalin is an acute neurotoxin, lethal from a single feeding, with death documented at roughly 24–48 hours — and it has no antidote, unlike anticoagulant baits.</li>
              <li>Mice rarely travel more than 3–9 metres from the nest; place stations every 2–3 metres along active walls for results.</li>
              <li>Every legal product carries a PMRA registration number under the Pest Control Products Act — no number on the label means it is not legal in Canada.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="mice" />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AffiliateDisclosure />
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">The PMRA-registered consumer option, available on Amazon.ca:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="tomcat mouse killer disposable bait station">Check Tomcat disposable bait stations on Amazon.ca →</BuyLink>
          </div>

          <TopPick tag={AMZ_TAG}
            label="Our Top Pick — Consumer-Legal Station"
            name="Tomcat Mouse Killer Disposable Bait Station (bromethalin)"
            blurb="The one station that ticks every Canadian box: PMRA-registered domestic class, 0.01% bromethalin sealed in a child- and dog-resistant housing, label-rated up to 12 mice per station, and actually stocked on Amazon.ca. No loose bait handling — when the block is gone, you bin the whole unit. Best for garages, sheds, crawl spaces, and cottage closings; for kitchens and living areas we still say trap first."
            search="tomcat mouse killer disposable bait station"
            score={8.2}
            pros={['Only widely-stocked PMRA domestic-class station', 'Sealed, child- and dog-resistant housing', 'Fast-acting — kills in ~24–48 hours', 'No loose-bait handling; fully disposable']}
            cons={['Bromethalin has no antidote', 'Mouse dies out of sight — possible wall-void odour', 'Traps are the safer first tool in occupied rooms']}
          />

          <h2>What Is a Mouse Bait Station, and How Does It Work?</h2>
          <p>A mouse bait station is a sealed, tamper-resistant plastic housing with a poisoned bait block locked inside — a mouse can enter through a small opening and feed, but a child&rsquo;s fingers or a dog&rsquo;s jaws cannot reach the bait. In Canada, the station is not an optional accessory: since 2013, it is the only legal way a consumer rodenticide can be sold.</p>
          <p>The mouse enters, feeds on the block, leaves, and dies later — usually back near the nest. That last detail matters more than most marketing admits. Unlike a trap, a bait station gives you no confirmed kill and no carcass recovery. What it gives you instead is continuous, unattended control in places you cannot or will not check daily. Understanding that trade-off is the entire decision.</p>

          <h2>Are Mouse Bait Stations Legal in Canada?</h2>
          <p>Yes — but Canadian law only permits a narrow slice of what you see recommended in US articles and videos. Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) implemented rodenticide risk-mitigation measures in January 2013 that reshaped the entire consumer market:</p>
          <ul>
            <li><strong>Second-generation anticoagulants are commercial-class only.</strong> Brodifacoum, bromadiolone, and difethialone — the actives in most US-market baits — cannot be sold to or used by Canadian homeowners. They are restricted to licensed applicators.</li>
            <li><strong>Consumer bait must be sold inside tamper-resistant stations.</strong> Loose pellets, meal baits, and place-packs are gone from domestic-class shelves. If you can touch the bait block with your fingers at purchase, it is not a legal consumer product.</li>
            <li><strong>Consumer actives are limited</strong> to first-generation anticoagulants (warfarin, chlorophacinone, diphacinone) and the acute neurotoxin bromethalin.</li>
            <li><strong>Every legal product carries a PMRA registration number</strong> on the label under the Pest Control Products Act. No registration number means the product cannot legally be sold or used in Canada, full stop.</li>
          </ul>
          <p>The reasoning was straightforward: second-generation anticoagulants kill in a single feeding but persist in the rodent&rsquo;s body for weeks, so every poisoned mouse becomes a toxic meal for owls, hawks, foxes, and outdoor cats. Canadian wildlife studies kept finding these compounds in dead raptors. The 2013 rules pushed the highest-risk chemistry back behind a professional licence.</p>

          <h2>Which Mouse Bait Station Should Canadians Buy?</h2>
          <p>The Tomcat Mouse Killer disposable bait station is the answer for nearly everyone, because it is the PMRA-registered, consumer-legal option that is actually stocked in Canada. Each sealed station contains a 0.01% bromethalin block, is rated child- and dog-resistant, and is label-rated to kill up to 12 mice per station. When the bait is consumed, you throw the whole station away and set a fresh one — no bait handling, ever.</p>
          <p>Bromethalin is worth understanding before you buy. It is an acute neurotoxin, not an anticoagulant: a single feeding is lethal, the mouse stops feeding within hours, and death follows in roughly 24–48 hours. That speed is an advantage over warfarin-type baits, which need days of repeat feeding. The flip side is serious: <strong>bromethalin has no antidote.</strong> Anticoagulant poisoning in a pet can be treated with vitamin K therapy; bromethalin poisoning cannot. The tamper-resistant housing is your primary safeguard, and it is a good one — but a household with determined chewers or outdoor cats that hunt should weigh traps first.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="tomcat mouse killer disposable bait station">Tomcat disposable stations (multi-pack) →</BuyLink>
          </div>

          <h2>Which US Bait Products Should Canadians Avoid?</h2>
          <p>This section is the reason this guide exists: most rodent-control advice online is written for the US market, where the consumer rules are different, and Amazon.com will happily ship products to Canada that are illegal to use here. Do not buy the following, no matter how many five-star US reviews they carry:</p>
          <ul>
            <li><strong>Bulk bait pails and loose blocks</strong> — Tomcat Bait Chunx pails, Just One Bite II bars, and any product sold as loose blocks you load into a refillable station yourself. In Canada this format is commercial-class only.</li>
            <li><strong>Second-generation anticoagulant blocks</strong> — Contrac (bromadiolone), Final and d-CON legacy formulas (brodifacoum), Hombre (difethialone), Havoc (brodifacoum). Not legal for Canadian homeowners under any circumstances.</li>
            <li><strong>Refillable stations bundled with loose bait</strong> — the station itself is just plastic, but the loose refill blocks it ships with put the bundle outside domestic-class rules.</li>
            <li><strong>Anything without a PMRA registration number</strong> — US EPA registration numbers do not transfer. Under the Pest Control Products Act, importing or using an unregistered pesticide is a violation.</li>
          </ul>
          <p>Beyond the legal exposure, these grey-market products carry exactly the risks the Canadian rules were written to eliminate — they dominate veterinary poisoning case reports and wildlife toxicology findings. If a situation genuinely calls for second-generation chemistry, that is a job for a licensed exterminator who can deploy it legally and manage the carcasses. Our <Link href="/blog/rat-poison-canada-what-is-legal">rat poison legality guide</Link> covers the same rules on the rat side, where the grey-market temptation is even stronger.</p>

          <h2>Bait Stations vs Traps: Which Should You Use?</h2>
          <p>Traps first, stations second — that is our standing recommendation for Canadian homes, and here is the honest comparison behind it:</p>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Method</th><th className="px-3 py-2 text-left">Consumer-legal in Canada?</th><th className="px-3 py-2 text-left">Kill confirmed?</th><th className="px-3 py-2 text-left">Secondary-poison risk</th><th className="px-3 py-2 text-left">Best use</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Tomcat disposable station (bromethalin)</strong></td><td className="px-3 py-2">Yes — PMRA domestic class</td><td className="px-3 py-2">No — mouse dies elsewhere</td><td className="px-3 py-2">Low–moderate</td><td className="px-3 py-2">Garages, sheds, wall voids, cottages</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/best-mouse-trap-canada">Snap traps</Link></td><td className="px-3 py-2">Yes — no pesticide</td><td className="px-3 py-2">Yes — visible, removable</td><td className="px-3 py-2">None</td><td className="px-3 py-2">Kitchens, living spaces, first response</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/victor-electronic-mouse-trap-review-canada">Electronic traps</Link></td><td className="px-3 py-2">Yes — no pesticide</td><td className="px-3 py-2">Yes — indicator light</td><td className="px-3 py-2">None</td><td className="px-3 py-2">No-touch disposal, squeamish households</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Refillable stations + loose blocks</td><td className="px-3 py-2"><strong>No — commercial class</strong></td><td className="px-3 py-2">No</td><td className="px-3 py-2">Moderate–high</td><td className="px-3 py-2">Licensed applicators only</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">US second-gen anticoagulant baits</td><td className="px-3 py-2"><strong>No — illegal to import/use</strong></td><td className="px-3 py-2">No</td><td className="px-3 py-2">High — persists in carcass for weeks</td><td className="px-3 py-2">Nothing — avoid entirely</td></tr>
            </tbody>
          </table>

          <h2>When Do Bait Stations Beat Traps?</h2>
          <p>Bait stations win in the situations where traps physically or practically fail. Four scenarios justify reaching for a bromethalin station:</p>
          <ul>
            <li><strong>Wall voids and inaccessible spaces.</strong> When droppings and scratching tell you mice are living inside a wall, ceiling, or under a built-in cabinet, you cannot place or check a trap there. A station at the void&rsquo;s entry point is the only unattended option.</li>
            <li><strong>Detached garages and sheds.</strong> A trap you check twice a season is worse than no trap — a caught mouse decomposes on it and the trap goes offline. A station keeps working for weeks between visits.</li>
            <li><strong>Cottages and seasonal properties.</strong> A property closed from October to May cannot be trapped effectively. Stations set at closing provide the winter-long pressure that trapping cannot, which matters because <Link href="/blog/how-to-keep-mice-out-of-your-house-winter">fall is exactly when mice move indoors</Link>.</li>
            <li><strong>Heavy infestations, alongside trapping.</strong> When you are catching multiple mice per night, stations add a second layer of continuous control while traps handle the confirmed kills in living areas.</li>
          </ul>
          <p>In every other case — the two mice in the kitchen, the scratching under the sink — start with our <Link href="/blog/best-mouse-trap-canada">best mouse trap picks for Canada</Link> instead. And if it turns out you are dealing with something larger than a mouse, the equation changes again: see our <Link href="/blog/best-rat-trap-canada">rat trap guide</Link>, because rats are warier of both new stations and new traps.</p>

          <h2>What About Secondary Poisoning? (The Honest Part)</h2>
          <p>Bromethalin carries a lower secondary-poisoning risk than second-generation anticoagulants — it does not bioaccumulate in the liver the way brodifacoum does, and the mouse eats a small absolute dose. Lower is not zero. A dog or cat that eats a bromethalin-poisoned mouse can still be harmed, symptoms can lag by hours to days, and — worth repeating — there is no antidote to reach for at the emergency vet.</p>
          <p>This is the core reason our guides recommend traps as the default tool inside Canadian homes. A snap trap&rsquo;s worst-case scenario is a snapped finger; a poison&rsquo;s worst-case scenario involves your pet, a neighbour&rsquo;s cat, or the owl that hunts your backyard. We recommend the Tomcat disposable station without hesitation for the garage, the shed, the crawl space, and the cottage closing — and we recommend you think twice before deploying any poison in a home with animals that hunt or scavenge.</p>
          <p>There is also a practical honesty point: poisoned mice die where they choose, and they often choose the wall void. One to three weeks of dead-mouse odour in a finished living space is a real cost that no product label mentions.</p>

          <h2>How Do You Place Bait Stations for Best Results?</h2>
          <p>Placement decides results more than product choice does. Mice are thigmotactic — they navigate by keeping contact with walls — and they rarely travel more than 3–9 metres from the nest. Work with that biology:</p>
          <ul>
            <li><strong>Flush against walls</strong>, entry hole parallel to the runway, in locations with fresh droppings, gnaw marks, or greasy rub smudges.</li>
            <li><strong>Every 2–3 metres</strong> along active walls — one lonely station in a 3-car garage is a token gesture, not a program.</li>
            <li><strong>Priority spots:</strong> behind the stove, under sinks, along the garage perimeter, beside the furnace and water heater, in shed corners, near any gap where utilities enter the house.</li>
            <li><strong>Wear gloves</strong> when placing stations to avoid transferring human scent, and leave stations in place for at least a week before judging — mice are cautious about new objects.</li>
            <li><strong>Pair with exclusion.</strong> Mice pass through gaps as small as 6 mm. Seal entry points with steel wool and sealant, or the stations become a permanent subscription. Our <Link href="/blog/how-to-get-rid-of-mice-canada">full mouse removal guide</Link> walks through the complete sequence.</li>
          </ul>
          <p>One thing not to spend money on: ultrasonic plug-in repellers, which have failed controlled testing repeatedly and to which mice habituate within days. <Link href="/blog/ultrasonic-pest-repellers-do-they-work">We reviewed the research here</Link>.</p>

          <h2>When Is It Time to Call a Professional?</h2>
          <p>Call a licensed exterminator when three to four weeks of trapping and baiting has not reduced activity, when the noise is coming from spaces you cannot access, or when the droppings say rat rather than mouse. Professionals can legally use commercial-class rodenticides with proper carcass management, and the good ones fix the actual problem — entry points — rather than selling you a permanent bait subscription. Typical Canadian pricing for rodent work is covered in our <Link href="/pest-control-cost-canada">pest control cost guide</Link>.</p>

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-4 my-6">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="rounded-xl border border-navy-100 bg-white p-4 group">
                <summary className="font-bold text-brand-900 cursor-pointer list-none flex justify-between items-center gap-3">
                  {question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/best-mouse-trap-canada">Best Mouse Traps in Canada — Tested Picks</Link></li>
            <li><Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor Electronic Mouse Trap Review (Canada)</Link></li>
            <li><Link href="/blog/rat-poison-canada-what-is-legal">Rat Poison in Canada — What&rsquo;s Actually Legal</Link></li>
            <li><Link href="/blog/best-rat-trap-canada">Best Rat Traps in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mice-canada">How to Get Rid of Mice in Canada — Full Guide</Link></li>
            <li><Link href="/blog/how-to-keep-mice-out-of-your-house-winter">How to Keep Mice Out of Your House This Winter</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Ultrasonic Pest Repellers — Do They Actually Work?</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              This guide is part of an independent research series on pest control products available to Canadian consumers — PMRA-legal picks only, no grey-market imports.{' '}
              <Link href="/pest-product-guides" className="font-semibold text-emerald-700 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
