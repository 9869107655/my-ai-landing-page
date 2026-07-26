const steps = [
  {
    title: "Step 1",
    body: "Book your free consultation by completing the short form."
  },
  {
    title: "Step 2",
    body: "We'll review your business, current marketing, and growth goals during a one-to-one consultation."
  },
  {
    title: "Step 3",
    body: "Receive a customized AI marketing plan with practical recommendations tailored to your business."
  }
];

export function Process() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-brand-200/80">Consultation Process</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simple, clear, and focused on your business
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="glass-panel rounded-3xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-300/12 text-lg font-semibold text-brand-200">
                  {index + 1}
                </div>
                <p className="text-lg font-semibold text-white">{step.title}</p>
              </div>
              <p className="mt-5 text-base leading-7 text-white/76">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
