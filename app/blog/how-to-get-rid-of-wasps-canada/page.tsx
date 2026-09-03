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
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'how-to-get-rid-of-wasps-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'How to Get Rid of Wasps in Canada — Identify, Treat, Prevent (2026)'
const META_TITLE = 'Get Rid of Wasps Canada: ID 3 Types, Find Nest'

const FAQS = [
  {
    question: 'How do I get rid of wasps in Canada?',
    answer: 'Work in this order: identify the species (paper wasp, yellowjacket, or bald-faced hornet — each nests differently), locate the actual nest by watching flight lines at dawn or dusk, then match the treatment to the nest. Small, exposed paper wasp nests under 10 cm can be treated DIY at night with a PMRA-registered foaming wasp spray. Ground yellowjacket nests are treatable but riskier. Aerial bald-faced hornet nests and any nest inside a wall void, soffit, or attic should go to a licensed local exterminator. Alongside nest treatment, run baited traps like the RESCUE! WHY trap 6+ metres from your seating area, and in fall seal the entry gaps that let next spring’s queens in.',
  },
  {
    question: 'What is the difference between a wasp, a yellowjacket, and a hornet in Canada?',
    answer: 'They are all wasps — the names describe groups. Paper wasps (Polistes species) are slender with long dangling legs and build small, open, umbrella-shaped combs where you can see the cells. Yellowjackets (Vespula species) are stockier, boldly yellow-and-black, and build enclosed paper nests underground, in wall voids, or in dense shrubs — colonies can reach several thousand workers by late August. The bald-faced hornet is technically an aerial yellowjacket: black and ivory-white, building the classic grey football-shaped nest hanging in a tree or under an eave. True Old World hornets are not established in Canada — the northern giant hornet was declared eradicated from BC in late 2024.',
  },
  {
    question: 'When is it safe to remove a wasp nest myself?',
    answer: 'DIY is reasonable when all of these are true: the nest is exposed and visible (not inside a wall, soffit, or attic), it is smaller than roughly a softball, it is at or below head height so you are not spraying overhead from a ladder, you can retreat 5+ metres in a straight line, and nobody in the household has a known sting allergy. That describes most early-season paper wasp nests. A grapefruit-sized or larger yellowjacket or bald-faced hornet nest in August can hold hundreds to thousands of defenders that respond in seconds — that is professional territory, and a local pest control company will typically handle it in one visit.',
  },
  {
    question: 'Why should wasp nests be treated at night?',
    answer: 'Three reasons. First, the whole colony is home after dark — treat at 2 p.m. and hundreds of foragers return to an empty nest and linger, agitated, for days. Second, wasps are far less active in the dark and in cooler temperatures, so the defensive response is slower. Third, wasps orient poorly toward light sources at night, and they key on white light — so use a flashlight with a red filter or cover the lens with red cellophane, approach quietly, aim the spray at the nest opening, and leave immediately. Late dusk (about an hour after sunset) or pre-dawn are the two windows. Never stand directly beneath an aerial nest while spraying.',
  },
  {
    question: 'Do wasp traps actually work?',
    answer: 'Yes, with two caveats. Baited traps like the RESCUE! WHY trap and the RESCUE! Yellowjacket trap reliably catch yellowjackets, bald-faced hornets, and (in the WHY trap’s case) paper wasps — but a trap manages foraging pressure around your patio; it will not eliminate an established nest, which produces new workers faster than any trap catches them. The two rules that make traps pay off: hang them early (mid-April to May in most of Canada, when every queen caught is a whole colony that never gets built) and hang them 6 or more metres away from where people sit, because a trap is an attractant — placed on the patio table it pulls wasps toward you.',
  },
  {
    question: 'What wasp sprays are legal in Canada?',
    answer: 'Look for a Pest Control Products (PCP) registration number on the can — that is the marker of a Health Canada / PMRA-registered domestic-class product. Legitimate Canadian options include Raid Max Wasp & Hornet Killer, Ortho Home Defense Hornet & Wasp Killer foam, Wilson WaspOut, and KONK aerosols, all of which throw a 2–4 metre jet or foam. What you should not use: US-label products that cross the border through marketplace sellers — US Spectracide formulations, professional Wasp-Freeze aerosols, carbaryl (Sevin) dust, and deltamethrin dusts like Delta Dust are either not registered for Canadian residential use or restricted to licensed commercial applicators here. No PCP number on the label means it is not legal to use in Canada.',
  },
  {
    question: 'How do I find a wasp nest in my yard?',
    answer: 'Watch flight lines. In early morning or late afternoon, stand still and track where wasps fly in a straight, purposeful line — foragers commute directly between food and the nest. Follow the line to a repeated entry point: a gap under siding, a soffit corner, a hole in the lawn or at the base of a shrub, or a visible grey paper structure. A steady stream of insects entering and leaving one specific spot every few seconds is the nest entrance. For suspected wall-void nests, listen at the interior wall in the evening — a large colony makes an audible papery rustle. Mark the location by day, treat (or call a professional) after dark.',
  },
  {
    question: 'Should I block the entrance of a wasp nest in my wall?',
    answer: 'No — this is the single most damaging DIY mistake with wasps. If you seal the exterior entry of a wall-void or soffit nest, the trapped colony does not die quietly: yellowjackets chew through drywall and emerge inside your house, sometimes by the hundreds. Spraying a can of aerosol into the exterior hole is nearly as bad — it rarely reaches the nest body, which can be metres from the opening, and it drives the colony deeper or indoors. Wall-void nests need injected insecticidal dust applied by a licensed exterminator with the right equipment. This is the clearest “hire a professional” line in wasp control.',
  },
  {
    question: 'When do wasps die off in Canada?',
    answer: 'Every wasp colony in Canada dies with the first hard frosts — typically October in most provinces, into November in the mildest parts of BC and southern Ontario. Workers, males, and the old queen all die; only newly mated queens survive, leaving the nest in fall to overwinter alone under bark, in woodpiles, or in attic and shed gaps. Old nests are never reused. That is why a nest discovered in late September is often not worth treating — the colony is weeks from natural death — and why fall exclusion (sealing gaps before queens tuck in) and spring queen trapping are the two highest-leverage prevention moves on the calendar.',
  },
  {
    question: 'How do I keep wasps away from my deck and BBQ?',
    answer: 'Late-summer patio wasps are almost always yellowjacket foragers scavenging protein and sugar, so deny both: keep food and drinks covered, use lidded cups (a wasp inside a pop can is the classic late-August sting), rinse recycling, keep garbage lids tight, and pick up fallen fruit from any fruit trees. Then intercept: hang a baited trap or two 6+ metres downwind of the seating area to pull foragers away. Decoy paper nests are a popular hack — territorial paper wasps sometimes avoid an area that appears claimed — but evidence is mixed and they do nothing against ground-nesting yellowjackets, so treat decoys as a cheap maybe, not a plan.',
  },
  {
    question: 'What should I do if I am allergic to wasp stings?',
    answer: 'Do not attempt any DIY nest treatment — full stop. A person with a known systemic sting allergy should not be the one holding the spray can, even for a small paper wasp nest, because a defensive response of just two or three stings can trigger anaphylaxis. Hire a local licensed exterminator for any nest on the property, keep your epinephrine auto-injector current and accessible outdoors, and consider asking an allergist about venom immunotherapy, which is highly effective for yellowjacket and hornet sensitivity. Yellowjackets can sting repeatedly (they do not lose their stinger), which makes multiple stings the norm rather than the exception in a defensive attack.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'The complete Canadian wasp playbook: identify paper wasps vs yellowjackets vs bald-faced hornets, find the nest, know when DIY is safe vs when to hire, night treatment rules, trap strategy, and PMRA-legal sprays. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('how-to-get-rid-of-wasps-canada')

export default function HowToGetRidOfWaspsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to wasp control: species identification, nest location, DIY vs professional treatment, night treatment rules, trap strategy, and PMRA-legal product context.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Wasps Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Get Rid of Wasps Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The full Canadian playbook: identify which wasp you actually have, find the nest, know when DIY is safe and when to hire an exterminator, treat at night the right way, and set traps where they help instead of hurt.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="RESCUE! WHY Trap (wasps, hornets & yellowjackets)" asin="B00BPTN6YC" search="rescue why trap" label="Best all-round trap" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of wasps in Canada: identify the species first (paper wasp, yellowjacket, or bald-faced hornet — each nests differently), follow flight lines to the nest, treat small exposed nests yourself at night with a PMRA-registered foam spray, and hire a licensed local exterminator for aerial hornet nests and anything inside a wall void. Run baited traps like the RESCUE! WHY trap 6+ metres from your seating area to manage foragers.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Paper wasps build small open combs under eaves; yellowjackets nest underground and in wall voids; bald-faced hornets build the grey football nest in trees.</li>
              <li>DIY is reasonable for exposed nests smaller than a softball at head height or below — never for wall-void or large aerial nests.</li>
              <li>Treat only after dark, when the whole colony is home and sluggish — use a red-filtered flashlight, never white light.</li>
              <li>Never seal a wall-void nest entrance: trapped yellowjackets chew through drywall and emerge inside the house.</li>
              <li>Hang traps in mid-April to catch queens — every spring queen caught is an entire summer colony that never gets built.</li>
              <li>Only use sprays with a PCP registration number; grey-market US products like Sevin dust are not legal for Canadian residential use.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="wasps" />
        </div>
      </section>

      <section className="bg-white px-4 py-2">
        <div className="max-w-4xl mx-auto">
          <TopPick tag={AMZ_TAG}
            label="Our Top Trap Pick"
            name="RESCUE! WHY Trap (Wasps, Hornets & Yellowjackets)"
            blurb="The one trap that covers all three wasp groups Canadians actually deal with. Its dual-chamber design and multi-attractant lure catch paper wasps, bald-faced hornets, and yellowjackets in a single unit, each lure refill runs about two weeks, and it is reusable season after season. Hang it 6+ metres from your patio starting in mid-April to intercept spring queens. Reasonably priced for a multi-season tool — full teardown in our dedicated review below."
            asin="B00BPTN6YC"
            search="rescue why trap"
            score={8.7}
            pros={['Catches all three wasp groups, not just yellowjackets', 'Reusable for years; only the lure is consumable', 'Spring deployment intercepts colony-founding queens']}
            cons={['Manages foragers — it will not eliminate an established nest', 'Lure refills are an ongoing small cost']}
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Step 1: Identify Which Wasp You Actually Have</h2>
          <p>Every wasp problem in Canada comes down to one of three insects, and the correct treatment is different for each — which is why identification comes before anything else. Misread a ground yellowjacket colony as &ldquo;a few wasps near the flower bed&rdquo; and you can walk a lawn mower straight over a nest of two thousand defenders.</p>
          <p><strong>Paper wasps</strong> (Polistes species) are the slender ones with long legs that dangle in flight. Their nest is the small, open, umbrella-shaped comb — you can see the hexagonal cells from below — tucked under eaves, deck railings, mailboxes, and play structures. Colonies stay small, usually 15 to 200 wasps, and paper wasps are the least aggressive of the three: away from the nest they almost never sting.</p>
          <p><strong>Yellowjackets</strong> (Vespula species — the German and common yellowjacket in the east, with the western yellowjacket on the prairies and in BC) are stockier, boldly yellow-and-black, and fly with legs tucked. They build <em>enclosed</em> paper nests you usually cannot see: underground in old rodent burrows, inside wall voids and soffits, or buried in dense hedges. Colonies explode through summer and can hold 1,000 to 4,000 workers by late August — which is also when yellowjackets switch to scavenging your BBQ, garbage, and pop cans. These are Canada&rsquo;s late-summer patio menace, and the ground-nesting variety gets its own dedicated playbook in our <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground wasp guide</Link>.</p>
          <p><strong>Bald-faced hornets</strong> (Dolichovespula maculata) are not true hornets at all — they are aerial yellowjackets, black with ivory-white face markings. They build the iconic grey, football-shaped paper nest hanging from a tree branch, shrub, or eave, growing to basketball size by August with 100 to 400 workers inside. They defend a roughly 2-metre radius around the nest fiercely, and they can spray venom at the eyes of a perceived attacker. One reassurance for anxious searchers: the northern giant hornet (the so-called &ldquo;murder hornet&rdquo;) was declared eradicated from British Columbia in December 2024 and is not established anywhere in Canada.</p>

          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm my-6 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Species</th>
                  <th className="px-4 py-3 text-left">Look</th>
                  <th className="px-4 py-3 text-left">Nest</th>
                  <th className="px-4 py-3 text-left">Colony size</th>
                  <th className="px-4 py-3 text-left">Aggression</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sp: 'Paper wasp', look: 'Slender, long dangling legs, brownish-yellow', nest: 'Open umbrella comb, visible cells — eaves, railings', size: '15–200', agg: 'Low away from nest' },
                  { sp: 'Yellowjacket', look: 'Stocky, bold yellow-and-black, legs tucked in flight', nest: 'Enclosed & hidden — ground, wall voids, soffits, hedges', size: '1,000–4,000 by August', agg: 'High; scavenges food in late summer' },
                  { sp: 'Bald-faced hornet', look: 'Black with ivory-white face and markings', nest: 'Grey football-shaped aerial nest in trees, shrubs, eaves', size: '100–400', agg: 'Very high within ~2 m of nest' },
                ].map(({ sp, look, nest, size, agg }) => (
                  <tr key={sp} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-bold text-brand-800">{sp}</td>
                    <td className="px-4 py-3 text-gray-700">{look}</td>
                    <td className="px-4 py-3 text-gray-700">{nest}</td>
                    <td className="px-4 py-3 text-gray-700">{size}</td>
                    <td className="px-4 py-3 text-gray-700">{agg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Step 2: Find the Nest (Follow the Flight Lines)</h2>
          <p>Killing foragers on the patio does nothing — a colony replaces them within hours. Control means finding the nest, and the technique is the same one exterminators use: <strong>flight-line tracking</strong>. In early morning or late afternoon, stand still where you see wasp traffic and watch for insects flying in a straight, purposeful line rather than meandering between flowers. Foragers commute directly to and from the nest. Follow the line — you may need to reposition two or three times — until you find a spot where wasps enter and exit every few seconds: a hole in the lawn, a gap under the siding, a soffit corner, or a visible grey paper structure in a shrub.</p>
          <p>For suspected wall-void nests, put your ear to the interior wall in the evening: a mature yellowjacket colony makes an audible dry, papery rustle. Mark the entrance location during daylight (a small stake or chalk mark), because you will be coming back in the dark — and everything looks different by flashlight.</p>

          <h2>Step 3: DIY or Hire? The Honest Decision Line</h2>
          <p>This is the question that matters most, and the honest answer is that plenty of Canadian wasp jobs are <em>not</em> DIY jobs. Here is the line we would draw for our own houses:</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Situation</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                  <th className="px-4 py-3 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { s: 'Exposed paper wasp comb, smaller than a softball, head height or below', v: 'DIY at night', w: 'Small colony, open target, easy retreat path' },
                  { s: 'Ground yellowjacket nest with a single visible entrance', v: 'DIY possible — with caution', w: 'Treatable at night, but colonies are large; see the ground wasp guide' },
                  { s: 'Grey football (bald-faced hornet) nest, any size above head height', v: 'Hire a local exterminator', w: 'Hundreds of fast defenders, ladder work, venom-spraying species' },
                  { s: 'Nest inside a wall void, soffit, or attic', v: 'Hire — always', w: 'Aerosols cannot reach the nest body; sealing drives wasps indoors' },
                  { s: 'Anyone in the household has a sting allergy', v: 'Hire — no exceptions', w: 'Two or three defensive stings can mean anaphylaxis' },
                ].map(({ s, v, w }) => (
                  <tr key={s} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 text-gray-800">{s}</td>
                    <td className="px-4 py-3 font-bold text-brand-800 whitespace-nowrap">{v}</td>
                    <td className="px-4 py-3 text-gray-700">{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Two of those rows deserve emphasis. <strong>Aerial bald-faced hornet nests</strong> combine three risk multipliers — a large fast-response colony, work at height, and a species that aims venom at eyes — and a licensed pro with a bee suit and an extension pole handles the whole thing in one short visit. <strong>Wall-void nests</strong> are worse: the nest body can sit metres from the exterior opening, so a can of spray into the hole accomplishes nothing except enraging the colony, and sealing the entrance sends yellowjackets chewing through your drywall into the living room. Professionals treat voids with injected insecticidal dust that workers carry into the nest — equipment and product homeowners cannot buy here. For what professional wasp work typically costs across Canada, see our <Link href="/pest-control-cost-canada">pest control cost guide</Link>. One insect that does not belong on the list at all is the carpenter bee: it bores galleries into bare softwood rather than building paper nests, so <Link href="/blog/how-to-get-rid-of-carpenter-bees-canada" className="text-brand-700 underline">the treat-plug-paint sequence for carpenter bees</Link> is a woodwork job rather than a nest-removal one.</p>

          <h2>The Night Treatment Rules (If You Do It Yourself)</h2>
          <p>Every DIY nest treatment happens after dark. Not because it is dramatic — because it is the only time the treatment actually works. During the day, most of the colony is out foraging; kill the nest at 2 p.m. and hundreds of returning workers spend days orbiting the site, agitated and stingy. After dark the entire colony is home, the air is cooler, and wasps are sluggish and slow to mount a defence.</p>
          <ul>
            <li><strong>Timing:</strong> a good hour after sunset, or pre-dawn. In a Canadian July that means 10 p.m. or later.</li>
            <li><strong>Light discipline:</strong> wasps orient toward white light. Cover your flashlight lens with red cellophane or use a headlamp&rsquo;s red mode, and never hold the light directly in front of your body.</li>
            <li><strong>Dress:</strong> long sleeves, long pants, closed shoes, snug cuffs. No perfume or scented products.</li>
            <li><strong>Approach:</strong> quiet and slow, from the side — never directly beneath an aerial nest, because disturbed wasps drop before they fly.</li>
            <li><strong>Application:</strong> soak the nest opening first, then the nest body, using a registered foaming jet spray from the full 2&ndash;4 m the can allows. Foam matters — it expands into the entrance and traps defenders inside. Our <Link href="/blog/best-wasp-nest-spray-canada">wasp nest spray guide</Link> compares the Canadian-registered options.</li>
            <li><strong>Exit:</strong> walk away immediately along a pre-planned, obstacle-free retreat path. Do not stand and admire your work.</li>
            <li><strong>Next day:</strong> confirm zero activity before knocking the nest down. If wasps persist, re-treat the following night — never in daylight.</li>
          </ul>
          <p>One seasonal note that saves money: colonies discovered in late September are weeks from natural death. Every Canadian wasp colony dies with the first hard frosts, and old nests are never reused — only new queens survive winter, and they start from scratch elsewhere. A late-fall nest in an out-of-the-way corner can often simply be left to die.</p>


          <h2>Trap Strategy: The Part Most People Get Backwards</h2>
          <p>Traps are the most misused tool in wasp control, because the two things that make them work — timing and placement — are printed nowhere on the box. A trap does not eliminate a nest; an established colony produces new workers faster than any trap catches them. What traps do brilliantly is <em>intercept</em>: spring queens before they found colonies, and late-summer foragers before they reach your table.</p>
          <p><strong>Rule one: hang traps in mid-April to May.</strong> Overwintered queens emerge with the first warm days, and each one caught is an entire colony — potentially thousands of late-summer wasps — that never gets built. Spring trapping is the single highest-leverage move on the wasp calendar, and almost nobody does it.</p>
          <p><strong>Rule two: 6+ metres from where people sit.</strong> A baited trap is an attractant. Hung on the patio umbrella, it pulls every forager in the neighbourhood toward your lunch. Hung at the fence line downwind, it pulls them away. Distance is the entire difference between a trap that helps and a trap that makes things worse.</p>
          <p>Which trap? The RESCUE! WHY trap is our all-rounder because its lure attracts all three groups — paper wasps included, which most heptyl-butyrate yellowjacket lures ignore. We tore it down component by component in our <Link href="/blog/rescue-why-trap-review-canada">RESCUE! WHY trap review</Link>. If your problem is purely late-summer yellowjackets around food, a dedicated unit compared in our <Link href="/blog/best-yellow-jacket-trap-canada">yellowjacket trap guide</Link> is cheaper per catch, and the broader field — bag traps, bottle traps, DIY soda-bottle designs — is ranked in the <Link href="/blog/best-wasp-trap">best wasp trap roundup</Link>.</p>

          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm my-6 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Tool</th>
                  <th className="px-4 py-3 text-left">Best role</th>
                  <th className="px-4 py-3 text-left">Catches</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">RESCUE! WHY Trap</td>
                  <td className="px-4 py-3 text-gray-700">All-season, all-species interception; reusable for years</td>
                  <td className="px-4 py-3 text-gray-700">Paper wasps, yellowjackets, bald-faced hornets</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue why trap" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">RESCUE! Yellowjacket Trap</td>
                  <td className="px-4 py-3 text-gray-700">Late-summer patio defence; spring queen trapping</td>
                  <td className="px-4 py-3 text-gray-700">Yellowjackets only (heptyl butyrate lure)</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue yellowjacket trap" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Foaming wasp &amp; hornet spray</td>
                  <td className="px-4 py-3 text-gray-700">Night treatment of small exposed nests (PCP-registered cans only)</td>
                  <td className="px-4 py-3 text-gray-700">Direct nest treatment, 2–4 m jet</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="wasp hornet killer foam spray" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Decoy wasp nest</td>
                  <td className="px-4 py-3 text-gray-700">Cheap maybe — territorial paper wasps sometimes avoid &ldquo;claimed&rdquo; areas</td>
                  <td className="px-4 py-3 text-gray-700">Deters some paper wasps; useless on ground nesters</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="wasp nest decoy" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>The PMRA Line: What Is Legal in Canada (and What Is Not)</h2>
          <p>This is where Canadian and American advice diverge sharply, and where a lot of imported internet wisdom goes wrong. In Canada, any pesticide sold for home use must carry a <strong>Pest Control Products (PCP) registration number</strong> from Health Canada&rsquo;s PMRA on the label. Flip the can over; if there is no PCP number, it is not legal to sell or use here.</p>
          <p>The registered domestic-class options — Raid Max Wasp &amp; Hornet Killer, Ortho Home Defense Hornet &amp; Wasp Killer foam, Wilson WaspOut, KONK — are all pyrethroid jet or foam aerosols that do the job on exposed nests. What keeps showing up in US forums and grey-market marketplace listings, and does <em>not</em> belong in a Canadian garage:</p>
          <ul>
            <li><strong>Sevin (carbaryl) dust</strong> — the classic US forum answer for ground nests. Residential carbaryl uses of this kind are not registered in Canada; the US-label dust is a grey-market import here.</li>
            <li><strong>Delta Dust and other deltamethrin dusts</strong> — the product professionals inject into wall voids. Commercial class in Canada: legal for licensed applicators, not for homeowners, which is precisely why void nests are a hire-a-pro job.</li>
            <li><strong>US-label Spectracide and professional Wasp-Freeze aerosols</strong> — formulations and concentrations that were never put through Canadian registration. The same brand name on a US can does not make it the Canadian product.</li>
            <li><strong>Gasoline down a ground nest</strong> — the oldest and worst folk remedy: illegal, a groundwater contaminant, and a genuine fire risk. It needs saying because it still gets recommended every August.</li>
          </ul>
          <p>None of this is bureaucratic trivia. Dust formulations in untrained hands drift; unregistered concentrations have no Canadian label directions for re-entry times or setbacks. The registered foam cans are genuinely effective on every nest a homeowner should be treating anyway — the nests they cannot handle are the ones you should not be handling either.</p>

          <h2>Prevention: The Fall and Spring Checklist</h2>
          <p>Wasp control is seasonal, and the cheapest wins happen when no wasps are flying.</p>
          <p><strong>Fall (September–October):</strong> newly mated queens leave dying nests looking for overwintering shelter — under bark, in woodpiles, and in the gaps of your house. Seal soffit gaps, repair siding and vent screens, caulk around window frames, and move firewood away from the wall &mdash; that last one pays twice, because a stack against the siding is also the classic way <Link href="/blog/carpenter-ants-canada">carpenter ants find a damp wall to nest in</Link>. Every queen that overwinters somewhere else is a colony that starts somewhere else. Knock down and dispose of old nests too — not because they will be reused (they never are), but because removing them makes new spring construction obvious.</p>
          <p><strong>Spring (April–May):</strong> hang your queen traps in mid-April, and do a weekly walk of eaves, railings, sheds, and play structures through May. A starter paper wasp nest — a single queen and a comb the size of a golf ball — can be knocked down with a broom at dawn with near-zero risk. The same nest in August is a 150-wasp defended fortress. Ten minutes a week in May replaces every other section of this guide.</p>
          <p><strong>All summer:</strong> manage attractants. Covered food and drinks, lidded cups, rinsed recycling, tight garbage lids, and picked-up fallen fruit remove the scavenging draw that makes late-summer yellowjackets a patio problem in the first place.</p>
          <p><strong>When denial and interception are not enough:</strong> the move that actually ends the argument on a patio is a physical barrier. Wasps are big insects, so any standard insect mesh stops them &mdash; the fine no-see-um weave that biting midges demand is unnecessary here. A pop-up screen house pitched over the dining table takes foragers out of the meal completely, and our <Link href="/blog/best-screen-tent-canada">screen tent and screen house guide</Link> covers which sizes and frame types survive a Canadian summer. The indoor half of the same problem is the patio door left open while food travels back and forth, which is how a scavenging yellowjacket ends up in the kitchen; a magnetic screen door closes that route without closing the door, and our <Link href="/blog/best-magnetic-screen-door-canada">magnetic screen door guide</Link> explains why most of them fail at the top and how to size one to the frame opening rather than the door slab.</p>

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

          <h2>Related Wasp Guides</h2>
          <ul>
            <li><Link href="/blog/best-wasp-trap">Best Wasp Trap Canada — Every Trap Type Ranked</Link></li>
            <li><Link href="/blog/rescue-why-trap-review-canada">RESCUE! WHY Trap Review — Full Canadian Teardown</Link></li>
            <li><Link href="/blog/best-yellow-jacket-trap-canada">Best Yellowjacket Trap Canada — Late-Summer Patio Defence</Link></li>
            <li><Link href="/blog/best-wasp-nest-spray-canada">Best Wasp Nest Spray Canada — PMRA-Registered Options Compared</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-ground-wasps-canada">How to Get Rid of Ground Wasps — The In-Ground Nest Playbook</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="wasps and hornets" />
      </article>
    </>
  )
}
