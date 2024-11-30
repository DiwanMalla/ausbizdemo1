import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChevronRight,
  Database,
  CurrencyIcon as Exchange,
  FileText,
  Users,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function FHIRHealthcareIntegration() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Section 1: Introduction to FHIR Integration */}
        <section className="py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transform Healthcare with FHIR Integration
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                FHIR (Fast Healthcare Interoperability Resources) empowers
                healthcare organizations to improve data interoperability and
                patient data management, leading to better care outcomes.
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Unlock seamless interoperability and smarter patient data
                management
              </h2>
              <ul className="flex flex-col items-center space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Streamline patient data</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Achieve interoperability across systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>Improve data accuracy and decision-making</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="FHIR Integration Diagram"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Section 2: How FHIR Works for Healthcare Organizations */}
        <section className="py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
              How Our FHIR Solutions Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Database className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">
                    Data Integration
                  </h3>
                  <p className="text-center text-sm text-gray-500">
                    Seamlessly integrate with existing healthcare systems
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Exchange className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Data Exchange</h3>
                  <p className="text-center text-sm text-gray-500">
                    Accelerate data exchange between healthcare entities
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <FileText className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">
                    EHR Compatibility
                  </h3>
                  <p className="text-center text-sm text-gray-500">
                    Enhance electronic health records management
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Users className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">
                    Patient-Centric
                  </h3>
                  <p className="text-center text-sm text-gray-500">
                    Improve patient data accuracy and accessibility
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="mt-8 text-center text-gray-500 max-w-2xl mx-auto">
              Our FHIR solutions simplify the complex process of healthcare data
              integration, ensuring smooth interoperability and improved patient
              care through standardized data exchange.
            </p>
          </div>
        </section>

        {/* Section 3: Request a Demo or Consultation */}
        <section className="py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                See FHIR in Action
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Request a demo to see how FHIR can transform your healthcare
                workflows.
              </p>
              <Button size="lg" asChild>
                <Link href="/request-demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: Case Studies and Testimonials */}
        <section className="py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
              Successful FHIR Integrations
            </h2>
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex flex-col items-center p-6">
                        <blockquote className="text-lg italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.company}
                        </p>
                        <p className="mt-2 text-sm">{testimonial.result}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Section 5: Call-to-Action Banner */}
        <section className="py-12 md:py-24 lg:py-32  text-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Healthcare Data?
              </h2>
              <p className="mx-auto max-w-[600px] text-foreground md:text-xl">
                Let's work together to streamline your healthcare data
                management with FHIR.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/get-started">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const testimonials = [
  {
    quote: "FHIR integration revolutionized our data management processes.",
    name: "Dr. Jane Smith",
    company: "MedTech Hospital",
    result: "50% reduction in data processing time",
  },
  {
    quote: "Seamless interoperability across all our systems.",
    name: "John Doe",
    company: "HealthCare Solutions Inc.",
    result: "Improved patient data accuracy by 40%",
  },
  {
    quote: "FHIR has been a game-changer for our healthcare network.",
    name: "Sarah Johnson",
    company: "Regional Health Network",
    result: "30% increase in efficiency of care coordination",
  },
];
