import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";
import { SiteShell } from "@/components/SiteShell";
import { posts } from "@/lib/posts";
export const metadata: Metadata = { title: "Blog", description: "Practical ideas about AI, digital marketing, local visibility, and sustainable growth." };
export default function BlogPage() { return <SiteShell><section className="bg-slate-950 py-16 text-white sm:py-24"><div className="container max-w-3xl text-center"><p className="eyebrow text-cyan-300">Practical insights</p><h1 className="mt-4 text-4xl font-bold sm:text-5xl">Marketing ideas you can put to work.</h1><p className="mt-5 text-lg leading-8 text-slate-300">Clear guidance for small business owners navigating AI, digital marketing, and sustainable growth.</p></div></section><section className="section"><div className="container"><BlogIndex posts={posts} /></div></section></SiteShell>; }
