import { Plane, Bell } from "lucide-react";

import { Badge, Card, CardContent, Checkbox, Progress } from "@/components/ui";

export default function HeroShowcase() {
  return (
    <Card className="mt-20 w-full max-w-xl shadow-xl">
      <CardContent className="space-y-6 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <Plane size={20} />
              Cape Town Adventure
            </h3>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Leaving in 3 days
            </p>
          </div>

          <Badge>72% Packed</Badge>
        </div>

        <Progress value={18} max={25} />

        <div className="space-y-3">
          <Checkbox checked label="Passport" disabled
/>

          <Checkbox checked label="Phone Charger" disabled
/>

          <Checkbox label="Camera" disabled
/>

          <Checkbox label="Toothbrush" disabled
/>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-[var(--secondary)] p-4">
          <Bell size={18} className="text-[var(--primary)]" />

          <span className="text-sm text-[var(--text)]">
            Reminder scheduled for tomorrow
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
