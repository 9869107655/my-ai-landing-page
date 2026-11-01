import type { ReactNode } from "react";
export function Arrow({ className = "" }: { className?: string }) { return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10.5 4.5 16 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
export function Check() { return <svg className="h-5 w-5 shrink-0 text-teal-700" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4 10 3.7 3.7L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
export function Icon({ children }: { children: ReactNode }) { return <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-teal-700">{children}</span>; }
