import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardHeader({
  children,
}: Props) {
  return (
    <div className="border-b border-[var(--border)] p-5">
      {children}
    </div>
  );
}