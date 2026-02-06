import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeHero } from "@/components/home/home-hero"
import { HomeAbout } from "@/components/home/home-about"
import { HomePracticeAreas } from "@/components/home/home-practice-areas"
import { HomeWhyChooseUs } from "@/components/home/home-why-choose-us"
import { HomeCTA } from "@/components/home/home-cta"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomePracticeAreas />
        <HomeWhyChooseUs />
        <HomeCTA />
      </main>
      <Footer />
    </>
  )
}
