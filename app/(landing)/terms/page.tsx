import Head from "next/head";

// pages/terms-conditions.js
export default function TermsAndConditions() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: `
        <p>These Terms and Conditions ("Terms") govern your use of our website, services, and any other interaction with [Your Digital Agency Name] ("Agency", "we", "us", or "our"). By accessing our website or engaging our services, you agree to be bound by these Terms.</p>
        <p>Please read these Terms carefully before using our services. If you do not agree to these Terms, please do not use our services.</p>
      `,
    },
    {
      id: "definitions",
      title: "2. Definitions",
      content: `
        <p>For the purpose of these Terms:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>"Client"</strong> or <strong>"You"</strong> refers to any individual or entity that engages our services.</li>
          <li><strong>"Services"</strong> refer to the digital solutions, including but not limited to web design, web development, UI/UX design, digital marketing, and consulting services offered by us.</li>
          <li><strong>"Project"</strong> refers to any work undertaken by us for a Client based on an agreed scope of work.</li>
          <li><strong>"Deliverables"</strong> refer to the outputs, products, or materials created by us as part of the Services.</li>
          <li><strong>"Intellectual Property"</strong> includes but is not limited to designs, code, content, trademarks, logos, and other proprietary materials.</li>
        </ul>
      `,
    },
    {
      id: "services",
      title: "3. Services",
      content: `
        <p>3.1 <strong>Service Description</strong>: We provide digital services including but not limited to web design, web development, UI/UX design, digital marketing, and consulting services.</p>
        <p>3.2 <strong>Service Requirements</strong>: To provide our Services effectively, we may require specific information, content, or resources from you. Failure to provide these requirements in a timely manner may impact project timelines.</p>
        <p>3.3 <strong>Service Modifications</strong>: Any modifications to the agreed Services must be documented in writing and may incur additional costs and timeline adjustments.</p>
      `,
    },
    {
      id: "payments",
      title: "4. Payments",
      content: `
        <p>4.1 <strong>Fees and Invoicing</strong>: Our fees are based on the agreed scope of work. We will issue invoices according to the payment schedule defined in the project proposal or contract.</p>
        <p>4.2 <strong>Payment Terms</strong>: Unless otherwise specified, payment is due within 14 days of invoice date. We reserve the right to charge interest on overdue amounts at a rate of 1.5% per month.</p>
        <p>4.3 <strong>Taxes</strong>: All fees are exclusive of applicable taxes, which will be added to invoices where appropriate.</p>
        <p>4.4 <strong>Additional Costs</strong>: Any additional work beyond the agreed scope will be charged separately after receiving your approval.</p>
      `,
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property",
      content: `
        <p>5.1 <strong>Agency IP</strong>: We retain ownership of all intellectual property rights in our pre-existing materials, tools, methodologies, and frameworks used in the provision of Services.</p>
        <p>5.2 <strong>Client IP</strong>: You retain ownership of all intellectual property rights in materials you provide to us.</p>
        <p>5.3 <strong>Deliverables</strong>: Upon full payment of all invoices, ownership of Deliverables specifically created for you will transfer to you, excluding any Agency IP incorporated therein.</p>
        <p>5.4 <strong>License</strong>: We grant you a non-exclusive, worldwide, perpetual license to use our Agency IP solely as incorporated into the Deliverables.</p>
        <p>5.5 <strong>Portfolio Rights</strong>: We reserve the right to feature completed projects in our portfolio, case studies, and marketing materials unless expressly agreed otherwise.</p>
      `,
    },
    {
      id: "confidentiality",
      title: "6. Confidentiality",
      content: `
        <p>6.1 <strong>Confidential Information</strong>: Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the engagement.</p>
        <p>6.2 <strong>Exclusions</strong>: Information that is publicly available, independently developed, or received from a third party without restrictions is not considered confidential.</p>
        <p>6.3 <strong>Duration</strong>: Confidentiality obligations shall survive the termination of our engagement for a period of two years.</p>
      `,
    },
    {
      id: "project-timeline",
      title: "7. Project Timeline",
      content: `
        <p>7.1 <strong>Estimated Timeline</strong>: Project timelines provided in proposals are estimates based on the agreed scope and may be subject to change.</p>
        <p>7.2 <strong>Delays</strong>: We are not responsible for delays caused by factors outside our control, including but not limited to delays in receiving client feedback or materials.</p>
        <p>7.3 <strong>Revisions</strong>: Unless otherwise specified, our services include a reasonable number of revisions. Excessive revisions may incur additional costs.</p>
      `,
    },
    {
      id: "termination",
      title: "8. Termination",
      content: `
        <p>8.1 <strong>Termination by Notice</strong>: Either party may terminate the engagement with 30 days written notice.</p>
        <p>8.2 <strong>Termination for Breach</strong>: Either party may terminate immediately if the other party materially breaches these Terms and fails to remedy the breach within 14 days of being notified.</p>
        <p>8.3 <strong>Payment Upon Termination</strong>: Upon termination, you agree to pay for all Services rendered up to the termination date and any non-cancellable expenses incurred.</p>
      `,
    },
    {
      id: "liability",
      title: "9. Limitation of Liability",
      content: `
        <p>9.1 <strong>Liability Cap</strong>: Our total liability arising out of or related to these Terms shall not exceed the total amount paid by you for the Services during the six months preceding the claim.</p>
        <p>9.2 <strong>Exclusions</strong>: We shall not be liable for any indirect, consequential, special, punitive, or incidental damages, including loss of profits, revenue, data, or business opportunities.</p>
        <p>9.3 <strong>Third-Party Services</strong>: We are not liable for any third-party services, platforms, or technologies used in connection with our Services.</p>
      `,
    },
    {
      id: "warranties",
      title: "10. Warranties and Representations",
      content: `
        <p>10.1 <strong>Agency Warranties</strong>: We warrant that (a) we have the right to provide the Services; (b) the Services will be performed with reasonable skill and care; and (c) to our knowledge, the Deliverables will not infringe any third-party intellectual property rights.</p>
        <p>10.2 <strong>Client Warranties</strong>: You warrant that (a) you have the right to provide us with any materials necessary for the Services; and (b) such materials do not infringe any third-party intellectual property rights.</p>
        <p>10.3 <strong>Disclaimer</strong>: Except as expressly stated in these Terms, all warranties, conditions, and representations, whether express or implied, are hereby excluded to the fullest extent permitted by law.</p>
      `,
    },
    {
      id: "indemnification",
      title: "11. Indemnification",
      content: `
        <p>11.1 <strong>Client Indemnification</strong>: You agree to indemnify, defend, and hold us harmless from any claims, losses, damages, liabilities, costs, and expenses arising from (a) your use of our Services; (b) your breach of these Terms; (c) your violation of any law or third-party rights; or (d) materials provided by you.</p>
        <p>11.2 <strong>Agency Indemnification</strong>: We agree to indemnify, defend, and hold you harmless from any claims that the Deliverables infringe third-party intellectual property rights, provided that such infringement is not caused by materials or instructions provided by you.</p>
      `,
    },
    {
      id: "general",
      title: "12. General Provisions",
      content: `
        <p>12.1 <strong>Entire Agreement</strong>: These Terms, together with any proposal, contract, or statement of work, constitute the entire agreement between us and supersede all prior communications, understandings, or agreements.</p>
        <p>12.2 <strong>Modifications</strong>: We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website and will be effective immediately upon posting.</p>
        <p>12.3 <strong>Assignment</strong>: Neither party may assign these Terms without the prior written consent of the other party, which shall not be unreasonably withheld.</p>
        <p>12.4 <strong>Force Majeure</strong>: Neither party shall be liable for any delay or failure to perform resulting from causes outside its reasonable control.</p>
        <p>12.5 <strong>Severability</strong>: If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.</p>
        <p>12.6 <strong>No Waiver</strong>: The failure of either party to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>
        <p>12.7 <strong>Relationship</strong>: Nothing in these Terms creates any partnership, joint venture, agency, franchise, or employment relationship between the parties.</p>
      `,
    },
    {
      id: "governing-law",
      title: "13. Governing Law and Dispute Resolution",
      content: `
        <p>13.1 <strong>Governing Law</strong>: These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>
        <p>13.2 <strong>Dispute Resolution</strong>: Any dispute arising out of or relating to these Terms shall first be resolved through good faith negotiations between the parties. If such negotiations fail, both parties agree to submit to binding arbitration in accordance with the rules of [Relevant Arbitration Body].</p>
        <p>13.3 <strong>Venue</strong>: Any legal action or proceeding relating to these Terms shall be instituted exclusively in the courts of [Your Jurisdiction].</p>
      `,
    },
    {
      id: "contact",
      title: "14. Contact Information",
      content: `
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>[Your Digital Agency Name]<br />[Address]<br />[City, State/Province, ZIP/Postal Code]<br />[Country]<br />[Email Address]<br />[Phone Number]</p>
        <p>Last Updated: [Date]</p>
      `,
    },
  ];

  return (
    <div className="min-h-screen pt-30">
      <Head>
        <title>Terms & Conditions | Neo Digital</title>
        <meta
          name="description"
          content="Terms and conditions for Neo Digital digital agency services"
        />
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          <p className="mt-1 text-sm">Last updated: 12 April, 2025</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-slate-800 shadow-md rounded-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <p className="text-white mb-8">
              Welcome to NEO Digital. Please read these Terms and Conditions
              carefully before engaging our services or using our website.
            </p>

            <div className="space-y-4">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-slate-700"
                >
                  <button className="w-full px-6 py-4 text-left text-white hover:bg-slate-600 transition-colors flex items-center justify-between font-medium">
                    <span>{section.title}</span>
                  </button>

                  <div className="px-6 py-4 bg-slate-600">
                    <div
                      dangerouslySetInnerHTML={{ __html: section.content }}
                      className="prose max-w-none text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
