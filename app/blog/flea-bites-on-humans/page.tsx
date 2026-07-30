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

        <h2>What do flea bites look like on humans?</h2>
        <p>Flea bites on humans look like <strong>small red bumps in clusters, usually on the ankles and lower legs, each often ringed by a lighter red halo</strong>. Individual bites are small &mdash; about 1&ndash;3 mm (roughly 1/8 in) &mdash; with a tiny darker puncture point in the centre where the flea fed. Unlike a mosquito welt, a flea bite usually stays a firm, discrete bump rather than puffing up, though people who are sensitized to flea saliva can develop larger hives or wheals around each bite.</p>
        <p>Three features together make the pattern distinctive:</p>
        <ul>
          <li><strong>Grouping.</strong> Bites come in clusters or short lines of two to three, because a single flea probes and feeds more than once before leaving.</li>
          <li><strong>The halo.</strong> A reddened ring around a central point is typical of flea bites and less common with mosquito bites.</li>
          <li><strong>Low placement.</strong> Fleas launch from carpets and floor-level bedding, and a cat flea&rsquo;s vertical jump tops out around 20 cm (8 in) &mdash; so bites concentrate on ankles, shins, and calves. Bites around the waist, behind the knees, or on forearms usually mean floor-sitting or close pet contact.</li>
        </ul>
        <p>The itch starts <strong>within minutes</strong>. That fast reaction is one of the most useful tells, because the other common indoor biter &mdash; the bed bug &mdash; often produces a reaction delayed by hours or days.</p>

        <h2>Flea bites vs bed bug bites vs mosquito bites: how do you tell?</h2>
        <p>The quickest separation is <strong>where the bites are, when they itch, and what pattern they form</strong>. Fleas hit the lower legs any time of day; bed bugs hit skin exposed during sleep; mosquitoes hit any exposed skin, mostly around dawn and dusk. Here is the full side-by-side:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
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

        <h2>Can fleas live on humans?</h2>
        <p><strong>No.</strong> The flea species in homes across North America &mdash; overwhelmingly the cat flea (<em>Ctenocephalides felis</em>) &mdash; cannot live or breed on people. Human skin lacks the dense fur a flea needs to grip, hide, and stay warm, so a flea that jumps onto you will typically <strong>bite a few times and leave</strong>, dropping back to the carpet or bedding where the actual population lives. Fleas do not take up residence in human hair the way head lice do.</p>
        <p>A so-called human flea (<em>Pulex irritans</em>) does exist, but it is rare in modern homes with modern hygiene. If you are waking up to fresh bites every day, the correct mental model is not &ldquo;fleas are living on me&rdquo; &mdash; it is that eggs, larvae, and pupae are developing in your carpets, floor cracks, and pet resting spots, and newly hatched adults are jumping up to feed. That distinction matters, because it means <strong>treating the environment, not your body, is what stops the bites</strong>.</p>

        <h2>How long do flea bites last?</h2>
        <p>Most flea bites <strong>fade within a few days to a week</strong>, and in more sensitive people the itch and redness can linger up to <strong>two weeks</strong>. The single biggest factor in healing time is whether you scratch: broken skin heals slower and opens the door to secondary bacterial infection, which shows up as spreading redness, warmth, swelling, or pus and should be assessed by a healthcare provider.</p>
        <p>Timing is also diagnostic. A batch of bites that heals and is never followed by new ones was likely a one-off exposure &mdash; a visit to an infested house, a flea hitchhiking in on clothing. <strong>New bites appearing every day or two</strong> means an active breeding population at home, and no amount of bite care will outpace it until the infestation itself is dealt with (see the home treatment plan below).</p>

        <h2>How do you treat flea bites?</h2>
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

        <h2>Why am I getting bitten but not my partner?</h2>
        <p>Usually because <strong>you react and they don&rsquo;t</strong> &mdash; not because fleas find you tastier. Sensitivity to flea saliva varies enormously between people: the same number of bites can raise angry, itchy welts on one person and leave no visible mark on another. In many &ldquo;why only me?&rdquo; households, both partners are being bitten and only one shows it.</p>
        <p>Genuine exposure differences stack on top of that. Whoever spends more time at floor level &mdash; playing with kids, working out on a mat, napping on the couch the cat prefers &mdash; simply meets more fleas. The person whose side of the bed the dog sleeps on collects more bites. Beyond that, some research suggests fleas and other biting insects orient to body heat, carbon dioxide, and skin chemistry that differ between individuals, but the evidence is limited and no reliable &ldquo;flea-proof body type&rdquo; has been demonstrated. The practical takeaway: one reactive person in a home is enough to confirm a flea problem &mdash; do not wait for everyone to itch.</p>

        <h2>How can you tell if your home has fleas?</h2>
        <p>The fastest confirmation comes from <strong>checking the pet, then the carpet</strong>. Fleas spend most of their adult lives on the host animal, and the immature stages develop wherever the animal rests. Work through this five-minute check:</p>
        <ul>
          <li><strong>Flea-comb the pet over white paper.</strong> Use a fine-toothed flea comb along the lower back, base of the tail, neck, and belly. Look for live fleas &mdash; fast, reddish-brown, 1&ndash;3 mm (about 1/8 in) &mdash; and for black, pepper-like specks falling onto the paper.</li>
          <li><strong>Do the wet-paper test.</strong> Smear a speck on a damp paper towel. Flea dirt turns <strong>reddish-brown</strong>, because it is digested blood. Ordinary dirt stays black-grey. This single test separates &ldquo;maybe fleas&rdquo; from &ldquo;definitely fleas.&rdquo;</li>
          <li><strong>Walk the white-sock test.</strong> Put on long white socks and shuffle slowly through carpeted rooms and past pet bedding for a few minutes. Adult fleas jump onto the moving warm target and stand out against white fabric.</li>
          <li><strong>Check pet bedding and favourite resting spots.</strong> Flea dirt, tiny white eggs (about 0.5 mm / 1/50 in), and larvae accumulate exactly where the animal sleeps.</li>
          <li><strong>Set an overnight flea trap.</strong> A plug-in light trap in the room where bites happen gives you an objective count by morning &mdash; and a baseline to measure your clean-up against.</li>
        </ul>
        <p>No pet? You can still have fleas. Wildlife hosts &mdash; squirrels, raccoons, feral cats &mdash; seed fleas near or under homes, and dormant pupae in an apartment can survive for months after a previous tenant&rsquo;s pets are gone, hatching in a wave when new occupants move in and supply warmth and vibration.</p>

        <h2>How do you get rid of fleas at home?</h2>
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

        <h2>Frequently asked questions</h2>
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

      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Plug-in light flea trap" search="flea trap plug in" label="To confirm fleas" />
    </>
  )
}
