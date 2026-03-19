import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan",
        variant === "primary" && [
          "bg-gradient-electric text-white shadow-lg",
          "hover:opacity-90 hover:shadow-[0_0_28px_rgba(0,123,255,0.45)]",
          "active:scale-[0.98]",
        ],
        variant === "ghost" && [
          "border border-brand-electric text-text-light bg-transparent",
          "hover:bg-brand-electric/10 hover:border-brand-cyan",
          "active:scale-[0.98]",
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
