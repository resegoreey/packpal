import { Link } from "react-router-dom";

import { Container } from "@/components/common";

import { Logo } from "@/components/common";

import { APP } from "@/constants/app";
import { ROUTES } from "@/constants/routes";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Container>
        <div className="flex flex-col gap-10 py-12 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <Logo />

            <p className="max-w-sm text-sm text-[var(--text-muted)]">
              Never forget what matters before your next adventure.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm md:items-end">
            <Link to={ROUTES.LOGIN} className="hover:text-[var(--primary)]">
              Sign In
            </Link>

            <Link to={ROUTES.REGISTER} className="hover:text-[var(--primary)]">
              Create Account
            </Link>

            <p className="pt-4 text-[var(--text-muted)]">{APP.copyright}</p>
          </nav>
        </div>
      </Container>
    </motion.footer>
  );
}
