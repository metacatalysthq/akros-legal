"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const practiceAreas = [
  { name: "Civil Litigation & Recovery", slug: "civil-litigation-recovery" },
  { name: "White-Collar Crime & Criminal Defense", slug: "white-collar-crime-criminal-defense" },
  { name: "Agreements & Corporate Governance", slug: "agreements-corporate-governance" },
  { name: "Bankruptcy & Insolvency", slug: "bankruptcy-insolvency" },
  { name: "Real Estate & Property Law", slug: "real-estate-property-law" },
  { name: "Dispute Resolution - Litigation, Arbitration & ADR", slug: "dispute-resolution" },
  { name: "Intellectual Property & Technology", slug: "intellectual-property-technology" },
  { name: "Employment, Labour & Industrial Relations", slug: "employment-labour-industrial-relations" },
  { name: "Tax & Regulatory Compliance", slug: "tax-regulatory-compliance" },
  { name: "Insurance & Risk Management", slug: "insurance-risk-management" },
  { name: "Environmental & Infrastructure Law", slug: "environmental-infrastructure-law" },
  { name: "Matrimonial & Family Law", slug: "matrimonial-family-law" },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Career", href: "/career" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileExpertiseOpen, setIsMobileExpertiseOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsMobileExpertiseOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        isScrolled ? "bg-card/95 backdrop-blur-lg shadow-sm border-b border-border/50" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Akros Legal Logo"
              width={160}
              height={70}
              className="h-14 lg:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors rounded-md group",
                pathname === "/" ? "text-gold" : "text-foreground/70 hover:text-foreground",
              )}
            >
              Home
              <span
                className={cn(
                  "absolute bottom-0 left-4 right-4 h-0.5 bg-gold rounded-full transition-transform duration-300 origin-left",
                  pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                )}
              />
            </Link>

            {/* Expertise Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md group",
                    pathname.startsWith("/expertise") ? "text-gold" : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  Expertise
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  <span
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-0.5 bg-gold rounded-full transition-transform duration-300 origin-left",
                      pathname.startsWith("/expertise") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-80 bg-card/98 backdrop-blur-xl border-border/50 shadow-xl rounded-xl p-2 animate-scale-in"
                sideOffset={8}
              >
                <DropdownMenuItem asChild>
                  <Link href="/expertise" className="font-medium text-gold rounded-lg px-3 py-2.5">
                    All Practice Areas
                  </Link>
                </DropdownMenuItem>
                <div className="h-px bg-border/50 my-2" />
                <div className="max-h-[400px] overflow-y-auto">
                  {practiceAreas.map((area) => (
                    <DropdownMenuItem key={area.slug} asChild>
                      <Link
                        href={`/expertise/${area.slug}`}
                        className="text-foreground/80 hover:text-foreground hover:bg-gold/5 rounded-lg px-3 py-2.5 transition-colors"
                      >
                        {area.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-md group",
                  pathname === link.href ? "text-gold" : "text-foreground/70 hover:text-foreground",
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-4 right-4 h-0.5 bg-gold rounded-full transition-transform duration-300 origin-left",
                    pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:bg-gold/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={cn(
                  "absolute inset-0 h-6 w-6 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 h-6 w-6 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90",
                )}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bg-card/98 backdrop-blur-xl border-b border-border/50 transition-all duration-500 overflow-hidden",
          isMobileMenuOpen ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="px-4 py-6 space-y-1 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <Link
            href="/"
            className={cn(
              "block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300",
              pathname === "/" ? "text-gold bg-gold/10" : "text-foreground/80 hover:text-foreground hover:bg-muted",
            )}
          >
            Home
          </Link>

          {/* Mobile Expertise Accordion */}
          <div>
            <button
              onClick={() => setIsMobileExpertiseOpen(!isMobileExpertiseOpen)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-300",
                pathname.startsWith("/expertise")
                  ? "text-gold bg-gold/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted",
              )}
            >
              Expertise
              <ChevronDown
                className={cn("h-5 w-5 transition-transform duration-300", isMobileExpertiseOpen && "rotate-180")}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-500",
                isMobileExpertiseOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <div className="pl-4 py-2 space-y-1">
                <Link
                  href="/expertise"
                  className="block px-4 py-2.5 text-sm font-medium text-gold rounded-lg hover:bg-gold/5"
                >
                  All Practice Areas
                </Link>
                {practiceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/expertise/${area.slug}`}
                    className="block px-4 py-2.5 text-sm text-foreground/80 rounded-lg hover:text-foreground hover:bg-muted"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300",
                pathname === link.href
                  ? "text-gold bg-gold/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
