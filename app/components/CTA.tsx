import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to streamline your reporting?
        </h2>
        <p className="text-xl mb-8">
          Join thousands of satisfied users and start your journey today.
        </p>
        <Link href="/get-started">
          <Button variant="secondary" size="lg">
            Get Started Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
