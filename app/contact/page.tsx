"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define container styles for the map
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Define the center of the map (ECA Parramatta coordinates)
const center = {
  lat: -33.8125, // Latitude for ECA Parramatta
  lng: 151.0048, // Longitude for ECA Parramatta
};

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (you can use form validation here as well)
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-16 md:py-24 text-foreground">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Contact Us
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl">
              Let us help you with your business, technology, and healthcare
              needs. Reach out to us today.
            </p>
          </div>
        </section>

        <div className="container px-4 md:px-6 py-12 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold">Get in Touch</h2>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-foreground" />
                <p className="text-lg">
                  123 Business Street, Suite 100, City, State 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-primary" />
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-primary" />
                <a
                  href="mailto:info@b2bconsulting.com"
                  className="text-lg hover:underline text-primary"
                >
                  info@b2bconsulting.com
                </a>
              </div>
              <div className="flex space-x-6 mt-6">
                <a
                  href="#"
                  className="text-primary hover:text-gray-700 transition-transform transform hover:scale-110"
                >
                  <Facebook className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-gray-700 transition-transform transform hover:scale-110"
                >
                  <Twitter className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-gray-700 transition-transform transform hover:scale-110"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleFormSubmit}
              className="space-y-6 p-8 rounded-xl shadow-lg  md:max-w-md mx-auto"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name (Optional)</Label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[120px]"
                  id="message"
                  placeholder="Write your message here..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full sm:w-auto bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Our Location
            </h2>
            <LoadScript
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                options={{
                  disableDefaultUI: true,
                  zoomControl: true,
                  styles: [
                    {
                      elementType: "geometry",
                      stylers: [{ color: "#212121" }],
                    },
                    {
                      elementType: "labels.icon",
                      stylers: [{ visibility: "off" }],
                    },
                    {
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#757575" }],
                    },
                  ],
                }}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
