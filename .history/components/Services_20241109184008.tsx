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
    icon: SmartphoneIcon,
  },
  // More services added...
];

export default function ServicesCarousel() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-center text-foreground">
          Our Services
        </h2>
        <div className="relative">
          <div className="flex overflow-x-auto pb-10 hide-scroll-bar scroll-smooth px-6 lg:px-12 space-x-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="flex-none w-64 sm:w-80 lg:w-96 bg-white shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <CardHeader className="flex justify-center items-center p-6">
                  <service.icon className="w-14 h-14 text-indigo-600" />
                </CardHeader>
                <CardContent className="px-4 py-3">
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
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-transparent to-gray-100 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
