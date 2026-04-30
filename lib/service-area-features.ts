// Maps GTA cities/neighbourhoods to local geographic features that drive
// mosquito/tick pressure — used to personalize quote recommendations.
// "Based on your area, we recommend our Standard plan because [feature]."

type CityFeature = {
  feature: string
  reason: string
  isInServiceArea: boolean
}

// Cities we actively service (matches CITIES array in constants.ts)
const IN_SERVICE_AREA = new Set([
  'mississauga', 'toronto', 'brampton', 'oakville', 'burlington', 'hamilton',
  'vaughan', 'richmond hill', 'markham', 'etobicoke', 'scarborough', 'north york',
  'caledon', 'milton', 'georgetown', 'halton hills', 'king city', 'woodbridge', 'thornhill',
  'kleinburg', 'ajax', 'pickering', 'thornhill', 'maple', 'concord',
  'east york', 'york',
])

// Neighbourhood-level overrides (more specific than city-level)
const NEIGHBOURHOOD_FEATURES: Record<string, { feature: string; reason: string }> = {
  // Mississauga
  'port credit': { feature: 'the Credit River corridor', reason: 'permanent water flow keeps mosquito breeding active all summer' },
  'meadowvale': { feature: 'the Credit River and conservation greenbelt', reason: 'extensive natural habitat sustains heavy mosquito pressure' },
  'streetsville': { feature: 'the Credit River valley', reason: 'the river produces consistent mosquito populations from May through September' },
  'erin mills': { feature: 'the Sawmill Valley conservation lands', reason: 'mature woodland and creek habitat drives sustained mosquito pressure' },
  'lorne park': { feature: 'mature tree canopy and proximity to the lake', reason: 'humid microclimate extends evening mosquito activity' },
  'cooksville': { feature: 'the Cooksville Creek corridor', reason: 'creek and stormwater pond systems sustain mosquito breeding' },
  'malton': { feature: 'the Etobicoke Creek headwaters', reason: 'wetland habitat creates strong mosquito pressure' },
  // Toronto
  'high park': { feature: 'Grenadier Pond and the Humber River watershed', reason: 'permanent water and dense ravine habitat sustain heavy mosquito pressure' },
  'rosedale': { feature: 'the Don Valley ravine system', reason: 'one of the largest urban ravine networks in North America produces sustained mosquito pressure' },
  'forest hill': { feature: 'the Cedarvale Ravine corridor', reason: 'ravine humidity and dense vegetation drive mosquito populations' },
  'leaside': { feature: 'the Don Valley and Taylor Creek system', reason: 'multiple creek confluences produce continuous mosquito pressure' },
  'east york': { feature: 'the Don Valley ravine network', reason: 'dense urban ravine habitat sustains mosquito populations through the season' },
  'don mills': { feature: 'the Don Valley and Flemingdon Park area', reason: 'ravine proximity creates strong mosquito pressure' },
  'the beaches': { feature: 'Ashbridge\'s Bay and the Eastern Ravine', reason: 'wetland and waterfront habitat sustain heavy multi-source mosquito pressure' },
  'davisville': { feature: 'the Mt Pleasant Cemetery and ravine corridor', reason: 'mature tree canopy and dense vegetation drive mosquito pressure' },
  'lawrence park': { feature: 'the Don River headwaters', reason: 'the river system sustains mosquito breeding from spring through fall' },
  'leslieville': { feature: 'the Eastern Ravine and lake-adjacent humidity', reason: 'multi-source habitat creates sustained mosquito pressure' },
  'baby point': { feature: 'the Humber River corridor', reason: 'river-adjacent habitat sustains mosquito populations' },
  'willowdale': { feature: 'the Don River West Branch valley', reason: 'creek systems drive consistent mosquito breeding' },
  'sunnybrook': { feature: 'Sunnybrook Park and Wilket Creek', reason: 'over 100 hectares of adjacent parkland produces heavy mosquito pressure' },
  'casa loma': { feature: 'the Cedarvale and Nordheimer ravines', reason: 'ravine humidity sustains mosquito populations' },
  'the annex': { feature: 'mature tree canopy and ravine proximity', reason: 'shaded resting habitat drives mosquito populations' },
  'bridle path': { feature: 'the Don River West Branch and large estate vegetation', reason: 'extensive natural habitat on properties sustains mosquito populations' },
  'summerhill': { feature: 'the Rosedale Valley ravine', reason: 'ravine humidity creates consistent mosquito pressure' },
  'the kingsway': { feature: 'the Humber River corridor', reason: 'river proximity sustains mosquito breeding through summer' },
  'york mills': { feature: 'the Don River headwaters', reason: 'river system produces continuous mosquito populations' },
  'moore park': { feature: 'the Mt Pleasant Cemetery ravines', reason: 'mature vegetation and ravine humidity drive mosquito pressure' },
  'riverdale': { feature: 'the Don Valley parklands', reason: 'ravine and parkland habitat sustains mosquito populations' },
  'danforth': { feature: 'the Don Valley ravine system', reason: 'urban ravine habitat sustains mosquito populations' },
  // Brampton
  'castlemore': { feature: 'the Humber River valley', reason: 'river-adjacent habitat sustains heavy mosquito pressure' },
  'springdale': { feature: 'the West Humber River corridor', reason: 'creek and stormwater pond systems sustain mosquito breeding' },
  'heart lake': { feature: 'Heart Lake Conservation Area', reason: 'permanent water and protected wetlands drive heavy mosquito pressure' },
  'fletcher\'s meadow': { feature: 'the Humber River and stormwater ponds', reason: 'river proximity plus internal ponds creates dual mosquito pressure' },
  'fletcher meadows': { feature: 'the Humber River and stormwater ponds', reason: 'river proximity plus internal ponds creates dual mosquito pressure' },
  'bramalea': { feature: 'the Bramalea stormwater system', reason: 'numerous stormwater ponds drive consistent mosquito breeding' },
  'mount pleasant': { feature: 'the Etobicoke Creek headwaters', reason: 'creek and wetland habitat sustains mosquito pressure' },
  'sandalwood': { feature: 'the Heart Lake Conservation watershed', reason: 'protected wetland habitat drives heavy mosquito pressure' },
  'snelgrove': { feature: 'the Etobicoke Creek headwaters', reason: 'rural drainage and creek systems create strong mosquito pressure' },
  'bram west': { feature: 'the Credit River edge', reason: 'river-adjacent habitat sustains mosquito breeding through the season' },
  // Oakville
  'glen abbey': { feature: 'the golf course wetlands and Sixteen Mile Creek', reason: 'water features sustain mosquito breeding through the season' },
  'bronte': { feature: 'Bronte Creek Provincial Park', reason: 'protected provincial park habitat drives heavy mosquito and tick pressure' },
  'old oakville': { feature: 'Lake Ontario waterfront and mature canopy', reason: 'humid lakefront microclimate sustains mosquito populations' },
  'north oakville': { feature: 'Sixteen Mile Creek and conservation greenbelt', reason: 'creek and wooded habitat drive mosquito pressure' },
  'joshua creek': { feature: 'the Joshua Creek green spaces', reason: 'creek habitat sustains mosquito and tick populations' },
  'river oaks': { feature: 'Morrison Creek and Sixteen Mile Creek', reason: 'two creek systems create dual mosquito pressure' },
  'falgarwood': { feature: 'the Sixteen Mile Creek corridor', reason: 'creek-adjacent habitat sustains mosquito populations' },
  'clearview': { feature: 'the Sixteen Mile Creek corridor', reason: 'creek and ravine habitat drive mosquito populations' },
  'eastlake': { feature: 'the Iroquois Shoreline and Lake Ontario humidity', reason: 'lakefront microclimate sustains mosquito populations' },
  'west oak trails': { feature: 'the Sixteen Mile Creek edge', reason: 'creek proximity drives mosquito pressure' },
  // Burlington
  'aldershot': { feature: 'the Cootes Paradise wetlands', reason: 'one of Ontario\'s largest urban wetlands sustains heavy mosquito pressure' },
  'roseland': { feature: 'the Hamilton Harbour and creek systems', reason: 'multiple water sources drive mosquito populations' },
  'tyandaga': { feature: 'the Mount Nemo Escarpment forests', reason: 'forested habitat sustains tick and mosquito populations' },
  'millcroft': { feature: 'the Bronte Creek headwaters', reason: 'creek system drives mosquito pressure' },
  'orchard': { feature: 'the Bronte Creek corridor', reason: 'creek-adjacent habitat sustains mosquito populations' },
  'palmer': { feature: 'the Hamilton Harbour humidity', reason: 'lakefront microclimate sustains mosquito populations' },
  'alton village': { feature: 'agricultural drainage and creek systems', reason: 'rural water features sustain mosquito breeding' },
  // Hamilton
  'stoney creek': { feature: 'the Devil\'s Punch Bowl and local creek systems', reason: 'escarpment forests and water sources drive heavy mosquito and tick pressure' },
  'dundas': { feature: 'the Dundas Valley conservation lands', reason: 'protected conservation habitat sustains heavy mosquito pressure' },
  'ancaster': { feature: 'the Dundas Valley and Sulphur Springs forests', reason: 'mature forest habitat drives strong mosquito and tick populations' },
  'waterdown': { feature: 'the Bruce Trail corridor and Cootes Paradise', reason: 'protected natural areas sustain heavy mosquito pressure' },
  'flamborough': { feature: 'the Beverly Swamp and conservation lands', reason: 'wetland habitat drives heavy mosquito breeding' },
  // Vaughan
  'kleinburg': { feature: 'the Humber River valley estate setting', reason: 'river-adjacent habitat plus large lots create heavy mosquito pressure' },
  'maple': { feature: 'the East Don River corridor', reason: 'river system sustains mosquito breeding through the season' },
  'concord': { feature: 'the West Don River and stormwater system', reason: 'multiple water sources drive mosquito pressure' },
  'thornhill': { feature: 'the Bayview ravines and Pomona Mills Park', reason: 'ravine habitat sustains mosquito populations' },
  // Other
  'pickering': { feature: 'the Duffins Creek and Frenchman\'s Bay watershed', reason: 'creek and bay habitat drives mosquito and tick pressure' },
  'ajax': { feature: 'the Duffins Creek corridor', reason: 'creek system sustains mosquito populations' },
  'caledon east': { feature: 'the Oak Ridges Moraine', reason: 'one of Ontario\'s highest tick-density zones plus moraine wetlands sustain pressure' },
  'bolton': { feature: 'the Humber River valley', reason: 'river-adjacent habitat sustains mosquito breeding' },
}

// City-level fallback features
const CITY_FEATURES: Record<string, { feature: string; reason: string }> = {
  'mississauga': { feature: 'the Credit River and surrounding conservation lands', reason: 'permanent water and natural habitat sustain heavy mosquito pressure across the city' },
  'toronto': { feature: 'Toronto\'s ravine system — the largest urban ravine network in North America', reason: 'extensive natural habitat sustains mosquito breeding city-wide' },
  'brampton': { feature: 'the Humber River and Etobicoke Creek systems', reason: 'multiple river corridors drive mosquito pressure across the city' },
  'oakville': { feature: 'Bronte Creek and Sixteen Mile Creek', reason: 'two major creek systems sustain mosquito breeding throughout the season' },
  'burlington': { feature: 'Cootes Paradise wetlands and the Mount Nemo Escarpment', reason: 'protected wetlands and forest habitat drive heavy mosquito pressure' },
  'hamilton': { feature: 'the Dundas Valley and Webster\'s Falls conservation lands', reason: 'escarpment forests and water sources drive mosquito and tick pressure' },
  'vaughan': { feature: 'the Humber River and Don River corridors', reason: 'multiple river systems sustain mosquito breeding through the season' },
  'richmond hill': { feature: 'the Oak Ridges Moraine and Rouge River', reason: 'moraine habitat is one of Ontario\'s highest tick-density zones plus heavy mosquito pressure' },
  'markham': { feature: 'the Rouge National Urban Park watershed', reason: 'protected park habitat drives sustained mosquito and tick pressure' },
  'etobicoke': { feature: 'the Humber River corridor', reason: 'river-adjacent habitat sustains mosquito breeding through the season' },
  'scarborough': { feature: 'Rouge National Urban Park and Highland Creek', reason: 'protected park habitat drives heavy mosquito and tick pressure' },
  'north york': { feature: 'the Don River West Branch and Black Creek', reason: 'multiple creek systems sustain mosquito populations' },
  'caledon': { feature: 'the Oak Ridges Moraine and Forks of the Credit', reason: 'one of Ontario\'s highest tick-density zones plus moraine wetlands' },
  'milton': { feature: 'Crawford Lake, Mount Nemo, and the Halton conservation greenbelt', reason: 'escarpment forests and conservation lands sustain heavy mosquito and tick pressure' },
  'georgetown': { feature: 'the Credit River edge and Hungry Hollow', reason: 'river and ravine habitat drive mosquito populations' },
  'halton hills': { feature: 'the Bruce Trail corridor and Hilton Falls Conservation Area', reason: 'protected trail and forest habitat sustain heavy tick and mosquito pressure' },
  'king city': { feature: 'the Oak Ridges Moraine', reason: 'one of Ontario\'s highest tick-density zones — moraine forests and wetlands' },
  'woodbridge': { feature: 'the Humber River corridor', reason: 'river-adjacent habitat sustains mosquito populations through the season' },
  'thornhill': { feature: 'the Bayview ravines and Pomona Mills', reason: 'ravine habitat sustains mosquito populations' },
  'pickering': { feature: 'the Duffins Creek watershed', reason: 'creek and bay habitat drives mosquito and tick populations' },
  'ajax': { feature: 'the Duffins Creek corridor', reason: 'creek system sustains mosquito populations' },
}

const STANDARD_PLAN_REASON_GENERIC =
  'continuous bi-weekly coverage through the May–September season provides the best protection-to-cost ratio for most properties'

export type GeoFeatureMatch = {
  feature: string
  reason: string
  isInServiceArea: boolean
  cityMatch: string | null
  neighbourhoodMatch: string | null
}

/**
 * Match a Google-Places-style address to a local feature + recommendation reason.
 * Returns generic recommendation if no city/neighbourhood match (still in-service).
 */
export function matchServiceAreaFeature(opts: {
  city: string | null
  neighbourhood: string | null
}): GeoFeatureMatch {
  const cityKey = opts.city?.toLowerCase().trim() || ''
  const hoodKey = opts.neighbourhood?.toLowerCase().trim() || ''

  const isInServiceArea = IN_SERVICE_AREA.has(cityKey)

  // Try neighbourhood match first
  if (hoodKey && NEIGHBOURHOOD_FEATURES[hoodKey]) {
    const m = NEIGHBOURHOOD_FEATURES[hoodKey]
    return { feature: m.feature, reason: m.reason, isInServiceArea, cityMatch: opts.city, neighbourhoodMatch: opts.neighbourhood }
  }

  // Fall back to city match
  if (cityKey && CITY_FEATURES[cityKey]) {
    const m = CITY_FEATURES[cityKey]
    return { feature: m.feature, reason: m.reason, isInServiceArea, cityMatch: opts.city, neighbourhoodMatch: null }
  }

  // No match — generic
  return {
    feature: '',
    reason: STANDARD_PLAN_REASON_GENERIC,
    isInServiceArea,
    cityMatch: null,
    neighbourhoodMatch: null,
  }
}

/**
 * Generate a randomized "X of your neighbours" message.
 * Per business decision: target 3–5 (low enough to be plausible — neighbours don't all know about us).
 */
export function neighboursUsingBuzzSkito(seed: string): number {
  // Deterministic from seed (address) so same lead gets same number
  let hash = 0
  for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash) + seed.charCodeAt(i) | 0
  const options = [3, 4, 4, 4, 5] // weighted toward 4
  return options[Math.abs(hash) % options.length]
}
