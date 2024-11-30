/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react"; // Import the hook
import "keen-slider/keen-slider.min.css"; // Import the Keen Slider CSS

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Their AI solutions transformed our supply chain. We saw a 30% efficiency boost within three months.",
    author: "Global Logistics Firm",
  },
  {
    quote:
      "The FHIR integration saved us countless hours and improved data reliability across our systems.",
    author: "Healthcare Partner",
  },
  {
    quote:
      "The corporate bootcamp was exactly what our team needed. We're now ahead of the curve in our industry.",
    author: "Tech Startup CEO",
  },
];

export function TestimonialSlider() {
  // State to hold the dynamic `perView` value based on screen size
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Adjust `perView` based on window width
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerView(3); // 3 slides per view on large screens
      } else if (width >= 768) {
        setSlidesPerView(2); // 2 slides per view on medium screens
      } else {
        setSlidesPerView(1); // 1 slide per view on small screens
      }
    };

    // Initial calculation and event listener for resize
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap", // Switch to snap mode for smoother transition
    slides: {
      perView: slidesPerView,
      spacing: 15,
    },
  });

  // Auto slide functionality (moves to next slide every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next(); // Move to the next slide
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [instanceRef]);

  return (
    <section className="py-16 bg-background text-foreground">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        What Our Clients Say
      </h2>
      <div
        ref={sliderRef}
        className="keen-slider w-full" // Make sure the slider container uses full width
        aria-live="polite"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="keen-slider__slide">
            <Card className="bg-card border-card hover:border-primary transition-all">
              <CardContent className="p-8 text-center">
                <blockquote className="text-xl text-muted-foreground mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-sm font-semibold text-muted-foreground">
                  — {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button
          asChild
          variant="outline"
          className="bg-primary text-black group border-primary hover:bg-primary hover:text-black"
        >
          <Link href="/success-stories" className="flex items-center">
            View Success Stories
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
