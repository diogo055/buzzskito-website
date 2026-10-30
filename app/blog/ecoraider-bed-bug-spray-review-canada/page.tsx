import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import QuickIdTable from '@/components/QuickIdTable'
import Photo from '@/components/Photo'

const SLUG = 'ecoraider-bed-bug-spray-review-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-10-29'
const TITLE = 'EcoRaider Bed Bug Spray Review Canada 2026 — Does the Plant-Based Killer Actually Work?'
// TITLE NOTE (Oct 29, 2026): was 'EcoRaider Bed Bug Spray 2026 Review (Canada)'; top queries, Jul 29-Oct 26 (all countries): ecoraider bed bug killer 57 at 5.4 (2 clicks), eco raider 43 at 5.7, ecoraider 27 at 5.2 (2), ecovenger bed bug killer reviews 21 at 8.8, ecoraider bed bug killer spray 18 at 7.4, ecoraider canada 3 at 1.7; 'bed bug spray' and 'bed bug spray canada' stay with /blog/bed-bug-spray-canada, 'natural bed bug spray' with /blog/best-natural-bed-bug-spray-canada.
const META_TITLE = 'EcoRaider Bed Bug Killer: Is It Legal in Canada?'

const FAQS = [
  {
    question: 'Does EcoRaider actually kill bed bugs?',
    answer: 'In the lab, yes. Rutgers University entomologists (Singh, Wang and Cooper, Journal of Economic Entomology, 2014) sprayed large nymphs from two field-collected strains that were moderately resistant to deltamethrin: EcoRaider killed 100% of them by day 10, as did the synthetic Temprid SC, which killed faster, while most of the other essential-oil and detergent sprays killed 0–30%. It is not a barrier, though: when nymphs could move between treated and untreated fabric, only 1.7% of those beside dried EcoRaider died. The authors called it potentially useful and said testing in infested homes was still needed. It also has no Canadian registration.',
  },
  {
    question: 'Does EcoRaider kill bed bug eggs?',
    answer: 'Mostly, when it hits them. Rutgers sprayed 2- and 3-day-old eggs directly: 86.7% of the EcoRaider-treated eggs died, against 58% for Temprid SC, 67.4% for the pyrethroid Demand CS, and 17% or less for the other four plant-based sprays tested on eggs. The eggs sat on paper in the open; an egg tucked deep in a mattress seam that the spray never reaches survives untouched, exactly as it would with any spray. None of the three Canadian bed bug can labels we opened (KONK 31110, Sleep Tight Bed Bug Killer II 29339, Ortho Bed Bug B Gon MAX 33722) mentions eggs at all, so in Canada heat from a steamer, dryer or chamber remains the egg tool.',
  },
  {
    question: 'Is EcoRaider the same as EcoVenger?',
    answer: 'Yes, it is the same maker’s product under a new name. Reneotech, Inc. of North Bergen, New Jersey, now sells it as EcoVenger by EcoRaider Bed Bug Killer, the name on its safety data sheet approved September 14, 2020; the EcoVenger site calls it formerly EcoRaider, and the maker’s old ecoraiderusa.com address now redirects to ecovenger.com. The Rutgers testing that built its reputation was done under the EcoRaider name. Check the ingredient panel on any bottle you see: the 2020 sheet lists cedar oil 1.0%, geraniol 1.0% and sodium lauryl sulfate 0.2%, while the 2014 Rutgers paper listed geraniol 1%, cedar extract 1% and sodium lauryl sulfate 2%. Neither name has a Canadian registration.',
  },
  {
    question: 'Can EcoRaider be used around children and pets?',
    answer: 'In Canada the first answer is that it should not be used at all: it has no PCP number, and Health Canada says unregistered pesticides are illegal in Canada and their safety and effectiveness have not been reviewed by Health Canada. Its maker’s 2020 safety data sheet says to keep it out of reach of children, lists three hazard statements (may be harmful if swallowed, may cause an allergic skin reaction, causes eye irritation) and suggests eye protection. A Canadian-registered can sets its own rules on its label; KONK Bed Bug Killer (PCP 31110), for example, is labelled keep out of reach of children and says a treated mattress must be dry before laundered bedding goes back on.',
  },
  {
    question: 'How is EcoRaider different from a pyrethroid bed bug spray?',
    answer: 'Pyrethroid sprays are synthetic insecticides that attack the insect’s nervous system, and Rutgers entomologists wrote in 2014 that pyrethroid sprays are not very effective at eradicating bed bugs because of insecticide resistance. In their test, the pyrethroid Demand CS killed 78% of directly sprayed nymphs, which the authors put down mostly to that resistance, while EcoRaider killed 100%. They did not credit a special botanical mode of action: they wrote that EcoRaider’s oil concentrations are very low and unlikely to kill bed bugs alone, so other ingredients, such as wetting agents, may account for its effect. The bigger difference for Canadians is legal: bed bug sprays with a PCP number, such as pyrethrin cans like KONK (31110), are registered here, and EcoRaider is not.',
  },
  {
    question: 'Does EcoRaider leave a lasting residual barrier?',
    answer: 'Its dried film keeps working on bugs that stay on it, but bed bugs do not have to stay. In Rutgers’ tests, EcoRaider residue aged 7 and 14 days still killed 92.5% and 90% of nymphs confined on it for five minutes. When nymphs could move between treated and untreated fabric, only 1.7% died, against 90% for Temprid SC. The maker advertises a two-week residual and tells users to treat weekly for at least 2 to 3 weeks on medium to heavy infestations. In practice, count on what you spray directly; in Canada the long-residual step goes to a desiccant dust with a PCP number, such as a diatomaceous earth product.',
  },
  {
    question: 'Where and how should I apply EcoRaider for bed bugs?',
    answer: 'In Canada, do not apply it: it has no PCP number, and Health Canada says not to buy or use a pesticide without one. In the US its maker tells users to spray mattress seams, piping and both sides, the box spring, bed frame, headboard, upholstered furniture, baseboards and carpet edges, and to repeat weekly for at least 2 to 3 weeks on medium to heavy infestations. A Canadian-registered can is applied the same careful way, into seams and cracks rather than as a mist, but only on the sites its label lists; KONK’s label (PCP 31110) says treatment must only be repeated after 7 days if the problem persists or reoccurs.',
  },
  {
    question: 'Is EcoRaider available and legal to buy in Canada?',
    answer: 'It is not legal to use here. Health Canada’s pesticide registry lists no product named EcoRaider or EcoVenger and nothing from its maker, Reneotech (searched October 29, 2026), and no geraniol or cedar-oil bed bug product is registered in Canada. In the US it is sold as exempt from EPA registration under FIFRA section 25(b), the minimum-risk exemption, but that US exemption does not apply here: section 6(1) of the Pest Control Products Act bars importing, distributing or using a pest control product that is not registered, apart from narrow exceptions, and Health Canada says that if a label has no PCP registration number, do not buy or use it. A listing that ships it to a Canadian address does not change that.',
  },
  {
    question: 'Will EcoRaider get rid of bed bugs on its own?',
    answer: 'No. Rutgers tested it only in the lab, on bugs and eggs sprayed directly, and the authors said testing in infested homes was still needed; bugs that could avoid its dried film mostly survived. Anything harbouring in a wall void, a neighbouring room, or a seam you missed survives to rebuild, and eggs you cannot see or reach are untouched. In Canada it has no role at all, because it is not registered. A Canadian plan uses encasements, interceptor traps, a steamer, dryer or heater for the eggs, a spray or dust whose label shows a PCP number, and, for anything beyond a caught-early problem, the licensed pest control operator Health Canada strongly recommends.',
  },
  {
    question: 'EcoRaider vs a desiccant dust like CimeXa — which should I use?',
    answer: 'In Canada, neither: Health Canada’s registry has no EcoRaider, EcoVenger or CimeXa product (searched October 29, 2026). They do different jobs. A contact spray kills what it wets; a desiccant dust kills nothing instantly but dries out the bugs that cross it, which makes it the long-residual step for cracks and voids. The desiccant dusts registered for home use against bed bugs in Canada are diatomaceous earth products with a PCP number, such as Wilson Bed Bug Out dust (PCP 26679), with Ortho Bed Bug B Gon Diatom (PCP 32674) sold as a pressurized spray, and the registered contact sprays include pyrethrin cans such as KONK Bed Bug Killer (PCP 31110). Spraying what you can see and dusting the cracks you cannot is still the classic one-two, and our CimeXa review covers that dust in detail.',
  },
  {
    question: 'Does a plant-based spray beat resistant bed bugs better than a synthetic one?',
    answer: 'In the Rutgers test it beat one synthetic, not all of them. On the same field-collected nymphs, moderately resistant to deltamethrin, EcoRaider killed 100% by day 10, the pyrethroid Demand CS 78% (which the authors put down mostly to pyrethroid resistance), and Temprid SC, an imidacloprid and beta-cyfluthrin mix, 100% and faster. Resistance is specific to a mechanism, so a different chemistry can kill bugs a pyrethroid does not. But the authors did not credit a botanical mode of action: they wrote that EcoRaider’s oil concentrations are very low and unlikely to kill bed bugs alone, and that adjuvants such as wetting agents may account for its effect. The evidence is that this formula killed resistant nymphs it hit directly in the lab, not that plant oils beat resistance.',
  },
  {
    question: 'What is in EcoRaider bed bug killer spray?',
    answer: 'The maker’s safety data sheet for EcoVenger by EcoRaider Bed Bug Killer, approved September 14, 2020, lists cedar oil 1.0%, geraniol 1.0% and sodium lauryl sulfate 0.2%, with the rest non-hazardous ingredients, and describes a milky-white liquid with a minty odour. The 2014 Rutgers paper listed EcoRaider’s actives as geraniol 1%, cedar extract 1% and sodium lauryl sulfate 2%. The maker sells it in the US as exempt from EPA registration under FIFRA section 25(b). None of those three ingredients appears in a bed bug product registered in Canada.',
  },
  {
    question: 'What do EcoVenger bed bug killer reviews and tests show?',
    answer: 'Retail listings claim "100% kill", and the study the maker points to is Rutgers’ 2014 lab test in an Entomological Society of America journal, for which the maker supplied samples. Sprayed directly, EcoRaider killed 100% of large nymphs by day 10 and 86.7% of eggs, while most of the other plant-oil and detergent sprays tested killed 0–30% of nymphs. Bed bugs that could choose untreated fabric mostly avoided its dried film (1.7% died), it killed more slowly than the synthetic Temprid SC, and the authors called for tests in infested homes. For Canadians the review ends at the registry: no EcoRaider or EcoVenger product is registered here.',
  },
  {
    question: 'Is there a Canadian alternative to EcoRaider bed bug spray?',
    answer: 'Yes, among registered products. The plant-derived option is pyrethrins, from chrysanthemum flowers, in cans whose Canadian registration lists mattresses, such as KONK Bed Bug Killer (PCP 31110) and Doktor Doom Sleep Tight Bed Bug Killer II (PCP 29339); both pair pyrethrins with piperonyl butoxide. ProCitra-DL Crawling Insect Killer (PCP 29811) is a domestic d-limonene product that lists bed bugs. For cracks and voids, use a diatomaceous earth dust with a PCP number, such as Wilson Bed Bug Out dust (PCP 26679). Whatever you pick, use it only on the sites its label lists, and add heat for the eggs.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'EcoRaider (EcoVenger) bed bug killer: Rutgers found it killed every sprayed nymph and 87% of eggs, but bugs avoid it and it has no Canadian registration.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('ecoraider-bed-bug-spray-review-canada')

export default function EcoRaiderBedBugSprayReviewCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Canadian review of EcoRaider / EcoVenger plant-based bed bug spray: the Rutgers lab results on nymphs and eggs, why bed bugs avoid its dried film, its US minimum-risk status, its missing Canadian registration, and the registered alternatives.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'EcoRaider Bed Bug Spray Review Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">EcoRaider Bed Bug Spray Review Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">EcoRaider, now sold as EcoVenger, killed every large nymph and 87% of the eggs it was sprayed on directly in a 2014 Rutgers lab test, but it has no Canadian registration: Health Canada&rsquo;s registry lists no EcoRaider or EcoVenger product, and Health Canada says not to buy or use a pesticide without a PCP number. Canadians who want a plant-derived spray can use a registered pyrethrin can such as KONK Bed Bug Killer (PCP 31110).</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="KONK Bed Bug Killer aerosol (PCP 31110)" search="konk bed bug killer aerosol" label="Registered alternative in Canada" />
      <TopBox tag={AMZ_TAG} name="KONK Bed Bug Killer aerosol (PCP 31110)" search="konk bed bug killer aerosol" label="Registered alternative in Canada" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">EcoRaider (now sold as EcoVenger) is a plant-oil bed bug spray that did well in a 2014 Rutgers lab study: sprayed directly, it killed every large nymph by day 10 and 86.7% of eggs, while most of the other plant-based sprays tested killed 0&ndash;30% of nymphs. But it has no Canadian registration: Health Canada&rsquo;s registry lists no EcoRaider or EcoVenger product, and Health Canada says not to buy or use a pesticide whose label has no PCP number. Its limits are real too: bed bugs avoid its dried film, and it kills only what it wets. In Canada, use a registered can instead, such as a pyrethrin spray whose label names mattresses (KONK Bed Bug Killer, PCP 31110), with heat for the eggs.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Actives on the maker&rsquo;s 2020 safety data sheet: cedar oil 1.0%, geraniol 1.0% and sodium lauryl sulfate 0.2% (Rutgers listed 1%, 1% and 2% in 2014).</li>
              <li>Rutgers (2014): 100% of directly sprayed large nymphs dead by day 10; most other plant-oil and detergent sprays killed 0&ndash;30%.</li>
              <li>Eggs: 86.7% of directly sprayed eggs died, more than with the two synthetics tested (58% and 67.4%), but only eggs the spray wets.</li>
              <li>Against deltamethrin-resistant nymphs it beat the pyrethroid Demand CS (78%); the authors point to other ingredients such as wetting agents, not the dilute oils.</li>
              <li>Bugs avoid the dried film: only 1.7% died when they could move to untreated fabric, so it kills what you spray directly.</li>
              <li>No Canadian registration (registry searched October 29, 2026); Health Canada says unregistered pesticides are illegal in Canada.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <section className="bg-white px-4 py-2">
        <div className="max-w-4xl mx-auto">
          <TopPick tag={AMZ_TAG}
            label="What to Buy Instead in Canada"
            name="KONK Bed Bug Killer (PCP 31110) — the registered pyrethrin can for the bed"
            blurb="EcoRaider and EcoVenger have no Canadian registration: Health Canada’s registry lists neither name, and Health Canada says not to buy or use a pesticide whose label has no PCP number. So this is the can we point Canadian readers to instead. KONK Bed Bug Killer is a domestic-class pressurized spray of pyrethrins (0.50%), from chrysanthemum flowers, with piperonyl butoxide (5.00%), and its label carries Reg. No. 31110. For bed bugs the label says to spray the mattress lightly, particularly around seams and tufts, and to take beds apart and spray the frames, springs and all joints, repeating only after 7 days if the problem persists. Insects must be contacted to be killed, and the label makes no egg claim, so add heat for the eggs and a diatomaceous earth dust with a PCP number for the voids."
            search="konk bed bug killer aerosol"
            cta="Check price on Amazon.ca"
            score={7.4}
            pros={['Registered for home use in Canada: PCP 31110, domestic class, current', 'Label covers mattress seams and tufts, bed frames, springs and joints', 'Pyrethrins, from chrysanthemum flowers, with piperonyl butoxide', 'A Canadian label to follow, from Acuity Holdings, Edmonton']}
            cons={['Kills only the bugs it contacts (label); no residual claim', 'No egg claim on the label: heat is the answer for eggs', 'Label: DANGER, extremely flammable and explosive; keep people and pets out of treated areas until the spray has settled and dried', 'Not a stand-alone fix: add heat, encasements, monitoring and a registered dust']}
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Bed Bug Sprays Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">EcoRaider vs Pyrethroid Sprays vs Desiccant Dust vs Grey-Market Concentrates</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            &ldquo;Bed bug spray&rdquo; covers products that kill in completely different ways, and they are not equal against a modern, resistant infestation. Here is how the plant-based contact killer stacks up against the drugstore synthetics, the long-residual dusts, and the concentrates Canadians get pushed toward online &mdash; on how they kill, whether resistance beats them, and where the Canadian-availability lines sit.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">How it kills</th>
                  <th className="px-4 py-3 text-left">Resistance &amp; residual</th>
                  <th className="px-4 py-3 text-left">Honest take</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">EcoRaider / EcoVenger<br /><span className="font-normal text-xs text-gray-500">No Canadian registration</span></td>
                  <td className="px-4 py-3 text-gray-700">Plant-based (geraniol + oils) contact kill; ovicidal on contact</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Killed resistant nymphs it hit</strong> &mdash; bugs avoid the dried film</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Strong Rutgers lab results, 86.7% egg kill; no Canadian registration, so Health Canada says do not buy or use it</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol" block>A registered can instead: KONK (PCP 31110) &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Pyrethroid sprays<br /><span className="font-normal text-xs text-gray-500">most drugstore/hardware sprays</span></td>
                  <td className="px-4 py-3 text-gray-700">Synthetic neurotoxin &mdash; poisons the nervous system</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Resistance undercuts it</strong> &mdash; longer residual</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Cheap and everywhere, but widespread resistance means many populations survive it</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bed bug spray pyrethroid canada" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Desiccant dust<br /><span className="font-normal text-xs text-gray-500">CimeXa silica gel</span></td>
                  <td className="px-4 py-3 text-gray-700">Physical desiccation &mdash; dries the bug out over days</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Resistance-proof</strong> &mdash; residual up to ~10 yr</td>
                  <td className="px-4 py-3 text-xs text-gray-600">No instant knockdown; CimeXa has no Canadian registration, and the home-use desiccant dusts registered here are diatomaceous earth with a PCP number</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth" block>A registered DE dust instead (PCP 32561) &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Grey-market US concentrates<br /><span className="font-normal text-xs text-gray-500">Crossfire, Temprid FX</span></td>
                  <td className="px-4 py-3 text-gray-700">Liquid chemical formulations pushed in online forums</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-600">Not the pick</strong></td>
                  <td className="px-4 py-3 text-xs text-gray-600">Not PMRA-registered for Canadian consumers and illegal to import; often the very chemistry bugs resist</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Not recommended &mdash; not legal here</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Registration status changes &mdash; check Health Canada&rsquo;s registry for a PCP number before buying; on October 29, 2026 it listed no EcoRaider, EcoVenger or CimeXa product. Full landscape in our <Link href="/blog/bed-bug-control-canada-hub" className="text-emerald-700 underline">Canadian bed bug control hub</Link>, <Link href="/blog/bed-bug-spray-canada" className="text-emerald-700 underline">bed bug spray guide</Link>, and <Link href="/blog/best-natural-bed-bug-spray-canada" className="text-emerald-700 underline">natural bed bug spray roundup</Link>.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">&#9888;&#65039; A contact spray kills what it wets &mdash; nothing more.</strong> EcoRaider kills the bugs and eggs you directly spray, and bed bugs avoid its dried film; it does nothing for eggs cemented in a seam you missed. In Canada any spray needs a PCP number, which EcoRaider lacks, so pair a registered can with a <Link href="/blog/best-bed-bug-steamer-canada" className="text-emerald-700 underline font-semibold">steamer</Link> for the deep eggs, a diatomaceous earth dust with a PCP number for long residual (<Link href="/blog/cimexa-bed-bug-review-canada" className="text-emerald-700 underline font-semibold">CimeXa</Link> has no Canadian registration), and <Link href="/blog/bed-bug-interceptor-traps-canada" className="text-emerald-700 underline font-semibold">interceptor traps</Link> to monitor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">EcoRaider / EcoVenger &mdash; Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What it is', 'Plant-oil bed bug contact spray made by Reneotech, Inc. (North Bergen, New Jersey)'],
                  ['Ingredients', 'Maker’s 2020 SDS: cedar oil 1.0%, geraniol 1.0%, sodium lauryl sulfate 0.2% (Rutgers 2014: 1%, 1%, 2%)'],
                  ['Also sold as', 'EcoVenger by EcoRaider; the maker calls it formerly EcoRaider'],
                  ['Kill mechanism', 'Contact kill; the Rutgers authors suggest other ingredients such as wetting agents, not the dilute oils, explain it'],
                  ['Kills eggs?', '86.7% of directly sprayed eggs in the Rutgers test (only what it wets)'],
                  ['Resistance', 'Killed 100% of deltamethrin-resistant nymphs it hit; the pyrethroid Demand CS 78%'],
                  ['Residual', '14-day-old film killed 90% of nymphs held on it; on fresh film, 1.7% died when they could avoid it'],
                  ['Independent testing', 'Rutgers lab study, 2014 (Singh, Wang, Cooper); the maker supplied samples'],
                  ['Where to apply', 'Directly into seams, box-spring edge, frame joints, baseboards, folds'],
                  ['Hazards', 'Maker’s SDS: keep out of reach of children; may cause an allergic skin reaction; eye irritant'],
                  ['Scent', 'Maker’s SDS: a milky-white liquid with a minty odour'],
                  ['Best paired with', 'A desiccant dust (long residual) + steamer/heater (deep eggs)'],
                  ['Canadian availability', 'No Canadian registration; a listing that ships here does not make it legal to use'],
                  ['PMRA status', 'Not in Health Canada’s registry (Oct 29, 2026); US: FIFRA 25(b) exempt'],
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

          <h2>What Is EcoRaider, and Why Does a Plant-Based Spray Deserve a Serious Look?</h2>
          <p>EcoRaider is a botanical bed bug spray: a plant-based contact killer built on geraniol and cedar extract (cedar oil on the maker&rsquo;s current sheet) with the detergent sodium lauryl sulfate, rather than the pyrethrins and pyrethroids in most bed bug spray bottles. The reason it earns a full review rather than a dismissive wave, which is what most &ldquo;natural&rdquo; pest products deserve, is a single unusual fact: it has published university testing behind it. When Rutgers University entomologists put a range of consumer bed bug sprays through controlled testing against real, field-collected bed bugs, EcoRaider was one of the very few natural products that actually killed them &mdash; reaching high mortality on direct contact, in a category where most botanical sprays are aromatherapy with a bug on the label.</p>
          <p>That testing pedigree is most of the story, because the bed bug spray aisle is full of products that disappoint. Part of the reason is that bed bugs have become widely resistant to the pyrethroid chemistry many of those products rely on, which the Rutgers authors point to as well. EcoRaider did kill pyrethroid-resistant nymphs in their lab, though the authors credit its other ingredients more than its plant oils. What the testing cannot change is its status here: EcoRaider has no Canadian registration, so a Canadian cannot legally buy or use it, however well it measured.</p>
          <p>This review sits alongside our broader <Link href="/blog/bed-bug-control-canada-hub">Canadian bed bug control hub</Link>, our general <Link href="/blog/bed-bug-spray-canada">bed bug spray guide</Link>, and our <Link href="/blog/best-natural-bed-bug-spray-canada">natural bed bug spray roundup</Link>; here we go deep on what the EcoRaider testing shows and what Canadian law says about it.</p>

          <QuickIdTable
            title="EcoRaider and the Canadian alternatives, on the record"
            head={['Product', 'Canadian status', 'What it is', 'Limits']}
            rows={[
              ['EcoRaider / EcoVenger', 'Not in Health Canada’s registry; sold in the US as exempt under FIFRA 25(b)', 'Cedar oil, geraniol and sodium lauryl sulfate; Rutgers 2014: 100% of directly sprayed large nymphs and 86.7% of eggs killed', 'Only 1.7% died when bugs could avoid the dried film; Health Canada: no PCP number, do not buy or use it'],
              ['Pyrethrin bed bug cans: KONK (PCP 31110), Sleep Tight Bed Bug Killer II (PCP 29339)', 'Registered, domestic class; both list mattresses', 'Pyrethrins with piperonyl butoxide; contact sprays', 'The labels we opened make no egg claim; KONK: repeat only after 7 days if the problem persists'],
              ['ProCitra-DL Crawling Insect Killer (PCP 29811)', 'Registered, domestic class; lists bed bugs', 'A d-limonene product', 'Use only on the sites its label lists'],
              ['Diatomaceous earth: Wilson Bed Bug Out dust (PCP 26679), Ortho Bed Bug B Gon Diatom pressurized spray (PCP 32674)', 'Registered, domestic class; list bed bugs', 'A desiccant dust and a desiccant spray for cracks and voids', 'Follow each label for where it may go'],
              ['CimeXa', 'Not in Health Canada’s registry', 'The silica gel dust US guides pair with sprays', 'Health Canada: no PCP number, do not buy or use it'],
              ['Temprid SC and Temprid ReadySpray (PCP 32524, 32523)', 'Registered in the commercial class, not the domestic class', 'Imidacloprid with beta-cyfluthrin, the faster comparison spray in the Rutgers test', 'Not a homeowner product in Canada'],
            ]}
            caption={<>Status from Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/index.html" target="_blank" rel="noopener noreferrer" className="underline">pesticide registry</a> (product extract, searched October 29, 2026); EcoRaider&rsquo;s US status and ingredients from the maker&rsquo;s 2020 safety data sheet; efficacy from <a href="https://archive.sebs.rutgers.edu/wp-content/uploads/Singh2014Essentialoilsbedbugcontrol.pdf" target="_blank" rel="noopener noreferrer" className="underline">Singh, Wang and Cooper (Rutgers), Journal of Economic Entomology, 2014</a>; the repeat rule from KONK&rsquo;s approved label; the PCP-number rule from Health Canada&rsquo;s <a href="https://www.canada.ca/en/health-canada/services/pest-control-tips/bedbugs-how-do-i-get-rid-them.html" target="_blank" rel="noopener noreferrer" className="underline">bedbug guidance</a>. No product was tested.</>}
          />

          <p className="not-prose text-sm text-gray-600 mb-1">EcoRaider and EcoVenger have no Canadian registration under either name, so we link the two registered pyrethrin cans this page names instead:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol">KONK Bed Bug Killer (PCP 31110) &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="doktor doom sleep tight bed bug spray">Sleep Tight Bed Bug Killer II (PCP 29339) &rarr;</BuyLink>
          </div>

          <NextUp path="/blog/ecoraider-bed-bug-spray-review-canada" />
          <h2>The Rutgers Testing: Why This Natural Spray Is Different</h2>
          <p>The bar for a plant-based insecticide should be simple: does an independent lab, with no stake in the sale, find that it kills the target pest? For most natural bed bug sprays the answer is no &mdash; and that is exactly why the EcoRaider result matters. Rutgers researchers Narinderpal Singh, Changlu Wang and Richard Cooper tested nine essential-oil products and two detergent sprays, alongside two synthetic insecticides, on large nymphs from two strains collected in infested apartments and moderately resistant to deltamethrin (Journal of Economic Entomology, 2014). Sprayed directly, EcoRaider killed 100% by day 10, as did Temprid SC; Bed Bug Patrol killed 92%, the pyrethroid Demand CS 78%, and most of the other plant-oil and detergent sprays 0&ndash;30%. In a category defined by overpromising, being one of the two that cleared the efficacy bar is a genuine distinction.</p>
          <Photo id="bed-bug-nymph" alt="A bed bug nymph on fabric" caption="A bed bug nymph on fabric. The Rutgers tests sprayed large nymphs (fourth and fifth instars) directly, which is the situation in which EcoRaider did best." />
          <p>Three things are worth being precise about, because honesty is the point of an independent review. First, the strong result was for <em>direct contact</em>: each bug was sprayed in a lab spray tower, and EcoRaider killed more slowly than Temprid SC (82% against 100% after one day in the second strain). Second, its dried film still killed nymphs held on it for five minutes after 14 days, but when nymphs could choose untreated fabric only 1.7% died, so it is not a barrier bugs will sit on. Third, it was a lab study, and the authors wrote that testing in naturally infested environments is still needed. What the testing establishes is that when EcoRaider hits a bed bug, it reliably kills it, which is more than can be said for most of the bottles tested beside it.</p>

          <h2>Killing Eggs on Contact: The Standout Feature</h2>
          <p>Here is the feature that separates EcoRaider from the pack, and the one worth understanding in detail: it kills bed bug eggs on direct contact. That sounds minor until you know how bed bug eggs behave. Females cement their eggs to fabric under a protective coating, and that coating shrugs off a great many liquids &mdash; which is the entire reason the standard advice is that only heat reliably kills bed bug eggs. In the Rutgers egg test, EcoRaider killed 86.7% of directly sprayed 2- and 3-day-old eggs, against 58% for Temprid SC, 67.4% for Demand CS and 17% or less for the other four plant-based sprays tested on eggs.</p>
          <p>But read the words carefully: <em>on direct contact</em>. EcoRaider kills the eggs the spray physically reaches and soaks. An egg tucked deep in a mattress seam, inside a bolt hole, or behind a baseboard that the liquid never penetrates survives exactly as it would with any other spray. So the egg-killing is a real and valuable edge over a typical pyrethroid &mdash; it means a thorough spraying of visible harbourage takes out eggs as well as nymphs, shrinking the next generation &mdash; but it does not replace the seam-penetrating steam of a <Link href="/blog/best-bed-bug-steamer-canada">bed bug steamer</Link> for the eggs you cannot see or reach. Think of it as a bonus that rewards thorough application, not a substitute for heat.</p>
          <Photo id="bed-bugs-eggs-mattress-seam" alt="Bed bugs and their white eggs along a seam of a bed" caption="Bed bugs and their white eggs along a seam of a bed (the photographer's description). Rutgers sprayed eggs lying on paper in the open; eggs deep in a seam like this one are much harder for any spray to wet." />

          <h2>Does It Beat Resistant Bed Bugs? What Rutgers Found</h2>
          <p>To understand why a plant-based spray can outperform a synthetic one, you have to understand what resistance actually is. Resistance is not a general toughness &mdash; it is specific. Bed bugs across North America have spent decades under selection pressure from pyrethroids, and populations have evolved two defences: enzymes that detoxify the pyrethroid molecule before it can act, and mutations that harden the exact nervous-system target the pyrethroid attacks. A resistant bed bug can walk through a pyrethroid film and survive, which is the single biggest reason a drugstore bed bug spray so often does nothing.</p>
          <p>The Rutgers numbers show what that means in practice. Against the same deltamethrin-resistant nymphs, the pyrethroid Demand CS killed 78% while EcoRaider killed all of them, and the authors put Demand&rsquo;s middling result down mostly to pyrethroid resistance. They did not credit a special botanical mode of action, though: they wrote that the oils in EcoRaider are at concentrations too low to be lethal on their own, that the same oils did poorly in other products, and that other ingredients, such as wetting agents, may account for its effect. So the fair claim is that this formula killed resistant nymphs it hit directly in the lab, not that plant oils sidestep resistance. Our <Link href="/blog/do-bed-bug-sprays-actually-work">honest look at whether bed bug sprays actually work</Link> unpacks the resistance problem in more depth.</p>

          <h2>The Honest Limitation: Bed Bugs Avoid the Dried Film</h2>
          <p>Every tool has a boundary, and EcoRaider&rsquo;s is what happens after the spray dries. The film itself lasts: in Rutgers&rsquo; tests, residue aged 7 and 14 days still killed 92.5% and 90% of nymphs confined on it for five minutes. The trouble is that bed bugs do not have to stay on it. When nymphs could move between treated and untreated fabric, only 1.7% of those beside dried EcoRaider died, against 90% for Temprid SC and 56.7% for Demand CS. In plain terms: count on the bugs and eggs you spray directly, not on a barrier they will walk across.</p>
          <p>That is why the maker&rsquo;s own instructions call for repeat treatment, weekly for at least 2 to 3 weeks on medium to heavy infestations, re-hitting the same seams and cracks so you catch newly hatched nymphs. It is also why a contact spray works best paired with a desiccant dust laid as a thin film in the cracks and voids where bugs travel and hide. In Canada both halves need a PCP number. The desiccant dusts registered for home use against bed bugs are diatomaceous earth products such as Wilson Bed Bug Out dust (PCP 26679); <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa</Link>, the silica gel dust US guides pair with sprays, has no Canadian registration, and neither does EcoRaider. Registered contact spray plus registered dust is the classic, complementary one-two.</p>
          <Photo id="bed-bugs-hotel-headboard" alt="A bed bug coated in pesticide dust in a crevice of a hotel headboard" caption="A bed bug coated in pesticide dust in a crevice of a hotel headboard after a treatment, photographed by the New York State IPM Program at Cornell University. A dust in a crevice is the long-residual step; in Canada it has to carry a PCP number." />

          <RelatedLinks path="/blog/ecoraider-bed-bug-spray-review-canada" />
          <h2>Using EcoRaider in Canada: Don&rsquo;t &mdash; Apply a Labelled Canadian Can the Same Way</h2>
          <p>EcoRaider has no PCP number, so in Canada the answer is not to apply it at all. The technique below is the same for a registered can, with one rule on top: use it only on the sites its Canadian label lists. A contact killer only kills what it wets, so application is everything &mdash; a half-hearted mist over open surfaces wastes the can. The goal is to actually reach the bugs in their harbourage with liquid, not to freshen the air. Work methodically:</p>
          <ul>
            <li><strong>Vacuum first.</strong> A <Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">sealed-HEPA vacuum</Link> physically removes the bulk of the visible population and loose debris, so the spray can concentrate on what is left in the seams.</li>
            <li><strong>Spray directly into the harbourage the label allows.</strong> Mattress seams, piping, tufts, and folds only if the label names mattresses (KONK&rsquo;s, PCP 31110, does); the box-spring fabric edge and staple line; bed-frame joints, slats, and bolt holes; headboard cracks; baseboard gaps and the wall-floor junction; and furniture near the bed.</li>
            <li><strong>Get the nozzle into the seam.</strong> Penetrate the fold so the liquid soaks the crevice rather than beading on the surface &mdash; that is how you reach the hidden bugs.</li>
            <li><strong>Do not broadcast it as a room mist.</strong> Misting the air or coating open floors does little; a contact spray works where it lands on the target, not where it drifts.</li>
            <li><strong>Repeat on the label&rsquo;s schedule.</strong> KONK&rsquo;s label says treatment must only be repeated after 7 days if the problem persists or reoccurs; keep checking interceptor traps until the numbers fall.</li>
            <li><strong>Ventilate and let it dry.</strong> Air the room, and follow the label on drying: KONK&rsquo;s says a treated mattress must be dry before laundered bedding goes back on.</li>
          </ul>
          <p>Applied this way &mdash; thorough, direct, repeated, on the label&rsquo;s sites &mdash; a registered can does the job a contact spray is good at: killing the bugs you reach. Heat from a steamer, dryer or chamber does the egg work that none of the Canadian bed bug can labels we opened claims.</p>

          <h2>What You&rsquo;re Actually Paying For &mdash; and What to Buy in Canada Instead</h2>
          <p>In the US, what EcoRaider&rsquo;s buyers pay for is a plant-oil spray with published lab evidence that it kills the bed bugs and most of the eggs it hits directly. In Canada that purchase is off the table: it has no PCP number, and Health Canada says unregistered pesticides are illegal in Canada and their safety and effectiveness have not been reviewed by Health Canada. A household that wants a plant-derived registered option should look at a Canadian pyrethrin can and follow its label precautions; KONK (PCP 31110) and Doktor Doom Sleep Tight Bed Bug Killer II (PCP 29339) list mattresses among their sites.</p>
          <p>Where does the money go instead? If your priority is a <strong>long-lasting barrier</strong> in the cracks and voids, a desiccant dust is the tool built for that job &mdash; it stays put inside the void and keeps working after a sprayed liquid has dried. In Canada that means <Link href="/blog/diatomaceous-earth-for-bed-bugs">diatomaceous earth</Link> with a PCP number; <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa</Link> has no Canadian registration. If your real problem is <strong>eggs buried deep in seams and furniture</strong>, no spray reaches them and the money belongs in a <Link href="/blog/best-bed-bug-steamer-canada">steamer</Link> or <Link href="/blog/bed-bug-heater-canada">heater</Link>. And the way to go wrong is to order unregistered US products, whether a concentrate a forum called &ldquo;stronger&rdquo; or a natural spray like EcoRaider: section 6(1) of the Pest Control Products Act bars importing or using a pest control product that is not registered.</p>

          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol">A registered can instead: KONK Bed Bug Killer (PCP 31110) on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>The Regulatory Angle: Minimum-Risk Is Not PMRA Registration</h2>
          <p>There is a compliance point with plant-based pesticides that trips Canadians up, and it is worth spelling out. In the United States, EcoRaider is sold as exempt from EPA registration under section 25(b) of the federal pesticide law (FIFRA), the &ldquo;minimum risk&rdquo; exemption its maker&rsquo;s safety data sheet cites; the Rutgers authors note that essential-oil products of this kind are exempt from the normal registration requirements there. That exemption is a US framework and does not apply here. Under section 6(1) of Canada&rsquo;s Pest Control Products Act, no one may import, distribute or use a pest control product that is not registered, apart from narrow exceptions set out in the Act and its regulations, and Health Canada&rsquo;s registry lists no EcoRaider or EcoVenger product and nothing from its maker, Reneotech (searched October 29, 2026).</p>
          <p>So there is no Canadian-cleared version to look for. A listing that ships EcoRaider or EcoVenger to a Canadian address does not make it legal here: Health Canada says that if a product label does not have a PCP registration number, do not buy or use it, and that unregistered pesticides are illegal in Canada and their safety and effectiveness have not been reviewed by Health Canada. This is the same trap that catches Canadians importing US-only concentrates like CrossFire, which has no Canadian registration in any class. The legal plant-derived route in Canada is a registered pyrethrin can, such as KONK Bed Bug Killer (PCP 31110) or Doktor Doom Sleep Tight Bed Bug Killer II (PCP 29339), or ProCitra-DL Crawling Insect Killer (PCP 29811), a domestic d-limonene product that lists bed bugs.</p>

          <h2>Where a Contact Spray Fits in a Real Bed Bug Plan</h2>
          <p>No spray clears an established infestation by itself, and any review that implies otherwise is selling you something. A contact spray is one layer, bounded by the reach of the nozzle, and in Canada that layer has to be a registered can rather than EcoRaider. Its power shows when it sits inside a layered plan, and the layers are well established:</p>
          <ul>
            <li><strong>Remove the visible population first.</strong> A <Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">sealed-HEPA vacuum</Link> lifts adults and nymphs before you spray, so the contact killer works on what remains.</li>
            <li><strong>Spray the harbourage with a registered can.</strong> Direct, thorough contact killing of the bugs on every seam and crack the label allows; in Canada that is a product with a PCP number, not EcoRaider.</li>
            <li><strong>Heat for the deep eggs.</strong> A <Link href="/blog/best-bed-bug-steamer-canada">steamer</Link> penetrates seams to kill the eggs no spray reaches, and a <Link href="/blog/bed-bug-heater-canada">heater or heat chamber</Link> sterilizes belongings.</li>
            <li><strong>Dust the voids for long residual.</strong> A diatomaceous earth dust with a PCP number in the cracks keeps working on survivors and re-invaders; <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa</Link>, the silica gel dust US guides use, has no Canadian registration.</li>
            <li><strong>Encase and monitor.</strong> A zippered <Link href="/blog/bed-bug-mattress-encasement-canada">mattress encasement</Link> seals the bed, and <Link href="/blog/bed-bug-interceptor-traps-canada">interceptor traps</Link> under the legs tell you, week over week, whether the numbers are falling.</li>
          </ul>
          <p>For anything beyond a caught-early, localized problem &mdash; a spreading infestation in an apartment, or bugs established in walls and furniture &mdash; a professional treatment is the honest answer, with the spray and dust working as the tools you keep on hand. Our guides on <Link href="/blog/how-to-get-rid-of-bed-bugs-canada">how to get rid of bed bugs in Canada</Link> and <Link href="/blog/how-to-get-rid-of-bed-bugs-in-apartment-canada">bed bugs in an apartment</Link> walk through how the pieces fit together, and the full toolkit lives in our <Link href="/blog/best-pest-control-equipment-canada">pest control equipment guide</Link>.</p>

          <h2>Verdict: Strong Rutgers Lab Results &mdash; Not a Buy in Canada</h2>
          <p>As a US contact spray, EcoRaider is one of the rare plant-based bed bug sprays that survives contact with the evidence. Rutgers&rsquo; lab testing puts it among the two natural products that killed bed bugs reliably on direct spray; it killed 86.7% of the eggs it wetted, more than either synthetic in the same test; and it killed deltamethrin-resistant nymphs that a pyrethroid only partly controlled.</p>
          <p>That record has limits, and it does not make EcoRaider a buy in Canada. Bed bugs avoid its dried film, so it is a spray-thoroughly-and-repeat contact killer, not a barrier; it only kills what the nozzle reaches, so eggs buried out of sight survive it; and the Rutgers study was a lab study, with its authors calling for tests in infested homes. Above all, it has no Canadian registration, and Health Canada says not to buy or use a pesticide without a PCP number. For Canadians the verdict is to choose a registered can whose label names your sites, such as KONK Bed Bug Killer (PCP 31110), add heat for the deep eggs and a diatomaceous earth dust with a PCP number for the voids, and skip the cross-border shopping entirely.</p>

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

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/blog/bed-bug-control-canada-hub">Bed Bug Control Canada — The Complete Plan</Link></li>
            <li><Link href="/blog/bed-bug-spray-canada">Bed Bug Spray Canada — What Actually Works</Link></li>
            <li><Link href="/blog/best-natural-bed-bug-spray-canada">Best Natural Bed Bug Spray Canada — The Plant-Based Options</Link></li>
            <li><Link href="/blog/do-bed-bug-sprays-actually-work">Do Bed Bug Sprays Actually Work? The Resistance Problem</Link></li>
            <li><Link href="/blog/cimexa-bed-bug-review-canada">CimeXa Review Canada — The Resistance-Proof Desiccant Dust</Link></li>
            <li><Link href="/blog/best-bed-bug-steamer-canada">Best Bed-Bug Steamer Canada — Heat That Kills the Eggs</Link></li>
            <li><Link href="/blog/bed-bug-mattress-encasement-canada">Bed-Bug Mattress Encasements Canada</Link></li>
            <li><Link href="/blog/best-pest-control-equipment-canada">Best Pest Control Equipment in Canada — The Full Kit</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="bed bugs" />
        <ReadNext path="/blog/ecoraider-bed-bug-spray-review-canada" />
      </article>
    </>
  )
}
