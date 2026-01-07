export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto bg-slate-800/80 rounded-2xl shadow-2xl p-12 border border-slate-700">
        <h1 className="text-4xl font-extrabold text-purple-300 mb-6">Terms of Service</h1>
        <p className="text-slate-300 mb-4">Effective Date: January 1, 2026</p>
        
        <div className="space-y-6 text-slate-200">
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using NoxTitan™ ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">2. Service Description</h2>
            <p>NoxTitan provides an enterprise business management platform including but not limited to: employee scheduling, HR management, payroll processing, compliance tracking, asset management, and related business operations tools.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">3. Subscription Plans</h2>
            <p className="mb-2">NoxTitan offers multiple subscription tiers:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Professional ($499/month)</strong>: Up to 50 employees</li>
              <li><strong>Enterprise ($1,499/month)</strong>: Up to 250 employees with advanced features</li>
              <li><strong>Titan ($2,999/month)</strong>: Unlimited employees with white-glove service</li>
              <li><strong>VIP Access</strong>: Complimentary access with exclusive code</li>
            </ul>
            <p className="mt-2">All prices are in USD and billed monthly. Subscriptions auto-renew unless canceled.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">4. User Responsibilities</h2>
            <p className="mb-2">You agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the Platform in compliance with all applicable laws</li>
              <li>Not misuse or attempt to gain unauthorized access to the Platform</li>
              <li>Not use the Platform for illegal or fraudulent purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">5. Data Ownership</h2>
            <p>You retain ownership of all data you input into the Platform. By using NoxTitan, you grant us a limited license to process and store your data to provide the service. We do not claim ownership of your business data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">6. Payment Terms</h2>
            <p>Payment is due at the beginning of each billing cycle. Failure to pay may result in service suspension or termination. Refunds are handled on a case-by-case basis for Professional and Enterprise tiers. Titan tier contracts have specific refund terms outlined in your service agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">7. Cancellation and Termination</h2>
            <p>You may cancel your subscription at any time. Upon cancellation, you will retain access until the end of your current billing period. We reserve the right to terminate accounts for violations of these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">8. Service Availability</h2>
            <p>We strive for 99.9% uptime (99.9% SLA for Titan tier customers). We are not liable for service interruptions caused by factors beyond our reasonable control, including internet outages, infrastructure failures, or force majeure events.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">9. Limitation of Liability</h2>
            <p>NoxTitan is provided "as is" without warranties of any kind. To the maximum extent permitted by law, Connie Michelle Consulting & Business Solutions LLC shall not be liable for indirect, incidental, or consequential damages arising from use of the Platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">10. Intellectual Property</h2>
            <p>All Platform content, features, and functionality are owned by Connie Michelle Consulting & Business Solutions LLC and protected by intellectual property laws. You may not copy, modify, or distribute Platform components without written permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">11. Modifications to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Material changes will be communicated via email or platform notification at least 30 days before taking effect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">12. Governing Law</h2>
            <p>These terms are governed by the laws of the jurisdiction in which Connie Michelle Consulting & Business Solutions LLC operates. Disputes will be resolved through binding arbitration.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-3">13. Contact Information</h2>
            <p>For questions about these terms, contact:</p>
            <p className="mt-2">
              <strong>Connie Michelle Consulting & Business Solutions LLC</strong><br />
              Email: legal@noxtitan.com<br />
              Subject Line: Terms of Service Inquiry - NoxTitan
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
