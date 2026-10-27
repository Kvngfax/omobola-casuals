import Image from "next/image";
import Link from "next/link";
import OrderButton from "./OrderButton";
import { media } from "@/lib/media";
import { formatPrice, getOutfit } from "@/lib/outfits";

// Diagonal-split hero. Phones: brown block on top, outfit overlapping its slanted edge.
// Desktop: brown on the left, cream on the right, outfit standing across the diagonal.
export default function Hero() {
  const featured = getOutfit("burgundy-boss-set");
  const src = media.hero;

  return (
    <section className="relative overflow-hidden bg-cream lg:bg-[linear-gradient(90deg,var(--color-brand)_50%,var(--color-cream)_50%)]">
      <div className="relative mx-auto max-w-[1500px] lg:h-[820px] lg:bg-cream">
        {/* Brown shape */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[780px] bg-brand [clip-path:polygon(0_0,100%_0,100%_100%,0_88%)] sm:h-[800px] lg:inset-0 lg:h-auto lg:[clip-path:polygon(0_0,62%_0,42%_100%,0_100%)]"
        />

        <div className="relative px-5 pt-10 sm:px-8 lg:h-full lg:px-0 lg:pt-0">
          {/* Text */}
          <div className="relative z-10 text-cream lg:absolute lg:left-16 lg:top-24">
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-sand sm:text-[13px]">Custom-made outfits · Lagos · Nationwide</p>
            <h1 className="font-serif text-[64px] font-semibold leading-[0.92] sm:text-[88px] lg:text-[112px] xl:text-[158px]">
              Style made<br />simple…
            </h1>
            <p className="mb-8 mt-6 max-w-md text-[17px] leading-relaxed text-sand lg:mt-8 lg:text-[19px]">
              Simple, classy, comfortable outfits, made to your measurements and your style.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <OrderButton variant="light" className="w-full sm:w-auto">Order on WhatsApp</OrderButton>
              <Link href="/catalogue" className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-sand px-7 py-3 text-[15px] font-medium text-cream transition-colors hover:bg-cream hover:text-brand sm:w-auto">
                View catalogue
              </Link>
            </div>
          </div>

          {/* Outfit */}
          <div className="relative z-20 mx-auto -mt-4 h-[500px] w-[300px] overflow-hidden sm:h-[540px] lg:absolute lg:left-[49%] lg:top-[34px] lg:mx-0 lg:mt-0 lg:h-[1250px] lg:w-[396px] lg:overflow-visible">
            {src ? (
              <Image
                src={src}
                alt={featured ? `${featured.name} on a mannequin` : "Omobola Casuals outfit"}
                width={419}
                height={1322}
                priority
                sizes="(min-width:1024px) 400px, 300px"
                className="mx-auto block h-[880px] w-auto max-w-none drop-shadow-[0_34px_44px_rgba(46,26,26,0.38)] lg:h-[1250px]"
              />
            ) : (
              <div role="img" aria-label="Hero cutout placeholder" className="mx-auto flex h-[880px] w-[279px] items-start justify-center rounded-lg border-2 border-dashed border-sand p-6 text-center text-sm text-sand lg:h-[1250px] lg:w-[396px]">
                Hero cutout · transparent WebP/PNG · 419 × 1322 px
              </div>
            )}
          </div>

          {/* Featured outfit + trust points */}
          {featured && (
            <div className="relative z-10 pb-4 pt-8 text-center text-brand lg:absolute lg:right-16 lg:top-[72px] lg:p-0 lg:text-right">
              <div className="text-xs uppercase tracking-[0.2em] text-mocha">Featured</div>
              <div className="mt-1 font-serif text-3xl font-semibold">{featured.name}</div>
              <div className="mb-2 text-mocha">{formatPrice(featured.price)}</div>
              <Link href={`/catalogue/${featured.slug}`} className="inline-block border-b border-brand py-1 text-sm font-medium">View outfit →</Link>
            </div>
          )}
          <ul className="relative z-10 pb-12 text-center text-[15px] leading-8 text-brand lg:absolute lg:bottom-14 lg:right-16 lg:p-0 lg:text-right">
            <li>Made to your measurements</li>
            <li>Ready in about 4 to 7 days</li>
            <li>Delivery in Lagos and nationwide</li>
          </ul>
        </div>
      </div>
    </section>
  );
}