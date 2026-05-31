import { useState } from "react";
import type { Item } from "../types";
import { formatPrice } from "../utils/format";
import { imageUrl } from "../utils/image";

interface ItemCardProps {
  item: Item;
  onSelect: (item: Item) => void;
}

/**
 * Grid card showing the key info at a glance: a mini photo carousel (with
 * prev/next arrows when there are several photos), title, asking price, the
 * Neupreis (retail when new), a short description, and the item number.
 * Tapping the photo or the text opens the detail modal.
 */
export function ItemCard({ item, onSelect }: ItemCardProps) {
  const photos = item.photoUrl;
  const count = photos.length;
  const [active, setActive] = useState(0);

  const step = (dir: number) => setActive((a) => (a + dir + count) % count);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative overflow-hidden bg-slate-100">
        <button
          type="button"
          onClick={() => onSelect(item)}
          aria-label={`${item.title} — Details öffnen`}
          className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-slate-900"
        >
          <img
            src={imageUrl(photos[active], 800)}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-contain transition duration-300 group-hover:scale-[1.03]"
          />
        </button>

        <span className="pointer-events-none absolute top-2 left-2 rounded-full bg-black/55 px-2 py-0.5 text-xs font-medium text-white">
          #{item.number}
        </span>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Vorheriges Foto"
              className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 opacity-0 shadow backdrop-blur transition group-hover:opacity-100 focus-visible:opacity-100 hover:bg-white max-sm:opacity-100"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Nächstes Foto"
              className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 opacity-0 shadow backdrop-blur transition group-hover:opacity-100 focus-visible:opacity-100 hover:bg-white max-sm:opacity-100"
            >
              <Chevron dir="right" />
            </button>
            <div className="pointer-events-none absolute right-2 bottom-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
              {active + 1} / {count}
            </div>
          </>
        )}
      </div>

      <button
        type="button"
        onClick={() => onSelect(item)}
        className="flex flex-1 flex-col p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-slate-900"
      >
        <h3 className="font-semibold text-slate-900">{item.title}</h3>

        <div className="mt-1">
          <span className="text-lg font-bold text-slate-900">
            {formatPrice(item.price)}
          </span>
          <p className="text-xs text-slate-400">
            Neupreis: {formatPrice(item.newPrice)}
          </p>
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-slate-500">
          {item.description}
        </p>
      </button>
    </article>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d={dir === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}
