import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import TallpaMark from "@/components/ui/TallpaMark";
import HeroBackdrop from "./HeroBackdrop";
import { cta } from "@/content/site";
import { projects } from "@/content/projects";

/**
 * Hero: a apresentação da marca.
 *
 * Os três pilares da logo se constroem em sequência, da base para o topo.
 * Não é ornamento: a marca sendo montada é exatamente o que a Tallpa faz.
 * Ver a decisão de SVG-em-vez-de-WebGL em TallpaMark.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
      <HeroBackdrop />

      <Container className="relative flex flex-col items-center text-center">
        <div className="relative mb-8">
          <TallpaMark animated className="h-24 w-24 sm:h-28 sm:w-28" />
        </div>

        <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-line-default bg-cyan-300/5 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-500 [animation-delay:400ms]">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_currentColor]"
          />
          Inteligência operacional
        </p>

        <h1 className="animate-rise mt-7 max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-white [animation-delay:520ms] sm:text-5xl lg:text-6xl">
          Menos controles dispersos.
          <br />
          <span className="text-gradient">Mais dados para decidir.</span>
        </h1>

        <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-gray-200 [animation-delay:640ms] sm:text-lg">
          Transformamos processos operacionais em fluxos controlados e mensuráveis. Diagnosticamos
          onde a operação trava, estruturamos os indicadores que faltam e construímos o sistema que
          a sua equipe usa todo dia.
        </p>

        <div className="animate-rise mt-9 flex flex-col gap-3 [animation-delay:760ms] sm:flex-row">
          <ButtonLink href={cta.href} size="lg">
            {cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/projetos" variant="secondary" size="lg">
            Ver o que já construímos
          </ButtonLink>
        </div>

        <p className="animate-rise mt-5 text-xs text-gray-400 [animation-delay:820ms]">
          {cta.promise}
        </p>

        {/* Prova: os sistemas em produção, direto abaixo da dobra */}
        <div className="animate-rise mt-16 w-full [animation-delay:900ms]">
          <div className="rule-gradient mx-auto mb-8 max-w-md" />
          <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            Sistemas em produção hoje
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {projects.map((p) => (
              <li
                key={p.slug}
                className="rounded-xl border border-line bg-bg-1/40 px-4 py-4 text-left"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-500">
                  {p.category}
                </span>
                <span className="mt-1.5 block text-sm font-medium leading-snug text-gray-200">
                  {p.segment}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
