# Yash Parte Portfolio

Responsive React, TypeScript and Vite portfolio site for Yash Parte.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Customize the portfolio

- Edit `src/data/portfolio.ts` to update the profile, social links, project cards, skills and experience timeline. LinkedIn is intentionally blank until its profile URL is confirmed. Project repository URLs, live demos and star counts are optional fields and appear only when provided.
- Reusable sections and cards live in `src/components/PortfolioSections.tsx` (`HeroSection`, `ProjectGrid`, `ProjectCard`, `CaseStudyPreview`, `SkillsCloud`, `ExperienceTimeline` and `ContactCTA`). The page shell and mobile navigation are in `src/pages/PortfolioPage.tsx`; case-study routes render from shared project data in `src/pages/CaseStudyPage.tsx`.
- Add projects to the `projects` array and give each a unique `slug`. Case studies use `/projects/:slug`; `public/_redirects` keeps these paths working on Netlify, including on refresh.
- Project preview art is built from HTML and CSS, so the cards do not download large stock images. For real screenshots, export appropriately sized WebP or AVIF images, provide responsive `srcSet`/`sizes`, meaningful alt text, and lazy-load below-the-fold media. Keep the hero portrait eager-loaded if it remains visible above the fold.
- Page-wide SEO metadata is in `index.html`; case-study title and description update in the browser at runtime. For server-rendered social previews and per-route search metadata, prerender the routes or use a framework with SSR/SSG such as Next.js or Astro.
- The contact form opens the visitor’s email app using `mailto:`. Connect it to a form provider or API endpoint if submissions should work without a configured mail client.
- `public/yash-parte-resume.txt` is the current downloadable resume source. Replace it with a reviewed PDF if a designed document becomes available.

## Deployment

### Netlify with GitHub

1. Push this project to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project**, select GitHub, and authorize the repository.
3. Set the **Base directory** to the repository root, the **Build command** to `npm run build`, and the **Publish directory** to `dist`.
4. Deploy. Netlify will build on each push to the production branch; `public/_redirects` is copied into `dist` so case-study URLs work on direct visits and refreshes.

No environment variables are required. If you later add an Open Graph image, use an absolute URL for sharing previews.
