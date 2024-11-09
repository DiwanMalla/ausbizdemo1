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
      "Implemented serverless architecture with AWS Lambda and DynamoDB, allowing for real-time inventory updates and order management. Integrated with third-party payment APIs.",
    clientLogo: "/path/to/logo1.png", // Add client logo here
  },
  {
    title: "AI-Powered Chatbot",
    description: "Developed an intelligent customer service chatbot",
    details:
      "Utilized AWS Lex and Amazon Comprehend for natural language processing, automating customer queries and providing instant support with AI learning capabilities.",
    clientLogo: "/path/to/logo2.png", // Add client logo here
  },
  // Add more projects...
];

export default function ClientProjects() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-center text-foreground">
          Client Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="cursor-pointer rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:bg-card-dark"
              onClick={() => setExpandedProject(index)}
            >
              <CardHeader className="p-6 text-center">
                <CardTitle className="text-xl font-semibold text-foreground">
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
                    <Button
                      className="mt-2 w-full text-white bg-green-600 hover:bg-green-700 transition-all duration-200"
                      onClick={() =>
                        window.open("https://preview-link.com", "_blank")
                      }
                    >
                      Preview Project
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-foreground">
            Trusted by Our Clients
          </h3>
          <div className="flex justify-center gap-8 mt-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md"
              >
                <img
                  src={project.clientLogo}
                  alt={`Logo of ${project.title}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
