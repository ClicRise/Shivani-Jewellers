import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/jewellery";

export const Route = createFileRoute("/collection")({ head: () => ({ meta: [
  { title: "The Collection | Shivani Jewellers Meerut" },
  { name: "description", content: "Browse Shivani Jewellers' gold necklaces, earrings and rings. Ask the price of any piece directly on WhatsApp." },
  { property: "og:title", content: "The Collection | Shivani Jewellers" },
  { property: "og:description", content: "Discover necklaces, earrings and rings from Shivani Jewellers, Meerut." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Collection });

type Filter = "All Pieces" | "Necklaces" | "Rings" | "Earrings";
const filters: Filter[] = ["All Pieces", "Necklaces", "Rings", "Earrings"];

function Collection() {
  const [filter, setFilter] = useState<Filter>("All Pieces");
  const visible = filter === "All Pieces" ? products : products.filter(product => product.category === filter);
  return <main><div className="border-b border-border bg-secondary px-5 py-16 text-center md:py-24"><p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Shivani Jewellers</p><h1 className="mt-4 font-display text-6xl md:text-7xl">The collection</h1><p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground">Thoughtfully chosen pieces for the celebrations, traditions and everyday moments that make life beautiful.</p></div>
    <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 md:py-16 lg:px-16"><div className="mb-10 flex flex-wrap items-center justify-between gap-5 border-b border-border pb-6"><div className="flex flex-wrap gap-3 md:gap-6" role="group" aria-label="Filter jewellery">{filters.map(item => <Button key={item} variant="textAction" size="plain" onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? "border-b border-primary pb-2 text-primary" : "pb-2 text-muted-foreground"}>{item}</Button>)}</div><span className="text-xs text-muted-foreground">{visible.length} {visible.length === 1 ? "piece" : "pieces"}</span></div><div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-7 lg:grid-cols-4">{visible.map(product => <ProductCard key={product.id} product={product} />)}</div></div>
  </main>;
}