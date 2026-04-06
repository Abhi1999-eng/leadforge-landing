# LeadForge Landing (Next.js App Router)

A premium, conversion-focused landing site for LeadForge — a website development, SEO, and digital marketing agency. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion for subtle motion
- next/font (Inter) and next/image with static export (`output: 'export'`)

## Getting Started
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## Build & Static Export
```bash
npm run build
npm run export
```
Static files will be emitted to `out/`, ready for Vercel static, Netlify, S3, Cloudflare Pages, etc.

## Content Editing
- Update copy, plans, and phone/email in `lib/content.ts`.
- WhatsApp CTA uses `WHATSAPP_NUMBER` and `COMPANY.whatsappMessage` (helper in `lib/whatsapp.ts`).
- SEO metadata lives in `app/layout.tsx` (Next metadata API).

## Notes
- Images are lightweight SVG placeholders in `public/images` and `public/og-cover.svg`. Replace with real assets.
- Form is client-side with validation and a thank-you state; wire up to your backend or form service as needed.
- Domain assumed `leadforge.in`; adjust `metadataBase` if different.

## Deploying to Vercel
1. Push this repo to GitHub.
2. In Vercel, “New Project” → import the repo.
3. Framework preset: **Next.js**. No extra env vars needed for static export.
4. Build command: `npm run build` (Vercel auto-detects). Output: `out/`.
5. Set custom domain `leadforge.in` in Vercel Domains.
