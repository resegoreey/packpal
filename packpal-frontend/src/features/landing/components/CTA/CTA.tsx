import { Link } from "react-router-dom";

import {
  Container,
  PageSection,
} from "@/components/common";

import {
  Card,
  CardContent,
  Button,
} from "@/components/ui";

import { ROUTES } from "@/constants/routes";

export default function CTA() {
  return (
    <PageSection>
      <Container>
        <Card className="overflow-hidden bg-[var(--primary)] text-white">
          <CardContent className="flex flex-col items-center gap-6 px-8 py-16 text-center">

            <h2 className="text-4xl font-bold tracking-tight">
              Ready for your next adventure?
            </h2>

            <p className="max-w-2xl text-lg text-white/80">
              Create your first trip, build your packing list,
              and never forget the important things again.
            </p>

            <Link to={ROUTES.REGISTER}>
              <Button
                variant="secondary"
                size="lg"
              >
                Get Started Today
              </Button>
            </Link>

          </CardContent>
        </Card>
      </Container>
    </PageSection>
  );
}