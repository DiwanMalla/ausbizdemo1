import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const blogPosts = [
  { title: "The Future of AWS", category: "AWS" },
  { title: "AI Trends in 2024", category: "AI" },
  { title: "Serverless Architecture Best Practices", category: "Technology" },
  // Add more blog posts...
];

export default function HomeSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || post.category === selectedCategory)
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        {/* Hero Banner */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground dark:text-foreground mb-4">
            Welcome to Our Thought Leadership Hub
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 dark:text-foreground/60">
            Stay updated with the latest trends, insights, and innovations
            across the tech world.
          </p>
        </div>

        {/* Blog Section */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-foreground dark:text-foreground">
          Featured Articles
        </h2>

        {/* Search and Category Filter */}
        <div className="flex flex-wrap justify-between mb-6 gap-4">
          <div className="w-full sm:w-auto">
            <Input
              type="search"
              placeholder="Search articles..."
              className="max-w-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="space-x-2 flex flex-wrap gap-2">
            {["All", "AWS", "AI", "Technology"].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-900 text-foreground dark:text-foreground shadow-lg rounded-lg"
            >
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="text-sm text-foreground/70 dark:text-foreground/50">
                  {post.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-8 text-center">
          <Button className="bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/90 transition-all duration-200">
            Subscribe for Updates
          </Button>
        </div>
      </div>
    </section>
  );
}
