import { type InputHTMLAttributes, type ReactNode } from "react";

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type"
  > {
  label?: ReactNode;
}