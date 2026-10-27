import type { MetadataRoute } from "next";
import { getOutfits } from "@/lib/outfits";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/catalogue", "/about"].map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 }));
  const outfits = getOutfits().map((o) => ({ url: `${site.url}/catalogue/${o.slug}`, changeFrequency: "monthly" as const, priority: 0.6 }));
  return [...pages, ...outfits];
}
