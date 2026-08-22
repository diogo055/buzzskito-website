import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'raccoon-and-skunk-proofing-under-a-deck-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'Raccoon & Skunk Proofing Under a Deck in Canada — The L-Footing Trench That Actually Keeps Them Out'
const META_TITLE = 'Raccoon & Skunk Proofing Under a Deck'

const FAQS = [
  {
    question: 'How do I permanently keep raccoons and skunks out from under my deck?',
    answer: 'Screen the perimeter with half-inch galvanised hardware cloth installed as an L-footing, and confirm the space is empty before you close the last panel. The L-footing is the part that makes it permanent: instead of stopping the mesh at ground level, you trench down about 30 cm at the base of the deck and then bend the bottom of the mesh outward, away from the structure, for another 30 cm underground before backfilling. A digging animal starts at the base, hits mesh, moves out a few inches, hits mesh again, and gives up — because raccoons and skunks dig down at the obstruction rather than tunnelling from a distance. Mesh stapled flat to the deck fascia with nothing buried is defeated in a single night. Lattice alone is decoration; raccoons tear it. The correct sequence is harass, confirm vacancy, one-way door, then seal.',
  },
  {
    question: 'What mesh should I use — chicken wire, lattice or hardware cloth?',
    answer: 'Galvanised hardware cloth, half-inch aperture, 19-gauge at minimum and 16-gauge if you can get it. Chicken wire fails outright: it is thin, the hexagonal weave distorts, and a raccoon simply tears or peels it. Plastic and wood lattice are cosmetic — they are fine as the visible face of the job, but they are not a barrier and should have hardware cloth behind them. Half-inch is the right aperture because it also excludes rats and chipmunks that would otherwise move into the same void, and it is stiff enough to hold shape in a trench. It does not stop mice — a mouse passes through a half-inch opening, and quarter-inch cloth is the mouse specification — so run quarter-inch on any smaller gap where mice are the concern. Galvanised matters in Canada specifically: buried mesh sits in wet, salted, freeze-thaw soil for years, and uncoated steel rusts through at the soil line first, which is exactly where the strength has to be.',
  },
  {
    question: 'When is it safe to seal under a deck in Ontario?',
    answer: 'Late August to late October is the clean window. Both species den under decks and both have immobile young for a period that makes spring and early summer sealing genuinely dangerous. Skunks mate in late winter with kits arriving around May; raccoon litters arrive March through May and the kits cannot leave the den on their own for roughly eight to ten weeks. Sealing a den with young inside separates a mother from her litter — she will tear at the structure trying to get back in, and the young die inside your deck, which becomes a smell problem you cannot reach. By late August the young of both species are mobile and following the adults at night. The other end of the window is the ground freezing: you cannot trench frozen southern Ontario soil, and animals settle in for winter. Autumn is the answer on both counts.',
  },
  {
    question: 'How do I know whether something is still living under there?',
    answer: 'Do not guess, and do not rely on not hearing anything. Three checks, run together over two or three nights. First, dust flour, fine sand or sifted soil across every suspected entrance and read the tracks the next morning — in and out, or nothing. Second, the newspaper test: loosely stuff crumpled newspaper into the hole, deep enough that an animal inside must push it out to leave. If it is pushed out overnight, something is home; if it sits untouched for three nights, you likely have vacancy. Third, listen at dusk when both species stir, and again at dawn. If you want certainty, a trail camera pointed at the entrance for two nights removes all doubt for far less than the cost of getting it wrong. Do the checks before the trench, not after.',
  },
  {
    question: 'Can I trap the raccoon or skunk and move it somewhere else?',
    answer: 'No — not legally in Ontario, and it would not solve the problem anyway. Under the Fish and Wildlife Conservation Act a captured wild animal may only be released within one kilometre of the capture site, and generally within 24 hours. Driving a raccoon or skunk to a conservation area is an offence that can carry provincial charges and fines, and the rule exists because long-distance relocation spreads rabies and distemper between animal populations. Play it forward and trapping collapses on its own terms: an animal released at the legal maximum distance is back within a night or two, and the den under your deck is still open and still attractive. A trapped animal in spring is very likely a nursing mother whose young then starve out of reach. Exclusion is not the humane alternative to trapping — it is the only version that works.',
  },
  {
    question: 'What if I cannot dig a trench — tree roots, concrete or a patio?',
    answer: 'Use a surface apron instead, and it works better than people expect. Lay hardware cloth flat on the ground, running outward from the base of the deck for 30 to 45 cm, pinned down every 30 cm with heavy landscape staples, then cover it with soil, mulch or gravel. Fasten the upper edge to the deck frame the same way you would a trenched panel. Because raccoons and skunks dig down at the obstruction rather than starting a tunnel a metre away, an apron intercepts the dig just as reliably as a buried L, and grass and roots grow through it within a season and lock it in place. It is also the right choice against tree roots you should not be cutting, or where a concrete pad or paver patio meets the deck. The only real cost is that the apron is visible for the first few months.',
  },
  {
    question: 'What does it cost to raccoon-proof under a deck yourself?',
    answer: 'For a typical suburban deck, the materials sit in the $150 to $250 range at Canadian retail — most of it hardware cloth by the roll, plus fasteners, landscape staples and the tools if you do not already own them. Set that against the alternative most people try first: a $40 repellent that works for a week, then another one, then a live trap you are not legally able to use the way you imagined. Licensed wildlife exclusion work on a deck perimeter costs several times the DIY figure, which is fair given the labour involved — this is a genuine weekend of digging. The case for paying it is when there are young present, when the structure is complex, or when the entry involves working at roofline height. Our Canadian pest control cost guide covers what wildlife exclusion typically runs so you can recognise a fair quote.',
  },
  {
    question: 'How do I get rid of the skunk smell under a deck?',
    answer: 'Ventilation and time do most of it, and the fix that matters is removing the reason a skunk is there. Musk lingers in soil and on wood for weeks, and no spray reaches under a deck properly. Once the space is verifiably empty and screened, the smell fades on its own as the soil dries and airs. If the odour is intense because an animal actually sprayed under there, the soil directly beneath is the source — where you can reach it, remove and replace the top few centimetres. Enzyme-based odour neutralisers made for pet accidents help on wood and concrete surfaces you can physically reach. What does not work is masking agents, and what will bring the smell straight back is leaving the entry open. Seal it and the problem stops renewing itself.',
  },
];

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'How to raccoon- and skunk-proof under a deck or shed in Canada: the L-footing hardware cloth trench, the vacancy check, and the denning-season rule.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function RaccoonAndSkunkProofingUnderADeckCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to permanently excluding raccoons and skunks from under a deck, shed or porch — the L-footing hardware cloth method, the vacancy check that prevents a wildlife disaster, the autumn denning-season window, and Ontario relocation law.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Raccoon & Skunk Proofing Under a Deck', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Raccoon &amp; Skunk Proofing Under a Deck</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Denning season under decks, sheds and porches runs autumn into spring, and no repellent survives it. The permanent fix is a trench, a roll of galvanised mesh, and one bend in the wire that most people leave out &mdash; plus a vacancy check you must not skip.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Half-inch galvanised hardware cloth" search="galvanized hardware cloth 1/2 inch 36 inch roll" label="The permanent fix" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To keep raccoons and skunks out from under a deck permanently, screen the perimeter with <strong>half-inch galvanised hardware cloth installed as an L-footing</strong>: trench about 30 cm down at the base, then bend the bottom of the mesh outward another 30 cm underground before backfilling. Animals dig down at the obstruction, hit mesh, try again a few inches out, hit mesh again, and quit. <strong>Confirm the space is empty first</strong> &mdash; flour at the entrance and a newspaper stuffing test over three nights &mdash; because sealing a den with immobile young inside is a disaster you cannot undo. The clean window in Ontario is <strong>late August to late October</strong>.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Half-inch galvanised hardware cloth</strong>, 19-gauge or heavier. Chicken wire tears; lattice alone is decoration.</li>
              <li>The <strong>outward L-footing</strong> is what makes it permanent. Surface-stapled mesh is defeated in one night.</li>
              <li><strong>Confirm vacancy before you close it</strong>: flour tracks, the newspaper test, a trail camera if you want certainty.</li>
              <li>Raccoon kits arrive March&ndash;May and cannot leave the den on their own for 8&ndash;10 weeks; skunk kits arrive around May. Do not seal in spring.</li>
              <li>No trench possible? A <strong>surface apron</strong> of mesh pinned flat and covered works just as well.</li>
              <li>Ontario law caps relocation of captured wildlife at <strong>1 km</strong> &mdash; trapping does not solve an open den anyway.</li>
              <li>Budget roughly <strong>$150&ndash;$250</strong> in materials for a typical suburban deck &mdash; against a $40 repellent that lasts a week.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="raccoons and skunks" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — What You Actually Need for a Deck Perimeter"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Half-Inch Galvanised Hardware Cloth (36 in Roll)',
                why: 'The material the whole job depends on. Half-inch aperture also excludes rats and chipmunks from the same void (mice still pass a half-inch opening — that is a quarter-inch job); galvanised coating is what survives years of wet, salted, freeze-thaw Ontario soil at the buried edge. A 36-inch width is the practical roll for an L-footing — enough to run down the face, into the trench, and out along the L.',
                search: 'galvanized hardware cloth 1/2 inch 36 inch roll',
                score: 9.3,
                featured: true,
                pros: ['Raccoons cannot tear or chew it', 'Also excludes rats and chipmunks — mice need 1/4 in', 'Holds shape in a trench — chicken wire does not'],
                cons: ['Cut ends are genuinely sharp', 'Rolls fight you — it wants to spring back'],
              },
              {
                badge: 'Best for Long Perimeters',
                name: '100 ft Hardware Cloth Roll (19-Gauge)',
                why: 'A deck perimeter eats more mesh than anyone estimates — measure all four sides, add the stair skirt, and add 15% for overlaps at the seams. The 100 ft roll is markedly cheaper per foot than stitching short rolls together, and each seam you avoid is one less place an animal finds a weakness.',
                search: 'hardware cloth 19 gauge 100 ft roll galvanized',
                score: 8.7,
                pros: ['Much better cost per foot on a full perimeter', 'Fewer seams to overlap and wire together', 'Leftover is useful for vents, sheds and window wells'],
                cons: ['Heavy and awkward for one person', 'Oversized for a single small opening'],
              },
              {
                badge: 'Best Finishing Face',
                name: 'Vinyl or Wood Lattice Screening Panels',
                why: 'Lattice is not a barrier and never was — but it is the reason the finished job looks like a deck rather than a cage. Fit it in front of the hardware cloth, not instead of it. Vinyl lattice takes Ontario freeze-thaw better than wood and does not need repainting.',
                search: 'vinyl lattice panel deck skirting outdoor',
                score: 7.9,
                pros: ['Hides the mesh completely', 'Vinyl survives freeze-thaw without maintenance', 'Panels come off for access later'],
                cons: ['Zero exclusion value on its own — raccoons tear it', 'Adds cost to a job that already works without it'],
              },
              {
                badge: 'Best Ground Pins',
                name: 'Heavy Landscape Staples (8–12 in)',
                why: 'What holds a surface apron down when you cannot trench, and what pins the mesh tight along an uneven grade so nothing can lift an edge. Buy the heavy gauge — light staples pull straight out of wet spring soil, which is precisely when you need them holding.',
                search: 'landscape staples 12 inch heavy duty garden stakes',
                score: 8.5,
                pros: ['Makes the no-dig apron method work', 'Grass and roots grow through and lock it down', 'Cheap relative to what they protect'],
                cons: ['Light-gauge versions are a waste of money', 'Tedious over a long run'],
              },
              {
                badge: 'Best Tools',
                name: 'Heavy-Duty Aviation Snips & Cut-Resistant Gloves',
                why: 'Hardware cloth blunts ordinary scissors and shreds bare hands — the cut wire ends are the reason this job sends people indoors for a bandage. Aviation snips cut galvanised mesh cleanly all weekend, and proper gloves are the difference between a tidy afternoon and a miserable one.',
                search: 'aviation tin snips heavy duty cut resistant work gloves',
                score: 8.3,
                pros: ['Cuts galvanised mesh without destroying the tool', 'Gloves are non-negotiable with cut mesh ends', 'Both stay useful long after this job'],
                cons: ['Another purchase if you already own decent snips', 'Snips still tire your hand on a long perimeter'],
              },
            ]}
            whichToBuy={
              <>
                <strong>One opening or a small deck?</strong> A single roll of the <em>Best Overall</em> 36-inch hardware cloth plus the <em>Best Tools</em> does the whole job. <strong>Full deck perimeter or several structures?</strong> Go to the <em>Best for Long Perimeters</em> 100 ft roll &mdash; it is cheaper per foot and removes seams. <strong>Concrete, pavers or tree roots in the way?</strong> Skip the trench and use the apron method, which is what the <em>Best Ground Pins</em> exist for. The <em>Best Finishing Face</em> lattice is purely cosmetic &mdash; worth it if you want it to look finished, worth nothing as a barrier.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Why Under Your Deck Is Prime Real Estate</h2>
          <p>A deck, shed, porch or set of concrete steps offers a wild animal the three things a den site needs: a dry roof, a defensible entrance, and total concealment from anything larger. It is warmer than open ground in winter, shaded in summer, and it sits inside a suburban food landscape of green bins, pet bowls, bird seed and grub-rich lawn. From a raccoon or skunk&rsquo;s perspective it is not a compromise. It is better than anything available in the ravine.</p>
          <p>That is why repellents lose this fight. You are not competing against indifference; you are competing against the best den site for several hundred metres. Scent granules, lights, ultrasonic devices and one-off harassment can move an animal for a few nights, but the void stays open and the next animal &mdash; or the same one &mdash; moves back in. The only intervention that ends it is closing the space, and closing it in a way that survives digging.</p>

          <AffiliateDisclosure />
          <h2>Raccoon or Skunk? Read the Entrance</h2>
          <p>The fix is identical for both, but knowing which one you have changes your timing and your caution level.</p>
          <ul>
            <li><strong>Skunk.</strong> A neat, bowl-shaped excavation roughly 10&ndash;15 cm across, usually tucked into a corner or against the house foundation, often with a faint musk smell around it even when nothing has sprayed. Skunks are excellent diggers and poor climbers, so the entry is almost always at ground level. They are also active earlier in the evening than most people expect.</li>
            <li><strong>Raccoon.</strong> A larger, rougher opening, frequently made by tearing or levering existing lattice rather than digging &mdash; raccoons have hands and use them. Look for torn plastic lattice, bent skirting, greasy rub marks on the entry edges, and scat. Raccoons also climb, so a deck entry may be over a joist rather than under the skirt.</li>
            <li><strong>Both, at different times.</strong> Common. A void that suited a skunk in March suits a raccoon in October. This is another argument for sealing the whole perimeter rather than the one hole you found.</li>
          </ul>
          <p>Two health notes worth taking seriously before you crawl anywhere. Ontario has been suppressing a raccoon-strain rabies outbreak in the Hamilton area since 2015, and both raccoons and skunks are rabies vector species &mdash; any animal active and fearless in daylight, staggering or circling should be reported to local animal services rather than approached. And raccoon latrines, which often sit on flat deck surfaces or in a corner of the void, can carry roundworm eggs that are hazardous if ingested. Clean latrine sites with boiling water, gloves and a mask &mdash; never a dry sweep or a shop vac.</p>

          <h2>The Denning Calendar That Decides Your Timing</h2>
          <p>This is the section to read before you buy anything, because getting the timing wrong turns a good job into a wildlife disaster and a smell you cannot reach.</p>
          <p>Raccoon litters arrive in Ontario from March through May, and the kits cannot leave the den on their own for roughly eight to ten weeks &mdash; they are walking well before that, but not following the mother out.</p>
          <p>Skunks mate in late winter with kits arriving around May, mobile and following the mother by mid-to-late summer. Seal a den with immobile young inside and you have separated a mother from her litter: she will tear at the structure for days trying to get back in, and the young die out of reach under your deck.</p>
          <div className="not-prose my-6 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Do not seal between March and late July.</strong> Assume any occupied den in that window contains young that cannot leave on their own. If you are losing the argument with a deck full of raccoons in May, the correct move is a licensed wildlife control company that can hand-remove kits and reunite the family outside &mdash; not a roll of hardware cloth. Wait for the young to be mobile and following the adults at night, then do the job properly.
            </p>
          </div>
          <p>That leaves <strong>late August to late October</strong> as the clean window in southern Ontario, and it is a genuinely narrow one because the other end is the ground freezing. You cannot trench frozen soil, and by November animals are settling in for winter. This is why deck-proofing is an autumn job in Canada &mdash; the same autumn that most people are thinking about anything except their deck skirt.</p>

          <h2>Confirm It Is Empty — Three Checks, Three Nights</h2>
          <p>Do not rely on silence. Both species sleep through the day, and a quiet afternoon proves nothing. Run these together over two or three nights before the trench goes in:</p>
          <ol>
            <li><strong>The flour test.</strong> Dust flour, fine sand or sifted soil across every suspected entrance. Read the tracks at dawn: in, out, or nothing. Reset it each evening.</li>
            <li><strong>The newspaper test.</strong> Loosely stuff crumpled newspaper into the opening &mdash; deep enough that an animal inside has to push it out to leave, loose enough that it can. Pushed out overnight means occupied. Untouched for three consecutive nights means you probably have vacancy.</li>
            <li><strong>A trail camera.</strong> If you want certainty rather than inference, two nights of footage removes all doubt for far less than the cost of getting this wrong.</li>
          </ol>
          <p>If something is still home and it is outside the young-in-den window, harass it out first: a bright work light left on under the deck, a radio on a talk station, rags with a strong but legal scent near the entrance for three or four nights. Most animals have backup dens and will move. Then install a <strong>one-way door</strong> over the main entrance &mdash; a device the animal can push out through but not re-enter &mdash; and leave it up for several days before the final panel goes on. The one-way door is the backstop that catches the animal your flour test missed.</p>

          <h2>The L-Footing: The One Bend That Makes It Permanent</h2>
          <p>Here is the detail that separates a fix from a fortnight. Raccoons and skunks do not tunnel from a distance &mdash; they dig <em>down</em> at the point where they are blocked. So a barrier that only goes to ground level gets undermined immediately, while a barrier that turns outward underground defeats the actual digging behaviour.</p>
          <p>The method, step by step:</p>
          <ol>
            <li><strong>Trench the perimeter</strong> about 30 cm deep and 30 cm wide at the base of the deck. In Peel and Halton clay this is the hard part &mdash; water the line thoroughly the day before and it becomes a different job.</li>
            <li><strong>Cut your mesh to shape.</strong> For a 36-inch roll: roughly 15 cm running up the face to the deck frame, 30 cm down the trench wall, and the remainder bent outward along the trench floor, <em>away</em> from the deck.</li>
            <li><strong>Fasten the top edge</strong> to the deck frame or rim joist with galvanised fence staples or exterior screws with fender washers &mdash; washers matter, because a screw head alone pulls straight through the mesh.</li>
            <li><strong>Overlap every seam</strong> by 10&ndash;15 cm and wire the panels together with hog rings or galvanised wire. Seams are where perimeters fail.</li>
            <li><strong>Backfill and tamp.</strong> Return the soil, tamp it down, and reseed or mulch. Within a season roots grow through the buried L and it becomes part of the ground.</li>
            <li><strong>Fit the lattice last</strong>, in front of the mesh, if you want the finished look.</li>
          </ol>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="galvanized hardware cloth 1/2 inch 36 inch roll">Check galvanised hardware cloth on Amazon.ca →</BuyLink>
          </div>

          <h2>The No-Dig Version: A Surface Apron</h2>
          <p>Plenty of decks sit against a concrete pad, a paver patio, or the root plate of a tree you should not be cutting. The apron method handles all of it and performs close to as well as a trench.</p>
          <p>Lay hardware cloth flat on the ground, running outward from the base of the deck for 30 to 45 cm, and pin it every 30 cm with heavy landscape staples. Fasten the upper edge to the deck frame exactly as you would a trenched panel. Then cover the flat portion with soil, mulch or gravel. Because animals dig at the obstruction rather than a metre out, they meet the apron immediately and get nowhere. Grass and roots grow through it within a season and lock it permanently.</p>
          <p>The only real trade-off is that the apron is visible for a few months until the cover settles and the grass takes. That is a small price for not fighting a root plate with a mattock.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="landscape staples 12 inch heavy duty garden stakes">Check heavy landscape staples on Amazon.ca →</BuyLink>
          </div>

          <h2>The Materials Question: Where Money Is Well Spent and Where It Is Not</h2>
          <p>Buy properly on three things and ignore the rest.</p>
          <p><strong>Galvanisation.</strong> Buried mesh sits in wet, road-salted, freeze-thaw soil for years and rusts through at the soil line first &mdash; which is exactly where the strength has to be. Uncoated or lightly coated mesh is a false economy on a job you do not want to repeat.</p>
          <p><strong>Gauge.</strong> Nineteen-gauge is the working minimum; sixteen-gauge is noticeably stiffer, easier to hold in a trench, and worth the difference on a long perimeter. Half-inch aperture is the right call because it also keeps rats and chipmunks out of the same void &mdash; the animals that move in after you have excluded the big ones. Be clear about its limit: a mouse fits through a half-inch opening. Quarter-inch hardware cloth is the mouse specification, so use that on vents, weep gaps and anywhere mice are the actual problem.</p>
          <p><strong>Fasteners.</strong> Galvanised staples or exterior screws with fender washers. Ordinary screws pull through mesh; ordinary staples rust out.</p>
          <p>Where money is wasted: on lattice as a barrier, on chicken wire in any role, and on repellents purchased in parallel with this job. Once the perimeter is closed, the repellent has nothing to do. If you want a deterrent working on the yard generally rather than the structure, a <Link href="/blog/motion-activated-sprinkler-canada">motion-activated sprinkler</Link> on the approach route is the only category with a real track record &mdash; and our full <Link href="/blog/raccoon-deterrent-canada">raccoon deterrent tier list</Link> is blunt about which of the rest are decoration.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="hardware cloth 19 gauge 100 ft roll galvanized">Check 100 ft hardware cloth rolls on Amazon.ca →</BuyLink>
          </div>

          <h2>Ontario Law: Why Trapping Is Not the Shortcut</h2>
          <p>Before anyone borrows a live trap, the rule that shapes every wildlife decision in this province: under the <strong>Fish and Wildlife Conservation Act</strong>, a captured wild animal may only be released within <strong>one kilometre</strong> of where it was caught, generally within 24 hours. Trapping a raccoon in Mississauga and releasing it in a conservation area is an offence that can carry provincial charges and fines, and the rule exists because long-distance relocation spreads rabies and distemper between animal populations.</p>
          <p>Work the logic through and trapping fails on its own terms even ignoring the law. An animal released at the legal maximum distance walks home within a night or two, and the den under your deck is still open, still dry, still the best site around. A trapped animal in spring is very likely a nursing mother whose young then starve out of reach. Exclusion is not the gentler alternative to trapping &mdash; it is the only version that actually ends the problem. If you do want the detail on legal humane trapping and where it genuinely fits, our <Link href="/blog/best-raccoon-live-trap-canada">raccoon live trap guide</Link> and <Link href="/blog/best-live-animal-trap-canada">live animal trap sizing guide</Link> cover it honestly, including the relocation limits.</p>

          <h2>Finish the Job: Everything Else That Is Open</h2>
          <p>A closed deck perimeter pushes the animal to the next best site on your property, so it is worth spending the leftover mesh on the obvious ones the same weekend. Shed skirts and porch voids get the identical treatment. Window wells, dryer and soffit vents, and gaps under stairs all take offcuts of the same half-inch cloth. If rodents are also in the picture &mdash; and after you close a deck void they frequently are &mdash; our <Link href="/blog/rodent-exclusion-kit-canada">rodent exclusion kit guide</Link> covers the smaller-aperture side of the same discipline.</p>
          <p>Then remove the reason they were shopping your address in the first place: strap or latch the green bin, freeze meat scraps until collection morning, bring pet bowls in at dusk, and pick up spilled bird seed. A sealed structure plus a property that pays out nothing is what gets you dropped from the nightly route entirely. And if the job is bigger than a deck &mdash; an attic entry, a roofline vent, anything involving a ladder and a possible maternity den &mdash; hand it to a licensed wildlife control company; our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> covers what that work should run so you can spot a padded quote.</p>

          <h2>Deck Exclusion — Key Facts</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Material', 'Half-inch galvanised hardware cloth, 19-gauge or heavier'],
                  ['The critical detail', 'Outward L-footing — 30 cm down, 30 cm out, buried'],
                  ['No-dig alternative', 'Surface apron pinned flat, 30–45 cm out, then covered'],
                  ['What fails', 'Chicken wire, lattice alone, surface-stapled mesh'],
                  ['Fasteners', 'Galvanised staples or screws with fender washers'],
                  ['Seam overlap', '10–15 cm, wired together with hog rings'],
                  ['Vacancy check', 'Flour tracks + newspaper stuffing test, 3 nights'],
                  ['Backstop', 'One-way door left up several days before final sealing'],
                  ['Do NOT seal', 'March to late July — immobile young in the den'],
                  ['Clean window (Ontario)', 'Late August to late October, before ground freeze'],
                  ['Relocation law', 'Max 1 km from capture site — longer moves are illegal'],
                  ['Health cautions', 'Rabies vector species; raccoon latrine roundworm'],
                  ['Typical DIY materials cost', 'Roughly $150–$250 for a suburban deck perimeter'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/blog/raccoon-deterrent-canada">Raccoon Deterrents Canada &mdash; The Honest Tier List</Link></li>
            <li><Link href="/blog/best-raccoon-live-trap-canada">Best Raccoon Live Trap Canada &mdash; and Ontario Relocation Law</Link></li>
            <li><Link href="/blog/best-deer-fence-for-gardens-canada">Best Deer Fence for Gardens in Canada &mdash; The Other Autumn Exclusion Job</Link></li>
            <li><Link href="/blog/rodent-exclusion-kit-canada">Rodent Exclusion Kit Canada &mdash; Sealing the Smaller Gaps</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Costs in Canada &mdash; What Wildlife Exclusion Should Run</Link></li>
            <li><Link href="/pest-product-guides">All BuzzSkito Pest Product Guides</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="raccoons and skunks" />
      </article>
    </>
  )
}
