import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora"
});

export const metadata: Metadata = {
  title: {
    default: "Digitbisal | Free AI Marketing Consultation",
    template: "%s | Digitbisal"
  },
  description:
    "Book a free AI marketing consultation and receive a customized growth plan for your business.",
  openGraph: {
    title: "Digitbisal | Free AI Marketing Consultation",
    description:
      "Book a free AI marketing consultation and receive a customized growth plan for your business.",
    type: "website",
    siteName: "Digitbisal"
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitbisal | Free AI Marketing Consultation",
    description:
      "Book a free AI marketing consultation and receive a customized growth plan for your business."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} [font-family:var(--font-sora)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
