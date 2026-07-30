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

const SLUG = 'advion-cockroach-gel-bait-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'Advion Cockroach Gel Bait in Canada — The Honest Grey-Market Answer'
const META_TITLE = 'Advion Cockroach Gel Bait Canada: 2026 Legality'

const FAQS = [
  {
    question: 'Can I buy Advion cockroach gel bait in Canada?',
    answer: 'Not the way American forums assume. Advion Cockroach Gel Bait (active: indoxacarb) is a professional-tier Syngenta product, and in Canada pesticide access is governed by Health Canada’s PMRA class system: domestic-class products are for consumers, commercial-class products are for licensed applicators. Marketplace listings that ship Advion to Canadian home addresses are frequently US-labelled stock, and a US EPA registration confers no legal status in Canada. Before buying any listing, check for a Canadian registration number — it reads “Reg. No. XXXXX P.C.P. Act” on the label — and confirm the product class. If you can’t verify both from the actual unit in your hands, you can’t verify the product is legal for you to use.',
  },
  {
    question: 'What is indoxacarb and why do professionals rate it so highly?',
    answer: 'Indoxacarb is an oxadiazine insecticide with a clever trick: it is a “pro-insecticide” that only becomes fully toxic after enzymes inside the insect activate it, which is part of why it can be potent against cockroaches while being less hazardous to mammals gram for gram. It also produces a documented transfer effect — poisoned roaches contaminate others through droppings and shared harbourage, so one feeding can cascade through a colony. That combination is why Advion dominates US pest-control forums. None of that changes the Canadian access question: a great molecule in a product you can’t legally use is still a product you can’t legally use.',
  },
  {
    question: 'Is it illegal to order Advion from a US website or marketplace seller?',
    answer: 'The federal Pest Control Products Act makes it an offence to import, sell, or use a pest control product in Canada that is not registered here, and border officers can seize unregistered pesticides. Separately, using a commercial-class product without provincial applicator certification is an offence under provincial pesticide regulations. We are not a law firm and we can’t assess any individual listing — some products do carry Canadian registrations — but the screening test is simple: no “Reg. No. ___ P.C.P. Act” on the label of the unit you receive, or a commercial-class designation without a licence on your wall, means the legal risk sits with you, not the seller.',
  },
  {
    question: 'What does “grey market” actually mean for a pesticide?',
    answer: 'It means the product exists legally somewhere — just not in the form, channel, or hands it reached you through. Practically, grey-market bait costs you four protections at once: no Canadian label (the label is the legal document that tells you approved uses, rates, and first-aid measures, in both official languages), no PMRA review of the exact formulation you received, no recourse if the product is counterfeit, expired, or repackaged — a documented problem with high-demand baits on marketplaces — and no legal cover if anything goes wrong, because using an unregistered product is itself the offence. You also can’t verify authenticity from a listing photo, which is how counterfeit Advion became a known problem in the US market.',
  },
  {
    question: 'Why can exterminators use cockroach products homeowners can’t?',
    answer: 'Because commercial-class registration assumes a trained, licensed, insured applicator following a label written for professionals: measured placements, restricted-site rules, record-keeping, and integrated pest management around the chemical. Provincial certification exams cover exactly the things that go wrong when potent baits are used casually — contamination of food surfaces, pet exposure, resistance management, bait-averse populations. The PMRA’s position isn’t that homeowners are untrustworthy; it’s that the risk math of stronger formulations only works inside a professional program. That is also the honest answer to “why does the pro’s gel work better” — access, training, and follow-up visits, not magic.',
  },
  {
    question: 'What cockroach baits can Canadian consumers legally buy?',
    answer: 'The domestic-class lane is enclosed bait stations and a handful of registered gels and dusts sold at Canadian retailers: Combat-style bait stations (hydramethylnon), Raid roach bait stations, boric acid powders and pastes, and diatomaceous earth products registered for crawling insects. Every legal option carries a PMRA registration number on the pack. They are slower and less glamorous than professional gel, but bait stations run the same core playbook — delayed-kill bait carried back to the harbourage — and against light-to-moderate German cockroach pressure, a dense, well-placed station deployment plus sanitation genuinely works.',
  },
  {
    question: 'Do Combat and Raid bait stations actually work on German cockroaches?',
    answer: 'Yes, with two conditions: density and sanitation. A single station under the sink is a gesture; an effective deployment is 12 to 24 stations concentrated where the evidence is — under the sink, behind the fridge and stove, along cabinet hinges, near the dishwasher. Hydramethylnon and similar delayed-kill actives let foragers feed and return to the harbourage before dying, which spreads the dose. The catch: bait competes with every crumb and grease film in your kitchen. If sanitation is poor, the bait loses the menu contest, and no bait — professional or consumer — out-performs a deep clean plus bait together.',
  },
  {
    question: 'What is an IGR, and can Canadian homeowners buy one?',
    answer: 'An insect growth regulator (IGR) like hydroprene disrupts cockroach development so nymphs can’t mature into breeding adults — professionals pair it with gel bait to collapse a population’s reproduction while the bait kills the adults. IGR products marketed to US consumers (Gentrol point-source devices, for example) are a category you should not assume is available to Canadian homeowners: check any listing for a Canadian PCP registration number before buying. Plan around an IGR-free toolkit — bait stations, dusts, monitors, sanitation — and accept that this means being more thorough and more patient than a US how-to video suggests.',
  },
  {
    question: 'How long do cockroach bait stations take to work?',
    answer: 'Expect first dead roaches within days and meaningful knockdown over 2 to 4 weeks — delayed-kill baits are slow by design, so foragers survive long enough to carry the dose home. German cockroach egg cases (oöthecae) hatch on their own schedule, so a fresh wave of small nymphs two or three weeks in does not mean the bait failed; it means eggs laid before you started have hatched into a baited kitchen. Keep stations fresh (replace roughly every 3 months, sooner in grease-heavy kitchens), keep sanitation tight, and judge progress with glue monitors, not glimpses.',
  },
  {
    question: 'Does boric acid work on cockroaches?',
    answer: 'Yes — it is one of the oldest verified cockroach actives, and registered boric acid products remain a legitimate domestic-class tool in Canada. Roaches walk through a thin dust film, groom themselves, and ingest it. The operative word is thin: a visible pile repels roaches and does nothing. Puff a barely-there film into cracks, behind kick plates, under appliances, into hinge gaps — dry locations only, since moisture cakes it. It is slower than bait and useless on roaches that never cross the film, which is why it is a complement to a station deployment, not a substitute.',
  },
  {
    question: 'Do cockroach foggers or bug bombs work?',
    answer: 'No — and for German cockroaches they are actively counterproductive. Foggers deposit droplets on open surfaces, but roaches live in cracks, voids, and cabinet seams the fog never penetrates. Worse, the repellent pyrethroid mist scatters survivors deeper into walls and adjoining rooms, splitting one harbourage into several, and it contaminates surfaces where you would otherwise place bait — roaches avoid baits placed over pyrethroid residue. Public-health entomology has been near-unanimous on this for years. Skip the fogger aisle entirely; put the money into stations and monitors.',
  },
  {
    question: 'When should I call a licensed exterminator for cockroaches?',
    answer: 'Escalate when any of these is true: you see roaches in daylight (a classic overcrowding signal), you find them in rooms far from the kitchen, you live in a multi-unit building (roaches travel between units through plumbing walls, so isolated DIY treatment rarely holds), or a month of dense bait stations plus real sanitation has not moved the numbers on your glue monitors. A licensed operator legally brings the professional-tier baits and IGRs this article is about, plus the follow-up schedule that makes them work. See our Canadian pest control cost guide for what professional cockroach work typically runs, so you can sanity-check quotes.',
  },
  {
    question: 'How do I check whether any pesticide is legal to use in Canada?',
    answer: 'One test, ten seconds: find the Canadian registration number on the label — it reads “Reg. No. XXXXX P.C.P. Act” — then confirm the product class printed beside it (domestic means consumers; commercial means licensed applicators only). You can look any registration number up in Health Canada’s public pesticide label database to see the approved uses. No PCP number on the physical label of the unit you bought means it is not registered for use in Canada, no matter how reputable the seller looks or how many five-star reviews the listing has. That single habit screens out essentially the entire grey market.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Can you buy Advion cockroach gel bait in Canada? The honest answer: indoxacarb gel is professional-tier, and marketplace listings sit in a PMRA grey zone. What grey-market really costs you, the PCP-number check, and the legal bait-station toolkit that works.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('advion-cockroach-gel-bait-canada')

export default function AdvionCockroachGelBaitCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to Advion cockroach gel bait legality: the PMRA class system, what grey-market listings actually cost you, the PCP registration-number check, and the compliant bait-station alternatives that work.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Advion Cockroach Gel Bait Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Advion Cockroach Gel Bait Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Every American forum says Advion is the answer to German cockroaches. Here&rsquo;s what those threads never mention: how Canada&rsquo;s PMRA class system actually works, what a grey-market listing costs you in practice, the ten-second label check &mdash; and the legal bait-station toolkit that genuinely works.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Combat roach killing bait stations (12-pack)" search="combat roach killing bait stations" label="Legal consumer pick" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Advion Cockroach Gel Bait (indoxacarb) is a professional-tier product, and marketplace listings shipping it to Canadian consumers sit in a legal grey zone: many are US-labelled stock with no Canadian registration on the unit, and Canada&rsquo;s Pest Control Products Act makes importing or using an unregistered pesticide an offence. The ten-second screen is the label &mdash; look for &ldquo;Reg. No. XXXXX P.C.P. Act&rdquo; and a domestic-class designation. For most Canadian homes, the compliant path that actually works is a dense deployment of registered bait stations plus sanitation and glue monitors.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Canada splits pesticides into domestic class (consumers) and commercial class (licensed applicators) &mdash; a US EPA registration means nothing here.</li>
              <li>Grey-market bait costs you four things: a Canadian label, PMRA review of what you actually received, counterfeit recourse, and legal cover.</li>
              <li>Counterfeit and repackaged Advion is a documented problem on marketplaces &mdash; you cannot verify authenticity from a listing photo.</li>
              <li>Registered consumer bait stations (Combat-style hydramethylnon, Raid baits) run the same delayed-kill playbook and work against light-to-moderate infestations.</li>
              <li>Plan IGR-free: don&rsquo;t assume growth-regulator products marketed to US consumers are available here &mdash; check the PCP number before buying anything.</li>
              <li>Roaches in daylight, roaches far from the kitchen, or any multi-unit building = call a licensed exterminator, who can legally use the professional-tier baits.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="cockroaches" />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Can You Buy Advion Cockroach Gel Bait in Canada?</h2>
          <p>Here is the honest version of the answer, which is longer than the one Reddit gives. Advion Cockroach Gel Bait is a Syngenta product built around indoxacarb, and in the United States &mdash; where consumers can freely mail-order professional pesticides &mdash; it has earned its reputation as the default answer to German cockroaches. In Canada, the question is not &ldquo;is Advion good?&rdquo; (it is) but &ldquo;are you legally allowed to buy and use the unit a marketplace seller will ship you?&rdquo; &mdash; and that is a much murkier question than the listings suggest.</p>
          <p>Canada regulates every pesticide through Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA), which assigns each registered product a class: <strong>domestic</strong> products are for ordinary consumers, <strong>commercial</strong> products are for licensed applicators. Professional cockroach gels live in the commercial tier. Meanwhile, a large share of the Advion sold through cross-border sellers and marketplace listings is US-labelled stock &mdash; formulated, registered, and labelled under a US EPA registration that confers exactly zero legal status in Canada. Under the federal Pest Control Products Act, importing, selling, or using a pest control product that is not registered in Canada is an offence, and using a commercial-class product without provincial certification is a separate offence on top.</p>
          <p>We want to be careful and fair here: this is not an accusation aimed at any product or seller, and some products in this space do carry Canadian registrations. The problem is that <em>you cannot tell which from a product photo</em>. The only thing that settles it is the label on the physical unit in your hands: every pesticide legal to use in Canada carries a Canadian registration number that reads <strong>&ldquo;Reg. No. XXXXX P.C.P. Act&rdquo;</strong>, plus a class designation. No PCP number, or a commercial designation without a licence on your wall &mdash; the legal risk is yours, not the seller&rsquo;s. That one ten-second habit is the entire screening system, and it works on every pesticide category, not just roach gel &mdash; it is the same check we teach in our <Link href="/blog/rat-poison-canada-what-is-legal">rat poison legality guide</Link>, where the grey market is even bigger. Syngenta&rsquo;s ant version of this gel lands Canadian buyers in exactly the same spot, which is why <Link href="/blog/how-to-get-rid-of-ants-canada">our Canadian ant guide argues for the shelf-legal bait station instead</Link>.</p>

          <h2>What &ldquo;Grey Market&rdquo; Actually Costs You</h2>
          <p>&ldquo;Grey market&rdquo; sounds abstract until you list what you give up. A pesticide bought outside its legal channel costs you four protections simultaneously:</p>
          <ul>
            <li><strong>The label.</strong> A Canadian pesticide label is a legal document: approved use sites, application rates, re-entry guidance, first-aid measures, and disposal instructions, reviewed by the PMRA and printed in both official languages. A US label was written for US law and US poison-control infrastructure. If a child or pet gets into grey-market gel, the document your emergency line needs does not match the product in your kitchen.</li>
            <li><strong>Formulation review.</strong> Registration means the PMRA evaluated the exact formulation sold here. A grey-market unit was reviewed by nobody in your jurisdiction &mdash; and you have no way of knowing whether what is in the syringe matches what is on the box.</li>
            <li><strong>Counterfeit recourse.</strong> High-demand baits are a known counterfeiting target; fake and repackaged Advion is a documented problem on marketplaces even for American buyers. Buy a dud through an unauthorized channel and there is no manufacturer standing behind it &mdash; Syngenta&rsquo;s own guidance is to buy through authorized distributors precisely because of this.</li>
            <li><strong>Legal cover.</strong> This is the quiet one. If anything goes wrong &mdash; a pet exposure, a tenant complaint, a dispute with a landlord or condo board &mdash; the fact that the product was unregistered or commercial-class is not a footnote; using it was itself the violation. You start every downstream conversation on the wrong side of the rules.</li>
          </ul>
          <p>None of this requires believing regulators are always right or that indoxacarb is dangerous on your kitchen counter. It just requires noticing that the grey market&rsquo;s entire price advantage comes from skipping the parts of the system that exist to protect the buyer.</p>

          <h2>Why the Pro&rsquo;s Gel Works &mdash; and Why the Pro Comes With It</h2>
          <p>The uncomfortable truth behind Advion&rsquo;s legend is that the molecule is only half the story. Indoxacarb is genuinely clever &mdash; a &ldquo;pro-insecticide&rdquo; activated by enzymes inside the insect, with a documented secondary-transfer effect where poisoned roaches contaminate nest-mates through droppings and shared harbourage. But the results American renters rave about also come from what surrounds the syringe in professional hands: crack-and-crevice placement technique, follow-up visits on a schedule matched to the German cockroach breeding cycle, rotation between bait actives to defeat aversion and resistance, and pairing bait with an insect growth regulator so nymphs never mature into breeding adults.</p>
          <p>That package is what commercial-class registration assumes. Provincial applicator certification tests exactly the failure modes of casual use &mdash; baiting over repellent residues, contaminating food surfaces, mis-dosing, ignoring sanitation &mdash; and a licensed operator carries insurance and record-keeping obligations behind every placement. So the honest reframe for a Canadian homeowner is this: you are not locked out of good cockroach control. You are locked out of <em>one tier of tools</em>, and the licensed professionals who can use that tier are a phone call away when the situation warrants them. What you can do yourself, legally and effectively, is the tier below &mdash; and against light-to-moderate infestations it is a real tier, not a consolation prize.</p>

          <h2>The Compliant Toolkit: What Canadian Consumers Can Actually Use</h2>
          <p>Domestic-class cockroach control in Canada runs on four legs: enclosed bait stations, registered dusts (boric acid and diatomaceous earth), glue monitors, and sanitation. Here is how the products the internet recommends map onto Canadian reality &mdash; with price checks only where a consumer purchase makes sense. For everything in the table, the standing rule applies: confirm the PCP registration number on the pack you actually receive.</p>

          <AffiliateDisclosure />
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product / category</th>
                  <th className="px-4 py-3 text-left">Status for Canadian consumers</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Advion Cockroach Gel<br /><span className="font-normal text-xs text-gray-500">indoxacarb &middot; Syngenta</span></td>
                  <td className="px-4 py-3 text-gray-700">Professional-tier; marketplace listings often US-labelled stock &mdash; verify a Canadian PCP number and class on the unit itself</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Grey zone</strong> &mdash; the subject of this article</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Not recommended for consumer purchase</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Maxforce-type pro gels<br /><span className="font-normal text-xs text-gray-500">fipronil &amp; similar actives</span></td>
                  <td className="px-4 py-3 text-gray-700">Commercial-class territory &mdash; the tools your licensed exterminator brings</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Professionals only</strong></td>
                  <td className="px-4 py-3 text-xs text-gray-400">Hire the licence, not the syringe</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">IGR devices<br /><span className="font-normal text-xs text-gray-500">hydroprene point-sources</span></td>
                  <td className="px-4 py-3 text-gray-700">A US-consumer staple you should not assume is available here &mdash; check any listing for a Canadian PCP number first</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Verify before buying</strong></td>
                  <td className="px-4 py-3 text-xs text-gray-400">Plan your program IGR-free</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Combat-style bait stations<br /><span className="font-normal text-xs text-gray-500">hydramethylnon, enclosed</span></td>
                  <td className="px-4 py-3 text-gray-700">Consumer bait stations widely stocked at Canadian retailers &mdash; delayed-kill bait in a child-resistant housing</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">The legal workhorse</strong></td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="combat roach killing bait stations" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Raid roach baits<br /><span className="font-normal text-xs text-gray-500">enclosed consumer stations</span></td>
                  <td className="px-4 py-3 text-gray-700">The other mainstream consumer station line on Canadian shelves &mdash; useful for rotating bait actives</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Solid second bait</strong></td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="raid max roach bait stations" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Boric acid powder<br /><span className="font-normal text-xs text-gray-500">registered dust products</span></td>
                  <td className="px-4 py-3 text-gray-700">One of the oldest verified roach actives; thin films in cracks and voids, dry areas only</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Cheap force multiplier</strong></td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="boric acid roach powder" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Diatomaceous earth<br /><span className="font-normal text-xs text-gray-500">crawling-insect registrations</span></td>
                  <td className="px-4 py-3 text-gray-700">Mechanical desiccant dust with Canadian domestic registrations for crawling insects</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Void &amp; perimeter dust</strong></td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="diatomaceous earth crawling insect killer" block>Check price →</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Glue monitor traps<br /><span className="font-normal text-xs text-gray-500">sticky monitors</span></td>
                  <td className="px-4 py-3 text-gray-700">Devices, not pesticides &mdash; no PMRA registration required at all; your progress meter</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Zero-paperwork essential</strong></td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="cockroach glue traps monitor" block>Check price →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>

          <TopPick tag={AMZ_TAG}
            label="Best Compliant Bait System"
            name="Combat Roach Killing Bait Stations (large 12-pack)"
            blurb="The legal Canadian workhorse: enclosed, child-resistant stations pre-loaded with a delayed-kill hydramethylnon bait, so foragers feed and carry the dose back to the harbourage before dying — the same core playbook as professional gel, in the format the consumer class allows. Deploy them densely (12–24 stations for a real kitchen problem, not 4), pair with glue monitors to track progress, and check the PCP registration number on the pack you buy. Against light-to-moderate German cockroach pressure with sanitation handled, this plus patience genuinely works."
            search="combat roach killing bait stations"
            score={8.2}
            pros={['Enclosed, child-resistant format — the class Canada permits', 'Delayed-kill bait exploits the same transfer effect as pro gels', 'Cheap enough to deploy at the density that actually works']}
            cons={['Slower and less potent than professional-tier gel', 'Loses the menu contest in an unsanitized kitchen', 'No IGR partner — expect a longer campaign']}
          />

          <h2>How to Run the Legal Playbook (IGR-Free, Eyes Open)</h2>
          <p>Because the consumer tier lacks the growth-regulator leg professionals lean on, your program has to compensate with density, hygiene, and time. The honest expectations, step by step:</p>
          <ul>
            <li><strong>Monitor first.</strong> Place glue monitors under the sink, behind the fridge and stove, and along cabinet hinge lines for a few nights. They tell you where the harbourages are and give you a baseline number &mdash; the only honest progress metric you will have. We compare the monitor and station formats worth buying here in <Link href="/blog/best-roach-traps-canada">our roach trap guide for Canada</Link>.</li>
            <li><strong>Bait densely, exactly where the monitors say.</strong> 12&ndash;24 stations for a typical kitchen infestation, clustered within a metre of the evidence. German cockroaches forage short distances; a station across the room might as well be in another postal code.</li>
            <li><strong>Starve the competition.</strong> Delayed-kill bait only wins if it is the best food in the room. Degrease the stovetop, empty the toaster tray, dry the sink at night, lid the compost bin. Sanitation is not a virtue signal here &mdash; it is the mechanism.</li>
            <li><strong>Dust the places bait can&rsquo;t reach.</strong> A barely-visible film of boric acid or diatomaceous earth into wall voids, under kick plates, and behind outlet covers (power off) catches the roaches that never visit a station. Thin films work; visible piles repel.</li>
            <li><strong>Never spray over your bait.</strong> Repellent aerosols and foggers contaminate baiting surfaces and scatter the colony into new rooms. If you feel the urge to fog, re-read the FAQ below and put the money into more stations.</li>
            <li><strong>Expect a nymph wave, and re-judge at 4 weeks.</strong> Egg cases laid before you started will hatch on schedule; small roaches at week three are not failure. Falling monitor counts by week four are success. Flat counts are your signal to escalate.</li>
          </ul>
          <p>The full room-by-room campaign &mdash; including apartment-specific tactics and what to do about neighbouring units &mdash; lives in our <Link href="/blog/how-to-get-rid-of-cockroaches-canada">complete guide to getting rid of cockroaches in Canada</Link>; this page is the legality-and-products chapter of that playbook.</p>

          <h2>Cockroach Bait in Canada &mdash; Key Facts</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden my-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Advion status', 'Professional-tier indoxacarb gel; marketplace listings are a grey zone — verify the label'],
                  ['The legality test', 'Look for "Reg. No. XXXXX P.C.P. Act" + a domestic-class designation on the unit'],
                  ['Governing law', 'Federal Pest Control Products Act + provincial applicator regulations'],
                  ['Grey-market cost', 'No Canadian label, no formulation review, no counterfeit recourse, no legal cover'],
                  ['Counterfeit risk', 'Documented for high-demand baits on marketplaces — unverifiable from photos'],
                  ['Best legal system', 'Enclosed consumer bait stations (hydramethylnon and similar), deployed densely'],
                  ['Station density', '12–24 stations for a real kitchen infestation, clustered on the evidence'],
                  ['Timeline', 'First kills in days; judge the campaign at 4 weeks on monitor counts'],
                  ['IGR access', 'Do not assume US-consumer IGR products are available here — check PCP numbers'],
                  ['Foggers', 'Counterproductive — scatter the colony and contaminate baiting surfaces'],
                  ['Monitors', 'Glue traps are devices — no registration needed; your progress meter'],
                  ['Call a pro when', 'Daylight sightings, spread beyond the kitchen, any multi-unit building, or flat counts at 4 weeks'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>When the Right Answer Is a Licence, Not a Listing</h2>
          <p>There is a threshold past which the consumer tier &mdash; used perfectly &mdash; will not win, and recognizing it early saves months. Daylight sightings mean the harbourages are overcrowded. Roaches in bedrooms and bathrooms mean the population has expanded beyond one resource zone. And any infestation in a multi-unit building is structurally a building problem: German cockroaches commute between units through plumbing chases and shared walls, so a single tenant&rsquo;s bait stations are bailing a boat with the drain open. In Ontario, landlords generally carry responsibility for pest treatment in rentals &mdash; document what you see and put the request in writing.</p>
          <p>A licensed exterminator is also, quite literally, the legal route to everything this article says you should not grey-market: the professional gels, the IGR pairing, and the follow-up schedule that makes them perform the way the forums promise. Our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> covers what professional cockroach treatment typically runs so you can budget and compare quotes with a straight face. And if your kitchen problem turns out to be flies rather than roaches &mdash; it happens more than you would think with drain-breeding insects &mdash; start at the <Link href="/blog/how-to-get-rid-of-fruit-flies-canada">fruit fly guide</Link> instead; the moisture-loving traffic in cabinets might also point you to our <Link href="/blog/how-to-get-rid-of-silverfish-canada">silverfish guide</Link>.</p>
          <p>One last shopping note, since it is the other half of the same grey-market problem: aerosols are the category Canadian buyers reach for when bait feels too slow, and most of that spending is wasted or actively counterproductive. What a can is genuinely good for &mdash; and the registered products worth owning &mdash; is laid out in <Link href="/blog/best-cockroach-spray-canada">our review of cockroach sprays sold in Canada</Link>.</p>

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
            <li><Link href="/blog/how-to-get-rid-of-cockroaches-canada">How to Get Rid of Cockroaches in Canada &mdash; Full Playbook</Link></li>
            <li><Link href="/blog/rat-poison-canada-what-is-legal">Rat Poison in Canada &mdash; What Is Actually Legal</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-fruit-flies-canada">How to Get Rid of Fruit Flies in Canada</Link></li>
            <li><Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy Indoor Insect Trap Review &mdash; Canada</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada &mdash; What Professionals Charge</Link></li>
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
