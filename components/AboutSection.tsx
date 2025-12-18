import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-20 max-w-3xl border-t border-neutral-200 dark:border-neutral-800">
      <div>
        <h2 className="font-display text-4xl font-bold mb-6 text-heading text-center">About</h2>

        <div className="space-y-6 font-serif text-neutral-800 dark:text-neutral-300 text-lg leading-relaxed">
          <p>
            I&apos;m a Staff Software Engineer at Apple with over 11 years building and architecting
            large-scale AppleCare properties. I bridge the gap between design and engineering,
            creating experiences that are both technically sound and delightful to use.
          </p>

          <p>
            Beyond my day job, I translate classical Telugu poetry, build educational applications
            for Telugu language learning, and explore compiler design and functional programming.
            I believe in combining technical depth with cultural preservation.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="font-serif text-heading underline decoration-2 decoration-accent hover:decoration-accent-dark transition-colors underline-offset-4"
          >
            More About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
