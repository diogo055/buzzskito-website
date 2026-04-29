import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'mosquito-hawk-explained'
const DATE = '2026-04-28'
const TITLE = 'Mosquito Hawk — What It Actually Is (Crane Fly Truth)'

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
]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Hawk · What It Actually Is (Crane Fly Truth)',
  description: 'A "mosquito hawk" is a crane fly — and they DO NOT eat mosquitoes despite the name. Identification, lifecycle, and what to do about them in Ontario.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function MosquitoHawkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'The truth about mosquito hawks (crane flies).', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Hawk', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Hawk</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The truth about &ldquo;mosquito hawks&rdquo;: they&rsquo;re crane flies, they don&rsquo;t eat mosquitoes, and the persistent myth is wrong.</p>
        </div>
      </section>

      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">What is a mosquito hawk?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>A &ldquo;mosquito hawk&rdquo; is the common name for the crane fly — a large, harmless, long-legged flying insect that looks like a giant mosquito but is unrelated.</strong> Despite the name, crane flies <strong>DO NOT eat mosquitoes</strong> at any life stage. The name is a popular myth. Adult crane flies barely eat at all (they live 5–10 days to mate). Larvae live in soil and eat plant roots. They cannot bite or sting humans, pets, or livestock. In Ontario they emerge in two waves: spring (April–May) and a larger fall wave (September–October). They are completely harmless to people and rarely a serious lawn problem unless you see brown patches plus flocks of birds pecking the grass aggressively.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Hawk vs Real Mosquito</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
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

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

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

          <h2>Do You Need to Treat Them?</h2>
          <p>Almost never. Adults die naturally in days. The only situation requiring action is heavy <strong>larvae</strong> damage to your lawn, identified by:</p>
          <ul>
            <li>Brown patches in the grass that spread over weeks</li>
            <li>Flocks of starlings, robins, or crows aggressively pecking the lawn (they&rsquo;re eating leatherjackets)</li>
            <li>Visible larvae when you peel back grass — grey-brown tube-shaped grubs</li>
          </ul>
          <p>Treatment for larvae infestations: beneficial nematodes (<em>Heterorhabditis bacteriophora</em>) applied in early fall when soil is warm and moist. These naturally parasitize crane fly larvae. Available at garden centres or through lawn care companies. <strong>BuzzSkito does not treat crane fly larvae</strong> — we focus on mosquitoes and ticks. Contact a lawn care specialist (LawnSavers, TruGreen) for serious crane fly issues.</p>

          <h2>Why This Matters for Mosquito Control</h2>
          <p>People with mosquito problems sometimes ask: &ldquo;Should I introduce mosquito hawks to eat my mosquitoes?&rdquo; The answer is no — they don&rsquo;t eat mosquitoes. The biological controls that DO eat mosquitoes:</p>
          <ul>
            <li><strong>Bats</strong> — eat 600–1,000 mosquitoes per night per bat. Install a bat box.</li>
            <li><strong>Dragonflies</strong> — adults catch mosquitoes mid-flight; larvae eat mosquito larvae in water.</li>
            <li><strong>Fish</strong> — goldfish, koi, mosquitofish eat mosquito larvae in ponds.</li>
            <li><strong>Frogs and tadpoles</strong> — eat mosquito larvae in shallow water.</li>
          </ul>
          <p>Even with all of these, the most effective residential mosquito control combines <Link href="/blog/mosquito-dunks-canada-guide">larvae control with BTI dunks</Link> and adult control with <Link href="/mosquito-control">professional barrier spray</Link>. Hoping crane flies will solve your mosquito problem is folklore — they won&rsquo;t.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/bugs-that-look-like-ticks">Bugs That Look Like Ticks</Link></li>
            <li><Link href="/blog/mosquito-larvae-identification">How to Identify Mosquito Larvae</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada Guide</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Real Mosquito Control · Not Folklore" subtext="Skip the crane fly myth. Get professional yard barrier spray that actually works." variant="dark" />
    </>
  )
}
