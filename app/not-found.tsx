import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center pt-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 bg-transparent"
            >
              <Link href="/contact">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
