import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blogs | Akros Legal - Insights Coming Soon",
  description:
    "Our legal insights and analysis section is currently being updated. Check back soon for expert commentary on Indian law and regulatory changes.",
}

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Legal Insights & Updates"
          subtitle="Expert analysis and commentary on legal developments"
        />

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col items-center justify-center text-center py-16 border rounded-2xl bg-card/50">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                   <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Insightful Content Coming Soon
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto text-lg leading-relaxed mb-8">
                  We are currently curating high-value legal analysis and articles to serve you better. Check back soon for our latest updates on key legal developments.
                </p>
                <Link href="/">
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/5 hover:text-primary">
                     Return to Homepage
                  </Button>
                </Link>
             </div>

            {/* Newsletter Signup */}
            {/* <div className="mt-16 bg-secondary/30 rounded-lg p-8 md:p-12 text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Stay Informed</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Subscribe to our newsletter for the latest legal insights, regulatory updates, and expert analysis
                delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
