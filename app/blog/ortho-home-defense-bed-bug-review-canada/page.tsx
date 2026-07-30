import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'ortho-home-defense-bed-bug-review-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'Ortho Home Defense Bed Bug Killer Review Canada 2026 — Is the US Formula PMRA-Legal Here?'
const META_TITLE = 'Ortho Bed Bug Killer Canada 2026: Legal Here?'

const FAQS = [
  {
    question: 'Is Ortho Home Defense Bed Bug Killer available in Canada?',
    answer: 'Yes, but not always the version you have seen online. Ortho (a Scotts brand) sells bed-bug products through Canadian retailers under the Ortho Canada label, and those cans are formulated and registered for the Canadian market. The catch is that the exact "Ortho Home Defense Bed Bug Killer" many people research is the US product sold at US Home Depot and Walmart — and US and Canadian formulas are not the same. Before you buy, look for a Pest Control Products (PCP) registration number printed on the label. A can with a PCP number is Canadian-registered and legal to use here; a can showing only a US EPA number is a US product that is not registered for use in Canada.',
  },
  {
    question: 'Is the US formula of Ortho Home Defense legal to use in Canada?',
    answer: 'No. Every pesticide sold and used in Canada must be registered with Health Canada’s Pest Management Regulatory Agency (PMRA) and carry a PCP registration number on the label. The US formula carries a US EPA number instead, which has no legal standing in Canada. Buying the US can across the border or through a grey-market third-party seller means using an unregistered pesticide indoors — that is not legal, and you also lose the Canadian-language label directions and safety information that a registered product is required to carry. The practical rule is simple: if the can does not show a PCP number, it is not the one to use in a Canadian home.',
  },
  {
    question: 'Does Ortho Home Defense Bed Bug Killer actually kill bed bugs?',
    answer: 'On direct contact, a pyrethroid-based bed-bug spray like Ortho’s can kill the bugs it lands on, and the label residual is designed to keep killing bugs that later walk across a treated surface for a period of weeks. That is genuinely useful for the bugs you can see and the surfaces they travel. But "kills on contact" is the important limit: a spray only works where the liquid actually reaches, and bed bugs spend most of their lives tucked deep inside seams, cracks, and voids where a surface spray never penetrates. It reduces the population you can reach; it does not sterilize a room.',
  },
  {
    question: 'Does Ortho Home Defense kill bed bug eggs?',
    answer: 'Egg kill is the weakest point of almost every liquid bed-bug spray, Ortho included. Bed-bug eggs are cemented into fabric and cracks with a tough coating, and most contact insecticides do not reliably penetrate the shell, so eggs frequently survive a spray and hatch days later into a fresh wave of nymphs. That is why spraying once and hoping is the most common way DIY treatment fails. Heat is the reliable egg-killer: a bed-bug steamer or a heat treatment reaches the temperatures that destroy eggs a spray leaves behind, which is why chemical and heat methods are so often paired.',
  },
  {
    question: 'Does it kill pyrethroid-resistant bed bugs?',
    answer: 'This is the honest weakness of any single-mode pyrethroid product. Many urban bed-bug populations — including in Ontario — have developed resistance to pyrethroids, the chemical class most consumer sprays (including basic Ortho formulas) rely on. Against a resistant population, a pyrethroid-only spray can knock down a few exposed bugs while the colony shrugs off the residual. Products that combine two active ingredients, or that pair a fast knockdown chemical with an insect growth regulator, tend to hold up better against resistance. If bugs keep reappearing after repeated spraying, resistance is the likely culprit and you need a different tool, not more of the same can.',
  },
  {
    question: 'How do I use a bed-bug spray like Ortho correctly?',
    answer: 'Read the PCP label first — it is the legal use instruction and it tells you exactly what surfaces are approved. In general, you treat the harbourage, not the open air: mattress seams and piping, box-spring edges and staples, bed-frame joints and bolt holes, baseboards, and cracks around the bed. Spray to the point of light dampness along those lines rather than soaking, let it dry fully before remaking the bed, and repeat on the label schedule because you are trying to catch newly hatched nymphs before they mature. Vacuum first to remove live bugs and debris, spray second, and monitor with interceptor traps so you can tell whether numbers are actually dropping.',
  },
  {
    question: 'Is it safe to spray Ortho Home Defense directly on a mattress?',
    answer: 'Only if the specific product’s Canadian PCP label lists mattress application as an approved use, and only exactly as that label directs — usually seams and edges, allowed to dry completely before the mattress is used again. Never treat the sleeping surface beyond what the label permits, and never improvise with a US can whose Canadian directions you do not have. If you are uneasy about chemicals on a sleep surface, a mattress and box-spring encasement plus steam is a widely used non-chemical alternative for the bed itself, reserving spray for the frame and perimeter.',
  },
  {
    question: 'How long does the residual last?',
    answer: 'Consumer pyrethroid residuals are typically rated for a few weeks on the label under ideal conditions, but real-world persistence is shorter on porous surfaces, in humidity, and anywhere it gets wiped, washed, or walked on heavily. Treat the label figure as a best case, not a guarantee, and plan on repeat applications through the treatment window rather than assuming one pass holds for the full rated period. The residual matters most on the hard travel routes — frame joints, baseboards, cracks — where bugs move between harbourage and the bed.',
  },
  {
    question: 'Ortho vs Konk vs Knock Down — which is better for a Canadian home?',
    answer: 'The most important difference is registration: Konk and Knock Down are Canadian brands with clear PCP registration numbers aimed squarely at the Canadian market, so there is no cross-border legality question with them. Ortho sells Canadian-registered bed-bug products too, but the brand’s fame comes from its US line, which creates constant confusion about which can you are actually holding. On raw performance, all three are contact-plus-residual sprays with the same core limitation on eggs and on resistant populations. Choose on verified PCP registration first, then on whether the formula combines actives or an IGR for resistance. Our companion reviews of Konk and Knock Down break each down in detail.',
  },
  {
    question: 'Can Ortho Home Defense alone get rid of bed bugs?',
    answer: 'Realistically, no — a single spray rarely clears an established infestation on its own, and that is true of every consumer bed-bug spray, not just Ortho. Spray reaches surfaces but not deep harbourage; it under-performs on eggs; and it can meet resistance. The methods that actually finish the job stack multiple tools: vacuuming to remove live bugs, heat (a steamer or heat chamber) to kill eggs and reach cracks, encasements to seal the mattress and box spring, interceptor traps to monitor, and a residual spray or dust on the travel routes. A can of spray is one layer of that plan, not the whole plan.',
  },
  {
    question: 'Where should I buy a bed-bug spray in Canada?',
    answer: 'For a physical can you can inspect, Canadian big-box and hardware retailers (Home Depot Canada, RONA, Canadian Tire) stock Canadian-registered bed-bug products where you can read the PCP number before you buy. Online, stick to Canadian listings and Canadian-fulfilled sellers so you receive the PMRA-registered version rather than a US import. Wherever you buy, the check is the same every time: confirm a PCP registration number on the label. If a listing shows only a US EPA number or cannot confirm Canadian registration, treat that as a signal to choose a different product.',
  },
  {
    question: 'What is a PCP number and why does it matter so much here?',
    answer: 'A PCP (Pest Control Products) registration number is the identifier Health Canada assigns to every pesticide it has reviewed and approved for sale and use in Canada. It is your one-glance proof that a product is legal to use here, that its label directions have been vetted for Canadian conditions, and that it carries the required Canadian safety and first-aid information. For a US-famous brand like Ortho, the PCP number is exactly how you tell the legal Canadian can apart from the US import that looks almost identical. No PCP number, no legal use in a Canadian home — it really is that clean a test.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'An independent Canadian review of Ortho Home Defense Bed Bug Killer: US vs Canadian formula, the PCP-registration question, how well it kills bugs and eggs, resistance, correct use, and the PMRA-registered alternatives. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('ortho-home-defense-bed-bug-review-canada')

export default function OrthoHomeDefenseBedBugReviewCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian review of Ortho Home Defense Bed Bug Killer — the US-vs-Canadian-formula problem, PCP registration, real-world performance on bugs and eggs, pyrethroid resistance, and the PMRA-registered alternatives.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Ortho Home Defense Bed Bug Killer Review Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Ortho Home Defense Bed Bug Killer Review</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Ortho Home Defense is one of the most-searched bed-bug sprays in North America &mdash; but the can most people mean is the <em>US</em> product. Here is what actually kills bed bugs, what the label can and can&rsquo;t do, and the one thing every Canadian buyer must check before spraying: a PCP registration number.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Ortho Home Defense Bed Bug Killer" search="ortho home defense bed bug killer" label="Check Canadian availability" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Ortho Home Defense Bed Bug Killer is a competent <strong>contact-plus-residual pyrethroid spray</strong>, but the version most people research is the <strong>US formula</strong>, which is <strong>not PMRA-registered for use in Canada</strong>. Ortho does sell Canadian-registered bed-bug products &mdash; the only reliable way to tell them apart is a <strong>PCP registration number</strong> on the label. Like every consumer spray, it under-performs on cemented eggs and can meet pyrethroid resistance, so treat it as one layer in a plan, not a cure.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>US and Canadian formulas differ &mdash; the famous US can carries an EPA number, not a Canadian PCP number.</li>
              <li>Legal-in-Canada test: a <strong>PCP registration number</strong> printed on the label. No PCP number = not for use here.</li>
              <li>Kills bugs on contact and holds a residual for weeks on travel routes &mdash; but only where the liquid reaches.</li>
              <li>Weak on eggs (cemented, shell-protected) &mdash; heat kills what spray leaves behind.</li>
              <li>Pyrethroid resistance is common in Ontario bed bugs; single-active sprays can under-deliver.</li>
              <li>No spray clears an infestation alone &mdash; pair with vacuum, steam, encasements, and interceptor traps.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <section className="bg-white px-4 py-2">
        <div className="max-w-3xl mx-auto">
          <TopPick tag={AMZ_TAG}
            label="Verdict — Buy the Canadian-Registered Can, Verify the PCP Number"
            name="Ortho Home Defense Bed Bug Killer (Canadian PCP-registered version)"
            blurb="A capable, widely stocked contact-plus-residual spray for the bugs and surfaces you can reach — as long as the can in your hands is the Canadian-registered version with a PCP number, not the US import. It is a solid perimeter-and-frame tool, but it is weak on eggs and can meet pyrethroid resistance, so buy it as one layer of a multi-tool plan rather than a standalone fix. If you cannot confirm a PCP number, choose a clearly Canadian-registered brand instead."
            search="ortho home defense bed bug killer"
            score={7.2}
            pros={['Widely stocked at Canadian retailers', 'Contact kill plus a weeks-long residual on travel routes', 'Comfort-wand versions make baseboard and frame work easy']}
            cons={['US formula is NOT PMRA-registered — verify the PCP number', 'Weak on cemented eggs, like most sprays', 'Pyrethroid-only formulas can meet resistance', 'Not a standalone cure — needs heat and monitoring alongside']}
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Ortho vs the Canadian-Registered Alternatives · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">How Ortho Stacks Up Against Canada&rsquo;s PMRA-Registered Bed-Bug Sprays</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            All of these are contact-plus-residual sprays that share the same core limits on eggs and resistance. The decisive difference for a Canadian buyer is <strong>registration clarity</strong> &mdash; whether you can confirm a PCP number without second-guessing which formula you have. Here is the honest breakdown, with a live Amazon.ca availability check per option.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">Canadian registration</th>
                  <th className="px-4 py-3 text-left">Best at</th>
                  <th className="px-4 py-3 text-left">Watch out for</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ortho Home Defense<br /><span className="font-normal text-xs text-gray-500">Bed Bug Killer</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Verify</strong> &mdash; CA version has a PCP number; US version does not</td>
                  <td className="px-4 py-3 text-gray-700">Frame, baseboard &amp; perimeter residual</td>
                  <td className="px-4 py-3 text-gray-700">US import is not PMRA-legal here</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ortho home defense bed bug killer" block>Check price &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Konk<br /><span className="font-normal text-xs text-gray-500">Bed Bug Killer</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Clear</strong> &mdash; Canadian brand, PCP-registered</td>
                  <td className="px-4 py-3 text-gray-700">No-guesswork Canadian-legal contact spray</td>
                  <td className="px-4 py-3 text-gray-700">Same egg &amp; resistance limits</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="konk bed bug killer canada" block>Check price &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Knock Down<br /><span className="font-normal text-xs text-gray-500">Bed Bug Killer</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Clear</strong> &mdash; Canadian brand, PCP-registered</td>
                  <td className="px-4 py-3 text-gray-700">Value contact-plus-residual, widely stocked</td>
                  <td className="px-4 py-3 text-gray-700">Pyrethroid-class; watch resistance</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="knock down bed bug killer canada" block>Check price &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">EcoRaider<br /><span className="font-normal text-xs text-gray-500">Bed Bug Killer</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Botanical</strong> &mdash; plant-oil route; confirm the Canadian listing</td>
                  <td className="px-4 py-3 text-gray-700">Lower-tox option for sensitive rooms</td>
                  <td className="px-4 py-3 text-gray-700">Contact-reliant; little residual</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ecoraider bed bug killer canada" block>Check price &rarr;</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Pesticides sold and used in Canada must be PMRA-registered and display a PCP registration number &mdash; that number, not the brand fame, is what makes a can legal to use in a Canadian home. Availability and formulas vary by retailer and change over time; always read the current label before you buy.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">&#9888;&#65039; A spray removes what it reaches &mdash; it does not eradicate.</strong> Contact insecticides under-perform on cemented eggs and against resistant populations. Pair any spray with a <Link href="/blog/best-bed-bug-steamer-canada" className="text-emerald-700 underline font-semibold">steamer</Link> for the eggs, a <Link href="/blog/bed-bug-mattress-encasement-canada" className="text-emerald-700 underline font-semibold">mattress encasement</Link> to seal the bed, and <Link href="/blog/bed-bug-interceptor-traps-canada" className="text-emerald-700 underline font-semibold">interceptor traps</Link> to monitor.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>The Ortho Home Defense Problem: Two Cans, One Name</h2>
          <p>Ortho Home Defense is one of the most recognized pest-control brands in North America, and its bed-bug line rides that recognition &mdash; a bright can, a comfort wand, and a promise that it kills bed bugs and their eggs. The trouble for a Canadian shopper is not the marketing; it is that the product almost everyone is actually researching is the <strong>US</strong> version, sold at US Home Depot and Walmart under US EPA registration. That can is engineered for the US market, and its formula and label are not the same as anything sold and registered for use in Canada.</p>
          <p>This matters because pesticides do not cross the border on brand reputation. A product can be entirely legitimate in Ohio and simply not registered for legal use in Ontario. Ortho (a Scotts Miracle-Gro brand) does sell bed-bug products through Canadian retailers under an Ortho Canada label, and those cans are the ones formulated and registered for Canadian conditions. But because the name, the look, and the online reviews are dominated by the US line, it is genuinely easy to end up holding &mdash; or ordering &mdash; the wrong version. The rest of this review is built around the one check that resolves the confusion every time.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability &mdash; and confirm a PCP number on the listing or label before you buy:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="ortho home defense bed bug killer">Ortho on Amazon.ca &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="konk bed bug killer canada">Konk (Canadian) &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="knock down bed bug killer canada">Knock Down (Canadian) &rarr;</BuyLink>
          </div>

          <h2>The PCP Number Is the Whole Test</h2>
          <p>Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) reviews and registers every pesticide legally sold and used in this country, and it assigns each approved product a <strong>Pest Control Products (PCP) registration number</strong>. That number is printed on the label, and it is your single, unambiguous proof of three things at once: the product is legal to use in Canada, its directions have been vetted for Canadian conditions, and it carries the Canadian-language safety, first-aid, and disposal information the law requires.</p>
          <p>For a US-famous brand, the PCP number is exactly how you separate the legal Canadian can from the near-identical US import. A can that shows only a US EPA registration number is a US product; a can with a PCP number is Canadian-registered. There is no judgment call and no brand loyalty involved &mdash; you look for the number, and if it is not there, you do not spray it inside a Canadian home. Importing the US can across the border or ordering it from a grey-market third-party seller means using an unregistered pesticide indoors, without the vetted Canadian directions that make it safe to use. That is the practical, legal reason to slow down before you click &ldquo;buy&rdquo; on the familiar-looking can.</p>

          <h2>What Ortho (and Every Contact Spray) Actually Does Well</h2>
          <p>Set the registration question aside for a moment and judge the tool on its merits, because a Canadian-registered pyrethroid bed-bug spray &mdash; Ortho&rsquo;s included &mdash; does have a real job it does competently. It kills the bugs it directly contacts, and it leaves a <strong>residual</strong> film that keeps killing bed bugs that later walk across a treated surface for a period of weeks. That residual is genuinely valuable on the hard travel routes bed bugs use to move between their hiding spots and your bed: frame joints and bolt holes, box-spring edges, baseboards, and the cracks around the bed. A comfort-wand can makes laying that residual along baseboards and frame edges quick and low-effort, which is a real convenience advantage over a plain trigger sprayer.</p>
          <p>So as a <em>perimeter and frame tool</em>, a registered Ortho can pulls its weight. Where it &mdash; and every consumer spray &mdash; runs into hard limits is everywhere the liquid cannot reach and everything the chemistry cannot beat.</p>

          <h2>Where It Falls Short: Eggs, Depth, and Resistance</h2>
          <p>Three limitations define what a bed-bug spray cannot do, and they apply to Ortho no more and no less than to its competitors.</p>
          <ul>
            <li><strong>Eggs survive.</strong> Female bed bugs cement their eggs into fabric and cracks with a tough coating that most contact insecticides do not penetrate. A thorough spray can leave a surface studded with viable eggs that hatch days later into a fresh generation &mdash; which is why &ldquo;I sprayed and they came back&rdquo; is the single most common DIY story.</li>
            <li><strong>Surface reach only.</strong> A spray works where the liquid lands. Bed bugs spend the bulk of their lives deep inside seams, screw holes, and structural voids that a surface application never enters, so you are treating the routes and the edges, not the core of the harbourage.</li>
            <li><strong>Pyrethroid resistance.</strong> Many urban bed-bug populations, including in Ontario, have evolved resistance to pyrethroids &mdash; the chemical class most consumer sprays, Ortho&rsquo;s basic formulas among them, depend on. Against a resistant colony, a pyrethroid-only residual can knock down a few exposed bugs while the population barely notices. Formulas that combine two actives, or pair a knockdown chemical with an insect growth regulator, tend to hold up better.</li>
          </ul>
          <p>None of this makes a spray useless; it makes a spray <em>a layer</em>. The failure mode is buying a can, spraying once, and expecting eradication. For the fuller picture of what liquid sprays can and cannot deliver, our companion piece on whether <Link href="/blog/do-bed-bug-sprays-actually-work">bed-bug sprays actually work</Link> walks through the evidence, and our <Link href="/blog/heat-vs-chemical-bed-bug-treatment-canada">heat-vs-chemical comparison</Link> explains why the two approaches are so often paired.</p>

          <h2>How to Choose a Bed-Bug Spray in Canada: What You&rsquo;re Actually Paying For</h2>
          <p>Bed-bug sprays span a surprisingly wide range in price and format, and it pays to know which differences matter for results versus which are convenience. Prioritise in roughly this order:</p>
          <ul>
            <li><strong>Confirmed PCP registration (non-negotiable).</strong> Before anything else, the can must show a Canadian PCP number. This is not a feature you can add later or work around &mdash; an unregistered product is off the table regardless of how good the reviews look. Buy the registration first.</li>
            <li><strong>Mode of action &mdash; and resistance strategy.</strong> A single pyrethroid is the baseline. If bed bugs keep reappearing, a formula that combines two active ingredients or includes an insect growth regulator (which disrupts the life cycle rather than relying on nerve-agent knockdown) is worth the step up, because it is your hedge against the resistance that is now common.</li>
            <li><strong>Format: ready-to-use vs concentrate vs dust.</strong> Ready-to-use cans (like Ortho&rsquo;s) are the simplest for a single room. Concentrates cover more area per dollar but demand accurate mixing and the right sprayer. A desiccant dust such as diatomaceous earth or silica works on a completely different principle &mdash; it abrades the bug&rsquo;s shell and lasts far longer in dry voids &mdash; and is often used <em>alongside</em> a spray, in the cracks a liquid dries out of.</li>
            <li><strong>Delivery hardware.</strong> A comfort wand or a good trigger changes how thoroughly you can treat baseboards and frame joints without fatigue. It does not change the chemistry, but it changes how well you apply it, and application quality is a real driver of results.</li>
            <li><strong>Label-approved surfaces.</strong> Check that the specific product&rsquo;s label permits the surfaces you intend to treat &mdash; especially any mattress application, which is tightly specified. The label is the legal instruction, not a suggestion.</li>
          </ul>
          <p>Read that as a spending map: pay for registration and mode of action, treat format and hardware as fit-to-your-situation choices, and never let a low price or a famous name talk you past the PCP check. A cheaper can that is not registered for Canada is not a bargain; it is the wrong tool.</p>

          <h2>The Plan Ortho Fits Into</h2>
          <p>A registered contact spray earns its place, but only inside a stack of tools that each cover a different weakness. The proven DIY sequence looks like this:</p>
          <ol>
            <li><strong>Vacuum</strong> the seams, edges, and frame to physically remove live bugs and debris &mdash; a <Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">sealed-HEPA vacuum</Link> keeps what you capture from blowing back into the room.</li>
            <li><strong>Steam</strong> the mattress seams, tufts, and cracks to kill the eggs a spray leaves behind &mdash; heat is the reliable egg-killer, and a <Link href="/blog/best-bed-bug-steamer-canada">bed-bug steamer</Link> reaches the temperatures that do it. For heavier cases, a dedicated <Link href="/blog/bed-bug-heater-canada">bed-bug heater</Link> treats whole items at once.</li>
            <li><strong>Spray</strong> a registered residual (Ortho or a clearly Canadian brand) along the frame joints, baseboards, and travel routes &mdash; the surfaces where a residual actually helps.</li>
            <li><strong>Encase</strong> the mattress and box spring so any survivors are sealed in and the bed can no longer harbour them &mdash; see our <Link href="/blog/bed-bug-mattress-encasement-canada">encasement guide</Link>.</li>
            <li><strong>Monitor</strong> with <Link href="/blog/bed-bug-interceptor-traps-canada">interceptor traps</Link> under the bed legs so you can tell, week over week, whether the numbers are actually falling.</li>
          </ol>
          <p>For the complete DIY walkthrough, our <Link href="/blog/bed-bug-control-canada-hub">bed-bug control hub for Canada</Link> ties the tools together, and the broader <Link href="/blog/best-pest-control-equipment-canada">pest-control equipment guide</Link> covers the hardware side. If you would rather compare cans head-to-head, the Canadian-registered alternatives each have a dedicated review: <Link href="/blog/konk-bed-bug-killer-review-canada">Konk</Link>, <Link href="/blog/knock-down-bed-bug-killer-review-canada">Knock Down</Link>, <Link href="/blog/harris-bed-bug-killer-review-canada">Harris</Link>, and <Link href="/blog/ecoraider-bed-bug-spray-review-canada">EcoRaider</Link>.</p>

          <h2>The Verdict</h2>
          <p>Ortho Home Defense Bed Bug Killer is a capable contact-plus-residual spray for the bugs and surfaces you can reach, and as a frame-and-perimeter tool it does its job. The single most important thing to get right in Canada is not performance but <strong>provenance</strong>: the US formula that dominates the search results and reviews is not PMRA-registered for use here, and the only reliable way to hold the legal Canadian version is to confirm a PCP registration number on the label. Do that, and Ortho is a reasonable pick. Can&rsquo;t confirm it, and a clearly Canadian-registered brand like Konk or Knock Down removes the doubt for the same core performance.</p>
          <p>Either way, temper the expectations any spray sets: it is weak on eggs, it can meet resistance, and it reaches surfaces but not the depths where bed bugs live. Buy it as one deliberate layer &mdash; alongside heat, encasements, and monitoring &mdash; and it contributes. Buy it as a miracle in a can, and it will disappoint you exactly the way every single-spray bed-bug plan does.</p>
          <p>If the provenance question has put you off Ortho entirely, our <Link href="/blog/bed-bug-spray-canada">bed bug spray and killer guide for Canada</Link> carries a full legal-vs-not-legal table of every product in this category, plus a straight answer on what chemical kills bed bugs and their eggs.</p>

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

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/bed-bug-spray-canada">Best Bed-Bug Spray Canada — What&rsquo;s Actually PMRA-Legal</Link></li>
            <li><Link href="/blog/konk-bed-bug-killer-review-canada">Konk Bed Bug Killer Review Canada</Link></li>
            <li><Link href="/blog/knock-down-bed-bug-killer-review-canada">Knock Down Bed Bug Killer Review Canada</Link></li>
            <li><Link href="/blog/harris-bed-bug-killer-review-canada">Harris Bed Bug Killer Review Canada</Link></li>
            <li><Link href="/blog/do-bed-bug-sprays-actually-work">Do Bed-Bug Sprays Actually Work?</Link></li>
            <li><Link href="/blog/heat-vs-chemical-bed-bug-treatment-canada">Heat vs Chemical Bed-Bug Treatment in Canada</Link></li>
            <li><Link href="/blog/best-bed-bug-steamer-canada">Best Bed-Bug Steamer Canada — Heat That Kills the Eggs</Link></li>
            <li><Link href="/blog/bed-bug-control-canada-hub">Bed-Bug Control Canada — The Complete DIY Hub</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
