import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - BennysTechTools",
  description: "Learn about BennysTechTools and our mission to help you find the best tech gadgets.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-4 sm:px-6 py-16 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">About</h1>
          <p className="text-gray-600">We test tech and tell you the truth.</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 py-16 max-w-3xl mx-auto">
        <div className="prose-minimal">
          <p className="text-gray-700 mb-6 leading-relaxed">
            BennysTechTools exists to give you honest reviews of tech gadgets. We test products in real situations and share what actually works—no hype, no nonsense.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">What We Review</h2>
          <ul className="text-gray-700 space-y-3 mb-8">
            <li>🎧 Audio gear</li>
            <li>💻 Laptops and computing</li>
            <li>🏠 Smart home devices</li>
            <li>📱 Mobile accessories</li>
            <li>🔋 Portable power</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Our Promise</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We test everything we recommend. We're honest about strengths and weaknesses. We use affiliate links to keep the lights on, and we're transparent about it.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">About Affiliate Links</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We're part of the Amazon Associates program. When you buy through our links, we get a small commission at no extra cost to you. This helps us keep testing new products.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We only recommend products we actually like. Our reputation matters more than any commission.
          </p>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Questions? <Link href="/contact" className="text-primary hover:text-gray-600 transition">Get in touch</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
