# Quick Start Guide

## Add a Book Summary (1 step)

### Create summary file
**Location:** `mynewblog/content/posts/book-title.md`

```markdown
---
title: "Book Title"
date: "2025-01-15"
excerpt: "One-sentence description of what the book covers."
tags: ["books", "subject", "region", "topic"]
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

**IMPORTANT:** First tag MUST be `"books"`

**Test & Deploy:**
```bash
cd mynewblog
npm run dev      # Test locally
npm run build    # Build site
npm run deploy   # Deploy to GitHub Pages
```

---

## Add a Translation (2 steps)

### 1. Create translation file
**Location:** `mynewblog/content/posts/translation-name.md`

```markdown
---
title: "Translation Title"
date: "2025-01-15"
excerpt: "Brief description"
tags: ["translations", "telugu", "poetry", "theme"]
author: "Kesava"
---
```
(original text)
```

```
(English translation)
```


### 2. Add to translations registry
**Location:** `mynewblog/lib/translations.ts`

```typescript
{
  id: 'translation-name',
  title: 'Translation Title',
  slug: 'translation-name',
  originalPoet: 'Poet Name',
  description: 'Brief description',
  tags: ['translations', 'telugu', 'poetry', 'theme'],
  category: 'devotional',
  language: 'telugu',
  featured: true,
},
```

**Test & Deploy:**
```bash
cd mynewblog
npm run dev      # Test locally
npm run build    # Build site
npm run deploy   # Deploy to GitHub Pages
```

---

## Common Tags

**Books:**
- Genres: `biography`, `history`, `science`, `technology`, `politics`, `economics`, `philosophy`
- Regions: `india`, `china`, `america`, `europe`, `asia`
- Topics: `engineering`, `architecture`, `medicine`, `war`, `business`

**Translations:**
- Required: `translations`
- Language: `telugu`, `sanskrit`
- Form: `poetry`, `prose`, `short-story`
- Theme: `devotional`, `wisdom`, `satire`, `krishna`, `rama`

---

## File Locations

```
kesava/
├── books/                          # Book review markdown files
│   └── Book Title.md
└── mynewblog/
    ├── content/posts/              # Translation markdown files
    │   └── translation-name.md
    ├── lib/
    │   ├── books.ts               # Book registry (add entries here)
    │   └── translations.ts        # Translation registry (add entries here)
    ├── WORKFLOW.md                # Full documentation
    ├── TEMPLATE_BOOK_REVIEW.md    # Book review template
    └── TEMPLATE_TRANSLATION.md    # Translation template
```

---

## Deployment Commands

```bash
# Development
cd mynewblog
npm run dev          # Start dev server on http://localhost:3000

# Production
npm run build        # Build static site
npm run start        # Preview production build locally
npm run deploy       # Deploy to kesava.github.io
```

---

For detailed instructions, see [WORKFLOW.md](./WORKFLOW.md)
