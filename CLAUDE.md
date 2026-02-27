# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a pure static HTML/CSS/JS personal author website for Martin Pina, deployed on Netlify. There is no build system, no package manager, and no dependencies.

## Deployment

- **Hosting:** Netlify with deploy-on-push (git push to master triggers deploy)
- **Publish directory:** repository root (`/`)
- **Config:** `netlify.toml` handles redirects, security headers, and cache rules
- No build command is needed — files are served directly as-is

## Adding a New Blog Post

Copy `blog/_POST-TEMPLATE.html` to `blog/{slug}.html`. The template includes all required sections: hero with metadata, feature image, reading progress bar, post content, author bio box, and previous/next navigation. Update `sitemap.xml` to include the new URL.

## Architecture

**File structure:**
- `index.html`, `about.html`, `book.html` — top-level pages
- `blog/index.html` — blog listing with client-side JS tag filtering
- `blog/{slug}.html` — individual posts
- `css/styles.css` — single stylesheet for the entire site (~26KB)
- `js/main.js` — single JS file for all interactivity (~3.2KB)

**JavaScript modules in `main.js`** (vanilla JS, no libraries):
1. Mobile nav hamburger toggle
2. Active nav link detection via `window.location.pathname`
3. Scroll reveal via `IntersectionObserver` on `.reveal` elements
4. Reading progress bar (scroll percentage → `.reading-progress` width)
5. Blog tag filtering via `data-tag` attributes (shows/hides `.blog-post-item`)
6. Newsletter form fake-submit (shows thank-you message, no backend)

**CSS conventions:**
- Color variables: `--color-ink` (#1a1714), `--color-ivory` (#f8f4ee), `--color-amber` (#c8883a), plus soft/mid variants
- Fonts: Cormorant Garamond (serif, display/headings) + Jost (sans-serif, body)
- Responsive breakpoints: 680px (mobile nav), 760px (tablet), 860px+ (desktop)
- Animation pattern: add class `.reveal` to elements; JS toggles `.visible` via IntersectionObserver

**SEO implementation on every page:**
- Open Graph + Twitter Card meta tags
- Canonical URL `<link>`
- JSON-LD structured data (Person on about, Book on book, BlogPosting on posts)

## Planned Evolution (from PROJECT-PLAN.md)

- **Phase 2:** Migrate to Eleventy (11ty) SSG + Decap CMS + Markdown posts
- **Phase 3:** Next.js + Sanity.io CMS + database + Vercel
