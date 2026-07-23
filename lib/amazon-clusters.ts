// ─────────────────────────────────────────────────────────────────────────────
// Per-cluster Amazon Associates tracking IDs.
//
// Every affiliate page belongs to ONE content cluster (bed-bug, foggers, rodent…).
// Each cluster has its own Amazon tracking ID, so the Associates "Tracking ID"
// report breaks earnings down BY CLUSTER — telling us which kinds of pages
// actually make money, so we build more of those.
//
// These IDs are all registered on the SAME Amazon account (Manage Tracking IDs).
// They only change the `tag=` value on the outbound link — nothing about the
// fail-closed link architecture changes. When PUBLIC_AMAZON_TAG is unset, links
// stay off entirely (see lib/amazon.ts); the cluster tag is only ever an override
// of the default tag WHEN links are already enabled.
//
// NOTE: the check:amazon guard (scripts/check-amazon.mjs) keeps its own copy of
// this tag set on purpose (an independent guard shouldn't import app code). If you
// add/rename a cluster here, mirror it there.
// ─────────────────────────────────────────────────────────────────────────────

export const CLUSTER_TAGS = {
  mosquito: 'buzzskito-mosquito-20',
  tick: 'buzzskito-tick-20',
  bedbug: 'buzzskito-bedbug-20',
  rodent: 'buzzskito-rodent-20',
  wildlife: 'buzzskito-wildlife-20',
  flies: 'buzzskito-flies-20',
  airpurifier: 'buzzskito-airpurifier-20',
  dehumidifier: 'buzzskito-dehumidifier-20',
  fogger: 'buzzskito-fogger-20',
  sprayer: 'buzzskito-sprayer-20',
  steamer: 'buzzskito-steamer-20',
  wasp: 'buzzskito-wasp-20',
  ant: 'buzzskito-ant-20',
  roach: 'buzzskito-roach-20',
  general: 'buzzskito-general-20',
} as const

export type Cluster = keyof typeof CLUSTER_TAGS

export const ALL_CLUSTER_TAGS: string[] = Object.values(CLUSTER_TAGS)

// First match wins — ORDER MATTERS.
// - bed-bug is checked first so "bed-bug-fogger", "bed-bug-steamer" etc. all group
//   under the bed-bug cluster (the page topic), not the device.
// - pest verticals before device verticals, device verticals before the fallback.
const RULES: Array<[RegExp, Cluster]> = [
  [/bed-?bug|packtite|zappbug|thermalstrike|thermal-strike|sleep-tight|encasement|cimexa|ecoraider/, 'bedbug'],
  [/\btick|lyme|blacklegged/, 'tick'],
  [/mosquito|dynatrap|mosquito-magnet|west-nile|thermacell|permethrin|picaridin|\bdeet\b|repellent|citronella/, 'mosquito'],
  [/raccoon|deer|electric-fence|fence-charger|fence-for|repeller|yard-enforcer|havahart|zareba|nuisance-wildlife|spray-away|live-animal-trap|live-trap|motion-activated-sprinkler/, 'wildlife'],
  [/mouse|mice|\brat\b|rat-|rats\b|rodent|attic|\brv\b|rv-|vole|chipmunk|\bmole|squirrel|gopher|exclusion|goodnature|\ba24\b|rat-zapper/, 'rodent'],
  [/horse-?fly|\bflies\b|fly-trap|fly-light|fly-killer|drain-fly|fungus-gnat|\bgnat|h-trap|faicuk|fly-sconce/, 'flies'],
  [/wasp|hornet|\bbee\b|bee-suit|yellow-?jacket|nest/, 'wasp'],
  [/carpenter-ant|\bants?\b|ant-control|ant-kit/, 'ant'],
  [/roach|cockroach/, 'roach'],
  [/dehumidifier/, 'dehumidifier'],
  [/air-purifier|hepa-vacuum|dust-mite-vacuum|wildfire-smoke/, 'airpurifier'],
  [/steam|steamer|dupray|vapamore|mcculloch/, 'steamer'],
  [/fogger|thermal-fog|\bulv\b|cold-fog/, 'fogger'],
  [/sprayer|spreader|backpack|chapin|field-king|pump-pressure|atv-sprayer|misting|broadcast|tow-behind|edgeguard/, 'sprayer'],
]

/** Map a blog slug to its cluster key. Falls back to 'general'. */
export function clusterForSlug(slug = ''): Cluster {
  const s = slug.toLowerCase()
  for (const [re, cluster] of RULES) if (re.test(s)) return cluster
  return 'general'
}

/** Map a blog slug straight to its cluster tracking ID (what components want). */
export function tagForSlug(slug = ''): string {
  return CLUSTER_TAGS[clusterForSlug(slug)]
}
