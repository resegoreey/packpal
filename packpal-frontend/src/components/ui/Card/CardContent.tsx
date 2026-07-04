import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardContent({
  children,
}: Props) {
  return (
    <div className="p-5">
      {children}
    </div>
  );
}