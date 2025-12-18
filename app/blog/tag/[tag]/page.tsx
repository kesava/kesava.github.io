import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).map((tag) => ({
    tag: tag,
  }));
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const allPosts = getAllPosts();
  const posts = allPosts.filter((post) => post.tags?.includes(tag));

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <Link
        href="/blog"
        className="font-serif inline-flex items-center gap-2 mb-12 text-neutral-600 dark:text-neutral-500 hover:text-heading transition-colors text-sm"
      >
        ← Back to Essays
      </Link>

      <header className="mb-20 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <h1 className="font-display text-6xl font-bold mb-4 text-heading">
          {tag}
        </h1>
        <p className="font-serif text-lg text-neutral-700 dark:text-neutral-500">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </p>
      </header>

      <div className="space-y-20">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-neutral-200 dark:border-neutral-800 pb-16 last:border-b-0">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="font-display text-4xl font-bold mb-4 text-heading hover:text-accent dark:hover:text-accent transition-colors leading-tight">
                {post.title}
              </h2>
            </Link>

            <div className="font-serif text-sm text-neutral-500 dark:text-neutral-600 mb-6 uppercase tracking-wide">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>

            <p className="font-serif text-neutral-800 dark:text-neutral-300 mb-8 leading-relaxed text-lg">
              {post.excerpt}
            </p>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-6">
                {post.tags.map((tagName) => (
                  <Link
                    key={tagName}
                    href={`/blog/tag/${tagName}`}
                    className={`font-serif text-sm transition-colors ${
                      tagName === tag
                        ? 'text-accent dark:text-accent font-semibold'
                        : 'text-neutral-600 dark:text-neutral-500 hover:text-heading'
                    }`}
                  >
                    {tagName}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href={`/blog/${post.slug}`}
              className="font-serif text-heading underline decoration-neutral-400 dark:decoration-neutral-600 hover:decoration-neutral-900 dark:hover:decoration-neutral-300 transition-colors decoration-2 underline-offset-2"
            >
              Continue reading
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
