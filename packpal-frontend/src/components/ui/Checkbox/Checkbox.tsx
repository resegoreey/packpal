import { Check } from "lucide-react";
import { type CheckboxProps } from "./Checkbox.types";

export default function Checkbox({
  label,
  className,
  ...props
}: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only"
          {...props}
        />

        <div
          className="
            flex h-5 w-5 items-center justify-center
            rounded-md border border-[var(--border)]
            transition-colors
            peer-checked:border-[var(--primary)]
            peer-checked:bg-[var(--primary)]
          "
        >
          <Check
            size={14}
            className="
              text-white opacity-0
              peer-checked:opacity-100
            "
          />
        </div>
      </div>

      {label && (
        <span className="text-sm">
          {label}
        </span>
      )}
    </label>
  );
}