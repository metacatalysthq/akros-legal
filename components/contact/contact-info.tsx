"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div>
      <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
        Contact Information
      </span>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
        Let&apos;s Discuss Your Legal Needs
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Whether you&apos;re seeking legal counsel, have questions about our services, or want to schedule a
        consultation, our team is ready to assist you. Reach out through any of the channels below.
      </p>

      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
            <p className="text-muted-foreground">A-23, Fourth Floor, Sector 16, Gautam Buddha Nagar, Noida</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Phone Numbers</h3>
            <div className="space-y-1">
              <a href="tel:8588061334" className="block text-muted-foreground hover:text-primary transition-colors">
                8588061334
              </a>
              <a href="tel:9875596089" className="block text-muted-foreground hover:text-primary transition-colors">
                9875596089
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <a
              href="mailto:akroslegal@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              akroslegal@gmail.com
            </a>
          </div>
        </div>

        {/* Office Hours */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
            <p className="text-muted-foreground">Monday – Saturday</p>
            <p className="text-muted-foreground">10:00 AM – 7:00 PM</p>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-8 rounded-lg overflow-hidden border border-border">
        <div
          className="aspect-video bg-muted"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=400&width=600&query=map location noida india professional dark)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  )
}
