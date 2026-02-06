import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { AboutIntro } from "@/components/about/about-intro"
import { AboutValues } from "@/components/about/about-values"
import { AboutTeam } from "@/components/about/about-team"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Us | Akros Legal - Leading Legal Advisors",
  description:
    "Learn about Akros Legal Law Offices India - our philosophy, our team, and our commitment to peak professionalism and strategic precision in legal services.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About Akros Legal"
          subtitle="Leading Legal Advisors & Litigation Experts"
          backgroundQuery="modern law office interior professional dark elegant"
        />
        <AboutIntro />
        <AboutValues />
        <AboutTeam />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
