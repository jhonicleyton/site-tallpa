import Link from "next/link";
import {
  ArrowRight,
  SearchCode,
  Map,
  Layers,
  Database,
  Code2,
  Rocket,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "Sobre a Tallpa",
  description:
    "Conheça a metodologia IMPACT: 6 etapas de engenharia de software focadas em resultados reais de negócio, do diagnóstico ao deploy.",
};

const impact = [
  {
    letter: "I",
    icon: SearchCode,
    label: "Imersão",
    description:
      "Mergulhamos no seu negócio antes de escrever uma linha de código. Entendemos a dor real, o contexto operacional e os objetivos que fazem sentido para você — não para nós.",
  },
  {
    letter: "M",
    icon: Map,
    label: "Mapeamento",
    description:
      "Traduzimos o problema de negócio em arquitetura de solução. Desenhamos os fluxos, as integrações e os limites do sistema antes que qualquer decisão técnica seja tomada.",
  },
  {
    letter: "P",
    icon: Layers,
    label: "Prototipagem",
    description:
      "Validamos visualmente a solução com protótipos navegáveis. Você aprova a experiência e a lógica de UX antes do desenvolvimento — eliminando retrabalho no final.",
  },
  {
    letter: "A",
    icon: Database,
    label: "Arquitetura",
    description:
      "Definimos banco de dados, stack tecnológico e padrões de código com base no volume, no crescimento esperado e na equipe que vai manter o sistema depois.",
  },
  {
    letter: "C",
    icon: Code2,
    label: "Código",
    description:
      "Desenvolvimento ágil com entregas incrementais, revisão contínua e código limpo. Você acompanha o progresso em tempo real — sem surpresas no prazo e no escopo.",
  },
  {
    letter: "T",
    icon: Rocket,
    label: "Tração",
    description:
      "Deploy, monitoramento de performance e suporte pós-lançamento. O sistema vai ao ar com observabilidade configurada — e crescemos juntos conforme a demanda escala.",
  },
];

export default function SobrePage() {
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
            Sobre a Tallpa
          </p>

          {/* H1 */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-light leading-tight max-w-3xl mb-6">
            Engenharia de Software focada em{" "}
            <span className="text-gradient-electric">Resultados Reais.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-text-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
            Não somos apenas codificadores. Somos parceiros estratégicos que usam
            tecnologia para resolver problemas complexos de negócios.
          </p>
        </div>
      </section>

      {/* ─── Metodologia IMPACT §7.2 ─── */}
      <section className="bg-dark-bg py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-3">
              Como trabalhamos
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-light">
              A Metodologia{" "}
              <span className="text-gradient-electric">IMPACT</span>
            </h2>
            <p className="text-text-muted mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Seis etapas que transformam um problema de negócio em um sistema
              que funciona — do primeiro diagnóstico ao deploy em produção.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impact.map(({ letter, icon: Icon, label, description }, index) => (
              <GlassCard key={letter} className="p-8 flex flex-col gap-5">
                {/* Número + ícone */}
                <div className="flex items-center gap-4">
                  <span className="font-display text-4xl font-extrabold text-gradient-electric leading-none">
                    {letter}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-brand-electric/10 flex items-center justify-center">
                    <Icon size={20} className="text-brand-cyan" />
                  </div>
                  <span className="text-xs text-text-muted font-medium tracking-widest uppercase">
                    Etapa {index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-text-light text-lg mb-2">
                    {label}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA de fechamento §7.2 ─── */}
      <section className="bg-dark-bg py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-light mb-4">
            Pronto para construir algo{" "}
            <span className="text-gradient-electric">que realmente funciona?</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-10">
            Converse com um engenheiro da Tallpa. Em 60 minutos, saímos com um
            diagnóstico claro do que precisa ser feito e como fazer.
          </p>
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 bg-gradient-electric text-white font-semibold px-10 py-4 rounded-lg text-base shadow-lg hover:opacity-90 hover:shadow-[0_0_28px_rgba(0,123,255,0.45)] transition-all duration-200 active:scale-[0.98]"
          >
            Fale com um Engenheiro
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
