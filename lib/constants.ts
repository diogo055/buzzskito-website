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
    slug: 'mosquito-net-canada',
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
    slug: 'best-mosquito-trap-canada',
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
    slug: 'mosquito-repellent-for-dogs-canada',
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

// ── Season helpers ─────────────────────────────────────────────────────────────

export const PEAK_SEASON = 'May through July'
export const SERVICE_SEASON = 'May through September'
