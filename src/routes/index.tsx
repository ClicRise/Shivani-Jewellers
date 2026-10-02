import { useCallback, useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Gem, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { DIRECTIONS, products, whatsappUrl } from "@/lib/jewellery";
import hero from "@/assets/jewellery-3.png.asset.json";
import editorial from "@/assets/jewellery-1.png.asset.json";
import ring from "@/assets/jewellery-8.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Shivani Jewellers | Fine Gold Jewellery in Meerut" },
    { name: "description", content: "Discover gold necklaces, earrings and rings at Shivani Jewellers, Meerut. Browse our collection and enquire about each piece on WhatsApp." },
    { property: "og:title", content: "Shivani Jewellers | Fine Gold Jewellery in Meerut" },
    { property: "og:description", content: "Discover beautifully crafted jewellery at Shivani Jewellers in Meerut. Enquire directly on WhatsApp." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Home,
});

function Home() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEnds();
    window.addEventListener("resize", updateEnds);
    return () => window.removeEventListener("resize", updateEnds);
  }, [updateEnds]);

  const scrollCollection = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return <main>
    <section className="relative min-h-[620px] overflow-hidden bg-deep md:min-h-[650px] lg:min-h-[700px]">
      <img src={hero.url} alt="Shivani Jewellers temple peacock gold necklace and matching earrings" className="absolute inset-0 h-full w-full object-cover object-center md:object-[70%_44%]" />
      <div className="hero-shade absolute inset-0" />
      <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] items-end px-5 pb-20 pt-28 md:min-h-[650px] md:items-center md:px-10 md:pb-0 lg:min-h-[700px] lg:px-16">
        <div className="max-w-[670px] text-deep-foreground">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-gold"><span className="h-px w-9 bg-gold" /> An heirloom in every detail</p>
          <h1 className="font-display text-[clamp(4rem,7vw,7.5rem)] font-medium leading-[0.88]">Shivani<br /><span className="italic">Jewellers</span></h1>
          <p className="mt-8 max-w-[420px] text-sm leading-7 text-deep-foreground/85 md:text-base">Timeless pieces for your most treasured moments. Discover the art of adornment, lovingly curated in Meerut since 1996.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button variant="luxury" size="tall" asChild className="bg-background text-primary hover:bg-secondary"><Link to="/collection">Explore Collection <ArrowUpRight size={16} /></Link></Button><Button variant="luxuryOutline" size="tall" asChild className="border-deep-foreground text-deep-foreground hover:bg-background hover:text-primary"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a></Button></div>
        </div>
      </div>
      <div className="absolute bottom-7 right-6 hidden text-[10px] uppercase tracking-[0.22em] text-deep-foreground md:block">01 / 03 &nbsp; — &nbsp; Crafted to be cherished</div>
    </section>

    <section className="border-b border-border bg-background"><div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-0 px-5 py-8 md:grid-cols-3 md:px-10 lg:px-16">
      <div className="flex items-center gap-4 py-4 md:border-r md:border-border md:pr-6"><ShieldCheck className="shrink-0 text-accent" size={26} strokeWidth={1.3} /><div><p className="text-xs font-semibold uppercase tracking-[0.12em]">22K BIS Hallmark</p><p className="mt-1 text-xs text-muted-foreground">Gold jewellery you can trust</p></div></div>
      <div className="flex items-center gap-4 py-4 md:justify-center"><Gem className="shrink-0 text-accent" size={26} strokeWidth={1.3} /><div><p className="text-xs font-semibold uppercase tracking-[0.12em]">Certified Diamonds</p><p className="mt-1 text-xs text-muted-foreground">Brilliance with confidence</p></div></div>
      <div className="flex items-center gap-4 py-4 md:justify-end md:border-l md:border-border md:pl-6"><Sparkles className="shrink-0 text-accent" size={26} strokeWidth={1.3} /><div><p className="text-xs font-semibold uppercase tracking-[0.12em]">92.5 Sterling Silver</p><p className="mt-1 text-xs text-muted-foreground">Beautifully made for you</p></div></div>
    </div></section>

    <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Curated for you</p>
          <h2 className="mt-4 font-display text-5xl leading-none md:text-6xl">The collection</h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">From statement sets to the smallest details, find a piece that feels entirely yours.</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-2">
            <Button variant="iconQuiet" size="icon" aria-label="Previous pieces" disabled={atStart} onClick={() => scrollCollection(-1)}><ChevronLeft size={18} /></Button>
            <Button variant="iconQuiet" size="icon" aria-label="Next pieces" disabled={atEnd} onClick={() => scrollCollection(1)}><ChevronRight size={18} /></Button>
          </div>
          <Button variant="textAction" size="plain" asChild><Link to="/collection">View all jewellery <ArrowRight size={16} /></Link></Button>
        </div>
      </div>
      <div ref={trackRef} onScroll={updateEnds} className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:-mx-10 md:px-10 lg:-mx-16 lg:px-16">
        {products.map(product => (
          <div key={product.id} className="w-[78%] shrink-0 snap-start md:w-[46%] lg:w-[31.5%] xl:w-[23.5%]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>

    <section className="grid min-h-[560px] md:grid-cols-2"><div className="relative min-h-[420px] bg-secondary"><img src={editorial.url} alt="Intricate gold choker set from Shivani Jewellers" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[center_38%]" /></div><div className="flex flex-col justify-center bg-deep px-7 py-20 text-deep-foreground md:px-12 lg:px-24"><span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Since 1996 · Meerut</span><h2 className="mt-6 max-w-lg font-display text-5xl leading-[1.05] md:text-6xl">Every piece tells <span className="italic">a story.</span></h2><p className="mt-6 max-w-md text-sm leading-8 text-deep-foreground/75">At Shivani Jewellers, we believe the pieces you choose become part of the moments you remember. Discover jewellery made to celebrate them all.</p><Button variant="luxuryOutline" asChild className="mt-9 self-start border-gold text-gold hover:bg-gold hover:text-deep"><Link to="/visit">Visit Our Store <ArrowUpRight size={16} /></Link></Button></div></section>

    <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:gap-20 md:px-10 md:py-28 lg:px-16"><div className="order-2 md:order-1"><p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Made for your moments</p><h2 className="mt-5 max-w-md font-display text-5xl leading-[1.05] md:text-6xl">Find the one that <span className="italic">speaks to you.</span></h2><p className="mt-6 max-w-md text-sm leading-8 text-muted-foreground">A little sparkle can say so much. Explore our pieces, ask us anything, and find something worth holding onto.</p><Button variant="luxury" size="tall" asChild className="mt-8"><Link to="/collection">Browse all pieces <ArrowRight size={16} /></Link></Button></div><div className="order-1 aspect-[5/4] overflow-hidden bg-secondary md:order-2"><img src={ring.url} alt="Floral gold ring with green stone" loading="lazy" className="h-full w-full object-cover object-center" /></div></section>

    <section className="border-t border-border bg-secondary px-5 py-20 text-center md:py-24"><MapPin size={28} strokeWidth={1.2} className="mx-auto text-accent" /><p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Come see us in Meerut</p><h2 className="mt-4 font-display text-5xl md:text-6xl">Even better in person.</h2><p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground">Visit us on Mansa Devi Road, Jagriti Vihar. Tuesday to Sunday, 10:00 AM – 8:00 PM.</p><Button variant="luxury" size="tall" asChild className="mt-8"><a href={DIRECTIONS} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={16} /></a></Button></section>
  </main>;
}