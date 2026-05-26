'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getAllBooks } from '@/lib/books';
import {
  attachDates,
  WeeklySparkline,
  YearSparkbar,
  MonthlyMultiples,
  CumulativePace,
  TopicsFrequencyList,
  TopicHeatmap,
} from './BookVisualizations';

interface Props {
  bookDates: Record<string, string>;
}

export default function BooksPageContent({ bookDates }: Props) {
  const searchParams = useSearchParams();
  const allBooksRaw = getAllBooks();
  const allBooks = attachDates(allBooksRaw, bookDates);

  const selectedYear = searchParams.get('year');
  const books = selectedYear
    ? allBooks.filter((book) => book.yearNum === Number(selectedYear))
    : allBooks;

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <header className="mb-16 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
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

      {/* A — Weekly sparkline: the pulse */}
      <WeeklySparkline books={allBooks} />

      {/* Level 1 — Year sparkbar (filter) */}
      <YearSparkbar books={allBooks} selectedYear={selectedYear} />

      {/* Reading cadence */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold mb-6 text-heading">Reading cadence</h2>
        <MonthlyMultiples books={allBooks} />
        <CumulativePace books={allBooks} />
      </section>

      {/* Level 2 — Topics frequency list */}
      <TopicsFrequencyList books={allBooks} />

      {/* Level 3 — Topic × Year heatmap */}
      <TopicHeatmap books={allBooks} />

      {/* Books List */}
      <div className="space-y-16">
        <h2 className="font-display text-2xl font-bold text-heading">
          {selectedYear ? `Books from ${selectedYear}` : 'All books'}
        </h2>
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
