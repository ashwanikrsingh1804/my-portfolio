# Ashwani Kumar Singh — Portfolio Website

A futuristic, responsive portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS**, and **Framer Motion**.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or higher → [Download](https://nodejs.org)
- **npm** v9+ (comes with Node.js)

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # CSS variables, base styles
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Main page (assembles all sections)
├── components/
│   ├── AnimatedBackground.tsx  # Canvas: particles + gradient mesh
│   ├── Splash.tsx              # ~1.5s intro splash screen
│   ├── Navbar.tsx              # Fixed top nav + mobile menu
│   ├── ScrollProgress.tsx      # Top progress bar
│   ├── SectionDots.tsx         # Right-side section spy dots
│   ├── RevealWrapper.tsx       # Scroll-reveal animation wrapper
│   ├── Hero.tsx                # Hero section with animated counters
│   ├── ImpactStrip.tsx         # Top-3 impact metrics banner
│   ├── Experience.tsx          # Accordion timeline cards
│   ├── Achievements.tsx        # Achievement grid with badges
│   ├── Skills.tsx              # Grouped skill tags
│   ├── Education.tsx           # Degrees + Certifications + Publications
│   ├── Contact.tsx             # Contact cards
│   └── ResumeModal.tsx         # Printable resume modal
├── lib/
│   └── data.ts              # All resume data as structured JSON
├── public/                  # Static assets (add your photo here)
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

## ✏️ Customization Guide

### Update your personal info
Edit **`lib/data.ts`** — all content lives here as a single JSON object:
- `basics` → name, title, email, phone, location, LinkedIn
- `experience[]` → roles, bullets, chips, highlights
- `achievements[]` → icons, numbers, badges
- `skills[]` → skill groups and items
- `education[]` → degrees and dates
- `certifications[]` → cert names and issuers
- `publications[]` → paper titles and descriptions

### Change colors/theme
Edit CSS variables in **`app/globals.css`**:
```css
:root {
  --accent: #4f8ef7;   /* primary blue */
  --accent2: #7c6ff7;  /* purple */
  --accent3: #00d4aa;  /* teal */
}
```

### Add a profile photo
1. Place your photo in `/public/photo.jpg`
2. Add an `<Image>` tag to `components/Hero.tsx`

### Deploy to Vercel (free, recommended)
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com).

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2 | React framework (App Router) |
| TypeScript | 5 | Type safety |
| TailwindCSS | 3.4 | Utility-first CSS |
| Framer Motion | 11 | Animations |
| Lucide React | 0.400 | Icons |

---

## 📦 All Features

- ✅ Splash screen with animated monogram + progress bar
- ✅ Animated canvas background (particles + gradient mesh + connecting lines)
- ✅ Scroll progress bar
- ✅ Section spy dots (desktop)
- ✅ Animated counters in hero
- ✅ Top-4 impact metrics strip
- ✅ Accordion experience timeline with all bullets
- ✅ Achievement cards with metric badges
- ✅ Grouped skill tags
- ✅ Education, certifications, publications
- ✅ Contact section with all links
- ✅ Printable resume modal
- ✅ Dark / Light theme toggle
- ✅ Mobile bottom navigation
- ✅ Scroll reveal animations (staggered)
- ✅ `prefers-reduced-motion` support
- ✅ Fully responsive (360px → 1440px+)
