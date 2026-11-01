export function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow?: string; title: string; text?: string; centered?: boolean }) {
  return <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{title}</h2>{text && <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>}
  </div>;
}
