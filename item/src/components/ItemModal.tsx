import { useEffect } from "react";
import type { Item } from "../types";
import { formatPrice } from "../utils/format";
import { whatsappLink } from "../config";
import { ImageGallery } from "./ImageGallery";

interface ItemModalProps {
  item: Item;
  onClose: () => void;
}

/**
 * Detail dialog for a single item. Slides up as a sheet on mobile and centers
 * as a card on larger screens. Closes on Esc, backdrop click, or the X button,
 * and locks body scroll while open.
 */
export function ItemModal({ item, onClose }: ItemModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-white shadow-xl sm:rounded-2xl"
      >
        <header className="flex items-start justify-between gap-3 border-b border-slate-100 p-4">
          <div className="min-w-0">
            <span className="text-xs font-medium text-slate-400">
              #{item.number}
            </span>
            <h2 className="truncate text-lg font-semibold text-slate-900">
              {item.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Schließen"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className="overflow-y-auto p-4">
          <ImageGallery photos={item.photoUrl} title={item.title} />

          <div className="mt-4">
            <span className="text-2xl font-bold text-slate-900">
              {formatPrice(item.price)}
            </span>
            <p className="text-sm text-slate-400">
              Neupreis: {formatPrice(item.newPrice)}
            </p>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {item.description}
          </p>

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 underline underline-offset-2 hover:text-slate-900"
            >
              Originalartikel ansehen
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>

        <footer className="border-t border-slate-100 p-4">
          <a
            href={whatsappLink(item.number, item.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.41a8.2 8.2 0 0 1 2.42 5.83c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm4.71 10.31c-.06-.1-.23-.16-.49-.29-.26-.13-1.52-.75-1.76-.83-.24-.09-.41-.13-.59.13-.17.26-.67.83-.82 1-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.07-1.28-.77-.68-1.28-1.53-1.43-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.59-1.42-.81-1.94-.21-.51-.43-.44-.59-.45l-.5-.01a.97.97 0 0 0-.7.33c-.24.26-.92.9-.92 2.18 0 1.29.94 2.53 1.07 2.71.13.17 1.85 2.82 4.48 3.95.63.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.52-.62 1.74-1.22.21-.6.21-1.11.15-1.22Z" />
            </svg>
            Per WhatsApp anfragen
          </a>
        </footer>
      </div>
    </div>
  );
}
