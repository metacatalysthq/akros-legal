"use client"

import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Shield,
  Building2,
  Landmark,
  Home,
  Scale,
  Lightbulb,
  Users,
  Calculator,
  LucideShield as FileShield,
  TreePine,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const practiceAreas = [
  {
    icon: Briefcase,
    name: "Civil Litigation & Recovery",
    slug: "civil-litigation-recovery",
    description: "Commercial and personal dispute resolution, recovery proceedings, and execution.",
  },
  {
    icon: Shield,
    name: "White-Collar Crime & Criminal Defense",
    slug: "white-collar-crime-criminal-defense",
    description: "Defense in complex financial crimes, FIR, bail, trial, and appeals.",
  },
  {
    icon: Building2,
    name: "Agreements & Corporate Governance",
    slug: "agreements-corporate-governance",
    description: "JV agreements, SHA, SLA, outside GC, and risk-mitigation drafting.",
  },
  {
    icon: Landmark,
    name: "Bankruptcy & Insolvency",
    slug: "bankruptcy-insolvency",
    description: "NCLT/NCLAT representation, restructuring, and IBC matters.",
  },
  {
    icon: Home,
    name: "Real Estate & Property Law",
    slug: "real-estate-property-law",
    description: "Title due diligence, RERA compliance, and land acquisition.",
  },
  {
    icon: Scale,
    name: "Dispute Resolution",
    slug: "dispute-resolution",
    description: "Domestic & international arbitration, mediation, and conciliation.",
  },
  {
    icon: Lightbulb,
    name: "Intellectual Property & Technology",
    slug: "intellectual-property-technology",
    description: "Trademark, copyright, patent registration and litigation.",
  },
  {
    icon: Users,
    name: "Employment & Labour Relations",
    slug: "employment-labour-industrial-relations",
    description: "Termination disputes, compliance, and industrial litigation.",
  },
  {
    icon: Calculator,
    name: "Tax & Regulatory Compliance",
    slug: "tax-regulatory-compliance",
    description: "Tax advisory, tax litigation, and compliance matters.",
  },
  {
    icon: FileShield,
    name: "Insurance & Risk Management",
    slug: "insurance-risk-management",
    description: "Policy disputes, claim enforcement, and technical interpretation.",
  },
  {
    icon: TreePine,
    name: "Environmental & Infrastructure Law",
    slug: "environmental-infrastructure-law",
    description: "Environmental clearances, land acquisition, and infrastructure contracts.",
  },
  {
    icon: Heart,
    name: "Matrimonial & Family Law",
    slug: "matrimonial-family-law",
    description: "Divorce, maintenance, custody, and domestic violence matters.",
  },
]

export function HomePracticeAreas() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-ivory/30 relative">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Practice Areas
              <span className="w-8 h-0.5 bg-gold rounded-full" />
            </span>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Sectoral Insight Across Diverse Industries
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Leveraging experience across multiple industry and services sectors, the firm advises clients on applicable legal and regulatory frameworks and provides strategic legal advisory across the following areas :-
            </p>
          </ScrollAnimation>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {practiceAreas.map((area, index) => (
            <ScrollAnimation key={area.slug} delay={index * 50}>
              <Link
                href={`/expertise/${area.slug}`}
                className="group relative bg-card border border-border/50 rounded-xl p-6 hover:border-gold/30 transition-all duration-500 card-hover h-full block overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 w-fit mb-4 group-hover:from-gold/20 group-hover:to-gold/10 transition-all duration-300">
                    <area.icon className="h-6 w-6 text-gold" />
                  </div>

                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">
                    {area.name}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">{area.description}</p>

                  <div className="flex items-center text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        {/* Corporate and Commercial Outlook */}
         <div className="max-w-4xl mx-auto mb-16">
            <ScrollAnimation>
                <div className="bg-card border border-border/50 rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                     <div className="relative">
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">Corporate and Commercial Outlook</h3>
                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                            A focused approach to corporate and commercial advisory, supporting clients through transactions, governance, and regulatory complexity with clarity and strategic insight.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-gold rounded-full"/>
                                    Corporate Restructuring
                                </h4>
                                <ul className="space-y-3">
                                    {["Contract Negotiation and Drafting", "Mergers and Acquisitions", "Compliance and Risk Management"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                                     <span className="w-1.5 h-6 bg-gold rounded-full opacity-0"/> {/* Spacer for alignment */}
                                </h4>
                                <ul className="space-y-3">
                                    {["Venture Capital and Private Investment", "Intellectual Property Strategy", "Corporate and Commercial Dispute Resolution"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                     </div>
                </div>
            </ScrollAnimation>
         </div>

         {/* Values - Integrity & Advocacy */}
         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <ScrollAnimation delay={100}>
                <div className="bg-ivory/30 border border-border/30 rounded-xl p-8 h-full">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">Unwavering Integrity</h3>
                    <p className="text-muted-foreground leading-relaxed">Our commitment to transparency, honesty, and principled representation forms the bedrock of our practice. We believe that ethical conduct and legal excellence go hand in hand.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
                <div className="bg-ivory/30 border border-border/30 rounded-xl p-8 h-full">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">Result-Oriented Advocacy</h3>
                    <p className="text-muted-foreground leading-relaxed">While we never compromise on ethics, we remain firmly focused on achieving the best possible results for our clients. Our advocacy is purposeful, persuasive, and designed to deliver tangible outcomes.</p>
                </div>
            </ScrollAnimation>
         </div>

        {/* CTA */}
        <ScrollAnimation className="text-center">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-dark hover:to-gold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/expertise">
              View All Practice Areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}
