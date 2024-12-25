'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

const integrations = [
  { id: 'slack', name: 'Slack', connected: true },
  { id: 'github', name: 'GitHub', connected: false },
  { id: 'google', name: 'Google Workspace', connected: true },
  { id: 'jira', name: 'Jira', connected: false },
]

export default function IntegrationsSettings() {
  const { toast } = useToast()
  const [connectedIntegrations, setConnectedIntegrations] = useState(
    integrations.filter(i => i.connected).map(i => i.id)
  )

  const handleToggleIntegration = (integrationId: string) => {
    setConnectedIntegrations(prev =>
      prev.includes(integrationId)
        ? prev.filter(id => id !== integrationId)
        : [...prev, integrationId]
    )
  }

  const handleSaveIntegrations = () => {
    // Here you would typically call an API to update the user's integrations
    console.log('Saving integrations:', connectedIntegrations)
    toast({
      title: "Integrations Updated",
      description: "Your integration settings have been successfully updated.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
        <CardDescription>Manage your connected applications and services</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {integrations.map((integration) => (
          <div key={integration.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={`/placeholder.svg?height=40&width=40&text=${integration.name[0]}`}
                alt={`${integration.name} logo`}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className="font-medium">{integration.name}</p>
                <Badge variant={connectedIntegrations.includes(integration.id) ? "default" : "secondary"}>
                  {connectedIntegrations.includes(integration.id) ? "Connected" : "Disconnected"}
                </Badge>
              </div>
            </div>
            <Switch
              checked={connectedIntegrations.includes(integration.id)}
              onCheckedChange={() => handleToggleIntegration(integration.id)}
            />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSaveIntegrations}>Save Integration Settings</Button>
      </CardFooter>
    </Card>
  )
}

