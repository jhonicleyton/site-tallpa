import { HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function GlassCard({
  children,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-dark-border bg-dark-card/80 backdrop-blur-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
