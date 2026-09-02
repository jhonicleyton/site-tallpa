import type { Metadata } from "next";
import { Clock, Mail, MessageCircle, Search, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import DiagnosticForm from "@/components/sections/DiagnosticForm";
import { contact, site, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Solicite um diagnóstico gratuito da sua operação. Conversa sem compromisso, com retorno em até 24h úteis.",
  alternates: { canonical: "/contato" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: site.url },
    { "@type": "ListItem", position: 2, name: "Contato", item: `${site.url}/contato` },
  ],
};

const steps = [
  {
    icon: Clock,
    title: "Respondemos em até 24h úteis",
    body: "Pelo canal que você informar — e-mail ou WhatsApp. Sem fila de atendimento e sem robô.",
  },
  {
    icon: Search,
    title: "Uma conversa de diagnóstico",
    body: "Você descreve a operação e onde ela trava. Nós fazemos as perguntas que revelam o problema real.",
  },
  {
    icon: ShieldCheck,
    title: "Uma leitura objetiva, sem venda",
    body: "Você sai com o que dá para resolver e por onde começar — inclusive quando a resposta é que não precisa de sistema agora.",
  },
];

export default function ContatoPage() {
  return (
    <main id="conteudo" className="flex-1 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Section className="pb-20 pt-14 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-cyan-500">
              <span aria-hidden="true" className="h-px w-6 bg-cyan-500" />
              Diagnóstico gratuito
            </p>

            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.06] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Conte o gargalo.{" "}
              <span className="text-gradient">A gente diz o que dá para fazer.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-300">
              Sem apresentação comercial e sem compromisso. Uma conversa em que entendemos o seu
              processo e apontamos onde estão as oportunidades reais.
            </p>

            <h2 className="mt-11 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              O que acontece depois do envio
            </h2>
            <ol className="mt-5 flex flex-col gap-5">
              {steps.map(({ icon: Icon, title, body }, i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-line-default bg-gradient-soft">
                    <Icon className="h-5 w-5 text-cyan-300" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      <span className="mr-1.5 font-mono text-[10px] text-cyan-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-11 border-t border-line pt-7">
              <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                Canais diretos
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-gray-300 transition-colors hover:text-cyan-300"
                  >
                    <MessageCircle className="h-4 w-4 text-cyan-500" strokeWidth={1.5} aria-hidden="true" />
                    WhatsApp · {contact.phoneLabel}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2.5 text-sm text-gray-300 transition-colors hover:text-cyan-300"
                  >
                    <Mail className="h-4 w-4 text-cyan-500" strokeWidth={1.5} aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:pt-2">
            <DiagnosticForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
