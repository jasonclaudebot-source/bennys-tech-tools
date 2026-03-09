import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - BennysTechTools",
  description: "Learn about BennysTechTools and our mission to help you find the best tech gadgets.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About BennysTechTools</h1>

      <div className="max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to BennysTechTools! We're passionate about technology and helping people find the right gadgets for their needs.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is simple: provide honest, in-depth reviews of tech gadgets to help you make informed purchasing decisions. We test products in real-world scenarios and share our genuine opinions—no fake hype, no misleading claims.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Cover</h2>
        <ul className="text-gray-700 space-y-2 mb-6">
          <li>🎧 Audio equipment (earbuds, headphones, speakers)</li>
          <li>💻 Computing devices (laptops, tablets, accessories)</li>
          <li>🏠 Smart home technology</li>
          <li>📱 Mobile accessories and gadgets</li>
          <li>⌨️ Gaming peripherals</li>
          <li>🔋 Portable chargers and power solutions</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Promise</h2>
        <p className="text-gray-700 mb-4">
          We test everything we recommend. We provide unbiased opinions and highlight both strengths and weaknesses. If we use affiliate links, we're transparent about it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Affiliate Transparency</h2>
        <p className="text-gray-700 mb-4">
          BennysTechTools is a participant in the Amazon Associates Program. When you click links to products we recommend and make a purchase, we may earn a small commission. This helps us maintain this site and continue testing new products.
        </p>

        <p className="text-gray-700 mb-6">
          Importantly, we only recommend products we actually believe are good. We wouldn't recommend something just for the commission—our reputation is more valuable than any affiliate income.
        </p>

        <p className="text-gray-700">
          For full details on how we handle affiliate links and our privacy practices, check out our <Link href="/affiliate-disclosure" className="text-tech-blue hover:text-blue-700">Affiliate Disclosure</Link> and <Link href="/privacy" className="text-tech-blue hover:text-blue-700">Privacy Policy</Link>.
        </p>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
        <p className="text-gray-700 mb-4">
          We'd love to hear from you! Whether you have product suggestions, questions, or just want to say hello, feel free to reach out.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-tech-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
