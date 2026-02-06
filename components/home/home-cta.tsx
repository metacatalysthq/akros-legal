"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export function HomeCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image src="/modern-glass-building-architecture-light-elegant-m.jpg" alt="Modern Architecture" fill className="object-cover" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Get Started
              <span className="w-8 h-0.5 bg-gold rounded-full" />
            </span>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Discuss Your Legal Needs?
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Our team of experienced legal professionals is ready to provide strategic counsel and vigorous
              representation for your legal matters.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-dark hover:to-gold shadow-lg hover:shadow-xl transition-all duration-300 group text-base"
              >
                <Link href="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 border-2 border-gold/30 text-foreground hover:bg-gold/5 hover:border-gold/50 bg-white/80 backdrop-blur-sm transition-all duration-300 text-base"
              >
                <Link href="/expertise">Explore Our Services</Link>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Contact Info */}
          <ScrollAnimation delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="tel:8588061334"
                className="group flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <span className="font-medium">8588061334</span>
              </a>

              <div className="hidden sm:block w-px h-8 bg-border" />

              <a
                href="mailto:akroslegal@gmail.com"
                className="group flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <span className="font-medium">akroslegal@gmail.com</span>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
