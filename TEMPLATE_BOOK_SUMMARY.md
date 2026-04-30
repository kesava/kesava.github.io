---
title: "Book Title"
date: "2025-01-15"
excerpt: "One-sentence description of what the book covers and why it matters."
tags: ["books", "subject", "region", "topic", "theme"]
author: "Kesava"
recommended: true
---

# Book Title

By Author Name

## Overview

Brief 2-3 sentence summary of what the book covers.

## Key Points

- Main idea or theme 1
- Main idea or theme 2
- Important concept or framework introduced
- Notable argument or perspective

## Major Topics Covered

**Topic 1 (e.g., Early Life, Historical Context, Theory)**
- Key fact or event
- Important detail
- Significant quote or insight

**Topic 2**
- Key fact or event
- Important detail
- Takeaway

**Topic 3**
- Key fact or event
- Notable example or case study
- Conclusion or impact

## Important Concepts/Terms

- **Term 1:** Brief definition or explanation
- **Term 2:** Brief definition or explanation
- **Framework/Model:** How it works or what it explains

## Notable Quotes

> "Memorable quote that captures an important idea"

> "Another significant quote"

## Takeaways

- What you learned
- How it changed your thinking
- Practical application or insight
- Connection to other ideas

---

**📝 INSTRUCTIONS:**

**1. File Location:**
- Save in: `mynewblog/content/posts/`
- Filename: `book-title.md` (lowercase, hyphens, matches slug)

**2. Frontmatter (REQUIRED):**
```markdown
---
title: "Book Title"
date: "2025-01-15"
excerpt: "One-sentence description (<150 chars)"
tags: ["books", "subject", "region", "topic"]
author: "Kesava"
recommended: true  # Optional: Add this for highly recommended books
---
```

**IMPORTANT:**
- First tag MUST be `"books"`
- Date format: `"YYYY-MM-DD"`
- Excerpt: One sentence, under 150 characters
- Author: Always `"Kesava"`
- `recommended: true` - Add this field if the book is highly recommended (shows a gold star icon)

**3. Summary Format:**
- Keep it **concise** - bullets, not paragraphs
- **Factual** - what the book says, not lengthy opinions
- **Scannable** - easy to reference later
- Use **bold** for key terms, names, concepts
- Use subheadings to organize topics

**4. Choose Tags (4-6 tags, first must be "books"):**

**Subject:**
`biography` `history` `science` `technology` `politics` `economics` `philosophy` `medicine` `business` `memoir` `fiction`

**Region:**
`india` `china` `america` `europe` `asia` `britain` `france` `russia` `japan` `germany`

**Topics:**
`leadership` `innovation` `war` `democracy` `colonialism` `linguistics` `archaeology` `neuroscience` `free-speech` `religion` `art` `food` `water` `energy` `architecture` `cinema` `rivers` `geography` `environment`

**Time:**
`ancient-history` `medieval` `renaissance` `world-war-2` `modern-history` `contemporary`

**5. Filename = Slug:**
- Lowercase, hyphens, no special characters
- Examples:
  - `deng-xiaoping-and-the-transformation-of-china.md`
  - `rivers-of-powers.md`
  - `how-doctors-think.md`

**6. Excerpt (ONE sentence, <150 chars):**
Appears on listing pages. Make it count.

Examples:
- "How Deng Xiaoping transformed China through pragmatic reforms after the Cultural Revolution."
- "A delightful exploration of rivers combining history, geography, environmentalism, and urban planning."
- "Rockefeller's rise to become America's first billionaire and pioneer of modern philanthropy."

**7. Test & Deploy:**

```bash
cd mynewblog
npm run dev      # Test at http://localhost:3000
npm run build    # Build static site
npm run deploy   # Deploy to kesava.github.io
```

**8. Verify:**
- Book appears at `/books` page
- Clicking opens at `/blog/book-slug`
- All tags work (no 404 errors)
- Desktop shows two-column layout

**9. When to Use Summary vs Review:**

**Summary** (this template):
- Capture key facts and ideas
- Quick reference for later
- Bullet-point format
- Factual, concise

**Review** (different approach):
- Share your thoughts and analysis
- Essay format with flowing paragraphs
- Personal perspective and commentary
- Can be longer and more narrative

You can do both! Just use clear filenames:
- `book-title.md` - Summary (bullets)
- `book-title-review.md` - Review (essay)

---

**Example File:**

Filename: `mynewblog/content/posts/rivers-of-powers.md`

```markdown
---
title: "Rivers of Powers"
date: "2025-01-05"
excerpt: "A delightful exploration of rivers combining history, geography, environmentalism, and urban planning."
tags: ["books", "rivers", "geography", "history", "environment"]
author: "Kesava"
---

# Rivers of Powers

By Author Name

## Overview

Brief summary here...

## Key Points

- 66% of world population lives within 20km of a major river
- Water cycle not understood until 1670s
- Ancient civilizations arose at predictable rivers

...rest of content...
```
