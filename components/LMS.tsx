import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const modules = [
  {
    title: "AWS Basics",
    free: true,
    description:
      "Learn the fundamentals of AWS, including EC2, S3, and IAM. This module is designed for beginners to get hands-on experience with the most commonly used AWS services.",
  },
  {
    title: "Serverless Architecture",
    free: false,
    description:
      "Explore serverless computing with AWS Lambda, API Gateway, and DynamoDB. You'll learn how to build scalable, cost-effective applications without managing servers.",
  },
  {
    title: "Machine Learning on AWS",
    free: false,
    description:
      "Dive into machine learning with AWS services like SageMaker. This module covers building and deploying machine learning models using AWS tools, with real-world applications.",
  },
  // Add more modules with descriptions...
];

export default function LMSSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-center text-foreground">
          Learning Management System
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="cursor-pointer rounded-lg bg-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:scale-105"
            >
              <CardHeader className="p-6 text-center">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {module.title}
                </CardTitle>
                <CardDescription className="text-sm text-foreground/70">
                  {module.free ? "Free" : "Premium"}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 py-3">
                <p className="text-sm text-foreground/70 mb-4">
                  {module.description}
                </p>
                <div className="flex justify-center">
                  <Button
                    variant={module.free ? "default" : "outline"}
                    className={`${
                      module.free
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border-accent dark:text-foreground hover:bg-accent/10"
                    } w-full py-2 px-4 text-sm font-semibold transition-all duration-200`}
                  >
                    {module.free ? "Start Learning" : "Upgrade to Access"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
