import type { Metadata } from "next"
import { TermsClient } from "./terms-client"

export const metadata: Metadata = {
  title: "Terms & Conditions | Akros Legal",
  description:
    "Terms and Conditions of Use for Akros Legal website. Please read these terms carefully before using our website.",
}

export default function TermsPage() {
  return <TermsClient />
}
