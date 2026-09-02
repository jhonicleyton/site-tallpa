import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import TallpaMark from "@/components/ui/TallpaMark";
import HeroBackdrop from "./HeroBackdrop";
import { cta } from "@/content/site";

/**
 * Hero: a apresentação da marca, ocupando a tela inteira.
 *
 * Os três pilares da logo se constroem em sequência, da base para o topo.
 * Não é enfeite: a marca sendo montada é o que a Tallpa faz.
 * Ver a decisão de SVG-em-vez-de-WebGL em TallpaMark.
 *
 * Largura total de propósito. Só os blocos de texto são limitados, para
 * a linha não ficar longa demais para ler.
 */
export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-24 text-center sm:min-h-svh sm:px-8 sm:pb-20 sm:pt-28 lg:px-12">
      <HeroBackdrop />

      <div className="relative flex w-full flex-col items-center">
        <TallpaMark
          animated
          className="mb-6 h-20 w-20 sm:mb-10 sm:h-36 sm:w-36 lg:h-44 lg:w-44"
        />

        <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-line-default bg-cyan-300/5 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-500 [animation-delay:400ms] sm:text-xs">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_currentColor]"
          />
          Inteligência operacional
        </p>

        <h1 className="animate-rise mt-6 max-w-[20ch] font-display text-[2.25rem] font-bold leading-[1.02] tracking-[-0.035em] text-white [animation-delay:520ms] sm:mt-8 sm:max-w-none sm:text-6xl sm:leading-[1] lg:text-7xl xl:text-[5.5rem]">
          Menos controles dispersos.
          <br />
          <span className="text-gradient">Mais dados para decidir.</span>
        </h1>

        <p className="animate-rise mt-6 max-w-3xl text-[15px] leading-normal text-gray-200 [animation-delay:640ms] sm:mt-8 sm:text-lg sm:leading-relaxed lg:text-xl lg:leading-relaxed">
          Transformamos processos operacionais em fluxos controlados e mensuráveis. Diagnosticamos
          onde a operação trava, estruturamos os indicadores que faltam e construímos o sistema que
          a sua equipe usa todo dia.
        </p>

        <div className="animate-rise mt-8 flex w-full flex-col gap-3 [animation-delay:760ms] sm:mt-11 sm:w-auto sm:flex-row sm:gap-4">
          <ButtonLink href={cta.href} size="lg" className="sm:px-10 sm:py-5 sm:text-lg">
            {cta.label}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href="/projetos"
            variant="secondary"
            size="lg"
            className="sm:px-10 sm:py-5 sm:text-lg"
          >
            Ver o que já construímos
          </ButtonLink>
        </div>

        <p className="animate-rise mt-5 text-xs text-gray-400 [animation-delay:820ms] sm:mt-6 sm:text-sm">
          {cta.promise}
        </p>
      </div>

      {/* Indicação de que há mais abaixo */}
      <div
        aria-hidden="true"
        className="animate-rise absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 [animation-delay:1000ms] lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
          Role
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />
      </div>
    </section>
  );
}
