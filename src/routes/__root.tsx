import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Instagram, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/shivani-logo.jpg";
import { ADDRESS, DIRECTIONS, INSTAGRAM, PHONE, whatsappUrl } from "@/lib/jewellery";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shivani Jewellers | Meerut" },
      { name: "description", content: "Explore jewellery at Shivani Jewellers in Meerut." },
      { property: "og:title", content: "Shivani Jewellers | Meerut" },
      { property: "og:description", content: "Explore jewellery at Shivani Jewellers in Meerut." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-deep px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[0.15em] text-deep-foreground sm:text-xs">A tradition of beauty since 1996 <span className="mx-2 text-gold">✦</span> Meerut, India</div>
      <header className="relative z-50 border-b border-border bg-background">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 md:h-[92px] md:px-10 lg:px-16">
          <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Shivani Jewellers home" className="flex shrink-0 items-center gap-3">
            <img src={logo} alt="Shivani Jewellers logo" className="h-[56px] w-[56px] object-cover md:h-[68px] md:w-[68px]" />
            <span className="flex flex-col"><span className="font-display text-[23px] font-semibold leading-none text-primary md:text-[29px]">Shivani</span><span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-accent md:text-[10px]">Jewellers</span></span>
          </Link>
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
            <Link to="/" activeProps={{ className: "text-accent" }} className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground hover:text-accent">Home</Link>
            <Link to="/collection" activeProps={{ className: "text-accent" }} className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground hover:text-accent">The Collection</Link>
            <Link to="/visit" activeProps={{ className: "text-accent" }} className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground hover:text-accent">Visit Us</Link>
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary hover:text-accent"><Instagram size={19} /></a>
            <Button variant="luxury" size="tall" asChild><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> Enquire Now</a></Button>
          </div>
          <Button variant="iconQuiet" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</Button>
        </div>
        {menuOpen && <nav className="absolute left-0 right-0 top-full flex flex-col gap-0 border-b border-border bg-background px-5 py-4 shadow-lg lg:hidden" aria-label="Mobile navigation">
          <Link to="/" onClick={() => setMenuOpen(false)} className="border-b border-border py-4 text-sm uppercase tracking-[0.13em]">Home</Link>
          <Link to="/collection" onClick={() => setMenuOpen(false)} className="border-b border-border py-4 text-sm uppercase tracking-[0.13em]">The Collection</Link>
          <Link to="/visit" onClick={() => setMenuOpen(false)} className="border-b border-border py-4 text-sm uppercase tracking-[0.13em]">Visit Us</Link>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="py-4 text-sm uppercase tracking-[0.13em]">WhatsApp Enquiry</a>
        </nav>}
      </header>
      <Outlet />
      <footer className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 md:grid-cols-3 md:px-10 md:py-20 lg:px-16">
          <div><img src={logo} alt="Shivani Jewellers" className="h-20 w-20 object-cover" /><p className="mt-5 max-w-xs font-display text-2xl leading-snug">Jewellery to cherish, memories to keep.</p><p className="mt-3 text-xs tracking-[0.15em] text-gold">EST. 1996 · MEERUT</p></div>
          <div><h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</h2><div className="mt-6 flex flex-col items-start gap-4 text-sm"><Link to="/" className="hover:text-gold">Home</Link><Link to="/collection" className="hover:text-gold">The Collection</Link><Link to="/visit" className="hover:text-gold">Visit Us</Link><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram</a></div></div>
          <div><h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get in touch</h2><div className="mt-6 flex flex-col items-start gap-4 text-sm leading-relaxed"><a href={`tel:+91${PHONE}`} className="flex items-center gap-3 hover:text-gold"><Phone size={16} /> +91 {PHONE}</a><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold"><MessageCircle size={16} /> Chat on WhatsApp</a><a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="flex max-w-xs items-start gap-3 hover:text-gold"><MapPin size={17} className="mt-1 shrink-0" /> {ADDRESS}</a><p className="text-deep-foreground/70">Tuesday – Sunday, 10:00 AM – 8:00 PM<br />Closed on Monday</p></div></div>
        </div>
        <div className="border-t border-deep-foreground/20 px-5 py-5 text-center text-xs text-deep-foreground/60">© {new Date().getFullYear()} Shivani Jewellers. All rights reserved.</div>
      </footer>
    </QueryClientProvider>
  );
}
