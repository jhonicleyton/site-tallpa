import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { problems } from "@/content/home";

export default function Problems() {
  return (
    <Section
      eyebrow="O ponto de partida"
      title={
        <>
          Você reconhece algum{" "}
          <span className="text-gradient">destes?</span>
        </>
      }
      lede="Nenhum deles é falta de esforço da equipe. São sintomas de um controle que cresceu mais rápido que a ferramenta que o sustenta."
    >
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {problems.map(({ icon: Icon, title, description }) => (
          <li key={title}>
            <Card variant="interactive" className="flex h-full flex-col gap-3.5 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-line-default bg-gradient-soft">
                <Icon className="h-5 w-5 text-cyan-300" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="font-display text-base font-semibold leading-snug text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">{description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
