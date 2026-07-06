import { cn } from "@/utils/cn";
import type { PageSectionProps } from "./PageSection.types";

export default function PageSection({
  children,
  id,
  className,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24",
        className
      )}
    >
      {children}
    </section>
  );
}