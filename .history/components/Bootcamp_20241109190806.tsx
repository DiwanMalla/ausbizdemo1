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
    instructor: "John Doe",
    duration: "6 weeks",
    location: "Online",
    status: "upcoming",
  },
  {
    title: "AI & Machine Learning",
    description: "Dive into the world of AI and ML with hands-on projects",
    schedule: "Ongoing",
    instructor: "Jane Smith",
    duration: "12 weeks",
    location: "Remote",
    status: "ongoing",
  },
  {
    title: "Web Development Bootcamp",
    description:
      "Master the art of web development with HTML, CSS, and JavaScript",
    schedule: "Starts July 15, 2024",
    instructor: "Samuel Lee",
    duration: "10 weeks",
    location: "New York, USA",
    status: "upcoming",
  },
  {
    title: "Data Science with Python",
    description: "Learn data science concepts and techniques using Python",
    schedule: "Ongoing",
    instructor: "Emily Davis",
    duration: "8 weeks",
    location: "Online",
    status: "ongoing",
  },
  {
    title: "Cybersecurity Essentials",
    description: "Introduction to cybersecurity principles and tools",
    schedule: "Starts August 1, 2024",
    instructor: "Michael Brown",
    duration: "8 weeks",
    location: "San Francisco, USA",
    status: "upcoming",
  },
  {
    title: "Full-Stack Development Bootcamp",
    description:
      "Become a full-stack developer by learning front-end and back-end technologies",
    schedule: "Starts September 1, 2024",
    instructor: "David Wilson",
    duration: "16 weeks",
    location: "Los Angeles, USA",
    status: "upcoming",
  },
  // More bootcamps can be added here...
];

export default function BootcampSection() {
  const [filter, setFilter] = useState("all");

  const filteredBootcamps = bootcamps.filter(
    (bootcamp) => filter === "all" || bootcamp.status === filter
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-center">
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
              className="shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <CardHeader className="bg-gray-200 dark:bg-gray-800 rounded-t-lg">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {bootcamp.title}
                </CardTitle>
                <CardDescription className="text-sm text-foreground/70">
                  {bootcamp.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="py-4 text-foreground/80">
                <p>
                  <strong>Schedule:</strong> {bootcamp.schedule}
                </p>
                <p>
                  <strong>Instructor:</strong> {bootcamp.instructor}
                </p>
                <p>
                  <strong>Duration:</strong> {bootcamp.duration}
                </p>
                <p>
                  <strong>Location:</strong> {bootcamp.location}
                </p>
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
