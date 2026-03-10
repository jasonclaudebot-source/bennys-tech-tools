import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} - BennysTechTools`,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-4 sm:px-6 py-12 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-gray-600 hover:text-primary transition text-sm mb-6 inline-block">
            ← Back to Reviews
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.category || "Tech"}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 py-12 max-w-3xl mx-auto">
        <div className="blog-content mb-12 prose-minimal">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-gray-50 border border-gray-200 p-6 mb-12">
          <p className="text-sm text-gray-700">
            <strong>Disclosure:</strong> Links in this post may be affiliate links. We earn a small commission if you buy through them, at no extra cost to you.
          </p>
        </div>

        {/* Navigation */}
        {(prevPost || nextPost) && (
          <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-gray-200">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group p-4 hover:bg-gray-50 transition"
              >
                <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">← Previous</p>
                <p className="font-semibold text-primary group-hover:text-gray-600 transition">
                  {prevPost.title}
                </p>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group p-4 hover:bg-gray-50 transition text-right md:text-left"
              >
                <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Next →</p>
                <p className="font-semibold text-primary group-hover:text-gray-600 transition">
                  {nextPost.title}
                </p>
              </Link>
            ) : <div />}
          </div>
        )}
      </div>
    </article>
  );
}
