"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import OrderButton from "./OrderButton";

const nav = [
  { href: "/", label: "Home" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/about", label: "About" },
  { href: "/about#how-to-order", label: "How to Order" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? path === "/" : !href.includes("#") && path.startsWith(href));
  const link = (href: string, label: string, mobile = false) => {
    const active = isActive(href);
    const cls = mobile
      ? `block rounded-lg px-3 py-3 text-lg ${active ? "bg-sand/70 font-medium text-brand" : "active:bg-cream"}`
      : `border-b-2 pb-1 text-[15px] ${active ? "border-brand" : "border-transparent hover:text-mocha"}`;
    return (
      <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined} className={cls}>
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-sand bg-ivory/95 backdrop-blur">
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <Link href="/" aria-label="Omobola Casuals, home">
          <Image src="/brand/logo.png" alt="Omobola Casuals" width={584} height={608} priority className="h-14 w-auto sm:h-16" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {nav.map((n) => link(n.href, n.label))}
        </nav>
        <div className="flex items-center gap-3">
          <OrderButton small className="hidden sm:inline-flex">Order now</OrderButton>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-sand md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="wrap flex flex-col gap-1 border-t border-sand pb-5 pt-3 md:hidden">
          {nav.map((n) => link(n.href, n.label, true))}
          <OrderButton className="mt-3 w-full">Order now</OrderButton>
        </nav>
      )}
    </header>
  );
}