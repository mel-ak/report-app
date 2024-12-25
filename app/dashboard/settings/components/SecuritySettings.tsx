'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function SecuritySettings() {
    const { toast } = useToast()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [twoFactor, setTwoFactor] = useState(false)

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match.",
        variant: "destructive",
      })
      return
    }
    // Here you would typically call an API to change the password
    console.log('Changing password')
    toast({
      title: "Password Changed",
      description: "Your password has been successfully updated.",
    })
  }

  const handleToggleTwoFactor = () => {
    setTwoFactor(!twoFactor)
    // Here you would typically call an API to enable/disable two-factor authentication
    console.log('Toggling two-factor authentication:', !twoFactor)
    toast({
      title: `Two-Factor Authentication ${!twoFactor ? 'Enabled' : 'Disabled'}`,
      description: `Two-factor authentication has been ${!twoFactor ? 'enabled' : 'disabled'} for your account.`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>Manage your account security settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleChangePassword}>
          <div className="space-y-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <Button type="submit" className="mt-4">Change Password</Button>
        </form>
        <div className="flex items-center justify-between pt-4">
          <Label htmlFor="two-factor">Two-Factor Authentication</Label>
          <Switch
            id="two-factor"
            checked={twoFactor}
            onCheckedChange={handleToggleTwoFactor}
          />
        </div>
      </CardContent>
    </Card>
  )
}

