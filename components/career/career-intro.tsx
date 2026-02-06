"use client"

import { Target, Users, TrendingUp, Award } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Challenging Work",
    description: "Engage with complex legal matters across multiple practice areas",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Learn directly from experienced partners and senior advocates",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Clear career progression paths and professional development",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Be part of a team committed to the highest standards",
  },
]

export function CareerIntro() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Join Our Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Build Your Legal Career with Us
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are always looking for the next generation of legal minds. At Akros Legal, we believe that our people
                are our greatest asset, and we are committed to nurturing talent in a high-performance environment.
              </p>
              <p>
                Our firm offers opportunities to work on challenging matters across multiple practice areas, providing
                exposure to diverse legal issues and the chance to develop comprehensive legal skills. We value
                intellectual curiosity, dedication, and a commitment to excellence.
              </p>
              <p>
                Whether you are a seasoned professional looking for new challenges or a fresh graduate ready to begin
                your legal career, we invite you to explore opportunities at Akros Legal.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
