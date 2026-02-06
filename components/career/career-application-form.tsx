"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, CheckCircle2, X } from "lucide-react"

const modes = ["Full-time Position", "Internship"]
const locations = ["Noida, India", "Remote", "Hybrid"]
const genders = ["Male", "Female", "Other", "Prefer not to say"]
const interestAreas = [
  "Civil Litigation",
  "Criminal Defense",
  "Corporate Law",
  "Real Estate",
  "Intellectual Property",
  "Dispute Resolution",
  "Tax Law",
  "Family Law",
  "Multiple Areas",
]

interface FileInfo {
  name: string
  size: number
}

export function CareerApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [cvFile, setCvFile] = useState<FileInfo | null>(null)
  const [coverLetterFile, setCoverLetterFile] = useState<FileInfo | null>(null)
  const [researchFile, setResearchFile] = useState<FileInfo | null>(null)

  const cvInputRef = useRef<HTMLInputElement>(null)
  const coverLetterInputRef = useRef<HTMLInputElement>(null)
  const researchInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<FileInfo | null>>,
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload PDF, DOC, or DOCX files only")
        return
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB")
        return
      }
      setFile({ name: file.name, size: file.size })
    }
  }

  const removeFile = (
    setFile: React.Dispatch<React.SetStateAction<FileInfo | null>>,
    inputRef: React.RefObject<HTMLInputElement | null>,
  ) => {
    setFile(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20" id="apply">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-primary/30 rounded-lg p-12 text-center">
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Application Submitted Successfully</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest in joining Akros Legal. We have received your application and will review it
              carefully. You can expect to hear from us within 2-3 weeks regarding the next steps.
            </p>
            <p className="text-sm text-muted-foreground">
              If you have any questions, please contact us at{" "}
              <a href="mailto:akroslegal@gmail.com" className="text-primary hover:underline">
                akroslegal@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20" id="apply">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Apply Now</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Application Form</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete the form below to submit your application. All fields marked with * are required.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8">
          {/* Basic Information */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Basic Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="mode" className="text-foreground">
                  Mode *
                </Label>
                <Select required>
                  <SelectTrigger id="mode" className="mt-2 bg-input border-border text-foreground">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {modes.map((mode) => (
                      <SelectItem key={mode} value={mode}>
                        {mode}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location" className="text-foreground">
                  Preferred Location *
                </Label>
                <Select required>
                  <SelectTrigger id="location" className="mt-2 bg-input border-border text-foreground">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Personal Details
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-foreground">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  required
                  placeholder="Enter your full name"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Label htmlFor="dob" className="text-foreground">
                  Date of Birth *
                </Label>
                <Input id="dob" type="date" required className="mt-2 bg-input border-border text-foreground" />
              </div>
              <div>
                <Label htmlFor="gender" className="text-foreground">
                  Gender *
                </Label>
                <Select required>
                  <SelectTrigger id="gender" className="mt-2 bg-input border-border text-foreground">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {genders.map((gender) => (
                      <SelectItem key={gender} value={gender}>
                        {gender}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Label htmlFor="nationality" className="text-foreground">
                  Nationality *
                </Label>
                <Input
                  id="nationality"
                  required
                  placeholder="e.g., Indian"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="currentAddress" className="text-foreground">
                  Current Address *
                </Label>
                <Textarea
                  id="currentAddress"
                  required
                  placeholder="Enter your current address"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                  rows={2}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="permanentAddress" className="text-foreground">
                  Permanent Address
                </Label>
                <Textarea
                  id="permanentAddress"
                  placeholder="Enter your permanent address (if different)"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Educational Background */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Educational Background
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="institution" className="text-foreground">
                  Institution/University/College *
                </Label>
                <Input
                  id="institution"
                  required
                  placeholder="Enter your institution name"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Label htmlFor="course" className="text-foreground">
                  Course *
                </Label>
                <Input
                  id="course"
                  required
                  placeholder="e.g., LLB, LLM"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Label htmlFor="yearOfStudy" className="text-foreground">
                  Year of Study / Graduation Year *
                </Label>
                <Input
                  id="yearOfStudy"
                  required
                  placeholder="e.g., 3rd Year or 2023"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Label htmlFor="cgpa" className="text-foreground">
                  CGPA / Percentage *
                </Label>
                <Input
                  id="cgpa"
                  required
                  placeholder="e.g., 8.5 CGPA or 85%"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="extracurricular" className="text-foreground">
                  Extra Curricular Activities
                </Label>
                <Textarea
                  id="extracurricular"
                  placeholder="Moot courts, debates, publications, etc."
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Assessment Questions */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Assessment Questions
            </h3>
            <div className="space-y-6">
              <div>
                <Label htmlFor="previousIntern" className="text-foreground">
                  Have you interned at a law firm before? *
                </Label>
                <Select required>
                  <SelectTrigger id="previousIntern" className="mt-2 bg-input border-border text-foreground">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="internshipFrom" className="text-foreground">
                    Preferred Period of Internship - From *
                  </Label>
                  <Input
                    id="internshipFrom"
                    type="date"
                    required
                    className="mt-2 bg-input border-border text-foreground"
                  />
                </div>
                <div>
                  <Label htmlFor="internshipTo" className="text-foreground">
                    Preferred Period of Internship - To *
                  </Label>
                  <Input
                    id="internshipTo"
                    type="date"
                    required
                    className="mt-2 bg-input border-border text-foreground"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="interestArea" className="text-foreground">
                  Areas of Interest *
                </Label>
                <Select required>
                  <SelectTrigger id="interestArea" className="mt-2 bg-input border-border text-foreground">
                    <SelectValue placeholder="Select your area of interest" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {interestAreas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="whyAkros" className="text-foreground">
                  Why would you like to intern at Akros Legal? *
                </Label>
                <Textarea
                  id="whyAkros"
                  required
                  placeholder="Tell us why you're interested in joining Akros Legal..."
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Attachments */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              Attachments
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Upload PDF, DOC, or DOCX files (max 5MB each)</p>
            <div className="space-y-4">
              {/* CV Upload */}
              <div>
                <Label className="text-foreground">Curriculum Vitae (CV) *</Label>
                <div className="mt-2">
                  <input
                    ref={cvInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                    onChange={(e) => handleFileChange(e, setCvFile)}
                  />
                  {cvFile ? (
                    <div className="flex items-center justify-between bg-input border border-border rounded-md p-3">
                      <span className="text-sm text-foreground truncate">{cvFile.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(setCvFile, cvInputRef)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => cvInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 bg-input border border-dashed border-border rounded-md p-4 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      <Upload className="h-5 w-5" />
                      <span>Click to upload CV</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Cover Letter Upload */}
              <div>
                <Label className="text-foreground">Cover Letter</Label>
                <div className="mt-2">
                  <input
                    ref={coverLetterInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, setCoverLetterFile)}
                  />
                  {coverLetterFile ? (
                    <div className="flex items-center justify-between bg-input border border-border rounded-md p-3">
                      <span className="text-sm text-foreground truncate">{coverLetterFile.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(setCoverLetterFile, coverLetterInputRef)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => coverLetterInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 bg-input border border-dashed border-border rounded-md p-4 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      <Upload className="h-5 w-5" />
                      <span>Click to upload Cover Letter</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Research Paper Upload */}
              <div>
                <Label className="text-foreground">Research Paper / Articles / Blogs</Label>
                <div className="mt-2">
                  <input
                    ref={researchInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, setResearchFile)}
                  />
                  {researchFile ? (
                    <div className="flex items-center justify-between bg-input border border-border rounded-md p-3">
                      <span className="text-sm text-foreground truncate">{researchFile.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(setResearchFile, researchInputRef)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => researchInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 bg-input border border-dashed border-border rounded-md p-4 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      <Upload className="h-5 w-5" />
                      <span>Click to upload Research Paper / Articles</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              References
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="refName" className="text-foreground">
                  Reference Name
                </Label>
                <Input
                  id="refName"
                  placeholder="Name"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Label htmlFor="refEmail" className="text-foreground">
                  Reference Email
                </Label>
                <Input
                  id="refEmail"
                  type="email"
                  placeholder="Email"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Label htmlFor="refPhone" className="text-foreground">
                  Reference Phone
                </Label>
                <Input
                  id="refPhone"
                  type="tel"
                  placeholder="Phone"
                  className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-border">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3"
              size="lg"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </Button>
            <p className="text-sm text-muted-foreground text-center mt-4">
              By submitting this form, you agree to our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
