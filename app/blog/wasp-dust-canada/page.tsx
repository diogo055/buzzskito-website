import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'wasp-dust-canada'
const DATE = '2026-08-31'
const UPDATED = '2026-08-31'
const TITLE = 'Wasp Dust in Canada 2026 — Why Pros Swear By It, and What You Can Legally Buy'
const META_TITLE = 'Wasp Dust Canada — Legality & What Works'

const FAQS = [
  {
    question: 'What is wasp dust and how does it work?',
    answer: 'Wasp dust is a dry insecticidal powder — the professional benchmark is Delta Dust, a deltamethrin formulation on a waterproof carrier — puffed into a nest entrance with a duster. It works differently from spray in the one way that matters for hidden nests: it does not need to touch the wasps to kill them. The dust coats the entrance tunnel, every wasp walking in or out picks it up on its body, grooms it in, and tracks it deeper into the galleries — including onto the queen and brood the spray from a can could never reach. Because dust is dry and low-repellency, wasps keep using the treated entrance instead of avoiding it, and the colony poisons itself over 24 to 48 hours. That mechanism is why dust is the standard professional answer for ground nests and wall-void nests across North America.',
  },
  {
    question: 'Is Delta Dust legal for homeowners in Canada?',
    answer: 'No. Delta Dust is a commercial-class product in Canada, restricted to licensed applicators — which is why it is not on the shelf at Canadian Tire or Home Depot the way it is at a US garden centre. The classic American advice for a ground nest — puff Delta Dust or Sevin dust into the entrance — does not transfer across the border: carbaryl-based consumer garden dusts were phased out of the Canadian market years ago, and a can of US-label dust bought from a marketplace seller or across the border is a grey-market product with no Canadian label, no PCP registration number, and no legal homeowner use under the Pest Control Products Act. The technique is excellent; the consumer product is what Canada does not sell.',
  },
  {
    question: 'Can I buy wasp dust on Amazon.ca?',
    answer: 'Listings for commercial-class dusts do surface on Canadian marketplaces, but a listing is not a legal homeowner use — in Canada the product class, not the checkout page, decides who may apply it. The five-second test is the label: a legal Canadian domestic product carries a PCP registration number and a label written for homeowners. What a Canadian homeowner can legitimately buy for wasp work is the adjacent kit: a PMRA-registered domestic-class jet foam for ground nests (Wilson OneShot Jet Foam is the standard), a bulb duster if you have on-label dusting work such as crawling-insect products, and protective clothing. For a nest that genuinely calls for dusting — a wall void, multiple entrances — the dust arrives with the licensed professional you hire.',
  },
  {
    question: 'Why does dust beat spray for ground wasp nests?',
    answer: 'Geometry. A yellow jacket ground nest is not the hole — it is a paper colony the size of a football or larger, sitting at the end of an entrance tunnel that can run 30 centimetres or more through the soil. A liquid jet fired at the hole wets the entrance rim and the first few centimetres of tunnel; the colony, the queen, and the brood combs sit beyond the bend, untouched. Dust solves this because the wasps do the delivery themselves: every forager passing through the powdered tunnel carries dust inward on its body and distributes it through the galleries. The same logic applies even more strongly to wall voids, where the nest can be metres from the entry gap. Foam is the domestic-class compromise for single-entrance ground nests because it physically expands down the tunnel — which is why it, not liquid spray, is our DIY pick for lawns.',
  },
  {
    question: 'How long does wasp dust take to kill a nest?',
    answer: 'Professionally applied dust typically collapses a colony within 24 to 48 hours, and the visible pattern is characteristic: normal traffic for the first hours as foragers keep tracking dust inward, thinning traffic by the next day, then a few disoriented stragglers, then silence. Pros usually leave the entrance open on purpose — returning foragers must walk through the treated tunnel, which is part of the kill — and confirm from a distance after two days rather than digging anything up. If a professionally dusted nest still shows steady traffic after 48 hours, the operator re-treats; with multi-entrance nests that second pass is sometimes needed because wasps rework their tunnels around a contaminated section.',
  },
  {
    question: 'Does diatomaceous earth work on wasp nests?',
    answer: 'Not the way people hope. Diatomaceous earth is a domestic-class desiccant dust that is genuinely useful against crawling insects in dry voids, and it is the dust class Canadians can buy most freely. But it is slow — killing over days by abrading the insect cuticle rather than in hours by neurotoxic action — and against a defended colony of thousands of stinging insects, slow is not a rounding error, it is the difference between a treatment and a provocation. It also clumps when damp, which soil entrances usually are. Follow the label on whatever DE product you buy: Canadian labels are written for crawling-insect uses, and label directions govern legal use. For an active nest, a domestic-class jet foam at the entrance or a professional dusting are the two honest options.',
  },
  {
    question: 'Can I dust a wasp nest in a wall void myself?',
    answer: 'This is the scenario where DIY goes wrong most expensively, in two ways. First, the legal one: the dusts that make void treatment work are commercial-class in Canada. Second, the practical one: the universal DIY instinct at a wall entrance is to spray the gap and then seal it — and sealing a void nest that is still alive drives thousands of trapped wasps to look for another exit, which is how colonies end up chewing through drywall and pouring into a living room. A wall-void nest is the single strongest hire-a-pro trigger in wasp control: the operator injects dust into the void, leaves the entrance open so returning foragers carry it deeper, confirms the kill, and only then is the gap sealed. Never caulk, foam-seal, or tape a hole that live wasps are using.',
  },
  {
    question: 'When is dust the wrong tool for wasps?',
    answer: 'On exposed aerial nests — the grey paper basketballs hanging from a branch, eave, or soffit, and the small open umbrella combs under railings. Dust earns its keep inside tunnels and voids, where wasps must walk through a powdered passage; on an exposed nest there is no tunnel to contaminate, and standing under a live colony puffing powder upward is a bad afternoon. Aerial nests are what jet foams and long-range liquid sprays are for: a rated 3-plus-metre stream, applied at night, saturating the envelope and the single entrance hole at the bottom. Match the weapon to the architecture — dust for ground and voids, foam and jet spray for exposed paper — and most wasp jobs pick their own tool.',
  },
  {
    question: 'What time of day should a wasp nest be treated?',
    answer: 'At dusk or in the hour before sunrise, whatever the product. The logic is arithmetic: during the day a third or more of the colony is out foraging, and a daytime treatment leaves those foragers alive, homeless, and agitated around your yard. After dark the whole colony is home, the wasps are sluggish in the cooler air, and they do not fly well toward you in low light. Practical protocol: scout the entrance in daylight and mark the approach; work in the last usable light or use a light with a red filter rather than white light aimed at the hole, since white light draws defenders; wear long sleeves, cuffs closed; apply from the product’s full rated distance; then leave immediately and inspect from a distance the next day. Never do this from a ladder — aerial nests above comfortable reach are professional work.',
  },
  {
    question: 'How much does professional wasp nest dusting cost in Canada?',
    answer: 'A single accessible wasp nest is one of the cheapest calls in Canadian pest control — typically a modest flat fee in the low-to-mid hundreds, often with a re-treatment guarantee, and wall-void or multi-entrance jobs price somewhat higher for the extra work. Set that against what the DIY route actually costs for the nests dust is meant for: protective clothing you may use once, an applicator, product a homeowner cannot legally buy anyway, and the sting risk of learning void technique on a live colony. For single-entrance lawn nests, a domestic-class foam can under twenty dollars is the legitimate DIY lane. For everything dust exists to solve, the pro fee is the honest price of the tool. Our Canadian pest control cost guide keeps current ranges.',
  },
  {
    question: 'Do wasps come back to a dusted nest site the next year?',
    answer: 'Not the same colony — in Canada every yellow jacket and paper wasp nest dies with the first hard frosts regardless of treatment, and old nests are never reused. What repeats is the site selection: the same sheltered soil bank, the same gap under the same piece of flashing, the same soffit corner offers next spring’s queens the same real estate. So the durable work happens after the kill, in the off-season — rake out or collapse old ground burrows, seal the wall gaps and flashing lifts that admitted this year’s queen (only once the nest is confirmed dead), and screen vents. A dusted void that gets sealed in November is a solved problem; one left open is an advertisement.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Wasp dust explained for Canada: why pros use Delta Dust on ground and wall-void nests, the PMRA class rules for consumers, and the legal alternatives.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function WaspDustCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to insecticidal wasp dust — the tracking-in mechanism that makes it the professional standard for ground and wall-void nests, why Delta Dust is commercial-class in Canada, the night application protocol, and the domestic-class alternatives that are actually legal to buy.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Wasp Dust Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Wasp Dust Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Every US forum says the same thing about ground nests and wall voids: forget the spray can, puff dust into the entrance. They are right about the mechanism &mdash; and wrong about what a Canadian can buy. Here is how wasp dust actually works, where the PMRA line sits, and the legal kit for each nest type.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Wilson OneShot Jet Foam Wasp & Hornet Killer" search="wilson one shot foam wasp hornet killer" label="Legal ground-nest fix" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Wasp dust is a dry insecticidal powder &mdash; the professional standard is <strong>Delta Dust (deltamethrin)</strong> &mdash; puffed into a nest entrance so that every wasp walking through <strong>tracks it into the colony</strong>, reaching the queen and brood no spray can touch. It is the best tool ever devised for <strong>ground nests and wall-void nests</strong>. In Canada it is also a <strong>commercial-class product, restricted to licensed applicators</strong> &mdash; the US buy-a-jug advice does not apply here. The homeowner-legal path: a PMRA-registered <strong>jet foam</strong> for single-entrance ground nests, applied at dusk; a <strong>licensed professional with dust</strong> for wall voids and multi-entrance nests; and never, ever seal an entrance while the colony is alive.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Why dust wins in tunnels:</strong> wasps keep using a dusted entrance and deliver the poison to the galleries themselves &mdash; a 24&ndash;48 hour colony kill.</li>
              <li><strong>The legal line:</strong> Delta Dust is commercial-class here; carbaryl (Sevin) consumer dusts left the Canadian market years ago. Check any can for a PCP number.</li>
              <li><strong>The DIY lane that is legal:</strong> jet foam down a single-entrance lawn nest at dusk &mdash; foam expands into the tunnel and does a physical version of the same job.</li>
              <li><strong>Where dust is wrong anyway:</strong> exposed aerial paper nests &mdash; those are foam and long-range jet spray territory.</li>
              <li><strong>Wall voids are the hardest no:</strong> commercial product, unforgiving technique, and sealing a live void drives wasps indoors through the drywall.</li>
              <li><strong>Diatomaceous earth is not a substitute</strong> &mdash; domestic-class, yes; fast enough for a defended colony, no.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="wasps" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Legal Canadian Wasp Kit"
            awards={[
              {
                badge: 'Best Legal Ground-Nest Fix',
                name: 'Wilson OneShot Jet Foam Wasp & Hornet Killer',
                why: 'The domestic-class answer to the job Delta Dust does commercially: a PMRA-registered d-phenothrin + tetramethrin foam that jets 2–2.5 metres and expands down the entrance tunnel of a lawn nest, contact-killing returning foragers as they dig through. For a single-entrance ground nest treated at dusk, it is the closest legal cousin of the dust technique.',
                search: 'wilson one shot foam wasp hornet killer',
                score: 9.0,
                featured: true,
                pros: ['Canadian label, PCP-registered, homeowner-legal', 'Foam physically fills the tunnel — the geometry dust exploits', 'Nest typically uninhabitable within about 48 hours'],
                cons: ['Single-entrance lawn nests only — voids and multi-hole nests need a pro', 'Shorter jet than the long-range liquid cans'],
              },
              {
                badge: 'Best Applicator',
                name: 'Bulb Duster (Pesticide Powder Applicator)',
                why: 'The tool half of the dust technique is perfectly legal to own, and it is what makes any on-label dusting job — crawling-insect powders into dry voids, cracks, and weep holes — precise instead of messy. A squeeze bulb with an extension tip lays a whisper-thin film exactly where the label directs, which is the difference between dust that works and dust that gets walked around.',
                search: 'bulb duster pesticide applicator',
                score: 8.4,
                pros: ['Puts a fine, even film deep into cracks and voids', 'Extension tips reach behind cladding and sills', 'Inexpensive and reusable for years'],
                cons: ['A tool, not a treatment — pair it only with products whose Canadian label covers your use', 'Takes a little practice to throw dust rather than clumps'],
              },
              {
                badge: 'Best Domestic-Class Dust',
                name: 'Diatomaceous Earth Insect Dust (Canadian label)',
                why: 'The one insecticidal dust class Canadians can buy freely. Honest scope: a desiccant that kills crawling insects over days in dry voids — real value for perimeter and structural work per its label, and not a colony-killer for an active, defended wasp nest. Buy it for the jobs its Canadian label lists, not as a Delta Dust stand-in.',
                search: 'diatomaceous earth insect dust',
                score: 7.6,
                pros: ['Domestic class and widely stocked in Canada', 'No resistance issues — physical mode of action', 'Pairs naturally with a bulb duster for void work'],
                cons: ['Days-slow — the wrong speed for a live wasp colony', 'Clumps and fails in damp soil entrances'],
              },
              {
                badge: 'Best Protection',
                name: 'Full-Body Protective Bee Suit with Hood',
                why: 'Anyone working near nests — even just scouting an entrance or foaming a lawn nest at dusk — is better off overdressed. A ventilated full suit with an integrated veil, worn over closed cuffs and boots, converts a defensive strike from an emergency into a non-event. Cheap insurance measured against a multi-sting incident.',
                search: 'beekeeping suit full body hood',
                score: 8.0,
                pros: ['Covers the face and neck strikes aim for', 'Usable for every future nest, hive, or attic job', 'Ventilated versions are bearable in August'],
                cons: ['Sizing runs snug — order roomy enough to layer', 'A suit is not a licence: it changes your safety, not the product class'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Wasps streaming in and out of one hole in the lawn?</strong> The <em>Best Legal Ground-Nest Fix</em> foam at dusk is the whole answer &mdash; our <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground wasp guide</Link> walks the protocol step by step. <strong>Wasps entering a wall, deck, or soffit gap?</strong> That is the nest architecture dust exists for, and in Canada that means a licensed pro &mdash; spend your money on the phone call, not the grey market. <strong>Doing on-label dusting work around the structure?</strong> The <em>Best Applicator</em> bulb duster plus the <em>Best Domestic-Class Dust</em> is the legal pairing. <strong>Any of the above?</strong> The <em>Best Protection</em> suit makes every job calmer, and calm is a genuine safety feature around defended colonies.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What Wasp Dust Actually Is</h2>
          <p>Strip away the brand names and wasp dust is a simple idea: a neurotoxic insecticide milled onto a dry, dusty carrier, engineered to cling to insect bodies and to stay put in the environment. The professional benchmark is <strong>Delta Dust</strong> &mdash; deltamethrin at a fraction of a percent on a waterproof base &mdash; and the older American tradition used carbaryl (Sevin) dust the same way. The delivery tool is a <strong>duster</strong>: a squeeze bulb or bellows that throws a fine puff of powder into a hole, coating the walls of whatever passage lies behind it.</p>
          <p>That dryness is the entire technology. A liquid spray wets what it touches and stops; a dust hangs in the passage, coats every surface, and then recruits the insects themselves as couriers. Nothing about the chemistry is exotic &mdash; deltamethrin is the same pyrethroid family as half the spray aisle. The formulation is the weapon.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the legal kit:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="wilson one shot foam wasp hornet killer">Wilson OneShot jet foam &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bulb duster pesticide applicator">Bulb dusters &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth insect dust">DE insect dust &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="beekeeping suit full body hood">Protective suits &rarr;</BuyLink>
          </div>

          <h2>Why Dust Beats Spray for Ground and Void Nests</h2>
          <p>Picture what a yellow jacket ground nest actually is, because the mental image decides the purchase. The hole in the lawn is not the nest &mdash; it is the front door. Behind it, an entrance tunnel runs anywhere from a hand-span to well over 30 centimetres through the soil before opening into a paper colony the size of a football or bigger: stacked brood combs, workers by the thousand at late-summer peak, and the queen at the centre of it. A wall-void nest is the same architecture turned sideways, with the colony sometimes metres of stud bay away from the gap the wasps use.</p>
          <p>Now fire a can of liquid jet spray at the front door. You wet the rim and the first stretch of tunnel; the geometry absorbs the rest. The colony&rsquo;s core &mdash; queen, brood, the night shift &mdash; never meets a droplet, and the survivors rebuild traffic within days. This is the single most common wasp-control disappointment in the field, and it is not the can&rsquo;s fault. It is the wrong physics for the target.</p>
          <p>Dust reverses the physics. A puff into the entrance coats the tunnel, and then the colony does the applicator&rsquo;s job: <strong>every forager walking the powdered passage picks up dust, grooms it, and tracks it inward</strong> &mdash; deeper with each trip, across the combs, onto nest-mates, eventually to the queen. Because dry dust is far less repellent than a wet pyrethroid residue, the wasps keep using the treated door rather than avoiding it. Traffic looks normal for hours; the colony collapses inside 24 to 48. The professional habit of <strong>leaving the entrance open</strong> is deliberate &mdash; returning foragers walking through the dust are part of the dose.</p>
          <p>This tracking-in mechanism is the same colony-level logic that makes bait beat spray for cockroaches and ants: recruit the insect&rsquo;s own behaviour as the delivery system, and the hidden majority of the colony stops being hidden.</p>

          <h2>The PMRA Reality: What Canadians Can and Cannot Buy</h2>
          <p>Here is where this page parts company with nearly everything else you will read on the topic, because the search results for wasp dust are overwhelmingly American, and the American answer &mdash; buy a jug of Delta Dust, it lasts a decade &mdash; is not available to you.</p>
          <p>In Canada, pesticide access is decided by product class under the Pest Control Products Act. <strong>Delta Dust is a commercial-class product here, restricted to licensed applicators.</strong> Carbaryl-based consumer garden dusts &mdash; the Sevin of older advice &mdash; were phased out of the Canadian consumer market years ago. And a US-label can bought from a marketplace seller or carried across the border is a grey-market product: no Canadian label, no PCP registration number, no legal homeowner use. The five-second test on any pesticide package in this country is flipping it over and looking for &ldquo;Reg. No. XXXXX P.C.P. Act&rdquo; and a label that speaks to homeowners.</p>
          <p>Two consequences follow. First, the handful of insecticidal dusts that <em>are</em> domestic-class on Canadian shelves &mdash; diatomaceous earth products chief among them &mdash; are labelled for crawling-insect work, and the label governs: a use the label does not list is not a use you may make. Second, and more usefully: <strong>the technique being out of consumer reach does not leave you without options.</strong> It sorts the jobs. Single-entrance ground nests have an excellent domestic-class answer. Void nests and multi-entrance nests have a professional one. Neither requires importing anything.</p>

          <h2>The Legal Playbook, by Nest Type</h2>
          <p><strong>Ground nest, one entrance hole:</strong> this is the legitimate DIY lane, and the tool is a PMRA-registered <strong>jet foam</strong> &mdash; Wilson OneShot Jet Foam is the Canadian standard &mdash; applied at dusk from two to three metres. Expanding foam is the physical cousin of the dust trick: it fills the tunnel dust would have coated, pushes product toward the galleries, and persists so returning foragers must dig through it. Soak the entrance, leave the hole open, walk away, and expect near-zero traffic within 48 hours. The complete protocol, including the boiling-water and gasoline myths, lives in our <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground wasp guide</Link>.</p>
          <p><strong>Exposed aerial nest:</strong> dust was never the right tool here anyway &mdash; see the next section. Reach for a foam or long-range liquid jet from our <Link href="/blog/best-wasp-nest-spray-canada">Canadian wasp spray round-up</Link>, at night, from the full rated distance.</p>
          <p><strong>Wall void, deck, soffit, retaining wall, or any nest with more than one entrance:</strong> hire the dust. A licensed operator injects it into the void, leaves the entries open so the colony tracks it home, confirms the kill in a day or two, and only then seals. A single-nest call is one of the cheapest jobs in Canadian pest control &mdash; our <Link href="/pest-control-cost-canada">cost guide</Link> carries current ranges &mdash; and it buys the one thing no retail product provides: someone who has done the unforgiving version of this before.</p>
          <div className="not-prose my-6 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">&#9888;&#65039; Never seal a live entrance.</strong> The universal instinct at a wall gap wasps are using &mdash; spray it, then caulk it shut &mdash; is the most expensive mistake in wasp control. A sealed colony does not suffocate; it searches, and the path of least resistance is inward: through vapour barrier, pot-light housings, and drywall, into the room on the other side. Seal only after the colony is confirmed dead &mdash; two days of zero traffic, minimum. If anyone in the household has a sting allergy, the whole job is professional territory from the first minute.
            </p>
          </div>

          <h2>How the Pros Actually Apply Dust (What You Are Paying For)</h2>
          <p>Worth understanding even though you will not be doing it, because it explains both the fee and the technique&rsquo;s reputation. The pattern across professional wasp work is consistent:</p>
          <ul>
            <li><strong>Timing:</strong> dusk or dawn, when the full colony is home and flight-sluggish. Scouting happens in daylight; treatment does not.</li>
            <li><strong>Light discipline:</strong> no white light aimed at the entrance &mdash; defenders fly at it. Red-filtered light or the last of the natural dusk.</li>
            <li><strong>Application:</strong> a duster with an extension tip puffs a measured shot into the entrance &mdash; a film, not a pile. Over-application is repellency; a whisper is lethality.</li>
            <li><strong>The door stays open:</strong> every returning forager is a courier. Plugging the hole would waste the mechanism.</li>
            <li><strong>Retreat and verify:</strong> leave immediately, confirm from a distance at 24 and 48 hours. Steady traffic at 48 hours earns a second, adjusted application &mdash; often at a secondary entrance the first visit revealed.</li>
            <li><strong>Seal and prevent:</strong> only after silence &mdash; then the gap is closed, the flashing re-bedded, the vent screened, so next spring&rsquo;s queens find the vacancy filled.</li>
          </ul>
          <p>A homeowner can legally replicate the timing, light, and retreat discipline with foam on a lawn nest &mdash; and should. The void injection is the part that stays professional, in both senses of the word.</p>

          <h2>When Dust Is the Wrong Tool Entirely</h2>
          <p>Dust&rsquo;s superpower is the enclosed passage, so it has a sharply defined failure case: <strong>the exposed aerial nest</strong>. The grey paper basketball on a branch or under an eave, and the open umbrella comb of a paper wasp under a railing, offer no tunnel to contaminate &mdash; the envelope and comb are right there in the open air. Puffing powder up at one from below deposits a little dust on the outside, thoroughly announces your presence, and leaves the colony largely intact and entirely annoyed.</p>
          <p>Exposed nests are what the pressurized can was born for: saturate the envelope and the entrance hole at the bottom with a foam or long-range jet, at night, from the product&rsquo;s full rated distance. Our <Link href="/blog/best-wasp-killer-canada">best wasp killer guide</Link> matches every nest architecture to its weapon &mdash; foam, jet, dust, and trap &mdash; and our <Link href="/blog/how-to-get-rid-of-wasps-canada">complete Canadian wasp guide</Link> covers identification if you are not sure what is building what. If you are working anywhere near a colony in the meantime, dress for it &mdash; our <Link href="/blog/bug-protective-clothing-canada">protective clothing guide</Link> covers what actually stops a stinger.</p>

          <h2>Wasp Dust in Canada &mdash; Key Facts</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What it is', 'Dry insecticidal powder (benchmark: deltamethrin Delta Dust) puffed into nest entrances'],
                  ['Why it works', 'Wasps track dust through the tunnel into the galleries — reaches queen and brood'],
                  ['Kill timeline', '24–48 hours for a professionally dusted colony'],
                  ['Best targets', 'Ground nests and wall-void nests — any enclosed entrance passage'],
                  ['Wrong target', 'Exposed aerial paper nests — use foam or long-range jet spray at night'],
                  ['Canadian legality', 'Delta Dust is commercial class — licensed applicators only; Sevin-type consumer dusts long off the market'],
                  ['Grey-market imports', 'No Canadian label, no PCP number, no legal homeowner use'],
                  ['Legal DIY equivalent', 'PMRA-registered jet foam into a single-entrance ground nest at dusk'],
                  ['Domestic-class dust', 'Diatomaceous earth — crawling-insect label work only; too slow for a live colony'],
                  ['The cardinal sin', 'Sealing an entrance while the colony is alive — drives wasps indoors'],
                  ['Hire a pro when', 'Wall voids, multiple entrances, height, allergies, or any doubt'],
                  ['After the kill', 'Seal gaps, re-bed flashing, screen vents — off-season, once traffic is zero'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-get-rid-of-ground-wasps-canada">How to Get Rid of Ground Wasps in Canada &mdash; The Dusk Foam Protocol</Link></li>
            <li><Link href="/blog/best-wasp-killer-canada">Best Wasp Killer Canada &mdash; Match the Weapon to the Nest</Link></li>
            <li><Link href="/blog/best-wasp-nest-spray-canada">Best Wasp Nest Spray Canada &mdash; Every PMRA-Registered Can Compared</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-wasps-canada">How to Get Rid of Wasps in Canada &mdash; The Complete Guide</Link></li>
            <li><Link href="/blog/bug-protective-clothing-canada">Bug-Protective Clothing in Canada &mdash; What Actually Stops a Sting</Link></li>
            <li><Link href="/pest-product-guides">All BuzzSkito Pest Product Guides</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="wasps" />
      </article>
    </>
  )
}
