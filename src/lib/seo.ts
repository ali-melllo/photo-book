import type { Metadata } from "next";

export const SITE_NAME = "مهرورو";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mehrvaro.com";
export const SITE_DESCRIPTION =
  "مهرورو، سازنده کتاب‌های عکس شخصی؛ خاطرات و لحظات زندگی خود را به زیباترین شکل چاپ کنید.";

type BuildMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
};

/** Builds consistent Next.js Metadata (title, OG, Twitter, canonical) for a route. */
export function buildMetadata({ title, description, path = "/", image }: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const desc = description ?? SITE_DESCRIPTION;
  const ogImage = image ?? `${SITE_URL}/og-image.png`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "fa_IR",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
  };
}

/** Organization + WebSite JSON-LD, rendered once in the root layout. */
export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

/** FAQPage JSON-LD from an array of Q/A pairs — plug real data in as it exists. */
export function buildFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** BreadcrumbList JSON-LD from an ordered list of {name, path}. */
export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
