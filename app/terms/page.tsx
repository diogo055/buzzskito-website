import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, speakableSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Service Agreement | BuzzSkito',
  description: 'BuzzSkito LTD. Service Agreement — terms and conditions for mosquito and tick control services in the Greater Toronto Area.',
  canonical: '/terms',
})

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Service Agreement', url: '/terms' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/terms')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Service Agreement</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Service Agreement</h1>
          <p className="text-xl text-brand-100 max-w-xl">BuzzSkito LTD. — Terms &amp; Conditions</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">

          <p className="text-sm text-gray-500">Effective Date: May 1, 2026 &middot; Last Updated: April 2026</p>

          <p>This Service Agreement (the &ldquo;Agreement&rdquo;) is entered into by and between:</p>
          <p><strong>BuzzSkito LTD.</strong><br />Business Registration Number: 1001003669<br />(hereinafter referred to as &ldquo;Service Provider&rdquo;)</p>
          <p>(Client hereinafter referred to as &ldquo;Client&rdquo;)</p>

          <hr />

          <h2>1. Definitions</h2>
          <p>1.1 <strong>Service Provider:</strong> BuzzSkito LTD.</p>
          <p>1.2 <strong>Client:</strong> The undersigned customer receiving the services.</p>
          <p>1.3 <strong>Treatment Area:</strong> The Client&rsquo;s property where services will be applied.</p>
          <p>1.4 <strong>Force Majeure Event:</strong> Events beyond control, including but not limited to natural disasters, regulatory changes, pandemics, or labor strikes.</p>
          <p>1.5 <strong>Service Year:</strong> The annual treatment season running from May through September of each calendar year.</p>

          <h2>2. Service Description</h2>
          <p>2.1 <strong>Services Provided:</strong> Mosquito and tick control treatments.</p>
          <p>2.2 <strong>Treatment Schedule:</strong> As determined by the Client&rsquo;s selected program. Standard programs include treatments from May to September for mosquito control and targeted seasonal treatments for tick control.</p>
          <p>2.3 <strong>Treatment Solution:</strong> Dragnet FT EC Insecticide, a permethrin-based solution, will be used. The Client accepts the use of this product on their property.</p>
          <p>2.4 <strong>Scope of Services:</strong> Application of insecticide, property inspection, and re-treatment if necessary. No guarantee of complete eradication of mosquitoes and ticks due to environmental variables.</p>
          <p>2.5 <strong>Weather Delays:</strong> Service Provider may reschedule treatments due to unsafe weather conditions without penalty.</p>
          <p>2.6 <strong>Service Limitation:</strong> The Client acknowledges that mosquito and tick control is a reduction service and not a guarantee of complete elimination. External environmental factors, such as neighboring properties or weather conditions, may impact results.</p>
          <p>2.7 <strong>Service Schedule Flexibility:</strong> During periods of high demand or weather-related disruptions, the Service Provider reserves the right to adjust treatment dates within a reasonable timeframe to ensure service quality.</p>

          <h2>3. Payment Terms</h2>
          <p>3.1 <strong>Fees:</strong> Payment for the selected program(s) is due upfront. Monthly payment arrangements may be available upon request.</p>
          <p>3.2 <strong>Payment Methods:</strong> Acceptable methods include credit card, e-transfer, and cash.</p>
          <p>3.3 <strong>Payment Due Date:</strong> Payment is due immediately upon receipt of an invoice unless otherwise agreed upon in writing.</p>
          <p>3.4 <strong>Late Fees:</strong> Interest accrues on unpaid balances at 2% per month until paid in full.</p>
          <p>3.5 <strong>Administrative Fees:</strong> A processing fee may apply to monthly payment arrangements.</p>

          <h2>4. Term, Renewal &amp; Termination</h2>
          <p>4.1 <strong>Duration:</strong> This Agreement is valid for the Service Year in which services are purchased (May through September).</p>
          <p>4.2 <strong>Automatic Renewal:</strong> Unless the Client provides written notice of cancellation at least thirty (30) days prior to May 1st of the following year, this Agreement shall automatically renew for an additional Service Year at the then-current pricing. The Service Provider will make reasonable efforts to notify the Client of any pricing changes prior to renewal. The Client may cancel the renewal at any time before the start of the new Service Year by contacting the Service Provider in writing.</p>
          <p>4.3 <strong>Cancellation by Client:</strong> Written notice required 72 hours prior to the next application for a refund on remaining treatments. Cancellations within 72 hours are non-refundable for that service but refundable for future treatments.</p>
          <p>4.4 <strong>Termination by Service Provider:</strong> Non-payment, lack of property access, unsafe conduct, or regulatory/legal issues may lead to termination.</p>
          <p>4.5 <strong>Severability:</strong> If any provision is found unenforceable, the remainder of the Agreement remains in effect.</p>

          <h2>5. Client Obligations &amp; Liability</h2>
          <p>5.1 <strong>Access to Property:</strong> Client must provide reasonable access for treatments.</p>
          <p>5.2 <strong>Safety Measures:</strong> Pets and children must remain indoors and off treated areas for 30 minutes or until dry.</p>
          <p>5.3 <strong>Client Responsibilities:</strong></p>
          <ul>
            <li>Remove debris, toys, and other items from the treatment area before service.</li>
            <li>Secure windows and doors during application.</li>
            <li>Notify Service Provider of any landscaping, construction, or events affecting services.</li>
          </ul>
          <p>5.4 <strong>Indemnification:</strong> Client agrees to indemnify and hold the Service Provider harmless from claims arising from Client&rsquo;s negligence or breach of this Agreement.</p>
          <p>5.5 <strong>Hazard Disclosure:</strong> The Client agrees to inform the Service Provider of any hazardous conditions on the property (e.g., aggressive pets, unstable structures, hazardous chemicals) prior to each visit.</p>

          <h2>6. Liability &amp; Insurance</h2>
          <p>6.1 <strong>Insurance Coverage:</strong> Service Provider maintains comprehensive insurance coverage.</p>
          <p>6.2 <strong>Limitation of Liability:</strong> Liability does not exceed the amount paid for services. Service Provider is not liable for indirect, incidental, or consequential damages.</p>
          <p>6.3 <strong>Health &amp; Environmental Precautions:</strong> The treatment solution is safe when instructions are followed. Client must inform Service Provider of environmental concerns (e.g., gardens, ponds, water sources).</p>

          <h2>7. Force Majeure &amp; Service Disruptions</h2>
          <p>7.1 <strong>Weather-Related Delays:</strong> Service Provider decides if weather conditions prevent safe treatment.</p>
          <p>7.2 <strong>Impact of Force Majeure:</strong> Services may be suspended temporarily without liability.</p>
          <p>7.3 <strong>Refund Policy During Force Majeure:</strong> If services are suspended for 30+ consecutive days due to a Force Majeure Event, the Client may request a prorated refund for services not rendered.</p>

          <h2>8. Dispute Resolution</h2>
          <p>8.1 <strong>Governing Law:</strong> Ontario, Canada.</p>
          <p>8.2 <strong>Mediation &amp; Arbitration:</strong> Disputes will first undergo mediation, followed by binding arbitration if necessary. Each party bears its own costs unless otherwise awarded.</p>

          <h2>9. Notice Requirements</h2>
          <p>9.1 <strong>Written Notice:</strong> Email to <a href="mailto:info@buzzskito.ca">info@buzzskito.ca</a>. Notices are deemed received within 24 hours.</p>

          <h2>10. Media Consent</h2>
          <p>10.1 <strong>Client Consent:</strong> The Client grants permission for the Service Provider to take non-identifiable photos/videos of treated property areas for marketing purposes. The Service Provider will not use images that feature identifiable persons or sensitive personal property without written consent.</p>
          <p>10.2 <strong>Opt-Out Procedure:</strong> The Client may opt out of media capture by providing written notice.</p>

          <h2>11. Privacy &amp; Data Protection</h2>
          <p>11.1 <strong>Compliance:</strong> Service Provider will handle the Client&rsquo;s personal information in compliance with PIPEDA and other applicable privacy laws.</p>

          <h2>12. Property Damage</h2>
          <p>12.1 <strong>Reasonable Care:</strong> Service Provider will take reasonable care while servicing the property.</p>
          <p>12.2 <strong>Damage Responsibility:</strong> Client must report any damage within 48 hours of service.</p>

          <h2>13. Non-Disparagement</h2>
          <p>13.1 <strong>Non-Disparagement:</strong> The Client agrees not to make false, disparaging, or derogatory statements about Service Provider, its employees, or services.</p>
          <p>13.2 <strong>Honest Reviews:</strong> This clause does not prevent the Client from leaving lawful, honest reviews.</p>

          <h2>14. Waiver &amp; Release of Liability</h2>
          <p>14.1 <strong>Waiver:</strong> The Client releases Service Provider from liability for claims or damages, including adverse reactions to treatment solutions.</p>

          <h2>15. Attorney Fees &amp; Costs</h2>
          <p>15.1 <strong>Attorney Fees:</strong> The prevailing party in a dispute shall recover reasonable attorney fees and costs.</p>

          <h2>16. Headings</h2>
          <p>16.1 <strong>Headings:</strong> Section headings are for convenience only and do not affect the interpretation of this Agreement.</p>

          <h2>17. Amendments</h2>
          <p>17.1 <strong>Amendments:</strong> Amendments must be in writing and signed by both parties. Verbal modifications are not valid.</p>

          <h2>18. Entire Agreement</h2>
          <p>18.1 <strong>Entire Agreement:</strong> This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements, written or oral.</p>

          <h2>19. Electronic Consent</h2>
          <p>19.1 <strong>Agreement to Terms:</strong> By checking the box labeled &ldquo;I agree to the BuzzSkito LTD. Service Agreement,&rdquo; or by completing payment through BuzzSkito&rsquo;s online checkout, the Client acknowledges reading, understanding, and agreeing to all terms and conditions outlined in this Agreement. This action serves as a legally binding signature.</p>

          <hr />

          <p className="text-sm text-gray-500">BuzzSkito LTD. &middot; Business Registration Number: 1001003669 &middot; Ontario, Canada</p>
          <p className="text-sm text-gray-500">Questions about this agreement? Contact us at <a href="mailto:info@buzzskito.ca">info@buzzskito.ca</a> or call <a href="tel:+12892165030">(289) 216-5030</a>.</p>

        </div>
      </section>
    </>
  )
}
