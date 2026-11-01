import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://example.com"; return ["","/about","/services","/blog","/contact"].map(url=>({url:`${base}${url}`,lastModified:new Date()})).concat(posts.map(p=>({url:`${base}/blog/${p.slug}`,lastModified:new Date()}))); }
