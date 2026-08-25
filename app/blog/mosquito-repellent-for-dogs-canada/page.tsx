import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'mosquito-repellent-for-dogs-canada'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Mosquito Repellent for Dogs Canada 2026 — Vet-Safe Picks + What Not to Use'
const META_TITLE = 'Mosquito Repellent for Dogs Canada: Vet-Safe'

const FAQS = [
  {
    question: 'What is the safest mosquito repellent for dogs in Canada?',
    answer: 'For most dogs, a vet-recommended spot-on that also repels mosquitoes — such as K9 Advantix II or Vectra 3D — is the safest and most reliable option, because it is dosed by weight and lab-tested on dogs. For a gentler topical, cedarwood-and-lemongrass sprays like Wondercide or Vet\'s Best are labelled safe for dogs and can be reapplied before walks. Whatever you choose, NEVER put human DEET or human-strength picaridin on a dog, and never put any permethrin product on a home with cats. Repellents reduce bites but do NOT prevent heartworm — that still requires a year-round vet-prescribed heartworm preventive like Heartgard or NexGard.',
  },
  {
    question: 'Can I use DEET bug spray on my dog?',
    answer: 'No. DEET is not approved for use on dogs and can be toxic to them. Dogs lick their coats, and ingested DEET can cause vomiting, drooling, tremors, difficulty walking, and in larger doses seizures. There is no safe canine dose of human DEET spray — products like OFF! Deep Woods, Watkins, and Ben\'s are formulated for human skin only. If your dog needs mosquito protection, use a product specifically labelled for dogs, or ask your veterinarian for a spot-on that lists mosquito repellency on the label.',
  },
  {
    question: 'Is permethrin safe for dogs?',
    answer: 'Permethrin is safe and widely used ON DOGS at the correct dose — it is the active ingredient in several dog spot-ons (like K9 Advantix II) and repels and kills mosquitoes, fleas, and ticks. The critical warning is CATS: permethrin is highly toxic and frequently FATAL to cats, even from grooming a treated dog or brushing against them. If you have any cats in the household, do not use a permethrin dog product, or keep the treated dog fully separated until dry and follow your vet\'s guidance. Also never apply concentrated agricultural or clothing permethrin directly to a dog\'s skin — only use products dosed and labelled for dogs.',
  },
  {
    question: 'Can mosquitoes give my dog heartworm?',
    answer: 'Yes — mosquitoes are the only way dogs get heartworm. When a mosquito bites an infected animal it picks up microscopic larvae, and when it later bites your dog it deposits those larvae, which mature into worms that live in the heart and lungs. Heartworm disease is serious, expensive to treat, and can be fatal. This is why repellents alone are not enough: they reduce bites but a single bite can transmit heartworm. Every dog in Canada should be on a year-round or seasonal vet-prescribed heartworm preventive (Heartgard, NexGard, Interceptor, Advantage Multi, or similar). Reducing the mosquitoes around your yard is a helpful second layer, not a substitute.',
  },
  {
    question: 'Do natural mosquito repellents actually work on dogs?',
    answer: 'Plant-based repellents built on cedarwood oil, lemongrass, geraniol, and similar essential oils (Wondercide, Vet\'s Best, Cedarcide) do provide real but shorter-lived protection — typically a couple of hours before you need to reapply. They are a reasonable choice for a dog that reacts to stronger products, or as a top-up before a walk. Avoid undiluted essential oils and never use tea tree (melaleuca), pennyroyal, or concentrated oils on pets, as several are toxic. Read the label: a product should specifically say it is formulated and safe for dogs, and ideally list the concentration.',
  },
  {
    question: 'Where can I buy dog-safe mosquito repellent in Canada?',
    answer: 'Dog spot-ons that repel mosquitoes (K9 Advantix II, Vectra 3D) are sold at Canadian vet clinics, Ren\'s Pets, Pet Valu, PetSmart Canada, and Amazon.ca; the prescription heartworm preventives (Heartgard, NexGard, Interceptor) come from your veterinarian. Natural topical sprays (Wondercide, Vet\'s Best, Cedarcide) are stocked at Pet Valu, Global Pet Foods, Canadian Tire\'s pet aisle, and Amazon.ca. Always confirm a product is labelled for dogs and, if you own cats, that it is permethrin-free. Prices below are 2026 Canadian ranges.',
  },
  {
    question: 'How else can I protect my dog from mosquitoes at home?',
    answer: 'Layer your defences. Keep your dog on a vet-prescribed heartworm preventive (non-negotiable), apply a dog-labelled repellent before dawn/dusk outdoor time when mosquitoes are most active, dump standing water in the yard (dishes, toys, saucers, gutters) weekly since that is where mosquitoes breed, and reduce the mosquito population in the yard itself with a professional barrier treatment. BuzzSkito\'s licensed barrier spray targets the shaded resting spots where mosquitoes hide during the day, lowering how many ever reach your dog. It is applied to vegetation, not your pet, and is pet-safe once dry.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Vet-safe mosquito repellent for dogs in Canada: safest picks, why never DEET, permethrin is fine on dogs but fatal to cats, how mosquitoes spread heartworm, plus where to buy. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('mosquito-repellent-for-dogs-canada')

export default function MosquitoRepellentForDogsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A vet-informed 2026 guide to safe mosquito repellent for dogs in Canada, what never to use, and heartworm protection.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Repellent for Dogs Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Repellent for Dogs</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Which mosquito and bug repellents are actually safe for dogs in Canada, the ones that can poison your pet, why permethrin is fine on dogs but deadly to cats, and how mosquito bites give dogs heartworm.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="K9 Advantix II (dog-safe mosquito + tick spot-on)" search="k9 advantix ii dogs" label="Best for dog-only homes" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The safest mosquito repellents for dogs are dog-labelled products dosed by weight — a vet-recommended spot-on like K9 Advantix II or Vectra 3D, or a gentler cedarwood/lemongrass spray like Wondercide for cat households. Never put human DEET on a dog, and never use permethrin products around cats.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>K9 Advantix II costs $55–$95 for a 4-pack in Canada and repels mosquitoes, ticks, and fleas.</li>
              <li>Human DEET spray is toxic to dogs — ingestion from coat-licking can cause vomiting, tremors, and seizures.</li>
              <li>Permethrin is safe on dogs at the correct label dose but frequently fatal to cats, even from contact with a treated dog.</li>
              <li>Natural cedarwood/lemongrass sprays (Wondercide $25–$40, Vet&rsquo;s Best $15–$25) need reapplying about every 2 hours.</li>
              <li>Repellents do not prevent heartworm — mosquitoes are the only way dogs get it, so every dog needs a vet-prescribed preventive ($60–$130 per season).</li>
              <li>Professional yard barrier spray from $99 is applied to vegetation, not the pet, and is pet-safe once dry.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Dog-Safe Mosquito Repellents in Canada"
            awards={[
              {
                badge: 'Best for Dog-Only Homes',
                name: 'K9 Advantix II (permethrin spot-on)',
                why: 'The strongest, longest-lasting dog-labelled mosquito and tick repellency — a vet-recommended spot-on dosed by weight. Only for households with no cats.',
                search: 'k9 advantix ii dogs',
                score: 9.0,
                featured: true,
                pros: ['Repels mosquitoes, ticks, and fleas', 'Dosed by dog weight', 'Long-lasting between applications'],
                cons: ['Dogs only — never around cats', 'Prescription-strength; check with your vet'],
              },
              {
                badge: 'Best Spot-On Alternative',
                name: 'Vectra 3D (permethrin spot-on)',
                why: 'A second dog-only spot-on that repels mosquitoes and biting flies — a solid substitute if K9 Advantix II is out of stock or your vet prefers it.',
                search: 'vectra 3d dog',
                score: 8.5,
                pros: ['Repels mosquitoes and biting flies', 'Weight-banded dosing', 'Widely stocked'],
                cons: ['Dogs only — fatal to cats', 'Keep separated from cats until fully dry'],
              },
              {
                badge: 'Best for Cat Households',
                name: 'Wondercide (cedar / lemongrass spray)',
                why: 'A plant-based topical that is safe to use around cats. The go-to when permethrin is off the table, or for a sensitive dog — reapply before dawn/dusk outings.',
                search: 'wondercide flea tick mosquito spray',
                score: 8.3,
                pros: ['Safe for cat homes', 'Gentle on sensitive dogs', 'Reapply before walks'],
                cons: ['Shorter-lived — reapply about every 2 hours', 'Milder than a spot-on'],
              },
              {
                badge: 'Best Budget Natural',
                name: "Vet's Best / Cedarcide topical spray",
                why: 'An affordable natural top-up for before-walk protection in cat households. Handy as a quick refresh rather than all-day coverage.',
                search: 'vets best flea tick dog spray',
                score: 7.6,
                pros: ['Budget-friendly', 'Cat-home safe', 'Easy pre-walk top-up'],
                cons: ['Shorter-lived protection', 'Avoid eyes and nose'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Dogs only, no cats?</strong> The <em>Best for Dog-Only Homes</em> permethrin spot-on gives the strongest mosquito and tick repellency. <strong>Any cat in the house?</strong> Skip permethrin entirely and use the <em>Best for Cat Households</em> cedar/lemongrass spray. Whatever you pick, repellents never replace a vet-prescribed heartworm preventive — and for far fewer mosquitoes reaching your dog at all, <Link href="/mosquito-control">professional yard barrier spray</Link> treats the whole property.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Dog-Safe Mosquito Repellents: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Vet clinics and pet retailers (Ren&rsquo;s Pets, Pet Valu, PetSmart) carry the dog spot-ons; natural cedar and lemongrass sprays are stocked at pet stores and Amazon.ca. Prescription heartworm preventives come only from your veterinarian.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-[560px] w-full text-sm">
                <thead className="bg-brand-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Product</th>
                    <th className="px-4 py-3 text-left">Type</th>
                    <th className="px-4 py-3 text-left">Approx. price (CA)</th>
                    <th className="px-4 py-3 text-left">Price check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-navy-50">
                    <td className="px-4 py-3 font-bold text-brand-800">K9 Advantix II <span className="font-normal text-xs text-rose-600">(dogs only)</span></td>
                    <td className="px-4 py-3 text-gray-700">Permethrin spot-on · repels mosquitoes, ticks, fleas</td>
                    <td className="px-4 py-3 font-mono text-gray-800">$55 – $95 / 4-pack</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="k9 advantix ii dogs" block>Check price on Amazon.ca →</BuyLink></td>
                  </tr>
                  <tr className="border-b border-navy-50">
                    <td className="px-4 py-3 font-bold text-brand-800">Vectra 3D <span className="font-normal text-xs text-rose-600">(dogs only)</span></td>
                    <td className="px-4 py-3 text-gray-700">Permethrin spot-on · repels mosquitoes + biting flies</td>
                    <td className="px-4 py-3 font-mono text-gray-800">$60 – $110 / 3-pack</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="vectra 3d dog" block>Check price on Amazon.ca →</BuyLink></td>
                  </tr>
                  <tr className="border-b border-navy-50">
                    <td className="px-4 py-3 font-bold text-brand-800">Wondercide <span className="font-normal text-xs text-emerald-700">(cat-home safe)</span></td>
                    <td className="px-4 py-3 text-gray-700">Cedarwood / lemongrass spray · natural topical</td>
                    <td className="px-4 py-3 font-mono text-gray-800">$25 – $40</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="wondercide flea tick mosquito spray" block>Check price on Amazon.ca →</BuyLink></td>
                  </tr>
                  <tr className="border-b border-navy-50">
                    <td className="px-4 py-3 font-bold text-brand-800">Vet&rsquo;s Best <span className="font-normal text-xs text-emerald-700">(cat-home safe)</span></td>
                    <td className="px-4 py-3 text-gray-700">Peppermint / clove spray · natural topical</td>
                    <td className="px-4 py-3 font-mono text-gray-800">$15 – $25</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="vets best flea tick dog spray" block>Check price on Amazon.ca →</BuyLink></td>
                  </tr>
                  <tr className="border-b border-navy-50">
                    <td className="px-4 py-3 font-bold text-brand-800">Cedarcide <span className="font-normal text-xs text-emerald-700">(cat-home safe)</span></td>
                    <td className="px-4 py-3 text-gray-700">Cedar oil spray · natural topical + yard use</td>
                    <td className="px-4 py-3 font-mono text-gray-800">$30 – $50</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="cedarcide dog spray" block>Check price on Amazon.ca →</BuyLink></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-brand-800">Heartgard / NexGard <span className="font-normal text-xs text-gray-500">(Rx)</span></td>
                    <td className="px-4 py-3 text-gray-700">Heartworm preventive — from your vet, not a repellent</td>
                    <td className="px-4 py-3 font-mono text-gray-800">$60 – $130 / season</td>
                    <td className="px-4 py-3 text-xs text-gray-600">Veterinarian only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices are 2026 Canadian ranges and vary by dog weight/size and pack count. Spot-ons are dosed by weight — buy the band that matches your dog. Permethrin products (K9 Advantix II, Vectra 3D) are labelled DOGS ONLY.
          </p>
          <div className="mt-5 rounded-xl bg-rose-50 border-l-4 border-rose-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-rose-900">⚠️ Two rules that keep pets alive:</strong> Never put human DEET spray on a dog (toxic if licked), and never use a permethrin dog product in a household with cats — permethrin is frequently <strong>fatal to cats</strong>, even from contact with a treated dog. When in doubt, choose a cedar/lemongrass spray and ask your vet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Dog Mosquito Repellent — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Never use on dogs', 'Human DEET, human picaridin, tea tree oil, pennyroyal'],
                  ['Safe on dogs (by weight)', 'Permethrin spot-ons (K9 Advantix II, Vectra 3D)'],
                  ['Permethrin + cats', 'HIGHLY TOXIC — often fatal to cats. Never in a cat home'],
                  ['Gentle natural options', 'Cedarwood, lemongrass, geraniol sprays (reapply ~2h)'],
                  ['What repellents do NOT do', 'They do not prevent heartworm — a single bite can infect'],
                  ['Heartworm protection', 'Vet-prescribed preventive (Heartgard, NexGard, Interceptor)'],
                  ['Mosquito peak activity', 'Dawn and dusk — repel before those outings'],
                  ['Yard breeding source', 'Standing water — dump dishes, toys, saucers weekly'],
                  ['Yard-level control', 'Professional barrier spray (applied to plants, not the pet)'],
                  ['Vet consult recommended', 'Before any new spot-on, especially puppies/seniors/pregnant'],
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
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian prices on the dog-safe options mentioned below:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="k9 advantix ii dogs">K9 Advantix II price →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="wondercide flea tick mosquito dog">Wondercide spray →</BuyLink>
          </div>

          <p><em>This guide is general information, not veterinary advice. Every dog is different — talk to your veterinarian before starting any new repellent or preventive, especially for puppies, seniors, pregnant or nursing dogs, or dogs with health conditions.</em></p>

          <h2>What You Should NEVER Use on a Dog</h2>
          <p>The single most common mistake dog owners make is reaching for their own bug spray. Human insect repellents are formulated for human skin, not for an animal that licks its own coat.</p>
          <ul>
            <li><strong>DEET — never.</strong> DEET (the active ingredient in OFF! Deep Woods, Ben&rsquo;s, Watkins, and most human sprays) is <strong>not approved for dogs and is toxic to them</strong>. Because dogs groom themselves, they ingest whatever is on their fur. Symptoms of DEET poisoning include drooling, vomiting, tremors, wobbliness, and — at higher doses — seizures. There is no &ldquo;safe small amount&rdquo; of human DEET spray for a dog.</li>
            <li><strong>Human picaridin sprays — no.</strong> Like DEET, these are skin products for people, not dosed or tested for dogs.</li>
            <li><strong>Tea tree (melaleuca), pennyroyal, and concentrated essential oils — no.</strong> Several &ldquo;natural&rdquo; oils are actually toxic to pets. Only use plant-based products specifically diluted and labelled for dogs.</li>
            <li><strong>Any permethrin product if you own a cat — no (see below).</strong></li>
          </ul>

          <h2>The Permethrin Rule: Great on Dogs, Deadly to Cats</h2>
          <p>Permethrin is one of the most effective mosquito and tick repellents available for dogs — it is the active ingredient in popular spot-ons like <strong>K9 Advantix II</strong> and <strong>Vectra 3D</strong>, and used at the correct dog dose it both repels and kills mosquitoes. On dogs, it is well tolerated and vet-recommended.</p>
          <p>The life-or-death caveat is <strong>cats</strong>. Cats cannot metabolize permethrin the way dogs can, and exposure is <strong>frequently fatal</strong> — causing tremors, seizures, and death. Cats are poisoned not just by direct application but by <strong>contact</strong>: grooming a recently treated dog, sleeping against one, or brushing past a treated coat. If there is a cat anywhere in your household:</p>
          <ul>
            <li>The safest choice is to <strong>skip permethrin dog products entirely</strong> and use a cedar/lemongrass spray plus your vet&rsquo;s heartworm preventive.</li>
            <li>If your vet still recommends a permethrin spot-on, keep the treated dog <strong>fully separated from all cats until the product is completely dry</strong> (per the label), and never let cats groom the dog.</li>
          </ul>
          <p>And never — for any pet — apply concentrated agricultural or clothing-treatment permethrin directly to skin. Those are not dosed for animals. Only use products formulated and labelled for dogs at the weight band that matches your dog.</p>

          <div className="not-prose my-6 rounded-xl bg-emerald-50 border-l-4 border-emerald-500 p-5">
            <p className="text-sm font-extrabold text-emerald-900 mb-1">The bite that matters most: heartworm</p>
            <p className="text-sm text-gray-800 leading-relaxed">Mosquitoes are the <strong>only</strong> way dogs get heartworm. A single infected bite deposits larvae that mature into worms in the heart and lungs — a serious, expensive-to-treat, potentially fatal disease. Because even the best repellent can&rsquo;t block every bite, repellents are never a substitute for a year-round or seasonal vet-prescribed heartworm preventive. Think of it as two jobs: the <em>preventive</em> protects the dog from the inside; the <em>repellent and yard control</em> reduce how often mosquitoes reach the dog at all.</p>
          </div>

          <h2>How Mosquitoes Give Dogs Heartworm</h2>
          <p>When a mosquito bites an animal already carrying heartworm, it draws up microscopic immature worms (microfilariae). Those develop inside the mosquito for a couple of weeks, and the next time it bites — your dog — it injects infective larvae through the bite wound. Over several months those larvae travel to the heart and pulmonary arteries and grow into worms up to 30 cm long.</p>
          <p>This is why mosquito season matters so much for dog owners in the GTA. More mosquitoes around your yard means more bites, and every bite carries heartworm risk. The two-part answer is simple:</p>
          <ol>
            <li><strong>Prevent from the inside:</strong> keep your dog on a vet-prescribed heartworm preventive (Heartgard, NexGard, Interceptor, Advantage Multi, etc.) for the whole mosquito season, as your vet directs.</li>
            <li><strong>Reduce bites from the outside:</strong> a dog-safe repellent for outings, plus fewer mosquitoes in the yard to begin with.</li>
          </ol>

          <h2>Dog-Safe Repellent Options, Ranked by Situation</h2>
          <table className="min-w-[560px] not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Option</th><th className="px-3 py-2 text-left">Best for</th><th className="px-3 py-2 text-left">Watch-outs</th><th className="px-3 py-2 text-left">Price check</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>K9 Advantix II</strong> / Vectra 3D</td><td className="px-3 py-2">Strong, long-lasting mosquito + tick repellency</td><td className="px-3 py-2">Dogs only · never around cats</td><td className="px-3 py-2"><BuyLink tag={AMZ_TAG} search="k9 advantix ii dogs" block>Check price on Amazon.ca →</BuyLink></td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Wondercide</strong> (cedar/lemongrass)</td><td className="px-3 py-2">Cat-home households · sensitive dogs</td><td className="px-3 py-2">Reapply ~every 2 hours</td><td className="px-3 py-2"><BuyLink tag={AMZ_TAG} search="wondercide flea tick mosquito spray" block>Check price on Amazon.ca →</BuyLink></td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Vet&rsquo;s Best</strong> / Cedarcide</td><td className="px-3 py-2">Budget natural top-up before walks</td><td className="px-3 py-2">Shorter-lived · avoid eyes</td><td className="px-3 py-2"><BuyLink tag={AMZ_TAG} search="vets best flea tick dog spray" block>Check price on Amazon.ca →</BuyLink></td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Heartgard / NexGard</strong> (Rx)</td><td className="px-3 py-2">Heartworm prevention — every dog, all season</td><td className="px-3 py-2">Not a repellent · vet prescription</td><td className="px-3 py-2">Veterinarian only</td></tr>
            </tbody>
          </table>
          <p className="not-prose text-sm text-gray-600 mb-6">Whichever spray you pick, apply to the coat (avoiding eyes, nose, and mouth), reapply before dawn/dusk outings, and store out of a curious dog&rsquo;s reach. <BuyLink tag={AMZ_TAG} search="wondercide flea tick mosquito dog">Compare natural spray prices →</BuyLink></p>

          <h2>When to Use Which</h2>
          <ul>
            <li><strong>You have dogs only (no cats):</strong> a permethrin spot-on gives the strongest, longest mosquito and tick repellency. Pair it with your vet&rsquo;s heartworm preventive.</li>
            <li><strong>You have cats in the home:</strong> avoid permethrin entirely. Use a cedar/lemongrass spray on the dog before outings, plus the heartworm preventive, plus yard-level control.</li>
            <li><strong>Sensitive, senior, or puppy dogs:</strong> ask your vet first, and lean toward gentle natural sprays at label strength.</li>
            <li><strong>Heavy mosquito pressure around the yard:</strong> repellents help, but the biggest win is reducing the mosquito population itself — see below.</li>
          </ul>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Fewer mosquitoes in the yard = fewer bites on your dog</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s licensed barrier spray targets the shaded spots where mosquitoes hide during the day — applied to your vegetation, not your pet, and pet-safe once dry. From $99, backed by 150+ five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>The Complete Dog + Mosquito Protection Stack</h2>
          <p>For GTA dog owners, the most reliable protection isn&rsquo;t one product — it&rsquo;s layers that each do a different job:</p>
          <ol>
            <li><strong>Heartworm preventive (non-negotiable):</strong> a vet-prescribed monthly or seasonal preventive protects against the one thing repellents can&rsquo;t guarantee.</li>
            <li><strong>Dog-labelled repellent for outings:</strong> a permethrin spot-on (dogs-only homes) or a cedar/lemongrass spray (cat homes) before dawn/dusk walks and yard time.</li>
            <li><strong>Kill the breeding sites:</strong> mosquitoes breed in standing water. Empty water dishes, toys, plant saucers, tarps, and clogged gutters every few days.</li>
            <li><strong>Reduce the yard population:</strong> a <Link href="/mosquito-control">professional barrier treatment</Link> lowers how many mosquitoes are ever near your dog, applied to plants (not the pet) and safe once dry.</li>
          </ol>
          <p>Do all four and you&rsquo;ve protected your dog from the inside, on the skin, at the water source, and across the whole yard — which is a far stronger position than any single spray on its own.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/tick-repellent-for-dogs-ontario">Tick Repellent for Dogs: What Actually Works (Ontario 2026)</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Get a Free Yard Assessment</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Protect Your Dog · Fewer Mosquitoes in Your Yard" subtext="Get a free quote for licensed barrier spray. From $99. Pet-safe once dry. 150+ five-star reviews across the GTA." variant="dark" />
    </>
  )
}
