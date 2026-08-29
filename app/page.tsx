import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { Urgency } from "@/components/Urgency";
import { CTAForm } from "@/components/CTAForm";

export const metadata: Metadata = {
  title: "Get More Customers With AI",
  description:
    "We'll analyze your current marketing, identify what's stopping you from getting consistent customers, and show you 3 practical ways AI can help grow your business.",
  openGraph: {
    title: "Get More Customers With AI",
    description:
      "We'll analyze your current marketing, identify what's stopping you from getting consistent customers, and show you 3 practical ways AI can help grow your business."
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Benefits />
      <Process />
      <Urgency />
      <CTAForm />
    </main>
  );
}
