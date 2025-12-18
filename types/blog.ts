export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
  author?: string;
  readingTime?: string;
  coverImage?: string;
}

export interface BlogMetadata {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  author?: string;
  coverImage?: string;
}
