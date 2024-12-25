'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const notificationTypes = [
  { id: 'reports', label: 'New Reports' },
  { id: 'comments', label: 'Comments on Reports' },
  { id: 'mentions', label: 'Mentions' },
  { id: 'deadlines', label: 'Upcoming Deadlines' },
  { id: 'updates', label: 'System Updates' },
]

export default function NotificationSettings() {
    const { toast } = useToast()
  const [notifications, setNotifications] = useState<string[]>(['reports', 'deadlines'])

  const handleNotificationChange = (notificationId: string) => {
    setNotifications(prev =>
      prev.includes(notificationId)
        ? prev.filter(id => id !== notificationId)
        : [...prev, notificationId]
    )
  }

  const handleSaveNotifications = () => {
    // Here you would typically call an API to update the user's notification settings
    console.log('Saving notification settings:', notifications)
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been successfully updated.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Manage your notification preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {notificationTypes.map((type) => (
          <div key={type.id} className="flex items-center space-x-2">
            <Checkbox
              id={type.id}
              checked={notifications.includes(type.id)}
              onCheckedChange={() => handleNotificationChange(type.id)}
            />
            <Label htmlFor={type.id}>{type.label}</Label>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSaveNotifications}>Save Notification Settings</Button>
      </CardFooter>
    </Card>
  )
}

