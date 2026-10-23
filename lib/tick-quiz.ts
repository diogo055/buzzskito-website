/**
 * "What kind of tick is this?" — the six-question tick identifier at /tools/tick-identifier
 * (Oct 2026). It runs on the shared engine in lib/identifier-quiz.ts and the shared component
 * components/IdentifierQuiz.tsx, which work exactly like the bug bite identifier (lib/bite-quiz.ts):
 * answer the reader's question, then send them on to the page about their tick.
 *
 * HOW IT DECIDES. Every answer adds points to the ticks it fits and carries one plain sentence
 * saying why, with its source in brackets ("Adult female lone star ticks have a white dot ... (CDC)").
 * Answers can also argue against ticks (`unlikely`: a region where a tick does not live, a shield
 * pattern it never has, a season it is not out). The result shows the best match and up to two
 * more that came close, each with the sentences its answers earned, so the reader sees the
 * reasoning instead of a verdict. Under minScore nothing is named: a wrong name is worse than
 * "not clear", and that result says how to get the tick identified for free.
 * One answer can only be explained by a look-alike (6 legs with antennae, wings): it uses `only` so
 * the result is "probably not a tick". "Attached" allows only ticks.
 *
 * NEVER A DIAGNOSIS. A tick's species is a clue to what it can carry, not proof that anyone is ill,
 * and young or swollen ticks are hard to identify even for experts (Illinois Department of Public
 * Health; Connecticut Agricultural Experiment Station). The tool says "most likely", tells the
 * reader how to confirm each tick (and where to send a photo free: TickSpotters in the US, eTick in
 * Canada), and always shows the safety box (SAFETY): how to remove a tick, when to see a doctor,
 * when to call 911. Two answers raise a warning at the top of the result (FLAGS): an attached tick
 * and a swollen, fed one.
 *
 * SOURCES. Every "why" and "confirm" line restates a primary or authoritative source named in
 * brackets: CDC, PHAC, Public Health Ontario, INSPQ, BCCDC and the B.C. government, state health
 * departments (Illinois, Utah), EPA, USDA and the Alabama Department of Agriculture and Industries (the
 * Asian longhorned tick's spread), university extension (Ohio State, Penn State, UF/IFAS, UC IPM,
 * Colorado State, Utah State, UNH, Kentucky, Rhode Island's TickEncounter), the Connecticut
 * Agricultural Experiment Station and the University of Saskatchewan. The full list with links is
 * on the page (app/tools/tick-identifier/page.tsx). Change a line here only together with its
 * source, and keep it consistent with the tick pages it links to. The research behind the page:
 * data/god-build/research/top3/tick-identifier.md.
 *
 * PHOTOS live in the page, not here: scripts/check-photos.mjs verifies <Photo id="..."> only in
 * app/ files and only with a literal id, so the page writes one <Photo> per tick.
 *
 * LINKS are checked at build time: the page looks every path up in lib/article-index.json and
 * throws if one is gone. A tick's own page that is planned but not written yet
 * (data/us-pages/routes.json "planned") is left out until it goes live, then appears first.
 */

import type { CandidateCopy, Fit, IdQuizDef } from '@/lib/identifier-quiz'

export const QUIZ_PATH = '/tools/tick-identifier'

export type TickId =
  | 'blacklegged'
  | 'american-dog'
  | 'lone-star'
  | 'brown-dog'
  | 'western-blacklegged'
  | 'rocky-mountain-wood'
  | 'gulf-coast'
  | 'groundhog'
  | 'asian-longhorned'
  | 'winter'
  | 'soft-tick'
  | 'not-a-tick'
export type TickFlag = 'attached' | 'fed'

/** Every candidate that is a tick (all but the look-alike result). */
const TICKS: readonly TickId[] = [
  'blacklegged',
  'american-dog',
  'lone-star',
  'brown-dog',
  'western-blacklegged',
  'rocky-mountain-wood',
  'gulf-coast',
  'groundhog',
  'asian-longhorned',
  'winter',
  'soft-tick',
]
/** Hard ticks: a shield on the back and mouthparts that show from above (Public Health Ontario). */
const HARD: readonly TickId[] = TICKS.filter((id) => id !== 'soft-tick')
/**
 * Ticks with no white marks (blacklegged: Illinois Department of Public Health; brown dog:
 * UF/IFAS; Asian longhorned: Ohio State; groundhog: PHAC; soft ticks: Public Health Ontario), and
 * ticks with whitish or silvery markings, which never show a single white dot (the Illinois key
 * separates "irregular silvery-white marks" from "a single white spot in the center of the back").
 */
const PLAIN: readonly TickId[] = ['blacklegged', 'western-blacklegged', 'brown-dog', 'asian-longhorned', 'groundhog', 'soft-tick']
const ORNATE: readonly TickId[] = ['american-dog', 'rocky-mountain-wood', 'gulf-coast', 'winter']

// Sentences used by more than one answer (the result lists each sentence once).
const BL_BITES = 'Blacklegged nymphs and adult females are the stages most likely to bite people (CDC).'
const WBL_BITES = 'All stages of the western blacklegged tick bite people, nymphs and adult females most often (CDC).'
const LS_BITES = 'Lone star ticks are very aggressive and bite people readily (CDC).'
const ADT_BITES = 'Adult female American dog ticks are the stage most likely to bite people (CDC).'
const RMW_BITES = 'The Rocky Mountain wood tick is the tick that most often bites people and dogs in Colorado (Colorado State Extension).'
const GC_BITES = 'Adult Gulf Coast ticks bite people and can pass on a form of spotted fever (CDC).'
const LS_RANGE = 'Lone star ticks are widely distributed in the Northeast, the South and the Midwest (CDC).'
const ADT_RANGE = 'American dog ticks are widely distributed east of the Rocky Mountains (CDC).'
const ALT_RANGE = 'Asian longhorned ticks have spread to many eastern states since 2017 (USDA) and had been reported in 24 by April 2026 (Alabama Department of Agriculture and Industries).'
const GH_RANGE = 'Groundhog ticks live throughout eastern North America (Public Health Ontario).'
const BDT_RANGE = 'Brown dog ticks live worldwide, wherever there are dogs (CDC; Public Health Ontario).'
const WINTER_RANGE = 'Winter ticks live across North America, mostly on moose but also on deer, elk, cattle and horses (Public Health Ontario).'
const WINTER_CANADA = 'Winter ticks are found in every Canadian province and territory, mostly on moose, deer and elk (University of Saskatchewan).'
const ALT_YOUNG = 'Young Asian longhorned ticks are so small they can go unnoticed, yet turn up in unusually high numbers (Penn State Extension).'
const GC_SIZE = 'Adult Gulf Coast ticks are 3 to 7 mm (1/8 to 1/4 inch) long (Ohio State).'
const GC_GRAY = 'Gulf Coast ticks may look gray after feeding (Ohio State).'
const ADT_SEASON = 'Adult American dog ticks are active in spring and summer, most of all from mid-April to mid-July (Ohio State).'
const BL_SEASON = 'Blacklegged adults are active in spring and fall, and nymphs in spring and summer (Ohio State).'
const WBL_SEASON = 'Western blacklegged adults are active from late fall through spring, and nymphs mainly from March through July (UC IPM).'
const LS_SEASON = 'Lone star ticks are active from March through September, and their seed ticks peak in August and September (University of Kentucky).'
const GC_SEASON = 'Adult Gulf Coast ticks are active from April through October and are met most often in July and August (University of Rhode Island).'
const TICK_BODY = 'Ticks have 8 legs, no antennae and a flat body; only tiny larvae have 6 legs (Utah Department of Health; Ohio State).'

/** The same sentence for every tick (an answer that fits ticks in general). */
const allTicks = (points: number, why: string) => Object.fromEntries(TICKS.map((id) => [id, [points, why] as Fit])) as Partial<Record<TickId, Fit>>

export const QUIZ: IdQuizDef<TickId, TickFlag> = {
  quizId: 'tick-identifier',
  // Ties are broken in this order: the ticks people meet most often first (Public Health Ontario:
  // blacklegged 55% and American dog 36% of ticks sent in from people in Ontario; CDC calls the
  // lone star tick very aggressive), the look-alike result last.
  ids: TICKS.concat('not-a-tick'),
  // Tuned on realistic answer paths (a simulation outside the repo): one strong mark plus one
  // matching clue names a tick; a lone answer or answers that contradict each other do not.
  scoring: { minScore: 8, alsoMinScore: 7, alsoShare: 0.7, maxShown: 3, unlikelyPenalty: 3, leadMinScore: 3 },
  questions: [
    {
      id: 'region',
      title: 'Where did you or your pet pick it up?',
      hint: 'Your best guess is fine. If you traveled recently, pick where you were.',
      choices: [
        {
          id: 'us-northeast',
          label: 'Northeast or Mid-Atlantic US (Maine to Maryland)',
          unlikely: ['western-blacklegged', 'rocky-mountain-wood', 'gulf-coast'],
          fits: {
            blacklegged: [3, 'Blacklegged (deer) ticks are widely distributed across the eastern US, and CDC says they spread Lyme disease in the Northeast and mid-Atlantic.'],
            'lone-star': [2, LS_RANGE],
            'american-dog': [2, ADT_RANGE],
            'asian-longhorned': [1, ALT_RANGE],
            groundhog: [1, GH_RANGE],
            'brown-dog': [1, BDT_RANGE],
            winter: [1, WINTER_RANGE],
          },
        },
        {
          id: 'us-midwest',
          label: 'Midwest or Great Plains US (Ohio west to the Dakotas and Kansas)',
          unlikely: ['western-blacklegged', 'rocky-mountain-wood'],
          fits: {
            blacklegged: [3, 'Blacklegged (deer) ticks are widely distributed across the eastern US, and CDC says they spread Lyme disease in the north-central states.'],
            'lone-star': [2, LS_RANGE],
            'american-dog': [2, ADT_RANGE],
            'gulf-coast': [1, 'Gulf Coast ticks are common in the Great Plains as well as the Southeast (Ohio State).'],
            'asian-longhorned': [1, ALT_RANGE],
            groundhog: [1, GH_RANGE],
            'brown-dog': [1, BDT_RANGE],
            winter: [1, WINTER_RANGE],
          },
        },
        {
          id: 'us-south',
          label: 'Southern US (Virginia to Florida, west to Texas and Oklahoma)',
          unlikely: ['western-blacklegged', 'rocky-mountain-wood'],
          fits: {
            'lone-star': [3, LS_RANGE],
            'gulf-coast': [3, 'Gulf Coast ticks live mainly in the southeastern US (CDC).'],
            'american-dog': [2, ADT_RANGE],
            blacklegged: [1, 'Blacklegged ticks live across the eastern US, though CDC says those in most of the Southeast are almost never infected with Lyme bacteria.'],
            'asian-longhorned': [1, ALT_RANGE],
            'brown-dog': [1, BDT_RANGE],
          },
        },
        {
          id: 'us-mountain',
          label: 'Rocky Mountain or desert Southwest US',
          unlikely: ['blacklegged', 'lone-star', 'asian-longhorned', 'groundhog'],
          fits: {
            'rocky-mountain-wood': [4, 'Rocky Mountain wood ticks live in the Rocky Mountain states, at 4,000 to 10,500 feet (CDC).'],
            'brown-dog': [2, 'In the southwestern US and along the US–Mexico border, brown dog ticks spread Rocky Mountain spotted fever (CDC).'],
            'soft-tick': [2, 'Soft tick relapsing fever is caught mostly in the mountains of western states and in parts of Texas (CDC).'],
            winter: [1, WINTER_RANGE],
          },
        },
        {
          id: 'us-pacific',
          label: 'Pacific Coast US (California, Oregon, Washington)',
          unlikely: ['blacklegged', 'lone-star', 'gulf-coast', 'asian-longhorned', 'groundhog'],
          fits: {
            'western-blacklegged': [4, 'Western blacklegged ticks live along the Pacific Coast, especially in northern California (CDC).'],
            'american-dog': [1, 'West of the Rocky Mountains, CDC lists a newly described relative of the American dog tick, Dermacentor similis.'],
            'brown-dog': [1, BDT_RANGE],
            'soft-tick': [1, 'Soft tick relapsing fever is caught mostly in the mountains of western states (CDC).'],
            winter: [1, WINTER_RANGE],
          },
        },
        {
          id: 'ca-east',
          label: 'Ontario, Quebec or Atlantic Canada',
          // PHAC: brown dog ticks have not been found outdoors in Canada; lone star ticks turn up
          // but are not established (Public Health Ontario; INSPQ).
          unlikely: ['western-blacklegged', 'rocky-mountain-wood', 'gulf-coast', 'asian-longhorned', 'lone-star', 'brown-dog'],
          fits: {
            blacklegged: [3, 'Blacklegged ticks are established in parts of Ontario, southern Quebec, New Brunswick and Nova Scotia (PHAC), and they are the tick most often sent in from people in Ontario (Public Health Ontario).'],
            'american-dog': [3, 'American dog ticks are established in parts of south-central and southeastern Canada (PHAC) and are the second most common tick sent in from people in Ontario (Public Health Ontario).'],
            groundhog: [3, 'Groundhog ticks are established in south-central and southeastern Canada (PHAC) and are the third most common tick sent in from people in Ontario (Public Health Ontario).'],
            winter: [1, 'Winter ticks live on moose, deer and other large animals and occasionally bite people in Ontario (Public Health Ontario).'],
          },
        },
        {
          id: 'ca-prairies',
          label: 'Manitoba, Saskatchewan or Alberta',
          unlikely: ['western-blacklegged', 'lone-star', 'gulf-coast', 'asian-longhorned', 'brown-dog'],
          fits: {
            'american-dog': [3, 'American dog ticks are established in parts of south-central and southeastern Canada (PHAC).'],
            'rocky-mountain-wood': [3, 'Rocky Mountain wood ticks are established in Alberta, British Columbia and western Saskatchewan (PHAC).'],
            blacklegged: [2, 'Blacklegged ticks are established in southern Manitoba (PHAC).'],
            winter: [1, WINTER_CANADA],
          },
        },
        {
          id: 'ca-bc',
          label: 'British Columbia',
          unlikely: ['blacklegged', 'lone-star', 'gulf-coast', 'asian-longhorned', 'groundhog', 'brown-dog'],
          fits: {
            'western-blacklegged': [3, 'Western blacklegged ticks are established in coastal and southern interior British Columbia (PHAC).'],
            'rocky-mountain-wood': [3, 'Rocky Mountain wood ticks live mainly in BC’s dry interior, east of the Coast Mountains (B.C. government).'],
            'soft-tick': [1, 'BC sees up to seven cases a year of relapsing fever from a soft tick that lives in rodent burrows (BCCDC).'],
            winter: [1, WINTER_CANADA],
          },
        },
        { id: 'unsure', label: 'Somewhere else, or not sure', fits: {} },
      ],
    },
    {
      id: 'found',
      title: 'Where did you find it?',
      choices: [
        {
          id: 'attached',
          label: 'Stuck in someone’s skin (attached and feeding)',
          flag: 'attached',
          only: TICKS,
          // CDC: soft ticks feed for less than half an hour and drop off.
          unlikely: ['soft-tick'],
          fits: {
            'lone-star': [3, LS_BITES],
            blacklegged: [2, BL_BITES],
            'western-blacklegged': [2, WBL_BITES],
            'american-dog': [2, ADT_BITES],
            'rocky-mountain-wood': [2, RMW_BITES],
            'gulf-coast': [1, GC_BITES],
            groundhog: [1, 'All stages of the groundhog tick will feed on people (Connecticut Agricultural Experiment Station).'],
            'brown-dog': [1, 'Brown dog ticks feed mostly on dogs but may also bite people (CDC).'],
          },
        },
        {
          id: 'crawling',
          label: 'Crawling on someone or on clothing, after time outdoors',
          fits: {
            'lone-star': [2, LS_BITES],
            blacklegged: [2, BL_BITES],
            'western-blacklegged': [2, WBL_BITES],
            'american-dog': [2, ADT_BITES],
            'rocky-mountain-wood': [2, RMW_BITES],
            'gulf-coast': [1, GC_BITES],
            winter: [1, 'Winter tick larvae wait in clumps on low plants in fall, and hunters have found them on their clothing, once more than 50 on one glove (UNH Extension).'],
            'not-a-tick': [1, 'About 1 in 20 photos sent to the TickSpotters service as ticks show a look-alike instead (University of Rhode Island).'],
          },
        },
        {
          id: 'pet',
          label: 'On a dog, cat or other pet',
          fits: {
            'brown-dog': [3, 'Dogs are the main host of the brown dog tick at every life stage (CDC).'],
            groundhog: [3, 'Groundhog ticks are common on cats and dogs as well as on groundhogs, raccoons and skunks (Public Health Ontario).'],
            'american-dog': [2, 'Dogs are the preferred host of adult American dog ticks (Connecticut Agricultural Experiment Station).'],
            'asian-longhorned': [2, 'Asian longhorned ticks can gather in large numbers on pets and livestock (Penn State Extension).'],
            'lone-star': [1, 'Lone star ticks readily feed on pets as well as people (University of Kentucky).'],
            blacklegged: [1, 'Adult blacklegged ticks feed on dogs, raccoons and deer as well as people (Public Health Ontario).'],
            'western-blacklegged': [1, 'Western blacklegged ticks feed on animals from rodents to cats, dogs and sheep (Public Health Ontario).'],
            'gulf-coast': [1, 'Gulf Coast ticks feed on dogs, deer, cattle and horses (Public Health Ontario).'],
            'rocky-mountain-wood': [1, RMW_BITES],
          },
        },
        {
          id: 'indoors',
          label: 'Indoors: on a wall, floor, curtain or dog bed, or in a kennel',
          fits: {
            'brown-dog': [4, 'Brown dog ticks can live their whole life indoors, and ticks crawling up walls or curtains are often the first sign (UF/IFAS).'],
            'not-a-tick': [2, 'Common look-alikes such as clover mites turn up on walls, floors and furniture (Utah Department of Health).'],
            blacklegged: [1, 'Ticks can ride indoors on clothing and pets and attach to someone later (CDC).'],
            'american-dog': [1, 'Ticks can ride indoors on clothing and pets and attach to someone later (CDC).'],
            'lone-star': [1, 'Ticks can ride indoors on clothing and pets and attach to someone later (CDC).'],
            'soft-tick': [1, 'Bat ticks are soft ticks that live with bats where they roost (Public Health Ontario).'],
          },
        },
        {
          id: 'animal',
          label: 'On a deer, moose, horse, cow or other large animal',
          fits: {
            winter: [4, 'Winter ticks spend their whole life on one animal, usually a moose, and also feed on deer, elk, horses and cattle (UNH Extension; University of Saskatchewan).'],
            'asian-longhorned': [3, 'Adult Asian longhorned ticks are found on cattle, horses, deer and sheep (Penn State Extension), sometimes thousands at a time (CDC).'],
            'gulf-coast': [2, 'Adult Gulf Coast ticks prefer larger hosts such as deer, cattle and other livestock (University of Rhode Island).'],
            'rocky-mountain-wood': [1, 'Adult Rocky Mountain wood ticks feed on larger animals such as deer, cattle and horses (Colorado State Extension).'],
            blacklegged: [1, 'Adult blacklegged ticks feed mainly on white-tailed deer (Ohio State).'],
            'lone-star': [1, 'Deer and other large and medium-sized animals are hosts of adult lone star ticks (Connecticut Agricultural Experiment Station).'],
            'not-a-tick': [1, 'Deer keds, a common tick look-alike, feed mostly on deer (Utah Department of Health).'],
          },
        },
        {
          id: 'cabin',
          label: 'In a cabin or bedroom with mice or bats, after bites in the night',
          fits: {
            'soft-tick': [6, 'Soft ticks that spread relapsing fever live in rodent-infested cabins and feed briefly on people while they sleep (CDC).'],
          },
        },
        { id: 'unsure', label: 'Not sure', fits: {} },
      ],
    },
    {
      id: 'size',
      title: 'How big is it?',
      hint: 'Compare it with a seed. An unfed tick is flat; a tick that has fed swells up.',
      choices: [
        {
          id: 'poppy',
          label: 'Tiny, like a poppy seed or a pinhead (1/16 inch or smaller, under 2 mm)',
          fits: {
            blacklegged: [3, 'Blacklegged nymphs are about the size of a poppy seed, and CDC says their numbers and small size make them a particularly high Lyme risk.'],
            'western-blacklegged': [3, 'Western blacklegged nymphs are about the size of a poppy seed, about 1/25 inch (UC IPM).'],
            'lone-star': [1, 'Lone star nymphs are one of the stages that bite people most often (CDC).'],
            'asian-longhorned': [1, ALT_YOUNG],
            'brown-dog': [1, 'Brown dog tick nymphs are about 1/20 inch long, and young ticks are more likely than adults to be found on people (UF/IFAS).'],
            'not-a-tick': [1, 'Clover mites, a common look-alike, are much smaller than a tick (Utah Department of Health).'],
          },
        },
        {
          id: 'sesame',
          label: 'Small, like a sesame seed (about 1/8 inch, 3 mm)',
          fits: {
            blacklegged: [3, 'Adult blacklegged ticks are about the size of a sesame seed (CDC).'],
            'western-blacklegged': [3, 'Adult female western blacklegged ticks are about 1/8 inch long (UC IPM).'],
            'lone-star': [2, 'Adult lone star ticks are about 3 to 4 mm (1/8 inch) long (Connecticut Agricultural Experiment Station).'],
            'brown-dog': [2, 'Unfed adult brown dog ticks are about 1/8 inch long (Ohio State).'],
            'asian-longhorned': [2, 'Unfed adult Asian longhorned ticks are about the size of a sesame seed (Ohio State).'],
            'rocky-mountain-wood': [2, 'Unfed adult female Rocky Mountain wood ticks are about 1/8 inch long (Utah State Extension).'],
            'gulf-coast': [1, GC_SIZE],
            winter: [1, 'Unfed adult male winter ticks are 3 to 4 mm long (UNH Extension).'],
          },
        },
        {
          id: 'apple',
          label: 'Bigger, like an apple seed (about 3/16 to 1/4 inch, 5 to 6 mm)',
          fits: {
            'american-dog': [3, 'Unfed adult American dog ticks are about 3/16 to 1/4 inch long (Ohio State; Connecticut Agricultural Experiment Station).'],
            'gulf-coast': [2, GC_SIZE],
            winter: [2, 'Unfed adult female winter ticks are 5 to 7 mm long (University of Saskatchewan).'],
            'lone-star': [1, 'Adult male lone star ticks are about 3/16 inch long (Ohio State).'],
            'rocky-mountain-wood': [1, 'Male Rocky Mountain wood ticks are 1/16 to 1/4 inch long (Utah State Extension).'],
            'not-a-tick': [1, 'Adult bed bugs, a common look-alike, are about the size of an apple seed (EPA).'],
          },
        },
        {
          id: 'swollen',
          label: 'Swollen and round, like a raisin, a pea or a small bean',
          flag: 'fed',
          fits: {
            'american-dog': [2, 'A fed female American dog tick can reach about 1/2 inch and look like a dark pinto bean (Connecticut Agricultural Experiment Station).'],
            'brown-dog': [2, 'A fed female brown dog tick grows to the size of a raisin (UF/IFAS).'],
            blacklegged: [2, 'A fed female blacklegged tick can be as wide as a pencil eraser (Ohio State).'],
            'lone-star': [2, 'A fed female lone star tick is about 7/16 inch long and almost circular (Ohio State).'],
            'western-blacklegged': [2, 'A feeding female western blacklegged tick swells from about 1/8 inch to 3/8 inch or longer (UC IPM).'],
            'rocky-mountain-wood': [1, 'A fed Rocky Mountain wood tick can be 5/8 inch long (Utah State Extension).'],
            'asian-longhorned': [1, 'A fed Asian longhorned tick can swell to the size of a pea (Ohio State).'],
            'gulf-coast': [1, GC_GRAY],
            winter: [1, 'Fed female winter ticks can be twice the size of unfed ones (University of Saskatchewan).'],
          },
        },
        { id: 'unsure', label: 'Not sure', fits: {} },
      ],
    },
    {
      id: 'markings',
      title: 'What color is it, and what is on its back?',
      hint: 'Look at the hard shield just behind the head.',
      choices: [
        {
          id: 'red-black',
          label: 'A red-orange or reddish body, a solid dark shield and black legs',
          unlikely: ORNATE,
          fits: {
            blacklegged: [5, 'An adult female blacklegged tick has a red-orange body around a dark brown shield (Ohio State) and black legs (Illinois Department of Public Health).'],
            'western-blacklegged': [5, 'An adult female western blacklegged tick has a reddish-orange body, a dark brownish-black shield and brownish-black legs (UC IPM).'],
          },
        },
        {
          id: 'dark',
          label: 'Small and dark brown or black all over, or see-through with a dark shield',
          fits: {
            blacklegged: [3, 'Male blacklegged ticks are covered by a dark brown shield, and nymphs are see-through to slightly gray or brown (Ohio State).'],
            'western-blacklegged': [3, 'Male western blacklegged ticks are brownish-black, and nymphs have a dark shield on a light, see-through body (UC IPM).'],
          },
        },
        {
          id: 'white-dot',
          label: 'Brown with one white or silvery dot in the middle of its back',
          unlikely: PLAIN.concat(ORNATE),
          fits: {
            'lone-star': [8, 'Adult female lone star ticks have a white dot, the “lone star”, on their backs (CDC).'],
          },
        },
        {
          id: 'white-marks',
          label: 'Brown with white, silvery or gray streaks or mottling on its back',
          unlikely: PLAIN,
          fits: {
            'american-dog': [4, 'American dog ticks have silvery-gray or whitish markings on the back (Connecticut Agricultural Experiment Station).'],
            'rocky-mountain-wood': [4, 'Adult female Rocky Mountain wood ticks are reddish-brown with a light-colored shield, and males are gray and mottled (B.C. government).'],
            'gulf-coast': [4, 'Gulf Coast ticks have whitish markings on reddish-brown bodies and are easily mistaken for American dog ticks (Ohio State).'],
            'lone-star': [2, 'Male lone star ticks have faint white markings along the rear edge (Ohio State; Connecticut Agricultural Experiment Station).'],
            winter: [2, 'Winter ticks are large reddish-brown to gray-brown ticks with a patterned (ornate) shield (University of Saskatchewan).'],
          },
        },
        {
          id: 'plain',
          label: 'Plain reddish-brown, brown or tan, with no markings',
          // Adult lone star ticks always carry white: a dot on the female, rear-edge marks on the
          // male (Connecticut Agricultural Experiment Station).
          unlikely: ORNATE.concat('lone-star'),
          fits: {
            'brown-dog': [4, 'Brown dog ticks are reddish-brown, with no markings on the back (UF/IFAS).'],
            'asian-longhorned': [4, 'Asian longhorned ticks are small, brown and plain, with no color pattern (Ohio State).'],
            groundhog: [3, 'PHAC describes the groundhog tick as beige, with a brown shield on its back.'],
            'not-a-tick': [1, 'Many look-alikes are plain too: an unfed bed bug is brown, with a flat, oval body (EPA).'],
          },
        },
        {
          id: 'gray',
          label: 'Gray, bluish or tan, and swollen',
          flag: 'fed',
          fits: {
            'american-dog': [2, 'A fed female American dog tick turns mostly gray, but the white marks on its shield stay visible (Ohio State; Connecticut Agricultural Experiment Station).'],
            'brown-dog': [2, 'A fed female brown dog tick is bluish gray (Ohio State).'],
            blacklegged: [2, 'A fed female blacklegged tick may look gray (Ohio State).'],
            'western-blacklegged': [2, 'A western blacklegged tick turns gray and bean-shaped as it feeds (B.C. government).'],
            'gulf-coast': [1, GC_GRAY],
            'asian-longhorned': [1, 'Asian longhorned ticks may look grayish once fed (Ohio State).'],
            'rocky-mountain-wood': [1, 'Rocky Mountain wood ticks can turn grayish when fed (Utah State Extension).'],
          },
        },
        {
          id: 'red-tiny',
          label: 'Bright red, tiny and quick',
          // Clover mites are much smaller than ticks and deer keds move much faster (Utah Department of
          // Health): a tiny, quick red bug argues against every tick.
          unlikely: TICKS,
          fits: {
            'not-a-tick': [6, 'Clover mites, reddish specks about 0.75 mm long that turn up on sunny windowsills, feed on plants and do not attack people (Penn State Extension).'],
          },
        },
        { id: 'unsure', label: 'Hard to see, or not sure', fits: {} },
      ],
    },
    {
      id: 'body',
      title: 'Look closely at the legs and body. What do you see?',
      hint: 'Zoom in with your phone camera. Count the legs on one side and double it.',
      choices: [
        { id: 'eight', label: '8 legs, no antennae and a flat, oval body', fits: allTicks(1, TICK_BODY) },
        {
          id: 'six-tiny',
          label: '6 legs and no antennae, tiny, often many at once',
          fits: {
            'lone-star': [3, 'Six-legged larval ticks, called seed ticks, hatch from egg masses of 3,000 or more and arrive in swarms (University of Rhode Island); lone star seed ticks peak in August and September (University of Kentucky).'],
            blacklegged: [1, 'Blacklegged larvae have 6 legs and are under 1 mm long (Ohio State).'],
            'asian-longhorned': [1, ALT_YOUNG],
            winter: [1, 'Winter tick larvae wait in clumps of a few to more than 1,000 on low plants in fall (UNH Extension).'],
          },
        },
        {
          id: 'antennae',
          label: 'Antennae (feelers), or 6 legs and 3 body parts',
          only: ['not-a-tick'],
          fits: {
            'not-a-tick': [8, 'Ticks never have antennae. A bug with antennae and 6 legs, such as a spider beetle, weevil or bed bug, is an insect (University of Rhode Island; Utah Department of Health).'],
          },
        },
        {
          id: 'wings',
          label: 'Wings, or it flew or jumped',
          only: ['not-a-tick'],
          fits: {
            'not-a-tick': [8, 'Ticks have no wings and cannot fly or jump (University of Rhode Island; CDC).'],
          },
        },
        {
          id: 'leathery',
          label: 'Leathery and wrinkled, with the head hidden underneath',
          unlikely: HARD,
          fits: {
            'soft-tick': [6, 'Soft ticks are leathery, wrinkled and grayish, and their mouthparts are underneath, out of sight from above (Connecticut Agricultural Experiment Station).'],
          },
        },
        { id: 'unsure', label: 'Not sure', fits: {} },
      ],
    },
    {
      id: 'season',
      title: 'When did you find it?',
      choices: [
        {
          id: 'spring',
          label: 'Spring (March to May)',
          fits: {
            'rocky-mountain-wood': [3, 'Rocky Mountain wood ticks are most active from March to June (B.C. government).'],
            'american-dog': [2, ADT_SEASON],
            blacklegged: [2, BL_SEASON],
            'western-blacklegged': [2, WBL_SEASON],
            'lone-star': [2, 'Lone star nymphs and adults are active in spring (University of Kentucky).'],
            'gulf-coast': [1, GC_SEASON],
            winter: [1, 'Fed female winter ticks drop off their hosts in late winter or early spring (UNH Extension).'],
          },
        },
        {
          id: 'summer',
          label: 'Summer (June to August)',
          // UNH: winter tick larvae hatch in August and September and climb onto hosts in fall.
          unlikely: ['winter'],
          fits: {
            'lone-star': [2, LS_SEASON],
            'gulf-coast': [2, GC_SEASON],
            'american-dog': [2, ADT_SEASON],
            blacklegged: [1, BL_SEASON],
            'western-blacklegged': [1, WBL_SEASON],
            'soft-tick': [1, 'Most soft tick relapsing fever is caught in summer (CDC).'],
          },
        },
        {
          id: 'fall',
          label: 'Fall (September to November)',
          // Ohio State: American dog tick adults are out in spring and summer; B.C.: wood ticks March to June.
          unlikely: ['american-dog', 'rocky-mountain-wood'],
          fits: {
            blacklegged: [3, 'Adult blacklegged ticks are active in fall (Ohio State) and on winter days above freezing (CDC).'],
            winter: [3, 'Winter tick larvae climb onto moose, deer and other passing animals in the fall (UNH Extension).'],
            'western-blacklegged': [2, WBL_SEASON],
            'lone-star': [1, LS_SEASON],
            'gulf-coast': [1, GC_SEASON],
          },
        },
        {
          id: 'winter',
          label: 'Winter (December to February)',
          unlikely: ['american-dog', 'rocky-mountain-wood', 'lone-star', 'gulf-coast'],
          fits: {
            blacklegged: [3, 'Adult blacklegged ticks look for a host whenever winter temperatures are above freezing (CDC).'],
            'western-blacklegged': [2, 'In central and southern California, western blacklegged adults are active from late November until late April or early May (UC IPM).'],
            winter: [3, 'Winter ticks stay on their host all winter, and horse owners have found them biting in late fall and winter (UNH Extension).'],
            'brown-dog': [1, 'Brown dog ticks living indoors can be found at any time of year (PHAC).'],
          },
        },
        { id: 'unsure', label: 'Not sure', fits: {} },
      ],
    },
  ],
}

// ── Results ─────────────────────────────────────────────────────────────────────────────
// `links`: the tick's own page first. A path that is planned but not live yet is skipped by the
// page until it goes live (see LINKS in the header), so most ticks start with a live fallback.

export const CANDIDATES: Record<TickId, CandidateCopy> = {
  blacklegged: {
    name: 'Blacklegged (deer) tick',
    short: 'a blacklegged (deer) tick',
    summary: 'Small, with black legs and a solid dark shield. The adult female has a red-orange body; the nymph is the size of a poppy seed.',
    confirm: [
      'Look for black legs, a solid dark shield with no white marks and, on an adult female, a red-orange body behind it (Ohio State; Illinois Department of Public Health).',
      'Check the size: about a sesame seed for an adult and a poppy seed for a nymph (CDC). A larva has 6 legs and is under 1 mm long (Ohio State).',
      'Check where you were: blacklegged ticks live across the eastern US (CDC) and in southern Manitoba, Ontario, southern Quebec, New Brunswick and Nova Scotia (PHAC).',
    ],
    caution:
      'This is the tick that spreads Lyme disease in eastern North America, along with anaplasmosis, babesiosis and Powassan virus (CDC). If it was swollen and you were bitten where Lyme disease is common, call a doctor within 72 hours of removing it to ask about a preventive antibiotic (CDC).',
    links: ['/blog/deer-tick', '/blog/blacklegged-deer-tick-ontario', '/blog/ticks-that-carry-lyme-disease'],
  },
  'western-blacklegged': {
    name: 'Western blacklegged tick',
    short: 'a western blacklegged tick',
    summary: 'The West Coast twin of the deer tick: a reddish-orange body, a dark shield and dark legs.',
    confirm: [
      'An adult female is about 1/8 inch long, with a reddish-orange body, a dark brownish-black shield and brownish-black legs (UC IPM).',
      'It looks so much like the eastern blacklegged tick that only a specialist can tell them apart (Connecticut Agricultural Experiment Station), so where you were decides it.',
      'It lives along the Pacific Coast, especially in northern California (CDC), and in coastal and southern interior British Columbia (PHAC).',
    ],
    caution: 'It can spread Lyme disease and anaplasmosis (CDC; PHAC). See a doctor if a rash or fever starts within several weeks of the bite (CDC).',
    links: ['/blog/western-blacklegged-tick', '/blog/ticks-that-carry-lyme-disease', '/blog/ticks-in-british-columbia'],
  },
  'lone-star': {
    name: 'Lone star tick',
    short: 'a lone star tick',
    summary: 'Reddish-brown. The adult female has one white dot in the middle of her back.',
    confirm: [
      'An adult female has a single white dot at the tip of her shield (CDC); a male has faint white marks along the rear edge (Ohio State).',
      'Unfed adults are about 1/8 to 3/16 inch (3 to 5 mm) long (Connecticut Agricultural Experiment Station; Ohio State). Its six-legged larvae, called seed ticks, are abundant in August and September (University of Kentucky) and come in swarms, because a whole egg mass hatches at once (University of Rhode Island).',
      'In Canada it turns up in southern parts of six provinces (PHAC) but is not known to be established: most found in Ontario come back with travelers from the US, and the few found on people who did not travel are thought to arrive on migratory birds or other animals (Public Health Ontario). Quebec has no evidence of an established population (INSPQ).',
    ],
    caution:
      'Lone star ticks can spread ehrlichiosis, tularemia and Heartland and Bourbon viruses, and their bites are linked to alpha-gal syndrome, an allergy to red meat; they do not spread Lyme disease (CDC). Get emergency care for a severe allergic reaction, which usually starts 2 to 6 hours after eating red meat or dairy (CDC). Public Health Ontario rates the risk of catching alpha-gal syndrome in Ontario as low, because the tick is not established there.',
    links: ['/blog/lone-star-tick', '/blog/alpha-gal-syndrome', '/blog/lone-star-tick-alpha-gal-canada'],
  },
  'american-dog': {
    name: 'American dog tick (wood tick)',
    short: 'an American dog tick',
    summary: 'A larger brown tick with silvery-white markings on its shield.',
    confirm: [
      'Look for silvery-gray or whitish markings on the shield of a female, or across the whole back of a male (Connecticut Agricultural Experiment Station).',
      'An unfed adult is about 3/16 to 1/4 inch long (Ohio State; Connecticut Agricultural Experiment Station). A fed female swells to 1/2 inch or more and turns mostly gray (Ohio State), but the white marks on her shield stay visible (Connecticut Agricultural Experiment Station).',
      'Adults bite in spring and summer, most of all from mid-April to mid-July (Ohio State), east of the Rocky Mountains (CDC) and in parts of south-central and southeastern Canada (PHAC).',
    ],
    caution:
      'American dog ticks cannot spread Lyme disease (CDC), but they can spread Rocky Mountain spotted fever and tularemia (CDC) and, if left attached, cause tick paralysis in people and dogs (Public Health Ontario).',
    links: ['/blog/american-dog-tick', '/blog/american-dog-tick-canada', '/blog/deer-tick-vs-dog-tick-canada'],
  },
  'rocky-mountain-wood': {
    name: 'Rocky Mountain wood tick',
    short: 'a Rocky Mountain wood tick',
    summary: 'A brown tick with a pale shield, found in the mountain West and western Canada, mostly in spring.',
    confirm: [
      'An adult female is reddish-brown with a light-colored shield near the head; males are gray and mottled (B.C. government).',
      'An unfed female is about 1/8 inch long; a fed one can reach 5/8 inch and turn grayish (Utah State Extension).',
      'It lives in the Rocky Mountain states at 4,000 to 10,500 feet (CDC) and in Alberta, British Columbia and western Saskatchewan (PHAC), and is most active from March to June (B.C. government).',
    ],
    caution:
      'It can spread Colorado tick fever, Rocky Mountain spotted fever and tularemia (CDC). A tick left attached can cause tick paralysis, weakness that climbs up from the legs; removing the tick is the treatment (BCCDC).',
    links: ['/blog/rocky-mountain-wood-tick', '/learn/ticks-by-state', '/blog/ticks-in-british-columbia'],
  },
  'gulf-coast': {
    name: 'Gulf Coast tick',
    short: 'a Gulf Coast tick',
    summary: 'A southern tick with whitish markings, easily mistaken for an American dog tick.',
    confirm: [
      'Adults are reddish-brown with whitish lines and markings, 1/8 to 1/4 inch (3 to 7 mm) long, and may look gray after feeding (Ohio State).',
      'Its long, slender mouthparts set it apart from the American dog tick’s short, stout ones (Ohio State); a sharp photo lets an expert check them.',
      'It lives mainly in the southeastern US (CDC), and adults are met most often in July and August (University of Rhode Island).',
    ],
    caution: 'Adult Gulf Coast ticks can spread Rickettsia parkeri rickettsiosis, a form of spotted fever (CDC). See a doctor for a fever or rash within a few weeks of the bite (CDC).',
    links: ['/blog/gulf-coast-tick', '/blog/ticks-in-south-carolina', '/learn/ticks-by-state'],
  },
  'brown-dog': {
    name: 'Brown dog tick',
    short: 'a brown dog tick',
    summary: 'A plain reddish-brown tick with no markings, the one that can live indoors where dogs are.',
    confirm: [
      'It is reddish-brown with a narrow body and no markings on its back (UF/IFAS); unfed adults are about 1/8 inch long (Ohio State).',
      'Check the dog’s ears, head and neck and between its toes, where adults feed most (Connecticut Agricultural Experiment Station).',
      'Ticks crawling up walls or curtains are often the first sign of an indoor infestation (UF/IFAS). In Canada it has been found only indoors, in kennels and homes with dogs (PHAC).',
    ],
    caution: 'In the southwestern US and along the US–Mexico border, brown dog ticks spread Rocky Mountain spotted fever (CDC). They cannot spread Lyme disease (CDC).',
    links: ['/blog/brown-dog-tick', '/blog/ticks-on-dogs', '/blog/how-long-do-ticks-live'],
  },
  'asian-longhorned': {
    name: 'Asian longhorned tick',
    short: 'an Asian longhorned tick',
    summary: 'A small, plain brown tick first found in the US in 2017, often by the hundreds on livestock or dogs.',
    confirm: [
      'Unfed adults are about the size of a sesame seed, brown and plain, and may look grayish once fed (Ohio State).',
      'Expect many: females lay eggs without mating, and thousands can be found at once on an animal or in the grass (CDC).',
      'It has spread to many eastern states since it was first found in the US in 2017 (USDA) and had been reported in 24 by April 2026 (Alabama Department of Agriculture and Industries). Public Health Ontario’s tick review (2nd edition, 2026) says it has not been reported from Ontario.',
    ],
    caution:
      'CDC says it is not yet known whether these ticks make people ill in the US, and they seem less drawn to people than native ticks are. Large numbers can make animals anemic (Penn State Extension).',
    links: ['/blog/asian-longhorned-tick', '/learn/ticks-by-state', '/blog/types-of-ticks-identification'],
  },
  groundhog: {
    name: 'Groundhog (woodchuck) tick',
    short: 'a groundhog tick',
    summary: 'A plain tan tick from the dens of groundhogs, raccoons and skunks that often turns up on pets.',
    confirm: [
      'PHAC describes it as beige, with a brown shield on its back.',
      'It is common on cats and dogs and on groundhogs, raccoons and skunks (Public Health Ontario), and all its stages will feed on people (Connecticut Agricultural Experiment Station).',
      'It lives throughout eastern North America and is the third most common tick sent in from people in Ontario (Public Health Ontario).',
    ],
    caution:
      'Groundhog ticks can spread Powassan virus, an uncommon but serious infection (CDC). See a doctor for fever, headache, vomiting or weakness after a tick bite (CDC).',
    links: ['/blog/groundhog-tick', '/blog/tick-borne-diseases-ontario-complete-list', '/blog/what-ticks-look-like-ontario'],
  },
  winter: {
    name: 'Winter (moose) tick',
    short: 'a winter tick',
    summary: 'A large reddish-brown tick of moose, deer, elk and horses, picked up in fall and winter.',
    confirm: [
      'It is a large, reddish-brown to gray-brown tick; unfed adult females are 5 to 7 mm (about 1/4 inch) long (University of Saskatchewan).',
      'Its larvae wait in clumps on low plants in fall and climb onto passing animals, and hunters find them on their clothing (UNH Extension).',
      'It is found in every Canadian province and territory (University of Saskatchewan). It will bite people if it gets the chance, but it is not known to spread disease to people (UNH Extension; University of Saskatchewan).',
    ],
    links: ['/blog/winter-tick', '/blog/ticks-in-alberta', '/learn/ticks-by-province'],
  },
  'soft-tick': {
    name: 'Soft tick (relapsing fever tick or bat tick)',
    short: 'a soft tick',
    summary: 'A leathery, wrinkled gray tick with its head hidden underneath, from rodent nests or bat roosts.',
    confirm: [
      'Soft ticks are leathery, wrinkled and grayish, with no hard shield, and their mouthparts cannot be seen from above (Connecticut Agricultural Experiment Station; Public Health Ontario).',
      'They feed for less than half an hour, usually at night while people sleep, so most people never notice the bite (CDC).',
      'Relapsing fever ticks live with rodents in cabins in the mountains of western states, and in caves in parts of Texas (CDC); bat ticks live with bats (Public Health Ontario).',
    ],
    caution:
      'Fever, headache and muscle aches 4 to 21 days after a night in a rodent-infested cabin, coming back after about a week without fever, can be soft tick relapsing fever: see a doctor (CDC). There is no evidence that bat ticks pass disease to people (CDC).',
    links: ['/blog/soft-ticks', '/blog/ticks-in-british-columbia', '/blog/what-do-ticks-look-like'],
  },
  'not-a-tick': {
    name: 'Probably not a tick',
    short: 'not a tick',
    summary: 'Antennae, wings or 6 legs on a bigger bug, or a tiny, quick red speck, point to a tick look-alike.',
    confirm: [
      'Count the legs: adult and nymph ticks have 8 legs and never have antennae or wings; only tiny larval ticks have 6 (University of Rhode Island; Utah State Extension).',
      'Spider beetles, weevils and bed bugs have 6 legs and antennae, so they are insects (University of Rhode Island; Utah Department of Health). Clover mites, reddish specks on sunny windowsills, feed on plants and do not attack people (Penn State Extension).',
      'About 1 in 20 photos sent to TickSpotters as ticks show a look-alike (University of Rhode Island). If you are unsure, send a photo there, or in Canada to eTick.ca.',
    ],
    links: ['/blog/bugs-that-look-like-ticks', '/blog/red-ticks-and-clover-mites', '/blog/tick-vs-bed-bug'],
  },
}

export const UNSURE: CandidateCopy = {
  name: 'Not clear from these answers',
  short: 'not clear',
  summary: 'Your answers do not point clearly to one tick. That is common: ticks are often small or swollen with blood, which makes them hard to identify from a photo (eTick).',
  confirm: [
    'Take sharp photos of the back and the underside in bright light, with a ruler or coin beside the tick (eTick), and send them to TickSpotters (University of Rhode Island) or, in Canada, eTick.ca (PHAC). Both identify ticks free.',
    'Keep the tick in a sealed bag or pill bottle with the date and the place you found it, in case a doctor wants to see it (PHAC).',
    'Ticks under 1/8 inch are usually young and hard to identify (Illinois Department of Public Health), so treat any tick bite the same way: remove the tick and watch for a rash or fever over the next several weeks (CDC).',
  ],
  links: ['/learn/tick-identification-chart', '/blog/what-do-ticks-look-like', '/blog/types-of-ticks-identification'],
}

/** Warnings raised by one answer, shown at the top of the result. */
export const FLAGS: Record<TickFlag, { title: string; text: string }> = {
  attached: {
    title: 'Remove the attached tick now',
    text: 'Grasp it with clean, fine-tipped tweezers as close to the skin as you can and pull it away with steady, even pressure, without twisting or jerking. Do not use petroleum jelly, heat or nail polish (CDC). Keep it in a sealed bag or pill bottle with the date and place, in case a doctor wants to see it (PHAC), and see a doctor if a rash or fever follows within several weeks (CDC).',
  },
  fed: {
    title: 'A swollen tick has been feeding for a while',
    text: 'CDC says a flat, unfed tick is unlikely to have spread Lyme disease, while a swollen one carries a higher risk. If it could be a blacklegged (deer) tick and the bite happened where Lyme disease is common, call a doctor within 72 hours of removing it: a single preventive dose of an antibiotic may be an option, even when the tick cannot be identified (CDC). In Canada, PHAC says a health care provider can consider preventive treatment after a tick bite.',
  },
}

/** The safety box: shown with every result and on the page. Sources are named on the page. */
export const SAFETY = {
  remove: {
    title: 'If it is attached, remove it now',
    items: [
      'Grasp the tick as close to the skin as you can with clean, fine-tipped tweezers',
      'Pull it away from the skin with steady, even pressure. Do not twist or jerk it',
      'Do not use petroleum jelly, heat, nail polish or other products to make it let go',
      'Clean the bite and your hands with soap and water, rubbing alcohol or hand sanitizer',
      'Never crush a tick with your fingers',
    ],
  },
  then: {
    title: 'Then',
    items: [
      'Keep the tick in a sealed bag or pill bottle, with the date and the place you were bitten, in case you see a doctor',
      'Get it identified free from a photo: TickSpotters in the US, eTick.ca in Canada',
      'Testing the tick for germs is generally not recommended: a result cannot tell you whether you are infected',
      'Watch the bite and how you feel for the next several weeks',
    ],
  },
  doctor: {
    title: 'See a doctor promptly for',
    items: [
      'A rash or a fever within several weeks of the bite. Tell the doctor when and where you were bitten',
      'A red rash that keeps growing for days at the bite, with or without a bull’s-eye',
      'Fever, chills, headache, tiredness, or muscle and joint aches after a bite, even without a rash',
      'A swollen blacklegged (deer) tick, or one that might have been, from an area where Lyme disease is common: call within 72 hours of removing it',
      'A tick you cannot remove, or one buried deep in the skin',
      'Weakness or numbness that creeps up from the legs: search the body for an attached tick, because removing it is the treatment for tick paralysis',
    ],
  },
  emergency: {
    title: 'Call 911 for',
    items: ['Trouble breathing, swelling of the face or throat, or dizziness: signs of a severe allergic reaction, which in alpha-gal syndrome usually starts 2 to 6 hours after eating red meat or dairy'],
  },
} as const
