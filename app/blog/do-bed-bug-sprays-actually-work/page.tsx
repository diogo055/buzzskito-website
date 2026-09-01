import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'do-bed-bug-sprays-actually-work'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'Do Bed Bug Sprays Actually Work? An Honest Canadian Answer (2026)'
const META_TITLE = 'Do Bed Bug Sprays Actually Work? Canada 2026'

const FAQS = [
  {
    question: 'Do bed bug sprays actually work?',
    answer: 'Partly. A contact spray reliably kills bed bugs it directly wets, and a PMRA-registered residual spray keeps killing on treated surfaces for a few weeks. But sprays alone almost never clear an infestation, because 90%+ of the bugs and nearly all of the eggs sit hidden in cracks, seams, and voids the spray never reaches. Sprays are one tool in a stack — not a standalone cure.',
  },
  {
    question: 'Why do bed bug sprays miss most of an infestation?',
    answer: 'Bed bugs are harbourage insects. They spend roughly 22-23 hours a day packed into tight, dark cracks — mattress seams, box-spring staples, headboard joints, baseboard gaps, screw holes, and behind trim — and only come out briefly to feed. A spray coats surfaces you can see and reach, but the population is concentrated where you cannot spray effectively. Eggs are cemented into those same crevices and are shielded from most liquid contact insecticides, so even a perfect spray of visible bugs leaves the next generation intact.',
  },
  {
    question: 'Are bed bugs resistant to spray?',
    answer: 'Frequently, yes. Peer-reviewed entomology research (Romero, Potter, and others) has documented widespread resistance to pyrethroid insecticides in bed bug populations across North America. Most consumer aerosols sold in Canada are pyrethroid-based, so a resistant population can survive a direct spray that would have killed a susceptible bug. This is a core reason DIY spray-only campaigns fail, and why non-chemical methods (heat, steam, physical removal, encasement) matter so much — bed bugs cannot become resistant to being cooked or vacuumed away.',
  },
  {
    question: 'What is the best bed bug spray available in Canada?',
    answer: 'For consumers, the honest answer is that the best result comes from a PMRA domestic-class registered residual product used as a crack-and-crevice treatment, not a broadcast surface spray, plus a mechanical stack (steam, encasements, interceptors). We do not name a single miracle product because none exists at the consumer level. Look for a bed-bug-labelled product with a PMRA registration number on the can, follow the label exactly, and treat harbourages — not open mattress tops where you sleep.',
  },
  {
    question: 'Do bug bombs or foggers work on bed bugs?',
    answer: 'No — total-release foggers ("bug bombs") are one of the worst choices for bed bugs. The mist settles on exposed surfaces but does not penetrate the cracks and voids where bed bugs actually hide, so it kills few of them. Worse, multiple studies and extension entomologists report that foggers can scatter bed bugs deeper into walls and adjacent rooms, spreading the infestation. They also create a flammability and residue hazard. Skip foggers entirely.',
  },
  {
    question: 'Can I buy Temprid, Crossfire, or Bedlam in Canada?',
    answer: 'Generally not as an over-the-counter consumer. Products like Temprid FX (imidacloprid + beta-cyfluthrin), Crossfire (chlorfenapyr), and Bedlam Plus that US blogs and Amazon.com listings push are typically commercial/restricted-class or not domestic-class registered for consumer sale in Canada. Buying them grey-market across the border is not something we recommend — it can be illegal to import, the label directions are written for licensed applicators, and misuse carries real safety and legal risk. In Canada, chlorfenapyr and neonicotinoid combination bed bug products are the professional applicator lane, not the DIY lane.',
  },
  {
    question: 'Does diatomaceous earth kill bed bugs?',
    answer: 'Yes, slowly, and only when used correctly. Food-grade / crawling-insect diatomaceous earth is a physical desiccant — it abrades the insect cuticle so the bug dehydrates over days. It is not a spray and not fast, but it does not trigger resistance and it keeps working in dry voids. The keys are a very light, barely-visible dusting (thick piles just get avoided), applied into cracks, along baseboards, and under furniture, kept dry. We cover technique in the diatomaceous earth guide linked below.',
  },
  {
    question: 'Can you get rid of bed bugs without an exterminator?',
    answer: 'Light, early, single-room infestations can sometimes be cleared by a disciplined DIY stack: steam every seam and crevice, encase the mattress and box spring, install interceptor traps under every bed and sofa leg, dust harbourages with diatomaceous earth, launder and hot-dry all fabrics, and repeat weekly for several weeks. Established, multi-room, or apartment-building infestations usually need a licensed pest control professional — often whole-room heat treatment. Knowing which situation you are in is the whole game, and honest self-assessment matters.',
  },
  {
    question: 'How long does bed bug spray keep working after it dries?',
    answer: 'It depends on the product class. A pure contact/"kills on contact" aerosol has essentially no residual — once it dries it does little. A PMRA-registered residual product leaves an active deposit that can keep killing susceptible bugs that walk across it for a few weeks, though residual life drops on porous, dusty, or frequently-cleaned surfaces and against resistant populations. Always confirm the residual claim and re-treatment interval on the specific product label rather than assuming.',
  },
  {
    question: 'Does rubbing alcohol or vinegar kill bed bugs?',
    answer: 'Rubbing alcohol can kill a bed bug on direct contact, but it evaporates instantly with zero residual, misses hidden bugs and eggs, and is a serious fire hazard sprayed around bedding and electronics — house fires have been traced to exactly this. Vinegar is even weaker and unreliable. Neither is a real control method. If you want a non-chemical approach that actually works, use heat and steam, which physically destroy bugs and eggs.',
  },
  {
    question: 'Are bed bug sprays safe to use around pets and kids?',
    answer: 'Only if you follow the label. A PMRA-registered product is legal for its labelled use, but the label will specify ventilation, keeping children and pets off treated surfaces until dry, and areas of application. Never spray mattress tops or bedding surfaces where skin contacts for hours unless the label explicitly allows it, never mix products, and never exceed the stated rate. If you are unsure, a licensed applicator is the safer route. For any health question about bites or reactions, consult Health Canada guidance or your local public health unit.',
  },
  {
    question: 'When should I call a professional for bed bugs?',
    answer: 'Call a licensed pest control company when the infestation spans multiple rooms, when you share walls in an apartment or condo (bugs travel between units), when DIY treatment has run several weeks without clear decline, or when you see heavy live activity and eggs. Severe infestations typically need professional whole-room heat treatment, which raises the space to lethal temperatures bed bugs and eggs cannot survive. BuzzSkito does not offer bed bug or heat treatment — we are a mosquito and tick company — so this is a referral, not a sales pitch.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Do bed bug sprays actually work? Honest Canadian answer: contact sprays kill what they touch but miss 90%+ of an infestation. Pyrethroid resistance, residuals, and the heat/steam/encasement/interceptor stack that really works — PMRA-legal picks only.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('do-bed-bug-sprays-actually-work')

export default function DoBedBugSpraysActuallyWorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'An honest, PMRA-grounded Canadian answer on whether bed bug sprays actually work, and the control stack that does.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Pest Product Guides', url: '/pest-product-guides' }, { name: 'Do Bed Bug Sprays Actually Work?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/pest-product-guides" className="hover:text-white">Pest Product Guides</Link><span>/</span>
            <span className="text-white">Do Bed Bug Sprays Actually Work?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Contact sprays kill the bugs they touch — but that is a fraction of the problem. Here is the honest, Canada-specific breakdown of what sprays do, what they miss, and the stack that actually clears bed bugs.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Bed bug sprays only partly work. A contact spray kills bed bugs it directly wets and a PMRA-registered residual keeps killing on treated surfaces for a few weeks — but on their own, sprays miss 90%+ of an infestation, because the bugs and nearly all the eggs are sealed inside cracks and seams a spray never reaches. Real control is a stack: steam, mattress encasements, interceptor traps, and targeted crack-and-crevice treatment, escalating to professional heat for severe cases.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Bed bugs spend ~22-23 hours a day hidden in harbourages; sprays reach only exposed surfaces.</li>
              <li>Eggs are cemented into crevices and resist most liquid contact insecticides — surviving even a thorough spray.</li>
              <li>Widespread pyrethroid resistance is documented in North American bed bug populations, and most consumer sprays are pyrethroid-based.</li>
              <li>Total-release foggers (bug bombs) kill few bed bugs and can scatter them deeper — do not use them.</li>
              <li>Heat (steam / professional whole-room heat) and physical removal cannot be resisted — they are the backbone of real control.</li>
              <li>US-pushed products like Crossfire, Temprid FX, and Bedlam are largely professional/restricted-class and not consumer domestic-class in Canada.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <article className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Do bed bug sprays actually work — or are they a waste of money?</h2>
          <p>They work in the narrow, literal sense: a wet spray kills the bed bug it directly hits, and a residual product leaves a deposit that can keep killing for a few weeks. What sprays do not do is clear an infestation on their own. That gap between &ldquo;kills a bug&rdquo; and &ldquo;solves the problem&rdquo; is where almost every DIY spray-only campaign fails, and where a lot of money gets wasted on cans that empty faster than the bed bugs disappear. If what you want is the fastest possible kill on the bug in front of you, <Link href="/blog/what-kills-bed-bugs-instantly-canada" className="text-brand-700 underline">steam, direct heat and the one registered contact spray worth owning</Link> covers that narrow job properly.</p>
          <p>The reason is behavioural, not chemical. Bed bugs are <strong>harbourage insects</strong>. For roughly 22 to 23 hours of every day they are wedged into the tightest, darkest cracks they can find — mattress piping and seams, box-spring staples and the fabric underside, headboard and bed-frame joints, screw holes, baseboard gaps, and behind loose trim or wallpaper. They emerge only briefly to feed, usually in the hours before dawn, then retreat. A spray coats the surfaces you can see and reach. The population lives where you functionally cannot spray.</p>

          <h2>What exactly does a bed bug spray reach?</h2>
          <p>Very little of the actual infestation. Picture a mattress and box spring: the bugs you might occasionally spot on the surface are a tiny, visible minority. The mass of the colony — plus the eggs — is inside the seams, under the staples, and in the frame voids. Even a careful, thorough surface spray typically contacts a single-digit percentage of the population directly. Everything else is shielded.</p>
          <p>The eggs are the bigger problem. A female cements her eggs deep in crevices, and those eggs are highly resistant to most liquid contact insecticides. So even a spray that killed every bug it touched would leave a generation of eggs to hatch a week or two later, right back into the same harbourage. This is why one-time spraying feels like it works for a few days, then the problem returns worse — you knocked down the exposed adults and left the hidden pipeline intact.</p>

          <h2>Why do so many bed bugs survive being sprayed?</h2>
          <p>Two reasons stack on top of the harbourage problem. First, coverage: you cannot physically wet the inside of a wall void or the core of a box spring. Second, and just as important, <strong>resistance</strong>. Peer-reviewed entomology research over the last two decades — work by Romero, Potter, and others — has documented widespread resistance to pyrethroid insecticides in bed bug populations across North America.</p>
          <p>That matters because the overwhelming majority of consumer bed bug aerosols and pump sprays sold in Canada are pyrethroid-based (permethrin, deltamethrin, and relatives). If your local population carries resistance, a direct hit from one of those sprays may not kill the bug at all. You get the visual reassurance of spraying without the result. Bed bugs cannot, however, evolve resistance to being physically cooked, steamed, vacuumed, or dehydrated — which is the entire argument for a mechanical-first approach.</p>

          <h2>The methods that actually clear bed bugs (the real stack)</h2>
          <p>Sprays belong in a support role, never the lead. The methods that carry the load are physical and mechanical, because they cannot be resisted and they reach or neutralise the harbourages sprays miss.</p>
          <ul>
            <li><strong>Heat and steam.</strong> Bed bugs and their eggs die at sustained lethal temperatures. A consumer steamer drives killing heat directly into seams, tufts, and crevices — the exact places sprays fail. See the <Link href="/blog/best-bed-bug-steamer-canada">best bed bug steamer in Canada</Link> guide for technique and picking a unit with enough dry-steam output.</li>
            <li><strong>Mattress and box-spring encasements.</strong> A bed-bug-certified encasement traps any bugs inside so they cannot feed or escape, and denies new bugs the seams they love. It converts your mattress from the #1 harbourage into a sealed, wipeable surface. Details in the <Link href="/blog/bed-bug-mattress-encasement-canada">mattress encasement guide</Link>.</li>
            <li><strong>Interceptor traps.</strong> Placed under every bed and sofa leg, these pitfall cups catch bugs travelling to and from the bed, isolate the bed as a &ldquo;safe island,&rdquo; and give you an objective weekly count of whether you are winning. Covered in the <Link href="/blog/bed-bug-interceptor-traps-canada">interceptor traps guide</Link>.</li>
            <li><strong>Diatomaceous earth.</strong> A light dusting of crawling-insect diatomaceous earth in cracks and voids desiccates bugs over days with no resistance risk. Technique matters — thick piles get avoided. See <Link href="/blog/diatomaceous-earth-for-bed-bugs">diatomaceous earth for bed bugs</Link>.</li>
            <li><strong>Laundering and hot-drying.</strong> A hot wash and a full hot-dryer cycle reliably kills bugs and eggs in clothing, bedding, and soft items — cheap, and it cannot be resisted.</li>
          </ul>
          <p>Only after those are in place does a <Link href="/blog/bed-bug-spray-canada">bed bug spray in Canada</Link> earn a spot — as a targeted crack-and-crevice residual treatment into the harbourages you have exposed, not a broadcast mist over surfaces you sleep on.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Compare the mechanical stack that carries real bed bug control on Amazon.ca:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="bed bug steamer">Bed bug steamer →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bed bug mattress encasement">Mattress encasement →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bed bug interceptor traps">Interceptor traps →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth bed bugs">Diatomaceous earth →</BuyLink>
          </div>

          <TopPick tag={AMZ_TAG}
            label="Backbone of the Stack"
            name="Bed Bug Steamer (dry-vapour, high-output)"
            blurb="If you buy one thing, buy heat. A dry-vapour steamer drives lethal temperature straight into the seams, tufts, and crevices where bugs and eggs actually hide — the exact places sprays fail, and something no bed bug can evolve resistance to."
            search="bed bug steamer"
            score={8.5}
            pros={['Kills bugs and eggs on contact', 'Reaches harbourages sprays miss', 'No resistance risk, no residue']}
            cons={['Slow, room-by-room work', 'Needs enough dry-steam output to be lethal']}
          />

          <h2>What is actually legal in Canada — and what US sites get wrong</h2>
          <p>This is where a lot of online bed bug advice goes off the rails for Canadian readers, because most of the loudest content is written for the US market. In Canada, consumer pesticides must be <strong>PMRA domestic-class registered</strong> — the label carries a PCP registration number and is written for household use. The products US blogs and Amazon.com listings most aggressively recommend are frequently not in that class here.</p>
          <ul>
            <li><strong>Crossfire (chlorfenapyr):</strong> a professional/commercial-class product in Canada, not a consumer domestic-class item. We will not recommend it for DIY use here.</li>
            <li><strong>Temprid FX (imidacloprid + beta-cyfluthrin):</strong> a neonicotinoid combination product in the professional applicator lane, not over-the-counter consumer domestic-class.</li>
            <li><strong>Bedlam / Bedlam Plus:</strong> US-market bed bug aerosols commonly pushed to consumers stateside; do not assume the same product and label apply in Canada — check for a PMRA registration before trusting any product claim.</li>
          </ul>
          <p>Importing these grey-market from a US retailer is not a shortcut we endorse. It can be illegal to bring across the border, the label directions are written for licensed applicators (rates, PPE, ventilation), and misuse creates genuine safety and legal exposure. The value of Canadian-specific research is precisely this: recommending only what is registered and legal for you to actually use, and naming the popular products that are not.</p>
          <p>The version of this trap that catches the most Canadians is not an obviously American product — it is a familiar shelf brand selling a different formula on each side of the border. We took two of them apart at the label level: <Link href="/blog/harris-bed-bug-killer-review-canada">the Harris &ldquo;Toughest&rdquo; spray and its Canadian-registration problem</Link>, and <Link href="/blog/ortho-home-defense-bed-bug-review-canada">Ortho Home Defense, where the researched version is usually the US one</Link>.</p>
          <p>Among the cans that are unambiguously registered here, two are worth reading before you spend: <Link href="/blog/knock-down-bed-bug-killer-review-canada">Knock Down, the hardware-store default with a PCP number</Link>, and <Link href="/blog/ecoraider-bed-bug-spray-review-canada">EcoRaider, the botanical outlier that kills eggs on direct contact</Link> — the one product in this category with independent Rutgers University testing behind it.</p>

          <h2>Do bug bombs and foggers work on bed bugs?</h2>
          <p>No — and this one is important enough to state bluntly: skip total-release foggers entirely. The mist settles on open, upward-facing surfaces but does not penetrate the cracks, seams, and voids where bed bugs live, so it kills very few of them. Multiple extension entomology programs and studies report that foggers can actually <strong>scatter</strong> bed bugs — driving them deeper into walls and into adjacent rooms or units — turning a contained problem into a spread one. Add the flammability risk and the residue over your whole living space, and foggers are among the worst possible choices.</p>
          <p>The same caution applies to internet home remedies. Rubbing alcohol kills on direct contact but evaporates instantly with zero residual and is a documented fire hazard around bedding and electronics. Vinegar, essential oils, and similar sprays are unreliable at best. None of them reach the hidden population, and none substitute for heat and physical removal.</p>
          <p>If you want the fogger question examined properly rather than dismissed in a paragraph — including which ones are even PMRA-registered here and the narrow flushing job they can do — we wrote it up in <Link href="/blog/best-bed-bug-fogger-canada">the honest verdict on bed bug bombs in Canada</Link>.</p>

          <h2>Bed bug control methods compared</h2>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">What it does</th>
                  <th className="px-4 py-3 text-left">Reaches hidden bugs &amp; eggs?</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Contact spray', 'Kills bugs directly wetted; ~no residual', 'No — surface only', 'Spot-killing a bug you can see'],
                  ['Residual spray (PMRA)', 'Leaves a deposit that kills for a few weeks', 'Partly — treated crevices only', 'Targeted crack-and-crevice support'],
                  ['Steam / heat', 'Cooks bugs and eggs on contact', 'Yes — drives heat into seams', 'Mattresses, frames, baseboards, upholstery'],
                  ['Diatomaceous earth', 'Desiccates bugs over days', 'Yes — in dry voids and cracks', 'Long-term barrier in wall voids, under furniture'],
                  ['Encasements', 'Seals bugs in, denies harbourage', 'Yes — traps/excludes at the mattress', 'Protecting and isolating the bed'],
                  ['Interceptor traps', 'Catches and monitors bugs at bed legs', 'Monitoring, not killing', 'Isolating the bed + tracking progress'],
                  ['Professional heat', 'Raises whole room to lethal temperature', 'Yes — entire room at once', 'Severe / multi-room infestations'],
                ].map(([method, does, reaches, best]) => (
                  <tr key={method} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{method}</td>
                    <td className="px-4 py-3 text-gray-700">{does}</td>
                    <td className="px-4 py-3 text-gray-700">{reaches}</td>
                    <td className="px-4 py-3 text-gray-600">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">No prices shown — availability and pricing shift constantly. The point is the mechanism, not the sticker.</p>

          <h2>Can you beat bed bugs with sprays alone?</h2>
          <p>Honestly, almost never. A very light, very early infestation caught in a single room can sometimes be cleared by a disciplined non-chemical stack — steam every seam, encase the mattress and box spring, put interceptors under every leg, dust harbourages with diatomaceous earth, hot-wash and hot-dry all fabrics, and repeat weekly for three to six weeks while the interceptor counts drop to zero. Notice that spray is a minor player even in the DIY win scenario.</p>
          <p>The dust in that stack is the part that quietly does the most work, because desiccants kill by drying an insect out rather than poisoning it — there is no such thing as a resistant bug. Silica gel and diatomaceous earth are not equivalent, though: <Link href="/blog/best-bed-bug-powder-canada">how the two desiccant dusts compare on speed and application rate</Link> sorts out which one belongs in your voids, and <Link href="/blog/cimexa-bed-bug-review-canada">our long-form look at CimeXa silica gel</Link> covers the near-permanent residual professionals reach for.</p>
          <p>The same logic explains why heat outranks chemistry as a primary method rather than a supporting one — we ran the two head to head in <Link href="/blog/heat-vs-chemical-bed-bug-treatment-canada">heat versus chemical treatment for a Canadian DIY job</Link>.</p>
          <p>Before you start, you need to know what you are dealing with. Confirming an infestation, finding the harbourages, and gauging severity is step zero — walk through it in <Link href="/blog/how-to-check-for-bed-bugs-canada">how to check for bed bugs in Canada</Link>. If that inspection turns up heavy live activity, eggs in multiple rooms, or evidence in a shared-wall apartment or condo, DIY is the wrong tool.</p>

          <h2>When to stop spraying and call a professional</h2>
          <p>Call a licensed pest control company when any of these are true: the infestation spans multiple rooms; you share walls (bed bugs travel between apartment and condo units, so unit-by-unit DIY rarely holds); several weeks of consistent DIY treatment have not clearly reduced the interceptor counts; or you are seeing heavy live bugs and eggs. Severe infestations typically require professional <strong>whole-room heat treatment</strong>, which raises the entire space to a temperature bed bugs and eggs cannot survive — reaching every void at once in a way no consumer spray or steamer can.</p>
          <p>To be clear about our position: <strong>BuzzSkito does not offer bed bug control or heat treatment.</strong> We are a mosquito and tick company, and this guide is independent product research, not a service pitch. When we say call a pro, we mean a licensed bed bug specialist — a genuine referral with nothing to sell you. For a sense of what pest work costs in Canada generally, see our <Link href="/pest-control-cost-canada">pest control cost in Canada</Link> overview.</p>
          <p className="text-sm text-gray-600">Health note: bed bugs are not known to transmit disease to humans, though bites can cause itching and, for some people, allergic reactions. For any medical concern about bites or reactions, rely on Health Canada guidance or your local public health unit rather than a product page.</p>

          <div className="not-prose mt-10 rounded-xl border border-brand-200 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              More independent Canadian pest product research →{' '}
              <Link href="/pest-product-guides" className="font-semibold underline">BuzzSkito Pest Product Guides</Link>
            </p>
          </div>
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
        <AdjacentPestCTA pest="bed bugs" />
      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Bed Bug Steamer (dry-vapour)" search="bed bug steamer" label="What actually works" />
    </>
  )
}
