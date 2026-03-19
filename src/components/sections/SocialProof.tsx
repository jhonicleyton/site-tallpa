const kpis = [
  {
    value: "37%",
    description: "Redução média no tempo de análise e geração de insights.",
  },
  {
    value: "3.2x",
    description: "Retorno sobre o Investimento (ROI) médio no primeiro ano.",
  },
  {
    value: "+25k",
    description:
      "Horas anuais de trabalho manual eliminadas em departamentos operacionais.",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-dark-bg py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-3">
            Impacto Comprovado
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-light">
            Resultados que falam por si.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {kpis.map(({ value, description }) => (
            <div key={value} className="flex flex-col items-center gap-3">
              <span className="font-display text-6xl lg:text-7xl font-extrabold text-gradient-electric leading-none">
                {value}
              </span>
              <p className="text-text-muted text-sm leading-relaxed max-w-[220px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
