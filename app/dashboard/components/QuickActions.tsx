import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, FileUp, Users, Settings } from 'lucide-react'

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
        <CardDescription>Frequently used actions</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="flex flex-col items-center justify-center h-24">
          <FileText className="h-6 w-6 mb-2" />
          New Report
        </Button>
        <Button variant="outline" className="flex flex-col items-center justify-center h-24">
          <FileUp className="h-6 w-6 mb-2" />
          Upload Data
        </Button>
        <Button variant="outline" className="flex flex-col items-center justify-center h-24">
          <Users className="h-6 w-6 mb-2" />
          Team Access
        </Button>
        <Button variant="outline" className="flex flex-col items-center justify-center h-24">
          <Settings className="h-6 w-6 mb-2" />
          Settings
        </Button>
      </CardContent>
    </Card>
  )
}

