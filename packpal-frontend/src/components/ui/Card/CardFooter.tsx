import { cn } from "@/utils/cn";
import { type ReactNode } from "react";

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export default function CardFooter({
  children,
  className,
}: CardFooterProps) {
  return (
    <div className={cn("border-t border-[var(--border)] p-5", className)}>
      {children}
    </div>
  );
}