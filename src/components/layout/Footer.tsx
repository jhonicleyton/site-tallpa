import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Sistemas", href: "/sistemas" },
  { label: "IA & Automação", href: "/ia-automacao" },
  { label: "Data & BI", href: "/data-bi" },
  { label: "Showcase", href: "/showcase" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Coluna 1 — Logo + descrição */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo/tallpa-logo-dark.svg"
              alt="Tallpa Solutions"
              width={280}
              height={64}
              className="w-auto h-16"
            />
            <p className="text-text-muted text-sm leading-relaxed max-w-[260px]">
              Software House premium especializada em sistemas sob demanda,
              automação com IA e inteligência de dados.
            </p>
          </div>

          {/* Coluna 2 — Links rápidos */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold text-text-light uppercase tracking-widest">
              Soluções
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-muted text-sm hover:text-text-light transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold text-text-light uppercase tracking-widest">
              Contato
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:contato@tallpa.com.br"
                  className="flex items-center gap-2 text-text-muted text-sm hover:text-text-light transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-cyan flex-shrink-0" strokeWidth={1.5} />
                  contato@tallpa.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/tallpa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted text-sm hover:text-text-light transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-brand-cyan flex-shrink-0" strokeWidth={1.5} />
                  linkedin.com/company/tallpa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-dark-border flex items-center justify-center">
          <p className="text-text-muted text-xs">
            Tallpa Solutions © 2026. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
