import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "$9.99",
    period: "per month",
    features: [
      "Up to 10 reports per month",
      "Basic templates",
      "Email support",
      "1 team member",
    ],
    cta: "Start Basic",
  },
  {
    name: "Pro",
    price: "$29.99",
    period: "per month",
    features: [
      "Unlimited reports",
      "Advanced templates",
      "Priority email support",
      "Up to 5 team members",
      "Analytics dashboard",
    ],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us for pricing",
    features: [
      "Unlimited reports",
      "Custom templates",
      "24/7 phone support",
      "Unlimited team members",
      "Advanced analytics",
      "API access",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Choose the perfect plan for your reporting needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                    plan.highlighted ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    <ul className="mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center mb-2"
                        >
                          <Check className="text-green-500 mr-2" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We offer tailored plans for large organizations. Let's discuss
              your needs.
            </p>
            <Button size="lg">Contact Our Sales Team</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
