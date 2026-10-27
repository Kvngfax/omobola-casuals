import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Everything is open to search engines and AI crawlers on purpose.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
