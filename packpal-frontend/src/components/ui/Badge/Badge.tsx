import { type BadgeProps } from "./Badge.types";
import { cn } from "@/utils/cn";

const variants = {
  primary:
    "bg-[var(--primary)]/10 text-[var(--primary)]",

  secondary:
    "bg-slate-100 text-slate-700",

  success:
    "bg-green-100 text-green-700",

  warning:
    "bg-yellow-100 text-yellow-700",

  danger:
    "bg-red-100 text-red-700",
};

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}