import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardFooter({
  children,
}: Props) {
  return (
    <div className="border-t border-[var(--border)] p-5">
      {children}
    </div>
  );
}