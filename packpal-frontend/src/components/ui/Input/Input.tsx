import { cn } from "@/utils/cn";
import { ui } from "../styles";
import type { InputProps } from "./Input.types";
import { useId } from "react";

export default function Input({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  className,
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
const inputId = id ?? generatedId;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={ui.label}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          className={cn(
            ui.input,
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            error &&
              "border-[var(--danger)] focus:ring-[var(--danger)]",
            className
          )}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <p className={ui.error}>{error}</p>
      ) : helperText ? (
        <p className={ui.helper}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
}