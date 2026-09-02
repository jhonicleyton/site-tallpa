import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Section, { Container } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { solutions } from "@/content/solutions";
import { cta, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Diagnóstico operacional, sistemas sob medida, dashboards e indicadores, estruturação de KPIs, automação de processos, integrações e ETL, portais de gestão e consultoria.",
  alternates: { canonical: "/solucoes" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: site.url },
    { "@type": "ListItem", position: 2, name: "Soluções", item: `${site.url}/solucoes` },
  ],
};

export default function SolucoesPage() {
  return (
    <main id="conteudo" className="flex-1 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Section
        className="pb-10 pt-14 sm:pt-20"
        eyebrow="Soluções"
        title={
          <>
            Oito frentes, um objetivo:{" "}
            <span className="text-gradient">operação sob controle</span>
          </>
        }
        lede="Nem todo problema operacional precisa de um sistema novo. Começamos entendendo qual é o seu, e só então escolhemos a frente certa."
        headingAs="h1"
      >
        <nav aria-label="Índice das soluções" className="flex flex-wrap gap-2">
          {solutions.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-line px-4 py-2 text-xs font-medium text-gray-400 transition-colors hover:border-line-default hover:text-cyan-300"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </Section>

      <Section className="pt-4">
        <div className="flex flex-col gap-5">
          {solutions.map(({ id, title, icon: Icon, body, deliverables }, i) => (
            <Card
              key={id}
              id={id}
              variant="stat"
              className="scroll-mt-28 p-6 sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
                <div>
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-line-default bg-gradient-soft">
                      <Icon className="h-5 w-5 text-cyan-300" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] font-bold tracking-widest text-cyan-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-xl font-semibold leading-tight text-white">
                        {title}
                      </h2>
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-gray-300">{body}</p>
                </div>

                <div className="rounded-xl border border-line bg-bg/40 p-5">
                  <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                    O que você recebe
                  </h3>
                  <ul className="mt-3.5 flex flex-col gap-2.5">
                    {deliverables.map((d) => (
                      <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-gray-300">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Container className="rounded-2xl border border-line bg-gradient-to-b from-bg-1 to-bg-2/50 px-6 py-10 text-center sm:px-10 sm:py-14">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Não sabe por qual começar?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-gray-400">
            É exatamente para isso que serve o diagnóstico. {cta.promise}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href={cta.href} size="lg">
              {cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/projetos" variant="secondary" size="lg">
              Ver projetos entregues
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
