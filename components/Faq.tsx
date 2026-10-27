import { faq } from "@/data/faq";

// Native <details>: works without JavaScript and is fully readable by crawlers.
export default function Faq() {
  return (
    <div className="border-b border-sand">
      {faq.map(({ q, a }) => (
        <details key={q} className="group border-t border-sand py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
            {q}
            <span aria-hidden="true" className="text-2xl text-mocha transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed">{a}</p>
        </details>
      ))}
    </div>
  );
}
