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
  {
    question: 'How do you tell no-see-um bites from bed bug bites?',
    answer: 'Where and when you were bitten separates them fastest. No-see-um bites happen outdoors near water at dawn or dusk, sting sharply at the moment they happen, and land in random clusters on exposed skin. Bed bug bites happen indoors while you sleep, are not felt at the time, often run in rough lines across skin the bedding left exposed, and itch only hours later. The most decisive tell is the bedding itself: bed bugs leave small dark red or black spots and shed skins along mattress seams and box-spring edges, while no-see-ums leave nothing indoors because they do not live there. The fixes are opposite too, so it matters: midges respond to repellent, fine mesh, and outdoor work, while bed bugs need professional treatment of the home.',
  },
  {
    question: 'Why do I keep getting no-see-um bites?',
    answer: 'Usually one of four reasons. Your screening is ordinary mesh, which the University of Florida IFAS states plainly does not exclude biting midges. The swarm is breeding off your property and flying in, since UF/IFAS puts typical dispersal at about 2 km or 1.2 miles from the larval site, with some species recorded to 4 to 6 km. You are outdoors during the dawn and dusk feeding window near damp ground. Or you are simply more attractive to them than the people beside you, because biting flies locate hosts by carbon dioxide, body heat, and skin odour. Because the source can sit well off your lot, treating only your own yard often underdelivers, and layering fine mesh, a fan, and repellent with a barrier treatment works better.',
  },
  {
    question: 'How to get rid of noseeum bites fast?',
    answer: 'Speed comes from blunting the histamine reaction early, since the saliva is already injected. Get out of the swarm, wash the area with soap and cool water, apply a cold compress for 10 to 15 minutes, then use an over-the-counter anti-itch product such as hydrocortisone 1% cream or calamine lotion as directed on the label. Mayo Clinic also lists an oral antihistamine as an option for itchy bites, with cetirizine, loratadine, and diphenhydramine among the common over-the-counter examples. Do not scratch and do not pop blisters, because broken skin heals more slowly and is the main path to infection. This is general information, not medical advice or dosing guidance.',
  },
  {
    question: 'Where are no-see-ums worst in the United States?',
    answer: 'Coastal salt marsh and mangrove areas carry the heaviest pressure, which is why Florida, the Gulf Coast, and the coastal Carolinas are the worst. The University of Florida IFAS counts roughly 170 Culicoides species in the United States and about 50 in Florida alone. Culicoides furens is the classic beach and dock biter on the Atlantic and Gulf coasts, C. sonorensis and C. variipennis breed at muddy pond and stock-tank margins across much of the country, and C. mohave is the desert species in California and the Southwest. Season varies by region: essentially year-round on the Gulf Coast with spring and fall peaks, roughly March to October inland in the southeast, and a compressed May to September in the northern tier and the Great Lakes.',
  },
  {
    question: 'Can no-see-ums give you Oropouche virus?',
    answer: 'Oropouche virus is spread mainly by the biting midge Culicoides paraensis and by some mosquitoes, and a large outbreak moved through South and Central America and the Caribbean in 2024 and 2025. According to the CDC, cases identified in the United States have been travel-associated, found in travellers returning from affected areas such as Cuba and Brazil, and no established local transmission has been identified in the continental United States. In practical terms, a no-see-um bite on a patio in Canada or the continental US is not an Oropouche exposure. If you develop fever, headache, or muscle and joint pain within about one to ten days of returning from an affected area, contact a healthcare provider and mention your travel.',
  },
  {
    question: 'Are sand fleas and no-see-ums the same thing?',
    answer: 'No. Sand flea is a nickname that usually refers to something else entirely. On North American beaches it most often means a sand hopper, a small crustacean that scavenges in the wrack line and does not bite people, and in some tropical regions it means the chigoe flea, a separate burrowing parasite. Sand fly is closer: coastal readers commonly use it for no-see-ums, and in that everyday sense it is the same insect, although entomologically sand fly also names the phlebotomine flies in a different family. Punkie, punky, five-o-clock fly, and moose fly are genuine regional nicknames for biting midges. The correct name is biting midge, family Ceratopogonidae, most often the genus Culicoides.',
  },
  {
    question: 'How do you get rid of no-see-ums inside the house?',
    answer: 'Indoors, no-see-ums are visitors rather than residents. Their larvae need constantly wet organic material such as marsh mud, saturated soil, soggy leaf litter, or water-filled tree holes, so they cannot breed in a dry house and there is no indoor infestation to eradicate the way there is with bed bugs or fleas. Repair torn screens and upgrade to no-see-um mesh, seal gaps around screen frames, fit door sweeps, run a ceiling or box fan because midges cannot fly in moving air, and move porch lighting away from doors at dusk. If you are seeing many tiny flies indoors but nobody is being bitten, they are more likely fungus gnats from overwatered houseplants or drain flies from a slow trap, and neither of those bites.',
  },
  {
    question: 'Do you need an EPA-registered repellent for no-see-ums?',
    answer: 'In the United States, yes, that is the standard to look for. Skin repellents are registered by the Environmental Protection Agency, the CDC advises using an EPA-registered repellent, and the registered actives include DEET, picaridin, IR3535, oil of lemon eucalyptus and PMD, and 2-undecanone. The EPA publishes a public repellent search tool for checking a product by active ingredient and protection time, and any legally sold US skin repellent carries an EPA registration number on the label. In Canada the equivalent authority is Health Canada through the Pest Management Regulatory Agency, which registers DEET and icaridin products; those carry a PCP number, and Health Canada publishes concentration limits by age group. Permethrin is a separate case in both countries: it treats clothing and gear, never skin.',
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

        <h2>What does a bite from a noseeum look like? Exact size, and the sand fly mix-up</h2>
        <p>A single noseeum bite is small &mdash; a red dot roughly <strong>1/8 inch (about 3 mm) across</strong> that rises into a firm welt. The giveaway is the grouping: because midges feed in swarms, a dozen bites landing within minutes merge into a <strong>red, blotchy patch one to two inches wide</strong> on exposed skin.</p>
        <p>That patch is what people photograph and mistake for a rash or an allergic breakout. Look closely and it resolves into many separate pinpoint bites rather than one continuous inflamed area &mdash; a useful check, because a true rash spreads as a sheet while a midge patch stays as countable dots with normal skin between them.</p>
        <p>You will also see the insect&rsquo;s name spelled several ways. <strong>No-see-um</strong>, <strong>noseeum</strong>, and <strong>no see um</strong> all describe the same animal: a biting midge in the family <em>Ceratopogonidae</em>, most often the genus <em>Culicoides</em>.</p>

        <h3>Sand fly, sand flea, punkie &mdash; which of these actually mean &ldquo;no-see-um&rdquo;?</h3>
        <p>Regional nicknames cause real confusion, and two of them point at completely different animals:</p>
        <ul>
          <li><strong>Punkie, punky, five-o&rsquo;clock fly, moose fly</strong> &mdash; genuine regional nicknames for biting midges. If someone in New England, the Maritimes, or northern Ontario says punkies, they mean no-see-ums.</li>
          <li><strong>Sand fly</strong> &mdash; used loosely along US and Canadian coasts to mean no-see-ums, and in that everyday sense it is the same insect. Entomologically, though, &ldquo;sand fly&rdquo; also names the phlebotomine flies (<em>Phlebotomus</em> and <em>Lutzomyia</em>, family Psychodidae), a separate group found mainly in warmer parts of the world. The thing biting you at dusk on a Florida or Carolina beach is a biting midge, not a phlebotomine sand fly.</li>
          <li><strong>Sand flea</strong> &mdash; not a midge at all, and worth correcting because it sends people looking for the wrong fix. On North American beaches, &ldquo;sand flea&rdquo; usually means a sand hopper, a small crustacean that scavenges in wrack lines and does not bite people; in some tropical regions the same phrase means the chigoe flea, an entirely separate burrowing parasite. If something invisible stung you near water at dusk and left a patch of itchy dots, a biting midge is far and away the likeliest culprit.</li>
          <li><strong>Biting midge</strong> &mdash; the correct name, and the one to use if you are searching an agency or university extension page, because that is how public-health and entomology sources index them.</li>
        </ul>

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

        <h2>No-see-um bites vs bed bug bites</h2>
        <p>The fastest split is <strong>where and when you were bitten</strong>. No-see-um bites happen outdoors, near water, at dawn or dusk, and land as random clusters that sting at the moment they happen. Bed bug bites happen indoors while you sleep, often in rough lines across skin the bedding left exposed, and usually itch only hours later.</p>
        <p>This is the comparison people most want and worry about most, because the answers are opposite: one is solved with repellent and mesh, the other needs professional treatment of the home. Here is the side-by-side:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[560px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Clue</th>
                <th className="px-3 py-2 text-left">No-see-um (biting midge)</th>
                <th className="px-3 py-2 text-left">Bed bug</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Where you were</td><td className="px-3 py-2">Outdoors &mdash; patio, dock, beach, marsh edge, campsite</td><td className="px-3 py-2">Indoors, in bed or on upholstered furniture</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">When</td><td className="px-3 py-2">Dawn and dusk, while you were outside</td><td className="px-3 py-2">Overnight, while you were asleep</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Pattern</td><td className="px-3 py-2">Random clusters and blotchy patches</td><td className="px-3 py-2">Often rough lines or zigzags of two or three</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">First sensation</td><td className="px-3 py-2">Sharp burning sting, felt at the time</td><td className="px-3 py-2">Nothing felt; itch appears hours to days later</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Skin under clothing</td><td className="px-3 py-2">Usually spared &mdash; midges target exposed skin</td><td className="px-3 py-2">Often bitten &mdash; they reach under loose sleepwear and bedding</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Evidence in the room</td><td className="px-3 py-2">None &mdash; nothing lives in the bed</td><td className="px-3 py-2">Small dark red or black spotting on sheets, mattress seams, and box-spring edges</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">How bites accumulate</td><td className="px-3 py-2">Many at once in a single outing, then none</td><td className="px-3 py-2">A few at a time, building over weeks as the bugs feed every few days</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">What actually fixes it</td><td className="px-3 py-2">Repellent, fine mesh, a fan, and habitat work outdoors</td><td className="px-3 py-2">Professional bed bug treatment of the home &mdash; repellent does nothing</td></tr>
            </tbody>
          </table>
        </div>
        <p>The most decisive single tell is the <strong>bedding</strong>. Bed bugs live where you sleep and leave behind small dark stains, shed skins, and eggs along mattress seams and the box-spring edge; no-see-ums leave nothing indoors, because they do not live there. The second-best tell is the <strong>timing of the itch</strong>: a midge bite announces itself as a sting while you are outside, while bed bug bites are typically discovered in the morning with no memory of being bitten.</p>
        <p>A practical rule: if you are waking up with fresh bites on mornings after evenings you spent entirely indoors, stop treating it as an outdoor problem and get the bedroom inspected. If the bites only ever appear after time on the patio, the deck, or the shoreline, you are dealing with biting midges and the fix is outdoors.</p>

        <h2>How long do no-see-um bites last?</h2>
        <p>For most people, a no-see-um bite is <strong>itchiest in the first 2 to 4 days</strong> and fades over roughly <strong>1 to 2 weeks</strong>. Firmer welts, small blisters, or a stronger allergic-type reaction can take longer &mdash; sometimes 2 to 3 weeks &mdash; and scratching that breaks the skin can drag out healing or invite infection.</p>
        <p>The itch outlasting the visible mark is normal for biting midges. What is <em>not</em> part of ordinary healing is a bite that keeps expanding, grows increasingly painful, warm, and swollen over days, or begins oozing pus &mdash; those point toward a secondary skin infection rather than the bite itself, and are worth having a healthcare provider look at.</p>

        <h2>How long does a noseeum bite last? A day-by-day timeline</h2>
        <p>Most noseeum bites run their course in <strong>one to two weeks</strong>, with the worst of the itching falling between days two and four. Firm welts, blisters, or a stronger allergic-type reaction can stretch to two or three weeks. Scratching effectively restarts the clock, because broken skin heals more slowly and can become infected.</p>
        <p>Here is the usual progression, so you can see where a bite of yours sits:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[520px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Timeframe</th>
                <th className="px-3 py-2 text-left">What you notice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">The bite itself</td><td className="px-3 py-2">A sharp burning sting; sometimes a pinpoint of blood where the mouthparts cut</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">First few hours</td><td className="px-3 py-2">Flat red dots appear and begin to swell into raised welts</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Day 1&ndash;2</td><td className="px-3 py-2">Welts firm up and the itch climbs; tight clusters merge into a blotchy patch</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Day 2&ndash;4</td><td className="px-3 py-2">Peak itch. People who react strongly may develop small fluid-filled blisters</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Day 4&ndash;7</td><td className="px-3 py-2">Swelling settles; the itch fades but usually outlasts the visible mark</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Week 1&ndash;2</td><td className="px-3 py-2">Marks fade. Darker patches left by scratching can linger for weeks to months</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Past 2 weeks</td><td className="px-3 py-2">Not the normal course &mdash; a bite still expanding, hot, painful, or oozing should be seen</td></tr>
            </tbody>
          </table>
        </div>
        <p>The last row is the one to act on. <strong>Mayo Clinic</strong> lists spreading redness, warmth, swelling, pus, and fever as signs that an insect bite has become infected rather than simply irritated, and those warrant a healthcare provider rather than more anti-itch cream.</p>

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

        <h2>How to get rid of noseeum bites fast?</h2>
        <p>There is no way to un-inject the saliva already in your skin, so speed comes from blunting the histamine reaction early. Wash the area, get a cold compress on it within the first few minutes, then apply an over-the-counter hydrocortisone or calamine product as directed on the label. <strong>Mayo Clinic</strong> also lists an oral antihistamine for stubborn itching.</p>
        <p>In practical order, from the moment you realise you have been bitten:</p>
        <ol>
          <li><strong>Get out of the swarm first.</strong> Midges feed in groups and keep feeding &mdash; stepping indoors, into a breeze, or in front of a running fan stops you collecting another twenty bites while you deal with the first twenty.</li>
          <li><strong>Wash with soap and cool water.</strong> This removes saliva and surface bacteria, and it is the step Mayo Clinic puts first for any insect bite.</li>
          <li><strong>Cold compress for 10 to 15 minutes.</strong> An ice pack or cold cloth, wrapped rather than applied directly, is the fastest thing that genuinely reduces swelling and dulls the itch.</li>
          <li><strong>Apply an over-the-counter anti-itch product.</strong> Hydrocortisone 1% cream or calamine lotion, used as directed on the label, are the standard drugstore options in both the United States and Canada.</li>
          <li><strong>Consider an oral antihistamine if the itch is widespread or keeping you awake.</strong> Mayo Clinic names oral antihistamines as an option for itchy bites; common over-the-counter examples include cetirizine, loratadine, and diphenhydramine. Follow the package directions and ask a pharmacist, especially for children or if you take other medicines.</li>
        </ol>
        <p>Two things speed recovery more than any product: <strong>not scratching</strong>, and <strong>not popping blisters</strong>. Both break the skin, which is the main route to a secondary infection and the main cause of the darker marks people mistake for scarring. Keeping nails short and covering a bad cluster with a loose dressing overnight is more effective than it sounds.</p>
        <p>What about the home remedies you will find everywhere &mdash; aloe vera gel, a colloidal oatmeal bath, witch hazel, a baking-soda paste? They are comfort measures rather than treatments with public-health backing, and the conservative view is that they are fine to try on intact skin. Keep undiluted essential oils and vinegar off broken or scratched skin, where they can irritate rather than soothe. The agency-backed short list stays the same: wash, cool, over-the-counter anti-itch, an oral antihistamine if needed, and leave the bites alone.</p>
        <p className="text-sm text-gray-600 italic border-l-4 border-gray-200 pl-4">Again, this is general information rather than medical advice, and none of the above is dosing guidance. Follow the label, and speak to a pharmacist or healthcare provider if you are pregnant, treating a young child, or unsure.</p>

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
        <p>On a porch, though, the finer weave is rarely a single-panel swap &mdash; you are rescreening a whole enclosure, and on that job the mesh grade matters more than the hardware you hang it from, so it is the decision to settle first. Our guide to <Link href="/blog/mosquito-screened-porch-kit-canada">screening an existing porch or deck</Link> compares the curtain-and-track, zip-track, and roll-mesh-under-batten routes and covers where the airflow penalty of no-see-um mesh is worth paying &mdash; essentially any lot backing onto a creek, ravine, stormwater pond, or marsh.</p>

        <h2>No-see-ums in the house: getting them out and keeping them out</h2>
        <p>Indoors, no-see-ums are almost always <strong>visitors, not residents</strong>. They drift in through standard screening or an open door at dusk and cannot breed in a dry house, because their larvae need constantly wet organic material. Block the entry points, run a fan, and move the lights they gather around, and an indoor problem usually ends within days.</p>
        <p>That single fact is the most reassuring thing on this page for anyone who has just found a patch of bites and started worrying about an infestation. Biting midge larvae develop in <strong>wet soil, marsh and pond margins, saturated leaf litter, mucky shorelines, and water-filled tree holes</strong> &mdash; not in carpet, not in mattresses, not in bedding. There is no such thing as a house colonised by no-see-ums the way a house is colonised by bed bugs or fleas.</p>
        <p>What actually works indoors:</p>
        <ul>
          <li><strong>Repair the screens and upgrade the mesh</strong> where you sit and sleep. This is the single highest-impact fix, because ordinary screening does not exclude them &mdash; see the mesh table above.</li>
          <li><strong>Seal the gaps around the screen frame</strong> and fit door sweeps. A torn corner or a 5 mm gap under a patio door lets in more midges than the mesh itself does.</li>
          <li><strong>Run a ceiling fan or box fan</strong> in the room. Biting midges are weak fliers and cannot hold position in moving air, so a fan clears a room and keeps it clear.</li>
          <li><strong>Move or switch off the lights near doors at dusk.</strong> Porch lights and lit doorways concentrate midges exactly where they can get in; a warm-toned bulb set away from the door helps.</li>
          <li><strong>Close up during the feeding window</strong> &mdash; the hour either side of sunrise and sunset &mdash; and air the house out at midday instead.</li>
        </ul>
        <p className="not-prose my-4">
          <BuyLink tag={AMZ_TAG} search="window screen repair kit">Check window screen repair kits on Amazon &rarr;</BuyLink>
        </p>
        <p>Doors are the other half of that job and the half most people leave open. A magnetic screen curtain closes the back or patio door you keep walking through, but the standard fibreglass mesh most of them ship with passes midges exactly the way an ordinary window screen does &mdash; you have to choose the no-see-um weave on purpose. Our guide to <Link href="/blog/best-magnetic-screen-door-canada">magnetic screen doors</Link> covers that mesh decision alongside the two things that actually decide whether a curtain seals &mdash; measuring the frame opening rather than the door slab, and mounting the top hem so it cannot peel away from the trim.</p>
        <p>One useful piece of triage: if you are seeing plenty of tiny flies indoors but nobody is being bitten, they are probably not no-see-ums at all. Fungus gnats breeding in overwatered houseplants and drain flies breeding in a slow sink trap both look like specks in the air, and neither bites people. Biting midges bite &mdash; that is how you know.</p>

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

        <h2>Why do I keep getting no-see-um bites?</h2>
        <p>Usually one of four reasons: your screening is ordinary mesh and does not stop them; the swarm is breeding somewhere off your property and flying in; you are outside during the dawn and dusk feeding window near damp ground; or you are simply more attractive to them than the people beside you. Yard work alone rarely fixes all four.</p>
        <ol>
          <li><strong>They are coming straight through your screens.</strong> The <strong>University of Florida IFAS</strong> Featured Creatures guide to <em>Culicoides</em> states plainly that regular window screening does not exclude biting midges. If you have been closing up the porch and still getting bitten on it, this is almost certainly why.</li>
          <li><strong>The source is not on your property.</strong> UF/IFAS puts typical adult dispersal at roughly <strong>2 km (about 1.2 miles)</strong> from the larval site, with <em>C. variipennis</em> recorded to about 4 km (2.5 miles) and <em>C. mohave</em> to about 6 km (3.7 miles). A marsh, stormwater pond, irrigation ditch, or a neighbour&rsquo;s permanently saturated low corner more than a mile away can be producing the midges biting you &mdash; which is why improving drainage in your own yard helps, but does not finish the job on its own.</li>
          <li><strong>You are outdoors in the feeding window.</strong> Most species bite at dusk, through the night, and around dawn. UF/IFAS notes that cool weather and coastal conditions push some species into daytime biting, and that <em>C. tissoti</em> bites aggressively by day &mdash; so &ldquo;it is the middle of the afternoon, it cannot be no-see-ums&rdquo; is not a safe assumption everywhere.</li>
          <li><strong>Some people simply get bitten more.</strong> Biting flies find hosts by carbon dioxide, body heat, and skin odour, and those differ between individuals, so two people on the same patio genuinely do not collect the same number of bites. This is a separate thing from the reaction differences described earlier: you can be bitten more and react less, or bitten less and react far worse.</li>
        </ol>
        <p>Put together, that is why a single one-off spray rarely ends recurring pressure by itself. What works is layering: a barrier treatment on the shaded, damp vegetation where adults rest by day on your own property, fine mesh where you actually sit, a fan on the seating area, and repellent during the feeding window. Each layer removes a different part of the problem, and the off-property source is handled by the last three rather than the first.</p>

        <h2>Where no-see-ums bite in the United States &mdash; species, range, and season</h2>
        <p><strong>In the United States</strong> there are roughly <strong>170 <em>Culicoides</em> species</strong>, about 50 in Florida alone, according to the <strong>University of Florida IFAS</strong> Featured Creatures guide, out of around 1,350 worldwide. Which one is biting you depends almost entirely on the wet habitat nearest you: salt marsh, pond edge, wet pasture, tree hole, or desert wash.</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[600px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Species</th>
                <th className="px-3 py-2 text-left">Where the larvae develop</th>
                <th className="px-3 py-2 text-left">Where you meet it in the US</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><em>Culicoides furens</em></td><td className="px-3 py-2">Coastal salt marsh and mangrove mud</td><td className="px-3 py-2">Atlantic and Gulf coasts &mdash; the classic beach, dock, and marina biter</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><em>C. barbosai</em>, <em>C. mississippiensis</em>, <em>C. hollensis</em>, <em>C. jamaicensis</em></td><td className="px-3 py-2">Salt marsh and mangrove</td><td className="px-3 py-2">Florida, the Gulf Coast, and the southeast Atlantic coast</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><em>C. insignis</em></td><td className="px-3 py-2">Wet pasture and livestock ponds</td><td className="px-3 py-2">Florida and the southeast; a bluetongue vector in cattle</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><em>C. debilipalpis</em>, <em>C. guttipennis</em>, <em>C. paraensis</em></td><td className="px-3 py-2">Water-filled tree holes</td><td className="px-3 py-2">Eastern hardwood forest and wooded suburbs</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><em>C. sonorensis</em>, <em>C. variipennis</em></td><td className="px-3 py-2">Muddy pond, puddle, and stock-tank margins</td><td className="px-3 py-2">Widespread across the US; the confirmed vectors of livestock disease</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><em>C. mohave</em></td><td className="px-3 py-2">Desert washes and irrigated desert margins</td><td className="px-3 py-2">California and the desert Southwest</td></tr>
            </tbody>
          </table>
        </div>
        <p>UF/IFAS also notes that biting midges are not only <em>Culicoides</em> &mdash; the genera <em>Leptoconops</em> and <em>Forcipomyia</em> (<em>Lasiohelea</em>) bite people too, which is part of why season and behaviour vary so much from one part of the country to another.</p>
        <p>The life-cycle numbers behind that season, again from UF/IFAS: eggs are about <strong>0.25 mm</strong> and hatch in <strong>two to seven days</strong>; larvae pass through <strong>four instars</strong> over two to fourteen days, though they can hold in the larval stage for up to a year in poor conditions; the pupal stage takes a day and a half or more. <em>C. variipennis</em> can go from egg to biting adult in about <strong>16 days</strong> under laboratory conditions. Adults measure <strong>1.0 to 2.0 mm</strong> in the UF/IFAS account &mdash; within the 1 to 3 mm range commonly quoted for the family, and small enough that, as UF/IFAS states directly, ordinary window screening does not keep them out.</p>

        <h3>No-see-um season by region</h3>
        <p>Season is the question a US reader asks that a Canadian page never answers, because the answer in Fort Myers and the answer in Duluth are nothing alike.</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[600px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Region</th>
                <th className="px-3 py-2 text-left">Typical active season</th>
                <th className="px-3 py-2 text-left">Worst period</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Florida, Gulf Coast, coastal Carolinas</td><td className="px-3 py-2">Essentially year-round</td><td className="px-3 py-2">Spring and fall broods; heavy after tides flood the marsh</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Inland southeast and mid-Atlantic</td><td className="px-3 py-2">Roughly March to October</td><td className="px-3 py-2">Late spring and early fall</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Northern tier, Great Lakes, New England</td><td className="px-3 py-2">Roughly May to September</td><td className="px-3 py-2">June and July</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Desert Southwest (AZ, NV, inland CA)</td><td className="px-3 py-2">Warm months</td><td className="px-3 py-2">Around monsoon rains and irrigated ground</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Pacific Northwest and Alaska</td><td className="px-3 py-2">Short, intense summer</td><td className="px-3 py-2">Mid-summer near bog, tundra, and lake margins</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Southern Ontario and the GTA (Canada)</td><td className="px-3 py-2">May to September</td><td className="px-3 py-2">June and July, alongside peak mosquito season</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>In the United States</strong>, the best local answer usually comes from your state&rsquo;s Cooperative Extension service rather than from a national page &mdash; UF/IFAS in Florida, University of Arizona Cooperative Extension (whose guide is titled &ldquo;Something&rsquo;s Biting Me, but I Can&rsquo;t See It&rdquo;) for the Southwest, and UC Agriculture and Natural Resources in California all publish region-specific biting-midge guidance, and a county extension office can tell you which species is flying near you and when.</p>
        <p><strong>In Canada</strong>, the picture is simpler for most homeowners. Biting midges occur across the country, and around the Great Lakes and southern Ontario the season compresses into roughly <strong>May through September</strong>, peaking with warm, damp weather in June and July &mdash; the same window as mosquito season, which is exactly why the two are managed together here. Our companion guide covers the <Link href="/blog/no-see-ums-biting-midges-ontario">Ontario species and season</Link> in detail.</p>

        <h2>Which repellents are registered &mdash; EPA in the United States, Health Canada in Canada</h2>
        <p><strong>In the United States</strong>, skin repellents are registered by the <strong>Environmental Protection Agency (EPA)</strong>, and the <strong>CDC</strong>&rsquo;s standing advice is to use an EPA-registered repellent &mdash; the registered actives include DEET, picaridin, IR3535, oil of lemon eucalyptus and its synthesised form PMD, and 2-undecanone. <strong>In Canada</strong>, the same job is done by <strong>Health Canada</strong>&rsquo;s Pest Management Regulatory Agency, which registers DEET and icaridin (the Canadian name for picaridin) products.</p>
        <ul>
          <li><strong>US readers:</strong> the EPA publishes a public repellent search tool that lets you filter by active ingredient and expected protection time. That is the standard reference to check a product against, and any repellent sold legally for skin use in the US carries an EPA registration number on the label.</li>
          <li><strong>Canadian readers:</strong> PMRA-registered products carry a PCP number on the label. Health Canada also publishes concentration limits by age group, which differ from US practice &mdash; worth reading before buying a high-concentration DEET product for a child.</li>
          <li><strong>Both:</strong> apply to ankles, wrists, the neck, and the hairline. Those are where midges concentrate, and a repellent that is not on those spots is not doing much.</li>
        </ul>
        <p>Clothing treatment is the layer most people skip. <strong>Permethrin goes on fabric, never on skin</strong> &mdash; you treat clothing, socks, and gear, let it dry, and it keeps working through several washes. In the US, permethrin clothing sprays and factory-treated apparel are widely sold and registered for that use, which is a large part of why permethrin-treated clothing brands are so prominent on this topic. In Canada, permethrin clothing treatments have historically been much harder to buy at retail than in the US, so check current Canadian registration and availability rather than assuming a US listing can simply be ordered across the border. Our guide to <Link href="/blog/bug-protective-clothing-canada">bug-protective clothing</Link> covers what to treat and how.</p>
        <p className="not-prose my-4">
          <BuyLink tag={AMZ_TAG} search="permethrin clothing treatment spray">Check permethrin clothing treatment on Amazon &rarr;</BuyLink>
        </p>
        <p>On active-ingredient choice specifically, UF/IFAS reports that DEET remains the mainstay against biting midges, and cites testing in which a lemon eucalyptus formulation reached full repellency against <em>C. obsoletus</em> compared with 75% for DEET in the same comparison &mdash; a useful data point if you prefer a plant-derived active, though protection time is generally shorter and reapplication matters more.</p>

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

        <h2>Oropouche virus and biting midges: what the CDC actually says</h2>
        <p>Oropouche virus is spread mainly by a biting midge, <em>Culicoides paraensis</em>, and by some mosquitoes, and a large outbreak moved through South and Central America and the Caribbean in 2024 and 2025. According to the <strong>CDC</strong>, cases identified in the United States have been <strong>travel-associated</strong> &mdash; found in travellers returning from affected areas, chiefly Cuba and Brazil &mdash; and no established local transmission has been identified in the continental United States.</p>
        <p>This is worth stating plainly, because it is why the CDC has been publishing about biting midges lately, and because the honest answer for a homeowner is reassuring. <strong>If you were bitten on a patio in Ontario, Texas, or Florida, Oropouche is not your risk.</strong> The exposure that matters is travel to a region where the virus is actively circulating, not backyard bites in North America.</p>
        <p>If you have travelled recently, the CDC describes Oropouche symptoms as typically starting <strong>one to ten days after a bite</strong>, with sudden fever, severe headache, muscle and joint pain, chills, and sometimes sensitivity to light, nausea, vomiting, or a rash. The CDC puts the illness itself at typically under a week (about two to seven days), and notes that symptoms can recur days or even weeks later. The CDC also publishes specific guidance for pregnant travellers considering trips to areas with Oropouche activity, which is worth checking on the CDC travel notice page before booking. If you develop those symptoms after travel, contact a healthcare provider and tell them where you have been.</p>
        <p>Two related points, for completeness. UF/IFAS lists <em>Mansonella</em> filarial worms among the human parasites biting midges can transmit &mdash; again in parts of Latin America, the Caribbean, and Africa rather than in North America. And what biting midges genuinely do transmit in the United States is <strong>animal</strong> disease: bluetongue virus in sheep and cattle, epizootic hemorrhagic disease in deer, and the &ldquo;sweet itch&rdquo; allergy in horses. None of those infect people.</p>
        <p>Nothing here changes the practical picture set out above: for a reader in Canada or the continental United States, the realistic outcome of a no-see-um bite is an itchy welt that fades in a week or two. This section is general information and travel context, not medical advice.</p>

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
