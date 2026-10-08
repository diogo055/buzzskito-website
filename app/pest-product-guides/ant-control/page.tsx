import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import GuideHub, { type HubSection } from '@/components/GuideHub'

const SLUG = 'pest-product-guides/ant-control'
const DATE = '2026-10-07'
const TITLE = 'Ant Control Products in Canada — Baits, Traps & Carpenter Ants'

const SECTIONS: HubSection[] = [
  {
    name: 'Ant Baits & Traps',
    icon: '🍯',
    intro: 'The bait-first strategy starts here. An enclosed liquid bait station is not really a trap: foragers feed, walk home alive, and share the slow-acting bait with other workers, the brood and the queen, which is how a consumer product reaches the part of the colony you cannot see. These two guides sort the ant aisle into the formats that do that and the ones, glue boards and contact sprays among them, that only kill the ants in front of you.',
    guides: [
      { href: '/blog/best-ant-killer', title: 'Best Ant Killer in Canada', blurb: 'Liquid and protein bait stations, gels, outdoor stakes and sprays sorted by one question: does the product reach the colony or only the trail?', tone: 'top' },
      { href: '/blog/best-ant-traps-canada', title: 'Best Ant Traps in Canada', blurb: 'Bait stations versus glue traps, how many placements a trail needs, and what makes an ant trap a regulated product in Canada.' },
    ],
  },
  {
    name: 'Removal & Carpenter Ants',
    icon: '🐜',
    intro: 'Product choice is half the job; method is the other half. For an ordinary kitchen trail that means putting bait on the live trail as the label directs, leaving the trail alone while the bait works, then sealing entry gaps and fixing moisture once activity stops. Carpenter ants get their own playbook because they are a structural problem: they tunnel into wood to nest and prefer wood that is already moist or decaying, so finding the nest and fixing the moisture source is the real work.',
    guides: [
      { href: '/blog/how-to-get-rid-of-ants-canada', title: 'How to Get Rid of Ants in Canada', blurb: 'The full bait-first plan — identify the species, bait the live trail, leave the trail alone, then seal entry points and fix moisture.' },
      { href: '/blog/carpenter-ants-canada', title: 'Carpenter Ants in Canada', blurb: 'How to confirm carpenter ants, read frass, trace the trail to the nest, and recognise the point where a professional is the better call.' },
    ],
  },
  {
    name: 'Identification Guides',
    icon: '🔎',
    intro: 'These are identification references for readers anywhere in North America, and they carry no product links. They cover which ant you are looking at, from the small species people call sugar ants to fire ants and carpenter ants, what winged ants mean, how to tell a flying ant from a termite, and which ants bite or sting. Start with the complete ant reference if you want the whole picture in one place.',
    guides: [
      { href: '/learn/ants', title: 'Ants: The Complete Reference', blurb: 'The whole subject in one place: how colonies work, the common household species, why ants come indoors, baiting versus spraying, and when to call a professional.' },
      { href: '/blog/sugar-ants', title: 'Sugar Ants', blurb: 'What people mean by sugar ants, which is several small species and not one, how to tell which you have, and the bait-first plan to get rid of them.' },
      { href: '/blog/tiny-ants', title: 'Tiny Ants', blurb: 'An identification key for very small ants indoors that works from size, color, smell when crushed and where the trail runs.' },
      { href: '/blog/black-ants', title: 'Black Ants', blurb: 'How to tell little black ants, pavement ants, odorous house ants and carpenter ants apart, and which of them matters for the structure.' },
      { href: '/blog/ghost-ants', title: 'Ghost Ants', blurb: 'How to identify ghost ants, where they live in the United States, how their colonies nest and spread, and how they are controlled.' },
      { href: '/blog/red-ants', title: 'Red Ants', blurb: 'Which ant the red ant you are seeing is, from imported and native fire ants to the reddish look-alikes, with what extension services say about stings and control.' },
      { href: '/blog/flying-ants', title: 'Flying Ants', blurb: 'What flying ants are, when and why they swarm, how long a swarm lasts, and what winged ants inside a house mean.' },
      { href: '/blog/flying-ants-vs-termites', title: 'Flying Ants vs Termites', blurb: 'Swarmers and workers side by side, with the antennae, waist and wing differences and the signs each insect leaves behind.' },
      { href: '/blog/do-ants-bite', title: 'Do Ants Bite?', blurb: 'Which ants bite, which sting and which do both, what the reactions look like, and when to seek care.' },
      { href: '/blog/do-carpenter-ants-bite', title: 'Do Carpenter Ants Bite?', blurb: 'Whether carpenter ants bite, what a bite feels like and how to treat it, and why the nest matters more than the bite.' },
    ],
  },
  {
    name: 'How-To Guides & Ant Facts',
    icon: '📖',
    intro: 'These how-to and reference guides are also written for readers anywhere in North America, and they carry no product links. The first four deal with getting ants out of a house or a kitchen and with the borax and vinegar questions. The rest answer what people ask about ants themselves: what they eat, how long they live, how many there are, and the remarkable species such as army, bullet, honeypot and zombie ants.',
    guides: [
      { href: '/blog/how-to-get-rid-of-ants-in-the-house', title: 'How to Get Rid of Ants in the House', blurb: 'The whole-house plan: why ants came in, following the trail to the entry point, matching bait to the ant, sealing and moisture fixes, and what a nest inside the walls means.' },
      { href: '/blog/how-to-get-rid-of-ants-in-the-kitchen', title: 'How to Get Rid of Ants in the Kitchen', blurb: 'Where kitchen ants nest and enter, how to place bait away from food-prep surfaces, when to clean the scent trail, and what not to spray where food is prepared.' },
      { href: '/blog/borax-for-ants', title: 'Borax for Ants', blurb: 'How borax and boric acid baits work, why a low concentration matters, the limits of homemade recipes, and what the National Pesticide Information Center says about risk to children and pets.' },
      { href: '/blog/does-vinegar-kill-ants', title: 'Does Vinegar Kill Ants?', blurb: 'What vinegar does and does not do to ants, why it clears a scent trail without reaching the colony, and where it fits in cleanup.' },
      { href: '/blog/what-do-ants-eat', title: 'What Do Ants Eat?', blurb: 'Sugars, proteins, fats and honeydew, how the diet of a colony shifts through the season, and why that decides which bait works.' },
      { href: '/blog/how-long-do-ants-live', title: 'How Long Do Ants Live?', blurb: 'Lifespans of workers, queens and males, the egg to adult timeline, how long a colony lasts, and how long ants survive without food or water.' },
      { href: '/blog/how-many-ants-are-in-the-world', title: 'How Many Ants Are in the World?', blurb: 'How researchers estimated the global ant population, what the figure works out to per person, how ant biomass compares with wild birds and mammals, and the limits of the estimate.' },
      { href: '/blog/army-ants', title: 'Army Ants', blurb: 'What makes an ant an army ant, how the raids and bivouacs work, where army ants live, and whether they are dangerous to people.' },
      { href: '/blog/bullet-ants', title: 'Bullet Ants', blurb: 'The bullet ant, where it lives, where its sting sits on the Schmidt sting pain index, and how long the pain lasts.' },
      { href: '/blog/honeypot-ants', title: 'Honeypot Ants', blurb: 'The worker ants that store liquid food in their swollen abdomens, where honeypot ants live, and how the colony uses them.' },
      { href: '/blog/zombie-ants', title: 'Zombie Ants', blurb: 'The fungus behind zombie ants, how it infects carpenter ants and changes their behavior, where it occurs, and what researchers say about any risk to people.' },
    ],
  },
]

const POSTS_LINKED = SECTIONS.reduce((n, s) => n + s.guides.length, 0)

const FAQS = [
  {
    question: 'What is the best way to get rid of ants in a Canadian house?',
    answer: 'Bait the trail and leave it alone. The ants on the counter are foragers, a small fraction of a colony that lives out of sight, so killing them does not kill the colony. A slow-acting bait works because ants share food mouth to mouth: a forager feeds, walks home, and passes the bait to other workers, the brood and the queen. Put enclosed liquid bait stations directly on the live trail as the label directs, out of reach of children and pets, do not spray, and do not wipe the trail until activity has stopped, because that scent trail is the route carrying the bait home. Then wash the trail away with soapy water, seal the entry gaps, and deal with the food and moisture that drew the ants in. Our guide to getting rid of ants in Canada walks through each step.',
  },
  {
    question: 'Should I use ant spray or ant bait?',
    answer: 'Bait, in almost every case. A contact spray kills the ants it wets, and a repellent one leaves a residue behind that can do three things you do not want: it removes the foragers that would have carried bait home, it can put ants off bait placed near the treated surface, and in multi-queen species such as odorous house ants and pharaoh ants it can trigger budding, where one colony splits into several nests. Health Canada\'s own ant advice makes the same point from the other direction: do not use chemical sprays while a bait system is out, or the bait system will not work.',
  },
  {
    question: 'Why do I see more ants after putting out bait?',
    answer: 'Usually because it is working. Ants lay scent trails between food and the nest, so a forager that finds a rich food source is soon followed by many more workers. The University of Kentucky\'s ant guide tells householders to expect more ants around the bait at first and not to spray them, and says activity usually subsides within a few days as the colony declines. A station crowded with ants early on is a good sign: the bait is palatable, the trail is intact, and the active ingredient is being carried into the nest. Health Canada says to keep baits available for at least two weeks and that repeat applications may be needed, and the University of California\'s pest notes say it can take 5 to 10 days to see fewer ants and several weeks or more for control to be complete. Pharaoh ants are slower still: Ohio State University describes their control as difficult and often long term, months to years depending on the building. Spraying the surge kills the ants that are carrying the bait home.',
  },
  {
    question: 'How do I know an ant product is legal to use in Canada?',
    answer: 'Look for a Pest Control Products (PCP) registration number on the label. Health Canada registers the pesticides that may be sold or used in Canada, through its Pesticides Regulatory Directorate, which operated as the Pest Management Regulatory Agency (PMRA) until its name change in 2026, and it tells consumers to look for that number so they know a product has been approved. It matters most for the gels and concentrates that American ant advice often names. Advion ant gel is one example: its maker lists it under a US EPA registration number, and as of October 2026 Health Canada\'s pesticide label search showed no registered product under the Advion name, so a tube that arrives from a cross-border marketplace listing has no Canadian label directions behind it. Health Canada also warns that pesticides from foreign vendors may not be authorized for use in Canada. A plain glue board for crawling insects is a device with no active ingredient, a type the federal regulations exempt, so it carries no PCP number, but it does not control a colony either. Outdoor products add a provincial layer, because Ontario restricts pesticide use for cosmetic purposes on lawns and gardens, and other provinces, Nova Scotia among them, have their own rules.',
  },
  {
    question: 'How do I tell carpenter ants from ordinary house ants?',
    answer: 'By size and by debris. Carpenter ant workers are the big ones — about 6 to 13 mm (1/4 to 1/2 inch), usually black or black and red, with an evenly rounded back and a single node at the waist — while the pavement ants and odorous house ants that commonly come indoors run about 2.5 to 4 mm. The sign to look for is frass: coarse, sawdust-like wood shavings with dead insect parts mixed in, pushed out of the wood the colony is excavating. Carpenter ants do not eat wood; they tunnel into it to nest and prefer wood that is already moist or decaying, so a leak or rot is often behind the nest. They go dormant in winter unless the nest sits in a heated part of a building, so live carpenter ants indoors in the middle of a Canadian winter point to a nest inside. Our carpenter ant guide covers the inspection and the point at which a licensed professional is the better call.',
  },
  {
    question: 'Are the identification and how-to guides on this page written for Canada or the United States?',
    answer: 'The page holds two sets. The four product and treatment guides at the top are Canadian product research, built around what is registered and sold in Canada. The identification and how-to guides further down are references for readers anywhere in North America. They carry no product links, and they cover ants that are chiefly a concern south of the border, including the red imported fire ants of the southern states, the Argentine ant that is the most common ant around California homes, and the ghost ants established in Florida and Hawaii. One practical difference for a US reader: the label check flips, so look for an EPA registration number where a Canadian would look for a PCP number.',
  },
  {
    question: 'Does BuzzSkito treat ants or carpenter ants?',
    answer: 'No. BuzzSkito is a mosquito and tick control service operating in the GTA — those are the only two pests we treat. We do not treat ants or carpenter ants, and we do not sell or apply any of the products discussed here. This cluster is independent research from our publishing team: the product guides focus on what is genuinely available to Canadian homeowners and registered with Health Canada, and the identification and how-to guides are references for readers anywhere in North America. If an ant problem is beyond DIY — carpenter ants in the structure, or pharaoh ants in a multi-unit building — a licensed pest control operator is the right call.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Independent Canadian guide to ant control products: the bait stations that reach the colony, why sprays and glue traps fail, how carpenter ants differ, and what the PCP number on a label means. Plus North American ant identification and how-to guides.',
  canonical: `/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function AntControlHubPage() {
  const postingSchema = {
    ...blogPostingSchema({
      title: TITLE,
      description: 'Independent Canadian ant control product research — bait-first, with the compliance picture on Canadian pesticide registration (the PCP number on the label), a separate carpenter ant playbook, and North American identification and how-to references.',
      slug: SLUG,
      datePublished: DATE,
    }),
    url: `${SITE_URL}/${SLUG}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${SLUG}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Pest Product Guides', url: '/pest-product-guides' }, { name: 'Ant Control', url: `/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/${SLUG}`)) }} />

      <GuideHub
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Pest Product Guides', href: '/pest-product-guides' }, { name: 'Ant Control' }]}
        badge="Ant Control"
        title="Ant Control for Canadian Homes — Bait First, Spray Last"
        subtitle="The bait stations that reach the colony, the sprays and glue traps that only kill the ants you can see, and the carpenter ant playbook for when the problem is in the wood. Canadian product research built around the PCP registration number on the label, plus identification and how-to references for readers anywhere in North America."
        heroStats={[{ value: `${POSTS_LINKED}`, label: 'Research guides' }, { value: `${SECTIONS.length}`, label: 'Categories' }, { value: 'Bait-first', label: 'Method' }]}
        adjacentPest="ants"
        quickAnswer={{
          lead: <>For a household ant problem in Canada, start with <strong>bait, not spray</strong>: an enclosed liquid bait station placed on the live trail as the label directs lets foragers carry a slow-acting bait home and share it with the brood and the queen, which is how a consumer product reaches the colony you cannot see. Contact sprays and glue boards only remove foragers. Carpenter ants are the exception to the kitchen playbook &mdash; they are a structural problem, and the job is finding the nest and fixing the moisture behind it.</>,
          bullets: [
            <>The ants you see are <strong>foragers</strong>, a small fraction of the colony &mdash; killing them on sight does not kill the colony.</>,
            <>Repellent sprays can put ants off nearby bait and, in multi-queen species such as odorous house ants and pharaoh ants, can trigger <strong>budding</strong> into several new nests.</>,
            <>Expect more ants on the bait at first &mdash; that is recruitment, and it usually means the bait is being carried home.</>,
            <>Liquid sugar bait first; add a protein or grease bait if the colony ignores it.</>,
            <>Check the label for a Canadian <strong>PCP registration number</strong> &mdash; Health Canada warns that pesticides from foreign vendors may not be authorized for use in Canada.</>,
            <>Large black ants plus coarse, sawdust-like frass point to carpenter ants, which prefer to nest in moist or decaying wood and need their own playbook.</>,
          ],
          attribution: '— BuzzSkito Pest Product Guides · independent Canadian research',
        }}
        howWeRank={{
          title: 'Why ant control in Canada needs its own guide',
          body: <>Much of the ant advice Canadians read online is written for an American reader, and it often names gels and concentrates sold under a US EPA registration. Advion ant gel is one example: as of October 2026, Health Canada&rsquo;s pesticide label search showed no registered product under that name. Under the Pest Control Products Act, a pesticide sold or used in Canada generally must be registered and carry its Canadian PCP registration number on the label. Health Canada&rsquo;s Pesticides Regulatory Directorate, which operated as the Pest Management Regulatory Agency (PMRA) until its name change in 2026, is the body that registers it &mdash; so that number is the one-glance test on the label itself. Outdoors there is a second layer: Ontario restricts pesticide use for cosmetic purposes on lawns and gardens, and other provinces, Nova Scotia among them, have their own rules. Ontario&rsquo;s rules still allow pesticides against indoor pests, so indoor baiting is unaffected. The product guides in this cluster apply the same three filters as the rest of our library: <strong>Canadian registration first</strong>, <strong>real Canadian availability second</strong>, and <strong>published evidence third</strong> &mdash; which is why they lead with bait stations and flag the sprays and gadgets that fail. The identification and how-to guides further down the page are a separate set, written as references for readers anywhere in North America, with no product links.</>,
        }}
        sections={SECTIONS}
        bottomLine={{
          title: 'Related research and the complete ant reference',
          body: <>This ant cluster is one section of our broader <Link href="/pest-product-guides">Canadian pest product guides</Link> library, which applies the same registration-first method to rodents, bed bugs, and more. If you would rather start from the insect than from the product shelf, <Link href="/learn/ants">the complete ant reference</Link> explains how colonies work and how to tell the common household species apart, and it ties the identification and how-to guides above together. A reminder on scope: everything here is independent research from BuzzSkito&rsquo;s publishing team &mdash; our operating business treats mosquitoes and ticks only, and we do not treat ants or sell any product discussed here.</>,
        }}
        faqs={FAQS}
        cta={{ heading: 'While the bait does its work, remember mosquito season', subtext: 'BuzzSkito treats mosquitoes and ticks across 19 GTA cities — book a free yard assessment before the summer bite season starts.' }}
      />
    </>
  )
}
