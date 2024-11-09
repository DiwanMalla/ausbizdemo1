import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const modules = [
  { title: "AWS Basics", free: true },
  { title: "Serverless Architecture", free: false },
  { title: "Machine Learning on AWS", free: false },
  // Add more modules...
];

export default function LMSSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-center text-foreground">
          Learning Management System
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="cursor-pointer rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <CardHeader className="p-6 text-center">
                <CardTitle className="text-xl font-semibold">
                  {module.title}
                </CardTitle>
                <CardDescription className="text-sm text-foreground/70">
                  {module.free ? "Free" : "Premium"}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 py-3 flex justify-center">
                <Button
                  variant={module.free ? "default" : "outline"}
                  className={`${
                    module.free
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                  } w-full py-2 px-4 text-sm font-semibold transition-all duration-200`}
                >
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
