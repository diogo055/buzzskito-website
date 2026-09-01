import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'mosquito-hawk-explained'
const DATE = '2026-04-28'
const UPDATED = '2026-07-12'
const TITLE = 'Mosquito Hawk — What It Actually Is (Crane Fly Truth)'
const META_TITLE = 'Mosquito Hawk: Do Crane Flies Eat Mosquitoes?'

const FAQS = [
  {
    question: 'What is a mosquito hawk?',
    answer: 'A "mosquito hawk" is the common name for the crane fly — a large, long-legged flying insect that looks like a giant mosquito. Despite the name, mosquito hawks DO NOT eat mosquitoes. The name is a myth. Adult crane flies don\'t eat at all (they live for only a few days to mate and die). Crane fly larvae live in soil and eat plant roots, sometimes damaging lawns. The "mosquito hawk" name comes from their resemblance to mosquitoes, not from any predator-prey relationship.',
  },
  {
    question: 'Do mosquito hawks eat mosquitoes?',
    answer: 'No — this is one of the most persistent insect myths in North America. Crane flies (mosquito hawks) do not eat mosquitoes at any life stage. Adult crane flies have non-functional or extremely reduced mouthparts and feed only minimally if at all (some species sip nectar). Their larvae are vegetarian — they eat plant roots, decaying leaves, and organic matter in soil. The myth likely originated because they look like giant mosquitoes, leading people to assume an exaggerated predator role.',
  },
  {
    question: 'Are mosquito hawks dangerous?',
    answer: 'No. Crane flies cannot bite or sting humans, pets, or livestock. They have no venom, no piercing mouthparts, and no defence mechanisms beyond clumsy flight. They are completely harmless to people and animals. The only "harm" they cause is the larvae sometimes eating grass roots in lawns, creating brown patches in heavily infested yards. Even this is rarely severe enough to require treatment.',
  },
  {
    question: 'How do you tell a mosquito hawk from a real mosquito?',
    answer: 'Three quick differences: (1) Size — crane flies are 15–25 mm long with very long, fragile legs that often break off. Mosquitoes are 3–6 mm. (2) Behavior — crane flies fly slowly and clumsily, often bumping into walls. Mosquitoes are fast and agile flyers. (3) Mouth — crane flies have no functional biting mouthparts. Mosquitoes have a clearly visible needle-like proboscis. If a "giant mosquito" lands on your wall and just sits there awkwardly, it\'s a crane fly.',
  },
  {
    question: 'How do I get rid of mosquito hawks?',
    answer: 'For ADULT crane flies in your home, just open a window — they\'ll fly toward light and exit. They die naturally within a few days regardless. For LARVAE damaging your lawn (look for brown patches and birds aggressively pecking the grass), apply beneficial nematodes (Heterorhabditis bacteriophora) in early fall. Severe infestations may need professional lawn care intervention. Note: mosquito barrier spray for adult mosquitoes does NOT effectively kill crane fly larvae since they live in soil, not on vegetation.',
  },
  {
    question: 'When are mosquito hawks (crane flies) active in Ontario?',
    answer: 'In Ontario, adult crane flies emerge in two main waves: a small spring emergence (April–May) and a larger fall emergence (September–October). Adults live only 5–10 days, just long enough to mate and lay eggs. Larvae develop in soil over 9–11 months. The fall emergence is when most homeowners notice them — large numbers of clumsy flying insects around outdoor lights and on building exteriors. They rarely indicate a serious lawn problem unless paired with visible turf damage.',
  },
  {
    question: 'Should I worry if I see lots of mosquito hawks near my house?',
    answer: 'Usually no. Crane flies are attracted to lights, so seeing many of them near porch lights or windows on warm fall evenings is normal. They don\'t bite, sting, or transmit disease. If you also see brown patches in your lawn AND flocks of birds (especially starlings or robins) aggressively pecking the grass, you may have a crane fly larvae infestation worth treating. Otherwise, just enjoy them as harmless garden visitors and let them complete their short adult lifecycle.',
  },
  {
    question: 'Do crane flies pollinate?',
    answer: 'Some adult crane flies sip nectar and may incidentally transfer pollen, but they are not significant pollinators. Their adult lifespans are too short (5–10 days) and their feeding too limited for meaningful pollination compared to bees, butterflies, and hover flies. Their main ecological role is as food for birds, bats, and amphibians at both larval and adult stages.',
  },
  {
    question: 'Is a mosquito hawk a crane fly or a dragonfly?',
    answer: 'It depends on where you live. In most of North America, "mosquito hawk" refers to the crane fly (family Tipulidae) — the harmless giant-mosquito lookalike that does NOT eat mosquitoes. In parts of the southern US and some coastal regions, "mosquito hawk" is instead a nickname for the dragonfly, which genuinely does eat mosquitoes. Other regional names for the crane fly include "mosquito eater," "skeeter eater," "gallinipper," and "daddy long-legs" (the last one is technically wrong — the true daddy long-legs is an arachnid). If someone tells you a "mosquito hawk" eats mosquitoes, they are almost certainly talking about a dragonfly, not a crane fly.',
  },
  {
    question: 'What is the difference between a mosquito hawk and a mosquito?',
    answer: 'A mosquito hawk (crane fly) is roughly 4–8 times larger than a mosquito (15–25 mm vs 3–6 mm), flies slowly and clumsily instead of fast and agile, has no functional biting mouthparts instead of a needle-like proboscis, and cannot bite, sting, or transmit disease. Crane fly larvae live in soil and eat plant roots; mosquito larvae live in standing water. In short: the mosquito hawk looks scary but is harmless, while the tiny mosquito is the one that actually bites you and can carry West Nile virus.',
  },
  {
    question: 'Do mosquito hawks bite?',
    answer: 'No. Mosquito hawks (crane flies) cannot bite. Adults have no functional biting or piercing mouthparts, no venom, and no stinger. They are physically incapable of biting or stinging humans, pets, or livestock. If a giant "mosquito" landed on you and it did not bite, it was almost certainly a crane fly.',
  },
  {
    question: 'How do I get rid of mosquito hawks in my house?',
    answer: 'The easiest fix is to turn off indoor lights, open a door or window, and turn on an outdoor light — crane flies fly toward light and will leave on their own. Because they only live 5–10 days as adults, any that stay indoors die naturally within days. To keep them out, repair torn window and door screens, seal gaps around doors, and switch exterior bulbs to yellow "bug lights," which attract far fewer flying insects. If you want them gone immediately, a quick knock-down flying-insect spray works, but for a harmless insect that dies in days on its own it is rarely necessary.',
  },
  {
    question: 'What attracts mosquito hawks to my house?',
    answer: 'Light is the main attractant — crane flies swarm porch lights, bright windows, and doorways at night, especially during the fall emergence (September–October) in Ontario. Damp, healthy lawns and gardens also draw them, because females lay eggs in moist soil where the larvae feed on roots. To reduce them around your home: use yellow bug-light bulbs outdoors, keep blinds closed on lit windows at night, and avoid overwatering the lawn.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'A "mosquito hawk" is a crane fly — and no, it does NOT eat mosquitoes. What it is, if it bites, and how to get rid of them. Clear Ontario guide.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('mosquito-hawk-explained')

export default function MosquitoHawkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'The truth about mosquito hawks (crane flies).', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Hawk', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Hawk</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The truth about &ldquo;mosquito hawks&rdquo;: they&rsquo;re crane flies, they don&rsquo;t eat mosquitoes, and the persistent myth is wrong.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <section className="bg-white px-4 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">A &ldquo;mosquito hawk&rdquo; is the common name for the crane fly &mdash; a large, harmless, long-legged insect that looks like a giant mosquito but does NOT eat mosquitoes at any life stage. The predator name is a myth.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Crane flies (&ldquo;mosquito hawks&rdquo;) do not eat mosquitoes at any life stage &mdash; the name is a myth.</li>
              <li>Crane flies cannot bite or sting; they have no venom, stinger, or piercing mouthparts.</li>
              <li>Adult crane flies live only 5 to 10 days, just long enough to mate and lay eggs.</li>
              <li>Crane flies are 15&ndash;25 mm long versus a mosquito&rsquo;s 3&ndash;6 mm, and fly slowly and clumsily.</li>
              <li>In Ontario they emerge in two waves: spring (April&ndash;May) and a larger fall wave (September&ndash;October).</li>
              <li>The real mosquito-eaters are dragonflies, bats, fish, and frogs &mdash; not crane flies.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Hawk vs Real Mosquito</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Feature</th>
                  <th className="px-3 py-2 text-left">Mosquito Hawk (Crane Fly)</th>
                  <th className="px-3 py-2 text-left">Real Mosquito</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Size', '15–25 mm long', '3–6 mm long'],
                  ['Legs', 'Very long, fragile, often break off', 'Slim, proportional'],
                  ['Flight', 'Slow, clumsy, bumps into walls', 'Fast, agile'],
                  ['Mouth', 'No functional biting parts', 'Visible needle-like proboscis'],
                  ['Bites?', 'NO — cannot bite humans', 'Yes — females bite for blood'],
                  ['Eats mosquitoes?', 'NO (despite the name)', 'N/A'],
                  ['Eats anything as adult?', 'Barely — most don\'t feed', 'Females need blood to lay eggs'],
                  ['Larvae habitat', 'Soil / decaying matter', 'Standing water'],
                  ['Larvae diet', 'Plant roots, organic matter', 'Filter-feeds on water microorganisms'],
                  ['Lifespan as adult', '5–10 days', '2–8 weeks (females)'],
                  ['Disease risk', 'NONE', 'West Nile, EEE, etc'],
                ].map(([feat, hawk, mosq]) => (
                  <tr key={feat} className="border-t border-navy-50">
                    <td className="px-3 py-2 font-semibold text-brand-800">{feat}</td>
                    <td className="px-3 py-2 text-gray-700">{hawk}</td>
                    <td className="px-3 py-2 text-gray-700">{mosq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-2">Which Bug Is the &ldquo;Mosquito Hawk&rdquo;? Crane Fly vs Dragonfly</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Here&rsquo;s the twist behind the confusion: &ldquo;mosquito hawk&rdquo; is a nickname for <strong>two totally different insects</strong>. In most of Canada and the northern US it means the <strong>crane fly</strong> — the harmless lookalike that <em>doesn&rsquo;t</em> eat mosquitoes. In parts of the southern US, the same name means the <strong>dragonfly</strong> — which genuinely <em>is</em> a mosquito predator. That single overlap is why the &ldquo;mosquito hawk eats mosquitoes&rdquo; myth refuses to die. Here&rsquo;s how all three compare side by side.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-brand-100">
                <tr>
                  <th className="px-3 py-2 text-left">Feature</th>
                  <th className="px-3 py-2 text-left">Crane Fly (&ldquo;Mosquito Hawk&rdquo;)</th>
                  <th className="px-3 py-2 text-left">Dragonfly (also called mosquito hawk)</th>
                  <th className="px-3 py-2 text-left">Mosquito</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Common meaning of “mosquito hawk”', 'Most of Canada & northern US', 'Southern US / coastal regions', 'N/A — it is the pest itself'],
                  ['Adult size', '15–25 mm long', '30–50 mm+ body, wide wingspan', '3–6 mm long'],
                  ['Eats mosquitoes?', 'NO (the big myth)', 'YES — voracious mosquito predator', 'N/A'],
                  ['Bites humans?', 'No — cannot bite', 'No — harmless to people', 'Yes — females bite for blood'],
                  ['Larvae live in', 'Soil & decaying matter', 'Water — nymphs eat mosquito larvae', 'Standing water'],
                  ['Flight style', 'Slow, clumsy, bumps walls', 'Fast, agile, acrobatic hunter', 'Fast, whiny, evasive'],
                  ['Helps control mosquitoes?', 'No', 'Yes — a natural ally', 'No — it is the target'],
                  ['Disease risk to humans', 'None', 'None', 'West Nile, EEE, and others'],
                ].map(([feat, crane, drag, mosq]) => (
                  <tr key={feat} className="border-t border-navy-50 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{feat}</td>
                    <td className="px-3 py-2 text-gray-700">{crane}</td>
                    <td className="px-3 py-2 text-gray-700">{drag}</td>
                    <td className="px-3 py-2 text-gray-700">{mosq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Bottom line: if someone swears a &ldquo;mosquito hawk&rdquo; eats mosquitoes, they&rsquo;re picturing a <strong>dragonfly</strong> — not the crane fly on your porch screen. Want the real mosquito-eaters working for you? See our guide to <Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 underline font-semibold">preventing mosquitoes in your backyard</Link>.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <h2>Do Mosquito Hawks Eat Mosquitoes?</h2>
          <p><strong>No — crane fly &ldquo;mosquito hawks&rdquo; do not eat mosquitoes at any life stage.</strong> This is the single most repeated myth about the insect, and it is simply wrong. Adult crane flies have reduced, non-functional mouthparts and mostly don&rsquo;t feed at all in their few days of life; a few species sip a little nectar. Their larvae are vegetarians that chew on plant roots and decaying matter in soil — nowhere near mosquito larvae, which live in water. The confusion comes entirely from the crane fly&rsquo;s uncanny resemblance to a giant mosquito, plus the fact that in some regions the <em>dragonfly</em> (a true mosquito predator) shares the same &ldquo;mosquito hawk&rdquo; nickname. If you actually want insects eating your mosquitoes, you want dragonflies and bats, not crane flies.</p>

          <h2>Are Mosquito Hawks Dangerous?</h2>
          <p><strong>No. Mosquito hawks are completely harmless to humans, pets, and livestock.</strong> Crane flies cannot bite or sting — they have no venom, no stinger, and no piercing mouthparts. They carry no diseases and pose no threat to people or animals. Contrary to another common myth, they are <em>not</em> the &ldquo;most venomous insect in the world&rdquo; (that internet claim is completely false). The only damage they ever cause is cosmetic: in heavy infestations, the soil-dwelling larvae can chew grass roots and leave brown patches in a lawn. For the vast majority of homeowners, a mosquito hawk is nothing more than a clumsy, harmless visitor.</p>

          <h2>Why the &ldquo;Mosquito Hawk&rdquo; Name?</h2>
          <p>Crane flies look like giant mosquitoes — long bodies, long legs, fragile wings. The mistaken assumption was: they look bigger and scarier, so they must eat the smaller mosquitoes. This is folk biology, not actual biology. The name &ldquo;mosquito hawk&rdquo; is regional — you&rsquo;ll also hear &ldquo;daddy long-legs&rdquo; (which is technically incorrect — the actual daddy long-legs is a different arachnid), &ldquo;skeeter eaters,&rdquo; or &ldquo;gallinippers.&rdquo; All wrong. They&rsquo;re crane flies (family Tipulidae).</p>

          <h2>What Crane Flies Actually Do</h2>
          <h3>Adults (5–10 days)</h3>
          <p>Adult crane flies have one purpose: mate and lay eggs. Most species don&rsquo;t feed at all as adults. A few species sip nectar from flowers but provide negligible pollination services. They are clumsy fliers — attracted to lights, easily caught by spiders, and often found dead on porches and windowsills. Their long legs are fragile and frequently break off mid-flight. This vulnerability is why they live so briefly.</p>

          <h3>Larvae (9–11 months)</h3>
          <p>Crane fly larvae — called &ldquo;leatherjackets&rdquo; in lawn-care contexts — live in soil and eat plant roots, decaying leaves, and organic matter. They&rsquo;re grey-brown, tube-shaped, and 25–40 mm long when mature. In light infestations they cause no visible damage. In heavy infestations they can cause brown patches in lawns, especially in fall and early spring.</p>

          <h2>When Are They Active in Ontario?</h2>
          <ul>
            <li><strong>Spring emergence (April–May):</strong> Smaller wave. Adults you see in early spring before mosquito season really starts.</li>
            <li><strong>Fall emergence (September–October):</strong> Larger wave. This is when most Ontario homeowners notice clouds of crane flies near porch lights and on building exteriors. They look ominous but are completely harmless.</li>
          </ul>

          <h2>How to Get Rid of Mosquito Hawks (Indoors &amp; Outdoors)</h2>
          <h3>Indoors: adults in the house</h3>
          <p>Adult crane flies that wander inside are harmless and short-lived, so the gentlest fix is usually the best one:</p>
          <ul>
            <li><strong>Let them out.</strong> Turn off indoor lights, open a door or window, and switch on an outdoor light — they drift toward it and leave on their own.</li>
            <li><strong>Wait them out.</strong> Adults only live 5–10 days, so any stragglers die naturally within days.</li>
            <li><strong>Vacuum</strong> the odd one off a wall or ceiling — their fragile legs make them easy to collect.</li>
            <li><strong>Seal the entry points.</strong> Repair torn window and door screens and swap porch bulbs for yellow &ldquo;bug lights,&rdquo; which attract far fewer flying insects.</li>
          </ul>
          <p>If you&rsquo;d rather not wait for a batch of them to clear out on their own, a quick knock-down spray does the job: <BuyLink tag={AMZ_TAG} search="indoor flying insect killer spray">Check indoor flying-insect spray on Amazon.ca →</BuyLink> For a harmless insect that dies in days regardless, it&rsquo;s rarely necessary — but it&rsquo;s an option if they&rsquo;re bothering you.</p>
          <h3>Outdoors: larvae in the lawn</h3>
          <p>Outdoors, &ldquo;getting rid of mosquito hawks&rdquo; only matters if the soil-dwelling <strong>larvae</strong> (leatherjackets) are chewing your grass roots. Spraying the clumsy adults is pointless — they don&rsquo;t bite, they die in days, and an <Link href="/blog/how-long-does-mosquito-spray-last">adult-mosquito barrier spray</Link> won&rsquo;t reach larvae living underground. The section below covers how to confirm a real larvae problem and treat it.</p>

          <h2>Do You Need to Treat Them?</h2>
          <p>Almost never. Adults die naturally in days. The only situation requiring action is heavy <strong>larvae</strong> damage to your lawn, identified by:</p>
          <ul>
            <li>Brown patches in the grass that spread over weeks</li>
            <li>Flocks of starlings, robins, or crows aggressively pecking the lawn (they&rsquo;re eating leatherjackets)</li>
            <li>Visible larvae when you peel back grass — grey-brown tube-shaped grubs</li>
          </ul>
          <p>Treatment for larvae infestations: beneficial nematodes (<em>Heterorhabditis bacteriophora</em>) applied in early fall when soil is warm and moist. These naturally parasitize crane fly larvae. Available at garden centres, through lawn care companies, or online: <BuyLink tag={AMZ_TAG} search="beneficial nematodes heterorhabditis bacteriophora">Beneficial nematodes on Amazon.ca →</BuyLink> <strong>BuzzSkito does not treat crane fly larvae</strong> — we focus on mosquitoes and ticks. Contact a lawn care specialist (LawnSavers, TruGreen) for serious crane fly issues.</p>

          <h2>Why This Matters for Mosquito Control</h2>
          <p>People with mosquito problems sometimes ask: &ldquo;Should I introduce mosquito hawks to eat my mosquitoes?&rdquo; The answer is no — they don&rsquo;t eat mosquitoes. The biological controls that DO eat mosquitoes:</p>
          <ul>
            <li><strong>Bats</strong> — eat 600–1,000 mosquitoes per night per bat. Install a bat box.</li>
            <li><strong>Dragonflies</strong> — adults catch mosquitoes mid-flight; larvae eat mosquito larvae in water.</li>
            <li><strong>Fish</strong> — goldfish, koi, mosquitofish eat mosquito larvae in ponds.</li>
            <li><strong>Frogs and tadpoles</strong> — eat mosquito larvae in shallow water.</li>
          </ul>
          <p>Even with all of these, the most effective residential mosquito control combines <Link href="/blog/mosquito-dunks-canada-guide">larvae control with BTI dunks</Link> and adult control with <Link href="/mosquito-control">professional barrier spray</Link>. Hoping crane flies will solve your mosquito problem is folklore — for a plan that actually works, see how to <Link href="/blog/how-to-get-rid-of-mosquitoes-in-yard-ontario">get rid of mosquitoes in your yard</Link>.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/bugs-that-look-like-ticks">Bugs That Look Like Ticks</Link></li>
            <li><Link href="/blog/mosquito-larvae-identification">How to Identify Mosquito Larvae</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada Guide</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Mosquito Control Service</Link></li>
          </ul>
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

        </div>
      </article>

      <CTASection heading="Real Mosquito Control · Not Folklore" subtext="Skip the crane fly myth. Get professional yard barrier spray that actually works." variant="dark" />
    </>
  )
}
