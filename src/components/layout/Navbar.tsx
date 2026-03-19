"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Sistemas", href: "/sistemas" },
  { label: "IA & Automação", href: "/ia-automacao" },
  { label: "Data & BI", href: "/data-bi" },
  { label: "Showcase", href: "/showcase" },
  { label: "Sobre", href: "/sobre" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "bg-dark-bg/90 backdrop-blur-md border-b border-dark-border shadow-[0_1px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Logo — ícone + nome */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Tallpa Solutions — Home">
          <Image
            src="/logo/tallpa-icon-transparent.svg"
            alt="Tallpa Solutions"
            width={36}
            height={36}
            className="w-auto h-9"
            priority
          />
          <span className="text-text-light font-display font-semibold text-lg tracking-wide">
            Tallpa Solutions
          </span>
        </Link>

        {/* Links de navegação — desktop */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-text-muted hover:text-text-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão hamburger — mobile */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 text-text-muted hover:text-text-light transition-colors duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Drawer mobile */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="bg-dark-bg/95 backdrop-blur-md px-4 pb-4">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.href}
              className={clsx(
                index !== 0 && "border-t border-dark-border/50"
              )}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-4 text-base text-text-muted hover:text-text-light transition-colors duration-200"
              >
                {link.label}
                <span className="text-brand-cyan text-xs">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
