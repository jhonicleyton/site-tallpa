import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start bg-dark-bg overflow-hidden">
      {/* Glow radial de fundo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% -5%, rgba(0,194,255,0.13) 0%, rgba(0,123,255,0.07) 45%, transparent 72%)",
        }}
      />
      {/* Glow secundário — canto inferior direito */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, rgba(0,123,255,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Coluna esquerda — copy */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-brand-cyan text-xs font-semibold tracking-[0.2em] uppercase">
            <span className="w-6 h-px bg-brand-cyan" aria-hidden="true" />
            Software House Premium
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold font-display leading-[1.15] tracking-tight text-text-light">
            Tecnologia que{" "}
            <span className="text-gradient-electric">transforma</span>{" "}
            operações em resultados
          </h1>

          <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-lg">
            Escale sua operação com tecnologia sob medida. Desenvolvemos
            sistemas, automações com IA e painéis de dados que eliminam
            gargalos, cortam custos invisíveis e preparam sua empresa para o
            próximo nível.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="primary">Diagnóstico Gratuito</Button>
            <Button variant="ghost">Nossos Casos</Button>
          </div>
        </div>

        {/* Coluna direita — mockup */}
        <div className="flex justify-center lg:justify-end lg:-translate-x-10">
          <Image
            src="/images/tallpa-dashboard-mockup.svg"
            alt="Preview do sistema Tallpa Solutions"
            width={640}
            height={440}
            className="w-full max-w-[600px] drop-shadow-[0_20px_60px_rgba(0,123,255,0.28)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
