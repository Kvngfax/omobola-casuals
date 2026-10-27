import { site, links } from "./site";
import type { Outfit } from "./outfits";

const abs = (path: string) => `${site.url}${path}`;

export const businessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: `+${site.whatsappNumber}`,
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  areaServed: "Nigeria",
  sameAs: [links.instagram, links.tiktok],
});

export const productJsonLd = (o: Outfit) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: o.name,
  description: o.description,
  ...(o.images.length ? { image: o.images.map((i) => abs(i.src)) } : {}),
  brand: { "@type": "Brand", name: site.name },
  offers: {
    "@type": "Offer",
    priceCurrency: "NGN",
    price: o.price,
    availability: o.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    url: abs(`/catalogue/${o.slug}`),
  },
});

export const faqJsonLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});
