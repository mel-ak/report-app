import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          ReportApp
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/#features"
                className="text-gray-600 hover:text-primary"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-primary"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-primary">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/get-started">
          <Button>Get Started</Button>
        </Link>
      </div>
    </header>
  );
}
