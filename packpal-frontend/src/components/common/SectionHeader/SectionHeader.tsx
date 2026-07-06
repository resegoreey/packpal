import { cn } from "@/utils/cn";
import type { SectionHeaderProps } from "./SectionHeader.types";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-16 max-w-2xl text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-[var(--text)]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}