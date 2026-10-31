// Single source of truth for brand details. Change here, updates everywhere.
export const site = {
  name: "Omobola Casuals",
  slogan: "Style made simple…",
  description:
    "Custom-made outfits that are simple, classy and comfortable. Based in Lagos, serving customers nationwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://omobola-casuals.vercel.app",
  location: "Lagos, Nigeria",
  whatsappNumber: "2347052923771", // international format, no + or leading 0
  whatsappDisplay: "0705 292 3771",
  instagram: "omobola.casuals",
  tiktok: "omobolacasuals_",
  generalMessage:
    "Hello Omobola Casuals! I saw your work on your website and would like to make an enquiry about a custom outfit. Please, can you tell me more about the ordering process?",
} as const;

export const links = {
  instagram: `https://instagram.com/${site.instagram}`,
  tiktok: `https://tiktok.com/@${site.tiktok}`,
};

export function whatsappLink(message: string = site.generalMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}