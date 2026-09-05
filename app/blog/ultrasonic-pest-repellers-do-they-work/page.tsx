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
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'ultrasonic-pest-repellers-do-they-work'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'Do Ultrasonic Pest Repellers Work? The Evidence Says No'
// SERP title only (H1 + schema keep TITLE). Layout appends ' | BuzzSkito' (12 chars) — keep <= 48.
const SEO_TITLE = 'Ultrasonic Pest Repellers: The Evidence Says No'

const FAQS = [
  {
    question: 'Do ultrasonic pest repellers work on mice?',
    answer: 'No — not in any lasting way. Decades of controlled university extension testing in the US consistently find that mice are startled by a new ultrasonic device for a few days, then habituate and resume normal feeding, nesting, and travel within roughly 3–7 days. No peer-reviewed study has shown a plug-in device driving an established mouse population out of a home. A trap line plus sealed entry points solves mouse problems; ultrasound does not.',
  },
  {
    question: 'Do ultrasonic pest repellers work on rats?',
    answer: 'No. Rats are more neophobic than mice — warier of anything new — so a fresh ultrasonic unit can suppress visible activity slightly longer, sometimes a week or two. But the endpoint is the same: habituation, with rats documented feeding and nesting within centimetres of operating devices. If your droppings are over 1 cm long or gnaw marks show visible tooth grooves, you have rats — the answer is heavy-duty snap traps and exclusion, not a plug-in gadget.',
  },
  {
    question: 'Do ultrasonic repellers work on cockroaches, ants, or spiders?',
    answer: 'The insect evidence is even weaker. Kansas State University entomologists tested commercial ultrasonic devices in 2002 and found a measurable effect on crickets, little to no effect on cockroaches, and essentially none on ants or spiders. Spiders in particular sense vibration through surfaces, not airborne ultrasound, so the devices are irrelevant to them. No ultrasonic device has ever demonstrated elimination of an indoor cockroach or ant infestation in a controlled study.',
  },
  {
    question: 'Do ultrasonic mosquito repellers work?',
    answer: 'No — this is one of the most thoroughly debunked claims in consumer pest control. A 2007 Cochrane systematic review examined 10 field studies of electronic mosquito repellents and found no evidence they reduce mosquito landing or biting rates at all. The premise is flawed: the devices claim to mimic male mosquito wingbeats or dragonfly sounds, but biting females do not flee either sound in practice. Health agencies worldwide recommend proven repellents such as icaridin or DEET instead.',
  },
  {
    question: 'Are ultrasonic pest repellers regulated or approved in Canada?',
    answer: 'No Canadian regulator evaluates whether ultrasonic pest repellers actually work. Because the devices contain no pesticide, they fall outside the Pest Control Products Act and never go through PMRA review of efficacy data before sale. A spray must prove its claims to Health Canada; an ultrasonic plug-in can print almost any coverage or repellency claim on the box with no pre-market check. That regulatory gap is exactly why the category survives despite the evidence.',
  },
  {
    question: 'Why did the FTC take action against ultrasonic repeller companies?',
    answer: 'Because manufacturers kept making efficacy claims they could not support. In May 2001 the US Federal Trade Commission sent warning letters to more than 60 manufacturers and retailers of ultrasonic pest-control devices, stating that claims of repelling or eliminating pests must be backed by competent scientific evidence. In 2002 the FTC went further and charged Lentek International over unsubstantiated claims for its pest-repelling devices. US class actions against major brands, including Bell + Howell branded repellers, have since made the same core allegation: the devices do not do what the packaging says.',
  },
  {
    question: 'Does ultrasound travel through walls and furniture?',
    answer: 'No — and this kills the coverage claims on the box. Ultrasound behaves more like light than audible sound: highly directional, reflected by hard surfaces, absorbed by soft ones like carpet and upholstery. A wall, a couch, or even a cardboard box creates a sound shadow with zero effect. Since mice live inside wall voids, behind appliances, and under cabinets — all shadow zones — the device covers a fraction of the room, let alone the home.',
  },
  {
    question: 'Are ultrasonic pest repellers safe for pets?',
    answer: 'For dogs and cats the devices are generally considered safe but potentially annoying — both hear well into the ultrasonic range (dogs to roughly 45 kHz, cats to 64 kHz), so a device pitched at rodents is fully audible to them. The bigger concern is pet rodents and rabbits: hamsters, gerbils, and guinea pigs hear in the exact range the devices target, and continuous exposure is a genuine stressor — do not run one in the same room as small pets.',
  },
  {
    question: 'I plugged one in and saw fewer mice — why?',
    answer: 'Three common reasons, none lasting. First, the startle effect is real: a novel sound can suppress visible rodent activity for a few days before habituation. Second, people rarely change one thing at a time — the same week the device went in, food got sealed or crumbs got cleaned. Third, less visible activity is not fewer mice: ultrasound can shift travel routes into wall voids where you no longer see them. Measure by evidence — fresh droppings, gnaw marks, trap catches — not sightings.',
  },
  {
    question: 'What should I buy instead of an ultrasonic pest repeller?',
    answer: 'For mice: a dozen snap traps deployed 2–3 metres apart along walls on night one, or an electronic trap like the Victor M250S for no-touch disposal, then seal every gap of 6 mm or more with steel wool and sealant. For rats: heavy-duty rat-rated snap traps. For persistent exterior pressure: a PMRA-registered tamper-resistant bait station as a last resort. Each has a measurable outcome — a body count or a sealed hole — which is precisely what ultrasound never delivers.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: SEO_TITLE,
  description: 'No. The FTC warned 60+ companies in 2001, rodents habituate to the sound within days, and no Canadian regulator checks the box claims. What works instead.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('ultrasonic-pest-repellers-do-they-work')

export default function UltrasonicPestRepellersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian evidence review of ultrasonic pest repellers: FTC enforcement history, habituation research, the Canadian regulatory gap, and proven alternatives.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Ultrasonic Pest Repellers — Do They Work?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Ultrasonic Pest Repellers</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">FTC enforcement history, habituation research, the physics of why ultrasound stops at your couch, and the regulatory gap that lets these devices make claims no Canadian agency ever checks.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">No — ultrasonic pest repellers do not work as advertised. Decades of controlled research show rodents habituate to ultrasound within days, insects are barely affected, and no Canadian regulator verifies the efficacy claims on the box because the devices contain no pesticide and fall outside PMRA review. Skip the plug-ins entirely; the same money buys traps and exclusion materials with a measurable outcome.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>In May 2001 the US FTC sent warning letters to more than 60 manufacturers and retailers of ultrasonic pest-control devices over unsupported claims.</li>
              <li>The FTC charged Lentek International in 2002 for unsubstantiated pest-repeller efficacy claims.</li>
              <li>University research finds rodents habituate to ultrasonic sound within roughly 3–7 days and will nest beside operating units.</li>
              <li>Kansas State University testing in 2002 found some effect on crickets but little to none on cockroaches, ants, or spiders.</li>
              <li>A 2007 Cochrane review of 10 field studies found electronic mosquito repellents had no effect on mosquito landing rates.</li>
              <li>Ultrasound above 20 kHz does not pass through walls or furniture — mice inside wall voids never hear it.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="household pests" />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <h2>Do Ultrasonic Pest Repellers Actually Work?</h2>
          <p>No. Across roughly four decades of laboratory and field testing, no controlled study has shown a consumer ultrasonic device preventing or eliminating a rodent or insect infestation — and that is the standard the packaging implies when it promises to &ldquo;drive pests out.&rdquo; The consistent finding is a brief behavioural startle in the first days after a device is switched on, followed by complete habituation: the animals learn the sound carries no consequence and carry on feeding, travelling, and breeding. With the ultrasonic plug-in off the table, the practical question is what remains &mdash; we work through <Link href="/blog/mouse-repellent-canada" className="text-brand-700 underline">every mouse repellent sold in Canada and the evidence behind each one</Link>, including the peppermint-oil and moth-ball claims.</p>
          <p>This page is the evidence file: the regulatory actions, the university research, and the physics. Ultrasonic repellers are among the best-selling pest products on Amazon.ca — often outselling the traps that actually work — which is why there are deliberately no ultrasonic devices linked anywhere on this page.</p>

          <h2>What Does the Research Say About Ultrasonic Repellers?</h2>
          <p>The research record is unusually one-sided: startle, then habituation, then nothing. The key findings that come up again and again:</p>
          <ul>
            <li><strong>Rodents habituate within days.</strong> US university extension testing going back to the 1980s — including the University of Nebraska&ndash;Lincoln&rsquo;s wildlife damage program — found mice and rats show reduced activity for roughly 3–7 days around a new ultrasonic source, then return to baseline; rodents have been documented nesting and raising litters beside operating units.</li>
            <li><strong>Insects mostly ignore it.</strong> Kansas State University entomologists tested commercial devices in 2002 and found a measurable effect on crickets, minimal effect on cockroaches, and effectively none on ants or spiders. Nothing since has overturned that result.</li>
            <li><strong>Mosquito versions fail completely.</strong> A 2007 Cochrane systematic review — the highest tier of medical evidence synthesis — examined 10 field studies of electronic mosquito repellents and found no reduction in mosquito landing rates whatsoever.</li>
            <li><strong>No elimination study exists.</strong> The claim that matters to a homeowner — &ldquo;this will end my infestation&rdquo; — has never been demonstrated in a peer-reviewed controlled study for any plug-in ultrasonic device, for any pest.</li>
          </ul>
          <p>Habituation is not a design flaw one brand could fix — it is how nervous systems work. A stimulus that repeatedly costs an animal nothing gets filtered out, and mice living among compressor hums, furnace fans, and footsteps are exceptionally good at ignoring meaningless noise.</p>

          <h2>What Has the FTC Done About Ultrasonic Repeller Claims?</h2>
          <p>Quite a lot — the US Federal Trade Commission has been formally challenging this product category for a quarter century. In May 2001, FTC staff sent warning letters to <strong>more than 60 manufacturers and retailers</strong> of ultrasonic pest-control devices, putting the entire industry on notice that repellency and elimination claims must be supported by competent and reliable scientific evidence.</p>
          <p>In 2002 the FTC escalated from warnings to enforcement, charging <strong>Lentek International</strong> over unsubstantiated efficacy claims for its pest-repelling devices. US class actions against major brands — including the widely sold Bell + Howell repellers — have since alleged the same core defect: the devices simply do not repel pests. Canada has no equivalent enforcement history, but not because Canadian devices work better; the same units ship to both markets.</p>

          <h2>Why Doesn&rsquo;t Canada Verify These Claims?</h2>
          <p>Because ultrasonic repellers slip through a regulatory gap: they contain no pesticide, so they fall outside the Pest Control Products Act, which means <strong>no Canadian agency reviews their efficacy before sale</strong>. A domestic-class rodenticide or insect spray must be registered with Health Canada&rsquo;s PMRA, which reviews safety <em>and</em> supporting data before the product can make claims. An ultrasonic plug-in faces no such review — the &ldquo;covers 1,200 sq ft&rdquo; and &ldquo;drives out mice, rats, roaches and spiders&rdquo; text on the box is checked by nobody.</p>
          <p>Worth internalizing as a Canadian shopper: <strong>no PMRA registration number means the claims are unverified</strong>, not that the product is gentler or greener. Mechanical traps are also unregistered — but a snap trap&rsquo;s mechanism is self-evident, while an ultrasonic device&rsquo;s entire value proposition rests on claims no regulator has tested and the published science contradicts.</p>

          <h2>Why Does Ultrasound Fail Physically?</h2>
          <p>Even if habituation didn&rsquo;t exist, the physics would sink these devices. Ultrasound — sound above roughly 20 kHz — behaves less like the booming bass that travels through your ceiling and more like light from a lamp:</p>
          <ul>
            <li><strong>It does not penetrate walls.</strong> A device in the kitchen is inaudible inside the wall void 30 cm away — which is where the mice actually live, nest, and travel.</li>
            <li><strong>Soft surfaces absorb it.</strong> Carpet, curtains, upholstery, and even cardboard soak up ultrasonic energy, shrinking the effective zone far below the coverage number on the box.</li>
            <li><strong>Hard surfaces cast shadows.</strong> Every couch, appliance, and cabinet creates a dead zone behind it. The route mice prefer — along baseboards, behind the stove, under the sink — is almost entirely shadow.</li>
            <li><strong>Intensity collapses with distance.</strong> Even in open line-of-sight, the sound level a few metres from the emitter is a fraction of what the spec sheet implies.</li>
          </ul>
          <p>Put together: a plug-in projects a cone of sound into the open middle of a room — the space rodents cross least — while the wall-void highways they actually use stay silent. The animal that hears it clearly is your dog.</p>

          <h2>Are There Narrow Cases Where They Might Briefly Help?</h2>
          <p>Honesty cuts both ways, so here is the complete list of situations where the evidence allows a limited maybe — none of which justifies buying one:</p>
          <ul>
            <li><strong>The first-days startle window.</strong> A device switched on the same night you deploy a full trap line might shift rodent travel routes for a few days — conceivably toward your traps. Extension literature treats this as unreliable, and traps alone catch most mice on night one anyway.</li>
            <li><strong>Crickets, specifically.</strong> The one insect group with a measurable lab response. If your entire problem is crickets in an open basement, an ultrasonic unit might reduce chirping near the device. It still won&rsquo;t remove them from the structure.</li>
            <li><strong>Small enclosed empty spaces.</strong> Some owners run a unit in a parked RV or vehicle cab over winter — tiny, line-of-sight, food-free. Evidence is anecdotal; steel wool in the intake gaps does the real work.</li>
          </ul>
          <p>The common thread: the ultrasonic device is always a free rider on measures that work on their own — never the effective ingredient.</p>

          <h2>What Actually Works Instead?</h2>
          <p>Trapping plus exclusion — the two methods with measurable outcomes. For a mouse problem, that means 6–12 snap traps placed every 2–3 metres along walls with the trigger touching the baseboard (our <Link href="/blog/best-mouse-trap-canada">best mouse trap guide</Link> covers models and placement science), then sealing every entry gap of 6 mm or more. If you want no-see, no-touch disposal, an electronic trap kills in under 5 seconds and handles up to 100 kills per set of batteries — we tested the category leader in our <Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor electronic mouse trap review</Link>.</p>
          <AffiliateDisclosure />
          <TopPick tag={AMZ_TAG}
            label="What To Buy Instead"
            name="Victor M250S Electronic Mouse Trap"
            blurb="The no-touch alternative to a plug-in that never worked: it delivers a high-voltage kill in under five seconds, signals each catch with an indicator light, and handles up to about 100 kills per set of batteries. A measurable outcome — a body count — is exactly what ultrasound never gives you."
            search="victor electronic mouse trap"
            score={8.8}
            pros={['Kills in under 5 seconds', 'No-see, no-touch disposal', 'Kill-indicator light per catch']}
            cons={['Mouse-sized rodents only (not rats)', 'Needs fresh batteries to stay lethal']}
          />
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="victor electronic mouse trap">Check the Victor electronic trap on Amazon.ca →</BuyLink>
          </div>
          <p>Scale the same logic to your actual pest: rats need rat-rated hardware (see the <Link href="/blog/best-rat-trap-canada">best rat trap guide</Link> — mouse traps physically cannot kill rats), persistent exterior pressure can justify a PMRA-registered tamper-resistant station (covered in the <Link href="/blog/mouse-bait-station-canada">mouse bait station guide</Link>, with the legal landscape in <Link href="/blog/rat-poison-canada-what-is-legal">what rat poison is legal in Canada</Link>), and the full playbooks live in <Link href="/blog/how-to-get-rid-of-mice-canada">how to get rid of mice in Canada</Link> and <Link href="/blog/how-to-keep-mice-out-of-your-house-winter">keeping mice out over winter</Link>. If the problem outgrows DIY, our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> shows what professional rodent work runs.</p>

          <h2>Ultrasonic Repellers vs Methods That Work: How Do They Compare?</h2>
          <p>One table, whole decision: every row below the first has controlled evidence and a measurable outcome; the first row has neither.</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm my-6 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">Evidence quality</th>
                  <th className="px-4 py-3 text-left">Measurable outcome</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: 'Ultrasonic repeller', evidence: 'No controlled study shows infestation control; FTC-challenged claims', outcome: 'None — habituation within days', verdict: 'Skip entirely' },
                  { method: 'Snap trap line (6–12 traps)', evidence: 'Decades of field data; extension-recommended first move', outcome: 'Body count per night', verdict: 'Best first response' },
                  { method: 'Electronic trap (Victor M250S)', evidence: 'Kill rates rival well-placed snap traps in independent tests', outcome: 'Indicator light per kill', verdict: 'Best no-touch option' },
                  { method: 'Exclusion (seal 6 mm+ gaps)', evidence: 'Universally endorsed by public health and extension guidance', outcome: 'Entry points closed for good', verdict: 'The permanent fix' },
                  { method: 'PMRA-registered bait station', evidence: 'Efficacy data reviewed at registration', outcome: 'Bait take (with caveats)', verdict: 'Last resort, exterior-first' },
                ].map(({ method, evidence, outcome, verdict }) => (
                  <tr key={method} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-bold text-brand-800">{method}</td>
                    <td className="px-4 py-3 text-gray-700">{evidence}</td>
                    <td className="px-4 py-3 text-gray-700">{outcome}</td>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-600">{verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Only consumer options are listed. Second-generation anticoagulant rodenticides are commercial-class in Canada and are not a legal DIY option — details in our <Link href="/blog/rat-poison-canada-what-is-legal">rodenticide legality guide</Link>.</p>

          <h2>The Bottom Line</h2>
          <p>Ultrasonic pest repellers are a category kept alive by a regulatory gap and a startle effect that fades before the return window closes. The FTC warned over 60 companies in 2001; the habituation research predates that by a decade; and in Canada, nobody checks the box copy at all. Every dollar spent on a plug-in is a dollar not spent on the traps and steel wool that actually end infestations — and every week spent waiting on ultrasound is a week of unchecked breeding. Buy the boring stuff. It works.</p>

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
            <li><Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor Electronic Mouse Trap Review — Canada</Link></li>
            <li><Link href="/blog/best-rat-trap-canada">Best Rat Trap Canada — When Mouse Traps Aren&rsquo;t Enough</Link></li>
            <li><Link href="/blog/mouse-bait-station-canada">Mouse Bait Stations in Canada — What&rsquo;s Legal and When to Use Them</Link></li>
            <li><Link href="/blog/rat-poison-canada-what-is-legal">Rat Poison in Canada — What Is Actually Legal</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mice-canada">How to Get Rid of Mice in Canada — Full Playbook</Link></li>
            <li><Link href="/blog/how-to-keep-mice-out-of-your-house-winter">How to Keep Mice Out of Your House This Winter</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="pest repellers" />
      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Victor M250S electronic mouse trap" search="victor electronic mouse trap" label="What to buy instead" />
    </>
  )
}
