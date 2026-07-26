import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <header className="mb-20 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <h1 className="font-display text-6xl font-bold mb-6 text-heading">
          Essays
        </h1>
        <p className="font-serif text-xl text-neutral-800 dark:text-neutral-400 leading-relaxed">
          Thoughts on books, translations, technology, and culture.
        </p>
      </header>

      <a
        href="/pakas"
        className="block mb-20 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 hover:border-accent transition-colors group"
      >
        <div className="font-serif text-xs text-accent mb-3 uppercase tracking-widest">
          Interactive · Telugu / Sanskrit Poetics
        </div>
        <h2 className="font-display text-3xl font-bold mb-3 text-heading group-hover:text-accent transition-colors leading-tight">
          Three Important Pākas
        </h2>
        <p className="font-serif text-neutral-800 dark:text-neutral-300 leading-relaxed text-lg">
          Drākṣā, Kadalī, and Nārikela — the grape, the plantain, and the coconut — as a way of
          describing how readily a poem&rsquo;s meaning yields itself through language.
        </p>
      </a>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="font-serif text-neutral-600 dark:text-neutral-500 text-lg">No posts yet. Check back soon.</p>
        </div>
      ) : (
        <div className="space-y-20">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-neutral-200 dark:border-neutral-800 pb-16 last:border-b-0">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="font-display text-4xl font-bold mb-4 text-heading hover:text-accent dark:hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h2>
              </Link>

              <div className="font-serif text-sm text-neutral-500 dark:text-neutral-600 mb-6 uppercase tracking-wide">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>

              <p className="font-serif text-neutral-800 dark:text-neutral-300 mb-8 leading-relaxed text-lg">
                {post.excerpt}
              </p>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-4 mb-6">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag}`}
                      className="font-serif text-sm text-neutral-600 dark:text-neutral-500 hover:text-heading transition-colors"
                    >
                      {tag}
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
      )}
    </div>
  );
}
