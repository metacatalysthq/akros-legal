"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ArrowUp, Printer } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function PrivacyClient() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Privacy Policy" subtitle="How we protect and use your information" />

        <section className="py-20 bg-gradient-to-b from-background via-ivory/30 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden">
                {/* Paper texture header */}
                <div className="bg-gradient-to-r from-ivory via-secondary to-ivory px-8 py-6 border-b border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-serif text-xl font-bold text-foreground">Privacy Policy</h2>
                      <p className="text-sm text-muted-foreground mt-1">Last updated: January 2025</p>
                    </div>
                    <button
                      onClick={() => window.print()}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold/10 text-gold hover:bg-gold/20 transition-colors text-sm font-medium no-print"
                    >
                      <Printer className="h-4 w-4" />
                      Print
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/85 leading-relaxed mb-8 text-lg">
                      Akros Legal (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;, or &quot;the Firm&quot;) values and
                      respects the privacy of our lawyers, staff, clients, consultants, service providers, and website
                      visitors. The protection and safeguarding of all personal information from unauthorized access,
                      modification, use, deletion, damage, disclosure, or impairment is of paramount importance to us.
                      This Privacy Policy (&quot;Policy&quot;) outlines the personally identifiable or personal
                      information that may be collected, how such information is used, and your choices regarding such
                      use.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      1. Consent
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      By submitting your personal information (except Sensitive Personal Data or Information, as defined
                      herein) to Akros Legal—including information received during the course of your retainership,
                      employment, business dealings, or communication with us—you are deemed to have given consent and
                      permission to the Firm for the use, storage, retention, processing, and sharing of your personal
                      information as set out in this Policy. By providing your personal information, including Sensitive
                      Personal Data or Information, you expressly consent to the terms of this Policy. Accessing our
                      website shall also be deemed as consent to this Policy.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      2. Personal Information: Why We Collect It and How We Use It
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      We may require your personal information, including Sensitive Personal Data or Information, to
                      perform our obligations, duties, and exercise our rights, both within and outside India, in the
                      following manner:
                    </p>
                    <ul className="text-foreground/85 leading-relaxed mb-6 space-y-2">
                      {[
                        "To administer or otherwise carry out our obligations under any agreement or contract with you;",
                        "To perform contractual obligations and render legal services;",
                        "To promote our Firm, services, aims, and objectives;",
                        "To seek feedback or contact you regarding the Firm's activities;",
                        "To process enquiries or applications submitted by you;",
                        "To process and respond to requests, improve our operations, and communicate about our activities, services, and publications;",
                        "To allow you to subscribe to our newsletters, alerts, or updates;",
                        "To share your information, where necessary, with our members, associates, partners, employees, and data processors;",
                        "To meet statutory or regulatory obligations;",
                        "To collect, use, and disclose personal information in connection with security-related or law enforcement investigations;",
                        "To use information for historical, statistical, or research purposes.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      3. Personal Information: Its Type
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      &quot;Personally Identifiable Information&quot; or &quot;Personal Information&quot; refers to any
                      information that can be used to identify you, such as:
                    </p>
                    <ul className="text-foreground/85 leading-relaxed mb-6 space-y-2">
                      {[
                        "Full name, address, email address, mobile number, telephone number;",
                        "Copies of passport, educational and professional qualifications;",
                        "Bank account details for processing payments or reimbursements;",
                        "PAN number, Aadhaar number;",
                        "Photographs, emergency contact information, family details;",
                        "Blood group, health records, and other similar identifiers.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      4. Sensitive Personal Data or Information
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      The following shall be treated as Sensitive Personal Data or Information:
                    </p>
                    <ul className="text-foreground/85 leading-relaxed mb-6 space-y-2">
                      {[
                        "Your passwords;",
                        "Financial information such as bank account, credit card, debit card, or other payment instrument details;",
                        "Physical, physiological, and mental health condition;",
                        "Sexual orientation;",
                        "Biometric information;",
                        "Any detail relating to the above provided to the Firm for providing services; and",
                        "Any such information received by the Firm for processing or storage under a lawful contract or otherwise.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      5. Exceptions to Sensitive Personal Data or Information
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      The following shall not be regarded as Sensitive Personal Data or Information:
                    </p>
                    <ul className="text-foreground/85 leading-relaxed mb-6 space-y-2">
                      {[
                        "Information freely available or accessible in the public domain;",
                        "Information disclosed under the Right to Information Act, 2005; or",
                        "Information furnished under any other law for the time being in force.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      6. Incidental Information
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      Akros Legal may collect information about individuals, associates, clients, or service providers
                      from publicly accessible resources, government authorities, or third parties. We shall not be
                      responsible for any personal information indirectly or incidentally procured through such sources.
                      However, such information may be retained for the purposes described in this Policy or as
                      permitted by law.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      7. Safeguarding Your Personal Information
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      We respect all information provided to us and take reasonable steps to protect it. We have
                      implemented technological and organizational policies to protect your privacy from unauthorized
                      access and improper use, and we review these measures periodically. We maintain physical,
                      electronic, and procedural safeguards to protect the confidentiality and security of personally
                      identifiable information. Please note that email communication is not encrypted and is not
                      considered a secure means of transmitting banking, credit card, or other sensitive personal
                      information.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      8. Disclosure of Your Information
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      Akros Legal may, in certain circumstances, disclose your personal information, including Sensitive
                      Personal Data or Information, when we have reason to believe it is necessary to identify, contact
                      you, or bring legal action to protect your rights, the Firm&apos;s rights, or the rights of
                      others. Disclosure may also occur when you request it or when required by law.
                    </p>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      We are not responsible for the privacy policies and practices of third-party websites, even if
                      accessed via links on our website.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      9. Your Rights
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      You may request access to your personal information held by us for review, correction, updation,
                      or amendment by submitting a written request via email to the Grievance Officer. Any such request
                      will be processed in accordance with the terms of this Policy and as feasible under applicable
                      law. A grievance redressal mechanism is established under this Policy. An opt-out/withdrawal
                      option is also available should you wish to withdraw your personal information from our databases,
                      subject to the terms herein.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      10. Grievance Redressal
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      For any queries, concerns, or grievances regarding this Policy or the handling of your personal
                      information, you may contact our Grievance Officer at:
                    </p>
                    <div className="bg-gradient-to-br from-ivory to-secondary/50 border border-border/50 rounded-xl p-5 mb-4">
                      <p className="text-foreground">
                        <strong>Name:</strong> Adv. Achint Kumar
                      </p>
                      <p className="text-foreground">
                        <strong>Email:</strong> akroslegal@gmail.com
                      </p>
                      <p className="text-foreground">
                        <strong>Address:</strong> A-23, Fourth Floor, Sector 16, Gautam Buddha Nagar, Noida
                      </p>
                    </div>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      We will endeavour to resolve any grievances promptly and in accordance with applicable law.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      11. Enforcement
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      This Privacy Policy is formulated in strict compliance with the Information Technology Act, 2000,
                      and the Information Technology (Reasonable Security Practices and Procedures and Sensitive
                      Personal Data or Information) Rules, 2011.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      12. Consequences of Refusal to Consent or Withdrawal of Consent
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      If you refuse to provide required personal information, including Sensitive Personal Data or
                      Information, or withdraw your consent at any time, Akros Legal reserves the sole discretion to:
                    </p>
                    <ul className="text-foreground/85 leading-relaxed mb-6 space-y-2">
                      {[
                        "Discontinue, refuse, or withdraw its services;",
                        "Cease performance of obligations under any agreement;",
                        "Terminate any contract with you; and",
                        "In the case of employees, associates, partners, or retainers, terminate or modify the terms of the employment or service contract.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      13. Policy Changes
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      This Policy supersedes all previous policies, agreements, and disclosures by Akros Legal
                      concerning information and privacy practices. We reserve the right to amend this Policy and to
                      apply changes to information previously collected, as permitted by law. In the event of material
                      changes, we will notify you by posting the updated Policy on our website.
                    </p>

                    <div className="mt-10 pt-6 border-t border-border/50">
                      <p className="text-muted-foreground text-sm">Last updated: January 2025</p>
                      <p className="text-muted-foreground text-sm mt-2">
                        For questions about our Terms of Use, please see our{" "}
                        <Link href="/terms" className="text-gold hover:underline font-medium">
                          Terms & Conditions
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back to Top */}
                <div className="px-8 py-6 bg-gradient-to-r from-ivory via-secondary to-ivory border-t border-border/50 no-print">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Questions?{" "}
                      <Link href="/contact" className="text-gold hover:underline">
                        Contact us
                      </Link>
                    </p>
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors text-sm font-medium"
                    >
                      <ArrowUp className="h-4 w-4" />
                      Back to Top
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
