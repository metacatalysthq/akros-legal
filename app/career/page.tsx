import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { CareerIntro } from "@/components/career/career-intro"
import { CareerOpenings } from "@/components/career/career-openings"
import { CareerApplicationForm } from "@/components/career/career-application-form"

export const metadata: Metadata = {
  title: "Careers | Join Akros Legal - Legal Career Opportunities",
  description:
    "Join Akros Legal Law Offices India. We are always looking for the next generation of legal minds. Explore career opportunities and internship programs.",
}

export default function CareerPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Work With Akros Legal"
          subtitle="We are always looking for the next generation of legal minds"
          backgroundQuery="law firm office team collaboration professional dark"
        />
        <CareerIntro />
        <CareerOpenings />
        <CareerApplicationForm />
      </main>
      <Footer />
    </>
  )
}
