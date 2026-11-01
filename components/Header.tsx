"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "./ButtonLink";
import { BrandMark } from "./BrandMark";
const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About Me" }, { href: "/services", label: "Services" }, { href: "/blog", label: "Blog" }, { href: "/contact", label: "Contact" }];
export function Header() {
  const [open, setOpen] = useState(false); const path = usePathname();
  return <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f8fafc]/95 backdrop-blur"><a href="#main" className="skip-link">Skip to content</a><div className="container flex items-center justify-between gap-4 py-3"><BrandMark /><nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">{links.map(l => <Link key={l.href} className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${path === l.href ? "bg-cyan-50 text-teal-800" : "text-slate-600 hover:text-slate-950"}`} href={l.href}>{l.label}</Link>)}</nav><div className="hidden sm:block"><ButtonLink>Book a Free Consultation</ButtonLink></div><button className="rounded-lg p-2 text-slate-800 lg:hidden" aria-label="Toggle navigation menu" aria-expanded={open} onClick={() => setOpen(!open)}><span className="block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" /></button></div>{open && <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden" aria-label="Mobile navigation"><div className="container grid gap-1">{links.map(l => <Link key={l.href} onClick={() => setOpen(false)} className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${path === l.href ? "bg-cyan-50 text-teal-800" : "text-slate-700"}`} href={l.href}>{l.label}</Link>)}<ButtonLink className="mt-2 w-full">Book a Free Consultation</ButtonLink></div></nav>}</header>;
}
