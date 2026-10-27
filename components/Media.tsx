import Image from "next/image";

// Every photo on the site goes through this component.
// No src = a placeholder at the exact shape (and recommended export size) the photo needs.
const RATIOS = {
  portrait: { cls: "aspect-[4/5]", size: "1200 × 1500 px" },
  square: { cls: "aspect-square", size: "1200 × 1200 px" },
  wide: { cls: "aspect-[16/9]", size: "1600 × 900 px" },
} as const;

type Props = {
  src?: string;
  alt: string;
  ratio?: keyof typeof RATIOS;
  sizes: string;          // tells the browser which file size to download
  label?: string;         // shown on the placeholder, e.g. "Hero photo"
  priority?: boolean;     // true only for the first big image on a page
  className?: string;
};

export default function Media({ src, alt, ratio = "portrait", sizes, label = "Photo coming", priority, className = "" }: Props) {
  const r = RATIOS[ratio];
  if (!src) {
    return (
      <div
        role="img"
        aria-label={`${label} placeholder`}
        className={`${r.cls} flex w-full flex-col items-center justify-center gap-1 rounded-lg bg-sand p-4 text-center text-mocha ${className}`}
      >
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs opacity-80">{ratio === "portrait" ? "4:5" : ratio === "square" ? "1:1" : "16:9"} · {r.size}</span>
      </div>
    );
  }
  return (
    <div className={`relative ${r.cls} w-full overflow-hidden rounded-lg bg-sand ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
