import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const popularBlogPosts = [
  {
    title: "The Future of AWS",
    summary:
      "Explore how AWS is shaping the future of cloud computing and why it's essential for modern businesses.",
    category: "AWS",
  },
  {
    title: "AI Trends in 2024",
    summary:
      "A look at the most exciting AI trends, from generative models to automation, and their impact on industries.",
    category: "AI",
  },
  {
    title: "Serverless Architecture Best Practices",
    summary:
      "Learn about serverless architectures and the best practices for building scalable, cost-efficient applications.",
    category: "Technology",
  },
  // Add more popular blog posts here...
];

export default function HomeSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 lg:px-12">
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

        {/* Featured Blog Section */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-foreground dark:text-foreground">
          Popular Articles
        </h2>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularBlogPosts.map((post, index) => (
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
                <p className="text-foreground/80 dark:text-foreground/60">
                  {post.summary}
                </p>
                <Button variant="outline" className="mt-4">
                  Read More
                </Button>
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
