import { type FeatureCardProps } from "./FeatureCard.types";
import { Card, CardContent } from "@/components/ui";
import { cn } from "@/utils/cn";

export default function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      <CardContent className="flex flex-col items-start gap-4 p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[var(--text)]">
            {title}
          </h3>

          <p className="text-sm leading-6 text-[var(--text-muted)]">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}