import { readFileSync } from "node:fs";
import { join } from "node:path";

const embedHtml = readFileSync(join(process.cwd(), "public", "flodesk-embed.html"), "utf8");

export function CTAForm() {
  return (
    <section id="consultation-form" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-brand-200/80">Book the Call</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              One-to-One Consultation
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg">
              Receive a personalized discussion focused on your business challenges and opportunities.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
                  Customized Strategy for Your Business
                </p>
                <p className="mt-3 text-base leading-7 text-white/76">
                  Get an AI-powered marketing plan designed around your current situation and business goals.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
                  What you should have ready
                </p>
                <ul className="mt-3 space-y-3 text-base leading-7 text-white/76">
                  <li>Your website or Facebook page</li>
                  <li>Your main product or service</li>
                  <li>Your biggest marketing challenge</li>
                  <li>Your goal for the next 90 days</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-4 sm:p-6 lg:p-8">
            <div
              className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white"
              dangerouslySetInnerHTML={{ __html: embedHtml }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
