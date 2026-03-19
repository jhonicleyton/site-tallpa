"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

const NAV_LINKS = [
  { label: "Sistemas", href: "/sistemas" },
  { label: "IA & Automação", href: "/ia-automacao" },
  { label: "Data & BI", href: "/data-bi" },
  { label: "Showcase", href: "/showcase" },
  { label: "Sobre", href: "/sobre" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
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
      </nav>
    </header>
  );
}
