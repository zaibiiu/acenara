import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { services } from "@/content/services";
import { articles } from "@/content/insights";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [
    "/",
    "/services/",
    "/about/",
    "/expertise/",
    "/insights/",
    "/contact/",
    "/privacy/",
    ...services.map((s) => `/services/${s.slug}/`),
    ...articles.map((a) => `/insights/${a.slug}/`),
  ].map((path) => ({ url: `${siteUrl}${path}` }));
}
