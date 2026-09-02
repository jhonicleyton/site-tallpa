import Section from "@/components/ui/Section";
import { method } from "@/content/home";

export default function Method() {
  return (
    <Section
      eyebrow="Como trabalhamos"
      title="Diagnóstico primeiro. Código depois."
      lede="A ordem importa. Escrever código antes de entender o processo é a forma mais cara de descobrir que o problema era outro."
    >
      <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {method.map(({ step, title, description }) => (
          <li
            key={step}
            className="surface-topline rounded-2xl border border-line bg-gradient-to-b from-bg-1 to-bg-2/50 p-6"
          >
            <span
              aria-hidden="true"
              className="text-gradient font-display text-3xl font-bold leading-none"
            >
              {step}
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
