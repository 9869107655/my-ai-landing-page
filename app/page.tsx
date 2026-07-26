import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { Urgency } from "@/components/Urgency";
import { CTAForm } from "@/components/CTAForm";

export const metadata: Metadata = {
  title: "Free AI Marketing Consultation",
  description:
    "Get your free AI marketing consultation and a customized growth plan for your business.",
  openGraph: {
    title: "Free AI Marketing Consultation",
    description:
      "Get your free AI marketing consultation and a customized growth plan for your business."
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
