import { useEffect, useState } from "react";
import { imageUrl } from "../utils/image";

interface ImageGalleryProps {
  photos: string[];
  /** Used for alt text, e.g. the item title. */
  title: string;
}

/**
 * Multi-photo viewer: large active image, prev/next controls, a thumbnail
 * strip, and keyboard arrow navigation. Lets buyers preview every photo.
 */
export function ImageGallery({ photos, title }: ImageGalleryProps) {
  const [active, setActive] = useState(0);
  const count = photos.length;

  const go = (next: number) => setActive((next + count) % count);

  useEffect(() => {
    if (count <= 1) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setActive((a) => (a - 1 + count) % count);
      if (e.key === "ArrowRight") setActive((a) => (a + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  if (count === 0) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-slate-100 text-slate-400">
        Keine Fotos
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-xl bg-slate-100">
        <img
          key={active}
          src={imageUrl(photos[active], 1000)}
          alt={`${title} — Foto ${active + 1} von ${count}`}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover"
        />

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Vorheriges Foto"
              className="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow backdrop-blur transition hover:bg-white"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Nächstes Foto"
              className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow backdrop-blur transition hover:bg-white"
            >
              <ChevronRight />
            </button>
            <div className="absolute right-3 bottom-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
              {active + 1} / {count}
            </div>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {photos.map((photo, i) => (
            <button
              type="button"
              key={photo + i}
              onClick={() => setActive(i)}
              aria-label={`Foto ${i + 1} ansehen`}
              aria-current={i === active}
              className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                i === active
                  ? "border-slate-900"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={imageUrl(photo, 160)}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
