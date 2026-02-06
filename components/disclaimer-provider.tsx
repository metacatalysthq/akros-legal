"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { DisclaimerModal } from "./disclaimer-modal"

interface DisclaimerContextType {
  hasAgreed: boolean
  setHasAgreed: (value: boolean) => void
}

const DisclaimerContext = createContext<DisclaimerContextType | undefined>(undefined)

export function useDisclaimer() {
  const context = useContext(DisclaimerContext)
  if (!context) {
    throw new Error("useDisclaimer must be used within a DisclaimerProvider")
  }
  return context
}

export function DisclaimerProvider({ children }: { children: ReactNode }) {
  const [hasAgreed, setHasAgreed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has already agreed (session storage for per-session basis)
    const agreed = sessionStorage.getItem("akros-disclaimer-agreed")
    if (agreed === "true") {
      setHasAgreed(true)
    }
    setIsLoading(false)
  }, [])

  const handleAgree = (value: boolean) => {
    setHasAgreed(value)
    if (value) {
      sessionStorage.setItem("akros-disclaimer-agreed", "true")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <DisclaimerContext.Provider value={{ hasAgreed, setHasAgreed: handleAgree }}>
      {!hasAgreed && <DisclaimerModal onAgree={() => handleAgree(true)} />}
      <div className={hasAgreed ? "" : "pointer-events-none blur-sm"}>{children}</div>
    </DisclaimerContext.Provider>
  )
}
