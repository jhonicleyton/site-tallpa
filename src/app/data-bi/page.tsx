import Link from "next/link";
import { ArrowRight, Database, LineChart, Target, Eye } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "Data & BI",
  description:
    "Centralize seus dados e transforme números dispersos em clareza para tomar decisões com confiança. Dashboards e pipelines de dados sob medida.",
};

const benefits = [
  {
    icon: Database,
    title: "Dados centralizados, fonte única de verdade",
    description:
      "Fim dos relatórios contraditórios, planilhas desatualizadas e silos entre áreas. Integramos todas as suas fontes — ERP, CRM, marketing, financeiro — em um único pipeline de dados confiável.",
  },
  {
    icon: Eye,
    title: "Clareza para quem decide",
    description:
      "Dashboards projetados para líderes: sem ruído, sem dados irrelevantes. Cada painel mostra exatamente o que importa para aquele gestor — do CEO ao coordenador de operações.",
  },
  {
    icon: Target,
    title: "Métricas que revelam o que está errado",
    description:
      "Não apenas monitore o resultado — entenda a causa. Construímos KPIs e alertas que identificam desvios antes que virem problema, dando tempo de agir, não só de reagir.",
  },
  {
    icon: LineChart,
    title: "Análise histórica e previsão",
    description:
      "Compare períodos, identifique sazonalidades e projete cenários futuros com modelos estatísticos. Decisões de expansão, estoque e precificação passam a ter base quantitativa.",
  },
];

const stats = [
  { value: "37%", label: "de redução no tempo de análise" },
  { value: "1 fonte", label: "de verdade para toda a empresa" },
  { value: "+25k", label: "eventos de dados processados" },
];

export default function DataBiPage() {
  return (
    <main className="bg-dark-bg min-h-screen">
      {/* ─── Abertura §7.1 ─── */}
      <section className="relative min-h-screen flex items-start bg-dark-bg overflow-hidden">
        {/* Glow §7.3 */}
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
          {/* Eyebrow */}
          <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
            Data & BI
          </p>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-light leading-tight max-w-3xl mb-6">
            Seus dados existem.{" "}
            <span className="text-gradient-electric">Falta clareza para usá-los.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-text-muted text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            Centralizamos todas as suas fontes de dados e entregamos dashboards que
            mostram o que importa, para quem precisa decidir. Menos planilha, mais
            resposta.
          </p>

          {/* CTA principal */}
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 bg-gradient-electric text-white font-semibold px-8 py-4 rounded-lg text-base shadow-lg hover:opacity-90 hover:shadow-[0_0_28px_rgba(0,123,255,0.45)] transition-all duration-200 active:scale-[0.98]"
          >
            Solicitar Orçamento para este Serviço
            <ArrowRight size={18} />
          </Link>

          {/* Stats rápidos */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-3xl font-extrabold text-gradient-electric mb-1">
                  {value}
                </p>
                <p className="text-text-muted text-sm leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefícios §7.2 ─── */}
      <section className="bg-dark-bg py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-3">
              O que a sua operação ganha
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-light">
              De dados dispersos a{" "}
              <span className="text-gradient-electric">inteligência acionável</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map(({ icon: Icon, title, description }) => (
              <GlassCard key={title} className="p-8 flex gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-electric/10 flex items-center justify-center">
                  <Icon size={22} className="text-brand-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-text-light text-lg mb-2">
                    {title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA de fechamento ─── */}
      <section className="bg-dark-bg py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-light mb-4">
            Quanto você deixa de ganhar por{" "}
            <span className="text-gradient-electric">decidir no escuro?</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-10">
            Mapeamos suas fontes de dados existentes e mostramos, em 60 minutos, o que
            é possível construir — e o impacto que isso teria na sua tomada de decisão.
          </p>
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 bg-gradient-electric text-white font-semibold px-10 py-4 rounded-lg text-base shadow-lg hover:opacity-90 hover:shadow-[0_0_28px_rgba(0,123,255,0.45)] transition-all duration-200 active:scale-[0.98]"
          >
            Solicitar Orçamento para este Serviço
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
