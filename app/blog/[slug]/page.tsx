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
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link href="/blog" className="text-tech-blue hover:text-blue-700 transition font-semibold mb-4 inline-block">
          ← Back to Blog
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <span>{formatDate(post.date)}</span>
          <span className="text-xs bg-blue-100 text-tech-blue px-3 py-1 rounded">
            {post.category || "Tech"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-8 mb-8 blog-content">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Affiliate Disclosure */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-yellow-900">
          <strong>Affiliate Disclosure:</strong> This post contains affiliate links. We may earn a small commission if you purchase through these links at no extra cost to you.
        </p>
      </div>

      {/* Navigation */}
      {(prevPost || nextPost) && (
        <div className="grid md:grid-cols-2 gap-6 mt-12 pt-8 border-t">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group p-4 rounded-lg hover:bg-blue-50 transition"
            >
              <p className="text-sm text-gray-600 mb-2">← Previous Post</p>
              <p className="font-semibold text-gray-900 group-hover:text-tech-blue transition">
                {prevPost.title}
              </p>
            </Link>
          ) : <div />}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group p-4 rounded-lg hover:bg-blue-50 transition text-right md:text-left"
            >
              <p className="text-sm text-gray-600 mb-2">Next Post →</p>
              <p className="font-semibold text-gray-900 group-hover:text-tech-blue transition">
                {nextPost.title}
              </p>
            </Link>
          ) : <div />}
        </div>
      )}
    </article>
  );
}
