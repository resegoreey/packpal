import { cn } from "@/utils/cn";
import type { ProgressProps } from "./Progress.types";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Progress({
  value,
  max = 100,
  showLabel = false,
  className,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("w-full", className)}>
      <div className="h-3 w-full overflow-hidden rounded-full bg-[var(--secondary)]">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${percentage}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-[var(--primary)]"
        />
      </div>

      {showLabel && (
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          {Math.round(percentage)}%
        </p>
      )}
    </div>
  );
}
