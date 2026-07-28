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
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'how-to-keep-spiders-out-of-your-house'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'How to Keep Spiders Out of Your House — What Actually Works (2026)'
const META_TITLE = 'How to Keep Spiders Out of Your House: What Works (2026)'

const FAQS = [
  {
    question: 'Why am I suddenly seeing more spiders in late August and September?',
    answer: 'It is mating season, not the cold. From late August through October, mature male house spiders abandon their webs and wander in search of females — which is why you suddenly meet them crossing the living-room floor at 10 p.m. Most of these spiders did not just come in from outside; they have been living quietly in your basement, wall voids, and closets all along, and the males only become visible when they start roaming. That is also why the fall spike ends on its own by November: the wandering males mate and die.',
  },
  {
    question: 'Are house spiders dangerous?',
    answer: 'Almost never. There are no medically significant spiders established in most of Canada — the common cellar spiders, house spiders, wolf spiders, and jumping spiders you meet indoors either cannot pierce human skin or deliver a bite comparable to a mild bee sting at worst. Black widows exist only in small pockets of southern Canada and are extremely shy; brown recluses are not established in Canada at all, despite decades of misdiagnosed "recluse bites." In the southern US both species are real but reclusive — they hide in undisturbed clutter, not on your ceiling. Statistically, the spider on your wall is one of the least dangerous animals in your house.',
  },
  {
    question: 'What actually keeps spiders out of a house?',
    answer: 'Three things with real evidence behind them: sealing entry points (door sweeps, weatherstripping, caulking gaps, repairing window screens), reducing the insects spiders eat (fewer prey insects means the house cannot support a spider population), and physical removal (vacuum spiders and egg sacs; use sticky traps along baseboards to intercept and monitor). A PMRA-registered residual perimeter spray adds a chemical barrier at entry points if you want one. Peppermint oil, ultrasonic repellers, and conkers are the popular options with the weakest evidence.',
  },
  {
    question: 'Does peppermint oil really repel spiders?',
    answer: 'The honest answer: the evidence is weak. One small 2018 study in the Journal of Economic Entomology found peppermint oil repelled some spider species in a lab arena — but only some species, only at close range, and only while the scent stayed strong, which indoors means re-spraying every day or two. No field study has shown peppermint oil keeps spiders out of an actual house. If you enjoy the smell, a peppermint spray along windowsills is harmless — just treat it as air freshener with a possible minor bonus, not a control method. A door sweep outperforms it permanently for a similar one-time cost.',
  },
  {
    question: 'Should I kill house spiders or leave them alone?',
    answer: 'If you can tolerate them, leaving spiders alone is genuinely useful — every house spider is a free, 24-hour pest-control technician eating flies, mosquitoes, moths, carpet beetle larvae, and other spiders. If you cannot tolerate them, catch and release: use a glass and paper, a long-handled spider catcher, or a vacuum. Squishing is the worst option — it is messier, and if the spider is a female wolf spider carrying young, crushing her can scatter dozens of live spiderlings.',
  },
  {
    question: 'Why should I vacuum spiders instead of squishing them?',
    answer: 'Three reasons. First, the vacuum gets the egg sacs too — a single house spider egg sac can hold 100–400 eggs, so removing sacs from web corners prevents the next generation in one pass. Second, some wolf spiders carry their spiderlings on their back, and squishing the mother can scatter live young. Third, it is simply cleaner — no smear on the wall. Empty the canister or bag into an outdoor bin; most spiders do not survive the trip through the vacuum, and any that do are outside.',
  },
  {
    question: 'Do sticky traps work for spiders?',
    answer: 'Yes — with the right expectations. Flat glue boards placed along baseboards, behind furniture, in the garage, and in basement corners are extremely effective at intercepting wandering male spiders, which are exactly the ones you see in fall. They are equally valuable as monitoring: the trap that fills up tells you which room the activity is in and whether your sealing work is making a difference. What sticky traps will not do is eliminate an established population on their own, because web-building females rarely leave their webs. Traps intercept and inform; sealing and prey reduction do the eliminating.',
  },
  {
    question: 'What is the best spider spray?',
    answer: 'For Canadian buyers, choose a product with a PMRA registration number on the label — Doktor Doom residual sprays and Konk OnGuard are the widely stocked, Canadian-registered options for perimeter and crack-and-crevice treatment. Applied along door frames, foundation gaps, and basement window wells, a residual spray leaves a treated zone that kills spiders crossing it for several weeks. Skip US grey-market imports like Miss Muffet’s Revenge — a US staple that is not PMRA-registered for sale in Canada. And keep expectations calibrated: sprays complement sealing, they do not replace it.',
  },
  {
    question: 'Do ultrasonic spider repellers work?',
    answer: 'No. There is no credible evidence that plug-in ultrasonic devices repel spiders — spiders do not even hear airborne sound the way the marketing implies; they sense vibration through surfaces. Controlled studies on ultrasonic pest devices across insects and rodents consistently show no meaningful effect, and regulators including the US FTC have challenged manufacturers over unsupported claims since 2001. Money spent on an ultrasonic repeller buys you a night light; money spent on a door sweep buys you an actual barrier.',
  },
  {
    question: 'Do conkers (horse chestnuts) keep spiders away?',
    answer: 'No — this is a beloved myth, mostly from the UK. The idea is that horse chestnuts contain a compound spiders avoid, but when it has been put to the test (including a Royal Society of Chemistry–publicized school experiment) spiders walked straight over the conkers. Same verdict for citrus peel and cedar blocks: pleasant, harmless, and no measurable effect on spider traffic. Every autumn windowsill lined with conkers is decoration, not pest control.',
  },
  {
    question: 'Are house centipedes good or bad to have around?',
    answer: 'Good — genuinely. The fast, leggy house centipede that startles you in the bathtub is one of the most effective predators in your home: it actively hunts spiders, silverfish, carpet beetle larvae, cockroach nymphs, and fly larvae. It is essentially harmless to humans (bites are vanishingly rare and minor), it does not damage anything, and it does not build webs or nests. Seeing many of them is a signal, though — a healthy centipede population means there is plenty of prey, and often moisture, worth investigating in your basement.',
  },
  {
    question: 'When should I call a professional for spiders?',
    answer: 'Rarely, for spiders alone — most spider problems yield to sealing, vacuuming, sticky traps, and prey reduction within a few weeks. Consider a licensed pest-control professional if you have a confirmed black widow population near play areas (southern regions), a heavy recurring infestation that survives diligent DIY work, or webbing density that suggests a large underlying insect problem feeding the spiders. In that last case the pro will treat the prey insects as much as the spiders. Pricing for general pest visits is covered in our pest control cost guide.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Why spiders come inside in late August (mating season, not cold), and what actually keeps them out: sealing entry points, sticky traps, vacuuming, PMRA-registered perimeter sprays — plus the honest evidence on peppermint oil. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('how-to-keep-spiders-out-of-your-house')

export default function HowToKeepSpidersOutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Evidence-based guide to keeping spiders out of your house: fall mating-season myth-bust, entry-point sealing, sticky-trap monitoring, PMRA-registered perimeter sprays, and the honest science on peppermint oil.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Keep Spiders Out of Your House', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Keep Spiders Out of Your House</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Why spiders show up indoors every late August (hint: it&rsquo;s romance, not the weather), which prevention methods have real evidence behind them, and the honest truth about peppermint oil.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Spider & insect glue traps (baseboard monitoring)" search="spider insect glue traps" label="Monitoring pick" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To keep spiders out of your house, seal the routes they use — door sweeps, weatherstripping, caulked gaps, intact window screens — then reduce the insects they eat and vacuum the spiders and egg sacs you find. Sticky traps along baseboards intercept the wandering males you see in fall and tell you which rooms have activity. The late-August spider surge is mating season, not spiders escaping the cold: most of them were already living quietly in your house.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>The fall spike is mature males roaming for mates from late August to October — it ends on its own by November.</li>
              <li>No medically significant spiders are established in most of Canada; the house spiders you meet are effectively harmless.</li>
              <li>Sealing entry points is the only permanent fix: a door sweep blocks the single biggest walk-in route.</li>
              <li>Vacuum, don&rsquo;t squish — one egg sac can hold 100&ndash;400 eggs, and the vacuum removes it in one pass.</li>
              <li>In Canada, choose PMRA-registered perimeter sprays (Doktor Doom, Konk OnGuard) — not US grey-market imports.</li>
              <li>Peppermint oil has only weak lab evidence; ultrasonic repellers and conkers have none.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="spiders" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best Tools for Keeping Spiders Out"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Spider & Insect Glue Traps (multi-pack)',
                why: 'Flat glue boards along baseboards intercept exactly the spiders you see — wandering fall males — and double as a monitoring system that tells you which rooms have activity and whether your sealing work is paying off.',
                search: 'spider insect glue traps',
                score: 8.8,
                featured: true,
                pros: ['Intercepts wandering males where they travel', 'Shows you which rooms are active', 'Pesticide-free and budget-friendly'],
                cons: ['Monitoring more than elimination', 'Web-building females rarely walk into them'],
              },
              {
                badge: 'Best Permanent Fix',
                name: 'Exterior Door Sweep + Weatherstripping Kit',
                why: 'The gap under an exterior door is the number-one walk-in entrance for spiders (and their insect prey). A door sweep plus fresh weatherstripping closes it for good — and trims drafts and heating bills as a side effect.',
                search: 'exterior door sweep weatherstripping',
                score: 8.6,
                pros: ['Blocks the biggest entry route permanently', 'Also cuts drafts and energy costs', 'One-time job with basic tools'],
                cons: ['Takes an hour with a saw and screwdriver', 'Does nothing about spiders already inside'],
              },
              {
                badge: 'Best Perimeter Spray',
                name: 'Doktor Doom Residual Spray (PMRA-registered)',
                why: 'The widely stocked, Canadian-registered residual option for door frames, foundation gaps, and basement window wells — it leaves a treated zone that keeps working for weeks. Follow the label exactly.',
                search: 'doktor doom residual insecticide spray',
                score: 8.0,
                pros: ['PMRA-registered for Canadian homes', 'Weeks of residual protection at entry points', 'Widely available in Canada'],
                cons: ['A complement to sealing, not a substitute', 'Label rules matter — read before use'],
              },
              {
                badge: 'Best No-Kill Tool',
                name: 'Long-Handled Spider Catcher',
                why: 'A gentle bristle grabber on an arm&rsquo;s-length handle: catch the spider off the ceiling from a comfortable distance and release it outside. The humane option for households that would rather relocate than kill.',
                search: 'spider catcher long handle humane',
                score: 7.4,
                pros: ['Catch and release from a safe distance', 'No chemicals, no mess, kid-friendly demo', 'Reaches ceilings and corners'],
                cons: ['One spider at a time', 'Zero preventive effect'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Seeing spiders every fall?</strong> Start with the <em>Best Overall</em> glue traps to map the activity, then close the routes with the <em>Best Permanent Fix</em> door-sweep kit — that pairing solves most houses. <strong>Want a chemical backstop at entry points?</strong> Add the <em>Best Perimeter Spray</em>, the PMRA-registered Canadian option. <strong>Just want tonight&rsquo;s spider off the ceiling without killing it?</strong> The <em>Best No-Kill Tool</em> spider catcher is the answer.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Keeping Spiders Out — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Peak indoor season', 'Late August – October (male mating season, not cold)'],
                  ['Why they appear in fall', 'Mature males wander for mates; most lived indoors all along'],
                  ['Danger level (most of Canada)', 'No medically significant spiders established'],
                  ['Best permanent fix', 'Seal entry points — door sweeps, weatherstripping, caulk, screens'],
                  ['Best monitoring tool', 'Flat glue traps along baseboards and in corners'],
                  ['Best removal method', 'Vacuum — takes the spider and the egg sac (100–400 eggs) together'],
                  ['PMRA-registered sprays (Canada)', 'Doktor Doom residual sprays, Konk OnGuard'],
                  ['Grey-market imports to skip', 'Miss Muffet’s Revenge (US product, not PMRA-registered)'],
                  ['Peppermint oil evidence', 'Weak — one lab study, some species, no field proof'],
                  ['Ultrasonic repellers / conkers', 'No credible evidence for either'],
                  ['House centipedes', 'Leave them — they hunt spiders, silverfish, and roach nymphs'],
                  ['Underlying driver', 'Prey insects — fewer bugs indoors means fewer spiders'],
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

          <h2>Why Do Spiders Come Inside in Late August? (It&rsquo;s Not the Cold)</h2>
          <p>Every year, right on schedule, the last week of August turns quiet houses into spider theatres — one crossing the living-room floor at 10 p.m., another in the bathtub by morning. The near-universal explanation is that spiders are &ldquo;coming in to escape the cold.&rdquo; It is a tidy story, and it is wrong.</p>
          <p>What actually happens is mating season. From late August through October, mature male house spiders reach adulthood, abandon their webs and hiding spots, and start wandering in search of females. A male on a mission covers a lot of floor, and floors are where you notice him. Crucially, most of these spiders did not just arrive from the garden — arachnologists who have studied indoor spider populations consistently find that the species you meet in fall are <em>house</em> spiders that have been living in your basement, wall voids, closets, and window frames all along. The population did not spike; its visibility did.</p>
          <p>This reframing matters for two practical reasons. First, it tells you the fall surge is self-limiting — the wandering males mate and die, and by November the theatre closes on its own. Second, it tells you where to aim your effort: if the spiders are already resident, then squishing the ones you see is trimming leaves, while sealing entry points and cutting off their food supply is pulling roots. That is the plan this guide lays out.</p>

          <h2>First, the Reassuring Part: House Spiders Are Effectively Harmless</h2>
          <p>Before spending a dollar on control, calibrate the threat, because it is smaller than nearly anyone believes. There are <strong>no medically significant spiders established in most of Canada</strong>. The cast you actually meet indoors — cellar spiders (the spindly &ldquo;daddy long-legs&rdquo; type), common house spiders, the occasional wolf spider that hitchhiked in, and charismatic little jumping spiders — either cannot pierce human skin at all or can manage, at absolute worst, something like a mild bee sting. Genuinely dangerous encounters are so rare that Canadian emergency medicine treats &ldquo;spider bite&rdquo; diagnoses with heavy skepticism; most turn out to be infected scratches or other insect bites.</p>
          <p>The two famous villains deserve a sentence each. Black widows exist in Canada only in small pockets of the southern edge of the country, are extremely shy, and live in undisturbed outdoor clutter — woodpiles, sheds, rarely a living room. Brown recluses are <em>not established in Canada at all</em>, decades of misattributed &ldquo;recluse bites&rdquo; notwithstanding. If you are reading this from the southern United States, both species are real where you live, but the same behavioural truth applies: they are reclusive by nature and are found in undisturbed storage and clutter, not patrolling your ceiling.</p>
          <p>None of this means you have to enjoy sharing a bathroom with spiders. It means the goal is comfort, not safety — which frees you to pick calm, effective methods instead of reaching for the most aggressive spray on the shelf.</p>
          <p>That skepticism has a practical use if you ever find an unexplained sore. Published reviews have found the large majority of suspected spider bites turn out to be something else, most often a bacterial skin infection — we go through the tell-tale differences in our <Link href="/blog/what-does-a-spider-bite-look-like">spider-bite identification guide</Link>.</p>

          <h2>What Works vs What Doesn&rsquo;t: The Evidence Table</h2>
          <p>Spider prevention is drowning in folk remedies, so here is the field sorted by evidence. Note the pattern: the physical methods carry the weight, the chemical barrier is a legitimate supplement, and the popular &ldquo;natural&rdquo; options bring up the rear.</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">What it does</th>
                  <th className="px-4 py-3 text-left">Evidence</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Sealing entry points</td>
                  <td className="px-4 py-3 text-gray-700">Door sweeps, weatherstripping, caulk, and screen repair physically close the routes in</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Strong</strong> — the only permanent fix</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="exterior door sweep weatherstripping" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Sticky traps</td>
                  <td className="px-4 py-3 text-gray-700">Glue boards along baseboards intercept wandering males and map room-by-room activity</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Strong</strong> — for interception &amp; monitoring</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="spider insect glue traps" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Vacuum + egg-sac removal</td>
                  <td className="px-4 py-3 text-gray-700">Removes the spider and its 100&ndash;400-egg sac in one pass; no chemicals</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Strong</strong> — free and immediate</td>
                  <td className="px-4 py-3 text-xs text-gray-500">You own one already</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">PMRA perimeter spray</td>
                  <td className="px-4 py-3 text-gray-700">Residual barrier at door frames, foundation gaps, window wells; works for weeks</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Good</strong> — as a supplement to sealing</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom residual insecticide spray" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Peppermint oil</td>
                  <td className="px-4 py-3 text-gray-700">Strong scent may deter some species at close range while fresh</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Weak</strong> — one lab study, no field proof</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Optional bonus only</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ultrasonic repellers / conkers</td>
                  <td className="px-4 py-3 text-gray-700">Marketed heavily every fall; spiders sense surface vibration, not plug-in ultrasound</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">None</strong> — not recommended</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Skip entirely</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current availability of the three tools that do the heavy lifting:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="spider insect glue traps">Spider glue traps →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="exterior door sweep weatherstripping">Door sweep kit →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="doktor doom residual insecticide spray">Doktor Doom spray →</BuyLink>
          </div>

          <h2>Step 1: Seal the Entry Points (The Only Permanent Fix)</h2>
          <p>Spiders do not chew, drill, or force anything — every spider in your house walked in through an opening that already existed, or hatched from an egg sac that rode in on something. Close the openings and you have solved the problem at the architectural level, permanently, with zero ongoing cost. Work through the list in order of impact:</p>
          <ul>
            <li><strong>The gap under exterior doors.</strong> This is the superhighway. If you can see daylight under a door, spiders, and the insects they follow, treat it as an open invitation. An exterior-grade door sweep installs in under an hour with a screwdriver and closes the single biggest entry route in the house.</li>
            <li><strong>Perished weatherstripping.</strong> Compressed, cracked foam around door and window frames leaves corner gaps that are spider-sized by definition. Replacing it is cheap, and the payoff is double: fewer arthropods and lower heating bills.</li>
            <li><strong>Window screens.</strong> A torn or gapped screen turns every summer evening of open windows into an arthropod open house. Patch small tears with adhesive screen patches; re-mesh anything worse. Check that screens seat snugly in their frames — a bowed frame leaves an entry slot along the edge.</li>
            <li><strong>Utility penetrations.</strong> Where cable, gas, AC lines, and dryer vents pass through the wall, the hole is nearly always bigger than the pipe. Stuff larger gaps with copper mesh or backer rod, then seal with exterior caulk. Cover vent openings with fine insect mesh where the vent design allows it.</li>
            <li><strong>Foundation cracks and basement windows.</strong> Walk the foundation with a caulk gun on a dry day. Basement window wells are classic spider real estate — clear the leaf litter that accumulates in them and screen the wells if spiders are a recurring theme.</li>
          </ul>
          <p>One honest caveat: sealing keeps new spiders out; it does nothing about the residents already inside. That is what the next two steps are for — and it is why the glue traps matter, because they will tell you whether your interior sightings are fading as the resident population winds down.</p>

          <h2>Step 2: Vacuum, Don&rsquo;t Squish</h2>
          <p>For the spiders already indoors, the vacuum cleaner is the best control device you own, and it beats the rolled-up magazine on every axis:</p>
          <ul>
            <li><strong>It removes egg sacs.</strong> This is the big one. A single common house spider egg sac — the small silk ball tucked into a web corner — can hold 100&ndash;400 eggs. Squish the spider and leave the sac, and you have accomplished close to nothing. A vacuum pass along cobwebbed corners, behind furniture, around basement ceiling joists, and inside closet corners removes spiders, webs, and the next generation in one motion.</li>
            <li><strong>It avoids the wolf-spider surprise.</strong> Female wolf spiders carry their spiderlings on their abdomen. Crush one with young aboard and the survivors scatter — dozens of them, in every direction. The vacuum avoids the memory entirely.</li>
            <li><strong>It doubles as prevention.</strong> Regular vacuuming of the corners, baseboards, and undisturbed zones spiders prefer removes not just spiders but the web anchor points and the debris that shelters their prey.</li>
          </ul>
          <p>Empty the canister or bag into an outdoor bin. And if the spider is large, magnificent, and you would rather it lived — this is what the long-handled spider catcher in our picks is for. Catch it at arm&rsquo;s length, walk it outside, release. Children find the demonstration formative; the spider is indifferent but alive.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="spider catcher long handle humane">Check spider catcher availability →</BuyLink>
          </div>

          <h2>Step 3: Sticky Traps — Your Monitoring System</h2>
          <p>Flat glue boards are the most underrated tool in spider management, and the reason is that people misunderstand the job. They are not primarily a kill device — they are <em>intelligence</em>. Placed flush against baseboards, behind the couch, along the garage wall, under the basement stairs, and behind the toilet, they intercept exactly the population you actually see: ground-travelling wanderers, which in fall means the roaming males.</p>
          <p>Read them like instruments. The trap in the furnace room that fills while the bedroom trap stays empty just told you where the activity is. Traps that catch heavily in week one and taper to nothing by week four are documenting your success. And the bycatch is diagnostic too: a trap full of sowbugs, springtails, or <Link href="/blog/how-to-get-rid-of-earwigs-canada">earwigs that wandered in from the mulch bed</Link> is a moisture report on your basement, and a trap full of prey insects explains precisely why spiders find your house hospitable — which brings us to the food supply.</p>
          <p>Expectations, honestly stated: web-building females rarely leave their webs, so glue boards will not eliminate an established population alone. They intercept, they inform, and they cost little enough to deploy a dozen. Pair them with sealing and vacuuming, and they close the loop on whether the plan is working.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="spider insect glue traps">Check spider glue trap multi-packs →</BuyLink>
          </div>

          <h2>Step 4 (Optional): A PMRA-Registered Perimeter Spray — and the Grey-Market Trap</h2>
          <p>If you want a chemical backstop, the right tool is a residual insecticide applied as a perimeter and crack-and-crevice treatment: along exterior door frames, foundation gaps, basement window wells, and the garage-to-house threshold. A residual product leaves a treated zone that keeps killing spiders (and their prey) that cross it for several weeks — a legitimate supplement to sealing, though never a substitute for it, since spray barriers fade and caulk does not.</p>
          <p>Here is where Canadian buyers need to slow down, because the internet&rsquo;s spider-spray advice is written almost entirely for Americans. In Canada, domestic pesticides must be registered with Health Canada&rsquo;s PMRA and carry a registration number on the label. The widely stocked, Canadian-registered options for this job are <strong>Doktor Doom</strong> residual sprays and <strong>Konk OnGuard</strong> — both formulated and labelled for exactly this kind of perimeter and crack-and-crevice use in and around homes. That label is not bureaucratic decoration: it is the tested guidance on where the product may be applied, in what amounts, and with what re-entry precautions.</p>
          <p>The product American blogs will push at you — <strong>Miss Muffet&rsquo;s Revenge</strong>, a long-standing US spider-spray staple — is <strong>not PMRA-registered for sale in Canada</strong>. The same applies to various US-market Terro and Ortho spider formulations that differ from their Canadian counterparts. Importing unregistered pesticides is not a clever workaround; it is buying a product whose Canadian legal status, labelling, and formulation review simply do not exist. With registered alternatives on the shelf at Canadian retailers, there is no reason to go grey-market. Whatever you buy, read the label twice and follow it exactly — including keeping treated surfaces away from children and pets until dry.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="doktor doom residual insecticide spray">Check Doktor Doom residual spray →</BuyLink>
          </div>

          <h2>The Peppermint Oil Question, Answered Honestly</h2>
          <p>Peppermint oil is the internet&rsquo;s favourite spider remedy, so it deserves a straight answer rather than a wink. The best evidence in its favour is a small 2018 study in the <em>Journal of Economic Entomology</em> that found peppermint essential oil repelled spiders in a laboratory arena — a real result, worth taking seriously, and also worth reading closely: it worked on <em>some</em> species and not others, at close range, in a controlled chamber, while the volatile scent was fresh. Translating that to a real house means re-spraying windowsills every day or two, forever, to maybe deter a fraction of the species you host. No field study has ever demonstrated that peppermint oil keeps spiders out of an actual home.</p>
          <p>Our verdict: if you like the smell, a peppermint spray along windowsills and door frames is a pleasant ritual with a possible marginal bonus, and it is completely harmless. Just be clear-eyed that you are buying air freshener with a hypothesis attached, and that a door sweep — a comparable one-time spend — will still be working in five years without a single re-application. The same folk-remedy shelf holds conkers, citrus peel, and cedar blocks, all of which have failed the tests they have been given, and plug-in ultrasonic repellers, which have failed every test across every pest they have been pointed at.</p>

          <h2>A Word in Defence of the House Centipede</h2>
          <p>While you are patrolling the basement, you may meet the house centipede — fast, fringed with improbable legs, and responsible for more shrieks per sighting than any spider. Here is the case for letting it be: the house centipede is one of the most effective predators your home can host. It actively hunts spiders, silverfish, carpet beetle larvae, cockroach nymphs, and fly larvae, it is essentially harmless to people, it builds no webs and damages nothing, and it will never multiply beyond what the food supply supports. In a guide about reducing spiders, it is literally on your side.</p>
          <p>Its real value is as a messenger. A house with many centipedes is a house with plenty of prey — and usually a moisture source keeping that prey happy. Fix the damp (a dehumidifier in the basement, a fixed leak, cleared window wells) and both the prey and the predators taper off on their own. That is the pattern worth internalizing, and it is the last piece of the plan &mdash; we take it apart in full in <Link href="/blog/how-to-get-rid-of-centipedes-canada">the house centipede guide</Link>.</p>

          <h2>The Root Cause: Spiders Follow Food</h2>
          <p>Everything above manages spiders directly. The deepest fix manages their economy. Spiders settle where hunting is good — a house with abundant flies, gnats, moths, and other small insects will recruit and retain spiders no matter how many you remove, because the vacancy keeps getting re-advertised. Cut the prey base and the spider population follows it down without another intervention:</p>
          <ul>
            <li><strong>Exterior lighting.</strong> White outdoor lights are insect magnets, and spiders famously build where the buffet lands. Swap entry lights for warm-toned or yellow &ldquo;bug&rdquo; LEDs and you will notice fewer webs around the porch within weeks.</li>
            <li><strong>Indoor fliers.</strong> A kitchen with a fruit fly problem is a spider feeding station. Our guides on <Link href="/blog/how-to-get-rid-of-fruit-flies-canada">getting rid of fruit flies</Link> and the <Link href="/blog/best-fruit-fly-trap-canada">best fruit fly traps</Link> shut that supply line down; for general small fliers, an indoor UV trap like the one in our <Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy review</Link> quietly reduces the prey base in a problem room.</li>
            <li><strong>Clutter and storage.</strong> Cardboard boxes on basement floors are spider condominiums — dark, undisturbed, corrugated hunting grounds. Move long-term storage into sealed plastic totes on shelving, and you remove both the habitat and the prey shelter in one upgrade.</li>
            <li><strong>Moisture.</strong> Damp basements feed the springtails, sowbugs, and silverfish at the bottom of the food chain. A dehumidifier is, indirectly, spider control.</li>
          </ul>
          <p>Put together, the whole plan fits in a weekend: seal the routes, vacuum the residents and their egg sacs, lay glue traps to watch the trend line, optionally lay down a PMRA-registered perimeter treatment, and starve the food chain. Do that in early August and the annual late-summer spider theatre plays to an empty house. If, despite diligent work, you face a genuinely heavy recurring infestation — or a confirmed black widow population in a southern region — that is the point where a licensed local pest professional earns their fee; our <Link href="/pest-control-cost-canada">pest control cost guide</Link> covers what that typically runs.</p>

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

          <h2>Related Household Pest Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-get-rid-of-fruit-flies-canada">How to Get Rid of Fruit Flies — Full Playbook</Link></li>
            <li><Link href="/blog/best-fruit-fly-trap-canada">Best Fruit Fly Trap Canada — Tested Picks</Link></li>
            <li><Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy Indoor Insect Trap — Honest Canadian Review</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-wasps-canada">How to Get Rid of Wasps — Canadian Guide</Link></li>
            <li><Link href="/blog/raccoon-deterrent-canada">Raccoon Deterrents That Actually Work in Canada</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost in Canada — What Pros Charge</Link></li>
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
