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
        {/* Minimal Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
            <Link href="/" className="text-lg font-bold text-primary hover:text-gray-600 transition">
              BennysTechTools
            </Link>
            <div className="flex gap-8 items-center text-sm">
              <Link href="/blog" className="text-gray-700 hover:text-primary transition">
                Reviews
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <main className="min-h-screen bg-white">
          {children}
        </main>

        {/* Minimal Footer */}
        <footer className="bg-white border-t border-gray-200 mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid sm:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="font-bold text-primary mb-3">BennysTechTools</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Honest reviews and real opinions about tech.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3 text-sm">Pages</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-gray-600 hover:text-primary transition">Home</Link></li>
                  <li><Link href="/blog" className="text-gray-600 hover:text-primary transition">Reviews</Link></li>
                  <li><Link href="/about" className="text-gray-600 hover:text-primary transition">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3 text-sm">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/affiliate-disclosure" className="text-gray-600 hover:text-primary transition">Affiliate Disclosure</Link></li>
                  <li><Link href="/privacy" className="text-gray-600 hover:text-primary transition">Privacy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-500">
              <p>&copy; 2026 BennysTechTools. Affiliate links may be included.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
