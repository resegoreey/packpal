import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { ui } from "../styles";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        ui.card,
        className
      )}
    >
      {children}
    </div>
  );
}