import type { MetadataRoute } from "next";
import { shingles } from "@/data/site";
import { works } from "@/data/works";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://jshingle-coberturas.petterson-021219.chatgpt.site"; return ["", "/obras", "/telhas", "/privacidade", ...works.map((work) => `/obras/${work.slug}`), ...shingles.map((item) => `/telhas/${item.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
