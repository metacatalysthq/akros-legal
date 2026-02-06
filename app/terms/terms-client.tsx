"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ArrowUp, Printer } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function TermsClient() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Terms & Conditions" subtitle="Terms of Use for Akros Legal Website" />

        <section className="py-20 bg-gradient-to-b from-background via-ivory/30 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden">
                {/* Paper texture header */}
                <div className="bg-gradient-to-r from-ivory via-secondary to-ivory px-8 py-6 border-b border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-serif text-xl font-bold text-foreground">Legal Document</h2>
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
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      1. Introduction & Acceptance of Terms
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      Welcome to the website of Akros Legal (&quot;the Firm&quot;, &quot;we&quot;, &quot;us&quot;, or
                      &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of
                      our website (&quot;the Website&quot;), including any content, functionality, and services offered
                      on or through the Website.
                    </p>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      By accessing or using the Website, you acknowledge that you have read, understood, and agree to be
                      legally bound by these Terms and our Privacy Policy, which is incorporated herein by reference. If
                      you do not agree to these Terms or the Privacy Policy, you must not access or use the Website.
                      Your continued use of the Website constitutes your ongoing acceptance of these Terms, as they may
                      be amended from time to time.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      2. Definitions
                    </h2>
                    <ul className="text-foreground/85 leading-relaxed mb-6 space-y-3">
                      <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                        <span>
                          <strong>&quot;Content&quot;</strong> refers to all text, graphics, user interfaces, visual
                          interfaces, photographs, trademarks, logos, sounds, music, artwork, downloadable documents,
                          and computer code, including but not limited to the design, structure, selection,
                          coordination, expression, and arrangement of such material on the Website.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                        <span>
                          <strong>&quot;User&quot;</strong> or <strong>&quot;You&quot;</strong> refers to any
                          individual, firm, company, or legal entity that accesses or uses the Website.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                        <span>
                          <strong>&quot;Services&quot;</strong> refers to the informational content provided on the
                          Website and any other interactive features or communications facilitated through the Website.
                        </span>
                      </li>
                    </ul>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      3. Nature of Website & No Attorney-Client Relationship
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      3.1. The Website and its Content are provided for general informational purposes only. The Content
                      does not constitute legal advice, legal opinion, or any form of professional advice. You should
                      not act or refrain from acting based on any information contained on this Website without first
                      seeking appropriate legal or other professional counsel.
                    </p>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      3.2. Your use of this Website, including sending an enquiry via email or a contact form,{" "}
                      <strong>does not create an attorney-client relationship</strong> between you and Akros Legal or
                      any of its lawyers. An attorney-client relationship can only be formed through a formal, written
                      engagement agreement signed by both the Firm and the client, after the Firm has conducted its
                      conflict checks and agreed to represent you.
                    </p>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      3.3. Any information you send to us via the Website or email before an attorney-client
                      relationship is formally established may not be confidential or privileged. Please do not send us
                      any confidential, proprietary, or sensitive information through this Website or via email until
                      you have spoken directly with one of our lawyers and received authorization to send such
                      information.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      4. Authorized Use & User Responsibilities
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      4.1. License: Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and
                      revocable license to access and use the Website for your personal, non-commercial, and
                      informational use.
                    </p>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      4.2. You agree to use the Website only for lawful purposes and in accordance with these Terms and
                      all applicable local, national, and international laws and regulations, including but not limited
                      to the Information Technology Act, 2000 and rules thereunder.
                    </p>
                    <p className="text-foreground/85 leading-relaxed mb-2">4.3. You agree not to:</p>
                    <ul className="text-foreground/85 leading-relaxed mb-6 space-y-2">
                      {[
                        "Use the Website in any way that violates any applicable law or regulation.",
                        "Use the Website for the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.",
                        "Send, knowingly receive, upload, download, use, or re-use any material that does not comply with these Terms.",
                        'Transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.',
                        "Impersonate or attempt to impersonate the Firm, a Firm lawyer, another user, or any other person or entity.",
                        "Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website.",
                        "Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose.",
                        "Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.",
                        "Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website.",
                        "Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      5. Intellectual Property Rights
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      5.1. The Website and its entire Content, features, and functionality are owned by Akros Legal, its
                      licensors, or other providers of such material and are protected by Indian and international
                      copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights
                      laws.
                    </p>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      5.2. The name &quot;Akros Legal&quot;, our logo, and all related names, logos, product and service
                      names, designs, and slogans are trademarks of the Firm or its affiliates or licensors. You must
                      not use such marks without the prior written permission of the Firm.
                    </p>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      5.3. You may print or download one copy of a reasonable number of pages of the Website for your
                      own personal, non-commercial use and not for further reproduction, publication, or distribution.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      6. Disclaimer of Warranties & Limitation of Liability
                    </h2>
                    <div className="bg-ivory/50 border border-border/50 rounded-xl p-5 mb-4">
                      <p className="text-foreground/85 leading-relaxed text-sm uppercase">
                        6.1. YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE
                        WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED
                        THROUGH THE WEBSITE ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS,
                        WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                      </p>
                    </div>
                    <div className="bg-ivory/50 border border-border/50 rounded-xl p-5 mb-4">
                      <p className="text-foreground/85 leading-relaxed text-sm uppercase">
                        6.2. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL AKROS LEGAL, ITS
                        PARTNERS, ASSOCIATES, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER
                        ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE
                        WEBSITE.
                      </p>
                    </div>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      6.3. The foregoing does not affect any liability which cannot be excluded or limited under
                      applicable law, including the Indian Contract Act, 1872.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      7. Third-Party Links & Content
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      The Website may contain links to third-party websites or resources. These links are provided for
                      your convenience only. We have no control over the contents of those sites or resources and accept
                      no responsibility for them or for any loss or damage that may arise from your use of them.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      8. Indemnification
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      You agree to defend, indemnify, and hold harmless Akros Legal, its partners, lawyers, employees,
                      agents, and licensors from and against any claims, liabilities, damages, judgments, awards,
                      losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or
                      your use of the Website.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      9. Privacy
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      Your submission of personal information through the Website is governed by our{" "}
                      <Link href="/privacy" className="text-gold hover:underline font-medium">
                        Privacy Policy
                      </Link>
                      . You consent to all actions we take with respect to your information consistent with our Privacy
                      Policy.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      10. Governing Law & Dispute Resolution
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      10.1. These Terms, their subject matter, and their formation, are governed by the laws of India.
                      You agree that the courts located in Noida/Gautam Buddha Nagar shall have exclusive jurisdiction
                      to settle any dispute or claim arising out of or in connection with these Terms.
                    </p>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      10.2. In the event of any dispute, the parties shall attempt to resolve the matter amicably
                      through mutual discussion. If the dispute remains unresolved for a period of thirty (30) days, it
                      may be referred to arbitration conducted by a single arbitrator in accordance with the Arbitration
                      and Conciliation Act, 1996.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      11. Termination & Modification
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      We may terminate or suspend your access to all or part of the Website immediately, without prior
                      notice or liability, for any reason whatsoever. We reserve the right to modify, suspend, or
                      discontinue the Website at any time without prior notice.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      12. Severability
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-6">
                      If any provision of these Terms is held by a court of competent jurisdiction to be invalid,
                      illegal, or unenforceable, such provision shall be eliminated or limited to the minimum extent
                      such that the remaining provisions continue in full force and effect.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      13. Grievance Officer
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      In compliance with the Information Technology Act, 2000 and the Information Technology
                      (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the name and contact details
                      of the Grievance Officer are provided below:
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
                      The Grievance Officer shall redress the complaint within one month from the date of receipt.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-10 flex items-center gap-3">
                      <span className="w-1 h-8 bg-gold rounded-full" />
                      14. Contact Information
                    </h2>
                    <p className="text-foreground/85 leading-relaxed mb-4">
                      For any questions about these Terms, please contact us at:
                    </p>
                    <div className="bg-gradient-to-br from-ivory to-secondary/50 border border-border/50 rounded-xl p-5 mb-6">
                      <p className="text-foreground font-semibold">Akros Legal</p>
                      <p className="text-foreground">A-23, Fourth Floor, Sector 16, Gautam Buddha Nagar, Noida</p>
                      <p className="text-foreground">Email: akroslegal@gmail.com</p>
                      <p className="text-foreground">Phone: 8588061334, 9875596089</p>
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
