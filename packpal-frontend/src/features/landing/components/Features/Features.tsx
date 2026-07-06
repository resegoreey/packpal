import { Container, PageSection, SectionHeader } from "@/components/common";
import FeatureCard from "@/components/ui/FeatureCard";
import { FEATURES } from "@/constants/landing";

export default function Features() {
  return (
    <PageSection id="features">
      <Container>
        <SectionHeader
          eyebrow="Features"
          title="Everything you need before every trip"
          description="PackPal helps you organise your packing, stay on schedule, and travel with confidence."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <FeatureCard
                key={feature.title}
                icon={<Icon size={30} />}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </Container>
    </PageSection>
  );
}