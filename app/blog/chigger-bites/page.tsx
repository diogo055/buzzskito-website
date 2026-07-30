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

const SLUG = 'chigger-bites'
const DATE = '2026-07-19'
const UPDATED = '2026-07-19'
const TITLE = 'Chigger Bites: What They Look Like, How Long They Last & How to Treat Them (2026)'
const META_TITLE = 'Chigger Bites: What They Look Like and How Long'

const FAQS = [
  {
    question: 'What are chigger bites?',
    answer:
      'Chigger bites are itchy red welts left by the larval stage of trombiculid mites — often called chiggers, harvest mites, red bugs, or berry bugs. Only the six-legged larva bites; it is about 0.15–0.3 mm long (roughly 1/150 of an inch), so you almost never see the culprit. The larva does not drink blood. It injects saliva that liquefies skin cells and sips the result through a feeding tube, and it is your immune reaction to that saliva and tube that produces the intense, days-long itch.',
  },
  {
    question: 'What do chigger bites look like?',
    answer:
      'Chigger bites typically look like clusters of small red welts, pimple-like bumps, or hive-like patches, sometimes with a tiny blister or a bright red dot in the centre. The giveaway is the pattern: they concentrate where clothing presses against skin or where skin folds — ankles and sock lines, the backs of the knees, waistbands, the groin, and armpits. Bites on exposed forearms with no clustering are more typical of mosquitoes or no-see-ums than chiggers.',
  },
  {
    question: 'How long do chigger bites last?',
    answer:
      'Most chigger bites itch hardest for the first 24–48 hours and then heal over 1–2 weeks. Severe reactions or bites that get scratched open can take up to 3 weeks to fully settle, and scratching also raises the risk of a secondary skin infection. Itching usually starts 3–6 hours after the larva begins feeding, which is why people rarely feel anything while they are still outdoors.',
  },
  {
    question: 'What is the fastest way to get relief from chigger bites?',
    answer:
      'Wash the area with soap and warm water as soon as possible — this removes any larvae still feeding — then use cool compresses and an over-the-counter anti-itch product such as calamine lotion or an anti-itch cream, following the label directions. Some people also find oral antihistamines helpful; a pharmacist can advise what is appropriate for you. Try not to scratch: broken skin is the main route to infection, which prolongs healing. Nothing removes a chigger bite instantly — the goal is controlling the itch while the reaction runs its course.',
  },
  {
    question: 'Do chiggers burrow into your skin?',
    answer:
      'No — this is the most persistent chigger myth. Chigger larvae feed from the surface of the skin, usually at a hair follicle or pore, through a straw-like tube of hardened saliva called a stylostome. They do not burrow under the skin, do not lay eggs in skin, and are usually scratched off or drop away within hours to a couple of days. The red dot people mistake for a burrowed chigger is the stylostome and the inflammation around it, not the mite.',
  },
  {
    question: 'Does nail polish kill chiggers in your skin?',
    answer:
      'No. The nail-polish remedy — painting bites to “suffocate” the chigger — is folklore built on the burrowing myth. Because chiggers do not burrow into skin, there is nothing under the welt to suffocate; by the time most bites start itching, the larva has already been scratched off or has dropped away. Nail polish does nothing for the itch and puts solvents on irritated skin. Soap and water, cool compresses, and a labelled anti-itch product are the evidence-based route.',
  },
  {
    question: 'Do chigger bites spread disease?',
    answer:
      'In North America, chiggers are not known to transmit disease to humans, per the CDC. That is different from some chigger species in parts of Asia and the Pacific, which can transmit scrub typhus. The realistic risk from North American chigger bites is a secondary bacterial skin infection from scratching — watch for spreading redness, warmth, pus, or red streaks, and see a healthcare provider if they appear.',
  },
  {
    question: 'Are there chiggers in Canada?',
    answer:
      'Barely. Chiggers thrive where ground temperatures sit around 25–30°C (77–86°F) for long stretches, and they go inactive below about 16°C (60°F) — so cold winters and short summers keep established populations rare across most northern regions. Suspected “chigger bites” in colder climates very often turn out to be flea bites, bed bug bites, or no-see-um bites instead, which is worth ruling out because the fixes are completely different.',
  },
  {
    question: 'Why do chigger bites itch so much, especially at night?',
    answer:
      'The itch is an allergic-type reaction to the digestive enzymes in chigger saliva and to the stylostome feeding tube left in the skin, and it is famously out of proportion to the size of the bite. Itching often feels worse at night for the same reasons many itchy conditions do: skin warms under blankets, there are fewer distractions, and the body’s natural anti-inflammatory signals dip overnight. Cool compresses before bed and a labelled anti-itch product can take the edge off.',
  },
  {
    question: 'Do chiggers get in your bed or live on you?',
    answer:
      'No. Chiggers are picked up outdoors from vegetation, feed once for a matter of hours to a few days at most, and then drop off — they do not infest beds, carpets, or people the way bed bugs or fleas do. If you are waking up with fresh bites night after night, chiggers are the wrong suspect: check the mattress seams for bed bugs and pets for fleas. New welts appearing days after time outdoors are usually old chigger bites reaching peak itch, not new bites.',
  },
  {
    question: 'What temperature kills chiggers on clothing?',
    answer:
      'Washing clothes in hot water — about 52°C (125°F) or hotter — kills any chigger larvae still on the fabric, and a hot dryer cycle adds insurance. After time in chigger territory, bag your field clothes and wash them hot rather than tossing them on a chair, and shower with soap within an hour of coming indoors, scrubbing sock lines, waistband, and skin folds where larvae wander before settling in to feed.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description:
    'What chigger bites look like, why they cluster at ankles and waistbands, how long they last, treatment that actually calms the itch, and the skin-burrowing myth debunked. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('chigger-bites')

export default function ChiggerBitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'An identification and treatment guide to chigger bites: what the welts look like, where they cluster on the body, how they compare to mosquito and bed bug bites, and how to calm the itch.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Chigger Bites', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Chigger Bites</span>
          </nav>
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-3">Bite Identification &middot; Independent Research</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Chigger Bites: What They Look Like, How Long They Last &amp; How to Treat Them
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            The nearly invisible mite behind some of the itchiest bites in the grass &mdash; where the welts cluster, how to tell them from mosquito and bed bug bites, the burrowing myth debunked, and what genuinely calms the itch.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-brand-300 text-sm">
            <span>Published July 19, 2026 &middot; 10 min read</span>
            <FreshnessStamp date={UPDATED} tone="dark" />
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-14 prose-brand">

        <AuthorByline datePublished={DATE} dateModified={UPDATED} />

        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-base text-gray-800 leading-relaxed">
            Chigger bites are clusters of intensely itchy red welts or pimple-like bumps left by the microscopic larvae of trombiculid mites, concentrated where clothing fits tight or skin folds &mdash; ankles, sock lines, waistbands, behind the knees, and the groin. Chiggers do not burrow into skin and, in North America, are not known to spread disease; the itch comes from digestive saliva the larva injects while feeding from the surface.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Chigger larvae measure about 0.15&ndash;0.3 mm (roughly 1/150 in) &mdash; effectively invisible without a magnifier.</li>
            <li>Itching typically starts 3&ndash;6 hours after the bite and peaks around 24&ndash;48 hours.</li>
            <li>Most bites heal in 1&ndash;2 weeks; scratched-open bites can take up to 3 weeks and risk infection.</li>
            <li>Chiggers do not burrow &mdash; they feed through a surface tube (stylostome), then drop off within hours to days.</li>
            <li>Per the CDC, chiggers in North America are not known to transmit disease to humans.</li>
            <li>Chiggers thrive at ground temperatures of 25&ndash;30&deg;C (77&ndash;86&deg;F) and go inactive below about 16&deg;C (60&deg;F) &mdash; the reason they are rare in cold climates.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito &middot; licensed mosquito &amp; tick control professionals</p>
        </div>

        <SpecialistDisclosure pest="chiggers" />

        <p>Few bites cause as much confusion as chigger bites: the culprit is too small to see, the itch shows up hours after you have left the grass, and half the folk wisdom about them &mdash; burrowing mites, nail-polish cures &mdash; is simply wrong. This guide covers what chigger bites actually look like, how to separate them from the mosquito, bed bug, and flea bites they get mistaken for, how long the itch really lasts, and the treatment and prevention steps backed by public health guidance rather than folklore.</p>

        <p className="text-sm text-gray-600 italic border-l-4 border-gray-200 pl-4">This is general information, not medical advice. If you are worried about a bite reaction, signs of infection, or symptoms that do not fit the patterns described here, contact a healthcare provider. In an emergency, call your local emergency number.</p>

        <h2>What are chigger bites?</h2>
        <p>Chigger bites are the itchy welts left by the <strong>larval stage of trombiculid mites</strong> &mdash; tiny relatives of ticks and spiders known regionally as chiggers, harvest mites, red bugs, or berry bugs. Only the larva bites. It is about <strong>0.15&ndash;0.3 mm long (roughly 1/150 of an inch)</strong>, reddish-orange, and six-legged, which makes it effectively invisible on skin without magnification &mdash; a big part of why the bites feel so mysterious.</p>
        <p>Contrary to popular belief, chiggers do not drink blood. The larva attaches at a pore or hair follicle, injects saliva containing digestive enzymes that break down skin cells, and sips the liquefied tissue through a hardened tube of saliva called a <strong>stylostome</strong>. Your immune system reacts to the saliva and the stylostome, and that reaction &mdash; not the mechanical bite &mdash; produces the outsized, days-long itch. After feeding for anywhere from a few hours to a few days, the larva drops off, moults, and never bites again; nymph and adult trombiculid mites eat soil insects and their eggs, not people.</p>

        <h2>What do chigger bites look like?</h2>
        <p>Chigger bites usually appear as <strong>clusters of small red welts, pimple-like bumps, or hive-like patches</strong>, each often 1&ndash;10 mm (up to about 3/8 in) across, sometimes with a tiny central blister or a bright red dot &mdash; the stylostome &mdash; at the middle. Because the larvae wander until something stops them, the distribution on your body is the single best identification clue. Chiggers pile up where clothing presses against skin or where skin touches skin:</p>
        <ul>
          <li><strong>Ankles and sock lines</strong> &mdash; the classic location, since larvae climb aboard from grass at ground level.</li>
          <li><strong>Backs of the knees</strong> and along the calves.</li>
          <li><strong>Waistbands and underwear lines</strong>, where elastic stops the larva&rsquo;s upward walk.</li>
          <li><strong>The groin and armpits</strong>, and other warm skin folds.</li>
          <li>In young boys, bites around the genitals can cause notable swelling and irritation &mdash; sometimes called summer penile syndrome &mdash; which is worth a call to a healthcare provider.</li>
        </ul>
        <p>The itching typically begins <strong>3&ndash;6 hours after the larva starts feeding</strong>, which is why people connect the welts to &ldquo;something in the house&rdquo; rather than the afternoon they spent in tall grass. New-feeling welts a day later are usually earlier bites reaching peak inflammation, not new bites.</p>

        <h2>Chigger bites vs mosquito bites vs bed bug bites: how do you tell them apart?</h2>
        <p>The three get confused constantly, but pattern, location, and timing separate them reliably. Here is the side-by-side:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Feature</th>
                <th className="px-3 py-2 text-left">Chigger bites</th>
                <th className="px-3 py-2 text-left">Mosquito bites</th>
                <th className="px-3 py-2 text-left">Bed bug bites</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Appearance</td><td className="px-3 py-2">Small red welts or pimple-like bumps, sometimes tiny central blister</td><td className="px-3 py-2">Puffy, raised welt that flattens over hours</td><td className="px-3 py-2">Flat or raised red bumps, often with a darker centre</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Pattern</td><td className="px-3 py-2">Dense clusters at clothing lines and skin folds</td><td className="px-3 py-2">Scattered, random</td><td className="px-3 py-2">Lines or zigzags of 3&ndash;5 (&ldquo;breakfast, lunch, dinner&rdquo;)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Body location</td><td className="px-3 py-2">Ankles, sock line, waistband, groin, behind knees</td><td className="px-3 py-2">Exposed skin &mdash; arms, legs, neck, face</td><td className="px-3 py-2">Skin exposed while sleeping &mdash; arms, shoulders, neck, back</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">When it itches</td><td className="px-3 py-2">Starts 3&ndash;6 hours after exposure, peaks day 1&ndash;2</td><td className="px-3 py-2">Within minutes</td><td className="px-3 py-2">Often on waking; can be delayed by days</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Where acquired</td><td className="px-3 py-2">Outdoors &mdash; tall grass, weeds, forest edge</td><td className="px-3 py-2">Outdoors, dusk and dawn especially</td><td className="px-3 py-2">Indoors &mdash; bed, couch, travel luggage</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">How long it lasts</td><td className="px-3 py-2">1&ndash;2 weeks (up to 3)</td><td className="px-3 py-2">1&ndash;3 days</td><td className="px-3 py-2">1&ndash;2 weeks</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Culprit visible?</td><td className="px-3 py-2">No &mdash; 0.15&ndash;0.3 mm, drops off</td><td className="px-3 py-2">Yes, briefly</td><td className="px-3 py-2">Yes if you search &mdash; 4&ndash;7 mm, hides near the bed</td></tr>
            </tbody>
          </table>
        </div>
        <p>Two more lookalikes are worth ruling out. <Link href="/blog/flea-bites-on-humans">Flea bites</Link> also cluster at the ankles but come from an indoor source (usually a pet) and continue appearing without any time outdoors. <Link href="/blog/no-see-um-bites">No-see-um bites</Link> come from a biting midge you also cannot see, but they hit exposed skin at dusk rather than under your waistband. And if the bites keep arriving overnight, work through our <Link href="/blog/bed-bug-bites">bed bug bites guide</Link> &mdash; the response to bed bugs is completely different and time-sensitive.</p>

        <h2>How long do chigger bites last?</h2>
        <p>Most chigger bites <strong>itch hardest for the first 24&ndash;48 hours and heal within 1&ndash;2 weeks</strong>. Bites that trigger a stronger immune response, and bites scratched open, can take up to 3 weeks to settle fully. The stylostome &mdash; the feeding tube the larva leaves behind &mdash; keeps provoking the immune system until the skin breaks it down, which is why chigger bites outlast a typical mosquito welt many times over.</p>
        <p>A rough timeline of a normal bite: itching begins 3&ndash;6 hours after exposure, welts and peak itch arrive on day 1&ndash;2, the welt hardens into a papule over days 2&ndash;4, then fades gradually over the following one to two weeks. Redness that is <em>expanding</em> after the first couple of days, growing warmth or pain, or pus are not part of the normal arc &mdash; those point to a secondary infection and a healthcare provider should look at it.</p>

        <h2>How do you treat chigger bites?</h2>
        <p>Treatment has two goals: get any remaining larvae off, then manage the itch while the reaction runs its course. There is no way to erase the welts early &mdash; anyone promising that is selling folklore.</p>
        <ol>
          <li><strong>Shower or wash with soap and warm water</strong> as soon as you realize you have been in chigger territory. This removes larvae that are still wandering or feeding and can prevent additional bites.</li>
          <li><strong>Wash the clothes you were wearing</strong> in hot water &mdash; about 52&deg;C (125&deg;F) or hotter &mdash; and run a hot dryer cycle.</li>
          <li><strong>Cool the itch:</strong> cold compresses or a cool bath calm the histamine response without damaging skin.</li>
          <li><strong>Use an over-the-counter anti-itch product as directed on the label</strong> &mdash; calamine lotion and anti-itch creams are the standard first line, and a pharmacist can point you to an oral antihistamine if the itch is disrupting sleep. Follow label directions; this guide does not replace them.</li>
          <li><strong>Keep fingernails off the welts.</strong> Scratching is the main route to broken skin and bacterial infection, which is the one genuinely concerning complication of North American chigger bites.</li>
        </ol>
        <TopPick tag={AMZ_TAG}
          label="Best for the itch"
          name="Calamine lotion"
          blurb="The classic, pharmacist-recommended first line for chigger itch: it cools and dries the welts and takes the edge off the histamine reaction while the bite runs its course. Cheap, widely stocked, and gentle enough for broken-out skin — apply as directed on the label."
          search="calamine lotion"
          score={8.4}
          pros={['Soothes itch without harsh solvents', 'Inexpensive and widely available', 'Gentle on inflamed, scratched skin']}
          cons={['Needs frequent reapplication', 'Pink residue on skin and clothes', 'Calms the itch — does not shorten the bite']}
        />
        <AffiliateDisclosure />
        <div className="not-prose my-4 flex flex-wrap gap-3">
          <BuyLink tag={AMZ_TAG} search="calamine lotion">Check calamine lotion on Amazon &rarr;</BuyLink>
          <BuyLink tag={AMZ_TAG} search="chigger bite itch relief cream">Check anti-itch creams on Amazon &rarr;</BuyLink>
        </div>
        <p>What <em>not</em> to do: no nail polish, no bleach, no rubbing alcohol scrubs, no &ldquo;suffocating&rdquo; home remedies. All of them descend from the burrowing myth &mdash; debunked below &mdash; and some actively irritate skin that is already inflamed.</p>

        <h2>Do chiggers burrow into your skin?</h2>
        <p><strong>No.</strong> This is the most stubborn myth in all of bite folklore, and it drives most of the bad remedies. Chigger larvae feed <strong>from the surface of the skin</strong>, anchored at a pore or hair follicle, through the stylostome tube. They do not tunnel under skin, do not lay eggs in skin, and cannot live on your body. In fact, by the time the itch peaks, the larva is usually long gone &mdash; scratched off or dropped away after feeding.</p>
        <p>The myth persists because the bite genuinely looks occupied: the stylostome shows as a tiny red or white dot at the centre of the welt, and the itch continues for a week or more, so it <em>feels</em> like something is still in there. What is in there is a protein tube your body is slowly breaking down &mdash; not a mite. This is why the nail-polish trick fails: there is nothing alive under the welt to suffocate. (The mite that actually does burrow is the scabies mite &mdash; a completely different animal with a different rash pattern, and a healthcare provider can distinguish the two.)</p>

        <h2>Where do chiggers live?</h2>
        <p>Chiggers concentrate in <strong>low, damp vegetation where their small-animal hosts travel</strong>: tall grass and weeds, meadow edges, berry patches, orchards, stream banks, forest margins, and the shaggy transition zone where lawn meets brush. Within a property they are patchy &mdash; dense in one shaded, humid pocket and absent 3 m (10 ft) away &mdash; because larvae cluster near where their mother laid eggs and wait on vegetation for a host to brush past.</p>
        <p>Temperature rules their calendar. Larvae are active when ground temperatures run roughly <strong>25&ndash;30&deg;C (77&ndash;86&deg;F)</strong>, slow down below about <strong>16&deg;C (60&deg;F)</strong>, and are killed by sustained cold near <strong>6&deg;C (42&deg;F)</strong>. That makes chiggers overwhelmingly a hot-summer, warm-climate pest: pressure is heaviest across regions with long humid summers, and it thins out fast toward colder latitudes and higher elevations. Across most cold-winter regions &mdash; including nearly all of Canada &mdash; established chigger populations are rare to absent, and suspected &ldquo;chigger bites&rdquo; there usually turn out to be <Link href="/blog/flea-bites-on-humans">fleas</Link>, <Link href="/blog/bed-bug-bites">bed bugs</Link>, or <Link href="/blog/no-see-um-bites">no-see-ums</Link>. Knowing that saves cold-climate readers from treating a yard for a mite that is not there &mdash; and points warm-climate readers at the real habitat: the grassy edges, not the lawn itself.</p>

        <h2>How do you prevent chigger bites?</h2>
        <p>Prevention is about skin coverage, repellent, and a fast post-hike routine &mdash; the same playbook both the <strong>CDC</strong> and <strong>Health Canada</strong> recommend for biting arthropods generally:</p>
        <ul>
          <li><strong>Use a registered insect repellent on exposed skin.</strong> The CDC recommends repellents such as DEET or picaridin; Health Canada&rsquo;s PMRA registers the same actives (picaridin is labelled icaridin in some countries) for the same use. Apply per the label &mdash; concentration and re-application rules vary by product.</li>
          <li><strong>Wear long pants tucked into socks</strong> in grassy or brushy terrain. It looks ridiculous and works brilliantly &mdash; larvae climbing from grass hit treated fabric instead of skin.</li>
          <li><strong>Consider permethrin-treated clothing or gaiters.</strong> Permethrin-treated fabric kills or repels mites, ticks, and mosquitoes on contact and survives multiple washes. Pre-treated garments and gaiters are the simple route; check what is registered and available where you live before buying treatment kits.</li>
          <li><strong>Stay on the centre of trails</strong> and avoid sitting directly on grass or logs in prime habitat during warm months.</li>
          <li><strong>Shower with soap within an hour of coming indoors</strong>, scrubbing ankles, waistband, and skin folds &mdash; larvae often wander for a while before feeding, so a fast shower prevents a share of bites outright.</li>
          <li><strong>Bag and hot-wash field clothes</strong> at 52&deg;C (125&deg;F) or hotter rather than re-wearing them.</li>
        </ul>
        <div className="not-prose my-4">
          <BuyLink tag={AMZ_TAG} search="insectguard permethrin gaiters">Check permethrin-treated gaiters on Amazon &rarr;</BuyLink>
        </div>

        <h2>When should you see a doctor about chigger bites?</h2>
        <p>Chigger bites in North America are a comfort problem, not a disease problem &mdash; per the CDC, North American chiggers are not known to transmit disease to humans. But some situations do warrant medical attention. See a healthcare provider if:</p>
        <ul>
          <li><strong>Signs of infection appear</strong> &mdash; spreading redness, increasing warmth or pain, swelling, pus, or red streaks tracking away from a bite.</li>
          <li><strong>You develop fever</strong> or feel generally unwell in the days after the bites.</li>
          <li><strong>Welts are still prominent after 2&ndash;3 weeks</strong>, keep spreading, or blister severely.</li>
          <li><strong>A child has significant genital swelling or pain</strong> after playing in grass (possible summer penile syndrome).</li>
          <li><strong>The rash pattern does not fit</strong> &mdash; burrow-like tracks between fingers or intense whole-body night itching point toward scabies, which needs a diagnosis and prescription treatment.</li>
          <li><strong>Any signs of a serious allergic reaction</strong> &mdash; trouble breathing, swelling of the face or throat, dizziness &mdash; are an emergency: call your local emergency number.</li>
          <li><strong>You were bitten by chiggers while travelling in Asia or the Pacific</strong> and develop fever, headache, or a dark scab-like sore at a bite &mdash; mention the travel to your provider, since scrub typhus exists in those regions.</li>
        </ul>
        <p>And if new bites keep appearing without time outdoors, stop treating it as a chigger problem: work through the <Link href="/blog/bed-bug-bites">bed bug</Link> and <Link href="/blog/flea-bites-on-humans">flea</Link> checklists, and if an indoor infestation is confirmed, our <Link href="/pest-control-cost-canada">pest control cost guide</Link> shows what professional treatment typically runs.</p>

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

        <h2>Related bite guides</h2>
        <ul>
          <li><Link href="/blog/flea-bites-on-humans">Flea Bites on Humans &mdash; Identification &amp; Treatment</Link></li>
          <li><Link href="/blog/bed-bug-bites">Bed Bug Bites &mdash; How to Identify Them &amp; What to Do Next</Link></li>
          <li><Link href="/blog/no-see-um-bites">No-See-Um Bites &mdash; The Other Invisible Biter</Link></li>
        </ul>

        <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
          <p className="text-sm text-brand-900">
            Chiggers are one pest where the right products &mdash; repellent, treated clothing, and honest itch relief &mdash; beat any service call.{' '}
            <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">Browse all of our independent pest product research &rarr;</Link>
          </p>
        </div>

      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Calamine lotion" search="calamine lotion" label="Best for the itch" />
    </>
  )
}
