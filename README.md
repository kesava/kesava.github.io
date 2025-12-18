# Kesava's Blog

A personal blog featuring book reviews, essays, and Telugu translations. Built with Next.js 15, TypeScript, and Tailwind CSS with a classic magazine-inspired design.

## Features

- **Book Reviews** - In-depth reviews with magazine-style two-column layout on desktop
- **Telugu Translations** - Side-by-side original and English translations
- **Essays** - Personal writing with elegant typography
- **Tag System** - Browse content by topic
- **Dark Mode** - Automatic dark theme support
- **Responsive Design** - Mobile-friendly with adaptive layouts
- **Indian-Inspired Design** - Custom decorative elements and serif typography

## Quick Start

### Adding Content

**See detailed guides:**
- 📖 [QUICKSTART.md](./QUICKSTART.md) - Quick reference for adding content
- 📚 [WORKFLOW.md](./WORKFLOW.md) - Complete workflow documentation

**Templates:**
- [TEMPLATE_BOOK_SUMMARY.md](./TEMPLATE_BOOK_SUMMARY.md) - Book summary template
- [TEMPLATE_TRANSLATION.md](./TEMPLATE_TRANSLATION.md) - Translation template

### Development

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm run deploy   # Deploy to GitHub Pages
```

## Project Structure

```
kesava/
├── books/                          # Legacy book markdown files (deprecated)
└── mynewblog/
    ├── app/                        # Next.js App Router
    │   ├── page.tsx               # Homepage
    │   ├── books/page.tsx         # Book reviews listing
    │   ├── translations/page.tsx  # Translations listing
    │   ├── blog/
    │   │   ├── page.tsx          # Essays listing
    │   │   ├── [slug]/page.tsx   # Post/book/translation pages
    │   │   └── tag/[tag]/page.tsx # Tag pages
    │   └── globals.css            # Global styles with custom typography
    ├── components/                 # React components
    │   ├── Header.tsx             # Navigation
    │   └── Footer.tsx             # Footer
    ├── content/posts/              # Blog posts, book summaries, and translations
    │   ├── rivers-of-powers.md    # Book (tagged "books")
    │   ├── a-definition-of-myth.md # Translation (tagged "translations")
    │   └── ...
    ├── lib/                        # Data and utilities
    │   ├── books.ts               # Legacy books registry (for /books/ folder)
    │   ├── translations.ts        # Translations registry
    │   └── blog.ts                # Blog post utilities (reads all content/posts/)
    ├── WORKFLOW.md                 # Complete workflow guide
    ├── QUICKSTART.md               # Quick reference
    ├── TEMPLATE_BOOK_REVIEW.md     # Book review template
    └── TEMPLATE_TRANSLATION.md     # Translation template
```

## Content Types

### 📚 Book Reviews

- Location: `mynewblog/content/posts/` (markdown with frontmatter)
- Tag: First tag MUST be `"books"`
- Display: Two-column magazine layout on desktop
- Format: Can be essay-style reviews OR bullet-point summaries
- Features: Frontmatter with title, date, excerpt, tags, author
- URL: `kesava.github.io/blog/[slug]`

**Example:** `content/posts/rivers-of-powers.md`, `content/posts/deng-xiaoping-and-the-transformation-of-china.md`

### 🌐 Translations

- Location: `mynewblog/content/posts/` (markdown with frontmatter)
- Registry: `mynewblog/lib/translations.ts`
- Display: Side-by-side original and English on desktop
- Features: Original poet, source, category, language tags
- URL: `kesava.github.io/blog/[slug]`

**Example:** `content/posts/a-definition-of-myth.md`

### ✍️ Essays

- Location: `mynewblog/content/posts/` (markdown with frontmatter)
- Display: Two-column magazine layout on desktop
- URL: `kesava.github.io/blog/[slug]`

## Design Features

### Typography

- **Display Font:** Playfair Display (headings)
- **Body Font:** Lora (serif)
- **Code Font:** Crimson Text
- **Drop Caps:** First letter of paragraphs
- **Line Height:** 1.8 for comfortable reading

### Layout Modes

**Desktop (≥1024px):**
- Essays: Two-column flowing text
- Translations: Side-by-side aligned columns
- Book Reviews: Two-column flowing text

**Mobile (<1024px):**
- All content: Single column, optimized for mobile reading

### Decorative Elements

- Indian-inspired corner filigree on code blocks
- Subtle column dividers with brand color
- Custom borders and shadows
- Dark mode with warm accent colors

## Tag System

**All tags are browsable at:** `/blog/tag/[tagname]`

Tags from both blog posts and books are included. Common tags:
- Subject: `biography`, `history`, `science`, `technology`, `politics`
- Region: `india`, `china`, `america`, `asia`
- Language: `telugu`, `sanskrit`, `tamil`
- Theme: `devotional`, `wisdom`, `poetry`, `translations`

## Deployment

**Deployed to:** https://kesava.github.io

**Deploy command:**
```bash
npm run deploy
```

This will:
1. Build the static site
2. Create `.nojekyll` file
3. Push to `gh-pages` branch
4. Deploy to GitHub Pages

**Configuration:**
- `basePath`: `/` (root domain)
- `homepage`: `https://kesava.github.io`
- Output: Static HTML in `out/` directory

## Technologies

- **Framework:** Next.js 15 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design system
- **Content:** Markdown with gray-matter frontmatter
- **Rendering:** remark (MD → HTML)
- **Fonts:** Google Fonts (Playfair Display, Lora)
- **Deployment:** GitHub Pages via gh-pages

## Contributing

This is a personal blog. To add your own content:
1. Fork the repository
2. Follow the guides in [WORKFLOW.md](./WORKFLOW.md)
3. Submit a pull request

## License

Content: All Rights Reserved
Code: MIT License
