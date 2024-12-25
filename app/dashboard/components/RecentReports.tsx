import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, ArrowRight } from 'lucide-react'

const recentReports = [
  { id: 1, title: "Q2 Financial Report", date: "2023-06-30", status: "Submitted" },
  { id: 2, title: "Project X Progress Update", date: "2023-07-15", status: "Draft" },
  { id: 3, title: "Monthly Team Performance", date: "2023-07-01", status: "Under Review" },
]

export default function RecentReports() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Recent Reports</CardTitle>
        <CardDescription>Your latest report submissions and drafts</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.title}</TableCell>
                <TableCell>{report.date}</TableCell>
                <TableCell>{report.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 text-right">
          <Link href="/reports">
            <Button variant="outline" size="sm">
              View All Reports
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

