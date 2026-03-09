import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - BennysTechTools",
  description: "Browse all tech gadget reviews and recommendations",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
      <p className="text-gray-600 mb-12">
        Honest reviews and recommendations for trending tech gadgets
      </p>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No posts available yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-tech-blue"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{post.icon || "🔧"}</span>
                    <div>
                      <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                      <span className="ml-3 text-xs bg-blue-100 text-tech-blue px-2 py-1 rounded">
                        {post.category || "Tech"}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-tech-blue transition">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-tech-blue font-semibold hover:text-blue-700 transition"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
