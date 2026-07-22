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

const SLUG = 'best-wasp-nest-spray-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'Best Wasp Nest Spray Canada 2026 — PMRA-Legal Foams & Jets Compared'
const META_TITLE = 'Best Wasp Nest Spray Canada 2026: PMRA-Legal Foams & Jets'

const FAQS = [
  {
    question: 'What is the best wasp nest spray in Canada?',
    answer: 'For most Canadian homeowners, a foaming aerosol like Raid Wasp & Hornet Bug Killer is the best wasp nest spray: the foam expands over the nest entrance, traps returning workers, and keeps killing wasps that crawl through it. Wilson WaspOut is the strongest pure-foam alternative — its expanding blanket is especially good on visible paper nests under eaves and deck rails. If the nest is high up and reach matters more than coverage, a long-jet formula such as an Ortho Home Defense hornet and wasp aerosol trades foam blanketing for a straighter, farther stream. Whichever can you pick up, confirm it shows a Canadian PCP registration number on the label — that is the marker of a Health Canada (PMRA) registered product.',
  },
  {
    question: 'Is Spectracide wasp spray legal in Canada?',
    answer: 'The Spectracide Wasp & Hornet Killer famous for its "up to 27 foot" jet claim is a US product registered with the US EPA, not with Health Canada\'s PMRA. Under Canada\'s Pest Control Products Act, it is illegal to import, sell, or use a pesticide in Canada unless it is registered here, so a US-labelled can bought across the border or from a cross-listing marketplace seller is grey-market — using it in your backyard is technically an offence, and you lose all the protections of a Canadian label reviewed for Canadian use. Buy a can with a PCP number instead; Canadian-registered foams and jets handle the same nests.',
  },
  {
    question: 'What does the PCP registration number on a wasp spray mean?',
    answer: 'Every legal domestic-class pesticide in Canada must be registered with Health Canada\'s Pest Management Regulatory Agency (PMRA) and carry a Pest Control Products (PCP) registration number printed on the label — usually a 5-digit number after the words "Registration No." or "PCP No." It means the exact formulation, concentration, and label directions were reviewed for safety and efficacy under Canadian conditions, and that the directions on the can are the legally binding way to use it. No PCP number on the can means the product is not legal to sell or use in Canada, no matter how familiar the brand looks.',
  },
  {
    question: 'Foam or jet wasp spray — which is better?',
    answer: 'Foam is better for most nests; jet is better for pure reach. A foaming spray expands over the nest and its entrance hole, physically trapping wasps inside while the insecticide works, and it clings to the paper envelope so returning foragers walk through treated foam for hours. That makes foam the pick for eave nests, deck-rail nests, shed corners, and wall-void entrances. A jet formula throws a narrower, straighter stream farther, which helps on second-storey soffits — but it runs off vertical surfaces faster and leaves less residual at the entrance. If you only buy one can, buy foam.',
  },
  {
    question: 'When is the best time of day to spray a wasp nest?',
    answer: 'At dusk, or in the half-hour before sunrise. Nearly the entire colony — including the queen — is inside the nest at night, and wasps are sluggish in the cooler, darker conditions, so you kill the maximum number with one application and face the fewest defenders. Avoid spraying in the middle of a warm day when hundreds of foragers are out; they will return to a disturbed, defensive nest. If you must use light at dusk, use a flashlight covered with red cellophane or set to the side, not aimed at the entrance — wasps orient to white light.',
  },
  {
    question: 'How far away should I stand when spraying a wasp nest?',
    answer: 'As far as your can\'s jet genuinely reaches — check the distance printed on the Canadian label and use most of it. Canadian-registered wasp aerosols typically throw a stream roughly 2 to 6.7 metres depending on the formula, so plan to stand several metres back, never directly underneath the nest, with a clear escape path behind you. The seductive 8-metre-plus (27-foot) claims belong to US grey-market cans; you do not need them. Standoff distance is really about angle and exit: stand upwind, slightly to the side of the flight path, soak the entrance first, and walk — do not run — away immediately after.',
  },
  {
    question: 'How long does wasp spray take to kill the nest?',
    answer: 'Wasps hit directly by a registered foam or jet are knocked down in seconds to minutes, but the colony is not the wasps you can see — it is the workers out foraging and the brood inside the comb. Expect stragglers returning for 24 to 48 hours; treated foam at the entrance kills most of them as they land. Watch the nest from a distance the next evening: if you still see steady traffic, apply a second treatment at dusk. Only remove a nest once you have seen zero activity for a full warm day.',
  },
  {
    question: 'Can I spray a wasp nest inside a wall or behind siding?',
    answer: 'You can treat the entrance hole with foam at dusk, but wall-void nests are the one scenario where DIY spray most often goes wrong. The critical rule: never seal the hole right after spraying. If survivors are trapped inside the void, yellowjackets will chew through drywall and emerge inside the house — a genuinely bad day. Treat the entrance, leave it open, confirm zero traffic over several days, and only then seal. If the entrance is high, the void is large, or you have already seen wasps indoors, this is the nest to hand to a licensed structural exterminator rather than a spray can.',
  },
  {
    question: 'What about yellowjacket nests in the ground?',
    answer: 'Ground-nesting yellowjackets need a different playbook than a hanging paper nest. You can apply a registered foam directly into the burrow entrance at dusk — foam is much better than a jet here because it expands down the tunnel — but ground colonies are often larger than they look, frequently have a second exit, and are responsible for most multi-sting incidents in Canadian yards. We cover the full approach, including when trapping and when professional treatment makes more sense, in our dedicated guide to getting rid of ground wasps in Canada.',
  },
  {
    question: 'Are wasp nest sprays safe around kids and pets?',
    answer: 'Canadian-registered wasp aerosols use pyrethroid insecticides that are low-toxicity to humans and pets at label rates, but the label directions are the law and the safety margin. Keep children and pets indoors during application and until any drips or foam have dried, do not spray onto vegetable gardens, toys, play structures, or pet bowls, and never apply near an open window or air intake. Overspray is the main hazard path in practice: spray at dusk with a steady jet aimed at the nest entrance, not fogged across the yard. Wear long sleeves, pants, closed shoes, and eye protection — that is as much about stings as chemistry.',
  },
  {
    question: 'What if the nest is too high to reach, or I am allergic to stings?',
    answer: 'Do not improvise. Standing on a ladder at dusk while angry wasps pour out of a nest above your head is how emergency-room visits happen, and if you have any history of systemic reaction to stings — swelling beyond the sting site, hives, breathing trouble — DIY nest treatment is off the table entirely. A licensed exterminator with a telescoping duster or injection equipment handles a high or awkward nest in minutes; typical Canadian pricing for a single wasp nest treatment is covered in our pest control cost guide. Removal is cheap compared to anaphylaxis.',
  },
  {
    question: 'Do home remedies like dish soap or WD-40 kill wasp nests?',
    answer: 'Soapy water does kill individual wasps by wetting through their cuticle, and internet lore is full of WD-40, gasoline, and boiling-water "solutions." All of them fail the two tests that matter: they have no residual to kill the returning foragers, and they force you dangerously close to the nest to deliver enough volume. Gasoline is an environmental contaminant and fire hazard; boiling water on a ground nest scalds the first few centimetres and enrages the rest. Also worth knowing: spraying anything not registered as a pesticide to kill pests is itself contrary to the Pest Control Products Act. A registered foam can is inexpensive, reaches from metres away, and keeps killing at the entrance for hours — use the tool designed for the job.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'The best PMRA-registered wasp nest sprays in Canada for 2026: Raid Wasp & Hornet Bug Killer, Wilson WaspOut foam, and long-reach jets compared — foam vs jet, dusk application, safe standoff distance, and why US 27-foot sprays are grey-market here.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function BestWaspNestSprayCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'An independent Canadian comparison of PMRA-registered wasp nest sprays — foam vs jet formats, safe application technique, and the grey-market US products to avoid.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Wasp Nest Spray Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Wasp Nest Spray Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Foam vs jet wasp killers compared for Canadian homes &mdash; which PMRA-registered cans actually work, exactly how and when to spray a nest safely, and why the famous US &ldquo;27-foot&rdquo; sprays are grey-market here.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar name="Raid Wasp & Hornet Bug Killer (foaming aerosol)" search="raid wasp hornet killer" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best wasp nest spray for most Canadian homes is a PMRA-registered foaming aerosol like Raid Wasp &amp; Hornet Bug Killer &mdash; the foam blankets the nest entrance, traps returning workers, and keeps killing for hours. Wilson WaspOut is the strongest pure-foam alternative, and a long-jet Ortho Home Defense hornet and wasp aerosol is the pick when reach matters more than coverage. Spray at dusk, from the far end of the jet&rsquo;s reach, and always check the can for a Canadian PCP registration number.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Legal wasp sprays in Canada carry a PCP registration number from Health Canada&rsquo;s PMRA &mdash; no number on the can, not legal to sell or use here.</li>
              <li>US products like Spectracide&rsquo;s &ldquo;27-foot&rdquo; jet are EPA-registered, not PMRA-registered &mdash; importing or using them in Canada is grey-market and an offence under the Pest Control Products Act.</li>
              <li>Foam beats jet for most nests: it expands over the entrance and kills returning foragers for hours; jets win only on second-storey reach.</li>
              <li>Spray at dusk or pre-dawn when the whole colony (queen included) is inside and sluggish.</li>
              <li>Stand at the far end of your can&rsquo;s rated reach &mdash; Canadian jets typically throw roughly 2&ndash;6.7 metres &mdash; never directly under the nest, with an escape path planned.</li>
              <li>Never seal a wall-void nest entrance right after spraying: trapped survivors can chew through drywall into the house.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="wasps" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow
            heading="Our Picks — Best Wasp Nest Sprays in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Raid Wasp & Hornet Bug Killer (foam)',
                why: 'The Canadian benchmark: a foaming aerosol that blankets the nest and entrance, knocks wasps down on contact, and keeps killing returning foragers as they crawl through the residue. Widely stocked and inexpensive enough to keep a backup can.',
                search: 'raid wasp hornet killer',
                score: 9.0,
                featured: true,
                pros: ['Foam traps wasps at the entrance', 'Residual kills returning foragers', 'Sold at nearly every Canadian retailer'],
                cons: ['Moderate jet reach — not for high soffits', 'Foam can drip on vertical surfaces'],
              },
              {
                badge: 'Best Foam Blanket',
                name: 'Wilson WaspOut Wasp & Hornet Foam',
                why: 'A Canadian-brand expanding foam that smothers the whole nest envelope — the best choice for visible paper nests on eaves, deck rails, and shed corners, and for pushing foam into ground-nest and void entrances.',
                search: 'wilson waspout wasp hornet foam',
                score: 8.6,
                pros: ['Expanding foam coats the full nest', 'Excellent for burrow and void entrances', 'Canadian brand, PMRA-registered line'],
                cons: ['Shorter throw than jet formulas', 'Budget-priced but uses product fast'],
              },
              {
                badge: 'Best Long Reach',
                name: 'Ortho Home Defense Hornet & Wasp Jet',
                why: 'The straight-stream pick when the nest is up a second-storey soffit and you want maximum distance between you and the colony. Less residual blanketing than foam, but the safest option for high aerial nests you can hit from the ground.',
                search: 'ortho home defense hornet wasp killer',
                score: 8.1,
                pros: ['Longest reach of the Canadian picks', 'Keeps you off the ladder', 'Fast contact knockdown'],
                cons: ['Stream runs off — thinner residual', 'Overkill for low, reachable nests'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Typical eave, deck, or shed nest?</strong> The <em>Best Overall</em> Raid foam does everything well and is the one can to own. <strong>Big exposed paper nest or a burrow entrance?</strong> The <em>Best Foam Blanket</em> WaspOut&rsquo;s expanding foam smothers it most completely. <strong>Nest two storeys up?</strong> The <em>Best Long Reach</em> jet keeps your feet on the ground &mdash; and if you cannot reach it safely from the ground at all, that is a job for a licensed pro, not a taller ladder. Whichever you buy, check for the PCP number on the label before checkout.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Formats Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Foam vs Jet vs Grey-Market: What Each Can Actually Does</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Every wasp spray on a Canadian shelf is one of two formats &mdash; foam or jet &mdash; and every can in a cross-border trunk is a third category you should not touch. Here is the honest breakdown, with a live Amazon.ca price check for the legal picks.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Format</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Canada status</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Foaming aerosol<br /><span className="font-normal text-xs text-gray-500">Raid Wasp &amp; Hornet</span></td>
                  <td className="px-4 py-3 text-gray-700">Expanding foam blankets nest + entrance; residual kills returning foragers for hours</td>
                  <td className="px-4 py-3 text-gray-700">Eaves, deck rails, sheds, most nests</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Legal</strong> &mdash; PCP-registered</td>
                  <td className="px-4 py-3"><BuyLink search="raid wasp hornet killer" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Expanding foam<br /><span className="font-normal text-xs text-gray-500">Wilson WaspOut</span></td>
                  <td className="px-4 py-3 text-gray-700">Heavier foam smothers the full nest envelope; ideal pushed into burrow and void entrances</td>
                  <td className="px-4 py-3 text-gray-700">Exposed paper nests, ground &amp; void entrances</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Legal</strong> &mdash; PCP-registered</td>
                  <td className="px-4 py-3"><BuyLink search="wilson waspout wasp hornet foam" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Long jet<br /><span className="font-normal text-xs text-gray-500">Ortho Home Defense</span></td>
                  <td className="px-4 py-3 text-gray-700">Narrow straight stream for maximum distance; fast knockdown, thinner residual</td>
                  <td className="px-4 py-3 text-gray-700">High soffits and second-storey nests</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Legal</strong> &mdash; PCP-registered</td>
                  <td className="px-4 py-3"><BuyLink search="ortho home defense hornet wasp killer" block>Check price →</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">US grey-market<br /><span className="font-normal text-xs text-gray-500">Spectracide &ldquo;27 ft&rdquo;, Hot Shot</span></td>
                  <td className="px-4 py-3 text-gray-700">EPA-registered for the US only; no PCP number, no Canadian label review</td>
                  <td className="px-4 py-3 text-gray-700">Nothing in Canada</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Not legal</strong> to import, sell, or use</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Not linked &mdash; do not buy</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Canadian-registered wasp aerosols typically run $8&ndash;$18 per can at Canadian Tire, Home Depot Canada, and hardware stores as of July 2026 &mdash; cheap enough that there is no economic case for a grey-market can, let alone a legal one.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ The 27-foot spray is a trap.</strong> The distance claim that makes US cans tempting is exactly the part you do not need: Canadian jets already reach the nests you can safely treat yourself. A nest beyond a Canadian can&rsquo;s reach is a nest beyond safe DIY &mdash; that is ladder-plus-angry-colony territory, and a licensed exterminator clears it in minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Wasp Nest Spray Buying — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best format for most nests', 'Foaming aerosol — blankets the entrance, hours of residual'],
                  ['Best format for high nests', 'Long-jet stream (keeps you off the ladder)'],
                  ['Legality marker', 'PCP registration number printed on the can (Health Canada / PMRA)'],
                  ['Grey-market examples to avoid', 'US-labelled Spectracide, Hot Shot, Raid Wasp & Hornet Killer 33'],
                  ['Best time to spray', 'Dusk or pre-dawn — whole colony home, wasps sluggish'],
                  ['Standoff distance', 'Far end of the can’s rated reach — roughly 2–6.7 m for Canadian jets'],
                  ['Time to full colony kill', '24–48 hours including returning foragers; re-treat if traffic persists'],
                  ['Wall-void rule', 'Treat the entrance, never seal it until activity is zero for days'],
                  ['Ground nests', 'Foam into the burrow at dusk — see the ground wasp guide'],
                  ['Peak season in Canada', 'July–September, when colonies hit maximum size and aggression'],
                  ['Typical Canadian retail price', '$8–$18 per can (Canadian Tire, Home Depot, hardware stores)'],
                  ['When to call a pro instead', 'High nests, wall voids with indoor sightings, or any sting allergy'],
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

          <h2>What Makes a Wasp Spray Legal in Canada? (Start Here)</h2>
          <p>Before comparing foam patterns and jet distances, the question almost nobody asks: is the can in your hand legal to use in Canada at all? Every pesticide sold for home use here must be registered with Health Canada&rsquo;s <strong>Pest Management Regulatory Agency (PMRA)</strong> and must display a <strong>PCP registration number</strong> on the label &mdash; usually a five-digit number after &ldquo;Registration No.&rdquo; That number means the exact formulation and its label directions were reviewed for Canadian use, and it makes the label legally binding: the directions on a Canadian can are not suggestions, they are the law of how the product may be applied.</p>
          <p>This matters for wasp sprays specifically because the most famous wasp sprays on the internet are American. Spectracide Wasp &amp; Hornet Killer &mdash; the one with the &ldquo;up to 27 foot&rdquo; jet claim that dominates US reviews &mdash; is registered with the US EPA, not the PMRA. So are US-labelled Hot Shot aerosols and the US formulation sold as Raid Wasp &amp; Hornet Killer 33, which is not the same registered product as the Canadian Raid can. Under the federal <em>Pest Control Products Act</em>, importing, selling, or using an unregistered pesticide in Canada is an offence. A can that crossed the border in a trunk, or shipped from a third-party marketplace seller who does not filter by country, is grey-market &mdash; and every product recommendation below is a Canadian-registered alternative that makes the grey-market can pointless anyway.</p>
          <p>One practical habit solves all of this: <strong>flip the can over and find the PCP number before you buy.</strong> Brand names migrate across the border; registration numbers do not.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the three picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="raid wasp hornet killer">Raid Wasp &amp; Hornet foam →</BuyLink>
            <BuyLink search="wilson waspout wasp hornet foam">Wilson WaspOut foam →</BuyLink>
            <BuyLink search="ortho home defense hornet wasp killer">Ortho long-reach jet →</BuyLink>
          </div>

          <h2>Why Foam Wins for Most Canadian Wasp Nests</h2>
          <p>A wasp colony is not the dozen wasps you can see on the nest &mdash; it is several hundred to several thousand insects, a laying queen, comb full of brood, and a rotating shift of foragers who are out hunting when you attack. A spray only ends the problem if it handles all four, and this is exactly where format matters.</p>
          <p><strong>Foaming aerosols</strong> like the Canadian Raid Wasp &amp; Hornet Bug Killer expand on contact into a wet blanket that does three jobs at once: it knocks down the wasps it touches, it physically plugs and coats the nest entrance so wasps inside struggle to boil out at you, and it leaves a treated barrier that returning foragers must crawl through for hours afterward. That third job is the quiet killer &mdash; the foragers who were out at spray time come home overnight, land on the entrance, and pick up a lethal dose. The active ingredients in Canadian-registered cans are typically fast-knockdown pyrethroids (the tetramethrin/d-phenothrin family), which are exactly what you want here: seconds-fast on contact, low toxicity to mammals at label rates, and short-lived in the environment.</p>
          <p><strong>Wilson&rsquo;s WaspOut foam</strong> takes the same idea further with a heavier expanding foam that can smother an entire exposed paper nest &mdash; the classic grey football under a deck rail or soffit &mdash; and that pushes usefully into holes: a ground-nest burrow, a gap behind siding, a fencepost cavity. If your nest is a visible envelope or an entrance hole rather than open comb, WaspOut&rsquo;s foam coverage is the most complete of the picks.</p>
          <p><strong>Long-jet formulas</strong> like the Ortho Home Defense hornet and wasp aerosol trade the blanket for a narrow, straighter stream that throws farther. On a second-storey soffit nest, that reach is the difference between treating from your lawn and climbing a ladder at dusk &mdash; and staying off the ladder is worth more than any residual. The trade-off is real, though: streams run off vertical surfaces, so a jet-treated nest more often needs a second application the next evening.</p>
          <div className="not-prose my-4">
            <BuyLink search="raid wasp hornet killer">Check Raid Wasp &amp; Hornet foam on Amazon.ca →</BuyLink>
          </div>

          <h2>How to Spray a Wasp Nest Safely (The Full Technique)</h2>
          <p>Wasp spray injuries are almost never about the chemical &mdash; they are about stings, falls, and panic. The technique below is how licensed technicians think about a nest, scaled to a consumer can:</p>
          <ul>
            <li><strong>Go at dusk, or just before sunrise.</strong> The entire colony &mdash; queen included &mdash; is home, temperatures are lower, and wasps are sluggish and reluctant to fly in the dark. A mid-day attack kills the wasps present and leaves hundreds of foragers to return to a furious nest.</li>
            <li><strong>Dress for it.</strong> Long sleeves, long pants, closed shoes, snug cuffs, eye protection. Skip the cologne and skip loose clothing wasps can get inside.</li>
            <li><strong>Plan the exit before the first press.</strong> Know exactly which direction you will walk &mdash; not run &mdash; and make sure the path is clear of hoses, toys, and patio furniture you will not see in low light.</li>
            <li><strong>Stand at distance, upwind, never underneath.</strong> Use the far end of your can&rsquo;s rated reach &mdash; Canadian jets typically throw roughly 2 to 6.7 metres depending on the formula &mdash; positioned slightly to the side of the entrance&rsquo;s flight line. Directly below a treated nest is where dying, dropping, still-stinging wasps land.</li>
            <li><strong>Soak the entrance first, then the envelope.</strong> The entrance hole is where defenders emerge; plug it with foam in the first second of spraying, then coat the rest of the nest until it is visibly saturated.</li>
            <li><strong>Leave. Do not linger to admire the work.</strong> Walk your planned exit immediately and give the nest 24 hours.</li>
            <li><strong>Re-check the next evening.</strong> Steady traffic at the entrance means a second dusk treatment. Zero activity across a full warm day means you can knock the nest down and bag it &mdash; wearing gloves, because residue and the odd surviving wasp are both possible.</li>
          </ul>
          <p>Two hard rules sit on top of all technique. First, <strong>never treat a nest from a ladder at dusk</strong> &mdash; if you cannot hit it with both feet on the ground, it is a professional&rsquo;s nest. Second, <strong>never seal a wall-void entrance right after spraying.</strong> Yellowjackets trapped in a void will look for another way out, and the other way out is frequently through your drywall into a bedroom. Treat, wait days for zero activity, then seal.</p>

          <h2>Ground Nests, Wall Voids, and Other Special Cases</h2>
          <p>The hanging paper nest is the easy case. The two nests that generate most Canadian sting incidents need their own handling:</p>
          <p><strong>Ground-nesting yellowjackets</strong> &mdash; the colony living down a hole in the lawn or under a shed slab &mdash; are meaner, bigger than they look, and often have a second exit. Expanding foam into the burrow at dusk is the right DIY tool, but placement, timing, and knowing when to stop matter enough that we wrote a dedicated playbook: see our guide to <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">getting rid of ground wasps in Canada</Link>.</p>
          <p><strong>Wall and roof voids</strong> deserve real caution. If wasps are entering a gap in siding or soffit and you have seen even one wasp <em>inside</em> the house, the colony may already be near the interior finish &mdash; spraying the entrance can push survivors inward. That specific scenario, plus any nest you cannot reach from the ground and any household member with a sting allergy, is where a licensed structural exterminator earns the fee. Typical single-nest treatment pricing across Canada is broken down in our <Link href="/pest-control-cost-canada">pest control cost guide</Link>.</p>
          <p>And remember that killing this nest is not wasp-proofing the yard. Nests you destroy in July were founded by queens in May; next spring brings new queens. Reducing attractants and intercepting foragers is a separate job &mdash; our guides to the <Link href="/blog/best-wasp-trap-canada">best wasp traps in Canada</Link> and the <Link href="/blog/best-yellow-jacket-trap-canada">best yellowjacket traps</Link> cover the trapping half, and the full-season strategy lives in <Link href="/blog/how-to-get-rid-of-wasps-canada">how to get rid of wasps in Canada</Link>.</p>

          <h2>Timing: Why July and August Nests Are a Different Animal</h2>
          <p>A wasp nest in late May is a golf ball with one queen and a handful of workers &mdash; a single foam treatment ends it in one evening with almost no risk. The same nest in mid-August is a football or bigger holding hundreds to thousands of workers with brood to defend, and late-season colonies get progressively more aggressive as natural food declines. The practical takeaways: treat nests as early in the season as you find them; expect a large August nest to need the full technique above and possibly a second application; and weigh the pro option more heavily as the season wears on. By late September in most of Canada, frost is weeks from solving the problem for free &mdash; a distant, high, out-of-the-way October nest can often simply be left to die, since abandoned nests are not reused next year.</p>

          <h2>What Not to Use</h2>
          <p>For completeness, the popular non-answers. <strong>Gasoline</strong> poured into ground nests contaminates soil, creates a fire risk, and is illegal pesticide use. <strong>Boiling water</strong> scalds the top of a burrow and enrages the surviving 90% of the colony. <strong>Dish-soap sprays</strong> kill the individual wasps they drench but leave no residual for returning foragers and force you within arm&rsquo;s reach of the nest. <strong>WD-40</strong> is a solvent myth with the same fatal flaws. Beyond being ineffective, applying any substance as a pesticide that is not registered for that use is itself contrary to the <em>Pest Control Products Act</em> &mdash; the same law that keeps the grey-market cans out. A registered foam can costs less than a pizza and does the job from metres away; there is no scenario where the improvised option is the smart one.</p>
          <div className="not-prose my-4">
            <BuyLink search="wilson waspout wasp hornet foam">Check Wilson WaspOut foam on Amazon.ca →</BuyLink>
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

          <h2>Related Wasp Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-get-rid-of-wasps-canada">How to Get Rid of Wasps in Canada &mdash; Full Playbook</Link></li>
            <li><Link href="/blog/best-wasp-trap-canada">Best Wasp Trap Canada &mdash; Intercept the Foragers</Link></li>
            <li><Link href="/blog/best-yellow-jacket-trap-canada">Best Yellowjacket Trap Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-ground-wasps-canada">How to Get Rid of Ground Wasps in Canada</Link></li>
            <li><Link href="/blog/rescue-why-trap-review-canada">RESCUE! WHY Trap Review &mdash; Canada</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost in Canada &mdash; What a Wasp Nest Treatment Runs</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
