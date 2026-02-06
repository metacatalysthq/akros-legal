"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

const subjects = ["General Inquiry", "Consultation Request", "Careers", "Media"]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  // Honeypot field for anti-spam
  const [honeypot, setHoneypot] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Anti-spam: If honeypot field is filled, silently reject
    if (honeypot) {
      setIsSubmitted(true)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-primary/30 rounded-lg p-12 flex flex-col items-center justify-center text-center h-full">
        <CheckCircle2 className="h-16 w-16 text-primary mb-6" />
        <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Message Sent Successfully</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for contacting Akros Legal. We have received your message and will respond within 24-48 business
          hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-primary/50 text-foreground hover:bg-primary/10"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot - Hidden field for spam prevention */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div>
          <Label htmlFor="name" className="text-foreground">
            Full Name *
          </Label>
          <Input
            id="name"
            required
            placeholder="Enter your full name"
            className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="your.email@example.com"
            className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div>
          <Label htmlFor="subject" className="text-foreground">
            Subject *
          </Label>
          <Select required>
            <SelectTrigger id="subject" className="mt-2 bg-input border-border text-foreground">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="text-foreground">
            Message *
          </Label>
          <Textarea
            id="message"
            required
            placeholder="Please describe how we can help you..."
            className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
            rows={5}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          By submitting this form, you agree to our{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  )
}
