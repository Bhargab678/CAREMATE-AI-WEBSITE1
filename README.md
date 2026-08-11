# CareMate AI — Marketing Website

A premium, production-ready marketing website for **CareMate AI**, the AI-powered
nutrition & calorie-tracking app. Built to feel like Apple / Stripe / Linear —
minimal, elegant, fast and trustworthy.

## ✨ Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** for styling (custom design tokens)
- **Framer Motion** for fade-ins, scroll reveals, floating elements & micro-interactions
- **React Three Fiber / Three.js** for the subtle 3D hero background (dynamically loaded, `ssr: false`)
- **Lucide** icons
- **Markdown/MDX** blog powered by `gray-matter` + `react-markdown` + `remark-gfm`
- Full **SEO**: metadata, Open Graph & Twitter cards (dynamically generated images),
  `robots.txt`, `sitemap.xml`, JSON-LD structured data, canonical URLs, web manifest

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## 📁 Project structure

```
src/
├── app/                      # App Router pages & route handlers
│   ├── layout.tsx            # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx              # Home (all sections)
│   ├── about/                # About page
│   ├── blog/                 # Blog listing + [slug] article pages
│   ├── contact/              # Contact page + form
│   ├── privacy/ · terms/     # Legal pages
│   ├── not-found.tsx         # 404
│   ├── icon.tsx              # Generated PNG app icon
│   ├── opengraph-image.tsx   # Generated 1200×630 OG image
│   ├── twitter-image.tsx     # Twitter card (re-exports OG)
│   ├── robots.ts · sitemap.ts · manifest.ts
│   └── globals.css
├── components/
│   ├── sections/             # Hero, Features, HowItWorks, Screenshots,
│   │                         # WhyChoose, Testimonials, BlogPreview, Faq, Cta
│   ├── phone/                # PhoneFrame + AppScreens (Scan / Dashboard / Progress)
│   ├── three/                # HeroScene (R3F)
│   ├── blog/                 # BlogCard, BlogListing (search + filter)
│   ├── layout/               # Navbar, Footer, PageHeader, LegalPage
│   ├── motion/               # Reveal + stagger variants
│   ├── seo/                  # JSON-LD components
│   ├── ui/                   # Button, StoreButtons, SectionHeading
│   ├── Logo.tsx · ContactForm.tsx
├── content/blog/             # Blog posts as .mdx (frontmatter + markdown)
└── lib/                      # site config, content data, blog loader, utils
```

## 🎨 Design tokens

Defined in `tailwind.config.ts`:

| Token | Value |
| --- | --- |
| Primary | `#10B981` |
| Secondary | `#3B82F6` |
| Accent | `#22C55E` |
| Text (ink) | `#111827` |
| Surface | `#F8FAFC` |

Fonts: **Manrope** (display/headings) + **Inter** (body), via `next/font`.

## 📱 The app mockups

The phone screens in the hero, "How it works" and Screenshots sections are
**faithfully re-created in code** (`src/components/phone/AppScreens.tsx`) from your
real app screenshots — the Scan screen, the calorie Dashboard (360 / 2200 kcal) and
the Progress/streak screen. They animate (scanning line, calorie ring, streak checks,
goal rings), so they double as living product demos.

To swap in real screenshot images instead, replace the `<ScanScreen />` /
`<DashboardScreen />` / `<ProgressScreen />` usages with `<Image>` components.

## 🔧 What to replace before launch

Everything below is centralised for easy editing:

1. **Store links, social links, email, domain** → `src/lib/site.ts`
2. **Logo** → `src/components/Logo.tsx` (`LogoMark`) and `public/favicon.svg`
3. **Features / testimonials / FAQ / comparison copy** → `src/lib/content.ts`
4. **Blog posts** → add/edit `.mdx` files in `src/content/blog/`
5. **Contact form submission** → wire the placeholder in `src/components/ContactForm.tsx`
   to your email service or a Next.js route handler
6. **Real app screenshots / images** → drop into `public/` and reference where noted

> The legal pages (`/privacy`, `/terms`) are templates for convenience and are **not
> legal advice** — have them reviewed before publishing.

## 🎨 3D hero (React Three Fiber)

A fullscreen animated hero built with Three.js + R3F, laid out for clarity:

```
src/components/three/hero/
├── HeroCanvas.tsx        # <Canvas>, quality tier, dpr, frameloop
├── Scene.tsx             # fog, bg colour, composition, bloom
├── Lighting.tsx          # ambient + key/rim/point lights, IBL
├── CameraRig.tsx         # cinematic drift + damped pointer parallax
├── Foods.tsx             # per-food natural float
├── Particles.tsx         # single-draw-call GPU twinkle particles
├── config.ts             # FOODS[], quality tiers, palette
├── utils.ts              # seeded RNG, damping, device detection
├── hooks/usePointer.ts   # mouse + touch, refs (no re-renders)
├── foods/registry.tsx    # procedural meshes + GLB swap guide
└── effects/AiEffects.tsx # scan beam (GSAP), holo rings, neural net
```

**Performance features:** device-aware quality tiers (`high` / `mid` / `low`),
capped DPR, single-draw-call particles with a lightweight custom twinkle shader,
soft shadows only on high tier, bloom disabled on low tier and under reduced-motion,
`frameloop="demand"` when reduced-motion is on, `pointer-events: none` so the
canvas never blocks UI, and dynamic import (`ssr: false`) so no three.js bytes
ship in the initial HTML payload.

**Swapping in real `.glb` models:** put optimized (Draco/Meshopt) models in
`public/models/`, then swap the corresponding entry in `foods/registry.tsx` for a
`useGLTF`-based component. Full step-by-step guide is at the bottom of that file.
Everything else — the scene, lighting, camera, floating animation, bloom, shadows
— keeps working unchanged.

## 🎬 Animations & video system

Premium motion is layered in, all GPU-friendly (transform/opacity only) and gated
behind `prefers-reduced-motion`:

- **Loading screen** (`src/components/Preloader.tsx`) — animated logo + progress
  bar, shown once per session, with a hard-timeout safety so it never traps users.
- **Animated counters** (`src/components/motion/Counter.tsx`) — stats count up when
  scrolled into view.
- **Hero** — animated moving blobs, floating health icons, logo/CTA entrance, and a
  scroll indicator.
- **Navbar** — glass blur, animated active-route underline (shared `layoutId`),
  mobile slide-down menu.
- **Pricing** (`src/components/sections/Pricing.tsx`) — animated monthly/annual
  toggle, highlighted popular plan, hover glow-ring cards.
- **Cards/buttons** — hover lift, `glow-ring` animated borders, CSS button sheen.
- **Footer** — animated social icons + subtle grid/blob backdrop.

### Background videos (drop-in ready)

A complete, performance-first video system is wired into the Hero, CTA, Pricing and
Testimonials sections but **disabled by default** (so there are no 404s or empty
frames until you supply assets):

- `src/components/media/BackgroundVideo.tsx` — lazy-mounts via IntersectionObserver,
  plays only while on-screen (pauses off-screen), WebM→MP4 fallback, poster image,
  dark overlay, and a `prefers-reduced-motion` static fallback. Each section shows an
  animated CSS/3D fallback until a video is present.
- **To enable:** add your files to `public/videos/` (see
  [`public/videos/README.md`](public/videos/README.md) for exact filenames + ffmpeg
  compression commands) and set `videoBackgrounds: true` in `src/lib/media.ts`.

## ⚡ Performance & SEO notes

- The 3D hero scene is `dynamic(..., { ssr: false })`, capped DPR, and respects
  `prefers-reduced-motion`.
- Blog is statically generated (`generateStaticParams`).
- Structured data: Organization, WebSite, MobileApplication, Article, FAQ, Breadcrumb.
- OG/Twitter images are generated at build time — no binary assets to manage.
```
