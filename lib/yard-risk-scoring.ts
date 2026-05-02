// ─────────────────────────────────────────────────────────────────────────────
// YARD RISK REPORT — Scoring Engine
// ─────────────────────────────────────────────────────────────────────────────
// Pure scoring logic. Inputs: quiz answers + parsed address. Outputs: 1-100
// score, tier label, top 3 risk drivers, recommended plan, price range,
// peak weeks, deterministic neighbourhood-assessed count.
//
// Used by both the on-page result render AND the email report generator.
// ─────────────────────────────────────────────────────────────────────────────

import { CITY_FEATURES, NEIGHBOURHOOD_FEATURES, IN_SERVICE_AREA } from './service-area-features'

export type LotSize = 'standard' | 'midsize' | 'large' | 'acreage'
export type FamilySituation = 'kids-young' | 'kids-older' | 'pets' | 'elderly' | 'no-special'
export type SeverityLevel = 'unbearable' | 'annoying' | 'manageable' | 'no-issue'
export type Timing = 'now' | 'two-weeks' | 'this-season' | 'researching'
export type BudgetTier = 'under-100' | '100-200' | '200-400' | 'whatever'

export interface YardFeature {
  id: 'ravine' | 'creek' | 'pond' | 'conservation' | 'lake' | 'wooded' | 'none'
  label: string
  weight: number
}

export const YARD_FEATURES: YardFeature[] = [
  { id: 'ravine',       label: 'Ravine',                weight: 18 },
  { id: 'creek',        label: 'Creek or river',        weight: 16 },
  { id: 'wooded',       label: 'Wooded lot / heavy trees', weight: 12 },
  { id: 'pond',         label: 'Pond on/near property', weight: 14 },
  { id: 'conservation', label: 'Conservation area',     weight: 15 },
  { id: 'lake',         label: 'Lake-adjacent',         weight: 10 },
  { id: 'none',         label: 'None of these',         weight: 0  },
]

export const GOAL_OPTIONS = [
  { id: 'nightly-bbq',     label: 'Enjoy nightly BBQs without bites' },
  { id: 'host-events',     label: 'Host events (weddings, parties)' },
  { id: 'kids-safe',       label: 'Kids can play safely outside' },
  { id: 'lyme-prevention', label: 'Lyme disease / tick prevention' },
  { id: 'general-comfort', label: 'Just less itchy in general' },
]

export const TRIED_OPTIONS = [
  { id: 'dunks',        label: 'Mosquito dunks' },
  { id: 'candles',      label: 'Citronella candles / torches' },
  { id: 'sprays',       label: 'Store-bought sprays' },
  { id: 'traps',        label: 'Mosquito traps / DynaTrap / Magnet' },
  { id: 'zappers',      label: 'Bug zappers' },
  { id: 'professional', label: 'Professional service before' },
  { id: 'nothing',      label: 'Nothing yet' },
]

export interface QuizAnswers {
  city: string | null
  neighbourhood: string | null
  postalCode: string | null
  formattedAddress: string | null
  lotSize: LotSize | null
  features: string[]                  // YardFeature ids
  family: FamilySituation | null
  severity: SeverityLevel | null
  tried: string[]                     // TRIED_OPTIONS ids
  goals: string[]                     // GOAL_OPTIONS ids (max 2)
  timing: Timing | null
  budget: BudgetTier | null
}

export interface YardRiskResult {
  score: number                       // 1-100
  tier: 'low' | 'moderate' | 'high' | 'severe'
  tierLabel: string                   // human label e.g. "HIGH PRESSURE"
  tierColor: 'green' | 'amber' | 'red' | 'crimson'
  cityName: string | null
  neighbourhoodName: string | null
  isInServiceArea: boolean
  primaryFeature: string              // human description like "the Credit River corridor"
  driverList: string[]                // Top 3-5 drivers in plain English
  peakRiskWeeks: { startLabel: string; endLabel: string; daysFromNow: number }
  estimatedSeasonInvestmentLow: number
  estimatedSeasonInvestmentHigh: number
  recommendedTier: 'diy' | 'hybrid' | 'professional'
  recommendedTierLabel: string        // "Standard Protection Plan" etc.
  treatmentVisits: string             // e.g. "10 visits, bi-weekly May–Sep"
  socialProofCount: number            // 5-15, deterministic by postal code
  ticksRelevant: boolean
  leadPriorityScore: number           // 0-100 — internal sales prioritization
}

// ── Deterministic social proof — same postal code always returns same number ──
export function neighbourhoodAssessedThisWeek(postalCodeOrCity: string | null): number {
  const seed = (postalCodeOrCity || 'GTA').toUpperCase().replace(/\s+/g, '').slice(0, 6)
  let hash = 0
  for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash) + seed.charCodeAt(i) | 0
  return 5 + (Math.abs(hash) % 11) // 5-15 range
}

// ── Scoring core ──
export function scoreYard(answers: QuizAnswers): YardRiskResult {
  const cityKey = answers.city?.toLowerCase().trim() || ''
  const hoodKey = answers.neighbourhood?.toLowerCase().trim() || ''
  const isInServiceArea = IN_SERVICE_AREA.has(cityKey)

  let score = 30 // baseline for any GTA property in season

  // ── Geographic pressure (max 30 pts) ──
  const drivers: string[] = []
  let primaryFeature = 'GTA seasonal mosquito pressure'

  if (hoodKey && NEIGHBOURHOOD_FEATURES[hoodKey]) {
    primaryFeature = NEIGHBOURHOOD_FEATURES[hoodKey].feature
    score += 20
    drivers.push(`Property is in ${answers.neighbourhood}, a known high-pressure microzone (${NEIGHBOURHOOD_FEATURES[hoodKey].feature})`)
  } else if (cityKey && CITY_FEATURES[cityKey]) {
    primaryFeature = CITY_FEATURES[cityKey].feature
    score += 12
    drivers.push(`${answers.city} is a moderate-to-high pressure area — ${CITY_FEATURES[cityKey].feature}`)
  }

  // ── Yard features (max 30 pts) ──
  const selectedFeatures = YARD_FEATURES.filter((f) => answers.features.includes(f.id))
  const featureScore = Math.min(30, selectedFeatures.reduce((s, f) => s + f.weight, 0))
  score += featureScore
  const highWeightFeatures = selectedFeatures.filter((f) => f.weight >= 12)
  if (highWeightFeatures.length > 0) {
    drivers.push(`Yard backs onto ${highWeightFeatures.map((f) => f.label.toLowerCase()).join(' + ')} — these are mosquito and tick reservoirs`)
  }

  // ── Lot size (mostly drives cost, modest risk impact) ──
  const lotMultiplier = { standard: 1.0, midsize: 1.15, large: 1.4, acreage: 1.8 }[answers.lotSize || 'standard']

  // ── Family situation (raises stakes, adjusts score) ──
  let familyContext = ''
  if (answers.family === 'kids-young') {
    score += 6
    familyContext = 'Young children in the household — every bite matters'
    drivers.push('Young kids in the household significantly raise the consequence of every bite')
  } else if (answers.family === 'kids-older') {
    score += 3
    familyContext = 'Active kids using the yard'
  } else if (answers.family === 'pets') {
    score += 5
    familyContext = 'Pets in the yard — tick exposure is the top risk'
    drivers.push('Pets sweep ticks into the yard from neighbouring areas; bite consequence is high')
  } else if (answers.family === 'elderly') {
    score += 4
    familyContext = 'Elderly household members at higher risk for West Nile'
  }

  // ── Last summer severity (validates urgency) ──
  if (answers.severity === 'unbearable') {
    score += 8
    drivers.push('Last summer was severely impacted — pattern indicates persistent high-pressure habitat')
  } else if (answers.severity === 'annoying') {
    score += 4
  }

  // ── Cap at 100 ──
  score = Math.min(100, Math.max(15, score))

  // ── Tier classification ──
  let tier: YardRiskResult['tier']
  let tierLabel: string
  let tierColor: YardRiskResult['tierColor']
  if (score >= 80) {
    tier = 'severe'
    tierLabel = 'SEVERE PRESSURE'
    tierColor = 'crimson'
  } else if (score >= 60) {
    tier = 'high'
    tierLabel = 'HIGH PRESSURE'
    tierColor = 'red'
  } else if (score >= 40) {
    tier = 'moderate'
    tierLabel = 'MODERATE PRESSURE'
    tierColor = 'amber'
  } else {
    tier = 'low'
    tierLabel = 'LOW PRESSURE'
    tierColor = 'green'
  }

  // ── Recommended treatment tier ──
  let recommendedTier: YardRiskResult['recommendedTier']
  let recommendedTierLabel: string
  let treatmentVisits: string
  if (score >= 70) {
    recommendedTier = 'professional'
    recommendedTierLabel = 'Standard Protection Plan'
    treatmentVisits = '10 bi-weekly treatments · May through September'
  } else if (score >= 45) {
    recommendedTier = 'professional'
    recommendedTierLabel = 'Basic Protection Plan'
    treatmentVisits = '5 monthly treatments · May through September'
  } else {
    recommendedTier = 'hybrid'
    recommendedTierLabel = 'Hybrid: BTI dunks + 3 strategic spray windows'
    treatmentVisits = '3 targeted single treatments · timed for peak weeks'
  }

  // Severe + high-stakes family = upsell to weekly
  if (score >= 85 && (answers.family === 'kids-young' || answers.family === 'pets')) {
    recommendedTier = 'professional'
    recommendedTierLabel = 'Exclusive Protection Plan'
    treatmentVisits = '20+ weekly treatments · Maximum protection'
  }

  // ── Estimated season investment range (CAD) ──
  const baseRanges: Record<'diy' | 'hybrid' | 'professional', [number, number]> = {
    diy: [30, 80],
    hybrid: [297, 497],
    professional: [549, 994],
  }
  let [low, high] = baseRanges[recommendedTier]
  if (recommendedTierLabel.includes('Exclusive')) {
    low = 1799
    high = 2049
  }
  // Lot size scaling
  low = Math.round(low * lotMultiplier)
  high = Math.round(high * lotMultiplier)

  // Tick add-on
  const ticksRelevant = answers.goals.includes('lyme-prevention') ||
                         answers.family === 'pets' ||
                         answers.features.includes('wooded') ||
                         answers.features.includes('conservation') ||
                         answers.features.includes('ravine')

  // ── Peak weeks (city-dependent) ──
  const baselinePeak = peakWeeksForCity(cityKey)

  // ── Lead priority score (internal — for Hub sales prioritization) ──
  let leadPriority = score * 0.6
  if (answers.timing === 'now') leadPriority += 25
  else if (answers.timing === 'two-weeks') leadPriority += 15
  else if (answers.timing === 'this-season') leadPriority += 5
  if (answers.budget === 'whatever') leadPriority += 15
  else if (answers.budget === '200-400') leadPriority += 10
  else if (answers.budget === '100-200') leadPriority += 5
  if (answers.severity === 'unbearable') leadPriority += 10
  leadPriority = Math.min(100, Math.round(leadPriority))

  // ── Top 3-5 drivers — ensure we always have content ──
  if (drivers.length === 0) {
    drivers.push('Standard GTA mosquito pressure — every yard is in range during May–September')
  }
  if (familyContext && !drivers.includes(familyContext)) {
    drivers.push(familyContext)
  }
  // Cap to 5 drivers max
  const driverList = drivers.slice(0, 5)

  return {
    score: Math.round(score),
    tier,
    tierLabel,
    tierColor,
    cityName: answers.city,
    neighbourhoodName: answers.neighbourhood,
    isInServiceArea,
    primaryFeature,
    driverList,
    peakRiskWeeks: baselinePeak,
    estimatedSeasonInvestmentLow: low,
    estimatedSeasonInvestmentHigh: high,
    recommendedTier,
    recommendedTierLabel,
    treatmentVisits,
    socialProofCount: neighbourhoodAssessedThisWeek(answers.postalCode || answers.city),
    ticksRelevant,
    leadPriorityScore: leadPriority,
  }
}

// Peak weeks shift slightly by city based on Lake Ontario proximity, ravine systems, etc.
function peakWeeksForCity(cityKey: string): YardRiskResult['peakRiskWeeks'] {
  // GTA peak generally June 8 – August 17. Lakefront cities skew slightly later.
  const today = new Date()
  const startDate = new Date(today.getFullYear(), 5, 8) // June 8
  const endDate = new Date(today.getFullYear(), 7, 17)  // August 17
  const lakefront = ['toronto', 'mississauga', 'oakville', 'burlington']
  if (lakefront.includes(cityKey)) {
    startDate.setDate(startDate.getDate() + 5)
    endDate.setDate(endDate.getDate() + 5)
  }
  const daysFromNow = Math.max(0, Math.round((startDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)))
  const fmt = (d: Date) => d.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' })
  return { startLabel: fmt(startDate), endLabel: fmt(endDate), daysFromNow }
}
