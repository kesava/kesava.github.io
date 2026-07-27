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
      <header className="mb-20 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <h1 className="font-display text-6xl font-bold mb-6 text-heading">
          Indic Script Keyboards
        </h1>
        <p className="font-serif text-xl text-neutral-800 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          Four on-screen keyboards for typing Telugu, Hindi, Tamil, and Kannada
          in the browser. Each one installs to a phone&rsquo;s home screen and
          works with no network.
        </p>
      </header>

      {/* Why these exist, and the one idea they share. */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-6 text-heading">
          Built around the akshara
        </h2>
        <div className="font-serif text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed space-y-4">
          <p>
            Indic scripts don&rsquo;t work like the Latin alphabet. A written
            unit &mdash; an <em>akshara</em> &mdash; is a consonant plus the
            vowel riding on it, and consonants stack into conjuncts. Typing
            క&nbsp;+&nbsp;ి should give you కి, not two loose characters.
            A keyboard that treats each codepoint as an independent key makes
            you fight it constantly.
          </p>
          <p>
            So these keyboards track the syllable you&rsquo;re part-way through
            and change what they offer next. Tap a bare consonant and the grid
            becomes its vowel signs. End on a virama and it becomes the
            conjuncts that actually occur in the language, most common first.
            Word predictions come from a real dictionary, ranked by length.
          </p>
        </div>
      </section>

      {/* The four apps. */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-8 text-heading">
          The keyboards
        </h2>
        <div className="space-y-12">
          {KEYBOARDS.map((kb) => (
            <article
              key={kb.id}
              className="border-b border-neutral-200 dark:border-neutral-800 pb-12 last:border-b-0"
            >
              <div className="flex items-baseline gap-4 mb-3">
                {/* The glyph doubles as each app's launcher icon. */}
                <span
                  className="font-display text-4xl text-accent leading-none"
                  aria-hidden="true"
                >
                  {kb.glyph}
                </span>
                <h3 className="font-display text-3xl font-bold text-heading">
                  {kb.latin}
                </h3>
                <span className="font-serif text-lg text-neutral-600 dark:text-neutral-500">
                  {kb.native}
                </span>
              </div>

              <p className="font-serif text-neutral-800 dark:text-neutral-300 mb-6 leading-relaxed text-lg">
                {kb.description}
              </p>

              <dl className="flex flex-wrap gap-x-8 gap-y-2 mb-6 font-serif text-sm text-neutral-600 dark:text-neutral-500">
                <div>
                  <dt className="inline">Dictionary: </dt>
                  <dd className="inline">{kb.dictionary}</dd>
                </div>
                <div>
                  <dt className="inline">Script: </dt>
                  <dd className="inline">{kb.script}</dd>
                </div>
              </dl>

              <div className="flex gap-6">
                <a
                  href={kb.liveUrl}
                  className="font-serif text-heading underline decoration-neutral-400 dark:decoration-neutral-600 hover:decoration-neutral-900 dark:hover:decoration-neutral-300 transition-colors decoration-2 underline-offset-2"
                >
                  Open {kb.latin} keyboard
                </a>
                <a
                  href={kb.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors"
                >
                  Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Practical notes a first-time visitor needs. */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-6 text-heading">
          Using them
        </h2>
        <div className="font-serif text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed space-y-4">
          <p>
            <strong className="text-heading">Install to your home screen.</strong>{' '}
            Each keyboard is a PWA. In Safari, use Share &rarr; Add to Home
            Screen; in Chrome, Install app. After that it launches full-screen
            and runs offline &mdash; the dictionary is cached on first visit.
          </p>
          <p>
            <strong className="text-heading">Four ways to type.</strong> Tap the
            on-screen keys, use your system keyboard, type romanised text and
            let ITRANS convert it, or search English to find a word in script.
          </p>
          <p>
            <strong className="text-heading">Switching scripts.</strong> Tap the
            title in any of the four to jump to another. They&rsquo;re separate
            apps with separate drafts, so text doesn&rsquo;t carry across.
          </p>
          <p className="text-neutral-600 dark:text-neutral-500">
            These are browser keyboards: they work on their own page, and you
            copy the result out. They don&rsquo;t replace the system keyboard in
            other apps &mdash; iOS and Android both reserve that for native
            code.
          </p>
        </div>
      </section>
    </div>
  );
}
