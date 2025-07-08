'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { quotes } from "@/data/quotes"

export default function Home() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState<string[]>([])

  const handleClick = () => {
    const shuffled = [...quotes].sort(() => 0.5 - Math.random())
    setResults(shuffled.slice(0, 3))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Motivational Quote Generator</h1>
        <Input
          placeholder="Enter a topic (optional)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button onClick={handleClick} className="w-full">Get Quotes</Button>

        {results.length > 0 && (
          <div className="space-y-2 pt-4">
            {results.map((quote, i) => (
              <Card key={i}>
                <CardContent className="p-4 text-center">{quote}</CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
