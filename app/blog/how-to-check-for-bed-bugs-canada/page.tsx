import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'how-to-check-for-bed-bugs-canada'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'How to Check for Bed Bugs in Canada — Hotel, Apartment & Used Furniture (2026)'
const META_TITLE = 'How to Check for Bed Bugs: 5 Signs, 5 Minutes'

const FAQS = [
  {
    question: 'What do bed bugs look like to the naked eye?',
    answer: 'Adult bed bugs are 4–5 mm long — about the size and colour of an apple seed — flat, oval, and reddish-brown. After a blood meal they swell and darken to a deeper red. Nymphs (juveniles) are 1–4.5 mm and translucent to pale yellow, which makes them much harder to spot. Eggs are roughly 1 mm, pearly white, and glued in place inside seams and cracks. All life stages are visible without magnification if you know where to look, but a flashlight and a thin card to drag through seams make the inspection far more reliable.',
  },
  {
    question: 'What are the first signs of a bed bug infestation?',
    answer: 'The earliest reliable sign is usually fecal spotting — clusters of black or dark-brown dots the size of a pen tip that bleed into fabric like a marker stain — along mattress seams, box-spring edges, and the back of the headboard. Cast skins (translucent moulted shells) and live bugs come next. Bites alone are NOT a reliable first sign: studies commonly cite that roughly 30% of people show no skin reaction at all, and bite marks can be confused with mosquito, flea, or spider bites. If you suspect bed bugs, confirm with physical evidence — spots, skins, eggs, or a live bug.',
  },
  {
    question: 'How do you check a hotel room for bed bugs in 5 minutes?',
    answer: 'Put your luggage in the bathtub or on the tile bathroom floor first — bed bugs cannot climb smooth surfaces well and rarely harbour in bathrooms. Then: (1) pull back the sheets and check all four mattress corners and seams for black spotting, skins, and live bugs; (2) lift the mattress edge and check the box spring seam; (3) check behind and under the headboard — in hotels it is usually wall-mounted and is the most common harbourage; (4) check the nightstand drawer and the luggage rack straps; (5) scan the seams of any upholstered chair. The whole protocol takes about 5 minutes with a phone flashlight.',
  },
  {
    question: 'Where do bed bugs hide during the day?',
    answer: 'Bed bugs are thigmotactic — they wedge into tight cracks — and roughly 70–90% of an infestation harbours within about 2.5 metres (8 feet) of where people sleep, a figure widely cited by US EPA and university extension research. Priority spots: mattress piping and seams, box-spring frames and the dust cover underneath, bed frame joints, behind headboards, inside nightstands, along baseboard gaps, under loose carpet edges, behind wall outlets and picture frames near the bed, and in couch seams for people who sleep on sofas. They avoid open, smooth, well-lit surfaces.',
  },
  {
    question: 'Do bed bug bites prove you have bed bugs?',
    answer: 'No. Bites alone can never confirm bed bugs — dermatologists cannot reliably distinguish bed bug bites from mosquito or flea bites by appearance, and about 3 in 10 people do not react to bed bug bites at all. The classic “breakfast, lunch, dinner” line of 3 bites is suggestive but not diagnostic. Health Canada notes bed bugs are not known to transmit disease to humans; the main harms are itching, lost sleep, and stress. Confirmation requires physical evidence: a captured bug, cast skins, eggs, or fecal spotting. Interceptor traps under bed legs are the cheapest way to convert suspicion into proof.',
  },
  {
    question: 'How do I check used furniture for bed bugs before bringing it home?',
    answer: 'Follow the used-furniture rule: never take a used mattress, box spring, or upholstered item (couch, padded headboard, fabric chair) — the risk cannot be inspected away because bugs and eggs hide inside stuffing and frames where you cannot see them. Hard furniture (solid wood tables, metal shelving, dressers) can be safe if you inspect it outdoors first: flip it over, run a card through every joint and screw hole, look for black spotting and 1 mm white eggs, and ideally leave it in a garage for a few days with interceptor-style monitors nearby before it enters the house.',
  },
  {
    question: 'How common are bed bugs in Toronto apartments?',
    answer: 'Common enough to check every time. Toronto consistently ranks at or near the top of pest-control companies’ annual Canadian bed bug city lists (Orkin Canada’s list has placed Toronto first multiple years running), and Toronto Public Health receives thousands of bed bug service requests and complaints per year. Dense multi-unit housing spreads infestations through shared walls, hallways, and laundry rooms. Under Ontario’s Residential Tenancies Act, landlords are responsible for maintaining rental units in a good state of repair and complying with health standards — which Ontario tribunals and Toronto bylaw enforcement have consistently applied to bed bug treatment.',
  },
  {
    question: 'Who pays for bed bug treatment in an Ontario rental?',
    answer: 'In almost all cases, the landlord. Ontario’s Residential Tenancies Act (s. 20) requires landlords to keep units fit for habitation and compliant with health, safety, and maintenance standards, and Landlord and Tenant Board decisions have repeatedly held that this includes paying for professional bed bug treatment regardless of how the bugs arrived. Tenants must cooperate with preparation (laundering, decluttering, allowing access). Document everything with dated photos, report in writing, and in Toronto you can escalate to 311 / RentSafeTO if a landlord refuses to act. This is general information, not legal advice.',
  },
  {
    question: 'Can bed bugs live in an empty apartment?',
    answer: 'Yes — this is why a vacant unit can still be infested on move-in day. At room temperature adult bed bugs commonly survive 2–4 months without feeding, and in cooler conditions laboratory studies have recorded survival approaching a year. An apartment that sat empty for six weeks between tenants can absolutely still harbour live bugs waiting in baseboards and outlet voids. Always inspect a unit while it is empty — before the moving truck arrives — because an empty room gives you clear sightlines to every baseboard, closet corner, and carpet edge.',
  },
  {
    question: 'What is the best tool to detect bed bugs?',
    answer: 'For active infestations: a bright flashlight plus a thin card (old credit card or paint scraper) to drag through seams — total cost under $20 and it exposes the places bed bugs actually hide. For ongoing monitoring: pitfall-style interceptor traps under each bed leg, which independent university research (notably Rutgers) found detect low-level infestations more reliably than a single visual inspection. Combination detection kits on Amazon.ca bundle a flashlight, card, and magnifier. Skip gimmicks: ultrasonic repellers have no supporting evidence, and dogs (canine scent detection) are effective but a professional service, not a product.',
  },
  {
    question: 'What should I do immediately if I find bed bugs?',
    answer: 'Do not panic, do not throw out your mattress (an encasement is cheaper and traps bugs inside), and do not fog the room — foggers scatter bed bugs deeper into walls and Health Canada has recalled or restricted many. Instead: capture a sample in a zip bag or tape for identification, photograph everything with dates, isolate the bed (interceptors under legs, encasements on mattress and box spring, bed pulled from the wall, no bedding touching the floor), launder bedding hot and dry on high 30+ minutes, and then decide between DIY steam plus PMRA-registered products or professional treatment. In a rental, report it to your landlord in writing the same day.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'How to check for bed bugs in Canada: the 5 confirmed signs, a 5-minute hotel room protocol, the used-furniture rule, and a Toronto/GTA apartment move-in checklist. Independent Canadian research, updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('how-to-check-for-bed-bugs-canada')

export default function HowToCheckForBedBugsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Step-by-step bed bug inspection guide for Canadians: the 5 signs, hotel-room protocol, used-furniture rule, and apartment move-in checklist.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Check for Bed Bugs', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Check for Bed Bugs</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The 5 physical signs that actually confirm bed bugs, a 5-minute hotel-room protocol, the used-furniture rule, and a move-in checklist built for Toronto and GTA renters.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To check for bed bugs, use a flashlight and a thin card to inspect mattress seams, the box spring, and behind the headboard for five kinds of physical evidence: live bugs, cast skins, black fecal spots, eggs, and (least reliably) bites in a line. Bites alone never confirm bed bugs — only physical evidence does.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Adult bed bugs are 4–5 mm long — apple-seed size — flat, oval, and reddish-brown; eggs are about 1 mm and pearly white.</li>
              <li>Roughly 70–90% of bed bugs in an infestation harbour within about 2.5 m (8 ft) of where people sleep, per widely cited EPA and extension research.</li>
              <li>About 30% of people show no reaction to bed bug bites, so an absence of bites proves nothing.</li>
              <li>A full hotel-room check takes about 5 minutes: luggage in the bathtub first, then mattress corners, box spring, headboard, nightstand.</li>
              <li>Adults survive 2–4 months without feeding at room temperature — a vacant apartment can still be infested on move-in day.</li>
              <li>Toronto has ranked at or near the top of Orkin Canada&rsquo;s annual bed bug city list for multiple years running.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <article className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <h2>What Are the 5 Signs of Bed Bugs?</h2>
          <p>The five signs, in order of how conclusively they confirm an infestation, are: live bugs, cast skins, fecal spotting, eggs, and bite patterns — and only the first four count as proof. A single live bed bug is definitive. Everything else builds a case, and bites on their own build almost nothing.</p>
          <ol>
            <li><strong>Live bugs (definitive).</strong> Adults are 4–5 mm, flat, oval, reddish-brown — the classic comparison is an apple seed. After feeding they swell into a longer, darker, torpedo shape. Nymphs run 1–4.5 mm and are translucent to straw-coloured; a recently fed nymph looks like a moving drop of blood. Bed bugs have six legs and no wings — they cannot fly or jump, only crawl.</li>
            <li><strong>Cast skins / moulted shells (strong).</strong> Bed bugs moult five times on the way to adulthood, leaving behind translucent, bug-shaped shells in sizes from 1 mm up to adult size. Finding skins in multiple sizes means the population is breeding, not just a single hitchhiker.</li>
            <li><strong>Fecal spotting (strong).</strong> Digested blood excreted as clusters of black or very dark brown dots, roughly ballpoint-pen-tip size. On fabric the spots bleed outward like a felt marker; on wood or walls they sit as raised black specks. Seams, piping, box-spring edges, and the lower back face of headboards are the classic locations. A quick field test: dab a spot with a wet cloth — bed bug fecal marks smear reddish-brown.</li>
            <li><strong>Eggs and eggshells (strong, easy to miss).</strong> About 1 mm long, pearly white, slightly sticky, glued into cracks, seams, and screw holes, often in clusters. Hatched eggs look like the same shell with an open cap. You will usually need a flashlight held at a low angle to catch them.</li>
            <li><strong>Bites in lines or clusters (suggestive only).</strong> The often-quoted &ldquo;breakfast, lunch, dinner&rdquo; pattern of three bites in a rough line is consistent with bed bugs but never diagnostic. Mosquitoes, fleas, mites, and plain skin conditions produce look-alike welts, and — critically — studies commonly cite that around 30% of people do not react to bed bug bites at all. Two people can share a bed over an active infestation and only one wakes up itchy.</li>
          </ol>

          <div className="not-prose my-6 rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Sign</th>
                  <th className="px-4 py-3 text-left">What it looks like</th>
                  <th className="px-4 py-3 text-left">Where you find it</th>
                  <th className="px-4 py-3 text-left">How conclusive</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sign: 'Live bug', look: '4–5 mm adult, apple-seed colour; 1–4.5 mm translucent nymph', where: 'Seams, box spring, headboard, frame joints', level: 'Definitive' },
                  { sign: 'Cast skins', look: 'Translucent bug-shaped shells, 1 mm to adult size', where: 'Harbourage areas, under mattress piping', level: 'Strong — multiple sizes = breeding' },
                  { sign: 'Fecal spots', look: 'Black pen-tip dots that bleed into fabric', where: 'Mattress seams, box-spring edge, headboard back', level: 'Strong' },
                  { sign: 'Eggs / shells', look: '~1 mm pearly-white grains glued in place', where: 'Cracks, screw holes, seam folds', level: 'Strong — needs flashlight' },
                  { sign: 'Bites in lines', look: 'Itchy welts, sometimes 3 in a row', where: 'Exposed skin: arms, shoulders, neck, legs', level: 'Suggestive only — never proof' },
                ].map(({ sign, look, where, level }) => (
                  <tr key={sign} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{sign}</td>
                    <td className="px-4 py-3 text-gray-700">{look}</td>
                    <td className="px-4 py-3 text-gray-700">{where}</td>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-600">{level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What Tools Do You Need to Check for Bed Bugs?</h2>
          <p>Two tools do 95% of the job: a bright flashlight and a thin, stiff card. The flashlight, held at a low raking angle, makes eggs and spotting pop against fabric; the card — an old credit card or a paint scraper — gets dragged slowly through mattress piping, frame joints, and baseboard gaps to flush bugs and debris out of cracks your eyes cannot reach. A cheap magnifier helps distinguish a 1.5 mm nymph from a carpet beetle larva.</p>
          <AffiliateDisclosure />
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="bed bug detection kit">Flashlight + card detection kit on Amazon.ca →</BuyLink>
          </div>
          <TopPick tag={AMZ_TAG}
            label="Best Tool for the Job"
            name="Bed Bug Detection Kit (flashlight + card + magnifier)"
            blurb="A combination kit bundles the three tools that do almost the entire inspection: a bright flashlight to rake across fabric so eggs and spotting pop, a thin stiff card to drag through seams and joints, and a magnifier to tell a nymph from a carpet-beetle larva. Inexpensive, reusable trip after trip, and the fastest way to turn a suspicion into physical evidence."
            search="bed bug detection kit"
            score={8.4}
            pros={['Covers ~95% of a visual inspection', 'Cheap and reusable', 'Works for hotels, used furniture, and move-ins alike']}
            cons={['Only finds what is on the surface — monitoring needs interceptors', 'Basic kits skip the magnifier']}
          />
          <p>For ongoing monitoring rather than a one-time check, pitfall-style interceptor cups under each bed leg are the evidence-backed option — Rutgers University field research found interceptors detected low-level infestations that visual inspections missed. We cover models, placement, and how to read what you catch in our <Link href="/blog/bed-bug-interceptor-traps-canada">bed bug interceptor traps guide</Link>. Skip ultrasonic &ldquo;repellers&rdquo; entirely: there is no credible evidence they affect bed bugs.</p>

          <h2>How Do You Check a Hotel Room for Bed Bugs in 5 Minutes?</h2>
          <p>Park your luggage in the bathtub or on the bathroom tile the moment you walk in, then spend five minutes inspecting the bed zone before you unpack anything. Bathrooms are the least likely harbourage in any hotel room — smooth, cool, and far from sleeping hosts — which makes the tub a safe staging area.</p>
          <ol>
            <li><strong>Minute 1 — sheets and corners.</strong> Pull back the duvet and sheets at the head of the bed. Scan the top mattress surface, then check all four corners and the piping seam for spotting, skins, and live bugs.</li>
            <li><strong>Minute 2 — mattress edge and box spring.</strong> Lift the mattress edge and inspect the box-spring seam and corner guards. In inspections of infested hotel rooms, the box spring is one of the two most common harbourages.</li>
            <li><strong>Minute 3 — the headboard.</strong> The other most common harbourage. Hotel headboards are usually wall-mounted on cleats; shine your flashlight behind and along the lower edge. If it lifts off easily, check the back face.</li>
            <li><strong>Minute 4 — nightstand and luggage rack.</strong> Open the nightstand drawer, check the joints, look under the lamp base. Inspect the fabric straps of the luggage rack — a notorious transfer point — before ever putting your suitcase on it.</li>
            <li><strong>Minute 5 — soft seating.</strong> Run the card along the seams of any upholstered chair, bench, or sofa, especially if you plan to sit or throw clothes there.</li>
          </ol>
          <p>Found evidence? Photograph it, ask for a different room at least two floors away (adjacent rooms share wall voids), and keep luggage in the new bathroom while you repeat the check. When you get home from any trip — clean check or not — the cautious habit is to unpack directly at the laundry machine and dry everything on high heat for 30+ minutes, which kills all life stages including eggs.</p>

          <h2>What Is the Used-Furniture Rule?</h2>
          <p>The rule is simple: never bring home a used mattress, box spring, or upholstered item, no matter how clean it looks — and inspect everything else outdoors before it crosses your threshold. Curb-side couches and marketplace mattresses are the single most preventable way Canadians import bed bugs, because stuffing, frames, and internal voids can hide bugs and eggs that no surface inspection can reach. A free couch that leads to treatment is not free: professional bed bug treatment for a typical home runs into the high hundreds to low thousands of dollars — see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> for real ranges.</p>
          <p>Hard-sided furniture is a different story. Solid wood dressers, metal shelving, and plastic pieces can be inspected with reasonable confidence:</p>
          <ul>
            <li>Inspect <strong>outdoors, in daylight</strong>, before the item enters your car if possible.</li>
            <li>Flip it over — the underside and back are where evidence hides.</li>
            <li>Drag your card through <strong>every joint, corner block, screw hole, and drawer runner</strong>; look for black spotting, skins, and 1 mm white eggs.</li>
            <li>When in doubt, quarantine the piece in a garage for several days with an interceptor-style monitor beside each leg before bringing it inside.</li>
            <li>For small wooden or fabric items that fit in a dryer, 30+ minutes on high heat sterilizes them.</li>
          </ul>

          <h2>How Do You Inspect an Apartment Before Moving In? (Toronto &amp; GTA Renters)</h2>
          <p>Inspect the unit while it is completely empty — ideally at the viewing or on key-pickup day, before the moving truck arrives — because an empty apartment gives you clear sightlines to every baseboard and closet corner, and because bed bugs survive vacancy easily. At room temperature, adults commonly last 2–4 months without a blood meal, and cool-condition laboratory studies have recorded survival approaching a year. &ldquo;Nobody has lived here for two months&rdquo; is not reassurance.</p>
          <p>This matters more in the GTA than almost anywhere in the country: Toronto has placed at or near the top of Orkin Canada&rsquo;s annual bed bug cities list for multiple years, and Toronto Public Health logs thousands of bed bug service requests annually, concentrated in dense multi-unit rental housing where infestations travel through shared walls, hallway carpet, and laundry rooms.</p>
          <p>Your empty-unit checklist, working outward from where the bed will go:</p>
          <ul>
            <li><strong>Bedroom baseboards and carpet edges</strong> — card-drag the gap between baseboard and floor; peel back loose carpet edges near where the bed will sit.</li>
            <li><strong>Closet interiors</strong> — shelf brackets, corner joints, and the door-frame gap.</li>
            <li><strong>Electrical outlets and cover plates</strong> near sleeping areas — spotting around plate edges is a classic sign of a wall-void population (look, do not open them yourself).</li>
            <li><strong>Window sills and curtain hardware</strong> in bedrooms.</li>
            <li><strong>Any furniture the landlord left behind</strong> — treat it under the used-furniture rule above.</li>
            <li><strong>Common areas on the way in</strong> — hallway carpet edges and the laundry room tell you about building pressure, not just the unit.</li>
          </ul>
          <p>Photograph anything suspicious with a dated timestamp before you sign or move in. In Ontario, landlords are responsible under section 20 of the Residential Tenancies Act for keeping units fit for habitation and compliant with health and maintenance standards, and Landlord and Tenant Board decisions have consistently required landlords to pay for professional bed bug treatment. Report suspected bed bugs to your landlord in writing (email creates a record), cooperate with treatment preparation, and in Toronto escalate through 311 and RentSafeTO if the landlord refuses to act. That is general information, not legal advice — but the documentation habit is what wins disputes.</p>
          <p>Belt-and-suspenders move for any GTA renter: put interceptor cups under the bed legs and a certified encasement on the mattress from day one. Together they cost less than a nice dinner and turn &ldquo;I think something bit me&rdquo; into evidence within a week or two. Our <Link href="/blog/bed-bug-mattress-encasement-canada">mattress encasement guide</Link> explains what certification actually means and which covers hold up.</p>
          <p>On the encasement itself, the detail that separates a real barrier from a mattress protector is the closure &mdash; <Link href="/blog/sureguard-mattress-encasement-review-canada">the SureGuard and its flap-pinned zipper</Link> is our worked example of what a genuinely bug-proof seal looks like. On the monitoring side, interceptors are the always-on baseline but not the only option: <Link href="/blog/best-bed-bug-detector-canada">the detector comparison</Link> covers heat and CO&#8322; lured monitors for an empty unit where there is no sleeping host to use as bait, and <Link href="/blog/best-bed-bug-trap-canada">the full trap round-up</Link> explains why double-well pitfall cups are what university field trials keep reaching for.</p>

          <h2>Why Do Bites Alone Never Confirm Bed Bugs?</h2>
          <p>Because bite reactions are immune responses, not fingerprints — no doctor can look at a welt and reliably name the insect that caused it, and roughly 30% of people never react to bed bug bites at all. That cuts both ways: itchy welts might be mosquitoes, fleas, mites, or dermatitis, and a total absence of bites does not clear a room. Health Canada&rsquo;s guidance notes bed bugs are not known to transmit disease; the real costs are sleep loss, anxiety, and treatment bills — one more reason to chase physical evidence instead of diagnosing off skin. If bites are your only sign, deploy interceptors under the bed legs and check them for two weeks before spending a dollar on treatment products. If anything skin-related worsens or infects, that is a question for a doctor or your local public health unit, not a blog.</p>

          <h2>What Should You Do If Your Check Turns Up Bed Bugs?</h2>
          <p>Confirm, contain, then treat — in that order. Panic moves (tossing the mattress, bombing the room with a fogger) are the two most expensive mistakes in bed bug control.</p>
          <ol>
            <li><strong>Capture a sample.</strong> Tape or a zip bag. Identification matters — bat bugs and carpet beetle larvae trigger false alarms constantly.</li>
            <li><strong>Isolate the bed.</strong> Interceptors under all legs, bed pulled 15 cm off the wall, bedding off the floor, and certified <Link href="/blog/bed-bug-mattress-encasement-canada">encasements</Link> on the mattress and box spring so anything inside is sealed in and starves.</li>
            <li><strong>Heat what you can.</strong> Launder bedding and clothing, then dry on high for 30+ minutes — heat is the one treatment that kills every life stage including eggs. A <Link href="/blog/best-bed-bug-steamer-canada">proper steamer</Link> extends that kill to seams, frames, and baseboards.</li>
            <li><strong>Use only PMRA-registered products.</strong> Canada is stricter than the US here, and that is a feature: many aggressive US consumer concentrates are not legal or registered for sale here, and total-release foggers scatter bugs deeper into walls while rarely touching harbourages. Our <Link href="/blog/bed-bug-spray-canada">bed bug spray Canada guide</Link> covers what is actually registered and worth buying, our honest look at <Link href="/blog/do-bed-bug-sprays-actually-work">whether sprays work at all</Link> sets expectations, and <Link href="/blog/diatomaceous-earth-for-bed-bugs">diatomaceous earth</Link> remains the cheap, low-toxicity residual for cracks and voids.</li>
            <li><strong>Know when to call a professional.</strong> Multi-room evidence, wall-void spotting around outlets, or a rental building with known pressure are professional-treatment territory. Budget expectations are in our <Link href="/pest-control-cost-canada">pest control cost guide</Link>.</li>
          </ol>
          <p>On step four, the brand-name trap to watch for is a familiar can that exists in two versions &mdash; a US formula and a Canadian-registered one, in near-identical packaging. <Link href="/blog/ortho-home-defense-bed-bug-review-canada">Ortho Home Defense is the clearest case</Link>, and the PCP number on the label is the only test that separates them.</p>
          <p>If your inspection found bugs in the sofa rather than the bed, that surface needs its own sequence &mdash; it cannot be encased and has more seam than a mattress does. <Link href="/blog/how-to-get-rid-of-bed-bugs-in-couch-canada">The couch protocol</Link> runs vacuum, steam, spray, contain, weekly. And if this whole check was prompted by a trip, the preventive version is packing a small registered can: <Link href="/blog/best-bed-bug-spray-for-travel-canada">travel sprays and the 100&nbsp;mL carry-on limit</Link>.</p>
          <p>For the campaign end to end &mdash; how heat, dust, encasement and monitoring sequence against each other &mdash; <Link href="/blog/bed-bug-control-canada-hub">the layered plan these steps belong to</Link> is the parent guide.</p>

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-4 my-6">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-navy-100 bg-white p-5">
                <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
                  {question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>

          <h2>Related Bed Bug Guides</h2>
          <ul>
            <li><Link href="/blog/bed-bug-interceptor-traps-canada">Bed Bug Interceptor Traps Canada — The Evidence-Backed Monitor</Link></li>
            <li><Link href="/blog/bed-bug-mattress-encasement-canada">Bed Bug Mattress Encasements Canada — What Certification Means</Link></li>
            <li><Link href="/blog/best-bed-bug-steamer-canada">Best Bed Bug Steamer Canada — Heat That Kills Every Stage</Link></li>
            <li><Link href="/blog/bed-bug-spray-canada">Bed Bug Spray Canada — What&rsquo;s PMRA-Registered and What Isn&rsquo;t</Link></li>
            <li><Link href="/blog/do-bed-bug-sprays-actually-work">Do Bed Bug Sprays Actually Work? An Honest Look</Link></li>
            <li><Link href="/blog/diatomaceous-earth-for-bed-bugs">Diatomaceous Earth for Bed Bugs — Cheap, Slow, and Real</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4 text-sm text-gray-700">
            This guide is part of our independent product-research library for Canadian homeowners.{' '}
            <Link href="/pest-product-guides" className="font-semibold text-emerald-700 underline">More independent Canadian pest product research →</Link>
          </div>
        </div>

        <StickyBuyBar tag={AMZ_TAG} name="Bed Bug Detection Kit (flashlight + card)" search="bed bug detection kit" label="Best inspection tool" />
      </article>
    </>
  )
}
