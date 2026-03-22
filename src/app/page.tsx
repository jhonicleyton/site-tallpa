import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import SocialProof from "@/components/sections/SocialProof";
import LeadCapture from "@/components/sections/LeadCapture";

export const metadata: Metadata = {
  title: "Tallpa Solutions | Software House, IA e BI em Santa Catarina",
  description:
    "Software House em Santa Catarina especializada em sistemas sob demanda, automações com Inteligência Artificial e Business Intelligence. Desenvolvemos ERPs, CRMs, portais e dashboards para empresas que precisam de tecnologia que realmente funciona.",
  keywords: [
    "software house",
    "sistemas sob demanda",
    "IA",
    "inteligência artificial",
    "automação",
    "Business Intelligence",
    "BI",
    "ERP",
    "CRM",
    "Santa Catarina",
    "Tallpa",
    "Tallpa Solutions",
    "desenvolvimento de software",
    "dashboards",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <SocialProof />
      <LeadCapture />
    </main>
  );
}
