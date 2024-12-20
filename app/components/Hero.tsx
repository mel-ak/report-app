import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Submit Reports with Ease</h1>
        <p className="text-xl text-gray-600 mb-8">
          Streamline your reporting process and boost productivity
        </p>
        <Button size="lg">Start Reporting Now</Button>
      </div>
    </section>
  );
}
