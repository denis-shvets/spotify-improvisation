# Spotify Improvisation

Purpose-built in less than two days, this project recreates the look and feel of Spotify’s [Confidence](https://confidence.spotify.com/#stories) landing experience as a proof-of-concept portfolio piece. It is a single-page Next.js 16 App Router site that showcases Denis Shvets’ story, highlights, and four recent projects with immersive, image-heavy modals.

## Highlights
- **Story-driven hero** – the `Hero`, `Blockquote`, and `Idea` sections stitch together the motivation behind the project while guiding visitors to the project gallery.
- **Interactive project grid** – cards in `src/features/home/RecentProjects` open accessible modals that lock page scroll, reuse a shared `Details` composition, and display imagery plus supporting links.
- **Responsive from scratch** – Tailwind CSS v4 utilities and custom CSS variables in `src/app/globals.css` keep the layout consistent from 375px up to ultra-wide monitors without relying on external UI kits.
- **Zero-auth local demo** – there are no API keys or backends to configure; all assets ship from `/public`, so the page can be previewed immediately.

## Tech Stack
- Next.js 16 (App Router, React Server Components)
- React 19 + TypeScript
- Tailwind CSS v4 with custom theme tokens
- Lucide Icons

## Getting Started
1. **Install dependencies**
   ```bash
   pnpm install
   ```
   (You can swap `pnpm` for `npm` or `yarn` if preferred.)
2. **Run the development server**
   ```bash
   pnpm dev
   ```
   Visit `http://localhost:3000` to browse the site. Edits to files under `src/` will hot-reload automatically.

3. **Build for production**
   ```bash
   pnpm build
   pnpm start    # runs the compiled app
   ```

## Available Scripts
- `pnpm dev` – start the Next.js dev server with hot reloading.
- `pnpm build` – create an optimized production build.
- `pnpm start` – serve the production build.
- `pnpm lint` – run ESLint with the project presets (Next.js, Prettier, simple-import-sort).

## Project Structure
```text
src/
├─ app/                  # Next.js layouts, global CSS, and route handlers
│  ├─ (default)/page.tsx # Assembles the single-page experience
│  └─ layout.tsx         # Metadata + root HTML shell
├─ features/home/        # Feature-driven home page sections
│  ├─ Hero.tsx           # Opening hero headline & CTA
│  ├─ Blockquote.tsx     # Motivation copy block
│  ├─ Idea.tsx           # Spotify Confidence tribute section
│  └─ RecentProjects/    # Project cards, modal logic, and rich content
└─ shared/               # Reusable primitives (e.g., Button component)
public/
└─ projects/, kustom-*, natural-language-search/, release-summary/ assets
```

## Deployment
The app is static-friendly and deploys cleanly to Vercel, Netlify, or any platform that understands `next build && next start`. Ensure the Node.js version matches the one expected by Next.js 16+ (Node 18.18 or later).

## Transparency
This README is the only AI-generated file in the repository; the rest of the codebase was handcrafted for this demo.
