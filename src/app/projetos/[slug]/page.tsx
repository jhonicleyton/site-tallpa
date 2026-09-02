import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import ScreenGallery from "@/components/cases/ScreenGallery";
import TechStack from "@/components/cases/TechStack";
import CaseCard from "@/components/cases/CaseCard";
import { getProject, projects, relatedProjects } from "@/content/projects";
import { cta, site } from "@/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.name} | Tallpa Solutions`,
      description: project.summary,
      url: `${site.url}/projetos/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjetoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = relatedProjects(project.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: site.url },
          { "@type": "ListItem", position: 2, name: "Projetos", item: `${site.url}/projetos` },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: `${site.url}/projetos/${project.slug}`,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        name: project.name,
        abstract: project.summary,
        about: project.category,
        audience: { "@type": "Audience", audienceType: project.segment },
        creator: { "@id": `${site.url}/#organization` },
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <main id="conteudo" className="flex-1 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Abertura */}
      <Section className="pb-10 pt-14 sm:pt-16">
        <Link
          href="/projetos"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-cyan-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Todos os projetos
        </Link>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="cyan">{project.category}</Badge>
            <Badge tone="neutral">{project.segment}</Badge>
          </div>

          <h1 className="max-w-4xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.name}
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-gray-200 sm:text-xl">
            {project.tagline}
          </p>

          <div className="mt-2">
            <TechStack tech={project.tech} />
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {project.facts.map((f) => (
            <div key={f.label} className="rounded-xl border border-line bg-bg-1/50 p-4">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                {f.label}
              </dt>
              <dd className="mt-1.5 text-sm font-semibold leading-snug text-white">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Problema */}
      <Section
        className="py-12 sm:py-16"
        eyebrow="O problema"
        title="O que estava acontecendo"
      >
        <div className="flex max-w-3xl flex-col gap-4">
          {project.problem.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-gray-300">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* Solução */}
      <Section className="py-12 sm:py-16" eyebrow="A solução" title="O que construímos">
        <div className="flex max-w-3xl flex-col gap-4">
          {project.solution.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-gray-300">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* Interface */}
      <Section className="py-12 sm:py-16" eyebrow="A interface" title="Como ela se parece">
        <ScreenGallery keys={project.screens} />
      </Section>

      {/* Funcionamento */}
      <Section className="py-12 sm:py-16" eyebrow="Funcionamento" title="Como funciona na prática">
        <ol className="flex flex-col gap-4">
          {project.howItWorks.map((step, i) => (
            <li key={step.title}>
              <Card className="flex gap-5 p-5 sm:p-6">
                <span
                  aria-hidden="true"
                  className="text-gradient shrink-0 font-display text-2xl font-bold leading-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{step.description}</p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* Funcionalidades */}
      <Section className="py-12 sm:py-16" eyebrow="Escopo" title="O que o sistema faz">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {project.features.map((group) => (
            <Card key={group.group} className="flex flex-col gap-4 p-6">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-500">
                {group.group}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-gray-300">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Desafios */}
      <Section
        className="py-12 sm:py-16"
        eyebrow="Engenharia"
        title="Os problemas difíceis"
        lede="O que exigiu decisão de arquitetura, não apenas código."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {project.challenges.map((c) => (
            <Card key={c.title} variant="stat" className="p-6">
              <h3 className="font-display text-base font-semibold text-white">{c.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-400">{c.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefícios + CTA */}
      <Section className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <SectionHeading eyebrow="Resultado" title="O que mudou na operação" className="mb-7" />
            <ul className="flex flex-col gap-3.5">
              {project.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-base leading-relaxed text-gray-300">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-400" strokeWidth={2} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <Card variant="stat" className="flex h-fit flex-col gap-4 p-7">
            <h2 className="font-display text-xl font-bold leading-snug text-white">
              Quer uma solução parecida?
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Começamos entendendo a sua operação — não vendendo este sistema. {cta.promise}
            </p>
            <ButtonLink href={cta.href} className="mt-1 w-full">
              {cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </Card>
        </div>
      </Section>

      {/* Relacionados */}
      {related.length > 0 && (
        <Section className="py-12 sm:py-16" eyebrow="Continue" title="Outros projetos">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {related.map((p) => (
              <CaseCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}
