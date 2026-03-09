import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - BennysTechTools",
  description: "BennysTechTools privacy policy. How we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="max-w-none space-y-6 text-gray-700">
        <p>
          Last updated: March 8, 2026
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p>
            BennysTechTools ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <p className="font-semibold mb-2">Automatically Collected Information:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Browser type and version</li>
            <li>IP address</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
            <li>Device information</li>
          </ul>

          <p className="font-semibold mb-2">Information from Contact Forms:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Message content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
          <p>We use collected information for:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Improving our website and content</li>
            <li>Responding to your inquiries</li>
            <li>Analytics and site optimization</li>
            <li>Preventing fraud and abuse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
          <p>
            We may use cookies to enhance your experience on our site. Most web browsers allow you to control cookies through browser settings. You can typically delete cookies from your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites and services, including Amazon Associates. We are not responsible for their privacy practices. Please review their privacy policies independently.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h2>
          <p>
            We use analytics services to understand how visitors use our site. These services may collect information about your visits to our site and other websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <p>
            Depending on your location, you may have rights including:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Right to access your personal data</li>
            <li>Right to correct inaccurate data</li>
            <li>Right to request deletion (where applicable)</li>
            <li>Right to opt-out of certain processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us through our contact page.
          </p>
        </section>

        <section className="bg-gray-100 rounded-lg p-6 border-t border-gray-200 mt-8">
          <h3 className="font-bold text-gray-900 mb-2">Policy Updates</h3>
          <p className="text-sm">
            We may update this Privacy Policy periodically. Your continued use of the site constitutes acceptance of any changes.
          </p>
        </section>
      </div>
    </div>
  );
}
