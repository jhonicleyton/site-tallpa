const BASE_URL = "https://tallpa.com.br";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${BASE_URL}/#organization`,
      name: "Tallpa Solutions",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.svg`,
        width: 512,
        height: 512,
      },
      foundingDate: "2024",
      description:
        "Software House especializada em sistemas sob demanda, automações com IA e soluções de Business Intelligence para empresas que precisam de tecnologia que realmente funciona.",
      address: {
        "@type": "PostalAddress",
        addressRegion: "SC",
        addressCountry: "BR",
      },
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "Portuguese",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Tecnologia",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sistemas Sob Demanda",
              description:
                "ERPs, CRMs e portais exclusivos desenvolvidos do zero, adaptados ao processo de cada empresa.",
              url: `${BASE_URL}/sistemas`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "IA & Automação",
              description:
                "Agentes de IA e workflows que eliminam tarefas repetitivas e entregam ganho de escala operacional.",
              url: `${BASE_URL}/ia-automacao`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data & Business Intelligence",
              description:
                "Centralização de dados e dashboards sob medida para tomada de decisão com confiança.",
              url: `${BASE_URL}/data-bi`,
            },
          },
        ],
      },
      sameAs: [
        "https://www.instagram.com/tallpasolutions",
        "https://www.linkedin.com/company/tallpa",
        "https://github.com/tallpa",
      ],
      priceRange: "$$",
      knowsLanguage: "pt-BR",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Tallpa Solutions",
      description:
        "Software House especializada em sistemas sob demanda, IA e BI — Santa Catarina, Brasil.",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
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
