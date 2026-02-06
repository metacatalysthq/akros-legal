"use client"

import { Shield, Target, Award, Scale } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SectionDivider } from "@/components/section-divider"

const values = [
  {
    icon: Shield,
    title: "Peak Professionalism",
    description:
      "We uphold the highest standards of legal practice, maintaining unwavering professionalism in every client interaction and court appearance. Our conduct reflects the dignity and seriousness that the legal profession demands.",
  },
  {
    icon: Target,
    title: "Strategic Precision",
    description:
      "Every case is approached with meticulous planning and tactical acumen. We analyze all angles, anticipate challenges, and craft strategies that position our clients for the best possible outcomes.",
  },
  {
    icon: Award,
    title: "Unwavering Integrity",
    description:
      "Our commitment to transparency, honesty, and principled representation forms the bedrock of our practice. We believe that ethical conduct and legal excellence go hand in hand.",
  },
  {
    icon: Scale,
    title: "Result-Oriented Advocacy",
    description:
      "While we never compromise on ethics, we remain firmly focused on achieving the best possible results for our clients. Our advocacy is purposeful, persuasive, and designed to deliver tangible outcomes.",
  },
]

export function AboutValues() {
  return (
    <section className="py-24 bg-gradient-to-b from-ivory/30 via-background to-ivory/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Our Promise to You
              <span className="w-8 h-0.5 bg-gold rounded-full" />
            </span>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">Core Values</h2>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              These principles guide every aspect of our practice and define our commitment to our clients.
            </p>
          </ScrollAnimation>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <ScrollAnimation key={value.title} delay={index * 100}>
              <div className="group bg-card border border-border/50 rounded-xl p-8 hover:border-gold/30 hover:shadow-xl transition-all duration-500 card-hover h-full">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 group-hover:from-gold/20 group-hover:to-gold/10 transition-all duration-300 flex-shrink-0">
                    <value.icon className="h-8 w-8 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <SectionDivider variant="dots" className="mt-16" />
      </div>
    </section>
  )
}
