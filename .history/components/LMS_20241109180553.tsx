import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const modules = [
  { title: "AWS Basics", free: true },
  { title: "Serverless Architecture", free: false },
  { title: "Machine Learning on AWS", free: false },
  // Add more modules...
];

export default function LMSSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Learning Management System
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{module.title}</CardTitle>
                <CardDescription>
                  {module.free ? "Free" : "Premium"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant={module.free ? "default" : "outline"}>
                  {module.free ? "Start Learning" : "Upgrade to Access"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
