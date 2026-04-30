# Content Workflow Guide

This guide explains how to add new book reviews and translations to the blog.

---

## Table of Contents

- [Adding a Book Review](#adding-a-book-review)
- [Adding a Translation](#adding-a-translation)
- [Testing Your Changes](#testing-your-changes)
- [Deploying to Production](#deploying-to-production)

---

## Adding a Book Review

### Step 1: Create the Book File

Create a markdown file in `mynewblog/content/posts/`:

**File location:** `mynewblog/content/posts/book-title.md`

**Required frontmatter:**
```markdown
---
title: "Book Title"
date: "2025-01-15"
excerpt: "One-sentence description of what the book covers (under 150 chars)"
tags: ["books", "subject", "region", "topic"]
author: "Kesava"
---
```

**IMPORTANT:**
- First tag MUST be `"books"`
- Date format: `"YYYY-MM-DD"`
- Filename should be lowercase with hyphens (matches slug)

### Step 2: Write the Content

**For Summaries (bullet-point format):**
```markdown
---
title: "Book Title"
date: "2025-01-15"
excerpt: "Description here"
tags: ["books", "tag1", "tag2"]
author: "Kesava"
---

# Book Title

By Author Name

## Overview

Brief summary...

## Key Points

- Point 1
- Point 2

## Major Topics Covered

**Topic 1**
- Detail
- Detail

## Takeaways

- What you learned
```

**For Reviews (essay format):**
```markdown
---
title: "Book Title"
date: "2025-01-15"
excerpt: "Description here"
tags: ["books", "tag1", "tag2"]
author: "Kesava"
---

# Book Title

By Author Name

Your review content here. Write naturally in paragraphs.

The review will be displayed in a magazine-style two-column layout on desktop.

You can use **bold**, *italic*, and other markdown formatting.

## Subheadings

Organize your thoughts with headings as needed.
```

**Tag Guidelines:**
- **First tag MUST be `"books"`**
- Use existing tags when possible (check other books in `content/posts/`)
- Common tags: `biography`, `history`, `science`, `technology`, `politics`, `economics`, `india`, `china`, `america`, `engineering`, `architecture`, `medicine`, `philosophy`
- Use lowercase with hyphens: `american-history`, `world-war-2`, `artificial-intelligence`
- Limit to 4-6 tags per book (including "books")

**Filename Guidelines:**
The filename should be lowercase with hyphens:
- `deng-xiaoping-and-the-transformation-of-china.md`
- `rivers-of-powers.md`
- `how-doctors-think.md`
- Remove special characters, convert to lowercase, replace spaces with hyphens

---

## Adding a Translation

### Step 1: Create the Translation File

Create a markdown file in `mynewblog/content/posts/`:

**File location:** `mynewblog/content/posts/your-translation-title.md`

**Required frontmatter:**
```markdown
---
title: "Translation Title"
date: "2025-01-15"
excerpt: "Brief description of the poem/text (1-2 sentences)"
tags: ["translations", "telugu", "poetry", "theme1", "theme2"]
author: "Kesava"
---
```

### Step 2: Format the Translation

Use **two code blocks** for side-by-side display:

```markdown
---
title: "Your Translation Title"
date: "2025-01-15"
excerpt: "Brief description"
tags: ["translations", "telugu", "poetry", "devotional"]
author: "Kesava"
---
```
(First code block - original Telugu text)
```
కరి గాచింది హుళక్కి
ద్రౌపదికి కోకల్ మెచ్చి ఇచ్చింది దబ్బర
```

(Second code block - English translation)
```
> You saving Gajendra is a lie.
Wrapping Draupadi in cloth, a myth.
```


**Translation Display:**
- On **desktop** (≥1024px): Original and translation appear **side-by-side** in aligned columns
- On **mobile**: Stacked vertically (original on top, translation below)
- Both blocks get decorative borders with Indian-inspired corner filigree

### Step 3: Add to Translation Registry

Open `mynewblog/lib/translations.ts` and add your translation:

```typescript
{
  id: 'unique-translation-id',
  title: 'Translation Title',
  slug: 'translation-title',      // Same as filename (without .md)
  originalPoet: 'Original Poet',  // If known
  source: 'Source Text Name',     // If applicable
  description: 'Brief description that appears in listings',
  tags: ['translations', 'telugu', 'poetry', 'devotional'],
  category: 'devotional',         // See categories below
  language: 'telugu',
  featured: true,
},
```

**Translation Categories:**
- `devotional` - Devotional Poetry
- `wisdom` - Wisdom & Philosophy
- `short-story` - Short Stories
- `classical` - Classical Telugu
- `satire` - Satirical & Humorous
- `poetry` - General Poetry
- `practical` - Practical/Instructional

**Tag Guidelines for Translations:**
- **Always include:** `"translations"` (required)
- **Add language:** `"telugu"`, `"sanskrit"`, etc.
- **Add form:** `"poetry"`, `"prose"`, `"short-story"`
- **Add themes:** `"devotional"`, `"krishna"`, `"rama"`, `"wisdom"`, `"satire"`

**Example Entry:**
```typescript
{
  id: 'definition-of-myth',
  title: 'A Definition of Myth',
  slug: 'a-definition-of-myth',
  originalPoet: 'Unknown',
  description: 'A devotee challenges Krishna, calling his legendary rescues mere myths unless he saves them too.',
  tags: ['translations', 'telugu', 'poetry', 'krishna', 'devotional'],
  category: 'devotional',
  language: 'telugu',
  featured: true,
},
```

---

## Testing Your Changes

### 1. Start Development Server

```bash
cd mynewblog
npm run dev
```

Open http://localhost:3000 in your browser.

### 2. Verify Book Review

**Check these pages:**
- `/books` - Your book should appear in the list
- `/books` → Click on your book → Should open review at `/blog/your-book-slug`
- Review page should show:
  - ✓ Title and author
  - ✓ Two-column layout on desktop (≥1024px)
  - ✓ All tags are clickable
  - ✓ "← Book Reviews" back link works
  - ✓ Content displays properly

**Check tag pages:**
- Click each tag on your review
- Each tag page (`/blog/tag/tagname`) should list your book
- No 404 errors

### 3. Verify Translation

**Check these pages:**
- `/translations` - Your translation should appear in correct category
- `/translations` → Click translation → Opens at `/blog/translation-slug`
- Translation page should show:
  - ✓ Original and English **side-by-side** on desktop
  - ✓ Decorative borders on both blocks
  - ✓ "← Translations" back link works
  - ✓ All tags work

**Test responsive:**
- Resize browser window to mobile width (<1024px)
- Original and translation should stack vertically
- Both should remain readable

### 4. Check for Errors

Watch the terminal for any errors:
- Build errors indicate missing fields or syntax issues
- TypeScript errors indicate type mismatches
- 404 errors mean slug doesn't match filename

---

## Deploying to Production

### 1. Build the Site

```bash
cd mynewblog
npm run build
```

This generates static files in the `out/` directory and creates:
- All blog post pages
- All book review pages
- All translation pages
- All tag pages

**Check build output:**
- No errors
- Your new pages appear in the build log
- Static params generated for your slugs

### 2. Preview Production Build

```bash
npm run start
```

Open http://localhost:3000 and verify everything works in production mode.

### 3. Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build the static site
2. Create `.nojekyll` file (important for Next.js)
3. Push to `gh-pages` branch
4. Deploy to https://kesava.github.io

**Wait 2-3 minutes** for GitHub Pages to update.

### 4. Verify Live Site

Visit https://kesava.github.io and check:
- Your new book review appears
- Your new translation appears
- All links work
- No 404 errors
- Desktop and mobile layouts work

---

## Quick Reference

### Book Review Checklist

- [ ] Created `mynewblog/content/posts/book-title.md` with frontmatter
- [ ] First tag is `"books"`
- [ ] Added excerpt (under 150 chars)
- [ ] Date in YYYY-MM-DD format
- [ ] Used existing tags when possible
- [ ] Filename is lowercase with hyphens
- [ ] Tested locally (`npm run dev`)
- [ ] Built successfully (`npm run build`)
- [ ] Deployed (`npm run deploy`)

### Translation Checklist

- [ ] Created `mynewblog/content/posts/translation-title.md`
- [ ] Added frontmatter with required fields
- [ ] Included `"translations"` tag
- [ ] Used two code blocks (original + English)
- [ ] Added entry to `mynewblog/lib/translations.ts`
- [ ] Chose correct category
- [ ] Tested side-by-side layout on desktop
- [ ] Tested stacked layout on mobile
- [ ] Built and deployed

---

## Common Issues

### "404 Not Found" for book review
- **Cause:** Filename doesn't match URL slug or missing frontmatter
- **Fix:** Ensure filename is lowercase with hyphens and has proper frontmatter with `"books"` tag

### Tags give 404 errors
- **Cause:** Tags weren't included in `generateStaticParams()`
- **Fix:** This is already fixed - tags from both books and posts are included
- **Verify:** Rebuild with `npm run build`

### Side-by-side layout not working for translation
- **Cause:** Missing `"translations"` tag or incorrect code block format
- **Fix:** Ensure frontmatter has `tags: ["translations", ...]` and use two consecutive code blocks

### TypeScript errors when building
- **Cause:** Missing required frontmatter field or wrong type
- **Fix:** Check all required fields: title, date, excerpt, tags, author

---

## Tips

**Writing Book Reviews:**
- Write naturally - no need for formal structure
- The two-column layout works best with flowing prose
- Use headings to break up long sections
- Don't worry about formatting - markdown handles it
- Include frontmatter at the top with all required fields

**Creating Translations:**
- Keep original formatting (line breaks matter in poetry)
- Use `>` for blockquote formatting in English if desired
- Add context in the description (who, what, when, source)
- Tag thoroughly - helps readers discover related content

**Choosing Tags:**
- Browse existing tags in `content/posts/` (look at other books and translations)
- Use 4-6 tags per item (including "books" or "translations")
- Mix broad tags (`history`) with specific ones (`world-war-2`)
- Geographic tags help (`india`, `china`, `america`)

**Featured Books:**
- There's no separate "featured" field for books in content/posts
- Recent books naturally appear first (sorted by date)
- All books are treated equally in listings
