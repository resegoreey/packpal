import { type ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function Section({
  title,
  children,
}: SectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      {children}
    </section>
  );
}