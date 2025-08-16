# West — Portfolio (Next.js + TS + Tailwind + Framer Motion)

A minimalist, dark, animated portfolio for **William “West”** with a desktop/mobilized **Dynamic Island**.

## ✨ Features
- **Dynamic Island** (desktop: full-width but inset; mobile: floating initials + hamburger)
- **Framer Motion** reveals & subtle floating
- **Dark palette** with glassmorphism + neon accents
- Sections: **Hero, Projects, Experience, Skills, Contact**
- Content-driven via `data/content.ts`
- Responsive, keyboard accessible

## 🛠️ Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · React Icons

## ▶️ Getting Started
```bash
npm install
npm run dev
# open http://localhost:3000
```

## 🧰 Customize
Edit **`data/content.ts`** for your name, socials, projects, and experience.

Color palette is in **`tailwind.config.ts`** (`colors.bg`, `colors.ink`, `colors.accent`).

## 🧪 Notes
- The Dynamic Island gently floats using keyframe arrays in Framer Motion.
- Mobile shows a floating **“W”** and a hamburger that reveals the navigation overlay.
- Replace `you@example.com` and social links with your own.
- Add logos/images in `/public` and reference them in components if desired.
