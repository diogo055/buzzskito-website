/**
 * "What bit me?" — the six-question bug bite identifier at /tools/bug-bite-identifier (Oct 2026).
 * Same job as the pest identifier quiz (lib/bug-quiz.ts) and the articles: answer the reader's
 * question, then send them on to the page about their bite.
 *
 * HOW IT DECIDES. Every answer adds points to the biters it fits, and carries one plain sentence
 * saying why ("Bed bug bites often form a zigzag line (AAD) or a cluster (Mayo Clinic)"). The result shows the
 * best match and up to two more that came close, each with the sentences its answers earned, so
 * the reader sees the reasoning instead of a verdict. Under MIN_SCORE nothing is named: a wrong
 * name is worse than "not clear", and that result says how to find out.
 *
 * NEVER A DIAGNOSIS. A bite alone rarely proves what caused it (EPA calls bites "a poor indicator"
 * of bed bugs; UC IPM says people and their doctors often blame spiders with no proof). The tool
 * says "most likely", tells the reader how to confirm each suspect (find the insect), and always
 * shows the red-flag box. Three answers raise a warning at the top of the result (FLAGS).
 *
 * SOURCES. Every "why" and "confirm" line restates a primary or clinical source named in brackets
 * (CDC, AAD, EPA, PHAC, Mayo Clinic, Cleveland Clinic, MedlinePlus, NHS, UC IPM, Purdue,
 * University of Missouri, University of Arizona, UF/IFAS). The full list is on the page
 * (app/tools/bug-bite-identifier/page.tsx). Change a line here only together with its source,
 * and keep it consistent with the bite guide (content/guides/bug-bites.json), which cites the same.
 *
 * PHOTOS live in the page, not here: scripts/check-photos.mjs verifies <Photo id="..."> only in
 * app/ files and only with a literal id, so the page writes one <Photo> per biter.
 *
 * LINKS are checked at build time: the page looks every path up in lib/article-index.json and every
 * "#section" in the guide it points into, and throws if one is gone.
 */

export type CulpritId =
  | 'mosquito'
  | 'bed-bug'
  | 'flea'
  | 'tick'
  | 'chigger'
  | 'no-see-um'
  | 'bee-wasp'
  | 'fire-ant'
  | 'biting-fly'
  | 'spider'
  | 'mite'
export type ResultId = CulpritId | 'unsure'
export type FlagId = 'lyme-rash' | 'attached-tick' | 'scabies'

/** One way an answer fits a biter: the points it adds and the sentence that says why. */
export type Fit = readonly [points: number, why: string]
export type BiteChoice = {
  id: string
  label: string
  fits: Partial<Record<CulpritId, Fit>>
  /** Biters this answer argues against (they live elsewhere, or their bite is always felt): minus UNLIKELY_PENALTY each. */
  unlikely?: readonly CulpritId[]
  /** An answer that only one kind of biter explains: no other biter is shown beside it. */
  only?: readonly CulpritId[]
  /** Raises a warning at the top of the result. */
  flag?: FlagId
}
export type BiteQuestion = { id: string; title: string; hint?: string; choices: BiteChoice[] }
/** Question id -> choice id. */
export type Answers = Record<string, string>

export const QUIZ_ID = 'bug-bite-identifier'
export const QUIZ_PATH = '/tools/bug-bite-identifier'

/** Ties are broken in this order (the more common biter first). */
export const CULPRIT_IDS: readonly CulpritId[] = ['mosquito', 'bed-bug', 'flea', 'tick', 'chigger', 'no-see-um', 'bee-wasp', 'fire-ant', 'biting-fly', 'spider', 'mite']

/** The best match must reach this many points, or the result is "not clear". */
export const MIN_SCORE = 7
/** Another biter is shown beside the best match when it reaches this many points... */
export const ALSO_MIN_SCORE = 6
/** ...and at least this share of the best match's points. */
export const ALSO_SHARE = 0.6
/** The best match plus at most two more. */
export const MAX_SHOWN = 3
/** What an answer that argues against a biter takes off its score. */
export const UNLIKELY_PENALTY = 3
/** On a "not clear" result, biters with at least this many points are offered as weak leads. */
export const LEAD_MIN_SCORE = 3

// Biters that live and bite outdoors only, and biters whose bite or sting is always felt at once.
const OUTDOOR_ONLY: readonly CulpritId[] = ['fire-ant', 'biting-fly', 'bee-wasp', 'chigger']
const FELT_AT_ONCE: readonly CulpritId[] = ['bee-wasp', 'biting-fly', 'fire-ant']

export const QUESTIONS: BiteQuestion[] = [
  {
    id: 'where',
    title: 'Where were you when it happened?',
    hint: 'Your best guess is fine.',
    choices: [
      {
        id: 'bed',
        label: 'In bed or asleep (at home, a hotel or on a sofa)',
        unlikely: ['fire-ant', 'biting-fly', 'bee-wasp'],
        fits: {
          'bed-bug': [4, 'Bed bugs bite while you sleep, and most people only find the bites the next day (AAD).'],
          mosquito: [1, 'Mosquitoes bite day and night (CDC) and can get indoors.'],
          flea: [1, 'Fleas hide in bedding as well as in carpets and furniture (Cleveland Clinic).'],
          mite: [1, 'Bird mites that get into a building bite the people inside (UF/IFAS).'],
        },
      },
      {
        id: 'indoors',
        label: 'Indoors, but not in bed',
        unlikely: ['fire-ant', 'biting-fly', 'chigger'],
        fits: {
          flea: [2, 'Fleas live in carpets, furniture and bedding (Cleveland Clinic).'],
          mite: [2, 'Bird mites move indoors through windows, doors and vents and bite the people inside (UF/IFAS).'],
          'bed-bug': [1, 'Bed bugs can also hide in the seams of upholstered furniture (Mayo Clinic).'],
          mosquito: [1, 'Mosquitoes bite day and night (CDC) and can get indoors.'],
        },
      },
      {
        id: 'grass',
        label: 'In tall grass, brush or woods',
        unlikely: ['bed-bug', 'mite'],
        fits: {
          tick: [4, 'Ticks live in grassy, brushy and wooded areas (CDC).'],
          chigger: [4, 'Chiggers live in overgrown grass and wooded areas (Cleveland Clinic).'],
          'biting-fly': [1, 'Horse flies and deer flies bite outdoors in the daytime (Purdue Extension).'],
          mosquito: [1, 'Mosquitoes bite outdoors day and night (CDC).'],
        },
      },
      {
        id: 'water',
        label: 'Near water, around dusk or dawn',
        unlikely: ['bed-bug', 'mite'],
        fits: {
          'no-see-um': [4, 'No-see-ums are a nuisance near springs, ponds, lakes and beaches, usually at dawn or dusk (University of Arizona Extension).'],
          mosquito: [2, 'Mosquitoes lay their eggs in or near water (CDC).'],
          chigger: [1, 'Chiggers also live in damp soil near water (Cleveland Clinic).'],
        },
      },
      {
        id: 'garden',
        label: 'In a garden, yard or park',
        unlikely: ['bed-bug', 'mite'],
        fits: {
          mosquito: [2, 'Mosquitoes bite day and night and breed in anything outdoors that holds water (CDC).'],
          chigger: [2, 'Chiggers live in gardens as well as in long grass (Cleveland Clinic).'],
          'bee-wasp': [2, 'Bees and wasps are common around gardens and yards.'],
          'fire-ant': [2, 'Fire ants often nest in lawns and other turf (UC IPM).'],
          tick: [1, 'Ticks can live in your own yard (CDC).'],
        },
      },
      {
        id: 'pet',
        label: 'Around a dog or cat, or where pets sleep',
        fits: {
          flea: [4, 'Fleas prefer pets but will bite people too (Cleveland Clinic).'],
          tick: [1, 'Ticks also live on animals (CDC).'],
        },
      },
      { id: 'unsure', label: 'Not sure', fits: {} },
    ],
  },
  {
    id: 'when',
    title: 'When did you notice the bites?',
    choices: [
      {
        id: 'after-sleep',
        label: 'In the morning, after sleeping',
        unlikely: ['fire-ant', 'biting-fly', 'bee-wasp'],
        fits: {
          'bed-bug': [3, 'Bed bug bites are usually found the morning after (AAD).'],
          mosquito: [1, 'A mosquito indoors at night can leave bites you only find in the morning.'],
        },
      },
      {
        id: 'right-away',
        label: 'Right away, while I was outside',
        unlikely: ['bed-bug', 'mite'],
        fits: {
          mosquito: [3, 'A mosquito bite becomes an itchy bump a few minutes after the bite (Mayo Clinic).'],
          'bee-wasp': [3, 'You noticed it the moment it happened, as people do with a sting.'],
          'biting-fly': [3, 'Horse flies and deer flies bite outdoors in the daytime (Purdue Extension).'],
          'fire-ant': [3, 'Fire ant stings are noticed the moment they happen.'],
          'no-see-um': [2, 'No-see-ums bite outdoors and are so small that they often go unnoticed (University of Arizona Extension).'],
        },
      },
      {
        id: 'hours-later',
        label: 'Hours later or the next day, after being outside',
        fits: {
          chigger: [4, 'Chigger bites can take up to three hours to cause symptoms, and the itch peaks over the next one to two days (Cleveland Clinic).'],
          tick: [2, 'An attached tick is easy to miss until a tick check or a shower after coming inside (CDC).'],
          'fire-ant': [1, 'A fire ant sting is followed by a white pustule (UC IPM).'],
        },
      },
      {
        id: 'days-later',
        label: 'Days or weeks after being outside',
        fits: {
          tick: [4, 'The rash of Lyme disease starts 3 to 30 days after the bite of an infected tick (CDC).'],
          chigger: [1, 'Chigger itch can last about two weeks (Cleveland Clinic).'],
        },
      },
      {
        id: 'keeps-coming',
        label: 'At home, and new bites keep appearing',
        unlikely: OUTDOOR_ONLY,
        fits: {
          flea: [3, 'Fleas hide in carpets, furniture and bedding, and their bites are most common on the feet, calves and ankles (Cleveland Clinic).'],
          'bed-bug': [3, 'Bed bugs come out of hiding to feed and then go back, so new bites keep appearing (AAD).'],
          mite: [2, 'Bird mites that get indoors bite the people inside, though away from their bird hosts they survive only about 10 days (UF/IFAS).'],
        },
      },
      { id: 'unsure', label: 'Not sure', fits: {} },
    ],
  },
  {
    id: 'pattern',
    title: 'What pattern do the bites make?',
    choices: [
      {
        id: 'line',
        label: 'A line, zigzag or cluster of three or more',
        fits: {
          'bed-bug': [4, 'Bed bug bites often form a zigzag line (AAD) or a cluster (Mayo Clinic).'],
          flea: [2, 'Flea bites can sit in a row or a group (Cleveland Clinic).'],
          chigger: [1, 'Chigger bites can form a speckled line (Cleveland Clinic).'],
          'fire-ant': [1, 'A single fire ant can bite and sting again and again (UC IPM).'],
        },
      },
      {
        id: 'ankles',
        label: 'Many small bites on the ankles and lower legs',
        fits: {
          flea: [4, 'Flea bites are most common on the feet, calves and ankles (Cleveland Clinic).'],
          chigger: [2, 'Chiggers often bite the ankles and lower legs (Cleveland Clinic).'],
          'no-see-um': [1, 'No-see-ums bite any bare skin, ankles included.'],
          mosquito: [1, 'Mosquitoes bite any skin that clothing leaves uncovered.'],
        },
      },
      {
        id: 'tight-clothing',
        label: 'Along the sock line, waistband or bra line',
        fits: {
          chigger: [5, 'Chigger bites bunch up where clothing fits tightly: sock lines, waistbands and bra lines (Cleveland Clinic).'],
          tick: [1, "The waist and the backs of the knees are on CDC's list of places to check for ticks."],
        },
      },
      {
        id: 'single',
        label: 'One bump, or a few far apart',
        unlikely: ['bed-bug', 'chigger'],
        fits: {
          mosquito: [2, 'Mosquito bites often land on skin that clothing does not cover (Mayo Clinic).'],
          'bee-wasp': [2, 'A sting usually leaves one spot, unless many insects attack at once.'],
          'biting-fly': [2, 'Horse flies and deer flies bite where they land, and an interrupted fly often comes back to bite again (Purdue Extension).'],
          tick: [1, 'A tick bite is a single spot, sometimes with the tick still in it.'],
        },
      },
      {
        id: 'two-marks',
        label: 'Two tiny puncture marks side by side',
        fits: {
          spider: [4, 'Spiders have two fangs, and CDC says a black widow bite leaves two puncture marks.'],
        },
      },
      {
        id: 'ring',
        label: 'A red ring or patch that keeps getting bigger',
        flag: 'lyme-rash',
        only: ['tick'],
        fits: {
          tick: [6, 'A red rash that keeps spreading over several days, sometimes like a bull’s-eye, is how CDC describes the rash of Lyme disease, which follows a tick bite.'],
        },
      },
      {
        id: 'attached',
        label: 'A bug is still stuck to the skin',
        flag: 'attached-tick',
        only: ['tick'],
        fits: {
          tick: [7, 'Ticks stay attached while they feed, for minutes to days depending on the species (CDC).'],
        },
      },
      { id: 'unsure', label: 'None of these', fits: {} },
    ],
  },
  {
    id: 'looks',
    title: 'What does one bite look like?',
    choices: [
      {
        id: 'itchy-bump',
        label: 'A small, itchy red bump',
        fits: {
          mosquito: [2, 'Mosquito bites are itchy bumps (Mayo Clinic).'],
          flea: [2, 'Flea bites are small, itchy bumps, smaller than mosquito bites (Cleveland Clinic).'],
          chigger: [2, 'Chigger bites are very itchy red spots or pimples (Cleveland Clinic).'],
          'bed-bug': [2, 'Bed bug bites are itchy, inflamed spots (Mayo Clinic).'],
          'no-see-um': [2, 'No-see-um bites are small red welts, about 1/8 inch across, that itch intensely (University of Arizona Extension).'],
          mite: [2, 'Bird mite bites are irritating, and some people itch for a long time afterwards (UF/IFAS).'],
          tick: [1, 'A small red bump right after a tick bite is common, and CDC says it is not a sign of Lyme disease.'],
        },
      },
      {
        id: 'welt',
        label: 'A raised, swollen welt',
        fits: {
          mosquito: [3, 'Mosquito bites are inflamed bumps that form a few minutes after the bite (Mayo Clinic).'],
          'bed-bug': [2, 'Bed bug bites are often raised welts (AAD).'],
          'bee-wasp': [2, 'A bee or wasp sting raises a welt with swelling (Mayo Clinic).'],
        },
      },
      {
        id: 'blister',
        label: 'A blister or a white, pus-like bump',
        fits: {
          'fire-ant': [5, 'Fire ant stings turn into white pustules (UC IPM).'],
          'no-see-um': [2, 'No-see-um bites can be water-filled blisters (University of Arizona Extension).'],
          spider: [1, 'A small white blister often forms at a brown recluse bite (CDC).'],
          mosquito: [1, 'Some mosquito bites form small blisters (Mayo Clinic).'],
          chigger: [1, 'Chigger bites can look like pimples (Cleveland Clinic).'],
        },
      },
      {
        id: 'halo',
        label: 'A tiny dot with a red ring around it',
        fits: {
          flea: [4, 'Flea bites can have a red ring or halo around them (Cleveland Clinic).'],
          'bed-bug': [1, 'Bed bug bites often have a darker spot in the middle (Mayo Clinic).'],
          'fire-ant': [1, 'A fire ant sting can leave a pustule ringed with red (CDC).'],
        },
      },
      {
        id: 'painful-swelling',
        label: 'Swelling that hurts more than it itches',
        unlikely: ['flea', 'chigger', 'no-see-um', 'mite', 'bed-bug'],
        fits: {
          'bee-wasp': [4, 'A bee or wasp sting causes pain and swelling (University of Missouri Extension).'],
          'biting-fly': [3, 'Horse fly and deer fly bites are painful wounds that can bleed (Purdue Extension).'],
          'fire-ant': [2, 'A fire ant sting burns and itches, then forms a white pustule (UC IPM).'],
          spider: [2, 'A spider bite can cause redness, swelling and pain, usually no worse than a bee sting (UC IPM).'],
        },
      },
      { id: 'unsure', label: 'Hard to say', fits: {} },
    ],
  },
  {
    id: 'felt',
    title: 'Did you feel it happen?',
    choices: [
      {
        id: 'sharp',
        label: 'Yes: a sharp or burning pain right away',
        unlikely: ['bed-bug', 'tick', 'chigger'],
        fits: {
          'bee-wasp': [4, 'A sting causes sharp, burning pain at once (Mayo Clinic).'],
          'biting-fly': [4, 'Horse flies and deer flies cut the skin to feed, so the bite hurts at once (Purdue Extension).'],
          'fire-ant': [3, 'Fire ant stings burn the moment they happen (UC IPM).'],
          spider: [1, 'A brown recluse bite may cause a stinging feeling (CDC).'],
        },
      },
      {
        id: 'itch-soon',
        label: 'Not the bite, but it itched soon after',
        unlikely: FELT_AT_ONCE,
        fits: {
          mosquito: [3, 'A mosquito bite becomes an itchy bump within minutes (Mayo Clinic).'],
          'no-see-um': [2, 'No-see-um bites itch intensely (University of Arizona Extension).'],
          flea: [1, 'Flea bites itch (Cleveland Clinic).'],
        },
      },
      {
        id: 'nothing',
        label: 'No, I found the marks later',
        unlikely: FELT_AT_ONCE,
        fits: {
          'bed-bug': [3, 'Most people sleep through bed bug bites (AAD).'],
          tick: [3, 'Tick saliva can numb the skin, so the bite often is not felt (CDC).'],
          chigger: [3, 'Chigger bites usually go unnoticed at first (Cleveland Clinic).'],
          spider: [1, 'Sometimes people do not realize a spider bit them until pain or other symptoms start (UC IPM).'],
        },
      },
      { id: 'unsure', label: 'Not sure', fits: {} },
    ],
  },
  {
    id: 'signs',
    title: 'Have you noticed any of these?',
    hint: 'Pick the one that fits best.',
    choices: [
      {
        id: 'sheet-spots',
        label: 'Rusty or dark spots on the sheets or mattress',
        fits: {
          'bed-bug': [5, 'EPA lists rusty or reddish stains from crushed bed bugs, and dark spots of their droppings, as signs of bed bugs.'],
        },
      },
      {
        id: 'pet-scratching',
        label: 'A pet scratching more than usual',
        fits: {
          flea: [5, 'A pet scratching more than usual is a reason to check it for fleas (Cleveland Clinic).'],
        },
      },
      {
        id: 'tall-grass',
        label: 'I walked through tall grass, weeds or brush',
        fits: {
          chigger: [3, 'You were in the kind of overgrown grass where chiggers live (Cleveland Clinic).'],
          tick: [3, 'Ticks wait in high grass and brush, which is why CDC advises walking in the middle of trails.'],
        },
      },
      {
        id: 'small-flyers',
        label: 'Mosquitoes or tiny biting flies around me',
        fits: {
          mosquito: [3, 'You noticed mosquitoes or small flies around you.'],
          'no-see-um': [3, 'No-see-ums are tiny biting flies; people may see small insects around them but not see them bite (University of Arizona Extension).'],
        },
      },
      {
        id: 'big-fly',
        label: 'A big fly kept landing on me or circling my head',
        fits: {
          'biting-fly': [6, 'Deer flies usually bite the head and shoulders; horse flies, which feed mostly on large animals, usually bite the legs and body (Purdue Extension).'],
        },
      },
      {
        id: 'nest',
        label: 'An ant mound or a bee or wasp nest nearby',
        fits: {
          'fire-ant': [3, 'Red imported fire ants quickly climb onto anyone who disturbs their mound (UC IPM).'],
          'bee-wasp': [3, 'A nest nearby makes a sting more likely; some yellowjackets nest in holes in the ground (University of Missouri Extension).'],
        },
      },
      {
        id: 'spider-seen',
        label: 'A spider on me or in the bed',
        fits: {
          spider: [5, 'A spider on you or in the bed is a clue, not proof. If you catch one in the act of biting, UC IPM advises saving it for identification.'],
        },
      },
      {
        id: 'bird-nest',
        label: 'Birds nesting on or in the building',
        fits: {
          mite: [5, 'After nesting birds leave, their mites can move indoors through windows, doors and vents and bite people (UF/IFAS).'],
        },
      },
      {
        id: 'night-itch',
        label: 'Itching worst at night, with a rash between the fingers',
        flag: 'scabies',
        fits: {
          mite: [2, 'Itching worst at night with a rash between the fingers is how CDC describes scabies, which is caused by mites that live in the skin.'],
        },
      },
      { id: 'none', label: 'None of these', fits: {} },
    ],
  },
]

// ── Results ─────────────────────────────────────────────────────────────────────────────

/** A link from a result. `label` replaces the article's own title (used for links to a #section). */
export type BiteLinkSpec = string | { path: string; label: string }

export type CulpritCopy = {
  /** The title of its result card. */
  name: string
  /** Lower case, for a sentence: "Most likely: bed bugs". */
  short: string
  /** One line under the name. */
  summary: string
  /** How to confirm it. Every line restates a source. */
  confirm: string[]
  /** A warning shown with this biter whenever it is named. */
  caution?: string
  /** The page about this bite first. Checked against lib/article-index.json at build time. */
  links: BiteLinkSpec[]
}

const BEE_WASP_SECTION = '/learn/bug-bites#how-can-you-tell-a-bee-sting-from-a-wasp-sting'
const OTHER_BITERS_SECTION = '/learn/bug-bites#which-other-bugs-bite-people'

export const CULPRITS: Record<CulpritId, CulpritCopy> = {
  mosquito: {
    name: 'Mosquitoes',
    short: 'mosquitoes',
    summary: 'Itchy, inflamed bumps on uncovered skin that show up within minutes.',
    confirm: [
      'An itchy, inflamed bump formed a few minutes after the bite, on skin your clothes did not cover (Mayo Clinic).',
      'It usually itches more than it hurts (MedlinePlus), and the bumps usually go away on their own in a few days (Mayo Clinic).',
      'Look for standing water nearby: CDC advises emptying, scrubbing, turning over or covering anything that holds water, once a week.',
    ],
    links: ['/blog/when-to-worry-about-a-mosquito-bite', '/blog/mosquito-bite-treatment-relief', '/blog/why-do-mosquito-bites-itch'],
  },
  'bed-bug': {
    name: 'Bed bugs',
    short: 'bed bugs',
    summary: 'Itchy welts in a line or cluster, found in the morning.',
    confirm: [
      'With a flashlight, check the seams, piping and tags of the mattress and box spring, the bed frame and the headboard (EPA).',
      'Look for rusty or reddish stains, dark spots that may bleed into the fabric like marker ink, tiny pale eggs, shed skins and the bugs themselves (EPA).',
      'Bites alone cannot confirm bed bugs: EPA calls them a poor indicator, and some people do not react to the bites at all.',
    ],
    links: ['/blog/bed-bug-bites', '/blog/signs-of-bed-bugs-checklist', '/blog/bed-bug-bites-vs-mosquito-bites'],
  },
  flea: {
    name: 'Fleas',
    short: 'fleas',
    summary: 'Small, itchy bumps, sometimes with a red halo, mostly on the feet and ankles.',
    confirm: [
      'Check each pet around the ears, neck, back and belly, parting the fur to see the skin (Cleveland Clinic).',
      'Look for fleas and flea dirt (flea droppings) in the fur and where the pet sleeps.',
      'Fleas hide in carpets, furniture, bedding and cracks in the floor, and they bite people when no animal is around (Cleveland Clinic).',
    ],
    links: ['/blog/flea-bites-on-humans', '/blog/what-do-fleas-look-like', '/blog/how-to-get-rid-of-fleas'],
  },
  tick: {
    name: 'A tick',
    short: 'a tick',
    summary: 'Often painless. The tick may still be attached, and a rash can follow days later.',
    confirm: [
      'Check your whole body: under the arms, in and around the ears, inside the belly button, behind the knees, in and around the hair, between the legs and around the waist (CDC).',
      'If a tick is attached, remove it now with fine-tipped tweezers: grasp it close to the skin and pull it away from the skin with steady pressure, without twisting. Do not use petroleum jelly, heat or nail polish (CDC).',
      'See a doctor if a rash or fever follows within several weeks (CDC). In Canada, PHAC says to see a health care provider right away if you get symptoms after a tick bite.',
    ],
    links: ['/blog/what-does-a-tick-bite-look-like', '/blog/how-to-remove-tick-safely', '/blog/tick-bite-vs-mosquito-bite'],
  },
  chigger: {
    name: 'Chiggers',
    short: 'chiggers',
    summary: 'Very itchy red spots where clothing presses, after time in long grass.',
    confirm: [
      'The bites sit where clothing presses on the skin: sock lines, waistbands, bra lines and the backs of the knees (Cleveland Clinic).',
      'You were in long grass, woods or a garden in the hours before; symptoms can take up to three hours to start (Cleveland Clinic).',
      'You probably will not find the biter. Chiggers are almost invisible, they do not burrow into the skin, and they usually drop off before the rash starts (Cleveland Clinic).',
    ],
    links: ['/blog/chigger-bites', '/learn/bug-bites'],
  },
  'no-see-um': {
    name: 'No-see-ums (biting midges)',
    short: 'no-see-ums',
    summary: 'Small, very itchy welts or blisters after dawn or dusk near water.',
    confirm: [
      'You were near water, such as a lake, pond, beach or spring, around dawn or dusk (University of Arizona Extension).',
      'You saw tiny insects around you, or nothing at all: no-see-ums often go unnoticed (University of Arizona Extension).',
      'They can get through standard window screens, so bites indoors near water are possible too (University of Arizona Extension).',
    ],
    links: ['/blog/no-see-um-bites', '/blog/no-see-ums-biting-midges-ontario'],
  },
  'bee-wasp': {
    name: 'A bee, wasp or yellowjacket',
    short: 'a bee, wasp or yellowjacket',
    summary: 'Instant sharp, burning pain, then a welt and swelling.',
    confirm: [
      'A stinger left in the skin points to a honey bee. Wasps and some bees have smooth stingers and can sting again and again (University of Missouri Extension).',
      'If a stinger is still in the skin, scrape it out sideways with a fingernail or the edge of a card; NHS advises against pinching it with tweezers.',
      'Swelling that spreads, or any sign of an allergic reaction, needs the checks in the red box below.',
    ],
    links: [{ path: BEE_WASP_SECTION, label: 'Bee sting or wasp sting? How to tell them apart' }, '/blog/how-to-get-rid-of-ground-wasps-canada'],
  },
  'fire-ant': {
    name: 'Fire ants',
    short: 'fire ants',
    summary: 'A burning sting, often several, that turns into white pustules.',
    confirm: [
      'Look for an ant mound nearby: red imported fire ants quickly climb onto anyone who disturbs it (UC IPM).',
      'A white pustule after the burning sting is the giveaway. Keep it clean: UC IPM says the pustules can become infected and may scar.',
      'Red imported fire ants are established across much of the southern US (UC IPM). Other ants can bite with their jaws and only a few kinds sting (UC IPM); carpenter ants can bite but do not sting (Texas A&M).',
    ],
    links: ['/blog/do-ants-bite', '/blog/do-carpenter-ants-bite'],
  },
  'biting-fly': {
    name: 'A horse fly or deer fly',
    short: 'a horse fly or deer fly',
    summary: 'A painful daytime bite outdoors that may bleed.',
    confirm: [
      'It hurt at once: the females cut the skin with blade-like mouthparts, and the wound can bleed (Purdue Extension).',
      'Deer flies usually bite the head and shoulders; horse flies, which feed mostly on large animals, usually bite the legs and body (Purdue Extension).',
      'They bite in the daytime and do not come indoors to feed (Purdue Extension).',
    ],
    links: ['/blog/horse-fly-and-deer-fly-bite-treatment', '/blog/deer-flies-horse-flies-ontario'],
  },
  spider: {
    name: 'A spider',
    short: 'a spider',
    summary: 'Often no reaction, or some redness, itching, swelling or pain (UC IPM). Spiders get blamed for many bites they did not cause.',
    confirm: [
      'Only a spider seen biting you, or caught and identified, confirms a spider bite. UC IPM says people and their doctors often blame spiders with no proof.',
      'The fangs of most spiders cannot get through an adult’s skin, and most bites are no worse than a bee sting (UC IPM).',
      'If you catch the spider, save it so an extension office can identify it (UC IPM).',
    ],
    caution:
      'Get medical care if you think a black widow or brown recluse bit you. CDC says black widow venom causes pain that can spread to the chest, abdomen or whole body, and brown recluse venom can destroy skin tissue.',
    links: ['/blog/what-does-a-spider-bite-look-like', '/blog/mosquito-bite-vs-spider-bite', '/blog/brown-recluse-bite'],
  },
  mite: {
    name: 'Bird mites or other mites',
    short: 'mites',
    summary: 'Itchy bumps with no biter in sight, often after birds nested on the building.',
    confirm: [
      'Look for bird nests in the eaves, vents and roof. When nesting birds leave, their mites can move indoors and bite (UF/IFAS).',
      'The mites are tiny, and only a specimen identified by a trained entomologist confirms mites as the cause (UC IPM).',
      'Itching worst at night, with a rash between the fingers, on the wrists or in skin folds, can be scabies, which is not a bite. CDC says to contact a healthcare provider if you suspect scabies.',
    ],
    links: [{ path: OTHER_BITERS_SECTION, label: 'Mites, biting flies and the other bugs that bite people' }],
  },
}

export const UNSURE: CulpritCopy = {
  name: 'Not clear from these answers',
  short: 'not clear',
  summary: 'Your answers do not point clearly to one biter. That is common: many bites look alike.',
  confirm: [
    'Photograph the bite next to a ruler each day until it fades. How it changes helps a doctor.',
    'Look for the biter: check the bed, the pets and the yard, and save any suspect you catch so an extension office can identify it (UC IPM).',
    'Bites that keep appearing with no insect found are worth showing a doctor: UC IPM says dry skin, fibers and some medical conditions also get blamed on bugs.',
  ],
  links: ['/learn/bug-bites', '/blog/bed-bug-bites-vs-mosquito-bites', '/blog/mosquito-bite-vs-spider-bite'],
}

/** Warnings raised by one answer, shown at the top of the result. */
export const FLAGS: Record<FlagId, { title: string; text: string }> = {
  'lyme-rash': {
    title: 'A spreading rash after a tick bite needs a doctor',
    text: 'A red rash that keeps growing over several days can be erythema migrans, the rash of early Lyme disease. CDC says it starts 3 to 30 days after the bite, can reach 12 inches (30 cm) across and does not always look like a bull’s-eye. See a doctor and mention any tick bite.',
  },
  'attached-tick': {
    title: 'Remove an attached tick now',
    text: 'Use fine-tipped tweezers: grasp the tick as close to the skin as you can and pull it away from the skin with steady pressure, without twisting or jerking. Do not use petroleum jelly, heat or nail polish (CDC). Then watch the spot: see a doctor if a rash or fever follows within several weeks.',
  },
  scabies: {
    title: 'This could be scabies, which needs a doctor',
    text: 'Intense itching that is worse at night, with a pimple-like rash between the fingers, on the wrists or in skin folds, is how CDC describes scabies. It is caused by mites that live in the skin, not by bites, and CDC says to contact a healthcare provider if you suspect it.',
  },
}

/** The red-flag box: shown with every result and on the page. Sources are named on the page. */
export const RED_FLAGS = {
  emergency: {
    title: 'Get emergency help now (call 911) for',
    items: [
      'Trouble breathing or wheezing, or a feeling that your throat is closing',
      'Swelling of the lips, tongue, face or throat, or trouble swallowing',
      'Dizziness, fainting or sudden confusion',
      'Chest pain, or a racing heartbeat that lasts more than a few minutes',
      'Vomiting, feeling weak, or lips or skin turning blue or gray',
      'A fever with a red or black, spotty rash that spreads',
      'Many stings at once in a child, an older adult or someone with heart or breathing problems',
    ],
  },
  doctor: {
    title: 'See a doctor promptly for',
    items: [
      'A red rash that keeps spreading days after a tick bite, with or without a bull’s-eye ring',
      'Fever, headache, body aches or tiredness after a bite, especially a tick bite',
      'Redness, swelling or pain that keeps increasing, or pus coming from the bite',
      'A bite that is not getting better after a few days, or is getting worse',
      'Many stings at once, or a sting in the mouth or throat',
      'A bite you think came from a black widow or a brown recluse',
    ],
  },
} as const

// ── Scoring ─────────────────────────────────────────────────────────────────────────────

/**
 * EXTENSION POINT: a photo check (version 1 has none).
 *
 * A later version may let the reader add a photo of the bite. Whatever reads the photo must hand
 * its opinion over as Evidence, in the same form as an answer: points per biter, each with the
 * sentence that explains it ("The photo shows a white pustule"). rankCulprits() adds it to the
 * answers, capped at PHOTO_MAX_POINTS per biter, so a photo can tip a close call but can never
 * outvote six answers on its own. The result still says "most likely", the red-flag box still
 * shows, and the photo is never stored without the reader's say-so. components/BiteQuiz.tsx
 * already passes its `extraEvidence` prop through, so the photo step only has to supply it.
 */
export type Evidence = { source: 'photo'; fits: Partial<Record<CulpritId, Fit>> }
export const PHOTO_MAX_POINTS = 4

export type Suspect = { id: CulpritId; score: number; why: string[] }
export type Ranking = {
  /** 'unsure' when the best match is under MIN_SCORE. */
  result: 'named' | 'unsure'
  /** Best match first; empty when unsure. */
  suspects: Suspect[]
  /** On an unsure result, up to two biters the answers lean toward a little. */
  leads: CulpritId[]
  flags: FlagId[]
  scores: Record<CulpritId, number>
}

export function rankCulprits(answers: Answers, extra: readonly Evidence[] = []): Ranking {
  const scores = Object.fromEntries(CULPRIT_IDS.map((id) => [id, 0])) as Record<CulpritId, number>
  const why = Object.fromEntries(CULPRIT_IDS.map((id) => [id, [] as string[]])) as Record<CulpritId, string[]>
  const flags: FlagId[] = []
  let only: Set<CulpritId> | null = null
  const add = (fits: Partial<Record<CulpritId, Fit>>, cap = Infinity) => {
    for (const id of CULPRIT_IDS) {
      const fit = fits[id]
      if (!fit) continue
      scores[id] += Math.min(fit[0], cap)
      if (!why[id].includes(fit[1])) why[id].push(fit[1])
    }
  }
  for (const q of QUESTIONS) {
    const choice = q.choices.find((c) => c.id === answers[q.id])
    if (!choice) continue
    add(choice.fits)
    for (const id of choice.unlikely ?? []) scores[id] -= UNLIKELY_PENALTY
    if (choice.only) only = new Set(choice.only)
    if (choice.flag && !flags.includes(choice.flag)) flags.push(choice.flag)
  }
  for (const e of extra) add(e.fits, PHOTO_MAX_POINTS)

  // Array.prototype.sort is stable, so equal scores keep the CULPRIT_IDS order.
  const ranked = [...CULPRIT_IDS].sort((a, b) => scores[b] - scores[a])
  const eligible = only ? ranked.filter((id) => only!.has(id)) : ranked
  const best = eligible[0]
  if (scores[best] < MIN_SCORE) {
    const leads = ranked.filter((id) => scores[id] >= LEAD_MIN_SCORE).slice(0, 2)
    return { result: 'unsure', suspects: [], leads, flags, scores }
  }
  const shown = eligible
    .filter((id, i) => i === 0 || (scores[id] >= ALSO_MIN_SCORE && scores[id] >= scores[best] * ALSO_SHARE))
    .slice(0, MAX_SHOWN)
  return { result: 'named', suspects: shown.map((id) => ({ id, score: scores[id], why: why[id] })), leads: [], flags, scores }
}
