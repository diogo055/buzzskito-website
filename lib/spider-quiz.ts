import type { CandidateCopy, IdQuizDef } from '@/lib/identifier-quiz'

/**
 * "What kind of spider is this?" — the seven-question spider identifier at /tools/spider-identifier
 * (Oct 2026). Plain data for the shared engine (lib/identifier-quiz.ts, components/IdentifierQuiz.tsx);
 * the page is app/tools/spider-identifier/page.tsx.
 *
 * HOW IT DECIDES. Every answer adds points to the spiders it fits, and carries one plain sentence
 * saying why, with its source in brackets ("Yellow sac spiders run on walls and ceilings at night
 * (UC IPM)"). The result shows the best match and up to two more that came close, each with the
 * sentences its answers earned, so the reader sees the reasoning instead of a verdict. Under
 * minScore nothing is named: a wrong name is worse than "not clear", and that result says how to
 * get an expert ID.
 *
 * NEVER A DEFINITIVE ID. Some spiders can only be told apart under a microscope (UC IPM on the
 * hobo spider), and the mark people trust most misleads (UC IPM: the violin alone does not
 * identify a recluse). The tool says "most likely", lists checks for every spider, and the page
 * shows the safety box with every result. Three answers raise a warning at the top of the result
 * (FLAGS): a widow-like spider, a recluse-like spider and a bite.
 *
 * RANGE. Brown recluses are established only in central and southern states (Penn State lists 16);
 * outside them almost every "recluse" sent to an expert was something else (Vetter 2005), and there
 * are none in Canada (Bennett and Vetter 2004). A region outside the range takes points off the
 * recluse (`unlikely`) but never removes it, and the recluse's checks and the recluse warning both
 * say why.
 *
 * SOURCES. Every "why" and "confirm" line restates a source named in brackets: CDC NIOSH, Mayo
 * Clinic, UC IPM and UC Riverside (Rick Vetter), Penn State, the University of Kentucky, the
 * University of Minnesota, the Missouri Department of Conservation, Washington State, Colorado
 * State, UF/IFAS, the University of Georgia, Clemson, Texas A&M AgriLife, the University of
 * Arkansas, the Oklahoma Department of Wildlife Conservation, the University of Arizona, the US
 * Army Public Health Center, Environment and Climate Change Canada and two peer-reviewed papers.
 * The full list with links is on the page. Change a line here only together with its source, and
 * keep it consistent with the spider guides it links to.
 *
 * The research behind it (the top three results taken apart, the gap list, source notes):
 * data/god-build/research/top3/spider-identifier.md. The answer paths it was tuned on are listed
 * there too; re-run them after changing any points.
 *
 * PHOTOS live in the page, not here: scripts/check-photos.mjs verifies <Photo id="..."> only in
 * app/ files and only with a literal id, so the page writes one <Photo> per spider.
 *
 * LINKS are checked at build time by the page: a live path must be in lib/article-index.json (and a
 * "#section" must exist in that guide), a planned path (`planned` in data/us-pages/routes.json) is
 * skipped until its release day, anything else fails the build, and so does a spider left with no
 * live link. So each spider lists its planned species page first and a live page after it.
 */

export type SpiderId =
  | 'house-spider'
  | 'cellar-spider'
  | 'wolf-spider'
  | 'jumping-spider'
  | 'orb-weaver'
  | 'grass-spider'
  | 'funnel-weaver'
  | 'yellow-sac'
  | 'false-widow'
  | 'black-widow'
  | 'harvestman'
  | 'fishing-spider'
  | 'recluse'
  | 'parson-spider'
  | 'woodlouse-spider'
  | 'brown-widow'
  | 'southern-house-spider'
  | 'green-lynx'
  | 'tarantula'
  | 'solifuge'
export type SpiderFlag = 'widow' | 'recluse' | 'bitten'

export const QUIZ_PATH = '/tools/spider-identifier'

/** Tie-break order: the spiders people find most often come first. */
export const SPIDER_IDS: readonly SpiderId[] = [
  'house-spider',
  'cellar-spider',
  'wolf-spider',
  'jumping-spider',
  'orb-weaver',
  'grass-spider',
  'funnel-weaver',
  'yellow-sac',
  'false-widow',
  'black-widow',
  'harvestman',
  'fishing-spider',
  'recluse',
  'parson-spider',
  'woodlouse-spider',
  'brown-widow',
  'southern-house-spider',
  'green-lynx',
  'tarantula',
  'solifuge',
]

// Spiders whose known range is the southern or southwestern US (sources in the region answers):
// a reader in the North or in Canada takes points off them.
const SOUTHERN_ONLY: readonly SpiderId[] = ['recluse', 'tarantula', 'solifuge', 'brown-widow', 'green-lynx', 'southern-house-spider']
// Far from the brown recluse's range the recluse counts as unlikely twice ('recluse' is listed again on
// purpose): Vetter (2005) received no recluse at all from 25 of 29 states outside the range, Penn State
// calls them extremely rare there, and Bennett and Vetter (2004) found none in Canada. Still not excluded:
// six eyes in pairs and plain legs can outweigh it, and the recluse's checks explain the range.
const FAR_FROM_RECLUSES: readonly SpiderId[] = [...SOUTHERN_ONLY, 'recluse']
// Spiders almost always found in their webs (University of Kentucky).
const WEB_SITTERS: readonly SpiderId[] = ['house-spider', 'cellar-spider', 'orb-weaver']

// The same fact can earn points from more than one answer.
const WHY = {
  recluseQuarter: 'A brown recluse is about the size of a US quarter with its legs stretched out (University of Kentucky).',
  houseNickel: 'A common house spider is about the size of a nickel with its legs stretched out (University of Kentucky).',
  sacNickel: 'A yellow sac spider is about the size of a nickel with its legs stretched out (University of Kentucky).',
  woodlouseNickel: 'A woodlouse spider is about the size of a nickel with its legs stretched out (University of Kentucky).',
  grassQuarter: 'A grass spider is about the size of a quarter with its legs stretched out (University of Kentucky).',
  jumperDime: 'A typical jumping spider is about the size of a dime with its legs stretched out (University of Kentucky).',
  wolfRange: 'Wolf spiders range from the size of a pencil eraser to about the size of a silver dollar, legs included (University of Kentucky).',
  orbRange: 'Orb weavers range from the size of a pencil eraser to a little bigger than a silver dollar, legs included (University of Kentucky).',
  widowBody: 'An adult female black widow’s body is about 1/2 inch long (University of Kentucky).',
  falseWidowBody: 'A false black widow’s body is about 3/8 inch (10 mm) long (UC IPM).',
  brownWidowBody: 'A female brown widow’s body is about 3/8 inch (10 mm) long (UC IPM).',
  parsonBody: 'A parson spider’s body is about 1/2 inch long (University of Minnesota).',
  lynxBody: 'An adult female green lynx spider’s body is about 1/2 to 7/8 inch (12 to 22 mm) long (UF/IFAS).',
  cobwebHang: 'Cobweb spiders, the family of house spiders and widows, almost always hang upside down in their webs (UC IPM; Penn State).',
  southernRange: 'Southern house spiders are common in much of the southern United States (UF/IFAS).',
  southernMale: 'Male southern house spiders build no webs; they wander in search of females (UF/IFAS).',
  lynxRange: 'Green lynx spiders live across most of the southern United States, from coast to coast (UF/IFAS).',
  widowSouthWest: 'Black widows live throughout North America but are most common in the southern and western United States (CDC).',
} as const

export const QUIZ: IdQuizDef<SpiderId, SpiderFlag> = {
  quizId: 'spider-identifier',
  ids: SPIDER_IDS,
  scoring: {
    minScore: 9,
    alsoMinScore: 8,
    alsoShare: 0.6,
    maxShown: 3,
    unlikelyPenalty: 4,
    leadMinScore: 4,
  },
  questions: [
    {
      id: 'where',
      title: 'Where did you find it?',
      hint: 'Pick the closest match.',
      choices: [
        {
          id: 'floor',
          label: 'Indoors, on the floor or running across it',
          unlikely: ['house-spider', 'orb-weaver'],
          fits: {
            'wolf-spider': [3, 'Wolf spiders hunt on the ground, build no webs and often wander into homes (University of Kentucky).'],
            'funnel-weaver': [3, 'Barn funnel weavers, especially adult males, wander from their webs and get trapped in sinks and bathtubs (Colorado State University).'],
            'grass-spider': [2, 'Grass spiders are fast runners, and homeowners often see them indoors in the autumn (Penn State).'],
            'parson-spider': [2, 'Parson spiders come indoors in the fall, hunt at night and move very fast (Penn State).'],
            recluse: [1, 'Recluses hunt at night, and mature males roam in search of females (UC IPM).'],
            'southern-house-spider': [2, WHY.southernMale],
            'woodlouse-spider': [1, 'Woodlouse spiders wander at night (University of Minnesota) and sometimes come into homes (University of Kentucky).'],
            'fishing-spider': [1, 'Fishing spiders sometimes wander into homes near streams and woods (University of Kentucky).'],
            tarantula: [1, 'Big spiders found in homes or garages are often male wolf spiders or tarantulas searching for females (UC IPM).'],
            solifuge: [1, 'Windscorpions (camel spiders) sometimes enter buildings (UC IPM).'],
          },
        },
        {
          id: 'wall',
          label: 'Indoors, on a wall, ceiling or window',
          fits: {
            'yellow-sac': [4, 'Yellow sac spiders run on walls and ceilings at night and hide by day in silk sacs where walls meet ceilings (UC IPM).'],
            'jumping-spider': [2, 'Jumping spiders hunt by day and are often found on windows, walls and ceilings in the sun (University of Minnesota).'],
            'cellar-spider': [2, 'Cellar spiders build loose webs in corners near the ceiling or floor (University of Minnesota).'],
            'house-spider': [2, 'Common house spiders build cobwebs in the corners of rooms and in windows (UC IPM).'],
          },
        },
        {
          id: 'storage',
          label: 'In a basement, garage, shed, attic, crawl space or stored boxes',
          fits: {
            recluse: [3, 'Recluses are readily found in storage boxes and under tarps and plywood (UC IPM), and indoors they favor cluttered basements and attics (Mayo Clinic).'],
            'black-widow': [3, 'Black widows hide in quiet, sheltered places such as the dark corners of garages and sheds (University of Kentucky).'],
            'house-spider': [3, 'In homes, common house spiders turn up most often in damp places such as basements and crawl spaces (Penn State).'],
            'cellar-spider': [3, 'Cellar spiders are common in dark, quiet places such as crawl spaces, basements and cellars (University of Minnesota).'],
            'funnel-weaver': [3, 'Giant house spiders are often found in garages and basements (Washington State University), and hobo spiders build webs in basements and window wells (UC IPM).'],
            'false-widow': [2, 'False black widows thrive indoors, under appliances, furniture and cabinets (UC IPM).'],
            'parson-spider': [1, 'Parson spiders come indoors in the fall to find a place to spend the winter (Penn State).'],
            'wolf-spider': [1, 'Some female wolf spiders spend the winter in sheltered places, buildings included (Penn State).'],
          },
        },
        {
          id: 'bed',
          label: 'In a bed, clothes, shoes or towels',
          fits: {
            recluse: [3, 'Recluses may shelter in clothing or shoes, and some bites happen when a sleeping person rolls onto one (UC IPM).'],
            'yellow-sac': [3, 'Yellow sac spider bites usually happen when the spider is trapped against the skin in clothing or bedding (UC IPM).'],
            'black-widow': [1, 'Widow spiders often hide in clothing, shoes and storage areas (US Army Public Health Center).'],
            'parson-spider': [1, 'Parson spiders have been known to bite when trapped in clothing or bedding (University of Minnesota).'],
          },
        },
        {
          id: 'plants',
          label: 'Outdoors on plants, flowers, a fence or a porch',
          unlikely: ['recluse'],
          fits: {
            'orb-weaver': [4, 'Orb weavers are common on porches and in gardens, especially in late summer (University of Kentucky).'],
            'green-lynx': [3, 'Green lynx spiders live on shrubs and other low plants (UF/IFAS).'],
            'jumping-spider': [2, 'Bold jumping spiders are often found on broad-leafed plants, tree trunks, fence posts and house siding (Missouri Dept. of Conservation).'],
            'brown-widow': [2, 'Brown widows live in more open places than black widows, such as chain-link fences, and are very common under plastic patio furniture (UC IPM).'],
            'grass-spider': [1, 'Grass spiders build their webs in grass, ground covers, fence rows and bushes (Penn State).'],
            'yellow-sac': [1, 'Yellow sac spiders are also common outdoors in shrubbery (UC IPM).'],
            'southern-house-spider': [1, 'Southern house spiders build their webs on houses and other buildings, around windowsills, shutters and overhangs (UF/IFAS).'],
          },
        },
        {
          id: 'ground',
          label: 'Outdoors on the ground: a lawn, leaves, rocks, logs or a woodpile',
          fits: {
            'wolf-spider': [4, 'Wolf spiders live on the ground or under stones in woodlands, meadows, gardens and fields (University of Minnesota).'],
            'grass-spider': [3, 'Grass spiders build their webs in the short grass of lawns (University of Minnesota).'],
            'black-widow': [2, 'Black widows live in sheltered outdoor spots such as piles of rocks and firewood (University of Kentucky).'],
            'woodlouse-spider': [2, 'Woodlouse spiders live under rocks and debris and prefer to eat sowbugs and pill bugs (University of Minnesota).'],
            tarantula: [2, 'Tarantulas live in burrows in the ground and wait at the entrance at night (UC IPM).'],
            solifuge: [2, 'Windscorpions (camel spiders) are active mostly at night and turn up on roads and paths (UC IPM).'],
            harvestman: [2, 'Harvestmen are often found in leaf litter or on tree bark (Missouri Dept. of Conservation).'],
            'parson-spider': [1, 'By day, parson spiders hide outdoors under stones or loose bark (University of Minnesota).'],
            'fishing-spider': [1, 'Dark fishing spiders are sometimes found around logs and stumps in yards (Missouri Dept. of Conservation).'],
            recluse: [1, 'In nature, recluses hide in cracks under rocks and under loose bark (UC IPM).'],
          },
        },
        {
          id: 'water',
          label: 'Near water: a dock, pond, lake or stream',
          fits: {
            'fishing-spider': [5, 'Fishing spiders are typically seen near ponds, swamps and slow-moving streams (University of Minnesota).'],
            'wolf-spider': [1, 'Some wolf spiders live along stream edges and on sand or gravel bars (Missouri Dept. of Conservation).'],
          },
        },
        { id: 'unsure', label: 'Not sure', fits: {} },
      ],
    },
    {
      id: 'web',
      title: 'Was it in a web? What did the web look like?',
      hint: 'Pick “No web” if it was walking, running or jumping on its own.',
      choices: [
        {
          id: 'cobweb',
          label: 'A messy tangle of threads (a cobweb)',
          fits: {
            'house-spider': [4, 'Common house spiders are almost always found in their compact, messy cobwebs (University of Kentucky).'],
            'cellar-spider': [4, 'Cellar spiders are almost always found in their messy cobwebs (University of Kentucky).'],
            'black-widow': [4, 'Black widows build an irregular, tough, sticky cobweb (UC IPM).'],
            'false-widow': [4, 'False black widows build the same kind of tangled cobweb as widows (UC IPM).'],
            'brown-widow': [3, 'Brown widows make irregular webs of strong silk, like black widows (UC IPM).'],
          },
        },
        {
          id: 'sheet',
          label: 'A flat sheet of silk with a funnel or tube at one side',
          fits: {
            'grass-spider': [5, 'Grass spiders build a flat sheet web with a funnel or tunnel off to one side (Penn State).'],
            'funnel-weaver': [5, 'Funnel weavers spin a flat sheet web with a funnel-shaped retreat where the spider waits (Washington State University; Colorado State University).'],
          },
        },
        {
          id: 'orb',
          label: 'A round, wheel-shaped web, maybe with a zigzag band',
          fits: {
            'orb-weaver': [7, 'Orb weavers make the classic web of circles and spokes (University of Minnesota) and are almost always found in it (University of Kentucky).'],
          },
        },
        {
          id: 'sac',
          label: 'No catching web, just a small silk sac or tube it hides in',
          fits: {
            'yellow-sac': [5, 'Yellow sac spiders build no web; they hide by day in a silken tube or sac (University of Minnesota).'],
            'jumping-spider': [2, 'Jumping spiders build no web but use silk to make shelters (Missouri Dept. of Conservation).'],
            'woodlouse-spider': [2, 'Woodlouse spiders build no web (University of Kentucky) but keep a silken retreat (Penn State).'],
          },
        },
        {
          id: 'woolly',
          label: 'Thick, woolly silk spread flat around a crack or hole in a wall',
          fits: {
            'southern-house-spider': [7, 'Southern house spiders build a distinctive flat, tangled web of woolly silk on the surface around a crevice, and hide in the crevice by day (UF/IFAS).'],
          },
        },
        {
          id: 'none',
          label: 'No web: it was walking, running or jumping',
          unlikely: WEB_SITTERS,
          fits: {
            'wolf-spider': [3, 'Wolf spiders do not spin webs to catch prey (Missouri Dept. of Conservation).'],
            'jumping-spider': [3, 'Jumping spiders make no web; they stalk and pounce on their prey (UC IPM).'],
            'fishing-spider': [3, 'The dark fishing spider is not a web-building spider (Missouri Dept. of Conservation).'],
            'parson-spider': [3, 'Parson spiders hunt without a web (Penn State).'],
            'woodlouse-spider': [3, 'Woodlouse spiders do not build webs (University of Kentucky).'],
            'green-lynx': [3, 'Green lynx spiders do not build a web to catch prey (UF/IFAS).'],
            solifuge: [3, 'Windscorpions cannot spin webs: unlike spiders, they have no web-spinning organs (UC IPM).'],
            harvestman: [3, 'Harvestmen have no silk glands, so they never build webs (Missouri Dept. of Conservation).'],
            tarantula: [2, 'Tarantulas spend the day in burrows in the ground (UC IPM).'],
            recluse: [2, 'Recluses make only small retreat webs behind objects, never out in the open (UC Riverside).'],
            'yellow-sac': [2, 'Yellow sac spiders do not build webs (University of Kentucky).'],
            'southern-house-spider': [2, WHY.southernMale],
            'grass-spider': [1, 'Grass spiders occasionally wander into homes (University of Kentucky).'],
            'funnel-weaver': [1, 'Male funnel weavers often wander away from their webs (Colorado State University).'],
          },
        },
        { id: 'unsure', label: 'Did not see a web, or not sure', fits: {} },
      ],
    },
    {
      id: 'size',
      title: 'How big is it, legs included?',
      hint: 'Measure from leg tip to leg tip. A coin beside it in a photo helps.',
      choices: [
        {
          id: 'small',
          label: 'Small: about a dime or smaller (under 3/4 inch, 2 cm)',
          unlikely: ['tarantula', 'fishing-spider'],
          fits: {
            'jumping-spider': [3, WHY.jumperDime],
            'house-spider': [1, 'The common house spider is small: a female’s body is only about 1/4 inch (5 to 6 mm) long (Penn State).'],
            'orb-weaver': [1, WHY.orbRange],
            'wolf-spider': [1, WHY.wolfRange],
          },
        },
        {
          id: 'medium',
          label: 'Medium: a nickel to a quarter (about 3/4 to 1 inch, 2 to 2.5 cm)',
          fits: {
            recluse: [2, WHY.recluseQuarter],
            'house-spider': [2, WHY.houseNickel],
            'yellow-sac': [2, WHY.sacNickel],
            'woodlouse-spider': [2, WHY.woodlouseNickel],
            'grass-spider': [2, WHY.grassQuarter],
            'false-widow': [1, WHY.falseWidowBody],
            'brown-widow': [1, WHY.brownWidowBody],
            'black-widow': [1, WHY.widowBody],
            'parson-spider': [1, WHY.parsonBody],
            'green-lynx': [1, WHY.lynxBody],
            'jumping-spider': [1, WHY.jumperDime],
            'wolf-spider': [1, WHY.wolfRange],
            'orb-weaver': [1, WHY.orbRange],
          },
        },
        {
          id: 'large',
          label: 'Large: a half dollar or bigger, up to about 2 inches (5 cm)',
          fits: {
            'cellar-spider': [3, 'A cellar spider is about the size of a half-dollar with its legs stretched out (University of Kentucky).'],
            'funnel-weaver': [3, 'Hobo spiders measure 1 to 1 3/4 inches including the legs (UC IPM), and large giant house spiders reach a leg span of up to 4 inches (Washington State University).'],
            'wolf-spider': [2, 'The largest wolf spiders are about the size of a silver dollar with their legs stretched out (University of Kentucky).'],
            'orb-weaver': [2, 'A female yellow garden spider’s body alone is 3/4 to 1 inch long (Missouri Dept. of Conservation).'],
            'fishing-spider': [2, 'A fishing spider is a little bigger than a silver dollar with its legs stretched out (University of Kentucky).'],
            'southern-house-spider': [2, 'Female southern house spiders are 1/2 to 3/4 inch long, and males have long, slender legs (UF/IFAS).'],
            solifuge: [2, 'Windscorpions are 3/4 to 1 1/2 inches long (UC IPM).'],
            harvestman: [2, 'Harvestmen have remarkably long legs on a body up to about 1/2 inch long (Missouri Dept. of Conservation).'],
            'grass-spider': [1, 'A female grass spider’s body alone is 3/8 to 3/4 inch (10 to 20 mm) long (Penn State).'],
            'black-widow': [1, WHY.widowBody],
            'green-lynx': [1, WHY.lynxBody],
          },
        },
        {
          id: 'huge',
          label: 'Very large: more than 2 inches (5 cm) across',
          unlikely: ['recluse', 'jumping-spider', 'house-spider', 'yellow-sac'],
          fits: {
            tarantula: [4, 'Texas tarantulas can measure up to 6 inches from the tips of the front legs to the tips of the back legs (Texas A&M AgriLife).'],
            'fishing-spider': [4, 'With legs spread, some fishing spiders cover as much as 4 inches (University of Minnesota).'],
            'funnel-weaver': [3, 'Large giant house spiders can reach a leg span of 4 inches (Washington State University).'],
            'orb-weaver': [2, 'Counting their legs, garden spiders can be several inches long (University of Minnesota), and a female joro spider can span 3 inches or more (Clemson Extension).'],
            'wolf-spider': [1, 'The biggest wolf spiders, such as the Carolina wolf spider, have bodies up to about 1 3/8 inches (35 mm) long (Penn State).'],
          },
        },
        { id: 'unsure', label: 'Not sure', fits: {} },
      ],
    },
    {
      id: 'look',
      title: 'What color is it, and what markings do you see?',
      hint: 'Pick the closest. Do not touch it: a photo lets you zoom in safely.',
      choices: [
        {
          id: 'black-red',
          label: 'Shiny black with red or orange: an hourglass underneath, or red spots',
          flag: 'widow',
          unlikely: ['false-widow', 'recluse', 'house-spider'],
          fits: {
            'black-widow': [7, 'An adult female black widow is shiny black with a red or orange hourglass on her underside (UC IPM); the northern black widow’s hourglass is often split in two, with red spots down her back (Missouri Dept. of Conservation).'],
            'jumping-spider': [2, 'Some black jumping spiders have red on top: Johnson’s jumping spider has red on its abdomen (UC IPM), and the bold jumper’s spots can be orange or reddish (Missouri Dept. of Conservation).'],
          },
        },
        {
          id: 'shiny-dark',
          label: 'Shiny black or dark brown, with a round body and no red marks',
          flag: 'widow',
          unlikely: ['recluse'],
          fits: {
            'false-widow': [6, 'The false black widow has a widow’s round body but is chocolate brown and never has red markings (UC IPM).'],
            'black-widow': [3, 'A female black widow is shiny black on top; her red hourglass is underneath and can be faint or, rarely, missing (UC IPM).'],
          },
        },
        {
          id: 'violin',
          label: 'Tan or brown, with a dark violin shape on the front half of its body',
          flag: 'recluse',
          // A tan or brown spider is not a shiny black widow, so it should not surface as a lead.
          unlikely: ['black-widow'],
          fits: {
            recluse: [5, 'CDC describes the brown recluse as brown with a dark violin-shaped mark on its head, but UC IPM warns that the mark alone is not a reliable sign.'],
            'cellar-spider': [2, 'Many tan or gray spiders, cellar spiders among them, have dark marks on the front half that people take for a violin (UC IPM).'],
            'southern-house-spider': [3, 'Male southern house spiders are khaki to amber, with a brown stripe behind the eyes, and are often mistaken for brown recluses (UF/IFAS).'],
            'wolf-spider': [2, 'Wolf spiders are often mistaken for brown recluses because they are brown (University of Kentucky).'],
            'grass-spider': [2, 'Grass spiders are often mistaken for brown recluses because they are brown and about the same size (University of Kentucky).'],
            'funnel-weaver': [1, 'Funnel weavers are among the spiders people have sent to experts as suspected brown recluses (UC Riverside).'],
            'yellow-sac': [1, 'Yellow sac spiders are often mistaken for brown recluses because of their shape (University of Kentucky).'],
            'woodlouse-spider': [1, 'Woodlouse spiders are sometimes mistaken for brown recluses because of their color and size (University of Kentucky).'],
          },
        },
        {
          id: 'brown-pattern',
          label: 'Brown or gray with stripes, chevrons, spots or a mottled pattern',
          unlikely: ['recluse'],
          fits: {
            'wolf-spider': [4, 'Most wolf spiders are gray or brown, usually with contrasting spots or stripes (University of Kentucky).'],
            'grass-spider': [4, 'Grass spiders are brown with prominent gray or tan stripes running lengthwise (University of Kentucky).'],
            'fishing-spider': [4, 'Fishing spiders are brown with darker brown patterns (University of Kentucky); the dark fishing spider has W-shaped marks on its back (Missouri Dept. of Conservation).'],
            'funnel-weaver': [3, 'The hobo spider has a herringbone or chevron pattern on top of the abdomen (UC IPM), and the barn funnel weaver is mottled (Colorado State University).'],
            'house-spider': [3, 'The common house spider is brown and tan with dark brown patterns (University of Kentucky), often with gray chevrons on the abdomen (Penn State).'],
            'brown-widow': [2, 'A brown widow is a mottled mix of tan, brown and gray (UC IPM).'],
            'cellar-spider': [1, 'Cellar spiders are light tan or gray with darker markings (University of Kentucky).'],
          },
        },
        {
          id: 'plain-brown',
          label: 'Plain tan, brown or gray all over, with no pattern',
          unlikely: ['black-widow'],
          fits: {
            recluse: [2, 'A recluse’s abdomen and legs are one even color, from light beige to dark brown, with no stripes, bands or mottling (UC IPM; University of Kentucky).'],
            'southern-house-spider': [2, 'Male southern house spiders are khaki to amber, and females charcoal gray (UF/IFAS).'],
            solifuge: [2, 'Windscorpions are yellowish brown (UC IPM).'],
            'funnel-weaver': [2, 'Giant house spiders vary from light to dark, with markings from barely visible to very distinct (Washington State University).'],
            'wolf-spider': [1, 'Wolf spiders are often mistaken for brown recluses because they are brown (University of Kentucky).'],
            'grass-spider': [1, 'Grass spiders are brown and are often mistaken for brown recluses (University of Kentucky).'],
            'orb-weaver': [1, 'Some orb weavers are solid tan or brown (University of Kentucky).'],
            tarantula: [1, 'The brown tarantula’s body is shades of brown and tan (Oklahoma Department of Wildlife Conservation).'],
          },
        },
        {
          id: 'black-white',
          label: 'Black or dark gray, often fuzzy, with white spots, stripes or a white band',
          unlikely: ['recluse'],
          fits: {
            'jumping-spider': [5, 'Jumping spiders are typically dark with white markings (University of Minnesota), and the fuzzy bold jumper is usually black, often with white spots on top of the abdomen (Missouri Dept. of Conservation).'],
            'parson-spider': [4, 'The parson spider has a white band running down its abdomen (University of Minnesota) and a distinctive white pattern on top (Penn State).'],
            'black-widow': [1, 'Young and male black widows have white stripes or spots (UC IPM; Missouri Dept. of Conservation), and some adult females keep white lines on the front of the abdomen (UC IPM).'],
          },
        },
        {
          id: 'bright',
          label: 'Bright yellow, orange or red with black, or white with spines',
          unlikely: ['recluse'],
          fits: {
            'orb-weaver': [5, 'Many orb weavers are colorful (University of Kentucky): the yellow garden spider is yellow and black (Missouri Dept. of Conservation), and the spiny orb weaver is often white with black spots and red spines (UF/IFAS).'],
            'jumping-spider': [1, 'Some jumping spiders are vividly colored (University of Kentucky).'],
          },
        },
        {
          id: 'pale',
          label: 'Pale yellow, cream, beige or very light green',
          fits: {
            'yellow-sac': [5, 'Yellow sac spiders are pale yellow to cream, sometimes slightly greenish, with dark brown jaws and leg tips (Penn State).'],
            'cellar-spider': [2, 'Cellar spiders are pale gray to light tan (University of Minnesota).'],
            'southern-house-spider': [1, 'Male southern house spiders are khaki to amber (UF/IFAS).'],
          },
        },
        {
          id: 'green',
          label: 'Bright green',
          unlikely: ['recluse'],
          fits: {
            'green-lynx': [6, 'The green lynx spider is a bright, see-through green, often with red spots (UF/IFAS).'],
            'yellow-sac': [1, 'One common yellow sac spider has a slightly greenish abdomen (Penn State).'],
          },
        },
        {
          id: 'red-front',
          label: 'Red or orange front half and legs, with a pale gray or cream rear',
          fits: {
            'woodlouse-spider': [7, 'The woodlouse spider has a reddish-orange to reddish-brown front half and orange legs, with a dirty-white to gray abdomen (Penn State; University of Kentucky).'],
          },
        },
        { id: 'unsure', label: 'Hard to say', fits: {} },
      ],
    },
    {
      id: 'body',
      title: 'Look closely at its eyes, legs and body. What stands out?',
      hint: 'Zoom in on a photo. Pick the clearest thing you can see.',
      choices: [
        {
          id: 'front-eyes',
          label: 'Two big eyes facing forward on a flat face',
          fits: {
            'jumping-spider': [5, 'Jumping spiders have large, distinctive front eyes and a flat-faced look (University of Kentucky).'],
            'wolf-spider': [2, 'Wolf spiders also have two enlarged eyes in front, above a row of four small ones (Missouri Dept. of Conservation).'],
          },
        },
        {
          id: 'six-eyes',
          label: 'Six eyes in three pairs (seen up close)',
          flag: 'recluse',
          fits: {
            recluse: [6, 'Six equal-sized eyes in three pairs is the most definitive feature of a recluse; most spiders have eight eyes (UC IPM).'],
            'woodlouse-spider': [3, 'The woodlouse spider also has six eyes, but in two groups of three (UC IPM).'],
          },
        },
        {
          id: 'long-legs',
          label: 'A small body on very long, thin legs',
          fits: {
            'cellar-spider': [5, 'Cellar spiders have a small, thin body on long, thin legs (University of Kentucky).'],
            harvestman: [4, 'Harvestmen have remarkably long, wiggly legs (Missouri Dept. of Conservation).'],
            'southern-house-spider': [2, 'Male southern house spiders have long, slender legs (UF/IFAS).'],
            recluse: [1, 'Brown recluse legs are long and thin (University of Kentucky).'],
            'funnel-weaver': [1, 'Giant house spiders have long legs: a leg span up to 4 inches on a body 1/2 to 1 inch long (Washington State University).'],
          },
        },
        {
          id: 'one-body',
          label: 'Very long legs on one round or oval body, with no waist',
          fits: {
            harvestman: [7, 'A harvestman’s body is one simple oval with no clear line between head and abdomen, and it has only two eyes (Missouri Dept. of Conservation).'],
          },
        },
        {
          id: 'banded-legs',
          label: 'Legs with bands, rings or stripes',
          unlikely: ['recluse'],
          fits: {
            'fishing-spider': [3, 'The dark fishing spider’s legs are often banded (Missouri Dept. of Conservation).'],
            'orb-weaver': [2, 'Some orb weavers have banded legs: the yellow garden spider’s are black with yellow-orange stripes (Missouri Dept. of Conservation).'],
            'house-spider': [2, 'The common house spider’s legs are yellow with darker rings (Penn State).'],
            'funnel-weaver': [2, 'The barn funnel weaver has banded legs (Colorado State University).'],
            'brown-widow': [2, 'The brown widow has banded legs (US Army Public Health Center).'],
            'grass-spider': [1, 'Grass spider legs are often ringed, darker at the end of each segment (Penn State).'],
          },
        },
        {
          id: 'spiny-legs',
          label: 'Legs with long, stiff spines sticking out',
          unlikely: ['recluse', 'black-widow', 'false-widow', 'house-spider'],
          fits: {
            'green-lynx': [4, 'Green lynx spiders have very long black spines on their legs (UF/IFAS).'],
            'orb-weaver': [1, 'Some orb weavers have spines sticking straight out from their legs (UC Riverside).'],
          },
        },
        {
          id: 'plain-legs',
          label: 'Plain legs of one color, with no bands or spines',
          fits: {
            recluse: [3, 'Recluses have evenly colored legs with fine hairs and no spines (UC IPM).'],
            'black-widow': [2, 'Black widows have slender black legs, and cobweb spiders have no spines on their legs (UC IPM).'],
            'woodlouse-spider': [2, 'The woodlouse spider has orange legs (University of Minnesota).'],
            'false-widow': [1, 'False widows belong to the cobweb spider family, whose legs have no spines (UC IPM).'],
            'yellow-sac': [1, 'Yellow sac spiders have tan legs, dark only at the tips (University of Kentucky; Penn State).'],
          },
        },
        {
          id: 'hairy',
          label: 'Thick hair all over its body and legs',
          fits: {
            tarantula: [5, 'Tarantulas are big, hairy spiders (University of Arkansas; UC IPM).'],
            'wolf-spider': [2, 'Wolf spiders have long, hairy legs (UC IPM).'],
            'fishing-spider': [2, 'Fishing spiders are large, hairy spiders (University of Kentucky).'],
            'funnel-weaver': [1, 'Giant house spiders have somewhat hairy legs and bodies (Washington State University).'],
          },
        },
        {
          id: 'big-jaws',
          label: 'Huge jaws or fangs sticking out in front',
          fits: {
            solifuge: [5, 'Windscorpions (camel spiders) have large, pincer-like jaws (UC IPM).'],
            'woodlouse-spider': [4, 'The woodlouse spider’s fangs are large and point forward (University of Minnesota).'],
          },
        },
        { id: 'unsure', label: 'Could not see clearly', fits: {} },
      ],
    },
    {
      id: 'behavior',
      title: 'What did it do?',
      hint: 'Pick the one that fits best.',
      choices: [
        {
          id: 'jumped',
          label: 'It jumped',
          fits: {
            'jumping-spider': [5, 'Jumping spiders leap on their prey, often many times their own body length (University of Minnesota).'],
            'green-lynx': [2, 'Green lynx spiders leap from plant to plant as they hunt (UF/IFAS).'],
          },
        },
        {
          id: 'ran',
          label: 'It ran fast',
          fits: {
            'wolf-spider': [2, 'Wolf spiders are fast-moving and are usually seen running on the ground (University of Kentucky).'],
            'grass-spider': [2, 'Grass spiders are extremely fast and shy (Penn State).'],
            'funnel-weaver': [2, 'Giant house spiders usually run away very quickly when startled (Washington State University).'],
            'parson-spider': [2, 'Parson spiders move very fast and run in a zigzag to escape (Penn State).'],
            solifuge: [3, 'Windscorpions run swiftly on long legs (UC IPM).'],
            'yellow-sac': [1, 'Yellow sac spiders run on walls and ceilings at night (UC IPM).'],
          },
        },
        {
          id: 'hung',
          label: 'It hung upside down in its web',
          fits: {
            'black-widow': [3, 'A black widow hangs in her web with her underside up, showing the red hourglass (UC IPM).'],
            'house-spider': [3, WHY.cobwebHang],
            'false-widow': [2, WHY.cobwebHang],
            'brown-widow': [2, WHY.cobwebHang],
            'cellar-spider': [2, 'A female cellar spider hangs upside down in her web (Penn State).'],
            'orb-weaver': [2, 'The yellow garden spider rests head-down at the center of her web (Missouri Dept. of Conservation).'],
          },
        },
        {
          id: 'shook',
          label: 'It shook or whirled in its web when disturbed',
          fits: {
            'cellar-spider': [5, 'A threatened cellar spider vibrates rapidly in a circle in its web, which makes it hard to see (Penn State).'],
            'orb-weaver': [3, 'When disturbed, the yellow garden spider often makes its web vibrate (Missouri Dept. of Conservation).'],
          },
        },
        {
          id: 'water',
          label: 'It ran across water or dived under it',
          fits: {
            'fishing-spider': [7, 'Fishing spiders can skate across water and dive underneath to catch prey (University of Minnesota).'],
          },
        },
        {
          id: 'carried',
          label: 'It carried an egg sac or babies',
          fits: {
            'wolf-spider': [4, 'A female wolf spider carries her egg sac attached to the rear of her abdomen, then carries her babies on her back (Missouri Dept. of Conservation).'],
            'fishing-spider': [3, 'A female fishing spider carries her egg sac in her jaws (University of Kentucky).'],
            'cellar-spider': [2, 'A female cellar spider holds her egg sac in her jaws (Penn State).'],
          },
        },
        {
          id: 'dropped',
          label: 'It dropped to the floor, or pulled in its legs and played dead',
          fits: {
            'yellow-sac': [3, 'Disturbed yellow sac spiders quickly drop to the floor to escape (UC IPM).'],
            'brown-widow': [3, 'Disturbed brown widows usually pull in their legs, drop from the web and play dead (UC IPM).'],
            'black-widow': [1, 'Widow spiders usually retreat or drop to the bottom of the web when disturbed (US Army Public Health Center).'],
          },
        },
        { id: 'bit', label: 'It bit someone', flag: 'bitten', fits: {} },
        { id: 'unsure', label: 'Nothing, or not sure', fits: {} },
      ],
    },
    {
      id: 'region',
      title: 'Where are you?',
      hint: 'Some spiders, the brown recluse among them, live only in certain regions.',
      choices: [
        {
          id: 'central',
          label: 'Central US: Missouri, Kansas, Oklahoma, Arkansas, Kentucky, Tennessee, Nebraska, Iowa, Illinois, Indiana or Ohio',
          fits: {
            recluse: [4, 'Brown recluses are established in all of these states (Penn State); their range runs from southeastern Nebraska to southwestern Ohio and south through Texas to north Georgia (UC IPM), so in Nebraska, Iowa, Illinois, Indiana and Ohio it reaches only the southern parts.'],
            tarantula: [1, 'Tarantulas live as far east as Missouri, Arkansas and Louisiana (University of Arkansas), and in Kansas and Oklahoma (Oklahoma Department of Wildlife Conservation).'],
          },
        },
        {
          id: 'gulf',
          label: 'Gulf states: Louisiana, Mississippi, Alabama or Georgia',
          fits: {
            recluse: [3, 'Brown recluses are established in Louisiana, Mississippi, Alabama and Georgia (Penn State).'],
            'brown-widow': [2, 'Brown widows have spread from Texas through the Gulf Coast states (UC IPM).'],
            'southern-house-spider': [2, WHY.southernRange],
            'green-lynx': [2, WHY.lynxRange],
            'orb-weaver': [1, 'Golden silk orb weavers range through the Gulf states (UF/IFAS), and joro spiders are established in Georgia and Alabama (University of Georgia).'],
            tarantula: [1, 'Louisiana is at the eastern edge of the tarantula’s range (University of Arkansas).'],
            'black-widow': [1, WHY.widowSouthWest],
          },
        },
        {
          id: 'southwest',
          label: 'Texas or the Southwest: Texas, New Mexico, Arizona or Nevada',
          fits: {
            recluse: [3, 'Brown recluses are established in Texas (Penn State), and other recluses live in the Southwest, such as the Arizona recluse (University of Arizona) and the desert recluse (UC IPM).'],
            tarantula: [3, 'Texas alone has 15 tarantula species (Texas A&M AgriLife), and in Arizona wandering male tarantulas sometimes get indoors (University of Arizona).'],
            solifuge: [3, 'Windscorpions (camel spiders) are common in dry parts of the Southwest (UC IPM).'],
            'brown-widow': [1, 'Brown widows have been recorded in Texas (US Army Public Health Center).'],
            'green-lynx': [1, WHY.lynxRange],
            'southern-house-spider': [1, WHY.southernRange],
            'black-widow': [1, WHY.widowSouthWest],
          },
        },
        {
          id: 'southeast',
          label: 'Southeast coast: Florida, South Carolina, North Carolina or Virginia',
          unlikely: ['recluse'],
          fits: {
            'brown-widow': [2, 'Brown widows are common in Florida and have spread up the Atlantic coast into South Carolina (UC IPM).'],
            'southern-house-spider': [2, 'Southern house spiders are common throughout Florida and much of the South (UF/IFAS).'],
            'green-lynx': [2, 'Green lynx spiders are common throughout Florida and across the southern United States (UF/IFAS).'],
            'orb-weaver': [2, 'Golden silk orb weavers live from Florida north to North Carolina (UF/IFAS), and joro spiders are established in the Carolinas (University of Georgia).'],
            'black-widow': [1, WHY.widowSouthWest],
          },
        },
        {
          id: 'pacific',
          label: 'Pacific Coast: California, Oregon or Washington',
          unlikely: ['recluse'],
          fits: {
            'funnel-weaver': [3, 'Hobo spiders live in the Pacific Northwest (UC IPM), and giant house spiders are common around homes in western Washington (Washington State University).'],
            'false-widow': [2, 'False black widows are extremely common in Pacific Coast homes (UC IPM).'],
            'black-widow': [1, 'The western black widow is the only black widow in the western United States and occurs in most of California (UC IPM).'],
            'brown-widow': [1, 'Brown widows are well established in Southern California (UC IPM).'],
            tarantula: [1, 'Tarantulas live in California (UC IPM).'],
            solifuge: [1, 'Windscorpions are common in California’s San Joaquin Valley (UC IPM).'],
          },
        },
        {
          id: 'mountain',
          label: 'Mountain West or northern Plains: Colorado, Utah, Idaho, Montana, Wyoming or the Dakotas',
          unlikely: ['recluse'],
          fits: {
            'funnel-weaver': [2, 'Hobo spiders range from British Columbia east to Montana, Wyoming and Colorado and south to northern Utah (UC IPM), and giant house spiders also live in Colorado homes (Colorado State University).'],
            'black-widow': [1, 'Western black widows live throughout the Rocky Mountains and are common in urban Colorado (UC IPM).'],
            solifuge: [1, 'Windscorpions live in the drier parts of Colorado below 7,500 feet (Colorado State University).'],
          },
        },
        {
          id: 'northeast',
          label: 'Northeast or upper Midwest: New England, New York, New Jersey, Pennsylvania, Maryland, Michigan, Wisconsin or Minnesota',
          unlikely: FAR_FROM_RECLUSES,
          fits: {
            'black-widow': [1, 'The northern black widow ranges from northern Florida to southeastern Canada and is most common in the northern part of that range (US Army Public Health Center).'],
          },
        },
        {
          id: 'canada',
          label: 'Canada',
          unlikely: FAR_FROM_RECLUSES,
          fits: {
            'black-widow': [1, 'Black widows live in southern Canada: the northern black widow in the southeast (US Army Public Health Center) and the western black widow in southern British Columbia, Alberta and Saskatchewan (Environment and Climate Change Canada).'],
            'funnel-weaver': [1, 'In Canada, hobo spiders live in British Columbia (UC IPM), and giant house spiders on the coast (Washington State University).'],
          },
        },
        { id: 'unsure', label: 'Not sure, or somewhere else', fits: {} },
      ],
    },
  ],
}

// ── Results ─────────────────────────────────────────────────────────────────────────────

export const CANDIDATES: Record<SpiderId, CandidateCopy> = {
  'house-spider': {
    name: 'Common house spider',
    short: 'a common house spider',
    summary: 'A small brown spider with a round, patterned abdomen that stays in a messy cobweb in a corner, a window or the basement.',
    confirm: [
      'It sits in a compact, messy cobweb and is almost never found away from it (University of Kentucky).',
      'The female’s body is about 1/4 inch (5 to 6 mm) long, with a dirty-white to brown abdomen marked with gray chevrons, and yellow legs ringed with darker bands (Penn State).',
      'Look for its egg sacs in the web: brown, papery and about 1/4 to 3/8 inch (6 to 9 mm) across (Penn State). It is not a medically important spider (Penn State).',
    ],
    links: [
      '/blog/house-spiders',
      { path: '/blog/spider-egg-sacs#what-does-a-common-house-spider-egg-sac-look-like', label: 'What a common house spider egg sac looks like' },
      { path: '/blog/brown-recluse-look-alikes#is-it-a-house-spider-or-a-brown-recluse', label: 'House spider or brown recluse?' },
    ],
  },
  'cellar-spider': {
    name: 'Cellar spider (daddy longlegs spider)',
    short: 'a cellar spider',
    summary: 'A pale spider with a tiny body on very long, thin legs, hanging in a loose web in a corner of a basement or ceiling.',
    confirm: [
      'Its body is only about 1/4 to 1/3 inch long, pale gray to light tan, on long, delicate legs, in a loose web near the ceiling or floor (University of Minnesota).',
      'Touch the web gently with a pencil: a threatened cellar spider vibrates in a fast circle until it is hard to see (Penn State).',
      'It has two body parts and spins a web. A long-legged animal with one oval body and no web is a harvestman, which is not a spider (UC Riverside; Missouri Dept. of Conservation).',
    ],
    links: [
      '/blog/daddy-long-legs',
      { path: '/blog/house-spiders#what-is-the-spider-with-very-long-thin-legs', label: 'The spider with very long, thin legs' },
      { path: '/blog/spider-egg-sacs#why-is-a-spider-holding-a-ball-of-eggs-in-its-jaws', label: 'Why a spider holds a ball of eggs in its jaws' },
    ],
  },
  'wolf-spider': {
    name: 'Wolf spider',
    short: 'a wolf spider',
    summary: 'A hairy brown or gray hunter, often striped, that runs fast across the ground or the floor and builds no web.',
    confirm: [
      'Check the eyes: two large eyes face forward above a row of four small ones (Missouri Dept. of Conservation). At night, a flashlight held beside your own eyes makes them shine back (Missouri Dept. of Conservation; UC IPM).',
      'A female carries her round egg sac attached to the rear of her body, and later carries her babies on her back (Missouri Dept. of Conservation).',
      'Its body is 1/4 to 1 inch long without the legs. It can bite if provoked, but the bites of North American wolf spiders are harmless (Missouri Dept. of Conservation).',
    ],
    links: ['/blog/wolf-spiders', { path: '/blog/brown-recluse-look-alikes#is-it-a-wolf-spider-or-a-brown-recluse', label: 'Wolf spider or brown recluse?' }],
  },
  'jumping-spider': {
    name: 'Jumping spider',
    short: 'a jumping spider',
    summary: 'A compact, often fuzzy spider with big front eyes that hunts by day on walls, windows and plants, and jumps.',
    confirm: [
      'Look at the face: two large eyes face forward and give it a flat-faced look (University of Kentucky).',
      'It moves in quick, jerky bursts, can jump many times its own length and builds no web (University of Minnesota; UC IPM).',
      'The common bold jumping spider is fuzzy, usually black, 1/4 to 3/4 inch long without the legs, often with white, orange or reddish spots and shiny green or blue jaws, and its bite is harmless (Missouri Dept. of Conservation).',
    ],
    links: ['/blog/jumping-spiders', '/blog/black-spiders', { path: '/blog/house-spiders#what-is-the-small-black-spider-that-jumps', label: 'The small black spider that jumps' }],
  },
  'orb-weaver': {
    name: 'Orb weaver (garden spider)',
    short: 'an orb weaver (garden spider)',
    summary: 'A web-sitting spider, often large and colorful, in a round, wheel-shaped web in a garden or on a porch, most noticeable in late summer.',
    confirm: [
      'The web is the test: orb weavers make the classic round web of circles and spokes (University of Minnesota), and in Kentucky’s urban spider chart no other common spider makes one (University of Kentucky).',
      'The yellow garden spider is yellow and black and rests head-down in the middle of a web about 2 feet across, with a zigzag band of silk (Missouri Dept. of Conservation). A huge web of golden silk in the Southeast may belong to a golden silk orb weaver (UF/IFAS) or a joro spider (University of Georgia).',
      'Orb weavers are not dangerous and are extremely unlikely to bite (University of Minnesota).',
    ],
    links: [
      '/blog/orb-weaver-spiders',
      '/blog/joro-spiders',
      { path: '/blog/spiders-in-texas#what-is-the-big-yellow-and-black-spider-in-texas-gardens', label: 'The big yellow and black garden spider' },
      { path: '/blog/spiders-in-florida#what-is-the-big-spider-with-the-golden-web', label: 'The big spider with the golden web' },
    ],
  },
  'grass-spider': {
    name: 'Grass spider (a funnel weaver)',
    short: 'a grass spider',
    summary: 'A fast, striped brown spider that waits in the funnel of a flat sheet web on lawns and low plants, and sometimes comes indoors in the fall.',
    confirm: [
      'Look for the web: a flat sheet with a funnel or tunnel at one side (Penn State), easiest to see on a dewy morning (UC IPM).',
      'It is brown with lengthwise gray or tan stripes, and two small, finger-like spinnerets stick out from the tip of its abdomen (University of Kentucky).',
      'It is fast and shy, so very few people are bitten; reported bites caused pain, swelling, redness and itching, without serious effects (Penn State).',
    ],
    links: [
      '/blog/grass-spiders',
      { path: '/blog/brown-recluse-look-alikes#how-do-you-tell-a-grass-spider-from-a-brown-recluse', label: 'Grass spider or brown recluse?' },
      { path: '/blog/wolf-spiders#what-other-spiders-look-like-wolf-spiders', label: 'Grass spider or wolf spider?' },
    ],
  },
  'funnel-weaver': {
    name: 'House funnel weaver (giant house, hobo or barn funnel weaver)',
    short: 'a house funnel weaver (giant house spider, hobo spider or barn funnel weaver)',
    summary: 'A big, long-legged brown spider that builds sheet webs with a funnel in basements, garages and window wells; wandering males run across floors.',
    confirm: [
      'Look for its web near where you found it: a flat sheet of silk with a funnel-shaped retreat where the spider waits (Washington State University; Colorado State University).',
      'Which of the three it is cannot be told by eye: telling a hobo spider from its relatives takes a microscope and an expert (UC IPM; Colorado State University).',
      'None of them is considered dangerous (Colorado State University): the giant house spider’s bite is not known to harm people (Washington State University), and the hobo spider is no longer considered of probable medical importance (UC IPM).',
    ],
    links: [
      '/blog/hobo-spiders',
      { path: '/blog/house-spiders#what-are-the-big-spiders-running-across-the-floor', label: 'The big spiders running across the floor' },
      { path: '/blog/brown-recluse-look-alikes#is-it-a-hobo-spider-or-a-brown-recluse', label: 'Hobo spider or brown recluse?' },
    ],
  },
  'yellow-sac': {
    name: 'Yellow sac spider',
    short: 'a yellow sac spider',
    summary: 'A small, pale yellow spider with dark jaws that roams walls and ceilings at night and hides by day in a silk sac in a corner.',
    confirm: [
      'Look for its daytime silk sac in the corner where a wall meets the ceiling, or behind shelves and pictures (UC IPM).',
      'It is pale yellow to cream, sometimes slightly greenish, with dark brown jaws and leg tips (Penn State), and 1/5 to 2/5 inch long (University of Minnesota).',
      'Its bite is usually painful and burning at first, with redness, swelling and itching, but normally causes no serious harm (Penn State).',
    ],
    links: [
      '/blog/yellow-sac-spiders',
      { path: '/blog/house-spiders#what-is-the-pale-spider-on-the-wall-or-ceiling', label: 'The pale spider on the wall or ceiling' },
      { path: '/blog/brown-recluse-look-alikes#how-do-you-tell-a-yellow-sac-spider-from-a-brown-recluse', label: 'Yellow sac spider or brown recluse?' },
    ],
  },
  'false-widow': {
    name: 'False widow (false black widow)',
    short: 'a false widow',
    summary: 'A shiny, chocolate-brown spider with a round body like a widow’s but no red hourglass, common inside homes.',
    confirm: [
      'Check the underside in a photo: a false black widow never has red markings (UC IPM).',
      'It is chocolate brown, about 3/8 inch (10 mm) long, and thrives indoors, in washrooms, cupboards and under appliances, furniture and cabinets (UC IPM).',
      'Its bite is mild: burning pain at first, then minor swelling, much like a yellowjacket sting (UC IPM).',
    ],
    caution:
      'A shiny, dark spider with a round body can still be a black widow: the red hourglass is on her underside and can be faint (UC IPM). Do not touch it until you have checked.',
    links: [
      '/blog/false-widow-spiders',
      { path: '/blog/black-spiders#is-a-shiny-black-spider-in-the-house-a-false-widow', label: 'Is a shiny black spider in the house a false widow?' },
      { path: '/blog/house-spiders#is-a-shiny-dark-spider-in-the-house-a-black-widow', label: 'Is a shiny dark spider in the house a black widow?' },
    ],
  },
  'black-widow': {
    name: 'Black widow',
    short: 'a black widow',
    summary: 'A shiny black spider with a round abdomen and a red hourglass underneath, in a messy web low down in a sheltered spot. Its bite needs medical care.',
    confirm: [
      'Check the underside from a safe distance, in a photo or with a flashlight: the adult female has a red or orange hourglass there (UC IPM), and in the northern black widow it is often split in two, with red spots on the back (Missouri Dept. of Conservation).',
      'Males and young widows can look different: western ones are tan or gray with white stripes (UC IPM), and males elsewhere usually have faint red or white spots on top (Missouri Dept. of Conservation). Only larger young females and adult females can bite through skin (UC IPM).',
      'Its web is an irregular, tough, sticky tangle, usually within 3 feet of the ground (UC IPM), in woodpiles, rock piles, garages and sheds (University of Kentucky).',
    ],
    caution:
      'Do not touch it. If someone is bitten, wash the bite with soap and water, put a cold, damp cloth on it (CDC) and get medical care right away (Mayo Clinic). US Poison Help: 1-800-222-1222.',
    links: [
      '/blog/black-widow-spiders',
      '/blog/black-widow-bite',
      { path: '/blog/black-spiders#is-it-a-black-widow', label: 'Is it a black widow? How to check' },
      { path: '/blog/venomous-spiders#how-do-you-recognize-a-black-widow', label: 'How to recognize a black widow' },
    ],
  },
  harvestman: {
    name: 'Harvestman (daddy longlegs): not a spider',
    short: 'a harvestman (daddy longlegs), which is not a spider',
    summary: 'A spider relative with one oval body and very long legs. It has two eyes, makes no silk and has no venom.',
    confirm: [
      'Its body is one simple oval with no waist, and it has only two eyes (Missouri Dept. of Conservation). A true spider has two body parts (UC IPM).',
      'It never builds a web, because it has no silk glands. The long-legged cellar spiders that share the name weave messy webs in the upper corners of basements (Missouri Dept. of Conservation).',
      'It is harmless: harvestmen have no venom glands, and their mouthparts are too small to bite people (Missouri Dept. of Conservation; UC Riverside).',
    ],
    links: [
      '/blog/daddy-long-legs',
      { path: '/blog/venomous-spiders#are-hobo-spiders-and-daddy-longlegs-dangerous', label: 'Are daddy longlegs dangerous?' },
      { path: '/blog/house-spiders#what-is-the-spider-with-very-long-thin-legs', label: 'The long-legged spider in the basement (a cellar spider)' },
    ],
  },
  'fishing-spider': {
    name: 'Fishing spider',
    short: 'a fishing spider',
    summary: 'A very large, hairy brown spider found near water, on rocks, logs and tree trunks, that can run on water. It builds no web.',
    confirm: [
      'Size is the first clue: with legs spread, some fishing spiders cover as much as 4 inches (University of Minnesota).',
      'It can skate across water and dive under it, though some turn up far from water (University of Minnesota).',
      'A female carries her egg sac in her jaws, not at the rear like a wolf spider, and lacks the wolf spider’s two big forward-facing eyes (Missouri Dept. of Conservation). It can give a painful bite but is not considered dangerous (University of Kentucky).',
    ],
    links: ['/blog/fishing-spiders', { path: '/blog/wolf-spiders#what-other-spiders-look-like-wolf-spiders', label: 'Fishing spider or wolf spider?' }],
  },
  recluse: {
    name: 'Brown recluse (or another recluse)',
    short: 'a brown recluse or another recluse',
    summary: 'A plain tan to dark brown spider, about the size of a quarter with its legs out, that hides in clutter, boxes and closets. Its bite can need medical care.',
    confirm: [
      'A recluse has all five of these: six eyes in three pairs, a plain abdomen with fine hairs, no spines on the legs, legs of one even color, and a body no more than 3/8 inch long. The violin mark alone is not a reliable sign (UC IPM).',
      'Check where you are. Brown recluses are established in 16 central and southern states (Penn State), and other recluses live in the Southwest (UC IPM). Elsewhere, almost no spider sent to an expert as a recluse was one (Vetter, Journal of Medical Entomology), and there are none in Canada (Canadian Family Physician; UC IPM).',
      'Recluses hide by day, in storage boxes, closets, attics and shoes, and come out at night to hunt (UC IPM; CDC).',
    ],
    caution:
      'Do not handle it. About 90% of brown recluse bites heal on their own, but about 10% cause tissue damage and scarring, and rarely a bite causes serious illness, mostly in children (Penn State; UC IPM). If you think a recluse bit someone, get medical care (Mayo Clinic).',
    links: [
      '/blog/brown-recluse',
      '/blog/brown-recluse-look-alikes',
      { path: '/blog/venomous-spiders#where-do-brown-recluses-live', label: 'Where brown recluses live' },
      '/blog/brown-recluse-bite',
    ],
  },
  'parson-spider': {
    name: 'Parson spider',
    short: 'a parson spider',
    summary: 'A dark ground spider with a white band on its abdomen that runs fast across floors at night, often indoors in the fall.',
    confirm: [
      'Look for the white band running down the abdomen (University of Minnesota) and a small white spot just above the spinnerets (Penn State).',
      'It is about 1/2 inch long, hunts at night without a web and runs fast in a zigzag (University of Minnesota; Penn State).',
      'Its bite can be painful if it is trapped in clothing or bedding, but it is generally not considered medically important (Penn State; University of Minnesota).',
    ],
    links: [
      { path: '/blog/black-spiders#what-is-the-black-spider-with-white-spots', label: 'The black spider with white spots or a white band' },
      { path: '/blog/black-spiders#how-do-you-tell-which-black-spider-you-have', label: 'How to tell which black spider you have' },
    ],
  },
  'woodlouse-spider': {
    name: 'Woodlouse spider',
    short: 'a woodlouse spider',
    summary: 'A red-orange spider with a pale grayish rear and big, forward-pointing fangs, found under rocks and logs and sometimes indoors. It builds no web.',
    confirm: [
      'The colors are distinctive (University of Minnesota): a reddish-orange to reddish-brown front half, orange legs and a dirty-white to gray abdomen (Penn State; University of Kentucky).',
      'Its fangs are large and point forward, and it has six eyes, not eight (University of Minnesota).',
      'It hunts sowbugs and pill bugs at night under rocks and debris (University of Minnesota). A bite can leave a small, very itchy red spot, with no wider effects (Penn State).',
    ],
    links: [
      '/blog/woodlouse-spiders',
      { path: '/blog/house-spiders#what-is-the-red-spider-with-big-fangs-in-the-basement', label: 'The red spider with big fangs in the basement' },
      { path: '/blog/brown-recluse-look-alikes#is-a-woodlouse-spider-a-brown-recluse', label: 'Is a woodlouse spider a brown recluse?' },
    ],
  },
  'brown-widow': {
    name: 'Brown widow',
    short: 'a brown widow',
    summary: 'A mottled tan, brown and gray widow with an orange hourglass underneath and spiky egg sacs, common outdoors in the South and Southern California.',
    confirm: [
      'Look for the egg sacs: covered in little silk spikes, like a big pollen grain, they confirm brown widows even when the spider is not seen (UC IPM).',
      'The female’s body is about 3/8 inch (10 mm) long and a mottled mix of tan, brown and gray (UC IPM), with an orange-red mark on the underside (US Army Public Health Center).',
      'It lives outdoors, on fences and under plastic patio furniture, and is almost never found in homes (UC IPM).',
    ],
    caution:
      'Its bite is much milder than a black widow’s, but one verified bite in the US needed hospital care (UC IPM). Do not touch it, and get medical care after any widow bite (Mayo Clinic).',
    links: [
      '/blog/brown-widow-spiders',
      { path: '/blog/venomous-spiders#what-does-a-brown-widow-look-like-and-is-it-as-dangerous', label: 'What a brown widow looks like, and how dangerous it is' },
      { path: '/blog/spider-egg-sacs#which-spider-makes-an-egg-sac-with-spikes', label: 'The spiky egg sac of the brown widow' },
    ],
  },
  'southern-house-spider': {
    name: 'Southern house spider',
    short: 'a southern house spider',
    summary: 'A southern spider: the dark gray female hides in a crack inside a flat, woolly web on the house, and the tan, long-legged male is often mistaken for a brown recluse.',
    confirm: [
      'Look for the web: a flat, tangled web of woolly silk on the wall around a crack, with the female hiding in the crack by day (UF/IFAS).',
      'Females are charcoal gray and 1/2 to 3/4 inch long; males are khaki to amber, with long, slender legs and palps (UF/IFAS).',
      'A male has eight eyes clumped together, not a recluse’s six in pairs (UC Riverside). Southern house spiders are not known to have a dangerous bite (UF/IFAS).',
    ],
    links: [
      { path: '/blog/brown-recluse-look-alikes#is-it-a-house-spider-or-a-brown-recluse', label: 'Southern house spider or brown recluse?' },
      { path: '/blog/spiders-in-florida#what-spider-makes-the-thick-web-on-the-house-wall', label: 'The spider that makes the thick web on the house wall' },
    ],
  },
  'green-lynx': {
    name: 'Green lynx spider',
    short: 'a green lynx spider',
    summary: 'A bright green hunting spider with long, spiny legs that leaps among shrubs and flowers in the southern United States.',
    confirm: [
      'It is a bright, see-through green, often with red spots, and its legs carry very long black spines (UF/IFAS).',
      'It builds no catching web: it hunts by day, leaping among low plants (UF/IFAS).',
      'A female guards her egg sac fiercely, but the spider very seldom bites people (UF/IFAS).',
    ],
    links: [
      { path: '/blog/spiders-in-florida#what-is-the-bright-green-spider-on-the-shrubs', label: 'The bright green spider on the shrubs' },
      { path: '/blog/spiders-in-texas#what-is-the-bright-green-spider-on-texas-plants', label: 'The bright green spider on Texas plants' },
    ],
  },
  tarantula: {
    name: 'Tarantula',
    short: 'a tarantula',
    summary: 'A very large, hairy brown spider of the Southwest and south-central US. The ones seen out in the open are usually males looking for mates.',
    confirm: [
      'Size is the first clue: Texas tarantulas measure up to 6 inches across the legs (Texas A&M AgriLife).',
      'Check where you are: tarantulas live as far east as Missouri, Arkansas and Louisiana (University of Arkansas), across Texas (Texas A&M AgriLife) and in Arizona and California (University of Arizona; UC IPM).',
      'A wandering tarantula is usually a male looking for a female: from May to August in Texas (Texas A&M AgriLife), from August to November in Arkansas (University of Arkansas). Its bite feels like a bee sting and its hairs can irritate skin, so leave it alone (Texas A&M AgriLife).',
    ],
    links: [
      '/blog/tarantulas',
      { path: '/blog/spiders-in-texas#are-texas-tarantulas-dangerous', label: 'Are tarantulas dangerous?' },
      { path: '/blog/spiders-in-california#does-california-have-tarantulas-and-trapdoor-spiders', label: 'Tarantulas in California' },
    ],
  },
  solifuge: {
    name: 'Camel spider (windscorpion): not a spider',
    short: 'a camel spider (windscorpion), which is not a true spider',
    summary: 'A fast, yellowish-brown arachnid of dry western and southwestern areas, with huge pincer-like jaws and leg-like palps that make it look ten-legged. It has no venom.',
    confirm: [
      'Look at the front: huge, pincer-like jaws and a pair of leg-like palps (UC IPM) that look like a fifth pair of legs (Colorado State University).',
      'It is not a spider: it has no venom glands and cannot spin silk (UC IPM).',
      'It runs fast, mostly at night, in dry parts of the West and Southwest (UC IPM; Colorado State University). It can bite if handled, but cannot seriously harm people (UC IPM).',
    ],
    links: ['/blog/camel-spiders', '/blog/what-does-a-spider-bite-look-like'],
  },
}

export const UNSURE: CandidateCopy = {
  name: 'Not clear from these answers',
  short: 'not clear',
  summary: 'Your answers do not point clearly to one spider. That is common: many spiders look alike, and some can only be told apart under a microscope.',
  confirm: [
    'Take a sharp photo from above and one of the face, with a coin or ruler beside the spider, without touching it. CDC advises identifying a spider only if you can do so safely.',
    'In the photo, check the eyes (six in pairs, or eight), the legs (plain, banded or spiny) and the web it came from: those clues help sort spiders (UC IPM; UC Riverside).',
    'For an expert ID in the US, try your county Cooperative Extension office (UC IPM sends Californians to theirs); keep the spider whole, because a crushed one is hard to identify (UC IPM). Photo sites such as BugGuide and iNaturalist let naturalists suggest an ID.',
  ],
  links: ['/learn/spiders', '/blog/house-spiders', '/blog/brown-recluse-look-alikes', '/blog/black-spiders', '/blog/venomous-spiders'],
}

/** Warnings raised by one answer, shown at the top of the result. */
export const FLAGS: Record<SpiderFlag, { title: string; text: string }> = {
  widow: {
    title: 'It could be a widow: do not touch it',
    text: 'A shiny black spider with a round body may be a black widow. The female’s red or orange hourglass is on her underside and can be split or faint, and the northern black widow often has red spots on her back (UC IPM; Missouri Dept. of Conservation). Most spider bites happen when a spider is trapped or touched (CDC), so check it from a distance or in a photo.',
  },
  recluse: {
    title: 'Check two things before you worry about a brown recluse',
    text: 'First the spider: the violin mark alone does not identify a recluse, but a recluse always has six eyes in three pairs, plain legs without spines and a plain abdomen (UC IPM). Then the place: brown recluses live from southeastern Nebraska to southwestern Ohio and south through Texas to north Georgia, and other recluses live in the desert Southwest (UC IPM). Elsewhere, and anywhere in Canada, a spider that looks like one is almost always something else (Vetter, Journal of Medical Entomology; Canadian Family Physician). Do not handle it either way.',
  },
  bitten: {
    title: 'If a spider bit someone',
    text: 'Wash the bite with soap and water, put a cold, damp cloth or wrapped ice on it, and raise it if you can (CDC). Get medical care right away if a widow or recluse may have bitten, if you are not sure what it was, or if there is severe pain, stomach cramping, a growing wound, trouble breathing or swallowing, or spreading redness (Mayo Clinic). Identifying the spider aids medical treatment if it can be done safely (CDC): a photo is the safest way. US Poison Help: 1-800-222-1222.',
  },
}

/** The safety box: shown with every result and on the page. Sources are named on the page. */
export const SAFETY = {
  dangerous: {
    title: 'The few spiders to leave alone',
    items: [
      'Black widows: shiny black and round, with a red or orange hourglass on the female’s underside, often split in the northern black widow (UC IPM; Missouri Dept. of Conservation)',
      'Brown widows: mottled tan and brown, with an orange-red mark underneath and spiky egg sacs; their bite is milder (UC IPM; US Army Public Health Center)',
      'Recluses: plain tan to dark brown, with six eyes in three pairs and plain legs without spines, in the central and southern US and the desert Southwest (UC IPM)',
      'Never pick one up. A photo is the safest way to get an ID; to keep one for an expert, trap it under a jar and slide paper underneath (UC IPM)',
    ],
  },
  care: {
    title: 'After a bite, get medical care right away if',
    items: [
      'A widow or a recluse may have bitten, or you are not sure what bit',
      'There is severe pain, stomach cramping or a wound that keeps growing',
      'There is trouble breathing or swallowing',
      'Redness or red streaks spread from the bite',
    ],
  },
} as const
