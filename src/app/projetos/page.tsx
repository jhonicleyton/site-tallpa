import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Section, { Container } from "@/components/ui/Section";
import CaseCard from "@/components/cases/CaseCard";
import { ButtonLink } from "@/components/ui/Button";
import { projects } from "@/content/projects";
import { cta, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Sistemas em produção construídos pela Tallpa: plataforma de ordens de serviço e repasse, portal de indicadores operacionais e ERP com CRM e field service.",
  alternates: { canonical: "/projetos" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: site.url },
    { "@type": "ListItem", position: 2, name: "Projetos", item: `${site.url}/projetos` },
  ],
};

export default function ProjetosPage() {
  return (
    <main id="conteudo" className="flex-1 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Section
        className="pt-16 sm:pt-20"
        eyebrow="Projetos"
        title={
          <>
            Sistemas <span className="text-gradient">em produção</span>, não protótipos
          </>
        }
        lede="Três operações reais que trocaram planilha e controle disperso por sistema. Os cases estão anonimizados a pedido dos clientes — o que está descrito é o problema, a solução e como ela funciona."
        headingAs="h1"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <CaseCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Container className="rounded-2xl border border-line bg-gradient-to-b from-bg-1 to-bg-2/50 px-6 py-10 text-center sm:px-10 sm:py-14">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Tem um problema parecido?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-gray-400">
            Todo case acima começou com uma conversa de diagnóstico. {cta.promise}
          </p>
          <div className="mt-7 flex justify-center">
            <ButtonLink href={cta.href} size="lg">
              {cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
