# Journalist portfolio

A single-page editorial portfolio built with Next.js (App Router) and plain CSS. No UI or animation dependencies.

## Before launch

Everything below lives in `content/profile.ts`.

1. **Name** — `NAME` is set to "Akash". Change it here if a fuller form is wanted.
2. **Contact email** — set `CONTACT_EMAIL`. The three enquiry lines in the Contact section then become mail links.
3. **Site URL** — set the `NEXT_PUBLIC_SITE_URL` environment variable to the production address.
4. **Photographs** — put files in `public/` and pass `src`, `alt` and `credit` to the two `<PhotoSlot>` elements in `app/page.tsx` (portrait in the hero, a wide field photograph in the Field section).

## Content rules

All copy comes from the supplied profile document, with each block in `content/profile.ts` citing the document heading it came from. The document gives no dates for the newsroom posts, no contact details and no photographs, so none are shown.

## Commands

    npm run dev      # local development
    npm run build    # production build (fully static)
    npm run lint
