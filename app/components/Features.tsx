import { CheckCircle } from "lucide-react";

const features = [
  "Easy report submission",
  "Real-time collaboration",
  "Customizable templates",
  "Automated reminders",
  "Secure data storage",
  "Comprehensive analytics",
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <CheckCircle className="text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
