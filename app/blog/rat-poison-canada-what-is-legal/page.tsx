import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AmazonLink from '@/components/AmazonLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import { tagForSlug } from '@/lib/amazon-clusters'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import QuickIdTable from '@/components/QuickIdTable'

const SLUG = 'rat-poison-canada-what-is-legal'
const DATE = '2026-07-16'
const UPDATED = '2026-10-23'
const TITLE = 'Rat Poison in Canada 2026 — What\'s Actually Legal (and What Isn\'t)'
// TITLE NOTE (Oct 23, 2026): was 'Rat Poison Canada 2026: What Is Actually Legal'; top queries Jul 23-Oct 20: rodenticide canada 101 at 8.9, best mouse poison in canada 98 at 8.4, brodifacoum canada 78 at 6.0, is rat poison legal in ontario 78 at 5.0, rat poison canada 61 at 4.4 (page: 10,612 impressions at 5.5, 237 clicks).
const META_TITLE = 'Rat Poison Canada: Which Rodenticides Are Legal'

const FAQS = [
  {
    question: 'Is rat poison legal in Canada?',
    answer: 'Yes, but for homeowners only domestic-class products, used as the label directs. Health Canada says "Domestic class products containing second-generation anticoagulants (brodifacoum, bromadiolone and difethialone) are prohibited" and "Domestic class products must always be used in bait stations." The PMRA product database (checked October 23, 2026) lists domestic rat and mouse baits containing bromethalin, the first-generation anticoagulants diphacinone, chlorophacinone and warfarin, and, since June 25, 2026, cholecalciferol. The Tomcat Rat Killer Disposable Bait Station (Reg. No. 31970, bromethalin) is one registered example. Commercial-class rodenticides are a different matter: Health Canada says "Only certified pest control operators, farmers and persons authorized in governmental-approved pest control programs are allowed to use commercial class rodenticides products."',
  },
  {
    question: 'Can I buy d-CON or brodifacoum rat poison in Canada?',
    answer: 'No. Brodifacoum, bromadiolone and difethialone are the actives behind classic d-CON pellets, Contrac, Final and similar products, and Health Canada says "Domestic class products containing second-generation anticoagulants (brodifacoum, bromadiolone and difethialone) are prohibited." The PMRA set that rule in its 2010 decision (REV2010-17) and gave manufacturers until December 31, 2012 to have new labelling in place. The PMRA product database still lists brodifacoum, bromadiolone and difethialone baits, but only as commercial, restricted or manufacturing products for licensed users. In the US, the EPA says production of 12 d-CON products, 8 of them second-generation anticoagulants, stopped on December 31, 2014 and distribution to retailers ended March 31, 2015. A listing that would ship second-generation bait to a Canadian home is selling something a homeowner may not use here.',
  },
  {
    question: 'What rat poison can Canadian consumers legally buy?',
    answer: 'Domestic-class products only, and the PMRA product database is the list. On October 23, 2026 it showed current domestic rodenticides containing bromethalin (for example the Tomcat Rat Killer Disposable Bait Station, Reg. No. 31970, and the Tomcat Mouse Killer Disposable Bait Station, Reg. No. 31437), the first-generation anticoagulants diphacinone, chlorophacinone and warfarin (sold under brands such as Tomcat, Ramik, Victor, Wilson and King), cholecalciferol (BASF\'s TC 411, TC 412 and TC 413 Rodent Bait, registered June 25, 2026 and labelled for indoor use only), and corn-cellulose baits. Every registered product carries its registration number on the label, and Health Canada\'s advice is plain: "If the product label does not have a PCP registration number, do not buy or use it."',
  },
  {
    question: 'Is it illegal to bring rat poison from the US into Canada?',
    answer: 'An unregistered one, yes. The Pest Control Products Act says "No person shall manufacture, possess, handle, store, transport, import, distribute or use a pest control product that is not registered under this Act," except where the Act or its regulations allow it, and Health Canada says "Unregistered pesticides are illegal in Canada." A jug of Contrac or Final Blox bought from a US website is a US product; the Canadian versions are registered here only as commercial-class products, and Health Canada says "Only certified pest control operators, farmers and persons authorized in governmental-approved pest control programs are allowed to use commercial class rodenticides products." Either way, it is not something a Canadian homeowner can legally put down.',
  },
  {
    question: 'What is bromethalin and how does it work?',
    answer: 'Bromethalin is a non-anticoagulant rodenticide: the Canadian Tomcat Rat Killer label says it "is not an anticoagulant type rodenticide" and that sublethal symptoms "would be the result of cerebral edema" (brain swelling). The same label says rats usually consume a lethal dose in a single night\'s feeding "but it may take two or more days from time of consumption for them to die," while Health Canada says death from second-generation anticoagulants is usually delayed 5 to 10 days. The label lists no antidote; its treatment advice is to limit absorption and treat the swelling. That is why a bromethalin station still has to sit where dogs, cats and children cannot reach it: the label says "KEEP AWAY FROM CHILDREN, PETS AND LIVESTOCK."',
  },
  {
    question: 'Are second-generation rodenticides banned in BC?',
    answer: 'Mostly, yes. B.C.\'s 18-month Minister\'s Order banning the sale and use of second-generation anticoagulant rodenticides was in place from July 21, 2021 to January 20, 2023, and the revised Integrated Pest Management Regulation took effect on January 21, 2023. The province says the regulation prohibits "the sale and use of SGARs in B.C. for all members of the public, and most commercial and industrial operations," and that only select sectors deemed "essential services," such as hospitals and food production, can buy and use them, provided they meet the requirements (a certificate and licence, a site-specific integrated pest management plan and records of use) or hire a licensed pest-control company to do the work. Everywhere in Canada, Health Canada already prohibits second-generation anticoagulants in domestic (consumer) products.',
  },
  {
    question: 'Why can exterminators use poisons that homeowners can\'t?',
    answer: 'Because commercial-class products are labelled for trained users. Health Canada says "Only certified pest control operators, farmers and persons authorized in governmental-approved pest control programs are allowed to use commercial class rodenticides products," and that second-generation anticoagulants "tend to be more acutely toxic than the first-generation and are retained much longer in body tissues" and "generally provide a lethal dose after one single feeding." Commercial bait comes with its own placement rules too, including tamper-resistant bait stations wherever bait is within reach of pets, wildlife or children under six. If a rat problem genuinely needs those products — heavy exterior burrowing, persistent reinfestation — the legal route is hiring a licensed operator, not importing commercial bait yourself.',
  },
  {
    question: 'How long does rat poison take to work?',
    answer: 'It depends on the active. Health Canada says first-generation anticoagulants "generally must be ingested for several days" to deliver a lethal dose, and that second-generation anticoagulants generally kill after one feeding, "although death is usually delayed 5 to 10 days and animals continue feeding." For bromethalin, the Canadian Tomcat Rat Killer label says rats usually eat a lethal dose in a single night "but it may take two or more days" for them to die. Either way a poisoned rat has days to retreat into a wall void before dying, which is the most common regret among homeowners who chose bait over traps.',
  },
  {
    question: 'What should I do if my dog or cat eats rat poison?',
    answer: 'Go to an emergency vet immediately and bring the packaging — the active ingredient determines the treatment. Anticoagulant poisoning has an effective antidote (vitamin K1 therapy, often continued for weeks), and outcomes are good when treatment starts early. Bromethalin has no antidote; treatment is limited to early decontamination, so minutes matter. Do not wait for symptoms — anticoagulant signs can take 3–5 days to appear, and by then internal bleeding is already underway.',
  },
  {
    question: 'Will rats die inside my walls if I use poison?',
    answer: 'Often, yes. Anticoagulants take days to kill (Health Canada puts second-generation ones at 5 to 10 days), and a sick rat withdraws to its nest — which in a Canadian house frequently means a wall void, ceiling, or insulated attic corner you cannot open. The odour of a decomposing rat can persist for 2–3 weeks or longer, and locating the carcass sometimes means cutting drywall. That is the practical argument for traps-first even where poison is legal: a trap gives you a retrievable carcass and a body count; bait gives you a smell you can\'t find.',
  },
  {
    question: 'Do natural or homemade rat poisons work?',
    answer: 'No — skip the baking-soda, plaster-of-Paris, and instant-mashed-potato recipes. They are unreliable at the doses a rat will actually eat, they cause slow deaths worse than anything a registered product delivers, and they sidestep the exact safety system — tamper-resistant stations, labels, registration — that keeps kids, pets, and wildlife out of the poison. If you don\'t want rodenticides in your home, the answer is a properly deployed trap line and sealed entry points, which outperform poison for most Canadian infestations anyway.',
  },
  {
    question: 'Is rat poison legal in Ontario?',
    answer: 'Yes, the same domestic-class products that are legal across Canada, used as the label directs. Ontario says "Federally registered pesticides are immediately allowed for sale and use in Ontario," domestic products fall into its Class D, and "Users of Class D pesticides on their own property are also exempt" from needing an exterminator\'s licence. Ontario\'s cosmetic pesticide ban covers pesticide use "in, on or over land" and "does not apply to pesticide use in water or inside buildings," and its exceptions include "pests of public works and other buildings and structures." Second-generation anticoagulants stay out of reach for Ontario homeowners because Health Canada prohibits them in domestic products.',
  },
  {
    question: 'Can I use rat poison outside in Canada?',
    answer: 'Only a product whose label allows it, and only where the label says. Health Canada says domestic products "must always be used in bait stations." The Tomcat Rat Killer Disposable Bait Station label, for example, allows use "indoors and outdoors within 15 metres of buildings," with one station every 5 to 10 metres beside burrows, along a wall or in corners where rats or their signs have been seen. Not every consumer bait allows outdoor use: the labels of BASF\'s cholecalciferol baits (TC 411, 412 and 413) say "DO NOT USE THIS PRODUCT OUTDOORS." Outdoor bait can also reach wildlife, and the Tomcat label says the product "is toxic to fish, birds, and wildlife."',
  },
  {
    question: 'Bromethalin vs bromadiolone: what is the difference?',
    answer: 'They work differently and are sold to different people. Bromethalin is not an anticoagulant (the Canadian Tomcat Rat Killer label says it "is not an anticoagulant type rodenticide"), and it is sold to consumers in domestic bait stations. Bromadiolone is a second-generation anticoagulant: Health Canada prohibits it in domestic products, and the PMRA product database lists it only in commercial and manufacturing products such as Contrac, for certified pest control operators, farmers and authorized program staff. In British Columbia, bromadiolone also falls under the province\'s SGAR rules, which leave it to designated essential services.',
  },
  {
    question: 'What is the best mouse poison in Canada?',
    answer: 'There is no single best one, and the legal choice is narrower than US lists suggest. The PMRA product database lists domestic mouse baits with bromethalin (such as the Tomcat Mouse Killer Disposable Bait Station, Reg. No. 31437), with the first-generation anticoagulants diphacinone, chlorophacinone and warfarin, and, since June 2026, with cholecalciferol (BASF\'s TC 411 and TC 412 Rodent Bait, labelled "Use indoors only"). Health Canada says domestic products "must always be used in bait stations." For most homes a line of snap traps does the job without poison, and our mouse bait station guide covers when a station is worth it.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'For homeowners, rat poison in Canada means domestic-class products, never brodifacoum, bromadiolone or difethialone. What you can buy, outdoor use, BC, Ontario.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('rat-poison-canada-what-is-legal')

export default function RatPoisonCanadaLegalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to rodenticide law: which rat poisons are PMRA-registered for consumers, why second-generation anticoagulants are commercial-only, BC\'s SGAR restrictions, and the legal alternatives.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Rat Poison Canada — What Is Legal', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Rat Poison Canada — What Is Legal</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">For homeowners, rat poison in Canada means domestic-class products: Health Canada prohibits brodifacoum, bromadiolone and difethialone in them, and they &ldquo;must always be used in bait stations.&rdquo; For most homes our pick is a heavy-duty rat snap trap; if you bait, use a registered domestic station as its label directs.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <TopBox tag={AMZ_TAG} name="Heavy-duty rat snap trap" search="heavy duty rat snap trap" label="Traps first" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Most rat poison recommended online is not legal for Canadian consumers. Health Canada says &ldquo;Domestic class products containing second-generation anticoagulants (brodifacoum, bromadiolone and difethialone) are prohibited,&rdquo; a rule from the PMRA&rsquo;s 2010 decision with new labels required by December 31, 2012, and British Columbia has banned most other uses. One PMRA-registered consumer option is bromethalin in a child- and dog-resistant station — the <AmazonLink search="tomcat rat killer disposable station" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Tomcat Rat Killer disposable station</AmazonLink> (Reg. No. 31970) — and even then, traps should come first for most homes.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>No domestic (consumer) product contains brodifacoum, bromadiolone or difethialone: Health Canada prohibits them in domestic products, and the PMRA database lists them only in commercial, restricted and manufacturing products.</li>
              <li>B.C.&rsquo;s revised Integrated Pest Management Regulation took effect January 21, 2023: SGARs are banned for &ldquo;all members of the public&rdquo; and most businesses, with exceptions for designated essential services such as hospitals and food production.</li>
              <li>The Tomcat Rat Killer Disposable Bait Station (Reg. No. 31970, bromethalin) is a registered domestic product; its label says rats usually eat a lethal dose in one night but &ldquo;it may take two or more days&rdquo; for them to die.</li>
              <li>Second-generation anticoagulants usually take 5 to 10 days to kill, Health Canada says, and first-generation ones must be eaten for several days — the main reason poisoned rats so often die inside wall voids.</li>
              <li>BC testing of dead owls has found anticoagulant rodenticide residues in roughly 7 in 10 birds examined.</li>
              <li>US d-CON dropped second-generation anticoagulants from consumer products in 2015 after EPA action — American lists praising the &ldquo;classic formula&rdquo; are a decade out of date.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="rats" />

          <div className="not-prose my-6 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">What to do right now</p>
            <ol className="space-y-3 text-[15px] text-gray-800 list-decimal pl-5">
              <li><strong>Read the label before you read the reviews &mdash; this step costs nothing.</strong> Every pesticide registered in Canada carries its registration number on the label; on the Tomcat rat station it reads &ldquo;REG&rsquo;N NO.: 31970 PCP ACT.&rdquo; Health Canada&rsquo;s advice is blunt: &ldquo;If the product label does not have a PCP registration number, do not buy or use it.&rdquo; Then check the class: a label marked COMMERCIAL is for certified pest control operators, farmers and authorized program staff, not homeowners. That ten-second check rules out most of what American &ldquo;best rat poison&rdquo; lists recommend.</li>
              <li><strong>Start with traps rather than bait &mdash; and buy the rat-rated kind.</strong> A mouse trap physically cannot kill a rat. A heavy-duty snap trap kills in seconds, leaves a carcass you can find and count instead of a smell behind drywall, and puts nothing into the food chain for an owl, a hawk or a dog to pick up second-hand. For most Canadian homes that is the entire answer. <BuyLink tag={AMZ_TAG} search="heavy duty rat snap trap">Check price on Amazon.ca &rarr;</BuyLink></li>
              <li><strong>If you do use bait, the consumer-class format is a bait station.</strong> Health Canada says domestic products &ldquo;must always be used in bait stations,&rdquo; and the domestic list includes bromethalin, the first-generation anticoagulants and, since June 2026, cholecalciferol. The Tomcat rat station&rsquo;s label allows use indoors and outdoors within 15 metres of buildings, beside burrows, along a wall or in corners where rats have been seen; it also says to keep it away from children, pets and livestock, and it lists no antidote. Follow the directions printed on the label. <BuyLink tag={AMZ_TAG} search="tomcat rat killer disposable station">Check price on Amazon.ca &rarr;</BuyLink></li>
            </ol>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <h2>What Rat Poison Is Actually Legal in Canada?</h2>
          <p>For homeowners, the legal rodenticides are domestic-class products, and the PMRA product database is the list. On October 23, 2026 it showed current domestic baits containing the first-generation anticoagulants warfarin, chlorophacinone and diphacinone, the non-anticoagulant bromethalin and, since June 25, 2026, cholecalciferol, plus corn-cellulose baits. None contains a second-generation anticoagulant: Health Canada says &ldquo;Domestic class products containing second-generation anticoagulants (brodifacoum, bromadiolone and difethialone) are prohibited.&rdquo; Those actives, which dominate American &ldquo;best rat poison&rdquo; lists, are registered here only in commercial, restricted and manufacturing products: legal for licensed applicators, not for you.</p>
          <p>The dividing line is Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA). Every pesticide registered in Canada carries its registration number on the label; on the Tomcat rat station it reads &ldquo;REG&rsquo;N NO.: 31970 PCP ACT.&rdquo; No number, not registered, and the Pest Control Products Act prohibits importing or using a pest control product that is not registered. Here is how the actives you&rsquo;ll see recommended online actually shake out:</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm my-6 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Active ingredient</th>
                  <th className="px-4 py-3 text-left">Products you&rsquo;ll see named</th>
                  <th className="px-4 py-3 text-left">Class in Canada</th>
                  <th className="px-4 py-3 text-left">Can homeowners buy it?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { active: 'Brodifacoum (SGAR)', products: 'Classic d-CON pellets, Final, Talon', cls: 'Commercial only', legal: 'No — professionals only, all provinces' },
                  { active: 'Bromadiolone (SGAR)', products: 'Contrac, Maki, US Tomcat Bait Chunx', cls: 'Commercial only', legal: 'No — professionals only, all provinces' },
                  { active: 'Difethialone (SGAR)', products: 'FirstStrike, Hombre', cls: 'Commercial only', legal: 'No — professionals only, all provinces' },
                  { active: 'Bromethalin', products: 'Tomcat Rat Killer / Mouse Killer disposable stations (Reg. No. 31970, 31437)', cls: 'Domestic products registered — bait stations', legal: 'Yes — e.g. the Tomcat Rat Killer Disposable Bait Station' },
                  { active: 'First-gen anticoagulants (warfarin, chlorophacinone, diphacinone)', products: 'Canadian hardware-store station baits (Tomcat, Ramik, Victor, Wilson, King)', cls: 'Domestic products registered — bait stations', legal: 'Yes, in bait stations' },
                  { active: 'Cholecalciferol', products: 'BASF TC 411, TC 412 and TC 413 Rodent Bait; Selontra (commercial); reformulated US d-CON', cls: 'Domestic and commercial products registered June 25, 2026', legal: 'Yes, indoors only (TC 411–413 labels); no d-CON product is currently registered here' },
                  { active: 'Zinc phosphide', products: 'Agricultural field baits', cls: 'Commercial / agricultural', legal: 'No' },
                ].map(({ active, products, cls, legal }) => (
                  <tr key={active} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-bold text-brand-800">{active}</td>
                    <td className="px-4 py-3 text-gray-700">{products}</td>
                    <td className="px-4 py-3 text-gray-700">{cls}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{legal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <QuickIdTable
            title="The legal options compared: what each label and Health Canada say"
            head={['Option', 'How it works', 'Where you may use it', 'Limits']}
            rows={[
              ['Bromethalin station', 'Tomcat Rat Killer Disposable Bait Station (Reg. No. 31970): "not an anticoagulant type rodenticide"; rats usually eat a lethal dose in one night, but "it may take two or more days" to die', '"Indoors and outdoors within 15 metres of buildings"', 'No antidote listed on the label; "KEEP AWAY FROM CHILDREN, PETS AND LIVESTOCK"'],
              ['First-generation anticoagulant station', 'Diphacinone, chlorophacinone or warfarin; Health Canada: these "generally must be ingested for several days" to give a lethal dose', 'In a bait station, at the sites its label lists: Health Canada says domestic products "must always be used in bait stations"', 'Slower; a poisoned rat has days to hide before it dies'],
              ['Cholecalciferol bait', 'BASF TC 411 and TC 412 (mice) and TC 413 (rats), registered June 25, 2026; label: "Cholecalciferol causes hypercalcaemia"', '"Use indoors only"; TC 413: "USE INDOORS ONLY IN AREAS INACCESSIBLE TO CHILDREN AND PETS"', 'TC 413: "THIS BAIT STATION IS NOT TAMPER RESISTANT"; all three: "DO NOT USE THIS PRODUCT OUTDOORS"'],
              ['Second-generation anticoagulants', 'Brodifacoum, bromadiolone, difethialone; Health Canada: they "generally provide a lethal dose after one single feeding, although death is usually delayed 5 to 10 days"', 'Not in any domestic product: Health Canada says domestic products containing them "are prohibited"', 'Commercial products only, for certified pest control operators, farmers and authorized program staff; restricted further in B.C.'],
              ['Rat snap trap', 'No pesticide: kills on the strike, with no poison in the food chain', 'Anywhere you can place it out of reach of children and pets, indoors or out', 'Must be rat-sized: a mouse trap cannot kill a rat'],
            ]}
            caption={<>Sources: the registered product labels for the <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="underline">Tomcat Rat Killer Disposable Bait Station (Reg. No. 31970) and BASF TC 411, 412 and 413 Rodent Bait (Reg. No. 35982 to 35984)</a>; Health Canada&rsquo;s <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/pesticides-pest-management/fact-sheets-other-resources/rodenticides-agricultural-settings/questions-answers.html" target="_blank" rel="noopener noreferrer" className="underline">Questions and Answers on additional mitigation measures for rodenticides</a> and its <a href="https://www.canada.ca/en/health-canada/services/publications/product-safety/commercial-class-rodenticides-tamper-resistant-bait-stations-requirements.html" target="_blank" rel="noopener noreferrer" className="underline">commercial-class bait station factsheet</a> (2024). Product classes checked in the PMRA product database on October 23, 2026. The trap row restates this page&rsquo;s own advice.</>}
          />

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of one PMRA-registered consumer option:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="tomcat rat killer disposable station">Tomcat Rat Killer disposable station →</BuyLink>
          </div>

          <TopPick tag={AMZ_TAG}
            label="The Legal Consumer Option"
            name="Tomcat Rat Killer Disposable Bait Station (bromethalin)"
            blurb="A PMRA-registered domestic (consumer) rat bait station, Reg. No. 31970: child- and dog-resistant, pre-loaded with bromethalin, and labelled for use indoors and outdoors within 15 metres of buildings. The label says rats usually eat a lethal dose in one night but it may take two or more days for them to die. It's the right pick for light exterior pressure around a shed or garage — but the label lists no antidote, so keep it away from pets and children, and reach for traps first for most interior problems."
            search="tomcat rat killer disposable station"
            asin="B012ODWW7Y"
            score={7.4}
            pros={['PMRA-registered for Canadian consumers', 'Sealed, tamper-resistant station', 'Faster than anticoagulants (label: two or more days)']}
            cons={['No antidote for bromethalin', 'Poisoned rat can die out of reach', 'Traps beat it for most interior jobs']}
          />

          <NextUp path="/blog/rat-poison-canada-what-is-legal" />
          <h2>Why Did Canada Restrict Second-Generation Rat Poisons?</h2>
          <p>Because they are lethal in a single feeding and persist in tissue. Health Canada says second-generation anticoagulants &ldquo;tend to be more acutely toxic than the first-generation and are retained much longer in body tissues,&rdquo; and that the extra measures it required in 2010 were &ldquo;warranted in order to prevent exposure of children, pets and non-target wildlife.&rdquo; Under that decision (REV2010-17, with new labels due by December 31, 2012), domestic products containing SGARs were prohibited, block or solid baits became the only domestic formulations allowed for the rodenticides it covered, loose bait forms (&ldquo;meal, treated whole-grain, pelleted and liquid&rdquo;) were prohibited, and domestic products must always be used in bait stations.</p>
          <p>The logic explains the whole Canadian market. A first-generation active like warfarin usually needs several feedings to kill and clears from tissue relatively quickly. Brodifacoum kills from one feeding — but the rat keeps eating for the 5 to 10 days it usually takes to die, loading its body with many lethal doses. Whatever eats that rat next — an owl, a hawk, a fox, the neighbour&rsquo;s cat — takes the accumulated dose. Scale that across every backyard in the country and you get chronic contamination of the predators that eat rodents for a living, which is exactly what wildlife testing later confirmed.</p>
          <p>So the loose anticoagulant pellets your parents bought at the hardware store are gone from the consumer aisle — removed by regulation, not fashion. For the rodenticides that decision covered, what remains on the consumer shelf is solid bait in a bait station, harder for a child, dog, or barred owl to get into.</p>

          <h2>What Are BC&rsquo;s SGAR Rules — and Will Other Provinces Follow?</h2>
          <p>British Columbia went further than the federal rules. Its 18-month Minister&rsquo;s Order banning the sale and use of SGARs was in place from July 21, 2021 to January 20, 2023, and the revised Integrated Pest Management Regulation took effect on January 21, 2023. The province says it prohibits &ldquo;the sale and use of SGARs in B.C. for all members of the public, and most commercial and industrial operations&rdquo;; only select sectors deemed &ldquo;essential services,&rdquo; such as hospitals and food production, can buy and use them, provided they meet the requirements (a certificate and licence, a site-specific integrated pest management plan and records of use) or hire a licensed pest-control company to do the work. Homeowners never had SGARs to lose: Health Canada prohibits them in domestic products nationwide.</p>
          <p>B.C. also controls who sells rodenticides. Its November 2021 science review describes the standing rule: apart from excluded products such as corn cellulose, &ldquo;domestic and commercial class rodenticides may only be sold by licenced pesticide vendors,&rdquo; whose trained, certified dispensers speak with the customer before the sale. The province acted, it says, in response to &ldquo;concerns expressed over effects on owls and other wildlife.&rdquo; Nothing forces other provinces to follow, but North American regulation has moved one direction for fifteen years: away from consumer SGARs. Planning your rodent strategy around poison is planning around a shrinking category.</p>

          <h2>What Can Canadian Consumers Legally Buy?</h2>
          <p>One practical answer for rats is the Tomcat Rat Killer Disposable Bait Station (Reg. No. 31970) — a child- and dog-resistant station pre-filled with a 113 g bromethalin block, registered as a domestic-class product, with a matching Mouse Killer version (Reg. No. 31437) for the smaller-rodent problem. Bromethalin is not an anticoagulant: the label says rats usually consume a lethal dose in a single night&rsquo;s feeding &ldquo;but it may take two or more days from time of consumption for them to die,&rdquo; against the 5 to 10 days Health Canada gives for second-generation anticoagulants.</p>
          <p>Respect what you&rsquo;re buying. The label lists no antidote &mdash; its treatment advice is to limit absorption and treat brain swelling &mdash; and it says &ldquo;KEEP AWAY FROM CHILDREN, PETS AND LIVESTOCK.&rdquo; It allows use indoors and outdoors within 15 metres of buildings, one station every 5 to 10 metres, beside burrows, along a wall or in corners where rats or their signs have been seen, and rubber gloves must be worn when you collect used stations, unconsumed bait and dead rodents. Know the format&rsquo;s limits too: a disposable station handles light exterior pressure around a shed or garage; it does not clear an established interior infestation, and a poisoned rat can still die somewhere unreachable. Our <Link href="/blog/mouse-bait-station-canada">bait station guide</Link> covers placement, station types, and when enclosed bait genuinely beats a trap line.</p>
          <p>First-generation anticoagulant station baits — warfarin, chlorophacinone, diphacinone under Canadian hardware brands — are the other long-standing legal lane, and cholecalciferol joined them in June 2026 (BASF&rsquo;s TC 411, 412 and 413, all labelled for indoor use only). The anticoagulants are slower and often need multiple feedings, but anticoagulant exposure in a pet has an effective antidote (vitamin K1), which some owners reasonably weigh against bromethalin&rsquo;s speed.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="tomcat rat killer disposable station">Check Tomcat Rat Killer station on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="tomcat mouse killer disposable station">Tomcat Mouse Killer station →</BuyLink>
          </div>

          <h2>Which Option Fits Your Situation?</h2>
          <ul>
            <li><strong>Rats or mice inside the house:</strong> traps first (below). If you do bait indoors, use a domestic station as its label directs; BASF&rsquo;s cholecalciferol rat bait (TC 413) is labelled &ldquo;THIS BAIT STATION IS NOT TAMPER RESISTANT&rdquo; and &ldquo;USE INDOORS ONLY IN AREAS INACCESSIBLE TO CHILDREN AND PETS.&rdquo;</li>
            <li><strong>Rats outside, around a shed, garage or deck:</strong> only a product whose label allows outdoor use. The Tomcat Rat Killer Disposable Bait Station allows use &ldquo;indoors and outdoors within 15 metres of buildings&rdquo;; the TC 411, 412 and 413 labels say &ldquo;DO NOT USE THIS PRODUCT OUTDOORS.&rdquo;</li>
            <li><strong>Dogs, cats or small children in the home:</strong> traps set where they cannot reach, or no poison at all. Even the child- and dog-resistant Tomcat station carries the label line &ldquo;KEEP AWAY FROM CHILDREN, PETS AND LIVESTOCK.&rdquo;</li>
            <li><strong>You live in British Columbia:</strong> the same domestic products, sold through licensed pesticide vendors; SGARs are off the table for homeowners and most businesses.</li>
            <li><strong>Burrows, heavy outdoor pressure, or a building you cannot trap:</strong> a licensed pest control operator, who can use commercial-class products that homeowners cannot.</li>
          </ul>

          <RelatedLinks path="/blog/rat-poison-canada-what-is-legal" />
          <h2>Why Is Every US &ldquo;Best Rat Poison&rdquo; List Wrong for Canada?</h2>
          <p>Because almost everything those lists recommend is either commercial-class in Canada or not registered here at all. The US market lets ordinary consumers mail-order commercial rodenticides; Canada does not — and that one difference invalidates the entire genre. Products we will <strong>not</strong> recommend, and that you should not buy from US websites or grey-market resellers:</p>
          <ul>
            <li><strong>Contrac Blox / Contrac All-Weather (bromadiolone)</strong> — the most-recommended bait on US lists. Commercial-class in Canada; consumer use is illegal in every province.</li>
            <li><strong>Final Blox / Talon (brodifacoum)</strong> — single-feeding SGARs; brodifacoum and bromadiolone were the rodenticides most commonly detected in B.C. owls collected from 1988 to 2003. Professionals only.</li>
            <li><strong>FirstStrike / Hombre (difethialone)</strong> — same story, professionals only.</li>
            <li><strong>US Tomcat Bait Chunx with bromadiolone</strong> — the American Tomcat line includes SGAR products the Canadian consumer line deliberately does not. Same brand, different law; check the active ingredient, not the logo.</li>
            <li><strong>Current US d-CON (cholecalciferol)</strong> — reformulated for the American market after the EPA forced consumer SGARs off US shelves in 2015; no d-CON product is currently registered in Canada (the PMRA database lists only a historical one). Canada&rsquo;s own consumer cholecalciferol baits, registered in June 2026, are BASF&rsquo;s TC 411, 412 and 413.</li>
            <li><strong>Any loose pellet, meal, or place-pack poison bait</strong> — for the rodenticides covered by the 2010 decision, Health Canada prohibits loose bait forms (&ldquo;meal, treated whole-grain, pelleted and liquid&rdquo;) in domestic products and says domestic products &ldquo;must always be used in bait stations.&rdquo; (Corn-cellulose pellets are a separate, registered domestic product.)</li>
          </ul>
          <p>The screening rule takes ten seconds: look for the registration number and the word DOMESTIC on the label or listing (the Tomcat rat station reads &ldquo;REG&rsquo;N NO.: 31970 PCP ACT&rdquo;). Number and DOMESTIC present — a consumer product; follow its label. Absent — walk away, whatever the reviews say: Health Canada says &ldquo;Unregistered pesticides are illegal in Canada,&rdquo; and the Pest Control Products Act prohibits importing or using one. A COMMERCIAL label is for certified pest control operators, farmers and authorized program staff, not homeowners.</p>

          <h2>How Bad Is Secondary Poisoning of Owls, Hawks, and Pets?</h2>
          <p>Bad enough that it drove the law you&rsquo;ve just read about. B.C.&rsquo;s 2021 science review reports that in 164 owls collected in B.C. from 1988 to 2003, &ldquo;70% of owls had detectable liver residues of at least one anticoagulant rodenticide,&rdquo; with brodifacoum and bromadiolone the most commonly detected, and that across Canada great horned owls were the raptors most consistently exposed to SGARs (65%). The same review is careful about what that means: only six of the 164 owls (4%) were diagnosed with rodenticide toxicity as the cause of death.</p>
          <p>The mechanism is the delay: a rat carrying several lethal doses spends its final days slow, disoriented, and active in daylight — exactly the rodent a great horned owl or red-tailed hawk picks off first. The predator concentrates every dose its prey collected. The same relay can reach a pet that scavenges a poisoned rodent, on top of the direct risk of a dog chewing into bait.</p>
          <p>Residues are not deaths, and sampling methods differ between studies — but no Canadian dataset we&rsquo;ve seen points the other way. Bait stations reduce the direct-access risk; nothing eliminates the relay risk except not poisoning the rat in the first place.</p>

          <h2>Should You Even Use Poison? Traps First</h2>
          <p>For most Canadian rat and mouse problems, no — a properly deployed trap line beats bait, and it isn&rsquo;t close. Traps kill in seconds instead of days, leave a retrievable carcass instead of a smell behind drywall, carry zero secondary-poisoning risk to owls and pets, and give you the only honest progress metric there is: a body count.</p>
          <p>If bait looked appealing mainly because a trap line demands daily upkeep, there is a middle path worth pricing. A self-resetting CO₂ trap strikes, clears the carcass, and re-arms itself, so it runs unattended for weeks with no poison anywhere in the chain and no secondary poisoning to relay to an owl or a dog. Our <Link href="/blog/goodnature-a24-review-canada">poison-free Goodnature A24 review</Link> covers where that premium is and is not worth paying.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="self resetting rat trap co2">Check self-resetting CO&#8322; traps on Amazon.ca &rarr;</BuyLink>
          </div>
          <p>The playbook, with the deep-dives linked:</p>
          <ul>
            <li><strong>Rats:</strong> heavy-duty snap traps and smart placement — mouse traps physically cannot kill a rat. Start with the <Link href="/blog/best-rat-trap-canada">best rat trap guide</Link>.</li>
            <li><strong>Mice:</strong> a 6–12 trap line of snap traps, or electronic traps for no-touch disposal — see the <Link href="/blog/best-mouse-trap-canada">best mouse trap guide</Link> and our <Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor electronic trap review</Link>.</li>
            <li><strong>Exclusion:</strong> trapping without sealing entry points is a subscription, not a solution — the <Link href="/blog/how-to-get-rid-of-mice-canada">get-rid-of-mice playbook</Link> and <Link href="/blog/how-to-keep-mice-out-of-your-house-winter">winter mouse-proofing guide</Link> cover it step by step.</li>
            <li><strong>Skip the shortcuts:</strong> plug-in ultrasonic devices don&rsquo;t survive contact with the evidence — <Link href="/blog/ultrasonic-pest-repellers-do-they-work">our study-by-study review</Link> explains why.</li>
          </ul>
          <p className="not-prose text-sm text-gray-600 mb-1">The two trap formats that do the work a bait station can&rsquo;t &mdash; a rat-rated snap trap carries far more strike force than a mouse trap, and an electronic trap lets you empty it without seeing anything:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="heavy duty rat snap trap">Rat snap traps &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="electronic mouse trap">Electronic mouse trap &rarr;</BuyLink>
          </div>
          <p>Where does poison fit? At the edges: sustained exterior pressure, burrow networks, or structures you can&rsquo;t trap effectively — and at that severity, a licensed professional with legal access to commercial products is usually the better spend than any consumer bait. Our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> breaks down what professional rodent work actually runs.</p>

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

          <h2>Related Rodent Guides</h2>
          <ul>
            <li><Link href="/blog/best-rat-trap-canada">Best Rat Trap Canada — The Traps-First Alternative</Link></li>
            <li><Link href="/blog/best-mouse-trap-canada">Best Mouse Trap Canada — Snap vs Electronic vs Catch-and-Release</Link></li>
            <li><Link href="/blog/mouse-bait-station-canada">Mouse Bait Stations in Canada — What&rsquo;s Legal and When to Use Them</Link></li>
            <li><Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor Electronic Mouse Trap Review — Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mice-canada">How to Get Rid of Mice in Canada — Full Playbook</Link></li>
            <li><Link href="/blog/how-to-keep-mice-out-of-your-house-winter">How to Keep Mice Out of Your House This Winter</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Ultrasonic Pest Repellers — Do They Actually Work?</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
      </article>
      <StickyBuyBar tag={AMZ_TAG} name="Heavy-duty rat snap trap" search="heavy duty rat snap trap" label="Traps first" />
      <ReadNext path="/blog/rat-poison-canada-what-is-legal" standalone />
    </>
  )
}
