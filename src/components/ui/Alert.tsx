import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "./cn";

type Tone = "info" | "success" | "warning" | "danger";

const tones: Record<Tone, { box: string; icon: string; Icon: typeof Info }> = {
  info: { box: "bg-info/5 border-info/25", icon: "text-cyan-300", Icon: Info },
  success: { box: "bg-success/5 border-success/25", icon: "text-success", Icon: CheckCircle2 },
  warning: { box: "bg-warning/5 border-warning/25", icon: "text-warning", Icon: AlertTriangle },
  danger: { box: "bg-danger/5 border-danger/25", icon: "text-danger", Icon: XCircle },
};

export default function Alert({
  tone = "info",
  title,
  className,
  children,
  role,
}: {
  tone?: Tone;
  title?: string;
  className?: string;
  children: ReactNode;
  role?: "status" | "alert";
}) {
  const { box, icon, Icon } = tones[tone];
  return (
    <div role={role} className={cn("flex gap-3.5 rounded-[10px] border p-4", box, className)}>
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", icon)} strokeWidth={1.5} aria-hidden="true" />
      <div className="text-sm leading-relaxed text-gray-300">
        {title && <strong className="mb-0.5 block font-semibold text-white">{title}</strong>}
        {children}
      </div>
    </div>
  );
}
