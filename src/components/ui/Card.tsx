import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "./cn";

type Variant = "glass" | "stat" | "interactive";

const variants: Record<Variant, string> = {
  glass: "bg-bg-card/80 backdrop-blur-md border border-line",
  stat: "surface-topline bg-gradient-to-b from-bg-card to-bg-card/60 border border-line",
  interactive:
    "bg-bg-card border border-line transition-[border-color,box-shadow,transform] duration-200 " +
    "ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-line-default hover:shadow-glow-sm hover:-translate-y-0.5",
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "glass", className, children, ...props },
  ref,
) {
  return (
    <div ref={ref} className={cn("rounded-2xl", variants[variant], className)} {...props}>
      {children}
    </div>
  );
});

export default Card;
