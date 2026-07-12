import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'

const SLUG = 'wondercide-canada-review'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Wondercide Canada 2026 — Honest Review + Where to Buy (Does It Work?)'
const META_TITLE = 'Wondercide Canada Review 2026: Is the Cedar-Oil Spray Worth It?'

const FAQS = [
  {
    question: 'Is Wondercide available in Canada?',
    answer: 'Partly. Wondercide is a US brand (Austin, Texas) and is not broadly stocked in Canadian big-box retail the way it is at US chains. In Canada (2026) you will mostly find it through third-party sellers on Amazon.ca, a handful of specialty and natural pet stores, and direct shipping from wondercide.com (which adds duties and slower delivery). Availability is inconsistent — a product in stock one week can disappear the next — and the yard products are not registered with Health Canada’s PMRA as pest control products the way a Canadian-sold pesticide would be. Check the listing and seller carefully, and expect to pay a premium over US pricing.',
  },
  {
    question: 'What is Wondercide made of? Is cedar oil safe?',
    answer: 'Wondercide’s flea and tick products are built around cedarwood oil, plus lemongrass oil and sesame oil in the pet sprays, and a blend of cedarwood, cedar and other essential oils in the Yard + Garden line. In the US these fall under the EPA’s “minimum risk” 25(b) exemption, meaning they are considered low-risk and skip full pesticide registration. Cedar oil works by disrupting octopamine, a neurotransmitter insects have and mammals do not, which is why it is marketed as safe around kids and pets once dry. “Low risk” does not mean “no risk”—the oils are strongly scented, can irritate sensitive skin or airways, and cats in particular are sensitive to concentrated essential oils, so follow the label and let treated surfaces dry.',
  },
  {
    question: 'Wondercide Flea & Tick Spray vs Yard + Garden — what is the difference?',
    answer: 'They are two different products for two different jobs. The Flea & Tick Spray (cedarwood, lemongrass, sesame oil) is a ready-to-use bottle for spraying directly on pets, bedding, furniture, and indoor surfaces to knock down fleas and ticks on contact. The Yard + Garden line (concentrate or hose-end ready-to-spray) is for treating the outdoor perimeter—lawn edges, shrubs, and shaded resting areas where ticks and mosquitoes hide. If your goal is to protect the dog and the house, buy the Flea & Tick pet spray. If your goal is to reduce ticks in the yard itself, buy the Yard + Garden. Neither is a long-residual product; the essential oils break down within days.',
  },
  {
    question: 'Does Wondercide actually work on ticks and mosquitoes?',
    answer: 'It works as a short-term, contact knockdown—not as a long-lasting barrier. Cedar and lemongrass oils do kill and repel ticks, fleas, and mosquitoes on contact, and many pet owners genuinely like the pet spray for spot use. The honest limitation is duration: essential oils are volatile and degrade quickly in sun, heat, and rain, so independent repellent testing consistently shows plant-oil products giving far shorter protection windows than picaridin, DEET, or permethrin. For yard use that means frequent reapplication (often weekly or after every rain) to maintain any effect. It is a reasonable gentle option for people who prioritize a natural formula and accept the reapplication effort—not a set-and-forget tick solution.',
  },
  {
    question: 'How often do you have to reapply Wondercide in the yard?',
    answer: 'Wondercide recommends reapplying the Yard + Garden product roughly every couple of weeks during peak season, but in real Ontario summer conditions—hot sun, humidity, and frequent rain—the practical interval is often closer to weekly, and you should re-treat after any significant rainfall because the oils wash off. This is the core trade-off with essential-oil yard products: they are gentle and fast to break down, which is good for the environment but means the protection window is short. A professional barrier spray, by contrast, uses a residual formula engineered to keep working for 21–30 days per treatment, which is why season programs schedule treatments every few weeks rather than every few days.',
  },
  {
    question: 'How much does Wondercide cost in Canada?',
    answer: 'Because most Canadian supply is imported through third-party sellers, pricing runs above US shelf prices and moves around. As a 2026 guide: the Flea & Tick Spray (16 oz / 32 oz) typically lands around $35–$60 CAD on Amazon.ca; the Yard + Garden Ready-to-Spray hose-end (32 oz / 128 oz) around $45–$95; and the Yard + Garden Concentrate around $70–$130 depending on size and seller. Personal Flea, Tick & Mosquito repellent sprays run roughly $25–$40. Add shipping and possible duties if you order direct from wondercide.com. Factor in frequent reapplication—a single yard bottle does not last a GTA season—when comparing total cost against a professional program.',
  },
  {
    question: 'What is a better alternative to Wondercide for a GTA yard?',
    answer: 'For ticks and mosquitoes across a whole Ontario yard, the two most proven approaches are permethrin-based tick control and professional barrier spray. Permethrin (used to treat clothing, gear, and—in pro applications—yard perimeters) has strong, well-documented tick knockdown and lasts far longer than cedar oil. Professional barrier spray treats the entire property with a residual formula that keeps working 21–30 days, covers both mosquitoes and ticks, and removes the weekly reapplication chore. Wondercide can still play a role—the pet spray for the dog, the personal spray for a hike—but for the yard itself, a longer-residual option delivers more reliable protection per dollar. See our guide to the best tick repellents for yards in Canada for the full comparison.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Wondercide review for Canada: is the cedar-oil flea & tick spray available here, where to buy on Amazon.ca, Flea & Tick vs Yard + Garden compared, real 2026 pricing, and the honest verdict.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function WondercideCanadaReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 honest review of Wondercide cedar-oil flea, tick & mosquito products in Canada.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Wondercide Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Wondercide Canada Review</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">An honest look at Wondercide&rsquo;s natural cedar-oil flea, tick &amp; mosquito line for Canadian yards and pets &mdash; availability, real pricing, Flea &amp; Tick spray vs Yard + Garden, and whether it actually works.</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Wondercide: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Wondercide is a US brand, so Canadian supply mostly comes through third-party sellers on Amazon.ca, specialty and natural pet stores, and direct shipping from wondercide.com. Stock is inconsistent and pricing runs above US shelf prices &mdash; check the seller and the product line before you buy.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">Flea &amp; Tick Spray</th>
                  <th className="px-4 py-3 text-left">Yard + Garden</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Amazon.ca',            pet: '$35 – $60',  yard: '$45 – $130', note: 'Most reliable CA source · third-party sellers' },
                  { name: 'wondercide.com',       pet: '$30 – $55',  yard: '$40 – $120', note: 'Ships to CA · adds duties + slower delivery' },
                  { name: 'Specialty pet stores', pet: '$40 – $65',  yard: 'Rare',       note: 'Natural / boutique pet shops only' },
                  { name: 'Canadian Tire',        pet: 'Not stocked', yard: 'Not stocked', note: 'Carries other natural brands instead' },
                  { name: 'Home Depot Canada',    pet: 'Not stocked', yard: 'Not stocked', note: 'No official Canadian distribution' },
                  { name: 'Costco Canada',        pet: 'Not stocked', yard: 'Not stocked', note: 'Not part of Canadian assortment' },
                ].map(({ name, pet, yard, note }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{pet}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{yard}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices are 2026 estimates for imported stock and move with the seller and exchange rate. Yard products break down in days, so budget for frequent reapplication &mdash; a single bottle does not cover a full GTA season.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Cedar-oil yard sprays work on contact but fade fast.</strong> Essential oils degrade within days in sun and rain, so a Wondercide yard treatment needs re-spraying weekly to keep working. For long-residual, whole-yard tick and mosquito coverage, <Link href="/tick-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> lasts 21&ndash;30 days per treatment. Wondercide is best used for the <em>pet and the person</em>, not as your only line of yard defence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Is Wondercide available and worth it in Canada?</h2>
          <p className="speakable text-base text-gray-800 leading-relaxed">
            <strong>Available but limited, and worth it mainly for pets and personal use &mdash; not as your only yard tick solution.</strong> Wondercide is a US natural brand built on cedarwood oil (plus lemongrass and sesame oil in the pet sprays), and in Canada it is sold mostly through third-party sellers on <BuyLink search="wondercide flea and tick spray">Amazon.ca</BuyLink> rather than big-box retail, at a premium over US pricing. The cedar-oil formula genuinely kills and repels ticks, fleas, and mosquitoes on contact, but the oils break down within days, so yard use needs frequent reapplication. For whole-yard, long-lasting tick protection, a longer-residual option like permethrin-based treatment or <Link href="/tick-control" className="text-emerald-700 underline">professional barrier spray</Link> is more reliable per dollar &mdash; see our <Link href="/blog/best-tick-repellent-yard-canada" className="text-emerald-700 underline">best tick repellent for yards in Canada</Link> comparison.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Wondercide Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Brand origin', 'US (Austin, Texas) — natural / essential-oil pest control'],
                  ['Main active ingredients', 'Cedarwood oil + lemongrass + sesame oil (pet); cedar oils (yard)'],
                  ['How it works', 'Cedar oil disrupts octopamine — a neurotransmitter insects have, mammals don\'t'],
                  ['US regulatory status', 'EPA 25(b) “minimum risk” exempt (not the same as Health Canada PMRA)'],
                  ['Canada availability', 'Limited — mostly Amazon.ca third-party + direct import'],
                  ['Residual / duration', 'Short — oils degrade in days; frequent reapplication needed'],
                  ['Tick effectiveness', 'Contact kill/repel — yes; long-lasting barrier — no'],
                  ['Mosquito effectiveness', 'Contact repel — modest; short protection window'],
                  ['Pet safety', 'Marketed safe around pets once dry — cats sensitive to essential oils'],
                  ['Product lines', 'Flea & Tick Spray, Yard + Garden, Personal Repellent'],
                  ['CA price range (2026)', '~$25 (personal) – $130 (yard concentrate)'],
                  ['Best application', 'Pet spot-treatment, indoor surfaces, personal outdoor use'],
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
          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian prices across the Wondercide line (Flea &amp; Tick pet spray, Yard + Garden, personal repellent):</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="wondercide flea and tick spray">Check Flea &amp; Tick price on Amazon.ca →</BuyLink>
            <BuyLink search="wondercide yard and garden">Yard + Garden →</BuyLink>
          </div>

          <h2 id="products">Wondercide Products Compared: Flea &amp; Tick vs Yard + Garden vs Personal</h2>
          <p>Wondercide is not a single product &mdash; it is a family of cedar-oil sprays for different jobs, and buying the wrong one is the most common mistake. The <strong>Flea &amp; Tick Spray</strong> goes on your pet and indoor surfaces; the <strong>Yard + Garden</strong> line treats the outdoor perimeter; the <strong>personal repellent</strong> goes on you before a hike. Here is every main line sold into Canada, what it is for, and a live Amazon.ca price check:</p>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">What it&rsquo;s for</th>
                  <th className="px-4 py-3 text-left">Actives</th>
                  <th className="px-4 py-3 text-left">Approx. price (CA)</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Flea &amp; Tick Spray</td>
                  <td className="px-4 py-3 text-gray-700">On pets, bedding, indoor surfaces</td>
                  <td className="px-4 py-3 text-gray-700">Cedarwood + lemongrass + sesame oil</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$35 – $60</td>
                  <td className="px-4 py-3"><BuyLink search="wondercide flea and tick spray">Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Yard + Garden Ready-to-Spray</td>
                  <td className="px-4 py-3 text-gray-700">Hose-end perimeter treatment</td>
                  <td className="px-4 py-3 text-gray-700">Cedar oil blend</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$45 – $95</td>
                  <td className="px-4 py-3"><BuyLink search="wondercide yard and garden ready to spray">Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Yard + Garden Concentrate</td>
                  <td className="px-4 py-3 text-gray-700">Mixes multiple gallons for larger lots</td>
                  <td className="px-4 py-3 text-gray-700">Cedar oil blend (concentrated)</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$70 – $130</td>
                  <td className="px-4 py-3"><BuyLink search="wondercide yard and garden concentrate">Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Flea, Tick &amp; Mosquito Repellent <span className="font-normal text-xs text-gray-500">(personal)</span></td>
                  <td className="px-4 py-3 text-gray-700">On skin/clothing before outdoor time</td>
                  <td className="px-4 py-3 text-gray-700">Cedarwood / lemongrass / peppermint</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$25 – $40</td>
                  <td className="px-4 py-3"><BuyLink search="wondercide flea tick mosquito repellent">Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="not-prose text-sm text-gray-600 mb-6">Treating a bigger yard? The <strong>Concentrate</strong> is cheaper per gallon than the ready-to-spray bottles, but remember you will re-mix and re-apply often through the season. <BuyLink search="wondercide yard and garden concentrate">Check concentrate price →</BuyLink></p>

          <h3>Flea &amp; Tick Spray vs Yard + Garden: which do you need?</h3>
          <p>They solve different problems and are not interchangeable. The <strong>Flea &amp; Tick Spray</strong> is a ready-to-use bottle formulated to go directly on your dog or cat, their bedding, carpets, and furniture &mdash; it is the product most Wondercide fans actually love, because spot-treating a pet and a couch is exactly what a fast-fading, gentle cedar-oil spray is good at. The <strong>Yard + Garden</strong> line is a different formula meant for the lawn edges, shrubs, mulch, and shaded resting zones where ticks and mosquitoes live outdoors. If your dog keeps bringing ticks inside, start with the pet spray. If you are getting bitten in your own backyard, you want the Yard + Garden &mdash; but go in knowing you will be re-spraying it frequently.</p>

          <h3>Why Wondercide is hard to buy in Canada</h3>
          <p>Wondercide has no broad Canadian retail distribution, so most of what you see here is imported. In the US, its essential-oil formulas ride the EPA&rsquo;s 25(b) &ldquo;minimum risk&rdquo; exemption, which lets low-risk botanical pesticides skip full federal registration. Canada&rsquo;s system is different: pest control products are regulated by Health Canada&rsquo;s PMRA, and there is no automatic blanket exemption that mirrors the US 25(b) list. The practical result is that Wondercide yard products are not registered Canadian pesticides, and you buy them as imported goods through <BuyLink search="wondercide">Amazon.ca</BuyLink> third-party sellers or direct from the US site with duties. Always confirm the seller and check the current listing &mdash; stock and legality of specific SKUs can change.</p>

          <div className="not-prose my-6 rounded-xl bg-emerald-50 border-l-4 border-emerald-500 p-5">
            <p className="text-sm font-extrabold text-emerald-900 mb-1">Does Wondercide actually work? The honest answer.</p>
            <p className="text-sm text-gray-800 leading-relaxed">Yes &mdash; on <em>contact</em>, and for <em>short</em> windows. Cedar and lemongrass oils genuinely kill and repel ticks, fleas, and mosquitoes when they hit them directly, which is why the pet spray earns loyal fans. The catch is duration: essential oils are volatile and wash off in rain, so repellent research consistently shows plant-oil products protecting for far less time than picaridin, DEET, or permethrin. For a GTA yard that means weekly re-treatment to hold any line. For dependable, whole-yard tick relief, pair or replace it with <Link href="/tick-control">professional barrier spray</Link> &mdash; a residual formula that keeps working 21&ndash;30 days and covers mosquitoes too.</p>
          </div>

          <h2>How Wondercide Works (and Why That Matters)</h2>
          <p>Wondercide&rsquo;s active ingredient is cedarwood oil, usually alongside lemongrass and sesame oil. Cedar oil kills and repels insects by interfering with <strong>octopamine</strong>, a neurotransmitter that regulates movement and heart rate in insects, ticks, and fleas. Mammals &mdash; including you, your dog, and your cat &mdash; do not have octopamine receptors, which is the scientific basis for the &ldquo;safe around pets and kids&rdquo; marketing. That mechanism is real and is why the sprays do something when they land on a bug.</p>
          <p>The limitation is also chemistry. Essential oils are <strong>volatile</strong> by design &mdash; that is what makes them smell strong and what makes them evaporate. In direct summer sun, heat, and Ontario&rsquo;s frequent rain, the active oils dissipate within days, taking their repellency with them. That is fundamentally different from a residual pesticide engineered to bind to leaf surfaces and keep killing for weeks.</p>
          <p>So the useful mental model is: Wondercide is a <em>knockdown</em> product, not a <em>barrier</em> product. It is excellent for &ldquo;there is a tick on my dog right now&rdquo; or &ldquo;spray the picnic blanket before we sit down.&rdquo; It is weak for &ldquo;keep my whole yard tick-free all July&rdquo; unless you are willing to walk the perimeter with a sprayer every week.</p>

          <h2>What Wondercide IS Good For</h2>
          <ul>
            <li><strong>Pet spot-treatment</strong> &mdash; spraying the dog before and after a walk, or the cat&rsquo;s bedding, with a gentle natural formula</li>
            <li><strong>Indoor surfaces</strong> &mdash; carpets, furniture, and pet areas during a flea flare-up</li>
            <li><strong>Personal outdoor use</strong> &mdash; the repellent spray on skin/clothing for a hike or a backyard evening</li>
            <li><strong>Chemical-averse households</strong> &mdash; people who specifically want an essential-oil option and accept the reapplication effort</li>
            <li><strong>Small, targeted areas</strong> &mdash; a deck rail, a doghouse, a single flower bed you can re-treat easily</li>
          </ul>

          <h2>What Wondercide Is NOT Good For</h2>
          <ul>
            <li><strong>Long-lasting yard protection</strong> &mdash; the short residual means constant reapplication</li>
            <li><strong>Set-and-forget tick control</strong> &mdash; miss a week (or a rainstorm) and coverage lapses</li>
            <li><strong>Large properties</strong> &mdash; hand-spraying an acre repeatedly is impractical</li>
            <li><strong>Peak-season heavy pressure</strong> &mdash; near woods, long grass, or wetlands, contact sprays get overwhelmed</li>
            <li><strong>Replacing a professional program</strong> &mdash; coverage and duration per dollar do not compete with residual barrier spray</li>
          </ul>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Or let us handle it</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional tick &amp; mosquito barrier spray covers your whole yard from $99 &mdash; a residual treatment that lasts weeks, not days. Backed by 150+ five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Wondercide vs Real Yard Tick Solutions</h2>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Solution</th><th className="px-3 py-2 text-left">Cost</th><th className="px-3 py-2 text-left">Protection window</th><th className="px-3 py-2 text-left">Yard tick coverage</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Wondercide Yard + Garden</strong></td><td className="px-3 py-2">$45–$130 + frequent reapply</td><td className="px-3 py-2">Days (re-spray weekly)</td><td className="px-3 py-2">Contact only</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/permethrin-canada-yard-clothing-spray">Permethrin</Link></td><td className="px-3 py-2">$20–$60</td><td className="px-3 py-2">Weeks (clothing longer)</td><td className="px-3 py-2">Strong knockdown</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/best-tick-repellent-yard-canada">Best yard tick repellents</Link></td><td className="px-3 py-2">Varies</td><td className="px-3 py-2">Varies by product</td><td className="px-3 py-2">See comparison</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">From $99 / treatment</td><td className="px-3 py-2">21–30 days residual</td><td className="px-3 py-2">Whole yard + mosquitoes</td></tr>
            </tbody>
          </table>

          <h2>The Honest Verdict for Canadian Buyers</h2>
          <p>If you want a gentle, natural spray for your <strong>pet</strong> and yourself, Wondercide is a genuinely nice product &mdash; buy the Flea &amp; Tick pet spray or the personal repellent and keep them handy. If you are hoping it will keep your <strong>whole yard</strong> tick-free all summer, temper expectations: the cedar-oil formula fades in days and demands weekly reapplication, and it is not officially distributed or PMRA-registered as a yard pesticide in Canada. For dependable, hands-off yard protection against ticks and mosquitoes, a longer-residual approach &mdash; permethrin-based treatment or <Link href="/tick-control">professional barrier spray</Link> &mdash; will outlast and out-cover it. Many GTA households do both: Wondercide on the dog, a residual program on the yard.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/best-tick-repellent-yard-canada">Best Tick Repellent for Yards in Canada</Link></li>
            <li><Link href="/blog/permethrin-canada-yard-clothing-spray">Permethrin Canada — Yard &amp; Clothing Guide</Link></li>
            <li><Link href="/tick-control">BuzzSkito Professional Tick Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Get a Free Yard Assessment</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Cedar Oil for the Dog · Barrier Spray for the Yard" subtext="Get a free quote for licensed tick & mosquito barrier spray. From $99. Lasts weeks, not days. Whole-yard coverage." variant="dark" />
    </>
  )
}
