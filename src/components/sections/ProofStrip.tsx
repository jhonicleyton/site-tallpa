import Section from "@/components/ui/Section";
import { projects } from "@/content/projects";

/** Primeira coisa depois do Hero: a prova de que os sistemas existem. */
export default function ProofStrip() {
  return (
    <Section className="border-y border-line py-12 sm:py-16">
      <p className="mb-8 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
        Sistemas em produção hoje
      </p>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        {projects.map((p) => (
          <li
            key={p.slug}
            className="rounded-xl border border-line bg-bg-1/40 px-6 py-6 text-center sm:text-left"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-500">
              {p.category}
            </span>
            <span className="mt-2 block text-base font-medium leading-snug text-gray-200">
              {p.segment}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
