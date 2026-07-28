import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import StickyBuyBar from '@/components/StickyBuyBar'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'how-to-keep-mice-out-of-your-house-winter'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'How to Keep Mice Out of Your House This Winter — Canadian Exclusion Guide 2026'

const FAQS = [
  {
    question: 'When do mice start coming into houses in Ontario?',
    answer: 'Mouse ingress in southern Ontario ramps up when overnight temperatures drop consistently below about 10°C — typically late September through the end of October in the GTA. Pest-industry service data shows the same pattern every year: a surge of new indoor activity in October, a second smaller wave at the first hard cold snap (often late November), then a stable indoor population through winter. Exclusion done in early October — before the rush — is worth roughly ten times the same work done in January, when the mice you would have kept out are already nesting inside.',
  },
  {
    question: 'What size gap can a mouse fit through?',
    answer: 'An adult house mouse can squeeze through a gap of about 6 mm — the width of a standard pencil or roughly the diameter of a dime. A mouse skull is the limiting factor, and it is far smaller than the fluffy body suggests. This is the single most important number in mouse exclusion: any opening you can slide a pencil into is a potential entry point, which is why quarter-inch (6 mm) galvanized hardware cloth is the standard mesh size for rodent screening and why hairline foundation cracks are not the problem — pencil-width utility penetrations and garage-door corner gaps are.',
  },
  {
    question: 'Does steel wool really keep mice out?',
    answer: 'Yes — coarse steel wool (grade #3 or #4) or copper mesh is one of the most effective consumer exclusion materials, because mice will not chew through it; the sharp strands hurt their mouths. The catch is that loose steel wool can be pulled out by a determined mouse, so the correct technique is a two-part plug: pack the gap tightly with steel wool or copper mesh, then cap it with exterior sealant or gap-filling foam to lock the metal in place. Copper or stainless mesh is worth the small upgrade on exterior brick and stone because plain steel wool rusts and can leave orange streaks down the wall within one or two wet seasons.',
  },
  {
    question: 'Can I use spray foam alone to seal mouse holes?',
    answer: 'No. Standard polyurethane spray foam is a draft and moisture sealer, not a rodent barrier — mice chew through cured foam easily, and a foam-only plug often becomes a soft, obvious doorway marked with fresh gnaw crumbs. Foam is still useful in a mouse-proofing job, but only as the outer layer of a composite plug: steel wool or copper mesh packed in first (the layer mice will not chew), foam or exterior caulk over top (the layer that seals air and moisture and locks the mesh in). Some products are marketed as pest-blocker foams with added bittering agents; treat them as slightly better foam, not as a substitute for metal.',
  },
  {
    question: 'Should I seal the weep holes in my brick?',
    answer: 'Never seal brick weep holes solid — they are drainage and ventilation openings that let moisture escape from behind the brick veneer, and caulking them shut can cause trapped moisture, spalling brick, and mould in the wall cavity. The correct fix for the open vertical joints found every 600–800 mm along the base course of most 1950s–1970s GTA brick houses is a purpose-made weep hole cover or insert: a stainless or plastic louvre that slides into the joint, keeps mice and wasps out, and preserves airflow. This is one of the most common exclusion mistakes in older Toronto, Mississauga, and Hamilton housing stock.',
  },
  {
    question: 'Do mothballs keep mice away, and are they legal to use that way in Canada?',
    answer: 'No and no. Mothballs (naphthalene or paradichlorobenzene) are registered in Canada only for controlling clothes moths in sealed containers — using them against mice in a garage, cottage, or crawl space is an off-label use that violates the Pest Control Products Act, and Health Canada has specifically warned against it. They also simply do not work: the vapour concentration needed to repel a rodent would be unsafe for people and pets in the same space. At typical scattered-around-the-cottage doses, mice nest happily beside them. Skip mothballs entirely and rely on exclusion, sanitation, and traps.',
  },
  {
    question: 'Does peppermint oil repel mice?',
    answer: 'Not reliably. Controlled testing has repeatedly shown that strong scents — peppermint oil, dryer sheets, predator urine — produce at best a brief avoidance response measured in hours to days, after which mice habituate and walk past or even nest near the scented material. A cotton ball of peppermint oil cannot compete with the survival pressure of a Canadian winter. Scent products are harmless as air freshener, but every dollar and hour spent on them is a dollar and hour not spent on the two things with actual evidence behind them: sealing 6 mm gaps and running a proper trap line.',
  },
  {
    question: 'How do mice get in through a garage door?',
    answer: 'Almost always at the two bottom corners. The rubber astragal seal along the bottom of a garage door compresses well at the centre but lifts or rounds off at the corners where it meets the vertical track and the slab edge — leaving a triangular gap that is frequently 10–15 mm, more than double what a mouse needs. The fixes, in order: replace a cracked or flattened bottom seal, add corner-specific seal pads or a rodent-rated threshold seal glued to the slab, and check the vertical weatherstripping for chew notches — a gnawed half-moon at floor level is a signed confession.',
  },
  {
    question: 'Can mice get in through dryer vents and AC line penetrations?',
    answer: 'Yes — utility penetrations are a top-three entry route in GTA homes. Air-conditioning refrigerant lines, gas lines, dryer vents, and cable or internet drill-holes all pass through the rim joist or brick, and the installer\'s caulk (if any was applied) shrinks and cracks within a few years. The AC lineset is the classic offender: a 60–75 mm hole with two pipes through it, dressed with a plastic cover plate that hides a fingertip-sized gap. Pull the cover, pack the annular gap with copper mesh or steel wool, and cap with exterior sealant. For dryer and exhaust vents, make sure the flapper closes fully and add a rodent-rated vent guard — never seal an active vent with mesh fine enough to trap lint.',
  },
  {
    question: 'Is it safe to leave rodent bait in a cottage over the winter?',
    answer: 'Only with Canadian-legal bait, used correctly. The second-generation anticoagulant baits (brodifacoum, bromadiolone, difethialone) sold freely on US websites are not available as domestic-class products in Canada; the realistic consumer option for an unattended building is a PMRA-registered bromethalin disposable bait station (the Tomcat sealed units), placed along walls out of reach of children and pets and logged on a list so every station is retrieved in spring. Accept the trade-off — baited mice may die in wall voids and smell for 2–3 weeks at opening. Many cottagers do better with a dozen set snap traps plus ruthless food removal.',
  },
  {
    question: 'Will mice leave my house on their own in spring?',
    answer: 'Mostly no. House mice are commensal — unlike deer mice or squirrels, they do not treat your house as a winter shelter to abandon in April. Once a female establishes a nest with food and warmth, she can produce 5–10 litters per year of 5–6 pups each, and the colony stays as long as conditions hold. A pair that slips in through a garage-door corner in October can plausibly be 30 or more mice by spring. That is why fall exclusion is the highest-leverage move of the year: every mouse kept out in October is a colony that never starts.',
  },
  {
    question: 'What should I do if mice are already inside when I seal up?',
    answer: 'Trap first, then seal — or do both in the same week. Sealing with mice still inside concentrates their foraging indoors and can push them into living areas. Run a proper trap line — 6–12 snap traps every 2–3 metres along walls with fresh droppings — for a week while you close entry points, and keep 2–3 sentinel traps set for a few weeks after. Our best mouse trap guide covers trap selection and placement science; the full removal playbook is in our how-to-get-rid-of-mice guide.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'October exclusion checklist for Canadian homes: seal 6 mm gaps with steel wool + sealant, fix garage-door corners, AC line penetrations, and brick weep holes before the first frost. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('how-to-keep-mice-out-of-your-house-winter')

export default function HowToKeepMiceOutWinterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to fall mouse-proofing: entry points in 1950s–1970s GTA housing stock, an October exclusion checklist with the right materials, heated-garage and cottage-closing protocols, and which US-market products to skip.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Keep Mice Out This Winter', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Keep Mice Out This Winter</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Where mice actually get into 1950s–1970s GTA houses, the October walkaround checklist with the right sealing materials, and how to close a heated garage or cottage without feeding a winter colony.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To keep mice out of your house this winter, do a full exterior walkaround in early October — before overnight temperatures settle below 10°C — and seal every gap of 6 mm or more with a two-part plug: coarse steel wool or copper mesh packed in first, exterior sealant or gap foam locked over top. Prioritize the three entry points that dominate GTA housing stock: garage-door bottom corners, the AC refrigerant line penetration, and unscreened brick weep holes (covered with louvre inserts, never caulked shut).</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>An adult house mouse fits through a 6 mm gap — the width of a pencil, roughly a dime&rsquo;s diameter.</li>
              <li>Mouse ingress in southern Ontario peaks in October, once overnight lows hold below about 10°C.</li>
              <li>Garage-door bottom-corner gaps commonly measure 10–15 mm — more than double what a mouse needs.</li>
              <li>Mice chew through spray foam alone; steel wool or copper mesh under the foam is what stops them.</li>
              <li>Brick weep holes every 600–800 mm along 1950s–1970s brick veneer must be covered with inserts, not sealed — solid caulk traps wall moisture.</li>
              <li>Two mice entering in October can become a colony of 30+ by spring: females produce 5–10 litters per year of 5–6 pups.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="mice" />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <h2>Why Do Mice Come Inside in October?</h2>
          <p>Because a Canadian winter kills unprotected house mice, and your furnace room does not. Mouse pressure on southern Ontario homes follows the thermometer: activity along exterior walls spikes once overnight lows hold below about 10°C — late September through October in the GTA — with a second wave at the first hard cold snap, usually late November. House mice are commensal; they do not hibernate or cache food outdoors the way deer mice and squirrels do. When the temperature drops, your home is not one option among many. It is the plan.</p>
          <p>The math of a missed October is brutal. A pregnant female that slips in through a garage-door corner produces a litter of 5–6 pups within three weeks, and those pups breed at 6–8 weeks old; 5–10 litters per female per year is normal. Two mice in October is plausibly 30 or more by March — at which point you are running the full removal playbook from our <Link href="/blog/how-to-get-rid-of-mice-canada">how to get rid of mice guide</Link> instead of an afternoon of caulking. Exclusion is the only mouse-control method that gets cheaper the earlier you do it.</p>

          <h2>Where Do Mice Get Into GTA Houses?</h2>
          <p>Through a short, predictable list of openings — and in the 1950s–1970s brick housing stock that dominates Toronto, Mississauga, Hamilton, Brampton, and Scarborough, the list is even shorter. The exclusion number to hold in your head is 6 mm: an adult mouse collapses its rib cage and passes through any gap the width of a pencil. You are not hunting hairline cracks; you are hunting pencil-width holes. Here is where they live on an older GTA house:</p>
          <ul>
            <li><strong>Garage-door bottom corners.</strong> The rubber bottom seal compresses fine in the middle but lifts at the two corners where it meets the vertical track. Those triangular gaps commonly measure 10–15 mm. If your garage connects to the house, this is entry point number one.</li>
            <li><strong>The AC lineset penetration.</strong> Central air means a 60–75 mm hole through the rim joist or brick carrying two refrigerant pipes, usually dressed with a plastic cover that hides a shrunken bead of 20-year-old caulk. The same applies to gas lines, dryer vents, and every cable or internet drill-hole added since the house was built.</li>
            <li><strong>Brick weep holes.</strong> Brick-veneer walls from the 1950s–1970s have open vertical joints every 600–800 mm along the base course. They are supposed to be open — they drain the wall cavity — but unscreened, each one is a mouse door straight into the void behind the brick, which connects upward to the soffit and inward at every window and outlet penetration.</li>
            <li><strong>Where brick meets wood.</strong> Sill-plate gaps at the top of the foundation, settled mortar joints, the corner where a 1960s addition meets the original wall, and the gap where the garage slab has sunk away from the brick above it.</li>
            <li><strong>Doors without functional sweeps.</strong> Side doors and man doors into garages are chronic offenders — daylight visible under a door is an open invitation.</li>
            <li><strong>Roofline and utility mast.</strong> Less common for house mice, but gaps at the soffit-fascia junction and around the electrical mast admit mice that climb wall corners and downspouts.</li>
          </ul>
          <p>Walk the house with a pencil in hand. Anywhere the pencil slides in, mark it with painter&rsquo;s tape. A typical 1960s GTA bungalow yields 8–15 marks on the first pass.</p>

          <h2>Which Sealing Materials Actually Stop Mice?</h2>
          <p>Metal stops mice; everything else just slows them down. Mice gnaw through cured spray foam, caulk, plastic, rubber, and even soft aluminum flashing. The professional standard is a composite plug: a metal layer they cannot chew, locked in place by a sealant layer that stops air and moisture. Here is how the common materials compare:</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Material</th>
                  <th className="px-4 py-3 text-left">Mouse-proof alone?</th>
                  <th className="px-4 py-3 text-left">Best use</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { m: 'Coarse steel wool (#3–#4)', proof: 'Yes — will not chew it', use: 'Packing pipe and cable penetrations', note: 'Must be capped with sealant or it can be pulled out; rusts outdoors' },
                  { m: 'Copper / stainless mesh', proof: 'Yes', use: 'Exterior gaps, weep-adjacent voids', note: 'No rust streaks on brick; the upgrade pick outside' },
                  { m: '1/4-inch galvanized hardware cloth', proof: 'Yes', use: 'Vents, soffit gaps, larger openings', note: '6 mm mesh is the rodent-screening standard' },
                  { m: 'Weep hole louvre inserts', proof: 'Yes', use: 'Brick weep holes', note: 'Preserve drainage — never caulk weep holes solid' },
                  { m: 'Exterior sealant / caulk', proof: 'No — chewable', use: 'Capping metal plugs, hairline gaps under 6 mm', note: 'The lock, not the barrier' },
                  { m: 'Gap-filling spray foam', proof: 'No — chewable', use: 'Air-sealing over a metal core', note: 'Foam-only plugs get chewed through; pest-blocker foams are only marginally better' },
                  { m: 'Rodent-rated door sweep', proof: 'Yes, fitted correctly', use: 'Man doors, side doors, garage entry doors', note: 'No daylight visible = correctly fitted' },
                  { m: 'Garage-door corner seals', proof: 'Yes, with intact bottom seal', use: 'The two bottom corners of overhead doors', note: 'Pair with a threshold seal on a sunken slab' },
                ].map(({ m, proof, use, note }) => (
                  <tr key={m} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-bold text-brand-800">{m}</td>
                    <td className="px-4 py-3 text-gray-700">{proof}</td>
                    <td className="px-4 py-3 text-gray-700">{use}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Exclusion materials are hardware, not pesticides — nothing on this list needs PMRA registration, which makes fall mouse-proofing the one rodent job with zero legal fine print.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the core exclusion kit:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="steel wool mice">Coarse steel wool for gaps →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="exterior foam sealant gaps">Exterior gap sealant foam →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="door sweep garage">Rodent-rated door sweeps →</BuyLink>
          </div>

          <h2>What Is the October Exclusion Checklist?</h2>
          <p>One dry Saturday, a pencil, painter&rsquo;s tape, and the materials above — done in this order, before the first frost:</p>
          <ol>
            <li><strong>Walk the full exterior at knee height.</strong> Mice enter low. Probe every penetration, joint, and gap with the pencil; tape-flag anything it slides into. Check behind the AC cover plate, behind downspouts, and where decks and steps meet the wall.</li>
            <li><strong>Plug every flagged penetration.</strong> Pack copper mesh or coarse steel wool into the annular gaps around the AC lineset, gas line, hose bibs, and cable holes, then cap with exterior sealant or gap foam. Metal first, foam second — never foam alone.</li>
            <li><strong>Cover the weep holes.</strong> Slide louvre inserts into every open vertical joint along the base course of the brick. Count the holes first and buy 10–20% extra; corner runs hide more than you expect. <span className="whitespace-nowrap"><BuyLink tag={AMZ_TAG} search="brick weep hole covers" className="!px-3 !py-1.5 !text-xs">Weep hole covers →</BuyLink></span></li>
            <li><strong>Rebuild the garage-door seal.</strong> Replace a flattened or cracked bottom astragal, add corner seal pads at both bottom corners, and glue a threshold seal to the slab if it has sunk away from the door. Look for chew notches in the vertical weatherstripping — a gnawed half-moon means mice are already using this door.</li>
            <li><strong>Fit door sweeps.</strong> Every exterior door and every door between garage and house gets a rodent-rated sweep. The pass test: no daylight visible from inside with the lights off.</li>
            <li><strong>Screen the vents.</strong> Confirm dryer and exhaust flappers close fully and add rodent guards; screen any open soffit gaps with 6 mm hardware cloth. <span className="whitespace-nowrap"><BuyLink tag={AMZ_TAG} search="quarter inch hardware cloth" className="!px-3 !py-1.5 !text-xs">1/4-inch hardware cloth →</BuyLink></span></li>
            <li><strong>Starve the perimeter.</strong> Move bird feeders 10+ metres from the house, store seed and pet food in steel or heavy plastic bins, pick up fallen fruit, and pull firewood and cardboard off the ground along exterior walls — a wood pile against the house is a mouse staging area.</li>
            <li><strong>Set a sentinel trap line.</strong> Two or three snap traps along the garage back wall and the furnace-room wall, checked weekly through November, tell you whether the seal-up held. Our <Link href="/blog/best-mouse-trap-canada">best mouse trap guide</Link> covers which traps and exactly where they go.</li>
          </ol>

          <h2>How Do You Mouse-Proof a Heated Garage?</h2>
          <p>Treat it like the house, because to a mouse it is better than the house — a heated or semi-heated garage offers warmth without human traffic, plus the best food cache on the property: bird seed, grass seed, pet food, and a chest freezer with a warm compressor to nest under. Garages are where most GTA winter infestations start, then migrate through the shared wall along plumbing and wiring runs into the kitchen.</p>
          <p>The garage protocol: fix the overhead door&rsquo;s bottom corners and threshold first, sweep the man door, and seal the wall penetrations — especially where pipes and wires pass through the shared house wall, your last line of defence. Then remove the reasons to stay: seed and pet food into sealed steel bins, cardboard off the floor and onto shelving (cardboard is nesting material and insulation in one), clutter pulled 15 cm off the wall so droppings show on the floor line. Finish with a permanent two-trap line along the back wall. If kids or a dog visit the garage, an enclosed station beats open snap traps — our <Link href="/blog/mouse-bait-station-canada">mouse bait station guide</Link> covers the tamper-resistant options, and the <Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor electronic trap review</Link> covers why electronics belong indoors, not in a damp garage.</p>
          <p>One upgrade note: if the droppings in your garage are over 1 cm long or you hear something heavier than scratching, you may be hosting rats, not mice — different traps, different rules, covered in our <Link href="/blog/best-rat-trap-canada">best rat trap guide</Link>.</p>

          <h2>How Do You Close a Cottage for Winter Without Feeding Mice?</h2>
          <p>Assume mice will get into an unattended cottage — seasonal buildings on piers or block foundations cannot be sealed to house standard — and make the inside worthless to them instead. The closing weekend protocol used by generations of Muskoka, Kawartha, and Haliburton cottagers:</p>
          <ul>
            <li><strong>Zero food, zero exceptions.</strong> Everything edible leaves the building or goes into glass or steel — including the flour, the pasta, the birdseed, the dog kibble, and the box of baking soda. Mice open cardboard and plastic bags in minutes.</li>
            <li><strong>Deny nesting material.</strong> Linens, towels, cushions, and toilet paper go into lidded steel or heavy plastic totes. Mattresses get stood on edge where practical; drawers are left open so you can see into them at opening.</li>
            <li><strong>Do the exclusion pass anyway.</strong> Every gap you close is a colony that starts somewhere else. Steel wool plus sealant in pipe penetrations, hardware cloth over vents, sweeps on the doors — the same checklist as the house, scaled to the building.</li>
            <li><strong>Leave a set trap line, not scattered poison.</strong> A dozen snap traps along the kitchen and utility walls will do most of the work. If you want unattended coverage all winter, the only bait we can recommend is a PMRA-registered bromethalin disposable station (the Tomcat sealed units), placed where nothing but a mouse can reach, with a written list so every station comes out in spring — accepting that baited mice may die in walls and smell for 2–3 weeks at opening. The US-market anticoagulant pellets some marketplaces still ship are another story entirely; see the next section.</li>
            <li><strong>Skip the folklore.</strong> Mothballs are illegal off-label for rodents in Canada and do not work; dryer sheets and peppermint oil fail within days. Details below.</li>
          </ul>

          <h2>Which &ldquo;Mouse-Proofing&rdquo; Products Should Canadians Skip?</h2>
          <p>Four categories — two that are ineffective, and two that are illegal or grey-market in Canada. This list is half the value of doing your product research on a Canadian site:</p>
          <ul>
            <li><strong>US second-generation anticoagulant baits (SGARs).</strong> Brodifacoum, bromadiolone, and difethialone products — d-CON legacy pellets, Contrac blocks, Just One Bite and their clones — are not sold as domestic-class products in Canada. Health Canada restricts SGARs to commercial applicators, and British Columbia banned most uses outright in 2023 over secondary poisoning of owls and hawks. Cross-border marketplace listings still surface them; buying is a Pest Control Products Act violation, and we will not link them. The full legal map is in our <Link href="/blog/rat-poison-canada-what-is-legal">rat poison legality guide</Link>.</li>
            <li><strong>Loose bait, pellet packs, and tracking powders.</strong> Any consumer rodenticide in Canada must be used in or as a tamper-resistant station. Loose pellets scattered in a garage or cottage are off-label, and they are the format most likely to poison a dog, a child, or a fox.</li>
            <li><strong>Mothballs repurposed as rodent repellent.</strong> Off-label, specifically warned against by Health Canada, and ineffective at any dose that is safe for humans in the same building.</li>
            <li><strong>Ultrasonic plug-in repellers and scent products.</strong> Mice habituate to ultrasound within days, the sound does not pass through walls, and regulators have challenged the marketing claims for two decades. Peppermint oil and dryer sheets fare no better in testing. The study-by-study breakdown is in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic repeller review</Link>.</li>
          </ul>
          <p>If the DIY route stalls — or the droppings keep appearing after a full seal-up and two weeks of trapping — the problem is usually a hidden entry point that takes a professional inspection to find. Our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> covers what rodent exclusion and removal work actually costs so you can price the quote you get.</p>

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-4">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-navy-100 bg-white p-4">
                <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
                  {question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>

          <h2>Related Rodent Guides</h2>
          <ul>
            <li><Link href="/blog/best-mouse-trap-canada">Best Mouse Trap Canada — Snap vs Electronic vs Catch-and-Release</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mice-canada">How to Get Rid of Mice in Canada — Full Playbook</Link></li>
            <li><Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor Electronic Mouse Trap Review — Canada</Link></li>
            <li><Link href="/blog/mouse-bait-station-canada">Mouse Bait Stations in Canada — What&rsquo;s Legal and When to Use Them</Link></li>
            <li><Link href="/blog/rat-poison-canada-what-is-legal">Rat Poison in Canada — What Is Actually Legal</Link></li>
            <li><Link href="/blog/best-rat-trap-canada">Best Rat Trap Canada — When Mouse Traps Aren&rsquo;t Enough</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Ultrasonic Pest Repellers — Do They Actually Work?</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>

        <StickyBuyBar tag={AMZ_TAG} name="Coarse Steel Wool (packs 6 mm gaps)" search="steel wool mice" label="For sealing gaps" />
      </article>
    </>
  )
}
