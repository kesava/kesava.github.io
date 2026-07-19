# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

`mynewblog/` is one subproject inside the `kesava/` monorepo (see `../CLAUDE.md` for repo-wide context). It is the **live personal blog** deployed to `https://kesava.github.io` — a Next.js 15 static-export site for book reviews, Telugu translations, and essays.

## Common Commands

```bash
npm run dev      # Next dev server on http://localhost:3000
npm run build    # Static export → out/
npm run start    # Serve the production build locally
npm run lint     # next lint (ESLint via eslint-config-next)
npm run deploy   # Build + touch out/.nojekyll + gh-pages -d out -t
```

There is no test runner configured. Verify changes with `npm run build` (it renders every static param) and by clicking through routes in `npm run dev`.

## Architecture

### Static export, App Router

`next.config.mjs` sets `output: 'export'` — every page must be pre-renderable. Dynamic segments (`app/blog/[slug]`, `app/blog/tag/[tag]`) require `generateStaticParams()`. The build fails silently for content whose slug is missing from those params, so any new content source must be registered in **both** listing and generateStaticParams paths.

`pageExtensions` includes `md`/`mdx`, and MDX is wired via `@next/mdx` with `remark-gfm`, `rehype-highlight`, `rehype-slug`. In practice content is `.md` and rendered manually via `remark().use(html)` inside `[slug]/page.tsx` — the MDX config is set up but posts do not use MDX authoring.

### Content model: markdown + registries

Content lives in two places and is resolved in a specific order:

1. **`content/posts/*.md`** — unified pool for essays, book reviews, and translations. Read via `lib/blog.ts` (`getAllPosts`, `getPostBySlug`, `getPostsByTag`, `getAllTags`). Each file has gray-matter frontmatter: `title`, `date`, `excerpt`, `tags`, `author`, optional `coverImage`, `recommended`.
2. **`lib/books.ts`** — hand-maintained `Book[]` registry. Holds metadata that doesn't live in frontmatter: `recommendationLevel: 'recommended' | 'highly_recommended'`, `featured`, `year`. This is the source of truth for the `/books` listing and star badges on review pages.
3. **`lib/translations.ts`** — hand-maintained `Translation[]` registry. Holds `category` (`devotional | wisdom | short-story | classical | satire | poetry | practical`), `originalPoet`, `source`, `language`. Source of truth for `/translations` listing and grouping.

**Content type is inferred by tags, not by folder.** The `[slug]` route branches on `post.tags`:

- `tags[0] === 'books'` → magazine two-column layout (`prose-columns`), back-link to `/books`.
- `tags.includes('translations')` → side-by-side layout (`prose-translation`), back-link to `/translations`.
- Otherwise → essay two-column layout, back-link to `/blog`.

If you add a new book review as a markdown file, the first tag **must** be `"books"` or the layout and back-link will be wrong. Same for `"translations"`.

### The book-content resolver quirk

`app/blog/[slug]/page.tsx` → `getBookContent()` reads from `path.join(process.cwd(), '..', 'books')` — one directory **above** `mynewblog/`, at the monorepo root. It's a legacy path for book reviews authored before the `content/posts/` convention.

Resolution order in the `[slug]` route:

1. `getPostBySlug(slug)` — check `content/posts/`.
2. If that misses, walk `../books/` and fuzzy-match the filename against the slug.
3. If both miss → `notFound()`.

`generateStaticParams()` merges slugs from `getAllPosts()` + `getAllBooks()`. If a book exists only in `lib/books.ts` (no markdown anywhere), the page renders with `book.description` as content and `book.year` as date.

**Implication:** moving or building `mynewblog/` outside the monorepo will silently drop legacy book content. New book reviews should be authored under `content/posts/` with the `"books"` tag; only add to `lib/books.ts` if you need the badge/featured metadata.

### Routes

```
app/
├── page.tsx              → /  (Hero + FeaturedBooks + FeaturedProjects + AboutSection + StatsSection)
├── layout.tsx            → Root: Playfair Display / Lora / Crimson Text via next/font, GA snippet
├── blog/
│   ├── page.tsx          → /blog       (all posts listing)
│   ├── [slug]/page.tsx   → /blog/:slug (renders posts, book reviews, and translations)
│   └── tag/[tag]/        → /blog/tag/:tag
├── books/page.tsx        → /books       (uses BooksPageContent client component)
├── translations/page.tsx → /translations
├── projects/page.tsx     → /projects   (data in lib/projects.ts)
└── about/page.tsx        → /about
```

### Styling

- Tailwind (`darkMode: 'class'`) with a small extension: `accent` color `#8b4513`, serif/display font vars.
- `globals.css` is large (~37 KB) — carries the magazine typography: drop caps, `prose-columns` two-column flow, `prose-translation` side-by-side, corner filigree decorations. Layout mode changes go here, not in Tailwind config.
- Dark mode toggled by `components/ThemeToggle.tsx` (class-based, applies to `<html>`).

### TypeScript

Strict mode, `@/*` path alias resolves from project root. Types live in `types/blog.ts` and `types/project.ts`; registry interfaces (`Book`, `Translation`) are exported from their `lib/*.ts` files.

## Adding Content

Detailed authoring guides live in `WORKFLOW.md` and `QUICKSTART.md`. Key rules that affect code behavior:

- **Filename = slug.** `content/posts/rivers-of-powers.md` → `/blog/rivers-of-powers`. Lowercase, hyphens only.
- **Book reviews:** first tag must be `"books"`. Adding to `lib/books.ts` is optional (only needed for `recommendationLevel` star badges or `featured` flag on the homepage).
- **Translations:** must include `"translations"` in tags **and** have an entry in `lib/translations.ts` (the `/translations` listing reads only from the registry, not from markdown scanning). Author uses **two consecutive fenced code blocks** — the first is the original, the second is the English rendering — which `globals.css` styles side-by-side.
- **Tag pages** are generated from the union of all post tags via `getAllTags()`. Any tag you use becomes a live route.

## Deployment

`npm run deploy` runs `next build && touch out/.nojekyll && gh-pages -d out -t`:

- Static export lands in `out/`.
- `.nojekyll` disables GitHub Pages' Jekyll processing (needed because Next.js emits `_next/` paths).
- `gh-pages -d out -t` pushes `out/` to the `gh-pages` branch, including dotfiles (`-t`).
- Site is served at the root of `kesava.github.io` (see `homepage` in `package.json`; `basePath` is not set, so links are absolute from `/`).

Google Analytics (`G-9ZV4L40XB2`) is loaded from `app/layout.tsx` — it runs in dev too.
