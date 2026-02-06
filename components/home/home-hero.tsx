"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Scale, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HomeHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-20">
      {/* Background Image with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 -z-20">
        <Image src="/elegant-modern-courthouse-interior-light-marble-co.jpg" alt="Law office background" fill className="object-cover" priority />
      </div>

      {/* Gradient Overlays - Light elegant */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 -z-10" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 bg-gold/5 border border-gold/20 rounded-full mb-8",
                "opacity-0 translate-y-4",
                isLoaded && "animate-fade-in-up",
              )}
            >
              <Scale className="h-4 w-4 text-gold" />
              <span className="text-sm text-gold font-medium">Akros Legal Law Offices India</span>
            </div>

            {/* Heading */}
            <h1
              className={cn(
                "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6",
                "opacity-0 translate-y-4",
                isLoaded && "animate-fade-in-up animation-delay-100",
              )}
            >
              Elevating the Legal Landscape with <span className="text-gold-gradient">Strategic Precision</span>
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-medium text-gold/90">
                Civil | Criminal | Corporate & Commercial Litigation | Advisory | Solutions
            </div>
            
            <p
              className={cn(
                "text-lg md:text-xl text-muted-foreground leading-relaxed mb-10",
                "opacity-0 translate-y-4",
                isLoaded && "animate-fade-in-up animation-delay-200",
              )}
            >
              Akros Legal is a contemporary Indian law firm redefines clarity, strategy, and technology-enabled legal practice. Our practice is defined by structured analysis, focused preparation, and practical legal solutions.
            </p>

            {/* CTA Buttons */}
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4",
                "opacity-0 translate-y-4",
                isLoaded && "animate-fade-in-up animation-delay-300",
              )}
            >
              <Button
                asChild
                size="lg"
                className="h-12 px-8 bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-dark hover:to-gold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/expertise">
                  Explore Our Expertise
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 border-2 border-gold/30 text-foreground hover:bg-gold/5 hover:border-gold/50 bg-white/50 backdrop-blur-sm transition-all duration-300"
              >
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </div>

            {/* Stats preview */}
            <div
              className={cn(
                "grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50",
                "opacity-0 translate-y-4",
                isLoaded && "animate-fade-in-up animation-delay-400",
              )}
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Cases Handled" },
                { value: "12", label: "Practice Areas" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-serif text-2xl md:text-3xl font-bold text-gold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Decorative Image Card */}
          <div
            className={cn(
              "hidden lg:block relative",
              "opacity-0 translate-x-8",
              isLoaded && "animate-slide-in-right animation-delay-300",
            )}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/scales-of-justice-golden-elegant-marble-background.jpg"
                  alt="Scales of Justice"
                  width={500}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border/50 animate-float">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gold/10">
                    <Scale className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Trusted Excellence</div>
                    <div className="text-sm text-muted-foreground">Since Establishment</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/20 rounded-full" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-gold/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2",
          "opacity-0",
          isLoaded && "animate-fade-in animation-delay-700",
        )}
      >
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors group"
        >
          <span className="text-xs tracking-wider uppercase">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2 group-hover:border-gold transition-colors">
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  )
}
