import { Suspense } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BooksPageContent from '@/components/BooksPageContent';

function getBookDates(): Record<string, string> {
  const postsDir = path.join(process.cwd(), 'content/posts');
  if (!fs.existsSync(postsDir)) return {};
  const dates: Record<string, string> = {};
  for (const fileName of fs.readdirSync(postsDir)) {
    if (!fileName.endsWith('.md') && !fileName.endsWith('.mdx')) continue;
    const slug = fileName.replace(/\.(md|mdx)$/, '');
    const fullPath = path.join(postsDir, fileName);
    try {
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
      if (data.date) dates[slug] = String(data.date);
    } catch {
      // skip unparseable
    }
  }
  return dates;
}

export default function BooksPage() {
  const bookDates = getBookDates();
  return (
    <Suspense fallback={
      <div className="container mx-auto px-6 py-20 max-w-2xl">
        <div className="text-center">Loading...</div>
      </div>
    }>
      <BooksPageContent bookDates={bookDates} />
    </Suspense>
  );
}
