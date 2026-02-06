"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Parallax */}
      <div ref={heroRef} className="absolute inset-0 -z-20">
        {backgroundImage ? (
          <Image src={backgroundImage || "/placeholder.svg"} alt="" fill className="object-cover" priority />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-ivory via-secondary to-stone/30" />
        )}
      </div>

      {/* Gradient Overlay - Light elegant */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background -z-10" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <h1
          className={cn(
            "font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight",
            "opacity-0 translate-y-4",
            isLoaded && "animate-fade-in-up",
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto",
              "opacity-0 translate-y-4",
              isLoaded && "animate-fade-in-up animation-delay-200",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative Line */}
      <div
        className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full",
          "w-0",
          isLoaded && "animate-draw-line w-32",
        )}
      />
    </section>
  )
}
