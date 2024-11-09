import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const bootcamps = [
  {
    title: "AWS Fundamentals",
    description: "Learn the basics of AWS cloud computing",
    schedule: "Starts June 1, 2024",
    status: "upcoming",
  },
  {
    title: "AI & Machine Learning",
    description: "Dive into the world of AI and ML",
    schedule: "Ongoing",
    status: "ongoing",
  },
  // Add more bootcamps...
];

export default function BootcampSection() {
  const [filter, setFilter] = useState("all");

  const filteredBootcamps = bootcamps.filter(
    (bootcamp) => filter === "all" || bootcamp.status === filter
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Bootcamps
        </h2>
        <div className="mt-4 space-x-4">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "upcoming" ? "default" : "outline"}
            onClick={() => setFilter("upcoming")}
          >
            Upcoming
          </Button>
          <Button
            variant={filter === "ongoing" ? "default" : "outline"}
            onClick={() => setFilter("ongoing")}
          >
            Ongoing
          </Button>
        </div>
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBootcamps.map((bootcamp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{bootcamp.title}</CardTitle>
                <CardDescription>{bootcamp.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{bootcamp.schedule}</p>
              </CardContent>
              <CardFooter>
                <Button>Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
