import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import CTASection from '@/components/CTASection'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'bed-bug-stains-poop-droppings-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// The EVIDENCE half of the bed-bug cluster: "I found a mark — is this a bed bug?"
// The five-sign inspection protocol (how to search a hotel room, used furniture,
// a new apartment) stays on how-to-check-for-bed-bugs-canada. This page only does
// stains and droppings: what they are, the differential, and what to do next.
const TITLE = 'Bed Bug Stains and Droppings — What Bed Bug Poop Actually Looks Like, and the Five Marks It Gets Confused With'
const META_TITLE = 'Bed Bug Poop and Stains: How to Tell for Sure'

const FAQS = [
  {
    question: 'What does bed bug poop look like?',
    answer: 'Like someone touched the fabric with a fine black or very dark brown felt marker. Bed bug droppings are digested blood, and they come out as a liquid that dries into a spot roughly the size of a ballpoint pen tip. On absorbent fabric — a sheet, a mattress seam, a fabric headboard — the liquid wicks outward before it dries, so the edges look feathered and bled rather than sharp. On a hard surface such as a wooden bed frame, a metal slat, or painted trim, there is nothing to absorb it, so the same droplet dries into a slightly raised, glossy black speck you can feel with a fingernail. They almost always appear in clusters rather than singly, because bed bugs defecate where they rest, not where they feed.',
  },
  {
    question: 'How do I test whether a black spot is bed bug droppings?',
    answer: 'Dab it with a damp white cloth or a wet cotton swab and watch what happens. A bed bug faecal spot rehydrates and smears a rusty reddish-brown into the cloth, because it is digested blood — that colour, on a white cloth, is the single most useful confirmation available to a homeowner. Dried human blood on a sheet tends to stay a darker red-brown, sits on the fabric surface rather than bleeding into it, and flakes rather than smears. Mould and mildew do not smear at all: they have texture, spread in a diffuse patch rather than discrete dots, and usually come with a musty smell. Do the test on the edge of a mark rather than the middle so you preserve some of it for a professional to look at.',
  },
  {
    question: 'Where do bed bug stains show up first?',
    answer: 'At the harbourage, not on your sheets — which is why the sheet is the last place to look and the first place people check. Start with the piping and seams of the mattress, especially the corners and the head end; then the top edge and underside of the box spring, including the gauze fabric stapled underneath; then the back and underside of the headboard and the joints and screw holes of the bed frame. After that, work outward: the seam where the bed frame meets a wall, the underside of slat rails, the baseboard directly behind the bed, and the seams of any upholstered chair within a few metres of where someone sleeps. Stains on bedding come later and mean the population is already established.',
  },
  {
    question: 'Is a stain on its own enough to confirm bed bugs?',
    answer: 'It is strong evidence, not proof, and the difference matters because the response is expensive. A cluster of pen-tip black spots in a mattress seam that smear rusty on a damp swab is about as close as circumstantial evidence gets, and most Canadian households that find that pattern do have bed bugs. What converts it to certainty is a live bug, a cast skin, or an egg — all of which usually turn up within a few centimetres of the staining once you know exactly where to look with a flashlight held at a low angle. If you cannot find one, interceptor traps under the bed legs are the cheap way to convert suspicion into proof over the following couple of weeks rather than guessing and spending.',
  },
  {
    question: 'What else leaves black spots that look like bed bug droppings?',
    answer: 'Five things, most of the time. Dried blood from a scratched bite or a nosebleed, which stays redder and flakes instead of smearing. Mould or mildew on a mattress stored in a damp basement, which is diffuse and textured and smells. Cockroach droppings, which are dry pepper-like specks or small ridged pellets that do not dissolve or smear, and which appear in kitchens and bathrooms rather than on a mattress seam. Carpet beetle evidence, which is the most common bed bug misidentification of all and leaves no black spotting whatsoever — bristly larvae, shed skins, and grazed patches on wool or a fur-trimmed coat, in closets and along carpet edges rather than in a mattress seam. And transferred ink, mascara, hair dye, or newsprint, which is usually a single mark rather than a cluster and is almost never inside a seam. The clustering, the location, and the rusty smear are what separate bed bug staining from all of them. Ordinary body-oil and sweat staining on an older mattress gets flagged too, but it is a broad yellow-brown wash of colour rather than discrete dots, so it rarely survives a close look.',
  },
  {
    question: 'Do bed bug stains tell me how bad the infestation is?',
    answer: 'They tell you where it is, and roughly how long it has been there, without giving you a headcount. Faecal spotting accumulates only at a harbourage, so the densest patch of staining is where the bugs actually live — which is the most useful piece of information on this page, because it is where treatment has to be aimed. Spotting that is confined to one mattress corner suggests something recent and localised, typically a single introduction. Spotting that has spread to the box spring gauze, the headboard back, the frame joints, and the baseboard behind the bed means the population has outgrown the original harbourage. Nobody can convert a stain pattern into a number of bugs, and you should be sceptical of anyone who offers to.',
  },
  {
    question: 'Can bed bug stains be washed out of sheets and a mattress?',
    answer: 'From washable bedding, usually yes: cold-water pre-treatment first, because hot water can set a blood-based stain, then wash and dry on high heat — the dryer cycle does double duty, since sustained high heat is lethal to bed bugs at every life stage. On a mattress, treat the stain as evidence rather than laundry. Cleaning it removes the map you need, and no amount of scrubbing addresses the insects. The better sequence is to photograph the staining, treat the infestation, then fit a light-coloured zippered encasement over the mattress and box spring — which seals in anything left, gives you a clean surface, and makes any new spotting unmistakably new.',
  },
  {
    question: 'What are the rust-coloured smears on my sheets, as opposed to black dots?',
    answer: 'Those are usually blood rather than droppings, and they have two ordinary explanations. Either you rolled onto a bug that had recently fed and crushed it, or you scratched a bite while asleep and it bled a little. Smears from a crushed bug tend to be elongated in the direction of movement and can appear anywhere you moved in the night; scratch bleeding sits where the bite is. Neither is proof on its own — a nosebleed, a shaving cut, or a healing scab produces the same mark — but blood smears combined with clustered black spotting in the mattress seams is a strong pairing, and it usually means the harbourage is within arm’s reach of where your shoulders lie.',
  },
  {
    question: 'Are bed bug droppings dangerous or a health risk?',
    answer: 'Bed bugs are not known to transmit disease to people, and Canadian public-health guidance consistently frames them as a nuisance and a mental-health burden rather than an infectious risk. That said, the shed skins and dried faecal material of a large, long-running infestation become part of household dust, and that can matter for people with asthma or allergies. Handle it sensibly rather than fearfully: wear gloves if you are cleaning heavy staining, use a vacuum with a sealed HEPA path rather than an ordinary one that exhausts fine dust back into the room, and empty or bag the canister outdoors immediately. The bigger harms of a bed bug problem are the lost sleep and the money, not the spots.',
  },
  {
    question: 'I found stains but no bugs. What should I actually buy?',
    answer: 'Interceptor traps, and nothing else yet. Cups placed under each bed leg intercept bugs travelling to and from the bed, and over a couple of weeks they convert "I think I found something" into a definite answer for a modest outlay. Buying a spray at this stage is the most common and most expensive mistake in the whole cluster: it scatters an unconfirmed population deeper into the room, it burns money on a problem you may not have, and it makes a later professional treatment harder. If the traps catch nothing over two full weeks with someone sleeping in the bed every night, you probably have something else — go back to the stain differential and look again at mould, dried blood, and cockroach frass.',
  },
  {
    question: 'I rent in Ontario and found bed bug stains — what should I do first?',
    answer: 'Report it in writing before you spend anything, and keep the record. Pest control in a rental unit generally falls under a landlord’s maintenance obligations in Ontario, so an email or letter that documents the date you found the evidence, what you found, and where, is worth more than any product you could buy that afternoon. Photograph the staining before you clean anything. Do not start a DIY chemical treatment on your own: in multi-unit housing an untreated neighbouring unit will simply reintroduce the problem, and self-treatment can complicate the professional treatment the building eventually schedules. What is worth buying yourself is a mattress and box spring encasement and a set of interceptor traps, both of which help the professional job succeed and both of which you keep.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Bed bug poop and stains explained: what the black pen-tip spots are, the damp-swab test that confirms them, and the five marks people confuse them with.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BedBugStainsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to bed bug stains and droppings: what faecal spotting is and why it looks different on fabric than on wood, the damp-swab smear test, the harbourage map that tells you where to look, the differential against dried blood, mould, cockroach frass, carpet beetles and transferred ink, and what to buy once you have found evidence.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Bed Bug Stains and Droppings', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Bed Bug Stains and Droppings</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">You found a mark and now you cannot stop looking at it. Bed bug droppings are digested blood, which is why one specific test settles it in about ten seconds &mdash; and why the marks appear where the bugs <em>rest</em>, not where they bite.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Bed bug interceptor traps (under each bed leg)" search="bed bug interceptor traps climbup" label="Confirm before you spend" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Bed bug droppings are digested blood excreted as a liquid, so they dry into <strong>clusters of black or very dark brown dots about the size of a ballpoint pen tip</strong>. On fabric the liquid wicks out before it dries, so the edges look bled and feathered like felt-marker ink; on wood or metal the same droplet dries into a small raised glossy speck. The test that settles it: <strong>dab the edge with a damp white cloth &mdash; a bed bug faecal spot smears rusty reddish-brown.</strong> Dried blood stays redder and flakes, mould has texture and no discrete dots, cockroach frass is dry pepper that will not smear at all. Look in mattress seams and piping, the box spring underside, and the back of the headboard &mdash; bed bugs defecate at the harbourage, so the densest staining marks where they live.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Clusters, not singles.</strong> One isolated black dot on a duvet is rarely bed bugs; a patch of twenty in a mattress seam usually is.</li>
              <li><strong>The stain is a map.</strong> The densest patch is the harbourage &mdash; that is where any treatment has to be aimed.</li>
              <li><strong>Rust-coloured smears are blood</strong>, from a crushed fed bug or a scratched bite &mdash; a different sign from the black dots.</li>
              <li><strong>Photograph before you clean.</strong> Washing the mattress destroys the only map you have.</li>
              <li><strong>Do not buy a spray on stain evidence alone.</strong> Confirm with interceptor traps first &mdash; spraying an unconfirmed population scatters it.</li>
              <li><strong>Renting in Ontario?</strong> Report it in writing before you spend a dollar of your own money.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <div className="not-prose rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">Two pages, two jobs</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong>This page is the evidence</strong> &mdash; you have already found a mark and you want to know what it is, what it is not, and what it tells you about where the bugs are.
              <br className="hidden sm:block" />
              <strong className="block mt-2">If you have found nothing yet and want the search itself</strong> &mdash; the full five-sign inspection, the five-minute hotel-room routine, the used-furniture rule and a GTA apartment move-in checklist &mdash; read <Link href="/blog/how-to-check-for-bed-bugs-canada" className="text-emerald-700 underline font-semibold">how to check for bed bugs in Canada</Link>. And if the evidence here checks out, the treatment plan lives in <Link href="/blog/how-to-get-rid-of-bed-bugs-canada" className="text-emerald-700 underline font-semibold">how to get rid of bed bugs in Canada</Link>.
            </p>
          </div>

          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">What You Found &rarr; What It Probably Is &rarr; What to Do</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            The single most expensive mistake at this stage is buying a spray before you know what you are looking at. Find your row.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">What you found</th>
                  <th className="px-4 py-3 text-left">Most likely</th>
                  <th className="px-4 py-3 text-left">Do this</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">A cluster of pen-tip black dots in the mattress piping, bleeding into the fabric</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Bed bug faecal spotting</strong></td>
                  <td className="px-4 py-3 text-gray-700">Photograph it, do not clean it, search within a few centimetres for a live bug or cast skin, then set interceptors</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bed bug interceptor traps climbup" block>Interceptor traps &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">One or two red-brown smears on a sheet, nothing in the seams</td>
                  <td className="px-4 py-3 text-gray-700">Blood &mdash; a scratched bite, a nosebleed, or a crushed bug</td>
                  <td className="px-4 py-3 text-gray-700">Not conclusive. Strip the bed and inspect the seams and box spring properly before buying anything</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; a flashlight and ten minutes</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Diffuse grey-green patches with a musty smell on a stored mattress</td>
                  <td className="px-4 py-3 text-gray-700">Mould or mildew, not an insect</td>
                  <td className="px-4 py-3 text-gray-700">A humidity problem. Dry the space rather than treating for pests &mdash; sizing matters more than brand</td>
                  <td className="px-4 py-3"><Link href="/blog/best-dehumidifier-for-basement-canada" className="text-emerald-700 underline font-semibold">Dehumidifier sizing guide &rarr;</Link></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Dry pepper-like specks in a kitchen or bathroom, will not smear</td>
                  <td className="px-4 py-3 text-gray-700">Cockroach droppings</td>
                  <td className="px-4 py-3 text-gray-700">Completely different plan &mdash; enclosed bait stations and sanitation, not a mattress inspection. The professional gels American guides name are commercial-class here; check any pesticide for a Canadian PCP registration number</td>
                  <td className="px-4 py-3"><Link href="/blog/how-to-get-rid-of-cockroaches-canada" className="text-emerald-700 underline font-semibold">Canadian roach plan &rarr;</Link></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Confirmed spotting, and you want it contained tonight</td>
                  <td className="px-4 py-3 text-gray-700">An established harbourage in the mattress or box spring</td>
                  <td className="px-4 py-3 text-gray-700">A zippered encasement seals the harbourage in and makes any new staining unmistakably new</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bed bug proof mattress encasement zippered" block>Encasement &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Heavy old staining you need to clean up safely</td>
                  <td className="px-4 py-3 text-gray-700">A long-running infestation, plus dust you should not aerosolise</td>
                  <td className="px-4 py-3 text-gray-700">Vacuum with a sealed HEPA path and empty the canister outdoors immediately</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="sealed hepa vacuum bagged" block>Sealed HEPA vacuum &rarr;</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — What to Buy After You Find Staining"
            awards={[
              {
                badge: 'Buy This First',
                name: 'Bed Bug Interceptor Traps (Under Each Bed Leg)',
                why: 'The cheapest way to turn a suspicious stain into a definite answer. Interceptor cups sit under each bed leg and exploit a physical limitation — bed bugs climb the textured outer wall easily and cannot climb the smooth inner one — so anything travelling to or from the bed ends up held in a well where you can see it. Run them for two full weeks with someone sleeping in the bed nightly.',
                search: 'bed bug interceptor traps climbup',
                featured: true,
                pros: ['Converts suspicion into proof without guessing', 'Also tells you whether bugs are coming from the bed or the room', 'Keeps working as a monitor after treatment'],
                cons: ['Needs a bed pulled away from walls and bedding off the floor to work', 'Two weeks of patience, not an instant answer'],
              },
              {
                badge: 'Best for a Wider Sweep',
                name: 'Passive Glue-Strip Monitors',
                why: 'Interceptors only watch the bed legs. Flat adhesive monitors tucked along the baseboard behind the headboard, under a bedside table, and inside the seams of a nearby upholstered chair widen the net to the rest of the room — useful when the staining is on the frame or the wall rather than the mattress, which suggests the harbourage has moved outward.',
                search: 'bed bug glue strip monitors',
                pros: ['Covers harbourage away from the bed itself', 'Cheap enough to place a dozen', 'No chemicals — fine in a child’s room'],
                cons: ['A monitor, never a control measure', 'Adhesive fails in dusty rooms'],
              },
              {
                badge: 'Best Once Confirmed',
                name: 'Zippered Mattress and Box Spring Encasements',
                why: 'The stained mattress is usually the harbourage itself. A bed-bug-rated encasement with a sealing zipper traps whatever is inside, denies the surface to anything outside, and — the part nobody mentions — gives you a clean light-coloured surface, so any new spotting after treatment is unambiguously new rather than something you have been staring at for a month.',
                search: 'bed bug proof mattress encasement zippered',
                pros: ['Turns the biggest harbourage into a sealed box', 'Creates a clean baseline for judging whether treatment worked', 'Saves a mattress you would otherwise replace'],
                cons: ['Must stay on for a long time — do not open it early', 'Cheap ones split at the zipper end; buy a bed-bug-rated one'],
              },
              {
                badge: 'Best for Cleanup',
                name: 'Sealed-HEPA Vacuum (Bagged)',
                why: 'Heavy old staining comes with shed skins and dried faecal dust, and an ordinary vacuum with a leaky path exhausts that fine material straight back into the bedroom air. A bagged vacuum with a genuinely sealed HEPA path lifts the debris and keeps it contained — bag it and bin it outdoors the moment you finish.',
                search: 'sealed hepa vacuum bagged',
                pros: ['Removes debris without aerosolising it', 'Physically removes bugs and eggs from seams and crevices', 'Useful long after the bed bug problem is over'],
                cons: ['The premium purchase here — not needed for a small early find', 'A vacuum alone never clears an infestation'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Found a stain and nothing else?</strong> Buy only the <em>Buy This First</em> interceptors and wait two weeks &mdash; a definite answer is worth more right now than any treatment. <strong>Staining on the frame, wall or a nearby chair rather than the mattress?</strong> Add the <em>Best for a Wider Sweep</em> monitors, because the harbourage has moved off the bed. <strong>Confirmed and starting treatment?</strong> The <em>Best Once Confirmed</em> encasement is the first thing to buy, and our <Link href="/blog/bed-bug-mattress-encasement-canada">encasement buying guide</Link> covers what separates a bed-bug-rated one from a dust-mite cover. <strong>Cleaning up a long-running mess?</strong> The <em>Best for Cleanup</em> sealed vacuum is the right tool &mdash; details in our <Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">sealed-HEPA vacuum guide</Link>.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">The Differential &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Bed Bug Droppings vs the Five Marks People Confuse Them With</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Every row below has sent someone to a hardware store for a spray they did not need, or has been dismissed as nothing by someone who did. The damp-swab test in the third column separates them faster than any photograph comparison.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Mark</th>
                  <th className="px-4 py-3 text-left">What it looks like</th>
                  <th className="px-4 py-3 text-left">Damp-swab test</th>
                  <th className="px-4 py-3 text-left">Where you find it</th>
                  <th className="px-4 py-3 text-left">What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bed bug faecal spot</td>
                  <td className="px-4 py-3 text-gray-700">Clustered black or very dark brown dots, pen-tip sized. Bled and feathered on fabric; raised and glossy on wood or metal</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Smears rusty reddish-brown</strong></td>
                  <td className="px-4 py-3 text-gray-700">Mattress seams and piping, box spring gauze, headboard back, frame joints, screw holes</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Harbourage is right there</strong></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Dried blood</td>
                  <td className="px-4 py-3 text-gray-700">Redder brown, sits on the surface, often an elongated smear rather than a dot</td>
                  <td className="px-4 py-3 text-gray-700">Flakes rather than bleeding out</td>
                  <td className="px-4 py-3 text-gray-700">Sheets, pillowcase, pyjamas &mdash; wherever you moved in the night</td>
                  <td className="px-4 py-3 text-gray-700">A scratched bite, a nosebleed, or a crushed fed bug</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Mould / mildew</td>
                  <td className="px-4 py-3 text-gray-700">Diffuse grey, green or black patches with visible texture. Usually a musty smell</td>
                  <td className="px-4 py-3 text-gray-700">Does not smear or dissolve</td>
                  <td className="px-4 py-3 text-gray-700">Mattresses stored in damp basements or against a cold exterior wall</td>
                  <td className="px-4 py-3 text-gray-700">A humidity problem &mdash; dry the room, not the pest aisle</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Cockroach droppings</td>
                  <td className="px-4 py-3 text-gray-700">Dry black specks like coarse pepper, or small ridged cylindrical pellets from larger species</td>
                  <td className="px-4 py-3 text-gray-700">Dry &mdash; will not smear at all</td>
                  <td className="px-4 py-3 text-gray-700">Kitchen and bathroom &mdash; behind appliances, in cupboard corners, along pipe runs</td>
                  <td className="px-4 py-3 text-gray-700">A different pest and a different plan entirely</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Carpet beetle evidence</td>
                  <td className="px-4 py-3 text-gray-700">No black spotting. Instead: bristly larvae, shed skins, and grazed patches on wool or a fur-trimmed coat</td>
                  <td className="px-4 py-3 text-gray-700">Nothing to smear</td>
                  <td className="px-4 py-3 text-gray-700">Closets, under furniture, along carpet edges, in stored woollens</td>
                  <td className="px-4 py-3 text-gray-700">The most common bed bug misidentification &mdash; damages fabric, does not bite</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Transferred ink, dye or newsprint</td>
                  <td className="px-4 py-3 text-gray-700">Usually one mark, not a cluster. Often a recognisable shape or a line</td>
                  <td className="px-4 py-3 text-gray-700">Smears its own colour &mdash; blue, black, never rust</td>
                  <td className="px-4 py-3 text-gray-700">Anywhere on bedding; almost never inside a seam</td>
                  <td className="px-4 py-3 text-gray-700">Laundry, not pest control</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">The one detail that decides most cases:</strong> location plus clustering. Bed bugs excrete where they rest, so their staining accumulates in tight, sheltered, seam-like places in dense patches. A single black dot in the middle of a duvet, with clean seams and a clean box spring, is very rarely a bed bug. Twenty dots along ten centimetres of mattress piping almost always is.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Bed Bug Staining &mdash; Quick Reference</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What the black spots are', 'Digested blood — excreted as a liquid, dried in place'],
                  ['Size and colour', 'Roughly a ballpoint-pen-tip dot, black to very dark brown'],
                  ['On fabric', 'Wicks outward before drying — feathered, bled edges like felt marker'],
                  ['On wood or metal', 'Nothing absorbs it — a small raised, glossy speck you can feel'],
                  ['The confirming test', 'Damp white cloth on the edge of the mark → rusty reddish-brown smear'],
                  ['Pattern that matters', 'Clusters, in sheltered seam-like places — not isolated dots on open fabric'],
                  ['First place to look', 'Mattress piping and seams, especially corners and the head end'],
                  ['Second and third', 'Box spring top edge and the gauze stapled underneath; the back of the headboard'],
                  ['Then work outward', 'Frame joints and screw holes, slat rails, baseboard behind the bed, nearby upholstered seams'],
                  ['What density tells you', 'Where the harbourage is, and roughly how long it has been there — never a bug count'],
                  ['Rust-coloured smears', 'Blood, not droppings — a crushed fed bug or a scratched bite'],
                  ['Before you clean', 'Photograph it. Cleaning destroys the map that aims the treatment'],
                  ['Washing bedding', 'Cold pre-treat (hot water sets blood), then wash and dry on high heat'],
                  ['What to buy on stain evidence alone', 'Interceptor traps. Not a spray'],
                  ['Health risk', 'Bed bugs are not known to transmit disease; heavy old debris matters for asthma and allergies'],
                  ['Renting in Ontario', 'Report in writing first — pest control generally sits with the landlord’s maintenance obligations'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What the Stain Actually Is</h2>
          <p>A bed bug feeds on blood and digests it, and what comes out the other end is mostly the leftover, broken-down remains of that blood. It is excreted as a liquid droplet, not a solid pellet, and that single fact explains every visual property people find confusing.</p>
          <p>On an absorbent surface &mdash; a cotton sheet, the fabric piping around a mattress, the gauze under a box spring, an upholstered headboard &mdash; the droplet spreads into the weave before it dries. That is why bed bug spots look <em>bled</em>: soft, feathered edges, exactly like touching the fabric with the tip of a felt marker. On a non-absorbent surface &mdash; a lacquered bed frame, a metal slat, painted baseboard trim, the plastic of an outlet cover &mdash; there is nowhere for the liquid to go, so it dries on top as a small, slightly raised, faintly glossy black speck. Run a fingernail across one and you can feel it. Same insect, same material, two completely different-looking marks, which is why a photo you found online may not match what is in front of you.</p>
          <p>The colour is the giveaway and the reason the swab test works. The material is haem-derived, so when you rehydrate it, it releases the rusty reddish-brown that gives every bed bug guide its identical piece of advice: <strong>dab a damp white cloth or wet cotton swab on the edge of the mark.</strong> Bed bug faeces smear reddish-brown into white cotton. Cockroach frass, which is dry and solid, does not smear. Mould has texture and no discrete dots. Ink smears its own colour. Dried blood is redder and flakes off rather than bleeding out. Test the edge rather than the centre, so you keep an intact example if a professional needs to look at it later.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">If the evidence checks out, this is the short list worth checking:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="bed bug interceptor traps climbup">Interceptor traps &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bed bug proof mattress encasement zippered">Encasements &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bed bug glue strip monitors">Glue-strip monitors &rarr;</BuyLink>
          </div>

          <h2>Where the Stains Appear, and Why It Is Not Your Sheets</h2>
          <p>Here is the behavioural fact that makes the staining useful rather than merely alarming: <strong>bed bugs do not defecate where they feed. They defecate where they rest.</strong> A bug feeds for a few minutes, retreats to a tight dark space, and then digests over the following days &mdash; which is where the spotting accumulates. That converts a distressing mark into a map, because the densest patch of staining is, quite literally, the address.</p>
          <p>Search in this order, with a flashlight held at a low raking angle so the light throws shadows across the surface rather than washing it out:</p>
          <ul>
            <li><strong>Mattress piping and seams</strong>, running the whole perimeter, with extra time at the four corners and the head end. Peel the piping back gently with a card.</li>
            <li><strong>The box spring</strong> &mdash; the top edge first, then tip it on its side and look at the wooden frame and the stapled gauze fabric underneath. The underside of a box spring is one of the most consistently productive places to find evidence in a Canadian bedroom and the one people skip most.</li>
            <li><strong>The headboard</strong>, particularly the back face and any mounting bracket, which is dark, tight, and never disturbed.</li>
            <li><strong>The bed frame</strong>: joints, bolt holes, screw holes, the inside faces of slat rails, and the underside of any wooden ledge.</li>
            <li><strong>Outward from the bed</strong>, once the above is done: the baseboard directly behind the head of the bed, the seam where carpet meets wall, the underside of a bedside table, the seams and skirt of an upholstered chair within a few metres, and the edge of a wall outlet plate.</li>
          </ul>
          <p>Sheet staining tends to come later than seam staining, because it requires a population large enough that bugs are resting on bedding rather than only in cracks. If your sheets are marked and the seams are not, look harder at the seams &mdash; it is far more likely you missed it than that the insects reversed their behaviour.</p>

          <h2>What the Pattern Tells You (and What It Cannot)</h2>
          <p>Two honest statements, in tension with each other. Staining is the best free diagnostic in this entire subject, and it will not tell you how many bugs you have.</p>
          <p>What it does tell you is <em>where</em> and roughly <em>how long</em>. Spotting confined to one corner of a mattress seam, with a clean box spring and a clean frame, is the pattern of something recent and localised &mdash; typically a single introduction that has not yet expanded. Spotting that appears on the box spring gauze, the back of the headboard, the frame joints, and the baseboard behind the bed describes a population that has outgrown its first harbourage and colonised the room. That distinction is genuinely useful, because it changes the scope of what has to be treated: the first case may be resolved around the bed, and the second is a whole-room job where a professional heat treatment is often the cheaper route once you count what a long DIY campaign actually costs in time, repeat purchases, and failed attempts.</p>
          <p>What no stain pattern gives you is a count, an age in weeks, or a prediction. Be sceptical of any source &mdash; or any quote &mdash; that converts a photograph of spotting into a number. If you want a real measurement rather than an estimate, that is exactly what interceptor traps under the bed legs provide, over the following fortnight, for a small amount of money.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="bed bug interceptor traps climbup">Check interceptor traps on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>The Other Evidence Sitting Next to the Stains</h2>
          <p>Once you have found spotting, spend another five minutes in the same few centimetres, because the confirming evidence is almost always adjacent to it. You are looking for translucent, bug-shaped shells &mdash; bed bugs moult on their way to adulthood and leave the empty casings behind, which is why finding shells in several different sizes tells you the population is breeding rather than a lone hitchhiker. You are also looking for eggs: roughly a millimetre long, pearly white, glued into a crack or seam fold, usually in small clusters and easy to miss without raking light.</p>
          <p>And one thing that is <em>not</em> evidence, no matter how convincing it feels: bites. Skin reactions to bed bug bites vary enormously between people, several other insects produce a similar-looking mark, and some people show no reaction at all &mdash; so a bite pattern can neither confirm nor rule out an infestation. Our guide to <Link href="/blog/bed-bug-bites">what bed bug bites look like</Link> covers why, and <Link href="/blog/tick-vs-bed-bug">tick vs bed bug</Link> handles the other insect that most often gets blamed. If you have bites and no physical evidence anywhere, the honest position is that you do not know yet &mdash; and interceptors, not a spray, are what resolve it.</p>

          <h2>Do Not Clean It Yet</h2>
          <p>The strongest instinct on finding this is to scrub, and it is the wrong first move. Cleaning the mattress destroys the map that tells you and any professional where the harbourage is, and it does nothing at all to the insects, which are inside the seam rather than on it.</p>
          <p>Do this instead. <strong>Photograph it</strong> &mdash; close, well-lit, with something for scale, and a second wider shot showing where on the bed it is. If you rent, those photos are the evidence that starts the process with your landlord or property manager. <strong>Then leave it.</strong> Once treatment is underway or complete, fit a light-coloured, bed-bug-rated zippered encasement over both the mattress and the box spring. That does three jobs at once: it seals whatever is still inside where it cannot reach you, it denies the surface to anything outside, and it gives you a clean pale baseline &mdash; so any new spot that shows up afterwards is unambiguously new, rather than a mark you have been anxiously re-examining for six weeks.</p>
          <p>For washable bedding, the sequence is: cold-water pre-treatment first, because hot water sets a blood-based stain, then wash, then <strong>dry on high heat for at least 30 minutes</strong>. The dryer is doing real pest control there, not just laundry &mdash; sustained high heat is lethal to bed bugs at every life stage, which is why it appears in every credible protocol.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="bed bug proof mattress encasement zippered">Check bed-bug-rated encasements on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>What Not to Buy at This Stage</h2>
          <p>Restraint here is worth more than any product on the page:</p>
          <ul>
            <li><strong>A contact spray, before confirmation.</strong> This is the classic and costly mistake. Spraying an unconfirmed population scatters it out of a known harbourage and deeper into the room, which makes both a DIY campaign and a later professional treatment harder. Confirm first. Our honest assessment of what sprays can and cannot do is in <Link href="/blog/do-bed-bug-sprays-actually-work">do bed bug sprays actually work</Link>.</li>
            <li><strong>A total-release fogger or bug bomb.</strong> An aerosol that settles on open surfaces cannot reach into a mattress seam, a box spring frame, or a screw hole &mdash; the exact places the staining is telling you the bugs are.</li>
            <li><strong>Ultrasonic plug-in repellers.</strong> No credible evidence for this or any household pest; see our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic repeller review</Link>.</li>
            <li><strong>Throwing out the mattress on the strength of a stain.</strong> Expensive, and frequently counterproductive &mdash; an infestation is rarely confined to the mattress, a discarded one can spread the problem through a building&rsquo;s hallways, and an encasement usually saves it. Decide after confirmation, not during panic.</li>
            <li><strong>Grey-market US pesticides.</strong> Several products American guides recommend are not registered for sale or use in Canada. Any pesticide you use here should carry a PCP registration number on its Canadian label, and the pest and use site both have to be listed on it. Our <Link href="/blog/bed-bug-spray-canada">Canadian bed bug spray guide</Link> covers what is legally sold here.</li>
          </ul>

          <h2>When a Professional Is the Cheaper Answer</h2>
          <p>BuzzSkito treats mosquitoes and ticks &mdash; we do not sell bed bug service, and we have no referral to place, which is why we can say this plainly. A localised early find around a single bed is a reasonable DIY job with encasements, interceptors, heat, and patience. A whole-room stain map &mdash; box spring, headboard, frame, baseboard, nearby furniture &mdash; usually is not, and the honest arithmetic favours hiring someone: a professional heat treatment or a properly executed chemical programme done once tends to cost less than three rounds of DIY products, several months of poor sleep, and a failed attempt that has scattered the population.</p>
          <p>Call a professional straight away in three situations regardless of stain density: you live in an apartment or condo, where an untreated neighbouring unit will keep reintroducing the problem no matter what you do in yours; the affected person is elderly, immunocompromised, or a young child; or you have already treated once and the staining is expanding. If you rent in Ontario, report the evidence in writing before you spend anything of your own &mdash; pest control in a rental generally falls within a landlord&rsquo;s maintenance obligations, and your photographs and the date you sent them are the record that matters. Our <Link href="/blog/how-to-get-rid-of-bed-bugs-in-apartment-canada">apartment and condo bed bug guide</Link> covers the multi-unit case, and <Link href="/pest-control-cost-canada">what pest control costs in Canada</Link> lets you sanity-check a quote.</p>

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

          <h2>Related Bed Bug Guides</h2>
          <ul>
            <li><strong>Have not found anything yet?</strong> <Link href="/blog/how-to-check-for-bed-bugs-canada">How to Check for Bed Bugs in Canada — The Five Signs and a Five-Minute Hotel Routine</Link></li>
            <li><strong>Confirmed it?</strong> <Link href="/blog/how-to-get-rid-of-bed-bugs-canada">How to Get Rid of Bed Bugs in Canada — The Complete Step-by-Step Plan</Link></li>
            <li><Link href="/blog/bed-bug-interceptor-traps-canada">Bed Bug Interceptor Traps Canada — The 14-Night Monitoring Protocol</Link></li>
            <li><Link href="/blog/best-bed-bug-detector-canada">Best Bed Bug Detector Canada — Passive vs Active Monitors</Link></li>
            <li><Link href="/blog/bed-bug-mattress-encasement-canada">Bed Bug Mattress Encasements — What Makes One Bed-Bug-Rated</Link></li>
            <li><Link href="/blog/bed-bug-bites">Bed Bug Bites — What They Look Like and Why They Prove Nothing</Link></li>
            <li><Link href="/blog/tick-vs-bed-bug">Tick vs Bed Bug — Telling Them Apart</Link></li>
            <li><Link href="/blog/bed-bug-control-canada-hub">Bed Bug Control Canada — The Complete DIY Treatment Hub</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada — What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
      </article>

      <CTASection
        heading="Mosquitoes and Ticks Are Our Actual Job"
        subtext="We don't treat bed bugs — but if the bites turned out to be coming from your backyard rather than your mattress, that is exactly what we do, across 19 GTA cities."
      />
    </>
  )
}
