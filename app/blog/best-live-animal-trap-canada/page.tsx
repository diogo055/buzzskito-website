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

const SLUG = 'best-live-animal-trap-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'Best Live Animal Trap Canada 2026 — The Legal, Humane Guide (Read First)'
const META_TITLE = 'Best Live Animal Trap Canada: Ontario 1 km Rule'

const FAQS = [
  {
    question: 'Is it legal to trap and relocate wildlife in Ontario?',
    answer: 'Only within strict limits. Under Ontario’s Fish and Wildlife Conservation Act, if you live-trap a nuisance animal such as a groundhog, squirrel, or raccoon that is damaging your property, you must release it within 24 hours and within 1 km of where you caught it — or turn it over to someone authorized to receive it. Driving an animal to a park, ravine, or conservation area kilometres away is illegal. That single rule reshapes the whole decision: a live trap is only useful when releasing the animal a few hundred metres away on or near your own property actually solves the problem, which for most raccoons and squirrels it does not.',
  },
  {
    question: 'Why is spring and summer the wrong time to trap wildlife?',
    answer: 'Because from roughly March through August, most female raccoons, squirrels, and skunks in Ontario are raising dependent young in a den. If you trap and remove (or even relocate 1 km away) a nursing mother, her babies are left behind to starve — usually somewhere inside your attic, shed, chimney, or wall where the smell and the cleanup become far worse than the original problem. Humane wildlife groups are unanimous on this: during denning season the goal is eviction and exclusion (encouraging the mother to move her own litter to a backup den), not trapping. A cage trap in June often creates an orphaning problem, not a solution.',
  },
  {
    question: 'What is the best live animal trap in Canada?',
    answer: 'There is no single “best” — the right cage trap is the one sized to the target animal and used only where trapping is legal and humane. A medium single-door steel trap suits a groundhog you can legally release on-site; a small single-door suits squirrels, chipmunks, and rats; a large model is built for raccoon-sized animals; and a two-door trap tends to have a higher catch rate on timid animals because it looks like a through-tunnel. Havahart is the most widely stocked brand on Amazon.ca across all four sizes. But for raccoons and skunks specifically, the better answer is usually to call a licensed wildlife-control operator rather than buy a trap at all.',
  },
  {
    question: 'Should I trap a raccoon myself?',
    answer: 'Almost never. Raccoons are a rabies-vector species in Ontario, they are strong and can injure you or a pet during handling, and the 1 km release rule means DIY relocation rarely works — a raccoon released down the street simply walks back. During denning season you also risk orphaning a litter hidden in your attic or chimney. For raccoons (and skunks), the safe, legal, and genuinely more humane route is a licensed wildlife-control operator who uses one-way eviction doors, checks for young, and handles the animal under the proper authorizations. Spend your DIY energy on deterrence and sealing entry points instead.',
  },
  {
    question: 'Can I trap and release a groundhog on my own property?',
    answer: 'This is the one common DIY case where a cage trap can be appropriate — with caveats. A groundhog (woodchuck) digging under a shed or deck can often be live-trapped and released within the legal 1 km radius, and because groundhogs are solitary and not a rabies-vector species, the handling risk is lower than with raccoons. Before you set a trap, check your municipal bylaws (some Ontario municipalities restrict or regulate trapping and relocation even on private land), confirm you are outside the peak denning window when young may be dependent, and be honest that unless you also fill the burrow and screen the gap, a new groundhog will likely move into the vacant tunnel within a season.',
  },
  {
    question: 'What size live trap do I need?',
    answer: 'Match the trap to the animal. Small single-door traps (roughly 45–60 cm long) fit squirrels, chipmunks, rats, and weasels. Medium traps suit groundhogs, larger squirrels, and skunks. Large traps (around 80–100 cm) are built for raccoons, groundhogs, and feral cats. An undersized trap either will not fit the animal or, worse, catches it partway and lets the door injure it — and an oversized trap wastes bait and gives a small animal room to avoid the trigger plate. When in doubt between two sizes for a groundhog, size up: a medium-to-large single-door is the safer choice.',
  },
  {
    question: 'One-door or two-door trap — which is better?',
    answer: 'Two-door traps generally have a higher catch rate on cautious animals because the see-through tunnel feels like a safe passage rather than a dead end, and they give you two ways to set bait. Single-door traps hold bait more securely at the closed end, are sturdier for powerful animals, and make release simpler because the animal exits the way it came. A practical rule: two-door for skittish species like squirrels and feral cats, single-door for groundhogs and any strong digger where trap rigidity matters most.',
  },
  {
    question: 'What is the best bait for a live cage trap?',
    answer: 'It depends on the target. Groundhogs are vegetarians — fresh cantaloupe, sweet corn, lettuce, or peas placed well behind the trigger work well. Squirrels and chipmunks go for peanut butter, sunflower seeds, or unshelled peanuts. Raccoons are omnivores drawn to sweet, smelly foods like marshmallows, canned fish, or fruit (another reason DIY raccoon trapping backfires — the bait also attracts pets and skunks). Always place bait at the very back of the trap, past the trigger plate, so the animal must fully enter and step on the pan to be caught cleanly.',
  },
  {
    question: 'How often do I have to check a live trap?',
    answer: 'Frequently — the law and basic humaneness both demand it. Ontario’s 24-hour release rule is a maximum, not a target: a trapped animal exposed to sun, cold, rain, or its own panic can suffer or die well before then. Best practice is to check the trap at least every few hours during daylight and first thing in the morning, and never to set a trap you cannot monitor — for example, right before you leave for the weekend. Provide shade, keep the trap out of direct sun, and never leave a captured animal for a full day “because the rules allow it.”',
  },
  {
    question: 'Are deterrents better than trapping?',
    answer: 'For most homeowners, yes — and they should be your first move, not your last. Removing the attraction (secured garbage, no pet food outdoors, fallen fruit cleaned up), physically excluding animals (sealing entry points, hardware cloth over deck gaps, chimney caps), and active deterrents such as motion-activated sprinklers, motion lights, and scent repellents solve the underlying problem without the legal limits, orphaning risk, or the near-certainty that a relocated animal is simply replaced. Trapping removes one individual; deterrence and exclusion make your property stop generating the problem. See our raccoon deterrent and motion-activated sprinkler guides for the deterrence-first playbook.',
  },
  {
    question: 'Is it illegal to move a raccoon far away from my house?',
    answer: 'Yes, in Ontario. The Fish and Wildlife Conservation Act requires that a nuisance animal you trap be released within 1 km of the capture site within 24 hours, or handed to an authorized person. “Taking it out to the country” is both illegal and, from a welfare standpoint, cruel — relocated raccoons face unfamiliar territory, established competitors, and often separation from dependent young, and studies of relocated urban wildlife show poor survival. This is precisely why licensed operators use in-place eviction and exclusion rather than long-distance relocation, and why a cage trap you buy online cannot legally do what most people imagine it will.',
  },
  {
    question: 'What do I do if I accidentally trap a skunk?',
    answer: 'Move slowly and calmly — a startled skunk in a cage can spray, and skunks are also a rabies-vector species in Ontario. Approach with a large towel or blanket held in front of you, gently drape it over the trap to create darkness (which usually calms the animal and makes spraying less likely), and then decide on release within the legal 1 km radius. Honestly, if there is any chance of catching a skunk on your property, that is a strong signal to stop DIY trapping and call a licensed wildlife-control operator, who has the equipment and authorization to handle skunks and rabies-vector species safely.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Live animal (cage) traps for Canadian homeowners — explained the legal, humane way. Ontario’s 1 km relocation rule, why spring/summer trapping orphans young, deterrence first, trap sizes compared (small/medium/large/two-door), and when to call a licensed operator instead. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('best-live-animal-trap-canada')

export default function BestLiveAnimalTrapCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'An independent, law-forward Canadian guide to live animal (cage) traps: Ontario’s relocation rules, humane timing, deterrence-first strategy, trap-size selection, and when to hire a licensed wildlife-control operator.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Live Animal Trap Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Live Animal Trap Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Before you buy a cage trap: what Ontario law actually lets you do, why spring and summer trapping orphans baby animals, and the deterrence-first plan that solves the problem without a trap at all — plus the right trap sizes for the rare legal case.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Havahart medium 1-door live cage trap" search="havahart live animal trap medium" label="For legal on-site release" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">A live cage trap should be your <em>last</em> resort, not your first. In Ontario it is illegal to relocate a trapped nuisance animal more than 1 km from where you caught it, and trapping in spring or summer routinely orphans dependent young. Start with deterrence and exclusion. Reserve a cage trap for narrow legal cases — chiefly a groundhog you can release on your own property — and for raccoons or skunks, hire a licensed wildlife-control operator instead.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Ontario’s Fish and Wildlife Conservation Act: release a trapped animal within <strong>1 km</strong> of capture, within <strong>24 hours</strong> — moving it farther is illegal.</li>
              <li>From roughly March–August, trapping a mother raccoon, squirrel, or skunk leaves her babies behind to starve, usually in your attic or wall.</li>
              <li>Deterrence first: secure garbage, seal entry points, and use motion-activated sprinklers and lights before any trap.</li>
              <li>Groundhogs on your own property are the main legitimate DIY cage-trap case — check your municipal bylaws first.</li>
              <li>Raccoons and skunks are rabies-vector species — use a licensed operator, not a store-bought trap.</li>
              <li>Match trap size to the animal: small (squirrels/rats), medium (groundhogs), large (raccoons), two-door for skittish species.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="raccoons, squirrels &amp; groundhogs" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border-l-4 border-amber-400 bg-amber-50 p-5">
            <p className="text-sm font-extrabold text-amber-900 mb-1">Read this before you buy a trap</p>
            <p className="text-sm text-gray-800 leading-relaxed">This guide is written the opposite way to most “best trap” articles. We lead with the law and the ethics because a cage trap used wrongly is illegal, inhumane, and usually ineffective — a relocated animal is simply replaced by the next one. The trap recommendations below exist only for the small set of situations where trapping is genuinely legal, safe, and the right tool. If your situation is not one of them, the most useful thing on this page is the deterrence and exclusion plan.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Trap Sizes Compared — For Legal, On-Site Release Only"
            awards={[
              {
                badge: 'Best for Groundhogs',
                name: 'Havahart Medium 1-Door Live Cage Trap',
                why: 'The single most defensible DIY case: a groundhog under a shed you can legally release within 1 km on your own property. Sturdy single-door build resists a strong digger, and a solid rear panel keeps bait secure.',
                search: 'havahart live animal trap medium',
                score: 8.6,
                featured: true,
                pros: ['Right size for groundhogs and skunks', 'Rigid steel resists strong animals', 'Simple, injury-free release'],
                cons: ['Check municipal bylaws before use', 'Only humane outside denning season'],
              },
              {
                badge: 'Best for Small Rodents',
                name: 'Havahart Small 1-Door Live Cage Trap',
                why: 'Sized for squirrels, chipmunks, rats, and weasels. A sensitive trigger pan catches lighter animals a larger trap would miss — useful where a squirrel is chewing into a soffit and you can release nearby.',
                search: 'havahart small live animal trap',
                score: 8.0,
                pros: ['Fits squirrels, chipmunks, rats', 'Sensitive trigger for light animals', 'Budget-friendly and widely stocked'],
                cons: ['Too small for groundhogs/raccoons', 'Squirrels homing back is common'],
              },
              {
                badge: 'Highest Catch Rate',
                name: 'Havahart Two-Door Live Cage Trap',
                why: 'The see-through tunnel design feels like a safe passage, so cautious animals — squirrels, feral cats — enter more readily than they would a dead-end box. Two openings also give you flexible baiting.',
                search: 'havahart two door live trap',
                score: 7.9,
                pros: ['Higher catch rate on skittish species', 'Two baiting options', 'Good for feral-cat TNR programs'],
                cons: ['Bait less secure than single-door', 'More moving parts to maintain'],
              },
              {
                badge: 'For Larger Animals',
                name: 'Havahart Large 1-Door Live Cage Trap',
                why: 'Built for raccoon-sized animals and feral cats. Listed here for completeness — but for raccoons and skunks specifically we recommend a licensed wildlife-control operator over any DIY trap, for legal, safety, and welfare reasons.',
                search: 'havahart large live animal trap',
                score: 7.2,
                pros: ['Handles raccoon-sized animals', 'Strong frame and door', 'Reusable for years'],
                cons: ['Raccoons/skunks: hire a licensed pro', 'High orphaning risk in denning season'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Groundhog under your shed?</strong> The <em>Best for Groundhogs</em> medium single-door is the one common case where DIY trapping is defensible — check bylaws and avoid denning season. <strong>Squirrel or chipmunk?</strong> The <em>Best for Small Rodents</em> trap fits, but a homing squirrel released within 1 km often returns, so pair it with sealing the entry point. <strong>Skittish animal or feral cat?</strong> The <em>Highest Catch Rate</em> two-door earns its keep. <strong>Raccoon or skunk?</strong> Don’t — call a licensed operator. Start every case with the <Link href="/blog/raccoon-deterrent-canada">deterrence-first plan</Link>.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Start Here: The Law Decides Whether a Trap Even Makes Sense</h2>
          <p>Most “best live animal trap” guides open with a product table. This one opens with a statute, because in Canada the law does most of the deciding for you. In Ontario, the <strong>Fish and Wildlife Conservation Act</strong> governs what you may do with a nuisance animal you capture on your property. The core rule is short and strict: an animal you live-trap must be <strong>released within 24 hours and within 1 kilometre of where it was caught</strong>, or turned over to someone authorized to receive it. You cannot legally drive a raccoon to a park across town, to a ravine, or “out to the country.”</p>
          <p>Read that rule again, because it quietly dismantles the fantasy most people have when they buy a cage trap. The mental image is: catch the animal, drive it somewhere far away, problem solved forever. Ontario law does not permit that, and for good reason — long-distance relocation is both a welfare disaster for the animal and ecologically pointless. A raccoon released legally a few hundred metres away simply walks back to the food source that drew it in. So the honest question is not “which trap is best?” It is “will releasing this animal within 1 km actually fix anything?” For raccoons and squirrels, the answer is almost always no.</p>

          <h2>Why Spring and Summer Trapping Is the Wrong Move</h2>
          <p>There is a second constraint that matters just as much as the 1 km rule: timing. From roughly <strong>March through August</strong>, most female raccoons, squirrels, and skunks in southern Ontario are raising dependent young in a den — which is frequently an attic, chimney, shed, deck, or wall void on someone’s property. If you trap and remove the adult female during this window, you have not solved a problem; you have created a much worse one. Her babies, too young to survive alone, are left behind to starve. The result is dead young decomposing somewhere inaccessible, weeks of odour, and a cleanup far more unpleasant than the noise that started it all.</p>
          <p>This is why humane wildlife organizations are unanimous that denning-season strategy should be <strong>eviction, not trapping</strong> — making the den unpleasant (light, sound, scent) so the mother relocates her own litter to one of the backup dens she always keeps, then sealing the entry once you have confirmed everyone is out. A cage trap set in June is far more likely to orphan a litter than to end an infestation. If you are dealing with animals in a structure during spring or summer, that alone is a reason to bring in a professional who checks for young before doing anything.</p>

          <h2>Deterrence and Exclusion First — Almost Always the Real Fix</h2>
          <p>Here is the part that saves most homeowners a trap, a headache, and a legal grey area entirely: the underlying problem is almost never “this one animal.” It is that your property offers food, water, or shelter, and wildlife is rational. Remove the attraction and secure the access, and the problem stops — permanently, and without touching an animal. Trapping removes one individual; deterrence and exclusion make your yard stop generating the problem in the first place.</p>
          <ul>
            <li><strong>Remove the food.</strong> Secure garbage and green-bin lids (raccoon-proof latches or a bungee cord), stop feeding pets outdoors, clean up fallen fruit and spilled birdseed, and harvest ripe vegetables promptly — a groundhog is there for your garden.</li>
            <li><strong>Seal the access.</strong> Cap chimneys, screen deck and shed gaps with heavy hardware cloth (extended below grade for diggers), close soffit and roofline gaps, and buy nothing until you have walked the perimeter looking for the entry point.</li>
            <li><strong>Make the space unwelcoming.</strong> Motion-activated sprinklers, motion lights, and scent deterrents move animals along without capture. Our <Link href="/blog/motion-activated-sprinkler-canada">motion-activated sprinkler guide</Link> and <Link href="/blog/raccoon-deterrent-canada">raccoon deterrent guide</Link> cover which of these actually hold up in a Canadian yard and which are marketing.</li>
          </ul>
          <p>Do this first. In a large share of cases you will never need a trap at all — and if you do, you will at least have closed the entry point so the vacancy you create does not immediately refill.</p>

          <h2>The One Common Case Where a Cage Trap Is Defensible: Groundhogs</h2>
          <p>If there is a poster child for legitimate DIY live-trapping in Ontario, it is the groundhog (woodchuck) that has tunnelled under a shed, deck, or garden. Groundhogs make the cut for a few specific reasons: they are <strong>solitary</strong> (no colony to orphan), they are <strong>not a rabies-vector species</strong> (lower handling risk than raccoons or skunks), and a legal on-site release within 1 km can genuinely resolve the immediate conflict when paired with filling the burrow.</p>
          <p>Even here, do it right. Confirm you are <strong>outside the peak denning window</strong> so you are not separating a mother from young. Check your <strong>municipal bylaws</strong> — some Ontario municipalities regulate or restrict trapping and relocation even on private property, and the provincial rule is a floor, not the whole story. Bait with what a groundhog actually wants (cantaloupe, sweet corn, lettuce, peas) placed well behind the trigger plate, keep the trap shaded, and check it every few hours. And be realistic: unless you also collapse and screen the burrow, the vacant tunnel is prime real estate and a new groundhog will likely claim it within a season. The trap buys you a window to exclude — it is not the fix by itself.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the four trap sizes (for legal, on-site release only):</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="havahart live animal trap medium">Medium 1-door (groundhogs) →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="havahart small live animal trap">Small 1-door (squirrels/rats) →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="havahart two door live trap">Two-door (skittish species) →</BuyLink>
          </div>

          <h2>Raccoons and Skunks: Call a Licensed Operator, Don’t Buy a Trap</h2>
          <p>For raccoons and skunks, our recommendation is blunt: do not DIY-trap them. Three reasons stack up against it. First, <strong>rabies risk</strong> — both are rabies-vector species in Ontario, and handling a cornered, frightened animal exposes you and your pets to bites and spray. Second, <strong>the 1 km rule makes it pointless</strong> — a raccoon released legally nearby returns to the same garbage or den. Third, <strong>orphaning risk</strong> — an adult raccoon or skunk on your property in spring or summer is very likely a mother with young hidden somewhere you cannot see.</p>
          <p>A licensed wildlife-control operator solves all three at once. They use <strong>one-way eviction doors</strong> that let the family leave but not return, they know how to check for and reunite young, and they operate under the proper authorizations for rabies-vector species. It costs more than a trap from a hardware store, but it is legal, safe, and — because it addresses the den and the entry point rather than removing a single animal — it actually works. If you want a sense of what professional wildlife work runs in Canada versus a DIY attempt, our <Link href="/pest-control-cost-canada">pest control cost guide</Link> lays out the ranges.</p>

          <h2>How to Choose a Live Trap (When You Genuinely Need One)</h2>
          <p>For the narrow set of legal, humane cases — mostly groundhogs and small rodents you can release on-site — here is what actually separates a good cage trap from a frustrating one. These are the features worth paying for and the ones that are marketing.</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Trap size</th>
                  <th className="px-4 py-3 text-left">Our pick</th>
                  <th className="px-4 py-3 text-left">Target animals</th>
                  <th className="px-4 py-3 text-left">Doors</th>
                  <th className="px-4 py-3 text-left">Check price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: 'Small', pick: 'Havahart small 1-door', target: 'Squirrels, chipmunks, rats, weasels', doors: '1', search: 'havahart small live animal trap' },
                  { size: 'Medium', pick: 'Havahart medium 1-door', target: 'Groundhogs, large squirrels, skunks', doors: '1', search: 'havahart live animal trap medium' },
                  { size: 'Large', pick: 'Havahart large 1-door', target: 'Raccoons, groundhogs, feral cats', doors: '1', search: 'havahart large live animal trap' },
                  { size: 'Two-door', pick: 'Havahart two-door', target: 'Skittish squirrels, feral cats', doors: '2', search: 'havahart two door live trap' },
                ].map(({ size, pick, target, doors, search }) => (
                  <tr key={size} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-bold text-brand-800">{size}</td>
                    <td className="px-4 py-3 text-gray-800">{pick}</td>
                    <td className="px-4 py-3 text-gray-700">{target}</td>
                    <td className="px-4 py-3 text-gray-700">{doors}</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search={search} block>Check price →</BuyLink></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>Right size, sized up if unsure.</strong> An undersized trap can catch an animal partway and let the door injure it; an oversized one lets a small animal skirt the trigger. For a groundhog caught between medium and large, choose the larger.</li>
            <li><strong>Galvanized steel and a smooth internal edge.</strong> Rust resistance matters in a wet Canadian yard, and a smooth interior reduces the chance a panicking animal injures its nose or paws.</li>
            <li><strong>A sensitive, adjustable trigger.</strong> Lighter animals (squirrels, chipmunks) need a pan that fires without a lot of weight; a stiff trigger produces empty trips and near-misses that make the animal trap-shy.</li>
            <li><strong>A solid door latch that stays shut.</strong> Groundhogs and raccoons are strong and persistent; a flimsy latch means escapes, and an escaped animal rarely re-enters.</li>
            <li><strong>Handle guards.</strong> A shielded carry handle keeps your fingers away from claws and teeth during the short window you are moving the trap to release.</li>
          </ul>
          <p>What is <em>not</em> worth chasing: gimmicky “smart” features, oversized capacity you will never use, and the cheapest thin-gauge traps whose doors bend after a season. A mid-priced galvanized trap in the correct size from an established brand is the sensible buy — you are paying for the door mechanism and the steel, not the box.</p>

          <h2>Buy a Trap, or Spend the Same Money Elsewhere?</h2>
          <p>Because a cage trap and a professional call sit at very different price points, it is worth being honest about where the money is best spent — and the answer depends entirely on the animal and the situation.</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Your situation</th>
                  <th className="px-4 py-3 text-left">Best spend</th>
                  <th className="px-4 py-3 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { s: 'Groundhog under a shed, outside denning season', b: 'Buy a medium cage trap + hardware cloth', w: 'Legal on-site release plus burrow exclusion genuinely resolves it' },
                  { s: 'Squirrels in a soffit', b: 'Seal the entry point first; trap only if needed', w: 'Homing squirrels return within 1 km — exclusion is the real fix' },
                  { s: 'Raccoon in the attic (any season)', b: 'Licensed wildlife-control operator', w: 'Rabies-vector, likely young present, one-way eviction beats trapping' },
                  { s: 'Skunk under a deck', b: 'Licensed operator', w: 'Spray + rabies risk make DIY trapping unsafe' },
                  { s: 'General “something’s in the yard” nuisance', b: 'Deterrents + garbage security', w: 'No animal handling, no legal limits, and it prevents recurrence' },
                ].map(({ s, b, w }) => (
                  <tr key={s} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-semibold text-brand-800">{s}</td>
                    <td className="px-4 py-3 text-gray-800">{b}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The pattern is consistent: a trap is the right buy only when a legal on-site release plus exclusion solves the problem — mainly groundhogs and some rodents. Everywhere else, either a deterrent (cheaper, no handling) or a licensed operator (safe, legal, effective) beats a cage trap. Spending trap money on hardware cloth and a motion sprinkler prevents the next animal too; spending it on a trap you use wrong just relocates the problem 900 metres down the street. Voles are one of the clearest cases for a kill trap over a cage, because they are a turf pest with no realistic release option &mdash; see <Link href="/blog/how-to-get-rid-of-voles-canada" className="text-brand-700 underline">the vole trapping, guard and habitat plan</Link>.</p>

          <h2>How to Use a Live Trap Humanely, Step by Step</h2>
          <ol>
            <li><strong>Confirm it is legal and seasonal-safe first.</strong> Check municipal bylaws, confirm you are outside denning season, and be certain a 1 km release will actually help.</li>
            <li><strong>Place it on the animal’s path.</strong> Set the trap on a flat, stable surface along a runway or near the burrow or entry point, not in the open.</li>
            <li><strong>Bait past the trigger.</strong> Put the right bait at the very back so the animal must fully enter and step on the pan; a smear near the door produces a bait theft, not a catch.</li>
            <li><strong>Shade and check.</strong> Keep the trap out of direct sun, and check it at least every few hours during the day and first thing in the morning — never leave a captured animal for a full day just because the law allows 24 hours.</li>
            <li><strong>Cover before you approach.</strong> Drape a towel over the trap to calm the animal (and reduce skunk spray risk) before you lift it.</li>
            <li><strong>Release within the legal radius, then exclude.</strong> Release within 1 km, facing the trap door away from you, then immediately seal the entry point or fill the burrow so the vacancy does not refill.</li>
          </ol>
          <p>If any step makes you uneasy — the animal is a raccoon or skunk, there might be young, or you cannot commit to frequent checks — stop and call a professional. “I can technically do this” and “I should do this” are not the same thing with wildlife.</p>

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

          <h2>Related Wildlife Guides</h2>
          <ul>
            <li><Link href="/blog/raccoon-deterrent-canada">Raccoon Deterrents in Canada — What Actually Keeps Them Away</Link></li>
            <li><Link href="/blog/motion-activated-sprinkler-canada">Motion-Activated Sprinklers in Canada — Do They Work?</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost in Canada — DIY vs Professional</Link></li>
            <li><Link href="/pest-product-guides">All BuzzSkito Independent Pest Product Guides</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="wildlife" />
      </article>
    </>
  )
}
