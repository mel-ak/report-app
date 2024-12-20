import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Create an Account",
    description:
      "Sign up for ReportApp using your email address or Google account.",
    action: "Sign Up Now",
  },
  {
    title: "Set Up Your Profile",
    description: "Complete your profile with your name, company, and role.",
    action: "Complete Profile",
  },
  {
    title: "Choose a Template",
    description:
      "Browse our library of report templates or create a custom one.",
    action: "Explore Templates",
  },
  {
    title: "Submit Your First Report",
    description: "Fill in the report details and submit it for review.",
    action: "Create Report",
  },
];

export default function GetStarted() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Get Started with ReportApp
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Follow these simple steps to start submitting your reports in
              minutes
            </p>
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <Card key={index} className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="text-primary mr-2" />
                      <span>
                        Step {index + 1}: {step.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {step.description}
                    </CardDescription>
                    <Button>
                      {step.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to assist you every step of the way.
            </p>
            <Button size="lg" variant="outline">
              Contact Support
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
