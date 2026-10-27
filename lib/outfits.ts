import data from "@/data/outfits.json";
import { whatsappLink } from "./site";

export type OutfitCategory =
  | "dresses" | "gowns" | "sets" | "tops" | "trousers" | "kaftans" | "abayas";

export type Outfit = {
  slug: string;            // unique, lowercase, used in URLs
  name: string;
  price: number;           // naira, whole number
  description: string;
  category: OutfitCategory;
  images: { src: string; alt: string }[]; // empty = sized placeholder is shown
  featured: boolean;       // shows on the Home page
  available: boolean;
};

const outfits = data as unknown as Outfit[];

export const getOutfits = (): Outfit[] => outfits.filter((o) => o.available);
export const getFeaturedOutfits = (limit = 4): Outfit[] =>
  getOutfits().filter((o) => o.featured).slice(0, limit);
export const getOutfit = (slug: string): Outfit | undefined =>
  getOutfits().find((o) => o.slug === slug);
// Every other outfit (the browser shuffles these for variety on each visit).
export const getOthers = (slug: string): Outfit[] =>
  getOutfits().filter((o) => o.slug !== slug);

// Server-side starting set: the next outfits in the list after this one, wrapping around,
// so each outfit page starts with a different set.
export const getRelated = (slug: string, limit = 3): Outfit[] => {
  const all = getOutfits();
  const i = all.findIndex((o) => o.slug === slug);
  const others = [...all.slice(i + 1), ...all.slice(0, Math.max(i, 0))];
  return others.slice(0, limit);
};

export const formatPrice = (price: number): string =>
  `₦${price.toLocaleString("en-NG")}`;

export const outfitWhatsappLink = (o: Outfit): string =>
  whatsappLink(
    `Hello Omobola Casuals! I saw the ${o.name} (${formatPrice(o.price)}) on your website and would like to order it. Please, can you tell me more?`
  );