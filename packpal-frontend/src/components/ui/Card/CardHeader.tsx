import { cn } from "@/utils/cn";
import { type ReactNode } from "react";

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export default function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("border-b border-[var(--border)] p-5", className)}>
      {children}
    </div>
  );
}
