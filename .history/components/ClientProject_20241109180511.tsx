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
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Client Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="cursor-pointer"
              onClick={() => setExpandedProject(index)}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
                {expandedProject === index && (
                  <div className="mt-4">
                    <p>{project.details}</p>
                    <Button
                      className="mt-2"
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
