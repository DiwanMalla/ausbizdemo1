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
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6 xl:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-foreground dark:text-foreground">
          Corporate Training
        </h2>
        <Card className="bg-white dark:bg-gray-900 text-foreground dark:text-foreground shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle>Request Customized Training</CardTitle>
            <CardDescription>
              Tailor our training programs to your company's needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Company Name" className="w-full" />
              <Input placeholder="Contact Person" className="w-full" />
              <Input type="email" placeholder="Email" className="w-full" />
              <Select className="w-full">
                <SelectTrigger>
                  <SelectValue placeholder="Training Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in-person">In-Person</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Specific Requirements"
                className="w-full"
              />
              <Button type="submit" className="w-full md:w-auto">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
