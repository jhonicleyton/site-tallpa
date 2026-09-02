import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

/**
 * Encapsula o padrão de seção do site (container, respiro, cabeçalho).
 *
 * Substitui a regra PRD §7.1, que obrigava `min-h-screen` na abertura de
 * toda página e entregava uma primeira dobra quase vazia. Aqui a altura é
 * natural: o conteúdo define o tamanho.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
  );
}

export function Eyebrow({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-cyan-500",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-cyan-500" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  as?: ElementType;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {lede && (
        <p className={cn("text-base leading-relaxed text-gray-300 sm:text-[17px]", align === "center" && "max-w-2xl")}>
          {lede}
        </p>
      )}
    </div>
  );
}

export default function Section({
  id,
  eyebrow,
  title,
  lede,
  align = "left",
  headingAs,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  headingAs?: ElementType;
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <Container className={containerClassName}>
        {title && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            lede={lede}
            align={align}
            as={headingAs}
            className="mb-10 sm:mb-14"
          />
        )}
        {children}
      </Container>
    </section>
  );
}
