"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { TestimonialSlider } from "./testonomial-slider";
import { CTABanner } from "@/components/cta-banner";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center items-center bg-background text-foreground">
      <div className="space-y-20 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-13">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            Transforming Industries Through Innovation
          </h1>
          <p className="text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Unlock the power of tailored solutions for business growth,
            healthcare advancements, and next-gen corporate training.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/solutions">Explore Solutions</Link>
          </Button>
        </section>

        {/* Core Highlights Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Corporate Bootcamps",
              content:
                "Upskill your teams with targeted, results-driven training tailored to your industry.",
              link: "/programs",
              linkText: "View Programs",
            },
            {
              title: "Generative AI Services",
              content:
                "Revolutionize your operations with cutting-edge AI solutions.",
              link: "/ai-services",
              linkText: "Learn More",
            },
            {
              title: "FHIR Healthcare Solutions",
              content:
                "Seamlessly integrate patient data and achieve interoperability with FHIR.",
              link: "/fhir-solutions",
              linkText: "Explore FHIR",
            },
          ].map((highlight, index) => (
            <Card
              key={index}
              className="bg-card hover:border-primary transition-colors"
            >
              <CardHeader>
                <CardTitle>{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{highlight.content}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group">
                  <Link href={highlight.link} className="flex items-center">
                    {highlight.linkText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>

        {/* About Us Section */}
        <section className="text-center py-16 bg-card rounded-lg border border-border hover:border-primary transition-colors">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We specialize in delivering bespoke solutions for businesses and
            organizations. Whether it's corporate training, healthcare
            technology, or AI innovation, we bring expertise and vision to every
            project.
          </p>
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/about" className="flex items-center">
              Discover More About Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </section>

        {/* Dedicated FHIR Healthcare Section */}
        <section className="bg-card border border-border rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Driving Healthcare Forward with FHIR
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our FHIR-based solutions help organizations manage patient data
            efficiently, enabling compliance, interoperability, and better
            outcomes.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/fhir-solutions">Learn More About FHIR Solutions</Link>
          </Button>
        </section>

        {/* Testimonials Slider */}
        <TestimonialSlider />

        {/* Call to Action Banner */}
        <CTABanner />
      </div>
    </section>
  );
}
