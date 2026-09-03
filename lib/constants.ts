// ─────────────────────────────────────────────────────────────────────────────
// BUZZSKITO — Business Constants
// Service-area business — no public civic address displayed.
// ─────────────────────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'BuzzSkito',
  legalName: 'BuzzSkito Mosquito & Tick Control',
  phone: '(289) 216-5030',
  phoneHref: 'tel:+12892165030',
  email: 'support@buzzskito.ca',
  url: 'https://buzzskito.ca',
  address: {
    city: 'Mississauga',
    region: 'ON',
    country: 'CA',
  },
  geo: {
    lat: 43.5890,
    lng: -79.6441,
  },
  hours: [
    { days: ['Monday','Tuesday','Wednesday','Thursday','Friday'], open: '08:00', close: '18:00' },
    { days: ['Saturday'], open: '09:00', close: '16:00' },
  ],
  hoursDisplay: 'Mon–Fri 8am–6pm · Sat 9am–4pm',
  priceRange: '$$',
  description:
    'BuzzSkito provides professional mosquito and tick barrier spray services for residential lawns and properties across Mississauga, Brampton, Oakville, Burlington, Toronto, Vaughan, Richmond Hill, Markham, and the GTA. Health Canada–approved formulas, safe for kids and pets after 30 minutes. 100% satisfaction guaranteed.',
  googleReviewUrl: 'https://g.page/r/CYytaw5LxucdEAE/review',
  facebookUrl: 'https://www.facebook.com/458721543988714',
  gaId: 'G-X7RV1EQWD8',
  fbPixelId: '1084801329974159',
  // Ontario MOECP Pesticide Operator/Applicator Licence — required by law
  // for commercial pesticide application in Ontario.
  licenseNumber: 'L-240-2436835197',
  canadaBusinessReg: '1001003669',
  // Microsoft Clarity — heatmaps + session recording (free).
  // Project: BuzzSkito · Industry: B2C Services · clarity.microsoft.com/projects/view/qp6yufkbs2
  clarityId: 'qp6yufkbs2',
  aggregateRating: {
    ratingValue: '5',
    bestRating: '5',
    ratingCount: '150',
  },
  guarantee: {
    name: 'BuzzSkito Bite-Free Guarantee',
    short: 'Bite-Free Guarantee',
    description: 'If pests return inside the protection window, we re-treat at no charge. Period.',
  },
  author: {
    name: 'Alex and The Mosquito Team',
    role: 'BuzzSkito Mosquito & Tick Control Specialists',
    url: 'https://buzzskito.ca/buzzskito-history',
  },
} as const

// ── Advertised "from" pricing — single source of truth ───────────────────────
// Centralizes the season-offer "from" prices so the SeasonalOffer card and its
// Offer JSON-LD read one place instead of duplicating literals. These MIRROR the
// prices already emitted elsewhere (the $99 single treatment in serviceSchema /
// hasOfferCatalog) — they do NOT introduce new or changed service prices. Source
// of truth for the numbers is CLAUDE.md pricing: single from $99, tick season
// $597 standalone / $497 bundled with any mosquito plan (save $100).
export const PRICING = {
  currency: 'CAD',
  singleTreatmentFrom: 99,   // one-time barrier spray, standard lot under 10K sq ft
  tickStandaloneFrom: 597,   // tick-only season (5 sprays)
  tickBundleFrom: 497,       // tick season added to any mosquito plan (save $100)
} as const

export const SITE_URL = 'https://buzzskito.ca'

// ── All service cities (19 total) ─────────────────────────────────────────────

export const CITIES = [
  {
    name: 'Mississauga',
    mosquitoSlug: '/mississauga-mosquito-control',
    tickSlug: '/mississauga-tick-spray',
    neighbourhoods: ['Port Credit','Meadowvale','Streetsville','Malton','Lorne Park','Cooksville','Lakeview','Erin Mills','Clarkson','Churchill Meadows','Mineola','Applewood'],
    mosquitoBlurb: 'From Credit River to Lakeview, Mississauga backyards are prime mosquito breeding zones all season.',
    tickBlurb: 'Rattray Marsh, Erindale Park, and the Credit River valley harbour established blacklegged tick populations.',
  },
  {
    name: 'Toronto',
    mosquitoSlug: '/toronto-mosquito-control',
    tickSlug: '/toronto-tick-spray',
    neighbourhoods: ['High Park','East York','Don Mills','The Beaches','Scarborough','North York','Etobicoke','Leslieville','Rosedale','Forest Hill'],
    mosquitoBlurb: "Toronto's ravine system and Don Valley create ideal conditions for mosquito breeding all summer.",
    tickBlurb: "Toronto's ravines and High Park harbour ticks — risk areas extend across the city's green corridors.",
  },
  {
    name: 'Brampton',
    mosquitoSlug: '/brampton-mosquito-control',
    tickSlug: '/brampton-tick-spray',
    neighbourhoods: ['Mount Pleasant','Gore Meadows','Castlemore','Springdale','Bramalea','Creditview',"Fletcher's Meadow"],
    mosquitoBlurb: "Brampton's rapid growth means new green spaces — and new mosquito pressure each season.",
    tickBlurb: 'Brampton ravines, creeks, and wooded areas are hotspots for tick activity throughout the year.',
  },
  {
    name: 'Oakville',
    mosquitoSlug: '/oakville-mosquito-control',
    tickSlug: '/oakville-tick-spray',
    neighbourhoods: ['Bronte','Glen Abbey','Joshua Creek','West Oak Trails','Clearview','Palermo','River Oaks','Kerr Village'],
    mosquitoBlurb: "Oakville's lakefront and rain-garden landscapes create persistent mosquito pressure each season.",
    tickBlurb: 'Bronte Creek and wooded Oakville properties see elevated tick populations annually.',
  },
  {
    name: 'Burlington',
    mosquitoSlug: '/burlington-mosquito-spray',
    tickSlug: '/burlington-tick-spray',
    neighbourhoods: ['Alton Village','Millcroft','The Orchard','Roseland','Downtown Burlington','Shoreacres','Headon Forest','North Burlington','Palmer','Tyandaga'],
    mosquitoBlurb: "Burlington's waterfront and lush green neighbourhoods harbour active mosquito populations.",
    tickBlurb: "Burlington's wooded greenbelt corridors make tick control essential for homeowners.",
  },
  {
    name: 'Hamilton',
    mosquitoSlug: '/hamilton-mosquito-control',
    tickSlug: '/hamilton-tick-spray',
    neighbourhoods: ['Stoney Creek','Dundas','Ancaster','Westdale','Waterdown','Rymal','Downtown Hamilton','Mount Hope','Binbrook'],
    mosquitoBlurb: "Hamilton's escarpment, ravines, and waterfront create year-round mosquito habitat.",
    tickBlurb: "Hamilton's escarpment trails and Conservation Authority lands are prime tick habitat.",
  },
  {
    name: 'Vaughan',
    mosquitoSlug: '/vaughan-mosquito-control',
    tickSlug: '/vaughan-tick-spray',
    neighbourhoods: ['Woodbridge','Kleinburg','Maple','Concord','Thornhill','Patterson','Vellore Village','Islington Woods','Sonoma Heights'],
    mosquitoBlurb: "Vaughan's Humber River tributaries, Boyd Conservation Area, and new-build ponds drive active mosquito pressure.",
    tickBlurb: 'Boyd Conservation Area, Kortright Centre, and the Humber River corridor are established blacklegged tick habitat in York Region.',
  },
  {
    name: 'Richmond Hill',
    mosquitoSlug: '/richmond-hill-mosquito-control',
    tickSlug: '/richmond-hill-tick-spray',
    neighbourhoods: ['Oak Ridges','Jefferson','Bayview Hill','Mill Pond','Langstaff','Crosby','Doncrest','North Richvale'],
    mosquitoBlurb: "Richmond Hill's Mill Pond, Lake Wilcox, and Oak Ridges trail network create ideal mosquito conditions.",
    tickBlurb: 'The Oak Ridges Moraine runs through Richmond Hill — one of Ontario\'s highest-density tick activity zones.',
  },
  {
    name: 'Markham',
    mosquitoSlug: '/markham-mosquito-control',
    tickSlug: '/markham-tick-spray',
    neighbourhoods: ['Unionville','Cornell','Milliken Mills','Berczy Village','Wismer','Angus Glen','Cathedraltown','Thornhill'],
    mosquitoBlurb: "Markham's Rouge River system, Milner Creek, and Don River headwaters create active mosquito breeding conditions.",
    tickBlurb: "Markham's Rouge National Urban Park boundary and extensive forest edges create significant tick exposure for homeowners.",
  },
  {
    name: 'Etobicoke',
    mosquitoSlug: '/etobicoke-mosquito-control',
    tickSlug: '/etobicoke-tick-spray',
    neighbourhoods: ['Mimico','Long Branch','New Toronto','The Kingsway','Humber Valley','Richview','Rexdale','Islington Village','Alderwood'],
    mosquitoBlurb: "Etobicoke's Humber River corridor and Lake Ontario shoreline create high-pressure mosquito zones along the western waterfront.",
    tickBlurb: 'The Humber River valley and Centennial Park forest areas in Etobicoke harbour blacklegged tick populations.',
  },
  {
    name: 'Scarborough',
    mosquitoSlug: '/scarborough-mosquito-control',
    tickSlug: '/scarborough-tick-spray',
    neighbourhoods: ['Guildwood','West Hill','Highland Creek','Rouge','Malvern','Agincourt','Birchcliffe','Cliffside','Woburn','Morningside'],
    mosquitoBlurb: "Scarborough's Highland Creek, Rouge River valley, and ravine system are prime mosquito breeding habitat in Toronto's east end.",
    tickBlurb: "Scarborough's Rouge National Urban Park and Highland Creek valley are among the GTA's most significant blacklegged tick habitats.",
  },
  {
    name: 'North York',
    mosquitoSlug: '/north-york-mosquito-control',
    tickSlug: '/north-york-tick-spray',
    neighbourhoods: ['Don Mills','Willowdale','Lawrence Park','York Mills','Bayview Village','Lansing','North York Centre','Parkwoods'],
    mosquitoBlurb: "North York's Don River valley, Burke Brook ravine, and West Don Lands create consistent mosquito pressure for homeowners.",
    tickBlurb: "North York's ravine network — Don Valley, Serena Gundy Park, and Lawrence Park — provides extensive tick habitat in the heart of Toronto.",
  },
  {
    name: 'Caledon',
    mosquitoSlug: '/caledon-mosquito-control',
    tickSlug: '/caledon-tick-spray',
    neighbourhoods: ['Bolton','Caledon East','Caledon Village','Palgrave','Inglewood','Alton','Cheltenham','Belfountain'],
    mosquitoBlurb: "Caledon's Humber River headwaters, Credit River upper reaches, and rural ponds create intense mosquito pressure for rural properties.",
    tickBlurb: 'Caledon sits at the heart of the Oak Ridges Moraine and has among the highest confirmed tick activity rates in the GTA region.',
  },
  {
    name: 'Milton',
    mosquitoSlug: '/milton-mosquito-control',
    tickSlug: '/milton-tick-spray',
    neighbourhoods: ['Bronte Meadows','Clarke','Coates','Dempsey','Dorset Park','Ford','Harrison','Hawthorne Village','Scott','Timberlea'],
    mosquitoBlurb: "Milton's rapid residential development near Sixteen Mile Creek and regional conservation areas brings new mosquito pressure to expanding neighbourhoods.",
    tickBlurb: "Milton's proximity to Halton Hills conservation areas and Niagara Escarpment trail corridors places homeowners at real tick risk.",
  },
  {
    name: 'Georgetown',
    mosquitoSlug: '/georgetown-mosquito-control',
    tickSlug: '/georgetown-tick-spray',
    neighbourhoods: ['Old Georgetown','Glen Williams','Norval','Stewarttown','Limehouse','Silver Creek','Halton Hills'],
    mosquitoBlurb: "Georgetown's Credit River frontage, Silver Creek corridor, and conservation lands create intense seasonal mosquito pressure.",
    tickBlurb: "Georgetown backs onto Credit River valley and Niagara Escarpment trails — confirmed tick habitat areas throughout Halton Hills.",
  },
  {
    name: 'Halton Hills',
    mosquitoSlug: '/halton-hills-mosquito-control',
    tickSlug: '/halton-hills-tick-spray',
    neighbourhoods: ['Georgetown','Acton','Glen Williams','Norval','Limehouse','Ballinafad','Esquesing'],
    mosquitoBlurb: "Halton Hills' Credit River and Silver Creek watersheds, alongside conservation area ponds, sustain high mosquito populations through the season.",
    tickBlurb: 'Halton Hills has among the highest tick risk in the western GTA, with Niagara Escarpment trail systems and conservation lands throughout.',
  },
  {
    name: 'King City',
    mosquitoSlug: '/king-city-mosquito-control',
    tickSlug: '/king-city-tick-spray',
    neighbourhoods: ['King City village','Nobleton','Schomberg','King Township','Kettleby'],
    mosquitoBlurb: "King City's rural estate properties, ponds, and proximity to Humber River tributaries create significant seasonal mosquito pressure.",
    tickBlurb: 'King Township consistently reports high blacklegged tick activity — forest edges, agricultural lands, and Oak Ridges Moraine location make professional control essential.',
  },
  {
    name: 'Woodbridge',
    mosquitoSlug: '/woodbridge-mosquito-control',
    tickSlug: '/woodbridge-tick-spray',
    neighbourhoods: ['Islington Woods','Weston Downs','Pine Valley','Sonoma Heights','Vellore Village','East Woodbridge'],
    mosquitoBlurb: "Woodbridge's Humber River frontage, Boyd Conservation Area, and established tree canopy create active mosquito conditions.",
    tickBlurb: 'Boyd Conservation Area and the Humber River valley in Woodbridge are established blacklegged tick habitat — risk is high for adjacent properties.',
  },
  {
    name: 'Thornhill',
    mosquitoSlug: '/thornhill-mosquito-control',
    tickSlug: '/thornhill-tick-spray',
    neighbourhoods: ['Thornhill Village','Royal Orchard','Pomona Mills','Aileen-Willowbrook','Beverley Glen','Westmount','Commerce Valley'],
    mosquitoBlurb: "Thornhill's ravine corridors, ponds, and mature trees create active mosquito habitat throughout the season across both Vaughan and Markham.",
    tickBlurb: "Thornhill's Don River tributary ravines and proximity to Oak Ridges Moraine create meaningful tick exposure risk for homeowners.",
  },
] as const

export type CityData = (typeof CITIES)[number]

// ── Primary 6 cities for homepage grid / header dropdown ─────────────────────

export const PRIMARY_CITIES = CITIES.slice(0, 6)

// ── Blog structure — Mosquito hub + spokes ────────────────────────────────────

export const MOSQUITO_BLOGS = {
  pillar: {
    slug: 'ultimate-backyard-mosquito-control-guide',
    title: 'The Ultimate Backyard Mosquito Control Guide (GTA Edition)',
    excerpt: 'Everything GTA homeowners need to know about eliminating mosquitoes: biology, prevention, barrier spray, seasonal scheduling, and when to call a pro.',
    date: '2026-03-15',
  },
  supporting: [
    {
      slug: 'mosquito-season-gta-when-does-it-start',
      title: 'When Does Mosquito Season Start in the GTA? (2026 Guide)',
      excerpt: 'Exact dates, temperature triggers, and peak mosquito activity windows for Toronto, Mississauga, Brampton, Oakville, Burlington, and Hamilton.',
      date: '2026-03-20',
    },
    {
      slug: 'how-long-does-mosquito-spray-last',
      title: 'How Long Does Mosquito Spray Last? What GTA Homeowners Need to Know',
      excerpt: 'Professional barrier spray vs. store-bought: protection windows, rain resistance, and optimal re-application schedules for Ontario conditions.',
      date: '2026-03-25',
    },
    {
      slug: 'mosquito-vs-diy-vs-professional-control',
      title: 'DIY vs. Professional Mosquito Control: What Actually Works in Ontario',
      excerpt: 'Citronella candles, DEET, backyard foggers, vs. professional barrier spray — an honest comparison for GTA homeowners.',
      date: '2026-04-01',
    },
    {
      slug: 'west-nile-virus-mosquito-risk-ontario',
      title: 'West Nile Virus & Mosquito Risk in Ontario: What You Need to Know',
      excerpt: 'West Nile cases by city, transmission risk, symptoms, and how professional mosquito control protects your family in 2026.',
      date: '2026-04-05',
    },
    {
      slug: 'how-to-prevent-mosquitoes-in-your-backyard',
      title: '12 Ways to Prevent Mosquitoes in Your Backyard (Ontario)',
      excerpt: 'Standing water elimination, landscaping strategies, natural deterrents, and how to combine DIY prevention with professional barrier spray.',
      date: '2026-04-10',
    },
  ],
}

// ── Blog structure — Tick hub + spokes ───────────────────────────────────────

export const TICK_BLOGS = {
  pillar: {
    slug: 'ultimate-tick-control-guide-ontario',
    title: 'The Ultimate Tick Control Guide for Ontario Homeowners',
    excerpt: 'Complete guide to tick species in Ontario, Lyme disease risk, yard treatment options, and protecting your family with professional tick spray.',
    date: '2026-03-15',
  },
  supporting: [
    {
      slug: 'lyme-disease-tick-prevention-ontario',
      title: "Lyme Disease Prevention in Ontario: A Homeowner's Complete Guide",
      excerpt: 'Ontario Lyme disease risk zones, blacklegged tick lifecycle, prevention strategies, and what to do after a tick bite.',
      date: '2026-03-20',
    },
    {
      slug: 'what-ticks-look-like-ontario',
      title: 'How to Identify Ticks in Ontario: Blacklegged, Dog & Lone Star Ticks',
      excerpt: 'Visual guide to Ontario tick species, nymph vs. adult size, and the danger zones in your yard where ticks hide.',
      date: '2026-03-25',
    },
    {
      slug: 'how-to-remove-tick-safely',
      title: 'How to Remove a Tick Safely (And When to See a Doctor in Ontario)',
      excerpt: 'Step-by-step tick removal technique, what not to do, post-removal monitoring, and when to seek medical advice in Ontario.',
      date: '2026-04-01',
    },
    {
      slug: 'best-tick-control-yard-treatment',
      title: 'Best Tick Control for Your Yard: Ontario Homeowner Comparison Guide',
      excerpt: 'Comparing granular treatments, DIY sprays, cedar mulch borders, and professional barrier spray for Ontario yards.',
      date: '2026-04-05',
    },
    {
      slug: 'tick-season-ontario-when-are-ticks-active',
      title: 'When Are Ticks Active in Ontario? Seasonal Activity Calendar 2026',
      excerpt: 'Month-by-month tick activity levels in Ontario, peak danger windows, and when to schedule your professional tick treatments.',
      date: '2026-04-10',
    },
  ],
}

// ── New city-targeting & GEO blog posts ──────────────────────────────────────

export const NEW_BLOGS = [
  {
    slug: 'mosquito-control-vaughan-york-region',
    title: 'Mosquito Control in Vaughan & York Region: What Homeowners Need to Know',
    excerpt: "Boyd Conservation Area, Humber River, and Vaughan's new-build ponds create intense seasonal mosquito pressure. Here's how to protect your property.",
    date: '2026-04-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'tick-control-richmond-hill-markham',
    title: 'Tick Control in Richmond Hill & Markham: Oak Ridges Moraine Risk Guide',
    excerpt: "The Oak Ridges Moraine runs through Richmond Hill and Markham — here's what homeowners need to know about tick risk and professional yard treatment.",
    date: '2026-04-14',
    category: 'tick' as const,
  },
  {
    slug: 'mosquito-control-etobicoke-north-york',
    title: 'Mosquito & Tick Control in Etobicoke and North York',
    excerpt: "Humber River valley, Don Valley ravines, and Centennial Park — Etobicoke and North York homeowners face real mosquito and tick pressure near Toronto's natural corridors.",
    date: '2026-04-15',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-season-scarborough-east-toronto',
    title: 'Mosquito Season in Scarborough & East Toronto: Highland Creek to Rouge Park',
    excerpt: "Scarborough's Rouge National Urban Park and Highland Creek valley are among the GTA's most active mosquito zones. Here's what east-end homeowners can do.",
    date: '2026-04-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'tick-prevention-caledon-halton-hills',
    title: 'Tick Prevention in Caledon & Halton Hills: Rural Property Guide',
    excerpt: "Rural Caledon and Halton Hills homeowners face Ontario's highest tick activity rates. This guide covers specific risks, hotspots, and professional solutions.",
    date: '2026-04-17',
    category: 'tick' as const,
  },
  {
    slug: 'mosquito-control-milton-georgetown',
    title: 'Mosquito Control for New-Build Homes in Milton & Georgetown',
    excerpt: "New construction near Sixteen Mile Creek and the Credit River comes with new mosquito challenges. Here's why new-build homeowners need professional treatment.",
    date: '2026-04-18',
    category: 'mosquito' as const,
  },
  {
    slug: 'is-mosquito-spray-safe-kids-pets',
    title: 'Is Professional Mosquito Spray Safe for Kids and Pets? Your Questions Answered',
    excerpt: "Health Canada approval, 30-minute re-entry windows, and the real facts about what's in professional mosquito barrier spray — everything GTA parents and pet owners need to know.",
    date: '2026-04-19',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-choose-mosquito-control-company-gta',
    title: 'How to Choose a Mosquito Control Company in the GTA: 8 Questions to Ask',
    excerpt: "Not all mosquito control companies are equal. Here's exactly what to ask, what to avoid, and why Health Canada approval, licensing, and guarantees matter.",
    date: '2026-04-20',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-control-near-water-ravines-gta',
    title: 'Mosquito Control Near Water: Ravines, Ponds & Waterfront Properties in the GTA',
    excerpt: "Properties near the Credit River, Humber River, Don Valley, Lake Ontario, or backyard ponds face elevated mosquito pressure. Here's what actually works.",
    date: '2026-04-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'when-to-schedule-first-mosquito-treatment-ontario',
    title: 'When Should You Book Your First Mosquito Treatment of the Season?',
    excerpt: 'The right timing for your first treatment makes or breaks the whole season. Here\'s exactly when Ontario homeowners should schedule their first professional mosquito spray.',
    date: '2026-04-22',
    category: 'mosquito' as const,
  },
]

// ── Additional SEO blog posts (batch 2) ──────────────────────────────────────

export const NEW_BLOGS_2 = [
  {
    slug: 'mosquito-repellent-plants-ontario',
    title: 'Best Mosquito-Repelling Plants for Ontario Gardens (2026)',
    excerpt: 'Lavender, citronella grass, basil, and 7 other plants that actually reduce mosquito pressure in Ontario backyards — plus how to combine them with professional barrier spray for maximum results.',
    date: '2026-04-25',
    category: 'mosquito' as const,
  },
  {
    slug: 'hidden-mosquito-breeding-spots-backyard',
    title: 'Hidden Mosquito Breeding Spots in Your GTA Backyard (And How to Eliminate Them)',
    excerpt: "Most homeowners miss these 12 common mosquito breeding spots — from clogged gutters to plant saucers. Find and eliminate every source before your first professional treatment of the season.",
    date: '2026-04-28',
    category: 'mosquito' as const,
  },
  {
    slug: 'tick-bite-symptoms-what-to-do-ontario',
    title: 'Tick Bite Symptoms & What to Do in Ontario: A Complete Step-by-Step Guide',
    excerpt: 'Found a tick on yourself or your child? This guide covers exactly what to do after a tick bite in Ontario — removal, monitoring, Lyme disease symptoms, and when to go to the ER.',
    date: '2026-05-01',
    category: 'tick' as const,
  },
  {
    slug: 'mosquito-tick-control-hamilton-burlington',
    title: 'Mosquito & Tick Control in Hamilton & Burlington: Escarpment & Waterfront Guide',
    excerpt: "Hamilton's Niagara Escarpment trails and Burlington's waterfront create some of the GTA's most intense mosquito and tick pressure. Here's what homeowners in both cities need to know.",
    date: '2026-05-05',
    category: 'mosquito' as const,
  },
  {
    slug: 'tick-control-vaughan-king-city-woodbridge',
    title: 'Tick Control in Vaughan, King City & Woodbridge: York Region Rural Property Guide',
    excerpt: 'Boyd Conservation Area, Kortright Centre, and King Township forest edges put York Region homeowners at serious tick risk. Professional treatment schedules and what to expect.',
    date: '2026-05-08',
    category: 'tick' as const,
  },
]

// ── Additional SEO blog posts (batch 3) — keyword-gap posts ──────────────────

export const NEW_BLOGS_3 = [
  {
    slug: 'mosquito-control-cost-ontario',
    title: 'How Much Does Mosquito Control Cost in Ontario? (2026 Pricing Guide)',
    excerpt: 'One-time spray, seasonal packages, and yard size pricing for professional mosquito barrier spray across the GTA and Ontario — transparent numbers, no surprises.',
    date: '2026-04-15',
    category: 'mosquito' as const,
  },
  {
    slug: 'outdoor-event-mosquito-control-gta',
    title: 'Outdoor Event Mosquito Control in the GTA: Weddings, Parties & Backyard Gatherings',
    excerpt: "Planning a backyard wedding, graduation party, or outdoor corporate event? Here's how a single pre-event barrier spray keeps mosquitoes away — and what to book, when.",
    date: '2026-04-18',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-tick-control-stoney-creek',
    title: 'Mosquito & Tick Control in Stoney Creek: Red Hill Valley to the Lake Ontario Shore',
    excerpt: "Stoney Creek's ravines, Red Hill Creek corridor, and lakeshore fringe create year-round mosquito and tick pressure. Here's what homeowners in this Hamilton community need to know.",
    date: '2026-04-22',
    category: 'mosquito' as const,
  },
  {
    slug: 'natural-eco-friendly-mosquito-control-ontario',
    title: 'Natural & Eco-Friendly Mosquito Control in Ontario: What Actually Works in 2026',
    excerpt: 'Garlic sprays, essential oils, mosquito dunks, and plant-based barriers — an honest breakdown of natural mosquito control options for Ontario homeowners and when to combine them with professional treatment.',
    date: '2026-04-25',
    category: 'mosquito' as const,
  },
  {
    slug: 'tick-control-ancaster-dundas-hamilton',
    title: 'Tick Control in Ancaster & Dundas: Living on the Escarpment Edge in Hamilton',
    excerpt: "Ancaster and Dundas sit at the base of the Niagara Escarpment — Ontario's most active tick corridor. Why these Hamilton suburbs have some of the highest tick risk in the GTA, and what to do about it.",
    date: '2026-04-29',
    category: 'tick' as const,
  },
]

export const NEW_BLOGS_4 = [
  {
    slug: 'mosquito-spray-companies-gta',
    title: 'Mosquito Spray Companies in the GTA: What to Look For Before You Book (2026)',
    excerpt: 'Not all mosquito spraying companies are the same. Here is what GTA homeowners should check before booking — Health Canada approval, guarantee policies, what lawn spraying actually involves, and red flags to avoid.',
    date: '2026-05-02',
    category: 'mosquito' as const,
  },
]

export const NEW_BLOGS_5 = [
  {
    slug: 'tick-bite-vs-mosquito-bite',
    title: 'Tick Bite vs Mosquito Bite: How to Tell the Difference',
    excerpt: 'Both leave a red mark — but the health risks are very different. What each bite looks like, when to watch for Lyme disease symptoms, and how to protect your yard.',
    date: '2026-04-07',
    category: 'tick' as const,
  },
]

export const NEW_BLOGS_6 = [
  {
    slug: 'tick-prevention-yard-ontario-safe-for-kids',
    title: 'Tick Prevention in Your Yard: Ontario Safe-for-Kids Guide (2026)',
    excerpt: 'How to make your Ontario backyard safe from ticks — yard modifications, DIY measures, and professional barrier spray safe for children and pets. For families across the GTA.',
    date: '2026-04-07',
    category: 'tick' as const,
  },
]

export const NEW_BLOGS_7 = [
  {
    slug: 'black-flies-ontario-when-they-come-out',
    title: 'Black Flies in Ontario: When They Come Out and How to Stop Them',
    excerpt: 'Black fly season in Ontario peaks May–July. Where they breed, GTA risk zones, and how professional barrier spray controls them.',
    date: '2026-04-26',
    category: 'mosquito' as const,
  },
  {
    slug: 'bugs-that-look-like-ticks',
    title: '5 Bugs That Look Like Ticks (And How to Tell Them Apart)',
    excerpt: 'Bed bugs, weevils, spider beetles, bat bugs, and dog ticks vs deer ticks — visual identification guide for Ontario homeowners.',
    date: '2026-04-26',
    category: 'tick' as const,
  },
  {
    slug: 'do-cedar-trees-attract-mosquitoes',
    title: 'Do Cedar Trees Attract Mosquitoes? The Honest Answer',
    excerpt: 'Cedars do not attract mosquitoes — cedar oil repels them. But dense cedar hedges create damp shaded mosquito resting habitat.',
    date: '2026-04-26',
    category: 'mosquito' as const,
  },
  {
    slug: 'why-mosquitoes-bite-some-people-more',
    title: 'Why Mosquitoes Bite Some People More Than Others (Science-Backed)',
    excerpt: 'Blood type, body heat, CO2, lactic acid, pregnancy, alcohol, dark clothing — research-backed reasons mosquitoes prefer some people.',
    date: '2026-04-26',
    category: 'mosquito' as const,
  },
]

// Wave 11 — Jun 3, 2026 cluster: city-specific tick/mosquito/Lyme/WNV pages.
// Designed to capitalize on the news-boost crawl budget (~2,221 clicks/28d as of
// Jun 3) and target serviced-city long-tail keywords where competition is low.
// See seo_master_plan_2026.md in claude memory for the strategic rationale.
export const NEW_BLOGS_11 = [
  {
    slug: 'tick-season-mississauga-when-are-ticks-active',
    title: 'Tick Season in Mississauga 2026: When Ticks Are Most Active',
    excerpt: 'Mississauga-specific tick activity calendar — Credit River corridor, Rattray Marsh, and Riverwood as confirmed risk zones. Month-by-month protection plan for Peel Region homeowners.',
    date: '2026-06-03',
    category: 'tick' as const,
  },
  {
    slug: 'tick-hot-spots-mississauga-2026',
    title: 'Mississauga Tick Hot Spots 2026: Highest-Risk Neighbourhoods',
    excerpt: 'Lorne Park, Mineola, Erindale, Streetsville, Meadowvale ranked by tick pressure. Credit Valley corridor explained, plus the lakefront vs ravine adjacency distinction.',
    date: '2026-06-03',
    category: 'tick' as const,
  },
  {
    slug: 'west-nile-virus-mississauga-2026',
    title: 'West Nile Virus in Mississauga 2026: Risk, Surveillance, Yard Protection',
    excerpt: 'Peel Public Health surveillance, Culex pipiens vector behaviour, Lake Ontario shoreline + Credit River wetland breeding habitat, plus practical yard-level prevention.',
    date: '2026-06-03',
    category: 'mosquito' as const,
  },
  {
    slug: 'when-to-spray-mosquitoes-mississauga-2026',
    title: 'When to Spray for Mosquitoes in Mississauga (2026 Service Calendar)',
    excerpt: 'Bottom-funnel timing guide — May/June first spray, biweekly cadence, September final spray. Waterfront vs Credit Valley vs inland property differences.',
    date: '2026-06-03',
    category: 'mosquito' as const,
  },
  {
    slug: 'tick-season-oakville-when-are-ticks-active',
    title: 'Tick Season in Oakville 2026: When Blacklegged Ticks Are Most Active',
    excerpt: '16 Mile Creek corridor as Oakville\'s tick spine. Bronte Creek Provincial Park surveillance data, North Oakville new-build risk, and Halton Region Public Health monitoring.',
    date: '2026-06-03',
    category: 'tick' as const,
  },
  {
    slug: 'tick-season-burlington-when-are-ticks-active',
    title: 'Tick Season in Burlington 2026: Why the Lakefront and Escarpment Edge Are at Highest Risk',
    excerpt: 'Niagara Escarpment edge (Mt. Nemo, Mountainside), Royal Botanical Gardens surveillance, Aldershot + Tyandaga + Millcroft risk profiles. Greenfield tick content for Burlington.',
    date: '2026-06-03',
    category: 'tick' as const,
  },
  {
    slug: 'tick-hot-spots-oakville-burlington-2026',
    title: 'Oakville and Burlington Tick Hot Spots 2026: Halton Region Highest-Risk Neighbourhoods',
    excerpt: 'Glen Abbey golf-course edges, Bronte Creek-adjacent properties, Mt. Nemo escarpment edge in Burlington, Joshua Creek + Iroquois Ridge. Lakefront-low vs ravine-meets-lakeshore distinction.',
    date: '2026-06-03',
    category: 'tick' as const,
  },
  {
    slug: 'black-flies-mississauga-toronto-gta-2026',
    title: 'Black Flies in the GTA 2026: Toronto, Mississauga, and the Cottage-Country Migration',
    excerpt: 'GTA-specific extension of our top-traffic Ontario black fly page. Why Credit River and Don Valley get hit harder, suburban-vs-urban risk, and what actually works against black flies.',
    date: '2026-06-03',
    category: 'mosquito' as const,
  },
  {
    slug: 'lyme-disease-cases-mississauga-oakville-2026',
    title: 'Lyme Disease Cases in Mississauga and Oakville 2026: What the Numbers Show',
    excerpt: 'Peel and Halton Region Public Health Lyme case trends. What the surveillance counts include and miss. Family protection recommendations grounded in case data.',
    date: '2026-06-03',
    category: 'tick' as const,
  },
  {
    slug: 'professional-vs-diy-mosquito-control-gta-comparison',
    title: 'Professional vs DIY Mosquito Control in the GTA: 2026 Cost, Effectiveness & Safety Comparison',
    excerpt: 'Pillar comparison — citronella, Thermacell, Mosquito Magnet, Dynatrap, dunks, bits, permethrin vs professional barrier spray. Annual cost math, real effectiveness, honest recommendation.',
    date: '2026-06-03',
    category: 'mosquito' as const,
  },
]

export const NEW_BLOGS_10 = [
  {
    slug: 'mosquito-dunks-canada-guide',
    title: 'Mosquito Dunks — Complete Canada Guide (2026)',
    excerpt: 'Where to buy mosquito dunks in Canada, how BTI works, dunks vs bits, safety. Combine with professional yard spray for total control.',
    date: '2026-04-28',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-larvae-identification',
    title: 'Mosquito Larvae — Identification, Lifecycle & Removal',
    excerpt: 'How to identify mosquito larvae, where they live, and how to get rid of them. Visual guide for Ontario homeowners.',
    date: '2026-04-28',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-hawk-explained',
    title: 'Mosquito Hawk — What It Actually Is (Crane Fly Truth)',
    excerpt: 'Crane flies (mosquito hawks) do NOT eat mosquitoes despite the name. Identification, lifecycle, and what to do.',
    date: '2026-04-28',
    category: 'mosquito' as const,
  },
  {
    slug: 'american-dog-tick-canada',
    title: 'American Dog Tick — Canada Identification & Risk Guide',
    excerpt: 'How to identify the American dog tick in Canada, where they live, disease risk (low), removal, and prevention.',
    date: '2026-04-28',
    category: 'tick' as const,
  },
  {
    slug: 'deer-tick-vs-dog-tick-canada',
    title: 'Deer Tick vs Dog Tick — Canada Identification (2026)',
    excerpt: 'How to tell a deer tick (blacklegged) from a dog tick (American). Size, pattern, disease risk, and yard prevention.',
    date: '2026-04-28',
    category: 'tick' as const,
  },
]

export const NEW_BLOGS_9 = [
  {
    slug: 'mosquito-repellent-guide-ontario-2026',
    title: 'Mosquito Repellent Guide — Ontario 2026 (What Actually Works)',
    excerpt: 'Evidence-based 2026 mosquito repellent guide for Ontario. DEET, picaridin, OLE, natural options, scams to avoid.',
    date: '2026-04-26',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-magnet-vs-professional-spray',
    title: 'Mosquito Magnet vs Professional Spray — Honest Comparison',
    excerpt: 'Mosquito Magnet trap units vs professional barrier spray. Cost, effectiveness, real-world performance for Ontario backyards.',
    date: '2026-04-26',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-tick-repellent-yard-canada',
    title: 'Best Tick Repellent for Yards — Canada 2026',
    excerpt: 'Best tick repellents for Canadian yards. Cedar oil, professional barrier spray, DIY options compared.',
    date: '2026-04-26',
    category: 'tick' as const,
  },
  {
    slug: 'tick-removal-tool-guide',
    title: 'Best Tick Removal Tools — Tested for Ontario 2026',
    excerpt: 'Tick Twister vs TickKey vs fine-tipped tweezers. The $7 tool every Ontario household with a dog should keep at home.',
    date: '2026-04-26',
    category: 'tick' as const,
  },
  {
    slug: 'mosquito-netting-vs-barrier-spray',
    title: 'Mosquito Netting vs Barrier Spray — Which Is Better?',
    excerpt: 'Mosquito netting vs professional barrier spray for backyards. Cost, coverage, when to use which.',
    date: '2026-04-26',
    category: 'mosquito' as const,
  },
]

export const NEW_BLOGS_8 = [
  {
    slug: 'how-to-remove-tick-from-dog-ontario',
    title: 'How to Remove a Tick from a Dog (Ontario Guide 2026)',
    excerpt: 'Step-by-step tick removal for Ontario dog owners. Safe method, what NOT to do, when to see the vet, Lyme risk, and yard prevention.',
    date: '2026-04-26',
    category: 'tick' as const,
  },
  {
    slug: 'i-found-tick-on-my-dog-what-to-do',
    title: 'I Found a Tick on My Dog — What to Do (Ontario 2026)',
    excerpt: 'A clear, fast Ontario field guide for the moment of panic. What to do in the next 5 minutes, what to watch for over 5 months.',
    date: '2026-04-26',
    category: 'tick' as const,
  },
  {
    slug: 'natural-mosquito-repellent-ontario',
    title: 'Natural Mosquito Repellent — What Actually Works in Ontario (2026)',
    excerpt: 'Honest, research-backed guide to natural mosquito repellents. Citronella, OLE, BTI, plants, fans — what works and what does not.',
    date: '2026-04-26',
    category: 'mosquito' as const,
  },
  {
    slug: 'tick-bite-on-dog-symptoms',
    title: 'Tick Bite on Dog — Symptoms, What to Watch For (Ontario 2026)',
    excerpt: 'What a tick bite looks like on a dog, Lyme disease symptoms timeline, when to call the vet, treatment, and prevention.',
    date: '2026-04-26',
    category: 'tick' as const,
  },
  {
    slug: 'what-does-tick-look-like-on-dog',
    title: 'What Does a Tick Look Like on a Dog? (Ontario Field Guide 2026)',
    excerpt: 'Photos and descriptions to identify ticks on dogs. Tick vs skin tag vs flea, deer tick vs dog tick, embedded vs engorged.',
    date: '2026-04-26',
    category: 'tick' as const,
  },
]

// ── Apr 2026 listicle posts — registered Jun 2026 (SEO audit fix) ──────────────
// These four posts existed on disk and in the sitemap (via extraBlogSlugs) since
// late April but were never added to a constants array, so the /blog index never
// rendered them — making them internal-link orphans despite earning impressions
// and clicks in GSC. Registering them here lists them on /blog and removes the
// orphan state. The sitemap's extraBlogSlugs dedupe filter automatically stops
// double-listing once they appear here.
export const NEW_BLOGS_12 = [
  {
    slug: 'how-to-get-rid-of-mosquitoes-in-yard-ontario',
    title: 'How to Get Rid of Mosquitoes in Your Yard (Ontario Guide)',
    excerpt: '12 proven steps to get rid of mosquitoes in your yard — from eliminating standing water to professional barrier spray. Tested in GTA conditions.',
    date: '2026-04-29',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-keep-ticks-out-of-yard-ontario',
    title: 'How to Keep Ticks Out of Your Yard (Ontario)',
    excerpt: '10 proven steps for keeping ticks out of your yard and preventing Lyme disease, focused on the GTA\'s confirmed blacklegged tick zones.',
    date: '2026-04-29',
    category: 'tick' as const,
  },
  {
    slug: 'mosquito-mistakes-ontario-homeowners-make',
    title: '12 Mosquito Mistakes Ontario Homeowners Make',
    excerpt: 'The most common mosquito-control mistakes — citronella candles, late-season treatment, ignored rain barrels — and what actually works instead.',
    date: '2026-04-29',
    category: 'mosquito' as const,
  },
  {
    slug: 'tick-bites-that-wont-heal-when-to-worry',
    title: 'Tick Bites That Won\'t Heal: When to Worry (Ontario)',
    excerpt: 'A tick bite that doesn\'t heal could signal Lyme disease, alpha-gal syndrome, or secondary infection. Symptoms and when to see a doctor.',
    date: '2026-04-29',
    category: 'tick' as const,
  },
]

// ── Wave 13 — AI-citation targets (Jul 2026) ──────────────────────────────────
// Question + comparison formats on KD 0-5 clusters with no existing page.
// These are the shapes AI Overviews cite most: a direct answer capsule under a
// question heading, an extractable comparison table, and a 7-question FAQ block.
//   do-ticks-fly-or-jump → do ticks fly/jump, can ticks fly/jump (~2,050/mo CA)
//   tick-vs-bed-bug      → tick vs bed bug (500/mo, KD 1) — sibling to our #1
//                          bugs-that-look-like-ticks post
export const NEW_BLOGS_13 = [
  {
    slug: 'do-ticks-fly-or-jump',
    title: 'Do Ticks Fly or Jump? How They Actually Get on You (Ontario)',
    excerpt: 'No — ticks cannot fly or jump. They climb grass and wait to grab a passing host. How questing works, how high ticks climb, and how to stop them in your yard.',
    date: '2026-07-09',
    category: 'tick' as const,
  },
  {
    slug: 'tick-vs-bed-bug',
    title: 'Tick vs Bed Bug: How to Tell Them Apart (ID Chart)',
    excerpt: 'Count the legs: ticks have 8, bed bugs have 6. Ticks attach for days outdoors; bed bugs feed for minutes indoors. Full ID chart, bite differences, and treatments.',
    date: '2026-07-09',
    category: 'tick' as const,
  },
  {
    slug: 'tick-repellent-for-dogs-ontario',
    title: 'Tick Repellent for Dogs: What Actually Works (Ontario)',
    excerpt: 'Which preventatives kill ticks fastest, whether dog ticks carry Lyme, the truth about "kills ticks instantly," and why natural repellents fall short in Ontario.',
    date: '2026-07-09',
    category: 'tick' as const,
  },
  {
    slug: 'west-nile-virus-toronto-2026',
    title: 'West Nile Virus in Toronto: 2026 Risk, Symptoms & Prevention',
    excerpt: 'West Nile risk in Toronto peaks in August. Which mosquitoes carry it, why stagnant water matters more than puddles, symptoms to watch, and how to protect your yard.',
    date: '2026-07-09',
    category: 'mosquito' as const,
  },
]

// ── Wave 14 — product buyer's-guides (Jul 12 2026) ────────────────────────────
// High-volume Canadian product/affiliate keywords with no prior page. Each is a
// monetized buyer's guide (comparison table + Amazon BuyLinks + FAQ) cross-linked
// into the existing product-post cluster.
export const NEW_BLOGS_14 = [
  {
    slug: 'best-mosquito-repellent-device-canada',
    title: 'Best Mosquito Repellent Device Canada 2026 — Machines Ranked',
    excerpt: 'Every mosquito repellent machine ranked for Canada — Thermacell, propane CO2 traps, foggers and bug zappers on coverage, price and what actually works.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-net',
    title: 'Mosquito Net Canada 2026: Best Nets by Use + Where to Buy',
    excerpt: 'The right mosquito net for every job: bed canopy, head net, hammock, and stroller nets compared — with real 2026 Canadian prices.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'citronella-candles-canada-do-they-work',
    title: 'Do Citronella Candles Work? Honest 2026 Canada Verdict',
    excerpt: 'Citronella candles work — but barely: a ~1m bubble that wind erases. Our honest 2026 verdict, best torches and coils, and what actually stops bites.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'ortho-home-defense-canada-review',
    title: 'Ortho Home Defense Canada 2026: Review & What\'s Sold Here',
    excerpt: 'The bifenthrin Home Defense in US stores isn\'t legal in Canada. Here\'s what\'s actually sold here, how to use it safely, and when to hire a pro.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-mosquito-trap',
    title: 'Best Mosquito Trap Canada 2026: Propane vs UV vs CO2',
    excerpt: 'Propane, UV+fan, CO2 lure, and indoor mosquito traps compared for Canadian yards — how each works, honest effectiveness, 2026 prices, and where to buy.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'off-deep-woods-deet-bug-spray-canada',
    title: 'OFF Deep Woods & DEET Bug Spray Canada — Which to Buy',
    excerpt: 'OFF Deep Woods vs FamilyCare, DEET %/duration explained, safe use for kids and pets, and where to buy OFF bug spray in Canada.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-bug-spray-for-kids-canada',
    title: 'Best Bug Spray for Kids in Canada 2026 — Safe Picks by Age',
    excerpt: 'Health Canada\'s DEET and icaridin age limits, DEET-free picks, and the safest bug sprays for babies, toddlers, and kids — plus where to buy.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-coils-canada',
    title: 'Mosquito Coils Canada 2026: Do They Work & Are They Safe?',
    excerpt: 'How mosquito coils work, why you must never burn them indoors, and the best PIC, OFF! and citronella coils to buy in Canada in 2026.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-repellent-for-dogs',
    title: 'Mosquito Repellent for Dogs in Canada: Vet-Safe Picks',
    excerpt: 'Safe mosquito repellent for dogs in Canada: vet-approved picks, why never DEET, the permethrin-and-cats warning, and heartworm facts.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-fogger-canada',
    title: 'Mosquito Fogger Canada 2026 — Do They Work? + Best Models',
    excerpt: 'How mosquito foggers work, propane vs electric, which fogging liquid to buy, and the honest limits — plus top Canadian models and prices.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'wondercide-canada-review',
    title: 'Wondercide Canada 2026: Honest Review + Where to Buy',
    excerpt: 'Is Wondercide\'s cedar-oil flea & tick spray available in Canada? Honest review, real 2026 pricing, where to buy, plus Flea & Tick vs Yard + Garden.',
    date: '2026-07-12',
    category: 'tick' as const,
  },
  {
    slug: 'mosquito-repellent-bracelets-canada',
    title: 'Mosquito Repellent Bracelets Canada — Do They Work?',
    excerpt: 'Do mosquito repellent bracelets actually work? The honest 2026 verdict for Canada — when citronella bands help, when they don\'t, and better options.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-screens-patio-canada',
    title: 'Mosquito Screens for Your Patio (Canada 2026) — Buyer\'s Guide',
    excerpt: 'Pop-up screen houses, screened gazebos, magnetic screen doors, netting or window kits? Which mosquito screen fits your patio, with 2026 Canadian prices.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'laser-mosquito-killer-photon-matrix-review',
    title: 'Laser Mosquito Killer & Photon Matrix: Is It Real? (2026)',
    excerpt: 'Is the Photon Matrix laser mosquito killer real or crowdfunding hype? An honest 2026 reality-check, plus what actually works in your yard today.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-repellent-stickers-patches-canada',
    title: 'Mosquito Repellent Stickers & Patches: Do They Work?',
    excerpt: 'Do citronella repellent stickers and patches actually work? An honest Canadian guide to DEET-free options for kids and babies.',
    date: '2026-07-12',
    category: 'mosquito' as const,
  },
]

// ── Wave 15 — competitor-gap + AI-citation pages (Jul 13 2026) ────────────────
// High-volume Canadian keywords competitors ranked for and we didn't exist for,
// plus low-KD AI-Overview citation bait (answer-first + FAQ schema + authority
// citations). no-see-ums / deer flies / june bugs / mosquito facts hub, etc.
export const NEW_BLOGS_15 = [
  {
    slug: 'no-see-ums-biting-midges-ontario',
    title: 'No-See-Ums & Biting Midges in Ontario: Bites, Screens & Control',
    excerpt: 'Why no-see-ums slip through screens, how their bites differ from mosquito bites, when they swarm in Ontario, and how to stop them.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'deer-flies-horse-flies-ontario',
    title: 'Deer Flies vs Horse Flies in Ontario: ID, Bites & Control',
    excerpt: 'Tell deer flies from horse flies, learn why they dive-bomb your head, treat the painful bite, and control biting flies in your Ontario yard.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'june-bugs-ontario',
    title: 'June Bugs Ontario: ID, Why They Swarm Lights & How to Stop Them',
    excerpt: 'June beetles are harmless to people but their grubs wreck lawns. How to ID them, why they swarm porch lights, and how to keep them out of your yard.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'can-ticks-fly-jump-swim',
    title: 'Can Ticks Fly, Jump, or Swim? (Myths vs Facts, Ontario)',
    excerpt: 'No — ticks cannot fly, jump, or swim. They quest from grass to grab a host, and survive underwater for days without drowning. Myths vs facts.',
    date: '2026-07-13',
    category: 'tick' as const,
  },
  {
    slug: 'male-vs-female-mosquito',
    title: 'Male vs Female Mosquito: Only Females Bite (Here Is Why)',
    excerpt: 'Only female mosquitoes bite; males feed on nectar. Compare male vs female by diet, bite, lifespan and antennae — and why it matters for control.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'what-eats-ticks-and-mosquitoes',
    title: 'What Eats Ticks and Mosquitoes? Predators Ranked (Ontario)',
    excerpt: 'Dragonflies, bats, opossums, guinea fowl, frogs, fish and nematodes ranked by how well each really controls mosquitoes and ticks in your yard.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-facts',
    title: 'Mosquito Facts: How Long They Live, What They Eat & More',
    excerpt: 'Straight answers to the mosquito questions people ask most: how long they live, whether they sleep, if males bite, and what mosquitoes really eat.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'thermacell-refills-recharge-canada',
    title: 'Thermacell Refills & Recharge Canada: Costs & Compatibility',
    excerpt: 'Which Thermacell refill fits the E55, E90, Patio Shield or Liv, what it costs per hour, where to buy in Canada, and how to recharge and replace.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'baby-ticks-nymphs-seed-ticks-ontario',
    title: 'Baby Ticks: Nymphs & Seed Ticks in Ontario (Size + ID)',
    excerpt: 'Baby ticks explained: seed-tick larvae (~0.5 mm, six legs) vs nymphs (~1-2 mm) that cause most Lyme in Ontario — size chart, ID, and safe removal.',
    date: '2026-07-13',
    category: 'tick' as const,
  },
  {
    slug: 'best-indoor-fly-mosquito-trap-canada',
    title: "Best Indoor Fly & Mosquito Trap Canada 2026 (Buyer's Guide)",
    excerpt: 'Plug-in UV, fan-suction, and glue-board indoor traps compared by room size and refill cost — plus the honest truth about how well any catch mosquitoes.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'smells-mosquitoes-hate',
    title: 'Smells Mosquitoes Hate: 6 Scents That Actually Repel',
    excerpt: 'Citronella, lemongrass, peppermint, lavender, lemon eucalyptus and garlic — how well each scent repels mosquitoes and how long it lasts.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'where-do-mosquitoes-go-in-winter-ontario',
    title: 'Where Do Mosquitoes Go in Winter? (Ontario Explained)',
    excerpt: 'Mosquitoes do not die in winter — they overwinter as frost-hardy eggs, hibernating females, or dormant larvae, then return in May.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'blacklegged-deer-tick-ontario',
    title: 'Blacklegged (Deer) Tick Ontario: ID, Range & Lyme Risk',
    excerpt: 'The blacklegged (deer) tick, Ixodes scapularis, is Ontario\'s only Lyme vector. Identify it by life stage, know the hot-spots, remove it safely.',
    date: '2026-07-13',
    category: 'tick' as const,
  },
  {
    slug: 'how-to-do-a-tick-check',
    title: 'How to Do a Tick Check: Full-Body Checklist (Ontario)',
    excerpt: 'A step-by-step full-body tick check: where ticks hide, how to check kids and pets, your after-hike routine, and what to do if you find one.',
    date: '2026-07-13',
    category: 'tick' as const,
  },
]

// ── Wave 16 — biggest remaining gaps + AI/US-neutral pages (Jul 13 2026) ──────
// Geo-neutral (US + Canada on one URL) high-volume terms: Lyme symptoms (24K),
// mosquito-bite treatment, the tick-ID pillar hub, "what attracts mosquitoes".
export const NEW_BLOGS_16 = [
  {
    slug: 'lyme-disease-symptoms-guide',
    title: 'Lyme Disease Symptoms: Early Signs, Rash & Stages Guide',
    excerpt: 'Lyme disease symptoms by stage: the early bullseye (erythema migrans) rash, flu-like signs, the 3-30 day timeline, and when to see a doctor.',
    date: '2026-07-13',
    category: 'tick' as const,
  },
  {
    slug: 'mosquito-bite-treatment-relief',
    title: 'Mosquito Bite Treatment: How to Stop the Itch Fast',
    excerpt: 'How to get rid of mosquito bites and stop the itch fast — what works, what to skip, plus signs of infection, skeeter syndrome, and when to see a doctor.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'types-of-ticks-identification',
    title: 'Types of Ticks: Identification Chart, Size & ID Guide',
    excerpt: 'Identify the common North American ticks by size, colour and range — blacklegged/deer, American dog, lone star, brown dog and wood ticks, with an ID chart.',
    date: '2026-07-13',
    category: 'tick' as const,
  },
  {
    slug: 'what-attracts-mosquitoes-to-you',
    title: 'What Attracts Mosquitoes to You? Why They Pick You (2026)',
    excerpt: 'Mosquitoes zero in on CO2, body heat, type O blood, skin bacteria and dark clothing — here is what really draws them, and how to bite back.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'red-ticks-and-clover-mites',
    title: 'Red Ticks & Clover Mites: What Tiny Red Bugs Really Are',
    excerpt: 'Most "red ticks" are actually clover mites or engorged ticks, not a red tick species. Compare clover mites, engorged ticks, and lone star ticks.',
    date: '2026-07-13',
    category: 'tick' as const,
  },
  {
    slug: 'are-ticks-arachnids-or-insects',
    title: 'Are Ticks Arachnids or Insects? Why They Have 8 Legs',
    excerpt: 'Ticks are arachnids, not insects — 8 legs like spiders and mites, no wings, no antennae. See the tick vs insect vs spider comparison.',
    date: '2026-07-13',
    category: 'tick' as const,
  },
  {
    slug: 'when-are-mosquitoes-most-active',
    title: 'When Are Mosquitoes Most Active? Time of Day & Temperature',
    excerpt: 'Mosquitoes are most active at dawn and dusk when heat and wind drop. See the time-of-day and temperature table, plus why Aedes bite midday.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
  {
    slug: 'horse-fly-and-deer-fly-bite-treatment',
    title: 'Horse Fly & Deer Fly Bite Treatment: Relief, Healing, Risks',
    excerpt: 'Horse fly and deer fly bites hurt because their scissor-like mouthparts cut skin. Fast first aid, a relief table, healing time, and infection signs.',
    date: '2026-07-13',
    category: 'mosquito' as const,
  },
]

// ── Wave 17 — high-ticket Amazon product buyer's guides (Jul 14 2026) ─────────
// Ahrefs-validated CA buyer-intent clusters (~7,800/mo combined, KD 0-4), all
// products amazon.ca-availability-confirmed. Screen tents (~2,500/mo) was the
// single biggest coverage gap; propane traps carry the highest commission/sale.
export const NEW_BLOGS_17 = [
  {
    slug: 'best-screen-tent-canada',
    title: 'Best Screen Tents & Screen Houses in Canada 2026',
    excerpt: 'Hub shelters, Coleman instant frames, pop-up screen rooms and pole-style dining tents compared on size (8x8 to 15x13), setup speed, wind tolerance and black-fly season performance.',
    date: '2026-07-14',
    category: 'mosquito' as const,
  },
  {
    slug: 'propane-mosquito-trap-canada',
    title: 'Propane Mosquito Traps in Canada 2026: Are $1,000+ CO2 Traps Worth It?',
    excerpt: 'How propane mosquito traps make a CO2 plume to kill biting females, the real 1-acre coverage and fuel-cost math, and when a $1,000+ trap beats barrier spray.',
    date: '2026-07-14',
    category: 'mosquito' as const,
  },
  {
    slug: 'backpack-sprayer-canada',
    title: 'Best Backpack Sprayers in Canada 2026 — Battery vs Manual for Mosquito & Tick Yard Treatment',
    excerpt: 'Battery vs manual backpack sprayers — what GTA mosquito control technicians actually carry, PMRA-legal products for Ontario, and the nozzle & PSI settings that work.',
    date: '2026-07-14',
    category: 'mosquito' as const,
  },
  {
    slug: 'thermacell-e90-canada-review',
    title: 'Thermacell E90 Review Canada 2026 — vs E55, vs EX90 & Which Refills to Buy',
    excerpt: 'Full Canadian review of the Thermacell E90 rechargeable repeller: 9-hour runtime, real-world 20-ft zone performance, E90 vs E55 vs EX90, and which refills to buy.',
    date: '2026-07-14',
    category: 'mosquito' as const,
  },
  {
    slug: 'electric-fly-swatter',
    title: 'Best Electric Fly Swatter Canada 2026 — The Executioner vs Zap It vs Black Flag',
    excerpt: 'The Executioner vs Zap It vs Black Flag on Amazon.ca — grid voltage, single vs 3-layer mesh safety, battery vs USB, and what a bug zapper racket honestly kills.',
    date: '2026-07-14',
    category: 'mosquito' as const,
  },
  {
    slug: 'tick-tubes-canada',
    title: 'Tick Tubes in Canada 2026: Do They Actually Work?',
    excerpt: 'How permethrin-cotton tick tubes break the deer-tick life cycle through mice, when and where to place them in Ontario yards, and Thermacell vs generic vs DIY.',
    date: '2026-07-14',
    category: 'tick' as const,
  },
  {
    slug: 'misting-fan-canada',
    title: 'Best Outdoor Misting Fans in Canada 2026 for Patios — and Do They Keep Mosquitoes Away?',
    excerpt: 'Do misting fans keep mosquitoes away? An honest guide for Canadian patios: cooling for GTA heat waves, complete fans vs kits, and fan vs zapper vs barrier spray.',
    date: '2026-07-14',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-solar-bug-zapper-canada',
    title: 'Best Solar Bug Zappers in Canada 2026 — What a $30–60 Solar Zapper Can Actually Kill',
    excerpt: 'Honest guide to solar bug zappers in Canada: what stake and lantern zappers really kill, where solar beats plug-in, and when to step up to a Flowtron or trap.',
    date: '2026-07-14',
    category: 'mosquito' as const,
  },
  {
    slug: 'flowtron-bug-zapper-canada',
    title: 'Flowtron Bug Zapper Canada Review 2026: BK-15D vs BK-40D vs BK-80D',
    excerpt: 'BK-15D vs BK-40D vs BK-80D coverage compared, the octenol mosquito cartridge, BF-190 bulb replacement, and why placement 25 feet from the patio matters.',
    date: '2026-07-14',
    category: 'mosquito' as const,
  },
  {
    slug: 'co2-mosquito-trap-canada',
    title: 'CO2 Mosquito Traps in Canada 2026: Biogents vs Propane Traps (No Tank Required)',
    excerpt: 'How research-grade Biogents CO2 traps compare to propane traps like Mosquito Magnet — sugar-yeast vs propane CO2, the BG-GAT trick, and real cost per season.',
    date: '2026-07-14',
    category: 'mosquito' as const,
  },
  {
    slug: 'bug-protective-clothing-canada',
    title: 'Bug Jackets, Head Nets & Protective Clothing in Canada 2026 — Black Fly Season Survival Kit',
    excerpt: 'The best bug jackets, mosquito head nets and PMRA-legal permethrin-treated clothing in Canada — plus a black-fly season survival kit for cottage country.',
    date: '2026-07-14',
    category: 'mosquito' as const,
  },
  {
    slug: 'patio-misting-system-canada',
    title: 'Patio Misting Systems in Canada 2026: DIY Kits vs Professional Mosquito Misting Installs',
    excerpt: 'Cooling mist vs insecticide mist, the best hose-fed kits on Amazon.ca, why MistAway-style installs are rare in Canada, water pressure needs, and winterizing.',
    date: '2026-07-14',
    category: 'mosquito' as const,
  },
]

// ── Wave 18 — AI-citation question pages (Jul 15 2026) ────────────────────────
// The "Neil Patel" AI-Overview play: 12 answer-first pages targeting the biggest
// real questions Canadians ask (~14,500/mo CA of gaps) that our commercial pages
// can't rank for at the exact phrasing. Health topics (Lyme, DEET, bite triage)
// are PHAC/Health-Canada/CDC-cited and hedged (YMYL). No products pushed.
export const NEW_BLOGS_18 = [
  {
    slug: 'what-does-a-tick-bite-look-like',
    title: 'What Does a Tick Bite Look Like? Pictures, Timeline & How to Identify One (2026)',
    excerpt: 'What does a tick bite look like? A day-by-day appearance timeline, on humans vs on dogs vs embedded ticks, a bite comparison table, and when to see a doctor.',
    date: '2026-07-15',
    category: 'tick' as const,
  },
  {
    slug: 'can-lyme-disease-kill-you',
    title: 'Can Lyme Disease Kill You, and Is It Curable? (2026 Canada Facts)',
    excerpt: 'Can Lyme disease kill you? Is it curable or contagious? Plain-English, PHAC-cited answers for Canadians: early antibiotics are near-100% effective, deaths very rare.',
    date: '2026-07-15',
    category: 'tick' as const,
  },
  {
    slug: 'why-do-mosquito-bites-itch',
    title: 'Why Do Mosquito Bites Itch — and How Long Do They Last?',
    excerpt: 'Why mosquito bites itch: your immune system releases histamine against mosquito saliva. The 3-7 day timeline, why bites feel worse at night, and why some swell up big.',
    date: '2026-07-15',
    category: 'mosquito' as const,
  },
  {
    slug: 'what-blood-type-do-mosquitoes-bite',
    title: 'What Blood Type Do Mosquitoes Bite Most? Science vs Myth (2026)',
    excerpt: 'Do mosquitoes really prefer Type O blood? The science says the Type O myth is weak and overhyped — CO2, body heat and skin bacteria decide who gets bitten.',
    date: '2026-07-15',
    category: 'mosquito' as const,
  },
  {
    slug: 'what-flowers-attract-mosquitoes',
    title: 'What Flowers & Plants Attract Mosquitoes? An Ontario Garden Guide',
    excerpt: 'Flowers do not bite you — but water-holding plants like bromeliads, taro and water lettuce breed mosquitoes, while nectar blooms feed adults. Ontario guide.',
    date: '2026-07-15',
    category: 'mosquito' as const,
  },
  {
    slug: 'why-do-mosquitoes-exist',
    title: 'Why Do Mosquitoes Exist? Their Purpose, Pollination Role & the Extinction Debate',
    excerpt: 'Do mosquitoes have a purpose? A balanced answer — pollination, their food-web role, the Nature extinction debate, and why a few species are the deadliest animal.',
    date: '2026-07-15',
    category: 'mosquito' as const,
  },
  {
    slug: 'when-to-worry-about-a-mosquito-bite',
    title: 'When to Worry About a Mosquito Bite: Infection Signs, Allergy & When to See a Doctor (2026)',
    excerpt: 'Most mosquito bites are harmless, but some are not. How to spot an infected bite vs a normal reaction, allergic swelling, and exactly when to see a doctor.',
    date: '2026-07-15',
    category: 'mosquito' as const,
  },
  {
    slug: 'can-dogs-get-lyme-disease',
    title: 'Can Dogs Get Lyme Disease From Ticks? Signs, Stages & Treatment (2026)',
    excerpt: 'Yes — dogs get Lyme from infected ticks. The first signs (shifting-leg lameness, fever), the 3 stages, whether it is curable, treatment, and whether cats are at risk.',
    date: '2026-07-15',
    category: 'tick' as const,
  },
  {
    slug: 'how-long-do-ticks-live',
    title: 'How Long Do Ticks Live — and Can They Live in Your House? (Ontario)',
    excerpt: 'Ticks live 2-3 years and survive months without a host in humid conditions — but rarely in your house, since indoor air is too dry. Winter survival, dog facts.',
    date: '2026-07-15',
    category: 'tick' as const,
  },
  {
    slug: 'is-deet-safe',
    title: 'Is DEET Safe? What It Is, Cancer Myths & Health Canada Limits (2026)',
    excerpt: 'Is DEET safe, or is it bad for you? A calm, Health-Canada- and CDC-backed explainer: what DEET is, the cancer myth, concentration limits, pregnancy and pet safety.',
    date: '2026-07-15',
    category: 'mosquito' as const,
  },
  {
    slug: 'are-there-ticks-in-canada',
    title: 'Are There Ticks in Canada? Where Ticks Are Found, Province by Province (2026)',
    excerpt: 'Ticks live in every Canadian province, but blacklegged (Lyme) ticks concentrate in the east. A 2026 province-by-province map of where ticks are found in Canada.',
    date: '2026-07-15',
    category: 'tick' as const,
  },
  {
    slug: 'how-to-get-rid-of-mosquitoes-in-the-house',
    title: 'How to Get Rid of Mosquitoes in the House (Fast) — 2026 Indoor Guide',
    excerpt: 'Get rid of mosquitoes in the house fast: the fan trick, where they hide in a room, how to find and kill the one buzzing your bedroom, natural methods and the source.',
    date: '2026-07-15',
    category: 'mosquito' as const,
  },
]

export const NEW_BLOGS_19 = [
  {
    slug: 'can-mosquitoes-bite-through-clothes',
    title: 'Can Mosquitoes Bite Through Clothes? Yes — Here Is Exactly Which Fabrics',
    excerpt: 'Can mosquitoes bite through clothes? Yes — through thin, tight fabric like leggings, thin tees and thin socks, but not loose or thick weaves like denim. Which fabrics, why, and how to stop it.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-many-times-can-a-mosquito-bite-you',
    title: 'How Many Times Can a Mosquito Bite You? (One Female, Many Bites)',
    excerpt: 'How many times can a mosquito bite you? A single female bites repeatedly until full or interrupted, does not die after biting, and can bite several people. The numbers and the myths.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
]

// NEW_BLOGS_20 — 2026-07-16. AI-citation product/question pages engineered to be
// THE cited answer in AI Overviews / ChatGPT / Perplexity, beating stale US pages.
export const NEW_BLOGS_20 = [
  {
    slug: 'do-tiki-torches-repel-mosquitoes',
    title: 'Do Tiki Torches Repel Mosquitoes? The Honest 2026 Answer',
    excerpt: 'Do tiki torches repel mosquitoes? The honest answer: a plain torch does nothing and even a citronella torch protects only a ~1m bubble that wind erases. What works instead.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
]

// ── Wave 21 — AI-citation Lyme surveillance page (Jul 16 2026) ─────────────────
// Answer-first "what percentage of ticks carry Lyme in Ontario" page that cross-
// links the Ontario tick data hubs (tracker + statistics) to beat MosquitoJoe's
// undated US version. YMYL — PHO/PHAC/CDC-cited and hedged. No products.
export const NEW_BLOGS_21 = [
  {
    slug: 'what-percentage-of-ticks-carry-lyme-ontario',
    title: 'What Percentage of Ticks Carry Lyme Disease in Ontario? (2026 Data)',
    excerpt: 'About 20% of blacklegged ticks in established Ontario risk areas carry Lyme (Public Health Ontario). Infection rates by species and life stage, transmission time, and your real chance of Lyme from a bite.',
    date: '2026-07-16',
    category: 'tick' as const,
  },
]

// ── Wave 22 — AI-citation lone star tick / alpha-gal page (Jul 16 2026) ────────
// Answer-first "is the lone star tick / red meat allergy in Canada" page engineered
// to be THE cited answer, beating MosquitoJoe's undated US version (no author, no
// first-sentence answer). YMYL — Health Canada / PHAC / eTick / CDC-cited and hedged.
// No products.
export const NEW_BLOGS_22 = [
  {
    slug: 'lone-star-tick-alpha-gal-canada',
    title: 'Lone Star Tick & Alpha-Gal (Red Meat Allergy): Is It in Canada? (2026)',
    excerpt: 'The lone star tick causes the alpha-gal red meat allergy — but it is not established in Canada (only occasional adventive finds per eTick/PHAC). Real risk, symptoms, and range for Ontario.',
    date: '2026-07-16',
    category: 'tick' as const,
  },
  // ── Remaining MJ gap-raid posts (Jul 16 2026) — registered centrally ─────────
  {
    slug: 'what-temperature-kills-mosquitoes',
    title: 'What Temperature Kills Mosquitoes? (Cold, Frost & Winter Explained)',
    excerpt: 'What temperature kills mosquitoes? Active adults die in a hard frost near -2°C and go dormant below 10°C — but eggs survive Ontario winters. The full science.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'why-do-mosquitoes-bite-my-ankles',
    title: 'Why Do Mosquitoes Bite My Ankles and Feet? (The Science)',
    excerpt: 'Mosquitoes bite your ankles and feet because CO2 pools at ground level, foot bacteria smell irresistible, and low-flying Aedes hunt there — plus how to stop it.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'mosquito-bite-vs-spider-bite',
    title: 'Mosquito Bite vs Spider Bite: How to Tell the Difference (2026)',
    excerpt: 'Mosquito bites come in itchy clusters within minutes; a spider bite is usually a single, more painful mark. Appearance, number, pain, timing and danger compared.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'what-colors-attract-mosquitoes',
    title: 'What Colors Attract Mosquitoes? (2022 Study: Red, Orange, Black, Cyan)',
    excerpt: 'A 2022 Nature Communications study found mosquitoes chase red, orange, black and cyan after smelling CO2 — and ignore green, blue, purple and white. What to wear.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'tick-head-stuck-in-skin',
    title: 'Tick Head Stuck in Skin? What to Do (and When It\'s Dangerous)',
    excerpt: 'What looks like a tick\'s head is actually its mouthparts. Try one gentle tweezer lift; if it won\'t come, leave it to heal like a splinter. When to see a doctor.',
    date: '2026-07-16',
    category: 'tick' as const,
  },
  {
    slug: 'do-ticks-die-in-the-washing-machine',
    title: 'Do Ticks Die in the Washing Machine or Dryer? (What Actually Works)',
    excerpt: 'Washing clothes — even hot — does not reliably kill ticks. A dryer on high heat for 10 minutes does, via desiccation. The research + a post-hike protocol.',
    date: '2026-07-16',
    category: 'tick' as const,
  },
  {
    slug: 'does-standing-water-attract-mosquitoes',
    title: 'Does Standing Water Attract Mosquitoes? How Fast It Breeds Them',
    excerpt: 'Standing water breeds biting mosquitoes in just 7-10 days, in as little as a bottle cap. The weekly-dump rule plus BTI dunks for water you can\'t drain.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
]

// ── Wave 23 — Pest Empire Phase 1: Winter Engine (Jul 16 2026) ────────────────
// Adjacent-pest PUBLISHING ARM (BuzzSkito treats mosquitoes/ticks ONLY — these
// are independent product-research pages under /pest-product-guides). Bed-bug
// proof cluster + rodent winter cluster + DE hub. ~36K/mo addressable CA;
// ~70% of demand is flat-or-winter-peaked (fixes the Nov-Mar referral trough).
// Moat: SpecialistDisclosure on every page, one-way link firewall, PMRA-legal
// products only ("compliance as content" differentiator).
export const NEW_BLOGS_23 = [
  {
    slug: 'bed-bug-spray-canada',
    title: 'Best Bed Bug Spray & Killer in Canada (2026)',
    excerpt: 'The strongest PMRA-legal bed bug sprays and killers sold in Canada, what each one actually kills, and why US picks like Crossfire are illegal here.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-bed-bug-steamer-canada',
    title: 'Best Bed Bug Steamer Canada 2026 — Vapamore MR-100 vs McCulloch MC1275 vs PurSteam',
    excerpt: 'Vapamore MR-100 vs McCulloch MC1275 vs PurSteam: the 100°C kill science, the 2-3 cm/s slow-pass technique, and what steam can and cannot reach.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'bed-bug-mattress-encasement-canada',
    title: 'Best Bed Bug Mattress Encasement in Canada 2026 — SafeRest vs Utopia + the 12–18 Month Rule',
    excerpt: 'SafeRest vs Utopia bed bug encasements — encasement vs cover explained, the 12-18 month containment rule, zipper failure points, and sizing for Canadian beds.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'bed-bug-interceptor-traps-canada',
    title: 'Bed Bug Interceptor Traps Canada 2026 — Detect Before You Spray',
    excerpt: 'How ClimbUp interceptor cups exploit bed bug climbing physiology, the 14-night monitoring protocol, and how to read inner vs outer well catches.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-check-for-bed-bugs-canada',
    title: 'How to Check for Bed Bugs in Canada — Hotel, Apartment & Used Furniture (2026)',
    excerpt: 'The 5 confirmed signs, a 5-minute hotel room protocol, the used-furniture rule, and a Toronto/GTA apartment move-in checklist. Independent Canadian guide.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'do-bed-bug-sprays-actually-work',
    title: 'Do Bed Bug Sprays Actually Work? An Honest Canadian Answer (2026)',
    excerpt: 'Contact sprays kill what they touch but miss 90%+ of an infestation. Pyrethroid resistance, residuals, and the heat-steam-encasement stack that actually works.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-mouse-trap-canada',
    title: 'Best Mouse Trap Canada 2026 — Snap vs Electronic vs Catch-and-Release',
    excerpt: 'Snap vs electronic vs catch-and-release vs glue traps compared for Canadian homes. Top picks (Victor M325, M250S), placement science, and why traps beat poison.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'victor-electronic-mouse-trap-review-canada',
    title: 'Victor Electronic Mouse Trap Review (Canada 2026) — Is the M250S Worth It?',
    excerpt: 'Honest Canadian review of the Victor M250S: 100 kills per battery set, no-touch disposal, humaneness vs snap traps, and the Wi-Fi M1 Smart-Kill upgrade.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-rat-trap-canada',
    title: 'Best Rat Trap Canada 2026 — Snap vs Electronic + Why Mouse Traps Fail',
    excerpt: 'Victor snap vs electronic vs Tomcat rat traps, why mouse traps fail on rats, Norway vs roof rats in the GTA, and the pre-baiting technique for trap-shy rats.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'mouse-bait-station-canada',
    title: 'Mouse Bait Stations Canada 2026 — What\'s Actually Legal (PMRA Guide)',
    excerpt: 'Only tamper-resistant bromethalin stations like Tomcat\'s are consumer-legal in Canada. What PMRA allows, which US baits to avoid, and when traps win.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'rat-poison-canada-what-is-legal',
    title: 'Rat Poison in Canada 2026 — What\'s Actually Legal (and What Isn\'t)',
    excerpt: 'Second-generation anticoagulant rat poisons are commercial-only in Canada. What the PMRA allows consumers, BC\'s SGAR ban, and the legal Tomcat bromethalin option.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-get-rid-of-mice-canada',
    title: 'How to Get Rid of Mice in Canada 2026 — The 4-Step Plan That Actually Works',
    excerpt: 'The Canadian mouse playbook: fall entry-wave timing, the 6 mm gap rule, the kitchen sanitation triangle, a 12-trap night-one deployment, and exclusion that lasts.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-keep-mice-out-of-your-house-winter',
    title: 'How to Keep Mice Out of Your House This Winter — Canadian Exclusion Guide 2026',
    excerpt: 'October exclusion checklist for Canadian homes: seal 6 mm gaps with steel wool + sealant, fix garage-door corners, AC line penetrations and brick weep holes.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'ultrasonic-pest-repellers-do-they-work',
    title: 'Do Ultrasonic Pest Repellers Actually Work? The Evidence Review (2026)',
    excerpt: 'Evidence review: FTC actions against manufacturers, rodent habituation studies, why no Canadian regulator verifies the claims — and what works instead.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'diatomaceous-earth-canada-buyers-guide',
    title: 'Diatomaceous Earth Canada 2026 — Buyer\'s Guide to PMRA-Registered DE',
    excerpt: 'Which diatomaceous earth is PMRA-registered in Canada — Safer\'s, Knock Down, Doktor Doom — how DE kills by desiccation, and why food-grade DE is off-label here.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
  {
    slug: 'diatomaceous-earth-for-bed-bugs',
    title: 'Diatomaceous Earth for Bed Bugs — Does It Work? (Canada 2026)',
    excerpt: 'Does diatomaceous earth kill bed bugs? Honest lab-vs-field efficacy, where to apply it (and where never), and which DE is PMRA-legal to use in Canada.',
    date: '2026-07-16',
    category: 'mosquito' as const,
  },
]

// ── Wave 24 — de-orphaned product posts (Jul 17 2026) ────────────────────────
// These 4 high-value mosquito-gear affiliate posts (May 2026 vintage) were in the
// sitemap but missing from the /blog index (surfaced by an external crawl audit).
// thermacell-canada-where-to-buy alone pulls ~9,900 impressions/mo. Registered so
// they render on /blog and fold into the Mosquito Gear category hub.
export const NEW_BLOGS_24 = [
  {
    slug: 'mosquito-magnet-canada',
    title: 'Mosquito Magnet Canada 2026 — Where to Buy + Do They Actually Work?',
    excerpt: 'Mosquito Magnet pricing across Canadian retailers, how propane CO2 traps work, Patriot vs Executive vs Independence, and whether they beat professional barrier spray.',
    date: '2026-05-01',
    category: 'mosquito' as const,
  },
  {
    slug: 'dynatrap-canada-review',
    title: 'DynaTrap Canada 2026 — Honest Review + Where to Buy (Do They Work?)',
    excerpt: 'An honest Canadian DynaTrap review — how the UV+CO2 traps really perform on mosquitoes, DT1050 vs DT2030 sizing, bulb replacement, and where to buy in Canada.',
    date: '2026-05-01',
    category: 'mosquito' as const,
  },
  {
    slug: 'bug-zappers-canada-do-they-work',
    title: 'Best Bug Zappers in Canada 2026 (Do They Work?)',
    excerpt: 'Do bug zappers actually kill mosquitoes? The honest research, the best Canadian models, where to buy, and what works better for a mosquito-free yard.',
    date: '2026-05-01',
    category: 'mosquito' as const,
  },
  {
    slug: 'thermacell-canada-where-to-buy',
    title: 'Thermacell Canada: Best Models, Prices & Where to Buy 2026',
    excerpt: 'Where to buy Thermacell in Canada, which model to pick (E55 vs E90 vs EX90), refill costs, and the honest range-and-wind limits of zone repellers.',
    date: '2026-05-01',
    category: 'mosquito' as const,
  },
]

// ── Wave 25 — geo-neutral US-expansion pages (Jul 19 2026) ────────────────────
// Country-agnostic health/bite/ID content engineered to rank in BOTH the US and
// Canada (no country in slug/title/H1; dual CDC + PHAC citations). Targets big
// US search volume (~356K/mo combined) with ZERO Canadian-ranking risk. Adjacent
// pests (chigger/bed-bug/spider/flea) are review-only w/ SpecialistDisclosure +
// firewall; on-brand (west-nile/no-see-um/alpha-gal) carry the service CTA.
export const NEW_BLOGS_25 = [
  {
    slug: 'chigger-bites',
    title: 'Chigger Bites: What They Look Like, How Long They Last & How to Treat Them (2026)',
    excerpt: 'What chigger bites look like, why they cluster at ankles and waistbands, how long they last, treatment that calms the itch, and the skin-burrowing myth debunked.',
    date: '2026-07-19',
    category: 'mosquito' as const,
  },
  {
    slug: 'bed-bug-bites',
    title: 'Bed Bug Bites: What They Look Like, How Long They Last & How to Tell for Sure (2026)',
    excerpt: 'The breakfast-lunch-dinner line pattern, bed bug vs mosquito vs flea bite comparison tables, the up-to-14-day delay, itch relief, and how to confirm it is bed bugs.',
    date: '2026-07-19',
    category: 'mosquito' as const,
  },
  {
    slug: 'west-nile-virus-symptoms',
    title: 'West Nile Virus Symptoms: Timeline, First Signs, Diagnosis & When to See a Doctor (2026)',
    excerpt: '~80% have no symptoms, 20% get West Nile fever, under 1% get serious illness. First signs, the 2-14 day timeline, diagnosis, why it is not contagious, and treatment.',
    date: '2026-07-19',
    category: 'mosquito' as const,
  },
  {
    slug: 'what-does-a-spider-bite-look-like',
    title: 'What Does a Spider Bite Look Like? Identification, Stages & When to Worry (2026)',
    excerpt: 'How to identify a spider bite, why most suspected spider bites are something else, brown recluse and black widow warning signs, healing timeline, and when to get care.',
    date: '2026-07-19',
    category: 'mosquito' as const,
  },
  {
    slug: 'flea-bites-on-humans',
    title: 'Flea Bites on Humans: What They Look Like & How to Tell It\'s Fleas (2026)',
    excerpt: 'What flea bites look like on humans — ankle clusters, red halos, instant itch — vs bed bug and mosquito bites, how long they last, and how to clear a home infestation.',
    date: '2026-07-19',
    category: 'mosquito' as const,
  },
  {
    slug: 'no-see-um-bites',
    title: 'No-See-Um Bites: What They Look Like, Why They Itch So Much & How to Treat Them (2026)',
    excerpt: 'What no-see-um bites look like, why they itch more than mosquito bites, how long they last, a no-see-um vs mosquito vs flea vs chigger comparison, and itch-relief treatment.',
    date: '2026-07-19',
    category: 'mosquito' as const,
  },
  {
    slug: 'alpha-gal-syndrome',
    title: 'Alpha-Gal Syndrome: The Tick Bite That Causes a Red Meat Allergy (2026)',
    excerpt: 'A tick-triggered red meat allergy with a signature delayed 2-6 hour reaction: symptoms, trigger foods, the lone star tick, diagnosis, testing, and prevention.',
    date: '2026-07-19',
    category: 'tick' as const,
  },
]

export const NEW_BLOGS_26 = [
  {
    slug: 'best-wasp-trap',
    title: 'Best Wasp Traps in Canada: Bag, Sticky, Reusable and DIY Compared',
    excerpt: 'The four kinds of wasp trap compared for Canadian yards — what each one actually catches, where to hang them, the two timing windows that matter, and where to buy them.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-get-rid-of-wasps-canada',
    title: 'How to Get Rid of Wasps in Canada — Identify, Treat, Prevent (2026)',
    excerpt: 'Identify paper wasps vs yellowjackets vs bald-faced hornets, find the nest, know when DIY is safe vs when to hire, treat at night, and set traps that actually help.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-wasp-nest-spray-canada',
    title: 'Best Wasp Nest Spray Canada 2026 — PMRA-Legal Foams & Jets Compared',
    excerpt: 'PMRA-registered wasp nest sprays compared — Raid foam vs Wilson WaspOut vs long-reach jets, dusk technique and safe standoff, and why US "27-foot" cans are grey-market in Canada.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-yellow-jacket-trap-canada',
    title: 'Best Yellow Jacket Trap Canada 2026 — And the SKU Mistake Everyone Makes',
    excerpt: 'The best yellow jacket traps for the Aug–Sep aggression peak — and the RESCUE! "West of the Rockies" SKU mistake that leaves Ontario traps empty. Bait timing, placement, honest expectations.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-get-rid-of-ground-wasps-canada',
    title: 'How to Get Rid of Ground Wasps in Canada — Yellow Jacket Nests in the Lawn',
    excerpt: 'Wasps streaming out of a hole in the lawn? Identify the yellow jacket nest, kill it safely at dusk with PMRA-registered jet foam, skip the boiling-water myth, and know when to call a pro.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'rescue-why-trap-review-canada',
    title: 'RESCUE! WHY Trap Review Canada 2026 — Does the 2-Chamber Wasp Trap Work?',
    excerpt: 'Honest Canadian review of the RESCUE! WHY Trap: how the two-chamber design catches wasps, hornets and yellowjackets, the real 2-week refill pattern, and what it can\'t do.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-get-rid-of-fruit-flies',
    title: 'How to Get Rid of Fruit Flies in Canada — Find the Source, Break the 8-Day Cycle',
    excerpt: 'Fruit flies explode because egg-to-adult takes 8 days. The source-first Canadian playbook: produce, drains, recycling, the TERRO trap, honest ACV DIY, and prevention.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-fruit-fly-trap-canada',
    title: 'Best Fruit Fly Trap Canada 2026 — TERRO vs Katchy vs Sticky Ribbons',
    excerpt: 'TERRO vs Katchy vs Zevo vs sticky ribbons: which fruit fly trap actually out-smells your fruit bowl, real refill economics, and why every infestation takes 2–3 weeks to end.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'katchy-indoor-insect-trap-review-canada',
    title: 'Katchy Indoor Insect Trap Review (Canada 2026) — What It Actually Catches',
    excerpt: 'Honest Canadian review of the Katchy UV + fan + glue trap: brilliant on fungus gnats and fruit flies, weak on house flies and mosquitoes — plus refill costs and placement tips.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'bed-bug-heater-canada',
    title: 'Best Bed Bug Heater Canada 2026 — Heat Chambers That Kill Every Life Stage',
    excerpt: 'Portable heat chambers kill bed bug adults, nymphs, and eggs in one cycle — no pesticide, no PMRA grey zone. ZappBug Oven 2 vs luggage-size units, plus buy vs rent vs pro heat.',
    date: '2026-07-21',
    category: 'tick' as const,
  },
  {
    slug: 'zappbug-heater-review-canada',
    title: 'ZappBug Heater Review Canada 2026 — Does the Bed Bug Heat Chamber Actually Work?',
    excerpt: 'Hands-on review of the ZappBug bed bug heat chamber for Canadians: setup, real cycle times, what fits, electronics rules, and when it beats renting a heater or hiring pros.',
    date: '2026-07-21',
    category: 'tick' as const,
  },
  {
    slug: 'motion-activated-sprinkler-canada',
    title: 'Best Motion-Activated Sprinkler Canada 2026 — Keep Raccoons, Cats & Squirrels Out',
    excerpt: 'Orbit Yard Enforcer vs Pro vs budget clones: how the day/night sensor works, humane cat and raccoon deterrence, and the drain-before-frost rule Canadian owners can\'t skip.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'raccoon-deterrent',
    title: 'Best Raccoon Deterrent Canada 2026 — What Actually Works (and What Ontario Law Allows)',
    excerpt: 'Toronto is the raccoon capital of the world and Ontario law bans relocating wildlife past 1 km — so deterrence is the whole game. The honest tier list of what actually works.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-keep-spiders-out-of-your-house',
    title: 'How to Keep Spiders Out of Your House — What Actually Works (2026)',
    excerpt: 'Why spiders appear indoors every late August (mating season, not cold) and what actually works: sealing, sticky traps, vacuuming, PMRA-registered sprays — and the truth on peppermint oil.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
]

export const NEW_BLOGS_27 = [
  {
    slug: 'best-spider-spray-canada',
    title: 'Best Spider Spray Canada 2026 — PMRA-Registered Picks vs US Grey-Market',
    excerpt: 'Doktor Doom vs Konk OnGuard vs Knock Down — the Canadian-registered spider sprays that work, the PCP-number check that filters grey-market imports, and the late-August timing that matters.',
    date: '2026-07-21',
    category: 'tick' as const,
  },
  {
    slug: 'how-to-get-rid-of-cluster-flies-canada',
    title: 'How to Get Rid of Cluster Flies in Canada (2026) — The Farmhouse & Cottage Guide',
    excerpt: 'Cluster flies are earthworm parasites that overwinter on sunny south walls — not a hygiene problem. The late-summer sealing, window-trap, and vacuum plan for Canadian farmhouses and cottages.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-get-rid-of-cockroaches-canada',
    title: 'How to Get Rid of Cockroaches in Canada — The Bait-First Plan That Actually Works',
    excerpt: 'German vs American vs Oriental ID, why sprays scatter colonies, and the bait-station + glue-board plan that reaches the roaches you never see — plus the honest Canadian answer on Advion gel.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'advion-cockroach-gel-bait',
    title: 'Advion Cockroach Gel Bait in Canada — The Honest Grey-Market Answer',
    excerpt: 'Can you buy Advion in Canada? The honest grey-market answer: PMRA classes, the 10-second PCP label check, and the legal bait-station toolkit that actually works on German cockroaches.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-get-rid-of-rats-canada',
    title: 'How to Get Rid of Rats in Canada (2026) — Traps, Exclusion & What\'s Actually Legal',
    excerpt: 'Norway vs roof rat ID, pre-baited snap-trap technique, the Goodnature A24 auto-trap, rat-proof exclusion, and which rodenticides are actually legal in Canada — the full 2026 playbook.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'rodent-exclusion-kit-canada',
    title: 'Rodent Exclusion Kit Canada 2026 — Seal Mice Out Before October',
    excerpt: 'Copper mesh, 1/4-inch hardware cloth, exterior sealant and a chew-proof garage seal — the 4-layer kit that seals mice out before October, plus the dime rule and 8-point inspection walk.',
    date: '2026-07-21',
    category: 'tick' as const,
  },
  {
    slug: 'how-to-get-rid-of-fungus-gnats-houseplants',
    title: 'How to Get Rid of Fungus Gnats in Houseplants — The Fix That Actually Works',
    excerpt: 'Fungus gnats breed in your potting soil, not the air. The two-front fix: dry-out plus bottom-watering, yellow sticky cards for adults, and BTI (Mosquito Bits) to kill the larvae for good.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-keep-mice-out-of-your-car',
    title: 'How to Keep Mice Out of Your Car — Protect the Engine Bay, Wiring & Cabin',
    excerpt: 'A parked car is a heated nest box with thousands of dollars of chewable wiring. Parking strategy, capsaicin rodent tape, honest under-hood repeller advice, and a storage trap line.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-rodent-repellent-for-cars-canada',
    title: 'Best Rodent Repellent for Cars Canada 2026 — Tape vs Strobe vs Peppermint',
    excerpt: 'Capsaicin deterrent tape vs under-hood strobes vs peppermint pouches vs perimeter snap traps — honestly rated for Canadian cars, plus the 8-step winter-storage protocol.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'how-to-get-rid-of-silverfish-canada',
    title: 'How to Get Rid of Silverfish in Canada — The Humidity Fix That Actually Works',
    excerpt: 'Silverfish can\'t breed below 50% humidity — the root-cause fix US guides skip. Dehumidifier sizing, trap monitoring, DE technique, and the PMRA truth about Dekko packs.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
]

// High-ticket product money pages (Jul 21 2026). In sitemap + /blog index.
export const NEW_BLOGS_28 = [
  {
    slug: 'best-dehumidifier-for-basement-canada',
    title: 'Best Dehumidifier for a Basement in Canada 2026 — Sizing, Drainage & the Pest Angle',
    excerpt: 'Basement dehumidifier guide as a root-cause pest tool: pint sizing vs sq ft, continuous-drain vs bucket, compressor vs desiccant for cold basements, and the 30–50% RH target that starves silverfish, roaches, mites and mould.',
    date: '2026-07-21',
    category: 'tick' as const,
  },
  {
    slug: 'best-air-purifier-for-dust-mites-canada',
    title: 'Best Air Purifier for Dust Mites Canada 2026 — True-HEPA, CADR & Room Sizing',
    excerpt: 'True-HEPA air purifiers compared for Canadian dust-mite sufferers — how CADR and room sizing actually work, honest limits, and picks for large rooms, quiet bedrooms, and tight budgets.',
    date: '2026-07-21',
    category: 'tick' as const,
  },
  {
    slug: 'best-hepa-vacuum-for-bed-bugs-and-fleas-canada',
    title: 'Best Sealed-HEPA Vacuum for Bed Bugs & Fleas Canada 2026 — Canister vs Stick vs Handheld',
    excerpt: 'Sealed-HEPA vacuums for bed-bug and flea remediation: why a sealed body and bagged disposal matter, crevice-tool technique, the steam-plus-vacuum combo, and canister, cordless, handheld and budget picks.',
    date: '2026-07-21',
    category: 'tick' as const,
  },
  {
    slug: 'goodnature-a24-review-canada',
    title: 'Goodnature A24 Review Canada 2026 — The Self-Resetting, Poison-Free Rat Trap',
    excerpt: 'Independent Canadian review of the Goodnature A24 CO₂ self-resetting rat & mouse trap: ~24 kills per cylinder, poison-free (no secondary poisoning), placement, consumable cadence, and an honest comparison.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
  {
    slug: 'best-live-animal-trap-canada',
    title: 'Best Live Animal Trap Canada 2026 — The Legal, Humane Guide (Read First)',
    excerpt: 'A law-forward guide to live cage traps: Ontario\'s 1 km relocation rule, why spring/summer trapping orphans young, deterrence first, trap sizes compared, and when to hire a licensed operator.',
    date: '2026-07-21',
    category: 'tick' as const,
  },
  {
    slug: 'best-gazebo-with-mosquito-net-canada',
    title: 'Best Gazebo With Mosquito Net Canada 2026 — Soft-Top vs Hard-Top Screened Picks',
    excerpt: 'A buyer\'s guide to screened gazebos with mosquito netting for Canadian decks: soft-top vs hard-top for wind/snow, no-see-um vs standard mesh, anchoring, sizing, and where to buy.',
    date: '2026-07-21',
    category: 'mosquito' as const,
  },
]

// Existing pages that were in the sitemap but missing from the /blog index —
// registered here for the index + internal-link equity ONLY (already in sitemap,
// so NOT spread into sitemap.ts to avoid duplicate <loc>).
export const NEW_BLOGS_29 = [
  { slug: 'permethrin-canada-yard-clothing-spray', title: 'Permethrin Canada: Where to Buy + Is It Legal? (2026)', excerpt: 'Where to buy permethrin in Canada, whether it is legal for clothing and yard use, and how to apply Sawyer-style sprays safely.', date: '2026-07-19', category: 'mosquito' as const },
  { slug: 'picaridin-vs-deet', title: 'Picaridin vs DEET Canada 2026 — Which Repellent Wins?', excerpt: 'Picaridin vs DEET for Canadian summers: which lasts longer, which is safer, and the best picaridin (icaridin) repellents to buy.', date: '2026-07-19', category: 'mosquito' as const },
  { slug: 'mosquito-bits-canada-vs-dunks', title: 'Mosquito Bits vs Dunks (Canada 2026): Kills Larvae Faster', excerpt: 'Bits kill larvae in 24 hours, Dunks last 30 days — which BTI product to use and where to buy each cheapest in Canada.', date: '2026-07-15', category: 'mosquito' as const },
  { slug: 'mosquito-control-worth-the-cost', title: 'Is Professional Mosquito Control Worth the Cost?', excerpt: 'An honest look at whether professional mosquito control is worth it — what you get, what it costs, and when DIY is enough.', date: '2026-06-15', category: 'mosquito' as const },
  { slug: 'when-does-mosquito-season-start-toronto-2026', title: 'When Does Mosquito Season Start in Toronto? 2026 Guide', excerpt: 'When Toronto\'s mosquito season begins in 2026, the temperature triggers, peak months, and when to book the first treatment.', date: '2026-05-20', category: 'mosquito' as const },
  { slug: 'west-nile-virus-ontario-2026', title: 'West Nile Virus Ontario 2026 — GTA Risk & Prevention', excerpt: 'West Nile risk across Ontario and the GTA in 2026: which mosquitoes carry it, peak timing, symptoms, and how to lower your risk.', date: '2026-06-10', category: 'mosquito' as const },
  { slug: 'are-ticks-dangerous-ontario', title: 'Are Ticks Dangerous in Ontario? Risks, Diseases & Protection', excerpt: 'Which Ontario ticks bite, the diseases they carry (Lyme and beyond), and how to protect your family and pets.', date: '2026-06-05', category: 'tick' as const },
  { slug: 'how-much-does-tick-treatment-cost-ontario', title: 'Tick Treatment Cost Ontario 2026 — What You Will Pay', excerpt: 'What professional tick control costs in Ontario in 2026, what drives the price, and how yard size and season factor in.', date: '2026-06-05', category: 'tick' as const },
  { slug: 'lyme-disease-cases-ontario-2026', title: 'Lyme Disease Cases in Ontario: What the Latest Published Data Shows', excerpt: 'Ontario reported 2,369 confirmed and probable Lyme cases in 2024, up 27% over 2023 — the newest year PHAC has published. What the number covers and what it leaves out.', date: '2026-06-12', category: 'tick' as const },
  { slug: 'lyme-disease-risk-areas-ontario-2026', title: 'Lyme Disease Risk Areas in Ontario 2026', excerpt: 'The Ontario regions with the highest blacklegged-tick and Lyme risk in 2026, and how to tell if your neighbourhood is one.', date: '2026-06-12', category: 'tick' as const },
  { slug: 'ontario-tick-surge-2026', title: 'Ontario Tick Surge 2026 — Why Numbers Are Climbing', excerpt: 'Why tick populations are surging across Ontario in 2026, which species are spreading, and what it means for the season ahead.', date: '2026-06-08', category: 'tick' as const },
  { slug: 'spring-tick-season-ontario', title: 'Spring Tick Season Ontario — When to Start Treating', excerpt: 'When ticks wake up in an Ontario spring, why the first warm days matter most, and the right time to start yard protection.', date: '2026-04-15', category: 'tick' as const },
  { slug: 'tick-borne-diseases-ontario-complete-list', title: 'Tick-Borne Diseases in Ontario — The Complete List', excerpt: 'Every tick-borne disease found in Ontario — Lyme, anaplasmosis, babesiosis and more — with symptoms and prevention.', date: '2026-06-01', category: 'tick' as const },
  { slug: 'toronto-tick-hot-spot-2026', title: 'Why Toronto Is a Tick Hot Spot in 2026', excerpt: 'The ravines, parks and green corridors making Toronto a 2026 tick hot spot, and what it means for city and suburban yards.', date: '2026-06-18', category: 'tick' as const },
]

// ── Wave map-to-1000 #1 — Waves 1+2: 36 device / high-ticket money pages (Jul 21 2026) ──
export const NEW_BLOGS_30 = [
  { slug: "chapin-battery-backpack-sprayer-review-canada", title: "Chapin 63924 Battery Backpack Sprayer Review (Canada 2026) — Is the 24V Wide-Mouth Worth It?", excerpt: "An independent Canadian review of the Chapin 63924 24V wide-mouth battery backpack sprayer: runtime, tank access, nozzles, sizing by property, PMRA-legal use, and how it compares to cheaper 20V and manual pump backpacks. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-pest-control-equipment-canada", title: "Best Pest Control Equipment Canada 2026 — The Complete DIY Gear Guide", excerpt: "The complete 2026 guide to DIY pest control equipment in Canada: battery backpack sprayers, thermal and ULV foggers, bed-bug heat chambers and steamers, and air-quality gear — how to choose, what each does, PMRA-legal product rules, and our device-by-device picks.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-thermal-fogger-canada", title: "Best Thermal Fogger Canada 2026 — Pulse-Jet vs Propane vs Electric for Mosquitoes", excerpt: "The best thermal foggers for mosquitoes in Canada for 2026: pulse-jet (Longray) vs propane-cartridge (Black Flag) vs electric, how they differ from cold ULV, the PMRA-registered-fluid rule that keeps you legal, sizing, and where to buy.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "best-ulv-cold-fogger-canada", title: "Best ULV Cold Fogger Canada 2026 — Electric Cold Foggers for Disinfectant & Pest Control Compared", excerpt: "The best ULV cold foggers in Canada for 2026: electric vs commercial vs compact, why micron adjustability matters, what solutions are legal to fog under PMRA and Health Canada rules, and our PetraTools, Hudson, and VonHaus-class picks.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "longray-thermal-fogger-review-canada", title: "Longray TS35A Thermal Fogger Review (Canada 2026) — Is the Pulse-Jet Worth It?", excerpt: "An honest Canadian review of the Longray TS35A pulse-jet thermal fogger: how the pulse-jet works, coverage and droplet size, oil vs water solution, PMRA-legal products for Ontario, thermal vs electric vs ULV, safety, and whether it is worth it for your property.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "best-battery-backpack-sprayer-canada", title: "Best Battery Backpack Sprayer Canada 2026 — Chapin 24V vs Field King vs Petra", excerpt: "The best lithium battery backpack sprayers in Canada for 2026: Chapin 24V vs Field King vs Petra compared on pressure, tank size, pump type, runtime, and parts availability — plus how to size one and the Health Canada / PMRA rules on what you can legally spray.", date: '2026-07-21', category: 'tick' as const },
  { slug: "dupray-steamer-review-canada", title: "Dupray Steamer Review Canada 2026 — Is the Dupray Neat Worth It for Bed Bugs & Deep Cleaning?", excerpt: "An independent Canadian review of the Dupray Neat steam cleaner: does the Canadian-made dry-vapour steamer earn its price for bed bugs and chemical-free deep cleaning? Temperature, run time, technique, honest downsides, and how it compares. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-steam-cleaner-for-pest-control-canada", title: "Best Steam Cleaner for Pest Control Canada 2026 — Dry Vapour That Kills Bed Bugs, Dust Mites & Fleas", excerpt: "The best steam cleaners for pest control in Canada: why dry vapour kills bed bugs, dust mites, and fleas, what boiler temperature you need, technique for mattresses and carpet edges, and our Dupray, Vapamore, McCulloch, and portable picks. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-bed-bug-heat-chamber-canada", title: "Best Bed Bug Heat Chamber Canada 2026 — ZappBug vs Thermal Strike vs DIY", excerpt: "The best portable bed-bug heat chambers in Canada: ZappBug Original vs ZappBug Room vs Thermal Strike travel bags vs a DIY build — the lethal temperature science, sizing, safety, what a chamber can and cannot treat, and our picks. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "mosquito-magnet-vs-dynatrap-canada", title: "Mosquito Magnet vs DynaTrap Canada 2026 — Which High-End Trap Actually Wins?", excerpt: "Mosquito Magnet vs DynaTrap DT2000XL, compared for Canadian yards: propane CO₂ vs UV + fan, real mosquito reduction, coverage, running cost, and which high-end trap is worth it. Updated 2026.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "best-mosquito-trap-for-acreage-canada", title: "Best Mosquito Trap for Acreage Canada 2026 — CO₂ Traps for Large Properties", excerpt: "The best mosquito traps for acreage and large properties in Canada: propane CO₂ traps (Mosquito Magnet) vs big UV + fan traps (DynaTrap XL) — coverage per acre, how many you need, placement, running cost, and where they fit alongside barrier spray. Updated 2026.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "best-electric-fence-for-raccoons-canada", title: "Best Electric Fence for Raccoons Canada 2026 — Energizers, Kits & Wiring That Actually Stop Them", excerpt: "The best electric fences for keeping raccoons out of Canadian gardens: how to size the energizer and joules, plug-in vs battery vs solar, the two-low-wire layout, grounding that actually shocks, and our Zareba, Gallagher, solar, and budget picks. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "black-flag-electric-fogger-review-canada", title: "Black Flag Electric Fogger Review (Canada 2026) — Is the 190107 Worth It?", excerpt: "An honest Canadian review of the Black Flag 190107 electric fogger: how the thermal fog works, what PMRA-registered insecticide you can legally use here, coverage and technique, corded-electric vs gas and ULV alternatives, and when a barrier spray beats fogging. Updated 2026.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "best-cordless-fogger-canada", title: "Best Cordless Fogger Canada 2026 — Battery ULV Foggers, No Cord, Compared", excerpt: "The best cordless (battery) ULV foggers in Canada for 2026: Hudson cordless vs PetraTools battery backpack vs handheld, runtime and droplet size, how to choose by coverage, the PMRA/DIN rule on what you can legally fog, and where to buy. Updated 2026.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "best-gas-backpack-fogger-canada", title: "Best Gas Backpack Fogger Canada 2026 — Mist Blowers for Acreage Compared", excerpt: "The best gas backpack foggers and mist blowers for Canadian acreage in 2026: mist blower vs fogger vs sprayer, throw distance, engine and tank sizing, convertible dust/granule kits, PMRA compliance, and our Solo and Tomahawk picks.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "thermal-vs-ulv-fogger-canada", title: "Thermal vs ULV Fogger Canada 2026 — Droplet Size, Use Case & Which to Buy", excerpt: "Thermal vs ULV fogger for Canadian buyers: how droplet size, coverage, indoor vs outdoor use, carrier liquid, and safety differ — a Longray thermal vs PetraTools ULV comparison with a clear pick and PMRA-legal buying advice. Updated 2026.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "propane-vs-electric-fogger-canada", title: "Propane vs Electric Fogger Canada 2026 — Burgess vs Black Flag Compared", excerpt: "Propane vs electric mosquito fogger in Canada for 2026: Burgess propane vs Black Flag electric compared on reach, running cost, portability, and PMRA-registered fog solutions — plus our winner and when to skip fogging entirely.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "field-king-backpack-sprayer-review-canada", title: "Field King Backpack Sprayer Review Canada 2026 — Is the 190515 Battery Model Worth It?", excerpt: "An independent Canadian review of the Field King 190515 lithium battery backpack sprayer: how the battery pump compares to the manual 190328, what the pro-grade build actually buys you, coverage and sizing, maintenance, and PMRA-legal use. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-large-capacity-dehumidifier-canada", title: "Best 70-Pint (Large-Capacity) Dehumidifier Canada 2026 — Big & Wet Basements, Drain-Pump Picks", excerpt: "The best large-capacity (70-pint / modern 50-pint) dehumidifiers for big and wet Canadian basements in 2026: why the pint rating changed, sizing, auto-defrost for cold basements, built-in drain pumps, the pest and mould angle, and our Midea, Frigidaire, and value picks.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-dehumidifier-for-mold-canada", title: "Best Dehumidifier for Mold Canada 2026 — Stop Mould by Controlling Humidity", excerpt: "The best dehumidifiers for mould control in Canada: why humidity below 60% starves mould, why a hygrostat and continuous drainage matter, how to size the unit, and our Frigidaire and Midea picks. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "dupray-vs-mcculloch-steamer-canada", title: "Dupray Neat vs McCulloch MC1275 (Canada 2026) — PSI, Steam Temp & Which One Actually Kills Bed Bugs", excerpt: "Dupray Neat vs McCulloch MC1275 for bed bugs in Canada: a head-to-head on PSI, steam temperature, dry-vapour output, run time, and build — which steamer actually kills eggs, and which is the better-value all-rounder. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-commercial-fly-light-trap-canada", title: "Best Commercial Fly Light Trap Canada 2026 — Glue-Board UV Insect Light Traps Compared", excerpt: "The best commercial fly light traps in Canada for 2026: glue-board UV insect light traps compared to electric zappers, Awoco vs Vector, how to size and place them, food-safety and lamp-change requirements, and our picks for kitchens, food plants, and back-of-house.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-professional-mosquito-trap-canada", title: "Best Professional Mosquito Trap Canada 2026 — Propane CO₂ Systems vs Larvicide Stations", excerpt: "The best professional-grade mosquito trapping systems in Canada for 2026: commercial propane CO₂ traps (Mosquito Magnet Pro class) vs larvicide autodissemination stations (In2Care) — how they work, sizing, running cost, placement, and where a barrier spray still wins.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "best-atv-sprayer-for-tick-yard-canada", title: "Best ATV & Tow-Behind Sprayer for a Tick Yard Canada 2026 — Chapin, Spot & Boom Sprayers Compared", excerpt: "The best ATV and tow-behind sprayers for treating a tick yard in Canada: why the perimeter edge is the real target, boom vs boomless vs spot wand, tank sizing, PMRA-legal products, and our Chapin, spot, compact, and high-capacity picks. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-pump-pressure-sprayer-canada", title: "Best Pump Pressure Sprayer Canada 2026 — Chapin vs Solo Hand-Pump Tank Sprayers Compared", excerpt: "The best pump pressure sprayers in Canada for 2026: Chapin vs Solo hand-pump tank sprayers compared on seal quality, tank size, wand, and value — plus how to size one, why Viton seals matter, and maintenance that makes it last. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-raccoon-live-trap-canada", title: "Best Raccoon Live Trap Canada 2026 — Large Humane Cage Traps + Ontario Relocation Law", excerpt: "The best large humane raccoon live traps in Canada for 2026: why size is the spec that matters, galvanized-steel build, single vs two-door design, bait and placement technique, and what Ontario relocation law lets you do. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "diy-outdoor-misting-system-kit-canada", title: "Best DIY Outdoor Misting System Kit Canada 2026 — Patio Cooling That Keeps Mosquitoes Off", excerpt: "The best DIY outdoor misting system kits in Canada for 2026: Aootek and HIRALIY low-pressure garden-hose kits vs booster-pump and high-pressure setups — how they cool a patio and keep mosquitoes off, nozzle and sizing advice, freeze-protection, and where they fit alongside real mosquito control.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "best-bed-bug-luggage-heater-canada", title: "Best Bed Bug Luggage Heater Canada 2026 — Travel Heat Chambers Compared (PackTite vs ThermalStrike)", excerpt: "The best bed-bug luggage heaters and travel heat chambers in Canada: how heat kills every life stage including eggs, why the cold core and a probe thermometer matter, sizing, and our closet, folding, large-capacity, and budget picks. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
]

// ── Wave map-to-1000 #2 — Wave 3: 17 bed-bug cluster money pages (Jul 21 2026) ──
export const NEW_BLOGS_31 = [
  { slug: "best-whole-room-bed-bug-heater-canada", title: "Best Whole-Room Bed Bug Heater Canada 2026 — DIY Heat Treatment Equipment Compared", excerpt: "The best whole-room DIY bed bug heat treatment equipment in Canada: portable heaters (Nuventa), room-scale heat enclosures (ZappBug Room), how to size to the room, the lethal temperature and dwell time, safety, and why grey-market US 240V units are not the pick. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "packtite-closet-review-canada", title: "PackTite Closet Review Canada 2026 — Is the Big Heat Chamber Worth It?", excerpt: "An independent Canadian review of the PackTite Closet — the flagship large-capacity bed-bug heat chamber. What it kills, how long a cycle takes, the honest Canadian-stock caveat, how it compares to the ZappBug Oven and ThermalStrike, and who should actually buy it. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "thermalstrike-ranger-review-canada", title: "ThermalStrike Ranger Review Canada 2026 — Does the Heated Bed Bug Suitcase Actually Work?", excerpt: "Independent Canadian review of the ThermalStrike Ranger heated bed bug suitcase: how the built-in heater works, real cycle times, capacity, electronics rules, and how it compares to a separate heat chamber, freezing, and professional treatment. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "zappbug-room-review-canada", title: "ZappBug Room Review Canada 2026 — Is the Whole-Room Bed-Bug Heater Worth It?", excerpt: "Independent Canadian review of the ZappBug Room whole-room bed-bug heater — how the large fabric enclosure reaches lethal heat, correct loading and thermometer use, cycle times, what it can treat, and whether it beats the smaller ZappBug units.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-natural-bed-bug-spray-canada", title: "Best Natural Bed Bug Spray Canada 2026 — Plant-Based, Non-Toxic & PMRA-Legal Picks", excerpt: "The best natural, plant-based bed bug sprays in Canada for 2026: EcoRaider vs Proof vs Doktor Doom, why PMRA registration matters, how contact sprays really work, and the spray-plus-heat-plus-encasement plan they belong in. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-bed-bug-detector-canada", title: "Best Bed Bug Detector Canada 2026 — Passive Interceptors vs Active Monitors Compared", excerpt: "The best bed-bug detectors and monitors in Canada: passive interceptor traps (Aspectek) vs glue-strip monitors (BuggyBeds) vs active lured monitors — how each works, placement, how long to wait, and our picks. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "doktor-doom-sleep-tight-review-canada", title: "Doktor Doom Sleep Tight Review Canada 2026 — The PMRA-Registered Mattress Spray, Tested Against the Grey-Market", excerpt: "An independent Canadian review of Doktor Doom Sleep Tight bed bug spray: why its PMRA registration matters, how fast it knocks bugs down, where a contact spray fails (eggs, resistance), and how to build the heat-plus-dust plan around it. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "cimexa-bed-bug-review-canada", title: "CimeXa Bed Bug Review Canada 2026 — Does the Silica Dust Actually Work?", excerpt: "Independent Canadian review of CimeXa silica gel dust for bed bugs: how amorphous silica desiccant kills, why it beats diatomaceous earth, the 10-year residual, correct crack-and-crevice application, PMRA and grey-market context, and where CimeXa fits in a real bed bug plan. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "how-to-get-rid-of-bed-bugs-canada", title: "How to Get Rid of Bed Bugs in Canada 2026 — The Complete Step-by-Step Plan", excerpt: "The complete step-by-step plan to get rid of bed bugs in Canada: confirm, isolate the bed, encase, intercept, heat-treat the eggs, dust the voids, and monitor to zero. DIY vs professional, what actually kills eggs, and the PMRA-legal Canadian toolkit. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "how-to-get-rid-of-bed-bugs-in-apartment-canada", title: "How to Get Rid of Bed Bugs in an Apartment (Canada 2026) — A Renter’s Containment-First Plan", excerpt: "A renter’s step-by-step plan for getting rid of bed bugs in a Canadian apartment: what your landlord must pay for, the containment-first kit (interceptors, encasements, CimeXa, sprays), stopping unit-to-unit spread, and how to prep for the exterminator. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "how-to-get-rid-of-bed-bugs-yourself-diy-canada", title: "How to Get Rid of Bed Bugs Yourself in Canada 2026 — The Full DIY Protocol", excerpt: "The complete DIY bed-bug protocol for Canadian homes: the five-tool basket (steamer, sealed-HEPA vacuum, desiccant dust, encasements, interceptor traps), a step-by-step treatment plan, how long it takes, and when to call a pro. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "how-to-kill-bed-bug-eggs-canada", title: "How to Kill Bed Bug Eggs in Canada 2026 — Why Heat Wins and Sprays Miss", excerpt: "How to kill bed-bug eggs in Canada: why contact sprays miss the eggs, the temperature that kills them, and the steam + heat-chamber + residual protocol that actually clears an infestation. Steamer, heated chamber, and EcoRaider-type picks. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "bed-bug-control-canada-hub", title: "Bed Bug Control Canada 2026 — The Complete DIY Treatment Hub", excerpt: "The complete Canadian bed-bug control hub: the heat-plus-residual plan that actually works, every tool explained (heaters, chambers, steamers, encasements, dusts, detectors, sprays, interceptors), a room-by-room protocol, and when to call a pro. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "packtite-portable-review-canada", title: "PackTite Portable Review Canada 2026 — Is the Small Folding Bed-Bug Heater Worth It?", excerpt: "An independent Canadian review of the PackTite Portable folding bed-bug heat chamber: what temperature it reaches, what fits, what not to load, the stock-availability caveat, and how it compares to ZappBug and ThermalStrike heat bags. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "zappbug-oven-2-review-canada", title: "ZappBug Oven 2 Review Canada 2026 — Is the Large Bed Bug Heat Box Worth It?", excerpt: "Independent ZappBug Oven 2 review for Canada: the large two-heater bed bug heat box explained — what fits, the two-circuit power requirement, real cycle times, electronics rules, and how it compares to the ZappBug Heater, the Room, and professional treatment. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "vapamore-mr100-steamer-review-canada", title: "Vapamore MR-100 Primo Review Canada 2026 — The Dry-Steam Workhorse for Bed Bugs, Tested", excerpt: "Hands-on Canadian review of the Vapamore MR-100 Primo dry-steam cleaner for bed bugs: how hot it really gets, dry vs wet steam, run time, the accessories that matter, MR-100 vs Dupray Neat, and whether the price is worth it. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "bed-bug-heat-treatment-diy-canada", title: "DIY Bed Bug Heat Treatment Canada 2026 — The Temperatures, Gear & Protocol That Actually Kill", excerpt: "A complete DIY bed bug heat treatment guide for Canada: the exact lethal temperatures and dwell times, portable heat chambers (ZappBug, PackTite) vs space heaters, the core-temperature rule, what heat can damage, safety, and the heat-plus-steam-plus-trap protocol. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
]

// ── Wave map-to-1000 #3 — Wave 4: 18 bed-bug cluster money pages (Jul 21 2026) ──
export const NEW_BLOGS_32 = [
  { slug: "heat-vs-chemical-bed-bug-treatment-canada", title: "Heat vs Chemical Bed Bug Treatment (Canada 2026) — Which Actually Works, and When", excerpt: "Heat vs chemical bed-bug treatment for Canadian homes: why heat kills the eggs and beats insecticide resistance, where a registered residual spray still wins, and how to combine a ZappBug heater with Doktor Doom for a full DIY plan. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "steamer-vs-heater-for-bed-bugs-canada", title: "Steamer vs Heater for Bed Bugs (Canada 2026) — Dupray Steam vs ZappBug Heat, and Which to Buy First", excerpt: "Steamer vs heater for bed bugs in Canada: how a Dupray steam cleaner and a ZappBug heater chamber differ, what each can and cannot treat, kill temperatures, safety, and which one to buy first. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "packtite-vs-zappbug-canada", title: "PackTite Closet vs ZappBug Room (Canada 2026) — Which Bed-Bug Heater Chamber Actually Wins", excerpt: "PackTite Closet vs ZappBug Room for bed bugs in Canada: a head-to-head on capacity, core-temperature verification, what fits, thermal penetration, and value — which heat chamber actually kills eggs, and which is the better fit for hung clothing. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-bed-bug-fogger-canada", title: "Best Bed Bug Fogger Canada 2026 — PMRA-Registered Total-Release Options (and Their Limits)", excerpt: "An honest Canadian guide to bed bug foggers and bug bombs: which total-release products are PMRA-registered, why foggers barely dent a bed-bug infestation, the resistance and reach problems, safety rules, and the heat-plus-residual plan that actually works. Updated 2026.", date: '2026-07-21', category: 'mosquito' as const },
  { slug: "best-bed-bug-powder-canada", title: "Best Bed Bug Powder Canada 2026 — Silica Gel vs Diatomaceous Earth Compared", excerpt: "The best bed-bug powders in Canada compared: silica gel (CimeXa) vs food-grade diatomaceous earth (Doktor Doom), how desiccant dusts actually kill, the light-film application technique, why you need a duster, and what powder can and cannot do. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-bed-bug-box-spring-encasement-canada", title: "Best Bed Bug Box Spring Encasement Canada 2026 — SureGuard vs SafeRest vs Utopia", excerpt: "The best bed-bug box-spring encasements in Canada: why the box spring is worse harbourage than the mattress, how six-sided zippered covers trap and exclude bugs, what to look for, and our SureGuard, SafeRest, Utopia, and budget picks. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-bed-bug-trap-canada", title: "Best Bed Bug Trap Canada 2026 — Passive Interceptors vs Active Lure Traps Compared", excerpt: "The best bed bug traps in Canada for 2026: passive interceptor cups (Aspectek, ClimbUp-style) vs active heat/CO₂ lure monitors — how each works, when to use which, the 14-night protocol, and our picks. Independent research, updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-bed-bug-spray-for-travel-canada", title: "Best Bed Bug Spray for Travel Canada 2026 — Carry-On-Legal Luggage & Hotel Picks", excerpt: "The best carry-on-legal bed-bug sprays for travel in Canada: TSA/CATSA 100 mL rules, PMRA-registered picks like Doktor Doom Travel Pro and Proof travel, luggage pre-treatment technique, and the homecoming routine that stops hitchhikers. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "best-bed-bug-spray-for-mattress-canada", title: "Best Bed Bug Spray for a Mattress in Canada 2026 — Mattress-Safe, PMRA-Registered Picks", excerpt: "The best mattress-safe bed bug sprays in Canada for 2026: why the PMRA registration number and a mattress-approved label matter, contact-kill vs residual, how to spray a mattress properly, and our EcoRaider, Doktor Doom Sleep Tight, and budget picks.", date: '2026-07-21', category: 'tick' as const },
  { slug: "mcculloch-mc1275-steamer-review-canada", title: "McCulloch MC1275 Steamer Review Canada 2026 — Is the Budget Heavy-Duty Steamer Worth It for Bed Bugs?", excerpt: "An independent Canadian review of the McCulloch MC1275 steam cleaner: is the budget heavy-duty boiler steamer worth it for bed bugs? Heat and run time, the US-ship warranty caveat, technique, honest downsides, and how it compares to the Dupray Neat. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "ecoraider-bed-bug-spray-review-canada", title: "EcoRaider Bed Bug Spray Review Canada 2026 — Does the Plant-Based Killer Actually Work?", excerpt: "Independent Canadian review of EcoRaider / EcoVenger plant-based bed bug spray: Rutgers efficacy testing, egg-killing on contact, botanical mode of action vs pyrethroid resistance, short-residual limitation, PMRA context, and where it fits a whole-home plan.", date: '2026-07-21', category: 'tick' as const },
  { slug: "konk-bed-bug-killer-review-canada", title: "Konk Bed Bug Killer Review Canada 2026 — The Legal, In-Store Aerosol, Honestly Assessed", excerpt: "Independent Canadian review of Konk Bed Bug Killer: what the PMRA-registered aerosol does well, where pyrethroid resistance limits it, correct application, how it compares to dusts and other sprays, and where a contact spray fits in a real bed bug plan. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "knock-down-bed-bug-killer-review-canada", title: "Knock Down Bed Bug Killer Review Canada 2026 — The Hardware-Store PMRA-Registered Spray, and Where It Fits", excerpt: "An independent Canadian review of Knock Down Bed Bug Killer: why its PMRA / PCP registration matters, how a water-based contact-and-residual spray actually performs, where every spray fails (eggs, resistance, short residual), and the heat-plus-dust plan to build around it. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "harris-bed-bug-killer-review-canada", title: "Harris Bed Bug Killer Review Canada 2026 — Does the Toughest Spray Work, and Is It Even Legal Here?", excerpt: "Independent Canadian review of Harris Toughest Bed Bug Killer: contact kill vs pyrethroid resistance, PMRA registration and grey-market legality, correct use of the registered version, and the heat-and-desiccant alternatives that outlast a spray.", date: '2026-07-21', category: 'tick' as const },
  { slug: "ortho-home-defense-bed-bug-review-canada", title: "Ortho Home Defense Bed Bug Killer Review Canada 2026 — Is the US Formula PMRA-Legal Here?", excerpt: "An independent Canadian review of Ortho Home Defense Bed Bug Killer: US vs Canadian formula, the PCP-registration question, how well it kills bugs and eggs, resistance, correct use, and the PMRA-registered alternatives. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "crossfire-bed-bug-concentrate-review-canada", title: "MGK Crossfire Bed Bug Concentrate Review (Canada 2026) — Why It Is Not the Pick Here", excerpt: "An honest Canadian review of MGK Crossfire Bed Bug Concentrate: what the pro concentrate is, why it is not PMRA-registered (and so not legal to use in Canada), the grey-market import trap, and the Canada-legal desiccant, heat, and spray options that actually get the job done. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "sureguard-mattress-encasement-review-canada", title: "SureGuard Mattress Encasement Review (Canada 2026) — Is the Invisi-Zip Seal Actually Bed-Bug Proof?", excerpt: "An independent Canadian review of the SureGuard zippered mattress encasement: how the Invisi-Zip flap seals the zipper end-stop, whether it is truly six-sided bed-bug proof, SureGuard vs SafeRest, depth/sizing, and the 12–18 month rule. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
  { slug: "how-to-get-rid-of-bed-bugs-in-couch-canada", title: "How to Get Rid of Bed Bugs in a Couch (Canada 2026) — Steamer + Spray + Encasement Protocol", excerpt: "How to get rid of bed bugs in a couch in Canada: the vacuum-steam-spray-encase protocol step by step, why heat kills the eggs, choosing a PMRA-registered spray like EcoRaider, and when to save the couch vs replace it. Updated 2026.", date: '2026-07-21', category: 'tick' as const },
]

// ── Wave map-to-1000 #4 — Wave 5: 5 crawling / occasional-invader pages (Jul 27 2026) ──
export const NEW_BLOGS_33 = [
  { slug: "how-to-get-rid-of-ants-canada", title: "How to Get Rid of Ants in Canada — Why Baiting Beats Every Spray in the Aisle", excerpt: "How to get rid of ants in Canada: why baiting beats spraying, gel vs liquid vs granular bait, and the rule that stops most DIY jobs — never wipe the trail.", date: '2026-07-27', category: 'tick' as const },
  { slug: "carpenter-ants-canada", title: "Carpenter Ants in Canada — Find the Nest, or You Are Just Killing Ants", excerpt: "Carpenter ants in Canada: telling them from termites, why a winter sighting means a nest inside, why spraying the trail fails, and when to call a pro.", date: '2026-07-27', category: 'tick' as const },
  { slug: "how-to-get-rid-of-centipedes-canada", title: "How to Get Rid of House Centipedes in Canada — Kill the Prey, Not the Predator", excerpt: "How to get rid of house centipedes in Canada: they are harmless predators, so the real fix is drying the basement to 45-50% RH and killing their prey.", date: '2026-07-27', category: 'tick' as const },
  { slug: "how-to-get-rid-of-earwigs-canada", title: "How to Get Rid of Earwigs in Canada — Traps, Moisture, and the Ear Myth", excerpt: "How to get rid of earwigs in Canada: the ear myth debunked, why they surge in late summer, and the free oil-tin and newspaper traps that do the work.", date: '2026-07-27', category: 'tick' as const },
  { slug: "best-earwig-killer-canada", title: "Earwig Traps and Killers in Canada — What to Buy, What to Make Instead, and What the Shelf Will Not Sell You", excerpt: "What to buy for earwigs in Canada: which registered dust and duster, why no commercial earwig trap is worth buying, and the perimeter products sold here.", date: '2026-07-28', category: 'tick' as const },
  { slug: "how-to-get-rid-of-boxelder-bugs-canada", title: "How to Get Rid of Boxelder Bugs in Canada — The Sealing Window Nobody Tells You About", excerpt: "Boxelder bugs swarm warm south and west walls across Ontario each fall. Why indoor spraying backfires, and the late-August sealing window that ends it.", date: '2026-07-27', category: 'tick' as const },
]

// ── Wave map-to-1000 #5 — Wave 6: 8 commercial-gear pages for the crawling /
// household-pest clusters (Jul 28 2026). best-earwig-killer-canada ships in
// NEW_BLOGS_33 already — not repeated here.
export const NEW_BLOGS_34 = [
  { slug: "best-ant-killer", title: "Best Ant Killer in Canada 2026 — What Actually Kills the Colony", excerpt: "Best ant killer in Canada 2026: why bait beats every contact spray, indoor vs outdoor vs perimeter picks, and the PCP number to check before you buy.", date: '2026-07-28', category: 'tick' as const },
  { slug: "best-ant-traps-canada", title: "Best Ant Traps in Canada 2026 — Bait Stations vs Glue Traps, and What Actually Kills the Colony", excerpt: "Best ant traps in Canada 2026: liquid bait stations beat glue boards because the colony carries the bait to the queen. Placement, pet safety, PCP rules.", date: '2026-07-28', category: 'tick' as const },
  { slug: "best-cockroach-spray-canada", title: "Cockroach Spray in Canada — The Three Jobs Worth Buying a Can For", excerpt: "Which cockroach spray to buy in Canada, and when not to: the three jobs a can genuinely wins, how to read a PCP label, and why spraying near bait ruins it.", date: '2026-07-28', category: 'tick' as const },
  { slug: "best-roach-traps-canada", title: "Cockroach Traps in Canada — Glue Boards Find Them, Bait Stations Kill Them", excerpt: "Which cockroach trap to buy in Canada: glue boards diagnose where roaches live, enclosed bait stations do the killing. How many of each, placement, PCP check.", date: '2026-07-28', category: 'tick' as const },
  { slug: "best-silverfish-traps", title: "Silverfish Traps in Canada — Which Type to Buy, How Many, and Where Each One Goes", excerpt: "Which silverfish trap to buy in Canada: flat glue boards vs covered stations vs the free jar trap, how many you need, where each goes, and when to replace.", date: '2026-07-28', category: 'tick' as const },
  { slug: "best-centipede-killer-canada", title: "Centipede Killer Canada — Which Product to Buy First, in What Order, and What the Label Must Say", excerpt: "What to buy for centipedes in Canada, in buying order: dehumidifier spec, which registered diatomaceous earth, how many glue boards, and the PCP label check.", date: '2026-07-28', category: 'tick' as const },
  { slug: "best-flea-spray-for-home-canada", title: "Best Flea Spray for Home Canada 2026 — Why the IGR Matters More Than the Kill", excerpt: "Flea spray for home use in Canada: why the IGR (methoprene or pyriproxyfen) matters more than the kill — adult fleas are only 5% of an infestation.", date: '2026-07-28', category: 'tick' as const },
  { slug: "best-flea-bomb-canada", title: "Best Flea Bomb in Canada 2026 — Why an IGR Spray Beats Every Fogger on the Shelf", excerpt: "Flea bomb guide for Canada: total-release foggers miss the 95% of fleas living as eggs, larvae and pupae in carpet base — here is what to buy instead.", date: '2026-07-28', category: 'tick' as const },
]

// ── Wave map-to-1000 #6 — Wave 7: 4 autumn-window identification / decision pages
// (Jul 30 2026). Bed-bug look-alikes, mouse repellent, stink bugs, mouse droppings.
export const NEW_BLOGS_35 = [
  { slug: "bugs-that-look-like-bed-bugs-canada", title: "Bugs That Look Like Bed Bugs in Canada — The Nine Look-Alikes, and How to Tell Which One You Have", excerpt: "Bugs that look like bed bugs in Canada: carpet beetles, booklice, spider beetles, bat bugs, cockroach nymphs and ticks — how to tell them apart before you spend a dollar.", date: '2026-07-30', category: 'tick' as const },
  { slug: "mouse-repellent-canada", title: "Mouse Repellent in Canada — What Actually Repels a Mouse, and What Just Sells Well", excerpt: "Mouse repellent in Canada: which types have real evidence, why ultrasonic and peppermint fail, and the exclusion-and-trap plan that actually works.", date: '2026-07-30', category: 'tick' as const },
  { slug: "how-to-get-rid-of-stink-bugs-canada", title: "How to Get Rid of Stink Bugs in Canada — Get Them Out Without the Smell, Then Seal Them Out for Good", excerpt: "Stink bugs in Canada: how to get them out without the smell, the late-summer sealing window that keeps them out, and why indoor sprays make it worse.", date: '2026-07-30', category: 'tick' as const },
  { slug: "what-does-mouse-poop-look-like-canada", title: "What Does Mouse Poop Look Like? — The Canadian ID Guide, and the Cleanup Order That Matters", excerpt: "What does mouse poop look like? Dark rice-grain pellets 3-6 mm, pointed at both ends — and how to tell them from rat, bat and roach droppings.", date: '2026-07-30', category: 'tick' as const },
]

// ── Wave map-to-1000 #6 — Wave 7b: 4 October-window pages (Jul 30 2026).
// Bed-bug life stage + bite comparison, the Doktor Doom brand hub, and the site's
// FIRST French-language page (a single fr-CA beachhead to measure — do not add a
// second until it has 90 days of data). Numbered 38 to leave 36–37 free for the
// sibling build waves shipping the same day.
export const NEW_BLOGS_38 = [
  { slug: "baby-bed-bugs-nymphs", title: "Baby Bed Bugs in Canada — What Nymphs Look Like at Each Stage, and Why Finding One Changes the Plan", excerpt: "Baby bed bugs (nymphs) are 1–4.5 mm, translucent, and moult five times. How to tell them from carpet beetle larvae and booklice — and why finding one matters.", date: '2026-07-30', category: 'tick' as const },
  { slug: "bed-bug-bites-vs-mosquito-bites", title: "Bed Bug Bites vs Mosquito Bites — Five Tells That Separate Them, and What to Do About Each", excerpt: "Bed bug bites vs mosquito bites: five tells that separate them — pattern, timing, where on the body, season and the room evidence that actually confirms it.", date: '2026-07-30', category: 'mosquito' as const },
  { slug: "doktor-doom-canada-guide", title: "Doktor Doom in Canada — Which Product Does Which Job, and the Three Jobs It Is Wrong For", excerpt: "Doktor Doom in Canada: which product does which job, what the PCP registration number on the can actually buys you, and the three jobs the brand is wrong for.", date: '2026-07-30', category: 'tick' as const },
  { slug: "traces-punaises-de-lit-matelas", title: "Traces de punaises de lit sur un matelas — lire les points noirs, les taches et les mues", excerpt: "Traces de punaises de lit sur un matelas : comment distinguer déjections, taches de sang, mues et œufs — et quoi faire avant d’acheter un produit.", date: '2026-07-30', category: 'tick' as const },
]

// ── Wave map-to-1000 #6 — Wave 7c: 8 sibling pages shipped 30 Jul 2026 (the slot
// NEW_BLOGS_38's header reserved). Four bed-bug evidence/decision pages, plus the
// four seasonal on-moat pages: pantry moths, carpet beetles, voles, carpenter bees
// and the magnetic screen door. Build order 20 (squirrels) was deliberately NOT
// shipped — it is a Feb-2027 page and does not exist on disk.
export const NEW_BLOGS_36 = [
  { slug: "pantry-moth-traps-canada", title: "Pantry Moth Traps in Canada — What They Actually Catch, What They Cannot, and the Cupboard Purge That Ends It", excerpt: "Pantry moth traps in Canada: what a pheromone trap actually catches (adult males only), how many to buy, and the cupboard purge that genuinely ends it.", date: '2026-07-30', category: 'tick' as const },
  { slug: "bed-bug-stains-poop-droppings-canada", title: "Bed Bug Stains and Droppings — What Bed Bug Poop Actually Looks Like, and the Five Marks It Gets Confused With", excerpt: "Bed bug poop and stains explained: what the black pen-tip spots are, the damp-swab test that confirms them, and the five marks people confuse them with.", date: '2026-07-30', category: 'tick' as const },
  { slug: "bed-bugs-on-the-ttc-toronto", title: "Bed Bugs on the TTC — What a Toronto Commuter Should Actually Worry About, and the Routine at the Door That Matters", excerpt: "Bed bugs on the TTC: why transit is a far poorer route than your own bedroom, what to do if you see one on a seat, and the door routine that works.", date: '2026-07-30', category: 'tick' as const },
  { slug: "what-kills-bed-bugs-instantly-canada", title: "What Kills Bed Bugs Instantly in Canada — The Short List That Works on Contact, and Why Instant Is the Wrong Goal", excerpt: "What kills bed bugs instantly in Canada: steam, direct heat and a registered contact spray — plus why alcohol is a fire risk and foggers never reach them.", date: '2026-07-30', category: 'tick' as const },
  { slug: "how-to-get-rid-of-carpet-beetles-canada", title: "How to Get Rid of Carpet Beetles in Canada — The Larvae Are the Pest, and the Vacuum Is the Weapon", excerpt: "Carpet beetles in Canada: the larvae do all the damage, not the adults. How to tell them from bed bugs and clothes moths, and the vacuum-first plan.", date: '2026-07-30', category: 'tick' as const },
  { slug: "how-to-get-rid-of-voles-canada", title: "How to Get Rid of Voles in Canada — Vole vs Mouse, and Why the Damage Only Shows Up at Snowmelt", excerpt: "Voles in Canada: how to tell a vole from a mouse or a mole, why the runways appear at snowmelt, and the trapping, guards and habitat fixes that work.", date: '2026-07-30', category: 'tick' as const },
  { slug: "best-magnetic-screen-door-canada", title: "Best Magnetic Screen Door in Canada — How to Size It, Which Mesh to Buy, and Why Most of Them Fail at the Top", excerpt: "Magnetic screen doors in Canada: how to measure the frame so it actually seals, standard vs no-see-um mesh, and the mounting failure that kills most of them.", date: '2026-07-30', category: 'mosquito' as const },
  { slug: "how-to-get-rid-of-carpenter-bees-canada", title: "How to Get Rid of Carpenter Bees in Canada — Treat the Gallery, Plug It, Then Paint", excerpt: "Carpenter bees in Canada: how to tell them from bumblebees, why the males cannot sting, and the treat-plug-paint order that stops the holes returning.", date: '2026-07-30', category: 'tick' as const },
]

// ── Autumn 2026 build wave — bed-bug evidence, bed-bug cost, drain flies ──────
export const NEW_BLOGS_37 = [
  { slug: "bed-bug-shells-casings-shed-skins-canada", title: "Bed Bug Shells, Casings and Shed Skins — What You Found, and What It Actually Proves", excerpt: "Bed bug shells are moulted skins, not dead bugs. What a casing proves about feeding and breeding, how to tell one from a carpet beetle skin, and what to do next.", date: '2026-07-30', category: 'tick' as const },
  { slug: "bed-bug-treatment-cost-canada", title: "Bed Bug Treatment Cost in Canada — What Decides the Number, and When DIY Is Genuinely Cheaper", excerpt: "Bed bug treatment cost in Canada: published heat vs chemical ranges with sources, what makes quotes vary, who pays in an Ontario rental, and when DIY is cheaper.", date: '2026-07-30', category: 'tick' as const },
  { slug: "how-to-get-rid-of-drain-flies-canada", title: "How to Get Rid of Drain Flies in Canada — The Biofilm Is the Problem, Not the Drain", excerpt: "Drain flies breed in the biofilm coating your pipe walls, not in the water. Why bleach fails, the overnight tape test that finds the right drain, and the fix.", date: '2026-07-30', category: 'tick' as const },
]

// ── Aug 2026 winter-earning wave — the two thinnest high-value gaps in the
// year-round clusters. Both slugs carry a Canadian qualifier (measured 3.11x CTR
// effect at matched intent + position), and both are deliberately off-season-proof:
// the steamer and bedbug clusters earn through October when mosquito/tick go dormant.
// NAMED, not numbered: several build waves shipped the same day and all claimed
// NEW_BLOGS_39. A descriptive name cannot collide with the next wave.
export const NEW_BLOGS_STEAMER_LANDLORD = [
  { slug: "dupray-neat-vs-hill-injection-canada", title: "Dupray Neat vs Hill Injection (Canada 2026) — Home Steamer or Commercial Machine?", excerpt: "Dupray Neat vs Hill Injection in Canada: what the commercial machine actually buys you (uptime, not killing power), why the injection line is dead weight for bed bugs, and the point at which spending more starts to pay.", date: '2026-08-22', category: 'tick' as const },
  { slug: "bed-bug-equipment-kit-for-landlords-canada", title: "Bed Bug Equipment Kit for Landlords in Canada — What to Stock for a Multi-Unit Building", excerpt: "The bed bug kit for Canadian landlords: what scales per bed (encasements, interceptors), what you buy once for the whole building (steamer, sealed-HEPA vacuum), and the multi-unit mistakes that cost the most.", date: '2026-08-22', category: 'tick' as const },
]

// ── Autumn 2026 build wave #2 — the bed-bug high-ticket decision gap ──────────
// Two pages that sit immediately BEFORE the most expensive purchase in the
// bed-bug cluster rather than adding another product roundup: the rent-vs-buy
// objection that stops the sale, and the vehicle — the one bed-bug environment
// none of the existing 49 bed-bug pages covered.
export const NEW_BLOGS_BEDBUG_HIGH_TICKET = [
  { slug: "bed-bug-heater-rental-vs-buying-canada", title: "Bed Bug Heater: Rent or Buy in Canada — The Arithmetic That Actually Decides It", excerpt: "Renting a bed bug heat chamber is barely possible in Canada. The cycle-count arithmetic that decides buy vs hire, how to size and verify a chamber, and the 120 V trap.", date: '2026-08-22', category: 'tick' as const },
  { slug: "bed-bugs-in-a-car-heat-treatment-canada", title: "Bed Bugs in a Car — Why Heat Is the Only Real Answer, and How to Do It in Canada", excerpt: "Bed bugs in a car: why foggers are illegal and useless in a cabin, where they actually hide in a vehicle, the remove-launder-heat-vacuum-steam protocol, and why sun and winter both fail.", date: '2026-08-22', category: 'tick' as const },
]

// ── Aug 2026 winter-earning wave — steamer cluster, mainstream home SERP ─────
// The steamer cluster converts at 6.13% (the best rate we measure) but its $47.99
// AOV caps EPC, and all six existing pages are pest-facing. These two push the
// cluster into the mainstream home-cleaning SERP where the volume and the baskets
// are: steam mops ($150–$400) and upholstery extractors ($300–$600), both in the
// 6% Home band, both year-round with no October cliff. Deliberately NOT another
// bed-bug steamer page — they cross-link to those instead of competing with them.
export const NEW_BLOGS_STEAMER_HOME = [
  { slug: "best-steam-mop-for-hardwood-floors-canada", title: "Best Steam Mop for Hardwood Floors Canada — Adjustable Steam, Sealed Floors, and the Winter Gap Problem", excerpt: "Steam mops on hardwood in Canada: the ten-minute water-drop test that tells you if your floor can take steam, why adjustable output is the only feature that matters, and the dry-winter seam problem in Ontario homes.", date: '2026-08-22', category: 'tick' as const },
  { slug: "best-upholstery-steam-cleaner-canada", title: "Best Upholstery Steam Cleaner Canada — Extractors, Vapour Steamers, and the Tag That Decides Which One You Need", excerpt: "Upholstery cleaning in Canada: extractor vs dry-vapour steamer, the W/S/WS/X code under your cushion, why suction beats heat, and how to avoid tide lines and wicking.", date: '2026-08-22', category: 'tick' as const },
]

// ── Winter-earning affiliate wave (Aug 22 2026) ────────────────────────
// Built off the first per-cluster Amazon.ca earnings export: 74% of clicks are
// mosquito/tick and go dormant in October, so these two target the high-basket,
// winter/year-round clusters instead. Squirrel-proof feeders are a deep-winter
// wildlife purchase (note: the "squirrel" token bills to the rodent tracking ID);
// commercial steam cleaners sit in the steamer cluster, which converts at the
// highest rate on the account, at roughly 20x the cluster's measured basket.
export const NEW_BLOGS_WINTER_EARNERS = [
  { slug: "best-squirrel-proof-bird-feeder-canada", title: "Best Squirrel-Proof Bird Feeder Canada 2026 — The Feeder Is Only Half the Job", excerpt: "Squirrel-proof bird feeders that work in Canada: weight-activated metal feeders, the 5-7-9 rule, baffles and poles, and the winter snow mistake.", date: '2026-08-22', category: 'tick' as const },
  { slug: "best-commercial-steam-cleaner-canada", title: "Best Commercial Steam Cleaner Canada 2026 — Continuous Fill, Detergent Injection, and the Amperage Nobody Warns You About", excerpt: "Commercial steam cleaners in Canada: why continuous fill and detergent injection decide your shift, the 15-amp circuit trap, and hard-water boiler care.", date: '2026-08-22', category: 'tick' as const },
]

// ── Aug 2026 winter-earnings wave — dehumidifier cluster deepening ───────────
// Built off the first per-cluster Amazon.ca earnings export (30d to 22 Aug 2026):
// dehumidifier was the thinnest high-value cluster on the site — 3 pages earning
// roughly double a mosquito page each per month. 74% of current clicks are
// mosquito/tick and go dormant in October, so both of these are deliberately
// year-round/winter-peaked. LGR targets the contractor who buys on spec, not
// price; desiccant-vs-compressor is the X-vs-Y fork that routes buyers into the
// crawl-space, cold-garage and whole-house pages.
// NAMED, not numbered: four build waves shipped the same day and all four
// claimed NEW_BLOGS_39. A descriptive name cannot collide with the next wave.
export const NEW_BLOGS_DEHUMIDIFIER_PRO = [
  { slug: "best-commercial-lgr-dehumidifier-canada", title: "Best Commercial LGR Dehumidifier Canada 2026 — Job-Site Drying, Rating Games & Air-Mover Pairing", excerpt: "Commercial LGR dehumidifiers for Canadian job sites: what low-grain refrigerant actually means, why the AHAM rating is the only honest one, sizing by cubic feet, air-mover pairing, circuit load, and when renting beats buying.", date: '2026-08-22', category: 'tick' as const },
  { slug: "desiccant-vs-compressor-dehumidifier-canada", title: "Desiccant vs Compressor Dehumidifier Canada 2026 — Which One Works in a Cold Garage, Cellar or Cottage", excerpt: "Desiccant vs compressor dehumidifiers in Canada: why refrigerant coils frost below roughly 15°C, which class belongs in a cold garage, cellar, crawl space or cottage, what each really costs to run, and when the cheap option is correct.", date: '2026-08-22', category: 'tick' as const },
]

// ── Winter-earning wave (Aug 22 2026) — dehumidifier cluster expansion ────────
// Per-cluster Amazon.ca earnings showed the dehumidifier cluster earning ~$11.58
// per page per month against ~$5.83 for mosquito, off only three pages — and it
// peaks in winter, exactly when the mosquito cluster (74% of clicks) goes dormant
// in October. These two fill the thinnest high-value gap: a specific-space garage
// buying guide, and the barrier-vs-dehumidifier decision page.
//
// NOTE: named rather than numbered because three other concurrent waves also
// claimed NEW_BLOGS_39 — same convention as NEW_BLOGS_WINTER_EARNERS above.
export const NEW_BLOGS_DEHUMIDIFIER_SPACES = [
  { slug: "best-dehumidifier-for-cold-garage-canada", title: "Best Dehumidifier for a Cold Garage Canada 2026 — Rust, Slab Sweat & What Actually Works Below 10°C", excerpt: "Choosing a dehumidifier for an unheated Canadian garage: the temperature line where a compressor coil frosts and quits, when a desiccant unit is the right buy, sizing for a leaky garage envelope, drain hoses that freeze — and the cheaper fixes that solve most garages without an appliance.", date: '2026-08-22', category: 'tick' as const },
  { slug: "crawl-space-dehumidifier-vs-vapour-barrier-canada", title: "Crawl Space Dehumidifier vs Vapour Barrier in Canada — Which One First, and Why the Honest Answer Is Both", excerpt: "Vapour barrier or dehumidifier for a damp Canadian crawl space? Why soil evaporation makes the barrier the source control and the dehumidifier the finisher, the five-step order of operations, liner thickness and seam detailing, low-temperature specs, and when the barrier alone is enough.", date: '2026-08-22', category: 'tick' as const },
]

// ── Winter-earning wave (Aug 22 2026) — cluster front doors ──────────────────
// Built off the first per-cluster Amazon.ca earnings export (30d to 22 Aug 2026).
// Two pages that sit at the FRONT of their cluster rather than adding another
// roundup to the middle of it:
//   · the dehumidifier sizing question — the last thing asked before buying, and
//     the only page in that cluster that can route a reader to a $2,000 crawl-space
//     or whole-home unit instead of a $250 portable, because sizing is what reveals
//     they need the big machine. Shaped as a purchase table, deliberately NOT an
//     explainer — the informational shape is what gave the air-purifier cluster
//     its 0.68% CTR.
//   · chimney exclusion hardware — the six existing wildlife pages are all traps,
//     fences and deterrents; none covered permanent physical exclusion. Autumn/
//     winter peak (raccoons den in chimneys Oct–Mar), 6% Home Improvement band,
//     and the most urgent buyer state in the cluster: an animal already inside.
// Numbered 44 deliberately: five sibling waves shipping the same day all claimed
// NEW_BLOGS_39 concurrently, so 40–43 are left clear for that reconciliation.
export const NEW_BLOGS_44 = [
  { slug: "what-size-dehumidifier-do-i-need-canada", title: "What Size Dehumidifier Do I Need? The Canadian Sizing Table, by Space and Dampness", excerpt: "What size dehumidifier you need in Canada, by square footage and dampness: the 30 vs 50 pint call, why the 2019 rating change makes old advice under-size, cold-basement auto-defrost limits, and when a crawl-space or whole-home unit is the correct buy.", date: '2026-08-22', category: 'tick' as const },
  { slug: "raccoon-proof-chimney-cap-canada", title: "Raccoon-Proof Chimney Caps in Canada — The Hardware That Ends It, and How to Fit It Without Trapping an Animal Inside", excerpt: "Raccoon-proof chimney caps in Canada: single-flue vs multi-flue vs chase-top, why stainless beats galvanized in Ontario winters, why attachment matters more than mesh, and the spring rule before you cap anything.", date: '2026-08-22', category: 'tick' as const },
]

// ── Autumn 2026 wildlife-exclusion wave (Aug 22 2026) ────────────────────────
// Built off the first per-cluster Amazon.ca earnings export: wildlife earns
// $0.465 EPC / ~$6.89 per page per month and peaks in AUTUMN/WINTER, exactly
// when mosquito and tick (74% of clicks) go dormant in October. Both pages are
// high-basket 6% Patio / Tools & Home Improvement builds sold by the roll —
// deer netting and posts, hardware cloth and ground pins — and both are jobs a
// Canadian homeowner does in the narrow window between the young going mobile
// and the ground freezing. Numbered clear of the NEW_BLOGS_39 slot, which
// several concurrent build waves collided on.
export const NEW_BLOGS_49 = [
  { slug: "best-deer-fence-for-gardens-canada", title: "Best Deer Fence for Gardens in Canada 2026 — 7 ft Netting, Posts, and the Install That Actually Holds", excerpt: "Deer fencing for Canadian gardens: why 7 ft is the threshold a 6 ft fence misses, UV-stabilised poly netting vs metal, post length and spacing, staking the bottom edge deer actually push under, snowpack maths, municipal height by-laws, and the autumn install window before the ground freezes.", date: '2026-08-22', category: 'tick' as const },
  { slug: "raccoon-and-skunk-proofing-under-a-deck-canada", title: "Raccoon & Skunk Proofing Under a Deck in Canada — The L-Footing Trench That Actually Keeps Them Out", excerpt: "How to permanently exclude raccoons and skunks from under a deck, shed or porch in Canada: the half-inch galvanised hardware cloth L-footing, the no-dig surface apron, the three-night vacancy check, the denning-season window you must not seal in, and why Ontario's 1 km relocation law makes trapping pointless.", date: '2026-08-22', category: 'tick' as const },
]

// ── Aug 2026 winter-earning wave — dehumidifier cluster, the two highest-basket
// gaps. Per-cluster Amazon.ca earnings (30d to 22 Aug 2026) put dehumidifier at
// the top of the account on dollars per page, off only three pages, all of which
// sell PORTABLE consumer units. These two open the two product classes those
// pages never touch: a permanently installed low-clearance crawl-space unit, and
// a ducted whole-home appliance. Both baskets are multiples of the measured
// cluster AOV, and both peak in winter — when the mosquito/tick cluster (74% of
// clicks) goes dormant in October.
// NOTE: numbered 47 deliberately. On 22 Aug 2026 several separate build waves each
// appended an array called NEW_BLOGS_39 to this file; picking a number well clear
// of the sequence avoids adding to that collision.
export const NEW_BLOGS_47 = [
  { slug: "best-crawl-space-dehumidifier-canada", title: "Best Crawl Space Dehumidifier Canada 2026 — Low-Clearance Units, Pump Drainage & the Vapour Barrier That Comes First", excerpt: "Crawl space dehumidifiers for Canadian homes: why a low-profile purpose-built unit differs from a portable, measuring joist clearance, condensate pumps and the Ontario freeze rule, low-temperature operation, and why the vapour barrier has to come first.", date: '2026-08-22', category: 'tick' as const },
  { slug: "best-whole-house-dehumidifier-canada", title: "Best Whole House Dehumidifier Canada 2026 — Ducted Units, Sizing & When a Portable Is Still the Right Answer", excerpt: "Ducted whole-house dehumidifiers in Canada: the floor-by-floor measurement that decides the purchase, why an oversized AC leaves a house cold and clammy, the three install configurations, why an HRV is not a dehumidifier, and the honest cases for buying a portable instead.", date: '2026-08-22', category: 'tick' as const },
]

// ── Autumn-exclusion wave (Aug 22 2026) — wildlife cluster, autumn-peaked ─────
// Built off the first per-cluster Amazon.ca earnings export: wildlife earns
// $0.465 EPC / ~$6.89 per page per month and peaks in autumn/winter, exactly when
// the mosquito cluster (74% of clicks) goes dormant in October. Both pages sell
// multi-unit exclusion hardware in the 6% Tools & Home Improvement / Patio bands
// rather than single low-basket items: a roof has several vents, and a hedge is
// bought by the linear foot. Deliberately a UNIQUELY NAMED array — four separate
// NEW_BLOGS_39 declarations collided in this file during the 22 Aug wave.
export const NEW_BLOGS_AUTUMN_EXCLUSION = [
  { slug: "best-raccoon-proof-roof-vent-covers-canada", title: "Best Raccoon-Proof Roof Vent Covers Canada 2026 — Steel Guards That Actually Hold", excerpt: "Raccoon-proof roof vent covers in Canada: the gauge and mesh that decide whether a guard holds, why fastening into the deck rather than the plastic vent matters, the soffit return everybody misses, and the autumn install window.", date: '2026-08-22', category: 'mosquito' as const },
  { slug: "how-to-stop-deer-eating-cedars-ontario", title: "How to Stop Deer Eating Your Cedars in Ontario — The Winter Plan That Actually Holds", excerpt: "Stop deer eating your cedars in Ontario: burlap on stakes, deer netting and egg-solids repellents — why browsed arborvitae barely regrows, how to size the wrap for snow lift, and the pre-freeze install deadline.", date: '2026-08-22', category: 'tick' as const },
]

// ── Season helpers ─────────────────────────────────────────────────────────────

export const PEAK_SEASON = 'May through July'
export const SERVICE_SEASON = 'May through September'

// -- Wave: high-basket / counter-seasonal earners, 22 Aug 2026 ---------------
// Chosen from the first per-cluster Amazon.ca earnings export (30d to 22 Aug),
// which showed EPC is driven by BASKET SIZE rather than conversion rate: rodent
// traps convert best on the whole site at 10.96% and earn $0.122 because the
// basket is $26.63, while dehumidifiers earn $0.772 on a $145.59 basket.
//
// These pages therefore target the 6% Amazon.ca bands (Patio / Home / Home
// Improvement) and large baskets -- screened structures, trapping systems,
// drainage, sump pumps, patio heat -- and most peak in autumn and winter, when
// roughly 74% of current site clicks go dormant.
//
// Named rather than numbered on purpose: ten arrays were appended concurrently
// during the 22 Aug build and the NEW_BLOGS_39 slot collided several times. A
// descriptive name cannot collide with the next wave.
export const NEW_BLOGS_HIGH_BASKET_AUG22 = [
  { slug: "battery-backup-sump-pump-canada", title: "Battery Backup Sump Pumps in Canada", excerpt: "A battery backup sump pump keeps an Ontario basement dry when spring storms take the power out. Sizing, batteries, alarms, and what to skip.", date: "2026-08-22", category: "tick" as const },
  { slug: "best-patio-heater-canada", title: "Best Patio Heaters in Canada for 2026", excerpt: "Propane tower vs electric infrared patio heaters for Canadian yards: BTU and coverage, wind behaviour, running cost per evening, and CSA clearances.", date: "2026-08-22", category: "tick" as const },
  { slug: "best-sump-pump-for-basement-canada", title: "Best Sump Pumps for Canadian Basements \u2014 Sizing by Lift Height, Switch Failure and Winter Discharge", excerpt: "Sizing a Canadian basement sump pump by lift height, not horsepower \u2014 cast iron vs thermoplastic, why the float switch fails first, and winter discharge.", date: "2026-08-22", category: "tick" as const },
  { slug: "biogents-bg-mosquitaire-mosquito-trap-canada", title: "Biogents BG-Mosquitaire in Canada: CO2 vs Lure-Only, and What It Costs to Run", excerpt: "Biogents BG-Mosquitaire in Canada: CO2 versus lure-only, real running costs against propane, where to site it, and who should buy something cheaper.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "brush-cutter-for-overgrown-yard-canada", title: "Brush Cutters for an Overgrown Yard in Canada", excerpt: "Reclaiming an overgrown Canadian yard: string trimmer vs brush blade vs walk-behind, line and blade sizing, blade thrust, PPE, and when to rent instead.", date: "2026-08-22", category: "tick" as const },
  { slug: "do-fire-pits-repel-mosquitoes-canada", title: "Do Fire Pits Keep Mosquitoes Away? The Honest Canadian Answer", excerpt: "Smoke repels mosquitoes; a smokeless fire pit mostly does not. The honest mechanism, what to buy instead, and how to size a pit for a Canadian yard.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "fall-yard-cleanup-leaf-blower-canada", title: "Leaf Blowers for Fall Yard Cleanup in Canada", excerpt: "How to pick a leaf blower for a Canadian fall cleanup: CFM vs MPH, sizing by lot, cordless vs gas backpack, vacuum and mulch modes, and winter storage.", date: "2026-08-22", category: "tick" as const },
  { slug: "fix-standing-water-yard-mosquitoes-canada", title: "Fix Standing Water in Your Yard: The Canadian Drainage Guide", excerpt: "Standing water is the mosquito source, not the symptom. Drain a soggy Ontario yard with $150-$500 of pipe instead of a four-figure contractor quote.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "green-pool-mosquito-breeding-ontario", title: "Green Pools Breed Mosquitoes in Ontario \u2014 Covering, Circulating and Treating a Pool You Are Not Opening", excerpt: "An algae-green pool is the largest mosquito breeding site on any street. How to cover it, circulate it or larvicide it \u2014 plus the vacant house next door.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "gutter-guards-mosquito-breeding-canada", title: "Gutter Guards and Mosquito Breeding in Canada", excerpt: "A blocked eavestrough breeds mosquitoes for weeks. Micro-mesh vs foam, aluminium vs plastic, DIY at ~$1-2/ft against ~$22/ft installed in the GTA.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "hardtop-vs-soft-top-mosquito-gazebo-canada", title: "Hardtop vs Soft-Top Gazebo for Mosquitoes: Which One to Buy in Canada", excerpt: "Hardtop vs soft-top screened gazebo in Canada: mesh density, zipper life, Ontario snow load, anchoring, and whether replacement netting exists in year 3.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "mosquito-screened-porch-kit-canada", title: "Mosquito Screened Porch Kits in Canada: Screening an Existing Deck or Porch", excerpt: "Screen an existing deck or porch in Canada: DIY track-and-mesh kits vs custom curtains, how to measure, which mesh, and where zip-track fails in wind.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "mosquito-trap-running-cost-canada", title: "What Mosquito Traps Cost to Run in Canada", excerpt: "Propane tanks, lure cartridges, nets and hydro: what a mosquito trap actually costs to run for a Canadian season, and when spraying is cheaper.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "mouse-proof-garage-door-seal-canada", title: "Mouse-Proof Your Garage Door (Canada) \u2014 Sealing the Corner Gap", excerpt: "The garage door is the biggest gap in most Ontario homes. Threshold seals, bottom seal profiles, corner inserts, and the mesh fix that keeps mice out.", date: "2026-08-22", category: "tick" as const },
  { slug: "outdoor-fan-mosquito-control-canada", title: "Outdoor Fans for Mosquito Control in Canada", excerpt: "Fans are the one non-chemical mosquito control that works on a deck. CFM targets, wet vs damp ratings for Ontario, and where to aim them.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "patio-heater-vs-fire-table-canada", title: "Patio Heater vs Fire Table in Canada \u2014 Which One Actually Keeps You Warm?", excerpt: "Propane fire table or patio heater for a Canadian yard? Heat delivered to people, burn time, covered-porch rules, sizing and clearance, compared honestly.", date: "2026-08-22", category: "tick" as const },
  { slug: "pergola-mosquito-curtains-canada", title: "Pergola Mosquito Curtains in Canada: Mesh, Tracks & Sizing", excerpt: "Pergola mosquito curtains for Canadian yards: mesh size, ceiling track vs rod, no-see-um mesh for GTA waterfront lots, sizing, and winter storage.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "pond-aerator-mosquito-larvae-canada", title: "Pond Aerators vs Mosquito Larvae: The Canadian Sizing Guide", excerpt: "Mosquito larvae need a still surface to breathe. Sizing a pond aerator for a Canadian pond, Ontario winterizing, and why a fountain is not aeration.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "rain-barrel-mosquito-proof-canada", title: "How to Mosquito-Proof a Rain Barrel in Canada", excerpt: "Screen every opening, not just the lid. What mesh to use, why the overflow port is the real gap, diverters, stands and Bti \u2014 for Canadian rain barrels.", date: "2026-08-22", category: "mosquito" as const },
  { slug: "rodent-proof-compost-bin-canada", title: "Rodent-Proof Compost Bins in Canada \u2014 What Actually Keeps Rats Out", excerpt: "Rodent-proof compost bins for Canadian yards: sealed tumblers, steel bins, hardware-cloth floors, lid clips, winter reality and the cheap retrofit.", date: "2026-08-22", category: "tick" as const },
]

export const NEW_BLOGS_FALL_AUG31 = [
  { slug: "best-cockroach-killer-canada", title: "Best Cockroach Killer in Canada: Every Product Class Ranked", excerpt: "The roach products that end infestations are the slow, boring ones \u2014 enclosed bait stations, boric acid and glue monitors \u2014 while instant-kill spray sabotages all of them. Every class ranked for Canadian shelves, plus the German-vs-American strategy split.", date: "2026-08-31", category: "tick" as const },
  { slug: "wasp-dust-canada", title: "Wasp Dust in Canada: Legality and What Actually Works", excerpt: "Insecticidal dust is the professional standard for ground and wall-void wasp nests \u2014 foragers track it into the galleries. But Delta Dust is commercial-class in Canada, so here is the mechanism, the PMRA line, and what a homeowner can legally buy instead.", date: "2026-08-31", category: "tick" as const },
  { slug: "best-wasp-killer-canada", title: "Best Wasp Killer in Canada: Matched to the Nest, Not the Can", excerpt: "Foam, liquid jet, dust or trap \u2014 the right wasp killer is decided by where the nest is. Every option on the Canadian shelf matched to its nest type, the distance ratings that matter, and the night protocol.", date: "2026-08-31", category: "tick" as const },
  { slug: "how-to-get-rid-of-spiders-in-house-canada", title: "Get Rid of Spiders in a Canadian House: The Fall Plan", excerpt: "The September spider surge is mating season, not an invasion \u2014 and spray is the weakest tool against it. The vacuum-and-egg-sac protocol, door sweeps, weep-vent sealing and the dehumidifier move that starves the population out.", date: "2026-08-31", category: "tick" as const },
  { slug: "cluster-flies-in-house-canada", title: "Cluster Flies in the House: Why They Appear Every Fall", excerpt: "The big sluggish flies at your windows every October \u2014 and again on warm February days \u2014 are overwintering cluster flies, and they cannot breed indoors. Why they pick the same sun-warmed houses, and the late-August sealing deadline.", date: "2026-08-31", category: "mosquito" as const },
  { slug: "earwig-traps-indoor-canada", title: "Indoor Earwig Traps in Canada: What Actually Catches Them", excerpt: "The best indoor earwig trap is a shallow dish of oil with a splash of soy sauce. How to run it, where sticky boards fit, why earwigs come inside during hot spells and fall \u2014 and why indoor sprays are pointless.", date: "2026-08-31", category: "tick" as const },
]
