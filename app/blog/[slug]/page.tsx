import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  // Determine if this is a translation or regular essay
  const isTranslation = post.tags?.includes('translations');
  const backLink = isTranslation ? '/translations' : '/blog';
  const backLinkText = isTranslation ? '← Translations' : '← Essays';

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <article>
        <Link
          href={backLink}
          className="font-serif inline-flex items-center gap-2 mb-12 text-neutral-600 dark:text-neutral-500 hover:text-heading transition-colors text-sm"
        >
          {backLinkText}
        </Link>

        <header className="mb-16 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-8 text-heading leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="font-serif text-sm text-neutral-500 dark:text-neutral-600 mb-6 uppercase tracking-wide">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="font-serif text-sm text-neutral-600 dark:text-neutral-500 hover:text-heading transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose prose-lg font-serif"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
