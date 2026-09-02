import Section from "@/components/ui/Section";
import { segments } from "@/content/home";

export default function Segments() {
  return (
    <Section
      eyebrow="Quem atendemos"
      title="Operações onde o campo é o negócio"
      lede="Não é restrição. É onde temos repertório acumulado e conseguimos ir mais rápido."
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        {segments.map(({ title, description }) => (
          <div key={title} className="bg-bg-1/60 p-6 sm:p-7">
            <h3 className="font-display text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
