import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui";
import { HERO } from "@/constants/landing";
import { ROUTES } from "@/constants/routes";
import HeroShowcase from "./HeroShowcase";

export default function Hero() {
  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="mb-6 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-muted)]">
          ✈ Your travel companion
        </div>

        <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-[var(--text)] md:text-6xl">
          {HERO.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
          {HERO.subtitle}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to={ROUTES.REGISTER}>
            <Button size="lg">
              {HERO.primaryButton}

              <ArrowRight size={18} />
            </Button>
          </Link>

          <a href="#features">
            <Button variant="outline" size="lg">
              {HERO.secondaryButton}
            </Button>
          </a>
        </div>

        {/* Illustration goes here */}
        <HeroShowcase />
      </div>
    </section>
  );
}