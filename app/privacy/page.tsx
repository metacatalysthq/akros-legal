import type { Metadata } from "next"
import PrivacyClient from "./privacy-client"

export const metadata: Metadata = {
  title: "Privacy Policy | Akros Legal",
  description: "Privacy Policy of Akros Legal. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return <PrivacyClient />
}
