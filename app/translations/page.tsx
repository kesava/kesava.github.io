import Link from 'next/link';
import { getAllTranslations, getAllTranslationTags, getAllCategories } from '@/lib/translations';

export default function TranslationsPage() {
  const translations = getAllTranslations();
  const tags = getAllTranslationTags();
  const categories = getAllCategories();

  // Group translations by category
  const translationsByCategory = categories.map((category) => ({
    category,
    items: translations.filter((t) => t.category === category),
  }));

  const categoryNames: Record<string, string> = {
    devotional: 'Devotional Poetry',
    wisdom: 'Wisdom & Philosophy',
    'short-story': 'Short Stories',
    classical: 'Classical Telugu',
    satire: 'Satirical & Humorous',
    poetry: 'General Poetry',
    practical: 'Practical',
  };

  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <header className="mb-20 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <h1 className="font-display text-6xl font-bold mb-6 text-heading">
          Telugu Translations
        </h1>
        <p className="font-serif text-xl text-neutral-800 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          Poetry, devotional verses, short stories, and wisdom literature translated from Telugu, Sanskrit, and classical sources.
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

      {/* Translations by Category */}
      {translationsByCategory.map(({ category, items }) => (
        items.length > 0 && (
          <div key={category} className="mb-20 border-b border-neutral-200 dark:border-neutral-800 pb-20 last:border-b-0">
            <h2 className="font-display text-4xl font-bold mb-8 text-heading">
              {categoryNames[category] || category}
              <span className="font-serif text-lg text-neutral-600 dark:text-neutral-500 ml-3">({items.length})</span>
            </h2>

            <div className="space-y-12">
              {items.map((translation) => (
                <article
                  key={translation.id}
                  className="border-b border-neutral-200 dark:border-neutral-800 pb-12 last:border-b-0"
                >
                  <Link href={`/blog/${translation.slug}`}>
                    <h3 className="font-display text-2xl font-bold mb-3 text-heading hover:text-accent dark:hover:text-accent transition-colors">
                      {translation.title}
                    </h3>
                  </Link>

                  {translation.originalPoet && (
                    <p className="font-serif text-sm text-neutral-500 dark:text-neutral-600 mb-2 italic">
                      by {translation.originalPoet}
                    </p>
                  )}

                  {translation.source && (
                    <p className="font-serif text-xs text-neutral-500 dark:text-neutral-600 mb-4 italic">
                      {translation.source}
                    </p>
                  )}

                  <p className="font-serif text-neutral-800 dark:text-neutral-300 mb-6 leading-relaxed text-lg">
                    {translation.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {translation.tags.slice(0, 3).map((tag) => (
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
                    href={`/blog/${translation.slug}`}
                    className="font-serif text-heading underline decoration-neutral-400 dark:decoration-neutral-600 hover:decoration-neutral-900 dark:hover:decoration-neutral-300 transition-colors decoration-2 underline-offset-2"
                  >
                    Read Translation
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )
      ))}

      <div className="text-center mt-16">
        <Link
          href="/blog"
          className="font-serif text-heading underline decoration-2 decoration-accent hover:decoration-accent-dark transition-colors underline-offset-4"
        >
          View All Blog Posts
        </Link>
      </div>
    </div>
  );
}
