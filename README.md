# things.martacodes.it

My personal website, built with AstroJS. Features a blog covering software development, AI, job search, and Advent of Code solutions, along with life updates and photo galleries for travel and food.

Live at **[things.martacodes.it](https://things.martacodes.it)**.

---

## Tech Stack

| Layer               | Technology                                       |
|---------------------|--------------------------------------------------|
| Framework           | [Astro 6](https://astro.build)                   |
| UI                  | [React 19](https://react.dev) (islands)          |
| Styling             | [Tailwind CSS 3](https://tailwindcss.com), SCSS  |
| Content             | MDX + Astro Content Collections                  |
| Syntax highlighting | [Shiki](https://shiki.style) (tokyo-night theme) |
| Images              | [Cloudinary](https://cloudinary.com)             |
| Comments            | [Giscus](https://giscus.app)                     |
| Analytics           | [Umami](https://umami.is)                        |

---

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn

### Setup

```bash
# Install dependencies
yarn install

# Copy environment variables and fill in your values
cp .env.example .env
```

### Environment Variables

| Variable                | Description                                         |
|-------------------------|-----------------------------------------------------|
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name                          |
| `CLOUDINARY_API_KEY`    | Cloudinary API key                                  |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret                               |
| `SITE_URL`              | Full site URL (e.g. `https://things.martacodes.it`) |

### Development

```bash
yarn dev        # Start dev server at http://localhost:3002
yarn build      # Production build
yarn preview    # Preview the build locally
yarn check      # Astro type checking
yarn lint       # ESLint
yarn lint:fix   # ESLint + Prettier autofix
yarn format     # Prettier formatting only
```

---

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI components (ThemeToggle, etc.)
│   ├── layout/         # Header, Footer
│   ├── molecules/      # MobileMenuIsland, TagList, etc.
│   ├── Comments.tsx    # Giscus comments
│   ├── FoodGallery.tsx
│   ├── PhotoGallery.tsx
│   ├── TravelBoard.tsx
│   └── ...
├── content/
│   ├── config.ts       # Content collection schemas
│   ├── posts/          # MDX blog posts
│   └── updates/        # Markdown life updates
├── data/
│   ├── Navigation.ts   # Header/footer/social links
│   ├── albums.ts       # Travel album metadata
│   └── meta.json       # Site-wide metadata
├── layouts/
│   ├── BaseLayout.astro # HTML shell, dark mode init, analytics
│   ├── BlogLayout.astro
│   └── SiteLayout.astro
├── lib/
│   ├── cloudinary.ts         # Cloudinary image fetching
│   ├── posts.ts              # Post filtering and category utilities
│   ├── shiki-aoc-lang.ts     # Custom Shiki language for AoC grids
│   └── shiki-aoc-transformer.ts
├── pages/
│   ├── index.astro
│   ├── blog/           # Blog index, category, tag, and post pages
│   ├── food/
│   ├── travel/
│   └── updates/
├── styles/
│   ├── globals.css
│   ├── blog.css
│   ├── aoc.scss        # AoC grid token styling
│   └── travel.css
└── types/
    └── Post.ts
```

---

## Content

### Blog Posts (`src/content/posts/`)

MDX files with the following frontmatter:

```yaml
---
title: "Post Title"
description: "Short description"
date: 2024-12-01
published: true
category: advent-of-code   # ai | software-development | job-search | advent-of-code | uncategorized
tags: [astro, typescript]
image: "https://res.cloudinary.com/..."  # optional Cloudinary URL
toc: false                               # enable table of contents
---
```

### Updates (`src/content/updates/`)

Shorter Markdown entries for life updates, travels, and milestones:

```yaml
---
title: "Update Title"
date: 2024-06-01
published: true
tags: [travel, life]
image: "https://res.cloudinary.com/..."  # optional
---
```

---

## Features

### Dark Mode

Class-based dark mode (`darkMode: 'class'` in Tailwind). A small inline script in `BaseLayout.astro` reads from `localStorage` on page load to prevent flash of unstyled content. Defaults to dark if no preference is stored.

### Syntax Highlighting

Shiki with the **tokyo-night** theme. Code blocks in markdown/MDX use the standard fenced code block syntax:

````
```typescript
const hello = "world";
```
````

Use ` ```text ``` ` for plain output that should not be syntax-highlighted (e.g. command output, Advent of Code puzzle input).

#### Custom AoC Language

A custom `aoc` language is registered for Advent of Code grid visualizations:

````
```aoc
#####
.####
.....
```
````

Tokens are styled in `src/styles/aoc.scss`.

### Photo Galleries

Travel and food images are hosted on **Cloudinary** and fetched at build time via `src/lib/cloudinary.ts`. Albums are defined in `src/data/albums.ts` with country flags and folder paths. The gallery UI uses [PhotoSwipe](https://photoswipe.com).

### Comments

Blog posts include a [Giscus](https://giscus.app) comment section backed by GitHub Discussions.

### Analytics

[Umami](https://umami.is) analytics are loaded in `BaseLayout.astro`.

---

## Markdown Plugins

| Plugin                     | Purpose                                                |
|----------------------------|--------------------------------------------------------|
| `remark-gfm`               | GitHub Flavored Markdown (tables, strikethrough, etc.) |
| `@fec/remark-a11y-emoji`   | Wraps emoji in `<span role="img" aria-label>`          |
| `rehype-slug`              | Adds `id` attributes to headings                       |
| `rehype-autolink-headings` | Adds anchor links to headings                          |
