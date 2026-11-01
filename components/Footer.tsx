import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return <footer className="border-t border-slate-800 bg-slate-950 pb-20 text-slate-200 sm:pb-0">
    <div className="container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
      <div><BrandMark light /><p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">Practical AI-powered marketing for ambitious small and medium businesses.</p></div>
      <div><p className="text-sm font-bold text-white">Explore</p><div className="mt-3 grid gap-2 text-sm text-slate-400">{[["About Me","/about"],["Services","/services"],["Blog","/blog"],["Contact","/contact"]].map(([name,href])=><Link className="hover:text-white" href={href} key={href}>{name}</Link>)}</div></div>
      <div><p className="text-sm font-bold text-white">Connect</p><div className="mt-3 grid gap-2 text-sm text-slate-400"><a className="hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a className="hover:text-white" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a><a className="hover:text-white" href={siteConfig.linkedin}>LinkedIn</a><a className="hover:text-white" href={siteConfig.instagram}>Instagram</a></div></div>
      <div><p className="text-sm font-bold text-white">Based in</p><p className="mt-3 text-sm text-slate-400">{siteConfig.location}</p></div>
    </div>
    <div className="border-t border-slate-800"><div className="container flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Digital Binam. All rights reserved.</span><span>Built for meaningful growth.</span></div></div>
  </footer>;
}
