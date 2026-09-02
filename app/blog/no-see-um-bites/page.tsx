import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import Figure from '@/components/Figure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'no-see-um-bites'
const DATE = '2026-07-19'
const UPDATED = '2026-07-19'
const TITLE = 'No-See-Um Bites: What They Look Like, Why They Itch So Much & How to Treat Them (2026)'
const META_TITLE = 'No-See-Um Bites: 3 Look-Alikes and How to Treat'

const FAQS = [
  {
    question: 'What do no-see-um bites look like?',
    answer: 'A no-see-um bite usually starts as a sharp, burning pinprick, then within a few hours becomes a small flat red dot that swells into an itchy raised welt. Because biting midges feed in groups, the bites often appear in clusters or patches rather than as a single bump, most commonly on exposed skin around the ankles, wrists, neck, and hairline. Many people see a tiny red centre point where the mouthparts pierced the skin, surrounded by a reddened halo. Reactions vary a lot from person to person — some get barely a mark, others develop firm, intensely itchy welts or small fluid-filled blisters that last several days.',
  },
  {
    question: 'Why are no-see-um bites so much itchier than mosquito bites?',
    answer: 'No-see-ums do not pierce a single vessel the way a mosquito does. Instead the female uses scissor-like mouthparts to slice a small pool in the skin and feeds from it, injecting saliva loaded with proteins to keep the blood flowing. Your immune system reacts to those salivary proteins, and because the feeding is messier and often repeated in clusters, the histamine response can be stronger and longer-lasting than a typical mosquito welt. The itch also tends to peak a day or two after the bite and can linger for several days, which is why no-see-um bites often feel disproportionately irritating for such a tiny insect.',
  },
  {
    question: 'How long do no-see-um bites last?',
    answer: 'For most people, a no-see-um bite is itchiest in the first 2 to 4 days and fades over roughly 1 to 2 weeks. Firmer welts, small blisters, or a stronger allergic-type reaction can take longer to settle, sometimes 2 to 3 weeks, and scratching that breaks the skin can prolong healing or lead to infection. If a bite site keeps expanding, becomes increasingly painful, warm, and swollen, or starts oozing pus after several days, that can signal a secondary skin infection and should be seen by a healthcare provider.',
  },
  {
    question: 'How do you treat no-see-um bites and stop the itch?',
    answer: 'General self-care for itchy bites includes washing the area with soap and water, applying a cold compress to calm swelling, and using an over-the-counter anti-itch product such as hydrocortisone cream, calamine, or an oral antihistamine as directed on the label. Try hard not to scratch, since broken skin invites infection. These are general comfort measures, not medical advice or a prescription — follow the product directions, and if you are unsure, pregnant, treating a young child, or the reaction is severe, ask a pharmacist or healthcare provider.',
  },
  {
    question: 'How do no-see-ums bite through window and porch screens?',
    answer: 'Standard insect screening is woven with mesh openings of roughly 1.1 to 1.5 mm (about 1/16 inch), which is sized to stop houseflies and mosquitoes. No-see-ums are only about 1 to 3 mm long and slim enough to fly straight through those gaps. To keep them out you need finer "no-see-um mesh," typically 20x20 threads per inch or tighter, with openings around 0.6 mm (about 0.025 inch, roughly 1/40 inch). The trade-off is reduced airflow, so many people pair fine mesh with a fan, because biting midges are weak fliers that cannot push against moving air.',
  },
  {
    question: 'How do you tell a no-see-um bite from a mosquito bite?',
    answer: 'The quickest tells are the first sensation and the pattern. A no-see-um bite begins as a sharp, burning sting and usually shows up in clusters on exposed skin near ankles, wrists, and the hairline, with an itch that can linger for days. A mosquito bite is often unnoticed at first, then becomes a single puffy raised welt that tends to ease within a day or two, and you may have heard the mosquito whine. No-see-ums are silent and roughly one-quarter the size of a mosquito, so you often feel the bite before you ever see the insect.',
  },
  {
    question: 'How do you tell no-see-um bites from flea or chigger bites?',
    answer: 'All three can look like small, itchy red bumps in clusters, so location and context help most. Flea bites usually sit low on the ankles and lower legs, often in lines or clusters with a small central puncture, and are common in homes with pets. Chigger bites also cluster around the ankles, sock line, and waistband where clothing is tight, and their itch typically peaks about 1 to 2 days later. No-see-um bites tend to be on exposed skin (ankles, wrists, neck, hairline) and are linked to time spent outdoors near water at dawn or dusk. If you are not sure what is biting or the reaction is severe, a healthcare provider or pest professional can help.',
  },
  {
    question: 'How do you prevent no-see-um bites?',
    answer: 'Cover exposed skin at dawn and dusk with long, light-coloured sleeves, and treat clothing and gear with permethrin. On skin, both the CDC and Health Canada list DEET and picaridin (also called icaridin) as effective registered repellents, with oil of lemon eucalyptus as a plant-based option — apply it well to ankles, wrists, and the hairline where midges target. Because biting midges are weak fliers, running a fan on a patio grounds them, and a fine-mesh head net protects the face in heavy swarms. Reducing damp breeding habitat around the yard cuts the local population over time.',
  },
  {
    question: 'Are no-see-um bites dangerous?',
    answer: 'For most people in North America, no-see-um bites are an itchy nuisance rather than a serious health threat — the biting midges here are not significant carriers of human disease, unlike some tropical Culicoides species that can transmit parasites elsewhere in the world. The realistic risks are intense itching, clustered welts, allergic-type reactions in sensitive people, and secondary infection from scratching. Public-health guidance from agencies such as the CDC and the Public Health Agency of Canada focuses far more on mosquitoes and ticks for disease. Seek care if you develop signs of infection or a severe allergic reaction.',
  },
  {
    question: 'When should you see a doctor about a no-see-um bite?',
    answer: 'See a healthcare provider if a bite site becomes increasingly red, warm, swollen, and painful over days, develops pus or red streaks, or you run a fever — these can indicate a secondary skin infection. Seek urgent care for signs of a severe allergic reaction such as widespread hives, facial or lip swelling, or trouble breathing (call emergency services immediately). Also check in if bites are extremely widespread, blistering badly, or not improving after a couple of weeks. This article is general information, not medical advice.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description:
    'What do no-see-um bites look like, why do they itch more than mosquito bites, and how long do they last? A bite-ID guide with a no-see-um vs mosquito vs flea vs chigger comparison, itch-relief treatment, why they slip through screens, and prevention.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('no-see-um-bites')

export default function NoSeeUmBitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A bite-identification guide to what no-see-um (biting midge) bites look like, why they itch so intensely, how they compare to mosquito, flea, and chigger bites, and how to treat and prevent them.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'No-See-Um Bites', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">No-See-Um Bites</span>
          </nav>
          <div className="text-emerald-300 text-xs font-bold uppercase tracking-wide mb-3">Biting Midges · Bite ID</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            What Do No-See-Um Bites Look Like?
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            The tiny biters you feel before you see them &mdash; what their bites look like, why they itch far more than a mosquito bite, how to tell them apart from flea and chigger bites, and how to treat and prevent them.
          </p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
          <div className="mt-4 text-brand-300 text-sm">Published July 19, 2026 · 10 min read</div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-14 prose-brand">

        <AuthorByline datePublished={DATE} dateModified={UPDATED} />

        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-base text-gray-800 leading-relaxed">
            No-see-um bites start as a sharp, burning pinprick, then swell into small red, intensely itchy welts &mdash; usually in clusters on exposed skin around the ankles, wrists, neck, and hairline. They itch more than a mosquito bite because the midge slices a small feeding pool in the skin and injects saliva your body reacts to, and the itch can linger for days.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>No-see-ums (biting midges) are only about 1&ndash;3 mm long (roughly 1/16 inch) &mdash; about one-quarter the size of a mosquito.</li>
            <li>Bites usually appear in clusters, not a single bump, and are itchiest 2&ndash;4 days in, fading over 1&ndash;2 weeks.</li>
            <li>They slip through standard screens (openings ~1.1&ndash;1.5 mm / ~1/16 inch); it takes no-see-um mesh (~0.6 mm / ~0.025 inch openings) to stop them.</li>
            <li>Both the CDC and Health Canada list DEET and picaridin (icaridin) as effective repellents against biting midges.</li>
            <li>In North America they are an itchy nuisance, not major disease carriers of human illness.</li>
            <li>See a healthcare provider for spreading redness, pus, fever, or any severe allergic reaction.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito &middot; licensed mosquito &amp; tick control professionals</p>
        </div>

        <p>No-see-ums are so small you often feel the bite long before you ever spot the insect &mdash; which is exactly how they earned the name. This page is a focused bite-identification guide: what a no-see-um bite actually looks like, why it itches so much more than its size suggests, how to tell it apart from mosquito, flea, and chigger bites, how long it lasts, and what genuinely helps. If you want the deeper guide to the insect itself &mdash; the species, breeding habits, and season &mdash; read our companion piece on <Link href="/blog/no-see-ums-biting-midges-ontario">no-see-ums and biting midges</Link>.</p>

        <p className="text-sm text-gray-600 italic border-l-4 border-gray-200 pl-4">This is general information, not medical advice. If a bite looks infected, you feel unwell, or you have a severe reaction, contact a healthcare provider. In an emergency, call 911.</p>

        <h2>What do no-see-um bites look like?</h2>
        <Figure
          src="/diagrams/bite-pattern-comparison.svg"
          alt="Diagram comparing the distribution patterns of mosquito, bed bug, flea, chigger, tick and no-see-um bites on the body"
          caption="Where bites sit and how they group identifies the insect far more reliably than how a single mark looks. No-see-um bites arrive as a dense patch on exposed skin near water at dawn or dusk."
          width={720}
          height={440}
        />
        <p>A no-see-um bite typically begins as a <strong>sharp, burning pinprick</strong> &mdash; noticeably stingier than the near-painless first moment of a mosquito bite. Within a few hours the spot usually becomes a small flat red dot that rises into an itchy welt. Because biting midges feed in groups, the bites tend to show up in <strong>clusters or scattered patches</strong> rather than as one isolated bump.</p>
        <p>Look for these common features:</p>
        <ul>
          <li><strong>Small red spots</strong>, often with a tiny darker point in the centre where the mouthparts pierced the skin.</li>
          <li><strong>A reddened halo</strong> and firm swelling around each bite as the reaction builds.</li>
          <li><strong>Clusters on exposed skin</strong> &mdash; ankles, feet, wrists, the neck, and the hairline are classic targets.</li>
          <li><strong>Sometimes small fluid-filled blisters</strong> or hard, persistent welts in people who react strongly.</li>
        </ul>
        <p>Reactions vary widely from person to person. One person might get a barely visible mark while a companion standing beside them develops a spray of intensely itchy welts &mdash; the difference is largely individual immune sensitivity to the midge&rsquo;s saliva, not how many times each person was bitten.</p>

        <h2>Why are no-see-um bites so much itchier than mosquito bites?</h2>
        <p>It comes down to <strong>how the insect feeds</strong>. A mosquito threads a needle-like proboscis into a blood vessel and sips. A no-see-um does something cruder: the female uses short, scissor-like mouthparts to <strong>cut a tiny pool in the skin</strong> and laps up the blood that wells up, injecting saliva full of proteins to keep it flowing.</p>
        <p>Your immune system reacts to those foreign salivary proteins by releasing histamine, which drives the redness, swelling, and itch. Because the feeding is messier, is often repeated in tight clusters, and deposits proteins your body treats as irritants, the histamine response can be <strong>stronger and longer-lasting</strong> than a single mosquito welt. That is why such a tiny insect can leave an itch that feels wildly out of proportion to its size, often peaking a day or two after the bite rather than immediately.</p>

        <h2>No-see-um bites vs mosquito, flea, and chigger bites</h2>
        <p>All four leave small, itchy red bumps, so the differences in <em>first sensation</em>, <em>pattern</em>, and <em>location</em> matter most. Here is a side-by-side of the bites people most often confuse:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[560px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Feature</th>
                <th className="px-3 py-2 text-left">No-see-um (biting midge)</th>
                <th className="px-3 py-2 text-left">Mosquito</th>
                <th className="px-3 py-2 text-left">Flea</th>
                <th className="px-3 py-2 text-left">Chigger</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">First sensation</td><td className="px-3 py-2">Sharp, burning pinprick</td><td className="px-3 py-2">Often unnoticed until it itches</td><td className="px-3 py-2">Sudden pinch or prickle</td><td className="px-3 py-2">Usually felt only later, as itch</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Appearance</td><td className="px-3 py-2">Small red dots &rarr; itchy welts, sometimes blisters</td><td className="px-3 py-2">Single puffy raised bump</td><td className="px-3 py-2">Small red bump with central puncture</td><td className="px-3 py-2">Red welts, often with a hard centre</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Pattern</td><td className="px-3 py-2">Clusters / patches</td><td className="px-3 py-2">One or a few, spread out</td><td className="px-3 py-2">Lines or clusters</td><td className="px-3 py-2">Clusters, often many together</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Typical location</td><td className="px-3 py-2">Ankles, wrists, neck, hairline</td><td className="px-3 py-2">Any exposed skin</td><td className="px-3 py-2">Ankles and lower legs</td><td className="px-3 py-2">Sock line, waistband, skin folds</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Itch timing</td><td className="px-3 py-2">Peaks 1&ndash;2 days later, lingers days</td><td className="px-3 py-2">Itches fast, eases in a day or two</td><td className="px-3 py-2">Itches soon, can persist</td><td className="px-3 py-2">Intense itch peaks ~1&ndash;2 days later</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Context clue</td><td className="px-3 py-2">Outdoors near water at dawn/dusk</td><td className="px-3 py-2">Whine heard; standing water nearby</td><td className="px-3 py-2">Home with pets</td><td className="px-3 py-2">Tall grass, brush, low vegetation</td></tr>
            </tbody>
          </table>
        </div>
        <p>The single most useful tell for no-see-ums is the combination of a <strong>burning first sting, tight clusters on exposed skin, and being outdoors near water at dawn or dusk</strong>. For a full breakdown of the two most-confused everyday bites, our companion guide compares <Link href="/blog/no-see-ums-biting-midges-ontario">no-see-um and mosquito bites</Link> in more detail.</p>
        <p>One biter is easy to rule out on pain alone. A horse fly or deer fly slices the skin with blade-like mouthparts instead of piercing it, so the bite lands as a single hard sting that often bleeds and raises one large welt rather than a patch of small ones &mdash; and the <Link href="/blog/horse-fly-and-deer-fly-bite-treatment">first aid and healing timeline for tabanid bites</Link> differs accordingly, because you are caring for an open cut.</p>

        <h2>How long do no-see-um bites last?</h2>
        <p>For most people, a no-see-um bite is <strong>itchiest in the first 2 to 4 days</strong> and fades over roughly <strong>1 to 2 weeks</strong>. Firmer welts, small blisters, or a stronger allergic-type reaction can take longer &mdash; sometimes 2 to 3 weeks &mdash; and scratching that breaks the skin can drag out healing or invite infection.</p>
        <p>The itch outlasting the visible mark is normal for biting midges. What is <em>not</em> part of ordinary healing is a bite that keeps expanding, grows increasingly painful, warm, and swollen over days, or begins oozing pus &mdash; those point toward a secondary skin infection rather than the bite itself, and are worth having a healthcare provider look at.</p>

        <h2>How do you treat no-see-um bites and stop the itch?</h2>
        <p>There is no way to un-inject the saliva, so treatment is about <strong>calming the histamine reaction and protecting the skin</strong> while it heals. General self-care measures for itchy insect bites include:</p>
        <ul>
          <li><strong>Wash</strong> the area with soap and water to reduce infection risk.</li>
          <li><strong>Cold compress</strong> or an ice pack (wrapped in cloth) for 10&ndash;15 minutes to ease swelling and itch.</li>
          <li><strong>Over-the-counter anti-itch products</strong> such as hydrocortisone cream, calamine lotion, or an oral antihistamine, used as directed on the label.</li>
          <li><strong>Do not scratch.</strong> Broken skin is the main path to infection and scarring; keeping nails short and covering the bite can help.</li>
        </ul>
        <p>These are general comfort measures, not a diagnosis, prescription, or dosing advice &mdash; always follow the product directions, and if you are pregnant, treating a young child, unsure which product is right, or the reaction is severe, ask a pharmacist or healthcare provider. For a fuller run-down of what actually eases bite itch, see our <Link href="/blog/mosquito-bite-treatment-relief">mosquito bite treatment and relief guide</Link>, which applies equally to midge bites.</p>

        <AffiliateDisclosure />
        <TopPick tag={AMZ_TAG}
          label="Best for the Itch"
          name="Hydrocortisone 1% Anti-Itch Cream"
          blurb="For the histamine itch a no-see-um bite leaves behind, a plain 1% hydrocortisone cream is the widely recommended over-the-counter workhorse — quick to calm redness and swelling on a clustered welt. Keep a tube in the first-aid kit and apply as directed on the label."
          search="hydrocortisone anti itch cream 1%"
          score={8.4}
          pros={['Eases itch and swelling fast', 'Inexpensive and widely stocked', 'Simple, well-understood active ingredient']}
          cons={['Comfort only — does not prevent bites', 'Follow label; ask a pharmacist if unsure']}
        />

        <h2>How do no-see-ums bite through window and porch screens?</h2>
        <p>The frustrating part of no-see-um season is that closing up the porch does not always help &mdash; the midges come straight through the screen. The reason is <strong>mesh size</strong>. Standard insect screening is woven with openings of roughly <strong>1.1 to 1.5 mm (about 1/16 inch)</strong>, sized to stop houseflies and mosquitoes. A no-see-um is only about <strong>1 to 3 mm long</strong> and slim enough to fly right through those gaps.</p>
        <p>Keeping them out takes a finer weave, sold as <strong>&ldquo;no-see-um mesh.&rdquo;</strong> Here is how the common options compare:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[560px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Screen type</th>
                <th className="px-3 py-2 text-left">Approx. mesh count</th>
                <th className="px-3 py-2 text-left">Opening size</th>
                <th className="px-3 py-2 text-left">Stops no-see-ums?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Standard fiberglass/aluminum</strong></td><td className="px-3 py-2">~18x16 threads/inch</td><td className="px-3 py-2">~1.1&ndash;1.5 mm (~1/16 in)</td><td className="px-3 py-2">No &mdash; midges pass through</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>No-see-um mesh</strong></td><td className="px-3 py-2">~20x20 threads/inch or finer</td><td className="px-3 py-2">~0.6 mm (~0.025 in / 1/40 in)</td><td className="px-3 py-2">Yes &mdash; blocks most midges</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Ultra-fine / pollen mesh</strong></td><td className="px-3 py-2">Finer still</td><td className="px-3 py-2">Well under 0.5 mm</td><td className="px-3 py-2">Yes, but airflow drops sharply</td></tr>
            </tbody>
          </table>
        </div>
        <p>The catch with fine mesh is <strong>reduced airflow</strong> &mdash; the tighter the weave, the stuffier the porch. A practical fix that works with the insect&rsquo;s own weakness: run a fan. Biting midges are feeble fliers and cannot push against moving air, so a breeze on a seating area keeps them off even where the mesh is standard.</p>
        <p className="not-prose my-4">
          <BuyLink tag={AMZ_TAG} search="no see um mesh screen">Check no-see-um mesh screen on Amazon &rarr;</BuyLink>
        </p>

        <h2>How do you prevent no-see-um bites?</h2>
        <p>Prevention layers up from your skin outward. The most effective combination:</p>
        <ul>
          <li><strong>Cover exposed skin at dawn and dusk.</strong> Long, light-coloured sleeves and pants give midges fewer targets during their peak feeding windows.</li>
          <li><strong>Use a registered repellent.</strong> Both the <strong>CDC</strong> and <strong>Health Canada</strong> list <strong>DEET</strong> and <strong>picaridin</strong> (also called icaridin) as effective against biting midges, with oil of lemon eucalyptus as a plant-based option. Apply well to ankles, wrists, and the hairline, where midges concentrate.</li>
          <li><strong>Treat clothing and gear with permethrin</strong> for a barrier fabric repellent can&rsquo;t match. Our guide to <Link href="/blog/bug-protective-clothing-canada">bug-protective clothing</Link> covers what to treat and how.</li>
          <li><strong>Run a fan</strong> on the patio &mdash; midges cannot fly against moving air, so this is one of the simplest high-impact fixes.</li>
          <li><strong>Use a fine-mesh head net</strong> when swarms are heavy near water or on the trail; it protects the face and neck where bites are most maddening.</li>
        </ul>
        <p className="not-prose my-4 flex flex-wrap gap-3">
          <BuyLink tag={AMZ_TAG} search="sea to summit ultra mesh head net">Check fine-mesh head net on Amazon &rarr;</BuyLink>
          <BuyLink tag={AMZ_TAG} search="picaridin insect repellent">Picaridin repellent &rarr;</BuyLink>
        </p>
        <p>Longer term, the population that bites you is produced in <strong>damp habitat</strong> nearby &mdash; wet soil, marsh edges, soggy leaf litter, and thick moist mulch. Improving drainage so water does not pool, clearing sodden debris, and keeping gutters draining all shrink the breeding ground. Where pressure near water is heavy and recurring, a professional barrier treatment applied to shaded resting vegetation and damp edges knocks down the adults where they rest by day; you can read how that fits into a broader yard plan in our <Link href="/blog/no-see-ums-biting-midges-ontario">biting midge control guide</Link>.</p>

        <h2>Do no-see-um bites spread, blister, or leave scars?</h2>
        <p>No-see-um bites do not &ldquo;spread&rdquo; the way an infection does &mdash; each welt marks one feeding site, and a cluster simply means the midges bit many times in one spot. What can look like spreading is your own scratching, which irritates a wider patch of skin and can turn a tidy cluster into an angry-looking area. In people who react strongly, a bite can raise a <strong>small fluid-filled blister</strong>; keep it clean and intact rather than popping it, since broken blisters are an entry point for bacteria.</p>
        <p>Scarring is usually a consequence of scratching rather than the bite itself. Repeatedly breaking the skin can leave darker marks (post-inflammatory hyperpigmentation) that fade slowly over weeks to months, and deep scratching can leave a faint scar. The practical takeaway is the same as the itch advice above: cool and treat the itch, resist scratching, and protect the skin while it heals. If a blister looks infected or a mark is not settling, have a healthcare provider take a look.</p>

        <h2>Are no-see-um bites dangerous? When to see a doctor</h2>
        <p>For most people in North America, no-see-um bites are an <strong>itchy nuisance rather than a health threat</strong>. The biting midges common across the continent are not significant carriers of human disease, unlike some tropical <em>Culicoides</em> species that can transmit parasites elsewhere in the world. Public-health agencies such as the <strong>CDC</strong> and the <strong>Public Health Agency of Canada</strong> direct the bulk of their bite-borne disease guidance at mosquitoes and ticks, not midges. The realistic risks from no-see-ums are intense itching, clustered welts, allergic-type reactions in sensitive people, and secondary infection from scratching.</p>
        <p>Use this checklist to decide when a bite warrants medical attention:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Usually fine to manage at home</th>
                <th className="px-3 py-2 text-left">See a healthcare provider</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Itchy red welts that fade over 1&ndash;2 weeks</td><td className="px-3 py-2">A bite that keeps expanding, hot, swollen, and painful over days</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Clustered bumps that ease with anti-itch care</td><td className="px-3 py-2">Pus, red streaks, or fever (possible skin infection)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Mild swelling around the bite</td><td className="px-3 py-2">Bites not improving after ~2 weeks or blistering badly</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">A few bites after time outdoors near water</td><td className="px-3 py-2">Widespread hives, facial/lip swelling, or trouble breathing &mdash; call emergency services now</td></tr>
            </tbody>
          </table>
        </div>
        <p>If any of the right-hand signs appear, get checked. Signs of a severe allergic reaction &mdash; swelling of the face or lips, widespread hives, or difficulty breathing &mdash; are a medical emergency; call 911. Again, this page describes bite appearance and general self-care only and is not a substitute for professional medical advice.</p>

        <h2>Related reading</h2>
        <ul>
          <li><Link href="/blog/no-see-ums-biting-midges-ontario">No-See-Ums &amp; Biting Midges: The Full Species &amp; Control Guide</Link></li>
          <li><Link href="/blog/mosquito-bite-treatment-relief">Mosquito Bite Treatment &amp; Relief</Link></li>
          <li><Link href="/blog/bug-protective-clothing-canada">Bug-Protective Clothing: What to Wear Against Biters</Link></li>
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

      </article>

      <StickyBuyBar
        name="Hydrocortisone 1% Anti-Itch Cream"
        search="hydrocortisone anti itch cream 1%"
        label="For the itch"
        tag={AMZ_TAG}
      />

      <CTASection heading="Stop the Bites at the Source" subtext="Get a free quote for a licensed barrier treatment targeting the damp, shaded zones where biting midges and mosquitoes breed and rest. Serving 19 GTA cities." variant="dark" />
    </>
  )
}
