import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built a scalable e-commerce solution using AWS",
    details: [
      "Implemented serverless architecture with AWS Lambda and DynamoDB.",
      "Integrated real-time inventory updates and order management.",
      "Designed for high scalability to handle peak traffic during sales seasons.",
      "Payment gateway integration with third-party providers.",
    ],
    clientLogo:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png", // Example real client logo
    projectImage:
      "https://via.placeholder.com/600x400?text=E-commerce+Platform", // Example project image
    projectLink: "https://www.example.com/e-commerce-project", // Example project detail link
  },
  {
    title: "AI-Powered Chatbot",
    description: "Developed an intelligent customer service chatbot",
    details: [
      "Utilized AWS Lex and Amazon Comprehend for natural language processing.",
      "Automated responses for common customer queries, reducing wait time.",
      "Integrated with CRM for customer data management and insights.",
      "Trained the chatbot to improve response accuracy over time.",
    ],
    clientLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_logo_black.svg", // Example real client logo
    projectImage: "https://via.placeholder.com/600x400?text=AI-Powered+Chatbot", // Example project image
    projectLink: "https://www.example.com/ai-chatbot-project", // Example project detail link
  },
  // Add more projects...
];

export default function ClientProjects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8 ">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-center text-foreground">
          Client Projects
        </h2>
        <div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center w-full max-w-7xl">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="cursor-pointer rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:bg-card-dark"
              >
                <CardHeader className="p-6 text-center">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 py-3">
                  <CardDescription className="text-sm text-foreground/70">
                    {project.description}
                  </CardDescription>
                  <div className="mt-4">
                    <ul className="list-disc pl-6 text-sm text-foreground/80">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <img
                      src={project.projectImage}
                      alt={`${project.title} Screenshot`}
                      className="mt-4 w-full h-auto object-cover rounded-lg"
                    />
                    <Button
                      className="mt-4 w-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200"
                      onClick={() => window.open(project.projectLink, "_blank")}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Logos Section */}

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-foreground">
            Trusted by Our Clients
          </h3>
          <div className="flex justify-center gap-8 mt-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md"
              >
                <img
                  src={project.clientLogo}
                  alt={`Logo of ${project.title}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
