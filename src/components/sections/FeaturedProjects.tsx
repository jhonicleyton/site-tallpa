import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import CaseCard from "@/components/cases/CaseCard";
import { projects } from "@/content/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section
      id="projetos"
      eyebrow="Prova"
      title={
        <>
          Três operações que <span className="text-gradient">saíram da planilha</span>
        </>
      }
      lede="Cases anonimizados a pedido dos clientes. O que está descrito é o problema real, a solução construída e como ela funciona."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <CaseCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/projetos"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          Ver todos os projetos
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
