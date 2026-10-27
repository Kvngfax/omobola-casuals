import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import JsonLd from "@/components/JsonLd";
import Media from "@/components/Media";
import OrderButton from "@/components/OrderButton";
import RelatedOutfits from "@/components/RelatedOutfits";
import { formatPrice, getOutfit, getOthers, getOutfits, getRelated, outfitWhatsappLink } from "@/lib/outfits";
import { productJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getOutfits().map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const o = getOutfit(slug);
  if (!o) return {};
  return {
    title: o.name,
    description: `${o.description} ${formatPrice(o.price)}. Custom-made to your measurements by Omobola Casuals, Lagos.`,
    alternates: { canonical: `/catalogue/${o.slug}` },
    openGraph: { title: o.name, description: o.description, images: o.images[0] ? [o.images[0].src] : undefined },
  };
}

// The part that reads the URL lives here, inside Suspense (see OutfitPage below).
async function OutfitDetails({ params }: Props) {
  const { slug } = await params;
  const o = getOutfit(slug);
  if (!o) notFound();
  const others = getOthers(o.slug);
  const initial = getRelated(o.slug, 3);
  const main = o.images[0];
  const extras = o.images.slice(1);

  return (
    <div className="wrap pb-4 pt-8 sm:pt-12">
      <JsonLd data={productJsonLd(o)} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-mocha">
        <Link href="/catalogue" className="hover:text-brand">← Catalogue</Link>
      </nav>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="grid gap-4">
          <Media src={main?.src} alt={main?.alt ?? o.name} label={o.name} sizes="(min-width:1024px) 55vw, 100vw" priority />
          <div className="grid grid-cols-2 gap-4">
            {(extras.length ? extras : [undefined, undefined]).map((img, i) => (
              <Media
                key={img?.src ?? i}
                src={img?.src}
                alt={img?.alt ?? `${o.name}, view ${i + 2}`}
                label={i === 0 ? "Second angle" : "Detail close-up"}
                ratio="square"
                sizes="(min-width:1024px) 27vw, 50vw"
              />
            ))}
          </div>
        </div>
        <div className="lg:pt-4">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-mocha">{o.category}</p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-brand sm:text-6xl">{o.name}</h1>
          <p className="mt-3 text-2xl text-mocha">{formatPrice(o.price)}</p>
          <p className="mt-6 text-lg leading-relaxed">{o.description}</p>
          <ul className="my-8 space-y-2 border-y border-sand py-6 text-[15px]">
            <li>Made to your measurements</li>
            <li>Ready in about 4 to 7 days</li>
            <li>Deposit of up to 70% confirms your order</li>
            <li>Delivery in Lagos and to other states</li>
          </ul>
          <OrderButton href={outfitWhatsappLink(o)} className="w-full sm:w-auto">Order this outfit on WhatsApp</OrderButton>
          <p className="mt-4 text-sm text-mocha">Price may vary with fabric and detailing. We confirm everything before you pay.</p>
        </div>
      </div>
      {others.length > 0 && (
        <section className="mt-16 sm:mt-20">
          <h2 className="mb-8 font-serif text-4xl font-semibold text-brand">You may also like</h2>
          <RelatedOutfits key={o.slug} all={others} initial={initial} />
        </section>
      )}
    </div>
  );
}

export default function OutfitPage({ params }: Props) {
  return (
    <Suspense fallback={<div className="wrap min-h-[60vh] py-24" aria-busy="true" />}>
      <OutfitDetails params={params} />
    </Suspense>
  );
}