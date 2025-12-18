import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogMetadata } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts(): BlogPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        content,
        tags: data.tags || [],
        author: data.author,
        readingTime: calculateReadingTime(content),
        coverImage: data.coverImage,
        recommended: data.recommended || false,
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    let fileContents: string;

    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else {
      const mdPath = path.join(postsDirectory, `${slug}.md`);
      if (fs.existsSync(mdPath)) {
        fileContents = fs.readFileSync(mdPath, 'utf8');
      } else {
        return null;
      }
    }

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
      tags: data.tags || [],
      author: data.author,
      readingTime: calculateReadingTime(content),
      coverImage: data.coverImage,
      recommended: data.recommended || false,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.tags?.includes(tag));
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}
