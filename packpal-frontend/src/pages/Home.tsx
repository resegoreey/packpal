import Container from "@/components/layout/Container";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui";

export default function Home() {
  return (
    <Container>
      <h2>Welcome to PackPal</h2>

      {/* <div className="mt-10 space-y-4">
        <Button>Primary</Button>

        <Button variant="secondary">Secondary</Button>

        <Button variant="success">Success</Button>

        <Button variant="danger">Danger</Button>

        <Button variant="ghost">Ghost</Button>

        <Button leftIcon={<Plane size={18} />}>New Trip</Button>

        <Button loading>Saving...</Button>

        <Button fullWidth>Full Width</Button>
      </div> */}
    </Container>
  );
}
