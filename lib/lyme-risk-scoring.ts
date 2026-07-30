// Lyme Disease Risk Calculator — Scoring Engine
// Based on Public Health Ontario tick surveillance data + CDC guidance.
// Assesses household-level Lyme exposure risk in the GTA context.

import { IN_SERVICE_AREA, CITY_FEATURES, NEIGHBOURHOOD_FEATURES } from './service-area-features'

export type DogWalking = 'daily-trails' | 'daily-streets' | 'occasional' | 'no-dog'
export type KidsOutdoor = 'every-day' | 'few-times-week' | 'rarely' | 'no-kids'
export type HikingHabits = 'weekly' | 'monthly' | 'rarely' | 'never'
export type TickChecks = 'every-time' | 'sometimes' | 'never' | 'no-exposure'
export type PastExposure = 'multiple' | 'one' | 'family-member' | 'never'
export type YardFeatures = 'wooded' | 'leafy' | 'open' | 'unknown'

export interface LymeAnswers {
  city: string | null
  neighbourhood: string | null
  postalCode: string | null
  formattedAddress: string | null
  dogWalking: DogWalking | null
  kidsOutdoor: KidsOutdoor | null
  hiking: HikingHabits | null
  tickChecks: TickChecks | null
  pastExposure: PastExposure | null
  yardFeatures: YardFeatures | null
}

export interface LymeResult {
  score: number
  tier: 'severe' | 'high' | 'moderate' | 'low'
  tierLabel: string
  tierColor: 'red' | 'orange' | 'amber' | 'emerald'
  cityName: string | null
  isInServiceArea: boolean
  /** True when the city contains or borders an area PHO has mapped as a blacklegged tick risk area.
   *  This is BuzzSkito's own proximity heuristic, not a Public Health Ontario classification. */
  isNearMappedRiskArea: boolean
  driverList: string[]
  doctorAdvice: string
  prevention: string[]
  yardPivot: string
}

// Cities that contain or border terrain Public Health Ontario has mapped as blacklegged tick
// risk area (Oak Ridges Moraine, Rouge watershed, Niagara Escarpment, Hamilton conservation
// lands). This grouping is our own, built from the published risk-area map — PHO does not
// classify municipalities, and risk areas do not follow municipal boundaries.
const CITIES_BORDERING_MAPPED_RISK_AREAS = new Set(['caledon', 'king city', 'richmond hill', 'markham', 'scarborough', 'burlington', 'halton hills', 'milton', 'hamilton'])

export function scoreLyme(a: LymeAnswers): LymeResult {
  let score = 15 // baseline GTA exposure
  const drivers: string[] = []
  const cityKey = a.city?.toLowerCase().trim() || ''
  const isInServiceArea = IN_SERVICE_AREA.has(cityKey)
  const isNearMappedRiskArea = CITIES_BORDERING_MAPPED_RISK_AREAS.has(cityKey)

  // Geographic baseline
  if (isNearMappedRiskArea) {
    score += 25
    drivers.push(`${a.city} contains or borders terrain that Public Health Ontario has mapped as blacklegged tick risk area — the Oak Ridges Moraine, Rouge watershed, Niagara Escarpment or Hamilton conservation lands. PHO maps these as geographic areas, not by city, so check the Ontario Vector-Borne Disease Tool for your own address.`)
  } else if (isInServiceArea) {
    score += 12
    drivers.push(`${a.city || 'Your area'} sits outside the areas we flag as bordering mapped tick habitat, but blacklegged ticks are carried into new areas by deer and by migratory birds every spring, so a bite is still possible. Check the Ontario Vector-Borne Disease Tool for the current risk-area map covering your address.`)
  }

  // Yard features
  if (a.yardFeatures === 'wooded') {
    score += 18
    drivers.push('Wooded lots have 2-3x higher tick burden than open lawns. Mature trees support the small-mammal hosts (deer, rodents) that ticks ride into yards on.')
  } else if (a.yardFeatures === 'leafy') {
    score += 10
    drivers.push('Leaf litter is the #1 tick habitat in southern Ontario — even a small unraked perimeter on a suburban lot can host hundreds of ticks.')
  } else if (a.yardFeatures === 'open') {
    score += 2
  } else {
    score += 5
  }

  // Dog walking
  if (a.dogWalking === 'daily-trails') {
    score += 18
    drivers.push('Daily dog walks on trails or off-leash areas are the single most common tick exposure path for GTA households. Dogs sweep ticks up from grass and brush, then bring them home onto upholstery and beds.')
  } else if (a.dogWalking === 'daily-streets') {
    score += 5
  } else if (a.dogWalking === 'occasional') {
    score += 8
  }

  // Kids outdoor
  if (a.kidsOutdoor === 'every-day') {
    score += 12
    drivers.push('Daily kid play in grass, gardens, leaf piles, or wooded yard areas significantly raises household exposure risk. Kids notice tick bites less than adults and check less thoroughly.')
  } else if (a.kidsOutdoor === 'few-times-week') {
    score += 6
  }

  // Hiking
  if (a.hiking === 'weekly') {
    score += 12
    drivers.push('Weekly hiking on Bruce Trail, Don Valley trails, Rouge Park, or any GTA conservation area means ongoing exposure to actively-questing tick populations during the May-September peak.')
  } else if (a.hiking === 'monthly') {
    score += 6
  }

  // Tick checks (protective factor)
  if (a.tickChecks === 'every-time') {
    score -= 8 // protective
    drivers.push('You consistently do tick checks after outdoor activities — this is the single most effective Lyme prevention behaviour. Ticks need 24-36 hours attached to transmit Lyme; finding them early prevents transmission.')
  } else if (a.tickChecks === 'never' && a.pastExposure !== 'never') {
    score += 8
    drivers.push('Inconsistent tick-checking combined with high exposure activities is a meaningful gap. Ticks need 24-36 hours of attachment to transmit Lyme — most cases happen because the tick wasn\'t found in time.')
  }

  // Past exposure
  if (a.pastExposure === 'multiple') {
    score += 12
    drivers.push('Multiple past tick encounters on yourself or family members indicates this is a recurring exposure pattern, not a one-time event. Pattern won\'t self-correct without changes.')
  } else if (a.pastExposure === 'one') {
    score += 5
  } else if (a.pastExposure === 'family-member') {
    score += 8
  }

  score = Math.min(95, Math.max(15, Math.round(score)))

  let tier: LymeResult['tier']
  let tierLabel: string
  let tierColor: LymeResult['tierColor']
  if (score >= 70) {
    tier = 'severe'
    tierLabel = 'SEVERE EXPOSURE PATTERN'
    tierColor = 'red'
  } else if (score >= 50) {
    tier = 'high'
    tierLabel = 'HIGH RISK'
    tierColor = 'orange'
  } else if (score >= 30) {
    tier = 'moderate'
    tierLabel = 'MODERATE RISK'
    tierColor = 'amber'
  } else {
    tier = 'low'
    tierLabel = 'LOW RISK'
    tierColor = 'emerald'
  }

  // Doctor advice based on tier
  const doctorAdvice = score >= 70
    ? 'Given your exposure pattern, talk to your family doctor about: (1) keeping a record of tick bites (date, location on body, tick photo if possible) so they can interpret future symptoms; (2) the 1-dose doxycycline post-exposure prophylaxis protocol (effective within 72 hours of a confirmed blacklegged tick bite); (3) what early Lyme symptoms look like (erythema migrans bullseye rash, fever, fatigue, joint aches 3-30 days after a bite).'
    : score >= 50
      ? 'Worth telling your family doctor your exposure pattern so they have context if you ever present with unexplained symptoms. Keep a tick bite log. Know what early Lyme symptoms look like (bullseye rash, fever, fatigue 3-30 days after a bite).'
      : 'No specific medical follow-up needed at your current risk level — but it\'s always worth knowing what early Lyme symptoms look like (bullseye rash, fever, fatigue) and removing any attached tick within 24 hours.'

  // Prevention recommendations
  const prevention: string[] = []
  if (a.dogWalking !== 'no-dog' && a.dogWalking !== null) prevention.push('Ask your vet about NexGard, Bravecto, or Simparica oral tick prevention for your dog. These kill ticks within 8-12 hours of attachment — well before the 24-36 hour Lyme transmission window.')
  if (a.kidsOutdoor !== 'no-kids' && a.kidsOutdoor !== null) prevention.push('Tick checks for kids after outdoor play — focus on hairline, behind ears, armpits, waistband, and behind knees. Light-coloured clothing makes ticks visible.')
  if (a.hiking === 'weekly' || a.hiking === 'monthly') prevention.push('Treat hiking pants and socks with permethrin (Sawyer brand at MEC, Cabela\'s, or Canadian Tire — $24-$38). Permethrin kills ticks on contact through fabric and lasts 6 wash cycles.')
  prevention.push('Picaridin 20% on exposed skin during outdoor time — repels ticks for 8 hours, safe for kids 6 months+.')
  prevention.push('Shower within 2 hours of coming inside from grass or wooded areas — water washes off unattached ticks before they bite.')
  if (a.yardFeatures === 'wooded' || a.yardFeatures === 'leafy') prevention.push('Rake and remove leaf litter from yard perimeter — single biggest tick habitat reduction you can do at zero cost.')

  // Yard pivot
  const yardPivot = score >= 50
    ? 'The biggest variable you control is making sure your own property isn\'t a tick reservoir. Even the best personal vigilance can\'t protect you from ticks dropped in your yard by deer, raccoons, mice, and your own pet returning from walks. A barrier treatment applies a Health Canada-registered residual acaricide directly to the yard perimeter, leaf litter, and shaded shrub edges — the specific micro-habitats where blacklegged ticks quest, rather than the open lawn. No treatment eliminates ticks from a property, and ticks keep arriving on wildlife all season, so the point of re-application is to keep those edge zones under pressure through the active months rather than to guarantee a tick-free yard.'
    : 'Even at moderate risk, the highest-leverage move is ensuring your own yard isn\'t harbouring ticks. Single barrier spray treatments timed for late May, July, and early September catch the three peak tick activity windows.'

  return {
    score,
    tier,
    tierLabel,
    tierColor,
    cityName: a.city,
    isInServiceArea,
    isNearMappedRiskArea,
    driverList: drivers.slice(0, 5),
    doctorAdvice,
    prevention,
    yardPivot,
  }
}

// Note: helpers above use feature data implicitly via city/neighbourhood checks.
// CITY_FEATURES + NEIGHBOURHOOD_FEATURES imports kept for future expansion (per-feature scoring).
void CITY_FEATURES
void NEIGHBOURHOOD_FEATURES
