import Section from "@/components/ui/Section";
import { faq } from "@/content/home";

export default function Faq() {
  return (
    <Section id="faq" eyebrow="Dúvidas" title="Perguntas frequentes">
      <div className="flex max-w-3xl flex-col gap-3">
        {faq.map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-xl border border-line bg-bg-1/50 transition-colors open:border-line-default"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-[15px] font-semibold text-white marker:hidden">
              {q}
              <span
                aria-hidden="true"
                className="shrink-0 text-lg leading-none text-cyan-400 transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-gray-400">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
