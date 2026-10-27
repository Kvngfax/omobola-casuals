import type { Metadata } from "next";
import OrderButton from "@/components/OrderButton";
import OutfitCard from "@/components/OutfitCard";
import { getOutfits } from "@/lib/outfits";

export const metadata: Metadata = {
  title: "Catalogue",
  description: "Custom-made dresses, gowns, two-piece sets, tops and kaftans from Omobola Casuals, with prices. Made to your measurements in Lagos.",
  alternates: { canonical: "/catalogue" },
};

export default function Catalogue() {
  const outfits = getOutfits();
  return (
    <div className="wrap pb-4 pt-12 sm:pt-16">
      <p className="mb-3 text-xs uppercase tracking-[0.18em] text-mocha sm:text-[13px]">The catalogue</p>
      <h1 className="mb-3 font-serif text-5xl font-semibold text-brand sm:text-6xl">Made for you</h1>
      <p className="max-w-xl text-lg leading-relaxed">Dresses, gowns, two-piece sets, trousers, abayas and more. Every piece is custom-made to your measurements.</p>
      <div className="grid gap-x-6 gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {outfits.map((o) => <OutfitCard key={o.slug} outfit={o} />)}
        <div className="flex flex-col justify-center rounded-lg bg-cream p-8 sm:aspect-[4/5]">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-brand">Have your own design in mind?</h2>
          <p className="mb-6 mt-3 text-[15px] leading-relaxed">Send us the style you love and we will make it to your measurements.</p>
          <OrderButton>Chat on WhatsApp</OrderButton>
        </div>
      </div>
    </div>
  );
}
