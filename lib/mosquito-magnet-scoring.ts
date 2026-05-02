// Mosquito Magnet Quiz — Scoring Engine
// Backed by real entomological research: Smith et al. (2002) blood type;
// Verhulst et al. (2011) skin microbiome; Lefèvre et al. (2010) beer/EtOH;
// CDC reviews on CO2/lactic acid attractant cues.

export type BloodType = 'O' | 'A' | 'B' | 'AB' | 'unknown'
export type BodyType = 'slim' | 'average' | 'larger'
export type ExerciseFrequency = 'daily' | 'weekly' | 'rarely'
export type Temperature = 'hot' | 'average' | 'cold'
export type AlcoholHabits = 'often' | 'sometimes' | 'rarely'
export type DuskExposure = 'hours' | 'thirty-min' | 'almost-never'
export type ClothingPreference = 'dark' | 'mixed' | 'light'
export type FragranceUse = 'heavy' | 'some' | 'minimal'

export interface MagnetAnswers {
  bloodType: BloodType | null
  bodyType: BodyType | null
  exercise: ExerciseFrequency | null
  temperature: Temperature | null
  alcohol: AlcoholHabits | null
  pregnant: boolean | null
  duskExposure: DuskExposure | null
  clothing: ClothingPreference | null
  fragrance: FragranceUse | null
}

export interface MagnetResult {
  score: number
  tier: 'severe' | 'high' | 'moderate' | 'low'
  tierLabel: string
  tierEmoji: string
  tierColor: 'red' | 'orange' | 'amber' | 'emerald'
  tierTagline: string
  topDrivers: { driver: string; weight: number; explanation: string }[]
  scienceExplanation: string
  diyTips: string[]
  yardPivot: string
}

const BLOOD_TYPE_WEIGHTS: Record<BloodType, number> = { O: 16, B: 11, A: 6, AB: 3, unknown: 7 }
const BODY_TYPE_WEIGHTS: Record<BodyType, number> = { larger: 10, average: 5, slim: 2 }
const EXERCISE_WEIGHTS: Record<ExerciseFrequency, number> = { daily: 12, weekly: 6, rarely: 0 }
const TEMP_WEIGHTS: Record<Temperature, number> = { hot: 10, average: 5, cold: 0 }
const ALCOHOL_WEIGHTS: Record<AlcoholHabits, number> = { often: 6, sometimes: 3, rarely: 0 }
const DUSK_WEIGHTS: Record<DuskExposure, number> = { hours: 12, 'thirty-min': 6, 'almost-never': 0 }
const CLOTHING_WEIGHTS: Record<ClothingPreference, number> = { dark: 8, mixed: 4, light: 0 }
const FRAGRANCE_WEIGHTS: Record<FragranceUse, number> = { heavy: 5, some: 2, minimal: 0 }

export function scoreMagnet(answers: MagnetAnswers): MagnetResult {
  let score = 10 // baseline (everyone gets bitten sometimes)

  const drivers: { driver: string; weight: number; explanation: string }[] = []

  if (answers.bloodType) {
    const w = BLOOD_TYPE_WEIGHTS[answers.bloodType]
    score += w
    if (w >= 11) drivers.push({
      driver: `Blood type ${answers.bloodType}`,
      weight: w,
      explanation: answers.bloodType === 'O'
        ? 'Type O blood is the #1 mosquito magnet — Smith et al. (2002) found Type O attracted mosquitoes 2x more than Type A. The chemicals in your skin signal blood type and Type O signals "good blood meal" to a mosquito\'s sensors.'
        : 'Type B blood ranks second-most-attractive after Type O. The skin secretions associated with B-type blood contain compounds mosquitoes find more locatable than A or AB types.',
    })
  }
  if (answers.bodyType) {
    const w = BODY_TYPE_WEIGHTS[answers.bodyType]
    score += w
    if (w >= 8) drivers.push({
      driver: 'Larger body frame',
      weight: w,
      explanation: 'Bigger bodies = more CO2 exhaled = larger detectability radius. Mosquitoes detect CO2 plumes from up to 50 metres away. A taller/heavier person produces 30-40% more CO2 than a smaller person at rest, making you 30-40% more findable.',
    })
  }
  if (answers.exercise) {
    const w = EXERCISE_WEIGHTS[answers.exercise]
    score += w
    if (w >= 8) drivers.push({
      driver: 'Daily outdoor exercise',
      weight: w,
      explanation: 'Exercise releases lactic acid through skin sweat, which is one of the strongest mosquito attractants — even more powerful than CO2 in close range. Post-workout for 30-60 minutes you\'re measurably more attractive than at rest.',
    })
  }
  if (answers.temperature) {
    const w = TEMP_WEIGHTS[answers.temperature]
    score += w
    if (w >= 8) drivers.push({
      driver: 'Higher body temperature',
      weight: w,
      explanation: 'Mosquitoes detect heat signatures with infrared-sensitive receptors on their antennae. People who run warmer (basal metabolic rate, hyperthyroid, post-meal warmth) appear "brighter" to a mosquito\'s heat-detection system.',
    })
  }
  if (answers.alcohol === 'often') {
    score += ALCOHOL_WEIGHTS.often
    drivers.push({
      driver: 'Regular beer/cocktail with sunset',
      weight: ALCOHOL_WEIGHTS.often,
      explanation: 'Lefèvre et al. (2010) showed alcohol consumption — particularly beer — measurably increases mosquito landings within 15 minutes of drinking. The mechanism is debated (changes in skin chemistry, slight CO2 increase, ethanol metabolites in sweat) but the effect is real.',
    })
  } else if (answers.alcohol) {
    score += ALCOHOL_WEIGHTS[answers.alcohol]
  }
  if (answers.pregnant) {
    score += 18
    drivers.push({
      driver: 'Pregnancy',
      weight: 18,
      explanation: 'Pregnant women are bitten 2x more than non-pregnant women — Lindsay et al. (2000). Pregnancy raises body temperature ~0.5°C and increases CO2 exhalation by ~21%. Both signal "high-quality target" to a mosquito\'s sensors. (This is also why pregnant mothers in malaria-endemic regions need extra protection.)',
    })
  }
  if (answers.duskExposure) {
    const w = DUSK_WEIGHTS[answers.duskExposure]
    score += w
    if (w >= 8) drivers.push({
      driver: 'Hours outdoors at dusk',
      weight: w,
      explanation: 'Most GTA mosquito species (Culex pipiens, Aedes vexans) are crepuscular — they hunt most aggressively in the 2-hour window around sunset. Spending that window outdoors means you\'re exposed during peak biting hours regardless of any other factor.',
    })
  }
  if (answers.clothing) {
    const w = CLOTHING_WEIGHTS[answers.clothing]
    score += w
    if (w >= 5) drivers.push({
      driver: 'Dark clothing outdoors',
      weight: w,
      explanation: 'Mosquitoes use visual contrast against backgrounds to locate hosts. Dark colours (black, navy, dark red) absorb light and contrast strongly against typical evening environments. Light colours (white, beige, light pastels) blend in. Switching to lighter clothing reduces visual detection by 30-40%.',
    })
  }
  if (answers.fragrance) {
    const w = FRAGRANCE_WEIGHTS[answers.fragrance]
    score += w
    if (w >= 4) drivers.push({
      driver: 'Heavy lotion/fragrance use',
      weight: w,
      explanation: 'Floral and fruit-derived fragrances mimic plant nectar volatiles, which adult mosquitoes feed on (yes — most mosquito feeding is plant nectar; only females need blood for egg development). Heavy lotion/perfume application essentially marks you as a flower in mosquito-vision.',
    })
  }

  // Cap and clamp
  score = Math.min(99, Math.max(15, Math.round(score)))

  // Tier
  let tier: MagnetResult['tier']
  let tierLabel: string
  let tierEmoji: string
  let tierColor: MagnetResult['tierColor']
  let tierTagline: string

  if (score >= 75) {
    tier = 'severe'
    tierLabel = 'CERTIFIED MOSQUITO MAGNET'
    tierEmoji = '🦟'
    tierColor = 'red'
    tierTagline = 'You\'re basically a walking buffet. Mosquitoes detect you from across the yard.'
  } else if (score >= 55) {
    tier = 'high'
    tierLabel = 'ABOVE AVERAGE TARGET'
    tierEmoji = '⚠️'
    tierColor = 'orange'
    tierTagline = 'You get bitten more than the average person. Multiple factors are signalling "good meal" to nearby mosquitoes.'
  } else if (score >= 35) {
    tier = 'moderate'
    tierLabel = 'AVERAGE BAIT'
    tierEmoji = '🎯'
    tierColor = 'amber'
    tierTagline = 'You attract about as many mosquitoes as the typical person. Not a magnet — but you\'re still not invisible.'
  } else {
    tier = 'low'
    tierLabel = 'LOW ATTRACTION RISK'
    tierEmoji = '🍃'
    tierColor = 'emerald'
    tierTagline = 'You\'re among the lucky 15-20% of people that mosquitoes find genuinely less appealing. (We hate you a little.)'
  }

  // Sort drivers by weight, take top 3
  const topDrivers = drivers.sort((a, b) => b.weight - a.weight).slice(0, 3)

  // Science explanation
  const scienceExplanation = `Mosquitoes use a hierarchy of cues to find a blood meal: CO2 (detectable up to 50m away), lactic acid in skin sweat, body heat, visual contrast, and skin microbiome chemistry. They don't pick targets randomly — peer-reviewed research shows clear preferences based on the factors above. The good news: knowing what makes you attractive lets you reduce or counter each one specifically.`

  // DIY tips based on top drivers
  const diyTips: string[] = []
  if (topDrivers.some((d) => d.driver.includes('Blood type'))) diyTips.push('Blood type isn\'t something you can change — but you CAN counter it with picaridin or DEET 30% applied to skin during outdoor time.')
  if (topDrivers.some((d) => d.driver.includes('exercise'))) diyTips.push('Shower within 30 minutes of outdoor exercise — washing off lactic acid drops your attractiveness back to baseline within 5-10 minutes.')
  if (topDrivers.some((d) => d.driver.includes('Pregnancy'))) diyTips.push('Pregnancy attractor effect can\'t be reduced — but Health Canada-approved picaridin 20% (safe in pregnancy) provides 5-8 hours of effective skin protection.')
  if (topDrivers.some((d) => d.driver.includes('clothing'))) diyTips.push('Switch evening outdoor wear to light colours — white, beige, light pastels. Reduces visual detection 30-40%.')
  if (topDrivers.some((d) => d.driver.includes('alcohol'))) diyTips.push('If you\'re drinking outside, double up on repellent application — apply once 30 minutes before drinking and reapply after 90 minutes.')
  if (topDrivers.some((d) => d.driver.includes('dusk'))) diyTips.push('Add a Thermacell device to your patio for the dusk window — creates a 4.5m repellent zone around your seating area.')
  if (topDrivers.some((d) => d.driver.includes('fragrance'))) diyTips.push('Skip floral lotions/perfumes during outdoor evenings — switch to unscented or use eucalyptus-based products which actually repel mosquitoes.')
  // Always include
  diyTips.push('For active outdoor use: 20% picaridin or 30% DEET — both effective for 5-8 hours, both Health Canada-approved.')

  // Yard pivot
  const yardPivot = score >= 55
    ? 'Even with personal repellent, you\'ll still attract mosquitoes from up to 50 metres away. Personal protection is half the equation — the other half is making sure the mosquitoes don\'t exist near you in the first place. The single highest-leverage move for high-magnet people is reducing the mosquito population AROUND your home, so fewer of them are detecting you to begin with.'
    : 'Even though you\'re not a major attractor, mosquitoes biting your kids, partner, or guests will still ruin your evenings. The best step for low-magnet people is making sure the people you\'re hosting don\'t get bitten — by reducing the mosquito population around your yard.'

  return {
    score,
    tier,
    tierLabel,
    tierEmoji,
    tierColor,
    tierTagline,
    topDrivers,
    scienceExplanation,
    diyTips,
    yardPivot,
  }
}
