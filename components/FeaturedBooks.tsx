import Link from 'next/link';
import { getAllBooks } from '@/lib/books';

export default function FeaturedBooks() {
  // Get the 3 most recent books (they're already sorted with newest first)
  const recentBooks = getAllBooks().slice(0, 3);

  return (
    <section className="container mx-auto px-6 py-20 max-w-3xl border-t border-neutral-200 dark:border-neutral-800">
      <div className="mb-16">
        <h2 className="font-display text-4xl font-bold mb-4 text-heading">Recent Book Reviews</h2>
        <p className="font-serif text-lg text-neutral-700 dark:text-neutral-400">Latest books I've read and reviewed.</p>
      </div>

      <div className="space-y-16">
        {recentBooks.map((book) => (
          <article
            key={book.id}
            className="border-b border-neutral-200 dark:border-neutral-800 pb-16 last:border-b-0"
          >
            <Link href={`/blog/${book.slug}`}>
              <h3 className="font-display text-2xl font-bold mb-3 text-heading hover:text-accent dark:hover:text-accent transition-colors leading-tight flex items-center gap-3">
                {book.recommendationLevel && (
                  <span className="inline-flex items-center gap-1">
                    {book.recommendationLevel === 'highly_recommended' ? (
                      <>
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex-shrink-0" title="Highly Recommended">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex-shrink-0" title="Highly Recommended">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                      </>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex-shrink-0" title="Recommended">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                    )}
                  </span>
                )}
                {book.title}
              </h3>
            </Link>

            <p className="font-serif text-sm text-neutral-500 dark:text-neutral-600 mb-4 italic">
              by {book.author} • {book.year}
            </p>

            <p className="font-serif text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed text-lg">
              {book.description}
            </p>

            <Link
              href={`/blog/${book.slug}`}
              className="font-serif text-heading underline decoration-neutral-400 dark:decoration-neutral-600 hover:decoration-neutral-900 dark:hover:decoration-neutral-300 transition-colors decoration-2 underline-offset-2"
            >
              Read Review
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/books"
          className="font-serif text-heading underline decoration-2 decoration-accent hover:decoration-accent-dark transition-colors underline-offset-4"
        >
          View All Book Reviews
        </Link>
      </div>
    </section>
  );
}
