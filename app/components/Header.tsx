'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()
  const isLoggedIn = pathname.startsWith('/dashboard')

  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          ReportApp
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {isLoggedIn ? (
              <>
                <li><Link href="/dashboard" className="text-gray-600 hover:text-primary">Dashboard</Link></li>
                <li><Link href="/dashboard/reports" className="text-gray-600 hover:text-primary">Reports</Link></li>
                <li><Link href="/dashboard/settings" className="text-gray-600 hover:text-primary">Settings</Link></li>
              </>
            ) : (
              <>
                <li><Link href="/#features" className="text-gray-600 hover:text-primary">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-600 hover:text-primary">Pricing</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
              </>
            )}
          </ul>
        </nav>
        {isLoggedIn ? (
          <Button variant="outline" onClick={() => console.log('Logout')}>Log Out</Button>
        ) : (
          <div className="space-x-2">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/create-account">
              <Button>Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

