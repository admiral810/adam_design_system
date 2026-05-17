# Website UI Kit

A click-through prototype of Adam's personal website, built with the personal design system.

## Pages

- **Home** — Hero, selected work grid, about snippet
- **Work** — Full project grid
- **About** — Bio + capabilities
- **Contact** — Contact form with success state

## Components

| File | Description |
|------|-------------|
| `Header.jsx` | Sticky frosted-glass nav header with wordmark and nav links |
| `Hero.jsx` | Homepage hero: headline, subhead, CTAs, stripe-art panel |
| `ProjectCard.jsx` | Reusable card — default, image, and accent (navy) variants |
| `Footer.jsx` | Dark navy footer with nav links, social, copyright |

## Design notes

- Navigation is fully click-through between pages
- Hover states on all interactive elements
- Contact form shows a success state on submit
- Colors, type, spacing all sourced from `../../colors_and_type.css`
- Icons: Lucide (CDN) — not yet wired to actual icon elements; placeholders used where icons would go
- Images: stripe-art placeholders stand in for real photography

## What's missing / next steps

- Real photography / project imagery
- Mobile responsive layout (currently desktop-optimized)
- Blog/writing list page
- Dark mode variant
- Actual project case study page
