import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">
              About ReportApp
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                ReportApp is a cutting-edge report submission platform designed
                to streamline your reporting process and boost productivity. Our
                mission is to simplify complex reporting tasks and empower teams
                to collaborate effectively.
              </p>
              <p className="text-lg mb-6">
                Founded in 2023, ReportApp has quickly become a trusted solution
                for businesses of all sizes. Our team of dedicated professionals
                is committed to continuous innovation and exceptional customer
                support.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="list-disc list-inside mb-6">
                <li>Simplicity in design and functionality</li>
                <li>Security and privacy of user data</li>
                <li>Continuous improvement and innovation</li>
                <li>Customer-centric approach</li>
              </ul>
              <div className="text-center">
                <Button size="lg">Join Us Today</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
