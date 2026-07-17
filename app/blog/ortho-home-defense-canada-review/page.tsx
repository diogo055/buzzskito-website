import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'

const SLUG = 'ortho-home-defense-canada-review'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Ortho Home Defense Canada 2026 — Review + What You Can Actually Buy'
const META_TITLE = 'Ortho Home Defense Canada Review 2026: What Is Actually Sold Here'

const FAQS = [
  {
    question: 'Is Ortho Home Defense sold in Canada?',
    answer: 'Not in the form most people are searching for. The bifenthrin-based "Ortho Home Defense Max Insect Killer for Indoor & Perimeter" that dominates US shelves at Home Depot and Lowe\'s is not registered with Health Canada\'s Pest Management Regulatory Agency (PMRA), so it is not legally sold at Canadian Tire, Home Depot Canada, or Amazon.ca. What you will find in Canada is the "Ortho Bug B Gon ECO" line plus a handful of PMRA-registered Ortho products that use lower-risk actives. If an Amazon listing ships the US bifenthrin formula to Canada, it is being sold outside Canadian registration — we do not recommend buying it that way.',
  },
  {
    question: 'Why are so many Ortho products US-only in Canada?',
    answer: 'Two reasons. First, every pesticide sold in Canada needs a PMRA registration and a PCP number on the label; many US Ortho SKUs were simply never registered here. Second, Ontario, Quebec, and several other provinces have cosmetic pesticide bans that prohibit the sale and lawn/garden use of Class 9 synthetic pesticides — bifenthrin and several other pyrethroids Ortho uses in the US fall under that ban. So a product that is a normal hardware-store buy in Ohio can be both unregistered and prohibited for cosmetic use in Ontario. Canadian Ortho lines are reformulated with reduced-risk actives to comply.',
  },
  {
    question: 'What is the Canadian equivalent of Ortho Home Defense?',
    answer: 'For crawling insects and a perimeter barrier around the home (ants, spiders, earwigs, boxelder bugs), the closest legally sold Canadian options are Ortho Bug B Gon ECO, Doktor Doom Residual, Wilson One Shot, and Raid Bug Barrier — all PMRA-registered and available at Canadian Tire, Home Depot Canada, and Amazon.ca. For mosquitoes specifically, there is no consumer "spray your yard" barrier product legally sold for cosmetic use in Ontario. Mosquito larvae in standing water are handled with BTI mosquito dunks, and adult mosquitoes across a whole yard are handled by a licensed applicator applying a PMRA-registered product.',
  },
  {
    question: 'Does Ortho Home Defense or Bug B Gon kill mosquitoes?',
    answer: 'The US "Ortho Home Defense Mosquito Killer" and "Ortho Bug B Gon Mosquito Killer" hose-end and mist products are marketed to knock down adult mosquitoes on contact and leave a short residual on foliage. In practice, consumer contact sprays kill the mosquitoes they directly wet and give a few days of light residual at best — nowhere near the 21–30 day whole-yard control a licensed barrier treatment delivers. And in Ontario, the yard-application mosquito formulas are largely not available for cosmetic use anyway. For a real reduction in bites, a professional barrier spray plus BTI dunks in standing water outperforms any consumer mosquito spray.',
  },
  {
    question: 'Is Ortho Bug B Gon safe around kids and pets?',
    answer: 'The Canadian Ortho Bug B Gon ECO line is formulated to be lower-risk, but "lower-risk" is not "no precautions." Follow the label: keep children and pets off treated surfaces until the product has fully dried, do not apply near vegetable gardens or water features unless the label allows it, store it locked away, and never mix or over-apply. The label\'s PCP number and directions are the legal instructions — they override any tip you read online, including ours. If you are unsure whether a product is right for a pet household or edible garden, a licensed applicator can advise on the safest approach.',
  },
  {
    question: 'Where should I buy Ortho products in Canada?',
    answer: 'Stick to the PMRA-registered Canadian lines from Canadian retailers you can verify: Canadian Tire, Home Depot Canada, Rona/Lowe\'s Canada, and Amazon.ca (confirm the listing ships from and is sold in Canada, and that the label shows a PCP number). Garden centres also carry Ortho Bug B Gon ECO in season. Avoid grey-market listings that ship the US bifenthrin "Home Defense Max" into Canada — those are unregistered here, may be seized at the border, and are not legal for cosmetic outdoor use in Ontario.',
  },
  {
    question: 'When should I just hire a professional instead of using Ortho?',
    answer: 'Consumer sprays are fine for a line of ants at the door or a few spiders in the garage. Hire a pro when the problem is mosquitoes or ticks across a whole yard, when you have a recurring seasonal issue, when you have kids or pets and want the margin of a licensed, insured applicator, or when you simply want it handled without spraying anything yourself. A licensed barrier treatment covers the whole property, uses PMRA-registered products applied to label, lasts 21–30 days, and — unlike any Ortho consumer product sold in Canada — is built to control both mosquitoes and ticks. BuzzSkito treats from $99 across 19 GTA cities.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Honest Ortho Home Defense, Bug B Gon & mosquito review for Canada: which SKUs are US-only, what is PMRA-registered here, Canadian equivalents, safe use, and when to hire a pro. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function OrthoHomeDefenseCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 honest review of Ortho Home Defense, Bug B Gon and Ortho mosquito products in Canada.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Ortho Home Defense Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Ortho Home Defense Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">An honest look at Ortho Home Defense, Bug B Gon, and Ortho mosquito products for Canadian yards — which SKUs are US-only, what is actually registered and sold here, and the Canadian equivalents that are worth buying.</p>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The bifenthrin &ldquo;Ortho Home Defense Max&rdquo; is not sold in Canada — it is not PMRA-registered and bifenthrin is banned for cosmetic yard use in Ontario. For Canadian buyers, the pick is Ortho Bug B Gon ECO, the PMRA-registered line that handles crawling insects like ants and spiders at the door; no Ortho product sold here is a serious mosquito or tick solution.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Ortho Home Defense Max (bifenthrin) is not PMRA-registered, and bifenthrin is a Class 9 pesticide prohibited for cosmetic lawn and garden use in Ontario.</li>
              <li>Ortho Bug B Gon ECO is the reduced-risk Canadian line, sold at Canadian Tire, Home Depot Canada, Rona, and Amazon.ca.</li>
              <li>Every pesticide legally sold in Canada must show a PCP (Pest Control Products) registration number on the label.</li>
              <li>Consumer contact mosquito sprays kill only the insects they directly wet and leave a few days of light residual at best.</li>
              <li>No consumer Ortho SKU sold in Canada provides tick control.</li>
              <li>A licensed professional barrier spray from $99 covers the whole yard for 21–30 days and controls both mosquitoes and ticks.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">What Is Actually Sold in Canada · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Ortho in Canada: US-Only vs Available Here</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            The single most important thing to know before you shop: the famous bifenthrin &ldquo;Home Defense Max&rdquo; you see in US stores is <strong>not</strong> registered with Health Canada and is not a legal cosmetic-use product in Ontario. Here is what is US-only, and what you can actually buy at Canadian Tire, Home Depot Canada, and Amazon.ca.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Ortho product</th>
                  <th className="px-4 py-3 text-left">What it is</th>
                  <th className="px-4 py-3 text-left">Canada status</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Home Defense Max <span className="font-normal text-xs text-gray-500">(Indoor &amp; Perimeter)</span></td>
                  <td className="px-4 py-3 text-gray-700">Bifenthrin perimeter barrier</td>
                  <td className="px-4 py-3 text-rose-700 font-semibold">US only — not PMRA-registered</td>
                  <td className="px-4 py-3"><BuyLink search="ortho home defense max insect killer">Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Home Defense Insect Killer <span className="font-normal text-xs text-gray-500">(Lawn &amp; Landscape)</span></td>
                  <td className="px-4 py-3 text-gray-700">Bifenthrin yard spray</td>
                  <td className="px-4 py-3 text-rose-700 font-semibold">US only — cosmetic-use ban (ON)</td>
                  <td className="px-4 py-3"><BuyLink search="ortho home defense insect killer lawn">Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Bug B Gon <span className="font-normal text-xs text-gray-500">(US bifenthrin)</span></td>
                  <td className="px-4 py-3 text-gray-700">Insect killer for lawns/gardens</td>
                  <td className="px-4 py-3 text-rose-700 font-semibold">US formula — not sold here</td>
                  <td className="px-4 py-3"><BuyLink search="ortho bug b gon insect killer">Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Bug B Gon ECO <span className="font-normal text-xs text-gray-500">(Canadian line)</span></td>
                  <td className="px-4 py-3 text-gray-700">Reduced-risk crawling-insect control</td>
                  <td className="px-4 py-3 text-emerald-700 font-semibold">Sold in Canada · PMRA-registered</td>
                  <td className="px-4 py-3"><BuyLink search="ortho bug b gon eco">Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Home Defense / Bug B Gon Mosquito Killer</td>
                  <td className="px-4 py-3 text-gray-700">Contact mosquito knockdown mist</td>
                  <td className="px-4 py-3 text-amber-700 font-semibold">Mostly US · limited/none here</td>
                  <td className="px-4 py-3"><BuyLink search="ortho home defense mosquito killer">Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Availability and formulas accurate as of July 2026. Always confirm an Amazon.ca listing is sold and shipped within Canada and shows a PCP (Pest Control Products) registration number on the label before buying a pesticide.
          </p>
          <div className="mt-5 rounded-xl bg-rose-50 border-l-4 border-rose-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-rose-900">⚠️ The bifenthrin &ldquo;Home Defense Max&rdquo; is not a legal Canadian yard product.</strong> It is not PMRA-registered and bifenthrin is a Class 9 pesticide banned for cosmetic lawn/garden use in Ontario. For real mosquito relief, a licensed <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> uses PMRA-registered products, covers the whole yard for 21–30 days, and — unlike any Ortho consumer product sold here — also controls ticks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Ortho in Canada: Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Brand owner', 'Ortho (Scotts Miracle-Gro)'],
                  ['US flagship active', 'Bifenthrin (Home Defense Max / Bug B Gon)'],
                  ['Canadian line', 'Ortho Bug B Gon ECO — reduced-risk actives'],
                  ['Home Defense Max in Canada', 'Not PMRA-registered · not legally sold'],
                  ['Ontario cosmetic ban', 'Bifenthrin = Class 9 · prohibited for lawn/garden use'],
                  ['Legal-sale marker', 'PCP number on the Canadian label'],
                  ['Mosquito effectiveness', 'Contact knockdown only · days of light residual'],
                  ['Tick effectiveness', 'Not a tick product in any Canadian SKU'],
                  ['Whole-yard mosquito control', 'Not achievable with consumer Ortho in ON'],
                  ['Where to buy (CA lines)', 'Canadian Tire · Home Depot · Rona · Amazon.ca'],
                  ['Best consumer use', 'Ant/spider/earwig perimeter at the door'],
                  ['When to hire a pro', 'Whole-yard mosquitoes or ticks · pets/kids · recurring'],
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
          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Shopping the Canadian Ortho line, or a comparable perimeter product that is registered here:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="ortho bug b gon eco">Check Ortho Bug B Gon ECO on Amazon.ca →</BuyLink>
            <BuyLink search="mosquito dunks bti">BTI mosquito dunks →</BuyLink>
          </div>

          <h2 id="us-vs-canada">Why the Ortho You See Online Might Not Be Legal Here</h2>
          <p>Ortho is a Scotts Miracle-Gro brand, and in the United States its <strong>Home Defense</strong> and <strong>Bug B Gon</strong> lines are built around <strong>bifenthrin</strong> — a synthetic pyrethroid that gives a long residual barrier. That is exactly why the products are popular south of the border, and exactly why they run into two Canadian walls.</p>
          <p>First, <strong>registration</strong>. Every pesticide sold in Canada must be registered with Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) and carry a PCP (Pest Control Products) number on the label. Many US Ortho SKUs — including &ldquo;Ortho Home Defense Max Insect Killer for Indoor &amp; Perimeter&rdquo; — were never registered here. No PCP number means no legal Canadian retail sale.</p>
          <p>Second, the <strong>cosmetic pesticide ban</strong>. Ontario (and Quebec, and others) prohibit the sale and lawn/garden use of Class 9 pesticides for cosmetic purposes. Bifenthrin sits in that class. So even setting registration aside, spraying a bifenthrin product on your grass to kill bugs is not a permitted cosmetic use in Ontario. This is why a product that is an ordinary hardware-store buy in Buffalo is neither on the shelf nor legal to use on your lawn in Mississauga.</p>
          <p><strong>Watch for grey-market listings.</strong> You will occasionally find a marketplace seller shipping the US bifenthrin formula into Canada. That product is unregistered here, can be held or seized at the border, and is not legal for cosmetic outdoor use in Ontario. We do not recommend buying pesticides that way — confirm any listing is sold and shipped within Canada and shows a PCP number.</p>

          <h2>What Ortho You Can Actually Buy in Canada</h2>
          <p>The Canadian Ortho presence is the <strong>Bug B Gon ECO</strong> family — reformulated with reduced-risk actives (things like fatty-acid/soap-based or other PMRA-approved lower-risk ingredients depending on the specific SKU and year) so they clear registration and the cosmetic-use rules. These are genuinely useful for what they are designed to do: knocking back crawling nuisance insects around the home.</p>
          <ul>
            <li><strong>Ants marching along a foundation or door threshold</strong> — a labelled perimeter application is a reasonable DIY fix</li>
            <li><strong>Spiders, earwigs, sowbugs, boxelder bugs</strong> — crawling insects that congregate around entry points</li>
            <li><strong>Spot treatment of a visible insect trail</strong> — contact control where you can see the problem</li>
          </ul>
          <p>What the Canadian Ortho line is <strong>not</strong> built to do is give you a whole-yard mosquito barrier or any tick control. Those are different jobs with different (and more tightly regulated) products.</p>

          <h2>Ortho and Mosquitoes: The Honest Picture</h2>
          <p>Ortho markets US products like &ldquo;Home Defense Mosquito Killer&rdquo; and &ldquo;Bug B Gon Mosquito Killer&rdquo; as hose-end or mist treatments that knock down adult mosquitoes and leave a short residual on foliage. Two problems for a Canadian buyer:</p>
          <ol>
            <li><strong>Availability.</strong> The yard-application mosquito formulas are largely a US offering; in Ontario the cosmetic-use rules mean there is no consumer &ldquo;spray your whole lawn for mosquitoes&rdquo; Ortho product legally on the shelf.</li>
            <li><strong>Real-world performance.</strong> Even where a consumer contact spray is available, it kills the mosquitoes it directly wets and gives, at best, a few days of light residual. That is a world away from the 21–30 days of whole-yard control a licensed barrier treatment delivers — and it does nothing for the standing-water breeding sites that keep re-supplying the adults.</li>
          </ol>
          <p>If mosquitoes are the actual problem, the effective, legal stack in Ontario is: <strong>BTI mosquito dunks</strong> in any standing water (bird baths, clogged gutters, low spots), plus a <Link href="/mosquito-control">licensed professional barrier spray</Link> for the adult population across the whole yard. That combination outperforms any consumer Ortho mosquito product by a wide margin.</p>

          <div className="not-prose my-6 rounded-xl bg-emerald-50 border-l-4 border-emerald-500 p-5">
            <p className="text-sm font-extrabold text-emerald-900 mb-1">Ants at the door vs mosquitoes in the yard — pick the right tool.</p>
            <p className="text-sm text-gray-800 leading-relaxed">A can of Ortho Bug B Gon ECO is the right call for a line of ants at the threshold. It is the wrong call for a yard full of mosquitoes or a tick-prone property line — no consumer Ortho SKU sold in Canada is built for either. For whole-yard, 21–30 day mosquito <em>and</em> tick control, that is a licensed <Link href="/mosquito-control">barrier treatment</Link> job.</p>
          </div>

          <h2>How to Use Ortho Bug B Gon ECO Safely</h2>
          <p>&ldquo;Reduced-risk&rdquo; does not mean &ldquo;no precautions.&rdquo; The label is the law — its PCP number and directions override anything you read online, this article included. A few universal points:</p>
          <ul>
            <li><strong>Read the label first</strong> and match the product to the target insect and surface it is approved for.</li>
            <li><strong>Keep kids and pets off treated surfaces until fully dry</strong> — that is the minimum, and longer if the label says so.</li>
            <li><strong>Do not apply near vegetable gardens, ponds, or water features</strong> unless the label specifically allows it.</li>
            <li><strong>Never over-apply or mix products</strong> — more is not better, and it can breach the label.</li>
            <li><strong>Store locked away</strong> from children and pets, in the original container.</li>
          </ul>
          <p>If you have a pet household, an edible garden, or you are simply not comfortable handling a pesticide yourself, that is a perfectly good reason to have a licensed, insured applicator do it instead.</p>

          <h2>Ortho vs a Professional Barrier Treatment</h2>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Option</th><th className="px-3 py-2 text-left">Legal in ON for yards</th><th className="px-3 py-2 text-left">Mosquito control</th><th className="px-3 py-2 text-left">Tick coverage</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Ortho Home Defense Max (US bifenthrin)</strong></td><td className="px-3 py-2">No — unregistered · banned use</td><td className="px-3 py-2">N/A here</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Ortho Bug B Gon ECO (Canada)</strong></td><td className="px-3 py-2">Yes — per label (crawling insects)</td><td className="px-3 py-2">Not designed for it</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/permethrin-canada-yard-clothing-spray">Permethrin (clothing/gear)</Link></td><td className="px-3 py-2">Gear/clothing use only</td><td className="px-3 py-2">Personal, not yard</td><td className="px-3 py-2">On treated clothing</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">Yes — licensed, PMRA-registered</td><td className="px-3 py-2">Whole yard · 21–30 days</td><td className="px-3 py-2">Yes — full coverage</td></tr>
            </tbody>
          </table>
          <p className="not-prose text-sm text-gray-600 mb-6">Want personal protection for hikes and yard work rather than a home-perimeter spray? A permethrin clothing-and-gear treatment is a different, legal tool — see our <Link href="/blog/permethrin-canada-yard-clothing-spray">Permethrin Canada guide</Link>.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Or let us handle it</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray covers your whole yard from $99 — licensed, PMRA-registered products, backed by 150+ five-star reviews and serving 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>The Honest Verdict for Canadian Buyers</h2>
          <p>Ortho is a solid brand — but a lot of what makes it famous in the US does not cross the border. If you are searching for &ldquo;Ortho Home Defense&rdquo; expecting the bifenthrin barrier, that product is not a legal Canadian yard buy. The Ortho you can actually purchase here, <strong>Bug B Gon ECO</strong>, is a fine, reasonably priced tool for crawling nuisance insects around the house — ants, spiders, earwigs at the door.</p>
          <p>For <strong>mosquitoes and ticks</strong>, no consumer Ortho product sold in Canada is the answer. Handle standing water with BTI dunks, and for whole-yard, season-long relief that also covers ticks, use a licensed <Link href="/mosquito-control">professional barrier treatment</Link>. It is legal, it uses PMRA-registered products applied to label, and it works far better than anything you can spray from a hardware-store bottle.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/blog/permethrin-canada-yard-clothing-spray">Permethrin Canada — Yard &amp; Clothing Spray Guide</Link></li>
            <li><Link href="/blog/wondercide-canada-review">Wondercide Canada — Honest Review + Where to Buy</Link></li>
            <li><Link href="/blog/mosquito-fogger-canada">Mosquito Fogger Canada — Do They Work? Best Models + Fogging Liquid Guide</Link></li>
            <li><Link href="/free-yard-assessment">Get a Free Yard Assessment</Link></li>
            <li><Link href="/blog">More BuzzSkito guides on the blog</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Skip the Grey-Market Sprays · Get Licensed Yard Protection" subtext="Get a free quote for professional barrier spray. From $99. PMRA-registered. Whole-yard mosquito + tick control, 21–30 day residual." variant="dark" />
    </>
  )
}
