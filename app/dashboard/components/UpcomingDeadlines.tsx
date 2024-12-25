import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const deadlines = [
  { id: 1, title: "Q3 Financial Report", date: "2023-09-30", urgency: "high" },
  { id: 2, title: "Annual Performance Review", date: "2023-12-15", urgency: "medium" },
  { id: 3, title: "Project Y Final Report", date: "2023-08-31", urgency: "low" },
]

export default function UpcomingDeadlines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Upcoming Deadlines</CardTitle>
        <CardDescription>Reports due in the near future</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {deadlines.map((deadline) => (
            <li key={deadline.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{deadline.title}</p>
                <p className="text-sm text-gray-500">{deadline.date}</p>
              </div>
              <Badge variant={deadline.urgency === 'high' ? 'destructive' : deadline.urgency === 'medium' ? 'default' : 'secondary'}>
                {deadline.urgency}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

