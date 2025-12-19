import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { getAllBooks, getBookById } from '@/lib/books';
import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function generateStaticParams() {
  const posts = getAllPosts();
  const books = getAllBooks();

  return [
    ...posts.map((post) => ({ slug: post.slug })),
    ...books.map((book) => ({ slug: book.slug })),
  ];
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

async function getBookContent(slug: string) {
  const book = getAllBooks().find(b => b.slug === slug);
  if (!book) return null;

  // Try to find the markdown file in the books directory
  const booksDirectory = path.join(process.cwd(), '..', 'books');

  // Try different file name variations
  const possibleFiles = fs.readdirSync(booksDirectory)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

  // Match by slug similarity
  const matchingFile = possibleFiles.find(fileName => {
    const normalized = fileName.replace(/\.(md|mdx)$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-');
    return normalized.includes(slug.toLowerCase()) || slug.toLowerCase().includes(normalized);
  });

  if (!matchingFile) {
    // Return the book metadata with description as content
    return {
      ...book,
      content: book.description,
      date: book.year || '2024',
    };
  }

  const fullPath = path.join(booksDirectory, matchingFile);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...book,
    content: content || book.description,
    date: book.year || '2024',
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // First try to get a blog post
  let post = getPostBySlug(slug);
  let isBook = false;
  let bookData = null;

  // If not found, try to get a book
  if (!post) {
    const bookContent = await getBookContent(slug);
    if (bookContent) {
      post = {
        slug: bookContent.slug,
        title: bookContent.title,
        date: bookContent.date,
        excerpt: bookContent.description,
        content: bookContent.content,
        tags: bookContent.tags,
        author: bookContent.author,
      };
      isBook = true;
      bookData = bookContent;
    }
  } else {
    // Check if this post is about a book by looking up the slug
    const book = getAllBooks().find(b => b.slug === slug);
    if (book) {
      bookData = book;
      // Override the author with the book's author for book reviews
      post.author = book.author;
    }
  }

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  // Determine if this is a translation, book, or regular essay
  const isTranslation = post.tags?.includes('translations');
  const hasBookTag = post.tags?.includes('books');
  const isBookPost = isBook || hasBookTag;

  const backLink = isBookPost ? '/books' : isTranslation ? '/translations' : '/blog';
  const backLinkText = isBookPost ? '← Book Reviews' : isTranslation ? '← Translations' : '← Essays';

  return (
    <div className="container mx-auto px-6 py-20 max-w-7xl">
      <article>
        <Link
          href={backLink}
          className="font-serif inline-flex items-center gap-2 mb-12 text-neutral-600 dark:text-neutral-300 hover:text-heading transition-colors text-sm"
        >
          {backLinkText}
        </Link>

        <header className="mb-16 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-8 text-heading leading-tight tracking-tight flex items-center justify-center gap-3">
            {bookData?.recommendationLevel && (
              <span className="inline-flex items-center gap-1">
                {bookData.recommendationLevel === 'highly_recommended' ? (
                  <>
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex-shrink-0" title="Highly Recommended">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex-shrink-0" title="Highly Recommended">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  </>
                ) : (
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex-shrink-0" title="Recommended">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                )}
              </span>
            )}
            {post.title}
          </h1>

          {isBookPost && post.author && (
            <p className="font-serif text-base text-neutral-600 dark:text-neutral-300 mb-6 italic font-normal">
              by {post.author}
            </p>
          )}

          <div className="font-serif text-sm text-neutral-500 dark:text-neutral-400 mb-6 uppercase tracking-wide">
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
                  className="font-serif text-sm text-neutral-600 dark:text-neutral-300 hover:text-heading transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        <div
          className={`prose prose-lg font-serif ${isTranslation ? 'prose-translation' : 'prose-columns'}`}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
