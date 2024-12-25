'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Plus } from 'lucide-react'

const templates = [
  { id: 1, name: "Monthly Progress Report", description: "A comprehensive monthly report template for tracking project progress." },
  { id: 2, name: "Quarterly Financial Report", description: "A detailed financial report template for quarterly business reviews." },
  { id: 3, name: "Annual Performance Review", description: "An employee performance review template for annual assessments." },
  { id: 4, name: "Weekly Team Update", description: "A concise template for weekly team status updates and goals." },
]

export default function ChooseTemplate() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)
  const router = useRouter()

  const handleSelectTemplate = (templateId: number) => {
    setSelectedTemplate(templateId)
  }

  const handleContinue = () => {
    if (selectedTemplate) {
      // Here you would typically save the selected template to the user's account
      console.log('Selected template:', selectedTemplate)
      router.push('/submit-report')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Choose a Report Template</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {templates.map((template) => (
              <Card 
                key={template.id} 
                className={`cursor-pointer transition-all ${selectedTemplate === template.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => handleSelectTemplate(template.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2" />
                    {template.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{template.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
            <Card className="cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="mr-2" />
                  Create Custom Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Design your own custom report template from scratch.</CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button onClick={handleContinue} disabled={!selectedTemplate}>
              Continue with Selected Template
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

