import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import Figure from '@/components/Figure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'flea-bites-on-humans'
const DATE = '2026-07-19'
const UPDATED = '2026-07-19'
const TITLE = 'Flea Bites on Humans: What They Look Like & How to Tell It’s Fleas (2026)'
const META_TITLE = 'Flea Bites on Humans vs Bed Bug Bites (2026)'

const FAQS = [
  {
    question: 'What do flea bites look like on humans?',
    answer: 'Flea bites on humans look like small red bumps, about 1–3 mm (roughly 1/8 in) across, often with a lighter red ring or halo around a tiny central puncture point. They typically appear in clusters or short lines of two to three bites, most often on the ankles and lower legs — the zone a flea can reach by jumping from the floor. They itch almost immediately, unlike bed bug bites, which can take hours or days to react. In people who are sensitized, bites can swell into larger hives or welts.',
  },
  {
    question: 'How can you tell flea bites from bed bug bites?',
    answer: 'Location, timing, and pattern are the main tells. Flea bites cluster on the ankles and lower legs, itch within minutes, and often show a red halo around each bite. Bed bug bites favour skin exposed while you sleep — face, neck, arms, hands — often run in a line of three or more, and the reaction is frequently delayed by hours or even days. The environment is the tiebreaker: fleas leave black “flea dirt” on pets and pet bedding, while bed bugs leave rust-coloured spots and shed skins along mattress seams.',
  },
  {
    question: 'Can fleas live on humans or in human hair?',
    answer: 'No — the fleas found in homes across North America, overwhelmingly the cat flea, cannot live or breed on people. Humans are not hairy enough for fleas to grip, hide, and stay warm the way they do in animal fur, so a flea will typically bite a person a few times and leave. Fleas do not infest human hair the way lice do. The human flea (Pulex irritans) exists but is rare in modern homes. If you are being bitten repeatedly, the population lives in your carpets and pet resting areas, not on you.',
  },
  {
    question: 'How long do flea bites last?',
    answer: 'Most flea bites fade within a few days to a week if you avoid scratching. In sensitive people the itching and red bumps can persist for up to two weeks. Scratching prolongs healing and is the main path to secondary bacterial skin infection, which shows as growing redness, warmth, swelling, or pus and warrants a visit to a healthcare provider. New bites appearing daily means fleas are still breeding in the home, and the environment — not the skin — is the problem to fix.',
  },
  {
    question: 'Why am I getting flea bites but no one else in my house is?',
    answer: 'Often everyone is being bitten and only some people react. Sensitivity to flea saliva varies enormously — one person raises itchy welts while another shows no mark at all from the same number of bites. Research on why fleas prefer certain people is limited, but exposure differences matter: whoever spends more time at floor level, near pet bedding, or in the most infested rooms collects more bites. Differences in skin chemistry, body heat, and carbon dioxide output may also play a role, though the science there is thin.',
  },
  {
    question: 'Do flea bites spread disease?',
    answer: 'It is uncommon, but fleas are not medically trivial. The CDC lists flea-borne (murine) typhus, plague (rare in North America and treatable when caught), cat scratch disease spread via flea dirt among cats, and tapeworm infection — mainly in children who accidentally swallow an infected flea. Health Canada likewise treats fleas as a health nuisance worth controlling promptly. The everyday risk from flea bites is intense itching and scratching-related skin infection, but fever, headache, or body aches in the weeks after flea exposure deserve medical attention.',
  },
  {
    question: 'How do I know if my home has fleas?',
    answer: 'Check the pet first: run a fine-toothed flea comb through the fur over white paper and look for live fleas or black pepper-like specks. Smear a speck on a damp paper towel — flea dirt turns reddish-brown because it is digested blood. Then check the house: walk slowly through carpeted rooms in white socks (fleas jump on and show up against the white), and set a plug-in light flea trap overnight in the room where bites happen. Trapped fleas confirm an active infestation.',
  },
  {
    question: 'How do you get rid of fleas in the house?',
    answer: 'Hit every life stage at once: vacuum carpets, baseboards, and upholstery daily and empty the vacuum outside — one university study found vacuuming killed about 96% of adult fleas and virtually all eggs and larvae. Wash all pet and human bedding in hot water, 60°C (140°F), and dry on high heat. Run plug-in light traps to kill adults and track progress, and treat pets under your veterinarian’s direction, since untreated pets re-seed the home. Expect two to eight weeks — dormant pupae keep hatching after everything else is dead.',
  },
  {
    question: 'Do plug-in flea traps actually work?',
    answer: 'They work well as monitors and as a supplementary kill method, but not as a standalone cure. A plug-in trap uses light and warmth to lure adult fleas onto a sticky pad, and it is the single easiest way to confirm an infestation and watch its trajectory — falling catch counts mean your vacuuming and washing campaign is working. What a trap cannot do is reach eggs, larvae, or dormant pupae, which make up roughly 95% of a flea population. Use traps alongside vacuuming, hot-water washing, and vet-directed pet treatment.',
  },
  {
    question: 'When should I see a doctor about flea bites?',
    answer: 'See a healthcare provider if bites show signs of infection — spreading redness, warmth, swelling, pus, or fever; if you develop large hives, blistering, or a strong allergic reaction; if bites have not improved after about two weeks; or if fever, headache, chills, or body aches follow flea exposure, since the CDC notes fleas can rarely transmit illnesses such as flea-borne typhus. Severe allergic symptoms such as facial swelling or trouble breathing are an emergency. This guide is general information, not medical advice.',
  },
  {
    question: 'How do you tell if a bite is from a flea?',
    answer: 'Four features together, not any one alone: a small firm bump about 1–3 mm across, a pale red halo around a tiny central puncture, grouping in clusters or short lines of two to three, and placement on the ankles, shins, and calves. Add an itch that begins within minutes and an animal in the home, and fleas are the strong favourite. Confirm it in the environment rather than on the skin — the CDC notes insect bites cannot be identified reliably from appearance alone, so the flea comb, the wet-paper test, and the white-sock walk are what actually settle it.',
  },
  {
    question: 'What is biting me at night if it is not bed bugs?',
    answer: 'The usual answers are bird or rodent mites from a nest in the attic, eaves, or wall void; scabies mites, which burrow and are diagnosed by a clinician; fleas from a pet or from wildlife under the house; carpet beetle larval hairs, which cause an itchy rash rather than true bites; and outdoor biters carried indoors, such as chiggers and no-see-ums. Extension entomologists at the University of Kentucky and Texas A&M AgriLife stress that many persistent night-time itching complaints have no arthropod cause at all — dry indoor air, laundry residue, fibreglass, and contact dermatitis are common culprits, so a healthcare provider is the right next step when no insect is ever found.',
  },
  {
    question: 'What are the first signs that you have bed bugs?',
    answer: 'The first sign for most people is unexplained bites on skin that was uncovered in bed — face, neck, shoulders, arms, hands — often noticed on waking and frequently in a line or loose row. Small blood smears on the sheets come next, then roughly 1 mm dark faecal spots that bleed into fabric along mattress seams and the box-spring edge. Bites are the least reliable sign: the CDC notes some people never react visibly at all, so evidence on the bed, not marks on the skin, is what confirms it.',
  },
  {
    question: 'What are three signs you might have bed bugs?',
    answer: 'One: dark faecal spots about a millimetre across along mattress seams, box-spring gauze, and headboard joints, which bleed into fabric like ink rather than sitting on top of it. Two: translucent, straw-coloured shed skins in the same seams, left behind at each of the five nymph moults. Three: a live insect — flat, oval, reddish-brown, roughly apple-seed sized at 5 mm — or fresh blood smears on the sheets. Bites alone are the fourth and weakest sign, because reactions vary so widely between people.',
  },
  {
    question: 'Which is easier to get rid of, bed bugs or fleas?',
    answer: 'Fleas, by a wide margin. A flea infestation usually clears in two to eight weeks with daily vacuuming, hot-water washing at 60°C (140°F), and vet-directed treatment of the pet, at a cost measured in tens of dollars. Bed bugs live in the structure rather than on an animal, resist many over-the-counter pyrethroid sprays, and typically need professional heat or a multi-visit chemical programme costing hundreds to thousands. The US EPA explicitly warns that total-release foggers are ineffective against bed bugs and can be hazardous.',
  },
  {
    question: 'When is flea season in the United States?',
    answer: 'It depends on the region. Along the Gulf Coast and the Deep South — Florida, Texas, Louisiana, Mississippi, Alabama, Georgia, South Carolina — plus coastal California and Hawaii, fleas are active year-round and there is no winter die-off to help you. In the northern tier, from Minnesota and Ohio to Colorado and the Northeast, outdoor flea pressure runs roughly April through November, similar to the May-to-September pattern in southern Ontario. Indoors is the exception everywhere: a heated home keeps the flea life cycle running through winter regardless of latitude.',
  },
  {
    question: 'Where in the United States do fleas carry disease?',
    answer: 'Flea-borne (murine) typhus cases in the US are concentrated in California, Texas, and Hawaii, and the California Department of Public Health describes it as endemic in Los Angeles and Orange counties. Plague is confined to rural areas of the western US — chiefly New Mexico, Arizona, Colorado, and California — with the CDC reporting an average of roughly seven human cases a year, spread mainly by the ground squirrel flea Oropsylla montana. Cat scratch disease occurs wherever cats and fleas are found. In Canada these flea-borne illnesses are rare. This is general information, not medical advice.',
  },
  {
    question: 'Can flea or bed bug bites cause an allergic reaction?',
    answer: 'Yes. Most reactions are ordinary local itching, but sensitised people can develop large local swelling or papular urticaria — crops of persistent itchy bumps that outlast the bites themselves and are common in children. The Asthma and Allergy Foundation of America treats biting-insect allergy as its own category and describes typical management as an oral antihistamine plus a topical corticosteroid. Whole-body reactions are rare with biting insects compared with stinging insects such as bees and wasps, but facial or throat swelling, hives spreading beyond the bites, or trouble breathing is an emergency. Not medical advice.',
  },
  {
    question: 'What is the tropical bed bug and where is it found in the US?',
    answer: 'The tropical bed bug, Cimex hemipterus, is a second bed bug species that looks nearly identical to the common bed bug (Cimex lectularius) to the naked eye. It re-established in Florida around 2015 and is established in Honolulu, Hawaii, where it was detected in 2009 and again in 2019. It matters because populations of both species commonly carry kdr target-site mutations that confer resistance to pyrethroid and pyrethrin insecticides — the active ingredients in most drugstore bed bug sprays. That resistance, not misapplication, is often why a retail spray appears to do nothing.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description:
    'What flea bites look like on humans — ankle clusters, red halos, instant itch — vs bed bug and mosquito bites, how long they last, whether fleas live on people, and how to clear a home infestation.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('flea-bites-on-humans')

export default function FleaBitesOnHumansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A visual identification guide to flea bites on humans: the ankle-cluster pattern, flea vs bed bug vs mosquito bite comparison, how long bites last, and evidence-based home flea control.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Pest Product Guides', url: '/pest-product-guides' }, { name: 'Flea Bites on Humans', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1 flex-wrap">
            <Link href="/pest-product-guides" className="hover:text-white">Pest Product Guides</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Flea Bites on Humans</span>
          </nav>
          <div className="text-amber-400 text-xs font-bold uppercase tracking-wide mb-3">Bite Identification</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Flea Bites on Humans: What They Look Like &amp; How to Tell It&rsquo;s Fleas
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            The ankle-cluster pattern that gives fleas away, a flea vs bed bug vs mosquito comparison table, how long bites last, and the evidence-based way to clear fleas out of a home.
          </p>
          <div className="mt-6 text-brand-300 text-sm">Published July 19, 2026 &middot; 10 min read</div>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-14 prose-brand">

        <AuthorByline datePublished={DATE} dateModified={UPDATED} />

        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-base text-gray-800 leading-relaxed">
            Flea bites on humans look like small red bumps with a lighter red halo, grouped in clusters or short lines of two to three, most often on the ankles and lower legs. They itch within minutes &mdash; unlike bed bug bites, which favour the face, neck, and arms and can take hours or days to react.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Individual flea bites are small &mdash; about 1&ndash;3 mm (roughly 1/8 in) &mdash; with a tiny central puncture point.</li>
            <li>Bites concentrate below the knee because a cat flea jumps up to about 20 cm (8 in) vertically from floor level.</li>
            <li>Fleas cannot live or breed on humans &mdash; they bite a few times and return to carpets, pet bedding, and floor cracks.</li>
            <li>Most bites fade in a few days to 2 weeks; new bites appearing daily means the home infestation is still active.</li>
            <li>Adult fleas are only about 5% of an infestation &mdash; the other ~95% are eggs, larvae, and pupae hidden in the environment.</li>
            <li>Per the CDC, fleas can rarely transmit illnesses such as flea-borne typhus; Health Canada recommends prompt control through vacuuming, hot-water washing, and veterinary pet treatment.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito &middot; licensed mosquito &amp; tick control professionals</p>
        </div>

        <SpecialistDisclosure pest="fleas" />

        <p className="text-sm text-gray-600 italic border-l-4 border-gray-200 pl-4">This article is general information, not medical advice. Reactions to insect bites vary from person to person &mdash; if you are concerned about bites, an unusual rash, or any symptoms, see a healthcare provider. For severe allergic reactions, seek emergency care immediately.</p>

        <nav aria-label="On this page" className="not-prose my-6 rounded-xl border border-navy-100 bg-white p-5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">On this page</p>
          <ul className="grid gap-x-6 gap-y-1.5 text-sm text-brand-800 sm:grid-cols-2">
            <li><a href="#flea-bite-appearance" className="underline hover:text-brand-600">What flea bites look like</a></li>
            <li><a href="#flea-vs-bed-bug-vs-mosquito" className="underline hover:text-brand-600">Flea vs bed bug vs mosquito table</a></li>
            <li><a href="#flea-or-bed-bug" className="underline hover:text-brand-600">Flea bite or bed bug bite?</a></li>
            <li><a href="#bite-from-a-flea" className="underline hover:text-brand-600">How to tell a bite is from a flea</a></li>
            <li><a href="#bed-bug-identification" className="underline hover:text-brand-600">What bed bugs look like</a></li>
            <li><a href="#first-signs-bed-bugs" className="underline hover:text-brand-600">First signs of bed bugs</a></li>
            <li><a href="#three-signs-bed-bugs" className="underline hover:text-brand-600">Three signs you might have bed bugs</a></li>
            <li><a href="#where-bed-bugs-hide" className="underline hover:text-brand-600">Where bed bugs hide &amp; how to inspect</a></li>
            <li><a href="#fleas-on-humans" className="underline hover:text-brand-600">Can fleas live on humans?</a></li>
            <li><a href="#how-long-do-bites-last" className="underline hover:text-brand-600">How long flea bites last</a></li>
            <li><a href="#treatment" className="underline hover:text-brand-600">Treating the bites</a></li>
            <li><a href="#only-me" className="underline hover:text-brand-600">Why only me and not my partner?</a></li>
            <li><a href="#home-flea-check" className="underline hover:text-brand-600">Checking your home for fleas</a></li>
            <li><a href="#get-rid-of-fleas" className="underline hover:text-brand-600">Getting rid of fleas</a></li>
            <li><a href="#easier-bed-bugs-or-fleas" className="underline hover:text-brand-600">Bed bugs vs fleas: which is harder?</a></li>
            <li><a href="#biting-me-at-night" className="underline hover:text-brand-600">Biting me at night, not bed bugs</a></li>
            <li><a href="#bite-allergy" className="underline hover:text-brand-600">When a bite reaction is an allergy</a></li>
            <li><a href="#species-us-canada" className="underline hover:text-brand-600">US &amp; Canadian species</a></li>
            <li><a href="#disease-geography" className="underline hover:text-brand-600">Where flea-borne illness occurs</a></li>
            <li><a href="#flea-season" className="underline hover:text-brand-600">Flea season by region</a></li>
            <li><a href="#epa-vs-pmra" className="underline hover:text-brand-600">Buying products: EPA vs PMRA</a></li>
            <li><a href="#faq" className="underline hover:text-brand-600">Frequently asked questions</a></li>
          </ul>
        </nav>

        <h2 id="flea-bite-appearance">What do flea bites look like on humans?</h2>
        <Figure
          src="/diagrams/bite-pattern-comparison.svg"
          alt="Diagram comparing the distribution patterns of mosquito, bed bug, flea, chigger, tick and no-see-um bites on the body"
          caption="Flea bites cluster tightly around the ankles and lower legs, usually with a small red dot at the centre. Bites above the waist in lines point to bed bugs instead."
          width={720}
          height={440}
        />
        <p>Flea bites on humans look like <strong>small red bumps in clusters, usually on the ankles and lower legs, each often ringed by a lighter red halo</strong>. Individual bites are small &mdash; about 1&ndash;3 mm (roughly 1/8 in) &mdash; with a tiny darker puncture point in the centre where the flea fed. Unlike a mosquito welt, a flea bite usually stays a firm, discrete bump rather than puffing up, though people who are sensitized to flea saliva can develop larger hives or wheals around each bite.</p>
        <p>Three features together make the pattern distinctive:</p>
        <ul>
          <li><strong>Grouping.</strong> Bites come in clusters or short lines of two to three, because a single flea probes and feeds more than once before leaving.</li>
          <li><strong>The halo.</strong> A reddened ring around a central point is typical of flea bites and less common with mosquito bites.</li>
          <li><strong>Low placement.</strong> Fleas launch from carpets and floor-level bedding, and a cat flea&rsquo;s vertical jump tops out around 20 cm (8 in) &mdash; so bites concentrate on ankles, shins, and calves. Bites around the waist, behind the knees, or on forearms usually mean floor-sitting or close pet contact.</li>
        </ul>
        <p>The itch starts <strong>within minutes</strong>. That fast reaction is one of the most useful tells, because the other common indoor biter &mdash; the bed bug &mdash; often produces a reaction delayed by hours or days.</p>

        <h2 id="flea-vs-bed-bug-vs-mosquito">Flea bites vs bed bug and mosquito bites: how do you tell?</h2>
        <p>The quickest separation is <strong>where the bites are, when they itch, and what pattern they form</strong>. Fleas hit the lower legs any time of day; bed bugs hit skin exposed during sleep; mosquitoes hit any exposed skin, mostly around dawn and dusk. Here is the full side-by-side:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[560px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Feature</th>
                <th className="px-3 py-2 text-left">Flea bites</th>
                <th className="px-3 py-2 text-left">Bed bug bites</th>
                <th className="px-3 py-2 text-left">Mosquito bites</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Appearance</td><td className="px-3 py-2">Small firm red bumps with a red halo and central point</td><td className="px-3 py-2">Raised red welts, sometimes with a darker centre</td><td className="px-3 py-2">Puffy, pale-to-red raised welt</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Pattern</td><td className="px-3 py-2">Clusters or short lines of 2&ndash;3</td><td className="px-3 py-2">Rows or zigzags of 3+ (&ldquo;breakfast, lunch, dinner&rdquo;)</td><td className="px-3 py-2">Random, isolated singles</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Typical location</td><td className="px-3 py-2">Ankles, lower legs, waist, behind knees</td><td className="px-3 py-2">Face, neck, arms, hands &mdash; skin exposed in bed</td><td className="px-3 py-2">Any exposed skin</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Itch timing</td><td className="px-3 py-2">Within minutes</td><td className="px-3 py-2">Often delayed hours to days</td><td className="px-3 py-2">Within minutes</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">When you get bitten</td><td className="px-3 py-2">Any time, especially at floor level</td><td className="px-3 py-2">Overnight, in bed</td><td className="px-3 py-2">Outdoors, dusk and dawn</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Environmental clue</td><td className="px-3 py-2">Black &ldquo;flea dirt&rdquo; on pets and pet bedding</td><td className="px-3 py-2">Rust spots and shed skins on mattress seams</td><td className="px-3 py-2">Standing water nearby; insects seen or heard</td></tr>
            </tbody>
          </table>
        </div>
        <p>Two lookalikes are worth ruling out. If the bites appeared after a night&rsquo;s sleep and sit on your upper body, work through our <Link href="/blog/bed-bug-bites">bed bug bites guide</Link> &mdash; the mattress-seam inspection there settles it quickly. And if the ankle-clustered bites showed up after time in grass or brush rather than at home, <Link href="/blog/chigger-bites">chigger bites</Link> are the classic outdoor impostor: they also cluster at sock lines and waistbands, but chiggers stay outside and do not infest houses.</p>

        <h2 id="flea-or-bed-bug">How do you know if it&rsquo;s a flea bite or bed bug bite?</h2>
        <p><strong>Start with the height on your body.</strong> Flea bites sit below the knee in tight clusters and itch within minutes. Bed bug bites sit on skin left uncovered in bed &mdash; face, neck, shoulders, arms, hands &mdash; often run in a line of three or more, and the itch is commonly delayed by hours or days. Then confirm in the room, not on the skin.</p>
        <p>That last step is not optional. The CDC is explicit that bed bug bites cannot be reliably told apart from other insect bites by appearance alone, and dermatologists say the same about bites generally: reactions vary so much between people that two adults bitten by the same insect on the same night can show completely different marks &mdash; or, in maybe one person in five, no marks at all. Physical evidence is the tiebreaker, and it is decisive in both directions:</p>
        <ul>
          <li><strong>Fleas leave their evidence at floor level.</strong> Black, pepper-like &ldquo;flea dirt&rdquo; in pet fur and pet bedding that smears reddish-brown on a damp paper towel; fast reddish-brown adults 1&ndash;3 mm long that jump onto white socks; pale eggs about 0.5 mm rolling into carpet pile.</li>
          <li><strong>Bed bugs leave their evidence at bed level.</strong> Dark faecal spots about 1 mm across that bleed into fabric along mattress seams; rust-coloured smears where a fed bug was crushed; translucent shed skins; and a live insect the size, shape, and colour of an apple seed.</li>
        </ul>
        <p>One discriminator settles most remaining cases: <strong>fleas need an animal, bed bugs only need you</strong>. Cat fleas sustain themselves on a dog, a cat, or wildlife nesting under a deck, in a crawlspace, or in an attic. Bed bugs feed on people and travel on luggage, second-hand furniture, and shared laundry. No mammal in the home and no animal nesting nearby makes fleas much less likely and bed bugs much more so &mdash; which is why the rest of this guide now gives bed bugs the same treatment it gives fleas.</p>

        <h2 id="bite-from-a-flea">How do you tell if a bite is from a flea?</h2>
        <p><strong>Four features together, never one alone:</strong> a small firm bump about 1&ndash;3 mm across; a pale red halo around a tiny central puncture point; grouping in clusters or short lines of two to three; and placement on the ankles, shins, and calves. Add an itch that starts within minutes and an animal in the household, and fleas are the strong favourite.</p>
        <p>Everything after that is confirmation work in the environment rather than on your arm. The three tests that actually settle it &mdash; the flea comb over white paper, the wet-paper test that turns flea dirt reddish-brown, and the white-sock walk through carpeted rooms &mdash; take about five minutes and are laid out in full in the <a href="#home-flea-check">home flea check below</a>. A single plug-in light trap left running overnight turns &ldquo;I think it is fleas&rdquo; into a countable number by morning.</p>
        <p>Two false positives are worth knowing. Ankle-clustered bites picked up after time in long grass, leaf litter, or brush &mdash; and never repeated indoors &mdash; are usually <Link href="/blog/chigger-bites">chigger bites</Link>, which cluster at sock lines and waistbands but do not infest homes. Ankle bites acquired outdoors at dusk near water or damp soil, burning out of proportion to their size, point to <Link href="/blog/no-see-um-bites">no-see-ums</Link>. Neither breeds in your carpet, so neither produces the daily drip of fresh bites that defines a flea infestation.</p>

        <h2 id="bed-bug-identification">What do bed bugs look like &mdash; and which species is in your home?</h2>
        <p>An adult bed bug is <strong>flat, oval, wingless, reddish-brown, and about 5 mm long &mdash; roughly the size and shape of an apple seed</strong>. It has six legs and short antennae. After a blood meal it swells, lengthens, and darkens to a deep red-brown, which is why a fed bug and an unfed bug photographed side by side barely look like the same insect. Nymphs are smaller and translucent straw-yellow until they feed, when the blood meal shows through the body wall as a dark line.</p>
        <p>Two species bite people in North America, and until recently only one mattered:</p>
        <ul>
          <li><strong><em>Cimex lectularius</em>, the common bed bug.</strong> Found throughout the United States and Canada, in every climate zone, in housing of every price level. This is the species behind essentially all Canadian cases and the large majority of US ones.</li>
          <li><strong><em>Cimex hemipterus</em>, the tropical bed bug.</strong> Effectively indistinguishable from <em>C. lectularius</em> without magnification. It re-established in <strong>Florida</strong> around 2015 and is established in <strong>Honolulu, Hawaii</strong>, where it was detected in 2009 and again in 2019.</li>
        </ul>
        <p>The species question is not trivia for a reader in Tampa or Honolulu. Populations of both species widely carry <strong>kdr target-site mutations</strong> conferring resistance to pyrethroid and pyrethrin insecticides &mdash; the active ingredients in most drugstore bed bug sprays. When a retail can &ldquo;does nothing,&rdquo; resistance is frequently the mechanism, not bad aim. Neither species is known to transmit disease to people; the CDC and the US EPA both make that point plainly, which is genuinely reassuring news in an otherwise miserable problem.</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[560px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <caption className="sr-only">Bed bug life stages compared on size, appearance, and where each stage is found</caption>
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Stage</th>
                <th className="px-3 py-2 text-left">Size</th>
                <th className="px-3 py-2 text-left">What it looks like</th>
                <th className="px-3 py-2 text-left">Where you find it</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Egg</td><td className="px-3 py-2">~1 mm</td><td className="px-3 py-2">Pearl-white, rice-grain shaped, glued in place</td><td className="px-3 py-2">Deep in seams, screw holes, cracks &mdash; usually in clusters</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Nymph (5 instars)</td><td className="px-3 py-2">1.5&ndash;4.5 mm</td><td className="px-3 py-2">Translucent straw-yellow; red-brown after feeding</td><td className="px-3 py-2">Same harbourage as adults; each moult needs a blood meal</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Shed skin (casing)</td><td className="px-3 py-2">1.5&ndash;5 mm</td><td className="px-3 py-2">Empty, brittle, translucent bug-shaped shell</td><td className="px-3 py-2">Mattress seams and headboard joints &mdash; five per bug reaching adulthood</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Adult</td><td className="px-3 py-2">~5 mm</td><td className="px-3 py-2">Flat oval, apple-seed sized, reddish-brown, six legs, no usable wings</td><td className="px-3 py-2">Within about 2 m (6 ft) of where a person sleeps, in the majority of cases</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Faecal spot</td><td className="px-3 py-2">~1 mm</td><td className="px-3 py-2">Dark brown-black; bleeds into fabric like felt-tip ink</td><td className="px-3 py-2">Seams, box-spring gauze, headboard, wall behind the bed</td></tr>
            </tbody>
          </table>
        </div>
        <p>For the fine detail on each of those, we keep dedicated guides: <Link href="/blog/baby-bed-bugs-nymphs-canada">what bed bug nymphs look like</Link>, <Link href="/blog/bed-bug-shells-casings-shed-skins-canada">shed skins and casings</Link>, and <Link href="/blog/bed-bug-stains-poop-droppings-canada">bed bug stains and droppings</Link>. If the insect you found is not quite matching any of it, work through <Link href="/blog/bugs-that-look-like-bed-bugs-canada">the bugs that get mistaken for bed bugs</Link> before you spend a dollar on treatment.</p>

        <h2 id="first-signs-bed-bugs">What are the first signs that you have bed bugs?</h2>
        <p><strong>Bites first, evidence second.</strong> Most people notice unexplained bites on skin that was uncovered in bed &mdash; face, neck, shoulders, arms, hands &mdash; on waking, frequently in a line or loose row. Small blood smears on the sheets usually follow, then dark faecal spotting along mattress seams. Live bugs are typically the last thing anyone sees.</p>
        <p>The progression, roughly in the order households actually experience it:</p>
        <ol>
          <li><strong>Unexplained overnight bites</strong> on exposed sleeping skin, often dismissed for a week or two as a rash, hives, or &ldquo;mosquitoes in the bedroom.&rdquo;</li>
          <li><strong>Small rust or blood smears on the sheets</strong>, from a fed bug crushed by a sleeper rolling over.</li>
          <li><strong>Dark 1 mm faecal spots</strong> along mattress piping, box-spring gauze, headboard joints, and the wall or baseboard behind the bed.</li>
          <li><strong>Translucent shed skins and pearl-white eggs</strong> in the same seams &mdash; a sign the population is breeding, not a single hitchhiker.</li>
          <li><strong>A live bug</strong>, usually found at 2&ndash;3 a.m. with a flashlight, or in an interceptor cup under a bed leg.</li>
          <li><strong>A sweet, musty odour</strong> in the room. This one only shows up in heavy, established infestations and is not something to wait for.</li>
        </ol>
        <p>Two cautions from the public-health literature. First, <strong>bites are the least reliable sign</strong>: the CDC notes some people show no visible reaction to bed bug bites at all, so an unbitten partner proves nothing. Second, a delayed reaction means the bites you are looking at may be from a fortnight ago &mdash; you are usually further into an infestation than the calendar in your head suggests.</p>

        <h2 id="three-signs-bed-bugs">What are three signs you might have bed bugs?</h2>
        <p><strong>One:</strong> dark faecal spots about a millimetre across along mattress seams and box-spring edges that bleed into fabric like ink rather than sitting on top of it. <strong>Two:</strong> translucent, straw-coloured shed skins in those same seams. <strong>Three:</strong> a live apple-seed-sized bug, or fresh blood smears on the sheets. Bites are the fourth and weakest sign.</p>
        <p>The reason those three beat bites is that they are <em>objective</em>. A faecal spot means a bed bug fed and digested in that spot; a shed skin means a nymph moulted there, which means the population is reproducing rather than passing through; a live adult ends the argument. Bite marks, by contrast, depend entirely on your immune system. Any one of the three warrants a full inspection tonight rather than a wait-and-see week.</p>

        <h2 id="where-bed-bugs-hide">Where do bed bugs hide? The 10-minute mattress-seam inspection</h2>
        <p><strong>Within about two metres (six feet) of where a person sleeps, in the overwhelming majority of cases.</strong> Bed bugs are poor travellers and stay close to the blood meal, wedged into any crack that lets them touch a surface above and below at once. Start at the mattress and work outward &mdash; if there is an infestation, this inspection usually finds it.</p>
        <Figure
          src="/diagrams/bed-bug-evidence-chart.svg"
          alt="Chart of bed bug evidence including faecal spots, rust smears, shed skins and eggs, each shown at true size"
          caption="What you are hunting for on a mattress seam: ~1 mm faecal spots that bleed into fabric, rust smears from crushed bugs, translucent shed skins, and pearl-white eggs. Flea evidence, by contrast, sits at floor level in pet bedding and carpet."
          width={720}
          height={400}
        />
        <ol>
          <li><strong>Strip the bed and go along every seam with a flashlight.</strong> Hold the light at a low angle so specks cast shadows. Work the piping, the tufts, the label, and the four corners &mdash; corners collect the most.</li>
          <li><strong>Lift the mattress and inspect the box spring.</strong> The gauze dust cover on the underside is prime harbourage; peel back a corner where it is stapled and look inside the frame.</li>
          <li><strong>Take the headboard off the wall.</strong> Wall-mounted headboards are one of the most commonly missed sites in the whole room. Check joints, screw holes, and the back face.</li>
          <li><strong>Check the bed frame, slats, and every screw hole.</strong> Then the nightstand &mdash; drawer runners, the underside, and the seam where the back panel meets the sides.</li>
          <li><strong>Widen to the room.</strong> Baseboard gaps, the carpet edge tack strip, loose wallpaper seams, curtain hems, upholstered chair seams, and outlet cover plates on the wall behind the bed.</li>
          <li><strong>Set interceptor cups under all bed legs.</strong> They catch bugs travelling to and from the bed and turn a hunch into a nightly count &mdash; the same monitoring logic as a plug-in flea trap, applied to a different pest.
            <div className="my-3"><BuyLink tag={AMZ_TAG} search="bed bug interceptor traps">Check bed bug interceptor traps on Amazon &rarr;</BuyLink></div>
          </li>
        </ol>
        <p><strong>Where to check the authorities.</strong> In the United States, the EPA publishes bed bug inspection and integrated pest management guidance, and the land-grant extension services are the practical standard &mdash; University of Kentucky Entomology&rsquo;s ENTFACT bed bug factsheets, Texas A&amp;M AgriLife&rsquo;s &ldquo;Insects in the City,&rdquo; NC State Extension, and UF/IFAS for Florida readers dealing with the tropical species. In Canada, Health Canada and provincial public health units publish the equivalent inspection guidance, and our own step-by-step is in <Link href="/blog/how-to-check-for-bed-bugs-canada">how to check for bed bugs</Link>, with interceptor options compared in <Link href="/blog/bed-bug-interceptor-traps-canada">our interceptor trap guide</Link>.</p>

        <h2 id="fleas-on-humans">Can fleas live on humans?</h2>
        <p><strong>No.</strong> The flea species in homes across North America &mdash; overwhelmingly the cat flea (<em>Ctenocephalides felis</em>) &mdash; cannot live or breed on people. Human skin lacks the dense fur a flea needs to grip, hide, and stay warm, so a flea that jumps onto you will typically <strong>bite a few times and leave</strong>, dropping back to the carpet or bedding where the actual population lives. Fleas do not take up residence in human hair the way head lice do.</p>
        <p>A so-called human flea (<em>Pulex irritans</em>) does exist, but it is rare in modern homes with modern hygiene. If you are waking up to fresh bites every day, the correct mental model is not &ldquo;fleas are living on me&rdquo; &mdash; it is that eggs, larvae, and pupae are developing in your carpets, floor cracks, and pet resting spots, and newly hatched adults are jumping up to feed. That distinction matters, because it means <strong>treating the environment, not your body, is what stops the bites</strong>.</p>

        <h2 id="how-long-do-bites-last">How long do flea bites last?</h2>
        <p>Most flea bites <strong>fade within a few days to a week</strong>, and in more sensitive people the itch and redness can linger up to <strong>two weeks</strong>. The single biggest factor in healing time is whether you scratch: broken skin heals slower and opens the door to secondary bacterial infection, which shows up as spreading redness, warmth, swelling, or pus and should be assessed by a healthcare provider.</p>
        <p>Timing is also diagnostic. A batch of bites that heals and is never followed by new ones was likely a one-off exposure &mdash; a visit to an infested house, a flea hitchhiking in on clothing. <strong>New bites appearing every day or two</strong> means an active breeding population at home, and no amount of bite care will outpace it until the infestation itself is dealt with (see the home treatment plan below).</p>

        <h2 id="treatment">How do you treat flea bites?</h2>
        <p>Basic care is simple: <strong>wash the bites with soap and water, apply a cold compress for the swelling, and avoid scratching</strong>. Pharmacies carry over-the-counter anti-itch creams and oral antihistamines that many people find helpful &mdash; ask a pharmacist which option suits you, and follow the product label. We deliberately do not recommend specific medications or doses here; that is a call for a pharmacist or healthcare provider, especially for children.</p>
        <p>Keep fingernails short for kids who cannot resist scratching, and watch bites for the infection signs above. See a healthcare provider if:</p>
        <ul>
          <li>Redness is <strong>spreading</strong>, or a bite becomes increasingly warm, swollen, painful, or develops pus.</li>
          <li>You develop <strong>large hives, blistering, or an intense allergic reaction</strong> around the bites.</li>
          <li>Bites are <strong>not improving after about two weeks</strong>.</li>
          <li>You develop <strong>fever, headache, chills, or body aches</strong> in the weeks after flea exposure. Serious flea-borne illness is uncommon, but the CDC lists flea-borne (murine) typhus, plague, and cat scratch disease among diseases fleas can transmit, and tapeworm infection can occur &mdash; mainly in children &mdash; if an infected flea is accidentally swallowed.</li>
          <li><strong>Emergency:</strong> facial or throat swelling, difficulty breathing, or dizziness after bites &mdash; call emergency services.</li>
        </ul>
        <p>For pets, the equivalent red flags &mdash; constant scratching, scabbing, hair loss, pale gums in kittens or puppies &mdash; are a matter for your <strong>veterinarian</strong>, not a blog post. Flea allergy dermatitis and flea-borne anemia in small animals are real and treatable.</p>

        <h2 id="only-me">Why am I getting bitten but not my partner?</h2>
        <p>Usually because <strong>you react and they don&rsquo;t</strong> &mdash; not because fleas find you tastier. Sensitivity to flea saliva varies enormously between people: the same number of bites can raise angry, itchy welts on one person and leave no visible mark on another. In many &ldquo;why only me?&rdquo; households, both partners are being bitten and only one shows it.</p>
        <p>Genuine exposure differences stack on top of that. Whoever spends more time at floor level &mdash; playing with kids, working out on a mat, napping on the couch the cat prefers &mdash; simply meets more fleas. The person whose side of the bed the dog sleeps on collects more bites. Beyond that, some research suggests fleas and other biting insects orient to body heat, carbon dioxide, and skin chemistry that differ between individuals, but the evidence is limited and no reliable &ldquo;flea-proof body type&rdquo; has been demonstrated. The practical takeaway: one reactive person in a home is enough to confirm a flea problem &mdash; do not wait for everyone to itch.</p>

        <h2 id="home-flea-check">How can you tell if your home has fleas?</h2>
        <p>The fastest confirmation comes from <strong>checking the pet, then the carpet</strong>. Fleas spend most of their adult lives on the host animal, and the immature stages develop wherever the animal rests. Work through this five-minute check:</p>
        <ul>
          <li><strong>Flea-comb the pet over white paper.</strong> Use a fine-toothed flea comb along the lower back, base of the tail, neck, and belly. Look for live fleas &mdash; fast, reddish-brown, 1&ndash;3 mm (about 1/8 in) &mdash; and for black, pepper-like specks falling onto the paper.</li>
          <li><strong>Do the wet-paper test.</strong> Smear a speck on a damp paper towel. Flea dirt turns <strong>reddish-brown</strong>, because it is digested blood. Ordinary dirt stays black-grey. This single test separates &ldquo;maybe fleas&rdquo; from &ldquo;definitely fleas.&rdquo;</li>
          <li><strong>Walk the white-sock test.</strong> Put on long white socks and shuffle slowly through carpeted rooms and past pet bedding for a few minutes. Adult fleas jump onto the moving warm target and stand out against white fabric.</li>
          <li><strong>Check pet bedding and favourite resting spots.</strong> Flea dirt, tiny white eggs (about 0.5 mm / 1/50 in), and larvae accumulate exactly where the animal sleeps.</li>
          <li><strong>Set an overnight flea trap.</strong> A plug-in light trap in the room where bites happen gives you an objective count by morning &mdash; and a baseline to measure your clean-up against.</li>
        </ul>
        <p>No pet? You can still have fleas. Wildlife hosts &mdash; squirrels, raccoons, feral cats &mdash; seed fleas near or under homes, and dormant pupae in an apartment can survive for months after a previous tenant&rsquo;s pets are gone, hatching in a wave when new occupants move in and supply warmth and vibration.</p>

        <h2 id="get-rid-of-fleas">How do you get rid of fleas at home?</h2>
        <p>Successful flea control attacks <strong>every life stage at once, for several weeks</strong>. Adult fleas are only about 5% of an infestation; the other ~95% are eggs, larvae, and pupae distributed through carpets, floor cracks, and pet resting areas. Kill only the adults and the pipeline keeps producing. The plan below covers the environment side; anything applied <em>to the animal</em> &mdash; spot-on treatments, oral flea medication, medicated shampoos &mdash; should be chosen with your <strong>veterinarian</strong>, since the safe options differ by species, age, and weight, and some dog products contain ingredients dangerous to cats.</p>
        <AffiliateDisclosure />
        <TopPick tag={AMZ_TAG}
          label="Most Useful Product for Fleas"
          name="Plug-in light flea trap"
          blurb="The single easiest way to confirm an infestation and track your progress. A plug-in trap lures adult fleas with light and warmth onto a sticky pad, so falling nightly counts tell you the vacuuming and washing campaign is working. It kills adults only — pair it with vacuuming, hot-water washing, and vet-directed pet treatment, since the trap cannot reach the eggs, larvae, and pupae that make up most of the population."
          search="flea trap plug in"
          score={8.1}
          pros={['Confirms an active infestation fast', 'Objective progress meter week over week', 'Quiet, low-effort, runs overnight']}
          cons={['Kills adult fleas only', 'Not a standalone cure — a monitor and supplement']}
        />
        <ul>
          <li><strong>Vacuum daily &mdash; and aggressively.</strong> Carpets, rugs, baseboards, under furniture, upholstery, and the car if pets ride in it. One university study found vacuuming killed about <strong>96% of adult fleas and virtually all eggs and larvae</strong>. Just as important, vacuum vibration triggers dormant pupae to hatch into the open where they can be killed. Empty the canister or bag into an outdoor bin every time.</li>
          <li><strong>Wash everything washable in hot water.</strong> Pet bedding, human bedding, throw blankets, and cushion covers at <strong>60&deg;C (140&deg;F)</strong>, then dry on high heat. Health Canada recommends frequent vacuuming and hot-water washing of pet bedding as the backbone of non-chemical flea control.</li>
          <li><strong>Run plug-in flea traps.</strong> A light-and-warmth trap with a sticky pad kills adult fleas overnight and doubles as your progress meter &mdash; falling counts week over week mean the campaign is working. Place one per affected room, at floor level, away from competing light.
            <div className="my-3"><BuyLink tag={AMZ_TAG} search="flea trap plug in">Check plug-in flea traps on Amazon &rarr;</BuyLink></div>
          </li>
          <li><strong>Consider a home flea spray for cracks and pet zones.</strong> A household flea spray with an insect growth regulator (IGR) interrupts the egg-to-adult pipeline in carpets and baseboards. Choose a product registered for indoor domestic use in your jurisdiction, follow the label exactly &mdash; especially re-entry times and keeping cats off treated surfaces until dry &mdash; and treat it as a supplement to vacuuming, never a replacement. Which IGR you are buying matters more than the kill claim on the front of the bottle, and we sorted the Canadian options in <Link href="/blog/best-flea-spray-for-home-canada">our guide to home flea sprays in Canada</Link>.
            <div className="my-3"><BuyLink tag={AMZ_TAG} search="flea spray for home">Check home flea sprays on Amazon &rarr;</BuyLink></div>
          </li>
          <li><strong>Steam-clean carpets if you can.</strong> Heat and moisture kill larvae and flush pupae; it is the strongest non-chemical option for heavily infested rooms.</li>
          <li><strong>Treat the pet &mdash; through your vet.</strong> An untreated animal re-seeds the home continuously. Your veterinarian will match a flea product to the species, age, and weight of each animal; never apply a dog product to a cat.</li>
        </ul>
        <p>What is deliberately missing from that list is a flea bomb, and that omission is the point: a total-release fogger drops insecticide onto open floor, which is exactly where the eggs, larvae and pupae are not. We explain why the aerosol misses the 95% &mdash; and what to spend the money on instead &mdash; in <Link href="/blog/best-flea-bomb-canada">the honest verdict on flea bombs in Canada</Link>.</p>
        <p><strong>Expect the process to take 2 to 8 weeks.</strong> Flea pupae are shielded inside their cocoons from vacuums and sprays alike, and they can sit dormant for weeks to months before hatching. Seeing a few new fleas in weeks two through four is normal and does not mean failure &mdash; keep vacuuming and keep the traps running until counts hit zero for two consecutive weeks. If bites continue past two months of disciplined effort, or the infestation spans multiple units in a shared building, a licensed pest control professional is the right next call &mdash; and to be transparent, that is not us: BuzzSkito treats mosquitoes and ticks only, so this recommendation is a genuine referral with nothing to sell you.</p>

        <h2 id="easier-bed-bugs-or-fleas">Which is easier to get rid of: bed bugs or fleas?</h2>
        <p><strong>Fleas, by a wide margin.</strong> A flea infestation usually clears in two to eight weeks with daily vacuuming, hot-water washing, and vet-directed treatment of the pet, for a cost measured in tens of dollars. Bed bugs live in the structure rather than on an animal, resist many over-the-counter sprays, and typically need professional heat or a multi-visit chemical programme.</p>
        <p>The reason is not that bed bugs are tougher insects. It is that a flea infestation has a <strong>host you can treat</strong>. Remove the blood supply by treating the dog or cat, and the whole population starves on a predictable schedule. Bed bugs have no equivalent pressure point &mdash; the host is you, you cannot be treated, and the bugs are distributed through furniture and building voids rather than concentrated in pet bedding.</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[560px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <caption className="sr-only">Fleas compared with bed bugs on eradication difficulty, timeline, cost, and failure mode</caption>
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Factor</th>
                <th className="px-3 py-2 text-left">Fleas</th>
                <th className="px-3 py-2 text-left">Bed bugs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Where the population lives</td><td className="px-3 py-2">On the pet and in carpet, floor cracks, pet bedding</td><td className="px-3 py-2">In mattress seams, frames, headboards, baseboards, wall voids</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">What breaks the cycle</td><td className="px-3 py-2">Treating the host animal &mdash; the population starves</td><td className="px-3 py-2">Nothing equivalent; the host is you</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Typical DIY outcome</td><td className="px-3 py-2">Usually successful with discipline</td><td className="px-3 py-2">Frequently fails; partial treatment can scatter the population</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Typical timeline</td><td className="px-3 py-2">2&ndash;8 weeks</td><td className="px-3 py-2">Weeks to months, usually across multiple professional visits</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Typical cost</td><td className="px-3 py-2">Tens of dollars, plus vet-prescribed pet product</td><td className="px-3 py-2">Hundreds to thousands for professional treatment</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Insecticide resistance</td><td className="px-3 py-2">Present but manageable; IGRs remain effective</td><td className="px-3 py-2">Widespread pyrethroid resistance via kdr mutations</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Biggest failure mode</td><td className="px-3 py-2">Stopping at week three when pupae are still hatching</td><td className="px-3 py-2">Relying on a retail spray or fogger and missing harbourage</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Health risk</td><td className="px-3 py-2">Rare flea-borne illness per the CDC; itching and scratch infection are the everyday risk</td><td className="px-3 py-2">Not known to transmit disease (CDC, EPA); sleep loss and anxiety are the real burden</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>One rule applies to both, from a US federal authority.</strong> The EPA warns that total-release foggers &mdash; bug bombs &mdash; are ineffective against bed bugs, because the aerosol never reaches the cracks where the insects actually sit, and that they carry real fire and inhalation hazards when misused. That is the same mechanism that makes flea bombs a poor buy, which we set out at length in <Link href="/blog/best-flea-bomb-canada">the honest verdict on flea bombs in Canada</Link>. If you are in the US and pricing bed bug work, our Canadian <Link href="/blog/bed-bug-treatment-cost-canada">bed bug treatment cost breakdown</Link> and <Link href="/blog/how-to-get-rid-of-bed-bugs-canada">bed bug removal guide</Link> still explain what you are paying for, even where the dollar figures and product registrations differ.</p>

        <h2 id="biting-me-at-night">What is biting me at night, if it&rsquo;s not bed bugs?</h2>
        <p><strong>The usual answers are bird or rodent mites, fleas from wildlife, scabies, or something that is not a bite at all.</strong> A thorough mattress inspection that turns up no faecal spots, no shed skins, and no live bug is strong evidence against bed bugs &mdash; and the correct response is to widen the differential rather than spray the bedroom again.</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[620px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <caption className="sr-only">Differential diagnosis for night-time bites when no bed bugs are found</caption>
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Cause</th>
                <th className="px-3 py-2 text-left">What it feels and looks like</th>
                <th className="px-3 py-2 text-left">The giveaway</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Bird or rodent mites</td><td className="px-3 py-2">Pinprick itching, often on the torso and arms, worse at night; almost nothing visible</td><td className="px-3 py-2">A bird nest in an eave, vent, or chimney, or a rodent nest in a wall &mdash; mites disperse when the animal leaves or dies</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Fleas from wildlife</td><td className="px-3 py-2">Ankle and lower-leg clusters, instant itch</td><td className="px-3 py-2">Raccoons, squirrels, or feral cats under a deck, porch, or crawlspace &mdash; no pet required</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Scabies</td><td className="px-3 py-2">Relentless night-time itch, thin burrow tracks, wrists, finger webs, waistline</td><td className="px-3 py-2">Spreads person to person, not room to room; diagnosed and treated by a clinician, not by pest control</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Carpet beetle larvae</td><td className="px-3 py-2">Itchy bumpy rash where skin met bedding or clothing</td><td className="px-3 py-2">Not bites at all &mdash; a reaction to the larval hairs; look for shed larval skins in closets and under furniture</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Chiggers</td><td className="px-3 py-2">Intense itch at sock lines, waistbands, behind knees, starting hours after being outdoors</td><td className="px-3 py-2">Outdoor exposure only; they never establish in a house</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">No-see-ums / biting midges</td><td className="px-3 py-2">Burning bites out of proportion to their size, at dusk and dawn</td><td className="px-3 py-2">Near damp soil, marsh, or shoreline; they slip through standard window screening</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Non-arthropod causes</td><td className="px-3 py-2">Generalised itching, dry or flaking skin, no discrete bite marks</td><td className="px-3 py-2">Dry winter air, laundry or detergent residue, fibreglass fibres, medication side effects, contact dermatitis</td></tr>
            </tbody>
          </table>
        </div>
        <p>That last row deserves more weight than it usually gets. <strong>Extension entomologists &mdash; University of Kentucky Entomology, Texas A&amp;M AgriLife&rsquo;s &ldquo;Insects in the City,&rdquo; NC State Extension, and UC ANR in California &mdash; all report that a substantial share of &ldquo;invisible biting&rdquo; complaints turn out to have no insect cause at all.</strong> Their standard advice is the same everywhere: collect the specimen. Tape a suspected insect to a card or drop it in a sealed bag, and take it to a county extension office (US) or a public health unit or licensed pest professional (Canada) for identification before anyone treats anything. Repeated insecticide application against an unidentified biter exposes the household to pesticide for no benefit. If no arthropod is ever produced and the itching persists, that is a conversation for a healthcare provider &mdash; skin and systemic conditions cause night-time itching far more often than mystery insects do.</p>
        <p>Our own comparison guides for the near-neighbours: <Link href="/blog/bugs-that-look-like-bed-bugs-canada">bugs that look like bed bugs</Link>, <Link href="/blog/red-ticks-and-clover-mites">clover mites and other tiny red specks</Link>, <Link href="/blog/how-to-get-rid-of-carpet-beetles-canada">carpet beetles</Link>, and <Link href="/blog/chigger-bites">chiggers</Link>.</p>

        <h2 id="bite-allergy">When is a bite reaction actually an allergy?</h2>
        <p><strong>When the reaction outgrows the bite.</strong> Ordinary bites itch and fade. An allergic response produces swelling well beyond the puncture, crops of persistent itchy bumps, hives spreading to skin that was never bitten, or &mdash; rarely, and as an emergency &mdash; facial or throat swelling and difficulty breathing. The pattern, not the pest, is what distinguishes them.</p>
        <p>Reactions to biting insects sit on a spectrum:</p>
        <ul>
          <li><strong>Ordinary local reaction.</strong> A bump a few millimetres across, itchy for a few days. This is normal and needs no more than cold compresses and not scratching.</li>
          <li><strong>Large local reaction.</strong> Swelling several centimetres across, sometimes firm and warm, lasting up to a week. Uncomfortable but not dangerous in itself &mdash; though it can be hard to tell apart from early infection, which is why spreading redness, warmth, and pus are worth a clinician&rsquo;s look.</li>
          <li><strong>Papular urticaria.</strong> Recurring crops of intensely itchy bumps that persist for weeks and appear in batches, sometimes on skin bitten long before. It is a delayed hypersensitivity pattern, is especially common in children, and is well recognised by dermatologists &mdash; parents often assume it means fresh bites every night when it does not.</li>
          <li><strong>Systemic reaction.</strong> Hives well away from the bites, vomiting, dizziness, throat tightness, breathing difficulty. Rare with biting insects compared with stinging insects such as bees and wasps, but a medical emergency &mdash; call emergency services.</li>
        </ul>
        <p><strong>Where the allergy authorities land.</strong> The Asthma and Allergy Foundation of America treats biting-insect allergy as a category in its own right and describes usual management as an oral antihistamine plus a topical corticosteroid for the itch, with epinephrine reserved for the rare systemic reaction. The American College of Allergy, Asthma &amp; Immunology is the body to consult on whether allergy evaluation is warranted &mdash; testing for biting insects is far less standardised than for stinging insects, so diagnosis leans heavily on history. The American Academy of Dermatology&rsquo;s guidance on bite care is the mainstream reference for the skin side, and in Canada, provincial public health units publish the equivalent. <strong>None of this is medical advice</strong> &mdash; it is a map of who to ask. Bring the pattern, the timeline, and where on your body the bites appear to whoever you see; that is the information that actually narrows it down.</p>

        <h2 id="species-us-canada">Which flea and bed bug species bite people in the US and Canada?</h2>
        <p>Most guides say &ldquo;the cat flea&rdquo; and stop. That is correct for a home with a pet in Toronto or Ohio, and incomplete for a reader in New Mexico or Honolulu. The CDC names several flea species that bite people in the United States, and geography decides which ones matter to you.</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[640px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <caption className="sr-only">Flea and bed bug species that bite people in the United States and Canada</caption>
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Species</th>
                <th className="px-3 py-2 text-left">Common name</th>
                <th className="px-3 py-2 text-left">Where it matters</th>
                <th className="px-3 py-2 text-left">Why you would care</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold"><em>Ctenocephalides felis</em></td><td className="px-3 py-2">Cat flea</td><td className="px-3 py-2">Everywhere in the US and Canada</td><td className="px-3 py-2">The overwhelming majority of household flea cases, on cats and dogs alike</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold"><em>Ctenocephalides canis</em></td><td className="px-3 py-2">Dog flea</td><td className="px-3 py-2">Across North America, far less common than the cat flea</td><td className="px-3 py-2">Named on the CDC&rsquo;s fleas page; treated the same way as the cat flea</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold"><em>Pulex irritans</em></td><td className="px-3 py-2">Human flea</td><td className="px-3 py-2">Rare in modern housing on either side of the border</td><td className="px-3 py-2">The species behind the myth that fleas live on people &mdash; it does not infest hair</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold"><em>Xenopsylla cheopis</em></td><td className="px-3 py-2">Oriental rat flea</td><td className="px-3 py-2">Wherever commensal rats are established, including US port cities</td><td className="px-3 py-2">Named by the CDC; historically the vector of concern for murine typhus and plague</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold"><em>Oropsylla montana</em></td><td className="px-3 py-2">Ground/rock squirrel flea</td><td className="px-3 py-2">Rural western US &mdash; New Mexico, Arizona, Colorado, California</td><td className="px-3 py-2">The CDC identifies it as the primary flea vector of plague to people in the US and notes it readily bites humans</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold"><em>Cimex lectularius</em></td><td className="px-3 py-2">Common bed bug</td><td className="px-3 py-2">Throughout the US and Canada</td><td className="px-3 py-2">The bed bug in essentially all Canadian cases and most US ones</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold"><em>Cimex hemipterus</em></td><td className="px-3 py-2">Tropical bed bug</td><td className="px-3 py-2">Florida (re-established ~2015) and Honolulu, Hawaii (2009, 2019)</td><td className="px-3 py-2">Carries kdr resistance mutations &mdash; the mechanistic reason a drugstore pyrethroid spray can fail outright</td></tr>
            </tbody>
          </table>
        </div>
        <p>One more the tropics add: <strong>tungiasis</strong>, caused by the burrowing sand flea, in which a female flea embeds in the skin of the foot. It is not acquired in the continental US or Canada but is a genuine travel risk in parts of the Caribbean, Latin America, sub-Saharan Africa, and South Asia, and the CDC covers it under travellers&rsquo; health. A painful, itchy nodule with a dark central point on the foot after tropical travel is a reason to see a healthcare provider rather than to dig at it.</p>

        <h2 id="disease-geography">Where flea-borne illness actually occurs in the US and Canada</h2>
        <p>The FAQ above lists the diseases the CDC associates with fleas. What most pages leave out is <em>where</em> &mdash; and geography changes how much any of it should worry you.</p>
        <ul>
          <li><strong>Flea-borne (murine) typhus.</strong> Per the CDC, US cases concentrate in <strong>California, Texas, and Hawaii</strong>. The California Department of Public Health describes it as endemic in <strong>Los Angeles and Orange counties</strong>; both California and Texas health departments have reported rising case counts in recent years, and the CDC issued updated clinician guidance in 2025. Typical illness is fever, headache, and rash beginning roughly one to two weeks after exposure, and it is treatable &mdash; which is exactly why mentioning recent flea exposure to a clinician matters.</li>
          <li><strong>Plague.</strong> Confined to rural areas of the <strong>western United States</strong> &mdash; principally New Mexico, Arizona, Colorado, and California. The CDC reports an average of roughly seven human cases a year nationally, transmitted mainly by <em>Oropsylla montana</em> from ground squirrels and other rodents. It is treatable with antibiotics when recognised early. It does not occur in eastern North America.</li>
          <li><strong>Cat scratch disease.</strong> The CDC notes it occurs wherever cats and fleas are found &mdash; which is everywhere in both countries. Fleas spread the bacterium between cats; people are typically infected through a scratch or bite from an infected cat rather than from a flea bite.</li>
          <li><strong>Tapeworm (<em>Dipylidium caninum</em>).</strong> Continent-wide, mainly in young children, and only through accidentally swallowing an infected flea.</li>
        </ul>
        <p><strong>In Canada,</strong> these flea-borne illnesses are rare; Health Canada frames fleas primarily as a health-nuisance pest to be controlled promptly through vacuuming, hot-water washing, and veterinary treatment of pets. <strong>In the United States,</strong> the practical takeaway is regional: a Los Angeles or Houston reader with fever and headache in the weeks after flea exposure has a concrete reason to say so to their doctor, and a rural New Mexico reader with a sudden fever after handling a sick animal or being bitten by fleas has an urgent one. This is general information, not medical advice.</p>

        <h2 id="flea-season">When is flea season? US regions vs Canada</h2>
        <p>The two-to-eight-week clearance plan above assumes a season that eventually ends. <strong>In roughly half the United States it does not.</strong> Our own service season runs May to September because that is the reality in the Greater Toronto Area; a reader in Houston or Orlando is working against continuous re-infestation pressure and needs a different mental model for the maintenance phase.</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[600px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <caption className="sr-only">Outdoor flea activity season by North American region</caption>
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Region</th>
                <th className="px-3 py-2 text-left">Outdoor flea activity</th>
                <th className="px-3 py-2 text-left">What it means for your plan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Gulf Coast &amp; Deep South (FL, TX, LA, MS, AL, GA, SC), coastal California, Hawaii</td><td className="px-3 py-2">Year-round &mdash; no winter break</td><td className="px-3 py-2">Clearance still takes 2&ndash;8 weeks, but keep pet treatment and monitoring traps running continuously; wildlife and outdoor pressure never pauses</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Mid-Atlantic, lower Midwest, interior California, Southwest</td><td className="px-3 py-2">Roughly March&ndash;November</td><td className="px-3 py-2">A real but short off-season; the best window to clear an infestation is late autumn to early spring</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Northern tier (MN, WI, MI, OH, CO, Northeast, Pacific Northwest)</td><td className="px-3 py-2">Roughly April&ndash;November</td><td className="px-3 py-2">Behaves much like southern Ontario; outdoor reintroduction stops over winter, so a cleared home tends to stay clear</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Canada (GTA and comparable latitudes)</td><td className="px-3 py-2">Roughly May&ndash;September outdoors</td><td className="px-3 py-2">Peak bites June&ndash;August; a winter infestation is almost always an indoor population, not a new arrival from the yard</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>The exception that applies everywhere:</strong> indoors, fleas do not have a season. A heated home holds the temperature and humidity the life cycle needs all winter, in Winnipeg as much as in Miami. That is why fresh bites in February are not evidence against fleas &mdash; the eggs, larvae, and pupae in your carpet neither know nor care what month it is. What latitude actually changes is the <em>reintroduction</em> rate: how often a new flea comes in from the yard, the wildlife under the deck, or the dog walk.</p>

        <h2 id="epa-vs-pmra">Buying flea and bed bug products: EPA (US) vs PMRA (Canada)</h2>
        <p>The advice earlier on this page to choose &ldquo;a product registered for indoor domestic use in your jurisdiction&rdquo; means two different things depending on which side of the border you are on, and it is worth being concrete about both.</p>
        <ul>
          <li><strong>In the United States,</strong> household insecticides are registered by the <strong>EPA</strong>, and every legal product carries an EPA registration number on the label. For bed bugs specifically, the EPA runs a free <strong>Bed Bug Product Search Tool</strong> listing 300-plus registered products &mdash; the majority available to consumers &mdash; searchable by company, product name, EPA registration number, active ingredient, and where it may be applied. It is the single best way to check that something on a shelf is both legal and appropriate for the surface you intend to treat. The EPA also publishes integrated pest management guidance, and warns explicitly against relying on total-release foggers.</li>
          <li><strong>In Canada,</strong> the equivalent authority is Health Canada&rsquo;s <strong>Pest Management Regulatory Agency (PMRA)</strong>, and legal products carry a Canadian registration number on the label that reads &ldquo;Reg. No. XXXXX P.C.P. Act&rdquo; &mdash; the PCP number. The Canadian product landscape is narrower than the American one &mdash; several actives sold freely in US stores are not registered here &mdash; which is why we keep a separate Canadian buying guide rather than pointing readers at US lists.</li>
        </ul>
        <p><strong>What to look for in either country:</strong> a household flea product whose label names an <strong>insect growth regulator</strong> &mdash; usually <em>(S)-methoprene</em> or <em>pyriproxyfen</em> &mdash; alongside any adulticide. The IGR is what interrupts the egg-to-adult pipeline that makes up roughly 95% of the infestation; the adulticide alone kills the visible 5% and leaves the rest to hatch. Which IGR you are buying matters far more than the kill claim on the front of the bottle.</p>
        <div className="my-3"><BuyLink tag={AMZ_TAG} search="flea spray igr methoprene home">Check IGR flea sprays on Amazon &rarr;</BuyLink></div>
        <p>Our comparison work is written for the Canadian market and priced in Canadian retail &mdash; <Link href="/blog/best-flea-spray-for-home-canada">home flea sprays in Canada</Link> and <Link href="/blog/best-flea-bomb-canada">the flea bomb verdict</Link> &mdash; but the reasoning transfers directly: read the active ingredients, confirm registration with your national regulator (EPA or PMRA), follow the label, and treat any spray as a supplement to vacuuming rather than a substitute for it. For US readers, your county <strong>extension service</strong> &mdash; Texas A&amp;M AgriLife, University of Kentucky Entomology, NC State Extension, UF/IFAS, UC ANR &mdash; publishes free, region-specific flea and bed bug factsheets and will identify a specimen for you, which no retailer will.</p>

        <h2 id="faq">Frequently asked questions</h2>
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

        <div className="not-prose mt-10 rounded-xl border border-brand-200 bg-brand-50 px-5 py-4">
          <p className="text-sm text-brand-900">
            Still not sure which pest is biting? Compare <Link href="/blog/bed-bug-bites" className="font-semibold underline">bed bug bites</Link> and <Link href="/blog/chigger-bites" className="font-semibold underline">chigger bites</Link>, or browse all of our independent research in the{' '}
            <Link href="/pest-product-guides" className="font-semibold underline">BuzzSkito Pest Product Guides</Link>.
          </p>
        </div>

        <AdjacentPestCTA pest="fleas" />
      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Plug-in light flea trap" search="flea trap plug in" label="To confirm fleas" />
    </>
  )
}
