import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Solutions from "@/components/sections/Solutions";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Method from "@/components/sections/Method";
import Segments from "@/components/sections/Segments";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import { faq } from "@/content/home";

export const metadata: Metadata = {
  title: "Tallpa Solutions | Sistemas, indicadores e automação para operações",
  description:
    "Diagnosticamos onde a operação trava, estruturamos os indicadores que faltam e construímos o sistema que a sua equipe usa todo dia. Software house em Santa Catarina.",
  keywords: [
    "sistemas sob medida",
    "indicadores operacionais",
    "dashboards",
    "automação de processos",
    "diagnóstico operacional",
    "KPI",
    "integração de sistemas",
    "ETL",
    "portal de gestão",
    "ERP",
    "CRM",
    "field service",
    "Santa Catarina",
    "Tallpa Solutions",
  ],
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Home() {
  return (
    <main id="conteudo" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Problems />
      <Solutions />
      <FeaturedProjects />
      <Method />
      <Segments />
      <CtaBand />
      <Faq />
    </main>
  );
}
