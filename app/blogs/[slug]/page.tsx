import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, User, Tag, Share2, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  params: Promise<{ slug: string }>
}

const blogPosts: Record<
  string,
  {
    title: string
    excerpt: string
    author: string
    date: string
    category: string
    image: string
    content: string[]
  }
> = {
  "understanding-ibc-amendments-2025": {
    title: "Understanding the Key IBC Amendments of 2025",
    excerpt:
      "An in-depth analysis of the recent amendments to the Insolvency and Bankruptcy Code and their implications for stakeholders.",
    author: "Adv. Achint Kumar",
    date: "January 5, 2025",
    category: "Bankruptcy & Insolvency",
    image: "legal documents corporate insolvency bankruptcy dark professional",
    content: [
      "The Insolvency and Bankruptcy Code (IBC) has undergone significant amendments in 2025, bringing substantial changes to the corporate insolvency resolution process in India. These amendments address several practical challenges identified over the years of IBC implementation.",
      "One of the key changes relates to the timeline for resolution proceedings. The amendments introduce greater flexibility while maintaining the time-bound nature of the process that has been central to the IBC's success. The changes recognize that complex cases may require additional time while ensuring that delays are minimized.",
      "The amendments also strengthen the framework for cross-border insolvency, aligning Indian law more closely with international best practices. This is particularly relevant as Indian businesses increasingly operate across borders and face insolvency situations involving multiple jurisdictions.",
      "For creditors, the amendments provide clearer guidelines on the treatment of different classes of claims and the distribution waterfall. This addresses some of the litigation that has arisen around these issues in recent years.",
      "Corporate debtors and resolution applicants will also benefit from the clarified provisions regarding the scope and effect of resolution plans, including the treatment of past liabilities and ongoing contracts.",
      "At Akros Legal, we continue to monitor these developments closely and advise our clients on navigating the evolving insolvency landscape. Our team has extensive experience representing stakeholders across the spectrum of IBC proceedings.",
    ],
  },
  "rera-compliance-guide-developers": {
    title: "RERA Compliance: A Complete Guide for Real Estate Developers",
    excerpt:
      "Everything real estate developers need to know about RERA compliance, registration requirements, and avoiding common pitfalls.",
    author: "Adv. Lisha Sharma",
    date: "December 28, 2024",
    category: "Real Estate Law",
    image: "real estate construction building development dark professional",
    content: [
      "The Real Estate (Regulation and Development) Act, 2016 (RERA) has transformed the real estate sector in India, bringing greater transparency and accountability. For developers, understanding and complying with RERA is not just a legal requirement but a business imperative.",
      "Registration is the first and most critical step. All real estate projects above the threshold size must be registered with the respective State RERA authority before any marketing or sales activity can begin. The registration process requires detailed project information, approvals, and financial documentation.",
      "Project accounts are another key compliance area. RERA mandates that 70% of amounts collected from buyers must be deposited in a separate escrow account and used only for construction purposes. This provision ensures that funds are applied to project completion.",
      "Disclosure requirements under RERA are extensive. Developers must provide detailed information about the project, approvals obtained, project timelines, and any modifications. Quarterly updates are mandatory, and any significant changes must be disclosed promptly.",
      "The consequences of non-compliance can be severe, including penalties, imprisonment, and project deregistration. More importantly, non-compliance can trigger litigation from buyers and damage the developer's reputation.",
      "Our real estate practice regularly advises developers on RERA compliance, from initial registration through project completion. We help structure projects, prepare documentation, and address any compliance issues that arise during execution.",
    ],
  },
  "white-collar-crime-defense-strategies": {
    title: "Effective Defense Strategies in White-Collar Crime Cases",
    excerpt:
      "A comprehensive overview of defense strategies, procedural safeguards, and best practices when facing economic offence allegations.",
    author: "Adv. Achint Kumar",
    date: "December 20, 2024",
    category: "Criminal Defense",
    image: "criminal defense lawyer courtroom dark professional",
    content: [
      "White-collar crime cases present unique challenges that require specialized defense strategies. Unlike traditional criminal matters, these cases often involve complex financial transactions, voluminous documentation, and multiple investigating agencies.",
      "Early intervention is critical. The defense strategy should begin from the moment an investigation is suspected, well before any formal charges. This includes preserving relevant documents, advising on interactions with investigating agencies, and assessing exposure.",
      "Understanding the specific offence and the elements that must be proved is fundamental. Many economic offences require proof of mens rea—criminal intent—which can be a viable defense point when transactions were undertaken in good faith or based on professional advice.",
      "Procedural safeguards are important defense tools. From search and seizure requirements to rights during interrogation, ensuring that investigating agencies follow proper procedures can be critical to the defense.",
      "Bail is often the immediate priority. Given the severity of many economic offences, securing bail requires careful preparation, demonstrating that the accused is not a flight risk, will not tamper with evidence, and has roots in the community.",
      "At Akros Legal, our criminal defense practice handles white-collar matters from investigation through trial and appeals. We work closely with forensic accountants and other experts to build comprehensive defense strategies.",
    ],
  },
  "employment-law-remote-work": {
    title: "Employment Law Considerations for Remote Work Policies",
    excerpt:
      "Navigating the legal landscape of remote work arrangements, including policy drafting, compliance requirements, and dispute prevention.",
    author: "Adv. Lisha Sharma",
    date: "December 15, 2024",
    category: "Employment Law",
    image: "remote work office employment professional dark",
    content: [
      "The shift to remote and hybrid work arrangements has created new challenges for employers in India. While labor laws have not yet fully adapted to this new reality, employers must navigate existing regulations while implementing flexible work policies.",
      "Employment contracts should be updated to address remote work arrangements clearly. Key provisions include work location, working hours, expense reimbursement, equipment provision, and data security obligations.",
      "Wage and hour compliance requires attention in the remote work context. Tracking working hours, ensuring compliance with maximum hour limits, and managing overtime become more complex when employees work from home.",
      "Workplace safety obligations extend to home offices. While the extent of employer responsibility is still evolving, employers should at minimum provide guidance on ergonomic setups and maintain communication about any work-related injuries.",
      "Data protection and confidentiality take on new dimensions with remote work. Policies should address secure handling of company data, use of personal devices, and privacy expectations in the home work environment.",
      "Our employment law practice helps employers develop comprehensive remote work policies that balance flexibility with compliance. We also advise on disputes arising from remote work arrangements.",
    ],
  },
  "intellectual-property-digital-age": {
    title: "Protecting Intellectual Property in the Digital Age",
    excerpt:
      "Understanding the challenges and strategies for IP protection in an increasingly digital world, from online infringement to NFTs.",
    author: "Legal Team",
    date: "December 10, 2024",
    category: "Intellectual Property",
    image: "technology digital innovation intellectual property dark",
    content: [
      "The digital transformation has fundamentally changed how intellectual property is created, distributed, and infringed. Traditional IP protection strategies must evolve to address these new realities.",
      "Online infringement has become easier than ever, from counterfeit goods on e-commerce platforms to pirated content streaming. IP owners must implement proactive monitoring and enforcement strategies across digital platforms.",
      "Domain name disputes continue to be relevant as businesses establish their online presence. The UDRP and .IN domain dispute resolution policy provide efficient mechanisms for recovering domain names from cybersquatters.",
      "Social media presents both opportunities and challenges. While platforms provide marketing reach, they also enable rapid copying and sharing of protected content. Understanding platform-specific takedown procedures is essential.",
      "Emerging technologies like NFTs, AI-generated content, and the metaverse create new IP questions. Who owns AI-generated works? How do NFTs intersect with copyright? These questions are still being resolved.",
      "At Akros Legal, our IP practice combines traditional expertise with digital-age strategies. We help clients protect, enforce, and monetize their intellectual property across all platforms and technologies.",
    ],
  },
  "arbitration-vs-litigation": {
    title: "Arbitration vs. Litigation: Choosing the Right Forum",
    excerpt:
      "A practical guide to help businesses decide between arbitration and litigation for dispute resolution, considering factors like cost, time, and enforceability.",
    author: "Adv. Achint Kumar",
    date: "December 5, 2024",
    category: "Dispute Resolution",
    image: "arbitration mediation dispute resolution dark professional",
    content: [
      "Choosing the right forum for dispute resolution is a critical decision that can significantly impact the outcome of a dispute. Both arbitration and litigation have distinct advantages and disadvantages that must be carefully evaluated.",
      "Arbitration offers confidentiality, which can be crucial for disputes involving sensitive business information or reputational concerns. Court proceedings are generally public, with judgments creating precedent and public record.",
      "The choice of decision-maker is a key advantage of arbitration. Parties can select arbitrators with specific industry expertise or legal knowledge relevant to their dispute, whereas judges are assigned by the court system.",
      "Enforceability considerations differ significantly. Domestic court judgments face no cross-border enforcement issues within India, while arbitral awards benefit from the New York Convention for international enforcement.",
      "Cost and time are often cited as advantages of arbitration, but this is not always the case. Complex arbitrations can be expensive due to arbitrator fees and institutional costs, and the time advantage varies depending on the jurisdiction and complexity.",
      "At Akros Legal, we regularly advise clients on forum selection and represent them in both arbitration and litigation. Our experience across both forums allows us to provide informed guidance on the best approach for each specific dispute.",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return { title: "Blog Post Not Found | Akros Legal" }
  }

  return {
    title: `${post.title} | Akros Legal Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-end overflow-hidden pt-20">
          <div
            className="absolute inset-0 -z-20"
            style={{
              backgroundImage: `url(/placeholder.svg?height=600&width=1200&query=${encodeURIComponent(post.image)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 -z-10" />

          <div className="max-w-4xl mx-auto px-4 py-12 w-full">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium">{post.category}</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-foreground/90 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Share2 className="h-5 w-5" />
                  <span>Share this article:</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 bg-card border border-border rounded-md hover:border-primary transition-colors">
                    <Linkedin className="h-5 w-5 text-foreground" />
                  </button>
                  <button className="p-2 bg-card border border-border rounded-md hover:border-primary transition-colors">
                    <Twitter className="h-5 w-5 text-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-primary/10 border border-primary/30 rounded-lg p-8 text-center">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Need Legal Assistance?</h3>
              <p className="text-muted-foreground mb-6">
                Our team of experienced legal professionals is ready to help you with your {post.category.toLowerCase()}{" "}
                matters.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
