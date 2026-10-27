import Link from "next/link";
import Media from "./Media";
import { formatPrice, outfitWhatsappLink, type Outfit } from "@/lib/outfits";

export default function OutfitCard({ outfit, priority }: { outfit: Outfit; priority?: boolean }) {
  const img = outfit.images[0];
  return (
    <article id={outfit.slug}>
      <Link href={`/catalogue/${outfit.slug}`} className="group block">
        <Media
          src={img?.src}
          alt={img?.alt ?? outfit.name}
          label={outfit.name}
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          priority={priority}
        />
        <h3 className="mt-4 font-serif text-2xl font-semibold group-hover:text-brand">{outfit.name}</h3>
      </Link>
      <p className="mb-2 mt-1 text-mocha">{formatPrice(outfit.price)}</p>
      <a href={outfitWhatsappLink(outfit)} target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-sm font-medium text-brand hover:text-mocha">
        Order this outfit →
      </a>
    </article>
  );
}
