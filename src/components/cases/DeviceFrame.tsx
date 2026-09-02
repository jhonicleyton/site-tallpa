import type { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

/**
 * Moldura de dispositivo para as recriações de interface.
 * `desktop` = janela com barra de título; `mobile` = aparelho com notch.
 */
export default function DeviceFrame({
  variant = "desktop",
  label,
  className,
  children,
}: {
  variant?: "desktop" | "mobile";
  label?: string;
  className?: string;
  children: ReactNode;
}) {
  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "relative mx-auto w-full max-w-[300px] rounded-[34px] border border-line-default bg-bg-1 p-2.5 shadow-glow-sm",
          className,
        )}
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-3.5 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-bg-surface"
        />
        <div className="overflow-hidden rounded-[26px] bg-bg">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line-default bg-bg-1 shadow-glow-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-bg-2/60 px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <i className="block h-2.5 w-2.5 rounded-full bg-gray-700" />
          <i className="block h-2.5 w-2.5 rounded-full bg-gray-700" />
          <i className="block h-2.5 w-2.5 rounded-full bg-gray-700" />
        </span>
        {label && (
          <span className="ml-2 truncate font-mono text-[10px] text-gray-400">{label}</span>
        )}
      </div>
      <div className="bg-bg">{children}</div>
    </div>
  );
}
