import Link from "next/link";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import TallpaMark from "@/components/ui/TallpaMark";
import { contact, cta, site, social, whatsappUrl } from "@/content/site";

const solutions = [
  { label: "Sistemas sob medida", href: "/solucoes#sistemas" },
  { label: "Dashboards e indicadores", href: "/solucoes#indicadores" },
  { label: "Automação de processos", href: "/solucoes#automacao" },
  { label: "Diagnóstico operacional", href: "/solucoes#diagnostico" },
];

const company = [
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre a Tallpa", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "Política de privacidade", href: "/privacidade" },
];

const channels = [
  { label: contact.email, href: `mailto:${contact.email}`, Icon: Mail },
  { label: contact.phoneLabel, href: whatsappUrl, Icon: MessageCircle, external: true },
  { label: "@tallpasolutions", href: social.instagram, Icon: Instagram, external: true },
  { label: "LinkedIn", href: social.linkedin, Icon: Linkedin, external: true },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-gradient-to-b from-transparent to-bg-1/60">
      <div className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:pr-6">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name}, início`}>
              <TallpaMark className="h-9 w-9" title={site.name} />
              <span className="font-display text-base font-semibold text-white">
                Tallpa
                <span className="ml-1.5 align-[1px] font-sans text-[8px] font-medium uppercase tracking-[0.25em] text-cyan-500">
                  Solutions
                </span>
              </span>
            </Link>
            <p className="max-w-[280px] text-sm leading-relaxed text-gray-400">{site.description}</p>
          </div>

          <nav aria-label="Soluções" className="flex flex-col gap-4">
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-500">
              Soluções
            </h2>
            <ul className="flex flex-col gap-2.5">
              {solutions.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 transition-colors hover:text-cyan-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Institucional" className="flex flex-col gap-4">
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-500">
              Tallpa
            </h2>
            <ul className="flex flex-col gap-2.5">
              {company.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 transition-colors hover:text-cyan-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-500">
              Contato
            </h2>
            <ul className="flex flex-col gap-2.5">
              {channels.map(({ label, href, Icon, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-2.5 text-sm text-gray-400 transition-colors hover:text-cyan-300"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-cyan-500" strokeWidth={1.5} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-1 text-xs leading-relaxed text-gray-400">{cta.promise}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[11px] text-gray-400">Santa Catarina · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
