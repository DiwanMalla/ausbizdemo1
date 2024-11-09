import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CorporateTraining() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-800 dark:to-blue-900">
      <div className="container px-4 md:px-6 xl:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center sm:text-4xl md:text-5xl mb-8 text-foreground dark:text-foreground">
          Corporate Training
        </h2>
        <Card className="bg-white dark:bg-gray-900 text-foreground dark:text-foreground shadow-xl rounded-2xl p-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-foreground dark:text-foreground">
              Request Customized Training
            </CardTitle>
            <CardDescription className="text-md text-foreground/70 dark:text-foreground/50">
              Tailor our training programs to your company's needs and elevate
              your team's skills.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <Input
                placeholder="Company Name"
                className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 text-sm transition duration-300"
              />
              <Input
                placeholder="Contact Person"
                className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 text-sm transition duration-300"
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 text-sm transition duration-300"
              />
              <Select className="w-full">
                <SelectTrigger className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 text-sm transition duration-300">
                  <SelectValue placeholder="Training Format" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
                  <SelectItem value="in-person">In-Person</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Specific Requirements"
                className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 text-sm transition duration-300"
              />
              <Button
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 rounded-lg py-3 px-6 text-lg transition-all duration-300"
              >
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
