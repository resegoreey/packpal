import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui";
import { HERO } from "@/constants/landing";
import { ROUTES } from "@/constants/routes";
import HeroShowcase from "./HeroShowcase";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="overflow-hidden py-32 lg:py-40">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div
          variants={fadeUp}
          className="mb-8 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 text-sm font-medium text-[var(--text-muted)]"
        >
          {HERO.announcement}
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="max-w-4xl text-5xl font-extrabold tracking-tight text-[var(--text)] md:text-6xl lg:text-7xl"
        >
          {HERO.title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-3xl text-lg leading-8 text-[var(--text-muted)] md:text-xl"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col gap-5 sm:flex-row"
        >
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
        </motion.div>

        {/* Illustration goes here */}
        <motion.div variants={fadeUp}>
          <HeroShowcase />
        </motion.div>
      </motion.div>
    </section>
  );
}
