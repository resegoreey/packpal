import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          PackPal
        </h1>

        <nav className="flex gap-6">
          <Link to="/">Home</Link>

          <Link to="/design-system">
            Design System
          </Link>
        </nav>
      </div>
    </header>
  );
}