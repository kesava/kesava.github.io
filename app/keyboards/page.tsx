import type { Metadata } from 'next';
import { KEYBOARDS } from '@/lib/keyboards';

export const metadata: Metadata = {
  title: 'Indic Script Keyboards — Kesava Mallela',
  description:
    'On-screen keyboards for typing Telugu, Hindi, Tamil, and Kannada. Syllable-aware, installable, and fully offline.',
};

export default function KeyboardsPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <header className="mb-16 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <h1 className="font-display text-6xl font-bold mb-6 text-heading">
          Indic Script Keyboards
        </h1>
        <p className="font-serif text-xl text-neutral-800 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          On-screen keyboards for Telugu, Hindi, Tamil, and Kannada. They
          follow the akshara rather than the codepoint, so the keys change as
          a syllable takes shape. Installable, and they work offline.
        </p>
      </header>

      <div className="space-y-10 mb-16">
        {KEYBOARDS.map((kb) => (
          <article
            key={kb.id}
            className="border-b border-neutral-200 dark:border-neutral-800 pb-10 last:border-b-0"
          >
            <a
              href={kb.liveUrl}
              className="group flex items-baseline gap-4 mb-2 no-underline"
            >
              {/* The glyph doubles as each app's launcher icon. */}
              <span
                className="font-display text-4xl text-accent leading-none"
                aria-hidden="true"
              >
                {kb.glyph}
              </span>
              <h2 className="font-display text-3xl font-bold text-heading underline decoration-neutral-400 dark:decoration-neutral-600 group-hover:decoration-neutral-900 dark:group-hover:decoration-neutral-300 transition-colors decoration-2 underline-offset-4">
                {kb.latin}
              </h2>
              <span className="font-serif text-lg text-neutral-600 dark:text-neutral-500">
                {kb.native}
              </span>
            </a>

            <p className="font-serif text-neutral-800 dark:text-neutral-300 leading-relaxed text-lg">
              {kb.description}
            </p>
          </article>
        ))}
      </div>

      <section className="font-serif text-neutral-600 dark:text-neutral-500 leading-relaxed space-y-3">
        <p>
          Add any of them to your home screen to run full-screen and offline.
          Type on the on-screen keys or your own, enter romanised text and let
          ITRANS convert it, or search in English to find a word in script.
          Tap the title in any keyboard to switch to another.
        </p>
        <p>
          These type on their own page &mdash; you copy the result out. They
          don&rsquo;t replace the system keyboard in other apps.
        </p>
      </section>
    </div>
  );
}
