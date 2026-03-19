import GlassCard from "@/components/ui/GlassCard";
import { Monitor, Bot, LineChart } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Sistemas Sob Demanda",
    description:
      "ERPs, CRMs e portais exclusivos que se adaptam perfeitamente ao fluxo da sua operação.",
    href: "/sistemas",
  },
  {
    icon: Bot,
    title: "IA & Automação",
    description:
      "Agentes inteligentes e workflows automatizados para eliminar trabalho manual e acelerar processos.",
    href: "/ia-automacao",
  },
  {
    icon: LineChart,
    title: "Data & BI",
    description:
      "Dashboards centralizados e insights acionáveis para guiar suas decisões estratégicas.",
    href: "/data-bi",
  },
];

export default function Services() {
  return (
    <section className="bg-dark-bg py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-3">
            Nossas Soluções
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light">
            Soluções sob medida para
            <br className="hidden sm:block" /> o seu negócio
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Tecnologia que resolve problemas reais — do sistema interno ao
            painel de dados.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, href }) => (
            <GlassCard
              key={title}
              className="p-6 lg:p-8 flex flex-col gap-4 group hover:border-brand-cyan/40 transition-colors duration-300"
            >
              {/* Ícone */}
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-brand-cyan" strokeWidth={1.5} />
              </div>
              {/* Conteúdo */}
              <h3 className="font-display text-xl font-semibold text-text-light">
                {title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed flex-1">
                {description}
              </p>
              {/* Link */}
              <a
                href={href}
                className="text-brand-cyan text-sm font-medium hover:underline mt-auto"
              >
                Saiba mais →
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
