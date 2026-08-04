import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'how-long-do-ticks-live'
const DATE = '2026-07-15'
const UPDATED = '2026-07-15'
const TITLE = 'How Long Do Ticks Live — and Can They Live in Your House? (Ontario)'
const META_TITLE = 'How Long Do Ticks Live? Without a Host, Indoors'

const FAQS = [
  {
    question: 'How long do ticks live?',
    answer: 'Most ticks live 2 to 3 years, spread across three feeding stages — larva, nymph, and adult. A blacklegged (deer) tick, the main species of concern in Ontario, takes a single blood meal at each stage, then molts or lays eggs. The full cycle only completes if the tick finds a host at each stage; if it does not, it can wait many months between meals, so its lifespan is measured in years, not days or weeks.',
  },
  {
    question: 'Can ticks live in your house?',
    answer: 'Almost never for Ontario’s common species. Blacklegged (deer) ticks and American dog ticks need very high humidity (roughly 80%+) to survive, and typical heated indoor air is far too dry — so a tick brought inside on clothing or a pet usually dries out and dies within a few days to a couple of weeks and cannot establish an infestation. The one exception worldwide is the brown dog tick, which can complete its whole life cycle indoors, but it is uncommon in Canada. Ticks do not colonise homes the way fleas or bed bugs do.',
  },
  {
    question: 'How long can a tick live without a host?',
    answer: 'Surprisingly long. In cool, humid conditions an unfed blacklegged tick can survive several months to well over a year between blood meals — adults that miss a host in fall can wait until the next season. What kills them is not hunger but drying out (desiccation). In a dry indoor environment that same tick may last only days to a few weeks, because it cannot rehydrate. Humidity, not food, is the main factor in how long a host-less tick survives.',
  },
  {
    question: 'How long can a tick live in a house?',
    answer: 'Usually only a few days to about two weeks. Heated, air-conditioned indoor air sits far below the humidity ticks need, so a blacklegged or dog tick that hitches a ride inside slowly dehydrates and dies. It will not breed indoors or spread through the house. The rare exception is the brown dog tick, which tolerates dry indoor air and can infest homes and kennels — but it is not established in Ontario’s outdoor climate and is an uncommon find here.',
  },
  {
    question: 'Do ticks die in winter?',
    answer: 'No — a frost does not kill them all. This is one of the most common tick myths. Blacklegged ticks survive Ontario winters by sheltering in leaf litter under an insulating layer of snow, where they enter a dormant state. Snow cover actually protects them from the coldest air. Some ticks die during hard cold snaps with little snow, but many survive, which is why ticks reappear every spring — and why adult blacklegged ticks can even be active on mild winter days above about 4°C.',
  },
  {
    question: 'How do ticks survive the winter?',
    answer: 'Blacklegged ticks overwinter outdoors, mostly as unfed nymphs or adults, tucked into leaf litter, brush piles, and the duff at the base of shrubs and trees. That layer, blanketed by snow, stays close to freezing rather than plunging to the air temperature, and it holds moisture. The ticks slow their metabolism and wait out the cold. Public Health Ontario notes blacklegged ticks can become active whenever daytime temperatures rise above roughly 4°C, so warm spells in late fall, winter, and early spring can bring them out.',
  },
  {
    question: 'How long can a tick stay on a dog?',
    answer: 'An attached, feeding tick typically stays on a dog for 3 to 10 days, until it is fully engorged, then drops off on its own to molt or lay eggs. A dog can also carry ticks that are still crawling and have not yet bitten. Because a feeding tick can remain attached for days, and because ticks can transmit disease during that time, check dogs after every walk in grassy or wooded areas, use a vet-recommended tick preventive, and remove any attached tick promptly with fine-tipped tweezers.',
  },
  {
    question: 'How long do ticks stay attached to a human?',
    answer: 'If undetected, a blacklegged tick can stay attached and feed for 3 to 7 days before dropping off engorged. This is why prompt removal matters: the Public Health Agency of Canada notes that the risk of Lyme disease transmission rises the longer a tick is attached, with the risk generally low in the first 24 hours and increasing after that. Do a tick check after time outdoors, remove any attached tick straight out with fine-tipped tweezers, and see a healthcare provider if you develop a rash, fever, or flu-like symptoms.',
  },
  {
    question: 'How do ticks die naturally?',
    answer: 'The biggest natural killer of ticks is drying out (desiccation) — a tick that cannot find humid shelter dehydrates and dies. Others die by failing to find a host before their energy reserves run out, from predators such as birds, ants, spiders, and certain wasps, from fungi and parasitic nematodes, and from extreme heat or a hard freeze without protective snow or leaf litter. Adult female ticks also die naturally after their final act — laying a single large batch of eggs.',
  },
  {
    question: 'Can ticks infest a house like fleas or bed bugs?',
    answer: 'For Ontario’s common ticks, no. Blacklegged and American dog ticks cannot complete their life cycle in dry indoor air, so they do not build up populations inside a home. If you keep finding ticks indoors, they are almost always being carried in fresh on people or pets from the yard — the fix is outdoor: reduce tick habitat around the property and check pets before they come inside. The only tick that truly infests homes is the brown dog tick, which is rare in Canada.',
  },
  {
    question: 'Will a hot, dry summer kill ticks?',
    answer: 'Hot, dry conditions do stress and kill ticks, because they lose water quickly and must retreat to shaded, humid leaf litter to rehydrate. A prolonged heat wave with low humidity can knock down tick activity in exposed, sunny areas. But shaded yard edges, woodland borders, ravines, and damp leaf litter stay humid enough for ticks to ride out the heat, so a dry summer reduces tick pressure without eliminating it — the shady margins of your property remain the risk zone.',
  },
  {
    question: 'How long can ticks live in clothes or carpet?',
    answer: 'A tick on clothing or carpet is living on borrowed time because indoor air is too dry, but it can survive a few days if conditions are damp. To be sure, tumble-dry clothes on high heat for at least 10 minutes — dry heat kills ticks faster than washing, since they resist water and can survive a normal wash cycle. Vacuuming carpets and emptying the canister removes any stragglers. Ticks will not establish or breed in fabric or carpet indoors.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'How long do ticks live? Two to three years outdoors, but only days to two weeks indoors, where air is too dry. Stage-by-stage table plus Ontario winter facts.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function HowLongDoTicksLivePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'How long ticks live, whether they can live in your house, survival without a host, winter survival, and how long ticks stay on dogs — Ontario guide.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How Long Do Ticks Live?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How Long Do Ticks Live?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">How many years ticks live, how long they last without a host, whether they can live in your house, and why a frost doesn&rsquo;t kill them all &mdash; the biology behind Ontario&rsquo;s ticks, explained calmly.</p>
        </div>
      </section>

      {/* Answer-first capsule — AI-extraction block */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
            Ticks live 2 to 3 years across their larva, nymph, and adult stages, and can survive many months without a host in cool, humid conditions. They rarely live in your house &mdash; heated indoor air is too dry, so a tick brought inside usually dies within days. Most Ontario ticks overwinter outdoors under leaf litter and snow, so a frost does not kill them all.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Most ticks live 2 to 3 years, taking a single blood meal at each of three stages &mdash; larva, nymph, and adult.</li>
            <li>An unfed blacklegged tick can survive several months to over a year without a host in cool, humid conditions of roughly 80% or higher.</li>
            <li>Heated indoor air often sits at just 30&ndash;50% humidity, so a tick carried inside usually dehydrates within a few days to about two weeks.</li>
            <li>Adult blacklegged ticks can become active whenever daytime temperatures rise above roughly 4&deg;C, so a single frost does not kill them all.</li>
            <li>An attached tick feeds on a dog for 3 to 10 days and on a human for 3 to 7 days before dropping off engorged.</li>
            <li>The only tick that truly infests homes is the brown dog tick, which is uncommon in Canada.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
        </div>
      </div>

      {/* Lifespan-by-stage table */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">How Long Do Ticks Live at Each Stage?</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">The blacklegged (deer) tick &mdash; Ontario&rsquo;s main Lyme-carrying species &mdash; takes one blood meal at each of three stages and molts between them. The whole cycle usually spans about two years, but a tick that misses a host can wait months for the next one.</p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Life stage</th>
                  <th className="px-3 py-2 text-left">Typical duration</th>
                  <th className="px-3 py-2 text-left">Feeds on a host?</th>
                  <th className="px-3 py-2 text-left">What happens next</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Egg', 'A few weeks to months', 'No', 'A female lays one batch of ~1,000–3,000 eggs, then dies.'],
                  ['Larva (6 legs)', '~Weeks active; can wait months', 'Once', 'Feeds once (often on a mouse), then molts to a nymph.'],
                  ['Nymph (8 legs)', 'Overwinters; active late spring–summer', 'Once', 'Poppy-seed sized; the main Lyme-transmitting stage. Molts to adult.'],
                  ['Adult (8 legs)', 'Can survive many months unfed', 'Once', 'Active spring and fall. Female feeds, mates, lays eggs, then dies.'],
                ].map(([stage, dur, feeds, next]) => (
                  <tr key={stage} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800 whitespace-nowrap">{stage}</td>
                    <td className="px-3 py-2 text-gray-700">{dur}</td>
                    <td className="px-3 py-2 font-bold text-amber-800 whitespace-nowrap">{feeds}</td>
                    <td className="px-3 py-2 text-gray-700">{next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Life-cycle stages and timing per the <a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html" target="_blank" rel="noopener" className="underline hover:text-brand-700">Public Health Agency of Canada</a> and the <a href="https://www.cdc.gov/ticks/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC)</a>. Timing varies by species and weather.</p>
        </div>
      </section>

      <article className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>How Long Do Ticks Live?</h2>
          <p>Most ticks live <strong>2 to 3 years</strong>. That lifespan is stretched across three feeding stages &mdash; larva, nymph, and adult &mdash; with a molt in between each one. In Ontario, the species that matters most for human health is the <strong>blacklegged (deer) tick</strong> (<em>Ixodes scapularis</em>), which can carry the bacterium that causes Lyme disease; the <strong>American dog tick</strong> is also common in grassy areas but is a lower Lyme risk.</p>
          <p>Here is the key to understanding tick lifespan: a tick takes only <strong>one blood meal per stage</strong>. A larva feeds once and molts into a nymph. The nymph feeds once and molts into an adult. The adult female feeds once, mates, lays a single large batch of eggs, and then dies. Because a tick has to find a host to advance to the next stage, and because it can wait a very long time for that host, the calendar of a tick&rsquo;s life is measured in years rather than days. A larva that hatches one summer may not become an egg-laying adult until roughly two years later.</p>
          <p>This slow, patient life cycle is exactly why ticks persist. They do not need to feed often, they do not need to breed quickly, and a single surviving female can seed the next generation with thousands of eggs.</p>

          <h2>How Long Can a Tick Live Without a Host?</h2>
          <p>This is where ticks surprise people. An unfed blacklegged tick can survive <strong>several months to well over a year without a blood meal</strong>, provided it stays cool and humid. Adults that fail to find a host in the fall can go dormant and simply wait for the next season. Ticks are built for patience, not for frequent feeding.</p>
          <p>What actually limits a host-less tick is not starvation &mdash; it is <strong>drying out</strong>. Ticks absorb and lose water through their bodies, and they depend on high humidity to stay hydrated. In the moist microclimate of leaf litter or long grass, a tick can outlast an entire season between meals. Move that same tick into dry air and its clock speeds up dramatically. This single fact &mdash; that humidity, not food, governs tick survival &mdash; is the reason ticks thrive in shaded, damp yard edges and struggle almost everywhere else.</p>

          <h2>Can Ticks Live in Your House?</h2>
          <p><strong>For Ontario&rsquo;s common ticks, the answer is essentially no.</strong> Blacklegged ticks and American dog ticks need relative humidity of roughly 80% or higher to survive for long. Heated, air-conditioned indoor air typically sits far below that &mdash; often 30–50% &mdash; which is a desert to a tick. A tick carried inside on a pant leg or a dog will usually dehydrate and die within a few days to a couple of weeks, and it cannot breed or establish a population indoors.</p>
          <p>That is genuinely reassuring, and it is the opposite of how fleas and bed bugs behave. Fleas and bed bugs are adapted to complete their life cycles inside your home; blacklegged and dog ticks are not. If you keep finding ticks indoors, they are almost always being <strong>carried in fresh</strong> from the yard on people or pets &mdash; not reproducing in the carpet. The fix is therefore outdoors: reduce tick habitat around the property and check pets before they come in.</p>
          <p>There is one worldwide exception worth naming so you can rule it out: the <strong>brown dog tick</strong> (<em>Rhipicephalus sanguineus</em>) tolerates dry indoor air and <em>can</em> complete its entire life cycle inside homes and kennels, occasionally causing true indoor infestations. It is uncommon in Canada&rsquo;s outdoor climate, and most Ontario households will never encounter it, but if a home has a genuine repeat tick problem tied to a dog, it is worth mentioning to a veterinarian or licensed pest professional.</p>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Ticks live in your yard&rsquo;s edges, not your living room</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Because ticks survive in the humid grass and leaf litter around your property &mdash; not indoors &mdash; the effective control point is the yard. BuzzSkito treats the lawn edges, shaded borders, and fence lines where ticks wait, with a seasonal tick program (from $597/season, or $497 bundled with a mosquito plan) and single treatments from $99.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/tick-control" className="btn-primary-sm">Explore Tick Control &rarr;</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>How Long Can a Tick Live in a House?</h2>
          <p>When a tick does end up indoors, it usually survives only <strong>a few days to about two weeks</strong>. The countdown is driven entirely by moisture loss. On a person&rsquo;s clothing, in a laundry pile, or crawling across a carpet, the tick cannot rehydrate the way it would in leaf litter, so it steadily dries out and dies. It will not lay eggs indoors and it will not spread from room to room.</p>
          <p>To close the loop and avoid a tick hitchhiking back onto someone, the most reliable step is <strong>dry heat</strong>: tumble-dry clothing on high for at least 10 minutes. Ticks resist water surprisingly well &mdash; a normal cold wash cycle will not reliably kill them &mdash; but they die quickly in a hot dryer. Vacuuming and emptying the canister handles any tick that dropped onto floors or upholstery. (For more on why ticks survive water but not dry heat, see our companion guide on whether <Link href="/blog/can-ticks-fly-jump-swim">ticks can fly, jump, or swim</Link>.)</p>
          <p>The order matters as much as the heat does. Dry clothing lets the hot air reach the tick straight away, whereas damp fabric holds the surface temperature down and stretches the cycle out considerably &mdash; which is the whole case for <Link href="/blog/do-ticks-die-in-the-washing-machine">why the dryer kills ticks and the wash often does not</Link>.</p>

          <h2>Do Ticks Die in Winter? Does a Frost Kill Them?</h2>
          <p><strong>No &mdash; a frost does not kill them all, and this is one of the most damaging tick myths in Ontario.</strong> Many people assume the first hard freeze wipes the slate clean, then are caught off guard when ticks reappear the moment the snow melts. Blacklegged ticks are cold-adapted. They do not die at the first frost; they shelter and wait.</p>
          <p>In fact, adult blacklegged ticks can be active on any mild day. Public Health Ontario notes that blacklegged ticks can seek a host whenever daytime temperatures rise above roughly <strong>4°C</strong>. That means a sunny stretch in November, a January thaw, or an early-March warm-up can all put questing adult ticks back in the grass &mdash; long before most people are thinking about tick season at all. This is a major reason the season is longer than most homeowners expect; our <Link href="/blog/tick-season-ontario-when-are-ticks-active">Ontario tick-season guide</Link> breaks down the month-by-month activity windows.</p>

          <h2>How Do Ticks Survive the Winter?</h2>
          <p>Blacklegged ticks overwinter <strong>outdoors</strong>, mostly as unfed nymphs or adults, by burrowing into the <strong>leaf litter</strong> and the loose organic layer at the base of shrubs, brush piles, and woodland edges. Two things keep them alive there:</p>
          <ul>
            <li><strong>Snow is an insulator, not a killer.</strong> A blanket of snow traps ground warmth and keeps the leaf-litter layer hovering near freezing, rather than plunging to the frigid air temperature above it. Counter-intuitively, a snowy winter can protect more ticks than a cold, bare one.</li>
            <li><strong>They slow down and hold moisture.</strong> Ticks drop into a dormant, low-metabolism state and rely on the humidity of the leaf litter to avoid drying out until spring.</li>
          </ul>
          <p>Ticks <em>do</em> die during hard cold snaps &mdash; especially deep, sustained cold with little or no snow cover to insulate the ground. But enough survive every year that the population carries over. That carryover is exactly why tick-habitat reduction matters most in <strong>fall and early spring</strong>: clearing leaf litter and brush removes the sheltered overwintering sites before the next generation gets going. Our <Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">guide to keeping ticks out of your yard</Link> walks through the specific steps.</p>

          <h2>How Long Can a Tick Stay on a Dog?</h2>
          <p>An <strong>attached, feeding tick usually stays on a dog for 3 to 10 days</strong>, until it is fully engorged with blood, then detaches on its own and drops off to molt or (if it is an adult female) to lay eggs. A dog can also carry ticks that are still crawling and have not yet bitten &mdash; those may be brushed off, found on a collar, or picked up during a check.</p>
          <p>Because a feeding tick can stay attached for the better part of a week, and because ticks can transmit disease during that window, dogs are worth checking after every walk through grassy or wooded areas. Run your hands over the ears, neck, chest, armpits, groin, and between the toes, where ticks like to attach. Use a <strong>vet-recommended tick preventive</strong>, and remove any attached tick promptly with fine-tipped tweezers, gripping close to the skin and pulling straight out. If you are unsure whether your dog was exposed or is showing symptoms, ask your veterinarian &mdash; that is a medical question for the animal, not one to guess at.</p>

          <h2>How Long Do Ticks Stay Attached to a Human?</h2>
          <p>Left undetected, a blacklegged tick can feed on a person for <strong>3 to 7 days</strong> before dropping off engorged. Prompt removal is the single most useful thing you can do, because the Public Health Agency of Canada notes that the risk of Lyme disease transmission <strong>increases the longer a tick stays attached</strong> &mdash; risk is generally low in the first 24 hours and rises after that. That is the whole logic behind a daily tick check in season: catching and removing a tick early, before it has fed for a full day, meaningfully lowers the odds it passes anything on.</p>
          <p>If you find an attached tick, remove it with fine-tipped tweezers by gripping as close to the skin as possible and pulling straight out with steady pressure &mdash; do not twist, burn, or smother it. Then clean the area. Watch for an expanding rash, fever, fatigue, or flu-like symptoms in the following days to weeks, and <strong>see a healthcare provider</strong> if any appear, mentioning that you had a tick bite. Our step-by-step <Link href="/blog/how-to-do-a-tick-check">tick check guide</Link> covers where to look and how to do it thoroughly.</p>

          <h2>How Do Ticks Die Naturally?</h2>
          <p>Ticks may be tough, but plenty of things end their lives without any help. The main natural causes:</p>
          <ol>
            <li><strong>Desiccation (drying out).</strong> By far the biggest killer. A tick that cannot find humid shelter simply loses too much water and dies &mdash; which is why sunny, mowed, low-humidity ground is so hostile to them.</li>
            <li><strong>Failing to find a host in time.</strong> A tick has finite energy reserves. If it never encounters a host to feed on and advance stages, it eventually runs out.</li>
            <li><strong>Predators.</strong> Birds (wild turkeys and guineafowl in particular), ants, spiders, beetles, and certain parasitic wasps all eat or parasitise ticks.</li>
            <li><strong>Fungi and nematodes.</strong> Naturally occurring fungi and parasitic roundworms in the soil infect and kill ticks.</li>
            <li><strong>Extreme heat or hard freeze.</strong> Prolonged heat with low humidity, or deep cold without insulating snow and leaf litter, will kill ticks that cannot shelter.</li>
            <li><strong>Old age after reproduction.</strong> An adult female tick dies naturally after laying her single large batch of eggs &mdash; the end of the line for that generation.</li>
          </ol>
          <p>The practical takeaway from all of this: you cannot out-wait ticks, because their whole strategy is patience, and you cannot count on winter or a dry spell to clear them. What you <em>can</em> do is remove the humid habitat they depend on &mdash; short grass, cleared leaf litter, a dry barrier between lawn and woods &mdash; and target the shaded edges where they concentrate. For the edges you still have to walk through, clothing and gear treated with <Link href="/blog/permethrin-canada-yard-clothing-spray">permethrin</Link> add a second layer &mdash; it is applied to fabric and yard vegetation, never to skin.</p>

          <h2>Quick Recap</h2>
          <ul>
            <li><strong>Lifespan:</strong> 2–3 years across larva, nymph, and adult stages, with one blood meal per stage.</li>
            <li><strong>Without a host:</strong> months to over a year in humid conditions; only days to weeks in dry indoor air.</li>
            <li><strong>Indoors:</strong> Ontario&rsquo;s common ticks cannot establish inside &mdash; too dry. The brown dog tick is the rare exception, and it is uncommon here.</li>
            <li><strong>Winter:</strong> a frost does not kill them all; they overwinter in leaf litter under insulating snow and can be active above ~4°C.</li>
            <li><strong>On a dog:</strong> an attached tick feeds for 3–10 days, then drops off; check pets after every outing.</li>
          </ul>

          <p className="text-sm text-gray-500 border-t border-gray-200 pt-4 mt-6"><em>This article is general information, not medical or veterinary advice. For any concern about a tick bite, a rash, or symptoms in a person or a pet, contact a healthcare provider or veterinarian. In an emergency, call 911.</em></p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/tick-season-ontario-when-are-ticks-active">Tick Season in Ontario: When Are Ticks Active?</Link></li>
            <li><Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">How to Keep Ticks Out of Your Yard (Ontario)</Link></li>
            <li><Link href="/blog/how-to-do-a-tick-check">How to Do a Tick Check (Step by Step)</Link></li>
            <li><Link href="/blog/can-ticks-fly-jump-swim">Can Ticks Fly, Jump, or Swim? Myths vs Facts</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Ticks Overwinter in Your Yard &mdash; Break the Cycle at the Source" subtext="They live for years, survive the winter under leaf litter, and wait in your yard&rsquo;s shaded edges. One barrier treatment removes them where they actually live. From $99." variant="dark" />
    </>
  )
}
