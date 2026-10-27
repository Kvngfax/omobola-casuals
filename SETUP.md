# Omobola Casuals: setup

1. Create the app (see commands in chat), then copy these folders into it, replacing files when asked:
   app/  components/  data/  lib/  public/
2. In next.config.ts add this line inside nextConfig:
   images: { formats: ["image/avif", "image/webp"] },
3. npm run dev  ->  http://localhost:3000

Edit brand details: lib/site.ts
Add or change outfits: data/outfits.json (photos go in public/outfits/)
Big page photos: lib/media.ts
FAQ: data/faq.ts    Steps: data/steps.ts
