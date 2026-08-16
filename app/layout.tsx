import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
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
      <head>
        <link rel="preconnect" href="https://connect.facebook.net" />
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1639044011078818');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${sora.variable} [font-family:var(--font-sora)] antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1639044011078818&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
