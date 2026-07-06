import { cn } from "@/utils/cn";
import type { ContainerProps } from "./Container.types";

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6",
        className
      )}
    >
      {children}
    </div>
  );
}