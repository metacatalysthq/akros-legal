"use client"

import { Briefcase, GraduationCap, Clock, MapPin } from "lucide-react"

const openings = [
  {
    title: "Legal Associates",
    type: "Full-time",
    location: "Noida, India",
    description:
      "We are seeking talented legal associates to join our growing team. Ideal candidates will have strong academic credentials, excellent research and drafting skills, and a commitment to client service.",
    requirements: [
      "LLB/LLM from recognized university",
      "0-5 years of relevant experience",
      "Strong research and analytical skills",
      "Excellent written and oral communication",
      "Proficiency in legal drafting",
    ],
  },
  {
    title: "Internship Program",
    type: "Internship",
    location: "Noida, India",
    description:
      "Our internship program offers law students the opportunity to gain practical experience in a professional law firm environment. Interns work closely with senior lawyers on real matters.",
    requirements: [
      "Currently pursuing LLB/LLM",
      "Strong academic record",
      "Excellent research abilities",
      "Good communication skills",
      "Minimum 4-week commitment",
    ],
  },
]

export function CareerOpenings() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Current Opportunities
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Open Roles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our current openings and find the right opportunity for your career.
          </p>
        </div>

        {/* Openings */}
        <div className="grid md:grid-cols-2 gap-8">
          {openings.map((opening) => (
            <div
              key={opening.title}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {opening.type === "Full-time" ? (
                    <Briefcase className="h-6 w-6 text-primary" />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  )}
                  <h3 className="font-serif text-xl font-bold text-foreground">{opening.title}</h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {opening.type}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {opening.location}
                </span>
              </div>

              <p className="text-muted-foreground mb-4">{opening.description}</p>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                <ul className="space-y-1">
                  {opening.requirements.map((req, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
