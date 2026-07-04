import { Luggage } from "lucide-react";
import { APP } from "@/constants/app";
import { cn } from "@/utils/cn";
import type { LogoProps } from "./Logo.types";

export default function Logo({
  size = 28,
  showText = true,
  className,
}: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        className
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)] text-white shadow-sm">
        <Luggage size={size * 0.7} />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-[var(--text)]">
            {APP.name}
          </span>

          <span className="text-xs text-[var(--text-muted)]">
            {APP.tagline}
          </span>
        </div>
      )}
    </div>
  );
}