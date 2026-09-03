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

const SLUG = 'bed-bug-shells-casings-shed-skins-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// This page is the EVIDENCE-IDENTIFICATION half of the bed bug cluster: someone
// found a translucent husk and wants to know what it is and what it proves. The
// inspection protocol lives on how-to-check-for-bed-bugs-canada and the treatment
// protocol on how-to-get-rid-of-bed-bugs-canada — do not restate either here.
const TITLE = 'Bed Bug Shells, Casings and Shed Skins — What You Found, and What It Actually Proves'
const META_TITLE = 'Bed Bug Shells and Shed Skins: What It Means'

const FAQS = [
  {
    question: 'What do bed bug shells look like?',
    answer: 'A bed bug shell is an empty husk shaped exactly like the bug that left it — flat, oval, and clearly segmented — but translucent and pale amber to straw-coloured rather than reddish-brown, and completely hollow. Held to the light it looks like a tiny paper cutout of a bed bug. The giveaway is that it is empty: there is a split along the back or head end where the insect climbed out, the legs and antennae are present as hollow shells rather than moving parts, and it weighs nothing, so it drifts if you breathe on it. Shells range from roughly 1.5 mm for the first stage to about 4.5 mm for the last, so a single mattress seam can hold husks of five noticeably different sizes.',
  },
  {
    question: 'Do bed bug shells mean I have an active infestation?',
    answer: 'They mean an infestation existed and that it was feeding — but not automatically that it is feeding today. A bed bug must take a blood meal before each moult, so every shell in your mattress seam is physical proof that a bug fed on someone in that bed and grew. That rules out the single hitchhiker theory almost completely. What shells cannot tell you is timing: the husks are dry chitin and they persist for months or longer in an undisturbed seam, so a treated apartment or a second-hand bed frame can carry old casings with nothing alive in it. Confirm with fresh evidence instead — live bugs, new dark fecal spotting, or interceptor traps under the bed legs read after one to two weeks.',
  },
  {
    question: 'How many times does a bed bug shed its skin?',
    answer: 'Five times. A bed bug hatches as a first-stage nymph and passes through five nymphal stages, each ending in a moult, before it becomes an adult — and each of those moults requires a blood meal first (University of Tennessee bed bug program). One bug that reaches adulthood therefore leaves up to five shells behind, which is why casings usually outnumber the bugs producing them and why a modest population can litter a seam. It also means a spread of shell sizes in one spot is a reproduction signal: eggs are hatching there and the young are surviving to feed.',
  },
  {
    question: 'What is the difference between a bed bug shell and a dead bed bug?',
    answer: 'Contents and colour. A dead bed bug is opaque, holds its shape when pressed, is usually reddish-brown to near-black, and often has a crushed or shrivelled abdomen with visible dark material inside. A shed skin is translucent and hollow — light passes through it, it collapses to nothing under a fingernail with no smear, and it has an escape split at the head or thorax. The practical difference matters when you are deciding what to do next: a dead bug proves something killed it, which is worth knowing if you have already treated, while a shell proves something grew, which is the more alarming of the two findings in an untreated home.',
  },
  {
    question: 'Could these be carpet beetle skins instead of bed bug shells?',
    answer: 'Very possibly, and it is the single most common mix-up in this whole category. Carpet beetle larvae also shed skins repeatedly and leave them in the same places people search — along baseboards, under bed edges, inside closet corners, in wool rugs. The distinguishing feature is hair: a carpet beetle larval skin is bristly, banded and tapered like a tiny caterpillar or a fuzzy grain of rice, often with a visible tail tuft, while a bed bug shell is smooth, flat and broadly oval with no hairs at all and six obvious legs. Carpet beetle skins also tend to turn up away from the bed, in carpet, closets and stored wool, whereas bed bug casings cluster within arm&rsquo;s reach of where someone sleeps. If the husks are hairy, stop shopping for bed bug products — a vacuum and a look at your wool and stored textiles is the right next move.',
  },
  {
    question: 'Where are bed bug shells usually found?',
    answer: 'Wherever the bugs harbour, which is a much shorter list than most people expect: the piping and seams of the mattress, the corners and fabric underside of the box spring, screw holes and joints in the bed frame, the back of a headboard (especially a wall-mounted hotel-style one), the inside of a nightstand drawer runner, and the baseboard or carpet edge nearest the bed. Because moulting happens in the harbourage rather than out in the open, a concentration of shells is a direction sign — it points at the shelter the bugs are using, which is where interceptors, encasements and any treatment need to be aimed. Shells found on the floor in the middle of a room have usually been moved there by a vacuum, a sheet change or a foot.',
  },
  {
    question: 'Should I throw out the mattress if I find shells?',
    answer: 'No — and this is the most expensive mistake available at this moment. A zippered bed bug encasement traps whatever is inside the mattress and box spring, keeps new bugs from getting in, and turns the exterior into a smooth surface where anything left is visible, which is why encasing is standard practice and disposal is not. Throwing the mattress out does not treat the frame, the headboard, the baseboards or the nightstand where the rest of the population lives, and a new mattress carried into an untreated room is reinfested within days. Dragging an infested mattress down a shared hallway also seeds the corridor for your neighbours, which is why many Ontario buildings require infested items be wrapped and labelled before disposal.',
  },
  {
    question: 'Can I get rid of bed bugs myself once I have found the shells?',
    answer: 'Sometimes, and it depends far more on your building than on your effort. A detached house, one affected room, low clutter and evidence caught early is the profile where a careful do-it-yourself programme — encasements, interceptors, high-heat laundry, dry-vapour steam, and a Canada-registered product used strictly to its label — genuinely works. An apartment, condo or rooming house is the profile where it usually fails no matter how well you execute, because bugs move through shared walls, outlet boxes and hallways, and treating one unit inside an untreated building is a treadmill. Heavy clutter, several rooms involved, limited mobility or an occupant who cannot manage the preparation all push the same way.',
  },
  {
    question: 'Is a bed bug shell dangerous to have around?',
    answer: 'The shells themselves are inert chitin, and Health Canada states there are no known cases of infectious disease transmitted to people by bed bug bites. The real harms it names are skin reactions, rare severe allergic reactions, and the anxiety and insomnia reported by people living with an infestation — which is a genuine health effect and worth naming rather than dismissing. The one caveat worth knowing is that cast skins and shed debris become part of household dust, and in heavily infested homes that dust has been raised as an airborne allergen concern; a sealed-HEPA vacuum is the sensible way to remove accumulations rather than sweeping or blowing them around.',
  },
  {
    question: 'What should I buy first after finding shells?',
    answer: 'Two things, in this order. First, interceptor traps for all the bed and sofa legs — pitfall cups that catch bugs travelling to and from the bed, which converts an ambiguous pile of husks into a yes or no answer over one to two weeks and keeps working as your progress meter afterwards. Second, zippered encasements for the mattress and box spring, which contain what is already inside and remove the two most complicated hiding places from the job. A bright flashlight and a thin card to drag through seams costs almost nothing and does more than any spray at this stage. What not to buy yet: a total-release fogger, an ultrasonic repeller, or an unregistered US concentrate ordered from a marketplace seller.',
  },
  {
    question: 'How do I tell old shells from a current problem?',
    answer: 'Run a two-week evidence test instead of guessing. Clean the area thoroughly with a sealed-HEPA vacuum so every existing husk and spot is gone, encase the mattress and box spring, set interceptors under every bed and sofa leg, and then leave it alone and look again after two weeks. New fecal spotting on a clean encasement, new husks, or anything caught in a cup is an active population. Nothing new after two weeks of normal sleeping in that bed — with someone actually sleeping there, because bugs need the cue of a host — points at historical evidence. This is also why blank interceptors on an empty guest bed prove nothing.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Bed bug shells are moulted skins, not dead bugs. What a casing proves about feeding and breeding, how to tell one from a carpet beetle skin, what to do.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BedBugShellsCasingsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian identification guide to bed bug shells, casings and shed skins: what a moulted exoskeleton looks like, why five moults mean five possible shells per bug, what a shell proves about feeding and breeding, how to tell it from carpet beetle larval skins and dead bugs, where casings accumulate, and the confirm-then-contain sequence to follow next.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Bed Bug Shells and Shed Skins — What They Mean', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Bed Bug Shells and Shed Skins</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The translucent husk in your mattress seam is not a dead bed bug. It is a moulted skin &mdash; and because a bed bug must feed before every moult, it is proof that something fed on someone in that bed and grew. Here is how to read what you found, what it rules out, and the two-week test that tells you whether it is still happening.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="ClimbUp Insect Interceptors — turn husks into a yes or no" search="climbup bed bug interceptor" label="Confirm it is active" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">A bed bug shell is a shed exoskeleton: an empty, translucent, pale-amber husk shaped exactly like the insect, hollow, with a split where the bug climbed out. Bed bugs moult five times on the way to adult and must take a blood meal before each moult, so shells are evidence of a population that was <em>feeding and growing</em> in that spot &mdash; not of a lone hitchhiker. They do not prove the problem is current, because dry husks persist for months. Confirm with interceptor traps and fresh spotting over two weeks before you spend money on anything else.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Shell vs dead bug:</strong> a shell is translucent and empty; a dead bug is opaque and holds contents.</li>
              <li><strong>Shell vs carpet beetle skin:</strong> bed bug husks are smooth and flat; carpet beetle larval skins are <strong>bristly and hairy</strong>. Hairy means you have the wrong pest.</li>
              <li><strong>Five sizes in one seam</strong> &mdash; roughly 1.5 mm up to about 4.5 mm &mdash; means eggs are hatching and the young are surviving to feed.</li>
              <li><strong>Do not throw out the mattress.</strong> Encase it. Disposal treats none of the frame, headboard or baseboards where the rest live.</li>
              <li><strong>Buy in this order:</strong> interceptors under every leg, then zippered encasements, then a flashlight and card. Not a fogger.</li>
              <li><strong>Do not import US bed bug concentrates.</strong> Canadian products carry a PCP registration number; unregistered imports are illegal here.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <div className="not-prose rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">Three pages, three findings</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong>This page is the husk</strong> &mdash; an empty moulted skin, and what growth evidence proves about how long it has been going on.
              <br className="hidden sm:block" />
              <strong className="block mt-2">Found dark marks rather than husks?</strong> Read <Link href="/blog/bed-bug-stains-poop-droppings-canada" className="text-emerald-700 underline font-semibold">bed bug stains and droppings</Link> &mdash; spotting is digested blood and it is the more <em>current</em> of the two signs.
              <strong className="block mt-2">Found a live insect instead?</strong> Start with <Link href="/blog/bugs-that-look-like-bed-bugs-canada" className="text-emerald-700 underline font-semibold">bugs that look like bed bugs</Link>, or <Link href="/blog/baby-bed-bugs-nymphs" className="text-emerald-700 underline font-semibold">baby bed bugs and nymph stages</Link> if it is very small and pale.
            </p>
          </div>

          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">What You Found &rarr; What It Means &rarr; What to Do</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Find the row that matches what is actually in front of you. The wrong first purchase here is expensive, and in one row the right answer is to stop and buy nothing at all.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">What you found</th>
                  <th className="px-4 py-3 text-left">What it means</th>
                  <th className="px-4 py-3 text-left">Do this</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">One translucent husk, nothing else</td>
                  <td className="px-4 py-3 text-gray-700">Something fed and moulted here at some point. Age unknown</td>
                  <td className="px-4 py-3 text-gray-700">Clean the area completely, set interceptors, re-inspect in two weeks before spending anything</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="climbup bed bug interceptor" block>Interceptors &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Husks in several sizes, in one seam</td>
                  <td className="px-4 py-3 text-gray-700">An established, breeding population &mdash; eggs hatched and the young survived to feed</td>
                  <td className="px-4 py-3 text-gray-700">Treat it as confirmed. Encase mattress and box spring, then work the whole room</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="saferest mattress encasement" block>Encasements &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Husks plus dark ink-dot spotting</td>
                  <td className="px-4 py-3 text-gray-700">Active feeding &mdash; spotting is digested blood, and it is the more current of the two signs</td>
                  <td className="px-4 py-3 text-gray-700">Full protocol now: heat the laundry, steam the seams, encase, monitor</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="vapamore mr-100 steamer" block>Dry-vapour steamer &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Hairy, bristly, tapered husks</td>
                  <td className="px-4 py-3 text-gray-700">Carpet beetle larvae, not bed bugs &mdash; a textile pest, not a blood feeder</td>
                  <td className="px-4 py-3 text-gray-700">Buy nothing for bed bugs. Vacuum, and check stored wool, felt and rugs</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; wrong pest</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">You cannot tell what it is</td>
                  <td className="px-4 py-3 text-gray-700">Naked-eye identification of a 1.5 mm husk is genuinely hard</td>
                  <td className="px-4 py-3 text-gray-700">Tape it to a white index card, photograph it with a magnifier, and compare against a smooth flat oval</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bed bug inspection flashlight magnifier kit" block>Flashlight and magnifier &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Shells in an apartment or condo</td>
                  <td className="px-4 py-3 text-gray-700">Adjoining units matter more than your unit does</td>
                  <td className="px-4 py-3 text-gray-700">Report it in writing to the landlord or property manager first &mdash; then contain, do not treat alone</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; see the tenant section</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="What to Buy After You Find Shells — In Buying Order"
            awards={[
              {
                badge: 'Buy First',
                name: 'ClimbUp Insect Interceptors (under every leg)',
                why: 'Shells are ambiguous about time; interceptors are not. Pitfall cups under each bed and sofa leg catch bugs moving toward a sleeping host and away again, so after one to two weeks you have an answer instead of a theory — and afterwards they double as the progress meter that tells you whether what you did worked.',
                search: 'climbup bed bug interceptor',
                featured: true,
                pros: ['Turns old husks into a yes or no answer', 'No chemistry, safe in a child or pet bedroom', 'Keeps working as a monitor for months afterwards'],
                cons: ['Needs the bed pulled off the wall and bedding kept off the floor to work', 'Reads nothing if nobody sleeps in that bed'],
              },
              {
                badge: 'Buy Second',
                name: 'Zippered Mattress and Box Spring Encasements',
                why: 'The mattress and box spring are the two hiding places you cannot inspect or treat properly. Encasing seals whatever is inside, blocks new arrivals, and leaves a smooth white surface where any new spotting is obvious — which is what makes the two-week re-check readable at all.',
                search: 'saferest mattress encasement',
                pros: ['Removes the two hardest harbourages from the job in one step', 'Makes new evidence visible instead of hidden in seams', 'Far cheaper than the mattress most people wrongly throw out'],
                cons: ['Only works if the zipper stays fully closed for the long haul', 'Does nothing about the frame, headboard or baseboards'],
              },
              {
                badge: 'Best for Identification',
                name: 'Inspection Flashlight and Magnifier Kit',
                why: 'The difference between a bed bug shell and a carpet beetle skin is whether it has hairs — a distinction you simply cannot make at 1.5 mm with a phone screen and room lighting. A bright oblique beam plus magnification also finds the eggs and the escape splits that settle the question outright.',
                search: 'bed bug inspection flashlight magnifier kit',
                pros: ['Settles the carpet-beetle question in seconds', 'Oblique light reveals seam contents the eye misses', 'Cheapest genuinely useful purchase on this page'],
                cons: ['A tool, not a treatment', 'Still needs you to know what you are looking at'],
              },
              {
                badge: 'Best Treatment Buy',
                name: 'Dry-Vapour Steamer',
                why: 'Once the evidence is confirmed, steam is the one treatment that reaches eggs and hidden stages inside seams and frame joints without leaving residue on a bed. It kills by heat on contact, so resistance is irrelevant — the limitation is that it only kills what the head actually reaches, which is why it pairs with encasements rather than replacing them.',
                search: 'vapamore mr-100 steamer',
                pros: ['Heat kills every life stage it contacts, eggs included', 'No pesticide residue where you sleep', 'Reusable for years on other jobs'],
                cons: ['The big-ticket item in any DIY kit', 'Slow, awkward work — and it misses what it cannot reach'],
              },
              {
                badge: 'Best Cleanup Tool',
                name: 'Sealed-HEPA Vacuum',
                why: 'Accumulated husks, eggs and shed debris need removing without being blown back into the room, and a sealed-HEPA machine is the difference between removing that dust and redistributing it. Vacuuming is also the step that resets the surface so a two-week re-check actually means something.',
                search: 'sealed hepa bagged canister vacuum',
                pros: ['Physically removes husks, eggs and debris in one pass', 'Sealed filtration keeps fine debris out of room air', 'Useful long after the bed bug job ends'],
                cons: ['Cannot reach inside seams and frame joints', 'The canister or bag must be emptied outside, immediately'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Not sure the evidence is current?</strong> Buy only the <em>Buy First</em> interceptors and wait two weeks &mdash; full setup detail in our <Link href="/blog/bed-bug-interceptor-traps-canada">bed bug interceptor traps guide</Link>. <strong>Husks in several sizes, or spotting alongside them?</strong> Add the <em>Buy Second</em> encasements immediately; sizing and the 12&ndash;18 month rule are covered in our <Link href="/blog/bed-bug-mattress-encasement-canada">mattress encasement guide</Link>. <strong>Cannot tell what the husk is?</strong> The identification kit answers it faster than any product will. <strong>Confirmed and treating it yourself?</strong> The steamer is the one item worth real money &mdash; see the <Link href="/blog/best-bed-bug-steamer-canada">bed bug steamer comparison</Link> before you choose one.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Identification Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Bed Bug Shell, or Something Else? The Six Things It Usually Turns Out to Be</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Almost every &ldquo;is this a bed bug shell?&rdquo; question resolves to one of these six. Work down the <em>tell</em> column &mdash; each one is visible with a bright light and a magnifier, and the first that matches is your answer.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">What it is</th>
                  <th className="px-4 py-3 text-left">Look and size</th>
                  <th className="px-4 py-3 text-left">The tell</th>
                  <th className="px-4 py-3 text-left">What it means for you</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bed bug shed skin</td>
                  <td className="px-4 py-3 text-gray-700">Flat oval, translucent pale amber, roughly 1.5&ndash;4.5 mm</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Hollow with a split at the head end</strong> &mdash; smooth, no hairs</td>
                  <td className="px-4 py-3 text-gray-700">A bug fed here and grew. Confirm whether it is current</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Dead bed bug</td>
                  <td className="px-4 py-3 text-gray-700">Opaque reddish-brown to near-black, same shape</td>
                  <td className="px-4 py-3 text-gray-700">Solid, holds contents, smears if crushed</td>
                  <td className="px-4 py-3 text-gray-700">Confirms the species outright. Photograph it before it is lost</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Carpet beetle larval skin</td>
                  <td className="px-4 py-3 text-gray-700">Tapered, banded, brownish, often with a tail tuft</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Bristly and hairy</strong> &mdash; and usually found away from the bed</td>
                  <td className="px-4 py-3 text-gray-700">Wrong pest. A textile problem, not a blood feeder</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Cockroach nymph casing</td>
                  <td className="px-4 py-3 text-gray-700">Longer, narrower, glossier; long trailing antennae</td>
                  <td className="px-4 py-3 text-gray-700">Elongated rather than broadly oval, and turns up in kitchens and bathrooms</td>
                  <td className="px-4 py-3 text-gray-700">A different job entirely &mdash; baiting, not bed work</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bed bug egg or eggshell</td>
                  <td className="px-4 py-3 text-gray-700">Pearly white, about 1 mm, rice-grain shaped</td>
                  <td className="px-4 py-3 text-gray-700">Glued in place &mdash; it resists a gentle brush rather than drifting</td>
                  <td className="px-4 py-3 text-gray-700">Breeding on site. Heat or steam, since many sprays do not kill eggs</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Lint, scab or fabric debris</td>
                  <td className="px-4 py-3 text-gray-700">Irregular, no symmetry, no repeating shape</td>
                  <td className="px-4 py-3 text-gray-700">No legs, no segmentation, no bilateral symmetry under magnification</td>
                  <td className="px-4 py-3 text-gray-700">Nothing. Keep inspecting &mdash; do not buy on a maybe</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Size ranges follow published bed bug life-stage descriptions from university extension and public-health sources; individual specimens vary, and a partly collapsed husk can read smaller than it is.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Bed Bug Shells &mdash; Quick Reference</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What a shell is', 'A moulted exoskeleton — empty, translucent, split where the bug climbed out'],
                  ['How many per bug', 'Up to five — bed bugs pass through five nymphal stages before adulthood'],
                  ['What it proves', 'A blood meal was taken in that location — a moult cannot happen without one'],
                  ['What it does not prove', 'That the problem is current. Dry husks persist for months undisturbed'],
                  ['Several sizes in one seam', 'Eggs hatched there and the young survived to feed — an established population'],
                  ['Most common misidentification', 'Carpet beetle larval skins — bristly and hairy, usually away from the bed'],
                  ['Where they accumulate', 'Mattress piping, box spring corners, frame joints, headboard backs, nearby baseboard'],
                  ['First purchase', 'Interceptor traps under every bed and sofa leg'],
                  ['Second purchase', 'Zippered mattress and box spring encasements'],
                  ['Never do this', 'Throw out the mattress, or sleep in another room — both spread it'],
                  ['The confirm test', 'Clean everything, encase, set interceptors, sleep normally, re-check at two weeks'],
                  ['Canadian label check', 'A PCP registration number. Unregistered US concentrates are illegal to import'],
                  ['Health context', 'Health Canada: no known cases of infectious disease transmitted by bed bug bites'],
                  ['When DIY usually fails', 'Apartments and condos, several rooms involved, heavy clutter, limited mobility'],
                  ['Who pays in an Ontario rental', 'The landlord, in almost all cases — report in writing and keep dated photos'],
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

          <h2>Why Bed Bugs Leave Shells at All</h2>
          <p>An insect wears its skeleton on the outside, and a rigid outer case cannot stretch. To get bigger, a bed bug has to climb out of the one it is wearing and harden a new, larger one underneath. The discarded case is the shell you found: complete down to the legs and antennae, but empty, because everything that was alive walked out of it.</p>
          <p>The detail that turns this from trivia into evidence is the trigger. A bed bug passes through <strong>five nymphal stages</strong> on the way to adulthood, and <strong>each of those stages requires a blood meal before the moult can proceed</strong> &mdash; a point the <a href="https://bedbugs.tennessee.edu/biology-and-identification/" className="text-emerald-700 underline">University of Tennessee bed bug program</a> states plainly in its biology summary. No blood, no moult. So every husk in your mattress seam is not just a sign that a bed bug was present; it is physical proof that a bed bug <em>fed on a person in that bed</em> and then grew.</p>
          <p>That single fact does most of the diagnostic work on this page. It closes off the most comforting explanation people reach for &mdash; that a bug hitchhiked in on a suitcase and died &mdash; because a hitchhiker that never fed leaves no husk. It also explains why shells are so often the first evidence found: one bug reaching adulthood can leave up to five of them, so the casings pile up faster than the bugs themselves do, and they sit still in a seam where a live bug will not.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">The two purchases that turn a pile of husks into an actual answer:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="climbup bed bug interceptor">Interceptor traps &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="saferest mattress encasement">Zippered encasements &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bed bug inspection flashlight magnifier kit">Inspection kit &rarr;</BuyLink>
          </div>

          <h2>Reading the Sizes: What Five Different Husks in One Seam Tells You</h2>
          <p>Because each moult produces a larger husk than the last, the size spread in a seam is a readable record. First-stage skins are roughly a millimetre and a half &mdash; near the limit of what an unaided eye resolves &mdash; and the last nymphal skin approaches the size of an adult bed bug, about four and a half millimetres, the familiar apple-seed comparison.</p>
          <ul>
            <li><strong>Only large husks.</strong> Late-stage bugs were present. Common where a small number of adults or near-adults arrived and fed, and worth confirming before you conclude anything about scale.</li>
            <li><strong>A spread of sizes, small ones included.</strong> This is the finding that matters. Tiny husks mean eggs hatched <em>in that location</em> and the young found a host often enough to keep moulting. That is an established, reproducing population rather than an introduction, and it changes the plan: containment and a full room protocol, not a wait-and-see.</li>
            <li><strong>Husks in more than one room.</strong> Treat the whole floor as involved. Bed bugs spread along the routes people take &mdash; a couch someone naps on, a second bedroom, a favourite chair &mdash; not randomly.</li>
          </ul>
          <p>What the sizes cannot tell you is <em>when</em>. Chitin is inert and dry; an undisturbed husk in a box spring corner survives long after the population that produced it is gone. This is exactly why second-hand furniture and recently treated apartments can be full of casings with nothing alive in them, and why the next section exists.</p>

          <h2>Old Evidence or a Live Problem? The Two-Week Test</h2>
          <p>There is no way to date a shell by looking at it, so stop trying and run a clean test instead. It costs almost nothing and it settles the question properly:</p>
          <ol>
            <li><strong>Reset the surface.</strong> Vacuum every husk, egg and dark spot out of the seams, frame joints and baseboard with a sealed-HEPA machine, then empty the canister or bag into a sealed bag outside immediately. You are erasing the historical record on purpose.</li>
            <li><strong>Encase the mattress and box spring.</strong> A white, smooth encasement is the cleanest possible detection surface. Anything new shows up on it.</li>
            <li><strong>Set interceptors under every leg</strong> of the bed and any sofa or chair someone sleeps in, and keep bedding, throws and skirts from touching the floor &mdash; a hanging duvet is a bridge that bypasses the trap entirely.</li>
            <li><strong>Keep sleeping there.</strong> This is the step people get wrong. Bed bugs move toward a sleeping host; an empty bed produces empty traps and a false all-clear. Moving to the couch does not protect you &mdash; it invites the population to follow you into a second room.</li>
            <li><strong>Look again at two weeks.</strong> New husks, new spotting on the encasement, or anything in a cup means active. Nothing at all, with someone sleeping in that bed the whole time, points at historical evidence.</li>
          </ol>
          <p>If the answer is active, the full step-by-step is in our <Link href="/blog/how-to-get-rid-of-bed-bugs-canada">how to get rid of bed bugs in Canada guide</Link>, and the inspection routine for finding the rest of the harbourage is in <Link href="/blog/how-to-check-for-bed-bugs-canada">how to check for bed bugs</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="climbup bed bug interceptor">Check interceptor traps on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>The Carpet Beetle Problem &mdash; Why Half of These Finds Are the Wrong Insect</h2>
          <p>Carpet beetles are the most common false positive in this entire category, and it is easy to see why: their larvae also shed skins repeatedly, they also leave those skins along baseboards and under beds, and the husks are also small, brown and insect-shaped. People find them while searching for bed bugs, and confirmation bias does the rest.</p>
          <p>One feature separates them cleanly. <strong>Carpet beetle larval skins are hairy.</strong> They are bristly and banded, tapered like a minute caterpillar, frequently with a tuft of longer hairs at the rear. A bed bug shell has no hairs at all: it is smooth, broadly oval, and flat. Under a magnifier at any decent light angle the difference is not subtle.</p>
          <p>Location helps too. Bed bug casings concentrate within reach of where a person sleeps, because that is where the bugs harbour. Carpet beetle skins turn up in wool rugs, closets, stored blankets, under furniture that never moves, and around light fixtures and window sills where the adult beetles die. If the husks are hairy and they are in the closet rather than the bed, close this page and go look at your stored wool &mdash; you have a textile pest, and none of the bed bug spending applies. Our <Link href="/blog/how-to-get-rid-of-carpet-beetles-canada">carpet beetle guide</Link> covers that job, and <Link href="/blog/bugs-that-look-like-bed-bugs-canada">bugs that look like bed bugs</Link> works through the other look-alikes if the husk turns out to have a live version somewhere.</p>

          <h2>Where the Shells Are Pointing</h2>
          <p>Moulting happens in the harbourage, not out in the open, which makes a concentration of husks a direction sign rather than just a finding. Follow it. In order of how often they hold the population:</p>
          <ul>
            <li><strong>Mattress piping, seams and the tag area</strong> &mdash; drag a thin card along the piping and see what comes out.</li>
            <li><strong>Box spring corners and the fabric dust cover underneath</strong> &mdash; the single most productive spot in most homes, and the one people skip because it means standing the box spring on end.</li>
            <li><strong>Bed frame joints, bolt holes and slat ends</strong>, especially wooden frames.</li>
            <li><strong>The back and mounting of the headboard</strong>, particularly a wall-mounted one.</li>
            <li><strong>Nightstand drawer runners and the underside of the drawer bottom.</strong></li>
            <li><strong>The baseboard and carpet edge nearest the bed</strong>, plus any lifted carpet tack strip.</li>
          </ul>
          <p>Husks lying loose on open floor in the middle of a room have almost always been moved there &mdash; by a vacuum, a sheet change, or a foot. Do not read them as a harbourage.</p>

          <h2>The First 48 Hours: What to Do, and Three Things Never to Do</h2>
          <p><strong>Do:</strong> encase the mattress and box spring; set interceptors; run all bedding and any clothing from the room through a hot wash and, more importantly, a <em>hot dryer cycle</em>, since dryer heat is the reliable killer rather than the wash; bag laundry in sealed bags for transport so you are not seeding the hallway or the car; pull the bed away from the wall and keep the bedding off the floor; and photograph everything you find with something for scale, because dated photographs matter enormously if you are a tenant.</p>
          <p><strong>Never:</strong></p>
          <ul>
            <li><strong>Throw out the mattress.</strong> It is the most expensive wrong move available, it treats none of the frame, headboard or baseboard population, and a new mattress in an untreated room is reinfested within days. Encase instead.</li>
            <li><strong>Move to the couch or a spare room.</strong> Bed bugs follow the host. Sleeping elsewhere converts a one-room problem into a two-room problem, and it also blinds your interceptors.</li>
            <li><strong>Set off a total-release fogger.</strong> Foggers deposit residue on open surfaces where bed bugs are not, drive survivors deeper into wall voids and adjoining units, and leave the seams and joints where the population lives entirely untouched.</li>
          </ul>

          <h2>What Canada Legally Sells &mdash; and What the Forums Will Tell You to Import</h2>
          <p>Any product sold in Canada to kill an insect is a pest control product and carries a <strong>PCP registration number</strong> on its Canadian label, issued by Health Canada&rsquo;s Pest Management Regulatory Agency. Several of the products bed bug forums push hardest at Canadians &mdash; US-market professional concentrates in particular &mdash; are not registered here, and importing an unregistered pesticide is not a grey area. It is also frequently pointless: pyrethroid resistance is widespread in bed bug populations, so a smuggled bottle often leans on exactly the chemistry the bugs already survive. We cover that trade-off in our <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa review</Link> and our <Link href="/blog/crossfire-bed-bug-concentrate-review-canada">Crossfire concentrate review</Link>.</p>
          <p>Health Canada also publishes a plain-language <a href="https://www.canada.ca/en/health-canada/services/pest-control-tips/bedbugs-what-are-they.html" className="text-emerald-700 underline">bed bug overview</a> and a room-checking fact sheet worth reading before you spend anything. On the health question specifically: there are no known cases of infectious disease transmitted to people by bed bug bites. The harms are skin reactions, rare severe allergic reactions, and the anxiety and sleep loss that come with living in an infested home &mdash; the last of which is real, frequently underestimated, and not a reason to panic-buy the most aggressive product you can find.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="saferest mattress encasement">Check zippered encasements on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Renting in Ontario? Read This Before You Buy Anything</h2>
          <p>If the shells are in a rental unit, the most valuable thing on this page is not a product. Ontario&rsquo;s <em>Residential Tenancies Act</em> requires landlords to keep a rental in a good state of repair and fit for habitation, and Landlord and Tenant Board decisions have consistently applied that to paying for professional bed bug treatment regardless of how the bugs arrived. Tenants are expected to cooperate with preparation and access. In practice that means: report it <strong>in writing</strong> with dated photographs, keep every reply, do not start your own chemical treatment that a landlord can later blame for a failed job, and in Toronto escalate to 311 and RentSafeTO if nothing happens. This is general information rather than legal advice.</p>
          <p>The reason it matters so much here: in a multi-unit building, treating your own unit while the adjoining ones go untreated is a treadmill. Your money goes further on containment &mdash; encasements, interceptors, laundry heat &mdash; while the building does the treatment it is obliged to do.</p>

          <h2>When a Professional Is Genuinely the Cheaper Answer</h2>
          <p>Being an affiliate publisher is not a reason to pretend everything is a purchase. The honest split looks like this. <strong>Do-it-yourself is realistic</strong> when you own a detached home, the evidence is confined to one room, clutter is low, you caught it early, and you can physically do the work &mdash; standing the box spring on end, steaming seams for an hour, running the laundry cycle repeatedly.</p>
          <p><strong>A professional is usually cheaper in the end</strong> when you live in an apartment, condo or rooming house; when more than one room shows evidence; when clutter or storage makes a thorough job impossible; when the occupant is elderly, has limited mobility, or cannot manage a demanding preparation routine; or when two rounds of careful DIY have already failed. In those cases the DIY money tends to get spent twice &mdash; first on the failed attempt, then on the professional job anyway &mdash; and the delay lets the population spread to rooms that were clean when you started. For what treatment typically costs in Canada and how to read a quote, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.</p>

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

          <h2>Related Guides</h2>
          <ul>
            <li><strong>Next step if this is active:</strong> <Link href="/blog/how-to-get-rid-of-bed-bugs-canada">How to Get Rid of Bed Bugs in Canada — The Full Protocol</Link></li>
            <li><strong>The other evidence page:</strong> <Link href="/blog/bed-bug-stains-poop-droppings-canada">Bed Bug Stains and Droppings — What the Marks Actually Are</Link></li>
            <li><Link href="/blog/bugs-that-look-like-bed-bugs-canada">Bugs That Look Like Bed Bugs in Canada — The Nine Look-Alikes</Link></li>
            <li><Link href="/blog/baby-bed-bugs-nymphs">Baby Bed Bugs — What Nymphs Look Like at Each Stage</Link></li>
            <li><Link href="/blog/how-to-check-for-bed-bugs-canada">How to Check for Bed Bugs — Hotel, Apartment and Used Furniture</Link></li>
            <li><Link href="/blog/bed-bug-interceptor-traps-canada">Bed Bug Interceptor Traps — How to Set Them So They Actually Read</Link></li>
            <li><Link href="/blog/bed-bug-mattress-encasement-canada">Bed Bug Mattress Encasements in Canada — Sizing and the 12–18 Month Rule</Link></li>
            <li><Link href="/blog/best-bed-bug-detector-canada">Best Bed Bug Detectors in Canada — What Actually Confirms an Infestation</Link></li>
            <li><Link href="/blog/how-to-kill-bed-bug-eggs-canada">How to Kill Bed Bug Eggs — Why Sprays Miss Them</Link></li>
            <li><Link href="/blog/best-bed-bug-steamer-canada">Best Bed Bug Steamer in Canada — Dry Vapour Compared</Link></li>
            <li><Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">Best Sealed-HEPA Vacuum for Bed Bugs and Fleas in Canada</Link></li>
            <li><Link href="/blog/tick-vs-bed-bug">Tick vs Bed Bug — Telling Two Blood Feeders Apart</Link></li>
            <li><Link href="/blog/bed-bug-control-canada-hub">The Canadian Bed Bug Control Hub — Every Guide in One Place</Link></li>
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
        subtext="We don't treat bed bugs — mosquito and tick control across 19 GTA cities is what we're licensed for. If the bites turned out to be happening outdoors, that part we can help with."
      />
    </>
  )
}
