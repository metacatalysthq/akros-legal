"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const reasons = [
  "Expert representation before Supreme Court, High Courts, and specialized Tribunals",
  "Comprehensive pre-litigation risk assessment and strategic planning",
  "Cross-functional expertise spanning civil, criminal, and corporate matters",
  "Transparent communication and regular case status updates",
  "Result-oriented approach with proven track record",
  "Personalized attention to every client and case",
]

const stats = [
  { value: "15+", label: "Years Combined Experience" },
  { value: "500+", label: "Cases Handled" },
  { value: "12", label: "Practice Areas" },
  { value: "98%", label: "Client Satisfaction" },
]

export function HomeWhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-ivory/30 via-background to-ivory/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Stats Side */}
          <ScrollAnimation direction="left" className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/professional-lawyers-team-meeting-modern-office-el.jpg"
                  alt="Legal Team"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>

              {/* Stats Overlay Card */}
              <div className="absolute -bottom-8 left-4 right-4 md:left-8 md:right-8 bg-card/95 backdrop-blur-lg border border-border/50 rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-serif text-2xl md:text-3xl font-bold text-gold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Content Side */}
          <div className="lg:pl-8 pt-12 lg:pt-0">
            <ScrollAnimation>
              <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-4">
                <span className="w-8 h-0.5 bg-gold rounded-full" />
                Why Choose Us
              </span>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Your Trusted Legal Partners
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                At Akros Legal, we combine legal expertise with strategic thinking to deliver exceptional results. Our
                team of experienced advocates brings together deep knowledge across multiple practice areas.
              </p>
            </ScrollAnimation>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <ScrollAnimation key={reason} delay={300 + index * 50}>
                  <li className="flex items-start gap-3 group">
                    <div className="p-1 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-foreground/90 leading-relaxed">{reason}</span>
                  </li>
                </ScrollAnimation>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
