# pointxtech

Premium software engineering studio website. React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

Visual/design direction lives in `DESIGN.md`; engineering rules live in `AGENTS.md`.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion
- react-router-dom
- lucide-react

## Scripts

```bash
npm install
npm run dev      # dev server (Vite)
npm run build    # production build -> dist/
npm run preview  # serve built output
npm run lint     # eslint .
```

## Structure

```text
src/
├── assets/               # images (webp) + optimized variants in assets/opt
├── components/
│   ├── layout/           # Container, page scaffolding
│   ├── navigation/       # Navbar
│   ├── projects/         # ProjectCard, ProjectShowcase
│   ├── sections/         # Hero, About, Services, Projects, Metrics, FAQ, Contact, Footer, ...
│   └── ui/               # Button, ThemeToggle, EarthGlobe, PointXTerminal, FaqItem, ...
├── constants/
├── context/              # ThemeContext (dark/light)
├── data/                 # services, projects, metrics, testimonials, faq
├── lib/                  # geo helpers
├── pages/                # HomePage, ProjectDetailPage, PrivacyPage
├── services/             # contact form submission
├── App.tsx               # routes + MotionConfig (respects prefers-reduced-motion)
├── index.css             # Tailwind entry + design tokens
└── main.tsx
```

## Routes

- `/` — home (all sections)
- `/projects/:slug` — project detail
- `/privacy` — privacy policy

## Content

Reusable content is data-driven. Edit `src/data/*.ts` rather than hardcoding text in components.

## Conventions

- Tailwind for styling; Framer Motion for entrance/scroll/transform animation. Don't animate the same property with both.
- Small focused components; keep presentation separate from data.

- Respect `prefers-reduced-motion` (handled globally via `MotionConfig reducedMotion="user"`).

## Environment

Copy `.env.example` to `.env` and fill required values (contact/email config).

## ESLint

Config in `eslint.config.js`. For stricter, type-aware rules, swap `tseslint.configs.recommended` for `recommendedTypeChecked` / `strictTypeChecked` and set `parserOptions.project` to `['./tsconfig.node.json', './tsconfig.app.json']`.
