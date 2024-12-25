import Header from '../components/Header'
import Footer from '../components/Footer'
import RecentReports from './components/RecentReports'
import QuickActions from './components/QuickActions'
import ReportStats from './components/ReportStats'
import UpcomingDeadlines from './components/UpcomingDeadlines'

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <RecentReports />
              <ReportStats />
            </div>
            <div className="space-y-8">
              <QuickActions />
              <UpcomingDeadlines />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

