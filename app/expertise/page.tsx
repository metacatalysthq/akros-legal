import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ArrowRight } from "lucide-react"
import {
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

export const metadata: Metadata = {
  title: "Practice Areas | Akros Legal - Expert Legal Services",
  description:
    "Explore our 12 specialized practice areas. Akros Legal provides expert legal representation in civil litigation, criminal defense, corporate law, and more.",
}

const practiceAreas = [
  {
    icon: Briefcase,
    name: "Civil Litigation & Recovery",
    slug: "civil-litigation-recovery",
    description:
      "Comprehensive representation in commercial and personal disputes, recovery proceedings, summary suits, and execution matters.",
  },
  {
    icon: Shield,
    name: "White-Collar Crime & Criminal Defense",
    slug: "white-collar-crime-criminal-defense",
    description:
      "Strategic defense in complex financial crimes, from FIR stage through bail, trial, and appellate proceedings.",
  },
  {
    icon: Building2,
    name: "Agreements & Corporate Governance",
    slug: "agreements-corporate-governance",
    description:
      "Expert drafting and negotiation of JV agreements, SHA, SLA, and comprehensive corporate governance advisory.",
  },
  {
    icon: Landmark,
    name: "Bankruptcy & Insolvency",
    slug: "bankruptcy-insolvency",
    description: "Specialized representation before NCLT/NCLAT, corporate restructuring, and IBC proceedings.",
  },
  {
    icon: Home,
    name: "Real Estate & Property Law",
    slug: "real-estate-property-law",
    description:
      "Complete property law services including title due diligence, RERA compliance, and land acquisition matters.",
  },
  {
    icon: Scale,
    name: "Dispute Resolution - Litigation, Arbitration & ADR",
    slug: "dispute-resolution",
    description:
      "Domestic and international arbitration, mediation, conciliation, and comprehensive dispute resolution services.",
  },
  {
    icon: Lightbulb,
    name: "Intellectual Property & Technology",
    slug: "intellectual-property-technology",
    description:
      "Protection and enforcement of IP rights including trademark, copyright, and patent registration and litigation.",
  },
  {
    icon: Users,
    name: "Employment, Labour & Industrial Relations",
    slug: "employment-labour-industrial-relations",
    description: "Expert handling of termination disputes, statutory compliance, and industrial relations litigation.",
  },
  {
    icon: Calculator,
    name: "Tax & Regulatory Compliance",
    slug: "tax-regulatory-compliance",
    description:
      "Strategic tax advisory, representation in tax litigation, and comprehensive regulatory compliance services.",
  },
  {
    icon: FileShield,
    name: "Insurance & Risk Management",
    slug: "insurance-risk-management",
    description: "Resolution of policy disputes, claim enforcement, and technical policy interpretation matters.",
  },
  {
    icon: TreePine,
    name: "Environmental & Infrastructure Law",
    slug: "environmental-infrastructure-law",
    description: "Environmental clearances, land acquisition, infrastructure contracts, and regulatory compliance.",
  },
  {
    icon: Heart,
    name: "Matrimonial & Family Law",
    slug: "matrimonial-family-law",
    description:
      "Sensitive and discreet representation in divorce, maintenance, custody, and domestic violence matters.",
  },
]

export default function ExpertisePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Practice Areas"
          subtitle="Delivering clarity and confidence in a regulated world"
          backgroundQuery="law books scales justice library dark professional"
        />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Our comprehensive legal services span across twelve specialized practice areas, ensuring expert
                representation for all your legal needs. Each practice area is led by experienced advocates with deep
                domain expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceAreas.map((area, index) => (
                <Link
                  key={area.slug}
                  href={`/expertise/${area.slug}`}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <area.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{area.description}</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
