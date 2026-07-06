import { Link } from "react-router-dom";

import { Logo } from "@/components/common";
import { Button } from "@/components/ui";

import { NAVIGATION } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAVIGATION.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
}