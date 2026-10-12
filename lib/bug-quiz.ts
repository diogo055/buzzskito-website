/**
 * "What bug is this?" — the five-question pest identifier at /tools/what-bug-is-this
 * (retention brief, phase 6, Oct 2026). Its job is the same as every article's: send the reader
 * on to more pages. Each result links to two identification guides and one "what to do" guide.
 *
 * How it decides: every answer adds points to the pests it fits; the pest with the most points
 * is the result. Under MIN_SCORE points nothing is named and the reader gets the look-alike
 * guides instead, because a wrong name is worse than "not sure".
 *
 * The traits below are the ones the site's own identification guides give (which cite the US
 * EPA, CDC, Health Canada and university extension services). Change a trait here only together
 * with the guide it comes from.
 *
 * PHOTOS: the brief asks for a photo on each question. The site has no pest photographs (only
 * service photos, the ten infographics and the diagrams), and nothing here may be AI-generated.
 * So every choice has an optional `photo`: add a real one (the owner's own, or a public-domain
 * image with its credit) and it shows on the button. Until then the quiz runs on words.
 */
export type Pest = 'bed-bug' | 'tick' | 'mosquito' | 'ant' | 'cockroach' | 'mouse' | 'plant-fly'
export type ResultId = Pest | 'unsure'

export type QuizPhoto = { src: string; width: number; height: number; alt: string; credit?: string }
export type QuizChoice = { id: string; label: string; photo?: QuizPhoto; points: Partial<Record<Pest, number>> }
export type QuizQuestion = { id: string; title: string; choices: QuizChoice[] }

export const QUIZ_ID = 'what-bug-is-this'
export const QUIZ_PATH = '/tools/what-bug-is-this'
export const MIN_SCORE = 5

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 'where',
    title: 'Where did you find it?',
    choices: [
      { id: 'bed', label: 'In or near a bed, a sofa or luggage', points: { 'bed-bug': 3 } },
      { id: 'kitchen', label: 'In the kitchen or bathroom', points: { ant: 2, cockroach: 2, mouse: 1 } },
      { id: 'on-body', label: 'On a person or a pet after time outdoors', points: { tick: 3 } },
      { id: 'flying', label: 'Flying around me, indoors or outside', points: { mosquito: 3, 'plant-fly': 1 } },
      { id: 'plants', label: 'On or around houseplants or garden plants', points: { 'plant-fly': 3 } },
      { id: 'signs-only', label: 'I only found droppings or damage, not the animal', points: { mouse: 2, cockroach: 2 } },
    ],
  },
  {
    id: 'size',
    title: 'How big is it?',
    choices: [
      { id: 'speck', label: 'A speck, like a poppy or sesame seed (1 to 3 mm, under 1/8 inch)', points: { tick: 2, 'plant-fly': 2, ant: 1, 'bed-bug': 1 } },
      { id: 'apple-seed', label: 'About the size of an apple seed (around 5 mm, 3/16 inch)', points: { 'bed-bug': 3, tick: 2, mosquito: 2, ant: 1 } },
      { id: 'large', label: 'A centimetre or more (1/2 inch or bigger)', points: { cockroach: 3, ant: 1, mosquito: 1 } },
      { id: 'unseen', label: 'I did not see the animal itself', points: { mouse: 2 } },
    ],
  },
  {
    id: 'moves',
    title: 'How does it move?',
    choices: [
      { id: 'crawls', label: 'It crawls. I saw no wings.', points: { 'bed-bug': 2, tick: 2, ant: 2, cockroach: 1 } },
      { id: 'flies', label: 'It flies', points: { mosquito: 3, 'plant-fly': 3 } },
      { id: 'runs', label: 'It runs fast and hides when a light comes on', points: { cockroach: 3, mouse: 1 } },
      { id: 'attached', label: 'It is attached to skin and stays put', points: { tick: 4 } },
      { id: 'unseen', label: 'I did not see it move', points: {} },
    ],
  },
  {
    id: 'looks',
    title: 'Which description is closest?',
    choices: [
      { id: 'flat-red', label: 'Flat and oval, reddish-brown, no wings', points: { 'bed-bug': 3, tick: 1 } },
      { id: 'eight-legs', label: 'A round or teardrop-shaped body with eight legs', points: { tick: 3 } },
      { id: 'waist', label: 'Three clear body sections with a narrow waist', points: { ant: 3 } },
      { id: 'slender', label: 'Slender, with long legs and a needle-like mouth', points: { mosquito: 3 } },
      { id: 'antennae', label: 'Flat and oval, tan to dark brown, with long antennae', points: { cockroach: 3 } },
      { id: 'tiny-fly', label: 'A tiny dark or white fly around plants', points: { 'plant-fly': 3 } },
      { id: 'unsure', label: 'I could not tell', points: {} },
    ],
  },
  {
    id: 'signs',
    title: 'What else have you noticed?',
    choices: [
      { id: 'bites-line', label: 'Itchy bites, often in a line or cluster, noticed after sleeping', points: { 'bed-bug': 3 } },
      { id: 'mattress-spots', label: 'Small dark spots or pale shed skins on the mattress or sheets', points: { 'bed-bug': 3 } },
      { id: 'trail', label: 'A trail of them heading to food or water', points: { ant: 3 } },
      { id: 'pepper', label: 'Dark specks like ground pepper in cupboards or drawers', points: { cockroach: 3 } },
      { id: 'droppings', label: 'Dark rice-shaped droppings, gnaw marks or scratching sounds', points: { mouse: 4 } },
      { id: 'dusk-bumps', label: 'Itchy bumps after being outside, mostly around dusk', points: { mosquito: 3 } },
      { id: 'none', label: 'None of these', points: {} },
    ],
  },
]

export type QuizResultCopy = {
  name: string
  /** One sentence shown under "Most likely". */
  verdict: string
  /** What to look for to confirm it. Every line is a trait the linked guides state. */
  confirm: string[]
  /** Two identification guides, then the guide on what to do. Paths must exist (checked at build). */
  identify: [string, string]
  treat: string
}

export const RESULTS: Record<ResultId, QuizResultCopy> = {
  'bed-bug': {
    name: 'Bed bug',
    verdict: 'Your answers point to bed bugs.',
    confirm: [
      'Adults are flat, oval and reddish-brown, about the size of an apple seed (5 to 7 mm, roughly 1/4 inch).',
      'Check mattress seams, the box spring and the headboard for live bugs, pale shed skins and small dark spots.',
      'Bites alone cannot confirm bed bugs. You need to find the insect or the signs it leaves.',
    ],
    identify: ['/blog/what-do-bed-bugs-look-like', '/blog/signs-of-bed-bugs-checklist'],
    treat: '/learn/bed-bugs',
  },
  tick: {
    name: 'Tick',
    verdict: 'Your answers point to a tick.',
    confirm: [
      'Ticks have eight legs as nymphs and adults and no wings. They do not fly or jump.',
      'Size runs from a poppy seed (nymph) to a sesame or apple seed (adult), depending on the species.',
      'A tick that is attached stays in one place while it feeds, and its body swells as it fills.',
    ],
    identify: ['/blog/what-do-ticks-look-like', '/learn/tick-identification-chart'],
    treat: '/blog/how-to-remove-tick-safely',
  },
  mosquito: {
    name: 'Mosquito',
    verdict: 'Your answers point to a mosquito.',
    confirm: [
      'A slender body, long legs, one pair of wings and a long, needle-like mouthpart.',
      'Only females bite. A bite is usually an itchy raised bump that appears soon afterwards.',
      'Crane flies look like oversized mosquitoes but do not bite.',
    ],
    identify: ['/blog/male-vs-female-mosquito', '/blog/bed-bug-bites-vs-mosquito-bites'],
    treat: '/blog/how-to-get-rid-of-mosquitoes',
  },
  ant: {
    name: 'Ant',
    verdict: 'Your answers point to ants.',
    confirm: [
      'Three clear body sections with a narrow waist, and antennae with an elbow-like bend.',
      'Workers follow one another in a trail between the nest and food or water.',
      'Large black ants (about 6 to 13 mm, 1/4 to 1/2 inch) together with sawdust-like debris can mean carpenter ants.',
    ],
    identify: ['/blog/tiny-ants', '/blog/black-ants'],
    treat: '/blog/how-to-get-rid-of-ants-in-the-house',
  },
  cockroach: {
    name: 'Cockroach',
    verdict: 'Your answers point to cockroaches.',
    confirm: [
      'A flat oval body, long antennae and fast running, mostly at night.',
      'The German cockroach, the usual indoor species, is about 13 to 16 mm long (1/2 to 5/8 inch) and tan to light brown, with two dark stripes behind the head.',
      'Droppings look like ground pepper or coffee grounds in cupboards, in drawers and behind appliances.',
    ],
    identify: ['/blog/what-do-baby-cockroaches-look-like', '/blog/bugs-that-look-like-cockroaches'],
    treat: '/learn/cockroaches',
  },
  mouse: {
    name: 'Mice (not a bug)',
    verdict: 'Your answers point to mice, not an insect.',
    confirm: [
      'Mouse droppings are dark, about 3 to 6 mm long (1/8 to 1/4 inch), and shaped like a grain of rice with pointed ends.',
      'Other signs are gnaw marks, shredded nesting material and scratching sounds at night.',
      'Do not sweep or vacuum droppings while they are dry. Health agencies say to wet them with disinfectant first.',
    ],
    identify: ['/blog/types-of-mice', '/blog/what-does-mouse-poop-look-like-canada'],
    treat: '/learn/mice',
  },
  'plant-fly': {
    name: 'Fungus gnat, whitefly or aphid',
    verdict: 'Your answers point to one of the small insects that live on plants.',
    confirm: [
      'Small dark flies drifting up from potting soil are usually fungus gnats, about 2 to 3 mm long (around 1/8 inch).',
      'Tiny white insects that fly up in a cloud when a leaf is disturbed are whiteflies.',
      'Soft, pear-shaped insects clustered on new growth are aphids.',
    ],
    identify: ['/learn/whitefly-identification-control', '/learn/aphid-control-guide'],
    treat: '/learn/how-to-get-rid-of-fungus-gnats',
  },
  unsure: {
    name: 'Not clear yet',
    verdict: 'Your answers do not point clearly to one pest.',
    confirm: [
      'Many small household bugs look alike, and a few answers are not enough to separate them.',
      'A clear close-up photo beside a coin or a ruler is the best next step.',
      'The look-alike guides below put the usual suspects side by side. A local extension office or a licensed pest control company can also identify a specimen.',
    ],
    identify: ['/blog/bugs-that-look-like-bed-bugs', '/blog/bugs-that-look-like-ticks'],
    treat: '/blog/bugs-that-look-like-cockroaches',
  },
}

export const PESTS = Object.keys(RESULTS).filter((id) => id !== 'unsure') as Pest[]

/** Adds up the points for the chosen answers. `answers` maps question id to choice id. */
export function scoreAnswers(answers: Record<string, string>): { winner: ResultId; runnerUp: Pest | null; scores: Record<Pest, number> } {
  const scores = Object.fromEntries(PESTS.map((p) => [p, 0])) as Record<Pest, number>
  for (const q of QUESTIONS) {
    const choice = q.choices.find((c) => c.id === answers[q.id])
    if (!choice) continue
    for (const [pest, n] of Object.entries(choice.points)) scores[pest as Pest] += n ?? 0
  }
  const ranked = [...PESTS].sort((a, b) => scores[b] - scores[a])
  const [first, second] = ranked
  if (scores[first] < MIN_SCORE || scores[first] === scores[second]) return { winner: 'unsure', runnerUp: null, scores }
  // A close second is worth mentioning: within two points, and itself a believable answer.
  const runnerUp = scores[second] >= MIN_SCORE && scores[first] - scores[second] <= 2 ? second : null
  return { winner: first, runnerUp, scores }
}
