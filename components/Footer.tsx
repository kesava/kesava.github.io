import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-background mt-12 sm:mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-display text-lg sm:text-xl font-bold text-heading mb-3 sm:mb-4">
              Kesava Mallela
            </h3>
            <p className="font-serif text-sm sm:text-base text-neutral-700 dark:text-neutral-400 leading-relaxed">
              Software engineering, Telugu language learning, and cultural preservation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-3 sm:mb-4 text-heading text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/blog" className="font-serif text-sm sm:text-base text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/books" className="font-serif text-sm sm:text-base text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/translations" className="font-serif text-sm sm:text-base text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors">
                  Translations
                </Link>
              </li>
              <li>
                <Link href="/projects" className="font-serif text-sm sm:text-base text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-serif text-sm sm:text-base text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-semibold mb-3 sm:mb-4 text-heading text-sm sm:text-base">Connect</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="https://github.com/kesava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-sm sm:text-base text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/kesava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-sm sm:text-base text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/kesava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-sm sm:text-base text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="font-serif text-xs sm:text-sm text-neutral-600 dark:text-neutral-500">
            &copy; {currentYear} Kesava Mallela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
