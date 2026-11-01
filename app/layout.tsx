import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Digital Binam | AI Marketing Expert",
    template: "%s | Digital Binam"
  },
  description:
    "Practical AI-powered digital marketing strategy for small and medium businesses.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Digital Binam | AI Marketing Expert",
    description:
      "Book a free AI marketing consultation and receive a customized growth plan for your business.",
    type: "website",
    siteName: "Digital Binam"
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
