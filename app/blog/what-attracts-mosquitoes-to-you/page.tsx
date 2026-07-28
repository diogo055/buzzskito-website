import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import FreshnessStamp from '@/components/FreshnessStamp'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'what-attracts-mosquitoes-to-you'
const DATE = '2026-07-13'
const UPDATED = '2026-07-13'
const TITLE = 'What Attracts Mosquitoes to You? Why They Pick You (2026)'

const FAQS = [
  {
    question: 'What attracts mosquitoes to you?',
    answer: 'Mosquitoes find you using a stack of cues, roughly in this order: the carbon dioxide (CO₂) you exhale, your body heat and moisture, and the chemistry of your sweat and skin — lactic acid, ammonia, uric acid, and the specific mix of bacteria living on your skin. Secondary factors add up on top: type O blood, dark clothing, a recent beer, pregnancy, and movement. Only a female mosquito bites, because she needs the protein in blood to develop her eggs.',
  },
  {
    question: 'Why do mosquitoes bite me more than everyone else?',
    answer: 'Because your personal chemistry advertises "human host" more loudly than the person next to you. Twin studies suggest attractiveness to mosquitoes is largely heritable — some estimates put the genetic component around 85%. You cannot change your genes, blood type, or basal metabolism, but the things layered on top (sweat left on the skin, dark clothing, alcohol, body heat from exercise) are adjustable. So while some people really are "mosquito magnets," you can still shrink the target you present.',
  },
  {
    question: 'Does blood type affect mosquito bites? Is type O worse?',
    answer: 'Yes, modestly. In controlled studies, people with type O blood were landed on and bitten noticeably more often than people with type A, with type B in between. About 80% of people also secrete chemical signals of their blood type through their skin ("secretors"), and secretors attract more mosquitoes than non-secretors regardless of type. Blood type is a real but secondary factor — CO₂, heat, and skin chemistry matter more, and you cannot change your blood type anyway.',
  },
  {
    question: 'Does drinking beer or alcohol attract mosquitoes?',
    answer: 'Yes — a small study found that drinking a single 350 ml beer measurably increased the number of mosquitoes that landed on people. The exact reason is not fully understood; it was not simply ethanol in sweat or a rise in skin temperature. The practical takeaway for a summer patio: alcohol appears to make you a slightly bigger target, so a cold beer at dusk in mosquito season is working against you.',
  },
  {
    question: 'Why are mosquitoes more attracted to pregnant women?',
    answer: 'Pregnancy raises two of the biggest attraction cues at once. Studies (including work on malaria mosquitoes) found pregnant women exhale about 21% more carbon dioxide and run a slightly warmer abdomen, so they were bitten roughly twice as often as non-pregnant women in some trials. The effect is temporary and biological — it is a reason to be extra diligent with repellent and yard control during pregnancy, not a cause for alarm.',
  },
  {
    question: 'Does wearing dark clothing attract mosquitoes?',
    answer: 'Yes. Mosquitoes hunt partly by sight in the final approach, and they are drawn to high-contrast, dark colours — black, navy, dark red — against a lighter background. Recent research found that after detecting CO₂, mosquitoes fly toward specific colours (red, orange, black, cyan) and largely ignore green, blue, purple, and white. Wearing light, loose clothing genuinely makes you harder to spot and harder to bite through.',
  },
  {
    question: 'Can I change what I eat to be less attractive to mosquitoes?',
    answer: 'Mostly no. The popular ideas — eating garlic, taking vitamin B1 (thiamine), or eating bananas making you more attractive — have not held up in controlled testing. There is no reliable food or supplement that turns off mosquito attraction. What actually works is topical: an EPA/Health Canada-registered repellent with DEET or picaridin on skin, permethrin on clothing, and removing the standing water and yard habitat where mosquitoes breed.',
  },
  {
    question: 'What is the single most effective way to stop getting bitten?',
    answer: 'Combine personal protection with source control. On your body, use a registered repellent (DEET or picaridin) and light-coloured clothing. Around your patio, a Thermacell creates a repellent zone, and tipping out standing water every week removes breeding sites. For whole-yard relief, a professional barrier spray treats the shaded leaf surfaces where mosquitoes rest, cutting the population you are exposed to rather than just masking your scent.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Mosquitoes zero in on CO₂, body heat, type O blood, lactic acid and skin bacteria, dark clothing, and beer. Here is exactly what makes you a mosquito magnet — plus how to be less attractive and actually stop the bites.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('what-attracts-mosquitoes-to-you')

export default function WhatAttractsMosquitoesToYouPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'What attracts mosquitoes to you — CO₂, body heat, blood type, skin chemistry, clothing, and how to be less attractive.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'What Attracts Mosquitoes to You?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">What Attracts Mosquitoes to You?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Why some people get devoured while the person beside them barely gets touched — and the factors you can actually change.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* Quick Answer — AI-extraction capsule */}
      <section className="bg-white pt-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-base text-gray-800 leading-relaxed">
              <strong>Mosquitoes home in on the carbon dioxide (CO&#8322;) you exhale, your body heat and sweat, the lactic acid and skin bacteria on your skin, type O blood, dark clothing, and even a recent beer.</strong> Roughly 85% of how attractive you are is genetic, so some people really are &ldquo;mosquito magnets.&rdquo; But you can still shrink the target: wear light colours, rinse off sweat, skip the patio beer at dusk, use a DEET or picaridin repellent, and treat the yard where mosquitoes actually rest and breed.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Carbon dioxide from your breath is the main long-range cue mosquitoes use to find you.</li>
              <li>Twin studies suggest attractiveness to mosquitoes is roughly 85% heritable, so &ldquo;mosquito magnet&rdquo; status is largely genetic.</li>
              <li>People with type O blood tend to be bitten more than those with type A.</li>
              <li>Pregnancy raises CO&#8322; output about 21% and warms the skin, both of which draw mosquitoes.</li>
              <li>Even one beer measurably increased mosquito landings in controlled studies.</li>
              <li>Dark clothing (black, navy, red) is easier for mosquitoes to track, so light, loose colours help.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Ranked attraction-factors table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">What Makes You a Mosquito Magnet — Ranked</h2>
          <p className="text-sm text-gray-600 mb-4">Factors are listed strongest first. The final column is the honest one: how much of it you can actually do something about.</p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-3 py-2 text-left">Attraction factor</th>
                  <th className="px-3 py-2 text-left">How much it matters</th>
                  <th className="px-3 py-2 text-left">Can you change it?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Carbon dioxide (CO₂) you exhale', 'Very high — the main long-range cue', 'No — but you breathe out more when active, large, or pregnant'],
                  ['Body heat & moisture', 'High — guides the close-range approach', 'Partly — cool down and stay dry'],
                  ['Sweat chemistry (lactic acid, ammonia)', 'High — signals fresh human skin', 'Partly — rinse off after exercise'],
                  ['Skin bacteria (your microbiome)', 'High — certain microbe mixes are irresistible', 'Hard — largely fixed, but showering helps'],
                  ['Genetics / body odour', 'High — ~85% heritable in twin studies', 'No — you inherited it'],
                  ['Blood type (type O)', 'Moderate — type O bitten more than A', 'No — fixed for life'],
                  ['Dark clothing (black, navy, red)', 'Moderate — mosquitoes track dark colours', 'Yes — wear light, loose colours'],
                  ['Beer / alcohol', 'Low–moderate — one beer measurably raised landings', 'Yes — easy to skip at dusk'],
                  ['Pregnancy', 'Moderate — ~21% more CO₂, warmer skin', 'No — temporary and biological'],
                  ['Movement', 'Low–moderate — motion draws the final strike', 'Partly — stillness helps a little'],
                ].map(([factor, matters, change]) => (
                  <tr key={factor} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{factor}</td>
                    <td className="px-3 py-2 text-gray-700">{matters}</td>
                    <td className="px-3 py-2 text-gray-700">{change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Attraction cues summarised from the <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Mosquitoes</a> and peer-reviewed host-seeking research.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <h2>First, the part nobody tells you: only females bite</h2>
          <p>Male mosquitoes live on flower nectar and never bite. It is the <strong>female</strong> that hunts you, because she needs the protein in a blood meal to develop her eggs. That is why &ldquo;why do mosquitoes like me?&rdquo; is really a question about how well your body broadcasts the signals a hungry female is scanning for. She works in stages — long-range chemistry first, then heat and vision up close — and your personal mix of cues decides whether she commits to landing on you or the person beside you.</p>

          <h2>The three cues that do most of the work</h2>
          <p><strong>Carbon dioxide (CO&#8322;).</strong> Every time you breathe out, you release a plume of CO&#8322; that a mosquito can detect from many metres away. It is the single most important long-range signal, and it explains a lot of the other factors: bigger adults, people who are exercising, and pregnant women all exhale more CO&#8322;, so they light up more brightly on a mosquito&rsquo;s radar.</p>
          <p><strong>Body heat and moisture.</strong> Once CO&#8322; points her in your direction, a mosquito switches to detecting warmth and humidity. Your skin is a warm, damp beacon. Anything that raises your surface temperature — a workout, a hot day, a couple of drinks — makes the close-range approach easier for her.</p>
          <p><strong>Skin chemistry and bacteria.</strong> Human sweat carries lactic acid, ammonia, and uric acid, and your skin hosts a personal community of bacteria that turn those compounds into scent. Research has shown that people whose skin carries a particular, less-diverse mix of microbes are dramatically more attractive to mosquitoes. This is a big reason some people are lifelong &ldquo;mosquito magnets&rdquo; while others are largely ignored.</p>

          <h2>The blood-type, beer, and pregnancy questions everyone asks</h2>
          <p><strong>Blood type.</strong> It is real but secondary. In controlled tests, people with <strong>type O</strong> blood attracted and were bitten by more mosquitoes than people with type A, with type B in the middle. On top of that, about 80% of people are &ldquo;secretors&rdquo; who release chemical markers of their blood type through the skin, and secretors get bitten more than non-secretors. You cannot change any of this — it just means blood type nudges the odds.</p>
          <p><strong>Beer.</strong> Yes, alcohol appears to matter. In a small but frequently cited study, volunteers who drank a single 350 ml beer had measurably more mosquitoes land on them afterward. The mechanism was not simply ethanol in the sweat or a bump in skin temperature, so researchers could not fully explain it — but the practical lesson holds: a cold beer on the patio at dusk makes you a slightly bigger target.</p>
          <p><strong>Pregnancy.</strong> Pregnant women get bitten more, and the reason is straightforward: studies found they exhale roughly <strong>21% more CO&#8322;</strong> and carry a slightly warmer abdomen, hitting two of the strongest cues at once. Some trials recorded about double the bites. It is temporary, but it is a good reason to be extra consistent with repellent and yard control during pregnancy.</p>

          <aside aria-label="Repellents that work" className="not-prose my-8 rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">If you are the one who always gets bitten</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">You cannot change your CO&#8322; output or blood type, but a registered repellent hides the cues that lead a mosquito the last few metres to your skin. Picaridin is odourless, non-greasy, and won&rsquo;t damage plastics or gear the way DEET can.</p>
            <div className="not-prose flex flex-wrap gap-3">
              <BuyLink tag={AMZ_TAG} search="picaridin insect repellent">Check picaridin repellent on Amazon →</BuyLink>
              <BuyLink tag={AMZ_TAG} search="thermacell mosquito repeller">Thermacell patio repeller →</BuyLink>
            </div>
          </aside>

          <h2>What you wear (and how you move) matters more than you think</h2>
          <p>In the final approach a mosquito uses vision, and she is drawn to dark, high-contrast colours. Recent work showed that once mosquitoes smell CO&#8322;, they fly toward specific colours — <strong>red, orange, black, and cyan</strong> — while largely ignoring green, blue, purple, and white. That is why <strong>light, loose clothing</strong> is such an easy win: it is harder to see against the background and harder to bite through. Movement adds to it — waving and swatting can actually flag your location for the final strike.</p>

          <h2>What does NOT work (skip the folk remedies)</h2>
          <p>A lot of &ldquo;why are mosquitoes so attracted to me&rdquo; advice online is myth. Eating garlic, dosing on vitamin B1 (thiamine), or the idea that bananas make you tastier have all failed in controlled testing. Ultrasonic phone-app repellers and wristbands perform poorly in independent trials too. There is no food, pill, or gadget that reliably switches off your attractiveness. The things that genuinely work are topical repellents, clothing choices, and removing the habitat mosquitoes rely on. For the full breakdown of active ingredients and concentrations, see our <Link href="/blog/mosquito-repellent-guide-ontario-2026">mosquito repellent guide</Link>.</p>

          <h2>How to be less attractive to mosquitoes — a real checklist</h2>
          <ol>
            <li><strong>Use a registered repellent.</strong> DEET or picaridin on exposed skin is the most reliable personal defence — picaridin (20%) matches DEET for protection without the greasy feel or plastic damage.</li>
            <li><strong>Wear light, loose colours.</strong> Swap the black t-shirt for white, tan, or pale grey, and cover up at dawn and dusk when biting peaks.</li>
            <li><strong>Rinse off sweat.</strong> A quick shower after yard work or exercise strips away the lactic acid and bacteria that advertise you as a host.</li>
            <li><strong>Skip the dusk beer.</strong> Save the drinks for indoors or later, since alcohol measurably raises landings.</li>
            <li><strong>Kill the breeding sites.</strong> Tip out anything holding water — saucers, buckets, clogged gutters, kids&rsquo; toys — every few days. A mosquito can breed in a bottle cap of water.</li>
            <li><strong>Create a patio zone.</strong> A Thermacell or a running fan (mosquitoes are weak fliers) buys you a comfortable seating area.</li>
            <li><strong>Treat the whole yard.</strong> Repellent hides you; a barrier spray removes the mosquitoes resting on shaded leaves before they ever reach you.</li>
          </ol>
          <p>Curious how the insect itself works? Our <Link href="/blog/mosquito-facts">mosquito facts guide</Link> covers lifespan, breeding, flight range, and disease risk in plain language.</p>

          <TopPick tag={AMZ_TAG}
            label="Our Top Pick for Personal Protection"
            name="Picaridin 20% Insect Repellent"
            blurb="If you are the person who always gets bitten, a picaridin repellent is the single most reliable thing you can put on your skin. It matches DEET for protection against mosquitoes but is odourless, non-greasy, and won't damage plastics, sunglasses, or gear — which makes it the one people actually keep reapplying."
            search="picaridin insect repellent"
            score={8.8}
            pros={['Matches DEET-level protection', 'Odourless and non-greasy', "Won't damage plastics or fabrics"]}
            cons={['Needs reapplying every few hours', 'Only protects the skin you cover']}
          />

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">You can&rsquo;t change your genes — but you can change your yard</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">If you are always the one getting eaten, the fastest relief is fewer mosquitoes to begin with. BuzzSkito&rsquo;s licensed barrier spray treats the shaded resting spots and breeding zones across your property, backed by 150+ five-star reviews across 19 GTA cities. Single treatments from $99, seasonal plans from $549. +HST.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Yard Assessment →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>The bottom line</h2>
          <p>Most of what makes you a mosquito magnet — your CO&#8322; output, blood type, skin microbiome, and genetics — is baked in and roughly 85% heritable. That is genuinely why some people get destroyed and others barely notice. But the levers you <em>can</em> pull add up fast: light clothing, no dusk beer, a rinse after sweating, a good repellent, and cutting the mosquito population in your yard at the source. You will never be invisible to a hungry female, but you can absolutely stop being her first choice.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-facts">Mosquito Facts — Lifespan, Breeding &amp; Bite Biology</Link></li>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Mosquito Repellent Guide — DEET vs Picaridin</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control</Link></li>
            <li><Link href="/free-yard-assessment">Get a Free Yard Assessment</Link></li>
          </ul>
        </div>
      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Picaridin 20% insect repellent" search="picaridin insect repellent" label="Best repellent" />

      <CTASection heading="Stop Being the One Who Always Gets Bitten" subtext="You can't change your blood type — but you can clear the mosquitoes from your yard. Licensed barrier spray from $99. +HST." variant="dark" />
    </>
  )
}
