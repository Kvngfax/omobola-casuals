import { whatsappLink } from "@/lib/site";

const styles = {
  primary: "bg-brand text-cream hover:bg-espresso",
  light: "bg-cream text-brand hover:bg-sand",
  outline: "border border-brand text-brand hover:bg-brand hover:text-cream",
} as const;

type Props = { href?: string; children?: React.ReactNode; variant?: keyof typeof styles; small?: boolean; className?: string };

export default function OrderButton({ href, children = "Order on WhatsApp", variant = "primary", small, className = "" }: Props) {
  return (
    <a
      href={href ?? whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center rounded-full font-medium transition-colors ${small ? "px-5 text-sm" : "px-7 text-[15px]"} py-3 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
