import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-32 max-w-3xl">
      <div className="text-center border-b border-neutral-200 dark:border-neutral-800 pb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-heading leading-tight tracking-tight">
          Kesava Mallela
        </h1>
        <p className="font-serif text-xl md:text-2xl text-neutral-800 dark:text-neutral-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          Staff Software Engineer at Apple. Essays on books, Telugu poetry translations, and the craft of software engineering.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/blog"
            className="font-serif text-lg text-heading underline decoration-2 decoration-accent hover:decoration-accent-dark transition-colors underline-offset-4"
          >
            Read the Blog
          </Link>
          <span className="text-neutral-400 dark:text-neutral-600 hidden sm:inline">·</span>
          <Link
            href="/about"
            className="font-serif text-lg text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
