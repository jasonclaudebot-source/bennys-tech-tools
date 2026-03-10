import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - BennysTechTools",
  description: "Browse all tech gadget reviews and recommendations",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-4 sm:px-6 py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Reviews</h1>
          <p className="text-gray-600 text-lg">
            Honest takes on the tech you're considering
          </p>
        </div>
      </div>

      {/* Posts List */}
      <div className="px-4 sm:px-6 py-12 max-w-4xl mx-auto">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-12 last:border-b-0">
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{post.icon || "🔧"}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <span>{post.category || "Tech"}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-gray-600 transition"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary font-medium text-sm hover:text-gray-600 transition"
                    >
                      Read Review →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
