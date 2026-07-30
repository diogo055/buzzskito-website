import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'how-to-get-rid-of-fruit-flies-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'How to Get Rid of Fruit Flies in Canada — Find the Source, Break the 8-Day Cycle'
const META_TITLE = 'Get Rid of Fruit Flies: Break the 8-Day Cycle'

const FAQS = [
  {
    question: 'How do I get rid of fruit flies fast in Canada?',
    answer: 'Work source-first: throw out or refrigerate every piece of overripe produce, rinse the recycling, run and clean the kitchen drains, and take out the organics bin. Then set a TERRO Fruit Fly Trap (the Canadian-label T2502 two-pack) on the counter near where you see the most activity to mop up the adults. Because the fruit fly lifecycle runs about 8 days from egg to breeding adult at room temperature, expect a real fix to take one to two weeks — the adults you see today came from eggs laid last week, and traps alone cannot outrun an active breeding site.',
  },
  {
    question: 'Why do I suddenly have so many fruit flies?',
    answer: 'Speed of breeding. A female fruit fly lays up to 500 eggs directly on fermenting material, and at typical Canadian kitchen temperatures the entire egg-to-adult cycle takes roughly 8 days. That means one piece of forgotten fruit or a film of gunk in a drain can produce hundreds of new breeding adults inside a week — which is why an infestation feels like it appears overnight. In Canada the spike is worst from August through October, when garden tomatoes, farmers-market hauls, and warm kitchens line up perfectly with the fly’s biology.',
  },
  {
    question: 'Where are my fruit flies coming from?',
    answer: 'Almost always one of five places: overripe or damaged produce (including onions and potatoes hiding in a pantry), the kitchen sink or dishwasher drain, unrinsed recycling (beer cans, wine bottles, juice containers), the green bin or indoor compost pail, and forgotten wet spots like mop buckets, drip trays, or a rag left in a bucket. Fruit flies breed in a thin film of fermenting organic material, so the source can be surprisingly small. The overnight jar test — plastic wrap with pin holes over cider vinegar placed in different rooms — tells you which zone has the most activity.',
  },
  {
    question: 'What is the best fruit fly trap in Canada?',
    answer: 'The TERRO T2502 Fruit Fly Trap is the best ready-made option sold in Canada: an apple-shaped catcher with a food-based liquid lure that draws adults in through angled entry holes they cannot navigate back out of. It is sold with a Canadian label, uses a non-insecticidal lure that is safe on a kitchen counter around food prep, and each trap lasts up to 45 days once opened. We compare it against DIY jars, sticky cards, and UV traps in our full best fruit fly trap in Canada guide.',
  },
  {
    question: 'Does apple cider vinegar actually work for fruit flies?',
    answer: 'Yes, as a supplement — no, as a fix. A jar of apple cider vinegar with a drop of dish soap genuinely catches adult fruit flies: the vinegar mimics fermenting fruit and the soap breaks the surface tension so landing flies sink. But a female lays up to 500 eggs, and a DIY jar does nothing about the eggs and larvae in your drain or fruit bowl. Use ACV jars to knock down and locate adults while you remove the breeding source; do not expect the jar alone to end the infestation.',
  },
  {
    question: 'How do I get rid of fruit flies in my kitchen drain?',
    answer: 'Physically clean it, then treat it biologically. Start by scrubbing what you can reach with a stiff brush and flushing with near-boiling water to strip the film of fermenting gunk where larvae live. Follow with an enzyme or microbial drain gel (Green Gobbler Fruit Fly Goodbye is the widely available one in Canada) poured in at night so it can coat the pipe walls for hours. Skip bleach and boiling-water-only approaches — bleach flows past the film without removing it, and neither touches eggs above the waterline. Repeat the gel for 3–5 consecutive nights.',
  },
  {
    question: 'How long does it take to get rid of fruit flies?',
    answer: 'One to two weeks if you remove the breeding sources, and indefinitely if you do not. The 8-day lifecycle is the clock: once you eliminate every place eggs are being laid, the adults you see are a dying population — they live only a couple of weeks and are being caught by your traps the whole time. A kitchen that still has fruit flies three weeks after a genuine cleanup almost always has a missed source, most often a drain, a garbage disposal splash guard, or produce that rolled behind or under something.',
  },
  {
    question: 'Are fruit flies dangerous or dirty?',
    answer: 'They are not known to bite or sting, but they are not harmless either: fruit flies breed in fermenting and decaying material and can mechanically transfer bacteria from those surfaces onto clean food. Health agencies treat them as a sanitation indicator — in commercial kitchens a fruit fly problem is a food-safety flag, not just a nuisance. At home the practical rule is simple: discard produce they have been crawling on if it is cut or damaged, cover food, and treat the infestation as a signal that something organic is fermenting where it should not be.',
  },
  {
    question: 'What is the difference between fruit flies, fungus gnats, and drain flies?',
    answer: 'Fruit flies are tan-to-brown with red eyes and hover around produce, drinks, and garbage. Fungus gnats are darker, skinnier, and mosquito-like, fly weakly, and come from wet potting soil in houseplants — treat those with BTI granules like Mosquito Bits, not fruit fly traps. Drain flies are fuzzy and moth-like with broad wings, sit on bathroom walls, and breed in drain and sewer film — they need mechanical drain cleaning plus enzyme gel. Identifying the fly correctly matters because the fix for each is completely different.',
  },
  {
    question: 'Do fruit flies die off in winter in Canada?',
    answer: 'Outdoors, yes — Drosophila cannot survive a Canadian winter outside. Indoors, no. Your kitchen is 20–22°C year-round, which is close to ideal breeding temperature, so an indoor population with a food source will happily cycle through January. The seasonal pattern Canadians notice — a huge spike in August through October, then decline — is driven by the supply of ripe produce and by flies riding in on garden hauls and grocery bags, not by the flies dying of cold inside a heated house. Winter infestations are almost always a drain or a forgotten pantry item.',
  },
  {
    question: 'Should I use a fogger or spray for fruit flies?',
    answer: 'No. Total-release foggers and aerosol fly sprays kill the adults in the air at the moment of application, leave residue across your food-prep surfaces, and do nothing about the eggs and larvae in drains and produce — the population rebounds within days from the protected life stages. In Canada, any insecticide sold for indoor flying-insect use must carry a PMRA registration number on a Canadian label, and several US-market fogger and drain-insecticide products sold through cross-border sellers are not registered here. The lure trap plus sanitation approach is safer, legal, and more effective.',
  },
  {
    question: 'How do I prevent fruit flies from coming back?',
    answer: 'Refrigerate ripe produce or keep it in sealed containers, especially August through October; rinse cans and bottles before they go in the recycling; empty and rinse the green bin or compost pail every couple of days in summer; run the garbage disposal with cold water daily and clean the splash guard monthly; fix slow drains, since standing organic sludge is a nursery; and inspect farmers-market and garden produce for splits or soft spots before it goes in the bowl — eggs often arrive on the fruit itself. One TERRO trap kept active near the fruit bowl through fall works as an early-warning system.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'The complete Canadian playbook for fruit flies: why the 8-day lifecycle makes them explode, how to find the breeding source (produce, drains, recycling), TERRO trap vs apple cider vinegar DIY, drain treatment, and prevention. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('how-to-get-rid-of-fruit-flies-canada')

export default function HowToGetRidOfFruitFliesCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Source-first Canadian guide to eliminating fruit flies: the 8-day lifecycle, finding breeding sites in produce, drains, and recycling, TERRO trap vs DIY vinegar jars, and prevention for the August–October spike.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Fruit Flies in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Get Rid of Fruit Flies</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Fruit flies explode because their egg-to-adult cycle takes just 8 days. Here is the source-first playbook Canadian kitchens need for the August&ndash;October spike &mdash; where they breed, which trap to buy, what the vinegar jar can and cannot do, and how to treat the drain.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="TERRO T2502 Fruit Fly Trap (2-pack)" search="terro fruit fly trap" label="Best ready-made trap" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of fruit flies in Canada, remove the breeding source first &mdash; overripe produce, drain gunk, unrinsed recycling, the green bin &mdash; then set a TERRO Fruit Fly Trap to catch the remaining adults. Because the egg-to-adult cycle takes about 8 days, expect one to two weeks to full resolution; traps alone can never outrun an active breeding site.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>A female fruit fly lays up to 500 eggs, and the full egg-to-breeding-adult cycle takes roughly 8 days at room temperature.</li>
              <li>The five usual sources: overripe produce, kitchen drains, unrinsed recycling, green bins/compost pails, and forgotten wet spots.</li>
              <li>The TERRO T2502 trap (Canadian label, non-insecticidal food-based lure) is the best ready-made adult catcher — each trap lasts up to 45 days.</li>
              <li>An apple cider vinegar jar with dish soap works as a supplement and a locator tool, but never fixes the source.</li>
              <li>Drains need a scrub plus an enzyme gel for 3–5 nights — bleach and boiling water alone do not remove the breeding film.</li>
              <li>The Canadian spike runs August–October; indoors, fruit flies breed straight through winter if the source stays.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="fruit flies" />
        </div>
      </section>

      <section className="bg-white px-4 py-2">
        <div className="max-w-4xl mx-auto">
          <TopPick tag={AMZ_TAG}
            label="Our Top Pick — Ready-Made Trap"
            name="TERRO T2502 Fruit Fly Trap (2-pack)"
            blurb="The apple-shaped counter trap that actually earns its shelf space: a food-based liquid lure draws adults in through angled entry holes they can't navigate back out of. Sold in Canada with a Canadian label, non-insecticidal (fine right beside the fruit bowl), and each trap stays effective for up to 45 days once activated. It won't fix your drain or your recycling bin — nothing in a bottle will — but for mopping up the adult population while you remove the source, it is a tidier job than an open vinegar jar: the angled entry holes let flies in and not back out, and the lure stays sealed inside instead of fermenting in an open dish on your counter."
            search="terro fruit fly trap"
            cta="Check price on Amazon.ca"
            score={8.7}
            pros={['Canadian-label product with a non-toxic, food-based lure', 'Up to 45 days per trap — covers the whole Aug–Oct spike', 'One-way entry design outperforms open vinegar jars', 'Safe around food prep, kids, and pets']}
            cons={['Catches adults only — does nothing for eggs and larvae at the source', 'Modest cost per season if you run several traps', 'Lure smell is noticeable at very close range']}
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Control Methods Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Every Fruit Fly Control Method, Ranked Honestly</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            No single product ends a fruit fly infestation, because every product on this list targets only one life stage. The winning combination is always sanitation (removes eggs and larvae) plus a trap (removes adults) plus drain treatment when the sink is involved.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">Targets</th>
                  <th className="px-4 py-3 text-left">Effectiveness</th>
                  <th className="px-4 py-3 text-left">Role in the plan</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Source removal<br /><span className="font-normal text-xs text-gray-500">produce, recycling, bins</span></td>
                  <td className="px-4 py-3 text-gray-700">Eggs + larvae + food supply</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Essential</strong> — the actual fix</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Step 1, always. Nothing else works without it.</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Free — elbow grease</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Lure trap<br /><span className="font-normal text-xs text-gray-500">TERRO T2502</span></td>
                  <td className="px-4 py-3 text-gray-700">Adults</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best adult catcher</strong></td>
                  <td className="px-4 py-3 text-xs text-gray-600">Mops up the flying population while the source dries out</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="terro fruit fly trap" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">DIY vinegar jar<br /><span className="font-normal text-xs text-gray-500">ACV + dish soap</span></td>
                  <td className="px-4 py-3 text-gray-700">Adults</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Supplement</strong> — real but limited</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Free extra catch + a locator tool for finding the source room</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Pantry items</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Enzyme drain gel<br /><span className="font-normal text-xs text-gray-500">Green Gobbler</span></td>
                  <td className="px-4 py-3 text-gray-700">Larvae + breeding film in pipes</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Essential if drains are the source</strong></td>
                  <td className="px-4 py-3 text-xs text-gray-600">3–5 consecutive nights after a physical scrub</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="green gobbler fruit fly goodbye drain gel" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">UV + fan trap<br /><span className="font-normal text-xs text-gray-500">Katchy</span></td>
                  <td className="px-4 py-3 text-gray-700">Adults (evening/overnight)</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Helpful extra</strong> — better for gnats</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Overnight catch in a dark kitchen; not fruit-fly-specific</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="katchy indoor insect trap" block>Check price →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Foggers / fly sprays<br /><span className="font-normal text-xs text-gray-500">aerosol insecticides</span></td>
                  <td className="px-4 py-3 text-gray-700">Adults in the air at spray time</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Not recommended</strong></td>
                  <td className="px-4 py-3 text-xs text-gray-600">Residue on food surfaces; population rebounds in days; PMRA issues with US imports</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Skip</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Ready-made traps and drain gels are stocked at Canadian Tire, Home Depot Canada, Walmart Canada, and Amazon.ca. Ready-made lure traps typically run under twenty dollars for a multi-pack at Canadian retailers; enzyme drain gels cost more per bottle but treat many drains.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Fruit Flies in Canada — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Species', 'Drosophila melanogaster (common fruit fly)'],
                  ['Egg-to-adult cycle', '~8 days at room temperature (20–25°C)'],
                  ['Eggs per female', 'Up to 500, laid directly on fermenting material'],
                  ['Adult lifespan', '2–4 weeks indoors'],
                  ['Peak season in Canada', 'August–October (harvest + warm kitchens)'],
                  ['Winter survival', 'Dies outdoors; breeds year-round indoors'],
                  ['Top breeding sites', 'Overripe produce, drains, recycling, green bins'],
                  ['Best ready-made trap', 'TERRO T2502 (Canadian label, food-based lure)'],
                  ['Best drain fix', 'Physical scrub + enzyme gel, 3–5 nights'],
                  ['Time to resolution', '1–2 weeks once sources are removed'],
                  ['Health risk', 'No bites; can transfer bacteria onto food'],
                  ['Often confused with', 'Fungus gnats (houseplants) and drain flies (bathrooms)'],
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

          <h2>Why Fruit Flies Explode: The 8-Day Math</h2>
          <p>Every fruit fly infestation feels sudden, and the biology explains why. At normal Canadian kitchen temperatures, <em>Drosophila melanogaster</em> completes its entire lifecycle — egg, larva, pupa, breeding adult — in roughly <strong>8 days</strong>. A single female lays up to 500 eggs, deposited directly onto whatever is fermenting: the soft spot on a peach, the film inside a sink drain, the dried ring of juice at the bottom of a recycling-bin can. Her daughters are laying their own eggs about a week later.</p>
          <p>Run that math forward and the &ldquo;where did these all come from?&rdquo; moment stops being a mystery. Two flies that hitchhiked home on a basket of farmers-market tomatoes in mid-August can be a triple-digit swarm by Labour Day. This is also why the single most common DIY failure is a purely trap-based approach: a trap removes adults at some rate per day, while an untouched breeding site produces new adults faster. You cannot trap your way out of an active nursery — you have to close the nursery.</p>
          <p>It also explains the calendar. The Canadian fruit fly spike runs <strong>August through October</strong>: garden and orchard harvests peak, produce sits in warm kitchens instead of the fridge, and green bins ferment fast in the late-summer heat. Outdoors, the first hard frost ends them. Indoors, your heated kitchen is a 21°C incubator all winter — which is why a January fruit fly problem is almost always a drain or a forgotten bag of onions, not bad luck.</p>

          <h2>Step 1: Find the Source (This Is 80% of the Job)</h2>
          <p>Before you buy anything, spend twenty minutes hunting. Fruit flies breed in a thin film of fermenting organic material, so the source can be small and is frequently not the obvious fruit bowl. Work through the five usual suspects in order:</p>
          <ul>
            <li><strong>Produce — including the stuff you forgot.</strong> Check the fruit bowl for soft spots and splits, then check the places produce hides: the potato and onion bags in the pantry (one liquefying onion can run a whole infestation), the crisper drawer, the banana that rolled behind the toaster, the squash on top of the cabinets. Eggs often arrive <em>on</em> the produce, laid into damaged skin at the store or garden.</li>
            <li><strong>The kitchen drains.</strong> The sink drain, the garbage disposal and its rubber splash guard, and the dishwasher drain all accumulate a biofilm of food sludge that larvae live in. If flies keep appearing with no visible food source, this is the answer — jump to the <a href="#drains">drain treatment section</a> below.</li>
            <li><strong>The recycling.</strong> Unrinsed beer and pop cans, wine bottles, and juice cartons are fermentation vessels. If your blue bin lives in the kitchen or garage, sniff it — you will know.</li>
            <li><strong>The green bin and compost pail.</strong> In August, an indoor compost pail can go from clean to breeding site in 48 hours. Lids do not stop fruit flies; they walk in through the vent gaps.</li>
            <li><strong>Forgotten wet spots.</strong> Mop buckets, the damp rag in the bucket under the sink, plant drip trays, a spill under the fridge, the drip tray inside the fridge. Anything wet plus organic qualifies.</li>
          </ul>
          <p><strong>The overnight jar test:</strong> if you cannot find the source, make it tell you where it is. Set small jars of apple cider vinegar covered in plastic wrap with pin holes in several rooms — kitchen counter, near the sink, by the recycling, near the houseplants. The jar with the most flies in the morning marks the zone; search within a few metres of it. (Lots of catch near houseplants but tan flies without red eyes? You likely have fungus gnats instead — different insect, different fix, covered below.)</p>
          <p>Once found, the fix is unglamorous: throw out or refrigerate the produce, rinse the recycling, wash the bins with hot soapy water, and dry the wet spots. Every subsequent product exists only to clean up the survivors of this step.</p>

          <AffiliateDisclosure />

          <h2>Step 2: Trap the Adults — TERRO vs the Vinegar Jar</h2>
          <p>With the source gone, the remaining adults are a dying population — but they can live another two weeks and will spend that time hunting for a new egg-laying site. Trapping shortens the tail dramatically.</p>
          <p>The best ready-made option in Canada is the <strong>TERRO T2502 Fruit Fly Trap</strong> — the little apple-shaped unit sold at most Canadian hardware stores and on Amazon.ca. You snip the tip off the lure bottle, pour it into the apple, and the food-based liquid draws adults in through angled entry holes they cannot navigate back out of. Three things make it the pick over the jar on your counter:</p>
          <ul>
            <li><strong>It is a Canadian-label product with a non-insecticidal lure.</strong> The attractant is food-based, not a pesticide, so it sits legally and safely on a food-prep counter — no PMRA registration issues, no residue concerns, nothing for a curious toddler or cat to be harmed by.</li>
            <li><strong>The one-way geometry out-catches an open jar.</strong> In an open vinegar jar, a meaningful share of flies drink and leave. The TERRO&rsquo;s entry cone design means flies that walk in almost never walk out, so catch accumulates instead of churning.</li>
            <li><strong>45 days per trap.</strong> One two-pack, opened in mid-August, covers the entire Canadian spike season. Place one by the fruit bowl and one by the sink or recycling.</li>
          </ul>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="terro fruit fly trap">Check TERRO Fruit Fly Trap on Amazon.ca →</BuyLink>
          </div>
          <p><strong>The honest word on the apple cider vinegar jar:</strong> it works, and you should still make one — as a supplement. A jar or bowl of ACV with one drop of dish soap (the soap collapses the surface tension so landing flies sink and drown) genuinely catches adults, costs nothing, and doubles as the locator tool from Step 1. Adding a plastic-wrap lid with pin holes converts it into a crude one-way trap and improves it further. What it cannot do is end an infestation: it addresses zero eggs and zero larvae, and its open design leaks catch. Treat DIY jars as free extra coverage in rooms where you have not deployed a real trap — never as the plan.</p>
          <p>A note on UV traps: a plug-in unit like the Katchy catches some fruit flies overnight in a dark kitchen, but UV light is a weak lure for <em>Drosophila</em> compared to fermentation odour — these machines earn their keep against fungus gnats far more than fruit flies. Our <Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy review</Link> covers exactly what it does and does not catch, and our <Link href="/blog/best-indoor-fly-mosquito-trap-canada">indoor fly and mosquito trap roundup</Link> compares the whole plug-in category. For a head-to-head of every fruit-fly-specific trap sold here, see the <Link href="/blog/best-fruit-fly-trap-canada">best fruit fly trap in Canada</Link> guide.</p>

          <h2 id="drains">Step 3: Treat the Drains (Where Traps Can&rsquo;t Reach)</h2>
          <p>If flies persist after the kitchen is clean, the breeding site is almost certainly inside a drain — the one place a counter trap cannot help. Larvae live in the gelatinous biofilm of food residue coating the pipe walls above and below the waterline, and the two folk remedies both fail: <strong>bleach</strong> pours past the film without stripping it, and <strong>boiling water</strong> alone cools too fast to cook the film more than a few centimetres down (and can stress PVC fittings).</p>
          <p>The fix that works is mechanical plus biological:</p>
          <ol>
            <li><strong>Scrub what you can reach.</strong> Remove the drain cover and the garbage-disposal splash guard (flip it — the underside is usually coated in exactly the sludge you are hunting) and scrub with a stiff bottle brush and hot soapy water.</li>
            <li><strong>Flush with near-boiling water</strong> to clear the loosened material.</li>
            <li><strong>Pour an enzyme or microbial drain gel at night</strong>, when the drain will sit unused for hours. The widely available option in Canada is Green Gobbler Fruit Fly Goodbye; enzyme gels cling to the pipe walls and digest the organic film rather than just flowing past it. Repeat for <strong>3–5 consecutive nights</strong> — one dose rarely clears an established film.</li>
          </ol>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="green gobbler fruit fly goodbye drain gel">Check enzyme drain gel on Amazon.ca →</BuyLink>
          </div>
          <p>Enzyme drain gels are cleaners, not insecticides, which is exactly why they are the right tool: nothing toxic sits in your sink, and there is no Canadian regulatory problem. That distinction matters because the US market is full of <strong>insecticide drain products and total-release foggers that are not PMRA-registered for sale in Canada</strong> — cross-border listings and grey-market sellers offer US-label foggers and drain treatments that legally cannot be sold here and that you should not use around food surfaces regardless. Health Canada&rsquo;s rule is simple: an insecticide sold in Canada must carry a PCP registration number on a Canadian label. For fruit flies you never need to go near that aisle anyway — sanitation, a lure trap, and an enzyme gel out-perform any spray because sprays only touch the adults flying at that moment.</p>
          <p>One diagnostic caveat: fuzzy, moth-like flies resting on the bathroom wall are <strong>drain flies</strong>, not fruit flies. The drain-cleaning protocol above is the same, but fruit fly lure traps will not catch them — identification first, purchase second.</p>

          <h2>Not Fruit Flies? Fungus Gnats Get a Different Fix</h2>
          <p>The most common misdiagnosis on this one: small dark flies around the kitchen window and houseplants get blamed on fruit, when they are actually <strong>fungus gnats</strong> breeding in damp potting soil. The tell: fungus gnats are black and mosquito-shaped with dangly legs and a weak, drifting flight; fruit flies are tan with red eyes and a quick, darting flight around food and drinks. Fruit fly traps barely touch gnats, and no amount of kitchen cleaning fixes a soil problem.</p>
          <p>The fungus gnat fix is BTI — the same larvicidal bacterium used against mosquito larvae — applied to the plant soil. Mosquito Bits are the granular product labelled for fungus gnat use: sprinkle into the pot or soak into the watering can, and the larvae in the soil die off within days. We cover the difference between the granules and the doughnut-shaped dunks in <Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks</Link>, and the full BTI product landscape in our <Link href="/blog/mosquito-dunks-canada-guide">mosquito dunks guide</Link>. Let the soil surface dry between waterings and the gnats lose their nursery entirely.</p>

          <h2>Prevention: Keeping the August–October Spike Out of Your Kitchen</h2>
          <p>Once clear, staying clear is mostly habit. The full prevention list, in rough order of payoff:</p>
          <ul>
            <li><strong>Refrigerate ripe produce in peak season.</strong> August to October, the counter fruit bowl is a liability. Ripe and damaged fruit goes in the fridge; unripe fruit can stay out under a mesh cover.</li>
            <li><strong>Inspect incoming produce.</strong> Farmers-market and garden hauls are the number-one way eggs enter Canadian homes. Anything split, soft, or leaking gets eaten first, refrigerated, or trimmed.</li>
            <li><strong>Rinse recycling before it goes in the bin.</strong> Ten seconds under the tap per can or bottle removes the fermentation film that feeds a colony.</li>
            <li><strong>Empty the green bin every 2–3 days in summer</strong> and rinse it with hot soapy water weekly. Freeze smelly scraps until collection day if the bin lives indoors.</li>
            <li><strong>Run drain hygiene monthly.</strong> Cold water plus the disposal daily; a splash-guard scrub and an enzyme gel dose once a month through the warm season.</li>
            <li><strong>Fix slow drains and wipe up wet spots.</strong> Standing organic sludge anywhere — a slow bathroom sink, a plant drip tray, a mop bucket — is an invitation.</li>
            <li><strong>Keep one sentinel trap running.</strong> A single TERRO trap by the fruit bowl from August through October costs little and tells you about a new source when the catch suddenly jumps — a week before your eyes would.</li>
          </ul>
          <p>If flies persist for weeks despite all of the above, the breeding site may be somewhere you cannot reach — inside a wall void from a hidden plumbing leak, or under an appliance. That is the point where paying a professional to find it beats buying more traps; our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> covers what an inspection and treatment visit runs.</p>

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

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/best-fruit-fly-trap-canada">Best Fruit Fly Trap Canada — Every Trap Compared</Link></li>
            <li><Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy Indoor Insect Trap Review — Canada</Link></li>
            <li><Link href="/blog/best-indoor-fly-mosquito-trap-canada">Best Indoor Fly &amp; Mosquito Trap in Canada</Link></li>
            <li><Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks — Which BTI Product for Fungus Gnats</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada Guide — BTI Explained</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost in Canada — What Professionals Charge</Link></li>
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
