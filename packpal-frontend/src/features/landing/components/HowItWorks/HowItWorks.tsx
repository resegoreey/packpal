import {
  Container,
  PageSection,
  SectionHeader,
} from "@/components/common";

import { Card, CardContent } from "@/components/ui";

import { HOW_IT_WORKS } from "@/constants/landing";

export default function HowItWorks() {
  return (
    <PageSection id="how-it-works">
      <Container>
        <SectionHeader
          eyebrow="How It Works"
          title="Planning your trip takes less than a minute"
          description="Four simple steps to make sure nothing gets left behind."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {HOW_IT_WORKS.map((step) => (
            <Card
              key={step.step}
              className="h-full"
            >
              <CardContent className="space-y-4 p-6">
                <span className="text-4xl font-bold text-[var(--primary)]">
                  {step.step}
                </span>

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="leading-7 text-[var(--text-muted)]">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}