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
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'diatomaceous-earth-canada-buyers-guide'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'Diatomaceous Earth Canada 2026 — Buyer\'s Guide to PMRA-Registered DE'

const FAQS = [
  {
    question: 'What is the best diatomaceous earth to buy in Canada?',
    answer: 'Safer\'s Diatomaceous Earth insect killer is the best DE for most Canadian households — it is PMRA-registered as a domestic-class insecticide, which means the label legally covers indoor crawling-insect use and tells you exactly where and how to apply it. Knock Down diatomaceous earth and Doktor Doom Be Green crawling insect killer are equally legitimate PMRA-registered alternatives if Safer\'s is out of stock. Whichever you buy, add a bulb duster — a thin, barely visible film is what kills, and you cannot achieve one from the bag.',
  },
  {
    question: 'Is food-grade diatomaceous earth legal to use as a pesticide in Canada?',
    answer: 'No. In Canada, the Pest Control Products Act requires that anything used to control pests be registered with Health Canada\'s PMRA and applied according to its label. Food-grade DE is sold as an anti-caking agent or animal feed additive — it carries no pesticide registration, no PCP number, and no legal application directions. Using it against bed bugs or ants is off-label use of an unregistered product, and registered insecticidal DE costs only a few dollars more.',
  },
  {
    question: 'How long does diatomaceous earth take to kill insects?',
    answer: 'Roughly 24–72 hours after adequate contact for most crawling insects — DE is a desiccant, not a knockdown poison. The powder absorbs and abrades the waxy lipid layer on the insect\'s exoskeleton, and the insect then dies of dehydration over the following days. Bed bugs, which are unusually tolerant of dehydration, can take 7–10 days of repeated exposure — if you need something dead on contact, DE is the wrong tool.',
  },
  {
    question: 'Does diatomaceous earth expire?',
    answer: 'No. Diatomaceous earth is fossilized silica — a mineral, not a chemical that degrades. A deposit stays lethal indefinitely as long as it remains dry and undisturbed, and a sealed bag stored in a dry place is effectively good forever. What does "expire" is a treated surface: moisture, vacuuming, or foot traffic remove the film — which is why cracks and voids hold up so much better than open floors.',
  },
  {
    question: 'Is diatomaceous earth safe around kids and pets?',
    answer: 'Registered insecticidal DE is amorphous silica with very low acute toxicity — it is one of the lower-risk insecticides a Canadian homeowner can use, which is part of why the PMRA registers it for domestic-class sale. The two real cautions: avoid breathing the dust during application (wear a mask; the fine powder is a respiratory irritant for humans and pets alike), and apply it into cracks, voids, and inaccessible spots rather than as open piles a toddler or dog can disturb.',
  },
  {
    question: 'Can I use pool-grade or filter-grade diatomaceous earth for insects?',
    answer: 'Never. Pool-grade DE has been calcined — heated to high temperature — which converts much of its amorphous silica into crystalline silica, a serious respiratory hazard associated with silicosis. It is also less effective against insects because calcining reduces the powder\'s absorptive capacity. Pool-grade DE belongs in a pool filter and nowhere else. Buy a PMRA-registered insecticidal DE such as Safer\'s, Knock Down, or Doktor Doom Be Green instead.',
  },
  {
    question: 'Does diatomaceous earth kill bed bugs?',
    answer: 'Yes, but slowly and only as a supporting layer. Lab and field studies show bed bugs exposed to DE die of desiccation over roughly 7–10 days, and some bed bugs partially avoid heavy visible deposits — another reason thin films matter. DE\'s real role in a bed bug program is as a long-lasting residual in cracks, voids, and bed-frame joints that catches stragglers, layered under a program of steam, mattress encasements, and interceptor traps. Our dedicated diatomaceous earth for bed bugs guide covers exact placement.',
  },
  {
    question: 'Why is my diatomaceous earth not working?',
    answer: 'The four usual reasons: it was applied too thick (insects walk around visible piles — you want a film you can barely see), it got damp (humidity above about 75% RH or any water contact neutralizes it), it is in the wrong place (DE only kills insects that walk through it, so it must sit in runways, cracks, and harbourages), or you have not waited long enough (24–72 hours per insect, longer for bed bugs).',
  },
  {
    question: 'Does diatomaceous earth work outdoors in Canada?',
    answer: 'Poorly. A single rain or even heavy morning dew neutralizes an outdoor DE application, and Canadian summers rarely offer the sustained dry stretch DE needs. It can help in genuinely protected spots — under a dry deck, inside a shed wall void — but broadcast lawn or garden treatment washes out almost immediately. Treat outdoor DE as a sheltered-spots-only tool and reapply after any moisture.',
  },
  {
    question: 'What insects does diatomaceous earth kill?',
    answer: 'Crawling insects that walk through the deposit: bed bugs, cockroaches, ants, silverfish, fleas (larvae in carpets especially), earwigs, sowbugs, and millipedes are the ones Canadian labels typically list. It does nothing against flying insects that never contact the powder — mosquitoes, wasps, and flies are outside its lane — and it is slow against anything, so it pairs best with faster methods rather than replacing them.',
  },
  {
    question: 'Is silica gel dust like CimeXa better than diatomaceous earth?',
    answer: 'In US lab studies, silica gel dusts such as CimeXa kill bed bugs faster than DE — but CimeXa is a US EPA registration with no Canadian domestic-class equivalent, so it is grey-market here: importing or using an unregistered pesticide violates the Pest Control Products Act, and cross-border listings ship with US-only labels. In Canada the practical answer is a registered DE (Safer\'s, Knock Down, or Doktor Doom Be Green) applied correctly with a duster — correct placement closes most of the speed gap.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Which diatomaceous earth is actually PMRA-registered in Canada (Safer\'s, Knock Down, Doktor Doom Be Green), how DE kills by desiccation in 24–72 hours, where it works and fails, and why the US food-grade-DE-as-pesticide advice is off-label here. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('diatomaceous-earth-canada-buyers-guide')

export default function DiatomaceousEarthCanadaBuyersGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian buyer\'s guide to diatomaceous earth: PMRA-registered insecticidal DE products, how desiccant dusts work, correct application, and why food-grade DE is not a legal pesticide in Canada.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Diatomaceous Earth Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Diatomaceous Earth Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Which DE products are actually PMRA-registered as insecticides in Canada, how desiccant dust really works, where it fails, and why the American &ldquo;just buy food-grade&rdquo; advice doesn&rsquo;t transfer across the border.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Safer's Diatomaceous Earth insect killer" search="safers diatomaceous earth" label="Our top pick" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best diatomaceous earth for Canadian homes is Safer&rsquo;s Diatomaceous Earth insect killer — it is PMRA-registered as a domestic-class insecticide, so the label legally covers indoor use against bed bugs, ants, cockroaches, and other crawling insects. Knock Down and Doktor Doom Be Green are the two registered alternatives. Skip the US food-grade workaround: in Canada, using an unregistered product as a pesticide is off-label under the Pest Control Products Act.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>DE kills by desiccation, not poisoning — most crawling insects die 24–72 hours after walking through a deposit; bed bugs can take 7–10 days.</li>
              <li>Only three widely stocked consumer DE brands carry PMRA registration in Canada: Safer&rsquo;s, Knock Down, and Doktor Doom Be Green.</li>
              <li>DE only works dry — humidity above roughly 75% RH or any water contact neutralizes the deposit until it fully dries out.</li>
              <li>A correctly applied film is barely visible; insects detect and walk around visible piles, which is the #1 application mistake.</li>
              <li>A dry, undisturbed crack-and-crevice deposit keeps killing for months; DE is a mineral and never expires in the bag.</li>
              <li>Pool-grade (calcined) DE is a crystalline-silica respiratory hazard and must never be used for insect control.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="crawling insects" />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — PMRA-Registered Diatomaceous Earth in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Safer’s Diatomaceous Earth',
                why: 'The most widely stocked PMRA-registered domestic-class DE in Canada. Its label legally covers indoor crawling-insect use, so you get tested directions instead of internet folklore.',
                search: 'safers diatomaceous earth',
                score: 9.0,
                featured: true,
                pros: ['PMRA-registered, domestic class', 'Easy to find in stock', 'Clear labelled pest list & directions'],
                cons: ['Slow desiccant kill (24–72h)', 'Needs a duster for a proper film'],
              },
              {
                badge: 'Best Value',
                name: 'Knock Down Diatomaceous Earth',
                why: 'The same amorphous-silica, same registration, often at a budget-friendly price. A correct buy whenever Safer’s is out of stock.',
                search: 'knock down diatomaceous earth',
                score: 8.4,
                pros: ['PMRA-registered, domestic class', 'Budget-friendly', 'Identical mechanism to Safer’s'],
                cons: ['Availability varies by retailer', 'Still slow by design'],
              },
              {
                badge: 'Canadian Brand',
                name: 'Doktor Doom Be Green DE',
                why: 'A registered Canadian-brand crawling-insect killer covering the same indoor uses. Rounds out the legitimate registered trio.',
                search: 'doktor doom diatomaceous earth',
                score: 8.2,
                pros: ['PMRA-registered, domestic class', 'Canadian brand', 'Same all-round indoor use'],
                cons: ['Narrower distribution', 'Slow like all DE'],
              },
              {
                badge: 'Essential Add-On',
                name: 'Bulb (puffer) Duster Applicator',
                why: 'The one accessory that changes results more than switching brands. It fires a barely-visible film into cracks and voids that spoon-sprinkling can never reproduce — and keeps dust out of your breathing zone.',
                search: 'diatomaceous earth duster applicator',
                score: 8.6,
                pros: ['Produces the thin film that actually kills', 'Reaches cracks, voids & frame joints', 'Keeps powder out of your breathing zone'],
                cons: ['A second purchase', 'Small learning curve to dose lightly'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Want the safe default?</strong> The <em>Best Overall</em> Safer&rsquo;s is the easiest registered DE to find. <strong>Watching the budget?</strong> The <em>Best Value</em> Knock Down is the same silica for less. <strong>Prefer a Canadian brand?</strong> Doktor Doom Be Green covers the same indoor uses. Whichever you pick, add the <em>Essential Add-On</em> duster &mdash; a barely-visible film is what kills, and you cannot achieve one straight from the bag.
              </>
            }
          />

          <h2>What Is the Best Diatomaceous Earth in Canada?</h2>
          <p>Safer&rsquo;s Diatomaceous Earth insect killer is our top pick because it is the most widely stocked PMRA-registered insecticidal DE in Canada — and registration is the entire question here. Diatomaceous earth is fossilized diatom silica ground into an abrasive, ultra-absorbent powder, and the mineral itself is nearly identical across bags. What differs is legal status and labelling: a registered product carries a Pest Control Products (PCP) number and tested directions for use against listed pests, while a food-grade bag is legally an anti-caking agent that happens to look the same.</p>
          <p>That distinction sounds bureaucratic until you need it. The registered label tells you which pests the product is proven against, where you may apply it indoors, and how to handle it safely — the exact information the &ldquo;sprinkle it everywhere&rdquo; internet advice gets wrong. Knock Down diatomaceous earth and Doktor Doom Be Green crawling insect killer round out the registered trio; any of the three is a correct buy.</p>

          <h2>Which Diatomaceous Earth Products Are PMRA-Registered in Canada?</h2>
          <p>Three consumer brands dominate the registered category, and two familiar US names are deliberately absent. Here is the field — including what we will <em>not</em> recommend and why:</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">Canadian legal status</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Our verdict</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Safer\'s Diatomaceous Earth', status: 'PMRA-registered, domestic class', best: 'All-round indoor crawling insect use', verdict: 'Top pick — most widely stocked registered DE' },
                  { name: 'Knock Down Diatomaceous Earth', status: 'PMRA-registered, domestic class', best: 'Same uses; often the value option', verdict: 'Recommended alternative' },
                  { name: 'Doktor Doom Be Green DE', status: 'PMRA-registered, domestic class', best: 'Same uses; Canadian brand', verdict: 'Recommended alternative' },
                  { name: 'Food-grade DE (US pattern)', status: 'Not registered as a pesticide — off-label use', best: 'Anti-caking / feed additive only', verdict: 'Not recommended for pest control' },
                  { name: 'CimeXa, Harris & other US dusts', status: 'US EPA labels — no Canadian registration', best: 'Nothing in Canada', verdict: 'Grey-market — will not recommend' },
                  { name: 'Pool / filter-grade DE', status: 'Calcined — crystalline silica hazard', best: 'Pool filters only', verdict: 'Never use for insects' },
                ].map(({ name, status, best, verdict }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 text-gray-700">{status}</td>
                    <td className="px-4 py-3 text-gray-700">{best}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Look for the PCP registration number printed on the front label — that number is the difference between a legal pesticide and a bag of powder with folklore attached.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the registered products and a duster:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Safer&rsquo;s DE →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="knock down diatomaceous earth">Knock Down DE →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth">Doktor Doom Be Green →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth duster applicator">Bulb duster →</BuyLink>
          </div>

          <h2>How Does Diatomaceous Earth Actually Kill Insects?</h2>
          <p>DE kills by desiccation — it physically destroys an insect&rsquo;s waterproofing rather than poisoning its nervous system. Every crawling insect carries a microscopically thin wax layer (the epicuticle) that keeps its body moisture in. When an insect walks through a DE film, the razor-edged, sponge-like silica particles cling to that wax layer, abrading it and absorbing the lipids. The insect then loses water through its own exoskeleton and dies of dehydration — a process commonly put at 24–72 hours for cockroaches, ants, and silverfish, and 7–10 days or more for drought-tolerant bed bugs.</p>
          <p>Two practical consequences fall out of that mechanism. First, there is no meaningful resistance: insects have evolved resistance to nearly every neurotoxic insecticide class, but they cannot evolve their way out of physics — which is precisely why desiccant dusts remain a core tool in professional bed bug work. Second, DE is slow by design — nothing dies on contact. The payoff for the slowness is persistence: a deposit in a dry crack keeps killing every insect that crosses it for months, long after any spray residue has broken down.</p>

          <h2>Why Not Just Buy Food-Grade DE Like US Websites Say?</h2>
          <p>Because that advice is written for US law, and it does not transfer. In the United States, food-grade DE is cheap, sold in 10 lb bags, and widely promoted for pest use — and American blogs, forums, and YouTube channels dominate the search results Canadians read. In Canada, the Pest Control Products Act works differently: <strong>any product used to control pests must be registered with Health Canada&rsquo;s PMRA, and using an unregistered product as a pesticide is off-label</strong>. Food-grade DE is registered as nothing of the sort — it is sold as an anti-caking agent and livestock feed additive, with no pesticide label, no listed pests, no application directions, and no safety review for indoor insecticidal use.</p>
          <p>The same logic covers the US specialty dusts. CimeXa (silica gel) and the Harris bed bug powders carry US EPA registrations and impressive US lab data, but neither has a Canadian domestic-class registration — cross-border listings ship with US-only labels, and importing unregistered pesticides for use here is a violation, not a loophole. We flag these deliberately because they are the products a Canadian will most often be told to buy by US content.</p>
          <p>Compliance costs you nothing here: the registered Canadian DE products are the same amorphous silica at nearly the same price, with directions that actually tell you how to get results. The grey-market route offers no upside — only a product with no legal instructions and no recourse if it fails.</p>

          <h2>Where Does Diatomaceous Earth Work — and Where Does It Fail?</h2>
          <p>DE succeeds in dry, protected, high-traffic insect runways and fails almost everywhere else — knowing the difference is worth more than any brand choice. The mechanism dictates the map: the powder must stay dry and intact, and an insect must physically walk through it.</p>
          <ul>
            <li><strong>Where it works:</strong> cracks and crevices along baseboards, wall voids, under and behind appliances, inside cabinet-to-wall gaps, bed-frame joints and screw holes, box-spring interiors, carpet tack strips, behind outlet and switch plates (power off first), and the sheltered sill plates of a dry basement. These spots stay dry, stay undisturbed, and sit directly on the routes crawling insects actually use.</li>
            <li><strong>Where it fails:</strong> bathrooms, humid basements, and anywhere ambient humidity runs high — above roughly 75% RH the silica absorbs atmospheric moisture instead of insect lipids and stops killing. Open floors and countertops fail twice over: visible deposits get detected and avoided by insects (bed bugs demonstrably route around heavy piles), and traffic plus cleaning removes the film within days. Outdoors, a single rain or heavy dew ends the treatment.</li>
          </ul>
          <p>The honest framing: DE is a residual layer, not a primary weapon. It quietly kills stragglers for months while something faster does the front-line work. Which front-line tool that should be depends on the insect: for a kitchen trail it is <Link href="/blog/how-to-get-rid-of-ants-canada">bait the colony carries home</Link>, for late-summer <Link href="/blog/how-to-get-rid-of-earwigs-canada">earwig invasions</Link> it is trapping plus pulling mulch back from the foundation, and for <Link href="/blog/how-to-get-rid-of-centipedes-canada">house centipedes</Link> it is dropping basement humidity so their prey disappears.</p>

          <h2>How Do You Apply Diatomaceous Earth Correctly?</h2>
          <p>Thin, targeted, and with a duster — the goal is a film you can barely see, not a snowdrift. The bulb (puffer) duster is the one accessory that changes results more than switching brands ever will: it fires a fine, even cloud into cracks and voids that no amount of spoon-sprinkling can reproduce, and it keeps the powder out of your breathing zone.</p>
          <ul>
            <li><strong>Load the duster half full</strong> with a marble or two inside to break up clumps, and puff with short squeezes — you should see a light haze settle, not a pile.</li>
            <li><strong>Chase the cracks:</strong> baseboards, frame joints, void entries, the gap where carpet meets wall. If you can see an obvious white line from across the room, you applied too much — brush it out and redo it thinner.</li>
            <li><strong>Wear a dust mask</strong> during application. Amorphous DE is low-toxicity, but any fine dust is a respiratory irritant while airborne.</li>
            <li><strong>Leave deposits alone.</strong> Do not vacuum treated cracks during an active infestation; a dry deposit is working the entire time it sits there. Reapply only if it gets wet or visibly disturbed.</li>
            <li><strong>Follow the PMRA label</strong> on your specific product for listed pests and any room-by-room restrictions — it is the legal instruction set.</li>
          </ul>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth duster applicator">Check bulb dusters on Amazon.ca →</BuyLink>
          </div>

          <h2>Does Diatomaceous Earth Work for Bed Bugs?</h2>
          <p>Yes — as the long-game layer in a multi-tool program, never as the whole plan. Bed bugs are among the most dehydration-tolerant insects DE is used against, taking 7–10 days of exposure to die, and studies show they partially avoid heavy deposits. But a thin film dusted into bed-frame joints, box-spring seams, baseboard cracks, and the wall-void edges of an infested room becomes a months-long kill zone across the routes bed bugs must travel between harbourage and host.</p>
          <p>The program that actually clears an infestation stacks DE with faster tools: a <Link href="/blog/best-bed-bug-steamer-canada">bed bug steamer</Link> for immediate kill of live bugs and eggs, <Link href="/blog/bed-bug-mattress-encasement-canada">mattress encasements</Link> to seal the mattress and box spring out of play, <Link href="/blog/bed-bug-interceptor-traps-canada">interceptor traps</Link> under bed legs to cut the commute and count survivors, and a registered <Link href="/blog/bed-bug-spray-canada">bed bug spray</Link> where a contact residual makes sense — with realistic expectations set by our review of <Link href="/blog/do-bed-bug-sprays-actually-work">whether bed bug sprays actually work</Link>. Start with our <Link href="/blog/how-to-check-for-bed-bugs-canada">bed bug inspection guide</Link> to confirm what you are dealing with, and see the dedicated <Link href="/blog/diatomaceous-earth-for-bed-bugs">diatomaceous earth for bed bugs</Link> guide for crack-by-crack placement. For a heavy or spreading infestation, DIY has real limits — our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> covers what professional bed bug treatment runs and when it becomes the cheaper path.</p>

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
            <li><Link href="/blog/diatomaceous-earth-for-bed-bugs">Diatomaceous Earth for Bed Bugs — Crack-by-Crack Placement Guide</Link></li>
            <li><Link href="/blog/bed-bug-spray-canada">Bed Bug Spray Canada — PMRA-Registered Options Only</Link></li>
            <li><Link href="/blog/best-bed-bug-steamer-canada">Best Bed Bug Steamer Canada</Link></li>
            <li><Link href="/blog/bed-bug-mattress-encasement-canada">Bed Bug Mattress Encasements in Canada</Link></li>
            <li><Link href="/blog/bed-bug-interceptor-traps-canada">Bed Bug Interceptor Traps — Do They Work?</Link></li>
            <li><Link href="/blog/how-to-check-for-bed-bugs-canada">How to Check for Bed Bugs — Canadian Inspection Guide</Link></li>
            <li><Link href="/blog/do-bed-bug-sprays-actually-work">Do Bed Bug Sprays Actually Work?</Link></li>
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
