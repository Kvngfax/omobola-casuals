import Link from "next/link";
import Media from "@/components/Media";
import OrderButton from "@/components/OrderButton";
import OutfitCard from "@/components/OutfitCard";
import Steps from "@/components/Steps";
import { getFeaturedOutfits } from "@/lib/outfits";
import { media } from "@/lib/media";
import { site } from "@/lib/site";

export default function Home() {
  const featured = getFeaturedOutfits(4);
  return (
    <>
      <section className="wrap grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.18em] text-mocha sm:text-[13px]">Custom-made outfits · Lagos · Nationwide</p>
          <h1 className="font-serif text-6xl font-semibold leading-[0.98] text-brand sm:text-7xl lg:text-8xl">
            Style made<br />simple…
          </h1>
          <p className="mb-8 mt-5 max-w-md text-lg leading-relaxed">Simple, classy, comfortable outfits, made to your measurements and your style.</p>
          <div className="flex flex-wrap gap-3">
            <OrderButton>Order on WhatsApp</OrderButton>
            <Link href="/catalogue" className="inline-flex min-h-11 items-center rounded-full border border-brand px-7 py-3 text-[15px] font-medium text-brand hover:bg-brand hover:text-cream">
              View catalogue
            </Link>
          </div>
        </div>
        <div className="rounded-xl bg-sand p-4 sm:p-6">
          <Media src={media.hero} alt={`${site.name} outfit on a mannequin`} label="Hero photo" sizes="(min-width:1024px) 40vw, 100vw" priority className="mx-auto max-w-md" />
        </div>
      </section>

      <section className="bg-cream py-6">
        <ul className="wrap flex flex-col items-center justify-center gap-2 text-center text-[15px] sm:flex-row sm:gap-12">
          <li>Made to your measurements</li>
          <li>Ready in about 4 to 7 days</li>
          <li>Delivery in Lagos and to other states</li>
        </ul>
      </section>

      <section className="wrap pt-16 sm:pt-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3 sm:mb-10">
          <h2 className="font-serif text-4xl font-semibold text-brand sm:text-5xl">Featured outfits</h2>
          <Link href="/catalogue" className="font-medium hover:text-mocha">View all outfits →</Link>
        </div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((o) => <OutfitCard key={o.slug} outfit={o} />)}
        </div>
      </section>

      <section className="wrap mt-16 sm:mt-20">
        <div className="rounded-xl bg-cream px-6 py-12 sm:px-10 lg:px-12 lg:py-14">
          <h2 className="mb-2 font-serif text-4xl font-semibold text-brand sm:text-5xl">How to order</h2>
          <p className="mb-10">Getting a custom outfit should be simple and enjoyable.</p>
          <Steps />
        </div>
      </section>
    </>
  );
}
