"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
  variant?: "line" | "ornament" | "dots"
}

export function SectionDivider({ className, variant = "line" }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  if (variant === "ornament") {
    return (
      <div ref={ref} className={cn("flex items-center justify-center gap-4 py-8", className)}>
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50 [.animate_&]:animate-draw-line" />
        <div className="w-2 h-2 rotate-45 border border-gold/50 [.animate_&]:animate-scale-in" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50 [.animate_&]:animate-draw-line" />
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div ref={ref} className={cn("flex items-center justify-center gap-2 py-8", className)}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn("w-1.5 h-1.5 rounded-full bg-gold/40 [.animate_&]:animate-scale-in")}
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    )
  }

  return (
    <div ref={ref} className={cn("py-8", className)}>
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent [.animate_&]:animate-draw-line" />
    </div>
  )
}
