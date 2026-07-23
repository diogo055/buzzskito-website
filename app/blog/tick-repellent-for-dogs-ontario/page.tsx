import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'tick-repellent-for-dogs-ontario'
const DATE = '2026-07-09'
const UPDATED = '2026-07-12'
const TITLE = 'Tick Repellent for Dogs: What Actually Works (Ontario 2026)'

const FAQS = [
  {
    question: 'What is the best tick repellent for dogs?',
    answer: 'Veterinarians in Ontario recommend a prescription oral or topical preventative as the primary defence: oral isoxazolines (NexGard, Simparica, Bravecto, Credelio) kill ticks within 8–24 hours of attachment, and topical treatments (K9 Advantix II, Frontline Plus) repel or kill on contact. Only K9 Advantix II actively repels ticks before they bite; the oral products kill after the tick attaches. Speak to your veterinarian before starting any product — dosage depends on your dog\'s weight, age, and health history.',
  },
  {
    question: 'What kills ticks on dogs instantly?',
    answer: 'No product kills a tick truly instantly. The fastest-acting options are the oral isoxazoline preventatives (NexGard, Simparica, Bravecto), which kill an attached tick within roughly 8 to 24 hours. If a tick is already attached to your dog right now, do not wait for medication to work: remove it immediately with fine-tipped tweezers or a tick removal tool, gripping as close to the skin as possible and pulling straight up with steady pressure. Prompt removal is what reduces disease risk, not speed of the medication.',
  },
  {
    question: 'Do dog ticks carry Lyme disease?',
    answer: 'The American dog tick (Dermacentor variabilis) does not transmit Lyme disease. Lyme is carried by the blacklegged tick, also called the deer tick (Ixodes scapularis), which readily bites dogs despite its name. Roughly 10–30% of blacklegged ticks in southern Ontario carry the Lyme bacterium. So the answer depends on the species: if the tick on your dog is small, plain, and reddish-black, it is likely a blacklegged tick and Lyme is a real concern. See our deer tick vs dog tick guide to tell them apart.',
  },
  {
    question: 'Does natural tick repellent work on dogs?',
    answer: 'Natural repellents give partial, short-lived protection and are not a substitute for a veterinary preventative in a Lyme-endemic area like southern Ontario. Diluted cedarwood and lemon-eucalyptus oil products can deter some ticks for a few hours. Never apply essential oils to a dog without veterinary guidance — many, including tea tree, pennyroyal, and undiluted peppermint, are toxic to dogs, and cats are far more sensitive still. Garlic and brewer\'s yeast have no evidence of efficacy, and garlic is toxic to dogs in quantity.',
  },
  {
    question: 'How long does a tick need to be attached to give a dog Lyme disease?',
    answer: 'A blacklegged tick generally needs to be attached for 24 to 48 hours before it transmits the Lyme bacterium. This is why a daily tick check after outdoor time is one of the most effective protections available: if you find and remove the tick within a day, transmission risk drops sharply. Check ears, around the eyes, under the collar, armpits, groin, between the toes, and at the base of the tail — ticks favour warm, sheltered spots with thin skin.',
  },
  {
    question: 'Can I use human tick repellent on my dog?',
    answer: 'No. Never apply human insect repellents to dogs without veterinary direction. DEET is toxic to dogs and can cause vomiting, tremors, and seizures. Permethrin-treated clothing is safe around dogs once dry, but concentrated permethrin products intended for dogs must never be used on cats, where they are frequently fatal. Use only products formulated and dosed for your dog\'s species and weight.',
  },
  {
    question: 'Does treating my yard help protect my dog from ticks?',
    answer: 'Yes, and it addresses the source rather than the symptom. Most dogs pick up ticks in their own backyard, not on hikes. Ticks quest from lawn edges, leaf litter, fence lines, and shaded borders — the exact zones a professional tick barrier spray targets. Combining a yard barrier treatment with a vet-prescribed preventative and daily tick checks is the layered approach Ontario veterinarians recommend. BuzzSkito treats yards across the Greater Toronto Area, with tick programs and single treatments from $99.',
  },
  {
    question: 'When is tick season for dogs in Ontario?',
    answer: 'Ticks in Ontario are active any time the temperature is above roughly 4°C, which in practice means March through November, with two peaks: nymphs in May through July, and adults in September through October. Because mild winters now allow activity on warm winter days, most Ontario veterinarians recommend year-round tick prevention for dogs rather than seasonal dosing. Confirm the schedule with your own vet.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Tick Repellent for Dogs: What Actually Works (Ontario 2026)',
  description: 'Which tick preventatives kill ticks fastest, whether dog ticks carry Lyme, what "kills ticks instantly," and why natural repellents fall short in Ontario. Vet-aligned, with yard prevention.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('tick-repellent-for-dogs-ontario')

export default function TickRepellentForDogsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Tick repellent and prevention guide for dogs in Ontario.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Tick Repellent for Dogs', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Tick Repellent for Dogs</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Which products actually stop ticks, which are myths, and the layer most dog owners forget.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="K9 Advantix II (topical tick repellent for dogs)" search="K9 Advantix II for dogs" label="Best OTC tick repellent" />

      {/* Quick Answer — AI-extraction capsule */}
      <section className="bg-white pt-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-base text-gray-800 leading-relaxed">
              <strong>The most effective tick protection for a dog in Ontario is a vet-prescribed preventative &mdash; an oral isoxazoline (NexGard, Simparica, Bravecto, Credelio) that kills attached ticks within 8&ndash;24 hours, or a topical (K9 Advantix II) that repels ticks before they bite.</strong> Only topicals genuinely repel; orals kill after attachment. Natural repellents such as cedarwood oil offer brief, partial protection and are not a substitute in a Lyme-endemic region. Because most dogs pick up ticks in their own backyard, the layer owners most often miss is treating the yard itself: ticks wait in lawn edges, leaf litter, and fence lines, and a professional tick barrier spray removes them at the source. BuzzSkito treats yards across the Greater Toronto Area from $99. Always confirm any product with your veterinarian before use.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Oral isoxazolines (NexGard, Simparica, Bravecto, Credelio) kill an attached tick within roughly 8 to 24 hours.</li>
              <li>K9 Advantix II is the main topical that repels ticks before they bite; oral products only kill after the tick attaches.</li>
              <li>A Seresto collar can protect for up to 8 months per collar.</li>
              <li>A blacklegged tick generally needs 24 to 48 hours attached before it transmits Lyme, so a daily tick check is highly protective.</li>
              <li>Roughly 10&ndash;30% of blacklegged ticks in southern Ontario carry the Lyme bacterium.</li>
              <li>Never put DEET or a dog permethrin product on a cat &mdash; both are toxic; treating the yard adds a layer, from $99.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
            <p className="mt-1.5 text-xs text-gray-500">General information, not veterinary advice. Confirm any product and dose with your own veterinarian.</p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Dog Tick Preventatives Compared</h2>
          <AffiliateDisclosure />
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm min-w-[720px]">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Product type</th>
                  <th className="px-3 py-2 text-left">Examples</th>
                  <th className="px-3 py-2 text-left">Repels or kills?</th>
                  <th className="px-3 py-2 text-left">Speed</th>
                  <th className="px-3 py-2 text-left">Lasts</th>
                  <th className="px-3 py-2 text-left">Where to get it</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Oral isoxazoline',
                    ex: 'NexGard, Simparica, Credelio',
                    mode: 'Kills after attachment',
                    speed: '8–24 hrs',
                    lasts: '1 month',
                    where: <span className="text-gray-500">Prescription — see your vet</span>,
                  },
                  {
                    type: 'Oral, long-acting',
                    ex: 'Bravecto chew',
                    mode: 'Kills after attachment',
                    speed: '~12 hrs',
                    lasts: '12 weeks',
                    where: <span className="text-gray-500">Prescription — see your vet</span>,
                  },
                  {
                    type: 'Topical repellent',
                    ex: 'K9 Advantix II',
                    mode: 'Repels + kills on contact',
                    speed: 'Contact',
                    lasts: '1 month',
                    where: <BuyLink tag={AMZ_TAG} search="K9 Advantix II for dogs" block>Check price →</BuyLink>,
                  },
                  {
                    type: 'Topical, kill-only',
                    ex: 'Frontline Plus',
                    mode: 'Kills after contact',
                    speed: '24–48 hrs',
                    lasts: '1 month',
                    where: <BuyLink tag={AMZ_TAG} search="Frontline Plus for dogs" block>Check price →</BuyLink>,
                  },
                  {
                    type: 'Tick collar',
                    ex: 'Seresto',
                    mode: 'Repels + kills',
                    speed: 'Contact',
                    lasts: 'Up to 8 months',
                    where: <BuyLink tag={AMZ_TAG} search="Seresto tick collar for dogs" block>Check price →</BuyLink>,
                  },
                  {
                    type: 'Removal tool',
                    ex: 'Fine-tip tweezers, tick hook',
                    mode: 'Removes an attached tick',
                    speed: 'Instant',
                    lasts: 'Reusable',
                    where: <BuyLink tag={AMZ_TAG} search="tick removal tool tweezers for dogs">Check tick-removal tools on Amazon.ca →</BuyLink>,
                  },
                  {
                    type: 'Natural oils',
                    ex: 'Cedarwood, lemon eucalyptus',
                    mode: 'Weak, brief repellence',
                    speed: 'Hours',
                    lasts: 'Hours',
                    where: <span className="text-gray-500">Vet-guided only</span>,
                  },
                  {
                    type: 'Yard barrier spray',
                    ex: 'Professional treatment',
                    mode: 'Removes ticks at source',
                    speed: 'Same day',
                    lasts: 'Up to 30 days',
                    where: <Link href="/tick-control" className="font-semibold text-brand-700 hover:text-brand-500">BuzzSkito tick control →</Link>,
                  },
                ].map((row) => (
                  <tr key={row.type} className="border-t border-gray-100">
                    <td className="px-3 py-2 font-semibold text-brand-800">{row.type}</td>
                    <td className="px-3 py-2 text-gray-700">{row.ex}</td>
                    <td className="px-3 py-2 text-gray-700">{row.mode}</td>
                    <td className="px-3 py-2 text-gray-700">{row.speed}</td>
                    <td className="px-3 py-2 text-gray-700">{row.lasts}</td>
                    <td className="px-3 py-2 text-gray-700">{row.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Product names are listed for identification only. Dosing depends on your dog&rsquo;s weight, age, and health &mdash; always consult your veterinarian before starting or switching a preventative.</p>

          {/* What NOT to use — safety table */}
          <h2 className="text-xl font-extrabold text-brand-900 mt-10 mb-4">What NOT to Use on Dogs</h2>
          <div className="rounded-xl border-2 border-red-200 overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-red-50">
                <tr>
                  <th className="px-3 py-2 text-left text-red-900">Avoid</th>
                  <th className="px-3 py-2 text-left text-red-900">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['DEET (human bug spray)', 'Toxic to dogs — can cause vomiting, tremors, and seizures. Never apply human repellent to a dog.'],
                  ['Permethrin on cats', 'Safe on dogs at the label dose, but frequently FATAL to cats. Never use a dog product on a cat, or on a dog that lives with and grooms a cat.'],
                  ['Tea tree / pennyroyal / wintergreen oil', 'Essential oils that are toxic to dogs even in small amounts.'],
                  ['Garlic & brewer’s yeast', 'No proven repellent effect, and garlic is toxic to dogs in quantity.'],
                ].map(([avoid, why]) => (
                  <tr key={avoid} className="border-t border-red-100">
                    <td className="px-3 py-2 font-semibold text-red-800 align-top">{avoid}</td>
                    <td className="px-3 py-2 text-gray-700">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Topical tick products are regulated pesticides in Canada &mdash; see <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" target="_blank" rel="noopener">Health Canada&rsquo;s pest management guidance</a> and always follow the label for your dog&rsquo;s species and weight.</p>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Over-the-Counter Tick Products for Dogs"
            awards={[
              {
                badge: 'Best Repellent',
                name: 'K9 Advantix II (topical)',
                why: 'The main over-the-counter option that actually repels ticks before they bite, rather than only killing after attachment. A monthly spot-on dosed to your dog’s weight.',
                search: 'K9 Advantix II for dogs',
                score: 8.6,
                featured: true,
                pros: ['Repels + kills on contact', 'Monthly, easy to apply', 'Also targets fleas & mosquitoes'],
                cons: ['Toxic to cats — never use near a cat', 'Confirm dose with your vet'],
              },
              {
                badge: 'Longest Protection',
                name: 'Seresto Tick Collar',
                why: 'A single collar can repel and kill ticks for up to 8 months, so there is nothing monthly to remember. Good for owners who want set-and-forget coverage.',
                search: 'Seresto tick collar for dogs',
                score: 8.3,
                pros: ['Up to 8 months per collar', 'Repels + kills', 'No monthly dosing'],
                cons: ['Higher up-front cost', 'Watch for counterfeits'],
              },
              {
                badge: 'Kill-Only Topical',
                name: 'Frontline Plus (topical)',
                why: 'A widely stocked monthly spot-on that kills attached ticks and fleas. It does not repel before biting, so pair it with daily tick checks.',
                search: 'Frontline Plus for dogs',
                score: 7.6,
                pros: ['Widely available', 'Kills ticks & fleas', 'Familiar, long track record'],
                cons: ['Kills after attachment, does not repel', 'Slower than isoxazoline orals'],
              },
              {
                badge: 'Must-Have Backup',
                name: 'Tick Removal Tool',
                why: 'No product is instant — when you find an attached tick, prompt mechanical removal is what lowers disease risk. A fine-tip tweezer or tick hook belongs in every dog household.',
                search: 'tick removal tool tweezers for dogs',
                score: 8.0,
                pros: ['Removes an attached tick cleanly', 'Reusable, inexpensive', 'Fastest way to cut Lyme risk'],
                cons: ['Not a preventative on its own', 'Technique matters — grip at skin level'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Want to stop ticks before they bite?</strong> The <em>Best Repellent</em> K9 Advantix II is the standout over-the-counter pick. <strong>Prefer set-and-forget?</strong> A <em>Seresto</em> collar covers up to 8 months. Keep a <em>tick removal tool</em> on hand regardless. But the layer most owners skip is the yard itself &mdash; <Link href="/tick-control" className="font-semibold text-brand-700 hover:text-brand-500">a professional tick barrier spray</Link> removes ticks from the lawn edges where your dog actually finds them. Always confirm any product and dose with your veterinarian.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>&ldquo;What Kills Ticks on Dogs Instantly?&rdquo; &mdash; The Honest Answer</h2>
          <p>Nothing does. It is the most-searched phrase on this topic and it sets a false expectation. The fastest veterinary preventatives &mdash; the oral isoxazolines &mdash; kill an attached tick in roughly <strong>8 to 24 hours</strong>. Nothing you can buy kills a tick the moment it lands.</p>
          <p>That sounds like bad news but it is not, because of how transmission works: a blacklegged tick usually needs to be <strong>attached for 24 to 48 hours</strong> before it passes the Lyme bacterium. A preventative that kills within 24 hours therefore beats the clock in most cases. And if you find a tick on your dog right now, the correct move is not medication at all &mdash; it is <strong>immediate mechanical removal</strong> with fine-tipped tweezers or a tick tool, gripping at skin level and pulling straight up with steady pressure.</p>

          <h2>Do Dog Ticks Carry Lyme Disease?</h2>
          <p>This is where the naming confuses people. The <strong>American dog tick does not transmit Lyme disease</strong>. Lyme is carried by the <strong>blacklegged tick (deer tick)</strong> &mdash; which, despite the name, bites dogs constantly. Roughly <strong>10&ndash;30% of blacklegged ticks in southern Ontario</strong> carry <em>Borrelia burgdorferi</em>, the Lyme bacterium, according to the <a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html" target="_blank" rel="noopener">Government of Canada&rsquo;s Lyme disease surveillance</a>.</p>
          <p>So the risk depends entirely on the species you pulled off. A small, plain, sesame-seed-sized, reddish-black tick is a blacklegged tick and warrants watching for symptoms. A larger, apple-seed-sized tick with mottled grey-brown markings on its back is an American dog tick and carries low disease risk in Canada. Our <Link href="/blog/deer-tick-vs-dog-tick-canada">deer tick vs dog tick guide</Link> shows the difference side by side.</p>
          <p>Signs of Lyme in dogs appear <strong>2 to 5 months</strong> after the bite and include shifting-leg lameness, lethargy, fever, reduced appetite, and swollen lymph nodes. If you saw a tick and later see these signs, call your veterinarian.</p>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Your dog picks up ticks in your own yard</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Preventatives protect the dog. A tick barrier spray removes the ticks &mdash; from the lawn edges, leaf litter, and fence lines where they actually wait. BuzzSkito protects GTA yards with seasonal tick programs and single treatments from $99, safe for pets once dry.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/tick-control" className="btn-primary-sm">Explore Tick Control →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Natural Tick Repellents: What the Evidence Says</h2>
          <p>Cedarwood oil and lemon-eucalyptus derivatives do deter some ticks, but the protection is <strong>partial and measured in hours</strong>, not weeks. In a region where up to a third of blacklegged ticks carry Lyme, that is not a defence you want to rely on alone.</p>
          <p>More importantly, <strong>several popular &ldquo;natural&rdquo; ingredients are genuinely dangerous to pets</strong>:</p>
          <ul>
            <li><strong>Tea tree, pennyroyal, undiluted peppermint and wintergreen oils</strong> are toxic to dogs.</li>
            <li><strong>Permethrin</strong>, safe for dogs at label dose, is <strong>frequently fatal to cats</strong> &mdash; never use a dog product on a cat, or on a dog that grooms with a cat.</li>
            <li><strong>Garlic and brewer&rsquo;s yeast</strong> have no demonstrated efficacy, and garlic is toxic to dogs in quantity.</li>
            <li><strong>DEET</strong>, the human repellent, is toxic to dogs and can cause vomiting, tremors, and seizures.</li>
          </ul>
          <p>Never apply an essential oil to a dog without veterinary direction.</p>

          <h2>The Three-Layer Defence Ontario Vets Recommend</h2>
          <ol>
            <li><strong>A vet-prescribed preventative</strong>, dosed to your dog&rsquo;s weight and given year-round in most of southern Ontario, since ticks are active any time it is above about 4&deg;C.</li>
            <li><strong>A daily tick check</strong> after outdoor time. Run your fingers over the ears, around the eyes, under the collar, armpits, groin, between the toes, and the base of the tail. Removal within 24 hours dramatically reduces Lyme risk.</li>
            <li><strong>Yard treatment</strong>, the layer most owners skip. Most dogs meet their ticks in the backyard, not on a hike. <Link href="/tick-control">A professional tick barrier spray</Link> targets the lawn-to-woods edge, leaf litter, fence lines, and shaded borders where ticks quest &mdash; reducing the yard population by 80&ndash;95% through the season. It is safe for pets once dry, roughly 30 minutes after application.</li>
          </ol>
          <p>Mow to 3&ndash;4 inches, clear leaf litter at the edges each spring and fall, and lay a 3-foot wood-chip strip between lawn and any woods or tall grass. Ticks avoid crossing dry, sunny barriers.</p>
          <p>Ticks are not the only warm-weather pest your dog faces &mdash; mosquitoes carry heartworm, which is why many of the same yard and product measures overlap. See our companion guide on <Link href="/blog/mosquito-repellent-for-dogs-canada">mosquito repellent for dogs in Canada</Link> for the safe options there.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/i-found-tick-on-my-dog-what-to-do">I Found a Tick on My Dog &mdash; What to Do</Link></li>
            <li><Link href="/blog/how-to-remove-tick-from-dog-ontario">How to Remove a Tick from a Dog</Link></li>
            <li><Link href="/blog/tick-bite-on-dog-symptoms">Tick Bite on a Dog: Symptoms to Watch</Link></li>
            <li><Link href="/blog/what-does-tick-look-like-on-dog">What a Tick Looks Like on a Dog</Link></li>
            <li><Link href="/blog/deer-tick-vs-dog-tick-canada">Deer Tick vs Dog Tick</Link></li>
            <li><Link href="/blog/mosquito-repellent-for-dogs-canada">Mosquito Repellent for Dogs in Canada</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>

          <h2>Sources &amp; Further Reading</h2>
          <ul>
            <li><a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html" target="_blank" rel="noopener">Government of Canada — Lyme disease</a></li>
            <li><a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" target="_blank" rel="noopener">Health Canada — Pesticides &amp; pest management</a></li>
          </ul>

          <p className="text-xs text-gray-500 mt-8">This article is general information, not veterinary advice. Product choice and dosing must be confirmed with your own veterinarian.</p>
        </div>
      </article>

      <CTASection heading="Protect the Dog. Then Remove the Ticks." subtext="A yard barrier spray takes ticks out of the lawn edges where your dog actually finds them. From $99." variant="dark" />
    </>
  )
}
