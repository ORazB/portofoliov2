# Portfolio v2

Personal portfolio site for **Devandra Mahottama** (a.k.a. *Kyouka* / *Keita*), built as a
single-page React application with a terminal-inspired dark theme.

The site presents an introduction, the tools I work with, a carousel of projects, and a
contact section with social links and a downloadable resume.

> **Live site:** _add your deployed URL here_

---

## Tech stack

| Layer     | Choice                                                  |
| --------- | ------------------------------------------------------- |
| Framework | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) |
| Build     | [Vite 8](https://vite.dev)                              |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`) |
| Carousel  | [Embla Carousel](https://www.embla-carousel.com)        |
| Icons     | [Boxicons](https://boxicons.com) (via `@boxicons/react`) |
| Fonts     | [Fontsource](https://fontsource.org) — Google Sans Flex, Instrument Serif |
| Runtime   | [Bun](https://bun.sh) (`bun.lock`)                       |
| Linting   | [ESLint 10](https://eslint.org) + typescript-eslint      |

---

## Features

- **Terminal-style navigation bar** — the header renders a blinking `~/path` prompt that
  previews the section you are hovering over.
- **Project carousel** — a looping Embla carousel with snap points, previous/next
  controls, and dot pagination. Non-active slides scale down and fade for depth.
- **Project cards** — each card shows the period, name, role, description, tech tags,
  and contextual actions (*View Project* and/or *Source Code*).
- **Resume download** — the resume is bundled as a static asset and served via a
  download link.
- **Responsive layout** — built mobile-first with Tailwind breakpoints throughout.
- **Self-hosted fonts** — no external font requests, so the site works offline and
  avoids layout shift.

---

## Getting started

### Prerequisites

- [Bun](https://bun.sh) 1.x (or Node.js 20+ with npm/pnpm/yarn)

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

The dev server starts on [http://localhost:5173](http://localhost:5173) with hot module
replacement.

### Available scripts

| Script          | Description                                       |
| ---------------- | ------------------------------------------------- |
| `bun run dev`     | Start the Vite dev server with HMR               |
| `bun run build`   | Type-check with `tsc -b`, then build to `dist/`  |
| `bun run preview` | Serve the production build locally               |
| `bun run lint`    | Run ESLint over the project                      |

```bash
bun run build
bun run preview
bun run lint
```

---

## Project structure

```
.
├── public/                 # Static files copied verbatim into the build
│   ├── favicon.svg
│   ├── icon.jpg
│   └── icons.svg
├── src/
│   ├── assets/             # Images and the resume PDF, imported by the bundler
│   ├── components/
│   │   ├── find-me-on.tsx      # Social / contact links
│   │   ├── header.tsx          # Terminal-style nav bar
│   │   ├── project-card.tsx    # Individual project card
│   │   └── project-carousel.tsx# Embla carousel wrapper
│   ├── App.tsx           # Page layout and project data
│   ├── index.css         # Tailwind entry, theme tokens, animations
│   └── main.tsx          # React entry point
├── index.html
├── vite.config.ts
└── eslint.config.js
```

### Customizing

- **Theme colors and fonts** — edit the CSS custom properties and `@theme` block in
  `src/index.css`. The accent color is defined as `--primary`.
- **Projects** — the project list lives in `src/App.tsx` and is typed by
  `ProjectItem` in `src/components/project-card.tsx`.
- **Navigation links** — `DEFAULT_NAV_LINKS` in `src/components/header.tsx`.
- **Contact links** — `DEFAULT_LINKS` in `src/components/find-me-on.tsx`.
- **Social icons in the hero** — `src/App.tsx`.

---

## Deployment

The production build is a fully static site in `dist/`, so it can be hosted anywhere
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, or a plain static server).

```bash
bun run build   # outputs to dist/
```

> **Deploying to GitHub Pages?** The app is served from the site root. If you publish
> to a project sub-path (e.g. `https://<user>.github.io/portofoliov2/`), set
> `base: "/portofoliov2/"` in `vite.config.ts` and update the absolute asset paths in
> `index.html` and `src/components/header.tsx` to match.

---

## License

[MIT](./LICENSE) © 2026 Kyouka
