import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - BennysTechTools",
  description: "Get in touch with BennysTechTools. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have questions, suggestions, or just want to say hello? We'd love to hear from you!
      </p>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-blue"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-blue"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-blue"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Message
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-blue"
              placeholder="Tell us what you're thinking..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-tech-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Note: This is a static form. For full functionality, form submissions would be handled server-side.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-700">
            For business inquiries or questions, reach out via email.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2">Response Time</h3>
          <p className="text-gray-700">
            We typically respond to inquiries within 2-3 business days.
          </p>
        </div>
      </div>
    </div>
  );
}
