import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, faqSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { slugifyHeading } from '@/lib/guides'
import data from '@/lib/article-index.json'
import bugBitesGuide from '@/content/guides/bug-bites.json'
import BiteQuiz, { type BiteLinkView, type BiteResultView } from '@/components/BiteQuiz'
import ConfusedWith from '@/components/ConfusedWith'
import Photo from '@/components/Photo'
import {
  CULPRITS,
  CULPRIT_IDS,
  QUESTIONS,
  QUIZ_PATH,
  RED_FLAGS,
  UNSURE,
  type BiteLinkSpec,
  type CulpritCopy,
  type CulpritId,
  type ResultId,
} from '@/lib/bite-quiz'

/**
 * "What bit me?" — the bug bite identifier (Oct 2026). Six scored questions (lib/bite-quiz.ts,
 * components/BiteQuiz.tsx), then the two or three most likely biters, each with the reasons its
 * answers earned, a real photo, how to confirm it and the site's page about that bite.
 *
 * Built after reading the top three US results for "bug bite identifier" (Orkin's bite list,
 * Prevention's photo slideshow, a paid photo-scan app): none narrows the list from the reader's
 * own clues, none says how to confirm the culprit, and none links its sources.
 *
 * A reader tool under /tools: a traffic page (lib/page-roles.ts), so no quote prompt beyond the
 * one quiet line at the end, and an ad page (lib/ad-routes.json). Nothing here is fixed to the
 * bottom of the screen. Not an article: no ReadNext (it would also mount the push prompt).
 *
 * Medical copy: never a diagnosis, always "most likely", the red-flag box on every result and on
 * the page, and every claim tied to a source listed at the bottom. Photos come only from the
 * photo ledger through the Photo component, each with a literal id so scripts/check-photos.mjs
 * can verify it.
 */

const META_TITLE = 'Bug Bite Identifier: What Bit Me? Quiz & Photos'
const DESCRIPTION =
  'Answer 6 quick questions about where you were, the pattern and how it feels. Get the most likely biters, real bite photos and the signs that need a doctor.'
const PUBLISHED = 'October 20, 2026'

export const metadata: Metadata = buildMetadata({ title: META_TITLE, description: DESCRIPTION, canonical: QUIZ_PATH })

// ── Links: every one must exist, or the build fails ─────────────────────────────────────

type Article = { path: string; title: string; hook: string }
const ARTICLES = new Map((data.articles as Article[]).map((a) => [a.path, a]))
// Section anchors this page links into, read from the guide itself.
const SECTIONS: Record<string, Set<string>> = {
  '/learn/bug-bites': new Set(
    (bugBitesGuide.body as unknown as { type: string; text?: string }[]).filter((b) => b.type === 'h2' && b.text).map((b) => slugifyHeading(b.text as string)),
  ),
}

function link(spec: BiteLinkSpec): BiteLinkView {
  const href = typeof spec === 'string' ? spec : spec.path
  const [path, hash] = href.split('#')
  const a = ARTICLES.get(path)
  // Fail the build, not the reader: a result must never link to a page that is gone.
  if (!a) throw new Error(`bug bite identifier: ${path} is not an article (lib/bite-quiz.ts)`)
  if (hash && !SECTIONS[path]?.has(hash)) throw new Error(`bug bite identifier: ${href} names a section that does not exist`)
  return { path: href, title: typeof spec === 'string' ? a.title : spec.label, hook: a.hook }
}

const view = (id: ResultId, c: CulpritCopy): BiteResultView => ({
  id,
  name: c.name,
  short: c.short,
  summary: c.summary,
  confirm: c.confirm,
  ...(c.caution && { caution: c.caution }),
  links: c.links.map(link),
})

const VIEWS = {
  ...Object.fromEntries(CULPRIT_IDS.map((id) => [id, view(id, CULPRITS[id])])),
  unsure: view('unsure', UNSURE),
} as Record<ResultId, BiteResultView>

// ── Photos: one per biter, from the ledger (data/god-build/photos.json) ─────────────────
// Captions say no more than each photo's source does. No horse fly or deer fly BITE photo is on
// record yet, so that result shows the fly itself.

const PHOTOS: Record<CulpritId, ReactNode> = {
  mosquito: <Photo id="mosquito-bite-welts" caption="Two mosquito bites on a leg. The photographer puts them down to Aedes mosquitoes in the house." />,
  'bed-bug': <Photo id="bed-bug-bites-forearm" caption="Bed bug bites on a forearm, as labeled by the physician who photographed them." />,
  flea: <Photo id="flea-bites-lower-leg" caption="Flea bites on a lower leg, as labeled by the person who photographed them." />,
  tick: (
    <Photo
      id="erythema-migrans-rash"
      caption="Erythema migrans, the expanding rash of early Lyme disease, where a tick bit a woman on the back of her upper arm (CDC). Not every Lyme rash has this bull’s-eye look."
    />
  ),
  chigger: <Photo id="chigger-bites-ruler" caption="Three chigger bites on an arm about 10 days after the bites, beside a ruler. Each welt is about 1/8 inch (3 to 4 mm) across (CDC)." />,
  'no-see-um': <Photo id="biting-midge-bites-ankles" caption="Red bumps on a man’s ankles after bites from biting midges, also called no-see-ums (CDC)." />,
  'bee-wasp': <Photo id="yellowjacket-sting-swelling" caption="A woman’s right hand, swollen a day after a yellowjacket sting, beside her other hand (CDC)." />,
  'fire-ant': <Photo id="fire-ant-sting-pustule" caption="A pustule with a red halo on a leg, from a fire ant sting (CDC)." />,
  'biting-fly': <Photo id="deer-fly" caption="A female deer fly, Chrysops lateralis, with its banded wings (CDC). Only the females bite." />,
  spider: (
    <Photo
      id="brown-recluse-bite-early"
      caption="Redness around a brown recluse spider bite, photographed before the tissue damage that followed (CDC). Most spider bites are far milder."
    />
  ),
  mite: <Photo id="bird-mite-bites" caption="Bumps (papular dermatitis) on an arm from tropical fowl mite (bird mite) bites, from a published case report. The arrows mark the affected areas." />,
}

// ── The red-flag box ────────────────────────────────────────────────────────────────────

function RedFlagBox({ headingId, heading = true }: { headingId: string; heading?: boolean }) {
  return (
    <div role="region" aria-labelledby={headingId} className="rounded-2xl border-2 border-red-200 bg-white p-4 sm:p-6">
      <p id={headingId} className={heading ? 'text-lg font-extrabold text-red-800' : 'sr-only'}>
        When a bite needs a doctor
      </p>
      <div className={`grid gap-5 sm:grid-cols-2 ${heading ? 'mt-3' : ''}`}>
        {[RED_FLAGS.emergency, RED_FLAGS.doctor].map((group) => (
          <div key={group.title}>
            <p className="text-sm font-extrabold uppercase tracking-wider text-red-700">{group.title}</p>
            <ul className="mt-2 space-y-1.5 text-[15px] leading-relaxed text-gray-800">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-0.5 font-extrabold text-red-600">!</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-gray-600">
        From the American Academy of Dermatology, CDC, Mayo Clinic, MedlinePlus, the NHS and the Public Health Agency of Canada (see{' '}
        <a href="#sources" className="underline">sources</a>). 911 is the emergency number in Canada too. This tool gives general information, not medical
        advice.
      </p>
    </div>
  )
}

// ── Indexable content ───────────────────────────────────────────────────────────────────

type Row = { biter: string; href: BiteLinkSpec; looks: string; where: string; when: string; feel: string }

const COMPARE: Row[] = [
  { biter: 'Mosquito', href: CULPRITS.mosquito.links[0], looks: 'An itchy, inflamed bump; sometimes small blisters', where: 'Often on skin that clothing leaves bare', when: 'A few minutes after the bite', feel: 'Itch more than pain' },
  { biter: 'Bed bug', href: CULPRITS['bed-bug'].links[0], looks: 'An itchy welt, often with a darker spot in the middle', where: 'A zigzag line or a cluster on the face, neck, arms and hands', when: 'Usually noticed the next morning; first bites can take up to 14 days to itch', feel: 'Itch, sometimes intense' },
  { biter: 'Flea', href: CULPRITS.flea.links[0], looks: 'A small bump, sometimes with a red halo', where: 'Rows or groups on the feet, ankles and calves', when: 'At home, often with a pet that has fleas; fleas hide in carpets, furniture and bedding', feel: 'Itch more than pain' },
  { biter: 'Chigger', href: CULPRITS.chigger.links[0], looks: 'A very itchy red spot or pimple', where: 'A speckled line where clothing is tight: sock line, waistband, bra line, backs of the knees', when: 'Up to 3 hours after; the itch peaks at 24 to 48 hours and fades over about 2 weeks', feel: 'Intense itch' },
  { biter: 'No-see-um', href: CULPRITS['no-see-um'].links[0], looks: 'A small red welt about 1/8 inch across, or a water-filled blister', where: 'Bare skin, often many bites', when: 'Around dawn or dusk, near water', feel: 'Intense itch; can also be painful' },
  { biter: 'Tick', href: CULPRITS.tick.links[0], looks: 'A small red bump that fades in 1 to 2 days; the tick may still be attached', where: 'One spot. Check the hair, ears, armpits, belly button, waist, backs of the knees and groin', when: 'Often not felt; a Lyme rash can appear 3 to 30 days later', feel: 'Usually none; the Lyme rash is rarely itchy or painful' },
  { biter: 'Spider', href: CULPRITS.spider.links[0], looks: 'No reaction, or some redness, itching or swelling; a black widow bite leaves two puncture marks', where: 'Often blamed with no spider seen', when: 'Sometimes not noticed until pain or other symptoms start', feel: 'From nothing to pain like a bee sting; black widow pain can spread' },
  { biter: 'Fire ant', href: CULPRITS['fire-ant'].links[0], looks: 'A burning red bump that turns into a white pustule', where: 'Several stings close together, after a mound is disturbed', when: 'At once', feel: 'Burning, then itch' },
  { biter: 'Bee, wasp or yellowjacket', href: CULPRITS['bee-wasp'].links[0], looks: 'A welt with swelling; a stinger left in the skin means a honey bee', where: 'Usually one sting', when: 'At once', feel: 'Sharp, burning pain' },
  { biter: 'Horse fly or deer fly', href: CULPRITS['biting-fly'].links[0], looks: 'A painful bite that can bleed', where: 'Deer flies: head and shoulders. Horse flies, which feed mostly on large animals: legs and body', when: 'At once, outdoors in the daytime', feel: 'Pain' },
  { biter: 'Bird mites', href: CULPRITS.mite.links[0], looks: 'Small, irritating bumps; the itch can last a long time', where: 'Indoors, after birds have nested on the building', when: 'After the nesting birds leave', feel: 'Itch' },
  { biter: 'Scabies (not a bite: see a doctor)', href: { path: '/learn/bug-bites#what-else-can-look-like-a-bug-bite', label: 'Scabies' }, looks: 'A pimple-like rash; sometimes tiny raised, crooked lines', where: 'Between the fingers, wrists, elbows, armpits, waist', when: 'Up to 3 to 6 weeks after a first infestation; 1 to 4 days after a repeat one', feel: 'Intense itch, worse at night' },
]

const CLUES: { title: string; text: string }[] = [
  {
    title: 'Where on your body',
    text: 'Bites on skin left bare in bed (face, neck, arms, hands) fit bed bugs (Mayo Clinic). Feet, ankles and calves fit fleas, and sock lines, waistbands and bra lines fit chiggers (Cleveland Clinic). The head and shoulders fit deer flies (Purdue Extension).',
  },
  {
    title: 'The pattern',
    text: 'Bed bug bites often form a zigzag line (AAD) or a cluster (Mayo Clinic), and flea and chigger bites can sit in rows or speckled lines (Cleveland Clinic). A red rash that keeps spreading days after a tick bite is a reason to see a doctor (CDC). A lone bump is often blamed on a spider, but UC IPM says spiders are often blamed with no proof.',
  },
  {
    title: 'The timing',
    text: 'A mosquito bite forms an itchy bump within a few minutes (Mayo Clinic). Chigger bites can take up to three hours to show (Cleveland Clinic). First bed bug bites can take up to 14 days to itch (AAD). The Lyme rash appears 3 to 30 days after a tick bite (CDC).',
  },
  {
    title: 'How it feels',
    text: 'Instant sharp or burning pain fits bee and wasp stings, fire ants and horse or deer flies. Itch more than pain fits mosquitoes, fleas and chiggers (MedlinePlus; Cleveland Clinic), while no-see-um bites can hurt as well as itch intensely (University of Arizona Extension). Feeling nothing at all fits ticks, whose saliva can numb the skin (CDC), and bed bugs, which most people sleep through (AAD).',
  },
  {
    title: 'Find the biter',
    text: 'The insect is the proof. Check the mattress seams, box spring and headboard (EPA), part your pet’s fur at the ears, neck, back and belly (Cleveland Clinic), check your whole body for ticks (CDC), and save anything you catch so an extension office can identify it (UC IPM).',
  },
]

type Faq = { question: string; answer: string; more?: BiteLinkSpec }

const FAQS: Faq[] = [
  {
    question: 'How do I figure out what bit me?',
    answer:
      'Look at the clues around the bite rather than the bump alone: where you were, when the bites appeared, the pattern they make, where they are on your body and whether they hurt or itch. The six questions above score those clues. Then look for the biter, because the insect is the real proof: check the mattress seams (EPA), your pets and your skin for ticks (CDC), and save anything you catch so an extension office can identify it (UC IPM).',
    more: '/learn/bug-bites',
  },
  {
    question: 'Can I take a picture of a bug bite and find out what it is?',
    answer:
      'A photo of the bite alone is a weak clue, because different insects leave similar marks and the same insect can leave different marks on different people. EPA calls bites a poor indicator of bed bugs, and UC IPM says confirming an insect or mite as the cause takes a specimen identified by a trained entomologist. A photo is still worth taking: one a day, next to a ruler, shows a doctor how the bite is changing.',
  },
  {
    question: 'Is there an app or AI that can identify bug bites?',
    answer:
      'Some apps say they can name the biter from a photo of the bite. Treat any answer, including this tool’s, as a lead rather than a diagnosis: bites from different insects look alike, and the insect itself, or a doctor’s exam of a rash, is what settles it. This tool asks where, when and how the bites appeared, because those clues often say more than the bump does, and it shows the reason behind every suggestion.',
  },
  {
    question: 'What bit me in my sleep?',
    answer:
      'Bed bugs are the usual suspect when itchy welts appear overnight, often in a zigzag line or a cluster on the face, neck, arms or hands (AAD; Mayo Clinic). Check the seams of the mattress and box spring and the headboard for the bugs, rusty stains and dark spots (EPA). Mosquitoes, which bite day and night (CDC), and fleas living in the bedding (Cleveland Clinic) are the other common answers.',
    more: '/blog/bed-bug-bites',
  },
  {
    question: 'What bug bites in a line of three?',
    answer:
      'Bed bug bites often appear as welts in a zigzag line (AAD) or in a rough line or cluster (Mayo Clinic). Fleas can also leave bites in a row or a group, and chiggers leave a speckled line where clothing presses on the skin (Cleveland Clinic). Place and timing tell them apart: bed bug bites turn up after sleep, flea bites sit on the feet and ankles, and chigger bites follow time in long grass.',
    more: '/blog/bed-bug-bites-vs-mosquito-bites',
  },
  {
    question: 'What causes small itchy bites only on my ankles and lower legs?',
    answer:
      'Fleas are the classic cause: Cleveland Clinic says flea bites are most common on the feet, calves and ankles, and uncommon above the knee unless you spend long periods sitting or lying down. Chiggers also bite the ankles and lower legs, especially along the sock line, and no-see-ums bite bare skin near water at dawn or dusk (University of Arizona Extension). A pet that scratches more than usual points to fleas.',
    more: '/blog/flea-bites-on-humans',
  },
  {
    question: 'What bite leaves two puncture marks?',
    answer:
      'Spiders have two fangs, and CDC’s workplace safety institute (NIOSH) says a black widow bite leaves two puncture marks. Two dots alone do not prove a spider, though: UC IPM says people and their doctors often blame spiders with no proof, and that most spiders cannot get their fangs through an adult’s skin. Get medical care if you think a black widow or a brown recluse bit you (NIOSH).',
    more: '/blog/what-does-a-spider-bite-look-like',
  },
  {
    question: 'What does a red ring or bull’s-eye around a bite mean?',
    answer:
      'A red rash that keeps growing over several days after a tick bite can be erythema migrans, the rash of early Lyme disease. CDC says it begins 3 to 30 days after the bite, can reach 12 inches across or more, may feel warm but is rarely itchy or painful, and does not always look like a bull’s-eye. See a doctor. A small red bump that appears right after a tick bite and fades within a day or two is a normal reaction, not a sign of Lyme disease (CDC).',
    more: '/blog/what-does-a-tick-bite-look-like',
  },
  {
    question: 'Why do I have bites but cannot find any bugs?',
    answer:
      'Several biters are hard to see: chiggers are almost invisible and often drop off before the itch starts (Cleveland Clinic), no-see-ums often go unnoticed (University of Arizona Extension), and bed bugs hide in seams and cracks between meals (AAD; EPA). Bird mites can come indoors after nesting birds leave (UF/IFAS). Scabies, dry skin and irritants such as fiberglass can also be mistaken for bites (CDC; UC IPM), so see a doctor if bites keep appearing and no insect turns up.',
  },
  {
    question: 'How long do bug bites last?',
    answer:
      'Most bites and stings get better within a few days (NHS). Mosquito and flea bites usually last only a few days, chigger itching peaks in the first 24 to 48 hours and fades over about two weeks (Cleveland Clinic), and a fire ant pustule can take several weeks to disappear (UC IPM). A bite that is getting worse instead of better needs a doctor.',
  },
]

const FAQ_LINKS = FAQS.map((f) => (f.more ? link(f.more) : null))
const COMPARE_LINKS = COMPARE.map((r) => link(r.href))

type Source = { title: string; publisher: string; url: string }

const SOURCES: Source[] = [
  { title: 'Bug Bites and Stings: When to See a Dermatologist', publisher: 'American Academy of Dermatology', url: 'https://www.aad.org/public/everyday-care/injured-skin/bites/bug-bites-see-dermatologist' },
  { title: 'Bedbugs: Signs and Symptoms', publisher: 'American Academy of Dermatology', url: 'https://www.aad.org/public/diseases/a-z/bed-bugs-symptoms' },
  { title: 'Signs and Symptoms of Untreated Lyme Disease', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/lyme/signs-symptoms/index.html' },
  { title: 'What to Do After a Tick Bite', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/ticks/after-a-tick-bite/index.html' },
  { title: 'Preventing Tick Bites', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/ticks/prevention/index.html' },
  { title: 'About Ticks and Tickborne Disease', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/ticks/about/index.html' },
  { title: 'Preventing Mosquito Bites', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/mosquitoes/prevention/index.html' },
  { title: 'Venomous Spiders at Work', publisher: 'CDC National Institute for Occupational Safety and Health', url: 'https://www.cdc.gov/niosh/outdoor-workers/about/venomous-spiders.html' },
  { title: 'Symptoms of Scabies', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/scabies/signs-symptoms/index.html' },
  { title: 'Fire ant sting pustule (image 6347)', publisher: 'CDC Public Health Image Library', url: 'https://wwwn.cdc.gov/phil/Details.aspx?pid=6347' },
  { title: 'Lyme Disease: Symptoms and Treatment', publisher: 'Public Health Agency of Canada', url: 'https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html' },
  { title: 'How to Find Bed Bugs', publisher: 'US Environmental Protection Agency', url: 'https://www.epa.gov/bedbugs/how-find-bed-bugs' },
  { title: 'Insect Bites and Stings', publisher: 'MedlinePlus, US National Library of Medicine', url: 'https://medlineplus.gov/ency/article/000033.htm' },
  { title: 'Insect Bites and Stings', publisher: 'NHS', url: 'https://www.nhs.uk/conditions/insect-bites-and-stings/' },
  { title: 'Mosquito Bites: Symptoms and Causes', publisher: 'Mayo Clinic', url: 'https://www.mayoclinic.org/diseases-conditions/mosquito-bites/symptoms-causes/syc-20375310' },
  { title: 'Bedbugs: Symptoms and Causes', publisher: 'Mayo Clinic', url: 'https://www.mayoclinic.org/diseases-conditions/bedbugs/symptoms-causes/syc-20370001' },
  { title: 'Bee Sting: Symptoms and Causes', publisher: 'Mayo Clinic', url: 'https://www.mayoclinic.org/diseases-conditions/bee-stings/symptoms-causes/syc-20353869' },
  { title: 'Mosquito Bites', publisher: 'Cleveland Clinic', url: 'https://my.clevelandclinic.org/health/diseases/17695-mosquito-bites' },
  { title: 'Flea Bites', publisher: 'Cleveland Clinic', url: 'https://my.clevelandclinic.org/health/diseases/21718-flea-bites' },
  { title: 'Chigger Bites', publisher: 'Cleveland Clinic', url: 'https://my.clevelandclinic.org/health/diseases/23267-chigger-bites' },
  { title: 'Something’s Biting Me, but I Can’t See It', publisher: 'University of Arizona Cooperative Extension', url: 'https://extension.arizona.edu/publication/somethings-biting-me-i-cant-see-it' },
  { title: 'Spiders (Pest Notes)', publisher: 'University of California Statewide IPM Program', url: 'https://ipm.ucanr.edu/home-and-landscape/spiders/' },
  { title: 'Red Imported Fire Ant (Pest Notes)', publisher: 'University of California Statewide IPM Program', url: 'https://ipm.ucanr.edu/home-and-landscape/red-imported-fire-ant/' },
  { title: 'Ants (Pest Notes)', publisher: 'University of California Statewide IPM Program', url: 'https://ipm.ucanr.edu/home-and-landscape/ants/' },
  { title: 'Itching and Infestation: What’s Attacking Me?', publisher: 'University of California Statewide IPM Program', url: 'https://ipm.ucanr.edu/home-and-landscape/itching-and-infestation-whats-attacking-me/' },
  { title: 'Managing Household Ant Pests (B-6183)', publisher: 'Texas Cooperative Extension (now Texas A&M AgriLife Extension)', url: 'https://extensionentomology.tamu.edu/wp-content/uploads/2017/09/Ants_household_B6183.pdf' },
  { title: 'Bees and Wasps (G7391)', publisher: 'University of Missouri Extension', url: 'https://extension.missouri.edu/publications/g7391' },
  { title: 'Horse and Deer Flies: Biology and Public Health Risk (E-246)', publisher: 'Purdue University Extension', url: 'https://extension.entm.purdue.edu/publications/E-246/E-246.html' },
  { title: 'Tropical Fowl Mite (EENY-297/IN575)', publisher: 'University of Florida IFAS Extension', url: 'https://ask.ifas.ufl.edu/publication/IN575' },
]

const H2 = 'mb-3 scroll-mt-28 text-2xl font-extrabold leading-tight text-brand-900 sm:text-3xl'

export default function BugBiteIdentifierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Learning Centre', url: '/learn' },
              { name: 'Bug Bites', url: '/learn/bug-bites' },
              { name: 'Bug Bite Identifier', url: QUIZ_PATH },
            ]),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS.map(({ question, answer }) => ({ question, answer })))) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 px-4 py-12 text-white">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap gap-1 text-sm text-brand-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/learn" className="hover:text-white">Learning Centre</Link><span>/</span>
            <Link href="/learn/bug-bites" className="hover:text-white">Bug Bites</Link><span>/</span>
            <span className="text-white">Bug Bite Identifier</span>
          </nav>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">Bug Bite Identifier: What Bit Me?</h1>
          <p className="max-w-3xl text-xl text-brand-100">
            {QUESTIONS.length} quick questions about where you were, when you noticed the bites, the pattern they make and how they feel. You get the two or three most likely
            biters, a real photo of each, how to confirm it and the signs that mean you should see a doctor.
          </p>
          <p className="mt-5 text-sm text-brand-200">
            Published by{' '}
            <Link href="/buzzskito-history" className="font-semibold text-white underline-offset-2 hover:underline">BuzzSkito Mosquito &amp; Tick Control</Link> · {PUBLISHED} ·
            Checked against the <a href="#sources" className="underline">sources listed below</a>
          </p>
        </div>
      </section>

      <div className="bg-brand-50 px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-4xl">
          <BiteQuiz results={VIEWS} photos={PHOTOS} redFlags={<RedFlagBox headingId="bite-result-red-flags" />} />
          <p className="mt-4 text-xs leading-relaxed text-gray-600">
            How this works: each answer adds points to the biters it fits, using what CDC, the American Academy of Dermatology, Mayo Clinic, Cleveland Clinic, EPA and
            university extension services say about each one, and the result shows the reasons. It cannot see your skin, so treat the result as a place to start, and it
            is not medical advice. Your answers are not saved with your name; the site counts which answers are picked, through Google Analytics, to improve the tool.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            Found the bug itself? Identify it with the{' '}
            <Link href="/tools/tick-identifier" prefetch={false} data-recirc="quiz_result" data-recirc-kind="tool" data-recirc-target="tick-identifier" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">tick identifier</Link>{' '}
            or the{' '}
            <Link href="/tools/spider-identifier" prefetch={false} data-recirc="quiz_result" data-recirc-kind="tool" data-recirc-target="spider-identifier" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">spider identifier</Link>.
          </p>
        </div>
      </div>

      <section aria-labelledby="red-flags" className="bg-white px-4 pt-10">
        <div className="mx-auto max-w-4xl">
          <h2 id="red-flags" className={H2}>When a bug bite needs a doctor</h2>
          <p className="mb-5 text-gray-700">Most bites and stings settle on their own within a few days (NHS). These signs do not wait:</p>
          <RedFlagBox headingId="red-flags-box" heading={false} />
        </div>
      </section>

      <section aria-labelledby="compare" className="bg-white px-4 pt-12">
        <div className="mx-auto max-w-4xl">
          <h2 id="compare" className={H2}>Common bug bites compared</h2>
          <p className="mb-5 text-gray-700">
            The bump itself rarely names the biter, so compare the pattern, the place on your body, the timing and how it feels. Reactions vary: some people barely react
            to bites that leave others with large welts.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="sr-only">Common bug bites and stings compared by appearance, pattern, timing and feel</caption>
              <thead className="bg-brand-50 text-brand-900">
                <tr>
                  <th scope="col" className="sticky left-0 z-10 bg-brand-50 px-3 py-2.5 font-extrabold">Biter</th>
                  <th scope="col" className="px-3 py-2.5 font-extrabold">What one bite looks like</th>
                  <th scope="col" className="px-3 py-2.5 font-extrabold">Pattern and place on the body</th>
                  <th scope="col" className="px-3 py-2.5 font-extrabold">When it shows up</th>
                  <th scope="col" className="px-3 py-2.5 font-extrabold">Itch or pain</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r, i) => (
                  <tr key={r.biter} className="border-t border-gray-200 align-top">
                    <th scope="row" className="sticky left-0 z-10 w-32 bg-white px-3 py-2.5 font-bold text-brand-900">
                      <Link href={COMPARE_LINKS[i].path} prefetch={false} data-recirc="quiz_result" data-recirc-kind="table" data-recirc-target={COMPARE_LINKS[i].path.split('#')[0].split('/').pop()} className="underline underline-offset-2 hover:text-brand-700">
                        {r.biter}
                      </Link>
                    </th>
                    <td className="px-3 py-2.5 text-gray-700">{r.looks}</td>
                    <td className="px-3 py-2.5 text-gray-700">{r.where}</td>
                    <td className="px-3 py-2.5 text-gray-700">{r.when}</td>
                    <td className="px-3 py-2.5 text-gray-700">{r.feel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-gray-500">
            From CDC, the American Academy of Dermatology, EPA, Mayo Clinic, Cleveland Clinic, MedlinePlus, the University of Arizona, UC IPM, the University of
            Missouri, Purdue and UF/IFAS (see sources). Scroll sideways on a phone to see every column.
          </p>
        </div>
      </section>

      <section aria-labelledby="clues" className="bg-white px-4 pt-12">
        <div className="mx-auto max-w-4xl">
          <h2 id="clues" className={H2}>How to tell what bit you</h2>
          <p className="mb-5 text-gray-700">Five clues do most of the work. The questions above ask about each one.</p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {CLUES.map((c) => (
              <li key={c.title} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="text-lg font-extrabold text-brand-900">{c.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-gray-700">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="photos" className="bg-white px-4 pt-12">
        <div className="mx-auto max-w-4xl">
          <h2 id="photos" className={H2}>Bite photos to compare</h2>
          <p className="text-gray-700">Real photos from CDC and other credited sources. Each one opens the full guide to that bite.</p>
          <ConfusedWith
            items={[
              { href: '/blog/when-to-worry-about-a-mosquito-bite', name: 'Mosquito bites', photo: 'mosquito-bite-welts', note: 'Itchy, inflamed bumps on bare skin, a few minutes after the bite' },
              { href: '/blog/bed-bug-bites', name: 'Bed bug bites', photo: 'bed-bug-bites-forearm', note: 'Welts in a line or cluster, found in the morning' },
              { href: '/blog/flea-bites-on-humans', name: 'Flea bites', photo: 'flea-bites-lower-leg', note: 'Small bumps on the feet, ankles and calves' },
              { href: '/blog/chigger-bites', name: 'Chigger bites', photo: 'chigger-bites-ruler', note: 'Very itchy red spots where socks and waistbands press' },
              { href: '/blog/what-does-a-tick-bite-look-like', name: 'Lyme disease rash', photo: 'erythema-migrans-rash', note: 'A red rash that keeps growing 3 to 30 days after a tick bite' },
              { href: '/blog/do-ants-bite', name: 'Fire ant stings', photo: 'fire-ant-sting-pustule', note: 'A burning sting that turns into a white pustule' },
            ]}
            title="Six common bites, side by side"
          />
        </div>
      </section>

      <section aria-labelledby="suspects" className="bg-white px-4 pt-4">
        <div className="mx-auto max-w-4xl">
          <h2 id="suspects" className={H2}>Already know what bit you?</h2>
          <p className="mb-6 text-gray-700">Go straight to the guides for that bite.</p>
          <ul className="grid gap-5 sm:grid-cols-2">
            {CULPRIT_IDS.map((id) => (
              <li key={id} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="text-lg font-extrabold text-brand-900">{VIEWS[id].name}</h3>
                <p className="mt-1 text-sm text-gray-600">{VIEWS[id].summary}</p>
                <ul className="mt-2 space-y-1.5 text-[15px]">
                  {VIEWS[id].links.map((l) => (
                    <li key={l.path}>
                      <Link href={l.path} prefetch={false} data-recirc="quiz_result" data-recirc-kind="list" data-recirc-target={l.path.split('#')[0].split('/').pop()} className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">
                        {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="faq" className="bg-white px-4 pt-12">
        <div className="mx-auto max-w-4xl">
          <h2 id="faq" className={H2}>Bug bite questions</h2>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <details key={f.question} className="group rounded-xl border border-gray-200 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-bold text-brand-900">
                  {f.question}
                  <span aria-hidden="true" className="text-xl leading-none text-emerald-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{f.answer}</p>
                {FAQ_LINKS[i] && (
                  <p className="mt-2 text-sm">
                    More:{' '}
                    <Link href={FAQ_LINKS[i]!.path} prefetch={false} data-recirc="quiz_result" data-recirc-kind="faq" data-recirc-target={FAQ_LINKS[i]!.path.split('#')[0].split('/').pop()} className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">
                      {FAQ_LINKS[i]!.title}
                    </Link>
                  </p>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="sources" className="bg-white px-4 pb-12 pt-12">
        <div className="mx-auto max-w-4xl">
          <h2 id="sources" className={H2}>Sources</h2>
          <ol className="list-decimal space-y-1.5 pl-5 text-sm text-gray-700">
            {SOURCES.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">{s.title}</a> — {s.publisher}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-gray-500">
            How this page was made: the questions, results and text were researched and drafted with AI assistance from the sources listed above, and a second,
            independent AI pass checked each factual claim against those sources. The photos come from CDC’s Public Health Image Library and other sources that allow
            reuse, with each credit shown under the photo. This page gives general information, not medical advice. Found an error? Email {BUSINESS.email}.
          </p>
          <p className="mt-6 text-xs text-gray-500">
            BuzzSkito treats mosquitoes and ticks in the Greater Toronto Area. Our guides on other biters are independent research: we do not treat them. Local?{' '}
            <Link href="/free-yard-assessment" className="underline hover:text-brand-700">Ask for a free yard assessment</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
