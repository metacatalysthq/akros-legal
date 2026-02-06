"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react"

const practiceAreas = [
  { name: "Civil Litigation", slug: "civil-litigation-recovery" },
  { name: "Criminal Defense", slug: "white-collar-crime-criminal-defense" },
  { name: "Corporate Governance", slug: "agreements-corporate-governance" },
  { name: "Bankruptcy & Insolvency", slug: "bankruptcy-insolvency" },
  { name: "Real Estate Law", slug: "real-estate-property-law" },
  { name: "Dispute Resolution", slug: "dispute-resolution" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Career", href: "/career" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-ivory to-secondary border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Akros Legal Logo"
                width={160}
                height={70}
                className="h-14 lg:h-16 w-auto"
                priority
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Navigating Complexity with Strategic Precision. Leading legal advisors providing expert representation
              across India.
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground bg-card rounded-lg px-4 py-3 border border-border/50">
              <Clock className="h-4 w-4 text-gold flex-shrink-0" />
              <span>Mon - Sat | 10:00 AM - 7:00 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <span className="text-muted-foreground text-sm leading-relaxed">
                  A-23, Fourth Floor, Sector 16, Gautam Buddha Nagar, Noida
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-4 w-4 text-gold" />
                </div>
                <div className="text-muted-foreground text-sm">
                  <a href="tel:8588061334" className="hover:text-gold transition-colors">
                    8588061334
                  </a>
                  {", "}
                  <a href="tel:9875596089" className="hover:text-gold transition-colors">
                    9875596089
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Mail className="h-4 w-4 text-gold" />
                </div>
                <a
                  href="mailto:akroslegal@gmail.com"
                  className="text-muted-foreground text-sm hover:text-gold transition-colors"
                >
                  akroslegal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© Copyright Akros Legal 2025. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="group flex items-center gap-1 text-muted-foreground text-sm hover:text-gold transition-colors"
            >
              Terms & Conditions
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
            </Link>
            <Link
              href="/privacy"
              className="group flex items-center gap-1 text-muted-foreground text-sm hover:text-gold transition-colors"
            >
              Privacy Policy
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
