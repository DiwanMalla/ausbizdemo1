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
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Healthcare Industry Solutions
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>FHIR Integration & AWS Healthcare Expertise</CardTitle>
            <CardDescription>
              Transforming healthcare with cutting-edge technology
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Learn how AusBiz is revolutionizing healthcare with FHIR
              integration and AWS-based solutions.
            </p>
            <Button>
              <DownloadIcon className="mr-2 h-4 w-4" /> Download Whitepaper
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
