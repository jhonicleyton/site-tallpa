import { contact, site, social } from "@/content/site";
import { solutions } from "@/content/solutions";

/**
 * JSON-LD global. Validado no Rich Results Test como "Organização".
 * Os serviços são derivados de content/solutions.ts — cadastrar uma
 * frente nova ali já a expõe aqui.
 */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/icon.svg`,
        width: 512,
        height: 512,
      },
      image: {
        "@type": "ImageObject",
        url: `${site.url}/opengraph-image`,
        width: 1200,
        height: 630,
      },
      telephone: contact.phone,
      email: contact.email,
      foundingDate: "2024",
      slogan: site.tagline,
      description: site.description,
      address: {
        "@type": "PostalAddress",
        addressRegion: site.region,
        addressCountry: site.country,
      },
      areaServed: { "@type": "Country", name: "Brasil" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: contact.email,
        telephone: contact.phone,
        availableLanguage: "Portuguese",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Soluções Tallpa",
        itemListElement: solutions.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.summary,
            url: `${site.url}/solucoes#${s.id}`,
          },
        })),
      },
      sameAs: [social.instagram, social.linkedin, social.github],
      priceRange: "$$",
      knowsLanguage: "pt-BR",
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "pt-BR",
    },
  ],
};

export default function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
