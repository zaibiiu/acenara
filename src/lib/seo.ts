import type { Metadata } from "next";

export function resolveSiteUrl(value = process.env.NEXT_PUBLIC_SITE_URL) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      /^(localhost|127\.|0\.0\.0\.0|\[::1\])$/i.test(url.hostname) ||
      url.hostname.endsWith(".localhost") ||
      url.hostname.startsWith("127.")
    )
      return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}
export const siteUrl = resolveSiteUrl();
export function metadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  return {
    title,
    description,
    alternates: siteUrl ? { canonical: `${siteUrl}${path}` } : undefined,
    openGraph: {
      title: title.includes("Acenara") ? title : `${title} — Acenara`,
      description,
      type: "website",
      siteName: "Acenara",
      ...(siteUrl
        ? {
            url: `${siteUrl}${path}`,
            images: [
              {
                url: `${siteUrl}/brand/social.png`,
                width: 1200,
                height: 630,
                alt: "Acenara — Software Development & Digital Technology Studio",
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: title.includes("Acenara") ? title : `${title} — Acenara`,
      description,
      ...(siteUrl ? { images: [`${siteUrl}/brand/social.png`] } : {}),
    },
    robots: siteUrl
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}
