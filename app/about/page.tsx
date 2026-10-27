import type { Metadata } from "next";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Media from "@/components/Media";
import OrderButton from "@/components/OrderButton";
import Steps from "@/components/Steps";
import { faq } from "@/data/faq";
import { faqJsonLd } from "@/lib/seo";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "About and How to Order",
  description: "Meet Omobola Casuals and learn how to order a custom outfit: the steps, pricing from ₦10,000, a 4 to 7 day turnaround, deposits and delivery across Nigeria.",
  alternates: { canonical: "/about" },
};

const values = [
  ["Simple", "Clean lines, uncomplicated styles."],
  ["Classy", "Refined finishing on every piece."],
  ["Comfortable", "Made to your measurements."],
];
const info = [
  ["Pricing", "Some styles start from ₦10,000. Price depends on the design, fabric and level of detailing."],
  ["Turnaround", "Usually 4 to 7 days, depending on the style, fabric availability and workload. Rush orders are available at an extra charge."],
  ["Delivery", "Based in Lagos, serving customers nationwide. Delivery fees depend on your location and are confirmed before you pay."],
];

export default function About() {
  return (
    <>
      <JsonLd data={faqJsonLd(faq)} />
      <section className="wrap grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-mocha sm:text-[13px]">About us</p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-brand sm:text-6xl">Style doesn’t have to be complicated to be beautiful</h1>
          <p className="mb-4 mt-6 text-[17px] leading-[1.7]">Omobola Casuals began during a long university holiday. Already a fashion designer, she decided to take her work seriously and share her designs with more people online.</p>
          <p className="text-[17px] leading-[1.7]">Every outfit reflects the client’s own style, with close attention to finishing and detail, so you feel comfortable and confident in what you wear.</p>
        </div>
        <div className="rounded-xl bg-sand p-4 sm:p-6">
          <Media src={media.about} alt="Omobola Casuals outfit" label="About photo" sizes="(min-width:1024px) 40vw, 100vw" priority className="mx-auto max-w-md" />
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="wrap grid gap-8 text-center sm:grid-cols-3">
          {values.map(([t, d]) => (
            <div key={t}>
              <div className="font-serif text-4xl font-semibold text-brand">{t}</div>
              <p className="mt-1 text-[15px]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-to-order" className="wrap scroll-mt-24 pt-16 sm:pt-20">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-mocha sm:text-[13px]">How to order</p>
        <h2 className="mb-10 font-serif text-4xl font-semibold text-brand sm:text-5xl">From idea to outfit in four steps</h2>
        <Steps />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {info.map(([t, d]) => (
            <div key={t} className="rounded-xl bg-cream p-7">
              <h3 className="mb-2 font-serif text-3xl font-semibold text-brand">{t}</h3>
              <p className="text-[15px] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap mt-16 grid gap-8 sm:mt-20 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-mocha sm:text-[13px]">FAQ</p>
          <h2 className="mb-3 font-serif text-4xl font-semibold text-brand sm:text-5xl">Questions, answered</h2>
          <p className="leading-relaxed">Can’t find what you need? Message us on WhatsApp.</p>
        </div>
        <Faq />
      </section>

      <section className="wrap mt-16 sm:mt-20">
        <div className="rounded-xl bg-brand px-6 py-14 text-center text-cream sm:px-12">
          <h2 className="mb-2 font-serif text-4xl font-semibold sm:text-5xl">Ready to start your outfit?</h2>
          <p className="mb-7">Tell us what you have in mind and we will take it from there.</p>
          <OrderButton variant="light">Order on WhatsApp</OrderButton>
        </div>
      </section>
    </>
  );
}
