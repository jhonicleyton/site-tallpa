import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Section, { Container } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import TallpaMark from "@/components/ui/TallpaMark";
import { method } from "@/content/home";
import { cta, site } from "@/content/site";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Sobre a Tallpa",
  description:
    "Somos uma casa de engenharia que entra em operações de campo e devolve dado consolidado, indicador confiável e um sistema que a equipe usa todo dia.",
  alternates: { canonical: "/sobre" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: site.url },
    { "@type": "ListItem", position: 2, name: "Sobre a Tallpa", item: `${site.url}/sobre` },
  ],
};

const principles = [
  {
    title: "Entendemos a operação antes do sistema",
    body: "Passamos tempo com quem executa, não só com quem decide. O processo real quase nunca é o que está no fluxograma — e é o real que o sistema precisa atender.",
  },
  {
    title: "Dizemos quando não vale construir",
    body: "Há problema operacional que se resolve com processo, e há caso em que uma ferramenta de mercado atende. Quando é assim, falamos — mesmo que o projeto encolha.",
  },
  {
    title: "Registramos as decisões, não só o código",
    body: "Cada escolha de arquitetura fica documentada com o motivo e as alternativas descartadas. É o que permite outra pessoa assumir o sistema sem arqueologia.",
  },
  {
    title: "Entregamos em ciclos curtos",
    body: "Cada ciclo termina com algo utilizável de ponta a ponta. Você vê funcionando antes de estar pronto, e corrige o rumo enquanto ainda é barato.",
  },
  {
    title: "Permissão é regra de servidor",
    body: "Esconder um botão não é controle de acesso. O recorte é aplicado antes de o dado sair do banco — a interface só reflete o que já foi decidido lá atrás.",
  },
  {
    title: "Sistema em produção precisa de dono",
    body: "O uso real sempre revela o que o planejamento não previu. Acompanhamos depois do lançamento, porque software que ninguém mantém envelhece em meses.",
  },
];

export default function SobrePage() {
  return (
    <main id="conteudo" className="flex-1 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Section className="pb-10 pt-14 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-cyan-500">
              <span aria-hidden="true" className="h-px w-6 bg-cyan-500" />
              Sobre a Tallpa
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.06] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Operação, dados e tecnologia —{" "}
              <span className="text-gradient">as três, ou não funciona</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
              A maior parte dos sistemas que não pegam falha no mesmo ponto: foram desenhados por
              quem entende de tecnologia, mas não de operação. Nós entramos pelos dois lados.
            </p>
          </div>
          <div className="hidden justify-center lg:flex">
            <TallpaMark className="h-40 w-40" />
          </div>
        </div>
      </Section>

      <Section className="py-12 sm:py-16" eyebrow="Posicionamento" title="O que a Tallpa faz">
        <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-gray-300">
          <p>
            Trabalhamos com operações onde o campo é o negócio: telecom, provedores de internet,
            infraestrutura, serviços com equipe distribuída. São operações que geram muito dado e
            costumam controlá-lo em planilha, sistema de terceiro e memória de gente.
          </p>
          <p>
            Nosso trabalho é transformar isso em fluxo controlado e mensurável. Isso significa três
            coisas, geralmente nesta ordem: tirar o dado de onde ele está preso, estruturar o
            indicador que responde à pergunta de gestão, e construir o sistema onde a operação
            passa a acontecer.
          </p>
          <p>
            Não somos uma fábrica de software que recebe especificação pronta. O diagnóstico faz
            parte da entrega — em vários projetos, o problema que o cliente descreveu na primeira
            conversa não era o problema que resolvemos.
          </p>
        </div>
      </Section>

      <Section
        className="py-12 sm:py-16"
        eyebrow="Como pensamos"
        title="Seis princípios que valem para todo projeto"
      >
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ title, body }) => (
            <li key={title}>
              <Card variant="stat" className="flex h-full flex-col gap-2.5 p-6">
                <h3 className="font-display text-base font-semibold leading-snug text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">{body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="py-12 sm:py-16" eyebrow="Método" title="Do diagnóstico à produção">
        <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {method.map(({ step, title, description }) => (
            <li
              key={step}
              className="surface-topline rounded-2xl border border-line bg-gradient-to-b from-bg-1 to-bg-2/50 p-6"
            >
              <span aria-hidden="true" className="text-gradient font-display text-3xl font-bold leading-none">
                {step}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        className="py-12 sm:py-16"
        eyebrow="Experiência prática"
        title="O que já está rodando"
        lede="Não é portfólio de protótipo. São sistemas que uma operação usa todos os dias."
      >
        <ul className="flex flex-col gap-3">
          {projects.map((p) => (
            <li
              key={p.slug}
              className="flex flex-col gap-2 rounded-xl border border-line bg-bg-1/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-400" strokeWidth={2} aria-hidden="true" />
                <div>
                  <span className="block text-sm font-semibold text-white">{p.name}</span>
                  <span className="mt-0.5 block text-xs text-gray-400">{p.segment}</span>
                </div>
              </div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-cyan-500 sm:text-right">
                {p.facts[0]?.value}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="pb-20 pt-0">
        <Container className="rounded-2xl border border-line bg-gradient-to-b from-bg-1 to-bg-2/50 px-6 py-10 text-center sm:px-10 sm:py-14">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Conte o seu gargalo. Nós dizemos o que dá para fazer.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-gray-400">{cta.promise}</p>
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
