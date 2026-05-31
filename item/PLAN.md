# Implementation Plan — Move-Out Marketplace

A client-only single-page app for selling furniture and household items from an apartment move-out. No backend, no database, no routing library. Mobile-first.

## Tech Stack

- **React 19 + Vite** (already initialized)
- **TypeScript** (strict, typed data model)
- **Tailwind CSS** (utility-first styling, mobile-first)
- **Deploy:** Vercel (static SPA, zero config)

## Goals & Constraints

- Single route only: Home (`/`). No router library.
- Data lives in a local typed source module — no fetch, no API.
- Fast and lightweight: minimal dependencies, no global state library.
- Clean, modern, simple UI optimized for phones first, scaling up to desktop.

---

## 1. Cleanup (remove boilerplate)

- Delete `src/App.css`, `src/assets/react.svg`, `src/assets/vite.svg`, `src/assets/hero.png` (if unused).
- Replace `src/index.css` with Tailwind directives + minimal base styles.
- Rewrite `src/App.tsx` to render the `Home` page.
- Keep `src/main.tsx` (entry) mostly as-is.

## 2. Add Tailwind CSS

- Install `tailwindcss`, `@tailwindcss/postcss`, `postcss` (Tailwind v4 PostCSS pipeline) **or** the `@tailwindcss/vite` plugin (preferred — simpler).
- Add the Vite plugin to `vite.config.ts`.
- Add `@import "tailwindcss";` to `src/index.css`.
- Configure mobile-first defaults; rely on Tailwind's `sm: / md: / lg:` breakpoints.

## 3. Data Model & Source

`src/types.ts`

```ts
export interface Item {
  number: number;
  title: string;
  description: string;
  price: number;
  newPrice: number;     // discounted/asking price
  link: string;         // external listing/contact link
  photoUrl: string[];   // first entry = primary photo
}
```

`src/data/items.ts` — typed array `export const items: Item[]` with ~6–8 realistic sample entries (multiple photos each). Using a `.ts` module (not raw `.json`) keeps it type-checked and tree-shakeable. A separate `getItems()` accessor keeps the data layer swappable.

## 4. Component Structure

```
src/
├─ main.tsx              # entry (unchanged)
├─ App.tsx              # renders <Home />
├─ index.css            # tailwind import + base
├─ types.ts             # Item interface
├─ data/
│  └─ items.ts          # typed sample data
├─ pages/
│  └─ Home.tsx          # the single page: header + responsive grid of cards
└─ components/
   ├─ ItemCard.tsx      # card in the grid
   ├─ ItemModal.tsx     # detail modal (full info + gallery)
   └─ ImageGallery.tsx  # multi-photo viewer w/ thumbnails + swipe/prev-next
```

### `Home.tsx`
- Sticky, minimal header (title + item count).
- Responsive grid: 1 col on phones, 2 on `sm`, 3 on `lg`.
- Holds the only piece of state: `selectedItem: Item | null` via `useState`.
- Renders `ItemCard` list; opens `ItemModal` when a card is tapped.

### `ItemCard.tsx`
Shows the most important info at a glance:
- Primary photo (`photoUrl[0]`) with `loading="lazy"`, fixed aspect ratio.
- Title.
- Price + new price (old price struck through, new price emphasized; show discount badge when `newPrice < price`).
- Short/truncated description (`line-clamp`).
- Item number (`#number`).
- Whole card is tappable → opens modal. Large touch targets.

### `ItemModal.tsx`
- Accessible overlay dialog (focus trap-lite, `Esc` to close, click-backdrop to close, body scroll lock).
- Full description, both prices, item number, and external `link` (CTA button).
- Embeds `ImageGallery` for all photos.
- Slide-up sheet style on mobile, centered card on desktop.

### `ImageGallery.tsx`
- Preview **all** photos in `photoUrl[]`.
- Large active image + thumbnail strip; prev/next controls; keyboard arrows.
- Lazy loading; graceful fallback if a URL fails.

## 5. Styling / UX Principles

- Mobile-first utility classes; enhance at `sm`/`md`/`lg`.
- System font stack, generous spacing, rounded cards, soft shadows, subtle borders.
- High contrast, readable type, ≥44px touch targets.
- No layout shift: fixed image aspect ratios (`aspect-[4/3]`), skeleton/placeholder background.
- Respect safe-area insets and `viewport` already set in `index.html`.

## 6. Performance

- No data fetching — instant render.
- `loading="lazy"` + `decoding="async"` on images.
- Memoize card list / handlers where it helps; avoid premature optimization.
- Tree-shaken build; no state/routing libs.

## 7. Accessibility

- Semantic elements, `alt` text from item title, `aria-label`s on icon buttons.
- Modal: `role="dialog"`, `aria-modal`, Esc/backdrop close, focus return to trigger.

## 8. Deploy (Vercel)

- Static SPA — framework preset "Vite", build `npm run build`, output `dist/`.
- Optional `vercel.json` not required for a single-route SPA.

---

## Build Order (checklist)

1. [ ] Install + wire Tailwind (`@tailwindcss/vite`), update `index.css`.
2. [ ] Remove boilerplate (`App.css`, demo assets), simplify `App.tsx`.
3. [ ] Add `types.ts` (`Item`) + `data/items.ts` sample data.
4. [ ] Build `ImageGallery.tsx`.
5. [ ] Build `ItemModal.tsx` (uses gallery).
6. [ ] Build `ItemCard.tsx`.
7. [ ] Build `Home.tsx` (grid + modal state) and render from `App.tsx`.
8. [ ] Polish responsive styling, empty/error states, a11y.
9. [ ] `npm run build` + `npm run lint` to verify production readiness.

## Out of Scope (explicitly)

- Routing, global state libraries, backend/API, database, auth, cart/checkout.
