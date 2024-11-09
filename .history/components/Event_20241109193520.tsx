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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex items-center justify-center">
      <div className="container px-4 md:px-6 xl:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl mb-8 text-foreground text-center">
          Upcoming Free Sessions
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center">
          {events.map((event, index) => (
            <Card
              key={index}
              className="bg-card dark:bg-gray-900 text-foreground shadow-lg rounded-xl p-6 transition-transform hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  <CalendarIcon className="inline-block mr-2 h-5 w-5" />
                  {new Date(`${event.date}T${event.time}`).toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Join us for a free hands-on session to help you get started
                  with AWS and cloud technologies. Learn by doing, with
                  real-world examples and guided steps.
                </p>
                <Button className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-4 focus:ring-primary rounded-lg py-3 px-6 text-lg transition-all duration-300">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
