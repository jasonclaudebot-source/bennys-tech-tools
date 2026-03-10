import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section — Minimal & Clean */}
      <section className="px-4 sm:px-6 py-24 sm:py-32 text-center border-b border-gray-200">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6 tracking-tight">
            BennysTechTools
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2 font-light leading-relaxed">
            Honest reviews. Real opinions.
          </p>
          <p className="text-base text-gray-500 mb-8">
            We test gadgets and tell you the truth.
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-primary text-white font-medium hover:bg-accent transition"
          >
            Read Reviews
          </Link>
        </div>
      </section>

      {/* Featured Posts — Grid, Minimal */}
      <section className="px-4 sm:px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12">Latest</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <div className="mb-4">
                <span className="text-3xl">{post.icon || "🔧"}</span>
              </div>
              <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.category || "Tech"}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                <Link href={`/blog/${post.slug}`} className="hover:text-gray-600 transition">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary font-medium text-sm hover:text-gray-600 transition"
              >
                Read →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 border-t border-gray-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">Looking for something specific?</h2>
          <p className="text-gray-600 mb-6">Browse all our reviews and recommendations.</p>
          <div className="flex justify-center gap-4">
            <Link
              href="/blog"
              className="px-6 py-2 bg-primary text-white font-medium hover:bg-accent transition"
            >
              All Articles
            </Link>
            <Link
              href="/about"
              className="px-6 py-2 border border-gray-300 text-primary font-medium hover:bg-gray-50 transition"
            >
              About
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
