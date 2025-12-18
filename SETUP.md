# Setup Instructions

Due to hook restrictions, please run these commands manually to complete the setup:

## 1. Install Dependencies

```bash
cd mynewblog
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## 3. Build for Production

```bash
npm run build
```

This will generate a static site in the `out/` directory ready for deployment.

## What's Been Created

All project files have been created and are ready to use:

- ✅ Next.js 15 configuration with TypeScript
- ✅ Tailwind CSS with dark gradient theme
- ✅ MDX support for blog posts
- ✅ Type definitions (blog.ts, project.ts)
- ✅ Utility functions (blog.ts, projects.ts)
- ✅ Root layout with Header and Footer
- ✅ Homepage with Hero, FeaturedProjects, AboutSection
- ✅ Blog listing page (/blog)
- ✅ Individual blog post page (/blog/[slug])
- ✅ Projects page (/projects)
- ✅ About page (/about)
- ✅ Sample blog post
- ✅ Project showcase with your kesava projects

## Next Steps

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start the development server
3. Customize the content in `lib/projects.ts`
4. Add more blog posts to `content/posts/`
5. Update the About section in `components/AboutSection.tsx`
6. Modify the site metadata in `app/layout.tsx`

Enjoy your new blog!
