import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'what-does-a-tick-bite-look-like'
const DATE = '2026-07-15'
const UPDATED = '2026-07-15'
const TITLE = 'What Does a Tick Bite Look Like? Pictures, Timeline & How to Identify One (2026)'

const FAQS = [
  {
    question: 'What does a tick bite look like?',
    answer: 'A fresh tick bite usually looks like a small, firm red bump or dot at the spot where the tick attached — often no bigger than a mosquito bite. If the tick is still feeding, you will see it embedded in the skin, sometimes swollen (engorged) with blood. After the tick drops off or is removed, most bites leave a small red mark that fades over 1–2 weeks. The key thing to watch for is an expanding red ring or bull’s-eye rash (erythema migrans) appearing 3–30 days later, which Public Health Ontario identifies as a hallmark early sign of Lyme disease.',
  },
  {
    question: 'What do tick bites look like on humans?',
    answer: 'On humans, a tick bite most often appears as a single small red bump, sometimes with a tiny dark centre where the mouthparts entered the skin. It is usually not clustered like flea bites and not as puffy or itchy as a mosquito bite. Some people develop a small itchy or reddened area around the bite from a mild reaction to tick saliva — this alone is normal. The warning sign is a red patch or ring that grows larger than 5 cm over days to weeks, which can indicate Lyme disease and should be assessed by a healthcare provider.',
  },
  {
    question: 'What does a tick bite look like on a dog?',
    answer: 'On a dog, a tick bite is often hidden under the fur and is easiest to feel as a small bump or scab when you run your hands over the skin — especially around the ears, neck, armpits, groin, and between the toes. If the tick is still attached it looks like a small grey, brown, or black skin tag that grows larger as it feeds. After removal you may see a small red bump, a scab, or mild irritation that usually heals within a week or two. Persistent redness, swelling, pus, or your dog showing lameness, fever, or fatigue warrants a call to your veterinarian.',
  },
  {
    question: 'How do I identify a tick bite?',
    answer: 'The most reliable way to identify a tick bite is finding the tick itself attached to the skin — ticks stay embedded and feed for hours to days, unlike mosquitoes which leave immediately. Look for a small dark speck or a swollen, bean-shaped body attached at the skin. After removal, a tick bite typically shows a single small red bump or dot rather than a cluster. Note the date and location of the bite. If an expanding rash, fever, or flu-like symptoms develop in the following weeks, tell your healthcare provider you had a tick bite.',
  },
  {
    question: 'What does a tick bite look like after a week?',
    answer: 'One week after a tick bite, a normal reaction is usually fading — the redness shrinks and the small bump flattens, sometimes leaving a tiny scab or a faint mark. That is expected and not a cause for concern on its own. However, one week also falls within the 3–30 day window when a Lyme disease rash (erythema migrans) can begin. If instead of fading the area is expanding into a larger red patch or a ring with a clearing centre, or you feel unwell, see a healthcare provider. Per Public Health Ontario, this rash appears in roughly 70–80% of Lyme cases, so its absence does not rule Lyme out.',
  },
  {
    question: 'What does a tick bite feel like?',
    answer: 'Most tick bites feel like nothing at all while the tick is attached. Ticks inject saliva containing mild anaesthetic and anti-clotting compounds, so the bite is usually painless and easy to miss. Some people later feel mild itching, tenderness, or a small lump at the site once the immune system reacts. This differs from a mosquito bite, which itches almost immediately, and from a horsefly or spider bite, which can be sharply painful. Because tick bites are typically painless, doing a full-body tick check after being outdoors is the most reliable way to catch them.',
  },
  {
    question: 'Can you feel a tick bite when it happens?',
    answer: 'Usually not. Because a tick numbs the area with its saliva, most people do not feel the moment of the bite or the tick attaching. This is why ticks can stay attached and feed for one to several days before being noticed. You are far more likely to feel or find a tick by touch — a small bump where there was not one before — than to feel the bite itself. Public Health Ontario recommends checking your body, children, and pets thoroughly after time in grassy, wooded, or brushy areas, since early removal greatly lowers Lyme disease risk.',
  },
  {
    question: 'What does a bull’s-eye tick bite rash look like?',
    answer: 'A bull’s-eye rash (erythema migrans) starts as a red spot at the bite site and slowly expands over days into a circular or oval red patch, often reaching 5 cm or more across. Classic cases show a red outer ring with a clearer centre, giving the target or bull’s-eye look — but many are a solid, evenly red, expanding patch without a clear centre. It is usually warm but not painful or very itchy. Per the Public Health Agency of Canada, this rash appears 3–30 days after a bite from an infected blacklegged tick. If you see an expanding rash, contact a healthcare provider promptly.',
  },
  {
    question: 'How do I tell a tick bite from a mosquito bite?',
    answer: 'The quickest tells are sensation and timing. A mosquito bite becomes an itchy, raised welt within minutes and fades in a day or two, and the mosquito is long gone. A tick bite is usually painless, may go unnoticed, and the tick often stays physically attached to the skin. Mosquito bites are frequently multiple and very itchy; a tick bite is usually a single mark. The decisive difference is what happens later: only a tick bite carries the risk of an expanding bull’s-eye rash and Lyme disease. Our tick bite vs mosquito bite guide has a full side-by-side comparison.',
  },
  {
    question: 'What does an embedded or engorged tick look like?',
    answer: 'An embedded tick that has just attached looks like a small dark or reddish-brown speck, flat and no larger than a sesame seed or poppy seed (nymphs). As it feeds over hours and days it becomes engorged — its body swells into a rounded, grey, tan, or bluish balloon shape that can be the size of a small pea or larger, with the legs and head buried against the skin. People sometimes mistake an engorged tick for a skin tag, wart, or blood blister. Do not squeeze the body. See how to remove a tick safely for the correct technique.',
  },
  {
    question: 'Is it normal for a tick bite to be red and itchy?',
    answer: 'Yes. A small area of redness and mild itching right around the bite is a normal immune reaction to tick saliva and can last a few days after the tick is removed. What is not routine is redness that keeps expanding outward over days, a ring larger than 5 cm, or a rash appearing away from the bite site — those can signal Lyme disease. Also watch for signs of local skin infection such as increasing pain, warmth, swelling, or pus. If any of these appear, or you develop fever, headache, or joint aches, see a healthcare provider.',
  },
  {
    question: 'How long does a tick bite mark last?',
    answer: 'A normal tick bite mark typically fades within 1–2 weeks, sometimes leaving a small scab or faint spot that resolves on its own. A mild local reaction can persist a little longer. If a mark is still growing, forming a ring, or the skin is increasingly red, warm, and painful beyond two weeks, that is outside the normal healing pattern and should be checked by a healthcare provider. Keep an eye on the site through the full 30-day window, since a Lyme disease rash can appear well after the original bite has healed.',
  },
  {
    question: 'What does an infected tick bite look like?',
    answer: 'A locally infected tick bite — meaning a bacterial skin infection at the site, not Lyme disease — tends to get worse rather than better after the first day or two. Watch for redness that is increasingly warm, tender, and swollen, or yellowish pus and discharge, sometimes with red streaks spreading outward. This differs from the Lyme bull’s-eye rash (erythema migrans), which expands as a flat, painless, non-oozing red patch that is usually not hot or sore. If a bite becomes progressively painful, hot, and swollen or starts to drain, see a healthcare provider, since a skin infection may need treatment.',
  },
  {
    question: 'How long does a tick bite bump last?',
    answer: 'The small firm bump from a tick bite usually flattens and fades within a few days to about two weeks. It is a routine immune reaction to tick saliva and can stay mildly itchy or tender for several days after the tick is removed, sometimes leaving a tiny scab. A bump that keeps growing or hardening, or that turns into an expanding red ring past the two-week mark, is outside the normal pattern and should be assessed. Keep watching the area through the full 30-day window, since a Lyme rash can appear after the original bump has healed.',
  },
  {
    question: 'Should I save the tick after removing it?',
    answer: 'It can help. Placing the removed tick in a sealed bag or small container (a slightly moist paper towel keeps it intact) and noting the date and body location gives a healthcare provider useful context if symptoms develop later. In Ontario, you can also submit a photo of the tick to etick.ca for species identification, which helps gauge Lyme disease risk. Saving the tick is optional and is not a substitute for monitoring the bite and your health over the following 30 days.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'What does a tick bite look like? A day-by-day appearance timeline, on-humans vs on-dogs vs embedded ticks, a tick-vs-mosquito-vs-flea-vs-spider bite comparison, and when to see a doctor. Ontario, 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function WhatDoesATickBiteLookLikePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A visual identification guide to what a tick bite looks like on humans and dogs, with a day-by-day timeline and bite comparison for Ontario.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'What Does a Tick Bite Look Like?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">What Does a Tick Bite Look Like?</span>
          </nav>
          <div className="text-amber-400 text-xs font-bold uppercase tracking-wide mb-3">Tick Control · Visual ID</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            What Does a Tick Bite Look Like?
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            A visual identification guide with a day-by-day appearance timeline, what bites look like on humans vs dogs, how to spot an embedded tick, and the exact point to see a doctor. Ontario, 2026.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-brand-300 text-sm">
            <span>Published July 15, 2026 · 9 min read</span>
            <FreshnessStamp date={UPDATED} tone="dark" />
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-14 prose-brand">

        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-base text-gray-800 leading-relaxed">
            A tick bite usually looks like a small, firm red bump or dot where the tick attached &mdash; often no bigger than a mosquito bite, but frequently with the tick still embedded in the skin. Unlike an itchy mosquito welt, it is typically painless and does not swell much. The warning sign is an expanding red ring or bull&rsquo;s-eye rash appearing 3&ndash;30 days later, a possible sign of Lyme disease.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>A fresh tick bite is usually a single small red bump or dot &mdash; not a cluster of welts like flea bites.</li>
            <li>Tick bites are typically painless because tick saliva contains a mild anaesthetic, so the tick is often the clearest clue.</li>
            <li>An unfed nymph is poppy-seed-sized (about 1&ndash;2 mm); an unfed adult is sesame-seed-sized (about 3&ndash;5 mm).</li>
            <li>Per PHAC, the Lyme (erythema migrans) rash typically appears 3 to 30 days after a bite from an infected blacklegged tick.</li>
            <li>Public Health Ontario notes the rash shows in only about 70&ndash;80% of Lyme cases, so no rash does not rule out Lyme.</li>
            <li>Watch for a red patch expanding beyond about 5 cm, or fever and aches &mdash; both are reasons to see a healthcare provider.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
        </div>

        <AuthorByline datePublished={DATE} dateModified={UPDATED} />

        <p>Both a tick bite and a mosquito bite can start as a small red mark, so telling them apart is really about three things: whether an insect is still attached, how the bite feels, and what happens over the following days and weeks. This page is a pure visual-identification guide &mdash; what a tick bite actually looks like at each stage, on people and on dogs, and where the line is between a normal reaction and something a doctor should see. If you have already found a bite and want the step-by-step of what to do next, read <Link href="/blog/tick-bite-symptoms-what-to-do-ontario">tick bite symptoms &amp; what to do in Ontario</Link>.</p>

        <p className="text-sm text-gray-600 italic border-l-4 border-gray-200 pl-4">This is general information, not medical advice. If you are worried about a bite, an expanding rash, or any symptoms after a tick bite, contact a healthcare provider. In an emergency, call 911.</p>

        <h2>What do tick bites look like on humans?</h2>
        <p>On a human, a fresh tick bite most often looks like a <strong>single small red bump or dot</strong>, sometimes with a tiny darker point in the centre where the tick&rsquo;s mouthparts entered. It is usually not clustered and not as puffy as a mosquito bite. Many people also get a small halo of redness or mild itch around the site &mdash; a normal reaction to proteins in tick saliva &mdash; which is different from the expanding rash of Lyme disease.</p>
        <p>Because the bite itself is small and painless, the tick is often the most visible clue. Common attachment spots on people are warm, hidden areas: the scalp and hairline, behind the ears, the armpits, the waistline, the backs of the knees, the groin, and the belly button. In Ontario, the species most relevant to Lyme disease is the blacklegged (deer) tick &mdash; see <Link href="/blog/types-of-ticks-identification">types of ticks and how to identify them</Link> to tell it apart from the harmless-to-Lyme American dog tick.</p>

        <h2>How to identify a tick bite</h2>
        <p>The single most reliable way to identify a tick bite is <strong>finding the tick still attached</strong>. Unlike mosquitoes, black flies, or fleas, a tick embeds its mouthparts and feeds in place for hours to several days, so it does not fly or hop away. If you see a small dark speck, a skin-tag-like lump, or a swollen bean-shaped body fixed to the skin, that is a tick.</p>
        <p>If the tick is already gone, use these visual and situational clues to identify a likely tick bite:</p>
        <ul>
          <li><strong>A single, small red bump or dot</strong> rather than a cluster of welts.</li>
          <li><strong>Little or no itch at first</strong> &mdash; tick bites are usually painless, unlike the immediate itch of a mosquito.</li>
          <li><strong>Location</strong> in a warm, hidden body area after time spent in grass, brush, leaf litter, or wooded trails.</li>
          <li><strong>A tiny scab or central point</strong> where the mouthparts were.</li>
        </ul>
        <p>Write down the <strong>date and body location</strong> of the bite. That single note is what lets you (and a doctor) judge whether any rash later falls inside the 3&ndash;30 day Lyme window.</p>

        <h2>What does an embedded or engorged tick look like?</h2>
        <p>How a tick looks depends entirely on how long it has been feeding:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Stage</th>
                <th className="px-3 py-2 text-left">What it looks like</th>
                <th className="px-3 py-2 text-left">Rough size</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Just attached (nymph)</strong></td><td className="px-3 py-2">Flat dark speck, easily mistaken for dirt or a freckle</td><td className="px-3 py-2">Poppy seed (~1&ndash;2 mm)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Just attached (adult)</strong></td><td className="px-3 py-2">Flat, oval, reddish-brown to black body with visible legs</td><td className="px-3 py-2">Sesame seed (~3&ndash;5 mm)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Partly engorged</strong></td><td className="px-3 py-2">Rounded, plumping body, greyish or tan, head buried in skin</td><td className="px-3 py-2">Small pea</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Fully engorged</strong></td><td className="px-3 py-2">Swollen grey, tan, or bluish balloon; often mistaken for a skin tag or blood blister</td><td className="px-3 py-2">Large pea or bigger</td></tr>
            </tbody>
          </table>
        </div>
        <p>A fully engorged tick is what most people picture, but the dangerous ones for Lyme transmission in Ontario are the tiny <strong>nymphs</strong>, which are active in late spring and summer and are so small they are routinely missed. Do not squeeze the swollen body &mdash; follow the technique in <Link href="/blog/how-to-remove-tick-safely">how to remove a tick safely</Link>, then save the tick in a sealed bag or photo it in case identification is needed later.</p>
        <p>If the body separates during removal and the mouthparts stay behind, do not dig at the skin &mdash; see <Link href="/blog/tick-head-stuck-in-skin">what to do if a tick&rsquo;s head is stuck in the skin</Link>. A dedicated tick-removal kit makes a clean, straight pull far easier than fumbling with wide household tweezers, and is worth keeping in a first-aid bag if you spend time in tick country.</p>
        <AffiliateDisclosure />
        <TopPick
          label="Our Top Pick for Removal"
          name="Tick Remover Kit (fine-tip + hook set)"
          blurb="For clean identification and safe removal, a dedicated tick tool beats wide household tweezers — it grips the tick right at the skin so you can pull straight up without crushing the body or leaving mouthparts behind. Worth keeping in a first-aid bag if you spend time in tick country."
          search="tick removal kit"
          score={8.6}
          pros={['Fine tip grips even poppy-seed-sized nymphs', 'Pulls straight up without squeezing the body', 'Compact — lives in a first-aid or hiking kit']}
          cons={['Not a substitute for a proper post-bite check', 'Still requires steady, slow technique']}
        />
        <p className="not-prose"><BuyLink search="tick removal kit">Check price on a tick removal kit at Amazon.ca &rarr;</BuyLink></p>

        <h2>What does a tick bite look like on a dog?</h2>
        <p>On a dog, a tick bite is usually <strong>hidden under the fur</strong>, so you are more likely to feel it than see it. Running your fingertips slowly over your dog&rsquo;s skin, you will notice a small raised bump or scab where a tick attached or has been removed. Favourite spots are the ears (inside and at the base), around the collar and neck, the armpits, the groin, between the toes, and around the eyelids.</p>
        <p>If the tick is still attached it looks like a small grey, brown, or black skin tag that grows larger and firmer as it feeds. After you remove it, the bite site on a dog commonly shows:</p>
        <ul>
          <li>A <strong>small red bump or raised welt</strong> that may persist for a few days.</li>
          <li>A <strong>scab or small crust</strong> as it heals.</li>
          <li><strong>Mild redness or irritation</strong> from the dog licking or scratching the area.</li>
        </ul>
        <p>Most heal within a week or two. Call your veterinarian if the site stays red, swells, oozes pus, or if your dog develops lameness that shifts between legs, fatigue, loss of appetite, or fever &mdash; these can be signs of a tick-borne illness such as Lyme disease or anaplasmosis in dogs. Note that this article covers appearance only; your vet is the right source for canine diagnosis and treatment.</p>

        <h2>What does a tick bite feel like? Can you feel a tick bite?</h2>
        <p>For most people, a tick bite <strong>feels like nothing at all</strong>. Ticks inject saliva containing mild anaesthetic and anti-clotting compounds, so both the bite and the tick attaching are usually painless and easy to miss &mdash; which is exactly why ticks can feed for a day or more before being found. Some people later notice mild itching, slight tenderness, or a small firm lump once the immune system reacts to the bite.</p>
        <p>So <strong>can you feel a tick bite when it happens?</strong> Usually not. You are far more likely to <em>find</em> a tick by touch &mdash; a small bump that was not there before &mdash; than to feel the bite itself. That is the practical reason Public Health Ontario recommends a full-body tick check (and checking children and pets) after time outdoors, since removing a tick early sharply reduces the chance of Lyme disease transmission.</p>

        <h2>Tick bite vs mosquito, flea, and spider bites</h2>
        <p>Because the first red bump can look similar, the differences in <em>sensation</em>, <em>pattern</em>, and <em>what happens next</em> matter most. Here is how a tick bite compares to the other common Ontario culprits:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Feature</th>
                <th className="px-3 py-2 text-left">Tick bite</th>
                <th className="px-3 py-2 text-left">Mosquito bite</th>
                <th className="px-3 py-2 text-left">Flea bite</th>
                <th className="px-3 py-2 text-left">Spider bite</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Appearance</td><td className="px-3 py-2">Single small red bump; tick may be attached</td><td className="px-3 py-2">Puffy raised welt</td><td className="px-3 py-2">Cluster of small red dots</td><td className="px-3 py-2">Bump, sometimes two puncture marks</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Number</td><td className="px-3 py-2">Usually one</td><td className="px-3 py-2">One to many</td><td className="px-3 py-2">Often many, in lines/clusters</td><td className="px-3 py-2">Usually one</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Sensation</td><td className="px-3 py-2">Painless; little itch</td><td className="px-3 py-2">Itchy within minutes</td><td className="px-3 py-2">Very itchy</td><td className="px-3 py-2">Can be painful or sting</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Typical spots</td><td className="px-3 py-2">Warm, hidden areas (scalp, groin, armpits)</td><td className="px-3 py-2">Exposed skin (arms, legs, face)</td><td className="px-3 py-2">Ankles and lower legs</td><td className="px-3 py-2">Anywhere</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Later warning sign</td><td className="px-3 py-2">Expanding ring / bull&rsquo;s-eye rash (Lyme)</td><td className="px-3 py-2">Usually none</td><td className="px-3 py-2">Usually none</td><td className="px-3 py-2">Spreading pain, ulcer (rare)</td></tr>
            </tbody>
          </table>
        </div>
        <p>For a deeper side-by-side of the two most-confused bites, see <Link href="/blog/tick-bite-vs-mosquito-bite">tick bite vs mosquito bite</Link>.</p>

        <h2>Day-by-day: what a tick bite looks like over time</h2>
        <p>The appearance of a tick bite changes over days and weeks. Most bites simply fade, but the same timeline is when a Lyme disease rash can emerge, so it is worth knowing what each stage typically looks like.</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Timeframe</th>
                <th className="px-3 py-2 text-left">Normal appearance</th>
                <th className="px-3 py-2 text-left">What would be a red flag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Day 0 (attached)</td><td className="px-3 py-2">Tick embedded; little or no reaction around it</td><td className="px-3 py-2">Tick that has been attached &gt;24&ndash;36 hours</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Day 0&ndash;2 (after removal)</td><td className="px-3 py-2">Small red bump or dot, maybe mild itch</td><td className="px-3 py-2">Redness already spreading outward &gt;5 cm</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Day 3&ndash;7</td><td className="px-3 py-2">Bump flattening, redness shrinking, possible tiny scab</td><td className="px-3 py-2">A growing red patch or ring beginning to form</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">After a week</td><td className="px-3 py-2">Mark largely faded; faint spot or scab</td><td className="px-3 py-2">Expanding bull&rsquo;s-eye rash; fever, aches, fatigue</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Day 3&ndash;30</td><td className="px-3 py-2">Site healed and normal</td><td className="px-3 py-2">New expanding rash anywhere on the body</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>What does a tick bite look like after a week?</strong> Normally, it is fading &mdash; the bump flattens and the redness shrinks, often leaving only a tiny scab or faint mark. But one week is also inside the window when the Lyme disease rash can start. If, instead of fading, the area is expanding into a larger red patch or a ring with a clearing centre, that is the signal to act.</p>

        <h2>The bull&rsquo;s-eye rash: what it actually looks like</h2>
        <p>The rash most associated with Lyme disease is <strong>erythema migrans</strong>. It begins as a red spot at the bite site and slowly grows over days into a circular or oval red patch, commonly 5 cm or larger. The classic version has a red outer ring with a clearer centre &mdash; the &ldquo;bull&rsquo;s-eye&rdquo; or target look &mdash; but in many real cases it is a <strong>solid, evenly red, expanding patch</strong> with no clear centre. It is usually warm to the touch but not especially painful or itchy, which is part of why it gets overlooked.</p>
        <p>Two important, hedged facts from Canadian public health authorities:</p>
        <ul>
          <li>Per the <strong>Public Health Agency of Canada (PHAC)</strong>, erythema migrans typically appears <strong>3 to 30 days</strong> after a bite from an infected blacklegged tick.</li>
          <li>The rash appears in only about <strong>70&ndash;80% of Lyme disease cases</strong>, according to Public Health Ontario &mdash; meaning a meaningful share of people never develop it. <strong>No rash does not rule out Lyme.</strong> Flu-like symptoms after a tick bite still deserve medical attention.</li>
        </ul>
        <p>For the fuller symptom picture beyond the rash, see our <Link href="/blog/lyme-disease-symptoms-guide">Lyme disease symptoms guide</Link>. Lyme is the best-known tick-borne illness in Ontario, but it is not the only one &mdash; certain tick bites are also linked (per the CDC) to <Link href="/blog/alpha-gal-syndrome">alpha-gal syndrome</Link>, a delayed allergy to red meat, though it remains uncommon in Canada.</p>

        <h2>Normal bite vs. when to see a doctor</h2>
        <p>Most tick bites are harmless and heal on their own. Use this visual threshold to judge which side of the line you are on:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Usually normal</th>
                <th className="px-3 py-2 text-left">See a healthcare provider</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Small red bump that fades over 1&ndash;2 weeks</td><td className="px-3 py-2">A red patch or ring that keeps expanding beyond ~5 cm</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Mild itch or tenderness at the site</td><td className="px-3 py-2">Any rash appearing 3&ndash;30 days after a bite</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Tiny scab as it heals</td><td className="px-3 py-2">Fever, chills, headache, fatigue, or joint/muscle aches</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Redness that shrinks day by day</td><td className="px-3 py-2">Increasing pain, warmth, swelling, or pus (possible skin infection)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Tick removed within a day, no symptoms</td><td className="px-3 py-2">You could not remove the whole tick, or it was attached a long time</td></tr>
            </tbody>
          </table>
        </div>
        <p>If any of the right-hand signs appear &mdash; especially an expanding rash or feeling unwell in the weeks after a bite &mdash; contact a healthcare provider and mention the tick bite and its date. Early-stage Lyme disease is treatable, and telling your provider you had a tick bite helps them decide on next steps. In an emergency, call 911. Again: this page describes appearance only and is not a substitute for medical advice.</p>

        <h2>Preventing bites in the first place</h2>
        <p>The surest way to avoid puzzling over a bite is to reduce ticks where you and your pets spend time. On the personal side: wear light-coloured clothing, tuck pants into socks on trails, use an approved repellent, and do a tick check after being outdoors. On the property side, ticks concentrate in the shaded, humid edges of a yard &mdash; the lawn-to-woods transition, tall grass, leaf litter, and garden borders. A professional <Link href="/tick-control">tick control</Link> barrier treatment targets exactly those zones; BuzzSkito&rsquo;s tick program runs $597/season, or $497 bundled with a mosquito plan. For the full yard playbook, see <Link href="/blog/best-tick-control-yard-treatment">the best tick control yard treatment guide</Link>.</p>

        <h2>Related reading</h2>
        <ul>
          <li><Link href="/blog/tick-bite-symptoms-what-to-do-ontario">Tick Bite Symptoms &amp; What to Do (Ontario)</Link></li>
          <li><Link href="/blog/types-of-ticks-identification">Types of Ticks &amp; How to Identify Them</Link></li>
          <li><Link href="/blog/how-to-remove-tick-safely">How to Remove a Tick Safely</Link></li>
          <li><Link href="/blog/lyme-disease-symptoms-guide">Lyme Disease Symptoms Guide</Link></li>
          <li><Link href="/blog/tick-bite-vs-mosquito-bite">Tick Bite vs Mosquito Bite</Link></li>
        </ul>

      </article>

      <CTASection heading="Fewer Ticks Where Your Family Plays" subtext="Get a free quote for licensed tick barrier spray targeting the yard edges where ticks wait. Serving 19 GTA cities." variant="dark" />
    </>
  )
}
