import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CloudIcon,
  CodeIcon,
  BrainIcon,
  DatabaseIcon,
  SmartphoneIcon,
} from "lucide-react";

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
  {
    title: "Data Engineering",
    description: "Streamlining your data pipelines and architectures",
    icon: DatabaseIcon,
  },
  {
    title: "Mobile Development",
    description: "Developing mobile apps for iOS and Android",
    icon: MobileIcon,
  },
  // More services added...
];

export default function ServicesCarousel() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-foreground">
          Our Services
        </h2>
        <div className="flex overflow-x-auto pb-10 hide-scroll-bar scroll-smooth">
          <div className="flex flex-nowrap space-x-6 px-4 lg:px-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="flex-none w-64 sm:w-80 lg:w-96 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="flex justify-center items-center p-4">
                  <service.icon className="w-12 h-12 text-indigo-600" />
                </CardHeader>
                <CardContent className="px-4 py-2">
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-foreground/70">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
