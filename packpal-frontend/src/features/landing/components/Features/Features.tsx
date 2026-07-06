import { Container, PageSection, SectionHeader } from "@/components/common";
import FeatureCard from "@/components/ui/FeatureCard";
import { FEATURES } from "@/constants/landing";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Features() {
  return (
    <PageSection id="features">
      <Container>
        <SectionHeader
          eyebrow="Features"
          title="Everything you need before every trip"
          description="PackPal helps you organise your packing, stay on schedule, and travel with confidence."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div key={feature.title} variants={fadeUp}>
              <FeatureCard
                key={feature.title}
                icon={<Icon size={30} />}
                title={feature.title}
                description={feature.description}
              />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </PageSection>
  );
}
