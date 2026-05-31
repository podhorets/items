import { useState } from "react";
import type { Item } from "../types";
import { getItems } from "../data/items";
import { ItemCard } from "../components/ItemCard";
import { ItemModal } from "../components/ItemModal";

const items = getItems();

/**
 * The single page of the app: a header and a responsive grid of item cards.
 * Tapping a card opens the detail modal — the only piece of UI state here.
 */
export function Home() {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Umzugsverkauf</h1>
            <p className="text-sm text-slate-500">
              Alles muss raus
            </p>
          </div>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white">
            {items.length} Artikel
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        {items.length === 0 ? (
          <p className="py-20 text-center text-slate-500">
            Aktuell sind keine Artikel verfügbar — schau bald wieder vorbei.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ItemCard
                key={item.number}
                item={item}
                onSelect={setSelected}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="mx-auto max-w-5xl px-4 pb-10 text-center text-xs text-slate-400">
        Tippe auf einen Artikel für Fotos und Details.
      </footer>

      {selected && (
        <ItemModal item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
