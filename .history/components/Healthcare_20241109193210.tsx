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
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex justify-center">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-foreground dark:text-foreground text-center">
            Healthcare Industry Solutions
          </h2>
          <Card className="bg-white dark:bg-gray-900 text-foreground dark:text-foreground shadow-lg dark:shadow-gray-800 p-6 rounded-lg w-full">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground dark:text-foreground">
                FHIR Integration & AWS Healthcare Expertise
              </CardTitle>
              <CardDescription className="text-sm text-foreground/70 dark:text-foreground/50">
                Revolutionizing healthcare with cutting-edge technology
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground dark:text-foreground/80">
                Learn how AusBiz is transforming the healthcare industry by
                implementing FHIR (Fast Healthcare Interoperability Resources)
                integration with AWS-based solutions. Our approach streamlines
                the management of electronic health records (EHR), ensuring
                seamless data exchange across various healthcare systems and
                improving patient care.
              </p>
              <p className="text-foreground dark:text-foreground/80">
                Our team specializes in cloud solutions using AWS services such
                as AWS Lambda, API Gateway, and DynamoDB, ensuring a serverless,
                scalable, and secure architecture for handling sensitive
                healthcare data. We focus on maintaining compliance with
                regulations such as HIPAA while enhancing operational
                efficiency.
              </p>
              <p className="text-foreground dark:text-foreground/80">
                The integration of AWS technologies with FHIR standards not only
                simplifies the data-sharing process between healthcare providers
                but also paves the way for innovative solutions in patient care
                and healthcare management.
              </p>
              <div className="mt-6">
                <Button
                  className="bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/90 transition-all duration-200 w-full sm:w-auto"
                  onClick={() => {
                    window.open("/path-to-whitepaper.pdf", "_blank"); // Replace with actual file path or link
                  }}
                >
                  <DownloadIcon className="mr-2 h-4 w-4" /> Download Whitepaper
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
