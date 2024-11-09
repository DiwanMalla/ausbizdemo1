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
  {
    title: "Web Development Bootcamp",
    description: "Master the art of web development",
    schedule: "Starts July 15, 2024",
    status: "upcoming",
  },
  {
    title: "Data Science with Python",
    description: "Learn data science concepts and techniques",
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
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground text-center">
          Our Bootcamps
        </h2>
        {/* Bootcamp count display */}
        <p className="mt-2 text-lg text-foreground/70 text-center">
          Showing {filteredBootcamps.length} Bootcamp
          {filteredBootcamps.length > 1 ? "s" : ""}
        </p>

        <div className="mt-4 flex justify-center space-x-4">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="transition-colors duration-300"
          >
            All
          </Button>
          <Button
            variant={filter === "upcoming" ? "default" : "outline"}
            onClick={() => setFilter("upcoming")}
            className="transition-colors duration-300"
          >
            Upcoming
          </Button>
          <Button
            variant={filter === "ongoing" ? "default" : "outline"}
            onClick={() => setFilter("ongoing")}
            className="transition-colors duration-300"
          >
            Ongoing
          </Button>
        </div>
        <div className="grid gap-6 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredBootcamps.map((bootcamp, index) => (
            <Card
              key={index}
              className="shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <CardHeader className="bg-gray-200 dark:bg-gray-700">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {bootcamp.title}
                </CardTitle>
                <CardDescription className="text-sm text-foreground/70">
                  {bootcamp.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="py-4 text-foreground/80">
                <p>{bootcamp.schedule}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
