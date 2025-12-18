import Link from 'next/link';
import { getAllBooks, getAllBookTags } from '@/lib/books';

export default function BooksPage() {
  const books = getAllBooks();
  const tags = getAllBookTags();

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <header className="mb-20 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <h1 className="font-display text-6xl font-bold mb-6 text-heading">
          Book Reviews
        </h1>
        <p className="font-serif text-xl text-neutral-800 dark:text-neutral-400 leading-relaxed">
          Books I&apos;ve read and reviewed—history, science, engineering, language, and ideas that shaped the world.
        </p>
      </header>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mb-20">
          <h2 className="font-display text-2xl font-bold mb-6 text-heading">Topics</h2>
          <div className="flex flex-wrap gap-4">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="font-serif text-sm text-neutral-600 dark:text-neutral-500 hover:text-heading transition-colors"
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
              <h2 className="font-display text-3xl font-bold mb-3 text-heading hover:text-accent dark:hover:text-accent transition-colors leading-tight">
                {book.title}
              </h2>
            </Link>

            <p className="font-serif text-sm text-neutral-500 dark:text-neutral-600 mb-4 italic">by {book.author}</p>

            <p className="font-serif text-neutral-800 dark:text-neutral-300 mb-6 leading-relaxed text-lg">
              {book.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 mb-6">
              {book.tags.slice(0, 4).map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="font-serif text-sm text-neutral-600 dark:text-neutral-500 hover:text-heading transition-colors"
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
