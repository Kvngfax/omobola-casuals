import Link from "next/link";
import { site, links, whatsappLink } from "@/lib/site";
import OrderButton from "./OrderButton";

const h = "mb-4 text-xs uppercase tracking-[0.18em] text-[#c9a27f]";

export default function Footer() {
  return (
    <footer className="mt-20 bg-espresso text-cream">
      <div className="wrap pb-7 pt-14 sm:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <div className="font-serif text-3xl font-semibold tracking-wider">OMOBOLA CASUALS</div>
            <div className="mt-1 font-serif text-xl text-sand">{site.slogan}</div>
            <p className="mb-6 mt-4 max-w-xs text-[14.5px] leading-relaxed text-sand">{site.description}</p>
            <OrderButton variant="light" small>Order now</OrderButton>
          </div>
          <div>
            <div className={h}>Explore</div>
            <ul className="flex flex-col gap-2.5 text-[15px]">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/catalogue">Catalogue</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/about#how-to-order">How to Order</Link></li>
            </ul>
          </div>
          <div>
            <div className={h}>Contact</div>
            <ul className="flex flex-col gap-2.5 text-[15px]">
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp: {site.whatsappDisplay}</a></li>
              <li><a href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram: @{site.instagram}</a></li>
              <li><a href={links.tiktok} target="_blank" rel="noopener noreferrer">TikTok: @{site.tiktok}</a></li>
            </ul>
          </div>
          <div>
            <div className={h}>Good to know</div>
            <ul className="flex flex-col gap-2.5 text-[15px] text-sand">
              <li>Ready in about 4 to 7 days</li>
              <li>Rush orders available</li>
              <li>Delivery in Lagos and nationwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-2 border-t border-brand pt-5 text-[13px] text-sand">
          <span>© 2026 {site.name}. All rights reserved.</span>{" "}
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}