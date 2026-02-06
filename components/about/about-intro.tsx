"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"

export function AboutIntro() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-ivory/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/elegant-law-library-books-warm-lighting-wooden-she.jpg"
                  alt="Law firm office library"
                  width={700}
                  height={500}
                  className="object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/20 rounded-xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/10 rounded-xl -z-10" />
            </div>
          </ScrollAnimation>

          {/* Content */}
          <div>
            <ScrollAnimation>
              <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-4">
                <span className="w-8 h-0.5 bg-gold rounded-full" />
                Our Story
              </span>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                The Pinnacle of Legal Excellence
              </h2>
            </ScrollAnimation>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <ScrollAnimation delay={200}>
                <p>
                  The name <strong className="text-foreground">&quot;AKROS&quot;</strong> is derived from the Greek word
                  meaning &quot;pinnacle&quot; or &quot;summit.&quot; Our firm embodies this philosophy, representing
                  the highest point in legal advocacy and the peak of professional excellence.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <p>
                  In an era of rapid regulatory shifts and intricate financial landscapes, legal challenges are no
                  longer confined to the courtroom; they permeate every commercial transaction, professional engagement,
                  and corporate decision. At AKROS LEGAL, we recognize that modern disputes require more than a
                  defense—they require an ascent to a higher strategic ground.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={400}>
                <p>
                  As laws evolve and complexities deepen, from pre-litigation risk assessment to definitive advocacy
                  before the Supreme Court, High Courts, and specialized Tribunals, our focus remains steadfast:
                  protecting our clients&apos; interests with the intellectual rigor that our name demands.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
