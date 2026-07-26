export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#070707] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
        <div className="grid-lines relative isolate px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-300/12 blur-3xl" />
            <div className="absolute right-[-4rem] top-28 h-80 w-80 rounded-full bg-brand-300/10 blur-3xl" />
            <div className="absolute bottom-[-5rem] left-[-6rem] h-80 w-80 rounded-full bg-brand-300/8 blur-3xl" />

            <svg
              className="absolute inset-x-0 bottom-[-2rem] h-[26rem] w-full opacity-95"
              viewBox="0 0 1400 620"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="gold-line-a" x1="130" y1="500" x2="1250" y2="230" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff4c4" stopOpacity="0.05" />
                  <stop offset="0.35" stopColor="#f7ca4d" stopOpacity="0.6" />
                  <stop offset="0.7" stopColor="#f7ca4d" stopOpacity="0.95" />
                  <stop offset="1" stopColor="#fff4c4" stopOpacity="0.18" />
                </linearGradient>
                <linearGradient id="gold-line-b" x1="120" y1="560" x2="1240" y2="310" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f7ca4d" stopOpacity="0" />
                  <stop offset="0.4" stopColor="#f7ca4d" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#fff4c4" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <path d="M-40 478C136 430 200 332 408 383C562 421 612 508 756 488C938 464 959 286 1118 274C1246 265 1312 315 1450 238" stroke="url(#gold-line-a)" strokeWidth="4" strokeLinecap="round" />
              <path d="M-10 520C170 454 266 361 402 370C548 380 604 529 785 516C976 503 1009 345 1183 324C1272 313 1334 324 1445 285" stroke="url(#gold-line-b)" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M70 548C210 480 285 404 438 409C581 414 635 534 792 534C975 534 1046 371 1218 341C1301 327 1355 349 1450 297" stroke="url(#gold-line-b)" strokeWidth="1.8" strokeLinecap="round" />
            </svg>

            <div className="absolute left-[14%] top-[65%] h-3 w-3 rounded-full bg-brand-200/80 blur-[1px]" />
            <div className="absolute left-[20%] top-[72%] h-1.5 w-1.5 rounded-full bg-brand-100/90" />
            <div className="absolute right-[18%] top-[32%] h-4 w-4 rounded-full border border-brand-100/25" />
            <div className="absolute right-[12%] top-[25%] h-28 w-28 rounded-full border border-brand-100/10" />
          </div>

          <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-200/20 bg-white/5 px-4 py-2 text-sm text-brand-100 shadow-[0_0_0_1px_rgba(255,209,77,0.06)]">
              Free AI Marketing Consultation
            </div>

            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Get Your Free <span className="text-brand-300">AI Marketing Consultation</span> and a Customized Growth Plan for Your Business
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/72 sm:text-lg">
              Discover what's holding your marketing back and receive practical AI-driven recommendations to help you attract more qualified leads and improve your marketing strategy.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              If you're a small or medium business owner struggling to generate consistent customers, this free one-to-one consultation is for you.
            </p>

            <div className="mt-8">
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-200 via-brand-300 to-brand-400 px-8 py-4 text-base font-semibold text-black shadow-[0_18px_50px_rgba(255,209,77,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(255,209,77,0.3)]"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
