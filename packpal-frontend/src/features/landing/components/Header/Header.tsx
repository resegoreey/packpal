import { Link } from "react-router-dom";

import { Logo } from "@/components/common";
import { Button } from "@/components/ui";

import { NAVIGATION, HEADER_ACTION } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAVIGATION.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to={ROUTES.LOGIN}
            className="hidden text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--primary)] md:block"
          >
            Sign In
          </Link>

          <Button size="sm">{HEADER_ACTION.label}</Button>
        </div>
      </div>
    </header>
  );
}
