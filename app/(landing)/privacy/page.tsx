// pages/privacy-policy.js
import Head from "next/head";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: `
        <p>This Privacy Policy ("Policy") explains how [Your Digital Agency Name] ("Agency", "we", "us", or "our") collects, uses, shares, and protects personal information obtained from users of our website and services.</p>
        <p>We are committed to protecting your privacy and ensuring the security of your personal information. By accessing our website or engaging our services, you consent to the practices described in this Policy.</p>
        <p>Please take the time to read this Policy carefully. If you do not agree with our practices, please do not use our website or services.</p>
      `,
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      content: `
        <p>We may collect the following types of information:</p>
        <h4 class="font-medium text-gray-300 mt-4 mb-2">2.1 Personal Information</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Contact information (name, email address, phone number, postal address)</li>
          <li>Business information (company name, job title, industry)</li>
          <li>Account credentials (username, password)</li>
          <li>Payment information (credit card details, billing address)</li>
          <li>Communication preferences</li>
        </ul>
        
        <h4 class="font-medium text-gray-300 mt-4 mb-2">2.2 Non-Personal Information</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>IP address</li>
          <li>Device information</li>
          <li>Website usage data (pages visited, time spent, clicks)</li>
          <li>Referral source</li>
        </ul>
      `,
    },
    {
      id: "collection-methods",
      title: "3. How We Collect Information",
      content: `
        <p>We collect information through various methods:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Direct Interaction</strong>: When you fill out forms, create an account, subscribe to newsletters, or contact us.</li>
          <li><strong>Automated Technologies</strong>: We use cookies, web beacons, and similar technologies to collect information about your browsing activities.</li>
          <li><strong>Third Parties</strong>: We may receive information about you from third-party service providers, business partners, or publicly available sources.</li>
          <li><strong>Client Projects</strong>: Information you provide when engaging our services for specific projects.</li>
        </ul>
      `,
    },
    {
      id: "cookies",
      title: "4. Cookies and Similar Technologies",
      content: `
        <p>We use cookies and similar tracking technologies to enhance your experience on our website.</p>
        <h4 class="font-medium text-gray-300 mt-4 mb-2">4.1 Types of Cookies We Use</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Essential Cookies</strong>: Required for the website to function properly.</li>
          <li><strong>Analytical/Performance Cookies</strong>: Help us understand how visitors interact with our website.</li>
          <li><strong>Functionality Cookies</strong>: Remember your preferences and settings.</li>
          <li><strong>Targeting Cookies</strong>: Record your visit, pages visited, and links followed to make our advertising relevant to your interests.</li>
        </ul>
        
        <h4 class="font-medium text-gray-300 mt-4 mb-2">4.2 Managing Cookies</h4>
        <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.</p>
      `,
    },
    {
      id: "use-of-information",
      title: "5. How We Use Your Information",
      content: `
        <p>We use the collected information for the following purposes:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>To provide and maintain our services</li>
          <li>To process transactions and send related information</li>
          <li>To respond to inquiries and provide customer support</li>
          <li>To send administrative information, updates, and notifications</li>
          <li>To personalize your experience and deliver relevant content</li>
          <li>To improve our website, services, and marketing efforts</li>
          <li>To conduct research and analysis to enhance our offerings</li>
          <li>To protect against fraud, unauthorized transactions, and other liabilities</li>
          <li>To comply with legal obligations</li>
        </ul>
      `,
    },
    {
      id: "sharing-information",
      title: "6. Sharing Your Information",
      content: `
        <p>We may share your information with:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Service Providers</strong>: Third parties who perform services on our behalf (hosting, payment processing, analytics, etc.)</li>
          <li><strong>Business Partners</strong>: Companies we partner with to offer joint services or promotions</li>
          <li><strong>Legal Requirements</strong>: When required by law, legal process, or government requests</li>
          <li><strong>Business Transfers</strong>: In connection with a merger, acquisition, or sale of assets</li>
          <li><strong>With Your Consent</strong>: When you have given us permission to share your information</li>
        </ul>
        <p class="mt-4">We do not sell your personal information to third parties.</p>
      `,
    },
    {
      id: "data-security",
      title: "7. Data Security",
      content: `
        <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
        <p>Some of these measures include:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Encryption of sensitive data</li>
          <li>Secure socket layer (SSL) technology</li>
          <li>Regular security assessments</li>
          <li>Access controls and authentication procedures</li>
          <li>Staff training on data protection</li>
        </ul>
        <p class="mt-4">While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>
      `,
    },
    {
      id: "data-retention",
      title: "8. Data Retention",
      content: `
        <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
        <p>The criteria used to determine our retention periods include:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>The length of time we have an ongoing relationship with you</li>
          <li>Legal obligations to retain data for certain periods</li>
          <li>Statute of limitations under applicable law</li>
          <li>Resolution of disputes</li>
          <li>Enforcement of agreements</li>
        </ul>
      `,
    },
    {
      id: "your-rights",
      title: "9. Your Privacy Rights",
      content: `
        <p>Depending on your location, you may have certain rights regarding your personal information:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Access</strong>: The right to request copies of your personal information</li>
          <li><strong>Rectification</strong>: The right to request correction of inaccurate information</li>
          <li><strong>Erasure</strong>: The right to request deletion of your personal information</li>
          <li><strong>Restriction</strong>: The right to request the restriction of processing of your information</li>
          <li><strong>Data Portability</strong>: The right to receive your personal information in a structured, commonly used format</li>
          <li><strong>Objection</strong>: The right to object to the processing of your personal information</li>
          <li><strong>Withdraw Consent</strong>: The right to withdraw your consent at any time</li>
        </ul>
        <p class="mt-4">To exercise these rights, please contact us using the information provided in the "Contact Us" section.</p>
      `,
    },
    {
      id: "children-privacy",
      title: "10. Children's Privacy",
      content: `
        <p>Our website and services are not directed to children under 16 years of age. We do not knowingly collect personal information from children under 16.</p>
        <p>If we learn that we have collected personal information from a child under 16 without parental consent, we will take steps to delete that information as soon as possible.</p>
        <p>If you believe we might have any information from or about a child under 16, please contact us immediately.</p>
      `,
    },
    {
      id: "international-transfers",
      title: "11. International Data Transfers",
      content: `
        <p>We may transfer your personal information to countries outside your location. When we do so, we ensure appropriate safeguards are in place to protect your information and comply with applicable data protection laws.</p>
        <p>These safeguards may include:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Standard contractual clauses approved by relevant authorities</li>
          <li>Binding corporate rules for transfers within our group of companies</li>
          <li>Compliance with regional certification frameworks</li>
          <li>Obtaining your explicit consent for specific transfers</li>
        </ul>
        <p class="mt-4">By using our services, you consent to your information being transferred and processed in countries where we operate.</p>
      `,
    },
    {
      id: "third-party-links",
      title: "12. Third-Party Links",
      content: `
        <p>Our website may contain links to third-party websites, plugins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you.</p>
        <p>We do not control these third-party websites and are not responsible for their privacy statements. We encourage you to read the privacy policy of every website you visit.</p>
      `,
    },
    {
      id: "policy-updates",
      title: "13. Changes to This Policy",
      content: `
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.</p>
        <p>We will notify you of any material changes by posting the updated Policy on this page with a new effective date.</p>
        <p>We encourage you to review this Policy periodically to stay informed about how we are protecting your information.</p>
      `,
    },
    {
      id: "contact-us",
      title: "14. Contact Us",
      content: `
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
        <p class="mt-4">
          Neo Digital<br />
          [Address]<br />
          [City, State/Province, ZIP/Postal Code]<br />
          [Country]<br />
          Email: privacy@neodigital.com<br />
          Phone: [Phone Number]
        </p>
        <p class="mt-4">We will respond to your inquiry as soon as possible and within the timeframe specified by applicable law.</p>
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 pt-30">
      <Head>
        <title>Privacy Policy | Neo Digital</title>
        <meta
          name="description"
          content="Privacy policy for Neo Digital digital agency services"
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-1 text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-gray-700">
          <div className="p-6 md:p-8">
            <p className="text-gray-300 mb-8">
              At Neo Digital, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy outlines
              our practices regarding the collection, use, and disclosure of
              your information when you use our website or services.
            </p>

            <div className="space-y-4">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="border border-gray-700 rounded-lg overflow-hidden"
                >
                  <button className="w-full px-6 py-4 text-left bg-gray-700 hover:bg-gray-600 transition-colors flex items-center justify-between font-medium text-white">
                    <span>{section.title}</span>
                  </button>

                  <div className="px-6 py-4 bg-gray-800 border-t border-gray-700">
                    <div
                      dangerouslySetInnerHTML={{ __html: section.content }}
                      className="prose prose-invert max-w-none text-gray-300"
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
