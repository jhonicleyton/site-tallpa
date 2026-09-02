import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "./cn";

const control =
  "w-full rounded-[10px] bg-bg-1 border border-line px-3.5 py-3 text-sm text-white " +
  "placeholder:text-gray-600 outline-none transition-[border-color,box-shadow] duration-200 " +
  "focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgba(74,248,255,0.12)] " +
  "aria-[invalid=true]:border-danger aria-[invalid=true]:focus:shadow-[0_0_0_3px_rgba(255,70,70,0.15)]";

export function Label({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400"
    >
      {children}
      {required && (
        <span className="ml-1 text-cyan-400" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

export function Help({ id, error, children }: { id: string; error?: boolean; children: React.ReactNode }) {
  return (
    <p id={id} className={cn("text-xs leading-snug", error ? "text-danger" : "text-gray-500")}>
      {children}
    </p>
  );
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(control, className)} {...props} />;
  },
);

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ className, ...props }, ref) {
    return <textarea ref={ref} className={cn(control, "resize-y", className)} {...props} />;
  },
);
