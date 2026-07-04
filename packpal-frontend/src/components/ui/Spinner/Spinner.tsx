import { Loader2 } from "lucide-react";
import { type SpinnerProps } from "./Spinner.types";

export default function Spinner({
  size = 24,
}: SpinnerProps) {
  return (
    <Loader2
      size={size}
      className="animate-spin text-[var(--primary)]"
    />
  );
}