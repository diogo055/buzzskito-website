import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, faqSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { shareImage } from '@/lib/photos'
import data from '@/lib/article-index.json'
import routes from '@/data/us-pages/routes.json'
import IdentifierQuiz, { type IdLinkView, type IdResultView } from '@/components/IdentifierQuiz'
import ConfusedWith from '@/components/ConfusedWith'
import Photo from '@/components/Photo'
import type { CandidateCopy, IdLinkSpec } from '@/lib/identifier-quiz'
import { CANDIDATES, FLAGS, QUIZ, QUIZ_PATH, SAFETY, UNSURE, type TickId } from '@/lib/tick-quiz'

/**
 * "What kind of tick is this?" — the tick identifier (Oct 2026). Six scored questions
 * (lib/tick-quiz.ts on the shared engine lib/identifier-quiz.ts, components/IdentifierQuiz.tsx),
 * then the two or three most likely ticks, each with the reasons its answers earned, a real photo,
 * how to confirm it, what it can spread and the site's page about it. One answer ("antennae",
 * "wings") ends in "probably not a tick" and sends the reader to the look-alike pages.
 *
 * Built after reading the top three US results for "tick identifier" and "what kind of tick is
 * this" (data/god-build/research/top3/tick-identifier.md): URI TickEncounter's Field Guide (narrows
 * by month and region only, US only), the American Lyme Disease Foundation (species profiles, no
 * sizes, no Canada) and the PA Tick Research Lab (species cards, sells tick testing). None narrows
 * the list by what the reader can see (size, markings, legs) or where the tick was found, none
 * covers Canada, and none tells the reader on the page how to get the tick identified free.
 *
 * Its search is the tool itself ("tick identifier", "what kind of tick is this", "identify a
 * tick"). The chart and species pages keep their own searches; this page links them.
 *
 * A reader tool under /tools: a traffic page (lib/page-roles.ts), so no quote prompt beyond the
 * one quiet line at the end, and an ad page (lib/ad-routes.json). Nothing here is fixed to the
 * bottom of the screen. Not an article: no ReadNext (it would also mount the push prompt).
 *
 * Medical copy: never a diagnosis, always "most likely", the safety box on every result and on
 * the page, and every claim tied to a source listed at the bottom. Photos come only from the
 * photo ledger through the Photo component, each with a literal id so scripts/check-photos.mjs
 * can verify it.
 */

const META_TITLE = 'Tick Identifier: What Kind of Tick Is This?'
const DESCRIPTION =
  'Answer 6 quick questions about where you found it, its size and the marks on its back. Get the most likely ticks, real photos and what to do now.'
const PUBLISHED = 'October 23, 2026'

export const metadata: Metadata = buildMetadata({ title: META_TITLE, description: DESCRIPTION, canonical: QUIZ_PATH, image: shareImage('blacklegged-tick-female') })

// ── Links: every one must exist, be planned, or the build fails ─────────────────────────

type Article = { path: string; title: string; hook: string }
const ARTICLES = new Map((data.articles as Article[]).map((a) => [a.path, a]))
// Pages planned for the North American guides but not written yet (the species pages, mostly
// dated December 2026 in data/god-build/plan.src.json).
const PLANNED = new Set<string>(routes.planned)

/**
 * One link from this page. Fail the build, not the reader:
 *  - a live article (lib/article-index.json) is linked;
 *  - a page that is planned but not live yet (data/us-pages/routes.json, "planned") is skipped
 *    for now, and shows up by itself on the first build after the release job publishes it;
 *  - anything else is a typo or a page that is gone, and throws.
 * No links into #sections: nothing here could check that the section still exists.
 */
function link(spec: IdLinkSpec): IdLinkView | null {
  const href = typeof spec === 'string' ? spec : spec.path
  if (href.includes('#')) throw new Error(`tick identifier: ${href} links a section, which this page cannot check (lib/tick-quiz.ts)`)
  const a = ARTICLES.get(href)
  if (a) return { path: href, title: typeof spec === 'string' ? a.title : spec.label, hook: a.hook }
  if (PLANNED.has(href)) return null
  throw new Error(`tick identifier: ${href} is neither a live article nor a planned page (lib/tick-quiz.ts)`)
}

/** A live link, required (the tables and FAQs below link only live pages). */
function liveLink(spec: IdLinkSpec): IdLinkView {
  const l = link(spec)
  if (!l) throw new Error(`tick identifier: ${typeof spec === 'string' ? spec : spec.path} is not live yet; link a live page here`)
  return l
}

const view = (id: string, c: CandidateCopy): IdResultView => {
  const links = c.links.map(link).filter((l): l is IdLinkView => l !== null)
  // Every result must offer at least one live page to read next.
  if (links.length === 0) throw new Error(`tick identifier: "${id}" has no live link (lib/tick-quiz.ts)`)
  return { id, name: c.name, short: c.short, summary: c.summary, confirm: c.confirm, ...(c.caution && { caution: c.caution }), links }
}

const VIEWS = {
  ...Object.fromEntries(QUIZ.ids.map((id) => [id, view(id, CANDIDATES[id])])),
  unsure: view('unsure', UNSURE),
} as Record<TickId | 'unsure', IdResultView>

// ── Photos: one per result, from the ledger (data/god-build/photos.json) ────────────────
// Captions say no more than each photo's source does. The groundhog and winter tick photos are
// iNaturalist research-grade records, identified there, not by a lab.

const PHOTOS: Record<TickId, ReactNode> = {
  blacklegged: (
    <Photo
      id="blacklegged-tick-adult-nymph-fingertip"
      caption="An adult female blacklegged (deer) tick (left) and a nymph (right) on a fingertip (CDC). Nymphs are about the size of a poppy seed."
    />
  ),
  'western-blacklegged': <Photo id="western-blacklegged-tick-female" caption="An adult female western blacklegged tick, seen from above (CDC)." />,
  'lone-star': <Photo id="lone-star-tick-female" caption="An adult female lone star tick. The white dot at the tip of her shield gives the tick its name (CDC)." />,
  'american-dog': <Photo id="american-dog-tick-female" caption="An adult female American dog tick, found in a park near Atlanta, Georgia (CDC). Note the whitish markings on her shield." />,
  'rocky-mountain-wood': <Photo id="rocky-mountain-wood-tick-female" caption="An adult female Rocky Mountain wood tick, seen from above (CDC)." />,
  'gulf-coast': <Photo id="gulf-coast-tick-female" caption="An adult female Gulf Coast tick, seen from above (CDC)." />,
  'brown-dog': <Photo id="brown-dog-tick-male" caption="An adult male brown dog tick, collected from a dog at a veterinary clinic in Flagstaff, Arizona (CDC). Brown dog ticks have no markings on the back." />,
  'asian-longhorned': <Photo id="asian-longhorned-tick-on-dime" caption="An Asian longhorned tick nymph (left) and adult female on a US dime, for size (CDC)." />,
  groundhog: (
    <Photo id="groundhog-tick" caption="A groundhog (woodchuck) tick, Ixodes cookei, swollen after feeding, as identified on iNaturalist. The record does not give its sex or life stage." />
  ),
  winter: <Photo id="winter-tick" caption="An adult winter tick, Dermacentor albipictus, from British Columbia, as identified on iNaturalist." />,
  'soft-tick': (
    <Photo id="relapsing-fever-soft-tick" caption="The soft tick Ornithodoros hermsi, which spreads tick-borne relapsing fever, magnified 6.5 times (CDC). Soft ticks have no hard shield." />
  ),
  'not-a-tick': <Photo id="spider-beetle" caption="A spider beetle, Gibbium psylloides, about 1/10 inch (2 to 3 mm) long: an insect, with 6 legs and antennae, often mistaken for a tick." />,
}

// ── The safety box ──────────────────────────────────────────────────────────────────────

function SafetyBox({ headingId, heading = true }: { headingId: string; heading?: boolean }) {
  return (
    <div role="region" aria-labelledby={headingId} className="rounded-2xl border-2 border-red-200 bg-white p-4 sm:p-6">
      <p id={headingId} className={heading ? 'text-lg font-extrabold text-red-800' : 'sr-only'}>
        What to do about a tick
      </p>
      <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${heading ? 'mt-3' : ''}`}>
        {[SAFETY.remove, SAFETY.then, SAFETY.doctor].map((group) => (
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
      <div className="mt-5 rounded-xl bg-red-50 px-4 py-3">
        <p className="text-sm font-extrabold uppercase tracking-wider text-red-700">{SAFETY.emergency.title}</p>
        <ul className="mt-1.5 space-y-1.5 text-[15px] leading-relaxed text-gray-800">
          {SAFETY.emergency.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="mt-0.5 font-extrabold text-red-600">!</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-gray-600">
        From CDC, the Public Health Agency of Canada and BCCDC (see <a href="#sources" className="underline">sources</a>). TickSpotters is run by the University of
        Rhode Island; eTick.ca is a Canadian project with university and public health partners. 911 is the emergency number in Canada too. This tool gives general
        information, not medical advice.
      </p>
    </div>
  )
}

// ── Indexable content ───────────────────────────────────────────────────────────────────

type Row = { tick: string; id: TickId; looks: string; where: string; spreads: string }

const COMPARE: Row[] = [
  {
    tick: 'Blacklegged (deer) tick',
    id: 'blacklegged',
    looks: 'Female: red-orange body, dark shield, black legs. Male: all dark. A sesame seed as an adult, a poppy seed as a nymph',
    where: 'Eastern US; southern Manitoba, Ontario, southern Quebec, New Brunswick, Nova Scotia',
    spreads: 'Lyme disease, anaplasmosis, babesiosis, Powassan virus',
  },
  {
    tick: 'Western blacklegged tick',
    id: 'western-blacklegged',
    looks: 'Like the blacklegged tick: reddish-orange body, dark shield and legs; female about 1/8 inch',
    where: 'Pacific Coast, especially northern California; coastal and southern interior BC',
    spreads: 'Lyme disease, anaplasmosis',
  },
  {
    tick: 'Lone star tick',
    id: 'lone-star',
    looks: 'Reddish-brown, about 1/8 to 3/16 inch. Female: one white dot. Male: faint white marks at the rear edge',
    where: 'Northeast, South and Midwest US; found, but not known to be established, in Canada',
    spreads: 'Ehrlichiosis, tularemia, Heartland and Bourbon viruses; linked to alpha-gal syndrome. Not Lyme',
  },
  {
    tick: 'American dog tick',
    id: 'american-dog',
    looks: 'Larger, 3/16 to 1/4 inch, brown with silvery-white markings on the shield',
    where: 'East of the Rocky Mountains; parts of south-central and southeastern Canada',
    spreads: 'Rocky Mountain spotted fever, tularemia; tick paralysis. Not Lyme',
  },
  {
    tick: 'Rocky Mountain wood tick',
    id: 'rocky-mountain-wood',
    looks: 'Female reddish-brown with a pale shield, about 1/8 inch; male gray and mottled',
    where: 'Rocky Mountain states at 4,000 to 10,500 feet; Alberta, BC, western Saskatchewan',
    spreads: 'Colorado tick fever, Rocky Mountain spotted fever, tularemia; tick paralysis',
  },
  {
    tick: 'Gulf Coast tick',
    id: 'gulf-coast',
    looks: 'Reddish-brown with whitish lines, 1/8 to 1/4 inch; easily mistaken for the American dog tick',
    where: 'Mainly the southeastern US',
    spreads: 'Rickettsia parkeri rickettsiosis, a spotted fever',
  },
  {
    tick: 'Brown dog tick',
    id: 'brown-dog',
    looks: 'Plain reddish-brown, narrow, no markings; about 1/8 inch',
    where: 'Worldwide, wherever there are dogs; in Canada only indoors with dogs',
    spreads: 'Rocky Mountain spotted fever in the southwestern US and along the Mexican border. Not Lyme',
  },
  {
    tick: 'Asian longhorned tick',
    id: 'asian-longhorned',
    looks: 'Small, brown and plain, the size of a sesame seed; often many at once',
    where: '24 eastern US states by April 2026; not reported in Ontario',
    spreads: 'Not yet known whether it makes people ill in the US',
  },
  {
    tick: 'Groundhog tick',
    id: 'groundhog',
    looks: 'Beige, with a brown shield',
    where: 'Eastern North America; south-central and southeastern Canada',
    spreads: 'Powassan virus',
  },
  {
    tick: 'Winter (moose) tick',
    id: 'winter',
    looks: 'Large, reddish-brown to gray-brown, with a patterned shield; female 5 to 7 mm',
    where: 'Across North America on moose, deer, elk and horses',
    spreads: 'Not known to spread disease to people',
  },
  {
    tick: 'Soft ticks',
    id: 'soft-tick',
    looks: 'Leathery, wrinkled and grayish, with the head hidden underneath; bites last under half an hour',
    where: 'Rodent-infested cabins in western mountains; caves in parts of Texas; bat roosts',
    spreads: 'Soft tick relapsing fever (rodent soft ticks)',
  },
  {
    tick: 'Look-alikes (not ticks)',
    id: 'not-a-tick',
    looks: '6 legs and antennae (spider beetles, weevils, bed bugs), or tiny and reddish with 8 legs (clover mites)',
    where: 'Mostly indoors: walls, windowsills, floors, furniture',
    spreads: 'Clover mites feed on plants and do not attack people',
  },
]

const CLUES: { title: string; text: string }[] = [
  {
    title: 'Is it a tick at all?',
    text: 'Count the legs. Adult and nymph ticks have 8 legs and never have antennae or wings; only tiny larvae have 6 (University of Rhode Island; Utah State Extension). About 1 in 20 photos sent to the TickSpotters service as ticks show a look-alike, such as a spider beetle or a weevil (University of Rhode Island).',
  },
  {
    title: 'The shield on its back',
    text: 'Look just behind the head. A solid dark shield and black legs point to a blacklegged tick (Ohio State; Illinois Department of Public Health); one white dot to a female lone star tick (CDC); silvery-white mottling to an American dog, Rocky Mountain wood or Gulf Coast tick (Connecticut Agricultural Experiment Station; B.C. government; Ohio State); no markings at all to a brown dog or Asian longhorned tick (UF/IFAS; Ohio State).',
  },
  {
    title: 'Size and life stage',
    text: 'Nymphs are about the size of a poppy seed and adult blacklegged ticks about a sesame seed (CDC), while unfed American dog ticks reach 3/16 to 1/4 inch (Ohio State; Connecticut Agricultural Experiment Station). Ticks under 1/8 inch are usually young and hard to identify (Illinois Department of Public Health).',
  },
  {
    title: 'A swollen tick',
    text: 'A tick that has fed swells and often turns gray, which hides its colors (Ohio State). Look at the shield behind the head: an American dog tick’s shield does not grow as she feeds, and its white marks stay visible (Connecticut Agricultural Experiment Station).',
  },
  {
    title: 'Where and when',
    text: 'Region narrows it fast: blacklegged ticks in the East, western blacklegged ticks on the Pacific Coast, Rocky Mountain wood ticks in the mountain West, lone star and Gulf Coast ticks mainly in the South and East (CDC). Season helps too: adult blacklegged ticks are out in fall and on winter days above freezing (CDC), American dog ticks in spring and early summer (Ohio State).',
  },
]

type Faq = { question: string; answer: string; more?: IdLinkSpec }

const FAQS: Faq[] = [
  {
    question: 'How do I identify what kind of tick I have?',
    answer:
      'Start with what you can see: the legs (8 on adults and nymphs, 6 on tiny larvae, never antennae), the shield behind the head (solid dark, one white dot, silvery mottling or plain), and the size against a seed. Then add where you were and the season, because each tick lives in its own range (CDC). The six questions above score those clues. To be sure, send a sharp photo to a free service such as TickSpotters or, in Canada, eTick.ca.',
    more: '/learn/tick-identification-chart',
  },
  {
    question: 'Can I identify my tick online for free?',
    answer:
      'Yes. TickSpotters, run by the University of Rhode Island’s TickEncounter program, identifies a tick from your photo and a few questions, free, usually within 24 hours. In Canada, eTick.ca, which PHAC points readers to, does the same for free and aims to answer within one to two business days. Photograph the back and the underside in bright light, with a ruler or coin beside the tick, and keep the tick for at least 5 days in case more photos are needed (eTick).',
  },
  {
    question: 'What color tick carries Lyme disease?',
    answer:
      'In North America, Lyme disease is spread by blacklegged (deer) ticks in the East and western blacklegged ticks on the Pacific Coast (CDC; PHAC). An adult female has a red-orange body behind a dark brown shield and black legs, and is about the size of a sesame seed; the male is all dark, and the nymph, the size of a poppy seed, is see-through to slightly gray or brown (Ohio State; Illinois Department of Public Health; CDC). CDC says lone star, American dog, Rocky Mountain wood and brown dog ticks cannot transmit Lyme disease bacteria.',
    more: '/blog/ticks-that-carry-lyme-disease',
  },
  {
    question: 'What bugs are mistaken for ticks?',
    answer:
      'Spider beetles, weevils, bed bugs, stink bug nymphs, deer keds and clover mites are common ones (University of Rhode Island; Utah Department of Health). The quick test is the legs: insects have 6 legs and antennae, while adult ticks have 8 legs and no antennae. Clover mites have 8 legs too, but they are reddish, much smaller than a tick and feed on plants, not people (Utah Department of Health; Penn State Extension). About 1 in 20 photos sent to TickSpotters as ticks turn out to be look-alikes.',
    more: '/blog/bugs-that-look-like-ticks',
  },
  {
    question: 'How can you tell what kind of tick it is when it is swollen?',
    answer:
      'A fed tick swells and often turns gray, which hides its colors (Ohio State). Look at the shield behind the head: an American dog tick’s shield does not grow as she feeds, and its white marks stay visible (Connecticut Agricultural Experiment Station). If you still cannot tell, keep the tick and send a photo for identification. CDC says a swollen tick carries a higher Lyme risk than a flat one, so if it could be a blacklegged tick and you were bitten where Lyme disease is common, call a doctor within 72 hours of removing it.',
    more: '/blog/what-do-ticks-look-like',
  },
  {
    question: 'What does a white dot on a tick’s back mean?',
    answer:
      'A single white or silvery dot in the middle of the back marks an adult female lone star tick (CDC); males have faint white marks along the rear edge instead (Ohio State; Connecticut Agricultural Experiment Station). Lone star ticks bite people readily, can spread ehrlichiosis and tularemia, and their bites are linked to alpha-gal syndrome, an allergy to red meat (CDC). They turn up in Canada but are not known to be established there (PHAC; Public Health Ontario).',
    more: '/blog/alpha-gal-syndrome',
  },
  {
    question: 'What are the tiny ticks the size of a poppy seed?',
    answer:
      'Usually nymphs, the stage between larva and adult. Blacklegged nymphs are about the size of a poppy seed, and CDC calls them a particularly high Lyme risk because they are numerous and hard to see. Even tinier ticks with 6 legs, often dozens at once in late summer, are larvae, called seed ticks, such as blacklegged or lone star larvae (University of Rhode Island). Lift loose ones off with tape and remove attached ones with tweezers.',
    more: '/blog/seed-ticks',
  },
  {
    question: 'Should I get my tick tested for Lyme disease?',
    answer:
      'CDC does not generally recommend it: a positive result does not necessarily mean you are infected, a negative one can give false reassurance, and you should not wait for a result if you feel ill. PHAC adds that tick testing is not meant to guide diagnosis or treatment, and that a health care provider can consider preventive treatment without it. Getting the tick identified is more useful, and it is free through TickSpotters or eTick.ca.',
    more: '/blog/how-to-remove-tick-safely',
  },
  {
    question: 'Do ticks fall off if you shower?',
    answer:
      'Ticks that have not attached yet may wash off: CDC says showering within two hours of coming indoors lowers the risk of Lyme disease and is a good time for a tick check. An attached tick will not wash off and has to be pulled out with fine-tipped tweezers. CDC also advises tumble-drying clothes on high heat for 10 minutes to kill ticks on dry clothing.',
    more: '/blog/how-to-do-a-tick-check',
  },
  {
    question: 'Can ticks live in your house?',
    answer:
      'One can: the brown dog tick can spend its whole life indoors where dogs live, and ticks crawling up walls or curtains are often the first sign (UF/IFAS). In Canada it has been found only indoors, in kennels and homes with dogs (PHAC). Other ticks ride in on clothes and pets but do not settle: American dog ticks will not become established indoors (Connecticut Agricultural Experiment Station), and homes are too dry for lone star ticks to survive long (University of Kentucky).',
    more: '/blog/how-long-do-ticks-live',
  },
]

const FAQ_LINKS = FAQS.map((f) => (f.more ? liveLink(f.more) : null))
const COMPARE_LINKS = COMPARE.map((r) => VIEWS[r.id].links[0])

type Source = { title: string; publisher: string; url: string }

const SOURCES: Source[] = [
  { title: 'Where Ticks Live', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/ticks/about/where-ticks-live.html' },
  { title: 'About Ticks and Tickborne Disease', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/ticks/about/index.html' },
  { title: 'Preventing Tick Bites', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/ticks/prevention/index.html' },
  { title: 'What to Do After a Tick Bite', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/ticks/after-a-tick-bite/index.html' },
  { title: 'How Lyme Disease Spreads', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/lyme/causes/index.html' },
  { title: 'Signs and Symptoms of Untreated Lyme Disease', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/lyme/signs-symptoms/index.html' },
  { title: 'Lyme Disease Prophylaxis After Tick Bite (flowchart for clinicians)', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/lyme/media/pdfs/Lyme-Disease-Prophylaxis-After-Tick-Bite-Poster.pdf' },
  { title: 'About Alpha-gal Syndrome', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/alpha-gal-syndrome/about/index.html' },
  { title: 'Symptoms of Alpha-gal Syndrome', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/alpha-gal-syndrome/signs-symptoms/index.html' },
  { title: 'About Soft Tick Relapsing Fever', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/relapsing-fever/about/about-strf.html' },
  { title: 'About Powassan Virus', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/powassan/about/index.html' },
  { title: 'Bat tick, Carios kelleyi (image 5394)', publisher: 'CDC Public Health Image Library', url: 'https://wwwn.cdc.gov/phil/Details.aspx?pid=5394' },
  { title: 'Asian Longhorned Ticks', publisher: 'USDA Animal and Plant Health Inspection Service', url: 'https://www.aphis.usda.gov/livestock-poultry-disease/cattle/ticks/asian-longhorned' },
  { title: 'Asian Longhorned Tick Detected in Alabama (April 23, 2026)', publisher: 'Alabama Department of Agriculture and Industries', url: 'https://agi.alabama.gov/animalindustries/2026/04/asian-longhorned-tick-detected-in-alabama/' },
  { title: 'Ticks in Canada', publisher: 'Public Health Agency of Canada', url: 'https://www.canada.ca/en/public-health/services/diseases/ticks-tick-borne-diseases/ticks.html' },
  { title: 'How to Remove a Tick', publisher: 'Public Health Agency of Canada', url: 'https://www.canada.ca/en/public-health/services/diseases/ticks-tick-borne-diseases/remove-tick.html' },
  { title: 'Lyme Disease: Symptoms and Treatment', publisher: 'Public Health Agency of Canada', url: 'https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html' },
  { title: 'The Ticks of Ontario, 2nd edition (2026)', publisher: 'Public Health Ontario', url: 'https://www.publichealthontario.ca/-/media/Documents/T/2023/tick-species-ontario-lyme.pdf' },
  { title: 'Focus On: Alpha-gal Syndrome (2024)', publisher: 'Public Health Ontario', url: 'https://www.publichealthontario.ca/-/media/Documents/A/24/alpha-gal-syndrome-ags.pdf' },
  { title: 'Amblyomma americanum, or the Lone Star Tick', publisher: 'Institut national de santé publique du Québec (INSPQ)', url: 'https://www.inspq.qc.ca/en/amblyomma-americanum-or-lone-star-tick' },
  { title: 'Ticks in British Columbia', publisher: 'Government of British Columbia', url: 'https://www2.gov.bc.ca/gov/content/industry/agriculture-seafood/animals-and-crops/plant-health/insects-and-plant-diseases/home-garden/ticks' },
  { title: 'Tick Paralysis', publisher: 'BC Centre for Disease Control', url: 'https://www.bccdc.ca/health-info/diseases-conditions/tick-borne-diseases/tick-paralysis' },
  { title: 'Tick-borne Relapsing Fever', publisher: 'BC Centre for Disease Control', url: 'https://www.bccdc.ca/health-info/diseases-conditions/tick-borne-diseases/tick-borne-relapsing-fever' },
  { title: 'eTick: image-based tick identification', publisher: 'eTick.ca', url: 'https://www.etick.ca/' },
  { title: 'eTick FAQ', publisher: 'eTick.ca', url: 'https://www.etick.ca/en/content/faqs' },
  { title: 'Instructions for Taking Photos to Submit to eTick.ca', publisher: 'eTick.ca', url: 'https://www.etick.ca/en/content/photographic-guide' },
  { title: 'Found a Tick? TickSpotters', publisher: 'TickEncounter Resource Center, University of Rhode Island', url: 'https://web.uri.edu/tickencounter/tickspotters/' },
  { title: 'Tick Look-alikes', publisher: 'TickEncounter Resource Center, University of Rhode Island', url: 'https://web.uri.edu/tickencounter/fieldguide/is-it-a-tick/' },
  { title: 'Gulf Coast Tick', publisher: 'TickEncounter Resource Center, University of Rhode Island', url: 'https://web.uri.edu/tickencounter/species/gulf-coast-tick/' },
  { title: 'De-Tick With Duct Tape', publisher: 'TickEncounter Resource Center, University of Rhode Island', url: 'https://web.uri.edu/tickencounter/tick-notes/de-tick-with-duct-tape/' },
  { title: 'Tick Management Handbook (Bulletin 1010, revised edition)', publisher: 'Connecticut Agricultural Experiment Station', url: 'https://portal.ct.gov/-/media/caes/documents/publications/bulletins/b1010pdf' },
  { title: 'Blacklegged (Deer) Tick, Ixodes scapularis (ENT-0096)', publisher: 'Ohio State University', url: 'https://cfaes.osu.edu/fact-sheet/blacklegged-deer-tick-ixodes-scapularis' },
  { title: 'Ticks and Tick-Borne Diseases (HYG-2073)', publisher: 'Ohio State University Extension', url: 'https://ohioline.osu.edu/factsheet/HYG-2073' },
  { title: 'Gulf Coast Tick, Amblyomma maculatum (ENT-0105)', publisher: 'Ohio State University', url: 'https://cfaes.osu.edu/fact-sheet/gulf-coast-tick-amblyomma-maculatum' },
  { title: 'Asian Longhorned Ticks in Ohio (VME-1035)', publisher: 'Ohio State University Extension', url: 'https://ohioline.osu.edu/factsheet/vme-1035' },
  { title: 'Tick Identification', publisher: 'Illinois Department of Public Health', url: 'https://dph.illinois.gov/topics-services/environmental-health-protection/structural-pest-control/common-ticks/identification.html' },
  { title: 'Asian Longhorned Tick, Haemaphysalis longicornis', publisher: 'Penn State Extension', url: 'https://extension.psu.edu/asian-longhorned-tick-haemaphysalis-longicornis' },
  { title: 'Clover Mites', publisher: 'Penn State Extension', url: 'https://extension.psu.edu/clover-mites' },
  { title: 'Brown Dog Tick (EENY-221)', publisher: 'University of Florida IFAS Extension', url: 'https://ask.ifas.ufl.edu/publication/IN378' },
  { title: 'Lyme Disease in California (Pest Notes 7485)', publisher: 'University of California Statewide IPM Program', url: 'https://ipm.ucanr.edu/home-and-landscape/ticks-lyme-disease-in-california/' },
  { title: 'Colorado Ticks and Tick-Borne Diseases', publisher: 'Colorado State University Extension', url: 'https://extension.colostate.edu/resource/colorado-ticks-and-tick-borne-diseases/' },
  { title: 'Ticks and Tickborne Diseases of Utah', publisher: 'Utah State University Extension', url: 'https://extension.usu.edu/planthealth/research/ticks-and-tickborne-diseases-of-utah' },
  { title: 'Winter Tick (Dermacentor albipictus)', publisher: 'University of New Hampshire Cooperative Extension', url: 'https://extension.unh.edu/sites/default/files/migrated_unmanaged_files/Resource001955_Rep2885.pdf' },
  { title: 'Dermacentor albipictus (winter tick)', publisher: 'Western College of Veterinary Medicine, University of Saskatchewan', url: 'https://wcvm.usask.ca/learnaboutparasites/parasites/dermacentor-albipictus.php' },
  { title: 'The Lone Star Tick in Kentucky (ENTFACT-648)', publisher: 'University of Kentucky Entomology', url: 'https://entomology.mgcafe.uky.edu/files/ef648.pdf' },
  { title: 'Tick Look-alikes', publisher: 'Utah Department of Health and Human Services', url: 'https://epi.utah.gov/wp-content/uploads/Tick-Look-Alikes.pdf' },
  { title: 'Bed Bugs: Appearance and Life Cycle', publisher: 'US Environmental Protection Agency', url: 'https://www.epa.gov/bedbugs/bed-bugs-appearance-and-life-cycle' },
]

const H2 = 'mb-3 scroll-mt-28 text-2xl font-extrabold leading-tight text-brand-900 sm:text-3xl'

export default function TickIdentifierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Learning Centre', url: '/learn' },
              { name: 'Tick Identification Chart', url: '/learn/tick-identification-chart' },
              { name: 'Tick Identifier', url: QUIZ_PATH },
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
            <Link href="/learn/tick-identification-chart" className="hover:text-white">Tick Identification Chart</Link><span>/</span>
            <span className="text-white">Tick Identifier</span>
          </nav>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">Tick Identifier: What Kind of Tick Is This?</h1>
          <p className="max-w-3xl text-xl text-brand-100">
            {QUIZ.questions.length} quick questions about where you picked it up, where you found it, its size, the marks on its back, its legs and the season. You get
            the two or three most likely ticks, a real photo of each, how to confirm it, what it can spread and what to do now. It also tells you when your bug is probably not a
            tick.
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
          <IdentifierQuiz
            quiz={QUIZ}
            results={VIEWS}
            flags={FLAGS}
            photos={PHOTOS}
            safety={<SafetyBox headingId="tick-result-safety" />}
            copy={{
              namedIntro:
                'Best match first. Many ticks look alike, especially young or swollen ones, so treat this as a starting point from six answers and use the checks under each tick to confirm it.',
              compareHeading: 'Compare the common ticks',
              medical: true,
            }}
          />
          <p className="mt-4 text-xs leading-relaxed text-gray-600">
            How this works: each answer adds points to the ticks it fits, using what CDC, the Public Health Agency of Canada, Public Health Ontario and university
            extension services say about each one, and the result shows the reasons. It cannot see your tick, so treat the result as a place to start, and it is not
            medical advice. Your answers are not saved with your name; the site counts which answers are picked, through Google Analytics, to improve the tool.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            Have a bite but no tick? Try the{' '}
            <Link href="/tools/bug-bite-identifier" prefetch={false} data-recirc="quiz_result" data-recirc-kind="tool" data-recirc-target="bug-bite-identifier" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">bug bite identifier</Link>. Found a spider instead? Try the{' '}
            <Link href="/tools/spider-identifier" prefetch={false} data-recirc="quiz_result" data-recirc-kind="tool" data-recirc-target="spider-identifier" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">spider identifier</Link>.
          </p>
        </div>
      </div>

      <section aria-labelledby="tick-safety" className="bg-white px-4 pt-10">
        <div className="mx-auto max-w-4xl">
          <h2 id="tick-safety" className={H2}>What to do about a tick right now</h2>
          <p className="mb-5 text-gray-700">
            Removing an attached tick as soon as possible lowers the chance of infection (PHAC). These steps apply to every kind of tick:
          </p>
          <SafetyBox headingId="tick-safety-box" heading={false} />
        </div>
      </section>

      <section aria-labelledby="compare" className="bg-white px-4 pt-12">
        <div className="mx-auto max-w-4xl">
          <h2 id="compare" className={H2}>Common ticks compared</h2>
          <p className="mb-5 text-gray-700">
            Size and markings are for an unfed adult unless the row says otherwise. Each tick links to its guide.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="sr-only">Common North American ticks compared by appearance, range and the diseases they can spread</caption>
              <thead className="bg-brand-50 text-brand-900">
                <tr>
                  <th scope="col" className="sticky left-0 z-10 bg-brand-50 px-3 py-2.5 font-extrabold">Tick</th>
                  <th scope="col" className="px-3 py-2.5 font-extrabold">How to recognize it</th>
                  <th scope="col" className="px-3 py-2.5 font-extrabold">Where it lives</th>
                  <th scope="col" className="px-3 py-2.5 font-extrabold">What it can spread</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r, i) => (
                  <tr key={r.tick} className="border-t border-gray-200 align-top">
                    <th scope="row" className="sticky left-0 z-10 w-36 bg-white px-3 py-2.5 font-bold text-brand-900">
                      <Link href={COMPARE_LINKS[i].path} prefetch={false} data-recirc="quiz_result" data-recirc-kind="table" data-recirc-target={COMPARE_LINKS[i].path.split('/').pop()} className="underline underline-offset-2 hover:text-brand-700">
                        {r.tick}
                      </Link>
                    </th>
                    <td className="px-3 py-2.5 text-gray-700">{r.looks}</td>
                    <td className="px-3 py-2.5 text-gray-700">{r.where}</td>
                    <td className="px-3 py-2.5 text-gray-700">{r.spreads}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-gray-500">
            From CDC, PHAC, Public Health Ontario, BCCDC, the B.C. government, USDA, the Alabama Department of Agriculture and Industries, the Illinois Department of
            Public Health, the Connecticut Agricultural Experiment Station, Ohio State, UF/IFAS, UC IPM, Utah State, Penn State, the University of Saskatchewan, the
            University of Rhode Island and Utah’s Department of Health (see sources). Scroll sideways on a phone to see every column.
          </p>
        </div>
      </section>

      <section aria-labelledby="clues" className="bg-white px-4 pt-12">
        <div className="mx-auto max-w-4xl">
          <h2 id="clues" className={H2}>How to tell ticks apart</h2>
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
          <h2 id="photos" className={H2}>Tick photos to compare</h2>
          <p className="text-gray-700">Real photos from CDC’s Public Health Image Library. Each one opens a guide to that tick.</p>
          <ConfusedWith
            items={[
              { href: '/blog/ticks-that-carry-lyme-disease', name: 'Blacklegged (deer) tick', photo: 'blacklegged-tick-female', note: 'Red-orange body, dark shield and black legs; about the size of a sesame seed' },
              { href: '/blog/baby-ticks-nymphs-seed-ticks-ontario', name: 'Deer tick nymph', photo: 'blacklegged-tick-nymph-fingernail', note: 'About the size of a poppy seed; CDC calls nymphs a particularly high Lyme risk' },
              { href: '/blog/lone-star-tick-alpha-gal-canada', name: 'Lone star tick', photo: 'lone-star-tick-female', note: 'One white dot on the female’s back; a very aggressive biter' },
              { href: '/blog/american-dog-tick-canada', name: 'American dog tick', photo: 'american-dog-tick-female', note: 'Larger, with silvery-white markings on the shield' },
              { href: '/blog/ticks-on-dogs', name: 'Brown dog tick', photo: 'brown-dog-tick-male', note: 'Plain reddish-brown with no markings; can live indoors where dogs are' },
              { href: '/blog/what-do-ticks-look-like', name: 'Swollen (fed) tick', photo: 'tick-unfed-vs-engorged', note: 'A fed female swells up and changes color, often to gray' },
            ]}
            title="Six common sights, side by side"
          />
        </div>
      </section>

      <section aria-labelledby="known" className="bg-white px-4 pt-4">
        <div className="mx-auto max-w-4xl">
          <h2 id="known" className={H2}>Already know which tick it is?</h2>
          <p className="mb-6 text-gray-700">Go straight to the guides for that tick.</p>
          <ul className="grid gap-5 sm:grid-cols-2">
            {QUIZ.ids.map((id) => (
              <li key={id} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="text-lg font-extrabold text-brand-900">{VIEWS[id].name}</h3>
                <p className="mt-1 text-sm text-gray-600">{VIEWS[id].summary}</p>
                <ul className="mt-2 space-y-1.5 text-[15px]">
                  {VIEWS[id].links.map((l) => (
                    <li key={l.path}>
                      <Link href={l.path} prefetch={false} data-recirc="quiz_result" data-recirc-kind="list" data-recirc-target={l.path.split('/').pop()} className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">
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
          <h2 id="faq" className={H2}>Tick identification questions</h2>
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
                    <Link href={FAQ_LINKS[i]!.path} prefetch={false} data-recirc="quiz_result" data-recirc-kind="faq" data-recirc-target={FAQ_LINKS[i]!.path.split('/').pop()} className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">
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
            BuzzSkito treats yards for ticks and mosquitoes in the Greater Toronto Area. Local?{' '}
            <Link href="/free-yard-assessment" className="underline hover:text-brand-700">Ask for a free yard assessment</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
