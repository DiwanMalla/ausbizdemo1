import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

export default function IndustryCallouts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-foreground dark:text-foreground">
          Healthcare Industry Solutions
        </h2>
        <Card className="bg-white dark:bg-gray-900 text-foreground dark:text-foreground shadow-lg dark:shadow-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground dark:text-foreground">
              FHIR Integration & AWS Healthcare Expertise
            </CardTitle>
            <CardDescription className="text-sm text-foreground/70 dark:text-foreground/50">
              Transforming healthcare with cutting-edge technology
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-foreground dark:text-foreground/80">
              Learn how AusBiz is revolutionizing healthcare with FHIR
              integration and AWS-based solutions.
            </p>
            <Button className="bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/90 transition-all duration-200">
              <DownloadIcon className="mr-2 h-4 w-4" /> Download Whitepaper
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
