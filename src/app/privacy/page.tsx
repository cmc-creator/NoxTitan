export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto bg-slate-800/80 rounded-2xl shadow-2xl p-12 border border-slate-700">
        <h1 className="text-4xl font-extrabold text-purple-300 mb-6">Privacy Policy</h1>
        <p className="text-slate-300 mb-4">Effective Date: January 1, 2026</p>
        
        <div className="space-y-6 text-slate-200">
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">1. Information We Collect</h2>
            <p className="mb-2">NoxTitan™ collects the following information to provide and improve our services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account information (name, email, company details)</li>
              <li>Employee data (names, schedules, contact information)</li>
              <li>Usage data (feature usage, interaction patterns)</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">2. How We Use Your Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and maintain our business management platform</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send important service updates and notifications</li>
              <li>Improve our services through analytics</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data, including encryption at rest and in transit, regular security audits, and access controls. Your data is stored securely and backed up regularly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">4. Data Sharing</h2>
            <p>We do not sell your personal information. We only share data with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service providers who assist in platform operations (under strict agreements)</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">5. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal data</li>
              <li>Request corrections to inaccurate data</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">6. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized features. You can manage cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">7. Children's Privacy</h2>
            <p>NoxTitan is not intended for users under 18 years of age. We do not knowingly collect information from children.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">8. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any significant changes via email or platform notification.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">9. Contact Us</h2>
            <p>For privacy-related questions or to exercise your rights, contact us at:</p>
            <p className="mt-2">
              <strong>Connie Michelle Consulting & Business Solutions LLC</strong><br />
              Email: privacy@noxtitan.com<br />
              Subject Line: Privacy Inquiry - NoxTitan
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-700">
          <a href="/" className="text-purple-400 hover:text-purple-300 font-semibold">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
