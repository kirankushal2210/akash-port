# Akash Kolluru — Portfolio

A fast, statically prerendered portfolio built with Next.js (App Router) and plain CSS. No UI or animation library dependencies.

## Content & Configuration

All profile copy, office details, and social handles live in `content/profile.ts`:

- **Identity & Public Office** — `Akash Kolluru` (`ఆకాశ్ కొల్లూరు`), Telangana Rakshana Sena (TRS) MLC Graduates Candidate (`Hyderabad – Ranga Reddy – Mahabubnagar`).
- **Contact** — `akash.kolluru@gmail.com` and `+91 8886592089`, paired with a direct email/copy desk and client-side enquiry draft builder (`components/ContactDesk.tsx`).
- **Images** — `public/portrait.jpg` (hero portrait) and `public/trs-emblem.png` (transparent party symbol watermark).
- **Site URL** — set `NEXT_PUBLIC_SITE_URL` in production (see `.env.example`).

## Commands

    npm run dev      # local development
    npm run build    # production build (fully static)
    npm run start    # serve production build (fastest local preview)
    npm run lint
