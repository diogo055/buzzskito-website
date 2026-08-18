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

const SLUG = 'best-rat-trap-canada'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'Best Rat Trap Canada 2026 — Snap vs Electronic + Why Mouse Traps Fail'
const META_TITLE = 'Best Rat Trap Canada 2026: Why Mouse Traps Fail'

const FAQS = [
  {
    question: 'What is the best rat trap in Canada?',
    answer: 'For most Canadian homes, the classic Victor Metal Pedal rat snap trap is the best combination of kill rate, reusability, and cost — a 2-pack covers a typical basement or garage and each trap can be reused for years. If you don\'t want to see or handle the rat, the Victor Electronic Rat Trap kills with an 8,000-volt shock inside an enclosed chamber and signals a catch with an indicator light. The Tomcat rat snap trap is the easiest to set by hand or foot and is the best pick if you find the Victor\'s spring bar intimidating. All three are widely available on Amazon.ca and are mechanical devices, so no PMRA pesticide registration is required.',
  },
  {
    question: 'Can I use a mouse trap to catch a rat?',
    answer: 'No — this is the single most common rat-trapping mistake. An adult Norway rat weighs 200–500 grams, roughly 10–20 times heavier than a house mouse (15–30 grams). A mouse trap\'s spring bar doesn\'t generate enough force to kill a rat; it wounds the animal instead. A wounded rat escapes, associates the trap with pain, and becomes trap-shy — after that, it will avoid every trap you set, and rats communicate avoidance behaviour to the rest of the colony. Always use a rat-sized trap, which has roughly twice the footprint and several times the spring force of a mouse trap.',
  },
  {
    question: 'How do I know if I have rats or mice?',
    answer: 'Check the droppings first. Rat droppings are 12–19 mm long, capsule-shaped, and blunt-ended; mouse droppings are 3–6 mm with pointed ends — about the size of a grain of rice versus a sesame seed. Rats also leave greasy rub marks along baseboards, gnaw holes 5 cm or larger (mice need only 6 mm), and make audible thumping or scurrying in walls and ceilings at night. If you\'re seeing small droppings and hearing light scratching, start with our mouse trap guide instead — the traps and tactics are different.',
  },
  {
    question: 'What is the best bait for a rat trap?',
    answer: 'Peanut butter is the most reliable rat bait in Canadian homes — high-fat, high-protein, strong smell, and it can\'t be snatched off the trigger the way solid baits can. Smear about a half-teaspoon directly onto the trigger plate. Strong alternatives: a piece of bacon or hot dog tied to the trigger with thread, hazelnut spread, dried fruit, or unshelled nuts secured with a dab of peanut butter. Norway rats (the dominant GTA species) prefer protein and fat; if a bait is ignored after 3–4 nights, switch. Use a pea-sized amount — an overloaded trigger lets the rat feed without setting off the trap.',
  },
  {
    question: 'How long does it take to trap a rat?',
    answer: 'Expect 5–10 days from first trap placement to first catch if you pre-bait properly, and sometimes 2–3 weeks for an established, trap-shy colony. Rats are strongly neophobic — they avoid new objects in their territory for 3–7 days. That\'s why pre-baiting matters: leave traps baited but UNSET for 3–5 nights until bait is being taken consistently, then set them all at once. Skipping pre-baiting is the number-one reason people conclude a trap \'doesn\'t work\' — a mouse might hit a fresh trap the first night, but a rat almost never will.',
  },
  {
    question: 'Are electronic rat traps worth it in Canada?',
    answer: 'Yes, for specific situations. The Victor Electronic Rat Trap delivers an 8,000-volt shock for about 2 minutes, kills in under 5 seconds, and gets roughly 50 kills per set of 4 C batteries. The kill happens inside an enclosed chamber, so you never see the rat and disposal is a tip-into-the-garbage motion — the main reasons people pay 5–8x the price of a snap trap. Limitations: it can\'t be used outdoors in rain or snow, batteries weaken in sub-zero garages, and one unit only kills one rat per cycle. For an active infestation, several snap traps working simultaneously usually clear a colony faster than one electronic unit.',
  },
  {
    question: 'Is rat poison legal in Canada?',
    answer: 'Some rodenticides are legal for consumers in Canada — but the products most US websites recommend are not. Second-generation anticoagulants (brodifacoum, bromadiolone, difethialone) were removed from domestic-class sale by Health Canada\'s PMRA; in Canada they are restricted to licensed commercial applicators. The main PMRA-registered consumer option is bromethalin in pre-loaded, disposable child-resistant bait stations (sold under the Tomcat brand). First-generation anticoagulants like chlorophacinone and diphacinone also remain in some domestic products with mandatory tamper-resistant stations. Our rat poison legality guide covers the full rules. For most homeowners, traps are the better first move — no poisoned-carcass odour in walls and no secondary risk to pets or wildlife.',
  },
  {
    question: 'Do I have Norway rats or roof rats in Ontario?',
    answer: 'In the GTA and almost everywhere in Ontario, it\'s a Norway rat (Rattus norvegicus) — a heavy-bodied burrowing rat that travels at ground level, nests in basements, crawl spaces, sewers, and under decks and sheds. Roof rats (Rattus rattus) — slimmer, agile climbers that nest in attics — are established on coastal British Columbia but remain rare in Ontario. Practically, this means GTA trap placement should be LOW: along basement walls, behind appliances, near floor-level entry gaps and outdoor burrows, not up in the attic. Persistent attic noise in Ontario is more often squirrels, raccoons, or mice than roof rats.',
  },
  {
    question: 'How many rat traps do I need?',
    answer: 'More than you think — under-trapping is the second most common failure after wrong-sized traps. A useful rule: one trap per suspected rat, plus two or three extra, placed 3–5 metres apart along active runways. For a typical GTA house with basement activity, start with 4–6 snap traps deployed the same night. Rats breed fast (a female can produce 5–7 litters per year, 6–12 pups each), so an aggressive first strike during the pre-baited window beats adding traps one at a time as catches slow down and survivors wise up.',
  },
  {
    question: 'How do I safely dispose of a dead rat?',
    answer: 'Wear disposable gloves, double-bag the carcass in sealed plastic bags, and place it in your outdoor garbage — do not touch a rat barehanded. Public health agencies including Health Canada advise avoiding sweeping or vacuuming droppings dry; instead, wet droppings and the trap area with a diluted bleach solution (about 1 part bleach to 9 parts water), let it sit 5–10 minutes, then wipe with paper towels and wash your hands thoroughly. Snap traps can be disinfected the same way and reused — a trap that smells like a previous catch site can actually attract the next rat.',
  },
  {
    question: 'Why is my rat trap not catching anything?',
    answer: 'Five causes explain almost every empty rat trap: (1) no pre-baiting — the rats are still in their 3–7 day new-object avoidance window; (2) wrong placement — traps in open floor space instead of tight against walls where rats travel; (3) too few traps for the colony size; (4) human scent or old-catch odour handled without gloves; and (5) a competing food source — an open compost bin, pet food, or bird seed the rats prefer to your bait. Fix the food competition first, wear gloves, move traps perpendicular to walls with the trigger end touching the baseboard, and restart the pre-baiting cycle.',
  },
  {
    question: 'Are glue traps effective or legal for rats in Canada?',
    answer: 'Glue boards are legal to buy in Canada, but we don\'t recommend them for rats. An adult Norway rat is heavy and strong enough to tear free of most glue boards — often leaving fur and skin behind — or to drag the board away and die slowly somewhere inaccessible. Animal-welfare bodies including the Canadian Veterinary Medical Association oppose glue traps because they cause prolonged suffering, and some jurisdictions abroad have banned consumer sale. A quality snap trap kills faster, more reliably, and is reusable; an electronic trap does it without any visible contact.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Independent Canadian guide to the best rat traps for 2026 — Victor snap vs electronic vs Tomcat, why mouse traps fail on rats, Norway vs roof rats in the GTA, pre-baiting for trap-shy rats, and what rodenticides are actually PMRA-legal.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('best-rat-trap-canada')

export default function BestRatTrapCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent 2026 Canadian guide to rat traps — snap vs electronic, rat-vs-mouse trap sizing, pre-baiting technique, and PMRA-legal rodenticide rules.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Rat Trap Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Rat Trap Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Which rat traps actually work in Canadian homes, why a mouse trap will never kill a rat, the pre-baiting trick for trap-shy colonies, and what rodenticides are legally sold here — independent research, updated July 2026.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Victor Metal Pedal Rat Snap Trap" search="victor rat trap" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best rat trap for most Canadian homes is the classic Victor Metal Pedal rat snap trap — powerful enough for a 200–500 g Norway rat, reusable for years, and cheap enough to deploy the 4–6 traps a real infestation needs. If you don&rsquo;t want to see or handle a dead rat, the Victor Electronic Rat Trap kills inside an enclosed chamber with an 8,000-volt shock.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Adult Norway rats weigh 200–500 g — 10–20x a house mouse — so mouse traps wound rats instead of killing them and create trap-shy survivors.</li>
              <li>Rats avoid new objects for 3–7 days (neophobia); pre-bait traps UNSET for 3–5 nights before arming them.</li>
              <li>The Victor Electronic Rat Trap delivers roughly 50 kills per set of 4 C batteries and kills in under 5 seconds.</li>
              <li>Norway rats are the GTA species — trap low along basement walls and burrows, not in the attic; roof rats are rare in Ontario.</li>
              <li>Second-generation anticoagulant rodenticides (brodifacoum, bromadiolone) are NOT sold domestic-class in Canada — PMRA restricts them to licensed applicators.</li>
              <li>Deploy 4–6 traps at once, 3–5 m apart, perpendicular to walls with the trigger end at the baseboard.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="rats" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best Rat Traps in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Victor Metal Pedal Rat Snap Trap',
                why: 'Unbeatable kill-rate-per-dollar. The metal-pedal trigger and full rat-force spring bar close the deal the first time, and each trap survives years of catches — cheap enough to deploy the 4–6 traps a real infestation needs.',
                search: 'victor rat trap',
                score: 9.1,
                featured: true,
                pros: ['Genuine rat-killing spring force', 'Reusable for years', 'Cheap enough to buy in bulk'],
                cons: ['Setting the bar takes hand strength', 'Disposal means seeing the rat'],
              },
              {
                badge: 'Best No-Touch',
                name: 'Victor Electronic Rat Trap',
                why: 'Lures the rat into an enclosed tunnel and delivers an 8,000-volt shock — death in under 5 seconds. An indicator light signals a catch and disposal is a tip-into-the-garbage motion, so you never see or handle the rat.',
                search: 'victor electronic rat trap',
                score: 8.3,
                pros: ['No-see, no-touch disposal', '~50 kills per battery set', 'Fast, humane kill'],
                cons: ['Indoor-only — rain and cold kill it', 'One rat per cycle'],
              },
              {
                badge: 'Easiest to Set',
                name: 'Tomcat Rat Snap Trap',
                why: 'Moulded-plastic trap that sets with one press of a foot or hand — no fingers near the strike zone. Interlocking teeth grip rather than relying purely on impact, and a removable bait cup clicks in before setting.',
                search: 'tomcat rat snap trap',
                score: 7.8,
                pros: ['Foot-press setting — no snapped thumbs', 'Washable and reusable', 'Removable bait cup'],
                cons: ['Slightly less powerful on the largest rats', 'Plastic feels less rugged than wood'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Active infestation and comfortable handling a catch?</strong> Buy several <em>Best Overall</em> Victor snap traps — deploying 4–6 at once is the single biggest tactical advantage. <strong>Squeamish, or one or two rats in a kitchen or finished basement?</strong> The <em>Best No-Touch</em> electronic trap keeps the whole job out of sight. <strong>Nervous about the spring bar?</strong> The <em>Easiest to Set</em> Tomcat arms with a foot press. If your droppings are 3–6 mm with pointed ends, you have mice, not rats — start with our <Link href="/blog/best-mouse-trap-canada">best mouse trap Canada guide</Link> instead.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Compare the three traps this guide recommends on Amazon.ca:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="victor rat trap">Victor rat snap trap →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="victor electronic rat trap">Victor electronic rat trap →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="tomcat rat snap trap">Tomcat rat snap trap →</BuyLink>
          </div>

          <h2>Why Do Mouse Traps Fail on Rats?</h2>
          <p>Because of mass. An adult Norway rat weighs 200–500 grams; a house mouse weighs 15–30 grams. A mouse trap&rsquo;s spring bar is engineered to break the neck of a 20-gram animal — against a rat that&rsquo;s 10–20 times heavier, it delivers a painful pinch instead of a kill. The rat tears free, and now you have a bigger problem than before: a <strong>trap-shy rat</strong>.</p>
          <p>Trap-shyness is the reason sizing matters so much. Rats are intelligent, cautious animals that learn from a single bad experience and transmit avoidance behaviour to the rest of the colony. A rat that survives a mouse-trap strike will refuse to approach anything trap-shaped for weeks — sometimes permanently. Rat traps are built to close the deal the first time: roughly twice the footprint of a mouse trap, with several times the spring force. If you&rsquo;re actually dealing with mice (3–6 mm pointed droppings rather than 12–19 mm blunt capsules), you want our <Link href="/blog/best-mouse-trap-canada">best mouse trap Canada guide</Link> instead — the reverse mistake, rat traps for mice, wastes money and risks a nasty injury to fingers and paws.</p>

          <h2>Which Rat Trap Should You Buy in Canada?</h2>
          <p>Three traps cover essentially every home situation, and all three are mechanical devices — no pesticide, so no PMRA registration issues, and safe to use in kitchens, basements, and garages when placed sensibly.</p>

          <h3>1. Victor Metal Pedal Rat Snap Trap — best overall</h3>
          <p>The wooden Victor rat trap has been in production since the 1890s for a reason: nothing beats its kill-rate-per-dollar. The metal pedal trigger is sensitive enough for a cautious rat but stiff enough not to false-trigger, the spring bar generates genuine rat-killing force, and each trap survives years of catches. Because they cost so little, you can deploy the 4–6 traps a real infestation demands — the single biggest tactical advantage over pricier options. Downsides: setting the bar takes some hand strength and a little nerve, and disposal means seeing the rat.</p>

          <h3>2. Victor Electronic Rat Trap — best no-touch, no-see option</h3>
          <p>The Victor Electronic Rat Trap lures the rat into an enclosed tunnel and delivers an 8,000-volt shock for about two minutes — death in under five seconds, which independent welfare researchers rate among the most humane kill methods available to consumers. A green indicator light signals a catch, and disposal is tipping the chamber over the garbage without ever seeing the animal. Four C batteries yield roughly 50 kills. The trade-offs: it costs several times what a snap trap does, it&rsquo;s indoor-only (rain and snow kill the electronics), battery output drops in freezing garages, and one unit handles one rat at a time. It shines for a light infestation — one or two rats — in a kitchen, apartment, or finished basement where squeamishness would otherwise stop you from trapping at all. We reviewed the mouse-sized version separately in our <Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor electronic mouse trap review</Link>; the rat unit is the same concept scaled up.</p>

          <h3>3. Tomcat Rat Snap Trap — easiest to set</h3>
          <p>Tomcat&rsquo;s moulded-plastic rat snap trap sets with one press of a foot or hand — no fingers near the strike zone — and its interlocking teeth grip rather than relying purely on impact. It&rsquo;s slightly less powerful than the Victor wood trap on the largest rats but far less intimidating to arm, washable, and it includes a removable bait cup you can fill and click in place before setting. If the Victor&rsquo;s spring bar has ever snapped on your thumb, this is your trap.</p>
          <p>There is a fourth category worth knowing about if your rat problem never really ends: a CO₂-powered trap that strikes, drops the carcass clear, and re-arms itself, so it keeps working unattended instead of being &ldquo;done&rdquo; the moment it fires once. It costs many times what any of these three do, which is why it only earns its place against chronic pressure &mdash; we work through that maths in our <Link href="/blog/goodnature-a24-review-canada">Goodnature A24 review for Canada</Link>.</p>

          <h2>Rat Trap Comparison Table</h2>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Option</th><th className="px-3 py-2 text-left">Type</th><th className="px-3 py-2 text-left">Kill method</th><th className="px-3 py-2 text-left">Reusable</th><th className="px-3 py-2 text-left">Best for</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Victor Metal Pedal</strong></td><td className="px-3 py-2">Wood snap trap</td><td className="px-3 py-2">Spring bar — instant</td><td className="px-3 py-2">Yes, for years</td><td className="px-3 py-2">Active infestations, multi-trap deployments</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Victor Electronic</strong></td><td className="px-3 py-2">Battery kill chamber</td><td className="px-3 py-2">8,000 V shock, &lt;5 s</td><td className="px-3 py-2">~50 kills per battery set</td><td className="px-3 py-2">No-touch, no-see indoor trapping</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Tomcat Rat Snap</strong></td><td className="px-3 py-2">Plastic snap trap</td><td className="px-3 py-2">Toothed jaw — instant</td><td className="px-3 py-2">Yes, washable</td><td className="px-3 py-2">Easy foot-press setting, bait cup</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Bromethalin disposable station</td><td className="px-3 py-2">Rodenticide (PMRA domestic)</td><td className="px-3 py-2">Poison bait, 1–2 days</td><td className="px-3 py-2">No — sealed single-use</td><td className="px-3 py-2">Inaccessible areas; last resort after traps</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Glue boards</td><td className="px-3 py-2">Adhesive</td><td className="px-3 py-2">Slow — not recommended</td><td className="px-3 py-2">No</td><td className="px-3 py-2">Not recommended for rats — escapes + welfare</td></tr>
            </tbody>
          </table>

          <h2>Do You Have Norway Rats or Roof Rats?</h2>
          <p>If you&rsquo;re in the GTA — or almost anywhere in Ontario — you have Norway rats. <em>Rattus norvegicus</em> is a heavy-bodied, blunt-nosed burrower with a tail shorter than its body. It travels at ground level, digs burrows along foundations, under decks, sheds, and compost bins, and enters homes through floor-level gaps, weeping tile, and sewer connections. Toronto, Mississauga, Brampton, and Hamilton rat complaints are overwhelmingly Norway rats, and construction excavation is a well-documented trigger for neighbourhood-level surges as burrow systems get displaced.</p>
          <p>Roof rats (<em>Rattus rattus</em>) — slimmer, larger-eared climbers with tails longer than their bodies — are established in coastal British Columbia but remain rare in Ontario. This matters for trap placement: US websites written for California or Florida tell you to trap in the attic and along rafters. In the GTA, that advice wastes your traps. <strong>Place traps low</strong> — basement perimeter walls, behind the furnace and appliances, near floor drains, along garage walls, and beside outdoor burrow entrances. If you have persistent attic noise in Ontario, the culprit is more likely squirrels, raccoons, or mice than rats — and if it is mice, our guide on <Link href="/blog/how-to-keep-mice-out-of-your-house-winter">keeping mice out in winter</Link> covers the exclusion work.</p>

          <h2>What Is Pre-Baiting — and Why Do Trap-Shy Rats Demand It?</h2>
          <p>Pre-baiting is the technique that separates people who catch rats from people who conclude traps don&rsquo;t work. Rats are strongly <strong>neophobic</strong> — they treat any new object in their territory with suspicion and will detour around it for 3–7 days before investigating. Set a fresh trap on night one and the colony simply waits you out; worse, if a young rat trips it and escapes, the whole colony learns.</p>
          <p>The protocol:</p>
          <ol>
            <li><strong>Nights 1–3 (or up to 5):</strong> place traps baited but <strong>unset</strong> along active runways. Let the rats eat freely off the trigger plates.</li>
            <li><strong>Confirm feeding:</strong> once bait disappears consistently for two nights running, the traps are now &ldquo;safe objects&rdquo; in the colony&rsquo;s map.</li>
            <li><strong>Arm everything at once:</strong> re-bait and set every trap the same evening. The first 24–48 hours after arming typically produce the majority of your total catch — before survivors connect the deaths to the traps.</li>
            <li><strong>Don&rsquo;t relocate too fast:</strong> if a set trap goes untouched, leave it 4–5 more nights before moving it; moving traps daily restarts the neophobia clock.</li>
          </ol>
          <p>Bait with a half-teaspoon of peanut butter smeared onto the trigger, or tie a piece of bacon or dried fruit to the trigger with sewing thread so the rat must pull. Wear gloves when handling traps — both for hygiene and because heavy human scent on a brand-new trap adds suspicion.</p>

          <h2>Where Should You Place Rat Traps?</h2>
          <p>Rats are edge-runners: they travel with a wall or object against one flank, almost never crossing open floor. Read the evidence first — droppings, greasy rub marks at baseboard height, gnawing, and tracks in dust all mark active runways.</p>
          <ul>
            <li><strong>Perpendicular to the wall</strong>, trigger end touching the baseboard, so the rat crosses the trigger whichever direction it&rsquo;s travelling.</li>
            <li><strong>3–5 metres apart</strong> along the active wall — and pairs of traps side by side catch rats that jump the first one.</li>
            <li><strong>Behind and under things:</strong> appliances, the furnace, stored boxes, deck edges, shed perimeters, beside burrow openings.</li>
            <li><strong>Away from kids and pets:</strong> a rat snap trap can break a finger or seriously injure a paw. In homes with either, place snap traps inside a locked rodent bait/trap station or restrict them to inaccessible zones — our <Link href="/blog/mouse-bait-station-canada">bait station guide</Link> explains the station options sold in Canada.</li>
            <li><strong>Remove competing food:</strong> secure compost, pet food, bird seed, and garbage first. A rat with easier calories available will ignore the best-baited trap in the country.</li>
          </ul>

          <h2>What About Rat Poison — What Is Actually Legal in Canada?</h2>
          <p>Here&rsquo;s where Canadian and American advice diverge sharply, and where we refuse to follow the US playbook. The rodenticides most US sites recommend — <strong>second-generation anticoagulants</strong> like brodifacoum, bromadiolone, and difethialone (the classic &ldquo;one-feed&rdquo; green blocks) — are <strong>not legal for consumer sale in Canada</strong>. Health Canada&rsquo;s PMRA ended domestic-class sale of second-generation anticoagulants years ago because of poisoning risk to children, pets, and the owls and hawks that eat poisoned rodents; in Canada they are restricted to licensed commercial applicators. US retail sites and marketplace sellers will still happily ship them north. We will not recommend any of those products: importing or using a pesticide that isn&rsquo;t PMRA-registered for domestic use is illegal under the Pest Control Products Act, and secondary poisoning of raptors is exactly why the rule exists.</p>
          <p>What consumers CAN legally buy in Canada: <strong>bromethalin</strong> (a non-anticoagulant neurotoxicant) in pre-loaded, disposable, child-resistant bait stations sold under the Tomcat brand, plus some first-generation anticoagulant products that must be used inside tamper-resistant stations. Even then, we&rsquo;d reach for traps first in almost every home scenario — poisoned rats routinely die inside wall voids, and the odour of a decomposing 400-gram rat in a wall lasts weeks. The full legal picture, including what to do about grey-market listings, is in our companion guide: <Link href="/blog/rat-poison-canada-what-is-legal">rat poison in Canada — what is actually legal</Link>.</p>

          <h2>Do Ultrasonic Repellers Work on Rats?</h2>
          <p>No — not as a control method. Controlled studies consistently show rodents habituate to ultrasonic emitters within days, and Health Canada does not evaluate or register these devices for efficacy because they&rsquo;re not pesticides. Money spent on plug-in repellers is better spent on more snap traps and a tube of exclusion sealant. We break down the research in detail in <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic pest repellers — do they work?</Link></p>

          <h2>Traps Are Half the Job — Exclusion Is the Other Half</h2>
          <p>Trapping without exclusion is a treadmill. A Norway rat needs only a 2.5 cm gap — roughly a toonie — to enter a house. While traps are pre-baiting, walk the foundation: seal gaps around utility penetrations with steel wool plus sealant or hardware cloth (rats gnaw through foam and caulk alone), fix damaged window wells and door sweeps, cap floor drains, cut vegetation back from the foundation, and get firewood and clutter off the ground. The same exclusion logic — scaled to a 6 mm gap — applies to mice, and our <Link href="/blog/how-to-get-rid-of-mice-canada">getting rid of mice in Canada</Link> guide covers the full walkthrough. If trapping and exclusion haven&rsquo;t stopped the activity within 3–4 weeks, or you&rsquo;re finding burrow networks outdoors, it&rsquo;s worth pricing a licensed exterminator — see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> for what rat jobs typically run.</p>

          <div className="not-prose my-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="victor rat trap">Check Victor rat trap on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="victor electronic rat trap">Check Victor electronic rat trap →</BuyLink>
          </div>

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-5 my-6">
            {FAQS.map(({ question, answer }) => (
              <div key={question} className="rounded-xl border border-navy-100 bg-gray-50 p-5">
                <h3 className="font-bold text-brand-900 mb-2">{question}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>

          <h2>Related Rodent Guides</h2>
          <ul>
            <li><Link href="/blog/best-mouse-trap-canada">Best Mouse Trap Canada — Snap, Electronic &amp; Multi-Catch</Link></li>
            <li><Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor Electronic Mouse Trap Review (Canada)</Link></li>
            <li><Link href="/blog/rat-poison-canada-what-is-legal">Rat Poison in Canada — What Is Actually Legal</Link></li>
            <li><Link href="/blog/mouse-bait-station-canada">Mouse &amp; Rat Bait Stations in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mice-canada">How to Get Rid of Mice in Canada</Link></li>
            <li><Link href="/blog/how-to-keep-mice-out-of-your-house-winter">How to Keep Mice Out of Your House This Winter</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Ultrasonic Pest Repellers — Do They Work?</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-gray-50 px-5 py-4 text-sm text-gray-700">
            This guide is part of our independent product research series for Canadian homeowners.{' '}
            <Link href="/pest-product-guides" className="font-semibold text-emerald-700 underline">More independent Canadian pest product research →</Link>
          </div>
        </div>
        <AdjacentPestCTA pest="rodents" />
      </article>
    </>
  )
}
