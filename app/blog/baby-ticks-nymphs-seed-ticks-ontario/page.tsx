import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'baby-ticks-nymphs-seed-ticks-ontario'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Baby Ticks: Nymphs & Seed Ticks in Ontario (Size + ID)'
const META_TITLE = 'Baby Ticks Ontario: Seed Tick vs Nymph, 0.5-2 mm'

const FAQS = [
  {
    question: 'What do baby ticks look like?',
    answer: 'Baby ticks come in two stages. Larvae ("seed ticks") are about 0.5 mm — the size of a grain of sand or a poppy seed — and have only six legs. Nymphs are roughly 1–2 mm, about the size of a poppy seed or sesame seed, and have eight legs. Both are far smaller than a full adult tick, translucent to tan or dark before feeding, and turn grey or reddish once engorged with blood.',
  },
  {
    question: 'What are seed ticks?',
    answer: '"Seed ticks" is the common name for the larval stage — the first stage after a tick hatches from the egg. They are called seed ticks because at roughly 0.5 mm they look like tiny moving specks or poppy seeds. Larvae have six legs (not eight), and they often appear in clusters after a batch of eggs hatches. In Ontario, blacklegged (deer) tick larvae rarely carry Lyme disease because they have not yet fed on an infected host.',
  },
  {
    question: 'Are baby ticks (nymphs) dangerous?',
    answer: 'Yes — nymphs are the single most dangerous tick stage for Lyme disease in Ontario. Blacklegged tick nymphs are active in late spring and summer, and because they are only about 1–2 mm (poppy-seed size) they are very easy to miss on skin. A nymph that fed on an infected mouse the previous year can transmit the Lyme bacterium if it stays attached for roughly 24 hours or more. Most human Lyme cases are traced to nymph bites, not adult ticks.',
  },
  {
    question: 'How big is a tick nymph compared to a larva and adult?',
    answer: 'A blacklegged tick larva is about 0.5 mm (six legs), a nymph is about 1–2 mm (eight legs), an unfed adult female is roughly 3–3.5 mm, and an engorged adult female can swell to about 10 mm. In plain terms: a larva is like a grain of sand, a nymph is like a poppy seed, an unfed adult is like a sesame seed, and a fully fed adult is closer to a small raisin or coffee bean.',
  },
  {
    question: 'How do you get rid of a baby tick that is attached?',
    answer: 'Remove it the same way you remove any tick: use fine-tipped tweezers or a dedicated tick-removal tool, grip the tick as close to the skin as possible, and pull straight up with steady, even pressure. Do not twist, crush, or burn it. Because nymphs are so small, a magnifying glass and a fine-point tool help you grab the mouthparts rather than the body. Clean the bite with rubbing alcohol afterward and save the tick in a sealed bag if you want it identified.',
  },
  {
    question: 'Do baby ticks carry Lyme disease?',
    answer: 'Nymphs can, but larvae almost never do. A tick is not born infected — it picks up the Lyme bacterium by feeding on an infected host, usually a white-footed mouse. Larvae are taking their first-ever blood meal, so they are essentially always Lyme-free at that point. Nymphs have already had one meal as a larva, so an infected nymph is the main driver of Lyme transmission to people in Ontario.',
  },
  {
    question: 'When are tick nymphs most active in Ontario?',
    answer: 'Blacklegged tick nymphs peak in late spring through mid-summer — roughly May to July in Ontario — which overlaps with the busiest outdoor season. Larvae (seed ticks) typically hatch and become active in mid-to-late summer. This is why tick checks matter most from spring through early fall, and why nymph season lines up with the highest number of reported Lyme cases.',
  },
  {
    question: 'How do I tell a baby tick from other tiny bugs?',
    answer: 'Count the legs and look at the body. A larval seed tick has six legs; a nymph and adult tick have eight. Ticks have a single teardrop or oval body with no distinct waist, no wings, and no antennae. Bugs that get mistaken for baby ticks include poppy-seed-like dirt specks, baby spiders (which have obvious body segments and long legs), and clover mites (bright red, very fast). If it is slow, flat, oval, and eight-legged, treat it as a tick.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Baby ticks explained: larvae ("seed ticks") are ~0.5 mm with six legs, nymphs are ~1–2 mm with eight legs and drive most Lyme disease. Size chart in mm, ID tips, safe removal, and yard prevention for Ontario.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('baby-ticks-nymphs-seed-ticks-ontario')

export default function BabyTicksNymphsSeedTicksOntarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Baby ticks in Ontario — nymphs vs seed ticks: size in mm, identification, danger, and removal.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Baby Ticks: Nymphs & Seed Ticks', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Baby Ticks: Nymphs &amp; Seed Ticks</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Larvae, nymphs, and adults side by side — how to spot the poppy-seed-sized tick that causes most Lyme disease, and how to remove it safely.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* Quick Answer — AI-extraction block */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Baby ticks come in two stages. Larvae &mdash; commonly called &ldquo;seed ticks&rdquo; &mdash; are about 0.5 mm (poppy-seed-sized) with six legs. Nymphs are roughly 1&ndash;2 mm with eight legs and cause most Lyme disease in Ontario because they are so tiny they go unnoticed.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Larval ticks (&ldquo;seed ticks&rdquo;) are about 0.5 mm &mdash; poppy-seed-sized &mdash; and have only 6 legs.</li>
              <li>Nymph ticks are roughly 1&ndash;2 mm, have 8 legs, and are the main spreaders of Lyme disease in Ontario.</li>
              <li>Unfed adult female blacklegged ticks are about 3&ndash;3.5 mm (sesame-seed sized), engorging up to roughly 10 mm.</li>
              <li>Larvae almost never carry Lyme because they have not yet taken an infected first blood meal; nymphs can.</li>
              <li>Remove any attached tick with fine-tipped tweezers, pulling straight up close to the skin.</li>
              <li>Professional barrier spray targets the shaded, humid yard edges where nymphs wait &mdash; the residual goes where they quest, not across the open lawn.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Size comparison table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Tick Life Stages: Larva vs Nymph vs Adult (Size in mm)</h2>
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Stage</th>
                  <th className="px-3 py-2 text-left">Size (unfed)</th>
                  <th className="px-3 py-2 text-left">Legs</th>
                  <th className="px-3 py-2 text-left">Everyday size</th>
                  <th className="px-3 py-2 text-left">Lyme risk</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Larva (seed tick)', '~0.5 mm', '6', 'Grain of sand / poppy seed', 'Very low — first meal'],
                  ['Nymph', '~1–2 mm', '8', 'Poppy seed', 'Highest — main Lyme spreader'],
                  ['Adult female (unfed)', '~3–3.5 mm', '8', 'Sesame seed', 'Moderate — easier to spot'],
                  ['Adult male', '~2.5 mm', '8', 'Sesame seed', 'Low — rarely feeds long'],
                  ['Adult female (engorged)', 'up to ~10 mm', '8', 'Small raisin / coffee bean', 'Already fed'],
                ].map(([stage, size, legs, everyday, risk]) => (
                  <tr key={stage} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{stage}</td>
                    <td className="px-3 py-2 font-mono text-gray-800">{size}</td>
                    <td className="px-3 py-2 text-gray-700">{legs}</td>
                    <td className="px-3 py-2 text-gray-700">{everyday}</td>
                    <td className="px-3 py-2 text-gray-700">{risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Sizes are for the blacklegged (deer) tick, <em>Ixodes scapularis</em>, the main Lyme vector in Ontario. Measurements per the <a href="https://www.cdc.gov/ticks/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Ticks</a>.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <h2>What Exactly Is a &ldquo;Baby Tick&rdquo;?</h2>
          <p>A tick&rsquo;s life has four stages: egg, larva, nymph, and adult. When people search for &ldquo;baby ticks,&rdquo; they almost always mean one of the two immature feeding stages — the <strong>larva</strong> (also called a seed tick) or the <strong>nymph</strong>. Both bite, both can attach to people and pets, and both are small enough to be missed on a quick glance. The difference between them matters a lot for your health. Bed bugs run a comparable ladder indoors and generate the same identification panic at the smallest sizes &mdash; <Link href="/blog/baby-bed-bugs-nymphs-canada" className="text-brand-700 underline">what bed bug nymphs look like at each stage</Link> is the bedroom equivalent of this page.</p>
          <p>The blacklegged (deer) tick, <em>Ixodes scapularis</em>, is the species Ontarians care about most, because it is the one that transmits Lyme disease. American dog ticks also live here, but their larvae and nymphs feed almost exclusively on small mammals and are rarely found on people. So when we talk about dangerous baby ticks in the GTA, we are talking about blacklegged tick nymphs.</p>

          <h2>Seed Ticks: The Larval Stage</h2>
          <p>A <strong>seed tick</strong> is just a tick larva. After a female tick lays her eggs — often thousands at once — the eggs hatch into six-legged larvae about 0.5 mm across. At that size they look like specks of dirt, ground pepper, or poppy seeds, and they often appear in clusters because a whole clutch hatches together. If you brush against vegetation and pick up dozens of tiny crawling dots at once, those are seed ticks.</p>
          <p>Here is the reassuring part: a larva has never fed before. A tick is not born carrying Lyme — it acquires the bacterium <em>Borrelia burgdorferi</em> only by biting an already-infected animal, usually a white-footed mouse. Because a seed tick is taking its very first blood meal, it is almost always Lyme-free. Seed tick bites can still itch and, in large numbers, irritate the skin, but the disease risk is low compared with the next stage.</p>

          <h2>Nymphs: The Most Dangerous Stage</h2>
          <p>After a larva feeds and moults, it becomes a <strong>nymph</strong> — eight legs, about 1–2 mm, roughly the size of a poppy seed. This is the stage responsible for the majority of human Lyme disease cases in Ontario and across eastern North America, and there are two reasons why.</p>
          <p>First, a nymph has already had one blood meal as a larva. If that meal came from an infected mouse, the nymph now carries the Lyme bacterium and can pass it on the next time it bites. Second — and this is the crucial part — a nymph is astonishingly hard to see. At poppy-seed size on skin, in a fold, or hidden in hair, a nymph is easily mistaken for a freckle or a speck of dirt. People routinely go about their day without realizing a nymph is attached, which gives the tick the 24-plus hours it usually needs to transmit Lyme.</p>
          <p>Nymphs are most active in Ontario from late spring through mid-summer — May, June, and July — precisely when people are spending the most time in yards, on trails, and at cottages. That overlap is why nymph season and Lyme season are effectively the same thing.</p>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Nymphs hide in your lawn edges — we treat exactly those zones</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Blacklegged tick nymphs wait in leaf litter, tall grass, and shaded borders. BuzzSkito&rsquo;s barrier spray puts a Health Canada-registered residual acaricide on those exact zones, repeated through the season as the residual wears off. Single treatments from $99; seasonal tick programs available across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/tick-control" className="btn-primary-sm">Explore Tick Control →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>How to Identify a Baby Tick (No Photo Needed)</h2>
          <p>Because good close-up photos are hard to take of something this small, use these physical features to identify a baby tick:</p>
          <ul>
            <li><strong>Count the legs.</strong> A larval seed tick has <strong>six</strong> legs; a nymph or adult has <strong>eight</strong>. This is the fastest way to tell larva from nymph.</li>
            <li><strong>Look at the body shape.</strong> Ticks have a single, flat, teardrop-to-oval body with no distinct waist, no wings, and no antennae. Once engorged, the body swells into a rounded, greyish sac.</li>
            <li><strong>Colour before feeding.</strong> Blacklegged nymphs are translucent tan to dark brown. After feeding they turn grey or slate-coloured.</li>
            <li><strong>Movement.</strong> Ticks crawl slowly and deliberately. If a tiny bug jumped, sprinted, or flew, it was not a tick.</li>
          </ul>
          <p>Several harmless specks get mistaken for baby ticks: poppy seeds and dirt (no legs), baby spiders (obvious two-part body and long legs), and clover mites (bright red and very fast). For a full visual walkthrough of every Ontario tick stage, see our guide to <Link href="/blog/what-ticks-look-like-ontario">what ticks look like in Ontario</Link>.</p>

          <h2>How to Safely Remove a Baby Tick</h2>
          <p>Removing a nymph is the same process as removing an adult — it just requires better tools because the target is so small:</p>
          <ol>
            <li><strong>Use fine-tipped tweezers or a dedicated tick tool.</strong> Household tweezers are often too blunt to grip a poppy-seed nymph. A fine-point or slotted tick remover grabs the mouthparts, not the body.</li>
            <li><strong>Grip as close to the skin as possible</strong> and pull straight up with steady, even pressure. Do not twist, jerk, crush, or squeeze the body — that can push fluids into the bite.</li>
            <li><strong>Do not use heat, matches, nail polish, or petroleum jelly.</strong> These folk methods do not work and can make the tick regurgitate into the wound.</li>
            <li><strong>Clean the bite</strong> with rubbing alcohol or soap and water afterward, and wash your hands.</li>
            <li><strong>Save the tick</strong> in a sealed bag or container if you want it identified or tested, and note the date. Watch the site for an expanding rash and see a doctor if a rash or flu-like symptoms appear.</li>
          </ol>
          <p>Because nymphs are so easy to lose grip on, a proper fine-tipped tool is genuinely worth having in the first-aid kit before tick season. <BuyLink tag={AMZ_TAG} search="tick removal tool tweezers">Check tick-removal tools on Amazon.ca →</BuyLink> For a breakdown of which style works best, see our <Link href="/blog/tick-removal-tool-guide">tick removal tool guide</Link>.</p>

          <TopPick tag={AMZ_TAG}
            label="Our Top Pick"
            name="Fine-Tipped Tick Removal Tool"
            blurb="For poppy-seed-sized nymphs, a dedicated fine-point or slotted tick remover grips the mouthparts where blunt household tweezers slip. Compact enough to keep in the first-aid kit or pack before tick season."
            search="tick removal tool tweezers"
            score={8.6}
            pros={['Grabs tiny nymph mouthparts cleanly', 'Reduces squeezing the tick body', 'Pocketable for trail and cottage kits']}
            cons={['Easy to misplace — keep a spare', 'Still needs steady, straight-up pulling technique']}
          />

          <h2>Preventing Baby Ticks in Your Yard</h2>
          <p>Nymphs and larvae wait in the same low, humid, shaded places adult ticks do — so the yard defence is identical, and it works:</p>
          <ol>
            <li><strong>Mow to 3–4 inches.</strong> Short grass dries out the ground-level humidity nymphs need and gives them nowhere to wait.</li>
            <li><strong>Clear leaf litter</strong> from yard edges every spring and fall. Damp leaf litter is where blacklegged ticks overwinter and where nymphs stay hydrated.</li>
            <li><strong>Add a 3-foot wood-chip or gravel strip</strong> between your lawn and any woods, ravine, or tall grass. Ticks avoid crossing the dry, sunny barrier.</li>
            <li><strong>Discourage mice.</strong> White-footed mice are the main host that infects larvae and nymphs, so store firewood off the ground and seal food sources.</li>
            <li><strong>Treat clothing with permethrin</strong> and tuck pants into socks. Nymphs board at ankle-to-knee height, so treated footwear and pant legs stop most bites.</li>
            <li><strong>Professional barrier spray.</strong> <Link href="/tick-control">BuzzSkito&rsquo;s tick barrier treatment</Link> targets the lawn edges, leaf litter, and shaded borders where nymphs quest, re-applied through the season because the residual is temporary.</li>
          </ol>
          <p>For the full checklist, see <Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">how to keep ticks out of your yard in Ontario</Link>. Ontario health authorities keep current tick-risk maps and prevention guidance too — the <a href="https://www.publichealthontario.ca/" target="_blank" rel="noopener" className="underline hover:text-brand-700">Public Health Ontario</a> and <a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html" target="_blank" rel="noopener" className="underline hover:text-brand-700">Government of Canada Lyme disease</a> pages are the best sources for local, up-to-date information.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/what-ticks-look-like-ontario">What Ticks Look Like in Ontario</Link></li>
            <li><Link href="/blog/tick-removal-tool-guide">Tick Removal Tool Guide</Link></li>
            <li><Link href="/blog/tick-season-ontario-when-are-ticks-active">Tick Season in Ontario — When Ticks Are Active</Link></li>
            <li><Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">How to Keep Ticks Out of Your Yard</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Fine-tipped tick removal tool" search="tick removal tool tweezers" label="For removal" />

      <CTASection heading="Stop Nymphs Where They Wait — Your Yard&rsquo;s Edges" subtext="The poppy-seed-sized nymph causes most Lyme disease. One barrier spray removes ticks at the source. From $99." variant="dark" />
    </>
  )
}
