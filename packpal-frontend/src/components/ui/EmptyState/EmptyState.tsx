import { type EmptyStateProps } from "./EmptyState.types";

export default function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-[var(--border)] p-10 text-center">
      {icon}

      <h2 className="mt-4 text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 max-w-sm text-[var(--text-muted)]">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}