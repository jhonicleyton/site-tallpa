import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ShowcaseDashboard from "@/components/sections/ShowcaseDashboard";
import ShowcaseWidgets from "@/components/sections/ShowcaseWidgets";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "Demonstrações reais de interfaces, dashboards e automações desenvolvidas pela Tallpa Solutions.",
};

export default function ShowcasePage() {
  return (
    <main className="flex-1">
      {/* Seção de abertura — PRD §7.1 */}
      <section className="relative min-h-screen flex items-start bg-dark-bg overflow-hidden">
        {/* Glow principal — PRD §7.3 */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% -5%, rgba(0,194,255,0.13) 0%, rgba(0,123,255,0.07) 45%, transparent 72%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 80%, rgba(0,123,255,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 w-full">
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <p className="text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-3">
              Demonstrações
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light">
              Tecnologia em{" "}
              <span className="text-gradient-electric">Movimento</span>
            </h1>
            <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
              Interfaces, dashboards e automações reais desenvolvidas pela
              Tallpa — veja como seria operar com tecnologia sob medida.
            </p>
          </div>

          {/* Dashboard interativo */}
          <ShowcaseDashboard />
          <p className="mt-3 text-center text-text-muted/50 text-xs">
            * Dados fictícios para fins de demonstração.
          </p>
        </div>
      </section>

      {/* Widgets de sistema — PRD §7.2 */}
      <ShowcaseWidgets />

      {/* CTA Final — PRD §7.2 */}
      <section className="bg-dark-bg py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-light mb-4">
            Quer algo assim na sua empresa?
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
            Agende um diagnóstico gratuito e descubra o que a Tallpa pode
            construir para você.
          </p>
          <Link href="/#contato">
            <Button variant="primary">Solicitar Diagnóstico Gratuito</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
