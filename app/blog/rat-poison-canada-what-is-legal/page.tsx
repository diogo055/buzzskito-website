import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'rat-poison-canada-what-is-legal'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'Rat Poison in Canada 2026 — What\'s Actually Legal (and What Isn\'t)'
const META_TITLE = 'Rat Poison Canada 2026: What Is Actually Legal'

const FAQS = [
  {
    question: 'Is rat poison legal in Canada?',
    answer: 'Yes, but only specific products. Health Canada\'s Pest Management Regulatory Agency (PMRA) splits rodenticides into domestic-class (consumer) and commercial-class (licensed professionals only). Consumers can legally buy first-generation anticoagulants (warfarin, chlorophacinone, diphacinone) and bromethalin — and only sold as ready-to-use, tamper-resistant bait stations. The Tomcat Rat Killer bromethalin disposable station is the most widely stocked registered option. Second-generation anticoagulants like brodifacoum and bromadiolone are commercial-class only and cannot legally be sold to or used by homeowners anywhere in Canada.',
  },
  {
    question: 'Can I buy d-CON or brodifacoum rat poison in Canada?',
    answer: 'No. Brodifacoum, bromadiolone, and difethialone — the actives behind classic d-CON pellets, Contrac, Final, and similar products — have been restricted to commercial-class use in Canada since the PMRA\'s rodenticide re-evaluation took full effect in 2013. Even in the US, d-CON dropped second-generation anticoagulants from consumer products in 2015 after EPA action, so the \'classic formula\' old blog posts praise no longer exists on either side of the border. Any listing that would ship SGAR bait to a Canadian home address is grey-market product that is illegal to use here.',
  },
  {
    question: 'What rat poison can Canadian consumers legally buy?',
    answer: 'Two families: bromethalin sold in ready-to-use tamper-resistant stations — the Tomcat Rat Killer and Mouse Killer disposable stations are the flagship examples — and first-generation anticoagulant baits (warfarin, chlorophacinone, diphacinone) in similar enclosed formats at Canadian hardware stores. Every legal product carries a PMRA Registration Number on the label (it reads \'Reg. No. XXXXX P.C.P. Act\'). If a rodenticide listing shows no Canadian registration number, it is not legal to use in Canada regardless of who is willing to ship it.',
  },
  {
    question: 'Is it illegal to bring rat poison from the US into Canada?',
    answer: 'Yes. Under the federal Pest Control Products Act it is an offence to import, sell, or use a pest control product that is not registered in Canada, and border officers can seize unregistered pesticides. Using a commercial-class product without provincial certification is a separate offence under provincial pesticide regulations. A jug of Contrac or Final Blox bought from a US website also deploys a single-feeding poison with no tamper-resistant packaging around your kids, pets, and local wildlife.',
  },
  {
    question: 'What is bromethalin and how does it work?',
    answer: 'Bromethalin is an acute neurotoxin, not an anticoagulant. It disrupts energy production in nerve cells, causing brain swelling; a rat that eats a lethal dose in a single feeding typically dies within 24–48 hours, versus 4–10 days for anticoagulants. The serious caveat: there is no antidote for bromethalin. That is exactly why the PMRA only allows consumers to buy it sealed inside ready-to-use, tamper-resistant stations — and why you should still treat a bromethalin station as a hazard around dogs, cats, and children.',
  },
  {
    question: 'Are second-generation rodenticides banned in BC?',
    answer: 'Mostly, yes. British Columbia issued an 18-month emergency restriction on second-generation anticoagulant rodenticides in July 2021, then made the restrictions permanent effective January 21, 2023. SGARs may now only be used in BC by licensed applicators serving designated essential services — sectors like agriculture, food production, and health care — inside a documented integrated pest management program. Homeowners and ordinary businesses cannot use SGARs at all. Other provinces have not matched BC yet, but the federal commercial-class restriction already applies to consumers Canada-wide.',
  },
  {
    question: 'Why can exterminators use poisons that homeowners can\'t?',
    answer: 'Because commercial-class rodenticides require provincial applicator certification: training in bait-station placement, secured tamper-resistant equipment, carcass searches, record-keeping, and label compliance. The PMRA\'s conclusion after its re-evaluation was that second-generation anticoagulants are too persistent and too lethal-per-feeding for unsupervised residential use, but manageable inside a professional program. If a rat problem genuinely needs SGARs — heavy exterior burrowing, persistent reinfestation — the legal route is hiring a licensed operator, not importing commercial bait yourself.',
  },
  {
    question: 'How long does rat poison take to work?',
    answer: 'Anticoagulant baits kill 4–10 days after a lethal dose, and first-generation actives often need multiple feedings across several days. Bromethalin works in roughly 24–48 hours after a single lethal feeding. The delay is deliberate — rats are neophobic and watch what happens to other rats, so a bait that killed instantly would make the rest of the colony bait-shy. It also means a poisoned rat has days to retreat into a wall void before dying, which is the most common regret among homeowners who chose bait over traps.',
  },
  {
    question: 'What should I do if my dog or cat eats rat poison?',
    answer: 'Go to an emergency vet immediately and bring the packaging — the active ingredient determines the treatment. Anticoagulant poisoning has an effective antidote (vitamin K1 therapy, often continued for weeks), and outcomes are good when treatment starts early. Bromethalin has no antidote; treatment is limited to early decontamination, so minutes matter. Do not wait for symptoms — anticoagulant signs can take 3–5 days to appear, and by then internal bleeding is already underway.',
  },
  {
    question: 'Will rats die inside my walls if I use poison?',
    answer: 'Often, yes. Anticoagulants take 4–10 days to kill, and a sick rat withdraws to its nest — which in a Canadian house frequently means a wall void, ceiling, or insulated attic corner you cannot open. The odour of a decomposing rat can persist for 2–3 weeks or longer, and locating the carcass sometimes means cutting drywall. That is the practical argument for traps-first even where poison is legal: a trap gives you a retrievable carcass and a body count; bait gives you a smell you can\'t find.',
  },
  {
    question: 'Do natural or homemade rat poisons work?',
    answer: 'No — skip the baking-soda, plaster-of-Paris, and instant-mashed-potato recipes. They are unreliable at the doses a rat will actually eat, they cause slow deaths worse than anything a registered product delivers, and they sidestep the exact safety system — tamper-resistant stations, labels, registration — that keeps kids, pets, and wildlife out of the poison. If you don\'t want rodenticides in your home, the answer is a properly deployed trap line and sealed entry points, which outperform poison for most Canadian infestations anyway.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Second-generation anticoagulant rat poisons are commercial-only in Canada. What the PMRA actually allows consumers, BC\'s SGAR ban, the US grey-market products to avoid, and the legal Tomcat bromethalin option. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('rat-poison-canada-what-is-legal')

export default function RatPoisonCanadaLegalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to rodenticide law: which rat poisons are PMRA-registered for consumers, why second-generation anticoagulants are commercial-only, BC\'s SGAR restrictions, and the legal alternatives.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Rat Poison Canada — What Is Legal', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Rat Poison Canada — What Is Legal</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Most of the rat poison the internet recommends can&rsquo;t legally be sold to Canadian homeowners. Here&rsquo;s what the PMRA actually allows, what BC has banned, which US products to avoid — and the one registered consumer option worth knowing.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Most rat poison recommended online is not legal for Canadian consumers. Second-generation anticoagulants (brodifacoum, bromadiolone, difethialone) have been commercial-class only since Health Canada&rsquo;s PMRA re-evaluation took full effect in 2013, and British Columbia has banned most uses outright. The main PMRA-registered consumer option is bromethalin in a ready-to-use tamper-resistant station — the Tomcat Rat Killer disposable station — and even then, traps should come first for most homes.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Second-generation anticoagulants (brodifacoum, bromadiolone, difethialone) have been commercial-class only in Canada since 2013 — no legal consumer sale in any province.</li>
              <li>BC made its SGAR restrictions permanent on January 21, 2023 — only licensed applicators serving designated essential services can use them.</li>
              <li>The Tomcat bromethalin disposable bait station is the main PMRA-registered consumer rat poison in Canada; a lethal single feeding typically kills in 24–48 hours.</li>
              <li>Anticoagulant baits take 4–10 days to kill — the main reason poisoned rats so often die inside wall voids.</li>
              <li>BC testing of dead owls has found anticoagulant rodenticide residues in roughly 7 in 10 birds examined.</li>
              <li>US d-CON dropped second-generation anticoagulants from consumer products in 2015 after EPA action — American lists praising the &ldquo;classic formula&rdquo; are a decade out of date.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="rats" />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <h2>What Rat Poison Is Actually Legal in Canada?</h2>
          <p>For homeowners, exactly two families of rodenticide are legal: first-generation anticoagulants (warfarin, chlorophacinone, diphacinone) and bromethalin — and only when sold as ready-to-use, tamper-resistant bait stations. Everything else, including every second-generation anticoagulant that dominates American &ldquo;best rat poison&rdquo; lists, is commercial-class: legal for licensed applicators, illegal for you.</p>
          <p>The dividing line is Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA). Every legal pesticide in Canada carries a PMRA Registration Number on the label — it reads &ldquo;Reg. No. XXXXX P.C.P. Act.&rdquo; No number, not legal. Here is how the actives you&rsquo;ll see recommended online actually shake out:</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm my-6 overflow-x-auto">
            <table className="w-full text-sm">
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
                  { active: 'Bromethalin', products: 'Tomcat Rat Killer / Mouse Killer disposable stations', cls: 'Domestic — ready-to-use stations only', legal: 'Yes — the main consumer option' },
                  { active: 'First-gen anticoagulants (warfarin, chlorophacinone, diphacinone)', products: 'Canadian hardware-store station baits', cls: 'Domestic — tamper-resistant stations only', legal: 'Yes, in enclosed station formats' },
                  { active: 'Cholecalciferol', products: 'Reformulated US d-CON, Selontra', cls: 'Not registered for Canadian consumers', legal: 'No — current US d-CON is not a Canadian domestic product' },
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

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the PMRA-registered consumer option:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="tomcat rat killer disposable station">Tomcat Rat Killer disposable station →</BuyLink>
          </div>

          <TopPick tag={AMZ_TAG}
            label="The Legal Consumer Option"
            name="Tomcat Rat Killer Disposable Bait Station (bromethalin)"
            blurb="The main PMRA-registered consumer rat poison in Canada: a sealed, tamper-resistant station pre-loaded with bromethalin, where a lethal single feeding typically kills in 24–48 hours. It's the right pick for light exterior pressure around a shed or garage — but there's no antidote for bromethalin, so keep it away from pets and children, and reach for traps first for most interior problems."
            search="tomcat rat killer disposable station"
            score={7.4}
            pros={['PMRA-registered for Canadian consumers', 'Sealed, tamper-resistant station', 'Faster than anticoagulants (24–48 hrs)']}
            cons={['No antidote for bromethalin', 'Poisoned rat can die out of reach', 'Traps beat it for most interior jobs']}
          />

          <h2>Why Did Canada Restrict Second-Generation Rat Poisons?</h2>
          <p>Because they are single-feeding lethal and persist in tissue — a combination the PMRA concluded was too dangerous for unsupervised residential use. Its rodenticide re-evaluation set risk-mitigation rules that took full effect in 2013: second-generation anticoagulants (SGARs) became commercial-class only, and every remaining domestic-class rodenticide had to be sold as a ready-to-use, tamper-resistant bait station rather than loose pellets or meal.</p>
          <p>The logic explains the whole Canadian market. A first-generation active like warfarin usually needs several feedings to kill and clears from tissue relatively quickly. Brodifacoum kills from one feeding — but the rat keeps eating for the 4–10 days it takes to die, loading its body with many lethal doses. Whatever eats that rat next — an owl, a hawk, a fox, the neighbour&rsquo;s cat — takes the accumulated dose. Scale that across every backyard in the country and you get chronic contamination of the predators that eat rodents for a living, which is exactly what wildlife testing later confirmed.</p>
          <p>So the loose d-CON pellets your parents bought at the hardware store are gone — removed by regulation, not fashion. What remains on Canadian shelves is deliberately slower, deliberately enclosed, and deliberately harder for a child, dog, or barred owl to get into.</p>

          <h2>What Are BC&rsquo;s SGAR Rules — and Will Other Provinces Follow?</h2>
          <p>British Columbia went further than the federal rules: after an 18-month emergency restriction that began in July 2021, the province made its SGAR ban permanent on January 21, 2023. Second-generation anticoagulants in BC are now limited to licensed applicators serving designated &ldquo;essential services&rdquo; — agriculture, food production, health facilities — inside a documented integrated pest management program. Ordinary businesses lost access entirely; homeowners never had it.</p>
          <p>BC acted on its own wildlife data, and the rest of the country is watching — several Ontario and Quebec municipalities have passed motions urging similar provincial restrictions. Nothing forces other provinces to follow, but North American regulation has moved one direction for fifteen years: away from consumer SGARs. Planning your rodent strategy around poison is planning around a shrinking category.</p>

          <h2>What Can Canadian Consumers Legally Buy?</h2>
          <p>The practical answer for rats is the Tomcat Rat Killer disposable bait station — a sealed, tamper-resistant station pre-loaded with bromethalin bait, PMRA-registered as a domestic-class product, with a matching Mouse Killer version for the smaller-rodent problem. Bromethalin is an acute neurotoxin rather than an anticoagulant: a lethal single feeding typically kills in 24–48 hours instead of the 4–10 days an anticoagulant needs.</p>
          <p>Respect what you&rsquo;re buying. Bromethalin has no antidote — for rats or for dogs — which is exactly why the PMRA only permits it inside sealed stations. Place stations against exterior walls along rodent runways, wear gloves, keep them where pets can&rsquo;t chew the housing, and remove them once feeding stops. Know the format&rsquo;s limits too: a disposable station handles light exterior pressure around a shed or garage; it does not clear an established interior infestation, and a poisoned rat can still die somewhere unreachable. Our <Link href="/blog/mouse-bait-station-canada">bait station guide</Link> covers placement, station types, and when enclosed bait genuinely beats a trap line.</p>
          <p>First-generation anticoagulant station baits — warfarin, chlorophacinone, diphacinone under Canadian hardware brands — are the other legal lane. They&rsquo;re slower and often need multiple feedings, but anticoagulant exposure in a pet has an effective antidote (vitamin K1), which some owners reasonably weigh against bromethalin&rsquo;s speed.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="tomcat rat killer disposable station">Check Tomcat Rat Killer station on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="tomcat mouse killer disposable station">Tomcat Mouse Killer station →</BuyLink>
          </div>

          <h2>Why Is Every US &ldquo;Best Rat Poison&rdquo; List Wrong for Canada?</h2>
          <p>Because almost everything those lists recommend is either commercial-class in Canada or not registered here at all. The US market lets ordinary consumers mail-order commercial rodenticides; Canada does not — and that one difference invalidates the entire genre. Products we will <strong>not</strong> recommend, and that you should not buy from US websites or grey-market resellers:</p>
          <ul>
            <li><strong>Contrac Blox / Contrac All-Weather (bromadiolone)</strong> — the most-recommended bait on US lists. Commercial-class in Canada; consumer use is illegal in every province.</li>
            <li><strong>Final Blox / Talon (brodifacoum)</strong> — single-feeding SGARs, and the active most frequently found in poisoned Canadian owls. Professionals only.</li>
            <li><strong>FirstStrike / Hombre (difethialone)</strong> — same story, professionals only.</li>
            <li><strong>US Tomcat Bait Chunx with bromadiolone</strong> — the American Tomcat line includes SGAR products the Canadian consumer line deliberately does not. Same brand, different law; check the active ingredient, not the logo.</li>
            <li><strong>Current US d-CON (cholecalciferol)</strong> — reformulated for the American market after the EPA forced consumer SGARs off US shelves in 2015; not registered as a Canadian domestic product.</li>
            <li><strong>Any loose pellet, meal, or place-pack bait</strong> — regardless of active. Canadian domestic-class rodenticides must be sold in ready-to-use tamper-resistant stations; loose bait is a red flag by definition.</li>
          </ul>
          <p>The screening rule takes ten seconds: look for &ldquo;Reg. No. ___ P.C.P. Act&rdquo; on the label or listing. Canadian registration number present and the product sold as an enclosed station — legal. Absent — walk away, whatever the reviews say. Importing an unregistered rodenticide is an offence under the Pest Control Products Act, and using a commercial-class product without certification breaks provincial law on top of it.</p>

          <h2>How Bad Is Secondary Poisoning of Owls, Hawks, and Pets?</h2>
          <p>Bad enough that it drove the law you&rsquo;ve just read about. In British Columbia, government-supported testing of dead owls has repeatedly detected anticoagulant rodenticide residues in the majority of birds examined — commonly cited results put it at roughly 7 in 10 owls, with brodifacoum the most frequent active found. Smaller datasets from Ontario wildlife-health surveillance point the same direction for hawks and owls, and researchers generally treat detected residues as an undercount, since sub-lethal exposure doesn&rsquo;t always leave a carcass to test.</p>
          <p>The mechanism is the delay: a rat carrying several lethal doses spends its final days slow, disoriented, and active in daylight — exactly the rodent a great horned owl or red-tailed hawk picks off first. The predator concentrates every dose its prey collected. The same relay reaches pets: veterinary toxicologists consistently rank rodenticides among the most common serious poisoning calls for dogs, through direct bait ingestion and, less often, scavenged poisoned rodents.</p>
          <p>We hedge the exact percentages because sampling methods differ between studies — but no Canadian dataset we&rsquo;ve seen points the other way. Enclosed bromethalin stations reduce the direct-access risk; nothing eliminates the relay risk except not poisoning the rat in the first place.</p>

          <h2>Should You Even Use Poison? Traps First</h2>
          <p>For most Canadian rat and mouse problems, no — a properly deployed trap line beats bait, and it isn&rsquo;t close. Traps kill in seconds instead of days, leave a retrievable carcass instead of a smell behind drywall, carry zero secondary-poisoning risk to owls and pets, and give you the only honest progress metric there is: a body count.</p>
          <p>If bait looked appealing mainly because a trap line demands daily upkeep, there is a middle path worth pricing. A self-resetting CO₂ trap strikes, clears the carcass, and re-arms itself, so it runs unattended for weeks with no rodenticide anywhere in the chain and no secondary poisoning to relay to an owl or a dog. Our <Link href="/blog/goodnature-a24-review-canada">poison-free Goodnature A24 review</Link> covers where that premium is and is not worth paying.</p>
          <p>The playbook, with the deep-dives linked:</p>
          <ul>
            <li><strong>Rats:</strong> heavy-duty snap traps and smart placement — mouse traps physically cannot kill a rat. Start with the <Link href="/blog/best-rat-trap-canada">best rat trap guide</Link>.</li>
            <li><strong>Mice:</strong> a 6–12 trap line of snap traps, or electronic traps for no-touch disposal — see the <Link href="/blog/best-mouse-trap-canada">best mouse trap guide</Link> and our <Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor electronic trap review</Link>.</li>
            <li><strong>Exclusion:</strong> trapping without sealing entry points is a subscription, not a solution — the <Link href="/blog/how-to-get-rid-of-mice-canada">get-rid-of-mice playbook</Link> and <Link href="/blog/how-to-keep-mice-out-of-your-house-winter">winter mouse-proofing guide</Link> cover it step by step.</li>
            <li><strong>Skip the shortcuts:</strong> plug-in ultrasonic devices don&rsquo;t survive contact with the evidence — <Link href="/blog/ultrasonic-pest-repellers-do-they-work">our study-by-study review</Link> explains why.</li>
          </ul>
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
    </>
  )
}
