import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-tech-blue">BennysTechTools</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Discover honest reviews and recommendations for the best trending tech gadgets. 
          From wireless earbuds to smart home devices, we help you find the perfect tech tools.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-tech-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Explore All Posts →
        </Link>
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 bg-gradient-to-br from-tech-blue to-blue-700 flex items-center justify-center">
                <span className="text-6xl">{post.icon || "🔧"}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                  <span className="text-xs bg-blue-100 text-tech-blue px-2 py-1 rounded">
                    {post.category || "Tech"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-tech-blue font-semibold hover:text-blue-700 transition"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Site</h2>
        <p className="text-gray-700 mb-4">
          BennysTechTools is your trusted source for honest tech gadget reviews and recommendations. 
          We test products and share our genuine opinions to help you make informed purchasing decisions.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="/about"
            className="px-6 py-2 border-2 border-tech-blue text-tech-blue rounded-lg hover:bg-tech-blue hover:text-white transition font-semibold"
          >
            Learn More About Us
          </Link>
          <Link
            href="/affiliate-disclosure"
            className="px-6 py-2 border-2 border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Affiliate Disclosure
          </Link>
        </div>
      </section>
    </div>
  );
}
