import Link from "next/link";
import { Arrow } from "./Icons";
import { bookingHref } from "@/lib/site-config";
type Props = { href?: string; children: React.ReactNode; variant?: "primary" | "secondary" | "light"; className?: string };
export function ButtonLink({ href, children, variant = "primary", className = "" }: Props) {
  const styles = { primary: "bg-[#087ea4] text-white hover:bg-[#066987]", secondary: "border border-slate-300 bg-white text-slate-800 hover:border-teal-600 hover:text-teal-800", light: "bg-white text-slate-900 hover:bg-cyan-50" }[variant];
  return <Link href={href ?? bookingHref()} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors ${styles} ${className}`}>{children}<Arrow className="h-4 w-4" /></Link>;
}
