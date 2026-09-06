import { Link } from "@tanstack/react-router";
import { socialIconMap } from "@/components/SocialIcons";
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

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anubha-singh-310879148/" },
  { label: "GitHub", href: "https://github.com/Anubha-Singh" },
  { label: "Kaggle", href: "https://www.kaggle.com/cerolacia" },
  { label: "Medium", href: "https://medium.com/@anubhabit687" },
  { label: "Email", href: "mailto:anubhabit687@gmail.com" },
  { label: "Phone", href: "tel:+917903762263" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="rule-top mt-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-2 text-3xl text-ink">Let's talk product systems.</h2>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "noreferrer"}
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                aria-label={link.label}
              >
                {socialIconMap[link.label]}
                <span>{link.label}</span>
              </a>
            ))}

          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anubha Singh · Product Professional
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
