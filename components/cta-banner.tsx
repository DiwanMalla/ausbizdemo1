import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className=" py-12 px-6 rounded-lg text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Partner with us to achieve next-level innovation and growth.
      </h2>
      <p className="text-lg mb-6 text-muted-foreground">
        Unlock the potential of tailored solutions for your business,
        healthcare, and technology needs.
      </p>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="bg-primary text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
      >
        <Link href="/contact">Get Started Today</Link>
      </Button>
    </section>
  );
}
