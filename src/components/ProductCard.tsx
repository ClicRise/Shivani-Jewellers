import { useState } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Product, whatsappUrl } from "@/lib/jewellery";

export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="group min-w-0">
        <Button variant="imageTrigger" size="plain" type="button" className="relative aspect-[4/5] w-full" onClick={() => setOpen(true)} aria-label={`View ${product.name}`}>
          <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
          <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-background text-foreground opacity-0 transition-opacity group-hover:opacity-100 max-md:opacity-100"><ArrowUpRight size={17} /></span>
        </Button>
        <div className="pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{product.category}</p>
          <h3 className="mt-1 font-display text-xl text-foreground md:text-2xl">{product.name}</h3>
          <Button variant="textAction" size="plain" asChild className="mt-3 max-w-full whitespace-normal text-left leading-5"><a href={whatsappUrl(product.name)} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} /> Ask price on WhatsApp <ArrowUpRight size={15} /></a></Button>
        </div>
      </article>
      {open && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-overlay p-4" role="presentation" onClick={() => setOpen(false)}>
        <div className="relative grid max-h-[92vh] w-full max-w-4xl overflow-auto bg-background md:grid-cols-2" role="dialog" aria-modal="true" aria-label={product.name} onClick={(event) => event.stopPropagation()}>
          <img src={product.image} alt={product.name} className="max-h-[55vh] w-full bg-secondary object-contain md:max-h-[80vh] md:h-full" />
          <div className="flex flex-col justify-center p-7 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{product.category}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground">{product.name}</h2>
            <p className="mt-5 leading-7 text-muted-foreground">{product.description}</p>
            <p className="mt-6 text-sm text-muted-foreground">For availability and pricing, speak with us directly.</p>
            <Button variant="luxury" asChild className="mt-8 self-start"><a href={whatsappUrl(product.name)} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> Ask price on WhatsApp <ArrowUpRight size={16} /></a></Button>
          </div>
          <Button variant="iconQuiet" size="icon" aria-label="Close product view" onClick={() => setOpen(false)} className="absolute right-4 top-4"><X size={18} /></Button>
        </div>
      </div>}
    </>
  );
}