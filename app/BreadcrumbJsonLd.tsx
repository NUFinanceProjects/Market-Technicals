const siteUrl = "https://www.market-technicals.com";

type BreadcrumbJsonLdProps = {
  name: string;
  path: string;
};

export function BreadcrumbJsonLd({ name, path }: BreadcrumbJsonLdProps) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Market Technicals",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${siteUrl}${normalizedPath}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
