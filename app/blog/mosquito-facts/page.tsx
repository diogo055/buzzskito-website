import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import FreshnessStamp from '@/components/FreshnessStamp'
import TopPick from '@/components/TopPick'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import StickyBuyBar from '@/components/StickyBuyBar'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'mosquito-facts'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Mosquito Facts: How Long They Live, What They Eat & More'
const META_TITLE = 'Mosquito Facts: Lifespan, Diet, Sleep & Light'

const FAQS = [
  {
    question: 'How long do mosquitoes live?',
    answer: 'Most adult mosquitoes live about 2 to 4 weeks, though it varies by species and sex. Female Aedes and Culex mosquitoes often survive 3 to 6 weeks in warm summer conditions, while males typically live only 6 to 10 days. In Ontario, Culex females can survive far longer by overwintering — they hibernate in sheltered spots like sheds, culverts, and basements and emerge the following spring.',
  },
  {
    question: 'Do mosquitoes sleep?',
    answer: 'Mosquitoes do not sleep the way humans do, but they do rest. During the heat of the day, most mosquitoes are inactive — they hide in cool, shaded, humid spots like tall grass, dense shrubs, and under leaves. Aedes mosquitoes tend to bite during daylight (dawn and dusk peaks), while Culex mosquitoes are most active at night. They enter a quiet, low-energy resting state between feeding and flight periods.',
  },
  {
    question: 'Do male mosquitoes bite?',
    answer: 'No. Male mosquitoes never bite. They lack the elongated piercing mouthparts needed to draw blood and instead feed only on flower nectar and plant juices. Only female mosquitoes bite, because they need the protein and iron in blood to develop their eggs. If something bit you, it was a female Aedes, Culex, or Anopheles mosquito, never a male.',
  },
  {
    question: 'Why do mosquitoes need blood?',
    answer: 'Female mosquitoes need a blood meal to reproduce, not to feed themselves. Blood supplies the protein and amino acids required to develop a batch of eggs — nectar alone cannot provide them. After biting, a female rests while her eggs mature, then lays them in or near standing water. A single female may take several blood meals across her life, producing 100 to 300 eggs each cycle.',
  },
  {
    question: 'What do mosquitoes eat?',
    answer: 'Both male and female mosquitoes eat plant nectar, flower sap, and honeydew as their main energy source — sugar fuels flight. Only females also take blood, and only to make eggs. Mosquito larvae, which live in water, feed on algae, bacteria, and tiny organic particles. So blood is a supplement for egg production, not the mosquito diet; nectar is what actually keeps adult mosquitoes alive.',
  },
  {
    question: 'Are mosquitoes attracted to light?',
    answer: 'Mosquitoes are only weakly attracted to light, and much less than moths. They are drawn far more strongly to the carbon dioxide (CO2) in your breath, body heat, moisture, and skin chemicals like lactic acid. Bug zappers that use UV light kill mostly harmless insects, not mosquitoes. This is why CO2-baited traps outperform light traps, and why repellents and barrier sprays target the cues mosquitoes actually follow.',
  },
  {
    question: 'How far can a mosquito fly?',
    answer: 'It depends on the species. Container-breeding Aedes mosquitoes, common in urban GTA yards, usually stay within 100 to 300 metres of where they hatched. Culex mosquitoes may travel 1 to 3 kilometres, and some floodwater species can drift 10 kilometres or more on the wind. Because backyard biters tend to stay local, eliminating standing water on your own property makes a real difference.',
  },
  {
    question: 'How many eggs does a mosquito lay?',
    answer: 'A female mosquito lays roughly 100 to 300 eggs per batch and can produce several batches in her lifetime — potentially over 1,000 eggs total. Aedes mosquitoes lay eggs singly on damp surfaces just above the waterline, where they can survive dry for months and hatch when flooded. Culex mosquitoes lay floating egg rafts on standing water. This is why removing even small water sources is the single most effective control step.',
  },
  {
    question: 'Do mosquitoes have teeth?',
    answer: 'No, mosquitoes do not have teeth. A female bites using a slender mouthpart called a proboscis, which bundles six needle-like stylets that pierce skin and draw blood — not teeth. Under a microscope, the tip of the proboscis carries tiny saw-like serrations that help it slide in almost painlessly, which is likely where the myth comes from. Males lack even the blood-piercing parts and feed only on nectar.',
  },
  {
    question: 'How far do mosquitoes travel?',
    answer: 'Most mosquitoes stay close to where they hatched, but the distance depends on species. Backyard container-breeders like Aedes typically travel only 100 to 300 metres over their lives, while Culex may range 1 to 3 kilometres, and some floodwater and salt-marsh species can be carried 10 kilometres or more on the wind. Because the common GTA biters stay local, clearing standing water on your own lot makes a real difference.',
  },
  {
    question: 'How high do mosquitoes fly?',
    answer: 'Most mosquitoes fly low — usually within about 8 metres (25 feet) of the ground — because that is where hosts, shade, and resting spots are. Many backyard species prefer ankle-to-head height, which is why bites so often land on your legs and ankles. A few species have been recorded much higher, drifting up multi-storey buildings or riding wind currents, but ground level is where the biting actually happens.',
  },
  {
    question: 'Are mosquitoes nocturnal?',
    answer: 'It depends on the species — mosquitoes are not all nocturnal. Culex mosquitoes, the main West Nile carriers in Ontario, feed mostly after dark and at dusk, so they behave nocturnally. Aedes mosquitoes, however, are daytime biters that peak at dawn and dusk. Very few bite in the bright, hot middle of the day, when most species rest in cool shade. So you can be bitten day or night, depending on which species is around.',
  },
  {
    question: 'Can mosquitoes see in the dark?',
    answer: 'Mosquitoes see poorly in true darkness and rely far more on other senses to find you. Their compound eyes detect movement, shapes, and contrast in dim light, but they mainly track the carbon dioxide (CO2) in your breath, body heat, and skin chemicals like lactic acid to home in — even in the dark. Heat-sensing matters most up close, which is how night-biting Culex mosquitoes locate a sleeping host.',
  },
  {
    question: 'How many species of mosquitoes are there?',
    answer: 'There are more than 3,500 known mosquito species worldwide, and only a fraction bite humans or spread disease. Canada is home to roughly 80 species, with about 60-plus found in Ontario. In GTA backyards the ones that matter most are Aedes mosquitoes (aggressive day biters) and Culex mosquitoes (evening biters and the main West Nile virus vector). Most of the thousands of species never interact with people at all.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Quick, sourced answers to the most-asked mosquito questions: how long mosquitoes live, whether they sleep, if males bite, why females need blood, what mosquitoes eat, and whether they are attracted to light.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('mosquito-facts')

export default function MosquitoFactsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Fast, sourced answers to common mosquito questions — lifespan, sleep, biting, diet, and light attraction.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Facts', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Facts</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Fast, sourced answers to the mosquito questions people ask most — lifespan, sleep, biting, diet, and light.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* Quick Answer — AI-extraction block */}
      <section className="bg-white px-4 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Most adult mosquitoes live 2 to 4 weeks, only females bite, and blood is for making eggs &mdash; not food. Both sexes eat flower nectar; a female takes blood solely to develop 100 to 300 eggs per batch.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Most adult mosquitoes live about 2 to 4 weeks; some Culex females overwinter and survive for months.</li>
              <li>Only female mosquitoes bite &mdash; males lack piercing mouthparts and feed only on nectar.</li>
              <li>A female lays 100 to 300 eggs per batch and can produce over 1,000 eggs in her lifetime.</li>
              <li>Mosquitoes track carbon dioxide, body heat, and lactic acid far more than they track light.</li>
              <li>Backyard Aedes mosquitoes usually stay within 100 to 300 metres of where they hatched.</li>
              <li>There are more than 3,500 mosquito species worldwide; about 80 live in Canada and 60-plus in Ontario.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Quick-facts table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Quick Facts</h2>
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Adult lifespan', '2–4 weeks typical (females longer; males 6–10 days)'],
                  ['Overwintering', 'Some Culex females hibernate and survive the winter'],
                  ['Wingbeat frequency', '300–600 beats per second (the source of the whine)'],
                  ['Typical flight range', 'Aedes 100–300 m · Culex 1–3 km · floodwater species 10 km+'],
                  ['Eggs per batch', '100–300 (over 1,000 across a lifetime)'],
                  ['Who bites', 'Females only — for egg protein, not food'],
                  ['Main food', 'Flower nectar and plant sugars (both sexes)'],
                  ['Top attractants', 'CO2, body heat, moisture, lactic acid — not light'],
                  ['Breeding requirement', 'Standing water (as little as a bottle cap)'],
                  ['GTA species of note', 'Aedes (day biters), Culex (West Nile vector)'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-2/5">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Biology and behaviour figures align with the <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Mosquitoes</a>. Ranges vary by species and conditions.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <h2>How Long Do Mosquitoes Live?</h2>
          <p>A mosquito&rsquo;s life has four stages — egg, larva, pupa, and adult — and the whole cycle from egg to biting adult can take as little as 8 to 10 days in warm weather. As adults, most mosquitoes live <strong>2 to 4 weeks</strong>. Females generally outlive males, who often survive only about a week after mating. The big exception in Ontario is <em>Culex pipiens</em>: fertilized females can hibernate through winter in sheds, culverts, and basements, effectively living for many months and re-emerging in spring to start the season&rsquo;s first generation.</p>

          <h2>Do Mosquitoes Sleep?</h2>
          <p>Not in the human sense — mosquitoes have no eyelids and do not enter true sleep. But they absolutely <strong>rest</strong>. In the middle of a hot, dry day, most mosquitoes tuck into cool, humid hideouts: tall grass, dense shrubs, leaf litter, and the shaded sides of buildings. Activity peaks depend on species. <strong>Aedes</strong> mosquitoes are daytime biters that surge at dawn and dusk, while <strong>Culex</strong> mosquitoes come out to feed after dark. Between those windows they idle in a low-energy resting state.</p>

          <h2>Do Male Mosquitoes Bite?</h2>
          <p>No — and this is one of the most useful facts to know. <strong>Only female mosquitoes bite.</strong> Males lack the needle-like mouthparts (the fascicle) required to pierce skin and draw blood. Instead, males spend their short lives feeding on nectar and looking for females to mate with. When people talk about mosquito bites, itching, and disease risk, they are always talking about females. For a deeper comparison of how the two differ in size, behaviour, and biting, see our guide on the <Link href="/blog/male-vs-female-mosquito">difference between male and female mosquitoes</Link>.</p>

          <h2>Why Do Mosquitoes Need Blood?</h2>
          <p>Here is the key misconception, corrected: female mosquitoes do not drink blood for nourishment. They drink it to <strong>reproduce</strong>. A blood meal delivers the concentrated protein, amino acids, and iron a female needs to build a batch of 100 to 300 eggs. Nectar keeps her alive and flying; blood turns into offspring. After a bite she rests for a couple of days while the eggs develop, then seeks out standing water to lay them — and often repeats the cycle several times.</p>
          <p>Two follow-on questions fall out of that cycle, and both have a counter-intuitive answer. A mosquito does not die after biting you &mdash; that is the honeybee, whose barbed stinger tears out &mdash; and one interrupted female can leave several welts in a single evening rather than a single tidy bump. We settle both in our explainer on <Link href="/blog/how-many-times-can-a-mosquito-bite-you">whether a mosquito dies after it bites you</Link>.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Know the facts — now clear the yard</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Because backyard mosquitoes stay close to where they hatch, treating the shaded resting spots and killing larvae on your property works. BuzzSkito&rsquo;s licensed barrier spray covers GTA yards from $99 — backed by 150+ five-star reviews.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>What Do Mosquitoes Eat?</h2>
          <p>The everyday mosquito diet is <strong>plant sugar</strong>. Both males and females sip flower nectar, tree sap, and honeydew — sugar is the fuel for their whirring flight. Their larvae, which live in water, filter-feed on algae, bacteria, and organic debris. Blood is not food and it is not the diet; it is a reproductive supplement that only females take, and only when they are ready to make eggs. That distinction — nectar for living, blood for eggs — explains almost everything mosquitoes do.</p>

          <h2>Are Mosquitoes Attracted to Light?</h2>
          <p>Only mildly. Mosquitoes react to light, but they are far more powerfully drawn to the signals that mean &ldquo;host nearby&rdquo;: the <strong>carbon dioxide (CO2)</strong> in your breath, radiant body heat, humidity, and skin chemicals such as <strong>lactic acid</strong> and octenol. This is why UV bug zappers are poor mosquito control — they mostly electrocute harmless moths and beetles — while CO2-baited traps and repellents that mask your scent (DEET, picaridin/icaridin, oil of lemon eucalyptus) actually work. It also explains why some people get bitten more than others: it comes down to the chemistry and CO2 you emit, not the porch light.</p>
          <p>What <em>is</em> circling that light is usually something else. The big, gangly, long-legged insect people call a &ldquo;mosquito hawk&rdquo; is a crane fly, and despite the nickname <Link href="/blog/mosquito-hawk-explained">it neither bites you nor eats mosquitoes</Link>.</p>

          <p>Everything above points at the same lever. A mosquito&rsquo;s first ten days are spent in water, she rarely travels more than a few hundred metres from where she hatched, and she cannot skip that stage. So the highest-leverage thing you can buy is not a spray for your skin — it is a <strong>Bti larvicide</strong> dropped into the water on your own property, which kills the larvae before they ever become the adults that bite you.</p>

          <TopPick tag={AMZ_TAG}
            label="Our Top Pick — Kill Them Before They Fly"
            name="Summit Mosquito Dunks (Bti larvicide)"
            blurb="A floating disc of Bacillus thuringiensis israelensis — a bacterium that is lethal to mosquito larvae and harmless to fish, birds, pets, and people. One dunk treats about 9 m² of standing water for 30 days: rain barrels, birdbaths, blocked gutters, pond edges, tarps, plant saucers. Because backyard mosquitoes hatch close to where they bite, this is the one purchase that reduces the population rather than just hiding you from it."
            search="summit mosquito dunks"
            score={9.0}
            pros={['Attacks the larval stage — fewer adult mosquitoes, not just fewer bites on you', 'Safe around fish, birds, pets, and children', '30 days per dunk; works in any water you cannot drain']}
            cons={['Only works on standing water you can reach — not a fix for a neighbour&rsquo;s pond', 'Does nothing to adults already flying']}
          />

          <p>Once the water is handled, a good repellent handles you personally. If you spend a lot of time outdoors — or away from a treated yard — a picaridin or DEET repellent is the simplest personal defence. <BuyLink tag={AMZ_TAG} search="picaridin mosquito repellent spray">Check mosquito repellents on Amazon.ca →</BuyLink></p>

          <TopPick tag={AMZ_TAG}
            label="Our Top Pick — Personal Repellent"
            name="Picaridin (Icaridin) Mosquito Repellent Spray"
            blurb="Because mosquitoes hunt by CO₂, heat, and skin chemistry rather than light, the reliable personal defence is a repellent that masks those cues. A 20% picaridin spray protects for hours, is odourless and non-greasy, and won't damage plastics or gear the way DEET can — the simplest way to stay bite-free when you're away from a treated yard."
            search="picaridin mosquito repellent spray"
            score={8.7}
            pros={['Long-lasting protection from a single application', 'Odourless and non-greasy on skin', 'Safe on clothing, plastics, and gear']}
            cons={['Protects only the person wearing it, not the yard', 'Needs reapplication on long days outdoors']}
          />

          <h2>The One Fact That Matters Most</h2>
          <p>Of every fact on this page, one is worth acting on: mosquitoes cannot complete their life cycle without <strong>standing water</strong>, and container-breeding Aedes need barely a bottle cap&rsquo;s worth. Empty and scrub anything that holds water weekly — plant saucers, clogged gutters, tarps, toys, birdbaths — and you break the cycle before adults ever take flight. Pair that with a barrier treatment of the shaded areas where adults rest, and you address both ends of the mosquito&rsquo;s life at once.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/male-vs-female-mosquito">Male vs Female Mosquito — What&rsquo;s the Difference?</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Book a Free Yard Assessment</Link></li>
          </ul>
        </div>
      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Dunks (Bti larvicide)" search="summit mosquito dunks" label="Best first buy" />

      <CTASection heading="Facts Are Nice — A Bite-Free Yard Is Better" subtext="Get a free quote for licensed barrier spray. From $99. Same-day protection. 30-day residual." variant="dark" />
    </>
  )
}
