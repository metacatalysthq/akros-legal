import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { practiceAreasData, type PracticeAreaSlug } from "@/lib/practice-areas-data"
import { ArrowRight, CheckCircle2, Briefcase, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(practiceAreasData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = practiceAreasData[slug as PracticeAreaSlug]

  if (!data) {
    return { title: "Practice Area Not Found | Akros Legal" }
  }

  return {
    title: `${data.title} | Akros Legal - Expert Legal Services`,
    description: data.tagline + ". " + data.description.substring(0, 150) + "...",
  }
}

export default async function PracticeAreaPage({ params }: PageProps) {
  const { slug } = await params
  const data = practiceAreasData[slug as PracticeAreaSlug]

  if (!data) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
          <div
            className="absolute inset-0 -z-20"
            style={{
              backgroundImage: `url(/placeholder.svg?height=800&width=1600&query=${encodeURIComponent(data.heroImage)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-background/85 -z-10" />

          <div className="max-w-4xl mx-auto px-4 text-center py-16">
            <Link
              href="/expertise"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              All Practice Areas
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              {data.tagline}
            </p>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary" />
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Description */}
              <div className="lg:col-span-2">
                <div className="prose prose-invert max-w-none">
                  {data.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-foreground/90 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Case Examples */}
                <div className="mt-12 bg-secondary/30 rounded-lg p-8">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Representative Matters</h2>
                  <ul className="space-y-4">
                    {data.caseExamples.map((example, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{example}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-6 italic">
                    * Case details anonymized for client confidentiality
                  </p>
                </div>
              </div>

              {/* Right Column - Services & CTA */}
              <div className="lg:col-span-1">
                {/* Services */}
                <div className="bg-card border border-border rounded-lg p-6 mb-8">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-4">Our Services</h2>
                  <ul className="space-y-3">
                    {data.services.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground/90 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Request a Consultation</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Discuss your {data.title.toLowerCase()} matter with our expert legal team.
                  </p>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Practice Areas */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
              Explore Other Practice Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(practiceAreasData)
                .filter(([key]) => key !== slug)
                .slice(0, 6)
                .map(([key, area]) => (
                  <Link
                    key={key}
                    href={`/expertise/${key}`}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {area.title}
                  </Link>
                ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/expertise" className="text-primary text-sm font-medium hover:underline">
                View All Practice Areas
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
