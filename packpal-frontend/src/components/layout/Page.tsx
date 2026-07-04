import { type ReactNode } from "react";

interface PageProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Page({
  title,
  subtitle,
  children,
}: PageProps) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {title && (
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-2 text-[var(--text-muted)]">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </main>
  );
}