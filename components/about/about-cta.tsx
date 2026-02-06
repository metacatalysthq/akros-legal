"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export function AboutCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image src="/modern-glass-building-architecture-light-elegant-m.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <ScrollAnimation>
          <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            <span className="w-8 h-0.5 bg-gold rounded-full" />
            Get Started
            <span className="w-8 h-0.5 bg-gold rounded-full" />
          </span>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Partner with Legal Excellence
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re facing complex litigation, need strategic corporate advice, or require expert
            representation, our team is ready to help.
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
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 border-2 border-gold/30 text-foreground hover:bg-gold/5 hover:border-gold/50 bg-white/80 backdrop-blur-sm transition-all duration-300 text-base"
            >
              <Link href="/expertise">View Our Services</Link>
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
    </section>
  )
}
