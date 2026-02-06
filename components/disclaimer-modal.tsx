"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Scale } from "lucide-react"
import { cn } from "@/lib/utils"

interface DisclaimerModalProps {
  onAgree: () => void
}

export function DisclaimerModal({ onAgree }: DisclaimerModalProps) {
  const [isChecked, setIsChecked] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleAgree = () => {
    setIsClosing(true)
    setTimeout(onAgree, 400)
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8",
        isClosing ? "animate-fade-out" : "animate-fade-in",
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      {/* Base blurred background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone/40 via-ivory/60 to-warm-white/40 backdrop-blur-md opacity-5" />

      {/* Animated + pattern overlay with 10% opacity and water flow animation */}
      <div
        className="absolute inset-0 pointer-events-none animate-drift"
      />

      {/* Modal Card */}
      <div
        className={cn(
          "relative w-full max-w-2xl bg-card rounded-2xl shadow-2xl overflow-hidden",
          "border border-border/50",
          isClosing ? "animate-scale-out" : "animate-scale-in",
        )}
      >
        {/* Decorative top gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark" />

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-border/50 bg-gradient-to-b from-ivory/50 to-transparent">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-gold-light/20 to-gold/10 border border-gold/20">
              <Scale className="h-7 w-7 text-gold" />
            </div>
            <div>
              <h1
                id="disclaimer-title"
                className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight"
              >
                Disclaimer
              </h1>
              <p className="text-muted-foreground text-sm mt-1">Please read and acknowledge before proceeding</p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="px-8 py-6 max-h-[45vh] overflow-y-auto">
          <div className="space-y-5 text-foreground/85 text-[15px] leading-relaxed">
            <p>
              Akros Legal is a new-age Indian law firm that emphasizes clarity, reliability, efficiency, and a
              technology-forward approach. The firm provides legal representation and advisory services across a
              range of disputes, regulatory, and contentious matters. Its practice is driven by a structured and
              analytical approach to legal problem-solving, with a strong focus on preparation, strategy, and
              clarity of advice.
            </p>

            <p>
              In accordance with the rules prescribed by the Bar Council of India, advocates and law firms are not
              permitted to advertise or solicit work. This website is maintained by Akros Legal solely for the
              purpose of providing general information about the firm and its professional activities. Nothing
              contained herein should be construed as an advertisement, solicitation, or invitation to offer legal
              services.
            </p>
            
            <p>
              This website is accessed voluntarily by users seeking general information about the firm. For any
              further or specific information regarding Akros Legal, its practice, or its policies, you may contact
              the firm directly at akroslegal@gmail.com.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gradient-to-t from-ivory/50 to-transparent border-t border-border/50">
          <div className="flex items-start gap-3 mb-5">
            <Checkbox
              id="disclaimer-checkbox"
              checked={isChecked}
              onCheckedChange={(checked) => setIsChecked(checked === true)}
              className="mt-0.5 h-5 w-5 rounded border-2 border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:border-gold data-[state=checked]:text-white transition-all duration-200"
            />
            <label
              htmlFor="disclaimer-checkbox"
              className="text-sm text-foreground cursor-pointer select-none leading-relaxed"
            >
              By proceeding further, the user acknowledges having read and understood this disclaimer.
            </label>
          </div>

          <Button
            onClick={handleAgree}
            disabled={!isChecked}
            className={cn(
              "w-full h-12 text-base font-semibold rounded-xl transition-all duration-300",
              "bg-gradient-to-r from-gold to-gold-dark text-white",
              "hover:from-gold-dark hover:to-gold shadow-lg hover:shadow-xl",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-lg",
              "disabled:from-muted disabled:to-muted disabled:text-muted-foreground",
            )}
            size="lg"
          >
            I AGREE & PROCEED
          </Button>
        </div>
      </div>
    </div>
  )
}
