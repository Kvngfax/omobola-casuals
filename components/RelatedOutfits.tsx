"use client";

import { useEffect, useState } from "react";
import OutfitCard from "./OutfitCard";
import type { Outfit } from "@/lib/outfits";

function pickRandom(all: Outfit[], count: number): Outfit[] {
  const a = [...all];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, count);
}

// The server sends a fixed starting set (good for search engines and instant display),
// then the browser swaps in a fresh random set on every visit.
export default function RelatedOutfits({ all, initial, count = 3 }: { all: Outfit[]; initial: Outfit[]; count?: number }) {
  const [items, setItems] = useState(initial);

  useEffect(() => {
    const id = requestAnimationFrame(() => setItems(pickRandom(all, count)));
    return () => cancelAnimationFrame(id);
  }, [all, count]);

  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((r) => <OutfitCard key={r.slug} outfit={r} />)}
    </div>
  );
}