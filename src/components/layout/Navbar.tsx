"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/components/ui/cn";
import { ButtonLink } from "@/components/ui/Button";
import TallpaMark from "@/components/ui/TallpaMark";
import { cta, nav, site } from "@/content/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha ao navegar — não ao rolar, como fazia a versão anterior.
  useEffect(() => setMenuOpen(false), [pathname]);

  // Esc fecha e devolve o foco ao botão.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || menuOpen
          ? "border-b border-line bg-bg/80 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${site.name} — página inicial`}
        >
          <TallpaMark className="h-8 w-8" glow={false} title={site.name} />
          <span className="font-display text-[15px] font-semibold tracking-tight text-white">
            Tallpa
            <span className="ml-1.5 align-[1px] font-sans text-[8px] font-medium uppercase tracking-[0.25em] text-cyan-500">
              Solutions
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors duration-150",
                  isActive(link.href)
                    ? "bg-cyan-300/5 text-cyan-300"
                    : "text-gray-300 hover:bg-cyan-300/5 hover:text-cyan-300",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href={cta.href} size="sm">
            {cta.labelShort}
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-300 transition-colors hover:text-white lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="menu-mobile"
        ref={drawerRef}
        hidden={!menuOpen}
        className="border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="px-4 py-2">
          {nav.map((link) => (
            <li key={link.href} className="border-b border-line last:border-0">
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="flex items-center justify-between py-4 text-base text-gray-200 transition-colors hover:text-cyan-300"
              >
                {link.label}
                <span aria-hidden="true" className="text-xs text-cyan-500">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-5 pt-2">
          <ButtonLink href={cta.href} className="w-full">
            {cta.label}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
