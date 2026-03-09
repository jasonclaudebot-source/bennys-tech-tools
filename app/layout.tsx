import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BennysTechTools - Tech Gadget Reviews & Recommendations",
  description: "Honest reviews and recommendations for the best trending tech gadgets 2024-2026. Find the perfect tech tools for your needs.",
  keywords: "tech gadgets, product reviews, electronics, recommendations, tech tools",
  openGraph: {
    title: "BennysTechTools - Tech Gadget Reviews",
    description: "Discover the best tech gadgets and tools of 2024-2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%230066cc'>⚙</text></svg>" />
      </head>
      <body>
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-tech-blue hover:text-blue-700 transition">
              BennysTechTools
            </Link>
            <div className="flex gap-6 items-center">
              <Link href="/blog" className="text-gray-700 hover:text-tech-blue transition font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-tech-blue transition font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-tech-blue transition font-medium">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-tech-dark text-white mt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">BennysTechTools</h3>
                <p className="text-gray-400">Your source for honest tech gadget reviews and recommendations.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                  <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Policies</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/affiliate-disclosure" className="hover:text-white transition">Affiliate Disclosure</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>&copy; 2026 BennysTechTools. All rights reserved. | We may earn affiliate commissions from products we recommend.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
