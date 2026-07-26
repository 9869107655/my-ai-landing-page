const benefits = [
  "Discover why your current marketing isn't delivering consistent results.",
  "Identify opportunities to attract more qualified leads.",
  "Receive a customized AI marketing strategy for your business.",
  "Learn practical next steps you can take to improve your marketing.",
  "Gain a clearer direction for growing your business online."
];

export function Benefits() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-brand-200/80">How You Benefit</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What you get from this consultation
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="glass-panel rounded-3xl p-6 shadow-glow transition duration-300 hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-300/10 text-lg font-semibold text-brand-200">
                0{index + 1}
              </div>
              <p className="mt-5 text-base leading-7 text-white/80">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
