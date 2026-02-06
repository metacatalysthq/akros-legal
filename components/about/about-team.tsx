"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const founders = [
  {
    name: "Adv. Achint Kumar",
    role: "Founder",
    image: "", // Kept original image path as placeholder or correct one
    expertise: "[Civil-Constitutional- Matrimonial Expertise]",
    description: `“The practice of law, in my view, is ultimately a responsibility—towards the institution of justice, towards the client, and towards the integrity of one’s own work. Akros Legal was established with this understanding at its core.

My professional experience across civil, criminal, and constitutional litigation—before the Supreme Court of India, High Courts, and statutory tribunals—has underscored the importance of preparation, strategic clarity, and respect for process. Matters involving complex commercial disputes, financial institutions, builder-buyer frameworks, criminal proceedings, and sensitive personal conflicts have consistently reinforced that effective legal representation is shaped as much by analysis and foresight as by advocacy.

Akros Legal was conceived to reflect these lessons in practice. The firm approaches legal issues through structured evaluation, careful risk assessment, and considered strategy, whether at the pre-litigation stage or in contested proceedings. Particular emphasis is placed on understanding the broader legal and regulatory context in which disputes arise, so that advice and representation remain both precise and practical.

As a first-generation practitioner, my professional journey has been shaped by close engagement with the law, the courts, and the practical realities faced by clients. This experience has reinforced the importance of attention to detail, consistency in approach, and respect for process. These values continue to inform the way the firm functions and the standards it seeks to uphold.

Akros Legal is envisioned as a firm that balances tradition with modernity—grounded in legal rigor, yet responsive to the evolving needs of clients and institutions. The emphasis remains on thoughtful counsel, well-prepared advocacy, and professional conduct that reflects credibility and trust.

I remain committed to nurturing a practice that grows steadily, operates responsibly, and contributes meaningfully to the legal profession.”`
  },
  {
    name: "Adv. Lisha Sharma",
    role: "Co-Founder",
    image: "",
    expertise: "[Civil-Corporate-Commercial Expertise]",
    description: `“I have always believed that law is not merely about resolving disputes—it is about understanding value, direction, and timing. My journey through insolvency and bankruptcy matters, corporate arrangements, commercial recoveries, and high-stake negotiations has taught me that meaningful outcomes emerge when legal insight is combined with commercial clarity and the courage to choose the right path.

At Akros Legal, my vision is to help build a firm that does not react to problems, but anticipates them. I focus on identifying the core of every issue, mapping the possible routes forward, and guiding clients through decisions that protect value and create stability. For me, growth is not accidental—it is the result of discipline, preparation, and the ability to see beyond the immediate dispute.

As a co-founder, I am driven by the ambition to shape Akros Legal into a firm that stands for sharp thinking, practical wisdom, and fearless execution. The goal is not just to grow, but to build something enduring—an institution trusted for its judgment, resilience, and ability to navigate complexity with confidence.”`
  },
]

const affiliates = [
  { name: "Deepender Singh", area: "Land Acquisition- Mining Law- Environmental law Expertise" },
  { name: "Gourav Dutta", area: "Criminal-Quasi Criminal Expertise" },
  { name: "Sreejan Sahu", area: "Civil-Constitutional-Criminal" },
  { name: "Soumoli Mukherjee", area: "Civil-Recovery Expertise" },
]

const associates = [
  {
    name: "Legal Associate",
    role: "Associate",
    description: "Experienced in litigation and corporate advisory",
  },
  {
    name: "Legal Associate",
    role: "Associate",
    description: "Specializing in dispute resolution and compliance",
  },
]

export function AboutTeam() {
  return (
    <section className="py-24 bg-gradient-to-b from-ivory/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Our Team
              <span className="w-8 h-0.5 bg-gold rounded-full" />
            </span>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Meet Our Legal Professionals
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our team combines decades of legal experience with fresh perspectives, ensuring comprehensive and
              innovative legal solutions.
            </p>
          </ScrollAnimation>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {founders.map((founder, index) => (
            <ScrollAnimation key={founder.name} delay={index * 150}>
              <div className="group bg-card border border-border/50 rounded-xl overflow-hidden hover:border-gold/30 hover:shadow-xl transition-all duration-500 card-hover h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                     <span className="inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10">
                        {founder.expertise}
                     </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col grow">
                  <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-3 w-fit">
                    {founder.role}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{founder.name}</h3>
                    <div className="mb-6 relative">
                    <span className="text-4xl text-gold/20 absolute -top-2 -left-2 font-serif">“</span>
                    <p className="text-muted-foreground text-base leading-relaxed italic relative z-10 pl-4 whitespace-pre-wrap">{founder.description}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Professional Affiliates */}
        <div className="mb-16">
            <div className="text-center mb-10">
              <ScrollAnimation>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Professional Affiliates
                </h3>
                <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
              </ScrollAnimation>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {affiliates.map((affiliate, index) => (
                    <ScrollAnimation key={index} delay={index * 100}>
                        <div className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-gold/30 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-center">
                            <h4 className="font-semibold text-lg text-foreground mb-2">{affiliate.name}</h4>
                            <p className="text-sm text-gold font-medium">{affiliate.area}</p>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </div>

        {/* Associates */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {associates.map((associate, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                  <span className="text-gold font-serif text-2xl font-bold">{associate.name.charAt(0)}</span>
                </div>
                <div className="text-gold text-sm font-medium mb-1">{associate.role}</div>
                <h3 className="font-semibold text-foreground mb-2">{associate.name}</h3>
                <p className="text-muted-foreground text-sm">{associate.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation className="text-center">
          <p className="text-muted-foreground mb-4 text-lg">Interested in joining our team of legal professionals?</p>
          <Button
            asChild
            className="h-12 px-6 bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-dark hover:to-gold shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Link href="/career">
              View Career Opportunities
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}
