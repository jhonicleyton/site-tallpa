import type { ReactNode } from "react";
import { cn } from "./cn";

type Tone = "cyan" | "blue" | "success" | "warning" | "danger" | "neutral";

const tones: Record<Tone, string> = {
  cyan: "bg-cyan-300/10 text-cyan-300 border-cyan-300/25",
  blue: "bg-blue-200/10 text-blue-200 border-blue-200/25",
  success: "bg-success/10 text-success border-success/25",
  warning: "bg-warning/10 text-warning border-warning/25",
  danger: "bg-danger/10 text-danger border-danger/25",
  neutral: "bg-bg-surface text-gray-200 border-gray-700",
};

export default function Badge({
  tone = "cyan",
  dot,
  className,
  children,
}: {
  tone?: Tone;
  dot?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold",
        tones[tone],
        className,
      )}
    >
      {dot && (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_6px_currentColor]"
        />
      )}
      {children}
    </span>
  );
}

/** Pill compacta e monoespaçada, para números, tags técnicas e versões. */
export function Pill({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-line px-2 py-0.5 font-mono text-[10px] font-bold tracking-wide text-gray-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
