import Link from "next/link";

export function BrandMark({ light = false }: { light?: boolean }) {
  return <Link href="/" className="group flex items-center gap-2.5" aria-label="Digital Binam home">
    <svg className="h-10 w-10 shrink-0" viewBox="0 0 40 40" role="img" aria-label="Digital Binam logo">
      <rect x="1" y="1" width="38" height="38" rx="11" fill={light ? "#e0f7fa" : "#102033"} />
      <path d="M11 10h7.8c5.7 0 9.2 3.8 9.2 10s-3.5 10-9.2 10H11V10Zm5.2 4.3v11.4h2.3c2.8 0 4.4-2.1 4.4-5.7s-1.6-5.7-4.4-5.7h-2.3Z" fill={light ? "#102033" : "#8de5f0"} />
      <circle cx="29" cy="11" r="3" fill="#e89450" />
    </svg>
    <span className={`font-bold tracking-tight ${light ? "text-white" : "text-slate-900"}`}><span className="block text-sm leading-4">Digital</span><span className={`block text-base leading-4 ${light ? "text-cyan-200" : "text-teal-700"}`}>Binam</span></span>
  </Link>;
}
