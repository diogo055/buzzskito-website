import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'can-ticks-fly-jump-swim'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Can Ticks Fly, Jump, or Swim? (Myths vs Facts, Ontario)'

const FAQS = [
  {
    question: 'Can ticks fly?',
    answer: 'No. Ticks cannot fly — they are wingless at every life stage, from larva to nymph to adult. No tick species in Ontario or anywhere else has wings. A tick reaches a host by "questing": it climbs to the tip of a grass blade or low plant, holds its front legs out, and grabs on when a person or animal brushes past. If a biting bug flew at you, it was a mosquito, black fly, or biting midge — not a tick.',
  },
  {
    question: 'Can ticks jump?',
    answer: 'No. Ticks cannot jump. They have no jumping legs and no mechanism to launch themselves, unlike fleas, which can leap roughly 30 cm. This is the single most common tick myth. A tick simply waits on vegetation with its front legs extended and latches on when a host touches the plant. If something bit you and hopped away, it was almost certainly a flea.',
  },
  {
    question: 'Can ticks swim?',
    answer: 'No — ticks do not swim to reach you. They have no swimming appendages and cannot propel themselves through water. Ticks are picked up on land, from grass and leaf litter, not from a lake or pool. What surprises people is that a tick can survive being submerged: because it breathes extremely slowly through tiny openings called spiracles, it can stay underwater for days without dying. So a tick may float or cling if it lands in water, but it never swims toward a host.',
  },
  {
    question: 'Can ticks drown, and will washing kill them?',
    answer: 'Ticks are very hard to drown. A blacklegged (deer) tick can survive full submersion for two to three days, and some studies have kept ticks alive underwater even longer. A quick rinse, a swim, or a normal cold wash cycle will not reliably kill an attached or crawling tick. To kill ticks on clothing, tumble-dry on HIGH heat for at least 10 minutes — dryness and heat kill ticks far faster than water. Hot water alone (over 54°C / 130°F) helps, but the dryer is the reliable step.',
  },
  {
    question: 'Do ticks fall or drop from trees onto your head?',
    answer: 'Very rarely. Ticks do not climb trees to drop on hosts — they quest low to the ground, usually below knee height, because that is where hosts pass. The myth that ticks "rain down from trees" persists because people find ticks on the scalp, neck, or behind the ears. Those ticks almost always boarded at the lower legs during questing and then crawled upward over several minutes looking for a place to bite. Focus yard defence on grass and leaf litter, not overhead branches.',
  },
  {
    question: 'If ticks cannot fly, jump, or swim, how do they get on you?',
    answer: 'By questing. A tick climbs onto the tip of tall grass, a weed, or a low shrub, anchors with its back legs, and stretches its front legs out — sensing your body heat, the carbon dioxide you exhale, vibration, and shadow. When you, a pet, or wildlife brushes the plant, the tick grabs on and crawls upward. This is why ticks are picked up at the lawn-to-woods edge, on trail margins, and in unmowed grass — and why a barrier spray on those exact zones is so effective.',
  },
  {
    question: 'How high can ticks climb?',
    answer: 'Ticks in Ontario typically quest between ground level and about knee height (30–50 cm) on grass, weeds, and low brush. Nymphs — the poppy-seed-sized stage responsible for most Lyme transmission — wait lowest, often near ankle height. Adult blacklegged ticks climb a little higher. None climb to head height to attack; any tick on your upper body crawled there after latching onto your lower legs. Tucking pants into socks and treating footwear and pant legs with permethrin stops most bites before they start.',
  },
  {
    question: 'Are ticks that survive water still dangerous?',
    answer: 'Yes. A tick that survived a swim, a rinse, or a soak is fully capable of biting and transmitting disease afterward. In Ontario the main concern is the blacklegged (deer) tick, which can transmit Lyme disease when attached for roughly 24 hours or more. Never assume water killed a tick you found on skin, a pet, or clothing. Remove any attached tick promptly with fine-tipped tweezers, gripping close to the skin and pulling straight out, and dry-heat clothing to kill hidden ticks.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'No — ticks cannot fly, jump, or swim. They climb grass and quest for a passing host. They can survive underwater for days but do not swim to you. Myths vs facts on how ticks really move in Ontario.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function CanTicksFlyJumpSwimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Can ticks fly, jump, or swim? Myths vs facts on how ticks move and reach hosts in Ontario.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Can Ticks Fly, Jump, or Swim?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Can Ticks Fly, Jump, or Swim?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Fly, jump, swim, drop from trees, drown — every tick-movement myth settled, and what ticks actually do to reach you.</p>
        </div>
      </section>

      {/* Quick Answer — AI-extraction capsule (first content element) */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
              No &mdash; ticks cannot fly, jump, or swim. They are wingless with no jumping legs, so they reach you only by &ldquo;questing&rdquo;: climbing grass or low plants and grabbing a host that brushes past. Ticks can survive underwater for days but never swim toward you &mdash; every tick is picked up on land.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Ticks are wingless at every life stage &mdash; larva, nymph, and adult &mdash; so no tick can fly.</li>
              <li>Ticks have no jumping legs; fleas can leap about 30 cm, but ticks cannot launch themselves at all.</li>
              <li>A blacklegged (deer) tick can survive full submersion underwater for 2&ndash;3 days, so a rinse or cold wash will not reliably kill it.</li>
              <li>In Ontario, ticks quest low &mdash; from ground level to about knee height (30&ndash;50 cm) &mdash; and do not drop from trees.</li>
              <li>To kill ticks hiding in clothing, tumble-dry on high heat for at least 10 minutes.</li>
              <li>A blacklegged tick generally needs to stay attached about 24 hours or more to transmit Lyme disease.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Myth vs Fact table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Can Ticks Fly, Jump, Swim, Drop, or Drown? Myth vs Fact</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Question</th>
                  <th className="px-3 py-2 text-left">Answer</th>
                  <th className="px-3 py-2 text-left">What actually happens</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Can ticks fly?', 'No', 'Wingless at every life stage. They quest on vegetation and grab a host that brushes past.'],
                  ['Can ticks jump?', 'No', 'No jumping legs. Fleas jump up to ~30 cm — ticks do not. If it hopped, it was a flea.'],
                  ['Can ticks swim?', 'No', 'No swimming appendages. Ticks reach you on land, from grass and leaf litter, never from water.'],
                  ['Do ticks drop from trees?', 'Almost never', 'Ticks quest low (ground to ~knee). Head and neck bites come from ticks that climbed up after boarding at the legs.'],
                  ['Do ticks drown easily?', 'No', 'A blacklegged tick can survive underwater 2–3 days. Rinsing or a cold wash will not reliably kill it — dry heat does.'],
                  ['Do ticks chase or run at you?', 'No', 'Ticks are slow crawlers that wait passively on vegetation for a host to touch the plant.'],
                ].map(([q, a, note]) => (
                  <tr key={q} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{q}</td>
                    <td className="px-3 py-2 font-bold text-amber-800 whitespace-nowrap">{a}</td>
                    <td className="px-3 py-2 text-gray-700">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Tick behaviour, questing, and how ticks find hosts per the <a href="https://www.cdc.gov/ticks/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Ticks</a>.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <h2>The One Way Ticks Actually Reach You: Questing</h2>
          <p>Ticks have exactly one way of getting onto you, and it is not dramatic. A tick climbs to the top of a grass blade, a weed, or a low shrub, anchors itself with its back legs, and stretches its front legs out into the air. This posture is called <strong>questing</strong>. The tick&rsquo;s front legs carry sensors that detect body heat, the carbon dioxide in your breath, vibration, and shadow. When a warm body brushes the plant, the tick grabs onto fur or clothing and climbs aboard. That is the entire mechanism — no flight, no leap, no swim, no ambush from above.</p>
          <p>Because questing depends on something touching the plant, ticks concentrate exactly where people and pets walk: the edge of the lawn, the margins of trails, unmowed grass, and the leaf-littered transition zone where a yard meets woods or a ravine. In Ontario, the tick that matters most is the <strong>blacklegged (deer) tick</strong>, which can carry Lyme disease; the <strong>American dog tick</strong> is also common in grassy areas.</p>

          <h2>Can Ticks Fly? No — They Have No Wings</h2>
          <p>No tick, at any life stage, has wings. Larvae hatch with six legs, and nymphs and adults have eight — but never wings. If a biting insect flew at you near dusk, it was a mosquito, a black fly, or a biting midge. Ticks travel only by hitching a ride, which is genuinely good news: it means keeping your grass short and clearing brush along the edges dramatically reduces your contact with them.</p>

          <h2>Can Ticks Jump? No — That&rsquo;s Fleas</h2>
          <p>This is the most common tick myth, and it comes from confusing ticks with fleas. Fleas have powerful, spring-loaded back legs and can leap roughly 30 cm — well over 100 times their body length. Ticks have nothing of the kind. A tick cannot launch itself even a millimetre; it can only crawl and cling. So the quickest field test in your yard: if the tiny biting bug jumped away, it was a flea; if you found it crawling slowly or already attached, it was a tick.</p>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Ticks wait in your yard&rsquo;s edges — we treat exactly those zones</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Since ticks quest from grass and leaf litter, a barrier spray applied to lawn edges, fence lines, and shaded borders removes them where they actually wait. BuzzSkito protects GTA yards with seasonal tick programs and single treatments from $99.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/tick-control" className="btn-primary-sm">Explore Tick Control →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Can Ticks Swim? No — But They Survive Water Longer Than You&rsquo;d Think</h2>
          <p>Ticks have no swimming appendages and cannot propel themselves through water, so a tick never swims toward a host. You pick ticks up on land, from vegetation — not from a lake, pool, or puddle. But here is the part that surprises people: a tick is remarkably hard to drown. Ticks breathe extremely slowly through tiny openings on their bodies called <strong>spiracles</strong>, and they can seal them and go dormant. A blacklegged tick can survive full submersion for <strong>two to three days</strong>, and some have been kept alive underwater even longer in the lab.</p>
          <p>That has a practical consequence: <strong>a quick rinse, a swim, or a cold wash cycle will not reliably kill a tick.</strong> If you find a tick after being at the lake or in the pool, do not assume the water killed it — a survivor can still bite and transmit disease. Remove any attached tick promptly and treat it as fully live.</p>

          <h2>Can Ticks Drown in the Wash? Dry Heat Is What Kills Them</h2>
          <p>Because ticks resist water so well, washing clothes is not a dependable way to kill them. The reliable step is <strong>heat and dryness</strong>. Public-health guidance is consistent on this: tumble-dry clothing on <strong>high heat for at least 10 minutes</strong> to kill ticks that may be hiding in the fabric. If clothes are damp or dirty and you want to wash first, use hot water (over 54°C / 130°F) — but the dryer on high is the step you can count on. Ticks die from desiccation far faster than from a soak.</p>

          <h2>Do Ticks Fall From Trees? Almost Never</h2>
          <p>Ticks do not climb trees to drop on hosts. They quest low, because that is where hosts pass. The myth persists because ticks are often found on the upper body — the scalp, neck, or behind the ears — which makes it feel like they fell from above. In reality the tick almost always latched onto a lower leg during questing and then <strong>crawled upward</strong> over several minutes, looking for a sheltered place to feed. That is why your yard defence belongs at ground level: grass, leaf litter, and shaded edges, not overhead branches.</p>

          <h2>How High Do Ticks Climb, and How Do You Stop Them?</h2>
          <p>In Ontario, ticks quest low. Nymphs usually wait within a few centimetres of the ground to about ankle height; adult blacklegged ticks climb a bit higher, to roughly knee height, on taller grass and brush. None climb to head height to attack. Because ticks board at the lower legs, the classic personal defence works extremely well: <strong>tuck your pants into your socks, wear light colours so ticks are easy to spot, and treat footwear and pant legs with permethrin.</strong> <BuyLink search="sawyer permethrin clothing spray">Check permethrin clothing spray on Amazon.ca →</BuyLink></p>
          <p>For the yard itself, because ticks can only reach you from vegetation they have climbed, control is genuinely effective:</p>
          <ol>
            <li><strong>Mow to 3–4 inches.</strong> Short grass gives ticks nowhere to quest and dries out the ground-level humidity they need.</li>
            <li><strong>Clear leaf litter</strong> at yard edges every spring and fall — it is where blacklegged ticks overwinter and stay damp.</li>
            <li><strong>Create a 3-foot wood-chip or gravel barrier</strong> between lawn and any woods, ravine, or tall grass. Ticks avoid crossing the dry, sunny strip.</li>
            <li><strong>Discourage mice and deer</strong> — mice are the main host for immature ticks. Store firewood off the ground and don&rsquo;t feed wildlife.</li>
            <li><strong>Professional barrier spray.</strong> <Link href="/tick-control">BuzzSkito&rsquo;s tick barrier treatment</Link> targets the lawn edges, leaf litter, and shaded borders where ticks quest, for 80–95% population reduction through the season.</li>
          </ol>
          <p>Because a questing tick crawls slowly for minutes to hours before it bites, a tick check after time outdoors usually catches it in time. Keep a fine-tipped removal tool handy so you can grip a tick close to the skin and pull straight out. <BuyLink search="tick removal tool tweezers">Check tick-removal tools on Amazon.ca →</BuyLink></p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/do-ticks-fly-or-jump">Do Ticks Fly or Jump? How They Actually Get on You</Link></li>
            <li><Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">How to Keep Ticks Out of Your Yard (Ontario)</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Stop Ticks Where They Wait — Your Yard&rsquo;s Edges" subtext="Ticks can&rsquo;t fly, jump, or swim — they quest from grass and leaf litter. One barrier spray removes them at the source. From $99." variant="dark" />
    </>
  )
}
