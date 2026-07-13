import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'do-ticks-fly-or-jump'
const DATE = '2026-07-09'
const UPDATED = '2026-07-12'
const TITLE = 'Do Ticks Fly or Jump? How They Actually Get on You (Ontario)'

const FAQS = [
  {
    question: 'Do ticks fly?',
    answer: 'No. Ticks cannot fly — they have no wings at any life stage. Ticks reach a host through a behaviour called "questing": they climb to the tip of a grass blade or leaf, stretch out their front legs, and grab onto any animal or person that brushes past. Because they only travel by hitching a ride, keeping your lawn short and clearing brush along the edges dramatically reduces contact.',
  },
  {
    question: 'Do ticks jump?',
    answer: 'No. Ticks cannot jump — they have no jumping legs and no ability to launch themselves. This is the single most common tick myth. Unlike fleas, which jump up to 30 cm, a tick simply waits on vegetation with its front legs extended and latches on when a host touches the plant. If something bit you and jumped, it was almost certainly a flea, not a tick.',
  },
  {
    question: 'Can ticks fall from trees onto you?',
    answer: 'Very rarely. Ticks do not drop from trees as a strategy — they quest low to the ground, usually below knee height, because that is where hosts pass. The myth that ticks "rain down from trees" persists because people find ticks on their head or neck, but those ticks almost always climbed up from the legs after attaching lower down. Focus your yard defence on grass, leaf litter, and shaded edges, not overhead branches.',
  },
  {
    question: 'How do ticks get on you if they cannot fly or jump?',
    answer: 'Ticks get on you by questing. They climb onto the tip of tall grass, weeds, or low shrubs and hold their front legs out, waiting. When you, a pet, or wildlife brushes against that vegetation, the tick grabs on and crawls upward looking for a place to bite. This is why ticks are picked up at the lawn-to-woods edge, on trail margins, and in unmowed grass — and why a professional barrier spray targeting those exact zones is so effective.',
  },
  {
    question: 'How high can ticks climb?',
    answer: 'Ticks in Ontario typically quest between ground level and about knee height (30–50 cm) on grass blades, weeds, and low brush. Adult blacklegged (deer) ticks climb a little higher than nymphs. They do not climb to head height to attack — any tick found on your upper body crawled there after latching onto your lower legs. Tucking pants into socks and treating footwear/clothing with permethrin stops most bites before they start.',
  },
  {
    question: 'Do ticks move fast?',
    answer: 'No. Ticks are slow crawlers. Once on a host they wander for minutes to hours searching for a feeding spot, which is exactly why prompt tick checks work — you often have time to find and remove a tick before it attaches. In Ontario, a blacklegged tick generally needs to be attached for 24+ hours to transmit Lyme disease, so a daily tick check after outdoor time is one of the most effective preventions there is.',
  },
  {
    question: 'What is the difference between how ticks and fleas reach you?',
    answer: 'Fleas jump — they launch onto a host from the ground or another animal and can leap roughly 100–150 times their body length. Ticks do neither; they climb vegetation and wait to be brushed. This is the fastest way to tell them apart in the yard: if the tiny biting bug jumped, it is a flea; if you found it crawling slowly or already attached, it is a tick. See our guide on bugs that look like ticks for photo comparisons.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Do Ticks Fly or Jump? How They Get on You (Ontario 2026)',
  description: 'No — ticks cannot fly or jump. They climb grass and wait to grab a passing host ("questing"). Here is how ticks actually reach you, how high they climb, and how to stop them in your yard.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function DoTicksFlyOrJumpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Do ticks fly or jump? How ticks reach a host in Ontario.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Do Ticks Fly or Jump?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Do Ticks Fly or Jump?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The two biggest tick myths, settled — and what ticks actually do to reach you.</p>
        </div>
      </section>

      {/* Quick Answer — AI-extraction block */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-3 mb-2">
            <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider">Quick Answer</p>
            <p className="text-xs font-semibold text-amber-700">Updated July 2026</p>
          </div>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Do ticks fly or jump?</h2>
          <p className="speakable text-base text-gray-800 leading-relaxed">
            <strong>No — ticks cannot fly or jump. They have no wings and no jumping legs.</strong> Instead, ticks reach a host by climbing to the tips of grass or low plants and waiting to grab a passing host — a behaviour called &ldquo;questing.&rdquo; They hold their front legs out and latch on when a person or animal brushes past. Ticks quest low — usually below knee height — and crawl upward after attaching, which is why they are picked up in tall grass and at the lawn-to-woods edge, not from the air or from trees. In Ontario, the practical takeaway is simple: because ticks travel only by hitching a ride from vegetation, keeping grass short, clearing leaf litter, and treating yard edges with a barrier spray stops the vast majority of tick contact before it happens.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Ticks vs Fleas: How Each One Reaches You</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Behaviour</th>
                  <th className="px-3 py-2 text-left">Tick</th>
                  <th className="px-3 py-2 text-left">Flea</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Can it fly?', 'No — wingless', 'No — wingless'],
                  ['Can it jump?', 'No', 'Yes — up to ~30 cm'],
                  ['How it reaches a host', 'Climbs vegetation and waits (questing)', 'Jumps onto a passing host'],
                  ['Typical height', 'Ground to ~knee (30–50 cm)', 'Launches from ground'],
                  ['Speed on host', 'Slow crawler (minutes–hours to attach)', 'Fast, hard to catch'],
                  ['Where you pick it up', 'Tall grass, leaf litter, woods edge, trails', 'Pet bedding, carpets, infested animals'],
                  ['Main Ontario risk', 'Lyme disease (blacklegged tick)', 'Itching, allergic dermatitis'],
                ].map(([feat, tick, flea]) => (
                  <tr key={feat} className="border-t border-gray-100">
                    <td className="px-3 py-2 font-semibold text-brand-800">{feat}</td>
                    <td className="px-3 py-2 text-gray-700">{tick}</td>
                    <td className="px-3 py-2 text-gray-700">{flea}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Myth vs Fact table */}
      <section className="py-10 px-4 bg-brand-50/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Tick Movement: Myth vs Fact</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Common myth</th>
                  <th className="px-3 py-2 text-left">The fact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['&ldquo;Ticks fly onto you.&rdquo;', 'False. Ticks are wingless at every life stage and cannot fly.'],
                  ['&ldquo;Ticks jump like fleas.&rdquo;', 'False. Ticks have no jumping legs; they climb and wait (questing). Fleas jump — ticks do not.'],
                  ['&ldquo;Ticks drop or rain down from trees.&rdquo;', 'Almost never. Ticks quest low to the ground; head/neck bites come from ticks that climbed up after boarding at the legs.'],
                  ['&ldquo;Ticks chase or run at you.&rdquo;', 'False. Ticks are slow crawlers that wait passively on vegetation for a host to brush past.'],
                  ['&ldquo;Ticks climb to head height to attack.&rdquo;', 'False. Blacklegged and American dog ticks quest at ground-to-knee height (roughly 30–50 cm).'],
                  ['&ldquo;Once on you, a tick bites instantly.&rdquo;', 'False. A tick wanders minutes to hours before attaching — time enough for a tick check to catch it.'],
                ].map(([myth, fact]) => (
                  <tr key={myth} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800" dangerouslySetInnerHTML={{ __html: myth }} />
                    <td className="px-3 py-2 text-gray-700" dangerouslySetInnerHTML={{ __html: fact }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Tick behaviour and questing height per the <a href="https://www.cdc.gov/ticks/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Ticks</a>.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <h2>What &ldquo;Questing&rdquo; Actually Looks Like</h2>
          <p>Ticks have exactly one way of getting onto you, and it is not dramatic. A tick climbs to the top of a grass blade, a weed, or a low shrub, anchors itself with its back legs, and stretches its front legs out into the air. This posture is called <strong>questing</strong>. The tick&rsquo;s front legs carry sensors that detect body heat, carbon dioxide from breath, vibration, and shadow. When a warm body brushes the plant, the tick grabs the fur or clothing and climbs aboard. That is the entire mechanism — no flight, no leap, no ambush from above.</p>
          <p>Because questing depends on something touching the plant, ticks concentrate exactly where people and pets walk: the edge of the lawn, the margins of trails, unmowed grass, and the leaf-littered transition zone where your yard meets woods or a ravine.</p>

          <h2>Why People Think Ticks Jump or Fall From Trees</h2>
          <p>Two things fuel the myths. First, ticks are often found on the upper body — the scalp, neck, or behind the ears — which makes it feel like they dropped from above. In reality the tick almost always latched onto a lower leg during questing and then <strong>crawled upward</strong> over several minutes looking for a sheltered place to feed. Second, people confuse ticks with fleas. Fleas genuinely jump, and a bite that came with a visible hop was a flea, not a tick.</p>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Ticks wait in your yard&rsquo;s edges — we treat exactly those zones</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Since ticks quest from grass and leaf litter, a barrier spray applied to lawn edges, fence lines, and shaded borders removes them where they actually wait. BuzzSkito protects GTA yards with seasonal tick programs and single treatments from $99.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/tick-control" className="btn-primary-sm">Explore Tick Control →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>How High Do Ticks Climb?</h2>
          <p>In Ontario, ticks quest low. Nymphs (the poppy-seed-sized immature stage responsible for most Lyme transmission) usually wait within a few centimetres to about ankle height. Adult blacklegged ticks climb a bit higher, to roughly knee height, on taller grass and brush. None of them climb to head height to attack. This is why the classic prevention — <strong>tuck your pants into your socks, wear light colours, and treat footwear and pant legs with permethrin</strong> — works so well: it blocks ticks at the exact height they board.</p>

          <h2>What This Means for Protecting Your Yard</h2>
          <p>Because ticks can only reach you from vegetation they have climbed, yard control is genuinely effective:</p>
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
            <li><Link href="/blog/bugs-that-look-like-ticks">Bugs That Look Like Ticks (Photo Guide)</Link></li>
            <li><Link href="/blog/what-ticks-look-like-ontario">What Ticks Look Like in Ontario</Link></li>
            <li><Link href="/blog/tick-season-ontario-when-are-ticks-active">Tick Season in Ontario — When Ticks Are Active</Link></li>
            <li><Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">How to Keep Ticks Out of Your Yard</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Stop Ticks Where They Wait — Your Yard&rsquo;s Edges" subtext="Ticks quest from grass and leaf litter. One barrier spray removes them at the source. From $99." variant="dark" />
    </>
  )
}
