import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - BennysTechTools",
  description: "Get in touch with BennysTechTools. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-4 sm:px-6 py-16 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Contact</h1>
          <p className="text-gray-600">Have questions? We'd like to hear from you.</p>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 sm:px-6 py-16 max-w-3xl mx-auto">
        <form className="space-y-6 mb-16">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 text-gray-900 focus:outline-none focus:border-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-200 text-gray-900 focus:outline-none focus:border-primary"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 text-gray-900 focus:outline-none focus:border-primary"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Message
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 text-gray-900 focus:outline-none focus:border-primary resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-primary text-white font-medium hover:bg-accent transition"
          >
            Send
          </button>
        </form>

        <div className="text-sm text-gray-500">
          <p>Note: For full functionality, configure a backend service to handle form submissions.</p>
        </div>
      </div>
    </div>
  );
}
