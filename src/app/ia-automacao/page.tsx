import Link from "next/link";
import { ArrowRight, Bot, TrendingUp, Zap, RefreshCw } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "IA & Automação",
  description:
    "Agentes de IA e workflows que eliminam tarefas repetitivas e entregam ganho de escala operacional sem contratar mais pessoas.",
};

const benefits = [
  {
    icon: Zap,
    title: "Tarefas repetitivas eliminadas de vez",
    description:
      "Triagem de e-mails, geração de relatórios, envio de notificações, atualização de registros — processos que consomem horas da sua equipe todos os dias passam a rodar sozinhos, sem intervenção humana.",
  },
  {
    icon: TrendingUp,
    title: "Escala sem escalar headcount",
    description:
      "Com agentes de IA trabalhando 24/7, o volume que antes exigia contratar mais pessoas agora é absorvido pela automação. Sua operação cresce sem que o custo fixo cresça na mesma proporção.",
  },
  {
    icon: Bot,
    title: "Agentes especializados no seu contexto",
    description:
      "Não são chatbots genéricos. São agentes treinados com as regras, produtos e linguagem da sua empresa — capazes de classificar leads, responder clientes e acionar sistemas internos com precisão.",
  },
  {
    icon: RefreshCw,
    title: "Workflows integrados ponta a ponta",
    description:
      "Conectamos ferramentas que hoje funcionam em silos: CRM, ERP, WhatsApp, e-mail, planilhas. Um evento em um sistema dispara ações automáticas em todos os outros, sem intervenção manual.",
  },
];

const stats = [
  { value: "80%", label: "das tarefas repetitivas eliminadas em média" },
  { value: "24/7", label: "agentes operando sem interrupção" },
  { value: "3.2×", label: "de ROI médio no primeiro ano" },
];

export default function IaAutomacaoPage() {
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
            IA & Automação
          </p>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-light leading-tight max-w-3xl mb-6">
            IA & Automação{" "}
            <span className="text-gradient-electric">Inteligente.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-text-muted text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            Elimine os gargalos manuais que travam o seu crescimento. Substitua
            processos repetitivos por fluxos inteligentes que escalam com a sua empresa.
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
              O que a automação resolve
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-light">
              De gargalo operacional a{" "}
              <span className="text-gradient-electric">vantagem competitiva</span>
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
            Quanto tempo sua equipe perde{" "}
            <span className="text-gradient-electric">todo mês em tarefas manuais?</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-10">
            Em 60 minutos de diagnóstico identificamos os fluxos com maior potencial
            de automação e estimamos o retorno que você pode ter.
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
