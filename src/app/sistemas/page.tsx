import Link from "next/link";
import { ArrowRight, CheckCircle2, Settings2, BarChart3, Users, Layers } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "Sistemas Sob Demanda",
  description:
    "Desenvolvemos ERPs, CRMs e portais exclusivos que se adaptam ao seu processo — não ao contrário. Software que escala com o seu negócio.",
};

const benefits = [
  {
    icon: Settings2,
    title: "Software que segue o seu processo",
    description:
      "Nada de adaptar a operação a um sistema de prateleira. Mapeamos cada fluxo da sua empresa e construímos a lógica exata que você precisa — sem gambiarras, sem módulos que nunca usa.",
  },
  {
    icon: Users,
    title: "ERPs e CRMs exclusivos",
    description:
      "Do pipeline de vendas ao controle de estoque, passando por RH e financeiro: entregamos sistemas integrados com a sua marca, os seus termos e as suas regras de negócio.",
  },
  {
    icon: BarChart3,
    title: "Visibilidade total da operação",
    description:
      "Dashboards em tempo real integrados ao core do sistema. Tome decisões com dados gerados pelo próprio processo, sem exportar planilhas nem cruzar abas.",
  },
  {
    icon: Layers,
    title: "Arquitetura que escala",
    description:
      "Construímos com tecnologia moderna e código limpo. Quando o negócio crescer, o sistema cresce junto — sem reescritas, sem migrações traumáticas.",
  },
];

export default function SistemasPage() {
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
            Sistemas Sob Demanda
          </p>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-light leading-tight max-w-3xl mb-6">
            O software que a sua empresa merecia{" "}
            <span className="text-gradient-electric">desde o início.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-text-muted text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            ERPs, CRMs e portais construídos do zero, no seu modelo de negócio. O
            sistema se adapta ao seu processo — não o contrário. Resultado: equipes
            mais produtivas, operação sem retrabalho e crescimento sem travar.
          </p>

          {/* CTA principal */}
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 bg-gradient-electric text-white font-semibold px-8 py-4 rounded-lg text-base shadow-lg hover:opacity-90 hover:shadow-[0_0_28px_rgba(0,123,255,0.45)] transition-all duration-200 active:scale-[0.98]"
          >
            Solicitar Orçamento para este Serviço
            <ArrowRight size={18} />
          </Link>

          {/* Diferencial rápido */}
          <div className="mt-12 flex flex-wrap gap-4">
            {[
              "Sem mensalidade por usuário",
              "Código-fonte é seu",
              "Integrações sem limite",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm text-text-muted border border-dark-border rounded-full px-4 py-2"
              >
                <CheckCircle2 size={14} className="text-brand-cyan" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefícios §7.2 ─── */}
      <section className="bg-dark-bg py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-3">
              Por que construir sob demanda
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-light">
              Tudo que um sistema genérico{" "}
              <span className="text-gradient-electric">nunca vai te dar</span>
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
            Pronto para parar de adaptar a empresa{" "}
            <span className="text-gradient-electric">ao sistema?</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-10">
            Conte como a sua operação funciona. Em 60 minutos de diagnóstico já
            conseguimos mapear o que precisa ser construído.
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
