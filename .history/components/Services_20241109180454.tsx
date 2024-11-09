import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CloudIcon, CodeIcon, BrainIcon } from "lucide-react";

const services = [
  {
    title: "Cloud Solutions",
    description: "Scalable and secure AWS cloud infrastructure",
    icon: CloudIcon,
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end web and mobile app development",
    icon: CodeIcon,
  },
  {
    title: "AI Consulting",
    description: "Leverage AI to transform your business",
    icon: BrainIcon,
  },
  // Add more services...
];

export default function ServicesCarousel() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Our Services
        </h2>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap space-x-4">
            {services.map((service, index) => (
              <Card key={index} className="flex-none w-64">
                <CardHeader>
                  <service.icon className="w-10 h-10 mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
