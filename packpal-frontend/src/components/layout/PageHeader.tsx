import { type ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  actions,
}: Props) {
  return (
    <div className="mb-10 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-[var(--text-muted)]">
            {subtitle}
          </p>
        )}
      </div>

      {actions}
    </div>
  );
}