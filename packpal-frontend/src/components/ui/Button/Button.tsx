import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";
import type { ButtonProps } from "./Button.types";

const variantClasses = {
  primary: "bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white",

  secondary:
    "bg-[var(--secondary)] hover:bg-[var(--secondary-hover)] text-[var(--text)]",

  success: "bg-[var(--success)] hover:bg-[var(--success-hover)] text-white",

  danger: "bg-[var(--danger)] hover:bg-[var(--danger-hover)] text-white",

  ghost: "bg-transparent hover:bg-[var(--secondary)] text-[var(--text)]",

  outline:
    "border border-[var(--border)] bg-transparent text-[var(--text)] hover:bg-[var(--surface)]",
};

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-12 px-6 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-xl",
        "font-medium",
        "transition-colors transition-transform duration-200",
        "shadow-sm",

        "hover:shadow-md",

        "active:scale-[0.98]",

        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-[var(--primary)]",
        "focus:ring-offset-2",

        "disabled:pointer-events-none",
        "disabled:cursor-not-allowed",
        "disabled:opacity-60",

        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : leftIcon}

      {children}

      {!loading && rightIcon}
    </button>
  );
}
