import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import BuyLink from '@/components/BuyLink'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'bed-bug-bites'
const DATE = '2026-07-19'
const UPDATED = '2026-07-19'
const TITLE = 'Bed Bug Bites: What They Look Like, How Long They Last & How to Tell for Sure (2026)'

const FAQS = [
  {
    question: 'What do bed bug bites look like?',
    answer: 'Bed bug bites typically look like small, red, raised welts arranged in a rough line or zigzag cluster of three to five — the pattern often called “breakfast, lunch, dinner.” They appear on skin left exposed during sleep, most often the face, neck, shoulders, arms, and hands. On deeper skin tones the welts often look purple, plum, or dark brown rather than red. Individual welts usually measure 0.2–2 cm (about 1/16–3/4 in), sometimes with a tiny darker point at the centre where the bug fed.',
  },
  {
    question: 'How do you tell bed bug bites from mosquito bites?',
    answer: 'The three most useful tells are pattern, timing, and context. Bed bug bites tend to appear in lines or tight clusters of 3–5 and can take from hours up to 14 days to show, per the CDC; mosquito bites are scattered singles that welt up and itch within minutes. Bed bug bites show up after sleeping indoors, in any season; mosquito bites follow time outdoors in warm weather. No bite is distinctive enough on its own — finding bugs, shed skins, or fecal spots is the only real confirmation.',
  },
  {
    question: 'How long after being bitten do bed bug bites appear?',
    answer: 'Anywhere from about an hour to as long as 14 days. The CDC notes bite marks can take up to two weeks to develop in some people, because the welt is an allergic reaction to proteins in bed bug saliva rather than an immediate injury. Most people who react see marks within 1–3 days, and the delay usually shortens with repeated exposure as the immune system becomes sensitized. This lag is why travellers often blame the wrong hotel — the bites blooming today may be from a bed slept in a week ago.',
  },
  {
    question: 'How long do bed bug bites last?',
    answer: 'Most bed bug bites fade on their own within 1–2 weeks. Stronger reactions — large hives or small blisters — can take longer, and scratching prolongs healing and risks secondary skin infection, a complication Health Canada specifically flags. On medium and deep skin tones, a bite can leave a flat darker mark (post-inflammatory hyperpigmentation) that lingers for weeks to months after the itch is gone. Bites that are still worsening after two weeks are worth showing to a healthcare provider.',
  },
  {
    question: 'Why do bed bug bites appear in a line?',
    answer: 'A single bed bug often probes and feeds at more than one spot in a sitting — it may be disturbed by the sleeper moving, or it may reattach where the skin meets a seam, sheet edge, or waistband. Each probe becomes a welt, so one bug can leave a neat row of two to five marks in one night. The row also traces the line where fabric met exposed skin, since bed bugs feed along accessible edges. That is why lines and zigzag clusters point toward bed bugs, while random scattered welts point toward mosquitoes.',
  },
  {
    question: 'Can you have bed bugs without getting bites?',
    answer: 'Yes. Studies summarized by health agencies suggest roughly 30% of people — and a higher share of older adults — show no skin reaction to bed bug bites at all. In those people the bugs are still feeding; the immune system simply is not producing visible welts. This is why an absence of bites never rules out an infestation, and why two people sharing a bed can have completely different experiences. Physical evidence — live bugs, shed skins, fecal spots, or interceptor-trap catches — is the reliable test, not skin.',
  },
  {
    question: 'Why am I getting bitten but my partner isn’t?',
    answer: 'Almost always because you react and they don’t, not because the bugs prefer you. Since around 30% of people show no reaction to bed bug bites, it is common for bugs to feed on both people while only one wakes up with welts. Sleeping position matters too — the person closer to the harbourage (usually the wall side or headboard side) may genuinely be bitten more. Either way, one reacting sleeper is enough reason to inspect the whole bed rather than assume the problem is one-sided.',
  },
  {
    question: 'Do bed bugs bite every night?',
    answer: 'No. An individual bed bug typically feeds once every 3–7 days at room temperature, then retreats to its harbourage to digest. In a small, recent infestation that can mean bites appear in waves — a cluster one morning, then nothing for several days — which lulls people into thinking the problem resolved. In a heavier infestation, enough bugs are cycling through feeds that new bites do show up nightly. Gaps between bite mornings are a clue about population size, not proof the bugs are gone.',
  },
  {
    question: 'Do bed bug bites spread disease?',
    answer: 'Bed bugs are not known to transmit disease to humans — both the CDC and Health Canada state this. That makes them very different from mosquitoes and ticks, which do spread pathogens. The real medical risks from bed bug bites are secondary: skin infection from scratching, uncomfortable allergic reactions in sensitized people, and significant sleep loss and anxiety. Serious systemic allergic reactions are rare but treated as medical emergencies, like any severe allergy.',
  },
  {
    question: 'Do bed bug bites blister?',
    answer: 'They can, in people with stronger reactions. While the typical bite is a small itchy welt, sensitized individuals sometimes develop large hives, hard raised lumps, or small fluid-filled blisters at bite sites. Blistering alone does not mean the bite is infected or that the bug was anything unusual — it reflects your immune response, not the insect. Avoid popping blisters, keep the area clean, and see a healthcare provider if blisters are widespread, painful, or show signs of infection such as spreading redness or pus.',
  },
  {
    question: 'Can bed bugs bite through clothing?',
    answer: 'No — bed bug mouthparts cannot pierce fabric. Instead, bugs walk to skin that is exposed or slip under loose clothing, which is why bites concentrate on the face, neck, arms, hands, and lower legs, and along edges where fabric meets skin, such as collars and waistbands. Snug sleepwear genuinely reduces accessible skin. Finding welts in areas that were tightly covered all night is a modest point against bed bugs and worth weighing alongside the other evidence.',
  },
  {
    question: 'What do bed bug bites look like on darker skin?',
    answer: 'On medium and deep skin tones, bed bug bites often appear purple, plum, dark brown, or grey rather than the bright red seen on lighter skin, and the surrounding flush can be subtle or invisible. The raised, firm welt and the line-or-cluster arrangement are the more reliable signs than colour. Darker skin is also more prone to post-inflammatory hyperpigmentation, so healed bites can leave flat dark marks for weeks or months. The identification logic is unchanged: pattern, timing, and physical evidence of the bugs.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'What bed bug bites look like — the breakfast-lunch-dinner line pattern, bed bug vs mosquito vs flea bite comparison tables, the up-to-14-day delay, itch relief that helps, and how to confirm it is really bed bugs.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('bed-bug-bites')

export default function BedBugBitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A visual identification guide to bed bug bites — the line and cluster pattern, comparison against mosquito and flea bites, the appearance timeline, relief options, and how to confirm an infestation.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Bed Bug Bites', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Bed Bug Bites</span>
          </nav>
          <div className="text-amber-400 text-xs font-bold uppercase tracking-wide mb-3">Pest Library &middot; Bite Identification</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Bed Bug Bites: What They Look Like &amp; How to Tell for Sure
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            The line-and-cluster pattern that gives bed bugs away, side-by-side comparisons against mosquito and flea bites, why bites can take two weeks to appear, what actually relieves the itch &mdash; and the only way to confirm what bit you.
          </p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
          <div className="mt-6 text-brand-300 text-sm">Published July 19, 2026 &middot; 11 min read</div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-14 prose-brand">

        <AuthorByline datePublished={DATE} dateModified={UPDATED} />

        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-base text-gray-800 leading-relaxed">
            Bed bug bites usually appear as small, red, itchy welts arranged in a rough line or zigzag cluster of three to five &mdash; the classic &ldquo;breakfast, lunch, dinner&rdquo; pattern &mdash; on skin left exposed during sleep, such as the face, neck, arms, and hands. Unlike mosquito bites, they can take anywhere from hours up to 14 days to show, and the bite alone can never confirm the culprit &mdash; only finding the bugs or their traces can.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Bites typically appear in lines or clusters of 3&ndash;5 welts, each about 0.2&ndash;2 cm (1/16&ndash;3/4 in) across &mdash; not scattered singles.</li>
            <li>Per the CDC, bite marks can take up to 14 days to develop in some people; most reactors see them within 1&ndash;3 days.</li>
            <li>Most bites heal within 1&ndash;2 weeks; Health Canada warns that scratching can cause secondary skin infection.</li>
            <li>Roughly 30% of people never react to bed bug bites at all, so unmarked skin does not rule out an infestation.</li>
            <li>Adult bed bugs are 4.5&ndash;5.5 mm (about 3/16 in) &mdash; apple-seed size &mdash; and feed for 3&ndash;10 minutes once every 3&ndash;7 days.</li>
            <li>Neither the CDC nor Health Canada lists bed bugs as known transmitters of human disease.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito &middot; licensed mosquito &amp; tick control professionals</p>
        </div>

        <SpecialistDisclosure pest="bed bugs" />

        <p>Waking up with a row of itchy welts triggers the same three questions for everyone: what bit me, is it bed bugs, and how do I make sure? The frustrating truth &mdash; acknowledged by dermatologists and by public health agencies on both sides of the border &mdash; is that no bite mark is distinctive enough to diagnose on its own. What you <em>can</em> do is read the pattern, the timing, and the context, then confirm or rule out bed bugs with physical evidence. This guide walks through exactly that.</p>

        <p className="text-sm text-gray-600 italic border-l-4 border-gray-200 pl-4">This is general information, not medical advice. If you are concerned about bites, an allergic reaction, or a skin infection, see a healthcare provider. In an emergency, call your local emergency number.</p>

        <h2>What do bed bug bites look like?</h2>
        <p>Bed bug bites look like <strong>small, raised, itchy welts arranged in a rough line, curve, or tight zigzag cluster</strong> &mdash; most often three to five marks, a pattern so common it earned the nickname <strong>&ldquo;breakfast, lunch, dinner.&rdquo;</strong> Each welt is typically 0.2&ndash;2 cm (about 1/16&ndash;3/4 in) across, red on lighter skin and often purple, plum, or dark brown on deeper skin tones, sometimes with a tiny darker point at the centre where the bug fed.</p>
        <p>The line pattern has a simple mechanical explanation: a single bug often probes several spots in one feeding session &mdash; it gets disturbed when the sleeper shifts, detaches, and reattaches a centimetre or two away. Bugs also feed along the edge where bedding or clothing meets exposed skin, so the row of welts frequently traces a collar line, a waistband, or the edge of a sheet.</p>
        <p>Location is the other half of the picture. Bed bugs cannot bite through fabric, so welts concentrate on <strong>skin that was uncovered during sleep</strong>: the face, neck, shoulders, arms, hands, and lower legs. Bites across areas that were snugly covered all night count as evidence <em>against</em> bed bugs. Reactions vary enormously person to person &mdash; from nothing at all to large hives or small blisters &mdash; which is why two people sharing a bed can wake up looking like they slept in different houses.</p>

        <h2>Bed bug bites vs mosquito bites: how do you tell them apart?</h2>
        <p>The fastest separators are <strong>pattern, timing, and context</strong>: bed bug bites arrive in lines or clusters after indoor sleep and can lag the actual bite by days, while mosquito bites are scattered singles that welt up within minutes of time outdoors. Here is the full comparison:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Feature</th>
                <th className="px-3 py-2 text-left">Bed bug bites</th>
                <th className="px-3 py-2 text-left">Mosquito bites</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Pattern</td><td className="px-3 py-2">Lines, curves, or clusters of 3&ndash;5 (&ldquo;breakfast, lunch, dinner&rdquo;)</td><td className="px-3 py-2">Random, scattered singles</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">When marks appear</td><td className="px-3 py-2">Hours to 14 days after the bite (per the CDC)</td><td className="px-3 py-2">Within minutes</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Where on the body</td><td className="px-3 py-2">Skin exposed during sleep: face, neck, arms, hands</td><td className="px-3 py-2">Any exposed skin, especially ankles and legs outdoors</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">When you were bitten</td><td className="px-3 py-2">Overnight, indoors, any month of the year</td><td className="px-3 py-2">Outdoors, dawn and dusk, warm season</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Sensation at the time</td><td className="px-3 py-2">Painless &mdash; saliva contains an anaesthetic</td><td className="px-3 py-2">Often felt; itchy almost immediately</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">How long they last</td><td className="px-3 py-2">1&ndash;2 weeks; dark marks can linger longer</td><td className="px-3 py-2">A few days</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Supporting evidence</td><td className="px-3 py-2">Blood smears on sheets, black fecal dots, shed skins, live bugs</td><td className="px-3 py-2">None &mdash; the insect is long gone</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Disease risk</td><td className="px-3 py-2">Not known to transmit disease (CDC, Health Canada)</td><td className="px-3 py-2">Can transmit West Nile virus and other pathogens</td></tr>
            </tbody>
          </table>
        </div>
        <p>Season and setting do a lot of work here. Across most of North America, waking up with fresh welts in January points strongly away from mosquitoes &mdash; and a cluster of new bites after a hotel stay, a used-furniture purchase, or a move points strongly toward bed bugs. Wondering about ticks instead? A tick is a different situation entirely &mdash; it stays attached to the skin and carries real disease risk &mdash; and our <Link href="/blog/tick-vs-bed-bug">tick vs bed bug guide</Link> covers that comparison in full.</p>

        <h2>Bed bug bites vs flea bites</h2>
        <p>The giveaway is <strong>altitude</strong>: flea bites cluster around the ankles and lower legs &mdash; the height a flea can jump to from the floor &mdash; while bed bug bites favour the upper body and face, wherever skin was exposed in bed. Flea bites are also smaller, with a distinctive look: a tiny red spot with a lighter halo around it, and a sharp itch that starts fast.</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Feature</th>
                <th className="px-3 py-2 text-left">Bed bug bites</th>
                <th className="px-3 py-2 text-left">Flea bites</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Typical location</td><td className="px-3 py-2">Face, neck, arms, hands &mdash; upper body</td><td className="px-3 py-2">Ankles, lower legs, waistline</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Appearance</td><td className="px-3 py-2">Raised welts, 0.2&ndash;2 cm, in lines of 3&ndash;5</td><td className="px-3 py-2">Small red dots with a pale halo, in loose groups</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Itch timing</td><td className="px-3 py-2">Delayed &mdash; hours to days</td><td className="px-3 py-2">Fast and sharp, often within minutes</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Usual context</td><td className="px-3 py-2">After sleeping; travel, used furniture, multi-unit housing</td><td className="px-3 py-2">Pets in the home, or a recently vacated home with pets before you</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Can you see the insect?</td><td className="px-3 py-2">Hides in seams and cracks; visible with targeted inspection</td><td className="px-3 py-2">Jumping specks on socks and pet fur</td></tr>
            </tbody>
          </table>
        </div>
        <p>One more lookalike worth ruling out if the bites showed up after time in grass or brush rather than after a night&rsquo;s sleep: chiggers, which leave intensely itchy welts along sock lines and waistbands. Our <Link href="/blog/chigger-bites">chigger bites guide</Link> covers that pattern.</p>

        <h2>How long do bed bug bites take to appear?</h2>
        <p>Anywhere from <strong>about an hour to 14 days</strong> after the actual bite &mdash; the CDC notes that bite marks can take up to two weeks to develop in some people. Most people who react will see marks within one to three days. The reason for the lag is that the welt is not a wound; it is an <strong>allergic reaction to proteins in bed bug saliva</strong>, and immune reactions take time to build.</p>
        <p>Two practical consequences follow. First, the delay usually <em>shrinks</em> with repeated exposure: someone bitten for weeks becomes sensitized and starts reacting within hours, which can make an infestation feel like it suddenly &ldquo;got worse&rdquo; when the population never changed. Second, the lag scrambles travel detective work &mdash; welts appearing today can be from a bed you slept in up to two weeks ago, so the hotel you are in now is not automatically the guilty one.</p>

        <h2>How long do bed bug bites last?</h2>
        <p>Most bed bug bites <strong>heal on their own within 1&ndash;2 weeks</strong>. Stronger reactions &mdash; large hives, hard lumps, or small blisters &mdash; can take longer to settle, and scratching extends healing time and opens the door to secondary skin infection, a risk Health Canada specifically highlights. On medium and deep skin tones, healed bites frequently leave flat darker marks (post-inflammatory hyperpigmentation) that can persist for weeks or months after the itch has gone; those marks are cosmetic and fade gradually.</p>
        <p>A bite that keeps getting <em>worse</em> after the first several days &mdash; expanding redness, growing pain, warmth, or pus &mdash; is outside the normal pattern and belongs in the &ldquo;see a doctor&rdquo; column below.</p>

        <h2>Do bed bug bites itch?</h2>
        <p>Usually yes &mdash; often intensely, and typically <strong>more than a mosquito bite and for longer</strong>. The itch tends to peak in the morning and evening and can be maddening enough to disrupt sleep on its own. But there is a critical exception: an estimated <strong>30% of people show no reaction at all</strong>, and the share is higher among older adults. In those people the bugs feed unnoticed indefinitely.</p>
        <p>The bite itself is painless while it happens. Bed bug saliva contains an anaesthetic and an anticoagulant, so the insect feeds for 3&ndash;10 minutes and leaves without waking the sleeper. Nobody feels the bite in the moment &mdash; the itch is always after the fact, which is exactly why the &ldquo;wait for bites&rdquo; strategy is such a poor detection method.</p>

        <h2>How do you treat bed bug bites?</h2>
        <p>For typical bites, care is simple and aimed at the itch: <strong>wash the area with soap and water</strong>, apply a cool compress, and resist scratching. A low-strength over-the-counter hydrocortisone cream or an oral antihistamine can help relieve itching for many people &mdash; follow the product label, and ask a pharmacist or healthcare provider what is appropriate for you, especially for children, during pregnancy, or on facial skin. Keeping fingernails short reduces the damage if you scratch in your sleep.</p>
        <AffiliateDisclosure />
        <TopPick tag={AMZ_TAG}
          label="Best for Itch Relief"
          name="1% Hydrocortisone Anti-Itch Cream"
          blurb="A low-strength over-the-counter hydrocortisone cream is the standard first line for the itch and inflammation of bed bug bites. Widely available, inexpensive, and gentle enough for most adults — follow the label, and ask a pharmacist about use on children, during pregnancy, or on facial skin."
          search="hydrocortisone anti itch cream"
          score={8.4}
          pros={['Calms itch and inflammation fast', 'Inexpensive and easy to find', 'Reduces the urge to scratch, lowering infection risk']}
          cons={['Treats the symptom, not the infestation', 'Not for long-term or facial use without guidance']}
        />
        <div className="not-prose my-4 flex flex-wrap gap-3">
          <BuyLink tag={AMZ_TAG} search="hydrocortisone anti itch cream">Anti-itch cream options &rarr;</BuyLink>
        </div>
        <p>What treatment cannot do is end the problem. As long as the bugs remain, new bites replace healing ones every few days &mdash; so identification and elimination, not creams, are the actual fix. And a caution on the flip side: do not fog or spray your bedroom based on bites alone. Bite marks cannot confirm the species, and <Link href="/blog/do-bed-bug-sprays-actually-work">consumer bed bug sprays have real limits</Link> even when bed bugs are confirmed. Confirm first, then act.</p>

        <h2>Does one bed bug bite mean an infestation?</h2>
        <p>Not necessarily &mdash; but it always means <strong>inspect now</strong>. A single welt can be a lone hitchhiker that came home in a bag or on a coat, an introduced bug that has not established, or not a bed bug at all. Remember that no one, dermatologists included, can identify a bed bug bite from the mark alone.</p>
        <p>The reason to take even one suspicious bite seriously is arithmetic. A mated female lays eggs daily and several hundred over her lifetime, and each bug feeds every 3&ndash;7 days &mdash; so a &ldquo;small&rdquo; problem compounds quietly in the weeks you spend waiting to be sure. The correct response to one bite is not panic and not a spray can: it is a focused inspection of the bed, done that week.</p>

        <h2>How do you confirm it&rsquo;s actually bed bugs?</h2>
        <p>Only physical evidence confirms bed bugs. You are looking for any of five things, all concentrated within about 2 m (6 ft) of where people sleep:</p>
        <ul>
          <li><strong>Live bugs</strong> &mdash; flat, oval, rusty-brown, 4.5&ndash;5.5 mm (about 3/16 in) as adults; nymphs from 1.3 mm (1/20 in) and translucent to tan.</li>
          <li><strong>Black fecal spots</strong> &mdash; pen-dot-sized digested-blood marks that smear grey-brown when dabbed with a damp cloth.</li>
          <li><strong>Rusty blood smears</strong> on sheets or the mattress seam, left when a fed bug is crushed.</li>
          <li><strong>Shed skins</strong> &mdash; pale, translucent moulted shells in seams and joints.</li>
          <li><strong>Eggs</strong> &mdash; white, about 1 mm (1/25 in), glued into cracks and fabric seams.</li>
        </ul>
        <p>Run the check methodically: strip the bedding, then work the mattress seams and piping, the box spring underside, the frame joints, and the headboard with a flashlight and an old card. Our step-by-step guide on <Link href="/blog/how-to-check-for-bed-bugs-canada">how to check for bed bugs</Link> covers the full room-by-room technique.</p>
        <p>If the visual inspection comes up empty but bites keep appearing, escalate to <strong>interceptor cups</strong> &mdash; passive pitfall traps that sit under each bed leg and catch bugs travelling to or from the bed. They are pesticide-free, cost less than a can of spray, and in university field trials have confirmed infestations that trained visual inspections missed. Run them for 14 consecutive nights &mdash; bed bugs feed only every 3&ndash;7 days, so shorter tests miss light infestations. Our <Link href="/blog/bed-bug-interceptor-traps-canada">interceptor trap guide</Link> explains the full protocol and how to read what you catch.</p>
        <div className="not-prose my-4 flex flex-wrap gap-3">
          <BuyLink tag={AMZ_TAG} search="bed bug interceptor traps">Interceptor trap sets &rarr;</BuyLink>
        </div>

        <h2>When should you see a doctor about bed bug bites?</h2>
        <p>Most bites need no medical care. See a healthcare provider promptly if any of the following apply:</p>
        <ul>
          <li><strong>Signs of skin infection</strong> &mdash; redness that keeps expanding, increasing pain, warmth, swelling, pus, or fever after scratching.</li>
          <li><strong>A strong allergic reaction</strong> &mdash; widespread hives, significant swelling, or blistering across many bite sites.</li>
          <li><strong>Any trouble breathing, throat tightness, or dizziness</strong> after bites &mdash; treat as an emergency and seek immediate care.</li>
          <li><strong>Bites that are not improving after two weeks</strong>, or marks that keep worsening rather than fading.</li>
          <li><strong>Serious sleep loss or anxiety</strong> &mdash; both are recognized, legitimate health impacts of an infestation, not something to tough out.</li>
        </ul>
        <p>The reassuring baseline, worth repeating: neither the CDC nor Health Canada considers bed bugs known transmitters of human disease. The bites are miserable, but the medical risk profile is fundamentally different from mosquitoes and ticks.</p>

        <h2>Frequently asked questions</h2>
        <div className="not-prose space-y-4 my-6">
          {FAQS.map(({ question, answer }) => (
            <div key={question} className="rounded-xl border border-navy-100 bg-brand-50/40 p-5">
              <h3 className="font-bold text-brand-900 mb-2">{question}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>

        <h2>Related reading</h2>
        <ul>
          <li><Link href="/blog/how-to-check-for-bed-bugs-canada">How to Check for Bed Bugs &mdash; Room-by-Room Inspection</Link></li>
          <li><Link href="/blog/bed-bug-interceptor-traps-canada">Bed Bug Interceptor Traps &mdash; Detect Before You Spray</Link></li>
          <li><Link href="/blog/do-bed-bug-sprays-actually-work">Do Bed Bug Sprays Actually Work?</Link></li>
          <li><Link href="/blog/tick-vs-bed-bug">Tick vs Bed Bug: How to Tell Them Apart</Link></li>
          <li><Link href="/blog/chigger-bites">Chigger Bites: Identification &amp; Relief</Link></li>
        </ul>

        <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 p-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            Confirmed bed bugs and weighing your next step? Start with our independent <Link href="/pest-product-guides/bed-bug-control" className="font-bold text-emerald-700 hover:text-emerald-800 underline">bed bug control product guide</Link>, and if the evidence points to an established infestation, our <Link href="/pest-control-cost-canada" className="font-bold text-emerald-700 hover:text-emerald-800 underline">professional pest control cost guide</Link> breaks down what licensed treatment actually costs. For all of our independent research, browse the full <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">pest product guides library &rarr;</Link>
          </p>
        </div>

      </article>
    </>
  )
}
