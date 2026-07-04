import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface StackProps {
  children: ReactNode;
  className?: string;
}

export default function Stack({
  children,
  className,
}: StackProps) {
  return (
    <div
      className={cn(
        "space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
}