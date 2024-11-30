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
    <section className="w-full py-8 sm:py-12 md:py-16 bg-background text-foreground">
      <div className="space-y-12 w-full px-4 sm:px-2 md:px-8 lg:px-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Empowering Innovation Across Industries
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            From AI-driven automation to healthcare transformation, we deliver
            customized solutions that drive measurable results and lasting
            impact for businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
            >
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-muted-foreground hover:border-primary w-full sm:w-auto"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Corporate Bootcamps",
              content:
                "Empower your workforce with tailor-made training that aligns with your business goals.",
              link: "/programs",
              linkText: "View Programs",
            },
            {
              title: "Generative AI Solutions",
              content:
                "Revolutionize your business processes with cutting-edge AI innovation.",
              link: "/ai-services",
              linkText: "Learn More",
            },
            {
              title: "FHIR Healthcare Integration",
              content:
                "Streamline patient data and achieve seamless healthcare interoperability.",
              link: "/fhir-solutions",
              linkText: "Explore FHIR",
            },
          ].map((highlight, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  {highlight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {highlight.content}
                </p>
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
        <section className="bg-card rounded-lg shadow-md border p-6 sm:p-8 text-center">
          <h2 className="text-lg sm:text-xl font-bold mb-3">About Us</h2>
          <p className="text-sm text-muted-foreground mb-5 max-w-2xl mx-auto">
            We bring expertise and vision to deliver tailored business
            solutions. From transformative corporate training to healthcare
            technology and AI innovation, we help organizations achieve their
            strategic goals.
          </p>
          <div className="flex justify-center">
            <Button asChild variant="default" size="lg" className="group">
              <Link href="/about" className="flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Dedicated FHIR Section */}
        <section className="bg-card rounded-lg border border-border p-6 sm:p-8 text-center">
          <h2 className="text-lg sm:text-xl font-bold mb-3">
            Transform Healthcare with FHIR
          </h2>
          <p className="text-sm text-muted-foreground mb-5 max-w-xl mx-auto">
            Discover how our FHIR-based solutions help organizations integrate
            patient data effortlessly and achieve seamless interoperability.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 px-6 py-2 text-sm"
            >
              <Link href="/fhir-solutions">
                Learn More About FHIR Solutions
              </Link>
            </Button>
          </div>
        </section>

        {/* Testimonials Slider */}
        <TestimonialSlider />

        {/* Call-to-Action Banner */}
        <CTABanner />
      </div>
    </section>
  );
}
