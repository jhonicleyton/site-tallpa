import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "./cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold rounded-[10px] " +
  "transition-[transform,box-shadow,background,border-color,color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 " +
  "disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-brand text-bg hover:-translate-y-px hover:shadow-glow-md active:translate-y-0 active:opacity-90",
  secondary:
    "bg-transparent border border-line-default text-cyan-300 hover:border-cyan-400 hover:bg-cyan-300/5",
  ghost: "bg-transparent text-cyan-400 hover:text-cyan-300",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-3.5 py-2",
  md: "text-sm px-5 py-3",
  lg: "text-base px-8 py-4",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  className?: string;
  children: ReactNode;
}

export const buttonClasses = ({
  variant = "primary",
  size = "md",
  className,
}: Pick<CommonProps, "variant" | "size" | "className">) =>
  cn(base, variants[variant], sizes[size], variant === "ghost" && "px-2", className);

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", loading, className, children, disabled, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={buttonClasses({ variant, size, className })}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
});

export default Button;

/** Mesma aparência do Button, mas navega. Usa next/link (client navigation). */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<
    React.ComponentPropsWithoutRef<typeof Link>,
    "href" | "className" | "children"
  >) {
  const external = href.startsWith("http");
  const classes = buttonClasses({ variant, size, className });

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
