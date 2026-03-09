import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure - BennysTechTools",
  description: "Learn about how BennysTechTools uses affiliate links and how we maintain transparency.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Affiliate Disclosure</h1>

      <div className="max-w-none space-y-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="font-semibold text-yellow-900">
            BennysTechTools is a participant in the Amazon Associates Program and other affiliate programs. We may earn commissions from qualifying purchases made through our links.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            When you click on product links in our reviews and articles, you may be directed to affiliate partners like Amazon Associates. If you make a purchase through these links, we receive a small commission at no additional cost to you.
          </p>
          <p className="text-gray-700 mb-4">
            This commission helps us maintain this website, purchase new products to test, and continue creating honest reviews.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Honesty</h2>
          <p className="text-gray-700 mb-4">
            Here's what matters: We only recommend products we genuinely believe are good and worth your money. We would never recommend something just because it offers a higher affiliate commission.
          </p>
          <ul className="text-gray-700 space-y-3 mb-6">
            <li className="flex gap-3">
              <span className="text-tech-blue font-bold">✓</span>
              <span>We test products in real-world conditions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-tech-blue font-bold">✓</span>
              <span>We're transparent about both pros and cons</span>
            </li>
            <li className="flex gap-3">
              <span className="text-tech-blue font-bold">✓</span>
              <span>We only recommend products we'd actually use</span>
            </li>
            <li className="flex gap-3">
              <span className="text-tech-blue font-bold">✓</span>
              <span>Commission percentages never influence our recommendations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-tech-blue font-bold">✓</span>
              <span>We disclose affiliate links on every relevant post</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Programs We Participate In</h2>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>• Amazon Associates Program</li>
            <li>• Various manufacturer affiliate programs</li>
            <li>• Retail partner commission programs</li>
          </ul>
          <p className="text-gray-700">
            Commission rates vary by program and product category.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>• Purchase through other retailers if you prefer</li>
            <li>• View affiliate links clearly labeled in our content</li>
            <li>• Contact us with questions about our review process</li>
            <li>• Know that prices are the same whether you use our links or search directly</li>
          </ul>
        </section>

        <section className="bg-blue-50 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Questions?</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about our affiliate relationships or our review process, we're happy to discuss it. Transparency is important to us.
          </p>
          <a
            href="/contact"
            className="text-tech-blue font-semibold hover:text-blue-700 transition"
          >
            Get in Touch →
          </a>
        </section>

        <section className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-sm text-gray-600">
            <strong>Disclosure:</strong> This page was last updated March 8, 2026. BennysTechTools maintains the right to update these policies at any time. Your continued use of our site constitutes acceptance of these terms.
          </p>
        </section>
      </div>
    </div>
  );
}
