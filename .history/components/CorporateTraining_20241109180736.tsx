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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Corporate Training
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Request Customized Training</CardTitle>
            <CardDescription>
              Tailor our training programs to your company's needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Company Name" />
              <Input placeholder="Contact Person" />
              <Input type="email" placeholder="Email" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Training Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in-person">In-Person</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Specific Requirements" />
              <Button type="submit">Submit Request</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
