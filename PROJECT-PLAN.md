# martinpina.com — Website Project Plan

**Author / Blogger Website for Martin Pina**
Version 1.0 | February 2026

---

## 1. Project Overview

A personal author and blogger website for Martin Pina. The initial build is a
fast, lightweight static site with four core pages. The architecture is designed
to scale gracefully — from a few hundred monthly visitors up to tens of thousands
— without a full rebuild at each growth stage.

---

## 2. Tech Stack

### Phase 1 — Static Site (Launch)

| Layer           | Technology              | Rationale                                                    |
|-----------------|-------------------------|--------------------------------------------------------------|
| Markup          | HTML5                   | No framework overhead, zero build complexity                 |
| Styling         | CSS3 (custom, no framework) | Full design control, no unused CSS weight                |
| Interactivity   | Vanilla JS (ES6+)       | No dependencies, fast load                                   |
| Hosting         | **Netlify** (Free tier) | Global CDN, HTTPS, custom domain, form handling built-in     |
| Domain          | Namecheap / Cloudflare  | ~$12/yr, point to Netlify via DNS                            |
| Version Control | GitHub (private repo)   | Deploy-on-push via Netlify CI/CD                             |
| Analytics       | Plausible.io (or Fathom)| Privacy-first, lightweight script, no cookie banners needed  |
| Contact Forms   | Netlify Forms           | No backend required, spam protection built-in                |

**Estimated Monthly Cost (Phase 1): $0–$5**

---

### Phase 2 — Dynamic Blog (3–6 months)

When blog content grows beyond ~20 posts or weekly publishing becomes a chore
with raw HTML files, migrate to a **Static Site Generator (SSG)**.

| Layer        | Technology            | Rationale                                        |
|--------------|-----------------------|--------------------------------------------------|
| SSG          | **Eleventy (11ty)**   | Simple, flexible, plain Markdown posts, no React |
| CMS          | **Netlify CMS** (now Decap CMS) | Git-backed, free, browser-based editor  |
| Hosting      | Netlify (same)        | No change required                               |

Blog posts become Markdown files in `/blog/`. Author writes in a browser UI,
commits go to GitHub, Netlify rebuilds and deploys automatically in ~30 seconds.

**Estimated Monthly Cost (Phase 2): $0–$15**

---

### Phase 3 — Full Dynamic Site (12+ months / high traffic)

If traffic exceeds ~50,000 monthly visitors or e-commerce (book sales, courses,
newsletter monetization) is added:

| Layer        | Technology             | Rationale                                         |
|--------------|------------------------|---------------------------------------------------|
| Framework    | **Next.js** (React)    | SSR + SSG hybrid, API routes, image optimization  |
| CMS          | **Sanity.io**          | Real-time preview, structured content, GROQ query |
| Database     | PlanetScale / Supabase | If user accounts or comments are added            |
| Hosting      | Vercel                 | Optimal Next.js deployment, edge functions        |
| Newsletter   | ConvertKit             | Author-focused email platform, automation         |
| E-commerce   | Lemon Squeezy / Gumroad| Digital products (books, courses)                 |

**Estimated Monthly Cost (Phase 3): $50–$150**

---

## 3. Site Architecture

```
martinpina.com/
├── index.html          → Home
├── blog/
│   ├── index.html      → Blog index (all posts)
│   └── post-slug/
│       └── index.html  → Individual post template
├── book.html           → Book page
├── about.html          → About page
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    └── fonts/
```

---

## 4. Pages Specification

### Home (`/`)
- Hero with author name, tagline, atmospheric visual
- Featured/latest blog post(s) — 2–3 cards
- Book teaser with CTA
- Newsletter signup (Netlify form → Mailchimp/ConvertKit webhook)
- Footer with nav + social links

### Blog (`/blog/`)
- Post listing: title, date, excerpt, read-time estimate
- Tag/category filter (JS, no backend)
- Pagination (can be static at launch — "load more" button)
- Individual post template: hero image, author byline, reading progress bar

### Book (`/book/`)
- Cover image (large)
- Synopsis / back-cover copy
- Buy links (Amazon, IndieBound, direct)
- Reader quotes / reviews
- Author note

### About (`/about/`)
- Author photo
- Biography (long-form)
- Writing background / published work
- Speaking / contact CTA

---

## 5. Development Phases

### Phase 1 — Foundation (Week 1–2)
- [ ] Set up GitHub repo
- [ ] Configure Netlify project, connect custom domain
- [ ] Build HTML/CSS/JS codebase (provided below)
- [ ] Write initial content for all 4 pages
- [ ] Add Plausible analytics snippet
- [ ] Test across Chrome, Safari, Firefox, mobile
- [ ] Launch 🚀

### Phase 2 — Content Cadence (Ongoing)
- [ ] Publish blog post weekly
- [ ] Add new post HTML file from template
- [ ] Update blog index page
- [ ] Share via social / newsletter

### Phase 3 — CMS Migration (Month 3–4)
- [ ] Install Eleventy + Decap CMS
- [ ] Migrate existing posts to Markdown
- [ ] Configure Netlify Identity for CMS auth
- [ ] Test and redeploy

---

## 6. SEO & Performance Targets

| Metric                  | Target          |
|-------------------------|-----------------|
| Lighthouse Performance  | 95+             |
| Lighthouse SEO          | 100             |
| Lighthouse Accessibility| 95+             |
| First Contentful Paint  | < 1.2s          |
| Total page weight       | < 200KB         |
| Core Web Vitals         | All green       |

Key SEO practices implemented from day one:
- Semantic HTML5 (`<article>`, `<nav>`, `<main>`, `<aside>`)
- Open Graph + Twitter Card meta tags on every page
- Canonical URLs
- Structured data (JSON-LD) for Author and BlogPosting types
- Sitemap.xml (generated or handwritten initially)
- robots.txt

---

## 7. Recommended Domain & Hosting Setup

1. Register `martinpina.com` at Namecheap (~$12/yr)
2. Point nameservers to Cloudflare (free CDN + DDoS protection layer)
3. In Cloudflare, add Netlify's DNS records
4. In Netlify: add custom domain, enable forced HTTPS
5. Done — deploys automatically on every `git push` to `main`

---

## 8. Content Checklist (Before Launch)

- [ ] Author bio (150 words, 300 words versions)
- [ ] Author headshot (high-res, 1:1 ratio preferred)
- [ ] Book cover image (300dpi + web-optimized versions)
- [ ] Book synopsis + short tagline
- [ ] 3 buy links for the book
- [ ] 2–3 inaugural blog posts (don't launch with just one)
- [ ] Social media profile URLs (Twitter/X, Instagram, LinkedIn, Goodreads)
- [ ] Contact/press email address
- [ ] Newsletter signup confirmation message

---

*Codebase is provided in the accompanying site files.*
