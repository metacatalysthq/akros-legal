"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Target, Award, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SectionDivider } from "@/components/section-divider"

const features = [
  {
    icon: Shield,
    title: "Peak Professionalism",
    description: "Upholding the highest standards of legal practice and ethical conduct.",
  },
  {
    icon: Target,
    title: "Strategic Precision",
    description: "Every case approached with meticulous planning and tactical acumen.",
  },
  {
    icon: Award,
    title: "Unwavering Integrity",
    description: "Commitment to transparency, honesty, and principled representation.",
  },
  {
    icon: Scale,
    title: "Result-Oriented Advocacy",
    description: "Focused on achieving the best possible outcomes for our clients.",
  },
]

export function HomeAbout() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-ivory/50 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <ScrollAnimation direction="left" className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/elegant-law-library-books-warm-lighting-wooden-she.jpg"
                  alt="Law Library"
                  width={600}
                  height={500}
                  className="object-cover"
                />
              </div>

              {/* Accent Image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-background hidden md:block">
                <Image
                  src="/greek-columns-marble-classical-architecture.jpg"
                  alt="Classical Architecture"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Decorative line */}
              <div className="absolute top-8 -left-4 w-1 h-32 bg-gradient-to-b from-gold to-transparent rounded-full hidden lg:block" />
            </div>
          </ScrollAnimation>

          {/* Content Side */}
          <div>
            <ScrollAnimation>
              <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-4">
                <span className="w-8 h-0.5 bg-gold rounded-full" />
                About Akros Legal
              </span>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                AKROS: Apex Legal Strategists
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                AKROS, drawn from the Greek term for “summit,” embodies our legal practice rooted in thoroughness, accuracy, and thoughtful advocacy. This guiding principle shapes our risk evaluation, strategy formulation, and client representation in intricate legal challenges.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As legal landscapes shift, we deliver comprehensive services—from initial pre-litigation assessments to advocacy in the Supreme Court of India, High Courts, and specialized Tribunals. Our unwavering commitment centers on protecting client objectives via rigorous analysis, meticulous planning, and direct, results-driven representation.
              </p>
            </ScrollAnimation>

            {/* Firm Overview Section */}
            <ScrollAnimation delay={400}>
               <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">The Pinnacle of Legal Excellence</h2>
               <p className="text-muted-foreground leading-relaxed mb-4">
                  Led by dynamic first-generation advocates, we fuse fresh insights, agile mindsets, and relentless drive with time-honored ethics and legal mastery. Powered by AI analytics and data-driven foresight, we tackle India&apos;s evolving legal terrain—from fintech disputes to high-stakes litigation—with unmatched precision.
               </p>
               <p className="text-muted-foreground leading-relaxed mb-4">
                  We maintain firm versatility through our seasoned lawyers, trained to navigate complex legal challenges toward consistent, winning outcomes.
               </p>
               <p className="text-muted-foreground leading-relaxed mb-4">
                  We uphold the highest standards of legal practice, maintaining unwavering professionalism in every client interaction and court appearance. Our conduct reflects the dignity and seriousness that the legal profession demands.
               </p>
               <p className="text-muted-foreground leading-relaxed mb-8">
                  We evolve and integrate—harnessing next-gen AI, real-time insights, and bold tactics to thrive amid shifting legal frontiers. It is this approach that enables us to support our clients with clarity, consistency, and trusted legal guidance.
               </p>
            </ScrollAnimation>

            <ScrollAnimation delay={450}>
              <Button
                asChild
                className="h-12 px-6 bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-dark hover:to-gold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>

        <SectionDivider variant="ornament" className="my-20" />

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={index * 100}>
              <div className="group bg-card border border-border/50 rounded-xl p-6 hover:border-gold/30 hover:shadow-xl transition-all duration-500 card-hover h-full">
                <div className="p-3 rounded-xl bg-gold/10 w-fit mb-5 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
