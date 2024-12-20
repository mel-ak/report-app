import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 mb-4 md:mb-0">
          © 2023 ReportApp. All rights reserved.
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
