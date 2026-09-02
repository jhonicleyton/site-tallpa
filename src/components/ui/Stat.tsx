import type { ReactNode } from "react";
import { cn } from "./cn";

/** KPI card do design system: label, número em gradiente e rodapé. */
export default function Stat({
  label,
  value,
  foot,
  className,
}: {
  label: string;
  value: ReactNode;
  foot?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "surface-topline rounded-[14px] border border-line bg-gradient-to-b from-bg-1 to-bg-2/60 p-5",
        className,
      )}
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
        {label}
      </div>
      <div className="text-gradient mt-2 font-display text-[28px] font-bold leading-none tracking-tight">
        {value}
      </div>
      {foot && <div className="mt-2.5 text-xs text-gray-400">{foot}</div>}
    </div>
  );
}
