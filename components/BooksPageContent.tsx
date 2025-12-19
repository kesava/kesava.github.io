'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getAllBooks, getAllBookTags, getAllBookYears } from '@/lib/books';

export default function BooksPageContent() {
  const searchParams = useSearchParams();
  const allBooks = getAllBooks();
  const tags = getAllBookTags();
  const years = getAllBookYears();

  // Filter books by year if specified
  const selectedYear = searchParams.get('year');
  const books = selectedYear
    ? allBooks.filter((book) => book.year === selectedYear)
    : allBooks;

  // Calculate book counts per year
  const yearCounts = years.reduce((acc, year) => {
    acc[year] = allBooks.filter((book) => book.year === year).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <header className="mb-20 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <h1 className="font-display text-6xl font-bold mb-6 text-heading">
          Book Reviews
        </h1>
        <p className="font-serif text-xl text-neutral-800 dark:text-neutral-400 leading-relaxed">
          {selectedYear
            ? `Books I read in ${selectedYear}`
            : "Books I've read and reviewed—history, science, engineering, language, and ideas that shaped the world."}
        </p>
        {selectedYear && (
          <p className="font-serif text-sm text-neutral-600 dark:text-neutral-400 mt-4">
            Showing {books.length} book{books.length !== 1 ? 's' : ''}
          </p>
        )}
      </header>

      {/* Years */}
      {years.length > 0 && (
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6 text-heading">Year Read</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/books"
              className={`font-serif text-sm transition-colors px-4 py-2 border rounded-md ${
                !selectedYear
                  ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 border-neutral-900 dark:border-neutral-100'
                  : 'text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-700 hover:text-heading hover:border-heading'
              }`}
            >
              All ({allBooks.length})
            </Link>
            {years.map((year) => (
              <Link
                key={year}
                href={`/books?year=${year}`}
                className={`font-serif text-sm transition-colors px-4 py-2 border rounded-md ${
                  selectedYear === year
                    ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 border-neutral-900 dark:border-neutral-100'
                    : 'text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-700 hover:text-heading hover:border-heading'
                }`}
              >
                {year} ({yearCounts[year]})
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mb-20">
          <h2 className="font-display text-2xl font-bold mb-6 text-heading">Topics</h2>
          <div className="flex flex-wrap gap-4">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="font-serif text-sm text-neutral-600 dark:text-neutral-400 hover:text-heading transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Books List */}
      <div className="space-y-16">
        {books.map((book) => (
          <article
            key={book.id}
            className="border-b border-neutral-200 dark:border-neutral-800 pb-16 last:border-b-0"
          >
            <Link href={`/blog/${book.slug}`}>
              <h2 className="font-display text-3xl font-bold mb-3 text-heading hover:text-accent dark:hover:text-accent transition-colors leading-tight flex items-center gap-3">
                {book.recommendationLevel && (
                  <span className="inline-flex items-center gap-1">
                    {book.recommendationLevel === 'highly_recommended' ? (
                      <>
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex-shrink-0" title="Highly Recommended">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex-shrink-0" title="Highly Recommended">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                      </>
                    ) : (
                      <span className="inline-flex items-center justify-center w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex-shrink-0" title="Recommended">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                    )}
                  </span>
                )}
                {book.title}
              </h2>
            </Link>

            <p className="font-serif text-sm text-neutral-500 dark:text-neutral-400 mb-4 italic">
              by {book.author} • {book.year}
            </p>

            <p className="font-serif text-neutral-800 dark:text-neutral-300 mb-6 leading-relaxed text-lg">
              {book.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 mb-6">
              {book.tags.slice(0, 4).map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="font-serif text-sm text-neutral-600 dark:text-neutral-400 hover:text-heading transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>

            <Link
              href={`/blog/${book.slug}`}
              className="font-serif text-heading underline decoration-neutral-400 dark:decoration-neutral-600 hover:decoration-neutral-900 dark:hover:decoration-neutral-300 transition-colors decoration-2 underline-offset-2"
            >
              Read Review
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
