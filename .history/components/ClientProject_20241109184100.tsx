import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built a scalable e-commerce solution using AWS",
    details:
      "Implemented serverless architecture with AWS Lambda and DynamoDB...",
  },
  {
    title: "AI-Powered Chatbot",
    description: "Developed an intelligent customer service chatbot",
    details:
      "Utilized AWS Lex and Amazon Comprehend for natural language processing...",
  },
  // Add more projects...
];

export default function ClientProjects() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-center text-foreground">
          Client Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="cursor-pointer rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setExpandedProject(index)}
            >
              <CardHeader className="p-6 text-center">
                <CardTitle className="text-xl font-semibold">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 py-3">
                <CardDescription className="text-sm text-foreground/70">
                  {project.description}
                </CardDescription>
                {expandedProject === index && (
                  <div className="mt-4">
                    <p className="text-sm text-foreground/80">
                      {project.details}
                    </p>
                    <Button
                      className="mt-4 w-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedProject(null);
                      }}
                    >
                      Close
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
