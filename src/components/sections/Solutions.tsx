import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { solutions } from "@/content/solutions";

export default function Solutions() {
  return (
    <Section
      eyebrow="O que fazemos"
      title="Da leitura do problema ao sistema em produção"
      lede="Oito frentes que se combinam conforme o diagnóstico. Raramente é só uma."
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map(({ id, title, icon: Icon, summary }) => (
          <li key={id}>
            <Card variant="interactive" className="group relative flex h-full flex-col gap-3 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-line-default bg-gradient-soft">
                <Icon className="h-5 w-5 text-cyan-300" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="font-display text-[15px] font-semibold leading-snug text-white">
                <Link href={`/solucoes#${id}`} className="after:absolute after:inset-0">
                  {title}
                </Link>
              </h3>
              <p className="text-[13px] leading-relaxed text-gray-400">{summary}</p>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href="/solucoes"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          Ver todas as soluções em detalhe
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
