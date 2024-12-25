import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">About ReportApp</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                ReportApp is a cutting-edge report submission platform designed to streamline your reporting process and boost productivity. Our mission is to simplify complex reporting tasks and empower teams to collaborate effectively.
              </p>
              <p className="text-lg mb-6">
                Founded in 2023, ReportApp has quickly become a trusted solution for businesses of all sizes. Our team of dedicated professionals is committed to continuous innovation and exceptional customer support.
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Jane Doe", role: "CEO & Founder", image: "/placeholder.svg?height=200&width=200" },
                { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=200&width=200" },
                { name: "Alice Johnson", role: "Head of Customer Success", image: "/placeholder.svg?height=200&width=200" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

