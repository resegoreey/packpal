import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo, Container } from "@/components/common";
import { Button } from "@/components/ui";

import { NAVIGATION, HEADER_ACTION } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
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

        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to={ROUTES.LOGIN}
            className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
          >
            Sign In
          </Link>

          <Link to={HEADER_ACTION.href}>
            <Button size="sm">{HEADER_ACTION.label}</Button>
          </Link>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">
          <Container className="py-6">
            <nav className="flex flex-col gap-6">
              {NAVIGATION.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {item.label}
                </a>
              ))}

              <Link to={ROUTES.LOGIN} onClick={() => setIsMenuOpen(false)}>
                Sign In
              </Link>

              <Link
                to={HEADER_ACTION.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button fullWidth>{HEADER_ACTION.label}</Button>
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
