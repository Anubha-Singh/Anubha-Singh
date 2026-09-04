import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg tracking-tight text-ink">
          Anubha Singh
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/" hash="work" className="transition-colors hover:text-primary">
            Work
          </Link>
          <Link to="/" hash="experience" className="transition-colors hover:text-primary">
            Experience
          </Link>
          <Link to="/" hash="contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="rule-top mt-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-2 text-3xl text-ink">Let's talk product systems.</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anubha Singh · Product Manager
        </p>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
