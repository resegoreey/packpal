import { useState } from "react";

import {
  Button,
  Input,
  Checkbox,
  Badge,
  Spinner,
  EmptyState,
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui";

import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";

import {
  Plane,
  MapPin,
  PackageOpen,
} from "lucide-react";

export default function DesignSystem() {
  const [modalOpen, setModalOpen] =
    useState(false);

  return (
    <Container>
      <div className="space-y-16 py-12">

        <h1 className="text-4xl font-bold">
          PackPal Design System
        </h1>

        <Section title="Buttons">
          <div className="flex flex-wrap gap-4">

            <Button>Primary</Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="success">
              Success
            </Button>

            <Button variant="danger">
              Danger
            </Button>

            <Button variant="ghost">
              Ghost
            </Button>

            <Button
              leftIcon={<Plane size={18} />}
            >
              New Trip
            </Button>

            <Button loading>
              Saving
            </Button>

          </div>
        </Section>

        <Section title="Inputs">
          <div className="max-w-md space-y-6">

            <Input
              label="Trip Name"
              placeholder="Weekend Getaway"
            />

            <Input
              label="Destination"
              placeholder="Cape Town"
              leftIcon={<MapPin size={18} />}
            />

            <Input
              label="Email"
              error="Invalid email"
            />

          </div>
        </Section>

        <Section title="Cards">

          <Card className="max-w-md">

            <CardHeader>

              <h3 className="font-semibold">
                Durban Holiday
              </h3>

            </CardHeader>

            <CardContent>

              Leaving in 3 days.

            </CardContent>

            <CardFooter>

              <Button size="sm">
                View Trip
              </Button>

            </CardFooter>

          </Card>

        </Section>

        <Section title="Checkboxes">

          <div className="space-y-4">

            <Checkbox
              label="Passport"
              defaultChecked
            />

            <Checkbox
              label="Phone Charger"
            />

            <Checkbox
              label="Toothbrush"
            />

          </div>

        </Section>

        <Section title="Badges">

          <div className="flex gap-4">

            <Badge>
              Upcoming
            </Badge>

            <Badge variant="success">
              Packed
            </Badge>

            <Badge variant="warning">
              Tomorrow
            </Badge>

            <Badge variant="danger">
              Overdue
            </Badge>

          </div>

        </Section>

        <Section title="Spinner">

          <Spinner size={40} />

        </Section>

        <Section title="Empty State">

          <EmptyState
            icon={
              <PackageOpen
                size={50}
              />
            }
            title="No Trips Yet"
            description="Create your first trip to get started."
            action={
              <Button>
                Create Trip
              </Button>
            }
          />

        </Section>

        <Section title="Modal">

          <Button
            onClick={() =>
              setModalOpen(true)
            }
          >
            Open Modal
          </Button>

          <Modal
            open={modalOpen}
            title="Delete Trip"
            onOpenChange={
              setModalOpen
            }
          >
            <p>
              Are you sure you want
              to delete this trip?
            </p>

            <div className="mt-6 flex justify-end gap-4">

              <Button
                variant="secondary"
                onClick={() =>
                  setModalOpen(false)
                }
              >
                Cancel
              </Button>

              <Button variant="danger">
                Delete
              </Button>

            </div>

          </Modal>

        </Section>

      </div>
    </Container>
  );
}