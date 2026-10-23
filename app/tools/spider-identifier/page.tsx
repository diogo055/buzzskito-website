import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, faqSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { slugifyHeading } from '@/lib/guides'
import { shareImage } from '@/lib/photos'
import data from '@/lib/article-index.json'
import routes from '@/data/us-pages/routes.json'
import blackSpidersGuide from '@/content/guides/black-spiders.json'
import brownRecluseLookAlikesGuide from '@/content/guides/brown-recluse-look-alikes.json'
import houseSpidersGuide from '@/content/guides/house-spiders.json'
import spiderEggSacsGuide from '@/content/guides/spider-egg-sacs.json'
import spidersInCaliforniaGuide from '@/content/guides/spiders-in-california.json'
import spidersInFloridaGuide from '@/content/guides/spiders-in-florida.json'
import spidersInTexasGuide from '@/content/guides/spiders-in-texas.json'
import venomousSpidersGuide from '@/content/guides/venomous-spiders.json'
import wolfSpidersGuide from '@/content/guides/wolf-spiders.json'
import IdentifierQuiz, { type IdLinkView, type IdResultView } from '@/components/IdentifierQuiz'
import ConfusedWith from '@/components/ConfusedWith'
import Photo from '@/components/Photo'
import type { CandidateCopy, IdLinkSpec } from '@/lib/identifier-quiz'
import { CANDIDATES, FLAGS, QUIZ, QUIZ_PATH, SAFETY, SPIDER_IDS, UNSURE, type SpiderId } from '@/lib/spider-quiz'

/**
 * "What kind of spider is this?" — the spider identifier (Oct 2026). Seven scored questions
 * (lib/spider-quiz.ts) on the shared engine (lib/identifier-quiz.ts, components/IdentifierQuiz.tsx),
 * then the two or three most likely spiders, each with the reasons its answers earned, a real photo,
 * how to confirm it and the site's guide to it.
 *
 * Built after reading the top three US results for "spider identifier" and "what kind of spider is
 * this" (Oct 22, 2026: two AI photo-scan sites and an unsourced species list; notes in
 * data/god-build/research/top3/spider-identifier.md): none narrows the list from the reader's own
 * clues, none weighs where the reader lives, none says how to confirm an answer, and none cites a
 * source.
 *
 * A reader tool under /tools: a traffic page (lib/page-roles.ts), so no quote prompt and only one
 * quiet line about the business at the end, and an ad page (lib/ad-routes.json). Nothing here is
 * fixed to the bottom of the screen. Not an article: no ReadNext (it would also mount the push
 * prompt). Search intent: "spider identifier", "what kind of spider is this". The planned hub
 * /learn/spiders keeps "spider identification" and "types of spiders" and will link here.
 *
 * Safety copy: never a definitive ID, always "most likely", the safety box on every result and on
 * the page, calm about widows and recluses (where they live, how to rule them out) without false
 * reassurance, and every claim tied to a source listed at the bottom. Photos come only from the
 * photo ledger through the Photo component, each with a literal id so scripts/check-photos.mjs can
 * verify it.
 */

const META_TITLE = 'Spider Identifier: What Kind of Spider Is This?'
const DESCRIPTION =
  'Answer 7 quick questions about the web, size, markings and where you found it. Get the most likely spiders, real photos and how to spot a widow or recluse.'
const PUBLISHED = 'October 23, 2026'

export const metadata: Metadata = buildMetadata({ title: META_TITLE, description: DESCRIPTION, canonical: QUIZ_PATH, image: shareImage('bold-jumping-spider') })

// ── Links: checked when the page is built ───────────────────────────────────────────────

type Article = { path: string; title: string; hook: string }
const ARTICLES = new Map((data.articles as Article[]).map((a) => [a.path, a]))
const PLANNED = new Set((routes as { planned: string[] }).planned)

// Section anchors this page links into, read from the guides themselves. A "#section" link into
// any other page fails the build until its guide is added here.
type GuideBlock = { type: string; text?: string }
const GUIDES: Record<string, { body: unknown }> = {
  '/blog/black-spiders': blackSpidersGuide,
  '/blog/brown-recluse-look-alikes': brownRecluseLookAlikesGuide,
  '/blog/house-spiders': houseSpidersGuide,
  '/blog/spider-egg-sacs': spiderEggSacsGuide,
  '/blog/spiders-in-california': spidersInCaliforniaGuide,
  '/blog/spiders-in-florida': spidersInFloridaGuide,
  '/blog/spiders-in-texas': spidersInTexasGuide,
  '/blog/venomous-spiders': venomousSpidersGuide,
  '/blog/wolf-spiders': wolfSpidersGuide,
}
const SECTIONS: Record<string, Set<string>> = Object.fromEntries(
  Object.entries(GUIDES).map(([path, guide]) => [
    path,
    new Set((guide.body as GuideBlock[]).filter((b) => b.type === 'h2' && b.text).map((b) => slugifyHeading(b.text as string))),
  ]),
)

/**
 * One link from a result, a table row or an FAQ. A live article (in lib/article-index.json) is
 * linked, and a "#section" must exist in its guide. A guide that is planned but not live yet
 * (`planned` in data/us-pages/routes.json) is skipped for now: the release job adds it to the
 * article index on its release day, and the next build links it here with no edit to this file.
 * Anything else fails the build, so a result can never point at a page that does not exist.
 */
function link(spec: IdLinkSpec): IdLinkView | null {
  const href = typeof spec === 'string' ? spec : spec.path
  const [path, hash] = href.split('#')
  const a = ARTICLES.get(path)
  if (!a) {
    // A section of a guide that is not written yet cannot be checked, so it is not allowed.
    if (PLANNED.has(path) && !hash) return null
    throw new Error(`spider identifier: ${href} is neither a live article nor a planned guide (lib/spider-quiz.ts)`)
  }
  if (hash && !SECTIONS[path]?.has(hash)) throw new Error(`spider identifier: ${href} names a section that does not exist`)
  return { path: href, title: typeof spec === 'string' ? a.title : spec.label, hook: a.hook }
}

/** The live links of one result. A spider whose pages are all still planned fails the build: give it a live page too. */
function liveLinks(who: string, specs: IdLinkSpec[]): IdLinkView[] {
  const views = specs.map(link).filter((v): v is IdLinkView => v !== null)
  if (views.length === 0) throw new Error(`spider identifier: "${who}" has no live link yet; list a live page after its planned one (lib/spider-quiz.ts)`)
  return views
}

const view = (id: string, c: CandidateCopy): IdResultView => ({
  id,
  name: c.name,
  short: c.short,
  summary: c.summary,
  confirm: c.confirm,
  ...(c.caution && { caution: c.caution }),
  links: liveLinks(id, c.links),
})

const VIEWS: Record<string, IdResultView> = {
  ...Object.fromEntries(SPIDER_IDS.map((id) => [id, view(id, CANDIDATES[id])])),
  unsure: view('unsure', UNSURE),
}

// The spider hub (/learn/spiders, planned for Dec 7, 2026) joins the breadcrumb once it is live.
const CRUMBS = [
  { name: 'Home', url: '/' },
  { name: 'Learning Centre', url: '/learn' },
  ...(ARTICLES.has('/learn/spiders') ? [{ name: 'Spiders', url: '/learn/spiders' }] : []),
  { name: 'Spider Identifier', url: QUIZ_PATH },
]

// ── Photos: one per spider, from the ledger (data/god-build/photos.json) ────────────────
// Captions say no more than each photo's source does, plus at most one thing to look for.

const PHOTOS: Record<SpiderId, ReactNode> = {
  'house-spider': <Photo id="common-house-spider" caption="A common house spider, Parasteatoda tepidariorum: a round, mottled abdomen and legs ringed with darker bands." />,
  'cellar-spider': <Photo id="cellar-spider" caption="A long-bodied cellar spider, Pholcus phalangioides, in California: a small, pale body on very long, thin legs." />,
  'wolf-spider': <Photo id="wolf-spider" caption="A wolf spider (Tigrosa helluo) carrying spiderlings on its back, as female wolf spiders do." />,
  'jumping-spider': <Photo id="bold-jumping-spider" caption="An adult female bold jumping spider, Phidippus audax, in Tennessee: fuzzy and black, with big front eyes and shiny green jaws." />,
  'orb-weaver': <Photo id="yellow-garden-spider" caption="A yellow garden spider, Argiope aurantia, in her web with its zigzag band of silk." />,
  'grass-spider': <Photo id="grass-spider-sheet-web" caption="A grass spider (Agelenopsis) on its sheet web, beaded with moisture. Note the stripes on its body." />,
  'funnel-weaver': <Photo id="giant-house-spider" caption="A giant house spider, Eratigena duellica, in British Columbia: long legs and a striped, mottled body." />,
  'yellow-sac': <Photo id="yellow-sac-spider" caption="A northern yellow sac spider, Cheiracanthium mildei, in Toronto: a pale body with darker jaws and leg tips." />,
  'false-widow': <Photo id="false-black-widow" caption="An adult female false black widow, Steatoda grossa, in California: shiny and chocolate brown, with no red hourglass." />,
  'black-widow': <Photo id="black-widow" caption="A female southern black widow, Latrodectus mactans, spinning her web on a branch, with her red hourglass showing (CDC)." />,
  harvestman: <Photo id="harvestman" caption="A harvestman, Leiobunum flavum, from Maryland: one oval body on very long legs. Harvestmen are not spiders." />,
  'fishing-spider': <Photo id="dark-fishing-spider" caption="A dark fishing spider, Dolomedes tenebrosus: mottled brown, with banded, hairy legs." />,
  recluse: <Photo id="brown-recluse" caption="A brown recluse, Loxosceles reclusa, with the dark violin mark on the front half of its body and plain legs (CDC)." />,
  'parson-spider': (
    <Photo id="parson-spider" caption="An eastern parson spider, Herpyllus ecclesiasticus, found in a tarp stored in a garage: dark, with a white band on the abdomen." />
  ),
  'woodlouse-spider': <Photo id="woodlouse-spider" caption="A woodlouse spider, Dysdera crocata, in Philadelphia: a red-orange front half and legs, and a pale abdomen." />,
  'brown-widow': <Photo id="brown-widow-hourglass" caption="The underside of a female brown widow, Latrodectus geometricus, showing the orange hourglass (CDC)." />,
  'southern-house-spider': <Photo id="southern-house-spider-female-web" caption="A female southern house spider, Kukulcania hibernalis, on her woolly web in Florida." />,
  'green-lynx': <Photo id="green-lynx-spider" caption="A green lynx spider, Peucetia viridans, in Florida: bright green, with long black spines on its legs." />,
  tarantula: <Photo id="texas-brown-tarantula" caption="A Texas brown tarantula, Aphonopelma hentzi, in Texas: large and hairy all over." />,
  solifuge: (
    <Photo id="camel-spider-solifuge" caption="A solifuge (camel spider) found under a rock in southern Colorado, with its huge jaws at the front. It is not a true spider." />
  ),
}

// ── The safety box ──────────────────────────────────────────────────────────────────────

function SafetyBox({ headingId, heading = true }: { headingId: string; heading?: boolean }) {
  return (
    <div role="region" aria-labelledby={headingId} className="rounded-2xl border-2 border-red-200 bg-white p-4 sm:p-6">
      <p id={headingId} className={heading ? 'text-lg font-extrabold text-red-800' : 'sr-only'}>
        Dangerous spiders and spider bites
      </p>
      <div className={`grid gap-5 sm:grid-cols-2 ${heading ? 'mt-3' : ''}`}>
        {[SAFETY.dangerous, SAFETY.care].map((group) => (
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
        From CDC, Mayo Clinic, UC IPM, the Missouri Department of Conservation and the US Army Public Health Center (see{' '}
        <a href="#sources" className="underline">sources</a>). US Poison Help: 1-800-222-1222. In Canada, call your provincial poison center (the Ontario Poison
        Centre lists them). In an emergency, call 911 in the US or Canada. This tool gives general information, not medical advice.
      </p>
    </div>
  )
}

// ── Indexable content ───────────────────────────────────────────────────────────────────

type Row = { id: SpiderId; spider: string; web: string; size: string; looks: string; where: string }

// One row per spider, in the quiz's order. Sizes with legs are the University of Kentucky's
// coin sizes where it gives one; otherwise the source's body length, marked "body".
const COMPARE: Row[] = [
  { id: 'house-spider', spider: 'Common house spider', web: 'Messy cobweb; almost never leaves it', size: 'About a nickel', looks: 'Brown and tan with darker patterns; round abdomen; ringed legs', where: 'Corners, windows, basements, crawl spaces' },
  { id: 'cellar-spider', spider: 'Cellar spider', web: 'Loose, irregular web near the ceiling or floor', size: 'About a half-dollar', looks: 'Pale gray to light tan; tiny body on very long, thin legs', where: 'Basements, cellars, crawl spaces' },
  { id: 'wolf-spider', spider: 'Wolf spider', web: 'None', size: 'Pencil eraser to about a silver dollar', looks: 'Gray or brown, usually with stripes or spots; hairy legs', where: 'On the ground; often wanders indoors' },
  { id: 'jumping-spider', spider: 'Jumping spider', web: 'None; silk shelters only', size: 'About a dime', looks: 'Often dark with white markings; big front eyes', where: 'Sunny walls, windows, fences and plants' },
  { id: 'orb-weaver', spider: 'Orb weaver', web: 'Round web of circles and spokes', size: 'Pencil eraser to a little over a silver dollar', looks: 'Some plain brown, many colorful; yellow garden spider yellow and black', where: 'Gardens and porches, especially late summer' },
  { id: 'grass-spider', spider: 'Grass spider', web: 'Flat sheet with a funnel at one side', size: 'About a quarter', looks: 'Brown with lengthwise gray or tan stripes; long spinnerets', where: 'Lawns, ground covers, bushes; indoors in fall' },
  { id: 'funnel-weaver', spider: 'House funnel weavers', web: 'Flat sheet with a funnel retreat', size: 'Hobo 1 to 1 3/4 inches; giant house spider up to 4 inches', looks: 'Brown, often with chevrons or mottling; long legs', where: 'Basements, garages, window wells' },
  { id: 'yellow-sac', spider: 'Yellow sac spider', web: 'No web; a silk sac in a corner', size: 'About a nickel', looks: 'Pale yellow to cream; dark jaws and leg tips', where: 'Walls and ceilings at night' },
  { id: 'false-widow', spider: 'False widow', web: 'Tangled cobweb', size: 'Body about 3/8 inch', looks: 'Shiny, chocolate brown, round; never red', where: 'Indoors: washrooms, cupboards, under appliances' },
  { id: 'black-widow', spider: 'Black widow', web: 'Tough, tangled cobweb near the ground', size: 'Body about 1/2 inch', looks: 'Shiny black, round; red hourglass underneath', where: 'Woodpiles, rock piles, garages, sheds' },
  { id: 'harvestman', spider: 'Harvestman (not a spider)', web: 'Never', size: 'Body up to 1/2 inch; very long legs', looks: 'One oval body; two eyes', where: 'Leaf litter, tree bark' },
  { id: 'fishing-spider', spider: 'Fishing spider', web: 'None', size: 'A little over a silver dollar; some 4 inches', looks: 'Brown with darker patterns; banded legs', where: 'Near ponds and streams; sometimes far from water' },
  { id: 'recluse', spider: 'Brown recluse', web: 'Small retreat web, out of sight', size: 'About a quarter', looks: 'Plain tan to dark brown; violin on the front half; six eyes in pairs', where: 'Boxes, closets, attics, in central and southern states' },
  { id: 'parson-spider', spider: 'Parson spider', web: 'None', size: 'Body about 1/2 inch', looks: 'Dark, with a white band on the abdomen', where: 'Floors at night; indoors in fall' },
  { id: 'woodlouse-spider', spider: 'Woodlouse spider', web: 'None; a silk retreat', size: 'About a nickel', looks: 'Red-orange front and legs; pale gray rear; big fangs', where: 'Under rocks and logs; sometimes indoors' },
  { id: 'brown-widow', spider: 'Brown widow', web: 'Irregular cobweb', size: 'Body about 3/8 inch', looks: 'Mottled tan, brown and gray; orange-red mark underneath; spiky egg sacs', where: 'Fences, patio furniture; the South and Southern California' },
  { id: 'southern-house-spider', spider: 'Southern house spider', web: 'Flat, woolly web around a crack', size: 'Female body 1/2 to 3/4 inch', looks: 'Female charcoal gray; male khaki with long legs', where: 'House walls, windowsills, eaves in the South' },
  { id: 'green-lynx', spider: 'Green lynx spider', web: 'None', size: 'Body 1/2 to 7/8 inch', looks: 'Bright green, often red-spotted; spiny legs', where: 'Shrubs and flowers in the South' },
  { id: 'tarantula', spider: 'Tarantula', web: 'No catching web; a silk-lined burrow', size: 'Up to 6 inches', looks: 'Large, hairy, brown', where: 'The Southwest and south-central states' },
  { id: 'solifuge', spider: 'Camel spider (not a spider)', web: 'Cannot spin silk', size: '3/4 to 1 1/2 inches long', looks: 'Yellowish brown; huge jaws', where: 'Dry parts of the West and Southwest, at night' },
]

const CLUES: { title: string; text: string }[] = [
  {
    title: 'The web',
    text: 'A messy cobweb points to cobweb spiders (house spiders, widows, false widows) or cellar spiders; a flat sheet with a funnel at one side to grass spiders and other funnel weavers; a round web of circles and spokes to orb weavers (UC IPM; University of Minnesota). Wolf, jumping and fishing spiders build no web to catch prey (Missouri Dept. of Conservation; UC IPM).',
  },
  {
    title: 'The eyes',
    text: 'Most spiders have eight eyes. Recluses have six, in three pairs, and woodlouse spiders six, in two groups of three (UC IPM). Jumping spiders have two big eyes facing forward on a flat face (University of Kentucky). At night, a flashlight held beside your own eyes makes a wolf spider’s eyes shine back (Missouri Dept. of Conservation).',
  },
  {
    title: 'The legs',
    text: 'Recluses have legs of one even color, with fine hairs and no spines; bands, stripes or thick spines rule a recluse out (UC IPM; UC Riverside). Very long, thin legs on a tiny body point to a cellar spider, or to a harvestman if the body is one oval piece (University of Kentucky; Missouri Dept. of Conservation).',
  },
  {
    title: 'Color and markings',
    text: 'Markings help but can mislead: people see violins on many harmless brown spiders (UC IPM). A red or orange hourglass on the underside of a shiny black, round spider is the black widow’s mark (UC IPM). The common bold jumping spider is fuzzy and usually black, often with white spots (Missouri Dept. of Conservation).',
  },
  {
    title: 'Where and when',
    text: 'Brown recluses are established only in 16 central and southern states (Penn State), fishing spiders live near water (University of Minnesota), and orb weavers turn up on porches and in gardens, especially in late summer (University of Kentucky). Big spiders that appear indoors are often males searching for females (UC IPM).',
  },
  {
    title: 'Is it a spider at all?',
    text: 'Spiders have eight legs and two body parts, and no wings or antennae (UC IPM). A harvestman has one oval body and two eyes (Missouri Dept. of Conservation), and a camel spider has huge jaws and leg-like palps (UC IPM): neither is a spider.',
  },
]

type Faq = { question: string; answer: string; more?: IdLinkSpec }

const FAQS: Faq[] = [
  {
    question: 'How do I tell what kind of spider I have?',
    answer:
      'Start with four clues: the web it was in, where you found it, its size with the legs and its markings. A messy cobweb, a flat sheet with a funnel and a round web of circles and spokes each point to different families (UC IPM; University of Minnesota), and hunters such as wolf and jumping spiders build no web to catch prey. Then look closer: a recluse has six eyes in three pairs and plain legs without spines (UC IPM). The questions above score these clues and show how to confirm each answer.',
    more: '/blog/house-spiders',
  },
  {
    question: 'Can I identify a spider from a picture?',
    answer:
      'Often, if the photo is sharp. Take one from above and one of the face, with a coin or ruler beside the spider, and do not handle it to get the shot. Photo apps and community sites such as iNaturalist and BugGuide can suggest a name, but treat any answer as a lead: telling a hobo spider from its relatives takes a microscope (UC IPM), and a recluse’s six eyes are easiest to see with a good hand lens (UC IPM).',
  },
  {
    question: 'Is there a free spider identifier?',
    answer:
      'Yes, this page: seven questions about the place, the web, the size, the markings and the behavior give the most likely spiders, with real photos and the reason behind each suggestion. For a confirmed identification, ask your county Cooperative Extension office; in California, UC IPM sends readers to theirs, which can forward a spider to an arachnologist. Keep the spider whole, because a crushed one is hard to identify (UC IPM).',
  },
  {
    question: 'How can you tell if a spider is dangerous?',
    answer:
      'CDC’s page on venomous spiders in the US names two: the black widow and the brown recluse. An adult female black widow is shiny black with a red or orange hourglass on her underside (UC IPM). A recluse is plain tan to dark brown, with six eyes in three pairs and plain legs without spines (UC IPM). The brown widow of the South and Southern California has a much milder bite (UC IPM). The jaws of most other spiders are too small to bite through an adult’s skin (UC IPM).',
    more: { path: '/blog/venomous-spiders#which-spiders-in-the-us-are-actually-dangerous', label: 'Which spiders in the US are actually dangerous?' },
  },
  {
    question: 'How do you identify a brown recluse?',
    answer:
      'Look for all five features together: six eyes in three pairs, a plain abdomen covered in fine hairs, no spines on the legs, legs of one even color, and a body no more than 3/8 inch long (UC IPM). The violin mark on the front half is not reliable on its own, because people see violins on many harmless spiders (UC IPM). Then check where you are: brown recluses are established only in 16 central and southern states (Penn State), and none live in Canada (Canadian Family Physician; UC IPM).',
    more: '/blog/brown-recluse-look-alikes',
  },
  {
    question: 'How do you identify a black widow?',
    answer:
      'The adult female is shiny black with a round abdomen and a red or orange hourglass on her underside, which can be split, faint or, rarely, missing (UC IPM). The northern black widow often has red spots down her back (Missouri Dept. of Conservation). Western black widow males and young are tan or gray with white stripes (UC IPM). Widows hang upside down in a tough, messy web, usually within 3 feet of the ground (UC IPM), in places such as woodpiles, rock piles and garages (University of Kentucky).',
    more: { path: '/blog/black-spiders#is-it-a-black-widow', label: 'Is it a black widow? How to check' },
  },
  {
    question: 'What is the big brown spider running across my floor?',
    answer:
      'Usually a wolf spider or a funnel weaver. Wolf spiders hunt on the ground without a web and often wander into homes (University of Kentucky), and a female may carry her egg sac or her babies (Missouri Dept. of Conservation). Funnel weavers such as the giant house spider and the barn funnel weaver live in sheet webs, but the males wander and run very fast (Washington State University; Colorado State University). In the central and southern US, check a smaller, plain brown one for a recluse’s six eyes (UC IPM).',
    more: { path: '/blog/house-spiders#what-are-the-big-spiders-running-across-the-floor', label: 'The big spiders running across the floor' },
  },
  {
    question: 'Why are there so many spiders in my house in the fall?',
    answer:
      'Many are males out looking for mates. UC IPM says large hunting spiders found in homes are often mature male wolf spiders or tarantulas searching for females, and male giant house spiders are especially mobile from mid-summer to early fall (Washington State University). Others come in from outside: hunting spiders may wander in by accident, particularly in the fall (University of Minnesota), and Penn State says grass spiders come indoors in autumn as temperatures fall. Those hunting spiders do not survive well indoors and usually do not breed there (University of Minnesota).',
    more: { path: '/blog/house-spiders#why-do-you-see-more-spiders-in-late-summer-and-fall', label: 'Why you see more spiders in late summer and fall' },
  },
  {
    question: 'Are daddy longlegs spiders?',
    answer:
      'Two different animals share the name. Harvestmen are not spiders: they have one oval body, two eyes, no silk and no venom glands (Missouri Dept. of Conservation). Cellar spiders are true spiders, with two body parts, usually eight eyes and silk webs (UC Riverside). The old story that daddy longlegs carry deadly venom but cannot bite does not hold up: harvestmen have no venom, and no cellar spider bite has been recorded causing harm (UC Riverside).',
    more: { path: '/blog/venomous-spiders#are-hobo-spiders-and-daddy-longlegs-dangerous', label: 'Are hobo spiders and daddy longlegs dangerous?' },
  },
  {
    question: 'Are there brown recluses in Canada?',
    answer:
      'No. A review in Canadian Family Physician concluded that brown recluse spiders are not found in Canada, and UC IPM notes that none has ever been found north of the 48 contiguous states. Canada does have black widows, in the south: the northern black widow in the southeast (US Army Public Health Center) and the western black widow in southern British Columbia, Alberta and Saskatchewan (Environment and Climate Change Canada), which adds that only a very few spider species are potentially dangerous to people.',
  },
]

const FAQ_LINKS = FAQS.map((f) => (f.more ? link(f.more) : null))

type Source = { title: string; publisher: string; url: string }

const SOURCES: Source[] = [
  { title: 'Venomous Spiders at Work', publisher: 'CDC National Institute for Occupational Safety and Health (NIOSH)', url: 'https://www.cdc.gov/niosh/outdoor-workers/about/venomous-spiders.html' },
  { title: 'Spider Bites: Symptoms and Causes', publisher: 'Mayo Clinic', url: 'https://www.mayoclinic.org/diseases-conditions/spider-bites/symptoms-causes/syc-20352371' },
  { title: 'How Dangerous Is a Black Widow Spider Bite?', publisher: 'Poison Control, National Capital Poison Center', url: 'https://www.poison.org/articles/black-widow-spiders' },
  { title: 'Canadian Poison Centres', publisher: 'Ontario Poison Centre, The Hospital for Sick Children', url: 'https://www.ontariopoisoncentre.ca/get-help/canadian-poison-centres' },
  { title: 'Spiders (Pest Notes 7442)', publisher: 'University of California Statewide IPM Program (UC IPM), R. S. Vetter', url: 'https://ipm.ucanr.edu/home-and-landscape/spiders/' },
  { title: 'Widow Spiders and Their Relatives (Pest Notes 74149)', publisher: 'UC IPM, R. S. Vetter', url: 'https://ipm.ucanr.edu/home-and-landscape/widow-spiders-and-their-relatives/' },
  { title: 'Brown Recluse and Other Recluse Spiders (Pest Notes 7468)', publisher: 'UC IPM, R. S. Vetter', url: 'https://ipm.ucanr.edu/home-and-landscape/brown-recluse-and-other-recluse-spiders/' },
  { title: 'Hobo Spider (Pest Notes 7488)', publisher: 'UC IPM, R. S. Vetter', url: 'https://ipm.ucanr.edu/legacy_assets/pdf/pestnotes/pnhobospider.pdf' },
  { title: 'Windscorpion (Pest Notes 7495)', publisher: 'UC IPM, E. J. Perry', url: 'https://ipm.ucanr.edu/home-and-landscape/windscorpion/' },
  { title: 'How to Identify and Misidentify a Brown Recluse Spider', publisher: 'UC Riverside Department of Entomology, Rick Vetter', url: 'https://spiders.ucr.edu/how-identify-and-misidentify-brown-recluse-spider' },
  { title: 'Daddy Long Legs', publisher: 'UC Riverside Department of Entomology', url: 'https://spiders.ucr.edu/daddy-long-legs' },
  {
    title: 'Arachnids Submitted as Suspected Brown Recluse Spiders: Loxosceles Spiders Are Virtually Restricted to Their Known Distributions but Are Perceived to Exist Throughout the United States',
    publisher: 'Journal of Medical Entomology (Vetter, 2005), PubMed record',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16119538/',
  },
  {
    title: 'An Approach to Spider Bites: Erroneous Attribution of Dermonecrotic Lesions to Brown Recluse or Hobo Spider Bites in Canada',
    publisher: 'Canadian Family Physician (Bennett and Vetter, 2004), PubMed Central',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2214648/',
  },
  { title: 'Brown Recluse Spiders', publisher: 'Penn State Extension', url: 'https://extension.psu.edu/brown-recluse-spiders' },
  { title: 'Common House Spider', publisher: 'Penn State Extension', url: 'https://extension.psu.edu/common-house-spider' },
  { title: 'Longbodied Cellar Spider', publisher: 'Penn State Extension', url: 'https://extension.psu.edu/longbodied-cellar-spider' },
  { title: 'Agrarian Sac Spider and Longlegged Sac Spider', publisher: 'Penn State Extension', url: 'https://extension.psu.edu/agrarian-sac-spider-and-longlegged-sac-spider' },
  { title: 'Grass Spiders', publisher: 'Penn State Extension', url: 'https://extension.psu.edu/grass-spiders' },
  { title: 'Wolf Spiders', publisher: 'Penn State Extension', url: 'https://extension.psu.edu/wolf-spiders' },
  { title: 'Parson Spider', publisher: 'Penn State Extension', url: 'https://extension.psu.edu/parson-spider' },
  { title: 'Woodlouse Hunter Spider', publisher: 'Penn State Extension', url: 'https://extension.psu.edu/woodlouse-hunter-spider' },
  { title: 'Urban Spider Chart', publisher: 'University of Kentucky Entomology, Blake Newton and Lee Townsend', url: 'https://entomology.mgcafe.uky.edu/spider-chart' },
  { title: 'Nursery-Web and Fishing Spiders of Kentucky', publisher: 'University of Kentucky Entomology, Blake Newton', url: 'https://www.uky.edu/Ag/CritterFiles/casefile/spiders/fishing/pisaurid.htm' },
  { title: 'Spiders', publisher: 'University of Minnesota Extension', url: 'https://extension.umn.edu/garden-and-home/home-maintenance/household-insects/spiders' },
  { title: 'Wolf Spiders', publisher: 'Missouri Department of Conservation', url: 'https://mdc.mo.gov/discover-nature/field-guide/wolf-spiders' },
  { title: 'Bold Jumper', publisher: 'Missouri Department of Conservation', url: 'https://mdc.mo.gov/discover-nature/field-guide/bold-jumper' },
  { title: 'Black-and-Yellow Garden Spider', publisher: 'Missouri Department of Conservation', url: 'https://mdc.mo.gov/discover-nature/field-guide/black-and-yellow-garden-spider' },
  { title: 'Black Widow Spiders', publisher: 'Missouri Department of Conservation', url: 'https://mdc.mo.gov/discover-nature/field-guide/black-widow-spiders' },
  { title: 'Dark Fishing Spider', publisher: 'Missouri Department of Conservation', url: 'https://mdc.mo.gov/discover-nature/field-guide/dark-fishing-spider' },
  { title: 'Daddy Longlegs (Harvestmen)', publisher: 'Missouri Department of Conservation', url: 'https://mdc.mo.gov/discover-nature/field-guide/daddy-longlegs-harvestmen' },
  { title: 'Giant House Spider', publisher: 'Washington State University Extension, Pestsense', url: 'https://pestsense.cahnrs.wsu.edu/fact-sheet/giant-house-spider/' },
  { title: 'Barn Funnel Weaver (Colorado Arthropod of Interest)', publisher: 'Colorado State University', url: 'https://webdoc.agsci.colostate.edu/bspm/InsectInformation/FactSheets/BarnFunnel.pdf' },
  { title: 'Windscorpions (Sunspiders) of Colorado', publisher: 'Colorado State University Extension', url: 'https://extension.colostate.edu/topic-areas/insects/sunspiders-windscorpions-5-589/' },
  { title: 'Southern House Spider, Kukulcania hibernalis (EENY144)', publisher: 'University of Florida IFAS Extension (UF/IFAS)', url: 'https://ask.ifas.ufl.edu/publication/IN301' },
  { title: 'Green Lynx Spider, Peucetia viridans (EENY-249)', publisher: 'UF/IFAS Extension', url: 'https://ask.ifas.ufl.edu/publication/IN521' },
  { title: 'Golden Silk Spider, Trichonephila clavipes (EENY229)', publisher: 'UF/IFAS Extension', url: 'https://ask.ifas.ufl.edu/publication/IN467' },
  { title: 'Spiny Orb Weaver Spider, Gasteracantha cancriformis (EENY-167)', publisher: 'UF/IFAS Extension', url: 'https://ask.ifas.ufl.edu/publication/IN324' },
  { title: 'Joro Spider: Trichonephila clavata (Circular 1273)', publisher: 'University of Georgia Cooperative Extension', url: 'https://fieldreport.caes.uga.edu/publications/C1273/' },
  { title: 'The Jorō Spider (HGIC 2517)', publisher: 'Clemson Cooperative Extension, Home & Garden Information Center', url: 'https://hgic.clemson.edu/joro-spider/' },
  {
    title: 'Texas Tarantula Tango: Understanding Their Annual Hunt for Food, Love',
    publisher: 'Texas A&M AgriLife Extension, Insects in the City',
    url: 'https://citybugs.tamu.edu/2024/05/13/newsletter-agrilife-today-texas-tarantula-tango-understanding-their-annual-hunt-for-food-love/',
  },
  { title: 'Tarantula', publisher: 'University of Arkansas Arthropod Museum', url: 'https://arthropod.uark.edu/?p=27266' },
  { title: 'Brown Tarantula', publisher: 'Oklahoma Department of Wildlife Conservation', url: 'https://www.wildlifedepartment.com/wildlife/field-guide/invertebrates/brown-tarantula' },
  { title: 'Spiders (Backyard Gardener #177)', publisher: 'University of Arizona Cooperative Extension', url: 'https://extension.arizona.edu/sites/extension.arizona.edu/files/attachment/Spiders.pdf' },
  { title: 'Widow Spiders (Fact Sheet 18-030-0818)', publisher: 'US Army Public Health Center', url: 'https://ph.health.mil/PHC%20Resource%20Library/WidowSpiders_FS_18-030-0818.pdf' },
  {
    title: 'Wild Species 2010, chapter 10 (spiders)',
    publisher: 'Environment and Climate Change Canada',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/publications/wild-species-2010/chapter-10.html',
  },
]

const H2 = 'mb-3 scroll-mt-28 text-2xl font-extrabold leading-tight text-brand-900 sm:text-3xl'
const slugOf = (path: string) => path.split('#')[0].split('/').pop()

export default function SpiderIdentifierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(CRUMBS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS.map(({ question, answer }) => ({ question, answer })))) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 px-4 py-12 text-white">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap gap-1 text-sm text-brand-400">
            {CRUMBS.slice(0, -1).map((c) => (
              <span key={c.url} className="flex gap-1">
                <Link href={c.url} className="hover:text-white">{c.name}</Link>
                <span>/</span>
              </span>
            ))}
            <span className="text-white">Spider Identifier</span>
          </nav>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">Spider Identifier: What Kind of Spider Is This?</h1>
          <p className="max-w-3xl text-xl text-brand-100">
            {QUIZ.questions.length} quick questions about where you found it, its web, size and markings, what it did and where you live. You get the best match and
            any close ones (up to three in all), a real photo of each, how to confirm it and how to tell the few dangerous ones apart.
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
            safety={<SafetyBox headingId="spider-result-safety" />}
            copy={{
              namedIntro: 'Best match first. Many spiders look alike, so treat this as a starting point from seven answers, and use the checks under each spider to confirm it.',
              compareHeading: 'Compare the common spiders',
              medical: true,
            }}
          />
          <p className="mt-4 text-xs leading-relaxed text-gray-600">
            How this works: each answer adds points to the spiders it fits, using what university extension services, the Missouri Department of Conservation, CDC and
            the other sources below say about each one, and the result shows the reasons. It cannot see your spider, and some spiders can only be told apart under a
            microscope, so treat the result as a place to start. Your answers are not saved with your name; the site counts which answers are picked, through Google
            Analytics, to improve the tool.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            Have a bite but no spider? Try the{' '}
            <Link href="/tools/bug-bite-identifier" prefetch={false} data-recirc="quiz_result" data-recirc-kind="tool" data-recirc-target="bug-bite-identifier" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">bug bite identifier</Link>. Think it might be a tick? Try the{' '}
            <Link href="/tools/tick-identifier" prefetch={false} data-recirc="quiz_result" data-recirc-kind="tool" data-recirc-target="tick-identifier" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">tick identifier</Link>.
          </p>
        </div>
      </div>

      <section aria-labelledby="safety" className="bg-white px-4 pt-10">
        <div className="mx-auto max-w-4xl">
          <h2 id="safety" className={H2}>Which spiders are dangerous, and when a bite needs a doctor</h2>
          <p className="mb-5 text-gray-700">
            Most spiders are harmless to people: the jaws of most are too small to bite through an adult’s skin (UC IPM). CDC’s page on venomous spiders in the US
            names two, the black widow and the brown recluse. Know these, and these signs:
          </p>
          <SafetyBox headingId="safety-box" heading={false} />
        </div>
      </section>

      <section aria-labelledby="compare" className="bg-white px-4 pt-12">
        <div className="mx-auto max-w-4xl">
          <h2 id="compare" className={H2}>Common spiders compared</h2>
          <p className="mb-5 text-gray-700">
            Compare the web, the size with the legs, the markings and where it turned up. No single clue settles it: the violin mark misleads, and some funnel weavers
            can only be told apart under a microscope (UC IPM).
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <caption className="sr-only">Common spiders compared by web, size, markings and where they are found</caption>
              <thead className="bg-brand-50 text-brand-900">
                <tr>
                  <th scope="col" className="sticky left-0 z-10 bg-brand-50 px-3 py-2.5 font-extrabold">Spider</th>
                  <th scope="col" className="px-3 py-2.5 font-extrabold">Web</th>
                  <th scope="col" className="px-3 py-2.5 font-extrabold">Size, legs included</th>
                  <th scope="col" className="px-3 py-2.5 font-extrabold">What it looks like</th>
                  <th scope="col" className="px-3 py-2.5 font-extrabold">Where you find it</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r) => {
                  const l = VIEWS[r.id].links[0]
                  return (
                    <tr key={r.id} className="border-t border-gray-200 align-top">
                      <th scope="row" className="sticky left-0 z-10 w-36 bg-white px-3 py-2.5 font-bold text-brand-900">
                        <Link href={l.path} prefetch={false} data-recirc="quiz_result" data-recirc-kind="table" data-recirc-target={slugOf(l.path)} className="underline underline-offset-2 hover:text-brand-700">
                          {r.spider}
                        </Link>
                      </th>
                      <td className="px-3 py-2.5 text-gray-700">{r.web}</td>
                      <td className="px-3 py-2.5 text-gray-700">{r.size}</td>
                      <td className="px-3 py-2.5 text-gray-700">{r.looks}</td>
                      <td className="px-3 py-2.5 text-gray-700">{r.where}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-gray-500">
            Coin sizes with the legs stretched out are the University of Kentucky’s; the other sizes and the rest of the table come from that chart, UC IPM, UC Riverside, Penn State, the
            University of Minnesota, the Missouri Department of Conservation, Washington State, Colorado State, UF/IFAS, Texas A&amp;M AgriLife and the US Army Public
            Health Center (see sources). “Body” means the body without the legs. Scroll sideways on a phone to see every column.
          </p>
        </div>
      </section>

      <section aria-labelledby="clues" className="bg-white px-4 pt-12">
        <div className="mx-auto max-w-4xl">
          <h2 id="clues" className={H2}>How to tell spiders apart</h2>
          <p className="mb-5 text-gray-700">Six clues do most of the work. The questions above ask about each one.</p>
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
          <h2 id="photos" className={H2}>Spider photos to compare</h2>
          <p className="text-gray-700">Real, credited photos. Each card opens a guide that covers that spider; a card without a link is a guide still being written.</p>
          <ConfusedWith
            items={[
              { href: '/blog/house-spiders', name: 'Common house spider', photo: 'common-house-spider', note: 'Small and brown with a round, mottled body; stays in a messy cobweb' },
              { href: '/blog/daddy-long-legs', name: 'Cellar spider', photo: 'cellar-spider', note: 'Tiny pale body on very long legs; whirls in its web when disturbed' },
              { href: '/blog/wolf-spiders', name: 'Wolf spider', photo: 'rabid-wolf-spider', note: 'Hairy, striped and fast, with no web and two big forward-facing eyes' },
              { href: '/blog/black-spiders', name: 'Bold jumping spider', photo: 'bold-jumping-spider', note: 'Fuzzy and black, often with white spots, and big front eyes; it jumps' },
              { href: '/blog/venomous-spiders', name: 'Black widow', photo: 'western-black-widow', note: 'Shiny black and round, with a red or orange hourglass on the underside' },
              { href: '/blog/brown-recluse-look-alikes', name: 'Brown recluse', photo: 'brown-recluse-female', note: 'Plain tan with legs of one color and six eyes in pairs; a violin alone is no proof' },
            ]}
            title="Six spiders to know, side by side"
          />
        </div>
      </section>

      <section aria-labelledby="spiders" className="bg-white px-4 pt-4">
        <div className="mx-auto max-w-4xl">
          <h2 id="spiders" className={H2}>Already know which spider it is?</h2>
          <p className="mb-6 text-gray-700">Go straight to the guides for that spider.</p>
          <ul className="grid gap-5 sm:grid-cols-2">
            {SPIDER_IDS.map((id) => (
              <li key={id} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="text-lg font-extrabold text-brand-900">{VIEWS[id].name}</h3>
                <p className="mt-1 text-sm text-gray-600">{VIEWS[id].summary}</p>
                <ul className="mt-2 space-y-1.5 text-[15px]">
                  {VIEWS[id].links.map((l) => (
                    <li key={l.path}>
                      <Link href={l.path} prefetch={false} data-recirc="quiz_result" data-recirc-kind="list" data-recirc-target={slugOf(l.path)} className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">
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
          <h2 id="faq" className={H2}>Spider identification questions</h2>
          <div className="space-y-4">
            {FAQS.map((f, i) => {
              const more = FAQ_LINKS[i]
              return (
                <details key={f.question} className="group rounded-xl border border-gray-200 bg-white p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-bold text-brand-900">
                    {f.question}
                    <span aria-hidden="true" className="text-xl leading-none text-emerald-600 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{f.answer}</p>
                  {more && (
                    <p className="mt-2 text-sm">
                      More:{' '}
                      <Link href={more.path} prefetch={false} data-recirc="quiz_result" data-recirc-kind="faq" data-recirc-target={slugOf(more.path)} className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">
                        {more.title}
                      </Link>
                    </p>
                  )}
                </details>
              )
            })}
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
            independent AI pass checked each factual claim against those sources. The photos come from CDC’s Public Health Image Library, iNaturalist, Wikimedia
            Commons and other sources that allow reuse, with each credit shown under the photo. BugGuide and iNaturalist are named as places to ask for an identification, not as sources of facts. This page gives general information,
            not medical advice. Found an error? Email {BUSINESS.email}.
          </p>
          <p className="mt-6 text-xs text-gray-500">
            BuzzSkito treats mosquitoes and ticks in the Greater Toronto Area. Our spider guides are independent research: we do not treat spiders.
          </p>
        </div>
      </section>
    </>
  )
}
