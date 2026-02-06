import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { DisclaimerProvider } from "@/components/disclaimer-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Akros Legal | Leading Legal Advisors & Litigation Experts",
  description:
    "Akros Legal Law Offices India - Navigating Complexity with Strategic Precision. Expert legal services in litigation, corporate law, dispute resolution, and more.",
  keywords: [
    "law firm",
    "legal services",
    "litigation",
    "corporate law",
    "India",
    "Akros Legal",
    "lawyers",
    "advocates",
  ],
  authors: [{ name: "Akros Legal" }],
  creator: "Akros Legal",
  publisher: "Akros Legal",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://akroslegal.com",
    siteName: "Akros Legal",
    title: "Akros Legal | Leading Legal Advisors & Litigation Experts",
    description: "Navigating Complexity with Strategic Precision. Expert legal services across India.",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <DisclaimerProvider>{children}</DisclaimerProvider>
        <Analytics />
      </body>
    </html>
  )
}
