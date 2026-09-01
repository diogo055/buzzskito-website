import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'citronella-candles-canada-do-they-work'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Do Citronella Candles Work in Canada? An Honest 2026 Verdict'
const META_TITLE = 'Do Citronella Candles Work? The 1-Metre Bubble'

const FAQS = [
  {
    question: 'Do citronella candles actually work against mosquitoes?',
    answer: 'Partially, and only at very close range. Citronella oil is a registered mild repellent that works by releasing a lemony scent that masks the carbon dioxide and body odours mosquitoes use to find you. Peer-reviewed testing (Journal of the American Mosquito Control Association) has measured roughly 40–50% fewer bites for a person sitting directly beside a burning citronella candle in still air — meaningfully better than nothing, but far weaker than a DEET or picaridin skin repellent, and the effect collapses within about a metre and in any breeze. Treat a citronella candle as pleasant patio ambiance with a small bonus, not as real mosquito control.',
  },
  {
    question: 'How far does a citronella candle repel mosquitoes?',
    answer: 'Not far at all — realistically under 1 metre, and often closer to half a metre. The protective scent plume needs to physically reach the space between you and an approaching mosquito, so the moment you lean back, move to the other end of the table, or a light breeze drifts through, mosquitoes get past it. A single tea-light-sized candle protects almost nothing; a large three-wick bucket candle throws a slightly bigger, warmer plume but still only shields the person sitting right next to it. Multiple candles arranged close around a small seating group do more than one candle in the middle of a big patio.',
  },
  {
    question: 'Citronella candles vs torches vs coils vs spray — which works best?',
    answer: 'They all rely on the same citronella oil, so effectiveness tracks how much scent they push out and how close you sit. Coils and incense sticks smoulder and produce a visible smoke that can cover a slightly wider still-air pocket (1–2 m) than a candle, which is why patios in Southeast Asia favour them — but the smoke bothers some people and asthma sufferers. Tiki torches with citronella fuel look great and cover a patio edge but the repellent effect is still short-range near each torch. Citronella sprays and lotions applied to skin give the most direct personal protection of the citronella family, but plant-oil repellents wear off in 20–60 minutes versus several hours for DEET or picaridin. None of them protect a whole yard.',
  },
  {
    question: 'Are citronella candles safe around kids and pets?',
    answer: 'The candles themselves are generally fine to use on an outdoor patio with normal open-flame caution — keep the flame away from children, curtains, and pets, and never leave a burning candle unattended. The bigger safety notes are about the smoke and the oil: citronella coils and incense produce smoke that can irritate airways, so use them in open, ventilated outdoor areas, not enclosed porches. Concentrated citronella essential oil is toxic to cats and dogs if licked or ingested, and homemade high-concentration DIY candles are not the same as a Health Canada / EPA-registered repellent product. Stick to finished retail candles, burn them outdoors, and keep pets from the wax and oil.',
  },
  {
    question: 'How much do citronella candles cost in Canada and where can I buy them?',
    answer: 'They are inexpensive and stocked almost everywhere from May to September. In 2026, small citronella candles and tins run about $6–$15, large three-wick bucket candles $12–$30, tiki-torch-and-fuel sets $20–$45, citronella coils $8–$20 a box, and incense sticks $6–$18. You will find them at Canadian Tire, Home Depot Canada, Walmart Canada, Costco Canada (multipacks in spring), Dollarama (cheapest, smallest), and Amazon.ca. Because the protection is short-range, buying several candles is more useful than buying one big expensive one — but even a table full of candles will not clear a mosquito-heavy backyard.',
  },
  {
    question: 'Does the citronella plant repel mosquitoes as well as the candle?',
    answer: 'No — a live citronella plant in a pot barely does anything on its own. The "citronella plant" (often a scented geranium marketed as a mosquito plant, or true citronella grass, Cymbopogon) only releases meaningful repellent oil when the leaves are crushed and rubbed onto skin. Simply having the plant sitting on your patio does not put enough oil into the air to matter. We cover which garden plants actually help, and how little, in our Ontario mosquito-repellent-plants guide. The short version: candles and plants are both mild, short-range, feel-good tools rather than a solution to a real mosquito problem.',
  },
  {
    question: 'What actually works better than citronella candles for a backyard?',
    answer: 'For personal, immediate patio protection, a Thermacell device creates a roughly 4.5 m (15 ft) mosquito-free zone using a heated repellent mat — far more effective than a citronella candle and hands-off once lit. For skin protection when you are on the move, a DEET or picaridin repellent lasts hours instead of minutes. And to actually reduce the mosquito population across an entire yard, a professional barrier spray coats the shaded vegetation where mosquitoes rest, killing them on contact for 21–30 days and covering ticks too — something no candle, torch, or coil can do. The realistic stack for a GTA backyard is barrier spray for the whole yard, Thermacell on the deck, and citronella candles purely for ambiance.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Do citronella candles work? The honest 2026 answer for Canada: a ~1-metre bubble that wind erases. Best candles, torches and coils, plus what actually stops bites.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('citronella-candles-canada-do-they-work')

export default function CitronellaCandlesCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'An evidence-based 2026 review of whether citronella candles, torches, coils and sprays actually repel mosquitoes in Canadian backyards.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Do Citronella Candles Work?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Do Citronella Candles Work?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The evidence-based answer for Canadian backyards — how far citronella candles, torches and coils actually reach, where to buy them, and what to use when you want mosquitoes gone for real.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
              Citronella candles work only weakly and only right beside the flame &mdash; controlled testing shows about 40&ndash;50% fewer bites for someone seated directly next to a burning candle in still air, but the protective bubble is under 1 metre and any breeze erases it. They cannot protect a table, patio, or yard, so use them for ambiance and rely on a Thermacell zone plus professional barrier spray for real relief.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Controlled testing (Journal of the American Mosquito Control Association) measured roughly 40&ndash;50% fewer bites for a person seated directly beside a burning citronella candle in still air.</li>
              <li>The repellent bubble reaches under about 1 metre and collapses in any breeze.</li>
              <li>Citronella masks the CO&#8322; and body scent mosquitoes track &mdash; it does not kill them, and it has zero effect on ticks.</li>
              <li>Plant-oil repellents like citronella wear off in 20&ndash;60 minutes, versus hours for DEET or picaridin.</li>
              <li>A season of citronella for a patio costs about $30&ndash;$80 in Canada.</li>
              <li>A Thermacell creates a ~4.5 m (15 ft) protected zone, and professional barrier spray kills mosquitoes across the whole yard for 21&ndash;30 days.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Citronella: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Citronella products are cheap and stocked almost everywhere from May through September. Because the protection is short-range, buying a few candles for a small seating group beats one big candle in the middle of a wide patio.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">Candles</th>
                  <th className="px-4 py-3 text-left">Torches / Coils</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Canadian Tire',     candles: '$8 – $30',  torch: '$15 – $45', note: 'Widest seasonal selection' },
                  { name: 'Home Depot Canada', candles: '$7 – $28',  torch: '$18 – $45', note: 'Tiki torches + fuel in stock' },
                  { name: 'Walmart Canada',    candles: '$6 – $20',  torch: '$12 – $35', note: 'Budget multipacks' },
                  { name: 'Costco Canada',     candles: '$15 – $30', torch: '$25 – $45', note: 'Spring multipacks only' },
                  { name: 'Dollarama',         candles: '$2 – $5',   torch: '$3 – $8',   note: 'Cheapest · smallest · weakest' },
                ].map(({ name, candles, torch, note }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{candles}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{torch}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices accurate as of July 2026. Citronella coils and incense need replacing every use; candles last 20–40 hours of burn time. Total season spend for a patio is typically $30–$80.
          </p>
          <div className="mt-5 rounded-xl bg-rose-50 border-l-4 border-rose-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-rose-900">⚠️ Citronella only protects the person sitting right beside it.</strong> Testing shows the repellent bubble is under ~1 metre and disappears in a breeze. For a hands-off patio zone use a <Link href="/blog/thermacell-canada-where-to-buy" className="text-emerald-700 underline font-semibold">Thermacell</Link>, and to actually reduce mosquitoes across the whole yard use <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link>. Keep the candles for ambiance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Citronella Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Active ingredient', 'Citronella oil (from Cymbopogon lemongrass)'],
                  ['How it works', 'Scent masks the CO₂ + body odour mosquitoes track'],
                  ['Bite reduction (beside candle)', '~40–50% in still air (JAMCA testing)'],
                  ['Effective range', 'Under ~1 metre · collapses in any breeze'],
                  ['Duration', 'While burning only · no lasting effect'],
                  ['Kills mosquitoes?', 'No — mild repel/mask only'],
                  ['Tick effectiveness', 'None'],
                  ['Whole-yard coverage', 'No — personal, short-range only'],
                  ['Formats', 'Candles, bucket candles, torches, coils, incense, spray'],
                  ['Season cost (patio)', '$30–$80 in Canada'],
                  ['Health Canada status', 'Registered as a mild personal repellent'],
                  ['Best use', 'Ambiance + tiny bonus beside your chair'],
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
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian prices across citronella formats (candles, torches, coils):</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="citronella candle outdoor">Check citronella candle price on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="citronella coils">Citronella coils →</BuyLink>
          </div>

          <h2 id="formats">Citronella Formats Compared: Candles vs Torches vs Coils vs Spray</h2>
          <p>Every citronella product uses the same active ingredient — oil from lemongrass (<em>Cymbopogon</em>) — so what really separates them is <strong>how much scent they push into the air and how close you sit to it</strong>. Here is every common format sold in Canada, roughly how far each one reaches, a 2026 price range, and a live Amazon.ca price check:</p>
          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100 shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Format</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Realistic range</th>
                  <th className="px-4 py-3 text-left">Approx. price (CA)</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Small candle / tin</td>
                  <td className="px-4 py-3 text-gray-700">Melts scented wax</td>
                  <td className="px-4 py-3 text-gray-700">Under 0.5 m</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$6 – $15</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="citronella candle tin" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">3-wick bucket candle</td>
                  <td className="px-4 py-3 text-gray-700">Bigger flame, warmer plume</td>
                  <td className="px-4 py-3 text-gray-700">~1 m in still air</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$12 – $30</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="citronella bucket candle 3 wick" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Tiki torch + fuel</td>
                  <td className="px-4 py-3 text-gray-700">Large flame at patio edge</td>
                  <td className="px-4 py-3 text-gray-700">~1 m near each torch</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$20 – $45</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="citronella torch fuel" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Coils</td>
                  <td className="px-4 py-3 text-gray-700">Smoulders, releases smoke</td>
                  <td className="px-4 py-3 text-gray-700">1–2 m in still air (smoke)</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$8 – $20</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="citronella coils" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Incense sticks</td>
                  <td className="px-4 py-3 text-gray-700">Smoulders, releases smoke</td>
                  <td className="px-4 py-3 text-gray-700">Under 1 m</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$6 – $18</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="citronella incense sticks" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Spray / lotion</td>
                  <td className="px-4 py-3 text-gray-700">Applied to skin</td>
                  <td className="px-4 py-3 text-gray-700">On-skin · wears off 20–60 min</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$8 – $20</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="citronella spray repellent" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="not-prose text-sm text-gray-600 mb-6">Want a slightly wider still-air pocket? Smouldering <strong>coils</strong> and <strong>incense</strong> push more scent than a candle — at the cost of smoke that can bother asthma sufferers. <BuyLink tag={AMZ_TAG} search="citronella coils">Check coil prices →</BuyLink></p>

          <p>Torches are the format buyers over-trust the most, because a row of flames looks like it ought to be doing something. It is the same citronella oil in a taller package, and the flame usually stands farther from your chair than a table candle does &mdash; <Link href="/blog/do-tiki-torches-repel-mosquitoes">the honest verdict on tiki torches</Link> walks through what the evidence actually supports.</p>

          <div className="not-prose my-6 rounded-xl bg-emerald-50 border-l-4 border-emerald-500 p-5">
            <p className="text-sm font-extrabold text-emerald-900 mb-1">Do citronella candles actually work? The honest answer.</p>
            <p className="text-sm text-gray-800 leading-relaxed">Yes — as a <em>mild, short-range</em> repellent. Controlled testing (Journal of the American Mosquito Control Association) puts a citronella candle at roughly 40–50% fewer bites for the person sitting right beside it in still air, with the effect dropping to near-zero within about a metre and in any breeze. It is genuinely better than nothing at your chair, but it will never clear a table, a patio, or a yard. For that, pair a <Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link> zone with <Link href="/mosquito-control">professional barrier spray</Link>, which also handles ticks — something citronella never touches.</p>
          </div>

          <h2>How Citronella Actually Works (and Why Range Is the Problem)</h2>
          <p>Female mosquitoes (the only ones that bite) find you by following a trail of carbon dioxide from your breath, plus body heat, lactic acid, and skin scent. Citronella oil works by <strong>masking</strong> those cues — its strong lemony aroma confuses a mosquito&rsquo;s ability to lock onto you. Crucially, it does not kill mosquitoes and it does not repel them the way DEET does; it simply makes you a little harder to detect.</p>
          <p>That mechanism is exactly why range is the fatal flaw. For the scent to work it has to physically fill the space between you and the mosquito, at a high enough concentration, at the moment it approaches. A candle releases only a thin plume of oil, so that concentration is only high enough within a small bubble — under roughly a metre — and the plume is easily blown away by even a light breeze. The instant you lean back, walk to the barbecue, or the wind shifts, the mosquitoes find you again.</p>
          <p><strong>What the research shows:</strong> studies published in the Journal of the American Mosquito Control Association found citronella candles reduced bites by around 40–50% for a person seated right beside them in still conditions — real, but modest, and dramatically less than a DEET or picaridin skin repellent, which routinely deliver 90%+ protection for hours. Plant-oil repellents like citronella also wear off far faster, in the 20–60 minute range.</p>

          <h2>When Citronella Is Worth Using</h2>
          <ul>
            <li><strong>Ambiance first</strong> — you want warm patio lighting and a fresh scent, with a tiny mosquito bonus</li>
            <li><strong>Right beside your chair</strong> — a candle or two clustered close to a small seating group</li>
            <li><strong>Still, sheltered evenings</strong> — no wind means the plume actually stays put</li>
            <li><strong>Layered with real tools</strong> — as the finishing touch on top of barrier spray and a Thermacell, not instead of them</li>
            <li><strong>Short sits</strong> — a quick coffee on the deck rather than a long dinner party</li>
          </ul>

          <h2>When Citronella Will Let You Down</h2>
          <ul>
            <li><strong>Anything windy or open</strong> — the plume blows away and protection drops to near zero</li>
            <li><strong>Covering a table or a group</strong> — only the person beside the flame benefits</li>
            <li><strong>A mosquito-heavy yard</strong> — candles do nothing about the shaded vegetation where mosquitoes breed and rest</li>
            <li><strong>Ticks</strong> — citronella has no effect on ticks whatsoever</li>
            <li><strong>Replacing skin repellent on the move</strong> — a DEET or picaridin spray lasts hours; citronella minutes</li>
          </ul>
          <p>Expecting a candle to cover a whole yard is one of the classic local errors, and it keeps company with waiting until July to start treating and leaving a rain barrel uncovered. All three appear on our list of <Link href="/blog/mosquito-mistakes-ontario-homeowners-make">the mosquito mistakes Ontario homeowners repeat every summer</Link>.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Or let us handle it</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray covers your whole yard from $99 — backed by 150+ five-star reviews and serving 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Citronella vs What Actually Works in a GTA Backyard</h2>
          <p>Citronella candles sit at the very bottom of the mosquito-control ladder — cheap, pleasant, and short-range. Here is how they stack up against the tools that genuinely move the needle:</p>
          <table className="min-w-[560px] not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Solution</th><th className="px-3 py-2 text-left">Coverage</th><th className="px-3 py-2 text-left">Mosquito reduction</th><th className="px-3 py-2 text-left">Tick coverage</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Citronella candle</strong></td><td className="px-3 py-2">Under 1 m bubble</td><td className="px-3 py-2">~40–50% beside it (still air)</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link></td><td className="px-3 py-2">~4.5 m zone</td><td className="px-3 py-2">70–95% in the zone</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">DEET / picaridin spray</td><td className="px-3 py-2">On skin</td><td className="px-3 py-2">90%+ for hours</td><td className="px-3 py-2">Repels ticks</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">Whole yard</td><td className="px-3 py-2">Kills on contact · 21–30 days</td><td className="px-3 py-2">Yes — full coverage</td></tr>
            </tbody>
          </table>

          <h2>The Honest Verdict for Canadian Buyers</h2>
          <p>Buy citronella candles if you want a nice-smelling, softly lit patio and you understand you are getting a small bite reduction only for whoever sits right beside the flame in calm air. Do not buy them expecting to reclaim a mosquito-infested backyard — the range is simply too short and too fragile in wind. If mosquitoes are actually ruining your evenings, the money is far better spent on a <Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link> for the deck and a <Link href="/mosquito-control">professional barrier spray</Link> for the whole property, then light the candles purely because you like them. If you are curious whether living plants do any better than candles, our guide to <Link href="/blog/mosquito-repellent-plants-ontario">mosquito-repellent plants in Ontario</Link> gives the honest, evidence-based answer (spoiler: also modest).</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/blog/mosquito-repellent-plants-ontario">Mosquito-Repellent Plants in Ontario — What Actually Works</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Get a Free Yard Assessment</Link></li>
          </ul>
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

        </div>
      </article>

      <CTASection heading="Candles for Ambiance · Barrier Spray for Actual Mosquitoes" subtext="Get a free quote for licensed barrier spray. From $99. Same-day yard protection. 21–30 day residual." variant="dark" />
    </>
  )
}
