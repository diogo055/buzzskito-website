import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import GuideHub, { type HubSection } from '@/components/GuideHub'

const SLUG = 'pest-product-guides/cockroach-control'
const DATE = '2026-10-07'
const TITLE = 'Cockroach Control Products in Canada — Baits, Traps & What\'s Legal'

const SECTIONS: HubSection[] = [
  {
    name: 'Bait & Monitoring',
    icon: '🪤',
    intro: 'The bait-first strategy starts here. An enclosed bait station holds a slow-acting bait that a foraging roach eats before it crawls back to the harbourage, which is how the dose can reach insects you never see; a glue board catches only what walks onto it, so its job is measuring, not control. These two guides cover which product class does which job, how many placements a kitchen needs and where they go.',
    guides: [
      { href: '/blog/best-cockroach-killer-canada', title: 'Best Cockroach Killer Canada', blurb: 'Every roach product class on the Canadian shelf ranked by whether it reaches the colony, plus a week-by-week timeline for a bait program.' },
      { href: '/blog/best-roach-traps-canada', title: 'Cockroach Traps in Canada', blurb: 'Glue-board monitors versus enclosed bait stations: which one measures, which one controls, how many to buy and where each goes.' },
    ],
  },
  {
    name: 'Sprays & Imported Gel',
    icon: '🧴',
    intro: 'Two purchases that American advice treats as routine and that need a second look in Canada. Rutgers University notes that most of the active ingredients in retail roach sprays and aerosols are pyrethroids, which are repellent to cockroaches, so a can has a few narrow jobs and does not belong near bait. The gel bait that US forums recommend is registered in the United States, so check the label of any unit offered here for a Canadian registration number before you order.',
    guides: [
      { href: '/blog/best-cockroach-spray-canada', title: 'Cockroach Spray in Canada', blurb: 'The three jobs an aerosol legitimately wins, how to read a Canadian pesticide label, and why spraying near bait can put roaches off it.' },
      { href: '/blog/advion-cockroach-gel-bait', title: 'Advion Cockroach Gel Bait in Canada', blurb: 'What the gel is, why American forums recommend it, and the registration-number check to run on any gel bait listing before you buy.' },
    ],
  },
  {
    name: 'The Elimination Plan',
    icon: '📋',
    intro: 'Products only work inside a plan. The full guide walks through it in order: identify the species, cut off food and water, place bait along the edges and corners roaches travel, lay glue boards to measure, and keep baiting until the boards stay empty. Rutgers University\'s test for stopping is no cockroaches seen or caught on sticky traps for at least a month. The guide also covers the two situations where the plan changes: apartments, and the point at which to call a licensed professional.',
    guides: [
      { href: '/blog/how-to-get-rid-of-cockroaches-canada', title: 'How to Get Rid of Cockroaches in Canada', blurb: 'The full bait-first playbook: species ID, sanitation, station placement, glue-board monitoring, the apartment problem and when to escalate.', tone: 'top' },
    ],
  },
  {
    name: 'Identification Guides',
    icon: '🔎',
    intro: 'These are identification references for readers anywhere in North America, and they carry no product links. They cover which cockroach you are looking at, what the young stages look like, and the beetles, crickets and water bugs that get mistaken for roaches. Start with the complete cockroach reference if you want the whole picture in one place.',
    guides: [
      { href: '/learn/cockroaches', title: 'Cockroaches: The Complete Reference', blurb: 'The whole subject in one place: which species you have, how fast it breeds, the health concerns, and the control sequence from monitoring to bait.' },
      { href: '/blog/german-cockroaches', title: 'German Cockroaches', blurb: 'How to recognize a German cockroach by the two dark stripes behind its head, how fast it breeds, where it hides, and the bait-based program university entomologists recommend.' },
      { href: '/blog/what-do-baby-cockroaches-look-like', title: 'What Do Baby Cockroaches Look Like?', blurb: 'Cockroach nymphs species by species, how to tell one from a bed bug or a beetle, and what finding nymphs says about the infestation.' },
      { href: '/blog/bugs-that-look-like-cockroaches', title: 'Bugs That Look Like Cockroaches', blurb: 'How to tell a pest cockroach from ground beetles, June beetles, crickets, giant water bugs, earwigs, bed bugs and the outdoor wood roaches that wander in.' },
      { href: '/blog/water-bugs-vs-cockroaches', title: 'Water Bugs vs Cockroaches', blurb: 'True water bugs compared with the cockroaches people call waterbugs, with side-by-side identification, where each lives and what to do about each.' },
    ],
  },
  {
    name: 'Habits & How-To Guides',
    icon: '🚪',
    intro: 'More references for readers anywhere in North America, again with no product links. They answer the questions that follow an identification: whether the roach you saw can fly, whether cockroaches bite, and how they got into the building in the first place. The answers change with the species, which is why the identification guides above come first.',
    guides: [
      { href: '/blog/can-cockroaches-fly', title: 'Can Cockroaches Fly?', blurb: 'Which species fly, which rarely do and which cannot, why warm weather brings out the fliers, and what a flying roach says about where it came from.' },
      { href: '/blog/do-cockroaches-bite', title: 'Do Cockroaches Bite?', blurb: 'Whether cockroaches bite people, what else is more likely behind a suspected bite, and the health concerns agencies do document: allergens and asthma.' },
      { href: '/blog/where-do-cockroaches-come-from', title: 'Where Do Cockroaches Come From?', blurb: 'The routes into a home, carried in with belongings, through shared walls and plumbing, up from drains and in from outdoors, with how to close each one.' },
    ],
  },
]

const POSTS_LINKED = SECTIONS.reduce((n, s) => n + s.guides.length, 0)

const FAQS = [
  {
    question: 'What is the best way to get rid of cockroaches in a Canadian home?',
    answer: 'Bait, not spray. The plan our guides lay out is to identify the species, cut off food and water overnight, place enclosed bait stations tight against the wall edges and corners where roaches travel, and lay glue-board monitors so you can measure progress instead of guessing. A roach that feeds on the slow-acting bait crawls back to the harbourage and dies, and the University of Kentucky\'s cockroach fact sheet explains that roaches which never fed on it can die too, after taking in traces left in the droppings of those that did. The same fact sheet says a substantial reduction should be apparent within a few weeks. Do not stop there: Rutgers University\'s German cockroach fact sheet says to keep inspecting and re-treating every two to four weeks until no cockroaches are seen or caught on sticky traps for at least a month. Every bait is a pesticide, so check the label for a Canadian PCP registration number before you buy, and replace bait as the label directs.',
  },
  {
    question: 'Why do your guides recommend bait before spray?',
    answer: 'Three reasons: reach, repellency and contamination. A contact spray kills only the roaches it wets, and the University of Kentucky\'s cockroach fact sheet notes that cockroaches spend very little time on exposed surfaces such as walls, floors and countertops. Rutgers University\'s German cockroach fact sheet says most of the active ingredients in retail sprays and aerosols are pyrethroids, that pyrethroids are repellent to cockroaches, and that a spray treatment may push them into neighbouring units. Kentucky also warns that spraying around bait placements could discourage roaches from taking the bait, which would undercut the method most likely to work. Rutgers ranks the options the same way: bait is the most effective formulation, and sprays are less effective because of resistance, repellency or both. A spray still has a few narrow jobs, and the spray guide in this cluster sets out what they are.',
  },
  {
    question: 'Is Advion cockroach gel legal to buy in Canada?',
    answer: 'Treat any listing with caution. Advion is an indoxacarb gel bait registered with the US EPA, and the University of Kentucky lists it among the professional versions of cockroach bait sold online. A search of Health Canada\'s pesticide label database in October 2026 returned no registered product under the Advion name, and Health Canada says all pesticides used in Canada must be registered under the Pest Control Products Act. Health Canada also states that it is a violation of that Act to buy and use unregistered pesticides, and that a registered product shows its number on the label in a form such as "Reg. No. 00000 P.C.P. Act". If the unit in the listing photos carries no such number, that is your answer. The consumer route in Canada is a domestic-class bait in an enclosed station, which works on the same slow-acting principle. Our Advion guide covers the full picture.',
  },
  {
    question: 'Can I still buy boric acid powder for cockroaches in Canada?',
    answer: 'Not as a loose dust. Health Canada\'s re-evaluation of boron pesticides (decision RVD2016-01) cancelled domestic dust and granular products, along with solutions that are not in sealed bait stations or localized gel treatments. Sale of those products has been prohibited since July 22, 2018, and Health Canada told households to stop using them as of July 22, 2019. The domestic formats that remain are bait stations and gel formulations, whose labels say to use them only in areas inaccessible to children and pets. American extension fact sheets, including those from Rutgers and the University of Kentucky, still describe using boric acid dust, and that step does not carry over. For a dust in dry, hidden voids, our spray guide points to a registered diatomaceous earth product instead, used as its label directs, although Rutgers rates diatomaceous earth as less effective against cockroaches than boric acid. The same check applies to it as to any pesticide: look for the PCP registration number.',
  },
  {
    question: 'Do foggers or bug bombs get rid of cockroaches?',
    answer: 'No. A total-release fogger sends its mist into the air, where it settles on floors, countertops and other surfaces, and very little reaches the cracks and voids where cockroaches spend most of their time. The University of Kentucky\'s cockroach fact sheet names foggers as a form of treatment it does not recommend for cockroaches and says they seldom are effective against household pests, and Rutgers lists them as not effective for cockroach control. Kentucky adds that the ingredients tend to be repellent, so insects scatter and move deeper into wall voids. There is a safety side as well: the US EPA notes that fogger propellants are typically flammable, so improper use can cause a fire or explosion. Put the money into bait stations and glue-board monitors instead.',
  },
  {
    question: 'I live in an apartment. Can I get rid of cockroaches on my own?',
    answer: 'You can suppress them in your unit, but you usually cannot finish the job alone. Rutgers University\'s fact sheet notes that German cockroaches spread between apartments through shared utilities, common walls and hallways, so a colony elsewhere in the building can keep reseeding your kitchen. Bait and monitor your own unit, seal the gaps around the plumbing under your sinks, and report the problem to your landlord or property manager in writing. In Ontario, the Landlord and Tenant Board\'s maintenance and repairs brochure says a landlord must take steps to control pests such as cockroaches and mice; tenancy rules are set province by province, so check with your own tenancy authority. Our how-to guide covers the apartment problem in more detail.',
  },
  {
    question: 'Does BuzzSkito treat cockroaches?',
    answer: 'No. BuzzSkito is a mosquito and tick control service operating in the GTA — those are the only two pests we treat. We do not do cockroach treatments, and we do not sell or apply any of the products reviewed here. This cluster is independent research from our publishing team: the product guides focus on what is genuinely available and PMRA-legal for Canadian homeowners, and the identification and how-to guides are references for readers anywhere in North America. If a cockroach infestation is beyond DIY, a licensed pest control operator is the right call.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Independent Canadian guide to cockroach control products: why bait beats spray, bait stations and glue-board monitors, the label check for imported gel bait, plus identification and how-to guides for readers across North America.',
  canonical: `/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function CockroachControlHubPage() {
  const postingSchema = {
    ...blogPostingSchema({
      title: TITLE,
      description: 'Independent Canadian cockroach control product research — bait-first, with the label check that separates products registered in Canada from US-market stock, plus identification and how-to references for North American readers.',
      slug: SLUG,
      datePublished: DATE,
    }),
    url: `${SITE_URL}/${SLUG}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${SLUG}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Pest Product Guides', url: '/pest-product-guides' }, { name: 'Cockroach Control', url: `/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/${SLUG}`)) }} />

      <GuideHub
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Pest Product Guides', href: '/pest-product-guides' }, { name: 'Cockroach Control' }]}
        badge="Cockroach Control"
        title="Cockroach Control for Canadian Homes — Bait First, Spray Last"
        subtitle="The bait stations and glue boards that do the work, the narrow jobs a spray still has, and the Canadian answer on imported gel bait — plus identification and how-to guides for readers anywhere in North America."
        heroStats={[{ value: `${POSTS_LINKED}`, label: 'Research guides' }, { value: `${SECTIONS.length}`, label: 'Categories' }, { value: 'Bait-first', label: 'Method' }]}
        adjacentPest="cockroaches"
        quickAnswer={{
          lead: <>For a cockroach problem in a Canadian home, start with <strong>bait, not spray</strong>: enclosed bait stations along the wall edges of the kitchen and bathroom, glue-board monitors to measure progress, and no food or water left out overnight. A roach that feeds on the slow-acting bait crawls back to the harbourage, where, the University of Kentucky explains, traces left in its droppings can kill roaches that never touched the bait. A spray kills only the roaches it reaches, and Rutgers University notes that most active ingredients in retail sprays are pyrethroids, which repel cockroaches and may push them into neighbouring units.</>,
          bullets: [
            <>The species that matters most indoors is the <strong>German cockroach</strong>, which Health Canada describes as about 1.3 to 1.6&nbsp;cm long and tan to light brown, with two dark parallel streaks running back from the head.</>,
            <>Every bait is a pesticide, so look for a Canadian registration number on the label, which Health Canada shows in forms such as &ldquo;Reg. No. 00000 P.C.P. Act&rdquo;. A plain glue board is a monitor and carries no insecticide.</>,
            <>Do not spray around bait &mdash; pyrethroids are repellent to cockroaches, and the University of Kentucky warns that spraying near a placement could discourage them from taking the bait.</>,
            <>The gel bait US forums recommend is registered with the US EPA; a US EPA number alone is not a Canadian registration.</>,
            <>Stopping too early is a common mistake &mdash; Rutgers University says to keep inspecting and re-treating until no cockroaches are seen or caught on sticky traps for at least a month.</>,
            <>Cockroach droppings and body parts can trigger asthma, the US EPA says, and Health Canada notes that people with asthma may react to them.</>,
          ],
          attribution: '— BuzzSkito Pest Product Guides · independent Canadian research',
        }}
        howWeRank={{
          title: 'Why cockroach control in Canada needs its own guide',
          body: <>Much of the cockroach advice Canadians find online is written for an American reader, and the shelf it describes is not the Canadian one. In the United States, cockroach gel baits are sold to consumers in stores and online, and some consumer roach products include an insect growth regulator. Here, Advion, the gel that American forums recommend, is registered with the US EPA, but a search of Health Canada&rsquo;s pesticide label database in October 2026 returned no registered product under that name. Health Canada&rsquo;s position is plain: look for a Pest Control Products (PCP) number on the label, because buying and using an unregistered pesticide is a violation of the Pest Control Products Act. Health Canada has also cancelled domestic boric acid dusts, a product that American extension fact sheets still describe using. That reshapes the whole strategy toward <strong>enclosed bait stations, glue-board monitors and sanitation</strong>. Every product guide in this cluster applies the same three filters as the rest of our library: <strong>PMRA legality first</strong>, <strong>real Canadian retail availability second</strong>, and <strong>published evidence third</strong> — which is why we lead with bait and flag the foggers and ultrasonic gadgets that fail. The identification and how-to guides further down the page are a different kind of resource: references for readers anywhere in North America, with no product links.</>,
        }}
        sections={SECTIONS}
        bottomLine={{
          title: 'Related research and the complete reference',
          body: <>This cockroach cluster is one section of our broader <Link href="/pest-product-guides">Canadian pest product guides</Link> library, which applies the same PMRA-legality-first method to bed bugs, mice and rats, and more. If you want identification, biology, health concerns and the control sequence on a single page, <Link href="/learn/cockroaches">the complete cockroach reference</Link> gathers them for readers anywhere in North America. A reminder on scope: everything here is independent research from BuzzSkito&rsquo;s publishing team — our operating business treats mosquitoes and ticks only, and we do not treat cockroaches or sell any product reviewed here.</>,
        }}
        faqs={FAQS}
        cta={{ heading: 'While you bait the kitchen, don’t forget mosquito season', subtext: 'BuzzSkito treats mosquitoes and ticks across 19 GTA cities — book a free yard assessment before the summer bite season starts.' }}
      />
    </>
  )
}
