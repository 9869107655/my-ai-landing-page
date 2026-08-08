import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your free AI marketing consultation request has been received."
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-center py-4">
          <img src="/logo.png" alt="Digitbisal logo" className="h-auto w-[150px] sm:w-[190px]" />
        </div>

        <section className="mt-6 glass-panel rounded-[2rem] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-brand-200/80">Submission Received</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Thank You - Your Free AI Marketing Consultation Request Has Been Received
            </h1>
            <p className="mt-5 text-base leading-7 text-white/74 sm:text-lg">
              Your application has been submitted successfully.
            </p>
            <p className="mt-4 text-base leading-7 text-white/74 sm:text-lg">
              We&apos;ve received your details and will review your business before the consultation.
            </p>
            <p className="mt-4 text-base leading-7 text-white/74 sm:text-lg">
              Please watch the short video below before we contact you.
            </p>
          </div>

          <div id="video" className="mx-auto mt-10 max-w-4xl">
            <div className="glass-panel overflow-hidden rounded-[1.75rem]">
              <div className="border-b border-white/10 px-6 py-5 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand-200/80">
                  Watch this short video before your consultation
                </p>
              </div>
              <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
                  <div className="aspect-video overflow-hidden rounded-[1.25rem] border border-white/15 bg-black">
                    <iframe
                      src="https://www.youtube.com/embed/HcsvRDYuMXc"
                      title="YouTube video player"
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-4 text-center text-sm text-white/50">
                    Watch this video before we contact you.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
                      What you&apos;ll learn in this video
                    </p>
                    <ul className="mt-4 space-y-3 text-base leading-7 text-white/76">
                      <li>Why many businesses struggle to get consistent customers online</li>
                      <li>The most common marketing mistakes that waste time and money</li>
                      <li>How AI can help improve lead generation and follow-up</li>
                      <li>What we&apos;ll cover during your free consultation</li>
                    </ul>
                  </div>

                  <a
                    href="https://www.youtube.com/shorts/HcsvRDYuMXc"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-gradient-to-r from-brand-200 via-brand-300 to-brand-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_18px_50px_rgba(255,209,77,0.24)] transition hover:-translate-y-0.5"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">What Happens Next?</p>
              <div className="mt-4 space-y-3 text-base leading-7 text-white/76">
                <p>Step 1: We review your business and current marketing.</p>
                <p>Step 2: We contact you via WhatsApp or email to confirm the consultation time.</p>
                <p>Step 3: You receive a customized AI marketing plan for your business.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">Want Faster Support?</p>
              <p className="mt-4 text-base leading-7 text-white/76">
                If you&apos;d like to speak with us directly or confirm your consultation faster, send us a message on WhatsApp now.
              </p>
              <a
                href="https://wa.me/message/RSFFTNPYPHCBK1"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full bg-gradient-to-r from-brand-200 via-brand-300 to-brand-400 px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">Before You Leave</p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-white/76">
                <li>Your website or Facebook page</li>
                <li>Your main product or service</li>
                <li>Your biggest marketing challenge</li>
                <li>Your goal for the next 90 days</li>
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-7 text-white/74 sm:text-lg">
            We&apos;re excited to help you create a smarter AI-powered marketing strategy for your business.
          </p>
        </section>
      </div>
    </main>
  );
}
