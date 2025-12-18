# MyNewBlog

A modern, dark-themed blog built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful gradient design, MDX support for blog posts, and a project showcase.

## Features

- **Next.js 15** - Latest version with App Router
- **TypeScript** - Full type safety
- **Tailwind CSS** - Dark gradient theme with custom colors
- **MDX Support** - Write blog posts with MDX
- **Static Export** - Deploy to GitHub Pages
- **Responsive Design** - Mobile-friendly layout
- **Project Showcase** - Display your featured projects
- **Code Highlighting** - Syntax highlighting for code blocks

## Getting Started

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the static site:

```bash
npm run build
```

The output will be in the `out` directory.

## Project Structure

```
mynewblog/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── FeaturedProjects.tsx  # Project showcase
│   └── AboutSection.tsx  # About section
├── content/              # Blog content
│   └── posts/           # Blog posts in MD/MDX
├── lib/                 # Utility functions
│   ├── blog.ts         # Blog post utilities
│   └── projects.ts     # Project data
├── types/              # TypeScript types
│   ├── blog.ts        # Blog types
│   └── project.ts     # Project types
└── next.config.mjs    # Next.js configuration
```

## Writing Blog Posts

Create new blog posts in `content/posts/` with `.md` or `.mdx` extension:

```markdown
---
title: "Your Post Title"
date: "2025-12-16"
excerpt: "A brief description of your post"
tags: ["Next.js", "React"]
author: "Your Name"
---

# Your Content Here

Write your blog post content using Markdown or MDX.
```

## Customization

### Update Project Information

Edit the project data in `lib/projects.ts` to showcase your own projects.

### Modify Theme Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    purple: '#a855f7',
    blue: '#3b82f6',
    pink: '#ec4899',
  }
}
```

### Update Site Metadata

Modify `app/layout.tsx` to change the site title and description.

## Deployment

This project is configured for GitHub Pages deployment:

1. Update `basePath` in `next.config.mjs` to match your repository name
2. Update `homepage` in `package.json`
3. Build and deploy:

```bash
npm run build
# Deploy the 'out' directory to GitHub Pages
```

## Technologies

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with gray-matter
- **Syntax Highlighting**: rehype-highlight
- **Markdown**: remark-gfm

## License

MIT
