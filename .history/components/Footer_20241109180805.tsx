import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const events = [
  { title: "Create an AWS Account", date: "2024-06-15", time: "14:00" },
  { title: "First Lambda Function", date: "2024-06-22", time: "15:30" },
  // Add more events...
];

export default function EventSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Upcoming Free Sessions
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>
                  <CalendarIcon className="inline-block mr-2" />
                  {new Date(`${event.date}T${event.time}`).toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Register</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
