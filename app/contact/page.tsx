import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Akros Legal - Get in Touch",
  description:
    "Contact Akros Legal Law Offices India. Reach out for legal consultations, inquiries, or to schedule an appointment with our expert legal team.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Get in Touch"
          subtitle="We're here to help with your legal needs"
          backgroundQuery="modern office reception professional dark elegant"
        />
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
