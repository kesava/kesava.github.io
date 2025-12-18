import Link from 'next/link';
import { getAllBooks, getAllBookYears } from '@/lib/books';
import { getAllProjects } from '@/lib/projects';

export default function StatsSection() {
  const books = getAllBooks();
  const currentYear = new Date().getFullYear().toString();
  const booksThisYear = books.filter(book => book.year === currentYear);
  const projects = getAllProjects();
  const recommendedBooks = books.filter(book => book.recommendationLevel);

  return (
    <section className="container mx-auto px-6 py-20 max-w-3xl border-t border-neutral-200 dark:border-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Books Read */}
        <Link
          href="/books"
          className="group p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-accent dark:hover:border-accent transition-colors"
        >
          <div className="text-5xl font-display font-bold text-heading mb-2 group-hover:text-accent transition-colors">
            {booksThisYear.length}
          </div>
          <div className="font-serif text-neutral-700 dark:text-neutral-400 mb-1">
            Books read in {currentYear}
          </div>
          <div className="font-serif text-sm text-neutral-500 dark:text-neutral-600">
            {recommendedBooks.length} recommended
          </div>
        </Link>

        {/* Projects Built */}
        <Link
          href="/projects"
          className="group p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-accent dark:hover:border-accent transition-colors"
        >
          <div className="text-5xl font-display font-bold text-heading mb-2 group-hover:text-accent transition-colors">
            {projects.length}
          </div>
          <div className="font-serif text-neutral-700 dark:text-neutral-400 mb-1">
            Projects built
          </div>
          <div className="font-serif text-sm text-neutral-500 dark:text-neutral-600">
            Software & language tools
          </div>
        </Link>

        {/* Topics Explored */}
        <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
          <div className="text-5xl font-display font-bold text-heading mb-2">
            ∞
          </div>
          <div className="font-serif text-neutral-700 dark:text-neutral-400 mb-3">
            Topics explored
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-serif text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400 rounded">
              Telugu
            </span>
            <span className="font-serif text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400 rounded">
              Engineering
            </span>
            <span className="font-serif text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400 rounded">
              History
            </span>
            <span className="font-serif text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400 rounded">
              Biographies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
