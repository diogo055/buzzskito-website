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

const SLUG = 'how-to-get-rid-of-silverfish-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'How to Get Rid of Silverfish in Canada — The Humidity Fix That Actually Works'
const META_TITLE = 'Get Rid of Silverfish Canada: Humidity Under 50%'

const FAQS = [
  {
    question: 'How do I get rid of silverfish permanently?',
    answer: 'Drop the humidity. Silverfish need roughly 75–95% relative humidity to breed, and a Canadian basement held at 45–50% RH with a properly sized dehumidifier stops reproduction — the existing adults die off or leave, and no new generation replaces them. Everything else (sticky traps, diatomaceous earth, sealing cracks, decluttering paper) is a supporting move. A spray-only or trap-only approach fails because silverfish live 2–8 years, hide deep in wall voids, and can survive months without food; only removing the moisture they physically require ends the infestation rather than trimming it.',
  },
  {
    question: 'What is the difference between silverfish and firebrats?',
    answer: 'They are close cousins with opposite temperature preferences. Silverfish (Lepisma saccharinum) are uniform silver-grey, prefer cool, damp areas at roughly 21–27°C, and turn up in basements, bathrooms, and laundry rooms. Firebrats (Thermobia domestica) are mottled grey-brown and thrive in genuinely hot spots — 32°C and up — which in a Canadian house means beside the furnace, the hot water tank, or heat ducts. The fix is the same (moisture control plus traps), but the location of the fight is different: hunt firebrats in the utility room, silverfish in the cool damp corners.',
  },
  {
    question: 'Are silverfish harmful to humans in Canada?',
    answer: 'No. Silverfish do not bite people or pets, do not sting, and are not known to transmit disease. The harm is to your belongings: they graze on starches and cellulose — book bindings, photographs, wallpaper paste, cardboard boxes, stored documents, and fabrics stiffened with starch sizing — leaving irregular scraped patches, notched edges, and yellow stains. Their shed skins and droppings can also contribute to indoor allergens for sensitive people. A small silverfish population is a nuisance; a large one quietly eating a box of family photos in the basement is a genuine loss.',
  },
  {
    question: 'Why does my basement have so many silverfish?',
    answer: 'Because a typical Canadian basement is silverfish habitat by design: below grade means cool and damp, summer air condensing on cool foundation walls pushes relative humidity into the 60–80% range, and basements are where we store exactly what silverfish eat — cardboard boxes, paper files, books, and seasonal fabrics. Add the cracks and gaps of an unfinished ceiling or sill plate and you have moisture, food, and harbourage in one room. That is also why the dehumidifier is the single highest-impact purchase: it removes the one condition a basement cannot offer silverfish on its own.',
  },
  {
    question: 'What humidity level kills silverfish?',
    answer: 'Silverfish do not die instantly at a number, but reproduction effectively stops below about 50% relative humidity, and sustained dryness in the 45–50% range makes a space unlivable for them — eggs desiccate and nymphs fail to develop. That is the practical target for a Canadian basement: run a dehumidifier with a built-in humidistat set to 45–50%, empty or drain it continuously, and verify with a cheap hygrometer placed away from the machine. As a bonus, that same range is what Health Canada suggests for limiting mould and dust mites, so the fix pays for itself twice.',
  },
  {
    question: 'Do sticky traps work for silverfish?',
    answer: 'Yes — as monitors first and population control second. Flat glue boards placed along baseboards, under sinks, behind toilets, and inside storage-room corners will catch silverfish reliably, because silverfish travel along wall edges at night. Their real value is intelligence: a line of numbered traps tells you which rooms have activity, whether the population is trending down after you start the dehumidifier, and when you are done. Trapping alone rarely eliminates an infestation, since the breeding population hides in wall voids the boards cannot reach.',
  },
  {
    question: 'Does diatomaceous earth kill silverfish?',
    answer: 'Yes — diatomaceous earth abrades and dehydrates the waxy coating on a silverfish’s body, which is a fitting way to kill an insect that already lives on a moisture knife-edge. Apply it as a thin, barely visible dust film along baseboards, inside cracks, under appliances, and around storage shelves; a visible pile gets walked around. Two Canadian caveats: DE only works while dry, so in the damp areas silverfish prefer it must go in sheltered spots or after the dehumidifier has done its work, and DE sold as an insecticide in Canada is a registered pesticide — look for a PCP registration number on the label and follow those directions.',
  },
  {
    question: 'Are Dekko Silverfish Paks legal in Canada?',
    answer: 'Treat them with caution. Dekko Silverfish Paks — the small boric-acid paper packets that dominate American silverfish advice — are a US EPA-registered product. Under Canada’s Pest Control Products Act, any insecticide sold or used here must carry its own Canadian PCP registration number on the label. Before buying any imported or cross-listed insecticide from a marketplace seller, check the label for a PCP number; if there isn’t one, it is not labelled for legal sale and use in Canada, and you have no Canadian label directions to rely on. The good news is you do not need it: a dehumidifier, traps, and a PCP-labelled crawling-insect product cover the same ground.',
  },
  {
    question: 'What attracts silverfish to a house?',
    answer: 'Three things, in order: moisture, starch, and undisturbed hiding places. Humidity above roughly 60% is the non-negotiable — bathrooms with poor ventilation, damp basements, laundry rooms, and leaky sink cabinets. Food is anything starchy or cellulose-based: paper, cardboard, book glue, wallpaper paste, dry pet food, oats and flour in unsealed packaging, even the starch sizing in stored linens. Harbourage is clutter — stacked cardboard boxes are simultaneously food and shelter, which is why switching basement storage to sealed plastic totes removes two attractants in one move.',
  },
  {
    question: 'Do silverfish mean my house is dirty?',
    answer: 'No — they mean your house has a humid microclimate somewhere, which is a building condition, not a housekeeping one. Immaculate homes with a damp basement or an unvented bathroom get silverfish; cluttered dry homes generally do not. That said, paper clutter gives an existing population more food and cover, so decluttering is part of the fix even though it is not the cause. If you want a single diagnostic, buy two inexpensive hygrometers, put one in the basement and one in the main bathroom, and see which room is running above 60% RH.',
  },
  {
    question: 'Why do I have house centipedes and silverfish together?',
    answer: 'Because one eats the other. House centipedes — the fast, many-legged startle machines on your bathroom wall — are predators, and silverfish are one of their favourite prey items. Seeing both usually means you have a genuine silverfish (or other insect) population sustaining the centipedes, plus the same underlying humidity problem, since house centipedes also need moisture. The encouraging flip side: fix the humidity and the silverfish, and the centipedes leave on their own once the buffet closes. Do not bother treating centipedes directly — they are harmless to you and actively helpful against the real pest.',
  },
  {
    question: 'When are silverfish worst in Canada?',
    answer: 'Indoors, the pressure peaks from late summer through winter. Humid July–August air drives basement RH to its annual high, feeding a strong breeding season; then, as October cools, silverfish concentrate in the warm envelope of the house, and winter is when people finally open a stored box of documents or holiday decorations and discover the grazing damage. That is why fall is the right time to act: start the dehumidifier before the late-summer humidity spike if you can, and do the sealing and decluttering work in October–November, when every crack you close also saves heat.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'How to get rid of silverfish in Canadian homes: silverfish vs firebrats vs house centipedes ID, why basements breed them, the 45–50% humidity fix, dehumidifier sizing, sticky-trap monitoring, diatomaceous earth, and the PMRA truth about Dekko packs.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('how-to-get-rid-of-silverfish-canada')

export default function HowToGetRidOfSilverfishCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to eliminating silverfish: species ID, the basement humidity mechanism, dehumidifier-first strategy, sticky-trap monitoring, diatomaceous earth application, and Canadian PMRA context for imported products like Dekko packs.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Silverfish in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Get Rid of Silverfish</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Silverfish don&rsquo;t survive dry air — which makes this one of the few pest problems with a genuine root-cause fix. ID your insect, drop your basement to 45&ndash;50% humidity, and use traps and dust as the supporting cast, not the strategy.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Energy Star 50-pint basement dehumidifier" search="50 pint dehumidifier basement energy star" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of silverfish in Canada, fix the humidity — everything else is secondary. Silverfish need roughly 75&ndash;95% relative humidity to breed, and a dehumidifier holding your basement at 45&ndash;50% RH stops reproduction cold. Add sticky traps along baseboards to monitor progress, a thin film of diatomaceous earth in dry cracks and voids, sealed plastic totes instead of cardboard for paper storage, and caulk plus door sweeps to close entry gaps.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>The humidity lever is the fix: below ~50% RH silverfish eggs desiccate and nymphs fail — no spray required to end the breeding cycle.</li>
              <li>ID first: silver-grey and in cool damp rooms = silverfish; mottled and beside the furnace = firebrats; fast with long legs = house centipedes (a predator that eats silverfish).</li>
              <li>Sticky traps are monitors, not the cure — use them to find hot rooms and confirm the population is falling.</li>
              <li>Diatomaceous earth works on silverfish, but only while dry; in Canada, insecticidal DE should carry a PCP registration number on the label.</li>
              <li>Dekko Silverfish Paks are a US-registered product — check any imported insecticide label for a Canadian PCP number before buying.</li>
              <li>Cardboard boxes are food and shelter in one — moving basement storage into sealed plastic totes removes both.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <div className="not-prose rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Buying the trap line?</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              This page is the plan. The equipment decision is a separate job: <Link href="/blog/best-silverfish-traps-canada" className="text-emerald-700 underline font-semibold">which silverfish trap to buy in Canada</Link> compares flat glue boards against covered stations and the free jar trap, gives the right starting quantity (six to ten, not twenty), maps which trap belongs in which room, and explains how fast adhesive dies in a damp basement so you budget for replacement rather than volume.
            </p>
          </div>

          <SpecialistDisclosure pest="silverfish" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Silverfish Elimination Kit"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Energy Star 50-Pint Basement Dehumidifier',
                why: 'The only tool on this page that attacks the cause instead of the symptom. A 50-pint unit with a built-in humidistat holds a typical Canadian basement at 45–50% RH — the range where silverfish reproduction stops — and doubles as mould and dust-mite prevention.',
                search: '50 pint dehumidifier basement energy star',
                score: 9.3,
                featured: true,
                pros: ['Ends the breeding cycle — the root-cause fix', 'Set-and-forget with humidistat + drain hose', 'Also protects against mould and musty-basement smell'],
                cons: ['The premium purchase on this page', 'Needs emptying unless you rig a floor-drain hose'],
              },
              {
                badge: 'Best for Monitoring',
                name: 'Insect Glue Board Traps (Multi-Pack)',
                why: 'Flat glue monitors along baseboards tell you which rooms are active, whether the dehumidifier is winning, and when you are done — the intelligence layer every silverfish job needs.',
                search: 'silverfish sticky traps insect glue boards',
                score: 8.1,
                pros: ['Cheapest way to find the hot rooms', 'Proof the population is actually falling', 'No chemicals — fine for kids-and-pets households'],
                cons: ['A monitor, not a cure — breeders hide in wall voids', 'Boards fail in dusty or damp spots'],
              },
              {
                badge: 'Best Crack & Crevice',
                name: 'Diatomaceous Earth (Insecticidal, DE Duster)',
                why: 'A thin dust film in cracks, voids, and under appliances dehydrates silverfish on contact — a fitting end for an insect that lives on a moisture knife-edge. Works indefinitely while dry.',
                search: 'diatomaceous earth insect duster',
                score: 7.8,
                pros: ['Kills mechanically — no resistance possible', 'Reaches the wall-void spaces traps can’t', 'A single bag treats the whole house many times over'],
                cons: ['Inert the moment it gets damp', 'Visible piles get walked around — thin films only'],
              },
              {
                badge: 'Best Prevention',
                name: 'Door Sweeps + Silicone Caulk Kit',
                why: 'Silverfish enter under doors and through foundation-level gaps, then commute between rooms along plumbing runs. An afternoon of sweeps and caulk closes the highways — and every gap sealed also saves winter heat.',
                search: 'door sweep silicone caulk gap sealant',
                score: 7.0,
                pros: ['One afternoon of work, permanent payoff', 'Cuts spider and cluster-fly entry too', 'Pays for itself in heating season'],
                cons: ['Won’t reduce an existing indoor population', 'Older foundations need yearly touch-ups'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Only buying one thing?</strong> Make it the <em>Best Overall</em> dehumidifier — it is the sole item here that removes the condition silverfish need to breed, and every other tool works better in the dry room it creates. <strong>Not sure how bad the problem is?</strong> Start with the <em>Best for Monitoring</em> glue boards for a week and let the catch map tell you. <strong>Seeing them emerge from cracks and voids?</strong> Add the <em>Best Crack &amp; Crevice</em> DE duster and treat the gaps a trap can&rsquo;t reach &mdash; full application technique in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide</Link>. <strong>Population already gone?</strong> Spend the money on <em>Best Prevention</em> sealing instead of more product.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Know Your Insect &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Silverfish vs Firebrats vs House Centipedes — Which One Is in Your Basement?</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Three very different insects get reported as &ldquo;silverfish&rdquo; in Canadian homes, and one of them is actually on your side. Thirty seconds of ID changes both where you fight and whether you fight at all.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Insect</th>
                  <th className="px-4 py-3 text-left">Looks like</th>
                  <th className="px-4 py-3 text-left">Where you find it</th>
                  <th className="px-4 py-3 text-left">Threat</th>
                  <th className="px-4 py-3 text-left">What to do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Silverfish<br /><span className="font-normal text-xs text-gray-500">Lepisma saccharinum</span></td>
                  <td className="px-4 py-3 text-gray-700">Uniform silver-grey, teardrop body, three tail bristles, wiggling fish-like run</td>
                  <td className="px-4 py-3 text-gray-700">Cool damp rooms — basements, bathrooms, laundry, storage</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Eats belongings</strong> — paper, photos, books, fabrics</td>
                  <td className="px-4 py-3 text-gray-700">Dehumidify to 45&ndash;50% RH + traps + DE</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Firebrat<br /><span className="font-normal text-xs text-gray-500">Thermobia domestica</span></td>
                  <td className="px-4 py-3 text-gray-700">Same shape, mottled grey-brown, slightly hunched</td>
                  <td className="px-4 py-3 text-gray-700">Hot spots — furnace room, hot water tank, heat ducts, ovens</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Same diet</strong> as silverfish</td>
                  <td className="px-4 py-3 text-gray-700">Same plan, but hunt the utility room</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">House centipede<br /><span className="font-normal text-xs text-gray-500">Scutigera coleoptrata</span></td>
                  <td className="px-4 py-3 text-gray-700">Very fast, 15 pairs of long legs, moves like a ghost across walls</td>
                  <td className="px-4 py-3 text-gray-700">Wherever prey lives — often the same damp rooms</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">None — a predator</strong> that eats silverfish</td>
                  <td className="px-4 py-3 text-gray-700">Leave it; fix the humidity and it leaves too</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">The centipede tell:</strong> house centipedes only stay where there is prey. If you are seeing them regularly, treat it as evidence of a silverfish (or other insect) population worth investigating &mdash; and do not treat the centipedes themselves. Close the buffet and the predator moves on. If the fast-moving ones are what actually bother you, we walk through <Link href="/blog/how-to-get-rid-of-centipedes-canada">why killing the prey clears house centipedes</Link> for good.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Silverfish Control — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['The root-cause fix', 'Hold indoor RH at 45–50% with a dehumidifier — breeding stops'],
                  ['Breeding humidity', 'Silverfish need roughly 75–95% RH to reproduce successfully'],
                  ['What they eat', 'Starches & cellulose: paper, book glue, photos, wallpaper paste, cardboard, fabric sizing'],
                  ['Lifespan', '2–8 years; adults survive months without food — outlasting any wait-them-out plan'],
                  ['Peak season indoors', 'Late summer humidity spike through winter (damage found Oct–Feb)'],
                  ['Best monitoring tool', 'Glue boards along baseboards and in storage-room corners'],
                  ['Best crack treatment', 'Thin film of diatomaceous earth — dry areas only'],
                  ['DE legal note', 'Insecticidal DE in Canada should carry a PCP registration number — check the label'],
                  ['Dekko packs', 'US EPA-registered; no Canadian PCP number on the label = not labelled for use here'],
                  ['Storage upgrade', 'Sealed plastic totes replace cardboard — removes food and shelter at once'],
                  ['Entry sealing', 'Door sweeps + silicone caulk at foundation gaps and plumbing penetrations'],
                  ['House centipedes', 'Predators of silverfish — a sign of prey, not a pest to treat'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>How Do You Actually Get Rid of Silverfish in Canada?</h2>
          <p>By removing the one thing they cannot live without: humid air. That sounds too simple to be the answer, so here is the biology that makes it true. Silverfish are among the most ancient insects on Earth &mdash; they predate flight itself &mdash; and they never evolved the water-tight cuticle that lets beetles or ants cross dry ground. A silverfish is, functionally, an animal that must live inside a humid microclimate at all times: reproduction requires roughly 75&ndash;95% relative humidity, and eggs and nymphs simply desiccate in sustained dry air. Hold a room at 45&ndash;50% RH and you have not made it unpleasant for silverfish; you have made it uninhabitable.</p>
          <p>That is why this guide is structured around a dehumidifier rather than a spray. Insecticides kill the silverfish that walk across them, but the breeding population lives deep in wall voids, under sill plates, and behind built-ins where no consumer treatment reaches &mdash; and with adults living 2&ndash;8 years and surviving months without food, a population you merely trim will refill. Change the air, and every hidden individual is fighting the same losing battle no matter where it hides. Traps become your scoreboard, diatomaceous earth your crack-and-crevice cleanup crew, and sealing your relapse prevention.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the kit:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star">50-pint dehumidifier →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="silverfish sticky traps insect glue boards">Glue board traps →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth insect duster">DE + duster →</BuyLink>
          </div>

          <h2>Why Canadian Basements Are Silverfish Factories</h2>
          <p>A below-grade Canadian basement offers silverfish all three things they need, in one room, year-round. First, moisture: foundation walls stay cool even in July, and when warm humid summer air meets them, relative humidity in the basement air climbs into the 60&ndash;80% range &mdash; you can smell it as mustiness long before you see a silverfish. Second, food: basements are where Canadians store precisely what silverfish eat. Their diet is starch and cellulose &mdash; paper, cardboard, the glue in book bindings, the gelatin coating on old photographs, wallpaper paste, dry pet food, and the starch sizing in stored linens. A wall of cardboard boxes is a warehouse of food that is also housing. Third, harbourage: unfinished ceilings, sill-plate gaps, and the dark undisturbed space behind storage shelves give a nocturnal, light-averse insect everything it wants.</p>
          <p>The seasonal rhythm matters for timing your response. The late-summer humidity spike (right about now, if you are reading this in July or August) powers the year&rsquo;s strongest breeding. Through fall, activity concentrates indoors, and most Canadians discover the problem between October and February &mdash; usually by opening a stored box and finding scraped, notched pages, irregular holes, and pepper-like droppings. The damage pattern is distinctive: silverfish graze surfaces rather than chewing tunnels, so book damage looks like someone sanded the page edges and scraped the cover glue.</p>

          <h2>Step 1 — The Dehumidifier: The Only Purchase That Ends It</h2>
          <p>If you take one action from this page, take this one. A properly sized dehumidifier with a built-in humidistat, set to 45&ndash;50% and left to run, removes the condition silverfish require to exist. There is no behavioural adaptation available to them, no resistance to develop, and no hidden refuge that the ambient air does not eventually reach.</p>
          <p>Sizing and setup, briefly. For a typical Canadian basement, a 50-pint (Energy Star rated) unit is the sweet spot &mdash; smaller 30-pint units are for single rooms, and undersized machines run constantly without ever hitting target. Place it centrally, away from walls, with the humidistat set to 45&ndash;50%; lower buys nothing extra against silverfish and costs more to run. The quality-of-life upgrade that decides whether the machine actually runs all season: a continuous-drain hose to a floor drain, so you are not emptying a bucket every day during the August humidity peak. Verify with a separate inexpensive hygrometer placed across the room &mdash; the machine&rsquo;s own reading is taken at its intake and flatters it. Expect the trap-line catch (step 2) to fall noticeably within four to six weeks of sustained 45&ndash;50% air, and remember the same range is what Health Canada suggests for keeping mould and dust mites in check, so the machine is doing double duty every hour it runs.</p>
          <p>Two supporting moves in the same spirit, both free: run the bathroom exhaust fan during and for twenty minutes after every shower (silverfish in an upstairs bathroom are almost always a ventilation problem, not a basement problem), and fix the slow drips &mdash; a weeping sink trap or sweating cold-water pipe creates a permanent humid pocket no room-level dehumidifier fully drains.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star">Check 50-pint dehumidifiers on Amazon.ca →</BuyLink>
          </div>

          <h2>Step 2 — Sticky Traps: Your Scoreboard, Not Your Strategy</h2>
          <p>Glue boards catch silverfish well &mdash; silverfish run wall edges at night like little commuters, and a flat board tight against the baseboard sits directly in traffic. But their real job is intelligence. Lay a numbered line of boards: basement storage corners, under the laundry sink, behind the toilet, along the furnace-room wall (checking for firebrats), and inside any closet where you have seen one. Check weekly and keep a tally.</p>
          <p>Which board to buy barely matters, and that is worth knowing before you overspend: there is no validated consumer silverfish lure, so you are buying glue area rather than a mechanism, and a &ldquo;silverfish&rdquo; label on the box is a costume. Our <Link href="/blog/best-silverfish-traps-canada">silverfish trap comparison</Link> covers flat boards vs covered stations vs the free tape-wrapped jar trap, and why adhesive dies fastest in exactly the damp, dusty rooms silverfish prefer.</p>
          <p>That tally answers the three questions that actually matter. <em>Where is the population?</em> The hot boards tell you which room gets the DE treatment and the storage overhaul. <em>Is the plan working?</em> The catch curve should bend down within a month of the dehumidifier holding target &mdash; if it does not, find the humid pocket you missed. <em>Are you done?</em> Four consecutive weeks of empty boards is a defensible all-clear. What traps will not do is eliminate the infestation alone: the breeding core lives in voids the boards cannot reach, and a trap line without moisture control is a subscription, not a solution.</p>
          <p>One thing the boards often reveal is a second resident. If your catch includes fast, long-legged arthropods rather than silverfish, you have a predator following the food &mdash; and the fix is the same dehumidifier, not a different can. Our guide to <Link href="/blog/best-centipede-killer-canada">centipede control products in Canada</Link> explains why killing the predator while leaving the silverfish in place makes the room worse, not better.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="silverfish sticky traps insect glue boards">Check glue board multi-packs on Amazon.ca →</BuyLink>
          </div>

          <h2>Step 3 — Diatomaceous Earth: The Crack-and-Crevice Kill</h2>
          <p>Diatomaceous earth is almost poetically suited to silverfish. DE kills by abrading and absorbing the waxy layer that keeps an insect&rsquo;s moisture in &mdash; and silverfish, as we established, are already living on a moisture knife-edge. A silverfish that walks through a DE film dehydrates and dies; no bait acceptance, no resistance mechanism, no expiry while the dust stays dry.</p>
          <p>Application technique decides everything. Use a hand duster to lay a <em>thin, barely visible film</em> &mdash; insects detect and walk around visible piles &mdash; along baseboard cracks, into the gap under the sill plate, behind and under appliances, inside the voids where plumbing enters walls, and across the shelf-to-wall gaps in storage rooms. The catch in a silverfish context is obvious once said aloud: DE only works dry, and silverfish live in damp places. The sequencing fix: let the dehumidifier dry the room first, then dust; and in the meantime, apply only in sheltered dry spots (inside wall voids, under cabinet kick plates) rather than open damp floor.</p>
          <p>One Canadian compliance note before you buy. When DE is sold as an insecticide in Canada, it is a registered pesticide &mdash; the label should carry a PCP (Pest Control Products) registration number, and that label&rsquo;s directions are what govern indoor use. &ldquo;Food-grade&rdquo; DE sold as a feed additive is a different product category without pest-use directions. Check the label for a PCP number rather than taking a listing&rsquo;s word for it. We cover the product-picking details, the food-grade vs pool-grade distinction (pool-grade is genuinely hazardous to breathe &mdash; never use it), and full room-by-room technique in our dedicated <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide for Canada</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth insect duster">Check DE + duster kits on Amazon.ca →</BuyLink>
          </div>

          <h2>The Dekko Question: America&rsquo;s Favourite Silverfish Fix, and the Canadian Catch</h2>
          <p>Spend ten minutes in American silverfish threads and one answer dominates: Dekko Silverfish Paks &mdash; small paper packets of boric acid bait you tuck into closets, bookshelves, and attics and forget for months. They have a devoted following in the US, and the mechanism (silverfish eat the boric-acid-laced paper) targets exactly what silverfish do anyway.</p>
          <p>Here is the part those threads never mention, because it does not apply to their readers. Under Canada&rsquo;s Pest Control Products Act, an insecticide sold or used in Canada must be registered with Health Canada&rsquo;s PMRA and carry a Canadian PCP registration number on its label. Dekko Paks are a US EPA-registered product; before buying them &mdash; or any imported insecticide that shows up cross-listed on Canadian marketplaces &mdash; check the label for a PCP number. No PCP number means the product is not labelled for legal sale and use in Canada, and it means there are no Canadian label directions standing behind how you use it. Marketplace listings routinely blur this line, so the label check, not the listing, is the test.</p>
          <p>The practical takeaway is undramatic: you do not need the grey-market import. The dehumidifier attacks the root cause more completely than any bait, DE covers the crack-and-crevice role, and if you want a registered chemical backstop, look for domestic-class crawling-insect products whose Canadian label lists silverfish &mdash; and then follow that label. A packet that quietly kills some silverfish in a closet was never going to out-perform air they cannot breed in.</p>

          <h2>Step 4 — Starve Them: Paper Storage and Decluttering</h2>
          <p>Every cardboard box in your basement is a silverfish combo meal: the corrugation glue and paper are food, the dark undisturbed interior is shelter, and the box itself wicks and holds moisture from humid air. The single best storage move you can make is unglamorous &mdash; migrate everything you actually want to keep into sealed plastic totes with gasketed lids. Documents, photographs, books, seasonal fabric: into totes. The empty cardboard goes to recycling the same day, because a stack of &ldquo;good boxes for later&rdquo; is a silverfish apartment block. Those same boxes feed a second fabric pest: if the damage is to wool, felt or a stored sweater rather than paper, you are looking at <Link href="/blog/how-to-get-rid-of-carpet-beetles-canada" className="text-brand-700 underline">carpet beetle larvae</Link>.</p>
          <p>While you are at it, do a starch audit of the hot rooms your trap line identified. Dry goods (flour, oats, pasta, pet food) into airtight containers; old wallpaper seams that are lifting get re-glued or stripped, since the paste behind them is a food source; and the bottom shelf of any storage unit gets raised off the floor a few centimetres so air moves and DE films stay effective underneath. None of this kills a single silverfish today &mdash; what it does is convert your basement from a habitat into a corridor, so the survivors of the humidity change have nothing to stay for.</p>

          <h2>Step 5 — Seal the Doors and Gaps</h2>
          <p>Silverfish arrive from outside more often than people assume &mdash; under exterior doors, through weep gaps, along the sill plate, and beside plumbing and cable penetrations &mdash; and once inside they commute between floors along the same runs. An afternoon with a caulk gun and a couple of door sweeps closes the highways: silicone caulk on foundation-level cracks and utility penetrations, sweeps on exterior and garage-entry doors, and weatherstripping where daylight shows around frames. In a Canadian house every one of those seals is also a heat-loss fix, which makes this the rare pest-control task with a payback in dollars regardless of insects. The same exclusion pass does double duty against the fall home-invader crowd &mdash; the technique overlaps almost completely with what we recommend for <Link href="/blog/how-to-keep-spiders-out-of-your-house">keeping spiders out</Link> and dealing with <Link href="/blog/how-to-get-rid-of-cluster-flies-canada">cluster flies</Link>, both of which exploit the identical gaps every October &mdash; as do <Link href="/blog/how-to-get-rid-of-boxelder-bugs-canada">the red-and-black bugs massing on your south wall</Link>, where the caulking deadline is late August rather than fall.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="door sweep silicone caulk gap sealant">Check door sweeps and sealant on Amazon.ca →</BuyLink>
          </div>

          <h2>When to Call a Professional Instead</h2>
          <p>Silverfish are one of the most DIY-solvable pests in a Canadian house, because the root cause is environmental and the tools are hardware-store items. Escalate to a licensed pro in three situations: silverfish emerging on multiple floors in numbers despite six-plus weeks at 45&ndash;50% RH (suggesting a structural moisture source &mdash; a hidden leak, a wet wall assembly &mdash; that needs finding, and possibly a contractor before an exterminator); valuable collections at stake, like a serious library, archives, or artwork, where you want targeted treatment rather than trial and error; or a rental or condo situation where the humidity source is in a unit you do not control. If you do bring in a pro, our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> covers what general-pest interior work typically runs so you can sanity-check the quote &mdash; and be appropriately suspicious of anyone proposing a spray program with no mention of moisture.</p>

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

          <h2>Related Household Pest Guides</h2>
          <ul>
            <li><Link href="/blog/best-silverfish-traps-canada">Best Silverfish Traps in Canada — Glue Boards, Covered Stations &amp; the Jar Trap</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada — Buyer&rsquo;s Guide and Application Technique</Link></li>
            <li><Link href="/blog/how-to-keep-spiders-out-of-your-house">How to Keep Spiders Out of Your House</Link></li>
            <li><Link href="/blog/best-spider-spray-canada">Best Spider Spray Canada — PMRA-Registered Options</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cluster-flies-canada">How to Get Rid of Cluster Flies in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cockroaches-canada">How to Get Rid of Cockroaches in Canada</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada — What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="household pests" />
      </article>
    </>
  )
}
